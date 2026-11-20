// Module ID: 5375
// Function ID: 5376
// Name: BurstReactionAnimationPreview
// Dependencies: [19, 21, 5376, 5377, 2]
// Exports: default

// Module 5375 (BurstReactionAnimationPreview)
import Fragment from "Fragment" /* 21 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 5376 */;
import BurstReactionAnimationDefault from "BurstReactionAnimation" /* 5377 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx");

export default function BurstReactionAnimationPreview(arg0) {
  let channelId;
  let emoji;
  let messageId;
  let reactionType;
  ({ channelId, emoji, messageId, reactionType } = arg0);
  let tmp2 = null;
  if (reactionType === MessageReactionsTypes.ReactionTypes.BURST) {
    tmp2 = jsx(BurstReactionAnimationDefault, { isFullscreen: true, channelId, messageId, emoji });
  }
  return tmp2;
};
