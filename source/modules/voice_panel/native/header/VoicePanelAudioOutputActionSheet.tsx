// Module ID: 8863
// Function ID: 69919
// Name: closeActionSheet
// Dependencies: [31, 27, 4144, 8840, 1348, 4145, 8862, 653, 33, 4130, 4098, 624, 8864, 8865, 1212, 7519, 7518, 5170, 8836, 8933, 8934, 8935, 3946, 1334, 9054, 5187, 5186, 5517, 2]

// Module 8863 (closeActionSheet)
import importAllResult from "result";
import { ScrollView } from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY as closure_9 } from "VOICE_PANEL_SETTINGS_KEY";
import { PlatformTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
const require = arg1;
function closeActionSheet() {
  importDefault(4098).hideActionSheet(closure_9);
}
function VoicePanelAudioPhoneOutputSection() {
  let obj = availableDevices(624);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ activeDevice: outer1_6.getActiveAudioDevice(), availableDevices: outer1_6.getAudioDevices() }));
  availableDevices = stateFromStoresObject.availableDevices;
  let closure_1 = importAllResult.useCallback((deviceId) => {
    availableDevices(outer1_2[12]).setAudioOutputDevice(deviceId);
    outer1_14();
  }, []);
  let tmp3 = null;
  if (availableDevices.length > 0) {
    obj = { style: tmp.sectionContainer };
    const intl = availableDevices(1212).intl;
    obj.title = intl.string(availableDevices(1212).t.CxyS15);
    obj.hasIcons = true;
    obj = {
      value: stateFromStoresObject.activeDevice.deviceId,
      onChange(arg0) {
          const availableDevices = arg0;
          const found = availableDevices.find((deviceId) => deviceId.deviceId === closure_0);
          if (null != found) {
            callback(found);
          }
        },
      hasIcons: true,
      children: availableDevices.map((deviceId) => {
          let obj = { value: deviceId.deviceId };
          obj = { source: availableDevices(outer1_2[18]).audioDeviceToIconMap[deviceId.simpleDeviceType] };
          obj.icon = outer1_11(availableDevices(outer1_2[17]).TableRowIcon, obj);
          obj.label = availableDevices(outer1_2[18]).getAudioDeviceToDisplayText(deviceId);
          const deviceName = deviceId.deviceName;
          let length;
          if (null != deviceName) {
            length = deviceName.length;
          }
          let deviceName1;
          if (length > 0) {
            deviceName1 = deviceId.deviceName;
          }
          obj.subLabel = deviceName1;
          return outer1_11(availableDevices(outer1_2[16]).TableRadioRow, obj, deviceId.deviceId);
        })
    };
    obj.children = callback(availableDevices(7519).TableRadioGroup, obj);
    tmp3 = callback(availableDevices(8865).VoicePanelFormSection, obj);
  }
  return tmp3;
}
function VoicePanelAudioConsoleSection(channel) {
  channel = channel.channel;
  arr = arr(8933)();
  const dependencyMap = arr(8934)();
  let obj = channel(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => tmp6.getAwaitingRemoteSessionInfo());
  let tmp = callback2();
  const items1 = [closure_8];
  const stateFromStores1 = channel(624).useStateFromStores(items1, () => {
    let sessionId;
    if (null != sessionId) {
      sessionId = sessionId.sessionId;
    }
    let str = "";
    if (null != sessionId) {
      str = sessionId;
    }
    return outer1_8.getSessionById(str);
  });
  const items2 = [stateFromStores, stateFromStores1];
  const items3 = [arr, channel];
  const memo = stateFromStores.useMemo(() => {
    let type;
    if (null != stateFromStores) {
      type = stateFromStores.type;
    }
    if (null == type) {
      let os;
      if (null != stateFromStores1) {
        const clientInfo = stateFromStores1.clientInfo;
        if (null != clientInfo) {
          os = clientInfo.os;
        }
      }
      type = os;
    }
    let str = "";
    if (null != type) {
      str = type;
    }
    return str;
  }, items2);
  const callback = stateFromStores.useCallback((channel) => {
    let closure_0 = channel;
    const found = arr.find((type) => type.type === closure_0);
    if (null != found) {
      channel(sessionId[21]).onConnectToConsole(closure_0, found);
      outer1_14();
      const obj = channel(sessionId[21]);
    } else {
      outer1_14();
    }
  }, items3);
  const obj2 = channel(624);
  const tmp6 = !channel(3946).useIsDismissibleContentDismissed_UNSAFE(channel(1334).DismissibleContent.DONUT_MOBILE_NUX);
  _isNativeReflectConstruct = tmp6;
  const items4 = [arr, tmp6];
  const effect = stateFromStores.useEffect(() => {
    let tmp = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct) {
      tmp = arr.length > 0;
    }
    if (tmp) {
      const result = channel(sessionId[22]).UNSAFE_markDismissibleContentAsDismissed(channel(sessionId[23]).DismissibleContent.DONUT_MOBILE_NUX);
      const obj = channel(sessionId[22]);
    }
  }, items4);
  let tmp8 = null;
  if (arr.length > 0) {
    obj = {};
    let intl = channel(1212).intl;
    obj.title = intl.string(channel(1212).t.q22XnQ);
    obj.style = tmp.sectionContainer;
    obj.hasIcons = true;
    obj = { defaultValue: memo, onChange: callback, hasIcons: true };
    const mapped = arr.map((type) => {
      type = type.type;
      if (outer1_10.XBOX === type) {
        let obj = {};
        const intl = channel(sessionId[14]).intl;
        obj.label = intl.string(channel(sessionId[14]).t.Nfvo72);
        obj.variant = "xbox";
        let tmp2 = obj;
      } else {
        tmp2 = null;
        if (outer1_10.PLAYSTATION === type) {
          obj = {};
          const intl2 = channel(sessionId[14]).intl;
          obj.label = intl2.string(channel(sessionId[14]).t.fFl4jo);
          obj.variant = "playstation";
          tmp2 = obj;
        }
      }
      let tmp5 = null != tmp2;
      if (tmp5) {
        obj = {};
        const obj1 = { source: arr(sessionId[24])(type.type), variant: tmp2.variant };
        obj.icon = outer1_11(channel(sessionId[17]).TableRowIcon, obj1);
        obj.label = tmp2.label;
        obj.value = type.type;
        tmp5 = outer1_11(channel(sessionId[16]).TableRadioRow, obj, type.type);
      }
      return tmp5;
    });
    obj.children = mapped.filter((arg0) => Boolean(arg0));
    obj.children = callback(channel(7519).TableRadioGroup, obj);
    tmp8 = callback(channel(8865).VoicePanelFormSection, obj);
  }
  return tmp8;
}
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = _createForOfIteratorHelperLoose.createStyles({ sectionContainer: { marginTop: 0, marginBottom: 24 } });
const memoResult = importAllResult.memo(function VoicePanelAudioOutputActionSheet(arg0) {
  let isConnectedToVoiceChannel;
  let require;
  ({ channelId: require, isConnectedToVoiceChannel } = arg0);
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getChannel(closure_0));
  let tmp3Result = null;
  if (null != stateFromStores) {
    obj = {};
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t.iwxPM3);
    obj.header = callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
    const obj1 = {};
    const obj2 = {};
    if (isConnectedToVoiceChannel) {
      isConnectedToVoiceChannel = callback(VoicePanelAudioPhoneOutputSection, {});
    }
    const items1 = [isConnectedToVoiceChannel, ];
    const obj3 = { channel: stateFromStores };
    items1[1] = callback(VoicePanelAudioConsoleSection, obj3);
    obj2.children = items1;
    obj1.children = closure_12(importDefault(5517), obj2);
    obj.children = callback(ScrollView, obj1);
    tmp3Result = callback(require(5187) /* Background */.BottomSheet, obj);
    const tmp11 = importDefault(5517);
    const tmp3 = callback;
    const tmp7 = callback;
    const tmp8 = ScrollView;
    const tmp9 = closure_12;
  }
  return tmp3Result;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx");

export default memoResult;
