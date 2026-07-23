// Module ID: 8836
// Function ID: 69660
// Name: _handleToggleVideo
// Dependencies: [57, 5, 31, 27, 4149, 1348, 4177, 1906, 4146, 8837, 8840, 4344, 8842, 4471, 1212, 4675, 8843, 8857, 1820, 4341, 4944, 22, 8858, 8859, 8860, 477, 566, 8861, 8841, 9056, 8838, 2]
// Exports: getAudioDeviceToDisplayText, handleDisconnect, handleToggleSelfDeaf, handleToggleSelfMute, handleToggleVideo, showCameraDisabledAlert, showMinOSScreenshareRequirementAlert, showScreenshareDisabledAlert, showServerDeafenAlert, showServerMuteAlert, showSuppressedAlert, showTabletRequirementAlert, useImmediateMaskedSpeakerStates

// Module 8836 (_handleToggleVideo)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "set";
import { NativeModules } from "showAudioOutputSelector";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import { NativePermissionTypes } from "NativePermissionStatus";
import importDefaultResult from "registerAsset";
import set from "set";
import importDefaultResult1 from "registerAsset";
import set from "result";

let require = arg1;
function _handleToggleVideo() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
let closure_16 = require("registerAsset").debounce((arg0) => {
  const AudioRoutePicker = NativeModules.AudioRoutePicker;
  if (null != AudioRoutePicker) {
    AudioRoutePicker.handleAudioRoute(arg0);
  }
}, 250);
let closure_17 = require("registerAsset").debounce((arg0) => {
  arg0();
}, 1);
let obj = { EARPIECE: require("registerAsset"), BLUETOOTH_HEADSET: require("registerAsset"), WIRED_HEADSET: require("registerAsset"), SPEAKERPHONE: require("registerAsset"), INVALID: require("registerAsset") };
let closure_19 = { TYPE_UNKNOWN: 0, [0]: "TYPE_UNKNOWN", TYPE_BUILTIN_EARPIECE: 1, [1]: "TYPE_BUILTIN_EARPIECE", TYPE_BUILTIN_SPEAKER: 2, [2]: "TYPE_BUILTIN_SPEAKER", TYPE_WIRED_HEADSET: 3, [3]: "TYPE_WIRED_HEADSET", TYPE_WIRED_HEADPHONES: 4, [4]: "TYPE_WIRED_HEADPHONES", TYPE_LINE_ANALOG: 5, [5]: "TYPE_LINE_ANALOG", TYPE_LINE_DIGITAL: 6, [6]: "TYPE_LINE_DIGITAL", TYPE_BLUETOOTH_SCO: 7, [7]: "TYPE_BLUETOOTH_SCO", TYPE_BLUETOOTH_A2DP: 8, [8]: "TYPE_BLUETOOTH_A2DP", TYPE_HDMI: 9, [9]: "TYPE_HDMI", TYPE_HDMI_ARC: 10, [10]: "TYPE_HDMI_ARC", TYPE_USB_DEVICE: 11, [11]: "TYPE_USB_DEVICE", TYPE_USB_ACCESSORY: 12, [12]: "TYPE_USB_ACCESSORY", TYPE_DOCK: 13, [13]: "TYPE_DOCK", TYPE_FM: 14, [14]: "TYPE_FM", TYPE_BUILTIN_MIC: 15, [15]: "TYPE_BUILTIN_MIC", TYPE_FM_TUNER: 16, [16]: "TYPE_FM_TUNER", TYPE_TV_TUNER: 17, [17]: "TYPE_TV_TUNER", TYPE_TELEPHONY: 18, [18]: "TYPE_TELEPHONY", TYPE_AUX_LINE: 19, [19]: "TYPE_AUX_LINE", TYPE_IP: 20, [20]: "TYPE_IP", TYPE_BUS: 21, [21]: "TYPE_BUS", TYPE_USB_HEADSET: 22, [22]: "TYPE_USB_HEADSET", TYPE_HEARING_AID: 23, [23]: "TYPE_HEARING_AID", TYPE_BUILTIN_SPEAKER_SAFE: 24, [24]: "TYPE_BUILTIN_SPEAKER_SAFE", TYPE_REMOTE_SUBMIX: 25, [25]: "TYPE_REMOTE_SUBMIX", TYPE_BLE_HEADSET: 26, [26]: "TYPE_BLE_HEADSET", TYPE_BLE_SPEAKER: 27, [27]: "TYPE_BLE_SPEAKER", TYPE_ECHO_REFERENCE: 28, [28]: "TYPE_ECHO_REFERENCE", TYPE_HDMI_EARC: 29, [29]: "TYPE_HDMI_EARC", TYPE_BLE_BROADCAST: 30, [30]: "TYPE_BLE_BROADCAST", TYPE_DOCK_ANALOG: 31, [31]: "TYPE_DOCK_ANALOG" };
let result = set.fileFinishedImporting("modules/voice_calls/native/CallsUtils.tsx");

