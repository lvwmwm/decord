// Module ID: 10718
// Function ID: 83482
// Name: handleCloseScreenshare
// Dependencies: [31, 27, 4149, 653, 4110, 6998, 4179, 8875, 4309, 4194, 8882, 8896, 10719, 10714, 1553, 10730, 10731, 10732, 10733, 10725, 566, 5462, 1212, 2]
// Exports: default, tryStartScreenShare

// Module 10718 (handleCloseScreenshare)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ApplicationStreamStates } from "ME";
import getSystemVersion from "getSystemVersion";

const require = arg1;
function handleCloseScreenshare() {
  currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const obj = require(4309) /* isVoiceChannelFull */;
    obj.stopStream(require(4194) /* isStreamKey */.encodeStreamKey(currentUserActiveStream));
    const obj2 = require(4194) /* isStreamKey */;
  }
  importDefault(8882).setGoLiveSource(null);
}
function stopScreenshare() {
  const voiceEngine = require(4179) /* assertInjected */.getVoiceEngine();
  voiceEngine.stopBroadcast();
  handleCloseScreenshare();
}
function startStream() {
  if ("android" === obj.getVoiceEngine().platform) {
    (function startAndroidScreenshare() {
      let result = outer1_1(outer1_2[5]).isForegroundServiceRunning((arg0) => {
        if (arg0) {
          let tmpResult = tmp(tmp2[6]);
          const voiceEngine = tmpResult.getVoiceEngine();
          voiceEngine.startBroadcast();
        } else {
          tmpResult = tmp(tmp2[7]);
          const result = tmpResult.showScreenshareDisabledAlert();
        }
      });
    })();
  } else {
    BroadcastUploadManager.showPicker();
  }
}
function getOSRequirement() {
  return getSystemVersion >= 12;
}
function getStreamPressHandler(analyticsLocations) {
  let hasPermission;
  let isActive;
  let osRequirement;
  let require;
  let showMobileGoLiveUpsell;
  ({ channel: require, showMobileGoLiveUpsell } = analyticsLocations);
  ({ hasPermission, isActive, osRequirement } = analyticsLocations);
  if (showMobileGoLiveUpsell === undefined) {
    showMobileGoLiveUpsell = false;
  }
  analyticsLocations = analyticsLocations.analyticsLocations;
  if (osRequirement) {
    if (hasPermission) {
      if (showMobileGoLiveUpsell) {
        class S {
          constructor() {
            obj = channel(outer1_2[12]);
            return obj.showMobileGoLiveActionSheet(analyticsLocations);
          }
        }
      } else {
        class S {
          constructor() {
            obj = channel(outer1_2[12]);
            return obj.showMobileGoLiveActionSheet(analyticsLocations);
          }
        }
        if (isActive) {
          class S {
            constructor() {
              obj = channel(outer1_2[12]);
              return obj.showMobileGoLiveActionSheet(analyticsLocations);
            }
          }
        }
      }
    } else {
      class S {
        constructor() {
          obj = channel(outer1_2[12]);
          return obj.showMobileGoLiveActionSheet(analyticsLocations);
        }
      }
      const S = require(8875) /* _handleToggleVideo */.showScreenshareDisabledAlert;
    }
  } else {
    class S {
      constructor() {
        obj = channel(outer1_2[11]);
        obj = { type: channel(outer1_2[11]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: channel.id };
        reportAVErrorResult = obj.reportAVError(obj);
        obj3 = channel(outer1_2[7]);
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
      let tmp5 = 10730;
    } else {
      tmp5 = 10731;
    }
    tmp(tmp5);
  } else {
    if (arg1) {
      let tmp4 = 10732;
    } else if (arg0) {
      tmp4 = 10733;
    } else {
      tmp4 = 10732;
    }
    return tmp(tmp4);
  }
}
getSystemVersion = getSystemVersion.getSystemVersionMajor();
const BroadcastUploadManager = require("get ActivityIndicator").NativeModules.BroadcastUploadManager;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_calls/native/useScreenshareUtils.tsx");

export default function useScreenshareUtils(arg0) {
  const _require = arg0;
  let tmp = importDefault(10714)(arg0);
  importDefault = tmp;
  const tmp2 = getOSRequirement();
  const dependencyMap = tmp2;
  const showMobileGoLiveUpsell = importDefault(10725).useConfig({ location: "useScreenshareUtils" }).showMobileGoLiveUpsell;
  let obj = importDefault(10725);
  const items = [stateFromStores];
  stateFromStores = _require(566).useStateFromStores(items, () => stateFromStores.getCurrentUserActiveStream());
  const analyticsLocations = importDefault(5462)().analyticsLocations;
  const items1 = [stateFromStores, arg0, tmp, tmp2, showMobileGoLiveUpsell, analyticsLocations];
  return showMobileGoLiveUpsell.useMemo(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = stateFromStores.state === analyticsLocations.ACTIVE;
    }
    let obj = {};
    let tmp4 = closure_1;
    if (closure_1) {
      tmp4 = tmp2;
    }
    obj.isFeatureEnabled = tmp4;
    obj.isActive = tmp;
    if (!showMobileGoLiveUpsell) {
      if (tmp) {
        const intl = callback(tmp2[22]).intl;
        let stringResult = intl.string(callback(tmp2[22]).t.CpkXwZ);
      }
      obj.text = stringResult;
      obj = { channel: callback, hasPermission: closure_1, isActive: tmp, osRequirement: tmp2, showMobileGoLiveUpsell, analyticsLocations };
      obj.onPress = outer1_12(obj);
      obj.imgSource = outer1_13(tmp, showMobileGoLiveUpsell);
      return obj;
    }
    const intl2 = callback(tmp2[22]).intl;
    stringResult = intl2.string(callback(tmp2[22]).t.fjBNo1);
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
    videoPermission = require(10714) /* useHasVideoPermission */.getVideoPermission(channel);
    const obj = require(10714) /* useHasVideoPermission */;
  }
  if (videoPermission) {
    startStream();
  }
};
