// Module ID: 12118
// Function ID: 12119
// Name: useScreenshareUtils
// Dependencies: [19, 17, 6801, 2130, 1072, 5929, 5127, 10362, 2132, 9334, 8011, 6804, 6079, 6111, 12119, 12113, 1624, 12129, 12130, 12131, 12132, 504, 12124, 7420, 1113, 2]
// Exports: default, getOSRequirement, getStreamPressHandler, handleCloseScreenshare, tryStartScreenShare

// Module 12118 (useScreenshareUtils)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import inject from "inject" /* 2132 */;
import Constants2 from "Constants" /* 5929 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6079 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6804 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7420 */;
import StreamActionCreators from "StreamActionCreators" /* 8011 */;
import CallsUtils from "CallsUtils" /* 9334 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10362 */;
import useHasVideoPermission from "useHasVideoPermission" /* 12113 */;
import MobileGoLiveUpsellExperimentDefault from "MobileGoLiveUpsellExperiment" /* 12124 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6801 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import DeviceUtils from "DeviceUtils" /* 5127 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useHasVideoPermissionDefault = useHasVideoPermission;
let _require, closure_1, dependencyMap, importDefault;

function l() {
  const obj = closure_2_0(closure_2_2[13]);
  const obj2 = { type: closure_2_0(closure_2_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: id.id };
  obj.reportAVError(obj2);
  const obj3 = closure_2_0(closure_2_2[9]);
  const result = obj3.showMinOSScreenshareRequirementAlert();
}
const f129439 = (arg0) => {
  const tmp3 = arg0;
  if (tmp3) {
    const tmpResult = require("inject");
    const voiceEngine = tmpResult.getVoiceEngine();
    voiceEngine.startBroadcast();
  } else {
    const tmpResult2 = require("CallsUtils");
    const result = tmpResult2.showScreenshareDisabledAlert();
  }
};
function stopScreenshare() {
  const obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  voiceEngine.stopBroadcast();
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const stopStream = StreamActionCreators.stopStream;
    StreamActionCreators;
    const tmpResult2 = StreamKeyUtils;
    stopStream(tmpResult2.encodeStreamKey(currentUserActiveStream));
  }
  const obj4 = AudioActionCreatorsDefault;
  obj4.setGoLiveSource(null);
}
function startStream() {
  const obj = inject;
  if ("android" === obj.getVoiceEngine().platform) {
    const obj2 = ForegroundServiceManagerDefault;
    const result = obj2.isForegroundServiceRunning(f129439);
  } else {
    BroadcastUploadManager.showPicker();
  }
}
const NativeModules = react_native.NativeModules;
const ApplicationStreamStates = Constants.ApplicationStreamStates;
const Features = Constants2.Features;
const systemVersionMajor = DeviceUtils.getSystemVersionMajor();
const BroadcastUploadManager = NativeModules.BroadcastUploadManager;
let result = size.fileFinishedImporting("modules/video_calls/native/useScreenshareUtils.tsx");

export default function useScreenshareUtils(arg0) {
  let closure_0;
  let closure_2;
  let stateFromStores1;
  _require = arg0;
  const tmp = useHasVideoPermissionDefault(arg0);
  importDefault = tmp;
  dependencyMap = tmp2;
  let obj = require("get initialized");
  const items = [stateFromStores1];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores1.supports(constants.VIDEO));
  let obj2 = MobileGoLiveUpsellExperimentDefault;
  const showMobileGoLiveUpsell = obj2.useConfig({ location: "useScreenshareUtils" }).showMobileGoLiveUpsell;
  let obj3 = require("get initialized");
  const items1 = [showMobileGoLiveUpsell];
  stateFromStores1 = obj3.useStateFromStores(items1, () => showMobileGoLiveUpsell.getCurrentUserActiveStream());
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const items2 = [stateFromStores1, arg0, stateFromStores, tmp, tmp2, showMobileGoLiveUpsell, analyticsLocations];
  return stateFromStores.useMemo(() => {
    let obj = { isFeatureEnabled: stateFromStores && closure_1 && closure_2, isActive: tmp, text: null, onPress: null, imgSource: null };
    if (!showMobileGoLiveUpsell) {
      let stringResult;
      let fn;
      let tmp19Result;
      if (null != stateFromStores1 && stateFromStores1.state === ApplicationStreamStates.ACTIVE) {
        const intl = intl3.intl;
        stringResult = intl.string(intl3.t.CpkXwZ);
      }
      obj.text = stringResult;
      let flag = tmp4;
      const tmp11 = closure_1;
      const tmp12 = closure_2;
      const tmp13 = analyticsLocations;
      if (showMobileGoLiveUpsell === undefined) {
        flag = false;
      }
      closure_1 = tmp13;
      if (tmp12) {
        if (tmp11) {
          if (flag) {
            fn = function l() {
              const obj = closure_2_0(closure_2_2[14]);
              return obj.showMobileGoLiveActionSheet(closure_1);
            };
          } else {
            fn = tmp14;
            if (null != stateFromStores1 && stateFromStores1.state === ApplicationStreamStates.ACTIVE) {
              fn = stopScreenshare;
            }
          }
        } else {
          fn = CallsUtils.showScreenshareDisabledAlert;
        }
      } else {
        fn = l;
      }
      obj.onPress = fn;
      let obj2 = MetaQuestUtils;
      if (obj2.isMetaQuest()) {
        tmp19Result = tmp19(tmp ? 12129 : 12130);
      } else {
        let tmp20;
        if (showMobileGoLiveUpsell) {
          tmp20 = 12131;
        } else {
          tmp20 = tmp ? 12132 : 12131;
        }
        tmp19Result = tmp19(tmp20);
      }
      obj.imgSource = tmp19Result;
      return obj;
    }
    const intl2 = intl3.intl;
    stringResult = intl2.string(intl3.t.fjBNo1);
  }, items2);
};
export function handleCloseScreenshare() {
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const stopStream = StreamActionCreators.stopStream;
    StreamActionCreators;
    const obj = StreamKeyUtils;
    stopStream(obj.encodeStreamKey(currentUserActiveStream));
  }
  const obj2 = AudioActionCreatorsDefault;
  obj2.setGoLiveSource(null);
}
export { stopScreenshare };
export { startStream };
export function getOSRequirement() {
  return closure_8 >= 12;
}
export function getStreamPressHandler(analyticsLocations) {
  let fn;
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
        fn = function l() {
          const obj = closure_2_0(closure_2_2[14]);
          return obj.showMobileGoLiveActionSheet(closure_1);
        };
      } else {
        fn = tmp;
        if (isActive) {
          fn = stopScreenshare;
        }
      }
    } else {
      fn = CallsUtils.showScreenshareDisabledAlert;
    }
  } else {
    fn = l;
  }
  return fn;
}
export function tryStartScreenShare(channel) {
  let videoPermission = closure_8 >= 12;
  if (videoPermission) {
    let tmp3 = require;
    const obj = useHasVideoPermission;
    videoPermission = obj.getVideoPermission(channel);
  }
  if (videoPermission) {
    const obj2 = inject;
    if ("android" === obj2.getVoiceEngine().platform) {
      const obj3 = ForegroundServiceManagerDefault;
      let result = obj3.isForegroundServiceRunning(f129439);
    } else {
      BroadcastUploadManager.showPicker();
    }
  }
}
