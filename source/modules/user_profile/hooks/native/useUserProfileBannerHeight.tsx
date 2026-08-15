// Module ID: 8972
// Function ID: 8973
// Name: useUserProfileBannerHeight
// Dependencies: [7186, 1494, 2]
// Exports: default

// Module 8972 (useUserProfileBannerHeight)
import { BANNER_ASPECT_RATIO } from "ARBITRARY_LARGE_OFFSET";

const result = require("set").fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx");

export default function useUserProfileBannerHeight(arg0) {
  const width = importDefault(1494)().width;
  let bound = width;
  if (null != arg0) {
    const _Math = Math;
    bound = Math.min(width, arg0);
  }
  return Math.round(bound / BANNER_ASPECT_RATIO);
};
