// Module ID: 8553
// Function ID: 8554
// Name: profile_customization/ProfileCustomizationUtils
// Dependencies: [558, 568, 1401, 8554, 1096, 2]
// Exports: getAvatarSource

// Module 8553 (profile_customization/ProfileCustomizationUtils)
import c from "c" /* 568 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1096 */;
import AvatarUtils from "AvatarUtils" /* 1401 */;
import VideoBackground from "VideoBackground" /* 8554 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/profile_customization/native/ProfileCustomizationUtils.tsx");

export const useUserProfileBannerBackgroundColor = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  ({ user, guildId, pendingAvatarSrc, displayProfile } = arg0);
  let tmp4 = null;
  if (null != user) {
    if (null == pendingAvatarSrc) {
      if (cResult[0] === guildId) {
      }
      const avatarURL = user.getAvatarURL(guildId, 80);
      cResult[0] = guildId;
      cResult[1] = user;
      cResult[2] = avatarURL;
    } else {
      if (cResult[3] === pendingAvatarSrc) {
        if (cResult[4] === user) {
          let tmp5 = cResult[5];
        }
        tmp4 = tmp5;
      }
      let userAvatarURL = pendingAvatarSrc;
      if (pendingAvatarSrc == null) {
        const obj2 = {};
        const merged = Object.assign(user);
        obj2.avatar = null;
        userAvatarURL = tmp(1401).getUserAvatarURL(obj2);
        const tmpResult = tmp(1401);
      }
      cResult[3] = pendingAvatarSrc;
      cResult[4] = user;
      cResult[5] = userAvatarURL;
      tmp5 = userAvatarURL;
    }
  }
  if (cResult[6] !== tmp4) {
    const memoizedImageSourceResult = tmp(8554).memoizedImageSource(tmp4);
    cResult[6] = tmp4;
    cResult[7] = memoizedImageSourceResult;
    let tmp13 = memoizedImageSourceResult;
    const tmpResult4 = tmp(8554);
  } else {
    tmp13 = cResult[7];
  }
  const dominantColorFromImage = VideoBackground.useDominantColorFromImage(tmp4, tmp13);
  if (cResult[8] !== dominantColorFromImage) {
    const rgb2intResult = tmp(1096).rgb2int(dominantColorFromImage);
    cResult[8] = dominantColorFromImage;
    cResult[9] = rgb2intResult;
    let tmp16 = rgb2intResult;
    const tmpResult6 = tmp(1096);
  } else {
    tmp16 = cResult[9];
  }
  let primaryColor;
  if (displayProfile != null) {
    primaryColor = displayProfile.primaryColor;
  }
  if (primaryColor == null) {
    primaryColor = tmp16;
  }
  return primaryColor;
}) : ((arg0) => {
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
});
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
        userAvatarURL = tmp3(1401).getUserAvatarURL(obj2);
        const tmp3Result = tmp3(1401);
      }
      memoizedImageSourceResult = VideoBackground.memoizedImageSource(userAvatarURL);
      tmp3 = require;
    }
  }
};
