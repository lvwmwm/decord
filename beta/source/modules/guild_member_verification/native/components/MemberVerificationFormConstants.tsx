// Module ID: 7708
// Function ID: 7709
// Name: MemberVerificationFormConstants
// Dependencies: [575, 1496, 2]
// Exports: useBannerHeight

// Module 7708 (MemberVerificationFormConstants)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import size_mod from "module_2" /* 2 */;

let c2 = 0.5625;
const lg = nativeDefault.radii.lg;
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormConstants.tsx");

export const BANNER_RATIO_HEIGHT_16_9 = 0.5625;
export const AVATAR_SIZE = 76;
export const AVATAR_BORDER_WIDTH = 6;
export const SHEET_RADIUS = lg;
export const SCROLL_EVENT_TIMER_MS = 16;
export function useBannerHeight() {
  size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  return Math.min(size.width, size.height) * c2;
}
