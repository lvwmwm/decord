// Module ID: 12091
// Function ID: 12092
// Name: useMessageRequestPreview
// Dependencies: [5, 5056, 4851, 12092, 1074, 504, 12, 1271, 573, 2]
// Exports: useMessageRequestPreview

// Module 12091 (useMessageRequestPreview)
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import MessageStore from "MessageStore" /* 5056 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import MessageRequestPreviewStore from "MessageRequestPreviewStore" /* 12092 */;
import size from "module_2" /* 2 */;

let c1, c10, c11, c4, closure_4;

function loadMessageRequestData() {
  return obj(...arguments);
}
let obj = function _loadMessageRequestData() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_0 = tmp;
            c3 = 1;
            const obj3 = _modDef12;
            if (!obj3.isEmpty(set)) {
              c1 = 2;
              c4 = 1;
              const obj5 = { value: closure_128_12(), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          c9 = null;
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c9 = null;
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          obj = closure_128_1(closure_128_2[6]);
        }
        c3 = 0;
        c9 = null;
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp19) {
        closure_2 = tmp19;
        if (0 === c3) {
          c4 = 3;
          throw tmp19;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function loadMessageRequestDataHelper() {
  return obj(...arguments);
}
obj = function _loadMessageRequestDataHelper() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj5;
    if (c11 === 2) {
      c11 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        let body;
        let c2;
        let substr;
        c11 = 2;
        let tmp4 = c10;
        if (0 === c10) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c11 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_7 = tmp;
            let closure_6 = tmp4;
            body = undefined;
            c2 = undefined;
            let _Array = Array;
            let arr = Array.from(set);
            substr = arr.slice(0, 25);
            c9 = 2;
            let HTTP = HTTPUtils.HTTP;
            let request = { url: constants.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA, query: obj5, rejectWithError: true };
            obj5 = { channel_ids: substr };
            c10 = 3;
            c11 = 1;
            let obj6 = { value: HTTP.get(request), done: false };
            return obj6;
          }
        } else {
          let closure_0;
          if (1 === tmp4) {
            c9 = 0;
            let tmp51 = closure_1_8;
            body = substr;
            closure_0 = substr[Symbol.iterator]();
            while (closure_0 !== undefined) {
              c2 = tmp57;
              let deleteResult = closure_135_8.delete(c2);
              c9 = 0;
              continue;
            }
            throw tmp51;
          } else {
            if (2 === tmp4) {
              c9 = 1;
              let obj4 = closure_135_1(closure_135_2[8]);
              let obj7 = { type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR", requestedChannelIds: substr };
              let dispatchResult = obj4.dispatch(obj7);
            } else {
              let closure_2;
              if (3 === tmp4) {
                if (arg0 === 1) {
                  c11 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 0;
                  let closure_3 = substr;
                  closure_2 = substr[Symbol.iterator]();
                  while (closure_2 !== undefined) {
                    c2 = tmp26;
                    let deleteResult1 = closure_135_8.delete(c2);
                    c9 = 0;
                    continue;
                  }
                  c11 = 3;
                  let obj8 = { value, done: true };
                  return obj8;
                } else {
                  body = value;
                  obj = closure_135_1(closure_135_2[8]);
                  let obj9 = { type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS", requestedChannelIds: substr, supplementalData: body.body };
                  let dispatchResult1 = obj.dispatch(obj9);
                  c9 = 1;
                }
              } else if (4 === tmp4) {
                c9 = 0;
                closure_2.return();
                throw closure_1_8;
              } else if (5 === tmp4) {
                c9 = 0;
                closure_4.return();
                throw closure_1_8;
              } else {
                c9 = 0;
                closure_0.return();
                throw closure_1_8;
              }
            }
            c9 = 0;
            let closure_5 = substr;
            closure_4 = substr[Symbol.iterator]();
            while (closure_4 !== undefined) {
              c2 = tmp44;
              let deleteResult2 = closure_135_8.delete(c2);
              c9 = 0;
              continue;
            }
            c11 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const set = new Set();
let c9 = null;
const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestPreview.tsx");

export const useMessageRequestPreview = function useMessageRequestPreview(channel, arg1) {
  let closure_9;
  let error;
  let loaded;
  let message;
  let timeout;
  const id = channel.id;
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const items = [MessageRequestPreviewStore, MessageStore, ReadStateStore];
  const items1 = [id];
  const obj2 = id(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const lastMessageIdResult = ReadStateStore.lastMessageId(id);
    const messageRequestPreview = MessageRequestPreviewStore.getMessageRequestPreview(id);
    const tmp = id;
    if (null == messageRequestPreview.message) {
      if (null != lastMessageIdResult) {
        const message = MessageStore.getMessage(tmp, lastMessageIdResult);
        if (null != message) {
          return { loaded: true, error: false, message };
        }
      }
    }
    return messageRequestPreview;
  }, items1);
  ({ loaded, message, error } = stateFromStoresObject);
  const items2 = [MessageRequestPreviewStore];
  const items3 = [id];
  const obj3 = id(504);
  const stateFromStores = obj3.useStateFromStores(items2, () => MessageRequestPreviewStore.shouldLoadMessageRequestPreview(id), items3);
  if (flag) {
    flag = !loaded;
  }
  if (flag) {
    flag = null == message;
  }
  if (flag) {
    flag = stateFromStores;
  }
  if (flag) {
    set.add(id);
    if (null == timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(loadMessageRequestData, 0);
    }
  }
  return { loaded, error, message };
};
