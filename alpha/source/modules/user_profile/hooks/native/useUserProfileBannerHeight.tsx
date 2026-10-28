// Module ID: 8758
// Function ID: 8759
// Name: useUserProfileBannerHeight
// Dependencies: [7340, 558, 576, 1496, 2]

// Module 8758 (useUserProfileBannerHeight)
import react from "react" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import Constants from "Constants" /* 7340 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const BANNER_ASPECT_RATIO = Constants.BANNER_ASPECT_RATIO;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserProfileBannerHeight(arg0) {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (null != arg0) {
    const _Math = Math;
    bound = Math.min(width, arg0);
  }
  if (cResult[0] !== bound) {
    const _Math2 = Math;
    const rounded = Math.round(bound / BANNER_ASPECT_RATIO);
    cResult[0] = bound;
    cResult[1] = rounded;
    tmp4 = rounded;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useUserProfileBannerHeight(arg0) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (null != arg0) {
    const _Math = Math;
    bound = Math.min(width, arg0);
  }
  return Math.round(bound / BANNER_ASPECT_RATIO);
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx");

export default tmp2;
