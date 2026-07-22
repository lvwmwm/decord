// Module ID: 9141
// Function ID: 71674
// Name: BANNER_RATIO_HEIGHT_16_9
// Dependencies: [31, 33]
// Exports: useBannerHeight

// Module 9141 (BANNER_RATIO_HEIGHT_16_9)
import module_33 from "module_33";

const result = module_33.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormConstants.tsx");

export const BANNER_RATIO_HEIGHT_16_9 = 0.5625;
export const AVATAR_SIZE = 76;
export const AVATAR_BORDER_WIDTH = 6;
export const SCROLL_EVENT_TIMER_MS = 16;
export const useBannerHeight = function useBannerHeight() {
  return importDefault(dependencyMap[0])().width * 0.5625;
};
