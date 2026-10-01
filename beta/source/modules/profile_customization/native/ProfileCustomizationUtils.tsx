// Module ID: 7693
// Function ID: 7694
// Name: profile_customization/ProfileCustomizationUtils
// Dependencies: [1397, 7694, 1092, 2]
// Exports: getAvatarSource, useUserProfileBannerBackgroundColor

// Module 7693 (profile_customization/ProfileCustomizationUtils)
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import VideoBackground from "VideoBackground" /* 7694 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/profile_customization/native/ProfileCustomizationUtils.tsx");

export const useUserProfileBannerBackgroundColor = function useUserProfileBannerBackgroundColor(arg0) {
  let displayProfile;
  let pendingAvatarSrc;
  let user;
  ({ user, pendingAvatarSrc, displayProfile } = arg0);
  let tmp2 = null;
  if (null != user) {
    if (null == pendingAvatarSrc) {
      pendingAvatarSrc = user.getAvatarURL(tmp, 80);
    } else if (pendingAvatarSrc == null) {
      const obj = { avatar: null };
      const getUserAvatarURL = AvatarUtils.getUserAvatarURL;
      AvatarUtils;
      const merged = Object.assign(user);
      pendingAvatarSrc = getUserAvatarURL(obj);
    }
    tmp2 = pendingAvatarSrc;
  }
  const obj2 = VideoBackground;
  const memoizedImageSourceResult = obj2.memoizedImageSource(tmp2);
  const rgb2int = utils_ColorUtils.rgb2int;
  utils_ColorUtils;
  let primaryColor;
  const obj3 = VideoBackground;
  const rgb2intResult = rgb2int(obj3.useDominantColorFromImage(tmp2, memoizedImageSourceResult));
  if (displayProfile != null) {
    primaryColor = displayProfile.primaryColor;
  }
  if (primaryColor == null) {
    primaryColor = rgb2intResult;
  }
  return primaryColor;
};
export const getAvatarSource = function getAvatarSource(getAvatarURL, arg1, arg2, arg3) {
  let tmp = null;
  if (null != getAvatarURL) {
    let memoizedImageSourceResult;
    let userAvatarURL = arg2;
    if (undefined === arg2) {
      const obj2 = VideoBackground;
      memoizedImageSourceResult = obj2.memoizedImageSource(getAvatarURL.getAvatarURL(arg1, 80, !arg3));
    } else {
      const memoizedImageSource = VideoBackground.memoizedImageSource;
      VideoBackground;
      if (userAvatarURL == null) {
        const obj = { avatar: null };
        const getUserAvatarURL = tmp3(1397).getUserAvatarURL;
        AvatarUtils;
        const merged = Object.assign(getAvatarURL);
        userAvatarURL = getUserAvatarURL(obj);
      }
      memoizedImageSourceResult = memoizedImageSource(userAvatarURL);
    }
    tmp = memoizedImageSourceResult;
  }
  return tmp;
};
