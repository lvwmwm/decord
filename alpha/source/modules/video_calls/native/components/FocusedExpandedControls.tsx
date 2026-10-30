// Module ID: 11960
// Function ID: 11961
// Name: FocusedExpandedControls
// Dependencies: [19, 17, 6708, 502, 5763, 21, 5009, 575, 1188, 5712, 11961, 11962, 8169, 504, 11963, 1114, 11910, 1376, 9202, 9209, 11881, 11964, 11931, 11965, 11966, 2]
// Exports: AudioRouteButton, DeafenButton, ScreenshareButton, StreamVolumeItem

// Module 11960 (FocusedExpandedControls)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import FastImageDefault from "FastImage" /* 5712 */;
import Constants from "Constants" /* 5763 */;
import _mod8169 from "module_8169" /* 8169 */;
import CallsUtils from "CallsUtils" /* 9202 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9209 */;
import useScreenshareUtilsDefault from "useScreenshareUtils" /* 11881 */;
import VolumeSliderDefault from "VolumeSlider" /* 11910 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11931 */;
import AssetRegistryDefault from "AssetRegistry" /* 11961 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11962 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 11963 */;
import useDeafStatesDefault from "useDeafStates" /* 11964 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6708 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let lastActiveStream;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let tmp2;
const intl3 = tmp2(1114);
const PlatformUtils = tmp2(1376);
function ExpandedControlItemIcon(iconSource) {
  let items;
  iconSource = iconSource.iconSource;
  const showIconSparkle = iconSource.showIconSparkle;
  const tmp = closure_10();
  if (null == iconSource) {
    return null;
  } else {
    const obj2 = { size: native.Icon.Sizes.MEDIUM, source: iconSource, style: tmp.formTintColor, disableColor: true };
    const Icon = native.Icon;
    const tmp11 = metroImportDefault(Icon, obj2);
    let tmp7 = tmp11;
    if (showIconSparkle) {
      const obj = { children: items };
      items = [tmp11, , ];
      const obj3 = { style: tmp.sparkle2, source: AssetRegistryDefault };
      const tmp5 = FastImageDefault;
      items[1] = metroImportDefault(tmp5, obj3);
      const obj4 = { style: tmp.sparkle, source: AssetRegistryDefault2 };
      const tmp6 = FastImageDefault;
      items[2] = metroImportDefault(tmp6, obj4);
      tmp7 = metroImportAll(View, obj);
    }
    return tmp7;
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
  const tmp = closure_10();
  if (tmp2) {
    tmp2 = null != switchValue;
  }
  if (tmp2) {
    const obj = { tintColor: nativeDefault.unsafe_rawColors.BRAND_500, renderIosBackground: true, value: switchValue, disabled, onValueChange: onSwitchValueChange };
    const FormSwitch = _mod8169.FormSwitch;
    trailing = metroImportDefault(FormSwitch, obj);
  }
  const obj2 = { disabled, leading: metroImportDefault(ExpandedControlItemIcon, { iconSource, showIconSparkle }), label: metroImportDefault(_mod8169.FormLabel, obj3), onPress, trailing };
  const FormRow = _mod8169.FormRow;
  obj3 = { text: label, style: tmp.formColor };
  return metroImportDefault(FormRow, obj2);
}
const View = react_native.View;
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { formTintColor: obj2, formColor: obj3, sparkle: { position: "absolute", bottom: -4, right: "70%" }, sparkle2: { position: "absolute", right: -5, height: 10, width: 10 } };
obj2 = { tintColor: nativeDefault.colors.ICON_STRONG };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedExpandedControls.tsx");

export function StreamVolumeItem() {
  let effectiveVolume;
  let handleVolumeChange;
  let id;
  let intl;
  let intl2;
  let items1;
  let tmp2 = require;
  const items = [ApplicationStreamingStore, AuthenticationStore];
  const tmp = closure_10();
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
  const FormLabel = _mod8169.FormLabel;
  intl = intl3.intl;
  items1 = [tmp.formColor, { marginBottom: 16 }];
  const items2 = [metroImportDefault(FormLabel, obj2), ];
  let fn;
  const tmp5Result = VolumeSliderDefault;
  const tmp2Result = PlatformUtils;
  if (tmp2Result.isAndroid()) {
    fn = () => true;
  }
  const obj3 = { onResponderGrant: fn, value: effectiveVolume, onValueChange: handleVolumeChange, color: nativeDefault.unsafe_rawColors.WHITE, maxTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_300, accessibilityLabel: intl2.string(intl3.t.pEAl4b) };
  intl2 = intl3.intl;
  items2[1] = metroImportDefault(tmp5Result, obj3);
  ({ children: null }.children) = items2;
  let tmp9Result = null;
  if (null != stateFromStores) {
    const obj4 = { label: tmp11 };
    tmp9Result = tmp9(_mod8169.FormRow, obj4);
  }
  return tmp9Result;
}
export function AudioRouteButton(arg0) {
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
  return closure_7(ExpandedControlItem, obj2);
}
export function ScreenshareButton(arg0) {
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
  const tmp2 = metroImportDefault;
  const tmp3 = ExpandedControlItem;
  if (isFeatureEnabled) {
    disabled2 = disabled;
  }
  return tmp2(tmp3, { disabled: disabled2, onPress, iconSource, label });
}
export function DeafenButton(disabled) {
  let intl;
  let flag = disabled.disabled;
  const channel = disabled.channel;
  if (flag === undefined) {
    flag = false;
  }
  const tmp3 = useDeafStatesDefault(channel);
  const obj = VoiceActionUtils;
  const deafHandler = obj.createDeafHandler(tmp3);
  const obj2 = { disabled: flag, onPress: deafHandler.onPress, iconSource: importDefault(deafHandler.deaf ? 11965 : 11966), label: intl.string(intl3.t.wjcRFX) };
  intl = tmp4(1114).intl;
  return metroImportDefault(ExpandedControlItem, obj2);
}
