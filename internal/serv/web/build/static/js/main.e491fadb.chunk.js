(this.webpackJsonpweb = this.webpackJsonpweb || []).push([
  [0],
  {
    222: function (e, t, n) {
      "use strict";
      (function (e) {
        var r = n(3),
          a = n.n(r),
          o = n(25),
          i = n(141);
        n(534);
        const s = window.fetch;
        window.fetch = function () {
          return (
            (arguments[1].credentials = "include"),
            Promise.resolve(s.apply(e, arguments))
          );
        };
        class c extends r.Component {
          render() {
            return a.a.createElement(
              "div",
              null,
              a.a.createElement(
                "header",
                {
                  style: {
                    color: "lightblue",
                    letterSpacing: "0.15rem",
                    paddingTop: "10px",
                    paddingBottom: "0px",
                  },
                },
                a.a.createElement(
                  "div",
                  {
                    style: {
                      textDecoration: "none",
                      margin: "0px",
                      fontSize: "14px",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      marginLeft: "10px",
                    },
                  },
                  "GraphJin"
                )
              ),
              a.a.createElement(
                o.Provider,
                { store: i.store },
                a.a.createElement(i.Playground, {
                  endpoint: "http://localhost:8080/api/v1/graphql",
                  settings:
                    "{ 'general.betaUpdates': true, 'editor.reuseHeaders': true, }",
                })
              )
            );
          }
        }
        t.a = c;
      }.call(this, n(41)));
    },
    257: function (e, t, n) {
      e.exports = n(258);
    },
    258: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(3),
        a = n.n(r),
        o = n(60),
        i = n.n(o),
        s = n(222);
      i.a.render(a.a.createElement(s.a, null), document.getElementById("root"));
    },
    534: function (e, t, n) {},
  },
  [[257, 1, 2]],
]);
//# sourceMappingURL=main.e491fadb.chunk.js.map
