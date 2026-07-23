// Module ID: 7067
// Function ID: 56508
// Name: BurstReactionAnimationPreview
// Dependencies: [31, 33, 7006, 7068, 2]
// Exports: default

// Module 7067 (BurstReactionAnimationPreview)
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
  if (reactionType === require(7006) /* ReactionTypes */.ReactionTypes.BURST) {
    const obj = { isFullscreen: true, channelId, messageId, emoji };
    tmp = jsx(importDefault(7068), { isFullscreen: true, channelId, messageId, emoji });
  }
  return tmp;
};
