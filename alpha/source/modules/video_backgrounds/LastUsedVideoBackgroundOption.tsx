// Module ID: 10001
// Function ID: 10002
// Name: LastUsedVideoBackgroundOption
// Dependencies: [19, 1220, 1372, 9998, 4481, 504, 2]
// Exports: getLastUsedVideoBackgroundOption, useLastUsedVideoBackgroundOption

// Module 10001 (LastUsedVideoBackgroundOption)
import PremiumUtilsDefault from "PremiumUtils" /* 4481 */;
import VideoBackgroundUtils from "VideoBackgroundUtils" /* 9998 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx");

export const getLastUsedVideoBackgroundOption = function getLastUsedVideoBackgroundOption(currentUser) {
  const voiceAndVideo = UserSettingsProtoStore.settings.voiceAndVideo;
  let prop;
  if (voiceAndVideo != null) {
    prop = voiceAndVideo.videoBackgroundFilterDesktop;
  }
  const videoBackgroundOptionFromProto = VideoBackgroundUtils.getVideoBackgroundOptionFromProto(prop, currentUser.id);
  if (!obj2.isCustomBackgroundOption(videoBackgroundOptionFromProto)) {
    if (typeof videoBackgroundOptionFromProto !== "number") {
      let tmp7 = videoBackgroundOptionFromProto;
    } else {
      tmp7 = null;
      const tmp2Result = VideoBackgroundUtils;
    }
    let tmp6 = tmp7;
  } else {
    tmp6 = null;
  }
  return tmp6;
};
export const useLastUsedVideoBackgroundOption = function useLastUsedVideoBackgroundOption() {
  const items = [UserSettingsProtoStore];
  const stateFromStores = stateFromStores1(504).useStateFromStores(items, () => settings.settings);
  let obj = stateFromStores1(504);
  const items1 = [UserStore];
  stateFromStores1 = stateFromStores1(504).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const voiceAndVideo = stateFromStores.voiceAndVideo;
  let prop;
  if (voiceAndVideo != null) {
    prop = voiceAndVideo.videoBackgroundFilterDesktop;
  }
  const items2 = [prop, stateFromStores1];
  return noop.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores1) {
      const videoBackgroundOptionFromProto = VideoBackgroundUtils.getVideoBackgroundOptionFromProto(prop, tmp.id);
      const tmp4 = require;
      if (!obj2.isCustomBackgroundOption(videoBackgroundOptionFromProto)) {
        if (typeof videoBackgroundOptionFromProto !== "number") {
          let tmp9 = videoBackgroundOptionFromProto;
        } else {
          tmp9 = null;
          const tmp4Result = tmp4(9998);
        }
        let tmp8 = tmp9;
      } else {
        tmp8 = null;
      }
      tmp2 = tmp8;
      obj2 = VideoBackgroundUtils;
    }
    return tmp2;
  }, items2);
};
