// Module ID: 10825
// Function ID: 10826
// Name: MessageReactions
// Dependencies: [19, 5056, 21, 504, 6583, 6603, 10826, 2]
// Exports: default

// Module 10825 (MessageReactions)
import Fragment from "Fragment" /* 21 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import react from "react" /* 19 */;
import MessageStore from "MessageStore" /* 5056 */;
import size from "module_2" /* 2 */;

let count_details, message;

const jsx = Fragment.jsx;
let closure_6 = [];
const result = size.fileFinishedImporting("modules/reactions/native/MessageReactions.tsx");

export default function MessageReactions(emoji) {
  let channelId;
  let isSelectedBurst;
  let messageId;
  let reactions;
  let tmp9Result;
  ({ channelId, messageId, reactions, isSelectedBurst } = emoji);
  emoji = emoji.emoji;
  if (isSelectedBurst === undefined) {
    isSelectedBurst = false;
  }
  let merged = Object.assign(emoji, Object.assign({ channelId: 0, messageId: 0, emoji: 0, reactions: 0, isSelectedBurst: 0 }));
  let items3;
  const tmp3 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp3(AnalyticsLocationDefault.MESSAGE_REACTIONS).analyticsLocations;
  let obj = items3(504);
  const items = [MessageStore];
  const items1 = [channelId, messageId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    message = message.getMessage(channelId, messageId);
    return null != message ? message.reactions : closure_2_6;
  }, items1);
  const items2 = [stateFromStores];
  const memo = react.useMemo(() => stateFromStores.filter((count_details) => {
    count_details = count_details.count_details;
    let vote;
    if (count_details != null) {
      vote = count_details.vote;
    }
    return null == vote;
  }), items2);
  let arr4 = memo;
  if (null != reactions) {
    arr4 = memo;
    if (reactions.length > 0) {
      arr4 = reactions;
    }
  }
  items3 = [];
  const item = arr4.forEach((burst_count) => {
    if (burst_count.burst_count > 0) {
      if (burst_count.count > 0) {
        const push2 = items3.push;
        const obj2 = { count: 0 };
        const merged = Object.assign(burst_count);
        push2(obj2);
        const push3 = items3.push;
        const obj3 = { burst_count: 0 };
        const merged1 = Object.assign(burst_count);
        push3(obj3);
      }
    }
    const push = items3.push;
    const obj = {};
    const merged2 = Object.assign(burst_count);
    push(obj);
  });
  const sorted = items3.sort((burst_count, burst_count2) => (burst_count2.burst_count > 0 ? burst_count2.burst_count : burst_count2.count) - (burst_count.burst_count > 0 ? burst_count.burst_count : burst_count.count));
  let obj2 = { value: analyticsLocations, children: tmp9Result };
  const AnalyticsLocationProvider = tmp4(6583).AnalyticsLocationProvider;
  if (items3.length > 0) {
    let obj3 = { channelId, messageId, emoji, reactions: items3, isSelectedBurst };
    const MessageReactionsContent = tmp4(10826).MessageReactionsContent;
    let merged1 = Object.assign(merged);
    tmp9Result = tmp9(MessageReactionsContent, obj3);
  } else {
    tmp9Result = tmp9(tmp4(10826).MessageReactionsEmpty, {});
  }
  return jsx(AnalyticsLocationProvider, obj2);
};
