// Module ID: 10773
// Function ID: 83700
// Name: ExpandedControlItemIcon
// Dependencies: [31, 27, 4149, 1194, 4191, 33, 4130, 689, 1273, 10774, 10775, 7636, 566, 10776, 1212, 10745, 477, 8875, 8900, 10718, 10777, 10762, 10778, 10779, 2]
// Exports: AudioRouteButton, DeafenButton, ScreenshareButton, StreamVolumeItem

// Module 10773 (ExpandedControlItemIcon)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { MediaEngineContextTypes } from "DesktopSources";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_3;
let closure_4;
let closure_8;
let closure_9;
const require = arg1;
function ExpandedControlItemIcon(iconSource) {
  iconSource = iconSource.iconSource;
  const tmp = _createForOfIteratorHelperLoose();
  if (null == iconSource) {
    return null;
  } else {
    let obj = { size: require(1273) /* Button */.Icon.Sizes.MEDIUM, source: iconSource, style: tmp.formTintColor, disableColor: true };
    const tmp14 = callback(require(1273) /* Button */.Icon, obj);
    let tmp10 = tmp14;
    if (iconSource.showIconSparkle) {
      obj = {};
      const items = [tmp14, , ];
      obj = { style: tmp.sparkle2, source: importDefault(10774) };
      items[1] = callback(closure_4, obj);
      const obj1 = { style: tmp.sparkle, source: importDefault(10775) };
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
    let obj = { tintColor: importDefault(689).unsafe_rawColors.BRAND_500, renderIosBackground: true, value: switchValue, disabled, onValueChange: onSwitchValueChange };
    trailing = callback(require(7636) /* Form */.FormSwitch, obj);
  }
  obj = { disabled };
  obj = { iconSource: iconSource.iconSource, showIconSparkle };
  obj.leading = callback(ExpandedControlItemIcon, obj);
  const tmp = _createForOfIteratorHelperLoose();
  obj.label = callback(require(7636) /* Form */.FormLabel, { text: label, style: _createForOfIteratorHelperLoose().formColor });
  obj.onPress = onPress;
  obj.trailing = trailing;
  return callback(require(7636) /* Form */.FormRow, obj);
}
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG };
_createForOfIteratorHelperLoose.formTintColor = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.formColor = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.sparkle = { position: "absolute", bottom: -4, right: "70%" };
_createForOfIteratorHelperLoose.sparkle2 = { position: "absolute", right: -5, height: 10, width: 10 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_calls/native/components/FocusedExpandedControls.tsx");

export const StreamVolumeItem = function StreamVolumeItem() {
  let effectiveVolume;
  let handleVolumeChange;
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct, closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const lastActiveStream = outer1_5.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== outer1_6.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    return tmp2;
  });
  let ownerId;
  const tmp = _createForOfIteratorHelperLoose();
  if (null != stateFromStores) {
    ownerId = stateFromStores.ownerId;
  }
  const tmp3 = importDefault(10776);
  ({ effectiveVolume, handleVolumeChange } = importDefault(10776)(ownerId, MediaEngineContextTypes.STREAM));
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.pEAl4b);
  const items1 = [tmp.formColor, { marginBottom: 16 }];
  obj.style = items1;
  const items2 = [callback(require(7636) /* Form */.FormLabel, obj), ];
  obj = {};
  const tmp3Result = importDefault(10776)(ownerId, MediaEngineContextTypes.STREAM);
  const tmp6 = callback;
  const tmp7 = importDefault(10745);
  let fn;
  if (obj4.isAndroid()) {
    fn = () => true;
  }
  obj.onResponderGrant = fn;
  obj.value = effectiveVolume;
  obj.onValueChange = handleVolumeChange;
  obj.color = importDefault(689).unsafe_rawColors.WHITE;
  obj.maxTrackTintColor = importDefault(689).unsafe_rawColors.PRIMARY_300;
  items2[1] = tmp6(tmp7, obj);
  {}.children = items2;
  let tmp9 = null;
  if (null != stateFromStores) {
    const obj1 = { label: tmp8 };
    tmp9 = callback(require(7636) /* Form */.FormRow, obj1);
  }
  return tmp9;
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  let importDefault;
  let require;
  ({ channelId: require, isConnectedToVoiceChannel: importDefault } = arg0);
  let obj = require(8875) /* _handleToggleVideo */;
  obj = {
    onPress() {
      const result = outer1_0(outer1_2[18]).showAudioOutputSelector(closure_0, closure_1);
    },
    iconSource: obj.useMaskedSpeakerStates().routeSource
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["A/Ly/2"]);
  return callback(ExpandedControlItem, obj);
};
export const ScreenshareButton = function ScreenshareButton(arg0) {
  let channel;
  let disabled;
  let imgSource;
  let onPress;
  let text;
  ({ channel, disabled } = arg0);
  const tmp = importDefault(10718)(channel);
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
  let obj = require(10762) /* NOOP */;
  const deafHandler = obj.createDeafHandler(importDefault(10777)(disabled.channel));
  if (deafHandler.deaf) {
    let tmp5 = 10778;
  } else {
    tmp5 = 10779;
  }
  obj = { disabled: flag, onPress: deafHandler.onPress, iconSource: importDefault(tmp5) };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.wjcRFX);
  return callback(ExpandedControlItem, obj);
};
