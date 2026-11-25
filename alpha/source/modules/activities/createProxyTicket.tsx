// Module ID: 7657
// Function ID: 7658
// Name: createProxyTicket
// Dependencies: [5, 502, 1071, 1284, 5653, 5132, 2]
// Exports: createProxyTicket, getProxyTicketURL, prefetchProxyTicket, rememberProxyTicket

// Module 7657 (createProxyTicket)
import Constants from "Constants" /* 1071 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
import getURLForApplicationDefault from "getURLForApplication" /* 5653 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let c7, channel_id, closure_5, closure_6, closure_7, set, surface, value2;

let obj = function _createProxyTicket() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let c4;
    let c5;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    await takeProxyTicket(closure_0, closure_1, closure_2, closure_3);
    return arg1.ticket;
  });
  return obj(...arguments);
};
function takeProxyTicket() {
  return obj(...arguments);
}
obj = function _takeProxyTicket() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, ticket) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    return (async (arg0, value, arg2, arg3) => {
      if (c10 === 2) {
        c10 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              closure_7 = tmp;
              closure_6 = tmp4;
              ticket = undefined;
              if (null != ticket) {
                value2 = {};
                c9 = 1;
                c10 = 1;
                const obj4 = { value: mintProxyTicket(closure_0, closure_1, closure_2, ticket), done: false };
                return obj4;
              } else {
                const tmp36 = prefetchKey(closure_0, closure_1, closure_2);
                value = map.get(tmp36);
                map.delete(tmp36);
                if (null != value) {
                  const _Date = Date;
                  if (value.expiresAt > Date.now()) {
                    c8 = 1;
                    c9 = 4;
                    c10 = 1;
                    return { value: value.ticket, done: false };
                  }
                }
              }
            }
          } else if (1 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              value2.ticket = value;
              value2.prefetched = false;
              c10 = 3;
              return { value: value2, done: true };
            }
          } else if (2 === c9) {
            c8 = 0;
          } else if (3 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              value.ticket = value;
              value.prefetched = false;
              c10 = 3;
              return { value, done: true };
            }
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            return { value, done: true };
          } else {
            ticket = value;
            if (null != ticket) {
              c8 = 0;
              c10 = 3;
              return { value: { ticket, prefetched: true }, done: true };
            } else {
              c8 = 0;
            }
          }
          value = {};
          c9 = 3;
          c10 = 1;
          const obj12 = { value: closure_135_12(closure_0, closure_1, closure_2), done: false };
          return obj12;
        } catch (tmp24) {
          if (0 === c8) {
            c10 = 3;
            throw tmp24;
          } else {
            c9 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _prefetchProxyTicket() {
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c6;
      try {
        let obj5;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            let closure_3 = tmp4;
            closure_0 = undefined;
            obj5 = undefined;
            const tmp35 = prefetchKey(closure_0, closure_1, closure_2);
            const tmp31 = closure_0;
            closure_0 = tmp35;
            value = map.get(tmp35);
            const tmp32 = closure_1;
            const tmp33 = closure_2;
            if (null != value) {
              const _Date = Date;
              if (value.expiresAt > Date.now()) {
                c8 = 3;
                const obj4 = { value: { alreadyPrefetched: true }, done: true };
                return obj4;
              }
            }
            const tmp20 = mintProxyTicket(tmp31, tmp32, tmp33);
            obj5 = { ticket: tmp20, expiresAt: Date.now() + 60000 };
            const _Date2 = Date;
            const result = map.set(tmp35, obj5);
            c6 = 1;
            c7 = 2;
            c8 = 1;
            const obj6 = { value: tmp20, done: false };
            return obj6;
          }
        } else if (1 === c7) {
          c6 = 0;
          closure_2 = closure_5;
          if (closure_132_6.get(closure_0) === obj5) {
            closure_132_6.delete(closure_0);
          }
          throw closure_2;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c6 = 0;
          c8 = 3;
          obj = { value: { alreadyPrefetched: false }, done: true };
          return obj;
        }
      } catch (tmp23) {
        closure_5 = tmp23;
        if (0 === c6) {
          c8 = 3;
          throw tmp23;
        } else {
          c7 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function prefetchKey(arg0, arg1, arg2) {
  let str = arg1;
  const items = [AuthenticationStore.getId(), arg0, , ];
  if (arg1 == null) {
    str = "";
  }
  let str2 = arg2;
  items[2] = str;
  if (arg2 == null) {
    str2 = "";
  }
  items[3] = str2;
  return items.join(":");
}
function mintProxyTicket() {
  return obj(...arguments);
}
obj = function _mintProxyTicket() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let c4;
    let c5;
    let closure_1;
    let closure_2;
    function prewarmApplication(arg0) {
      const tmp = closure_1_14(arg0);
      if (null != tmp) {
        const _fetch = fetch;
        obj = closure_1_0(closure_1_2[5]);
        obj.ignoreErrors(fetch(tmp, { method: "GET", mode: "no-cors", credentials: "omit" }));
      }
    }
    let closure_0 = arg0;
    channel_id = arg1;
    surface = arg2;
    let closure_3 = arg3;
    prewarmApplication(closure_0);
    const obj4 = { use_stateless_ticket: true };
    const tmp11 = closure_0;
    const tmp14 = closure_3;
    if (null != closure_3) {
      ({ channelId: obj7.invite_channel_id, messageId: obj7.invite_message_id } = tmp14);
    }
    if (null != channel_id) {
      obj4.channel_id = channel_id;
    }
    if (null != surface) {
      obj4.surface = surface;
    }
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.APPLICATION_PROXY_TICKET(tmp11), body: obj4, rejectWithError: true };
    const post = HTTP.post;
    await post(request);
    return arg1.body.ticket;
  });
  return obj(...arguments);
};
function getPrewarmURL(arg0) {
  const tmp = getURLForApplicationDefault(arg0);
  if (null == tmp) {
    return null;
  } else {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const str2 = new URL("/.discord/prewarm", tmp);
      return str2.toString();
    } catch (err) {
      return null;
    }
  }
}
const Endpoints = Constants.Endpoints;
const map = new Map();
let result = size.fileFinishedImporting("modules/activities/createProxyTicket.tsx");

export function createProxyTicket() {
  return obj(...arguments);
}
export { takeProxyTicket };
export function prefetchProxyTicket() {
  return obj(...arguments);
}
export function rememberProxyTicket(proxy_ticket, id, CONJURE_UNKNOWN_CHANNEL, APP_CHANNEL) {
  let str = CONJURE_UNKNOWN_CHANNEL;
  const items = [, , , ];
  set = map.set;
  items[0] = AuthenticationStore.getId();
  items[1] = id;
  if (CONJURE_UNKNOWN_CHANNEL == null) {
    str = "";
  }
  let str2 = APP_CHANNEL;
  items[2] = str;
  if (APP_CHANNEL == null) {
    str2 = "";
  }
  items[3] = str2;
  obj = { ticket: Promise.resolve(proxy_ticket), expiresAt: Date.now() + 60000 };
  const joined = items.join(":");
  const result = set(joined, obj);
}
export function getProxyTicketURL(arg0) {
  obj = HTTPUtils;
  const aPIBaseURL = obj.getAPIBaseURL();
  return aPIBaseURL + Endpoints.APPLICATION_PROXY_TICKET(arg0);
}
export { getPrewarmURL };
