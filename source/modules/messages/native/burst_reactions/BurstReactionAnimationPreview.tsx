// Module ID: 7062
// Function ID: 56474
// Name: BurstReactionAnimationPreview
// Dependencies: []
// Exports: default

// Module 7062 (BurstReactionAnimationPreview)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx");

export default function BurstReactionAnimationPreview(arg0) {
  let channelId;
  let emoji;
  let messageId;
  let reactionType;
  ({ channelId, emoji, messageId, reactionType } = arg0);
  let tmp = null;
  if (reactionType === arg1(dependencyMap[2]).ReactionTypes.BURST) {
    const obj = { isFullscreen: true, channelId, messageId, emoji };
    tmp = jsx(importDefault(dependencyMap[3]), obj);
  }
  return tmp;
};
