// Module ID: 9929
// Function ID: 76832
// Name: useVoteReactors
// Dependencies: []
// Exports: default

// Module 9929 (useVoteReactors)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).DEFAULT_NUM_REACTION_USERS;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/polls/useVoteReactors.tsx");

export default function useVoteReactors(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const messageId = channelId.messageId;
  const importDefault = messageId;
  const reaction = channelId.reaction;
  const dependencyMap = reaction;
  let vote;
  let obj = arg1(dependencyMap[2]);
  const items = [closure_3];
  const items1 = [channelId, messageId, reaction.emoji];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let items;
    const reactions = reactions.getReactions(channelId, messageId, reaction.emoji, closure_4, channelId(reaction[3]).ReactionTypes.VOTE);
    if (null != reactions) {
      items = reactions.values();
    }
    if (null == items) {
      items = [];
    }
    return Array.from(items);
  }, items1, importDefault(dependencyMap[4]));
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
