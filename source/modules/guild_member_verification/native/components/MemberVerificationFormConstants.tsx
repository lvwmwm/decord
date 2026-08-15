// Module ID: 8525
// Function ID: 8526
// Name: BANNER_RATIO_HEIGHT_16_9
// Dependencies: [1494, 2]
// Exports: useBannerHeight

// Module 8525 (BANNER_RATIO_HEIGHT_16_9)
let c2 = 0.5625;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormConstants.tsx");

export const BANNER_RATIO_HEIGHT_16_9 = 0.5625;
export const AVATAR_SIZE = 76;
export const AVATAR_BORDER_WIDTH = 6;
export const SCROLL_EVENT_TIMER_MS = 16;
export const useBannerHeight = function useBannerHeight() {
  const size = importDefault(1494)({ ignoreKeyboard: true });
  return Math.min(size.width, size.height) * c2;
};
