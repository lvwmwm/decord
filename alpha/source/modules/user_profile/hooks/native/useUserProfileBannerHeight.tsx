// Module ID: 8604
// Function ID: 8605
// Name: useUserProfileBannerHeight
// Dependencies: [7972, 1496, 2]
// Exports: default

// Module 8604 (useUserProfileBannerHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import Constants from "Constants" /* 7972 */;
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
