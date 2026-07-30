// Module ID: 9457
// Function ID: 9458
// Name: MessagePreviewReactions
// Dependencies: [19, 5856, 8192, 21, 589, 5515, 5535, 9448, 2]
// Exports: default

// Module 9457 (MessagePreviewReactions)
import "noop";
import removePendingListFetch from "removePendingListFetch";
import messages from "messages";
import { jsx } from "jsxProd";

const require = arg1;
let closure_6 = [];
const result = require("messages").fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default function MessagePreviewReactions(emoji) {
  let channelId;
  let messageId;
  ({ channelId, messageId } = emoji);
  let obj = channelId(589);
  const items = [messages, removePendingListFetch];
  const items1 = [channelId, messageId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let message = outer1_4.getMessage(messageId);
    if (message == null) {
      message = outer1_3.getMessage(channelId, messageId);
    }
    return null != message ? message.reactions : outer1_6;
  }, items1);
  obj = { value: messageId(5515)(messageId(5535).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null };
  if (stateFromStores.length > 0) {
    obj = { channelId: null, messageId: null, emoji: null, reactions: null };
    obj[0] = channelId;
    obj[1] = messageId;
    obj[2] = emoji.emoji;
    obj[3] = stateFromStores;
    let tmp4Result = tmp4(tmp(9448).MessageReactionsContent, obj);
  } else {
    tmp4Result = tmp4(tmp(9448).MessageReactionsEmpty, {});
  }
  obj[1] = tmp4Result;
  return jsx(channelId(5515).AnalyticsLocationProvider, { value: messageId(5515)(messageId(5535).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null });
};
