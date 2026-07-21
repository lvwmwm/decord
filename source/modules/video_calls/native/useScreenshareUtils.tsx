// Module ID: 10678
// Function ID: 83216
// Name: handleCloseScreenshare
// Dependencies: []
// Exports: default, tryStartScreenShare

// Module 10678 (handleCloseScreenshare)
function handleCloseScreenshare() {
  const currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const obj = arg1(dependencyMap[8]);
    obj.stopStream(arg1(dependencyMap[9]).encodeStreamKey(currentUserActiveStream));
    const obj2 = arg1(dependencyMap[9]);
  }
  importDefault(dependencyMap[10]).setGoLiveSource(null);
}
function stopScreenshare() {
  const voiceEngine = arg1(dependencyMap[6]).getVoiceEngine();
  voiceEngine.stopBroadcast();
  handleCloseScreenshare();
}
function startStream() {
  if ("android" === obj.getVoiceEngine().platform) {
    function startAndroidScreenshare() {
      const result = callback(closure_2[5]).isForegroundServiceRunning((arg0) => {
        if (arg0) {
          let tmpResult = tmp(tmp2[6]);
          const voiceEngine = tmpResult.getVoiceEngine();
          voiceEngine.startBroadcast();
        } else {
          tmpResult = tmp(tmp2[7]);
          const result = tmpResult.showScreenshareDisabledAlert();
        }
      });
    }();
  } else {
    BroadcastUploadManager.showPicker();
  }
}
function getOSRequirement() {
  return closure_6 >= 12;
}
function getStreamPressHandler(analyticsLocations) {
  let hasPermission;
  let isActive;
  let osRequirement;
  let showMobileGoLiveUpsell;
  ({ channel: closure_0, showMobileGoLiveUpsell } = analyticsLocations);
  ({ hasPermission, isActive, osRequirement } = analyticsLocations);
  if (showMobileGoLiveUpsell === undefined) {
    showMobileGoLiveUpsell = false;
  }
  const importDefault = analyticsLocations.analyticsLocations;
  if (osRequirement) {
    if (hasPermission) {
      if (showMobileGoLiveUpsell) {
        class S {
          constructor() {
            obj = channel(closure_2[12]);
            return obj.showMobileGoLiveActionSheet(analyticsLocations);
          }
        }
      } else {
        class S {
          constructor() {
            obj = channel(closure_2[12]);
            return obj.showMobileGoLiveActionSheet(analyticsLocations);
          }
        }
        if (isActive) {
          class S {
            constructor() {
              obj = channel(closure_2[12]);
              return obj.showMobileGoLiveActionSheet(analyticsLocations);
            }
          }
        }
      }
    } else {
      class S {
        constructor() {
          obj = channel(closure_2[12]);
          return obj.showMobileGoLiveActionSheet(analyticsLocations);
        }
      }
      const S = arg1(dependencyMap[7]).showScreenshareDisabledAlert;
    }
  } else {
    class S {
      constructor() {
        obj = channel(closure_2[11]);
        obj = { type: channel(closure_2[11]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: channel.id };
        reportAVErrorResult = obj.reportAVError(obj);
        obj3 = channel(closure_2[7]);
        result = obj3.showMinOSScreenshareRequirementAlert();
        return;
      }
    }
  }
  return S;
}
function getShareIcon(arg0, arg1) {
  if (obj.isMetaQuest()) {
    if (arg0) {
      let tmp5 = tmp2[15];
    } else {
      tmp5 = tmp2[16];
    }
    tmp(tmp5);
  } else {
    if (arg1) {
      let tmp4 = tmp2[17];
    } else if (arg0) {
      tmp4 = tmp2[18];
    } else {
      tmp4 = tmp2[17];
    }
    return tmp(tmp4);
  }
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[2]);
const ApplicationStreamStates = arg1(dependencyMap[3]).ApplicationStreamStates;
const systemVersionMajor = arg1(dependencyMap[4]).getSystemVersionMajor();
const BroadcastUploadManager = arg1(dependencyMap[1]).NativeModules.BroadcastUploadManager;
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/video_calls/native/useScreenshareUtils.tsx");

export default function useScreenshareUtils(arg0) {
  const arg1 = arg0;
  const tmp = importDefault(dependencyMap[13])(arg0);
  const importDefault = tmp;
  const tmp2 = getOSRequirement();
  const dependencyMap = tmp2;
  const showMobileGoLiveUpsell = importDefault(dependencyMap[19]).useConfig({ location: "useScreenshareUtils" }).showMobileGoLiveUpsell;
  const React = showMobileGoLiveUpsell;
  const obj = importDefault(dependencyMap[19]);
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[20]).useStateFromStores(items, () => stateFromStores.getCurrentUserActiveStream());
  closure_4 = stateFromStores;
  const analyticsLocations = importDefault(dependencyMap[21])().analyticsLocations;
  const ApplicationStreamStates = analyticsLocations;
  const items1 = [stateFromStores, arg0, tmp, tmp2, showMobileGoLiveUpsell, analyticsLocations];
  return React.useMemo(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = stateFromStores.state === analyticsLocations.ACTIVE;
    }
    let obj = {};
    let tmp4 = tmp;
    if (tmp) {
      tmp4 = tmp2;
    }
    obj.isFeatureEnabled = tmp4;
    obj.isActive = tmp;
    if (!showMobileGoLiveUpsell) {
      if (tmp) {
        const intl = arg0(tmp2[22]).intl;
        let stringResult = intl.string(arg0(tmp2[22]).t.CpkXwZ);
      }
      obj.text = stringResult;
      obj = { channel: arg0, hasPermission: tmp, isActive: tmp, osRequirement: tmp2, showMobileGoLiveUpsell, analyticsLocations };
      obj.onPress = callback(obj);
      obj.imgSource = callback2(tmp, showMobileGoLiveUpsell);
      return obj;
    }
    const intl2 = arg0(tmp2[22]).intl;
    stringResult = intl2.string(arg0(tmp2[22]).t.fjBNo1);
  }, items1);
};
export { handleCloseScreenshare };
export { stopScreenshare };
export { startStream };
export { getOSRequirement };
export { getStreamPressHandler };
export const tryStartScreenShare = function tryStartScreenShare(channel) {
  let videoPermission = getOSRequirement();
  if (videoPermission) {
    videoPermission = arg1(dependencyMap[13]).getVideoPermission(channel);
    const obj = arg1(dependencyMap[13]);
  }
  if (videoPermission) {
    startStream();
  }
};
