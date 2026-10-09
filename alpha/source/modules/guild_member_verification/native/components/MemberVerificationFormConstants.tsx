// Module ID: 6156
// Function ID: 6157
// Name: MemberVerificationFormConstants
// Dependencies: [558, 576, 1497, 2]

// Module 6156 (MemberVerificationFormConstants)
import react from "react" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3 = 0.5625;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBannerHeight() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { ignoreKeyboard: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  size = useWindowDimensionsDefault(first);
  return Math.min(size.width, size.height) * c3;
}) : (function useBannerHeight() {
  size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  return Math.min(size.width, size.height) * c3;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormConstants.tsx");

export const BANNER_RATIO_HEIGHT_16_9 = 0.5625;
export const AVATAR_SIZE = 76;
export const AVATAR_BORDER_WIDTH = 6;
export const SCROLL_EVENT_TIMER_MS = 16;
export const useBannerHeight = tmp2;
