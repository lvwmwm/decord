// Module ID: 9408
// Function ID: 9409
// Name: useScreenshareUtils
// Dependencies: [19, 17, 4858, 1993, 1074, 4861, 4812, 7175, 1995, 9097, 4978, 4888, 9104, 8875, 9409, 9403, 1610, 9426, 9427, 9428, 9429, 504, 9414, 6583, 1115, 2]
// Exports: default, getOSRequirement, getStreamPressHandler, handleCloseScreenshare, tryStartScreenShare

// Module 9408 (useScreenshareUtils)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import inject from "inject" /* 1995 */;
import Constants2 from "Constants" /* 4861 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4888 */;
import StreamActionCreators from "StreamActionCreators" /* 4978 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7175 */;
import CallsUtils from "CallsUtils" /* 9097 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9104 */;
import useHasVideoPermission from "useHasVideoPermission" /* 9403 */;
import MobileGoLiveUpsellExperimentDefault from "MobileGoLiveUpsellExperiment" /* 9414 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import DeviceUtils from "DeviceUtils" /* 4812 */;
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
const f115074 = (arg0) => {
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
    const result = obj2.isForegroundServiceRunning(f115074);
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
        tmp19Result = tmp19(tmp ? 9426 : 9427);
      } else {
        let tmp20;
        if (showMobileGoLiveUpsell) {
          tmp20 = 9428;
        } else {
          tmp20 = tmp ? 9429 : 9428;
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
export const handleCloseScreenshare = function handleCloseScreenshare() {
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const stopStream = StreamActionCreators.stopStream;
    StreamActionCreators;
    const obj = StreamKeyUtils;
    stopStream(obj.encodeStreamKey(currentUserActiveStream));
  }
  const obj2 = AudioActionCreatorsDefault;
  obj2.setGoLiveSource(null);
};
export { stopScreenshare };
export { startStream };
export const getOSRequirement = function getOSRequirement() {
  return closure_8 >= 12;
};
export const getStreamPressHandler = function getStreamPressHandler(analyticsLocations) {
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
};
export const tryStartScreenShare = function tryStartScreenShare(channel) {
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
      let result = obj3.isForegroundServiceRunning(f115074);
    } else {
      BroadcastUploadManager.showPicker();
    }
  }
};
