// Module ID: 19730
// Function ID: 19731
// Name: VoicePanelDockPIPOverlay
// Dependencies: [32, 19, 17, 1385, 5929, 21, 5170, 575, 12200, 5950, 6087, 7056, 16198, 1113, 19559, 9398, 11394, 1652, 5402, 1705, 504, 1187, 9639, 7153, 19731, 8777, 3184, 17307, 2]

// Module 19730 (VoicePanelDockPIPOverlay)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import timing_timing from "timing/timing" /* 5402 */;
import Constants from "Constants" /* 5929 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 6087 */;
import NativeViewDefault from "NativeView" /* 7056 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 12200 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 19559 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let dependencyMap, set, tmp3;

let c9;
let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
let tmp2;
const _mod1705 = tmp2(1705);
function StreamVolumeSlider(arg0) {
  let Slider;
  let intl;
  let intl2;
  let items1;
  let obj3;
  let obj4;
  let onSubmit;
  let ownerId;
  let handleVolumeChange;
  ({ ownerId, onSubmit } = arg0);
  const tmp = closure_12();
  const tmp2 = useMuteAwareLocalVolumeDefault;
  const tmp2Result = tmp2(ownerId, handleVolumeChange(5950).MediaEngineContextTypes.STREAM);
  handleVolumeChange = tmp2Result.handleVolumeChange;
  const items = [handleVolumeChange];
  const effectiveVolume = tmp2Result.effectiveVolume;
  let obj = { children: items1 };
  const callback = react.useCallback((arg0) => {
    const obj = PerceptualVolumeUtils;
    return handleVolumeChange(obj.perceptualToAmplitude(arg0));
  }, items);
  const obj2 = { style: tmp.slider, children: closure_7(Slider, obj3) };
  obj3 = {
    value: obj4.amplitudeToPerceptual(effectiveVolume),
    maxValue,
    onChange: callback,
    formatValue(arg0) {
      return "" + Math.round(arg0) + "%";
    },
    accessibilityLabel: intl.string(handleVolumeChange(1113).t.pEAl4b)
  };
  const tmp5 = NativeViewDefault;
  Slider = handleVolumeChange(16198).Slider;
  obj4 = handleVolumeChange(6087);
  intl = handleVolumeChange(1113).intl;
  items1 = [closure_7(tmp5, obj2), ];
  const obj5 = { icon: closure_7(handleVolumeChange(9398).CheckmarkLargeBoldIcon, { size: "sm" }), onPress: onSubmit, accessibilityLabel: intl2.string(handleVolumeChange(1113).t["cY+Oob"]) };
  const tmp6 = VoicePanelIconButtonDefault;
  intl2 = handleVolumeChange(1113).intl;
  items1[1] = closure_7(tmp6, obj5);
  return closure_9(closure_8, obj);
}
let _slicedToArray = _slicedToArray_mod;
const StyleSheet = react_native.StyleSheet;
const maxValue = Constants.MAX_EMBEDDED_VOLUME_PERCEPTUAL;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
const VoicePanelDockPIPOverlayModes = { HIDDEN: "HIDDEN", CONTROLS: "CONTROLS", VOLUME: "VOLUME" };
let closure_11 = { duration: 150 };
let createStyles = createStyles_mod;
let obj2 = { overlay: obj3, row: obj4, rowEnd: { justifyContent: "flex-end" }, slider: { flex: 1, flexDirection: "row", alignItems: "center" } };
obj3 = { justifyContent: "space-between", padding: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
let closure_12 = createStyles(obj2);
let closure_14 = { code: "(function VoicePanelDockPIPOverlayTsx1(finished){let[visible,scheduleOnRN,setContentMode]=this.__closure;if(finished===true&&!visible){scheduleOnRN(setContentMode,null);}})" };
let closure_15 = { code: "(function VoicePanelDockPIPOverlayTsx2(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
const memoResult = react.memo(function VoicePanelDockPIPOverlay(ownerId) {
  let c3;
  let closure_2;
  let intl3;
  let items5;
  let items6;
  let kind;
  let mode;
  let onOpenCall;
  let onStopWatching;
  let onToggleVolume;
  let str;
  let str2;
  let string2Result;
  let stringResult;
  let tmp12Result2;
  let tmp15;
  let tmp16;
  let tmp8;
  let tmp9;
  ownerId = ownerId.ownerId;
  ({ mode, onToggleVolume } = ownerId);
  let guildId;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let sharedValue;
  ({ kind, onStopWatching, onOpenCall } = ownerId);
  let tmp = closure_12();
  let obj = sharedValue;
  let tmp2 = guildId;
  guildId = sharedValue.useContext(guildId(11394)).guildId;
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
  const obj2 = ownerId(1652);
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
    const items = [closure_14, tmp5, _mod1705.scheduleOnRN, c3];
    let c0;
    let c1;
    let c2;
    [tmp7, tmp8, tmp9, tmp10] = items;
    const tmp6 = closure_11;
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
  let items1 = [closure_15, sharedValue];
  let c0;
  [tmp15, tmp16] = items1;
  const obj3 = ownerId(1652);
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
  const items3 = [UserStore];
  const items4 = [ownerId, guildId];
  const tmp12Result = ownerId(504);
  const stateFromStores = tmp12Result.useStateFromStores(items3, () => {
    const user = UserStore.getUser(ownerId);
    let avatarURL;
    if (user != null) {
      avatarURL = user.getAvatarURL(guildId, 80, false);
    }
    return avatarURL;
  }, items4);
  if (null == tmp8) {
    return null;
  } else {
    let ScreenXIcon;
    const obj4 = { style: items5, pointerEvents: str, accessibilityElementsHidden: !tmp5, importantForAccessibility: str2, children: null };
    items5 = [tmp.overlay, animatedStyle];
    str = "none";
    const View = tmp2(1652).View;
    if (tmp5) {
      str = "box-none";
    }
    str2 = "no-hide-descendants";
    if (tmp5) {
      str2 = "auto";
    }
    let tmp22Result = null;
    const obj5 = { style: tmp.row, pointerEvents: "box-none", children: items6 };
    const tmp2Result = tmp2(7056);
    const tmp2Result6 = tmp2(7056);
    if (null != stateFromStores) {
      const obj6 = { source: tmp12Result2.getCachedSourceFromURI(stateFromStores), size: ownerId(1187).AvatarSizes.SMALL };
      const Avatar = tmp12(1187).Avatar;
      tmp12Result2 = ownerId(9639);
      tmp22Result = tmp22(Avatar, obj6);
    }
    const obj7 = { pointerEvents: "none", children: tmp22Result };
    items6 = [closure_7(tmp2Result6, obj7), ];
    const tmp2Result7 = tmp2(19559);
    if ("video" === kind) {
      ScreenXIcon = tmp12(7153).XSmallIcon;
    } else {
      ScreenXIcon = tmp12(19731).ScreenXIcon;
    }
    const obj8 = { icon: closure_7(ScreenXIcon, { size: "sm" }), onPress: onStopWatching, accessibilityLabel: stringResult };
    const intl = tmp12(1113).intl;
    const string = intl.string;
    const t = tmp12(1113).t;
    if ("video" === kind) {
      stringResult = string(t.cpT0Cq);
    } else {
      stringResult = string(t.q3O3J8);
    }
    items6[1] = closure_7(tmp2Result7, obj8);
    const items7 = [closure_9(tmp2Result, obj5), ];
    const items8 = [tmp.row, ];
    let rowEnd = null;
    const tmp2Result8 = tmp2(7056);
    if ("video" === kind) {
      rowEnd = tmp.rowEnd;
    }
    const obj9 = { style: items8, pointerEvents: "box-none", children: null };
    items8[1] = rowEnd;
    if ("video" !== kind) {
      const obj10 = { icon: closure_7(ownerId(8777).VoiceNormalIcon, { size: "sm" }), onPress: onToggleVolume, accessibilityLabel: string2Result };
      const tmp2Result9 = tmp2(19559);
      const intl2 = tmp12(1113).intl;
      const string2 = intl2.string;
      if ("video" !== kind && null != ownerId && tmp8 === tmp4.VOLUME) {
        string2Result = string2(tmp2(3184)["5fzIJz"]);
      } else {
        string2Result = string2(tmp12(1113).t.pEAl4b);
      }
      closure_7(tmp2Result9, obj10);
    }
    const items9 = [, ];
    class VoicePanelDockPIPOverlayTsx2 {
      constructor() {
        const obj = { opacity: _undefined.get() };
        return obj;
      }
    }
    if ("video" !== kind && null != ownerId && tmp8 === tmp4.VOLUME) {
      let tmp22Result4;
      if (null != ownerId) {
        const obj11 = { ownerId, onSubmit: onToggleVolume };
        tmp22Result4 = tmp22(StreamVolumeSlider, obj11);
      }
      items9[1] = tmp22Result4;
      obj9.children = items9;
      items7[1] = closure_9(tmp2Result8, obj9);
      obj4.children = items7;
      return closure_9(View, obj4);
    }
    const obj12 = { icon: closure_7(ownerId(17307).FullscreenEnterIcon, { size: "sm" }), onPress: onOpenCall, accessibilityLabel: intl3.string(tmp2(3184).MPtef8) };
    const tmp2Result10 = tmp2(19559);
    intl3 = tmp12(1113).intl;
    tmp22Result4 = tmp22(tmp2Result10, obj12);
  }
});
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIPOverlay.tsx");

export default memoResult;
export { VoicePanelDockPIPOverlayModes };
