// Module ID: 13599
// Function ID: 13600
// Name: useAckVibegrationsAppChannelChat
// Dependencies: [19, 5010, 4805, 1983, 1078, 558, 568, 504, 577, 2]

// Module 13599 (useAckVibegrationsAppChannelChat)
import DispatcherDefault from "Dispatcher" /* 577 */;
import noop from "module_19" /* 19 */;
import MessageStore from "MessageStore" /* 5010 */;
import ReadStateStore from "ReadStateStore" /* 4805 */;
import AppStateStore from "AppStateStore" /* 1983 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(1078);
({ AnalyticsObjects: closure_7, AnalyticsObjectTypes: closure_8, AnalyticsSections: closure_9, AppStates: c10 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/useAckVibegrationsAppChannelChat.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class C {
      constructor() {
        hasUnreadOrMentionsResult = null != closure_0;
        if (hasUnreadOrMentionsResult) {
          tmp3 = closure_5;
          hasUnreadOrMentionsResult = closure_5.hasUnreadOrMentions(tmp.id);
        }
        return hasUnreadOrMentionsResult;
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = C;
    cResult[3] = items1;
    let tmp7 = items1;
    const tmp6 = C;
  } else {
    class C {
      constructor() {
        hasUnreadOrMentionsResult = null != closure_0;
        if (hasUnreadOrMentionsResult) {
          tmp3 = closure_5;
          hasUnreadOrMentionsResult = closure_5.hasUnreadOrMentions(tmp.id);
        }
        return hasUnreadOrMentionsResult;
      }
    }
    tmp7 = cResult[3];
  }
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        hasUnreadOrMentionsResult = null != closure_0;
        if (hasUnreadOrMentionsResult) {
          tmp3 = closure_5;
          hasUnreadOrMentionsResult = closure_5.hasUnreadOrMentions(tmp.id);
        }
        return hasUnreadOrMentionsResult;
      }
    }
    const items2 = [stateFromStores2];
    cResult[4] = items2;
    const tmp9 = items2;
  } else {
    class C {
      constructor() {
        hasUnreadOrMentionsResult = null != closure_0;
        if (hasUnreadOrMentionsResult) {
          tmp3 = closure_5;
          hasUnreadOrMentionsResult = closure_5.hasUnreadOrMentions(tmp.id);
        }
        return hasUnreadOrMentionsResult;
      }
    }
  }
  if (cResult[5] !== arg0) {
    class C {
      constructor() {
        hasUnreadOrMentionsResult = null != closure_0;
        if (hasUnreadOrMentionsResult) {
          tmp3 = closure_5;
          hasUnreadOrMentionsResult = closure_5.hasUnreadOrMentions(tmp.id);
        }
        return hasUnreadOrMentionsResult;
      }
    }
    const items3 = [arg0];
    cResult[5] = arg0;
    cResult[6] = tmp12;
    cResult[7] = items3;
    let tmp11 = items3;
    const tmp10 = tmp12;
  } else {
    class C {
      constructor() {
        hasUnreadOrMentionsResult = null != closure_0;
        if (hasUnreadOrMentionsResult) {
          tmp3 = closure_5;
          hasUnreadOrMentionsResult = closure_5.hasUnreadOrMentions(tmp.id);
        }
        return hasUnreadOrMentionsResult;
      }
    }
    tmp11 = cResult[7];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp10, tmp11);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        hasUnreadOrMentionsResult = null != closure_0;
        if (hasUnreadOrMentionsResult) {
          tmp3 = closure_5;
          hasUnreadOrMentionsResult = closure_5.hasUnreadOrMentions(tmp.id);
        }
        return hasUnreadOrMentionsResult;
      }
    }
    const items4 = [AppStateStore];
    class T {
      constructor() {
        return closure_1_6.getState() === closure_1_10.ACTIVE;
      }
    }
    cResult[8] = items4;
    cResult[9] = T;
    let tmp15 = T;
    const tmp14 = items4;
  } else {
    class C {
      constructor() {
        hasUnreadOrMentionsResult = null != closure_0;
        if (hasUnreadOrMentionsResult) {
          tmp3 = closure_5;
          hasUnreadOrMentionsResult = closure_5.hasUnreadOrMentions(tmp.id);
        }
        return hasUnreadOrMentionsResult;
      }
    }
    tmp15 = cResult[9];
  }
  const tmpResult3 = require("initialize");
  stateFromStores2 = require("initialize").useStateFromStores(tmp14, tmp15);
  if (cResult[10] === stateFromStores2) {
    class C {
      constructor() {
        hasUnreadOrMentionsResult = null != closure_0;
        if (hasUnreadOrMentionsResult) {
          tmp3 = closure_5;
          hasUnreadOrMentionsResult = closure_5.hasUnreadOrMentions(tmp.id);
        }
        return hasUnreadOrMentionsResult;
      }
    }
  }
  const fn = function j() {
    let tmp2 = null != id;
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
      const obj2 = { type: "TRY_ACK", channelId: id.id, location: null };
      const obj3 = { section: constants3.CHANNEL, object: constants.ACK_MESSAGE_VIEWED, objectType: constants2.ACK_AUTOMATIC };
      obj2.location = obj3;
      DispatcherDefault.dispatch(obj2);
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
  _require = arg0;
  closure_1 = arg1;
  const items = [ReadStateStore];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let hasUnreadOrMentionsResult = null != closure_0;
    if (hasUnreadOrMentionsResult) {
      hasUnreadOrMentionsResult = ReadStateStore.hasUnreadOrMentions(tmp.id);
    }
    return hasUnreadOrMentionsResult;
  }, items1);
  let obj = require("initialize");
  const items2 = [stateFromStores2];
  const items3 = [arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    if (null == closure_0) {
      return false;
    } else {
      const messages = MessageStore.getMessages(tmp.id);
      return messages.ready && !messages.loadingMore;
    }
  }, items3);
  let obj2 = require("initialize");
  const items4 = [AppStateStore];
  stateFromStores2 = require("initialize").useStateFromStores(items4, () => state.getState() === constants.ACTIVE);
  const items5 = [arg0, arg1, stateFromStores, stateFromStores1, stateFromStores2];
  const effect = stateFromStores1.useEffect(() => {
    let tmp2 = null != id;
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
      const obj2 = { type: "TRY_ACK", channelId: id.id, location: null };
      const obj3 = { section: constants3.CHANNEL, object: constants.ACK_MESSAGE_VIEWED, objectType: constants2.ACK_AUTOMATIC };
      obj2.location = obj3;
      DispatcherDefault.dispatch(obj2);
    }
  }, items5);
});