export const handleToggleVideo = function handleToggleVideo(channel) {
  return _handleToggleVideo(...arguments);
};
export const handleToggleSelfDeaf = function handleToggleSelfDeaf() {
  importDefault(8843).toggleSelfDeaf();
};
export const handleToggleSelfMute = function handleToggleSelfMute() {
  const permission = importDefault(4675).requestPermission(NativePermissionTypes.AUDIO, { showAuthorizationError: true });
  const obj = importDefault(4675);
  importDefault(8843).toggleSelfMute();
};
export const showSuppressedAlert = function showSuppressedAlert() {
  let obj = importDefault(4471);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.FJSZVM);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.etJjgW);
  obj.hideActionSheet = false;
  obj.show(obj);
};
export const showServerMuteAlert = function showServerMuteAlert() {
  let obj = importDefault(4471);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["+JQCa/"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.hsNm7d);
  obj.hideActionSheet = false;
  obj.show(obj);
};
export const showServerDeafenAlert = function showServerDeafenAlert() {
  let obj = importDefault(4471);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.QZ7WSS);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.Tl9JpL);
  obj.hideActionSheet = false;
  obj.show(obj);
};
export const showCameraDisabledAlert = function showCameraDisabledAlert() {
  let obj = importDefault(4471);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.OYzPcW);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.oBH7Y2);
  obj.hideActionSheet = false;
  obj.show(obj);
};
export const showScreenshareDisabledAlert = function showScreenshareDisabledAlert() {
  let obj = importDefault(4471);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["/x4knx"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.PpfzUE);
  obj.hideActionSheet = false;
  obj.show(obj);
};
export const showMinOSScreenshareRequirementAlert = function showMinOSScreenshareRequirementAlert() {
  const intl = require(1212) /* getSystemLocale */.intl;
  let obj = {};
  const errorInfo = require(8857) /* validateUniqueErrorCodes */.getErrorInfo(require(8857) /* validateUniqueErrorCodes */.AVError.SCREENSHARE_OS_NOT_SUPPORTED);
  let errorCode;
  if (null != errorInfo) {
    errorCode = errorInfo.errorCode;
  }
  obj.errorCode = errorCode;
  const obj2 = require(8857) /* validateUniqueErrorCodes */;
  const formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.ejOT95, obj);
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.title = intl2.string(require(1212) /* getSystemLocale */.t.oblMYa);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.body = "" + intl3.string(require(1212) /* getSystemLocale */.t.Wnhd3q) + "\n\n" + formatToPlainStringResult;
  obj.hideActionSheet = false;
  importDefault(4471).show(obj);
};
export const showTabletRequirementAlert = function showTabletRequirementAlert() {
  let obj = importDefault(4471);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["1N0dxa"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.qqDFVb);
  obj.hideActionSheet = false;
  obj.show(obj);
};
export const handleDisconnect = function handleDisconnect(channel) {
  const result = importAll(1820).dismissGlobalKeyboard();
  const obj = importAll(1820);
  const result1 = require(4341) /* getVoiceChannelKeyByChannelId */.dismissVoiceChannelScreens(channel, () => {
    const voiceChannel = outer1_1(outer1_3[20]).selectVoiceChannel(null);
  });
};
export const audioDeviceToIconMap = obj;
export const getAudioDeviceToDisplayText = function getAudioDeviceToDisplayText(deviceType) {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.EARPIECE = intl.string(require(1212) /* getSystemLocale */.t.Ouoi6E);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.BLUETOOTH_HEADSET = intl2.string(require(1212) /* getSystemLocale */.t.i6eV3z);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.WIRED_HEADSET = intl3.string(require(1212) /* getSystemLocale */.t.Dluojr);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.SPEAKERPHONE = intl4.string(require(1212) /* getSystemLocale */.t.snEhlu);
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj.INVALID = intl5.string(require(1212) /* getSystemLocale */.t.kCBL6t);
  if (deviceType.deviceType === constants.TYPE_BLE_HEADSET) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl6.string(require(1212) /* getSystemLocale */.t.BtXSp9);
  } else {
    stringResult = obj[deviceType.simpleDeviceType];
  }
  return stringResult;
};
export const useMaskedSpeakerStates = set.isAndroid() ? (() => {
  const items = [closure_14];
  return require(566) /* initialize */.useStateFromStoresObject(items, () => {
    const activeAudioDevice = outer1_14.getActiveAudioDevice();
    const obj = { isAudioRouteEnabled: true, toggleAudio: outer1_0(outer1_3[27]).showAudioOutputSelector };
    let simpleDeviceType;
    if (null != activeAudioDevice) {
      simpleDeviceType = activeAudioDevice.simpleDeviceType;
    }
    if (null == simpleDeviceType) {
      simpleDeviceType = outer1_0(outer1_3[28]).AudioDeviceType.INVALID;
    }
    obj.routeSource = outer1_18[simpleDeviceType];
    return obj;
  }, []);
}) : (() => {
  let obj = isEnabled(566);
  const items = [closure_9, closure_11, closure_8, closure_12, closure_10, closure_13];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = isEnabled(9056);
    const isVideoModeResult = obj.isVideoMode(outer1_9, outer1_11, outer1_8, outer1_12, outer1_10);
    const currentRouteType = outer1_13.getCurrentRouteType();
    let tmp3 = currentRouteType === isEnabled(8838).RouteTypes.SPEAKER;
    const tmp4 = currentRouteType === isEnabled(8838).RouteTypes.BLUETOOTH;
    obj = {};
    if (!tmp3) {
      tmp3 = tmp4;
    }
    if (!tmp3) {
      tmp3 = isVideoModeResult;
    }
    obj.isEnabled = tmp3;
    obj.isVideoMode = isVideoModeResult;
    obj.isBluetoothRoute = tmp4;
    return obj;
  });
  isEnabled = stateFromStoresObject.isEnabled;
  const isVideoMode = stateFromStoresObject.isVideoMode;
  const tmp2 = callback(React.useState(isEnabled), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  const items1 = [first, isVideoMode];
  const items2 = [isEnabled, isVideoMode];
  callback = React.useCallback(() => {
    if (!outer1_13.getMultipleRoutesAvailable()) {
      outer1_17.cancel();
      if (!isVideoMode) {
        dependencyMap(!first);
      }
    }
    outer1_16(!first);
  }, items1);
  const effect = React.useEffect(() => {
    if (!outer1_13.getMultipleRoutesAvailable()) {
      if (!isVideoMode) {
        outer1_17(() => outer1_3(outer1_0));
      }
    }
    dependencyMap(isEnabled);
  }, items2);
  if (stateFromStoresObject.isBluetoothRoute) {
    let tmp8 = 8859;
  } else {
    tmp8 = 8860;
  }
  obj = { isAudioRouteEnabled: first, toggleAudio: callback, routeSource: isVideoMode(tmp8) };
  return obj;
});
export const useImmediateMaskedSpeakerStates = () => {
  let obj = require(566) /* initialize */;
  const items = [closure_13];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_13.getCurrentRouteType());
  const tmp2 = importDefault(9056)();
  require = tmp2;
  let tmp3 = stateFromStores === require(8838) /* RouteTypes */.RouteTypes.SPEAKER;
  const tmp4 = stateFromStores === require(8838) /* RouteTypes */.RouteTypes.BLUETOOTH;
  if (!tmp3) {
    tmp3 = tmp4;
  }
  if (!tmp3) {
    tmp3 = tmp2;
  }
  importDefault = tmp3;
  const tmp5 = callback(React.useState(tmp3), 2);
  const first = tmp5[0];
  const dependencyMap = tmp5[1];
  const items1 = [first, tmp2];
  const items2 = [tmp3, tmp2];
  callback = React.useCallback(() => {
    if (!outer1_13.getMultipleRoutesAvailable()) {
      outer1_17.cancel();
      if (!closure_0) {
        callback(!first);
      }
    }
    outer1_16(!first);
  }, items1);
  const effect = React.useEffect(() => {
    callback(closure_1);
  }, items2);
  if (tmp4) {
    let tmp11 = 8859;
  } else {
    tmp11 = 8860;
  }
  obj = { isAudioRouteEnabled: first, toggleAudio: callback, routeSource: importDefault(tmp11) };
  return obj;
};
