// Module ID: 10734
// Function ID: 83459
// Name: ExpandedControlItemIcon
// Dependencies: []
// Exports: AudioRouteButton, DeafenButton, ScreenshareButton, StreamVolumeItem

// Module 10734 (ExpandedControlItemIcon)
function ExpandedControlItemIcon(iconSource) {
  iconSource = iconSource.iconSource;
  const tmp = callback3();
  if (null == iconSource) {
    return null;
  } else {
    let obj = { size: arg1(dependencyMap[8]).Icon.Sizes.MEDIUM, source: iconSource, style: tmp.formTintColor, disableColor: true };
    const tmp14 = callback(arg1(dependencyMap[8]).Icon, obj);
    let tmp10 = tmp14;
    if (iconSource.showIconSparkle) {
      obj = {};
      const items = [tmp14, , ];
      obj = { style: tmp.sparkle2, source: importDefault(dependencyMap[9]) };
      items[1] = callback(closure_4, obj);
      const obj1 = { style: tmp.sparkle, source: importDefault(dependencyMap[10]) };
      items[2] = callback(closure_4, obj1);
      obj.children = items;
      tmp10 = callback2(closure_3, obj);
    }
    return tmp10;
  }
}
function ExpandedControlItem(iconSource) {
  let disabled;
  let label;
  let onPress;
  let onSwitchValueChange;
  let showIconSparkle;
  let switchValue;
  let trailing;
  ({ disabled, showIconSparkle } = iconSource);
  if (showIconSparkle === undefined) {
    showIconSparkle = false;
  }
  ({ switchValue, trailing } = iconSource);
  ({ label, onPress, onSwitchValueChange } = iconSource);
  let tmp2 = null == trailing;
  if (tmp2) {
    tmp2 = null != switchValue;
  }
  if (tmp2) {
    let obj = { tintColor: importDefault(dependencyMap[7]).unsafe_rawColors.BRAND_500, renderIosBackground: true, value: switchValue, disabled, onValueChange: onSwitchValueChange };
    trailing = callback(arg1(dependencyMap[11]).FormSwitch, obj);
  }
  obj = { disabled };
  obj = { iconSource: iconSource.iconSource, showIconSparkle };
  obj.leading = callback(ExpandedControlItemIcon, obj);
  const tmp = callback3();
  obj.label = callback(arg1(dependencyMap[11]).FormLabel, { text: label, style: callback3().formColor });
  obj.onPress = onPress;
  obj.trailing = trailing;
  return callback(arg1(dependencyMap[11]).FormRow, obj);
}
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const MediaEngineContextTypes = arg1(dependencyMap[4]).MediaEngineContextTypes;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { tintColor: importDefault(dependencyMap[7]).colors.ICON_STRONG };
obj.formTintColor = obj;
const tmp4 = arg1(dependencyMap[5]);
obj.formColor = { color: importDefault(dependencyMap[7]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.sparkle = {};
obj.sparkle2 = {};
let closure_11 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[7]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/video_calls/native/components/FocusedExpandedControls.tsx");

export const StreamVolumeItem = function StreamVolumeItem() {
  let effectiveVolume;
  let handleVolumeChange;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_5, closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const lastActiveStream = lastActiveStream.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== id.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    return tmp2;
  });
  let ownerId;
  const tmp = callback3();
  if (null != stateFromStores) {
    ownerId = stateFromStores.ownerId;
  }
  const tmp3 = importDefault(dependencyMap[13]);
  ({ effectiveVolume, handleVolumeChange } = importDefault(dependencyMap[13])(ownerId, MediaEngineContextTypes.STREAM));
  obj = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj.text = intl.string(arg1(dependencyMap[14]).t.pEAl4b);
  const items1 = [tmp.formColor, { marginBottom: 16 }];
  obj.style = items1;
  const items2 = [callback(arg1(dependencyMap[11]).FormLabel, obj), ];
  obj = {};
  const tmp3Result = importDefault(dependencyMap[13])(ownerId, MediaEngineContextTypes.STREAM);
  const tmp6 = callback;
  const tmp7 = importDefault(dependencyMap[15]);
  let fn;
  if (obj4.isAndroid()) {
    fn = () => true;
  }
  obj.onResponderGrant = fn;
  obj.value = effectiveVolume;
  obj.onValueChange = handleVolumeChange;
  obj.color = importDefault(dependencyMap[7]).unsafe_rawColors.WHITE;
  obj.maxTrackTintColor = importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_300;
  items2[1] = tmp6(tmp7, obj);
  {}.children = items2;
  let tmp9 = null;
  if (null != stateFromStores) {
    const obj1 = { label: tmp8 };
    tmp9 = callback(arg1(dependencyMap[11]).FormRow, obj1);
  }
  return tmp9;
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  ({ channelId: closure_0, isConnectedToVoiceChannel: closure_1 } = arg0);
  let obj = arg1(dependencyMap[17]);
  obj = {
    onPress() {
      const result = callback(closure_2[18]).showAudioOutputSelector(callback, closure_1);
    },
    iconSource: obj.useMaskedSpeakerStates().routeSource
  };
  const intl = arg1(dependencyMap[14]).intl;
  obj.label = intl.string(arg1(dependencyMap[14]).t.A/Ly/2);
  return callback(ExpandedControlItem, obj);
};
export const ScreenshareButton = function ScreenshareButton(arg0) {
  let channel;
  let disabled;
  let imgSource;
  let onPress;
  let text;
  ({ channel, disabled } = arg0);
  const tmp = importDefault(dependencyMap[19])(channel);
  const obj = {};
  let tmp4 = !tmp.isFeatureEnabled;
  ({ onPress, imgSource, text } = tmp);
  if (!tmp4) {
    tmp4 = disabled;
  }
  obj.disabled = tmp4;
  obj.onPress = onPress;
  obj.iconSource = imgSource;
  obj.label = text;
  return closure_8(ExpandedControlItem, obj);
};
export const DeafenButton = function DeafenButton(disabled) {
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let obj = arg1(dependencyMap[21]);
  const deafHandler = obj.createDeafHandler(importDefault(dependencyMap[20])(disabled.channel));
  if (deafHandler.deaf) {
    let tmp5 = tmp4[22];
  } else {
    tmp5 = tmp4[23];
  }
  obj = { disabled: flag, onPress: deafHandler.onPress, iconSource: importDefault(tmp5) };
  const intl = arg1(dependencyMap[14]).intl;
  obj.label = intl.string(arg1(dependencyMap[14]).t.wjcRFX);
  return callback(ExpandedControlItem, obj);
};
