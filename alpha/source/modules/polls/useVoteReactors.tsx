// Module ID: 12373
// Function ID: 12374
// Name: useVoteReactors
// Dependencies: [8396, 1072, 504, 5610, 1343, 2]
// Exports: default

// Module 12373 (useVoteReactors)
import Constants from "Constants" /* 1072 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 5610 */;
import MessageReactionsStore from "MessageReactionsStore" /* 8396 */;
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
