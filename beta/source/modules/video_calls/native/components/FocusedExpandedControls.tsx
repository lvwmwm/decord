// Module ID: 9474
// Function ID: 9475
// Name: FocusedExpandedControls
// Dependencies: [19, 17, 4858, 502, 4861, 21, 4836, 576, 1177, 9475, 9476, 8053, 504, 9477, 1115, 9442, 1364, 9097, 9127, 9408, 9478, 9463, 9479, 9480, 2]
// Exports: AudioRouteButton, DeafenButton, ScreenshareButton, StreamVolumeItem

// Module 9474 (FocusedExpandedControls)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Constants from "Constants" /* 4861 */;
import Form from "Form" /* 8053 */;
import CallsUtils from "CallsUtils" /* 9097 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9127 */;
import useScreenshareUtilsDefault from "useScreenshareUtils" /* 9408 */;
import VolumeSliderDefault from "VolumeSlider" /* 9442 */;
import VoiceActionUtils from "VoiceActionUtils" /* 9463 */;
import AssetRegistryDefault from "AssetRegistry" /* 9475 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9476 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 9477 */;
import useDeafStatesDefault from "useDeafStates" /* 9478 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let lastActiveStream;

let c10;
let c3;
let c9;
let closure_4;
let metroImportAll;
let obj2;
let obj3;
let tmp2;
const intl3 = tmp2(1115);
const PlatformUtils = tmp2(1364);
function ExpandedControlItemIcon(iconSource) {
  let items;
  iconSource = iconSource.iconSource;
  const showIconSparkle = iconSource.showIconSparkle;
  const tmp = closure_11();
  if (null == iconSource) {
    return null;
  } else {
    const obj2 = { size: native.Icon.Sizes.MEDIUM, source: iconSource, style: tmp.formTintColor, disableColor: true };
    const Icon = native.Icon;
    const tmp10 = metroImportAll(Icon, obj2);
    let tmp6 = tmp10;
    if (showIconSparkle) {
      const obj = { children: items };
      items = [tmp10, , ];
      const obj3 = { style: tmp.sparkle2, source: AssetRegistryDefault };
      items[1] = metroImportAll(React3, obj3);
      const obj4 = { style: tmp.sparkle, source: AssetRegistryDefault2 };
      items[2] = metroImportAll(React3, obj4);
      tmp6 = React4(_false, obj);
    }
    return tmp6;
  }
}
function ExpandedControlItem(iconSource) {
  let disabled;
  let label;
  let obj3;
  let onPress;
  let onSwitchValueChange;
  let showIconSparkle;
  let switchValue;
  let trailing;
  ({ disabled, showIconSparkle } = iconSource);
  iconSource = iconSource.iconSource;
  if (showIconSparkle === undefined) {
    showIconSparkle = false;
  }
  ({ switchValue, trailing } = iconSource);
  ({ label, onPress, onSwitchValueChange } = iconSource);
  let tmp2 = null == trailing;
  const tmp = closure_11();
  if (tmp2) {
    tmp2 = null != switchValue;
  }
  if (tmp2) {
    const obj = { tintColor: nativeDefault.unsafe_rawColors.BRAND_500, renderIosBackground: true, value: switchValue, disabled, onValueChange: onSwitchValueChange };
    const FormSwitch = Form.FormSwitch;
    trailing = metroImportAll(FormSwitch, obj);
  }
  const obj2 = { disabled, leading: metroImportAll(ExpandedControlItemIcon, { iconSource, showIconSparkle }), label: metroImportAll(Form.FormLabel, obj3), onPress, trailing };
  const FormRow = Form.FormRow;
  obj3 = { text: label, style: tmp.formColor };
  return metroImportAll(FormRow, obj2);
}
({ View: c3, Image: closure_4 } = react_native);
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { formTintColor: obj2, formColor: obj3, sparkle: { position: "absolute", bottom: -4, right: "70%" }, sparkle2: { position: "absolute", right: -5, height: 10, width: 10 } };
obj2 = { tintColor: nativeDefault.colors.ICON_STRONG };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedExpandedControls.tsx");

export const StreamVolumeItem = function StreamVolumeItem() {
  let effectiveVolume;
  let handleVolumeChange;
  let id;
  let intl;
  let intl2;
  let items1;
  let tmp2 = require;
  const items = [ApplicationStreamingStore, AuthenticationStore];
  const tmp = closure_11();
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    lastActiveStream = lastActiveStream.getLastActiveStream();
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
  const tmp6 = useMuteAwareLocalVolumeDefault;
  if (stateFromStores != null) {
    ownerId = stateFromStores.ownerId;
  }
  ({ effectiveVolume, handleVolumeChange } = tmp6(ownerId, MediaEngineContextTypes.STREAM));
  const obj2 = { text: intl.string(intl3.t.pEAl4b), style: items1 };
  tmp6(ownerId, MediaEngineContextTypes.STREAM);
  const FormLabel = Form.FormLabel;
  intl = intl3.intl;
  items1 = [tmp.formColor, { marginBottom: 16 }];
  const items2 = [metroImportAll(FormLabel, obj2), ];
  let fn;
  const tmp5Result = VolumeSliderDefault;
  const tmp2Result = PlatformUtils;
  if (tmp2Result.isAndroid()) {
    fn = () => true;
  }
  const obj3 = { onResponderGrant: fn, value: effectiveVolume, onValueChange: handleVolumeChange, color: nativeDefault.unsafe_rawColors.WHITE, maxTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_300, accessibilityLabel: intl2.string(intl3.t.pEAl4b) };
  intl2 = intl3.intl;
  items2[1] = metroImportAll(tmp5Result, obj3);
  ({ children: null }.children) = items2;
  let tmp9Result = null;
  if (null != stateFromStores) {
    const obj4 = { label: tmp11 };
    tmp9Result = tmp9(Form.FormRow, obj4);
  }
  return tmp9Result;
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  let intl;
  ({ channelId: require, isConnectedToVoiceChannel: importDefault } = arg0);
  let obj = CallsUtils;
  const obj2 = {
    onPress() {
      const obj = showAudioOutputSelector;
      const result = obj.showAudioOutputSelector(require, importDefault);
    },
    iconSource: obj.useMaskedSpeakerStates().routeSource,
    label: intl.string(intl3.t["A/Ly/2"])
  };
  intl = intl3.intl;
  return closure_8(ExpandedControlItem, obj2);
};
export const ScreenshareButton = function ScreenshareButton(arg0) {
  let channel;
  let disabled;
  let imgSource;
  let onPress;
  let text;
  ({ channel, disabled } = arg0);
  const tmp = useScreenshareUtilsDefault(channel);
  const isFeatureEnabled = tmp.isFeatureEnabled;
  let disabled2 = !isFeatureEnabled;
  ({ onPress, imgSource, text } = tmp);
  const tmp2 = metroImportAll;
  const tmp3 = ExpandedControlItem;
  if (isFeatureEnabled) {
    disabled2 = disabled;
  }
  return tmp2(tmp3, { disabled: disabled2, onPress, iconSource, label });
};
export const DeafenButton = function DeafenButton(disabled) {
  let intl;
  let flag = disabled.disabled;
  const channel = disabled.channel;
  if (flag === undefined) {
    flag = false;
  }
  const tmp3 = useDeafStatesDefault(channel);
  const obj = VoiceActionUtils;
  const deafHandler = obj.createDeafHandler(tmp3);
  const obj2 = { disabled: flag, onPress: deafHandler.onPress, iconSource: importDefault(deafHandler.deaf ? 9479 : 9480), label: intl.string(intl3.t.wjcRFX) };
  intl = tmp4(1115).intl;
  return metroImportAll(ExpandedControlItem, obj2);
};
