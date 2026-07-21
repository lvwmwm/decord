// Module ID: 8493
// Function ID: 67811
// Name: useUserProfileBannerHeight
// Dependencies: []
// Exports: default

// Module 8493 (useUserProfileBannerHeight)
const BANNER_ASPECT_RATIO = require(dependencyMap[0]).BANNER_ASPECT_RATIO;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx");

export default function useUserProfileBannerHeight(arg0) {
  const width = importDefault(dependencyMap[1])().width;
  let bound = width;
  if (null != arg0) {
    const _Math = Math;
    bound = Math.min(width, arg0);
  }
  return Math.round(bound / BANNER_ASPECT_RATIO);
};
