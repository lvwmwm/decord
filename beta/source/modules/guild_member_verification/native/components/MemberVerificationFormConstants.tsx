// Module ID: 5792
// Function ID: 5793
// Name: MemberVerificationFormConstants
// Dependencies: [558, 568, 1482, 2]

// Module 5792 (MemberVerificationFormConstants)
import c from "c" /* 568 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1482 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3 = 0.5625;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormConstants.tsx");

export const BANNER_RATIO_HEIGHT_16_9 = 0.5625;
export const AVATAR_SIZE = 76;
export const AVATAR_BORDER_WIDTH = 6;
export const SCROLL_EVENT_TIMER_MS = 16;
export const useBannerHeight = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { ignoreKeyboard: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const size = useWindowDimensionsDefault(first);
  return Math.min(size.width, size.height) * c3;
}) : (() => {
  const size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  return Math.min(size.width, size.height) * c3;
});
