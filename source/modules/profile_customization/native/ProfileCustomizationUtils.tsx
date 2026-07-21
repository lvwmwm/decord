// Module ID: 7877
// Function ID: 62709
// Name: useEditBannerSource
// Dependencies: [6, 7, 1851, 6853]
// Exports: getAvatarSource, useEditBannerSource, useUserProfileBannerBackgroundColor

// Module 7877 (useEditBannerSource)
import items from "items";

const result = items.fileFinishedImporting("modules/profile_customization/native/ProfileCustomizationUtils.tsx");

export const useEditBannerSource = function useEditBannerSource(arg0) {
  let displayProfile;
  let pendingBanner;
  ({ displayProfile, pendingBanner } = arg0);
  if (null != pendingBanner) {
    return require(dependencyMap[0]).memoizedImageSource(pendingBanner);
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
          bannerURL = displayProfile.getBannerURL({ "Bool(false)": null, "Bool(false)": null });
        }
        source = require(dependencyMap[1]).makeSource(bannerURL);
        const obj2 = require(dependencyMap[1]);
      }
      return source;
    }
    let previewBanner;
    if (null != displayProfile) {
      previewBanner = displayProfile.getPreviewBanner(pendingBanner, true, 600);
    }
    let source1 = null;
    if (null != previewBanner) {
      source1 = require(dependencyMap[1]).makeSource(previewBanner);
      const obj = require(dependencyMap[1]);
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
    const obj3 = require(dependencyMap[0]);
    const memoizedImageSourceResult = require(dependencyMap[0]).memoizedImageSource(null);
    const obj4 = require(dependencyMap[2]);
    let rgb2intResult = obj4.rgb2int(require(dependencyMap[0]).useDominantColorFromImage(null, memoizedImageSourceResult));
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
    let obj = require(dependencyMap[1]);
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
    let obj = require(dependencyMap[0]);
    let memoizedImageSourceResult = obj.memoizedImageSource(guildId.getAvatarURL(guildId2, 80, !acked));
  } else {
    if (null == userAvatarURL) {
      obj = {};
      const merged = Object.assign(guildId);
      obj["avatar"] = null;
      userAvatarURL = require(dependencyMap[1]).getUserAvatarURL(obj);
      const obj3 = require(dependencyMap[1]);
    }
    memoizedImageSourceResult = require(dependencyMap[0]).memoizedImageSource(userAvatarURL);
    const obj2 = require(dependencyMap[0]);
  }
};
