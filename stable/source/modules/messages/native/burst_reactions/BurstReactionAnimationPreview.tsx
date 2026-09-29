// Module ID: 8099
// Function ID: 8100
// Name: BurstReactionAnimationPreview
// Dependencies: [19, 21, 8037, 8100, 2]
// Exports: default

// Module 8099 (BurstReactionAnimationPreview)
import MessageReactionsTypes from "MessageReactionsTypes" /* 8037 */;
import BurstReactionAnimationDefault from "BurstReactionAnimation" /* 8100 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx");

export default function BurstReactionAnimationPreview(arg0) {
  ({ channelId, emoji, messageId, reactionType } = arg0);
  let tmp2 = null;
  if (reactionType === MessageReactionsTypes.ReactionTypes.BURST) {
    const obj = { isFullscreen: true, channelId, messageId, emoji };
    tmp2 = jsx(BurstReactionAnimationDefault, { isFullscreen: true, channelId, messageId, emoji });
  }
  return tmp2;
};
