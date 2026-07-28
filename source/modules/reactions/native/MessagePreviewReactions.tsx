// Module ID: 9437
// Function ID: 73413
// Name: MessagePreviewReactions
// Dependencies: [31, 5840, 8171, 33, 566, 5497, 5517, 9428, 2]
// Exports: default

// Module 9437 (MessagePreviewReactions)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
let closure_6 = [];
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default function MessagePreviewReactions(emoji) {
  let channelId;
  let messageId;
  ({ channelId, messageId } = emoji);
  const arr = (function usePreviewMessageReactions(channelId, messageId) {
    let closure_0 = channelId;
    let closure_1 = messageId;
    const items = [outer1_4, outer1_3];
    const items1 = [channelId, messageId];
    return outer1_0(outer1_2[4]).useStateFromStores(items, () => {
      let message = outer2_4.getMessage(closure_1);
      if (null == message) {
        message = outer2_3.getMessage(closure_0, closure_1);
      }
      return null != message ? message.reactions : outer2_6;
    }, items1);
  })(channelId, messageId);
  let obj = { value: importDefault(5497)(importDefault(5517).MESSAGE_PREVIEW_REACTIONS).analyticsLocations };
  if (arr.length > 0) {
    obj = { channelId, messageId, emoji: emoji.emoji, reactions: arr };
    let tmp6 = jsx(require(9428) /* useReactors */.MessageReactionsContent, { channelId, messageId, emoji: emoji.emoji, reactions: arr });
  } else {
    tmp6 = jsx(require(9428) /* useReactors */.MessageReactionsEmpty, {});
  }
  obj.children = tmp6;
  return jsx(require(5497) /* mergeLocations */.AnalyticsLocationProvider, { value: importDefault(5497)(importDefault(5517).MESSAGE_PREVIEW_REACTIONS).analyticsLocations });
};
