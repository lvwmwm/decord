// Module ID: 8923
// Function ID: 8924
// Name: useUserProfileBannerHeight
// Dependencies: [6009, 1492, 2]
// Exports: default

// Module 8923 (useUserProfileBannerHeight)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET" /* 6009 */;

const BANNER_ASPECT_RATIO = ARBITRARY_LARGE_OFFSET.BANNER_ASPECT_RATIO;
const result = set.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx");

export default function useUserProfileBannerHeight(arg0) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (null != arg0) {
    const _Math = Math;
    bound = Math.min(width, arg0);
  }
  return Math.round(bound / BANNER_ASPECT_RATIO);
};
