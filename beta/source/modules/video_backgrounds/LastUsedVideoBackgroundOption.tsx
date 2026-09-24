// Module ID: 9932
// Function ID: 9933
// Name: LastUsedVideoBackgroundOption
// Dependencies: [19, 1224, 1376, 9929, 4450, 558, 568, 504, 2]
// Exports: getLastUsedVideoBackgroundOption

// Module 9932 (LastUsedVideoBackgroundOption)
import c from "c" /* 568 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4450 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1224 */;
import UserStore from "UserStore" /* 1376 */;

const initialize = obj(504);
const VideoBackgroundUtils = obj(9929);
require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx");

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
export const useLastUsedVideoBackgroundOption = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let obj = require;
  let result = dependencyMap;
  const cResult = c.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    const fn = function s() {
      return settings.settings;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp8 = fn2;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const objResult = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp7, tmp8);
  const voiceAndVideo = stateFromStores.voiceAndVideo;
  if (voiceAndVideo != null) {
    const videoBackgroundFilterDesktop = voiceAndVideo.videoBackgroundFilterDesktop;
  }
  if (null == stateFromStores1) {
    return null;
  } else {
    if (cResult[4] === stateFromStores1) {
    }
    const videoBackgroundOptionFromProto = VideoBackgroundUtils.getVideoBackgroundOptionFromProto(videoBackgroundFilterDesktop, stateFromStores1.id);
    const objResult5 = VideoBackgroundUtils;
    if (!objResult6.isCustomBackgroundOption(videoBackgroundOptionFromProto)) {
      if (typeof videoBackgroundOptionFromProto !== "number") {
        let tmp15 = videoBackgroundOptionFromProto;
      } else {
        obj = VideoBackgroundUtils;
        result = obj.isDefaultBackgroundOption(videoBackgroundOptionFromProto);
        tmp15 = null;
      }
      let tmp14 = tmp15;
    } else {
      tmp14 = null;
    }
    cResult[4] = stateFromStores1;
    cResult[5] = videoBackgroundFilterDesktop;
    cResult[6] = tmp14;
    objResult6 = VideoBackgroundUtils;
  }
}) : (() => {
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
          const tmp4Result = tmp4(9929);
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
});
