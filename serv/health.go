package serv

import (
	"context"
	"net/http"
)

func health(w http.ResponseWriter, _ *http.Request) {
	conn, err := db.Acquire(context.Background())
	if err != nil {
		errlog.Error().Err(err).Msg("error acquiring connection from pool")
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	ctx, _ := context.WithTimeout(context.Background(), conf.DB.PingTimeout)
	if err := conn.Conn().Ping(ctx); err != nil {
		errlog.Error().Err(err).Msg("error pinging database")
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}
