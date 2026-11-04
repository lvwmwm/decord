// Module ID: 6949
// Function ID: 6950
// Name: MemberVerificationFormConstants
// Dependencies: [1491, 2]
// Exports: useBannerHeight

// Module 6949 (MemberVerificationFormConstants)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1491 */;
import size_mod from "module_2" /* 2 */;

let c2 = 0.5625;
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormConstants.tsx");

export const BANNER_RATIO_HEIGHT_16_9 = 0.5625;
export const AVATAR_SIZE = 76;
export const AVATAR_BORDER_WIDTH = 6;
export const SCROLL_EVENT_TIMER_MS = 16;
export function useBannerHeight() {
  size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  return Math.min(size.width, size.height) * c2;
}
