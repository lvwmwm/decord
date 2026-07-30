// Module ID: 6134
// Function ID: 6135
// Name: BurstReactionAnimationPreview
// Dependencies: [19, 21, 6072, 6135, 2]
// Exports: default

// Module 6134 (BurstReactionAnimationPreview)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ReactionTypes").fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx");

export default function BurstReactionAnimationPreview(arg0) {
  let channelId;
  let emoji;
  let messageId;
  let reactionType;
  ({ channelId, emoji, messageId, reactionType } = arg0);
  let tmp2 = null;
  if (reactionType === require(6072) /* ReactionTypes */.ReactionTypes.BURST) {
    const obj = { isFullscreen: true, channelId: null, messageId: null, emoji: null };
    obj[1] = channelId;
    obj[2] = messageId;
    obj[3] = emoji;
    tmp2 = jsx(importDefault(6135), { isFullscreen: true, channelId: null, messageId: null, emoji: null });
  }
  return tmp2;
};
