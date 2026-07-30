// Module ID: 8364
// Function ID: 8365
// Name: useUserProfileBannerHeight
// Dependencies: [5563, 1474, 2]
// Exports: default

// Module 8364 (useUserProfileBannerHeight)
import { BANNER_ASPECT_RATIO } from "ARBITRARY_LARGE_OFFSET";

const result = require("set").fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx");

export default function useUserProfileBannerHeight(arg0) {
  const width = importDefault(1474)().width;
  let bound = width;
  if (null != arg0) {
    const _Math = Math;
    bound = Math.min(width, arg0);
  }
  return Math.round(bound / BANNER_ASPECT_RATIO);
};
