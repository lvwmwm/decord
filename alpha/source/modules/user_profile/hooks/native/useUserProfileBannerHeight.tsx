// Module ID: 7841
// Function ID: 7842
// Name: useUserProfileBannerHeight
// Dependencies: [6795, 1479, 2]
// Exports: default

// Module 7841 (useUserProfileBannerHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import Constants from "Constants" /* 6795 */;
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
