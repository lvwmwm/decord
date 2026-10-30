// Module ID: 5609
// Function ID: 5610
// Name: BurstReactionAnimationPreview
// Dependencies: [19, 21, 5610, 5611, 2]
// Exports: default

// Module 5609 (BurstReactionAnimationPreview)
import Fragment from "Fragment" /* 21 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 5610 */;
import BurstReactionAnimationDefault from "BurstReactionAnimation" /* 5611 */;
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
