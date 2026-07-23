// Module ID: 9427
// Function ID: 73350
// Name: MessageReactions
// Dependencies: [31, 4349, 33, 566, 5464, 5484, 9428, 2]
// Exports: default

// Module 9427 (MessageReactions)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
let closure_6 = [];
const result = require("jsxProd").fileFinishedImporting("modules/reactions/native/MessageReactions.tsx");

export default function MessageReactions(emoji) {
  let channelId;
  let isSelectedBurst;
  let messageId;
  let reactions;
  ({ channelId, messageId, reactions, isSelectedBurst } = emoji);
  if (isSelectedBurst === undefined) {
    isSelectedBurst = false;
  }
  let obj = { channelId: 0, messageId: 0, emoji: 0, reactions: 0, isSelectedBurst: 0 };
  Object.setPrototypeOf(null);
  let merged = Object.assign(emoji, obj);
  let items;
  const tmp4 = (function useMessageReactions(channelId, messageId) {
    let closure_0 = channelId;
    let closure_1 = messageId;
    const items = [outer1_4];
    const items1 = [channelId, messageId];
    const stateFromStores = items(outer1_2[3]).useStateFromStores(items, () => {
      const message = outer2_4.getMessage(closure_0, closure_1);
      return null != message ? message.reactions : outer2_6;
    }, items1);
    const items2 = [stateFromStores];
    return outer1_3.useMemo(() => stateFromStores.filter((count_details) => {
      count_details = count_details.count_details;
      let vote;
      if (null != count_details) {
        vote = count_details.vote;
      }
      return null == vote;
    }), items2);
  })(channelId, messageId);
  let arr = tmp4;
  if (null != reactions) {
    arr = tmp4;
    if (reactions.length > 0) {
      arr = reactions;
    }
  }
  items = [];
  const item = arr.forEach((burst_count) => {
    if (burst_count.burst_count > 0) {
      if (burst_count.count > 0) {
        let obj = {};
        const merged = Object.assign(burst_count);
        obj["count"] = 0;
        items.push(obj);
        obj = {};
        const merged1 = Object.assign(burst_count);
        obj["burst_count"] = 0;
        items.push(obj);
      }
    }
    obj = {};
    const merged2 = Object.assign(burst_count);
    items.push(obj);
  });
  const sorted = items.sort((burst_count, burst_count2) => (burst_count2.burst_count > 0 ? burst_count2.burst_count : burst_count2.count) - (burst_count.burst_count > 0 ? burst_count.burst_count : burst_count.count));
  obj = { value: importDefault(5464)(importDefault(5484).MESSAGE_REACTIONS).analyticsLocations };
  if (items.length > 0) {
    obj = { channelId, messageId, emoji: emoji.emoji, reactions: items, isSelectedBurst };
    let merged1 = Object.assign(merged);
    let tmp11 = jsx(items(9428).MessageReactionsContent, { channelId, messageId, emoji: emoji.emoji, reactions: items, isSelectedBurst });
  } else {
    tmp11 = jsx(items(9428).MessageReactionsEmpty, {});
  }
  obj.children = tmp11;
  return jsx(items(5464).AnalyticsLocationProvider, { value: importDefault(5464)(importDefault(5484).MESSAGE_REACTIONS).analyticsLocations });
};
