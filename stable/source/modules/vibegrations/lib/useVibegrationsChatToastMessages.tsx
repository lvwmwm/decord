// Module ID: 16431
// Function ID: 16432
// Name: useVibegrationsChatToastMessages
// Dependencies: [32, 19, 16432, 5057, 1103, 558, 576, 504, 5059, 585, 2]

// Module 16431 (useVibegrationsChatToastMessages)
import DispatcherDefault from "Dispatcher" /* 585 */;
import DurationsDefault from "Durations" /* 1103 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5059 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CallChatToastsStore from "CallChatToastsStore" /* 16432 */;
import MessageStore from "MessageStore" /* 5057 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, message, str;

const result = 10 * DurationsDefault.Millis.SECOND;
const metroImportDefault = result;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let closure_3;
  let first1;
  let items4;
  let tmp10;
  let tmp16;
  let tmp17;
  _require = arg0;
  let tmp = _require;
  const tmp2 = first1;
  let obj = require("react");
  const cResult = obj.c(14);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [CallChatToastsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class E {
      constructor() {
        return CallChatToastsStore.getToastsEnabled(closure_0);
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = E;
    cResult[3] = items1;
  } else {
    class E {
      constructor() {
        return CallChatToastsStore.getToastsEnabled(closure_0);
      }
    }
  }
  tmp(tmp2[7]);
  if (arg1) {
    class E {
      constructor() {
        return CallChatToastsStore.getToastsEnabled(closure_0);
      }
    }
  }
  importDefault = tmp8;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return CallChatToastsStore.getToastsEnabled(closure_0);
      }
    }
    cResult[4] = tmp11;
    tmp10 = tmp11;
  } else {
    class E {
      constructor() {
        return CallChatToastsStore.getToastsEnabled(closure_0);
      }
    }
  }
  [first1, _slicedToArray] = react.useState(tmp10);
  const obj2 = react;
  if (cResult[5] === arg1) {
    let tmp15;
    class E {
      constructor() {
        return CallChatToastsStore.getToastsEnabled(closure_0);
      }
    }
    const effect = obj2.useEffect(M, items4);
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          return CallChatToastsStore.getToastsEnabled(closure_0);
        }
      }
      const items2 = [MessageStore];
      cResult[9] = items2;
      tmp15 = items2;
    } else {
      class E {
        constructor() {
          return CallChatToastsStore.getToastsEnabled(closure_0);
        }
      }
    }
    if (cResult[10] === arg0) {
      class E {
        constructor() {
          return CallChatToastsStore.getToastsEnabled(closure_0);
        }
      }
      const tmpResult2 = tmp(tmp2[7]);
      return tmpResult2.useStateFromStoresArray(tmp15, tmp16, tmp17);
    }
    const fn = function h() {
      return first1.map((id) => {
        message = message.getMessage(closure_1_0, id.id);
        if (message == null) {
          message = id;
        }
        return message;
      });
    };
    const items3 = [arg0, first1];
    cResult[10] = arg0;
    cResult[11] = first1;
    cResult[12] = fn;
    cResult[13] = items3;
    tmp16 = fn;
    tmp17 = items3;
  }
  class M {
    constructor() {
      tmp = handleMessageCreate;
      if (tmp) {
        handleMessageCreate = function handleMessageCreate(channelId) {
          let timeout;
          if (channelId.channelId === timeout) {
            if (!channelId.optimistic) {
              const _clearTimeout = clearTimeout;
              clearTimeout(timeout);
              const _setTimeout = setTimeout;
              setTimeout(() => closure_1_3([]), metroImportDefault);
              const obj = MessageRecordUtils;
              timeout = obj.createMessageRecord(tmp);
              closure_3((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
                return items.slice(-3);
              });
            }
          }
        };
        tmp2 = closure_1;
        tmp3 = closure_2;
        obj = closure_1(closure_2[9]);
        str = "MESSAGE_CREATE";
        subscription = obj.subscribe("MESSAGE_CREATE", handleMessageCreate);
        return () => {
          const obj = DispatcherDefault;
          obj.unsubscribe("MESSAGE_CREATE", handleMessageCreate);
          clearTimeout(closure_0);
          closure_3([]);
        };
      } else {
        return;
      }
    }
  }
  items4 = [tmp8, arg0];
  cResult[5] = arg1;
  cResult[6] = arg0;
  cResult[7] = M;
  cResult[8] = items4;
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_3;
  let first;
  _require = arg0;
  let stateFromStores = arg1;
  const tmp2 = _require;
  let obj = require("get initialized");
  let items = [CallChatToastsStore];
  const items1 = [arg0];
  const tmp3 = first;
  if (arg1) {
    stateFromStores = obj.useStateFromStores(items, () => CallChatToastsStore.getToastsEnabled(closure_0), items1);
  }
  [first, _slicedToArray] = react.useState([]);
  const items2 = [stateFromStores, arg0];
  const effect = react.useEffect(() => {
    function handleMessageCreate(channelId) {
      let timeout;
      if (channelId.channelId === timeout) {
        if (!channelId.optimistic) {
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
          const _setTimeout = setTimeout;
          setTimeout(() => closure_1_3([]), metroImportDefault);
          const obj = MessageRecordUtils;
          timeout = obj.createMessageRecord(tmp);
          closure_3((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
            return items.slice(-3);
          });
        }
      }
    }
    if (handleMessageCreate) {
      const tmp = stateFromStores;
      let obj = stateFromStores(first[9]);
      const subscription = obj.subscribe("MESSAGE_CREATE", handleMessageCreate);
      return () => {
        const obj = DispatcherDefault;
        obj.unsubscribe("MESSAGE_CREATE", handleMessageCreate);
        clearTimeout(closure_0);
        closure_3([]);
      };
    }
  }, items2);
  const items3 = [MessageStore];
  const items4 = [arg0, first];
  const tmp2Result = tmp2(tmp3[7]);
  return tmp2Result.useStateFromStoresArray(items3, () => first.map((id) => {
    message = message.getMessage(closure_1_0, id.id);
    if (message == null) {
      message = id;
    }
    return message;
  }), items4);
});
const result1 = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsChatToastMessages.tsx");

export default tmp3;
export const VIBEGRATIONS_CHAT_TOAST_LINGER_MS = result;
export const VIBEGRATIONS_CHAT_TOAST_MAX = 3;
