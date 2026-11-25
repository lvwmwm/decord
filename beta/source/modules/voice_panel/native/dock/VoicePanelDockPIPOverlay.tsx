// Module ID: 19328
// Function ID: 19329
// Name: VoicePanelDockPIPOverlay
// Dependencies: [32, 19, 17, 4914, 1386, 5658, 21, 1653, 4913, 575, 5517, 7324, 11045, 5679, 5817, 19329, 7034, 14512, 1112, 11754, 5123, 1706, 11764, 10603, 504, 1186, 9036, 19211, 7152, 10958, 7035, 16363, 3376, 2]

// Module 19328 (VoicePanelDockPIPOverlay)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1653 from "module_1653" /* 1653 */;
import timing_timing from "timing/timing" /* 5123 */;
import ButtonConstants from "ButtonConstants" /* 5517 */;
import Constants from "Constants" /* 5658 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5817 */;
import NativeViewDefault from "NativeView" /* 7324 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 11045 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import UserStore from "UserStore" /* 1386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set, tmp3;

let c10;
let c9;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let tmp2;
let unpackModuleId;
const _mod1706 = tmp2(1706);
function VolumeIcon(Icon) {
  Icon = Icon.Icon;
  const obj = { style: closure_16().volumeIcon, pointerEvents: "none", children: React4(Icon, obj2) };
  obj2 = { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
  const tmp2 = NativeViewDefault;
  return React4(tmp2, obj);
}
function StreamVolumeSlider(stacked) {
  let Slider;
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj4;
  let tmp13Result;
  let tmp5Result;
  stacked = stacked.stacked;
  let handleVolumeChange;
  const ownerId = stacked.ownerId;
  const tmp = closure_16();
  const tmp4 = useMuteAwareLocalVolumeDefault;
  const tmp4Result = tmp4(ownerId, handleVolumeChange(5679).MediaEngineContextTypes.STREAM);
  handleVolumeChange = tmp4Result.handleVolumeChange;
  const items = [handleVolumeChange];
  const effectiveVolume = tmp4Result.effectiveVolume;
  let obj = { Icon: handleVolumeChange(19329).VoiceLowIcon };
  const callback = react.useCallback((arg0) => {
    const obj = PerceptualVolumeUtils;
    return handleVolumeChange(obj.perceptualToAmplitude(arg0));
  }, items);
  const tmp9 = closure_9(VolumeIcon, obj);
  obj2 = { Icon: handleVolumeChange(7034).VoiceNormalIcon };
  const tmp10 = closure_9(VolumeIcon, obj2);
  const obj3 = { style: stacked ? tmp.stackedSlider : tmp.slider, children: closure_9(Slider, obj4) };
  obj4 = {
    value: tmp5Result.amplitudeToPerceptual(effectiveVolume),
    maxValue,
    onChange: callback,
    formatValue(arg0) {
      return "" + Math.round(arg0) + "%";
    },
    accessibilityLabel: intl.string(handleVolumeChange(1112).t.pEAl4b)
  };
  const tmp11 = NativeViewDefault;
  Slider = tmp5(14512).Slider;
  tmp5Result = handleVolumeChange(5817);
  intl = tmp5(1112).intl;
  const tmp8Result = closure_9(tmp11, obj3);
  if (stacked) {
    const obj5 = { children: items1 };
    items1 = [tmp8Result, ];
    const obj6 = { style: tmp.row, pointerEvents: "box-none", children: items2 };
    items2 = [tmp9, tmp10];
    items1[1] = closure_10(NativeViewDefault, obj6);
    tmp13Result = tmp13(closure_11, obj5);
  } else {
    const obj7 = { style: items3, pointerEvents: "box-none", children: items4 };
    items3 = [, ];
    ({ row: arr2[0], bottomRow: arr2[1] } = tmp);
    items4 = [tmp9, tmp8Result, tmp10];
    tmp13Result = tmp13(tmp2(7324), obj7);
  }
  return tmp13Result;
}
let _slicedToArray = _slicedToArray_mod;
const StyleSheet = react_native.StyleSheet;
const maxValue = Constants.MAX_EMBEDDED_VOLUME_PERCEPTUAL;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
const VoicePanelDockPIPOverlayModes = { HIDDEN: "HIDDEN", CONTROLS: "CONTROLS", VOLUME: "VOLUME" };
let obj2 = { duration: 100 };
const FadeIn = _mod1653.FadeIn;
let closure_14 = FadeIn.duration(obj2.duration);
const FadeOut = _mod1653.FadeOut;
let closure_15 = FadeOut.duration(obj2.duration);
let createStyles = createStyles_mod;
let obj3 = { modeContent: obj4, row: obj5, bottomRow: obj6, rowEnd: { justifyContent: "flex-end" }, volumeContent: obj7, volumeIcon: size, slider: { flex: 1, flexDirection: "row", alignItems: "center" }, stackedSlider: obj8 };
obj4 = { justifyContent: "space-between", padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_20 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj6 = { height: ButtonConstants.SMALL_BUTTON_HEIGHT };
obj7 = { justifyContent: "flex-end", backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
size = { width: ButtonConstants.SMALL_BUTTON_HEIGHT, height: ButtonConstants.SMALL_BUTTON_HEIGHT, alignItems: "center", justifyContent: "center" };
obj8 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
let closure_16 = createStyles(obj3);
let closure_19 = { code: "(function VoicePanelDockPIPOverlayTsx1(finished){let[visible,scheduleOnRN,setContentMode]=this.__closure;if(finished===true&&!visible){scheduleOnRN(setContentMode,null);}})" };
let closure_20 = { code: "(function VoicePanelDockPIPOverlayTsx2(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let closure_21 = { code: "(function VoicePanelDockPIPOverlayTsx3(){let[pipState,STACKED_VOLUME_MAX_WIDTH]=this.__closure;return pipState.width*pipState.scale.get()<STACKED_VOLUME_MAX_WIDTH;})" };
const memoResult = react.memo(function VoicePanelDockPIPOverlay(ownerId) {
  let LayoutAnimationConfig;
  let c3;
  let closure_2;
  let intl2;
  let intl3;
  let items10;
  let items13;
  let items8;
  let kind;
  let mode;
  let obj15;
  let onInteractionEnd;
  let onInteractionStart;
  let onOpenCall;
  let onStopWatching;
  let onToggleVolume;
  let str;
  let stringResult;
  let tmp12Result8;
  let tmp15;
  let tmp16;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp32;
  let tmp33;
  let tmp44Result;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  ownerId = ownerId.ownerId;
  ({ mode, onInteractionEnd } = ownerId);
  let guildId;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let sharedValue;
  ({ kind, onToggleVolume, onInteractionStart, onStopWatching, onOpenCall } = ownerId);
  let tmp = closure_16();
  let obj = sharedValue;
  let tmp2 = guildId;
  guildId = sharedValue.useContext(guildId(11754)).guildId;
  const tmp5 = mode !== obj.HIDDEN;
  dependencyMap = tmp5;
  let tmp6 = null;
  let tmp4 = obj;
  const useState = sharedValue.useState;
  if (tmp5) {
    tmp6 = mode;
  }
  const tmp7 = _slicedToArray(useState(tmp6), 2);
  [tmp8, tmp9] = tmp7;
  _slicedToArray = tmp9;
  const tmp10 = tmp5 && tmp8 !== mode;
  if (tmp10) {
    tmp9(mode);
  }
  obj2 = ownerId(1653);
  sharedValue = obj2.useSharedValue(0);
  let items = [sharedValue, tmp5];
  const effect = obj.useEffect(() => {
    let tmp10;
    let tmp7;
    let tmp8;
    let tmp9;
    let tmp = sharedValue;
    set = sharedValue.set;
    let num = 0;
    const withTiming = timing_timing.withTiming;
    if (closure_2) {
      num = 1;
    }
    const items = [closure_19, tmp5, _mod1706.scheduleOnRN, c3];
    let c0;
    let c1;
    let c2;
    [tmp7, tmp8, tmp9, tmp10] = items;
    const tmp6 = obj2;
    class VoicePanelDockPIPOverlayTsx1 {
      constructor(arg0) {
        tmp = true !== arg0 || closure_0;
        if (!tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          tmp4 = null;
          tmp5 = closure_1(closure_2, null);
        }
        return;
      }
    }
    const items1 = [tmp8, tmp9, tmp10];
    VoicePanelDockPIPOverlayTsx1.__closure = items1;
    VoicePanelDockPIPOverlayTsx1.__workletHash = 7266112995158;
    VoicePanelDockPIPOverlayTsx1.__initData = tmp7;
    const result = set(withTiming(num, tmp6, "respect-motion-settings", VoicePanelDockPIPOverlayTsx1));
  }, items);
  let items1 = [closure_20, sharedValue];
  let c0;
  [tmp15, tmp16] = items1;
  const obj3 = ownerId(1653);
  class VoicePanelDockPIPOverlayTsx2 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp16];
  VoicePanelDockPIPOverlayTsx2.__closure = items2;
  VoicePanelDockPIPOverlayTsx2.__workletHash = 227068674039;
  VoicePanelDockPIPOverlayTsx2.__initData = tmp15;
  const animatedStyle = obj3.useAnimatedStyle(VoicePanelDockPIPOverlayTsx2);
  const tmp12Result = ownerId(11764);
  const pIPState = tmp12Result.usePIPState();
  const items3 = [closure_21, pIPState, 240];
  c0 = undefined;
  let c1;
  [tmp20, tmp21, tmp22] = items3;
  const tmp2Result = tmp2(10603);
  const tmp12Result5 = ownerId(1653);
  class VoicePanelDockPIPOverlayTsx3 {
    constructor() {
      let scale;
      let width;
      ({ scale, width } = c0);
      return width * scale.get() < c1;
    }
  }
  const items4 = [tmp21, tmp22];
  VoicePanelDockPIPOverlayTsx3.__closure = items4;
  VoicePanelDockPIPOverlayTsx3.__workletHash = 12449539641705;
  VoicePanelDockPIPOverlayTsx3.__initData = tmp20;
  const items5 = [AccessibilityStore];
  const tmp2ResultResult = tmp2Result(tmp12Result5.useDerivedValue(VoicePanelDockPIPOverlayTsx3));
  const tmp12Result6 = ownerId(504);
  const stateFromStores = tmp12Result6.useStateFromStores(items5, () => useReducedMotion.useReducedMotion);
  const items6 = [UserStore];
  const items7 = [ownerId, guildId];
  const tmp12Result7 = ownerId(504);
  const stateFromStores1 = tmp12Result7.useStateFromStores(items6, () => {
    const user = UserStore.getUser(ownerId);
    let avatarURL;
    if (user != null) {
      avatarURL = user.getAvatarURL(guildId, 80, false);
    }
    return avatarURL;
  }, items7);
  let tmp29Result6 = null;
  if (null != tmp8) {
    const obj4 = { style: items8, onTouchStart: onInteractionStart, onTouchEnd: onInteractionEnd, onTouchCancel: onInteractionEnd, pointerEvents: str, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_9(LayoutAnimationConfig, obj15) };
    items8 = [StyleSheet.absoluteFill, animatedStyle];
    str = "none";
    const View = tmp2(1653).View;
    if (tmp5) {
      str = "box-none";
    }
    LayoutAnimationConfig = tmp12(1653).LayoutAnimationConfig;
    const items9 = [tmp.modeContent, ];
    let volumeContent = null;
    const View2 = tmp2(1653).View;
    if (null != tmp25) {
      volumeContent = tmp.volumeContent;
    }
    const obj5 = { style: items9, entering: tmp32, exiting: tmp33, pointerEvents: "box-none", children: tmp44Result };
    items9[1] = volumeContent;
    tmp32 = undefined;
    if (!stateFromStores) {
      tmp32 = closure_14;
    }
    tmp33 = undefined;
    if (!stateFromStores) {
      tmp33 = closure_15;
    }
    if (null != tmp25) {
      const obj6 = { ownerId: tmp25, stacked: tmp2ResultResult };
      tmp44Result = tmp29(StreamVolumeSlider, obj6);
    } else {
      let tmp29Result4 = null;
      const obj7 = { style: tmp.row, pointerEvents: "box-none", children: items10 };
      const tmp2Result7 = tmp2(7324);
      const tmp2Result8 = tmp2(7324);
      const tmp45 = closure_11;
      if (null != stateFromStores1) {
        const obj8 = { source: tmp12Result8.getCachedSourceFromURI(stateFromStores1), size: ownerId(1186).AvatarSizes.SMALL };
        const Avatar = tmp12(1186).Avatar;
        tmp12Result8 = ownerId(9036);
        tmp29Result4 = tmp29(Avatar, obj8);
      }
      const obj9 = { pointerEvents: "none", children: tmp29Result4 };
      items10 = [closure_9(tmp2Result8, obj9), ];
      const obj10 = { icon: tmp2("video" === kind ? 7152 : 10958), onPress: onStopWatching, accessibilityLabel: stringResult };
      const tmp2Result9 = tmp2(19211);
      const intl = tmp12(1112).intl;
      const string = intl.string;
      const t = tmp12(1112).t;
      if ("video" === kind) {
        stringResult = string(t.cpT0Cq);
      } else {
        stringResult = string(t.q3O3J8);
      }
      items10[1] = closure_9(tmp2Result9, obj10);
      const items11 = [closure_10(tmp2Result7, obj7), ];
      const items12 = [, , ];
      ({ row: arr13[0], bottomRow: arr13[1] } = tmp);
      let rowEnd = null;
      const tmp2Result10 = tmp2(7324);
      if ("video" === kind) {
        rowEnd = tmp.rowEnd;
      }
      const obj11 = { style: items12, pointerEvents: "box-none", children: items13 };
      items12[2] = rowEnd;
      let tmp29Result5 = null;
      if ("video" !== kind) {
        const obj12 = { icon: tmp2(7035), onPress: onToggleVolume, accessibilityLabel: intl2.string(ownerId(1112).t.pEAl4b) };
        const tmp2Result11 = tmp2(19211);
        intl2 = tmp12(1112).intl;
        tmp29Result5 = tmp29(tmp2Result11, obj12);
      }
      items13 = [tmp29Result5, ];
      const obj13 = { children: items11 };
      const obj14 = { icon: tmp2(16363), onPress: onOpenCall, accessibilityLabel: intl3.string(tmp2(3376).MPtef8) };
      const tmp2Result12 = tmp2(19211);
      intl3 = tmp12(1112).intl;
      items13[1] = closure_9(tmp2Result12, obj14);
      items11[1] = closure_10(tmp2Result10, obj11);
      tmp44Result = tmp44(tmp45, obj13);
    }
    let str2 = "controls";
    if (null != tmp25) {
      str2 = "volume";
    }
    obj15 = { skipEntering: true, children: closure_9(View2, obj5, str2) };
    tmp29Result6 = tmp29(View, obj4);
  }
  return tmp29Result6;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIPOverlay.tsx");

export default memoResult;
export { VoicePanelDockPIPOverlayModes };
