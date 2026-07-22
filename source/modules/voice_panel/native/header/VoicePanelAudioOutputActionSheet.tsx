// Module ID: 8856
// Function ID: 69878
// Name: closeActionSheet
// Dependencies: []

// Module 8856 (closeActionSheet)
function closeActionSheet() {
  importDefault(dependencyMap[10]).hideActionSheet(closure_9);
}
function VoicePanelAudioPhoneOutputSection() {
  let obj = arg1(dependencyMap[11]);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ activeDevice: store.getActiveAudioDevice(), availableDevices: store.getAudioDevices() }));
  const availableDevices = stateFromStoresObject.availableDevices;
  const arg1 = availableDevices;
  let closure_1 = importAllResult.useCallback((deviceId) => {
    availableDevices(closure_2[12]).setAudioOutputDevice(deviceId);
    callback3();
  }, []);
  let tmp3 = null;
  if (availableDevices.length > 0) {
    obj = { style: tmp.sectionContainer };
    const intl = arg1(dependencyMap[14]).intl;
    obj.title = intl.string(arg1(dependencyMap[14]).t.CxyS15);
    obj.hasIcons = true;
    obj = {
      value: stateFromStoresObject.activeDevice.deviceId,
      onChange(arg0) {
          const availableDevices = arg0;
          const found = availableDevices.find((deviceId) => deviceId.deviceId === deviceId);
          if (null != found) {
            callback(found);
          }
        },
      hasIcons: true,
      children: availableDevices.map((deviceId) => {
          let obj = { value: deviceId.deviceId };
          obj = { source: availableDevices(closure_2[18]).audioDeviceToIconMap[deviceId.simpleDeviceType] };
          obj.icon = callback2(availableDevices(closure_2[17]).TableRowIcon, obj);
          obj.label = availableDevices(closure_2[18]).getAudioDeviceToDisplayText(deviceId);
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
          return callback2(availableDevices(closure_2[16]).TableRadioRow, obj, deviceId.deviceId);
        })
    };
    obj.children = callback(arg1(dependencyMap[15]).TableRadioGroup, obj);
    tmp3 = callback(arg1(dependencyMap[13]).VoicePanelFormSection, obj);
  }
  return tmp3;
}
function VoicePanelAudioConsoleSection(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const arr = importDefault(closure_2[19])();
  const importDefault = arr;
  closure_2 = importDefault(closure_2[20])();
  let obj = arg1(closure_2[11]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => tmp6.getAwaitingRemoteSessionInfo());
  const tmp = callback2();
  const items1 = [closure_8];
  const stateFromStores1 = arg1(closure_2[11]).useStateFromStores(items1, () => {
    let sessionId;
    if (null != sessionId) {
      sessionId = sessionId.sessionId;
    }
    let str = "";
    if (null != sessionId) {
      str = sessionId;
    }
    return sessionById.getSessionById(str);
  });
  const ScrollView = stateFromStores1;
  const items2 = [stateFromStores, stateFromStores1];
  const items3 = [arr, channel];
  const memo = importAllResult.useMemo(() => {
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
  const callback = importAllResult.useCallback((channel) => {
    const found = arr.find((type) => type.type === type);
    if (null != found) {
      channel(closure_2[21]).onConnectToConsole(channel, found);
      callback2();
      const obj = channel(closure_2[21]);
    } else {
      callback2();
    }
  }, items3);
  const obj2 = arg1(closure_2[11]);
  const tmp6 = !arg1(closure_2[22]).useIsDismissibleContentDismissed_UNSAFE(arg1(closure_2[23]).DismissibleContent.DONUT_MOBILE_NUX);
  closure_5 = tmp6;
  const items4 = [arr, tmp6];
  const effect = importAllResult.useEffect(() => {
    let tmp = tmp6;
    if (tmp6) {
      tmp = arr.length > 0;
    }
    if (tmp) {
      const result = channel(closure_2[22]).UNSAFE_markDismissibleContentAsDismissed(channel(closure_2[23]).DismissibleContent.DONUT_MOBILE_NUX);
      const obj = channel(closure_2[22]);
    }
  }, items4);
  let tmp8 = null;
  if (arr.length > 0) {
    obj = {};
    const intl = arg1(closure_2[14]).intl;
    obj.title = intl.string(arg1(closure_2[14]).t.q22XnQ);
    obj.style = tmp.sectionContainer;
    obj.hasIcons = true;
    obj = { defaultValue: memo, onChange: callback, hasIcons: true };
    const mapped = arr.map((type) => {
      type = type.type;
      if (constants.XBOX === type) {
        let obj = {};
        const intl = channel(closure_2[14]).intl;
        obj.label = intl.string(channel(closure_2[14]).t.Nfvo72);
        obj.variant = "xbox";
        let tmp2 = obj;
      } else {
        tmp2 = null;
        if (constants.PLAYSTATION === type) {
          obj = {};
          const intl2 = channel(closure_2[14]).intl;
          obj.label = intl2.string(channel(closure_2[14]).t.fFl4jo);
          obj.variant = "playstation";
          tmp2 = obj;
        }
      }
      let tmp5 = null != tmp2;
      if (tmp5) {
        obj = {};
        const obj1 = { source: arr(closure_2[24])(type.type), variant: tmp2.variant };
        obj.icon = callback(channel(closure_2[17]).TableRowIcon, obj1);
        obj.label = tmp2.label;
        obj.value = type.type;
        tmp5 = callback(channel(closure_2[16]).TableRadioRow, obj, type.type);
      }
      return tmp5;
    });
    obj.children = mapped.filter((arg0) => Boolean(arg0));
    obj.children = callback(arg1(closure_2[15]).TableRadioGroup, obj);
    tmp8 = callback(arg1(closure_2[13]).VoicePanelFormSection, obj);
  }
  return tmp8;
}
const importAllResult = importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = arg1(dependencyMap[6]).VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const PlatformTypes = arg1(dependencyMap[7]).PlatformTypes;
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[8]));
const tmp2 = arg1(dependencyMap[8]);
let closure_13 = arg1(dependencyMap[9]).createStyles({ sectionContainer: { y: "SECURE_FRAMES_SETTINGS_UPDATE", channelId: false } });
const obj2 = arg1(dependencyMap[9]);
const memoResult = importAllResult.memo(function VoicePanelAudioOutputActionSheet(arg0) {
  let isConnectedToVoiceChannel;
  ({ channelId: closure_0, isConnectedToVoiceChannel } = arg0);
  let obj = arg1(dependencyMap[11]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(closure_0));
  let tmp3Result = null;
  if (null != stateFromStores) {
    obj = {};
    obj = {};
    const intl = arg1(dependencyMap[14]).intl;
    obj.title = intl.string(arg1(dependencyMap[14]).t.iwxPM3);
    obj.header = callback(arg1(dependencyMap[26]).BottomSheetTitleHeader, obj);
    const obj1 = {};
    const obj2 = {};
    if (isConnectedToVoiceChannel) {
      isConnectedToVoiceChannel = callback(VoicePanelAudioPhoneOutputSection, {});
    }
    const items1 = [isConnectedToVoiceChannel, ];
    const obj3 = { channel: stateFromStores };
    items1[1] = callback(VoicePanelAudioConsoleSection, obj3);
    obj2.children = items1;
    obj1.children = closure_12(importDefault(dependencyMap[27]), obj2);
    obj.children = callback(ScrollView, obj1);
    tmp3Result = callback(arg1(dependencyMap[25]).BottomSheet, obj);
    const tmp11 = importDefault(dependencyMap[27]);
    const tmp3 = callback;
    const tmp7 = callback;
    const tmp8 = ScrollView;
    const tmp9 = closure_12;
  }
  return tmp3Result;
});
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx");

export default memoResult;
