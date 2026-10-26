// Module ID: 12259
// Function ID: 12260
// Name: conjureExternalConnectionRequests
// Dependencies: [5, 10794, 12260, 2]
// Exports: fetchProjectMcpConnection, formatMcpConnectionExpiry, requestExternalAuthorizeUrl

// Module 12259 (conjureExternalConnectionRequests)
import conjureWorkerFetch from "conjureWorkerFetch" /* 10794 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_4, closure_5, externalAuthErrorCode;

let obj = function _fetchProjectMcpConnection() {
  let expiresAtMs;
  obj = _asyncToGenerator(async function(arg0) {
    let c5;
    let closure_2;
    let obj6;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_3 = tmp4;
    let obj4 = closure_1;
    if (closure_1 === undefined) {
      obj4 = {};
    }
    const flag = obj4.regenerate ?? false;
    await "Reflect";
    const fetchConjureWorker = closure_131_0(closure_131_1[1]).fetchConjureWorker;
    const tmp21 = closure_131_0(closure_131_1[1]);
    const tmp22 = closure_0;
    if (flag) {
      obj6 = { regenerate: "1" };
    }
    const obj7 = { method: "POST", query: obj6 };
    const tmp = await fetchConjureWorker(tmp22, "/agent/mcp-token", obj7);
    if (!tmp.ok) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("mcp token failed (" + tmp.status + ")");
      throw error;
    }
    closure_3 = await tmp.json();
    if (typeof closure_3.expires_in === "number") {
      const _Date = Date;
      let sum = Date.now() + 1000 * closure_3.expires_in;
    } else {
      const _Date2 = Date;
      sum = Date.parse(closure_3.expires_at);
    }
    obj = { url: closure_3.url, expiresAtMs };
    return obj;
  });
  return obj(...arguments);
};
obj = function _requestExternalAuthorizeUrl() {
  obj = _asyncToGenerator(async (arg0, connection_type) => {
    let closure_0 = arg0;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      let obj14;
      let obj5;
      let obj8;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+352" };
        }
      } else {
        try {
          let url;
          let closure_2;
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
              closure_0 = undefined;
              url = undefined;
              closure_2 = undefined;
              c6 = 1;
              const obj4 = { method: "POST", json: obj5 };
              c7 = 2;
              c8 = 1;
              obj5 = { connection_type };
              const obj6 = { value: obj14.fetchConjureWorker(closure_0, "/agent/external-auth/authorize-url", obj4), done: false };
              obj14 = conjureWorkerFetch;
              return obj6;
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
              closure_0 = value;
              c6 = 0;
              if (closure_0.ok) {
                c6 = 3;
                c7 = 6;
                c8 = 1;
                const obj10 = { value: closure_0.json(), done: false };
                return obj10;
              } else {
                closure_2 = null;
                c6 = 2;
                const tmp23 = closure_133_0(closure_133_1[2]);
                closure_3 = tmp23;
                externalAuthErrorCode = tmp23.externalAuthErrorCode;
                c7 = 5;
                c8 = 1;
                const obj11 = { value: closure_0.json(), done: false };
                return obj11;
              }
            }
          } else {
            if (3 === c7) {
              c6 = 0;
            } else if (4 === c7) {
              c6 = 0;
              c8 = 3;
              return { value: { type: "error", error: "unavailable" }, done: true };
            } else if (5 === c7) {
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
                closure_2 = externalAuthErrorCode(error);
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
                  const obj16 = { type: "url", url };
                }
                c8 = 3;
                return { value: obj, done: true };
              }
              obj = { type: "error", error: "unavailable" };
            }
            const obj18 = { type: "error", error: obj8.externalAuthErrorFor(closure_0.status, closure_2) };
            c8 = 3;
            obj8 = closure_133_0(closure_133_1[2]);
            return { value: obj18, done: true };
          }
        } catch (tmp30) {
          if (0 === c6) {
            c8 = 3;
            throw tmp30;
          } else if (1 === c6) {
            c7 = 1;
          } else if (2 === c6) {
            c7 = 3;
          } else {
            c7 = 4;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/conjure/external_connections/conjureExternalConnectionRequests.tsx");

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
