// Module ID: 9114
// Function ID: 9115
// Name: LastUsedVideoBackgroundOption
// Dependencies: [19, 1184, 1220, 1372, 9115, 4488, 504, 2]
// Exports: getLastUsedVideoBackgroundOption, useLastUsedVideoBackgroundOption

// Module 9114 (LastUsedVideoBackgroundOption)
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import VideoBackgroundUtils from "VideoBackgroundUtils" /* 9115 */;
import noop from "module_19" /* 19 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx");

export const getLastUsedVideoBackgroundOption = function getLastUsedVideoBackgroundOption(currentUser) {
  const videoBackground = UnsyncedUserSettingsStore.videoBackground;
  if (!obj.isCustomBackgroundOption(videoBackground)) {
    if (typeof videoBackground !== "number") {
      let tmp6 = videoBackground;
    } else {
      tmp6 = null;
      const tmpResult = VideoBackgroundUtils;
    }
    let tmp5 = tmp6;
  } else {
    tmp5 = null;
  }
  return tmp5;
};
export const useLastUsedVideoBackgroundOption = function useLastUsedVideoBackgroundOption() {
  const items = [UnsyncedUserSettingsStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => videoBackground.videoBackground);
  let obj = stateFromStores(504);
  const items1 = [UserSettingsProtoStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => settings.settings);
  let obj2 = stateFromStores(504);
  const items2 = [UserStore];
  const stateFromStores2 = stateFromStores(504).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const voiceAndVideo = stateFromStores1.voiceAndVideo;
  let prop;
  if (voiceAndVideo != null) {
    prop = voiceAndVideo.videoBackgroundFilterDesktop;
  }
  const items3 = [prop, stateFromStores2, stateFromStores];
  return noop.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores2) {
      if (!obj.isCustomBackgroundOption(stateFromStores)) {
        if (typeof tmp3 !== "number") {
          let tmp8 = tmp3;
        } else {
          tmp8 = null;
          const tmp4Result = tmp4(9115);
        }
        let tmp7 = tmp8;
      } else {
        tmp7 = null;
      }
      tmp2 = tmp7;
      obj = VideoBackgroundUtils;
      tmp4 = require;
    }
    return tmp2;
  }, items3);
};
