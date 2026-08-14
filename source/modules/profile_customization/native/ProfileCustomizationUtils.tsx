// Module ID: 8373
// Function ID: 8374
// Name: useUserProfileBannerBackgroundColor
// Dependencies: [1435, 8374, 688, 2]
// Exports: getAvatarSource, useUserProfileBannerBackgroundColor

// Module 8373 (useUserProfileBannerBackgroundColor)
const result = require("int2hslRaw").fileFinishedImporting("modules/profile_customization/native/ProfileCustomizationUtils.tsx");

export const useUserProfileBannerBackgroundColor = function useUserProfileBannerBackgroundColor(arg0) {
  let displayProfile;
  let pendingAvatarSrc;
  let user;
  ({ user, pendingAvatarSrc, displayProfile } = arg0);
  if (null == user) {
    const obj3 = require(8374) /* useDominantRGBFromImage */;
    const memoizedImageSourceResult = require(8374) /* useDominantRGBFromImage */.memoizedImageSource(null);
    const obj4 = require(688) /* int2hslRaw */;
    let primaryColor;
    const obj5 = require(8374) /* useDominantRGBFromImage */;
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
    let obj = require(1435) /* getAvatarURL */;
    obj = {};
    const merged = Object.assign(user);
    obj.avatar = null;
    pendingAvatarSrc = obj.getUserAvatarURL(obj);
  }
};
export const getAvatarSource = function getAvatarSource(getAvatarURL) {
  if (null == getAvatarURL) {
    return null;
  } else {
    let userAvatarURL = arg2;
    if (undefined === arg2) {
      let memoizedImageSourceResult = require(8374) /* useDominantRGBFromImage */.memoizedImageSource(getAvatarURL.getAvatarURL(arg1, 80, !arg3));
      const obj4 = require(8374) /* useDominantRGBFromImage */;
      const tmp2 = !arg3;
    } else {
      let obj = require(8374) /* useDominantRGBFromImage */;
      if (userAvatarURL == null) {
        obj = {};
        const merged = Object.assign(getAvatarURL);
        obj.avatar = null;
        userAvatarURL = tmp3(1435).getUserAvatarURL(obj);
        const tmp3Result = tmp3(1435);
      }
      memoizedImageSourceResult = obj.memoizedImageSource(userAvatarURL);
      tmp3 = require;
    }
  }
};
