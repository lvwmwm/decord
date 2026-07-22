// Module ID: 11662
// Function ID: 90454
// Name: PX_24
// Dependencies: []
// Exports: default

// Module 11662 (PX_24)
const PX_24 = importDefault(dependencyMap[0]).space.PX_24;
const tmp2 = arg1(dependencyMap[1]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[1]).AvatarSizes.NORMAL];
const PX_16 = importDefault(dependencyMap[0]).space.PX_16;
const PX_12 = importDefault(dependencyMap[0]).space.PX_12;
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/chat/native/placeholder/getChatPlaceholderRowHeight.tsx");

export default function getChatPlaceholderRowHeight(arg0) {
  return PX_24 + Math.max(tmp2, PX_16 + arg0 * (PX_16 + PX_12));
};
export const CHAT_PLACEHOLDER_ROW_MARGIN_TOP = PX_24;
export const CHAT_PLACEHOLDER_ROW_AVATAR_HEIGHT = tmp2;
export const CHAT_PLACEHOLDER_ROW_LINE_HEIGHT = PX_16;
export const CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP = PX_12;
