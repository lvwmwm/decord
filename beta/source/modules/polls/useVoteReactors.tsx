// Module ID: 11223
// Function ID: 11224
// Name: useVoteReactors
// Dependencies: [7181, 1074, 504, 7182, 1331, 2]
// Exports: default

// Module 11223 (useVoteReactors)
import Constants from "Constants" /* 1074 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7182 */;
import MessageReactionsStore from "MessageReactionsStore" /* 7181 */;
import size from "module_2" /* 2 */;

let closure_4 = Constants.DEFAULT_NUM_REACTION_USERS;
const result = size.fileFinishedImporting("modules/polls/useVoteReactors.tsx");

export default function useVoteReactors(channelId) {
  let num;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  let items = [MessageReactionsStore];
  const items1 = [channelId, messageId, reaction.emoji];
  const obj = channelId(reaction[2]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const reactions = MessageReactionsStore.getReactions(channelId, messageId, reaction.emoji, closure_4, MessageReactionsTypes.ReactionTypes.VOTE);
    let items;
    const _Array = Array;
    if (reactions != null) {
      items = reactions.values();
    }
    if (items == null) {
      items = [];
    }
    return from(items);
  }, items1, messageId(reaction[4]));
  const count_details = reaction.count_details;
  const obj2 = { reactors: stateFromStores, hasMore: num > stateFromStores.length };
  num = undefined;
  if (count_details != null) {
    num = count_details.vote;
  }
  if (num == null) {
    num = 0;
  }
  return obj2;
};
