// Module ID: 15450
// Function ID: 118829
// Dependencies: [57, 31, 27, 4467, 33, 4130, 689, 566, 3991, 1557, 4542, 666, 4554, 8379, 1212, 4076, 2]

// Module 15450
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { StyleSheet } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = {};
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj["top"] = undefined;
const merged1 = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_HIGH);
obj.sendContainer = obj;
_createForOfIteratorHelperLoose = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["color"] = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH;
obj.gradient = _createForOfIteratorHelperLoose;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_9 = { code: "function MediaKeyboardFloatingSendTsx1(){const{animatedIndex,INDEX_HEADER_CHANGE_THRESHOLD,hasUploads}=this.__closure;const isSheetOpen=animatedIndex.get()>INDEX_HEADER_CHANGE_THRESHOLD;return isSheetOpen&&hasUploads;}" };
let closure_10 = { code: "function MediaKeyboardFloatingSendTsx2(visible){const{isSendVisibleSharedValue}=this.__closure;isSendVisibleSharedValue.set(visible);}" };
let closure_11 = { code: "function MediaKeyboardFloatingSendTsx3(){const{insetFab,tokens,withSpring,sendVisibleSharedValue}=this.__closure;return{height:insetFab+tokens.space.PX_64+tokens.space.PX_32,opacity:withSpring(sendVisibleSharedValue.get()?1:0)};}" };
let closure_12 = { code: "function MediaKeyboardFloatingSendTsx4(){const{sendVisibleSharedValue}=this.__closure;return{pointerEvents:sendVisibleSharedValue.get()?'box-none':'none'};}" };
const memoResult = importAllResult.memo(importAllResult.forwardRef(function MediaKeyboardFloatingSendInner(arg0, arg1) {
  let animatedIndex;
  let channelId;
  let draftType;
  let onSend;
  let bottom;
  let callback;
  ({ animatedIndex, channelId, draftType, onSend } = arg0);
  const tmp = callback4();
  const require = tmp;
  const tmp3 = callback(importAllResult.useState(null), 2);
  bottom = tmp3[0];
  const importDefault = tmp3[1];
  if (null == bottom) {
    bottom = tmp2.bottom;
  }
  const tmp4 = (function useSendVisibleSharedValue(animatedIndex) {
    animatedIndex = animatedIndex.animatedIndex;
    const channelId = animatedIndex.channelId;
    const draftType = animatedIndex.draftType;
    const items = [outer1_5];
    const items1 = [channelId, draftType];
    const stateFromStores = tmp(bottom[7]).useStateFromStores(items, () => outer2_5.getUploadCount(channelId, draftType) > 0, items1);
    const obj = tmp(bottom[7]);
    const sharedValue = tmp(bottom[8]).useSharedValue(false);
    const obj2 = tmp(bottom[8]);
    const fn = function c() {
      return animatedIndex.get() > 0.7 && stateFromStores;
    };
    fn.__closure = { animatedIndex, INDEX_HEADER_CHANGE_THRESHOLD: 0.7, hasUploads: stateFromStores };
    fn.__workletHash = 12206635621152;
    fn.__initData = outer1_9;
    const fn2 = function l(arg0) {
      const result = sharedValue.set(arg0);
    };
    fn2.__closure = { isSendVisibleSharedValue: sharedValue };
    fn2.__workletHash = 10753585819648;
    fn2.__initData = outer1_10;
    const animatedReaction = tmp(bottom[8]).useAnimatedReaction(fn, fn2);
    return sharedValue;
  })({ animatedIndex, channelId, draftType });
  callback = tmp4;
  let obj = require(bottom[8]);
  let fn = function y() {
    const obj = {};
    const sum = bottom + callback(bottom[6]).space.PX_64;
    obj.height = sum + callback(bottom[6]).space.PX_32;
    let num = 0;
    if (_undefined.get()) {
      num = 1;
    }
    obj.opacity = tmp(bottom[10]).withSpring(num);
    return obj;
  };
  obj = { insetFab: bottom, tokens: importDefault(bottom[6]), withSpring: require(bottom[10]).withSpring, sendVisibleSharedValue: tmp4 };
  fn.__closure = obj;
  fn.__workletHash = 6402761213297;
  fn.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = require(bottom[8]);
  let fn2 = function f() {
    const obj = {};
    let str = "none";
    if (_undefined.get()) {
      str = "box-none";
    }
    obj.pointerEvents = str;
    return obj;
  };
  fn2.__closure = { sendVisibleSharedValue: tmp4 };
  fn2.__workletHash = 1097586248797;
  fn2.__initData = closure_12;
  let items = [tmp.gradient.color];
  const animatedProps = obj2.useAnimatedProps(fn2);
  const memo = importAllResult.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 } };
    const obj2 = callback(bottom[11])(tmp.gradient.color);
    const items = [callback(bottom[11])(tmp.gradient.color).alpha(0).hex(), ];
    const alphaResult = callback(bottom[11])(tmp.gradient.color).alpha(0);
    items[1] = callback(bottom[11])(tmp.gradient.color).hex();
    obj.colors = items;
    return obj;
  }, items);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({ setInsetFab: closure_1 }));
  obj = { style: items1, animatedProps };
  items1 = [animatedStyle, tmp.sendContainer];
  const obj1 = { style: tmp.gradient };
  tmp2 = importDefault(bottom[9])();
  const merged = Object.assign(memo);
  obj1["pointerEvents"] = "none";
  const items2 = [callback2(importDefault(bottom[12]), obj1), ];
  obj2 = {};
  const intl = require(bottom[14]).intl;
  obj2.accessibilityLabel = intl.string(require(bottom[14]).t.TXNS7S);
  obj2.icon = callback2(require(bottom[15]).SendMessageIcon, {});
  obj2.onPress = onSend;
  obj2.positionBottom = bottom;
  items2[1] = callback2(require(bottom[13]).FloatingActionButton, obj2);
  obj.children = items2;
  return callback3(importDefault(bottom[8]).View, obj);
}));
let result = require("get ActivityIndicator").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFloatingSend.tsx");

export default memoResult;
