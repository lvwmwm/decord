// Module ID: 11699
// Function ID: 90741
// Name: PX_24
// Dependencies: [689, 1273, 2]
// Exports: default

// Module 11699 (PX_24)
const PX_24 = require("_createForOfIteratorHelperLoose").space.PX_24;
const tmp2 = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL];
let closure_1 = tmp2;
const PX_16 = require("_createForOfIteratorHelperLoose").space.PX_16;
const PX_12 = require("_createForOfIteratorHelperLoose").space.PX_12;
const result = require("set").fileFinishedImporting("modules/chat/native/placeholder/getChatPlaceholderRowHeight.tsx");

export default function getChatPlaceholderRowHeight(arg0) {
  return PX_24 + Math.max(closure_1, PX_16 + arg0 * (PX_16 + PX_12));
};
export const CHAT_PLACEHOLDER_ROW_MARGIN_TOP = PX_24;
export const CHAT_PLACEHOLDER_ROW_AVATAR_HEIGHT = tmp2;
export const CHAT_PLACEHOLDER_ROW_LINE_HEIGHT = PX_16;
export const CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP = PX_12;
