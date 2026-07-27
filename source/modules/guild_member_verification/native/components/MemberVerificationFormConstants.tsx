// Module ID: 9076
// Function ID: 71410
// Name: BANNER_RATIO_HEIGHT_16_9
// Dependencies: [1450, 2]
// Exports: useBannerHeight

// Module 9076 (BANNER_RATIO_HEIGHT_16_9)
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormConstants.tsx");

export const BANNER_RATIO_HEIGHT_16_9 = 0.5625;
export const AVATAR_SIZE = 76;
export const AVATAR_BORDER_WIDTH = 6;
export const SCROLL_EVENT_TIMER_MS = 16;
export const useBannerHeight = function useBannerHeight() {
  return importDefault(1450)().width * 0.5625;
};
