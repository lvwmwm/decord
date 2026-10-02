// Module ID: 12831
// Function ID: 12832
// Name: useAckVibegrationsAppChannelChat
// Dependencies: [19, 5057, 4852, 1986, 1086, 558, 576, 504, 585, 2]

// Module 12831 (useAckVibegrationsAppChannelChat)
import DispatcherDefault from "Dispatcher" /* 585 */;
import react from "react" /* 19 */;
import MessageStore from "MessageStore" /* 5057 */;
import ReadStateStore from "ReadStateStore" /* 4852 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import Constants from "Constants" /* 1086 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
({ AnalyticsObjects: metroImportDefault, AnalyticsObjectTypes: metroImportAll, AnalyticsSections: c9, AppStates: c10 } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  let state;
  let stateFromStores;
  let stateFromStores2;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  let closure_1 = arg1;
  let tmp = _require;
  let tmp2 = stateFromStores;
  let obj = require("react");
  const cResult = obj.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class C {
      constructor() {
        const hasUnreadOrMentionsResult = null != closure_0 && ReadStateStore.hasUnreadOrMentions(tmp.id);
        return hasUnreadOrMentionsResult;
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = C;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = C;
  } else {
    class C {
      constructor() {
        const hasUnreadOrMentionsResult = null != closure_0 && ReadStateStore.hasUnreadOrMentions(tmp.id);
        return hasUnreadOrMentionsResult;
      }
    }
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(tmp2[7]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        const hasUnreadOrMentionsResult = null != closure_0 && ReadStateStore.hasUnreadOrMentions(tmp.id);
        return hasUnreadOrMentionsResult;
      }
    }
    const items2 = [stateFromStores2];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    class C {
      constructor() {
        const hasUnreadOrMentionsResult = null != closure_0 && ReadStateStore.hasUnreadOrMentions(tmp.id);
        return hasUnreadOrMentionsResult;
      }
    }
  }
  if (cResult[5] !== arg0) {
    class C {
      constructor() {
        const hasUnreadOrMentionsResult = null != closure_0 && ReadStateStore.hasUnreadOrMentions(tmp.id);
        return hasUnreadOrMentionsResult;
      }
    }
    const items3 = [arg0];
    cResult[5] = arg0;
    cResult[6] = tmp12;
    cResult[7] = items3;
    tmp11 = items3;
    tmp10 = tmp12;
  } else {
    class C {
      constructor() {
        const hasUnreadOrMentionsResult = null != closure_0 && ReadStateStore.hasUnreadOrMentions(tmp.id);
        return hasUnreadOrMentionsResult;
      }
    }
    tmp11 = cResult[7];
  }
  const tmpResult3 = tmp(tmp2[7]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10, tmp11);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        const hasUnreadOrMentionsResult = null != closure_0 && ReadStateStore.hasUnreadOrMentions(tmp.id);
        return hasUnreadOrMentionsResult;
      }
    }
    const items4 = [AppStateStore];
    class T {
      constructor() {
        return state.getState() === constants.ACTIVE;
      }
    }
    cResult[8] = items4;
    cResult[9] = T;
    tmp15 = T;
    tmp14 = items4;
  } else {
    class C {
      constructor() {
        const hasUnreadOrMentionsResult = null != closure_0 && ReadStateStore.hasUnreadOrMentions(tmp.id);
        return hasUnreadOrMentionsResult;
      }
    }
    tmp15 = cResult[9];
  }
  const tmpResult4 = tmp(tmp2[7]);
  stateFromStores2 = tmpResult4.useStateFromStores(tmp14, tmp15);
  if (cResult[10] === stateFromStores2) {
    class C {
      constructor() {
        const hasUnreadOrMentionsResult = null != closure_0 && ReadStateStore.hasUnreadOrMentions(tmp.id);
        return hasUnreadOrMentionsResult;
      }
    }
  }
  const fn = function j() {
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
  };
  const items5 = [arg0, arg1, stateFromStores, stateFromStores1, stateFromStores2];
  cResult[10] = stateFromStores2;
  cResult[11] = arg0;
  cResult[12] = stateFromStores1;
  cResult[13] = stateFromStores;
  cResult[14] = arg1;
  cResult[15] = fn;
  cResult[16] = items5;
}) : ((arg0, arg1) => {
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
});
const result = size.fileFinishedImporting("modules/vibegrations/native/useAckVibegrationsAppChannelChat.tsx");

export default tmp3;
