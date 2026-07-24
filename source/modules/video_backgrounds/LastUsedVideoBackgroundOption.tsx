// Module ID: 8892
// Function ID: 70093
// Name: getOptionFromSettingsFiltered
// Dependencies: [31, 1316, 1849, 8889, 3776, 566, 2]
// Exports: getLastUsedVideoBackgroundOption, useLastUsedVideoBackgroundOption

// Module 8892 (getOptionFromSettingsFiltered)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
function getOptionFromSettingsFiltered(prop, id) {
  const videoBackgroundOptionFromProto = require(8889) /* isCustomBackgroundOption */.getVideoBackgroundOptionFromProto(prop, id.id);
  const obj = require(8889) /* isCustomBackgroundOption */;
  if (!obj2.isCustomBackgroundOption(videoBackgroundOptionFromProto)) {
    if ("number" !== typeof videoBackgroundOptionFromProto) {
      let tmp7 = videoBackgroundOptionFromProto;
    } else {
      tmp7 = null;
      const obj4 = require(8889) /* isCustomBackgroundOption */;
    }
    let tmp4 = tmp7;
  } else {
    tmp4 = null;
    const obj3 = importDefault(3776);
  }
  return tmp4;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx");

export const getLastUsedVideoBackgroundOption = function getLastUsedVideoBackgroundOption(currentUser) {
  const voiceAndVideo = settings.settings.voiceAndVideo;
  let prop;
  if (null != voiceAndVideo) {
    prop = voiceAndVideo.videoBackgroundFilterDesktop;
  }
  return getOptionFromSettingsFiltered(prop, currentUser);
};
export const useLastUsedVideoBackgroundOption = function useLastUsedVideoBackgroundOption() {
  let prop;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = stateFromStores1(566).useStateFromStores(items, () => outer1_4.settings);
  const obj = stateFromStores1(566);
  const items1 = [closure_5];
  stateFromStores1 = stateFromStores1(566).useStateFromStores(items1, () => outer1_5.getCurrentUser());
  const voiceAndVideo = stateFromStores.voiceAndVideo;
  if (null != voiceAndVideo) {
    prop = voiceAndVideo.videoBackgroundFilterDesktop;
  }
  const items2 = [prop, stateFromStores1];
  return React.useMemo(() => {
    let tmp = null;
    if (null != stateFromStores1) {
      tmp = outer1_6(prop, stateFromStores1);
    }
    return tmp;
  }, items2);
};
