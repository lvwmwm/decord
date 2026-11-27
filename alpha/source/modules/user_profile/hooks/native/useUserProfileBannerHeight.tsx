// Module ID: 14856
// Function ID: 14857
// Name: useUserProfileBannerHeight
// Dependencies: [7557, 1495, 2]
// Exports: default

// Module 14856 (useUserProfileBannerHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1495 */;
import Constants from "Constants" /* 7557 */;
import size from "module_2" /* 2 */;

const BANNER_ASPECT_RATIO = Constants.BANNER_ASPECT_RATIO;
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx");

export default function useUserProfileBannerHeight(arg0) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (null != arg0) {
    const _Math = Math;
    bound = Math.min(width, arg0);
  }
  return Math.round(bound / BANNER_ASPECT_RATIO);
};
