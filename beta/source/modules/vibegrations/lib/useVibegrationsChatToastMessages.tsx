// Module ID: 16429
// Function ID: 16430
// Name: useVibegrationsChatToastMessages
// Dependencies: [32, 19, 16430, 5056, 1091, 504, 5058, 573, 2]
// Exports: default

// Module 16429 (useVibegrationsChatToastMessages)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1091 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5058 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CallChatToastsStore from "CallChatToastsStore" /* 16430 */;
import MessageStore from "MessageStore" /* 5056 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, message;

const result = 10 * DurationsDefault.Millis.SECOND;
const metroImportDefault = result;
const result1 = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsChatToastMessages.tsx");

export default function useVibegrationsChatToastMessages(arg0, arg1) {
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
      let obj = stateFromStores(first[7]);
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
  const tmp2Result = tmp2(tmp3[5]);
  return tmp2Result.useStateFromStoresArray(items3, () => first.map((id) => {
    message = message.getMessage(closure_1_0, id.id);
    if (message == null) {
      message = id;
    }
    return message;
  }), items4);
};
export const VIBEGRATIONS_CHAT_TOAST_LINGER_MS = result;
export const VIBEGRATIONS_CHAT_TOAST_MAX = 3;
