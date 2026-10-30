// Module ID: 10865
// Function ID: 10866
// Name: createProxyTicket
// Dependencies: [5, 502, 1072, 1283, 5667, 2]
// Exports: createProxyTicket, prefetchProxyTicket, rememberProxyTicket

// Module 10865 (createProxyTicket)
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let channel_id, closure_4, closure_5, set, surface;

let obj = function _createProxyTicket() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, value) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2, arg3) => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
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
              value = undefined;
              if (null != value) {
                c8 = 3;
                const obj4 = { value: mintProxyTicket(closure_0, closure_1, closure_2, value), done: true };
                return obj4;
              } else {
                const tmp31 = prefetchKey(closure_0, closure_1, closure_2);
                value = map.get(tmp31);
                map.delete(tmp31);
                if (null != value) {
                  const _Date = Date;
                  if (value.expiresAt > Date.now()) {
                    c6 = 1;
                    c7 = 2;
                    c8 = 1;
                    return { value: value.ticket, done: false };
                  }
                }
              }
            }
          } else if (1 === c7) {
            c6 = 0;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else if (null != value) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            c6 = 0;
          }
          c8 = 3;
          const obj7 = { value: closure_133_9(closure_0, closure_1, closure_2), done: true };
          return obj7;
        } catch (tmp19) {
          if (0 === c6) {
            c8 = 3;
            throw tmp19;
          } else {
            c7 = 1;
          }
        }
      }
    })();
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
      const tmp = closure_1_1(closure_1_2[4])(arg0);
      if (null != tmp) {
        try {
          const _fetch = fetch;
          const _URL = URL;
          const self = this;
          const self2 = this;
          const str2 = new URL("/.discord/prewarm", tmp);
          const response = fetch(str2.toString(), { method: "GET", mode: "no-cors", credentials: "omit" });
          response.catch(() => {

          });
        } catch (err) {
        }
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
const Endpoints = Constants.Endpoints;
const map = new Map();
let result = size.fileFinishedImporting("modules/activities/createProxyTicket.tsx");

export function createProxyTicket() {
  return obj(...arguments);
}
export function prefetchProxyTicket(application_id, arg1, type) {
  const items = [AuthenticationStore.getId(), application_id, , ];
  let str = arg1;
  if (arg1 == null) {
    str = "";
  }
  items[2] = str;
  let str2 = type;
  if (type == null) {
    str2 = "";
  }
  items[3] = str2;
  const joined = items.join(":");
  obj = map;
  const value = map.get(joined);
  if (null == value) {
    const promise = mintProxyTicket(application_id, arg1, type);
    const obj2 = { ticket: promise, expiresAt: Date.now() + 60000 };
    const _Date2 = Date;
    const result = obj.set(joined, obj2);
    promise.catch(() => {
      obj = map;
      const tmp = joined;
      if (map.get(joined) === obj2) {
        obj.delete(tmp);
      }
    });
  } else {
    const _Date = Date;
  }
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
