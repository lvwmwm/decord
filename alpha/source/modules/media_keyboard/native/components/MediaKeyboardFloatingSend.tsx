// Module ID: 16911
// Function ID: 16912
// Name: MediaKeyboardFloatingSend
// Dependencies: [32, 19, 17, 7880, 21, 5090, 587, 558, 576, 504, 4810, 1630, 5374, 683, 5387, 1126, 5041, 8524, 2]

// Module 16911 (MediaKeyboardFloatingSend)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import spring from "spring" /* 5374 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7880 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
const StyleSheet = react_native.StyleSheet;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 0.7;
let createStyles = createStyles_mod;
let obj = { sendContainer: obj2, gradient: obj3 };
obj2 = { top: undefined };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj3 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
let closure_9 = createStyles(obj);
const __initData = { code: "function MediaKeyboardFloatingSendTsx1(){const{animatedIndex,INDEX_HEADER_CHANGE_THRESHOLD,hasUploads}=this.__closure;const isSheetOpen=animatedIndex.get()>INDEX_HEADER_CHANGE_THRESHOLD;return isSheetOpen&&hasUploads;}" };
const __initData2 = { code: "function MediaKeyboardFloatingSendTsx2(visible){const{isSendVisibleSharedValue}=this.__closure;isSendVisibleSharedValue.set(visible);}" };
const __initData3 = { code: "function MediaKeyboardFloatingSendTsx3(){const{animatedIndex,INDEX_HEADER_CHANGE_THRESHOLD,hasUploads}=this.__closure;const isSheetOpen=animatedIndex.get()>INDEX_HEADER_CHANGE_THRESHOLD;return isSheetOpen&&hasUploads;}" };
const __initData4 = { code: "function MediaKeyboardFloatingSendTsx4(visible){const{isSendVisibleSharedValue}=this.__closure;isSendVisibleSharedValue.set(visible);}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSendVisibleSharedValue(animatedIndex) {
  let draftType;
  let first;
  let tmp = animatedIndex;
  const obj = animatedIndex(draftType[8]);
  const cResult = obj.c(5);
  animatedIndex = animatedIndex.animatedIndex;
  const channelId = animatedIndex.channelId;
  draftType = animatedIndex.draftType;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UploadAttachmentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    let tmp6;
    let tmp7;
    if (cResult[2] === draftType) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(draftType[9]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    const tmpResult3 = tmp(draftType[10]);
    const sharedValue = tmpResult3.useSharedValue(false);
    const fn2 = function x() {
      const tmp = animatedIndex.get() > c8 && stateFromStores;
      return tmp;
    };
    const obj2 = { animatedIndex, INDEX_HEADER_CHANGE_THRESHOLD, hasUploads: stateFromStores };
    fn2.__closure = obj2;
    fn2.__workletHash = 12206635621152;
    fn2.__initData = __initData;
    const tmpResult4 = tmp(draftType[10]);
    class V {
      constructor(arg0) {
        const result = sharedValue.set(arg0);
      }
    }
    const obj3 = { isSendVisibleSharedValue: sharedValue };
    V.__closure = obj3;
    V.__workletHash = 10753585819648;
    V.__initData = __initData2;
    const animatedReaction = tmpResult4.useAnimatedReaction(fn2, V);
    return sharedValue;
  }
  const fn = function o() {
    return UploadAttachmentStore.getUploadCount(channelId, draftType) > 0;
  };
  tmp8[0] = channelId;
  tmp8[1] = draftType;
  cResult[1] = channelId;
  cResult[2] = draftType;
  cResult[3] = fn;
  cResult[4] = tmp8;
  tmp7 = tmp8;
  tmp6 = fn;
}) : (function useSendVisibleSharedValue(animatedIndex) {
  animatedIndex = animatedIndex.animatedIndex;
  const channelId = animatedIndex.channelId;
  const draftType = animatedIndex.draftType;
  const items = [UploadAttachmentStore];
  const items1 = [channelId, draftType];
  const obj = animatedIndex(draftType[9]);
  const stateFromStores = obj.useStateFromStores(items, () => UploadAttachmentStore.getUploadCount(channelId, draftType) > 0, items1);
  const obj2 = animatedIndex(draftType[10]);
  const sharedValue = obj2.useSharedValue(false);
  const fn = function c() {
    const tmp = animatedIndex.get() > c8 && stateFromStores;
    return tmp;
  };
  const obj4 = { animatedIndex, INDEX_HEADER_CHANGE_THRESHOLD, hasUploads: stateFromStores };
  fn.__closure = obj4;
  fn.__workletHash = 17017286047714;
  fn.__initData = __initData3;
  const fn2 = function l(arg0) {
    const result = sharedValue.set(arg0);
  };
  fn2.__closure = { isSendVisibleSharedValue: sharedValue };
  fn2.__workletHash = 130474191942;
  fn2.__initData = __initData4;
  const obj3 = animatedIndex(draftType[10]);
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  return sharedValue;
});
const __initData5 = { code: "function MediaKeyboardFloatingSendTsx5(){const{insetFab,tokens,withSpring,sendVisibleSharedValue}=this.__closure;return{height:insetFab+tokens.space.PX_64+tokens.space.PX_32,opacity:withSpring(sendVisibleSharedValue.get()?1:0)};}" };
const __initData6 = { code: "function MediaKeyboardFloatingSendTsx6(){const{sendVisibleSharedValue}=this.__closure;return{pointerEvents:sendVisibleSharedValue.get()?\"box-none\":\"none\"};}" };
const __initData7 = { code: "function MediaKeyboardFloatingSendTsx7(){const{insetFab,tokens,withSpring,sendVisibleSharedValue}=this.__closure;return{height:insetFab+tokens.space.PX_64+tokens.space.PX_32,opacity:withSpring(sendVisibleSharedValue.get()?1:0)};}" };
const __initData8 = { code: "function MediaKeyboardFloatingSendTsx8(){const{sendVisibleSharedValue}=this.__closure;return{pointerEvents:sendVisibleSharedValue.get()?'box-none':'none'};}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaKeyboardFloatingSendInner(ref) {
  let animatedIndex;
  let bottom;
  let channelId;
  let closure_2;
  let draftType;
  let items1;
  let onSend;
  let require;
  let obj = react2;
  const cResult = obj.c(30);
  ({ animatedIndex, channelId, draftType, onSend } = ref);
  ref = ref.ref;
  const tmp4 = closure_9();
  const tmp6 = bottom(1630)();
  [bottom, require] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const obj2 = react;
  if (bottom == null) {
    bottom = tmp6.bottom;
  }
  if (cResult[0] === animatedIndex) {
    if (cResult[1] === channelId) {
      let tmp8;
      let tmp18;
      let tmp17;
      let tmp19;
      let tmp21;
      if (cResult[2] === draftType) {
        tmp8 = cResult[3];
      }
      const tmp10 = closure_14(tmp8);
      dependencyMap = tmp10;
      const tmpResult = ReanimatedRexport;
      class T {
        constructor() {
          let num;
          let sum;
          let withSpring;
          const obj = { height: sum + nativeDefault.space.PX_32, opacity: withSpring(num) };
          sum = bottom + nativeDefault.space.PX_64;
          withSpring = spring.withSpring;
          num = 0;
          spring;
          if (closure_2.get()) {
            num = 1;
          }
          return obj;
        }
      }
      const useAnimatedStyle = tmpResult.useAnimatedStyle;
      T.__closure = { insetFab: bottom, tokens: bottom(587), withSpring: spring.withSpring, sendVisibleSharedValue: tmp10 };
      let num = 16399716270519;
      T.__workletHash = 16399716270519;
      T.__initData = __initData5;
      const obj3 = { insetFab: bottom, tokens: bottom(587), withSpring: spring.withSpring, sendVisibleSharedValue: tmp10 };
      const animatedStyle = useAnimatedStyle(T);
      const fn = function w() {
        let pointerEvents = "none";
        if (closure_2.get()) {
          pointerEvents = "box-none";
        }
        return { pointerEvents };
      };
      const obj4 = { sendVisibleSharedValue: tmp10 };
      fn.__closure = obj4;
      fn.__workletHash = 17338809179807;
      fn.__initData = __initData6;
      const tmpResult2 = ReanimatedRexport;
      const animatedProps = tmpResult2.useAnimatedProps(fn);
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const point = { x: 0, y: 0 };
        const point1 = { x: 0, y: 1 };
        cResult[4] = point;
        class T {
          constructor() {
            let num;
            let sum;
            let withSpring;
            const obj = { height: sum + nativeDefault.space.PX_32, opacity: withSpring(num) };
            sum = bottom + nativeDefault.space.PX_64;
            withSpring = spring.withSpring;
            num = 0;
            spring;
            if (closure_2.get()) {
              num = 1;
            }
            return obj;
          }
        }
        tmp18 = point1;
        tmp17 = point;
      } else {
        tmp17 = cResult[4];
        tmp18 = cResult[5];
      }
      if (cResult[6] !== tmp4.gradient.color) {
        const obj9 = bottom(683)(tmp4.gradient.color);
        const alphaResult = obj9.alpha(0);
        const hexResult = alphaResult.hex();
        class T {
          constructor() {
            let num;
            let sum;
            let withSpring;
            const obj = { height: sum + nativeDefault.space.PX_32, opacity: withSpring(num) };
            sum = bottom + nativeDefault.space.PX_64;
            withSpring = spring.withSpring;
            num = 0;
            spring;
            if (closure_2.get()) {
              num = 1;
            }
            return obj;
          }
        }
        cResult[7] = hexResult;
        tmp19 = hexResult;
      } else {
        tmp19 = cResult[7];
      }
      if (cResult[8] !== tmp4.gradient.color) {
        cResult[8] = tmp4.gradient.color;
        const obj11 = bottom(683)(tmp4.gradient.color);
        const hexResult1 = obj11.hex();
        class T {
          constructor() {
            let num;
            let sum;
            let withSpring;
            const obj = { height: sum + nativeDefault.space.PX_32, opacity: withSpring(num) };
            sum = bottom + nativeDefault.space.PX_64;
            withSpring = spring.withSpring;
            num = 0;
            spring;
            if (closure_2.get()) {
              num = 1;
            }
            return obj;
          }
        }
        tmp21 = hexResult1;
      } else {
        tmp21 = cResult[9];
      }
      if (cResult[10] === tmp19) {
        let tmp24;
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class K {
            constructor() {
              return { setInsetFab: require };
            }
          }
          cResult[13] = K;
          tmp24 = K;
        } else {
          class K {
            constructor() {
              return { setInsetFab: require };
            }
          }
        }
        const imperativeHandle = obj2.useImperativeHandle(ref, tmp24);
        class T {
          constructor() {
            let num;
            let sum;
            let withSpring;
            const obj = { height: sum + nativeDefault.space.PX_32, opacity: withSpring(num) };
            sum = bottom + nativeDefault.space.PX_64;
            withSpring = spring.withSpring;
            num = 0;
            spring;
            if (closure_2.get()) {
              num = 1;
            }
            return obj;
          }
        }
        const items = [animatedStyle, tmp4.sendContainer];
        cResult[14] = animatedStyle;
        cResult[15] = tmp4.sendContainer;
        cResult[16] = items;
      }
      const obj5 = { start: tmp17, end: tmp18, colors: items1 };
      items1 = [tmp19, tmp21];
      cResult[10] = tmp19;
      cResult[11] = tmp21;
      cResult[12] = obj5;
    }
  }
  const obj6 = { animatedIndex, channelId, draftType };
  cResult[0] = animatedIndex;
  cResult[1] = channelId;
  cResult[2] = draftType;
  cResult[3] = obj6;
  tmp8 = obj6;
}) : (function MediaKeyboardFloatingSendInner(arg0) {
  let animatedIndex;
  let bottom;
  let c1;
  let channelId;
  let closure_0;
  let closure_3;
  let draftType;
  let intl;
  let items1;
  let items2;
  let onSend;
  let ref;
  importDefault = undefined;
  bottom = undefined;
  _slicedToArray = undefined;
  ({ animatedIndex, channelId, draftType, onSend, ref } = arg0);
  const tmp = closure_9();
  const _require = tmp;
  const tmp2 = importDefault;
  let obj = react;
  const tmp4 = require("useSafeAreaInsets")();
  [bottom, c1] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (bottom == null) {
    bottom = tmp4.bottom;
  }
  const tmp6 = closure_14({ animatedIndex, channelId, draftType });
  _slicedToArray = tmp6;
  let obj2 = require("ReanimatedRexport");
  const fn = function b() {
    let num;
    let sum;
    let withSpring;
    const obj = { height: sum + nativeDefault.space.PX_32, opacity: withSpring(num) };
    sum = bottom + nativeDefault.space.PX_64;
    withSpring = spring.withSpring;
    num = 0;
    spring;
    if (closure_3.get()) {
      num = 1;
    }
    return obj;
  };
  fn.__closure = { insetFab: bottom, tokens: tmp2(bottom[6]), withSpring: require("spring").withSpring, sendVisibleSharedValue: tmp6 };
  fn.__workletHash = 14820101088757;
  fn.__initData = __initData7;
  ({ insetFab: bottom, tokens: tmp2(bottom[6]), withSpring: require("spring").withSpring, sendVisibleSharedValue: tmp6 });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = require("ReanimatedRexport");
  const fn2 = function p() {
    let pointerEvents = "none";
    if (closure_3.get()) {
      pointerEvents = "box-none";
    }
    return { pointerEvents };
  };
  fn2.__closure = { sendVisibleSharedValue: tmp6 };
  fn2.__workletHash = 7153934955217;
  fn2.__initData = __initData8;
  let items = [tmp.gradient.color];
  const animatedProps = obj4.useAnimatedProps(fn2);
  const memo = obj.useMemo(() => {
    let items;
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items };
    items = [, ];
    const obj2 = _modDef683(closure_0.gradient.color);
    const alphaResult = obj2.alpha(0);
    items[0] = alphaResult.hex();
    const obj4 = _modDef683(closure_0.gradient.color);
    items[1] = obj4.hex();
    return obj;
  }, items);
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({ setInsetFab }));
  const obj5 = { style: items1, animatedProps, children: items2 };
  items1 = [animatedStyle, tmp.sendContainer];
  const View = tmp2(tmp3[10]).View;
  const obj6 = { style: tmp.gradient, pointerEvents: "none" };
  const tmp2Result = tmp2(bottom[14]);
  const merged = Object.assign(memo);
  items2 = [closure_6(tmp2Result, obj6), ];
  const obj7 = { accessibilityLabel: intl.string(require("intl").t.TXNS7S), icon: closure_6(require("SendMessageIcon").SendMessageIcon, {}), onPress: onSend, positionBottom: bottom };
  const FloatingActionButton = require("FloatingActionButton").FloatingActionButton;
  intl = require("intl").intl;
  items2[1] = closure_6(FloatingActionButton, obj7);
  return closure_7(View, obj5);
}));
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFloatingSend.tsx");

export default memoResult;
