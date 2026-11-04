// Module ID: 5930
// Function ID: 5931
// Name: LastUsedVideoBackgroundOption
// Dependencies: [19, 1194, 1231, 1383, 5931, 2047, 504, 2]
// Exports: getLastUsedVideoBackgroundOption, useLastUsedVideoBackgroundOption

// Module 5930 (LastUsedVideoBackgroundOption)
import PremiumUtilsDefault from "PremiumUtils" /* 2047 */;
import VideoBackgroundUtils from "VideoBackgroundUtils" /* 5931 */;
import react from "react" /* 19 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx");

export function getLastUsedVideoBackgroundOption(currentUser) {
  let tmp5;
  const videoBackground = UnsyncedUserSettingsStore.videoBackground;
  const obj = VideoBackgroundUtils;
  if (!obj.isCustomBackgroundOption(videoBackground)) {
    let tmp6;
    if (typeof videoBackground !== "number") {
      tmp6 = videoBackground;
    } else {
      tmp6 = null;
      VideoBackgroundUtils;
    }
    tmp5 = tmp6;
  } else {
    tmp5 = null;
    PremiumUtilsDefault;
  }
  return tmp5;
}
export function useLastUsedVideoBackgroundOption() {
  let currentUser;
  let settings;
  let stateFromStores;
  let videoBackground;
  let obj = stateFromStores(504);
  const items = [UnsyncedUserSettingsStore];
  stateFromStores = obj.useStateFromStores(items, () => videoBackground.videoBackground);
  const obj2 = stateFromStores(504);
  const items1 = [UserSettingsProtoStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => settings.settings);
  const items2 = [UserStore];
  const obj3 = stateFromStores(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const voiceAndVideo = stateFromStores1.voiceAndVideo;
  let prop;
  if (voiceAndVideo != null) {
    prop = voiceAndVideo.videoBackgroundFilterDesktop;
  }
  const items3 = [prop, stateFromStores2, stateFromStores];
  return react.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores2) {
      let tmp7;
      const obj = VideoBackgroundUtils;
      const tmp4 = require;
      if (!obj.isCustomBackgroundOption(stateFromStores)) {
        let tmp8;
        if (typeof stateFromStores !== "number") {
          tmp8 = tmp3;
        } else {
          tmp8 = null;
          tmp4(5931);
        }
        tmp7 = tmp8;
      } else {
        tmp7 = null;
        PremiumUtilsDefault;
      }
      tmp2 = tmp7;
    }
    return tmp2;
  }, items3);
}
