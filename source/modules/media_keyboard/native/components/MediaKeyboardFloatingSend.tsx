// Module ID: 15315
// Function ID: 116553
// Dependencies: []

// Module 15315
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const StyleSheet = arg1(dependencyMap[2]).StyleSheet;
let closure_5 = importDefault(dependencyMap[3]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["top"] = undefined;
const merged1 = Object.assign(importDefault(dependencyMap[6]).shadows.SHADOW_HIGH);
obj.sendContainer = obj;
obj1 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj1["color"] = importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH;
obj.gradient = obj1;
let closure_8 = obj1.createStyles(obj);
let closure_9 = { code: "function MediaKeyboardFloatingSendTsx1(){const{animatedIndex,INDEX_HEADER_CHANGE_THRESHOLD,hasUploads}=this.__closure;const isSheetOpen=animatedIndex.get()>INDEX_HEADER_CHANGE_THRESHOLD;return isSheetOpen&&hasUploads;}" };
let closure_10 = { code: "function MediaKeyboardFloatingSendTsx2(visible){const{isSendVisibleSharedValue}=this.__closure;isSendVisibleSharedValue.set(visible);}" };
let closure_11 = { code: "function MediaKeyboardFloatingSendTsx3(){const{insetFab,tokens,withSpring,sendVisibleSharedValue}=this.__closure;return{height:insetFab+tokens.space.PX_64+tokens.space.PX_32,opacity:withSpring(sendVisibleSharedValue.get()?1:0)};}" };
let closure_12 = { code: "function MediaKeyboardFloatingSendTsx4(){const{sendVisibleSharedValue}=this.__closure;return{pointerEvents:sendVisibleSharedValue.get()?'box-none':'none'};}" };
const tmp2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(importAllResult.forwardRef(function MediaKeyboardFloatingSendInner(arg0, arg1) {
  let animatedIndex;
  let channelId;
  let draftType;
  let onSend;
  let dependencyMap;
  let callback;
  ({ animatedIndex, channelId, draftType, onSend } = arg0);
  const tmp = callback4();
  arg1 = tmp;
  const tmp3 = callback(importAllResult.useState(null), 2);
  let bottom = tmp3[0];
  const importDefault = tmp3[1];
  if (null == bottom) {
    bottom = tmp2.bottom;
  }
  dependencyMap = bottom;
  const tmp4 = function useSendVisibleSharedValue(animatedIndex) {
    animatedIndex = animatedIndex.animatedIndex;
    const channelId = animatedIndex.channelId;
    let closure_1 = channelId;
    const draftType = animatedIndex.draftType;
    const bottom = draftType;
    const items = [closure_5];
    const items1 = [channelId, draftType];
    const stateFromStores = animatedIndex(bottom[7]).useStateFromStores(items, () => uploadCount.getUploadCount(channelId, draftType) > 0, items1);
    const obj = animatedIndex(bottom[7]);
    const sharedValue = animatedIndex(bottom[8]).useSharedValue(false);
    const obj2 = animatedIndex(bottom[8]);
    const fn = function c() {
      return animatedIndex.get() > 0.7 && stateFromStores;
    };
    fn.__closure = { animatedIndex, INDEX_HEADER_CHANGE_THRESHOLD: 0.7, hasUploads: stateFromStores };
    fn.__workletHash = 12206635621152;
    fn.__initData = closure_9;
    const fn2 = function l(arg0) {
      const result = sharedValue.set(arg0);
    };
    fn2.__closure = { isSendVisibleSharedValue: sharedValue };
    fn2.__workletHash = 10753585819648;
    fn2.__initData = closure_10;
    const animatedReaction = animatedIndex(bottom[8]).useAnimatedReaction(fn, fn2);
    return sharedValue;
  }({ animatedIndex, channelId, draftType });
  callback = tmp4;
  let obj = arg1(dependencyMap[8]);
  const fn = function y() {
    const obj = {};
    const sum = bottom + callback(bottom[6]).space.PX_64;
    obj.height = sum + callback(bottom[6]).space.PX_32;
    let num = 0;
    if (tmp4.get()) {
      num = 1;
    }
    obj.opacity = tmp(bottom[10]).withSpring(num);
    return obj;
  };
  obj = { insetFab: bottom, tokens: importDefault(dependencyMap[6]), withSpring: arg1(dependencyMap[10]).withSpring, sendVisibleSharedValue: tmp4 };
  fn.__closure = obj;
  fn.__workletHash = 6402761213297;
  fn.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = arg1(dependencyMap[8]);
  const fn2 = function f() {
    const obj = {};
    let str = "none";
    if (tmp4.get()) {
      str = "box-none";
    }
    obj.pointerEvents = str;
    return obj;
  };
  fn2.__closure = { sendVisibleSharedValue: tmp4 };
  fn2.__workletHash = 1097586248797;
  fn2.__initData = closure_12;
  const items = [tmp.gradient.color];
  const animatedProps = obj2.useAnimatedProps(fn2);
  const memo = importAllResult.useMemo(() => {
    const obj = { start: { "Null": false, "Null": true }, end: { "Null": 131072.00314656927, "Null": 0.000000000000000000000000000000000000000000000000000000011294471302334573 } };
    const obj2 = callback(bottom[11])(tmp.gradient.color);
    const items = [callback(bottom[11])(tmp.gradient.color).alpha(0).hex(), ];
    const alphaResult = callback(bottom[11])(tmp.gradient.color).alpha(0);
    items[1] = callback(bottom[11])(tmp.gradient.color).hex();
    obj.colors = items;
    return obj;
  }, items);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({ setInsetFab: closure_1 }));
  obj = { style: items1, animatedProps };
  const items1 = [animatedStyle, tmp.sendContainer];
  const obj1 = { style: tmp.gradient };
  const tmp2 = importDefault(dependencyMap[9])();
  const merged = Object.assign(memo);
  obj1["pointerEvents"] = "none";
  const items2 = [callback2(importDefault(dependencyMap[12]), obj1), ];
  obj2 = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj2.accessibilityLabel = intl.string(arg1(dependencyMap[14]).t.TXNS7S);
  obj2.icon = callback2(arg1(dependencyMap[15]).SendMessageIcon, {});
  obj2.onPress = onSend;
  obj2.positionBottom = bottom;
  items2[1] = callback2(arg1(dependencyMap[13]).FloatingActionButton, obj2);
  obj.children = items2;
  return callback3(importDefault(dependencyMap[8]).View, obj);
}));
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFloatingSend.tsx");

export default memoResult;
