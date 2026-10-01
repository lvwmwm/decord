// Module ID: 12829
// Function ID: 12830
// Name: useAckVibegrationsAppChannelChat
// Dependencies: [19, 5056, 4851, 1980, 1074, 504, 573, 2]
// Exports: default

// Module 12829 (useAckVibegrationsAppChannelChat)
import DispatcherDefault from "Dispatcher" /* 573 */;
import react from "react" /* 19 */;
import MessageStore from "MessageStore" /* 5056 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
({ AnalyticsObjects: metroImportDefault, AnalyticsObjectTypes: metroImportAll, AnalyticsSections: c9, AppStates: c10 } = Constants);
const result = size.fileFinishedImporting("modules/vibegrations/native/useAckVibegrationsAppChannelChat.tsx");

export default function useAckVibegrationsAppChannelChat(arg0, arg1) {
  let closure_0;
  let state;
  let stateFromStores;
  let stateFromStores2;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => {
    const hasUnreadOrMentionsResult = null != closure_0 && ReadStateStore.hasUnreadOrMentions(tmp.id);
    return hasUnreadOrMentionsResult;
  }, items1);
  let obj2 = require("get initialized");
  const items2 = [stateFromStores2];
  const items3 = [arg0];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    if (null == closure_0) {
      return false;
    } else {
      const messages = MessageStore.getMessages(tmp.id);
      return messages.ready && !messages.loadingMore;
    }
  }, items3);
  let obj3 = require("get initialized");
  const items4 = [AppStateStore];
  stateFromStores2 = obj3.useStateFromStores(items4, () => state.getState() === constants.ACTIVE);
  const items5 = [arg0, arg1, stateFromStores, stateFromStores1, stateFromStores2];
  const effect = stateFromStores1.useEffect(() => {
    let obj3;
    let tmp2 = null != closure_0;
    const tmp = closure_0;
    if (tmp2) {
      tmp2 = closure_1;
    }
    if (tmp2) {
      tmp2 = stateFromStores;
    }
    if (tmp2) {
      tmp2 = stateFromStores1;
    }
    if (tmp2) {
      tmp2 = stateFromStores2;
    }
    if (tmp2) {
      const obj2 = { type: "TRY_ACK", channelId: tmp.id, location: obj3 };
      obj3 = { section: constants.CHANNEL, object: metroImportDefault.ACK_MESSAGE_VIEWED, objectType: metroImportAll.ACK_AUTOMATIC };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  }, items5);
};
