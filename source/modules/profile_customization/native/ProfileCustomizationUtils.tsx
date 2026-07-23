// Module ID: 7883
// Function ID: 62756
// Name: useEditBannerSource
// Dependencies: [7884, 1392, 665, 2]
// Exports: getAvatarSource, useEditBannerSource, useUserProfileBannerBackgroundColor

// Module 7883 (useEditBannerSource)
const result = require("pad2").fileFinishedImporting("modules/profile_customization/native/ProfileCustomizationUtils.tsx");

export const useEditBannerSource = function useEditBannerSource(arg0) {
  let displayProfile;
  let pendingBanner;
  ({ displayProfile, pendingBanner } = arg0);
  if (null != pendingBanner) {
    return require(7884) /* useDominantRGBFromImage */.memoizedImageSource(pendingBanner);
  } else {
    if (null === pendingBanner) {
      let guildId;
      if (null != displayProfile) {
        guildId = displayProfile.guildId;
      }
      let source = null;
      if (null != guildId) {
        let bannerURL;
        if (null != displayProfile) {
          bannerURL = displayProfile.getBannerURL({ size: 600, canAnimate: true });
        }
        source = require(1392) /* getAvatarURL */.makeSource(bannerURL);
        const obj2 = require(1392) /* getAvatarURL */;
      }
      return source;
    }
    let previewBanner;
    if (null != displayProfile) {
      previewBanner = displayProfile.getPreviewBanner(pendingBanner, true, 600);
    }
    let source1 = null;
    if (null != previewBanner) {
      source1 = require(1392) /* getAvatarURL */.makeSource(previewBanner);
      const obj = require(1392) /* getAvatarURL */;
    }
    return source1;
  }
};
export const useUserProfileBannerBackgroundColor = function useUserProfileBannerBackgroundColor(arg0) {
  let displayProfile;
  let pendingAvatarSrc;
  let user;
  ({ user, pendingAvatarSrc, displayProfile } = arg0);
  if (null == user) {
    let primaryColor;
    const obj3 = require(7884) /* useDominantRGBFromImage */;
    const memoizedImageSourceResult = require(7884) /* useDominantRGBFromImage */.memoizedImageSource(null);
    const obj4 = require(665) /* pad2 */;
    let rgb2intResult = obj4.rgb2int(require(7884) /* useDominantRGBFromImage */.useDominantColorFromImage(null, memoizedImageSourceResult));
    if (null != displayProfile) {
      primaryColor = displayProfile.primaryColor;
    }
    if (null != primaryColor) {
      rgb2intResult = primaryColor;
    }
    return rgb2intResult;
  } else if (null == pendingAvatarSrc) {
    pendingAvatarSrc = user.getAvatarURL(tmp, 80);
  } else if (null == pendingAvatarSrc) {
    let obj = require(1392) /* getAvatarURL */;
    obj = {};
    const merged = Object.assign(user);
    obj["avatar"] = null;
    pendingAvatarSrc = obj.getUserAvatarURL(obj);
  }
};
export const getAvatarSource = function getAvatarSource(guildId, guildId2, avatarSize, acked) {
  let userAvatarURL = avatarSize;
  if (null == guildId) {
    return null;
  } else if (undefined === userAvatarURL) {
    let obj = require(7884) /* useDominantRGBFromImage */;
    let memoizedImageSourceResult = obj.memoizedImageSource(guildId.getAvatarURL(guildId2, 80, !acked));
  } else {
    if (null == userAvatarURL) {
      obj = {};
      const merged = Object.assign(guildId);
      obj["avatar"] = null;
      userAvatarURL = require(1392) /* getAvatarURL */.getUserAvatarURL(obj);
      const obj3 = require(1392) /* getAvatarURL */;
    }
    memoizedImageSourceResult = require(7884) /* useDominantRGBFromImage */.memoizedImageSource(userAvatarURL);
    const obj2 = require(7884) /* useDominantRGBFromImage */;
  }
};
