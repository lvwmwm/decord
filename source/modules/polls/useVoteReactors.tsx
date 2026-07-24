// Module ID: 9970
// Function ID: 77090
// Name: useVoteReactors
// Dependencies: [7003, 653, 566, 7005, 636, 2]
// Exports: default

// Module 9970 (useVoteReactors)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DEFAULT_NUM_REACTION_USERS as closure_4 } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/polls/useVoteReactors.tsx");

export default function useVoteReactors(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  let vote;
  let obj = channelId(reaction[2]);
  let items = [_isNativeReflectConstruct];
  const items1 = [channelId, messageId, reaction.emoji];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let items;
    const reactions = outer1_3.getReactions(channelId, messageId, reaction.emoji, outer1_4, channelId(reaction[3]).ReactionTypes.VOTE);
    if (null != reactions) {
      items = reactions.values();
    }
    if (null == items) {
      items = [];
    }
    return Array.from(items);
  }, items1, messageId(reaction[4]));
  obj = { reactors: stateFromStores };
  const count_details = reaction.count_details;
  if (null != count_details) {
    vote = count_details.vote;
  }
  let num = 0;
  if (null != vote) {
    num = vote;
  }
  obj.hasMore = num > stateFromStores.length;
  return obj;
};
