// Module ID: 8363
// Function ID: 8364
// Name: profile_customization/ProfileCustomizationUtils
// Dependencies: [1396, 8364, 1091, 2]
// Exports: getAvatarSource, useUserProfileBannerBackgroundColor

// Module 8363 (profile_customization/ProfileCustomizationUtils)
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import VideoBackground from "VideoBackground" /* 8364 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/profile_customization/native/ProfileCustomizationUtils.tsx");

export const useUserProfileBannerBackgroundColor = function useUserProfileBannerBackgroundColor(arg0) {
  ({ user, pendingAvatarSrc, displayProfile } = arg0);
  if (null == user) {
    const memoizedImageSourceResult = VideoBackground.memoizedImageSource(null);
    let primaryColor;
    if (displayProfile != null) {
      primaryColor = displayProfile.primaryColor;
    }
    if (primaryColor == null) {
      primaryColor = rgb2intResult;
    }
    return primaryColor;
  } else if (null == pendingAvatarSrc) {
    pendingAvatarSrc = user.getAvatarURL(tmp, 80);
  } else if (pendingAvatarSrc == null) {
    const obj2 = {};
    const merged = Object.assign(user);
    obj2.avatar = null;
    pendingAvatarSrc = AvatarUtils.getUserAvatarURL(obj2);
  }
};
export const getAvatarSource = function getAvatarSource(getAvatarURL, arg1, arg2, arg3) {
  if (null == getAvatarURL) {
    return null;
  } else {
    let userAvatarURL = arg2;
    if (undefined === arg2) {
      let memoizedImageSourceResult = VideoBackground.memoizedImageSource(getAvatarURL.getAvatarURL(arg1, 80, !arg3));
      const tmp2 = !arg3;
    } else {
      if (userAvatarURL == null) {
        const obj2 = {};
        const merged = Object.assign(getAvatarURL);
        obj2.avatar = null;
        userAvatarURL = tmp3(1396).getUserAvatarURL(obj2);
        const tmp3Result = tmp3(1396);
      }
      memoizedImageSourceResult = VideoBackground.memoizedImageSource(userAvatarURL);
      tmp3 = require;
    }
  }
};
