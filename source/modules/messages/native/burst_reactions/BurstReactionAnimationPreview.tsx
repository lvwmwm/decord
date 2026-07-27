// Module ID: 6084
// Function ID: 54330
// Name: BurstReactionAnimationPreview
// Dependencies: [31, 33, 6023, 6085, 2]
// Exports: default

// Module 6084 (BurstReactionAnimationPreview)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ReactionTypes").fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx");

export default function BurstReactionAnimationPreview(arg0) {
  let channelId;
  let emoji;
  let messageId;
  let reactionType;
  ({ channelId, emoji, messageId, reactionType } = arg0);
  let tmp = null;
  if (reactionType === require(6023) /* ReactionTypes */.ReactionTypes.BURST) {
    const obj = { isFullscreen: true, channelId, messageId, emoji };
    tmp = jsx(importDefault(6085), { isFullscreen: true, channelId, messageId, emoji });
  }
  return tmp;
};
