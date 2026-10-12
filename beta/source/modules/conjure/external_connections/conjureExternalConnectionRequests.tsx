// Module ID: 17152
// Function ID: 17153
// Name: conjureExternalConnectionRequests
// Dependencies: [5, 13241, 17153, 2]
// Exports: fetchProjectMcpConnection, formatMcpConnectionExpiry, requestExternalAuthorizeUrl

// Module 17152 (conjureExternalConnectionRequests)
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 13241 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_4, closure_5, connection_type, externalAuthErrorCode;

let obj = function _fetchProjectMcpConnection() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_2;
    let obj8;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let flag;
        let tmp;
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_6;
        let closure_7;
        let expiresAtMs;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp4;
            flag = undefined;
            let obj4 = closure_1;
            if (closure_1 === undefined) {
              obj4 = {};
            }
            flag = obj4.regenerate ?? false;
            tmp = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_6 = undefined;
            closure_7 = undefined;
            expiresAtMs = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c4 = 2;
            c5 = 1;
            const obj6 = { value: obj8.mintWorkerTicket(closure_0), done: false };
            obj8 = closure_131_0(closure_131_1[1]);
            return obj6;
          }
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            tmp = value;
            ticket = tmp.ticket;
            baseUrl = tmp.baseUrl;
            const _URLSearchParams = URLSearchParams;
            const obj9 = { ticket };
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj9);
            const tmp49 = flag;
            if (tmp49) {
              const result = uRLSearchParams.set("regenerate", "1");
            }
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            c4 = 3;
            c5 = 1;
            const obj10 = { value: fetch("" + baseUrl + "/agent/mcp-token?" + uRLSearchParams, { method: "POST" }), done: false };
            return obj10;
          }
        } else if (3 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_6 = value;
            if (closure_6.ok) {
              c4 = 4;
              c5 = 1;
              const obj12 = { value: closure_6.json(), done: false };
              return obj12;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("mcp token failed (" + closure_6.status + ")");
              throw error;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          let sum;
          closure_7 = value;
          if (typeof closure_7.expires_in === "number") {
            const _Date = Date;
            sum = Date.now() + 1000 * closure_7.expires_in;
          } else {
            const _Date2 = Date;
            sum = Date.parse(closure_7.expires_at);
          }
          expiresAtMs = sum;
          obj = { url: closure_7.url, expiresAtMs };
          c5 = 3;
          const obj14 = { value: obj, done: true };
          return obj14;
        }
      } catch (tmp29) {
        c5 = 3;
        throw tmp29;
      }
    }
  });
  return obj(...arguments);
};
obj = function _requestExternalAuthorizeUrl() {
  obj = _asyncToGenerator(async (connection_type, arg1) => {
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      let obj16;
      let obj7;
      let obj8;
      function externalAuthEndpoint(baseUrl, arg1, ticket) {
        obj = { ticket };
        const uRLSearchParams = new URLSearchParams(obj);
        return "" + baseUrl + "/agent/external-auth/" + "authorize-url" + "?" + uRLSearchParams;
      }
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let url;
          let ticket;
          let baseUrl;
          let closure_6;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              connection_type = closure_1;
              closure_1 = undefined;
              url = undefined;
              closure_3 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              closure_6 = undefined;
              c6 = 1;
              c7 = 2;
              c8 = 1;
              const obj4 = { value: obj16.mintWorkerTicket(connection_type), done: false };
              obj16 = ConjureWorkerTickets;
              return obj4;
            }
          } else if (1 === c7) {
            c6 = 0;
            c8 = 3;
            return { value: { type: "error", error: "unavailable" }, done: true };
          } else if (2 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              ticket = closure_3.ticket;
              baseUrl = closure_3.baseUrl;
              const _fetch = fetch;
              const request = { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(obj7) };
              const _JSON = JSON;
              obj7 = { connection_type };
              c7 = 3;
              c8 = 1;
              const tmp46 = externalAuthEndpoint(baseUrl, "authorize-url", ticket);
              const obj9 = { value: fetch(tmp46, request), done: false };
              return obj9;
            }
          } else if (3 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              c6 = 0;
              if (closure_1.ok) {
                c6 = 3;
                c7 = 7;
                c8 = 1;
                const obj11 = { value: closure_1.json(), done: false };
                return obj11;
              } else {
                closure_6 = null;
                c6 = 2;
                const tmp23 = closure_133_0(closure_133_1[2]);
                closure_3 = tmp23;
                externalAuthErrorCode = tmp23.externalAuthErrorCode;
                c7 = 6;
                c8 = 1;
                const obj12 = { value: closure_1.json(), done: false };
                return obj12;
              }
            }
          } else {
            if (4 === c7) {
              c6 = 0;
            } else if (5 === c7) {
              c6 = 0;
              c8 = 3;
              return { value: { type: "error", error: "unavailable" }, done: true };
            } else if (6 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                return { value, done: true };
              } else {
                let error;
                if (value != null) {
                  error = value.error;
                }
                closure_6 = externalAuthErrorCode(error);
                c6 = 0;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              url = undefined;
              if (value != null) {
                url = value.url;
              }
              c6 = 0;
              if (typeof url === "string") {
                if (url.startsWith("https://")) {
                  obj = { type: "url", url };
                  const obj17 = { type: "url", url };
                }
                c8 = 3;
                return { value: obj, done: true };
              }
              obj = { type: "error", error: "unavailable" };
            }
            const obj19 = { type: "error", error: obj8.externalAuthErrorFor(closure_1.status, closure_6) };
            c8 = 3;
            obj8 = closure_133_0(closure_133_1[2]);
            return { value: obj19, done: true };
          }
        } catch (tmp30) {
          if (0 === c6) {
            c8 = 3;
            throw tmp30;
          } else if (1 === c6) {
            c7 = 1;
          } else if (2 === c6) {
            c7 = 4;
          } else {
            c7 = 5;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/conjure/external_connections/conjureExternalConnectionRequests.tsx");

export const formatMcpConnectionExpiry = function formatMcpConnectionExpiry(connection) {
  const date = new Date(connection.expiresAtMs);
  return date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
};
export const fetchProjectMcpConnection = function fetchProjectMcpConnection() {
  return obj(...arguments);
};
export const requestExternalAuthorizeUrl = function requestExternalAuthorizeUrl() {
  return obj(...arguments);
};
