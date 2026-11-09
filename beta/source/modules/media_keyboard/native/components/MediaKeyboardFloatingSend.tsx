// Module ID: 12774
// Function ID: 12775
// Name: MediaKeyboardFloatingSend
// Dependencies: [32, 19, 17, 8277, 21, 5140, 575, 504, 1652, 1627, 5761, 5762, 671, 5715, 9079, 1113, 5853, 2]

// Module 12774 (MediaKeyboardFloatingSend)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import LinearGradientDefault from "LinearGradient" /* 5715 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8277 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const StyleSheet = react_native.StyleSheet;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { sendContainer: obj2, gradient: obj3 };
obj2 = { top: undefined };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj3 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
let closure_9 = { code: "(function MediaKeyboardFloatingSendTsx1(){let[animatedIndex,INDEX_HEADER_CHANGE_THRESHOLD,hasUploads]=this.__closure;const isSheetOpen=animatedIndex.get()>INDEX_HEADER_CHANGE_THRESHOLD;return isSheetOpen&&hasUploads;})" };
let closure_10 = { code: "(function MediaKeyboardFloatingSendTsx2(visible){let[isSendVisibleSharedValue]=this.__closure;isSendVisibleSharedValue.set(visible);})" };
let closure_11 = { code: "(function MediaKeyboardFloatingSendTsx3(){let[insetFab,tokens,withSpring,sendVisibleSharedValue,Reanimated3DefaultSpringConfig]=this.__closure;return{height:insetFab+tokens.space.PX_64+tokens.space.PX_32,opacity:withSpring(sendVisibleSharedValue.get()?1:0,Reanimated3DefaultSpringConfig)};})" };
let closure_12 = { code: "(function MediaKeyboardFloatingSendTsx4(){let[sendVisibleSharedValue]=this.__closure;return{pointerEvents:sendVisibleSharedValue.get()?'box-none':'none'};})" };
const memoResult = react.memo(function MediaKeyboardFloatingSendInner(arg0) {
  let animatedIndex;
  let bottom;
  let c1;
  let channelId;
  let closure_0;
  let draftType;
  let intl;
  let items11;
  let items12;
  let onSend;
  let ref;
  let setInsetFab;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp24;
  let tmp25;
  let tmp9;
  let uploadCount;
  ({ channelId, draftType } = arg0);
  importDefault = undefined;
  ({ animatedIndex, onSend, ref } = arg0);
  let tmp = closure_8();
  _require = tmp;
  let obj = react;
  const tmp4 = useSafeAreaInsetsDefault();
  [bottom, c1] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (bottom == null) {
    bottom = tmp4.bottom;
  }
  let obj2 = require("get initialized");
  let items = [UploadAttachmentStore];
  const items1 = [channelId, draftType];
  const stateFromStores = obj2.useStateFromStores(items, () => uploadCount.getUploadCount(channelId, draftType) > 0, items1);
  const obj3 = require("module_1652");
  const sharedValue = obj3.useSharedValue(false);
  let obj4 = require("module_1652");
  const items2 = [closure_9, animatedIndex, 0.7, stateFromStores];
  let c0;
  importDefault = undefined;
  let c2;
  [tmp9, tmp10, tmp11, tmp12] = items2;
  class MediaKeyboardFloatingSendTsx1 {
    constructor() {
      const tmp = _undefined.get() > c1 && c2;
      return tmp;
    }
  }
  const items3 = [tmp10, tmp11, tmp12];
  MediaKeyboardFloatingSendTsx1.__closure = items3;
  MediaKeyboardFloatingSendTsx1.__workletHash = 14002102514905;
  MediaKeyboardFloatingSendTsx1.__initData = tmp9;
  const items4 = [closure_10, sharedValue];
  c0 = undefined;
  [tmp13, tmp14] = items4;
  class MediaKeyboardFloatingSendTsx2 {
    constructor(arg0) {
      const result = _undefined.set(arg0);
    }
  }
  const items5 = [tmp14];
  MediaKeyboardFloatingSendTsx2.__closure = items5;
  MediaKeyboardFloatingSendTsx2.__workletHash = 6688752148537;
  MediaKeyboardFloatingSendTsx2.__initData = tmp13;
  const animatedReaction = obj4.useAnimatedReaction(MediaKeyboardFloatingSendTsx1, MediaKeyboardFloatingSendTsx2);
  const items6 = [closure_11, bottom, , , , ];
  const useAnimatedStyle = require("module_1652").useAnimatedStyle;
  require("module_1652");
  items6[2] = nativeDefault;
  items6[3] = require("spring/spring").withSpring;
  items6[4] = sharedValue;
  items6[5] = require("springPresets").Reanimated3DefaultSpringConfig;
  c0 = undefined;
  importDefault = undefined;
  c2 = undefined;
  let c3;
  let c4;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items6;
  class MediaKeyboardFloatingSendTsx3 {
    constructor() {
      let num;
      let tmp;
      const obj = { height: c0 + _undefined.space.PX_64 + _undefined.space.PX_32, opacity: tmp(num, c4) };
      num = 0;
      tmp = c2;
      if (_undefined2.get()) {
        num = 1;
      }
      return obj;
    }
  }
  const items7 = [tmp18, tmp19, tmp20, tmp21, tmp22];
  MediaKeyboardFloatingSendTsx3.__closure = items7;
  MediaKeyboardFloatingSendTsx3.__workletHash = 13845638317384;
  MediaKeyboardFloatingSendTsx3.__initData = tmp17;
  const animatedStyle = useAnimatedStyle(MediaKeyboardFloatingSendTsx3);
  const items8 = [closure_12, sharedValue];
  c0 = undefined;
  [tmp24, tmp25] = items8;
  const tmp6Result2 = require("module_1652");
  class MediaKeyboardFloatingSendTsx4 {
    constructor() {
      let pointerEvents = "none";
      if (_undefined.get()) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  const items9 = [tmp25];
  MediaKeyboardFloatingSendTsx4.__closure = items9;
  MediaKeyboardFloatingSendTsx4.__workletHash = 6914604421188;
  MediaKeyboardFloatingSendTsx4.__initData = tmp24;
  const items10 = [tmp.gradient.color];
  const animatedProps = tmp6Result2.useAnimatedProps(MediaKeyboardFloatingSendTsx4);
  const memo = obj.useMemo(() => {
    let items;
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items };
    items = [, ];
    const obj2 = _modDef671(closure_0.gradient.color);
    const alphaResult = obj2.alpha(0);
    items[0] = alphaResult.hex();
    const obj4 = _modDef671(closure_0.gradient.color);
    items[1] = obj4.hex();
    return obj;
  }, items10);
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({ setInsetFab }));
  const obj5 = { style: items11, animatedProps, children: items12 };
  items11 = [animatedStyle, tmp.sendContainer];
  const View = tmp2(1652).View;
  const obj6 = { style: tmp.gradient, pointerEvents: "none" };
  const tmp2Result = LinearGradientDefault;
  const merged = Object.assign(memo);
  items12 = [closure_6(tmp2Result, obj6), ];
  const obj7 = { accessibilityLabel: intl.string(require("intl").t.TXNS7S), icon: closure_6(require("SendMessageIcon").SendMessageIcon, {}), onPress: onSend, positionBottom: bottom };
  const FloatingActionButton = tmp6(9079).FloatingActionButton;
  intl = tmp6(1113).intl;
  items12[1] = closure_6(FloatingActionButton, obj7);
  return closure_7(View, obj5);
});
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFloatingSend.tsx");

export default memoResult;
