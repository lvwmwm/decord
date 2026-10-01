// Module ID: 9129
// Function ID: 9130
// Name: VoicePanelAudioOutputActionSheet
// Dependencies: [19, 17, 4853, 9101, 2045, 4854, 9128, 1074, 21, 4836, 4800, 563, 9130, 9131, 1115, 5997, 6000, 5923, 9097, 9240, 8962, 9241, 4654, 2029, 9258, 6571, 6570, 5901, 2]

// Module 9129 (VoicePanelAudioOutputActionSheet)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import VoicePanelHeaderConstants from "VoicePanelHeaderConstants" /* 9128 */;
import useOnConnectToConsole from "useOnConnectToConsole" /* 9241 */;
import react from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4853 */;
import AudioManagerStore from "AudioManagerStore" /* 9101 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SessionsStore from "SessionsStore" /* 4854 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap, type;

let closure_12;
let unpackModuleId;
function VoicePanelAudioPhoneOutputSection() {
  let TableRadioGroup;
  let availableDevices;
  let intl;
  let obj3;
  let tmp = closure_13();
  let obj = availableDevices(563);
  const items = [AudioManagerStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { activeDevice: AudioManagerStore.getActiveAudioDevice(), availableDevices: AudioManagerStore.getAudioDevices() };
    return obj;
  });
  availableDevices = stateFromStoresObject.availableDevices;
  const activeDevice = stateFromStoresObject.activeDevice;
  let closure_1 = react.useCallback((arg0) => {
    const obj = availableDevices(dependencyMap[12]);
    obj.setAudioOutputDevice(arg0);
    const obj2 = closure_1(dependencyMap[10]);
    obj2.hideActionSheet(closure_1_9);
  }, []);
  let tmp5 = null;
  if (availableDevices.length > 0) {
    let obj2 = { style: tmp.sectionContainer, title: intl.string(tmp2(1115).t.CxyS15), hasIcons: true, children: closure_11(TableRadioGroup, obj3) };
    const VoicePanelFormSection = tmp2(9131).VoicePanelFormSection;
    intl = tmp2(1115).intl;
    obj3 = {
      value: activeDevice.deviceId,
      onChange(arg0) {
          let closure_0 = arg0;
          const found = availableDevices.find((deviceId) => deviceId.deviceId === closure_0);
          if (null != found) {
            closure_1(found);
          }
        },
      hasIcons: true,
      children: availableDevices.map((deviceId) => {
          let TableRowIcon;
          let deviceName1;
          let obj2;
          let obj3;
          const obj = { value: deviceId.deviceId, icon: closure_1_11(TableRowIcon, obj2), label: obj3.getAudioDeviceToDisplayText(deviceId), subLabel: deviceName1 };
          const TableRadioRow = availableDevices(dependencyMap[16]).TableRadioRow;
          obj2 = { source: availableDevices(dependencyMap[18]).audioDeviceToIconMap[deviceId.simpleDeviceType] };
          TableRowIcon = availableDevices(dependencyMap[17]).TableRowIcon;
          const deviceName = deviceId.deviceName;
          let length;
          obj3 = availableDevices(dependencyMap[18]);
          const tmp = closure_1_11;
          if (deviceName != null) {
            length = deviceName.length;
          }
          deviceName1 = undefined;
          if (length > 0) {
            deviceName1 = deviceId.deviceName;
          }
          return tmp(TableRadioRow, obj, deviceId.deviceId);
        })
    };
    TableRadioGroup = tmp2(5997).TableRadioGroup;
    tmp5 = closure_11(VoicePanelFormSection, obj2);
  }
  return tmp5;
}
function VoicePanelAudioConsoleSection(channel) {
  let TableRadioGroup;
  let intl;
  let mapped;
  let obj5;
  let sessionId;
  channel = channel.channel;
  let arr;
  dependencyMap = undefined;
  let awaitingRemoteSessionInfo;
  let tmp2 = dependencyMap;
  let tmp = closure_13();
  arr = arr(9240)();
  dependencyMap = arr(8962)();
  let obj = channel(563);
  const items = [awaitingRemoteSessionInfo];
  const stateFromStores = obj.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  let obj2 = channel(563);
  const items1 = [SessionsStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let str;
    const getSessionById = SessionsStore.getSessionById;
    if (sessionId != null) {
      str = sessionId.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return getSessionById(str);
  });
  const items2 = [stateFromStores, stateFromStores1];
  const items3 = [arr, channel];
  const memo = stateFromStores.useMemo(() => {
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.type;
    }
    if (str == null) {
      let os;
      if (stateFromStores1 != null) {
        const clientInfo = stateFromStores1.clientInfo;
        if (clientInfo != null) {
          os = clientInfo.os;
        }
      }
      str = os;
    }
    if (str == null) {
      str = "";
    }
    return str;
  }, items2);
  const callback = stateFromStores.useCallback((arg0) => {
    let closure_0 = arg0;
    const found = arr.find((type) => type.type === closure_0);
    if (null != found) {
      const obj2 = useOnConnectToConsole;
      obj2.onConnectToConsole(channel, found);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet(closure_9);
    } else {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(closure_9);
    }
  }, items3);
  let obj3 = channel(4654);
  const tmp8 = !obj3.useIsDismissibleContentDismissed_UNSAFE(channel(2029).DismissibleContent.DONUT_MOBILE_NUX);
  awaitingRemoteSessionInfo = tmp8;
  const items4 = [arr, tmp8];
  const effect = stateFromStores.useEffect(() => {
    const tmp = awaitingRemoteSessionInfo && arr.length > 0;
    if (tmp) {
      const obj = DismissibleContentUnsafeUtils;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    }
  }, items4);
  let tmp10 = null;
  if (arr.length > 0) {
    let obj4 = { title: intl.string(tmp3(1115).t.q22XnQ), style: tmp.sectionContainer, hasIcons: true, children: closure_11(TableRadioGroup, obj5) };
    const VoicePanelFormSection = tmp3(9131).VoicePanelFormSection;
    intl = tmp3(1115).intl;
    obj5 = { defaultValue: memo, onChange: callback, hasIcons: true, children: mapped.filter((item) => Boolean(item)) };
    TableRadioGroup = tmp3(5997).TableRadioGroup;
    mapped = arr.map((type) => {
      let TableRowIcon;
      let intl;
      let intl2;
      let obj4;
      let tmp2;
      type = type.type;
      if (constants.XBOX === type) {
        const obj = { label: intl.string(channel(sessionId[14]).t.Nfvo72), variant: "xbox" };
        intl = channel(sessionId[14]).intl;
        tmp2 = obj;
      } else {
        tmp2 = null;
        if (tmp.PLAYSTATION === type) {
          const obj2 = { label: intl2.string(channel(sessionId[14]).t.fFl4jo), variant: "playstation" };
          intl2 = channel(sessionId[14]).intl;
          tmp2 = obj2;
        }
      }
      let tmp5 = null != tmp2;
      if (tmp5) {
        const obj3 = { icon: closure_1_11(TableRowIcon, obj4), label: tmp2.label, value: type.type };
        const TableRadioRow = channel(sessionId[16]).TableRadioRow;
        obj4 = { source: arr(sessionId[24])(type.type), variant: tmp2.variant };
        TableRowIcon = channel(sessionId[17]).TableRowIcon;
        tmp5 = closure_1_11(TableRadioRow, obj3, type.type);
      }
      return tmp5;
    });
    tmp10 = closure_11(VoicePanelFormSection, obj4);
  }
  return tmp10;
}
const ScrollView = react_native.ScrollView;
let closure_9 = VoicePanelHeaderConstants.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const PlatformTypes = Constants.PlatformTypes;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ sectionContainer: { marginTop: 0, marginBottom: 24 } });
const memoResult = react.memo(function VoicePanelAudioOutputActionSheet(arg0) {
  let BottomSheetTitleHeader;
  let intl;
  let isConnectedToVoiceChannel;
  let items1;
  let obj3;
  let obj4;
  let obj5;
  let tmp6;
  ({ channelId: require, isConnectedToVoiceChannel } = arg0);
  const items = [ChannelStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let tmp5Result = null;
  if (null != stateFromStores) {
    const obj2 = { header: closure_11(BottomSheetTitleHeader, obj3), children: closure_11(tmp6, obj4) };
    BottomSheet = tmp(6571).BottomSheet;
    obj3 = { title: intl.string(intl3.t.iwxPM3) };
    BottomSheetTitleHeader = tmp(6570).BottomSheetTitleHeader;
    intl = tmp(1115).intl;
    tmp6 = ScrollView;
    const tmp7 = closure_12;
    const tmp9 = NativeViewDefault;
    if (isConnectedToVoiceChannel) {
      isConnectedToVoiceChannel = tmp5(VoicePanelAudioPhoneOutputSection, {});
    }
    obj4 = { children: tmp7(tmp9, obj5) };
    obj5 = { children: items1 };
    items1 = [isConnectedToVoiceChannel, ];
    const obj6 = { channel: stateFromStores };
    items1[1] = closure_11(VoicePanelAudioConsoleSection, obj6);
    tmp5Result = tmp5(BottomSheet, obj2);
  }
  return tmp5Result;
});
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx");

export default memoResult;
