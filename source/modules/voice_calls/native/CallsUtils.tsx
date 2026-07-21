// Module ID: 8828
// Function ID: 69596
// Name: _handleToggleVideo
// Dependencies: []
// Exports: getAudioDeviceToDisplayText, handleDisconnect, handleToggleSelfDeaf, handleToggleSelfMute, handleToggleVideo, showCameraDisabledAlert, showMinOSScreenshareRequirementAlert, showScreenshareDisabledAlert, showServerDeafenAlert, showServerMuteAlert, showSuppressedAlert, showTabletRequirementAlert, useImmediateMaskedSpeakerStates

// Module 8828 (_handleToggleVideo)
function _handleToggleVideo() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _handleToggleVideo = obj;
  return obj(...arguments);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
const NativeModules = arg1(dependencyMap[3]).NativeModules;
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
const NativePermissionTypes = arg1(dependencyMap[11]).NativePermissionTypes;
let closure_16 = importDefault(dependencyMap[21]).debounce((arg0) => {
  const AudioRoutePicker = NativeModules.AudioRoutePicker;
  if (null != AudioRoutePicker) {
    AudioRoutePicker.handleAudioRoute(arg0);
  }
}, 250);
const importDefaultResult = importDefault(dependencyMap[21]);
let closure_17 = importDefault(dependencyMap[21]).debounce((arg0) => {
  arg0();
}, 1);
const obj = { EARPIECE: importDefault(dependencyMap[22]), BLUETOOTH_HEADSET: importDefault(dependencyMap[23]), WIRED_HEADSET: importDefault(dependencyMap[24]), SPEAKERPHONE: importDefault(dependencyMap[24]), INVALID: importDefault(dependencyMap[24]) };
let closure_19 = { TYPE_UNKNOWN: 0, [0]: "TYPE_UNKNOWN", TYPE_BUILTIN_EARPIECE: 1, [1]: "TYPE_BUILTIN_EARPIECE", TYPE_BUILTIN_SPEAKER: 2, [2]: "TYPE_BUILTIN_SPEAKER", TYPE_WIRED_HEADSET: 3, [3]: "TYPE_WIRED_HEADSET", TYPE_WIRED_HEADPHONES: 4, [4]: "TYPE_WIRED_HEADPHONES", TYPE_LINE_ANALOG: 5, [5]: "TYPE_LINE_ANALOG", TYPE_LINE_DIGITAL: 6, [6]: "TYPE_LINE_DIGITAL", TYPE_BLUETOOTH_SCO: 7, [7]: "TYPE_BLUETOOTH_SCO", TYPE_BLUETOOTH_A2DP: 8, [8]: "TYPE_BLUETOOTH_A2DP", TYPE_HDMI: 9, [9]: "TYPE_HDMI", TYPE_HDMI_ARC: 10, [10]: "TYPE_HDMI_ARC", TYPE_USB_DEVICE: 11, [11]: "TYPE_USB_DEVICE", TYPE_USB_ACCESSORY: 12, [12]: "TYPE_USB_ACCESSORY", TYPE_DOCK: 13, [13]: "TYPE_DOCK", TYPE_FM: 14, [14]: "TYPE_FM", TYPE_BUILTIN_MIC: 15, [15]: "TYPE_BUILTIN_MIC", TYPE_FM_TUNER: 16, [16]: "TYPE_FM_TUNER", TYPE_TV_TUNER: 17, [17]: "TYPE_TV_TUNER", TYPE_TELEPHONY: 18, [18]: "TYPE_TELEPHONY", TYPE_AUX_LINE: 19, [19]: "TYPE_AUX_LINE", TYPE_IP: 20, [20]: "TYPE_IP", TYPE_BUS: 21, [21]: "TYPE_BUS", TYPE_USB_HEADSET: 22, [22]: "TYPE_USB_HEADSET", TYPE_HEARING_AID: 23, [23]: "TYPE_HEARING_AID", TYPE_BUILTIN_SPEAKER_SAFE: 24, [24]: "TYPE_BUILTIN_SPEAKER_SAFE", TYPE_REMOTE_SUBMIX: 25, [25]: "TYPE_REMOTE_SUBMIX", TYPE_BLE_HEADSET: 26, [26]: "TYPE_BLE_HEADSET", TYPE_BLE_SPEAKER: 27, [27]: "TYPE_BLE_SPEAKER", TYPE_ECHO_REFERENCE: 28, [28]: "TYPE_ECHO_REFERENCE", TYPE_HDMI_EARC: 29, [29]: "TYPE_HDMI_EARC", TYPE_BLE_BROADCAST: 30, [30]: "TYPE_BLE_BROADCAST", TYPE_DOCK_ANALOG: 31, [31]: "TYPE_DOCK_ANALOG" };
const importDefaultResult1 = importDefault(dependencyMap[21]);
const obj4 = arg1(dependencyMap[25]);
const tmp2 = arg1(dependencyMap[25]).isAndroid() ? () => {
  const items = [closure_14];
  return arg1(dependencyMap[26]).useStateFromStoresObject(items, () => {
    const activeAudioDevice = activeAudioDevice.getActiveAudioDevice();
    const obj = { isAudioRouteEnabled: true, toggleAudio: callback(closure_3[27]).showAudioOutputSelector };
    let simpleDeviceType;
    if (null != activeAudioDevice) {
      simpleDeviceType = activeAudioDevice.simpleDeviceType;
    }
    if (null == simpleDeviceType) {
      simpleDeviceType = callback(closure_3[28]).AudioDeviceType.INVALID;
    }
    obj.routeSource = closure_18[simpleDeviceType];
    return obj;
  }, []);
} : () => {
  let obj = arg1(closure_3[26]);
  const items = [closure_9, closure_11, closure_8, closure_12, closure_10, closure_13];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = isEnabled(closure_3[29]);
    const isVideoModeResult = obj.isVideoMode(closure_9, closure_11, closure_8, closure_12, closure_10);
    const currentRouteType = store.getCurrentRouteType();
    let tmp3 = currentRouteType === isEnabled(closure_3[30]).RouteTypes.SPEAKER;
    const tmp4 = currentRouteType === isEnabled(closure_3[30]).RouteTypes.BLUETOOTH;
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
  const isEnabled = stateFromStoresObject.isEnabled;
  const arg1 = isEnabled;
  const isVideoMode = stateFromStoresObject.isVideoMode;
  const importDefault = isVideoMode;
  const tmp2 = callback(React.useState(isEnabled), 2);
  const first = tmp2[0];
  const importAll = first;
  closure_3 = tmp2[1];
  const items1 = [first, isVideoMode];
  const items2 = [isEnabled, isVideoMode];
  const callback = React.useCallback(() => {
    if (!store.getMultipleRoutesAvailable()) {
      lib.cancel();
      if (!isVideoMode) {
        callback(!first);
      }
    }
    callback2(!first);
  }, items1);
  const effect = React.useEffect(() => {
    if (!store.getMultipleRoutesAvailable()) {
      if (!isVideoMode) {
        lib(() => callback(closure_0));
      }
    }
    callback(isEnabled);
  }, items2);
  if (stateFromStoresObject.isBluetoothRoute) {
    let tmp8 = tmp7[23];
  } else {
    tmp8 = tmp7[24];
  }
  obj = { isAudioRouteEnabled: first, toggleAudio: callback, routeSource: importDefault(tmp8) };
  return obj;
};
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/voice_calls/native/CallsUtils.tsx");

