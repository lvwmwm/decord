// Module ID: 9595
// Function ID: 9596
// Name: MessagePreviewReactions
// Dependencies: [19, 7313, 7318, 8480, 21, 558, 576, 504, 6851, 6878, 9584, 2]

// Module 9595 (MessagePreviewReactions)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6851 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import react from "react" /* 19 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7313 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7318 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8480 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useAnalyticsLocationsDefault = useAnalyticsLocations;
let _require;

const jsx = Fragment.jsx;
let closure_7 = [];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePreviewMessageReactions(arg0, arg1) {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessagePreviewStore, ChannelConversationsStore, ConversationPreviewStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp8;
    let tmp9;
    if (cResult[2] === arg1) {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp8, tmp9);
  }
  class M {
    constructor() {
      tmp = closure_1;
      message = closure_5.getMessage(closure_1);
      if (message == null) {
        tmp3 = closure_3;
        tmp4 = closure_0;
        message = closure_3.getMessage(closure_0, tmp);
      }
      if (message == null) {
        tmp5 = closure_4;
        message = closure_4.getMessage(tmp);
      }
      return null != message ? message.reactions : closure_7;
    }
  }
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = M;
  cResult[4] = items1;
  tmp9 = items1;
  tmp8 = M;
}) : (function usePreviewMessageReactions(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  const items = [MessagePreviewStore, ChannelConversationsStore, ConversationPreviewStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let message = MessagePreviewStore.getMessage(closure_1);
    if (message == null) {
      message = ChannelConversationsStore.getMessage(closure_0, tmp);
    }
    if (message == null) {
      message = ConversationPreviewStore.getMessage(tmp);
    }
    return null != message ? message.reactions : closure_7;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessagePreviewReactions(arg0) {
  let channelId;
  let emoji;
  let messageId;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  ({ channelId, messageId, emoji } = arg0);
  const arr = closure_8(channelId, messageId);
  const tmp4 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp4(AnalyticsLocationDefault.MESSAGE_PREVIEW_REACTIONS).analyticsLocations;
  if (cResult[0] === channelId) {
    if (cResult[1] === emoji) {
      if (cResult[2] === messageId) {
        let tmp5;
        if (cResult[3] === arr) {
          tmp5 = cResult[4];
        }
        if (cResult[5] === analyticsLocations) {
          let tmp9;
          if (cResult[6] === tmp5) {
            tmp9 = cResult[7];
          }
          return tmp9;
        }
        const tmp11 = jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: analyticsLocations, children: tmp5 });
        cResult[5] = analyticsLocations;
        cResult[6] = tmp5;
        cResult[7] = tmp11;
        tmp9 = tmp11;
      }
    }
  }
  if (arr.length > 0) {
    tmp7 = jsx(tmp(9584).MessageReactionsContent, { channelId, messageId, emoji, reactions: arr });
  } else {
    tmp7 = jsx(tmp(9584).MessageReactionsEmpty, {});
  }
  cResult[0] = channelId;
  cResult[1] = emoji;
  cResult[2] = messageId;
  cResult[3] = arr;
  cResult[4] = tmp7;
  tmp5 = tmp7;
}) : (function MessagePreviewReactions(emoji) {
  let channelId;
  let messageId;
  let tmp3Result;
  ({ channelId, messageId } = emoji);
  emoji = emoji.emoji;
  const arr = closure_8(channelId, messageId);
  const tmp2 = useAnalyticsLocationsDefault;
  const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
  if (arr.length > 0) {
    const obj2 = { channelId, messageId, emoji, reactions: arr };
    tmp3Result = tmp3(tmp4(9584).MessageReactionsContent, obj2);
  } else {
    tmp3Result = tmp3(tmp4(9584).MessageReactionsEmpty, {});
  }
  return <AnalyticsLocationProvider value={tmp2(AnalyticsLocationDefault.MESSAGE_PREVIEW_REACTIONS).analyticsLocations}>{tmp3Result}</AnalyticsLocationProvider>;
});
const result = size.fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default tmp3;
