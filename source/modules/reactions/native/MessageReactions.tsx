// Module ID: 9420
// Function ID: 73309
// Name: MessageReactions
// Dependencies: []
// Exports: default

// Module 9420 (MessageReactions)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = [];
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/reactions/native/MessageReactions.tsx");

export default function MessageReactions(emoji) {
  let channelId;
  let isSelectedBurst;
  let messageId;
  let reactions;
  ({ channelId, messageId, reactions, isSelectedBurst } = emoji);
  if (isSelectedBurst === undefined) {
    isSelectedBurst = false;
  }
  let obj = { onTapShareForumPost: false, onTapReactionOverflow: false, onTapCopyText: false, onTapOpTag: false, onMediaAttachmentPlaybackEnded: false };
  Object.setPrototypeOf(null);
  const merged = Object.assign(emoji, obj);
  let arg1;
  const tmp4 = function useMessageReactions(channelId, messageId) {
    let items = channelId;
    items = [closure_4];
    const items1 = [channelId, messageId];
    const stateFromStores = items(stateFromStores[3]).useStateFromStores(items, () => {
      const message = message.getMessage(arg0, arg1);
      return null != message ? message.reactions : closure_6;
    }, items1);
    const items2 = [stateFromStores];
    return React.useMemo(() => stateFromStores.filter((count_details) => {
      count_details = count_details.count_details;
      let vote;
      if (null != count_details) {
        vote = count_details.vote;
      }
      return null == vote;
    }), items2);
  }(channelId, messageId);
  let arr = tmp4;
  if (null != reactions) {
    arr = tmp4;
    if (reactions.length > 0) {
      arr = reactions;
    }
  }
  const items = [];
  arg1 = items;
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
  const sorted = items.sort((burst_count, burst_count2) => burst_count2.burst_count > 0 ? burst_count2.burst_count : burst_count2.count - burst_count.burst_count > 0 ? burst_count.burst_count : burst_count.count);
  obj = { value: importDefault(dependencyMap[4])(importDefault(dependencyMap[5]).MESSAGE_REACTIONS).analyticsLocations };
  if (items.length > 0) {
    obj = { channelId, messageId, emoji: emoji.emoji, reactions: items, isSelectedBurst };
    const merged1 = Object.assign(merged);
    let tmp11 = jsx(arg1(dependencyMap[6]).MessageReactionsContent, obj);
  } else {
    tmp11 = jsx(arg1(dependencyMap[6]).MessageReactionsEmpty, {});
  }
  obj.children = tmp11;
  return jsx(arg1(dependencyMap[4]).AnalyticsLocationProvider, obj);
};
