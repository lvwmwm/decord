// Module ID: 12393
// Function ID: 12394
// Name: MediaKeyboardFloatingSend
// Dependencies: [32, 19, 17, 8200, 21, 5009, 575, 504, 5090, 1626, 5632, 671, 5582, 8990, 1114, 5724, 2]

// Module 12393 (MediaKeyboardFloatingSend)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import spring from "spring" /* 5632 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8200 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
const __initData = { code: "function MediaKeyboardFloatingSendTsx1(){const{animatedIndex,INDEX_HEADER_CHANGE_THRESHOLD,hasUploads}=this.__closure;const isSheetOpen=animatedIndex.get()>INDEX_HEADER_CHANGE_THRESHOLD;return isSheetOpen&&hasUploads;}" };
const __initData2 = { code: "function MediaKeyboardFloatingSendTsx2(visible){const{isSendVisibleSharedValue}=this.__closure;isSendVisibleSharedValue.set(visible);}" };
const __initData3 = { code: "function MediaKeyboardFloatingSendTsx3(){const{insetFab,tokens,withSpring,sendVisibleSharedValue}=this.__closure;return{height:insetFab+tokens.space.PX_64+tokens.space.PX_32,opacity:withSpring(sendVisibleSharedValue.get()?1:0)};}" };
const __initData4 = { code: "function MediaKeyboardFloatingSendTsx4(){const{sendVisibleSharedValue}=this.__closure;return{pointerEvents:sendVisibleSharedValue.get()?'box-none':'none'};}" };
const memoResult = react.memo(function MediaKeyboardFloatingSendInner(arg0) {
  let animatedIndex;
  let bottom;
  let c1;
  let channelId;
  let closure_0;
  let draftType;
  let intl;
  let items3;
  let items4;
  let onSend;
  let ref;
  let setInsetFab;
  let uploadCount;
  ({ animatedIndex, channelId, draftType } = arg0);
  importDefault = undefined;
  bottom = undefined;
  let sharedValue;
  ({ onSend, ref } = arg0);
  let tmp = closure_8();
  _require = tmp;
  const tmp2 = importDefault;
  let obj = react;
  const tmp4 = require("useSafeAreaInsets")();
  [bottom, c1] = sharedValue(react.useState(null), 2);
  sharedValue(react.useState(null), 2);
  if (bottom == null) {
    bottom = tmp4.bottom;
  }
  let obj2 = require("get initialized");
  let items = [UploadAttachmentStore];
  const items1 = [channelId, draftType];
  const stateFromStores = obj2.useStateFromStores(items, () => uploadCount.getUploadCount(channelId, draftType) > 0, items1);
  const obj3 = require("ReanimatedRexport");
  sharedValue = obj3.useSharedValue(false);
  let obj4 = require("ReanimatedRexport");
  const fn = function c() {
    const tmp = animatedIndex.get() > 0.7 && stateFromStores;
    return tmp;
  };
  fn.__closure = { animatedIndex, INDEX_HEADER_CHANGE_THRESHOLD: 0.7, hasUploads: stateFromStores };
  fn.__workletHash = 12206635621152;
  fn.__initData = __initData;
  const fn2 = function l(arg0) {
    const result = sharedValue.set(arg0);
  };
  fn2.__closure = { isSendVisibleSharedValue: sharedValue };
  fn2.__workletHash = 10753585819648;
  fn2.__initData = __initData2;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const fn3 = function y() {
    let num;
    let sum;
    let withSpring;
    const obj = { height: sum + nativeDefault.space.PX_32, opacity: withSpring(num) };
    sum = bottom + nativeDefault.space.PX_64;
    withSpring = spring.withSpring;
    num = 0;
    spring;
    if (sharedValue.get()) {
      num = 1;
    }
    return obj;
  };
  const obj5 = require("ReanimatedRexport");
  fn3.__closure = { insetFab: bottom, tokens: tmp2(bottom[6]), withSpring: require("spring").withSpring, sendVisibleSharedValue: sharedValue };
  fn3.__workletHash = 6402761213297;
  fn3.__initData = __initData3;
  ({ insetFab: bottom, tokens: tmp2(bottom[6]), withSpring: require("spring").withSpring, sendVisibleSharedValue: sharedValue });
  const animatedStyle = obj5.useAnimatedStyle(fn3);
  const obj7 = require("ReanimatedRexport");
  class E {
    constructor() {
      let pointerEvents = "none";
      if (sharedValue.get()) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  E.__closure = { sendVisibleSharedValue: sharedValue };
  E.__workletHash = 1097586248797;
  E.__initData = __initData4;
  const items2 = [tmp.gradient.color];
  const animatedProps = obj7.useAnimatedProps(E);
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
  }, items2);
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({ setInsetFab }));
  const obj8 = { style: items3, animatedProps, children: items4 };
  items3 = [animatedStyle, tmp.sendContainer];
  const View = tmp2(tmp3[8]).View;
  const obj9 = { style: tmp.gradient, pointerEvents: "none" };
  const tmp2Result = tmp2(bottom[12]);
  const merged = Object.assign(memo);
  items4 = [closure_6(tmp2Result, obj9), ];
  const obj10 = { accessibilityLabel: intl.string(require("intl").t.TXNS7S), icon: closure_6(require("SendMessageIcon").SendMessageIcon, {}), onPress: onSend, positionBottom: bottom };
  const FloatingActionButton = require("FloatingActionButton").FloatingActionButton;
  intl = require("intl").intl;
  items4[1] = closure_6(FloatingActionButton, obj10);
  return closure_7(View, obj8);
});
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFloatingSend.tsx");

export default memoResult;