export const handleToggleVideo = function handleToggleVideo(channel) {
  return _handleToggleVideo(...arguments);
};
export const handleToggleSelfDeaf = function handleToggleSelfDeaf() {
  importDefault(dependencyMap[16]).toggleSelfDeaf();
};
export const handleToggleSelfMute = function handleToggleSelfMute() {
  const permission = importDefault(dependencyMap[15]).requestPermission(NativePermissionTypes.AUDIO, { showAuthorizationError: true });
  const obj = importDefault(dependencyMap[15]);
  importDefault(dependencyMap[16]).toggleSelfMute();
};
export const showSuppressedAlert = function showSuppressedAlert() {
  let obj = importDefault(dependencyMap[13]);
  obj = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj.title = intl.string(arg1(dependencyMap[14]).t.FJSZVM);
  const intl2 = arg1(dependencyMap[14]).intl;
  obj.body = intl2.string(arg1(dependencyMap[14]).t.etJjgW);
  obj.hideActionSheet = false;
  obj.show(obj);
};
export const showServerMuteAlert = function showServerMuteAlert() {
  let obj = importDefault(dependencyMap[13]);
  obj = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj.title = intl.string(arg1(dependencyMap[14]).t.+JQCa/);
  const intl2 = arg1(dependencyMap[14]).intl;
  obj.body = intl2.string(arg1(dependencyMap[14]).t.hsNm7d);
  obj.hideActionSheet = false;
  obj.show(obj);
};
export const showServerDeafenAlert = function showServerDeafenAlert() {
  let obj = importDefault(dependencyMap[13]);
  obj = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj.title = intl.string(arg1(dependencyMap[14]).t.QZ7WSS);
  const intl2 = arg1(dependencyMap[14]).intl;
  obj.body = intl2.string(arg1(dependencyMap[14]).t.Tl9JpL);
  obj.hideActionSheet = false;
  obj.show(obj);
};
export const showCameraDisabledAlert = function showCameraDisabledAlert() {
  let obj = importDefault(dependencyMap[13]);
  obj = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj.title = intl.string(arg1(dependencyMap[14]).t.OYzPcW);
  const intl2 = arg1(dependencyMap[14]).intl;
  obj.body = intl2.string(arg1(dependencyMap[14]).t.oBH7Y2);
  obj.hideActionSheet = false;
  obj.show(obj);
};
export const showScreenshareDisabledAlert = function showScreenshareDisabledAlert() {
  let obj = importDefault(dependencyMap[13]);
  obj = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj.title = intl.string(arg1(dependencyMap[14]).t./x4knx);
  const intl2 = arg1(dependencyMap[14]).intl;
  obj.body = intl2.string(arg1(dependencyMap[14]).t.PpfzUE);
  obj.hideActionSheet = false;
  obj.show(obj);
};
export const showMinOSScreenshareRequirementAlert = function showMinOSScreenshareRequirementAlert() {
  const intl = arg1(dependencyMap[14]).intl;
  let obj = {};
  const errorInfo = arg1(dependencyMap[17]).getErrorInfo(arg1(dependencyMap[17]).AVError.SCREENSHARE_OS_NOT_SUPPORTED);
  let errorCode;
  if (null != errorInfo) {
    errorCode = errorInfo.errorCode;
  }
  obj.errorCode = errorCode;
  const obj2 = arg1(dependencyMap[17]);
  const formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[14]).t.ejOT95, obj);
  obj = {};
  const intl2 = arg1(dependencyMap[14]).intl;
  obj.title = intl2.string(arg1(dependencyMap[14]).t.oblMYa);
  const intl3 = arg1(dependencyMap[14]).intl;
  obj.body = "" + intl3.string(arg1(dependencyMap[14]).t.Wnhd3q) + "\n\n" + formatToPlainStringResult;
  obj.hideActionSheet = false;
  importDefault(dependencyMap[13]).show(obj);
};
export const showTabletRequirementAlert = function showTabletRequirementAlert() {
  let obj = importDefault(dependencyMap[13]);
  obj = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj.title = intl.string(arg1(dependencyMap[14]).t.1N0dxa);
  const intl2 = arg1(dependencyMap[14]).intl;
  obj.body = intl2.string(arg1(dependencyMap[14]).t.qqDFVb);
  obj.hideActionSheet = false;
  obj.show(obj);
};
export const handleDisconnect = function handleDisconnect(channel) {
  const result = importAll(dependencyMap[18]).dismissGlobalKeyboard();
  const obj = importAll(dependencyMap[18]);
  const result1 = arg1(dependencyMap[19]).dismissVoiceChannelScreens(channel, () => {
    const voiceChannel = callback(closure_3[20]).selectVoiceChannel(null);
  });
};
export const audioDeviceToIconMap = obj;
export const getAudioDeviceToDisplayText = function getAudioDeviceToDisplayText(deviceType) {
  const obj = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj.EARPIECE = intl.string(arg1(dependencyMap[14]).t.Ouoi6E);
  const intl2 = arg1(dependencyMap[14]).intl;
  obj.BLUETOOTH_HEADSET = intl2.string(arg1(dependencyMap[14]).t.i6eV3z);
  const intl3 = arg1(dependencyMap[14]).intl;
  obj.WIRED_HEADSET = intl3.string(arg1(dependencyMap[14]).t.Dluojr);
  const intl4 = arg1(dependencyMap[14]).intl;
  obj.SPEAKERPHONE = intl4.string(arg1(dependencyMap[14]).t.snEhlu);
  const intl5 = arg1(dependencyMap[14]).intl;
  obj.INVALID = intl5.string(arg1(dependencyMap[14]).t.kCBL6t);
  if (deviceType.deviceType === constants.TYPE_BLE_HEADSET) {
    const intl6 = arg1(dependencyMap[14]).intl;
    let stringResult = intl6.string(arg1(dependencyMap[14]).t.BtXSp9);
  } else {
    stringResult = obj[deviceType.simpleDeviceType];
  }
  return stringResult;
};
export const useMaskedSpeakerStates = tmp2;
export const useImmediateMaskedSpeakerStates = () => {
  let obj = arg1(closure_3[26]);
  const items = [closure_13];
  const stateFromStores = obj.useStateFromStores(items, () => store.getCurrentRouteType());
  const tmp2 = importDefault(closure_3[29])();
  const arg1 = tmp2;
  let tmp3 = stateFromStores === arg1(closure_3[30]).RouteTypes.SPEAKER;
  const tmp4 = stateFromStores === arg1(closure_3[30]).RouteTypes.BLUETOOTH;
  if (!tmp3) {
    tmp3 = tmp4;
  }
  if (!tmp3) {
    tmp3 = tmp2;
  }
  const importDefault = tmp3;
  const tmp5 = callback(React.useState(tmp3), 2);
  const first = tmp5[0];
  const importAll = first;
  closure_3 = tmp5[1];
  const items1 = [first, tmp2];
  const items2 = [tmp3, tmp2];
  const callback = React.useCallback(() => {
    if (!store.getMultipleRoutesAvailable()) {
      closure_17.cancel();
      if (!tmp2) {
        callback(!first);
      }
    }
    callback2(!first);
  }, items1);
  const effect = React.useEffect(() => {
    callback(tmp3);
  }, items2);
  if (tmp4) {
    let tmp11 = tmp10[23];
  } else {
    tmp11 = tmp10[24];
  }
  obj = { isAudioRouteEnabled: first, toggleAudio: callback, routeSource: importDefault(tmp11) };
  return obj;
};
