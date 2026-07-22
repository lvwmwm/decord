// Module ID: 8846
// Function ID: 69837
// Name: getOptionFromSettingsFiltered
// Dependencies: []
// Exports: getLastUsedVideoBackgroundOption, useLastUsedVideoBackgroundOption

// Module 8846 (getOptionFromSettingsFiltered)
function getOptionFromSettingsFiltered(prop, id) {
  const videoBackgroundOptionFromProto = id(dependencyMap[3]).getVideoBackgroundOptionFromProto(prop, id.id);
  const obj = id(dependencyMap[3]);
  if (!obj2.isCustomBackgroundOption(videoBackgroundOptionFromProto)) {
    if ("number" !== typeof videoBackgroundOptionFromProto) {
      let tmp7 = videoBackgroundOptionFromProto;
    } else {
      tmp7 = null;
      const obj4 = id(dependencyMap[3]);
    }
    let tmp4 = tmp7;
  } else {
    tmp4 = null;
    const obj3 = importDefault(dependencyMap[4]);
  }
  return tmp4;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx");

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
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => settings.settings);
  const obj = arg1(dependencyMap[5]);
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const arg1 = stateFromStores1;
  const voiceAndVideo = stateFromStores.voiceAndVideo;
  if (null != voiceAndVideo) {
    prop = voiceAndVideo.videoBackgroundFilterDesktop;
  }
  const importDefault = prop;
  const items2 = [prop, stateFromStores1];
  return React.useMemo(() => {
    let tmp = null;
    if (null != stateFromStores1) {
      tmp = callback(prop, stateFromStores1);
    }
    return tmp;
  }, items2);
};
