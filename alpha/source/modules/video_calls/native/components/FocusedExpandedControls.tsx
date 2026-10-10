// Module ID: 11131
// Function ID: 11132
// Name: FocusedExpandedControls
// Dependencies: [19, 17, 5897, 502, 5117, 21, 5092, 587, 558, 576, 1200, 6156, 11132, 11133, 8579, 504, 11134, 1126, 1382, 11081, 8785, 8792, 11052, 11135, 11102, 11136, 11137, 2]

// Module 11131 (FocusedExpandedControls)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import Constants from "Constants" /* 5117 */;
import FastImageDefault from "FastImage" /* 6156 */;
import Form from "Form" /* 8579 */;
import CallsUtils from "CallsUtils" /* 8785 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 8792 */;
import useScreenshareUtilsDefault from "useScreenshareUtils" /* 11052 */;
import VolumeSliderDefault from "VolumeSlider" /* 11081 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11102 */;
import AssetRegistryDefault from "AssetRegistry" /* 11132 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11133 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 11134 */;
import useDeafStatesDefault from "useDeafStates" /* 11135 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5897 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let lastActiveStream;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { formTintColor: obj2, formColor: obj3, sparkle: { position: "absolute", bottom: -4, right: "70%" }, sparkle2: { position: "absolute", right: -5, height: 10, width: 10 } };
obj2 = { tintColor: nativeDefault.colors.ICON_STRONG };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExpandedControlItemIcon(iconSource) {
  let items;
  const obj = react2;
  const cResult = obj.c(11);
  iconSource = iconSource.iconSource;
  const showIconSparkle = iconSource.showIconSparkle;
  const tmp4 = closure_10();
  if (null == iconSource) {
    return null;
  } else {
    if (cResult[0] === iconSource) {
      let tmp5;
      if (cResult[1] === tmp4.formTintColor) {
        tmp5 = cResult[2];
      }
      let tmp8 = tmp5;
      if (showIconSparkle) {
        let tmp9;
        let tmp14;
        if (cResult[3] !== tmp4.sparkle2) {
          const obj2 = { style: tmp4.sparkle2, source: AssetRegistryDefault };
          const tmp12 = FastImageDefault;
          const tmp13 = metroImportDefault(tmp12, obj2);
          cResult[3] = tmp4.sparkle2;
          cResult[4] = tmp13;
          tmp9 = tmp13;
        } else {
          tmp9 = cResult[4];
        }
        if (cResult[5] !== tmp4.sparkle) {
          const obj3 = { style: tmp4.sparkle, source: AssetRegistryDefault2 };
          const tmp17 = FastImageDefault;
          const tmp18 = metroImportDefault(tmp17, obj3);
          cResult[5] = tmp4.sparkle;
          cResult[6] = tmp18;
          tmp14 = tmp18;
        } else {
          tmp14 = cResult[6];
        }
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp9) {
            let tmp19;
            if (cResult[9] === tmp14) {
              tmp19 = cResult[10];
            }
            tmp8 = tmp19;
          }
        }
        const obj4 = { children: items };
        items = [tmp5, tmp9, tmp14];
        const tmp22 = metroImportAll(View, obj4);
        cResult[7] = tmp5;
        cResult[8] = tmp9;
        cResult[9] = tmp14;
        cResult[10] = tmp22;
        tmp19 = tmp22;
      }
      return tmp8;
    }
    const obj5 = { size: native.Icon.Sizes.MEDIUM, source: iconSource, style: tmp4.formTintColor, disableColor: true };
    const Icon = tmp(1200).Icon;
    const tmp7 = metroImportDefault(Icon, obj5);
    cResult[0] = iconSource;
    cResult[1] = tmp4.formTintColor;
    cResult[2] = tmp7;
    tmp5 = tmp7;
  }
}) : (function ExpandedControlItemIcon(iconSource) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExpandedControlItem(arg0) {
  let disabled;
  let iconSource;
  let label;
  let onPress;
  let onSwitchValueChange;
  let showIconSparkle;
  let switchValue;
  let trailing;
  const obj = react2;
  const cResult = obj.c(16);
  ({ disabled, iconSource, showIconSparkle, label, onPress, onSwitchValueChange, switchValue, trailing } = arg0);
  const tmp5 = closure_10();
  const tmp6 = null == trailing && null != switchValue;
  if (tmp6) {
    if (cResult[0] === disabled) {
      if (cResult[1] === onSwitchValueChange) {
        let tmp7;
        if (cResult[2] === switchValue) {
          tmp7 = cResult[3];
        }
        trailing = tmp7;
      }
    }
    const obj2 = { tintColor: nativeDefault.unsafe_rawColors.BRAND_500, renderIosBackground: true, value: switchValue, disabled, onValueChange: onSwitchValueChange };
    const FormSwitch = tmp(8579).FormSwitch;
    const tmp10 = metroImportDefault(FormSwitch, obj2);
    cResult[0] = disabled;
    cResult[1] = onSwitchValueChange;
    cResult[2] = switchValue;
    cResult[3] = tmp10;
    tmp7 = tmp10;
  }
  if (cResult[4] === iconSource) {
    let tmp11;
    if (cResult[5] === (undefined !== showIconSparkle && showIconSparkle)) {
      tmp11 = cResult[6];
    }
    if (cResult[7] === label) {
      let tmp13;
      if (cResult[8] === tmp5.formColor) {
        tmp13 = cResult[9];
      }
      if (cResult[10] === disabled) {
        if (cResult[11] === onPress) {
          if (cResult[12] === tmp11) {
            if (cResult[13] === tmp13) {
              let tmp16;
              if (cResult[14] === trailing) {
                tmp16 = cResult[15];
              }
              return tmp16;
            }
          }
        }
      }
      const obj3 = { disabled, leading: tmp11, label: tmp13, onPress, trailing };
      const tmp18 = metroImportDefault(Form.FormRow, obj3);
      cResult[10] = disabled;
      cResult[11] = onPress;
      cResult[12] = tmp11;
      cResult[13] = tmp13;
      cResult[14] = trailing;
      cResult[15] = tmp18;
      tmp16 = tmp18;
    }
    const obj4 = { text: label, style: tmp5.formColor };
    const tmp15 = metroImportDefault(Form.FormLabel, obj4);
    cResult[7] = label;
    cResult[8] = tmp5.formColor;
    cResult[9] = tmp15;
    tmp13 = tmp15;
  }
  const tmp12 = metroImportDefault(closure_11, { iconSource, showIconSparkle: undefined !== showIconSparkle && showIconSparkle });
  cResult[4] = iconSource;
  cResult[5] = undefined !== showIconSparkle && showIconSparkle;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : (function ExpandedControlItem(iconSource) {
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
    const FormSwitch = Form.FormSwitch;
    trailing = metroImportDefault(FormSwitch, obj);
  }
  const obj2 = { disabled, leading: metroImportDefault(closure_11, { iconSource, showIconSparkle }), label: metroImportDefault(Form.FormLabel, obj3), onPress, trailing };
  const FormRow = Form.FormRow;
  obj3 = { text: label, style: tmp.formColor };
  return metroImportDefault(FormRow, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function StreamVolumeItem() {
  let effectiveVolume;
  let handleVolumeChange;
  let id;
  let items1;
  let items2;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp5;
  let tmp6;
  let tmp2 = dependencyMap;
  const obj = react2;
  const cResult = obj.c(17);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore, AuthenticationStore];
    const fn = function s() {
      lastActiveStream = lastActiveStream.getLastActiveStream();
      let tmp2 = null;
      if (null != lastActiveStream) {
        tmp2 = null;
        if (lastActiveStream.ownerId !== id.getId()) {
          tmp2 = lastActiveStream;
        }
      }
      return tmp2;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  let ownerId;
  const tmp11 = useMuteAwareLocalVolumeDefault;
  if (stateFromStores != null) {
    ownerId = stateFromStores.ownerId;
  }
  ({ effectiveVolume, handleVolumeChange } = tmp11(ownerId, MediaEngineContextTypes.STREAM));
  tmp11(ownerId, MediaEngineContextTypes.STREAM);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl3.t.pEAl4b);
    cResult[2] = stringResult;
    tmp14 = stringResult;
  } else {
    tmp14 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { marginBottom: 16 };
    cResult[3] = obj2;
    tmp16 = obj2;
  } else {
    tmp16 = cResult[3];
  }
  if (cResult[4] !== tmp4.formColor) {
    const obj3 = { text: tmp14, style: items1 };
    items1 = [tmp4.formColor, tmp16];
    const tmp19 = metroImportDefault(Form.FormLabel, obj3);
    cResult[4] = tmp4.formColor;
    cResult[5] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    let fn2;
    const tmpResult2 = PlatformUtils;
    if (tmpResult2.isAndroid()) {
      fn2 = () => true;
    }
    cResult[6] = fn2;
    tmp20 = fn2;
  } else {
    tmp20 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(intl3.t.pEAl4b);
    cResult[7] = stringResult1;
    tmp21 = stringResult1;
  } else {
    tmp21 = cResult[7];
  }
  if (cResult[8] === effectiveVolume) {
    let tmp23;
    if (cResult[9] === handleVolumeChange) {
      tmp23 = cResult[10];
    }
    if (cResult[11] === tmp17) {
      let tmp26;
      if (cResult[12] === tmp23) {
        tmp26 = cResult[13];
      }
      if (cResult[14] === stateFromStores) {
        let tmp30;
        if (cResult[15] === tmp26) {
          tmp30 = cResult[16];
        }
        return tmp30;
      }
      let tmp31 = null;
      if (null != stateFromStores) {
        const obj4 = { label: tmp26 };
        tmp31 = metroImportDefault(tmp(8579).FormRow, obj4);
      }
      cResult[14] = stateFromStores;
      cResult[15] = tmp26;
      cResult[16] = tmp31;
      tmp30 = tmp31;
    }
    const obj5 = { children: items2 };
    items2 = [tmp17, tmp23];
    const tmp29 = metroImportAll(React4, obj5);
    cResult[11] = tmp17;
    cResult[12] = tmp23;
    cResult[13] = tmp29;
    tmp26 = tmp29;
  }
  const obj6 = { onResponderGrant: tmp20, value: effectiveVolume, onValueChange: handleVolumeChange, color: nativeDefault.unsafe_rawColors.WHITE, maxTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_300, accessibilityLabel: tmp21 };
  const tmp10Result = VolumeSliderDefault;
  const tmp25 = metroImportDefault(tmp10Result, obj6);
  cResult[8] = effectiveVolume;
  cResult[9] = handleVolumeChange;
  cResult[10] = tmp25;
  tmp23 = tmp25;
}) : (function StreamVolumeItem() {
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
  const FormLabel = Form.FormLabel;
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
    tmp9Result = tmp9(Form.FormRow, obj4);
  }
  return tmp9Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function AudioRouteButton(channelId) {
  let obj = channelId(576);
  const cResult = obj.c(7);
  channelId = channelId.channelId;
  const isConnectedToVoiceChannel = channelId.isConnectedToVoiceChannel;
  const obj2 = channelId(8785);
  const routeSource = obj2.useMaskedSpeakerStates().routeSource;
  if (cResult[0] === channelId) {
    let tmp4;
    let tmp6;
    if (cResult[1] === isConnectedToVoiceChannel) {
      tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(channelId(1126).t["A/Ly/2"]);
      cResult[3] = stringResult;
      tmp6 = stringResult;
    } else {
      tmp6 = cResult[3];
    }
    if (cResult[4] === routeSource) {
      let tmp8;
      if (cResult[5] === tmp4) {
        tmp8 = cResult[6];
      }
      return tmp8;
    }
    const obj3 = { onPress: tmp4, iconSource: routeSource, label: tmp6 };
    const tmp11 = closure_7(closure_12, obj3);
    cResult[4] = routeSource;
    cResult[5] = tmp4;
    cResult[6] = tmp11;
    tmp8 = tmp11;
  }
  const fn = function n() {
    const obj = showAudioOutputSelector;
    const result = obj.showAudioOutputSelector(channelId, isConnectedToVoiceChannel);
  };
  cResult[0] = channelId;
  cResult[1] = isConnectedToVoiceChannel;
  cResult[2] = fn;
  tmp4 = fn;
}) : (function AudioRouteButton(arg0) {
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
  return closure_7(closure_12, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScreenshareButton(arg0) {
  let channel;
  let disabled;
  let imgSource;
  let isFeatureEnabled;
  let onPress;
  let text;
  const obj = react2;
  const cResult = obj.c(5);
  ({ channel, disabled } = arg0);
  ({ onPress, imgSource, text, isFeatureEnabled } = useScreenshareUtilsDefault(channel));
  let tmp3 = !isFeatureEnabled;
  useScreenshareUtilsDefault(channel);
  if (isFeatureEnabled) {
    tmp3 = disabled;
  }
  if (cResult[0] === imgSource) {
    if (cResult[1] === onPress) {
      if (cResult[2] === tmp3) {
        let tmp4;
        if (cResult[3] === text) {
          tmp4 = cResult[4];
        }
        return tmp4;
      }
    }
  }
  const tmp5 = metroImportDefault(closure_12, { disabled: tmp3, onPress, iconSource: imgSource, label: text });
  cResult[0] = imgSource;
  cResult[1] = onPress;
  cResult[2] = tmp3;
  cResult[3] = text;
  cResult[4] = tmp5;
  tmp4 = tmp5;
}) : (function ScreenshareButton(arg0) {
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
  const tmp3 = closure_12;
  if (isFeatureEnabled) {
    disabled2 = disabled;
  }
  return tmp2(tmp3, { disabled: disabled2, onPress, iconSource, label });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function DeafenButton(disabled) {
  let tmp10;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(7);
  disabled = disabled.disabled;
  let tmp4 = undefined !== disabled;
  const channel = disabled.channel;
  if (tmp4) {
    tmp4 = disabled;
  }
  const tmp6 = useDeafStatesDefault(channel);
  const tmp5 = importDefault;
  if (cResult[0] !== tmp6) {
    const tmpResult = VoiceActionUtils;
    const deafHandler = tmpResult.createDeafHandler(tmp6);
    cResult[0] = tmp6;
    cResult[1] = deafHandler;
    tmp7 = deafHandler;
  } else {
    tmp7 = cResult[1];
  }
  const onPress = tmp7.onPress;
  const tmp5Result = tmp5(tmp7.deaf ? 11136 : 11137);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl3.t.wjcRFX);
    cResult[2] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === onPress) {
      let tmp12;
      if (cResult[5] === tmp5Result) {
        tmp12 = cResult[6];
      }
      return tmp12;
    }
  }
  const tmp13 = metroImportDefault(closure_12, { disabled: tmp4, onPress, iconSource: tmp5Result, label: tmp10 });
  cResult[3] = tmp4;
  cResult[4] = onPress;
  cResult[5] = tmp5Result;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : (function DeafenButton(disabled) {
  let intl;
  let flag = disabled.disabled;
  const channel = disabled.channel;
  if (flag === undefined) {
    flag = false;
  }
  const tmp3 = useDeafStatesDefault(channel);
  const obj = VoiceActionUtils;
  const deafHandler = obj.createDeafHandler(tmp3);
  const obj2 = { disabled: flag, onPress: deafHandler.onPress, iconSource: importDefault(deafHandler.deaf ? 11136 : 11137), label: intl.string(intl3.t.wjcRFX) };
  intl = tmp4(1126).intl;
  return metroImportDefault(closure_12, obj2);
});
let result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedExpandedControls.tsx");

export const StreamVolumeItem = tmp5;
export const AudioRouteButton = tmp6;
export const ScreenshareButton = tmp7;
export const DeafenButton = tmp8;
