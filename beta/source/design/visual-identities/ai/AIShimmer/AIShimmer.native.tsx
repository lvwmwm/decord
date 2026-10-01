// Module ID: 13939
// Function ID: 13940
// Name: AIShimmer
// Dependencies: [32, 19, 17, 21, 4836, 13940, 4540, 4832, 13941, 4566, 13942, 13943, 13937, 2]

// Module 13939 (AIShimmer)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import AIShimmerTypes from "AIShimmerTypes" /* 13940 */;
import waveTransition2 from "waveTransition" /* 13941 */;
import createWaveTransition2 from "createWaveTransition" /* 13943 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function AIShimmerInner(arg0) {
  let _undefined;
  let c4;
  let color;
  let delay;
  let duration;
  let glyphColor;
  let initialDelay;
  let items2;
  let onComplete;
  let onPass;
  let onStart;
  let pass;
  let ref;
  let style;
  let text;
  let tmp13;
  let trailingWidth;
  let variant;
  ({ variant, color, glyphColor, trailingWidth } = arg0);
  let sharedValue;
  pass = undefined;
  _slicedToArray = undefined;
  react = undefined;
  ref = undefined;
  let bound;
  let closure_7;
  let obj = react;
  let tmp = sharedValue;
  ({ text, delay, initialDelay, duration, onComplete, onStart, style, ref } = arg0);
  const reducedMotion = react.useContext(sharedValue(pass[6]).AccessibilityPreferencesContext).reducedMotion;
  const fontScale = ref.getFontScale();
  const tmp4 = sharedValue(pass[7]).TextStyleSheet[variant];
  const lineHeight = tmp4.lineHeight;
  const result = tmp4.fontSize * fontScale;
  const result1 = result * sharedValue(pass[8]).GLYPH_FONT_SCALE;
  const tmp7 = closure_10(lineHeight * fontScale, result1);
  const obj2 = sharedValue(pass[9]);
  sharedValue = obj2.useSharedValue(0);
  const obj3 = sharedValue(pass[9]);
  const sharedValue1 = obj3.useSharedValue(1);
  [pass, _slicedToArray] = react.useState(null);
  [tmp13, c4] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  ref = react.useRef(null);
  let num = trailingWidth;
  if (trailingWidth == null) {
    num = 0;
  }
  const sum = tmp13 + num;
  bound = Math.max(1, Math.ceil(sum / result1));
  closure_7 = obj.useRef(bound);
  const obj4 = {
    text,
    delay,
    initialDelay,
    duration,
    reducedMotion: reducedMotion.enabled,
    trailingWidth,
    onComplete,
    onStart,
    ref,
    createController(arg0) {
      const obj = {
        animationProgress: sharedValue,
        crossFadeOpacity: sharedValue1,
        glyphCount() {
          return ref.current;
        },
        onPass
      };
      const createWaveTransition = createWaveTransition2.createWaveTransition;
      createWaveTransition2;
      const merged = Object.assign(arg0);
      const waveTransition = createWaveTransition(obj);
      ref.current = waveTransition;
      return waveTransition;
    }
  };
  const tmpResult = tmp(pass[10]);
  let current = tmpResult.useAIShimmerCycle(obj4).current;
  const items = [bound];
  const effect = obj.useEffect(() => {
    closure_7.current = bound;
    const current = ref.current;
    if (current != null) {
      current.refreshBand();
    }
  }, items);
  const items1 = [pass];
  const effect1 = obj.useEffect(() => {
    if (null != first) {
      const current = ref.current;
      if (current != null) {
        current.startQueuedPass(tmp.id);
      }
    }
  }, items1);
  let tmp19 = current;
  const callback = obj.useCallback((nativeEvent) => {
    const width = nativeEvent.nativeEvent.layout.width;
    let tmp = _undefined((arg0) => {
      let tmp = width;
      if (Math.abs(arg0 - width) < 0.5) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  if (null != pass) {
    tmp19 = pass.slotA.length >= pass.slotB.length ? pass.slotA : pass.slotB;
  }
  const obj5 = { style: items2, onLayout: callback, accessible: true, accessibilityRole: "text", accessibilityLabel: current, children: null };
  items2 = [tmp7.container, style];
  const items3 = [, ];
  const obj6 = { variant, color, lineClamp: 1, ellipsizeMode: "clip", style: tmp7.sizer, children: tmp19 };
  items3[0] = closure_7(tmp(pass[7]).Text, obj6);
  const tmp20 = closure_8;
  const tmp21 = bound;
  if (null != pass) {
    let tmp22Result;
    if (sum > 0) {
      const obj7 = { pass, animationProgress: sharedValue, crossFadeOpacity: sharedValue1, glyphCount: bound, glyphFontSize: result1, variant, color, glyphColor, styles: tmp7, animationWidth: sum, clippingWindowWidth: 2 * sum, overshoot: 0.5 * result1 };
      const tmp24 = ShimmerLayers;
      if (glyphColor == null) {
        glyphColor = color;
      }
      tmp22Result = tmp22(tmp24, obj7);
    }
    items3[1] = tmp22Result;
    obj5.children = items3;
    return tmp20(tmp21, obj5);
  }
  const obj8 = { variant, color, lineClamp: 1, ellipsizeMode: "clip", style: tmp7.layer, children: current };
  tmp22Result = tmp22(tmp(tmp2[7]).Text, obj8);
}
function ShimmerLayers(pass) {
  let View3;
  let View4;
  let animationProgress;
  let animationWidth;
  let clippingWindowWidth;
  let color;
  let crossFadeOpacity;
  let glyphColor;
  let glyphCount;
  let glyphFontSize;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj15;
  let obj16;
  let obj17;
  let overshoot;
  let styles;
  let variant;
  pass = pass.pass;
  ({ animationProgress, glyphCount, glyphFontSize, variant, color, styles, animationWidth, clippingWindowWidth, overshoot } = pass);
  let obj = { animationWidth, clippingWindowWidth, overshoot };
  let obj2 = { animationProgress, slot: "A" };
  ({ crossFadeOpacity, glyphColor } = pass);
  const merged = Object.assign(obj);
  let obj3 = { animationProgress, slot: "B" };
  const tmp2 = useAnimatedSlotStyles(obj2);
  const merged1 = Object.assign(obj);
  const obj4 = { animationProgress, crossFadeOpacity };
  const tmp4 = useAnimatedSlotStyles(obj3);
  const merged2 = Object.assign(obj);
  const animationProgress2 = obj4.animationProgress;
  const crossFadeOpacity2 = obj4.crossFadeOpacity;
  const animationWidth2 = obj4.animationWidth;
  const clippingWindowWidth2 = obj4.clippingWindowWidth;
  const overshoot2 = obj4.overshoot;
  const fn = function b() {
    let glyphLayerOpacityAt;
    let obj3;
    const value = animationProgress2.get();
    const diff = value - Math.floor(value);
    const obj = pass(dependencyMap[8]);
    const bandEdgesAtResult = obj.bandEdgesAt(diff, animationWidth2, overshoot2);
    const obj2 = { bandStart: bandEdgesAtResult.bandStart, bandEnd: bandEdgesAtResult.bandEnd, opacity: glyphLayerOpacityAt(obj3.easeTail(diff)) };
    glyphLayerOpacityAt = pass(dependencyMap[8]).glyphLayerOpacityAt;
    pass(dependencyMap[8]);
    obj3 = pass(dependencyMap[8]);
    return obj2;
  };
  const obj5 = pass(4566);
  fn.__closure = { animationProgress: animationProgress2, bandEdgesAt: pass(13941).bandEdgesAt, animationWidth: animationWidth2, overshoot: overshoot2, glyphLayerOpacityAt: pass(13941).glyphLayerOpacityAt, easeTail: pass(13941).easeTail };
  fn.__workletHash = 5565898978148;
  fn.__initData = __initData9;
  ({ animationProgress: animationProgress2, bandEdgesAt: pass(13941).bandEdgesAt, animationWidth: animationWidth2, overshoot: overshoot2, glyphLayerOpacityAt: pass(13941).glyphLayerOpacityAt, easeTail: pass(13941).easeTail });
  const derivedValue = obj5.useDerivedValue(fn);
  const obj7 = pass(4566);
  class T {
    constructor() {
      const obj = { opacity: crossFadeOpacity2.get() };
      return obj;
    }
  }
  T.__closure = { crossFadeOpacity: crossFadeOpacity2 };
  T.__workletHash = 1960911197633;
  T.__initData = __initData10;
  const animatedStyle = obj7.useAnimatedStyle(T);
  const fn2 = function f() {
    let items;
    const value = derivedValue.get();
    const obj = { opacity: value.opacity, transform: items };
    items = [];
    const obj2 = { translateX: value.bandStart };
    items[0] = obj2;
    return obj;
  };
  fn2.__closure = { bandState: derivedValue };
  fn2.__workletHash = 1697100745255;
  fn2.__initData = __initData11;
  const obj8 = pass(4566);
  const animatedStyle1 = obj8.useAnimatedStyle(fn2);
  const fn3 = function y() {
    let items;
    const value = derivedValue.get();
    const obj = { transform: items };
    items = [];
    const obj2 = { translateX: value.bandEnd - value.bandStart - clippingWindowWidth2 };
    items[0] = obj2;
    return obj;
  };
  fn3.__closure = { bandState: derivedValue, clippingWindowWidth: clippingWindowWidth2 };
  fn3.__workletHash = 14480924886008;
  fn3.__initData = __initData12;
  const obj9 = pass(4566);
  const animatedStyle2 = obj9.useAnimatedStyle(fn3);
  const fn4 = function _() {
    let items;
    const obj = { transform: items };
    items = [{ translateX: clippingWindowWidth2 - derivedValue.get().bandEnd }];
    ({ translateX: clippingWindowWidth2 - derivedValue.get().bandEnd });
    return obj;
  };
  fn4.__closure = { bandState: derivedValue, clippingWindowWidth: clippingWindowWidth2 };
  fn4.__workletHash = 9956205645387;
  fn4.__initData = __initData13;
  let items = [pass.slotA];
  const obj10 = pass(4566);
  const animatedStyle3 = obj10.useAnimatedStyle(fn4);
  const items1 = [pass.slotB];
  const memo = react.useMemo(() => {
    const obj = waveTransition2;
    return obj.shiftedLineFor(pass.slotA);
  }, items);
  const memo1 = react.useMemo(() => {
    const obj = waveTransition2;
    return obj.shiftedLineFor(pass.slotB);
  }, items1);
  const obj11 = { style: items2, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items3 };
  items2 = [styles.layer, { width: animationWidth }, animatedStyle];
  const obj12 = { text: pass.slotA, shiftedText: memo, variant, color, animationWidth, clippingWindowWidth, animatedStyles: tmp2, styles };
  const View = ReanimatedRexportDefault.View;
  items3 = [closure_7(ShimmerTextSlot, obj12), , ];
  const obj13 = { text: pass.slotB, shiftedText: memo1, variant, color, animationWidth, clippingWindowWidth, animatedStyles: tmp4, styles };
  items3[1] = closure_7(ShimmerTextSlot, obj13);
  const obj14 = { style: items4, children: closure_7(View3, obj15) };
  items4 = [styles.window, { width: clippingWindowWidth }, animatedStyle1];
  const View2 = ReanimatedRexportDefault.View;
  obj15 = { style: items5, children: closure_7(View4, obj16) };
  items5 = [styles.window, { width: clippingWindowWidth }, animatedStyle2];
  View3 = ReanimatedRexportDefault.View;
  obj16 = { style: items6, children: closure_7(closure_16, obj17) };
  items6 = [styles.layer, { width: glyphCount * glyphFontSize }, animatedStyle3];
  obj17 = { animationProgress, slotCount: glyphCount, overshootInSlots: overshoot / glyphFontSize, glyphChoices: pass.band, fontSize: glyphFontSize, color: glyphColor, style: styles.glyphLayer };
  View4 = ReanimatedRexportDefault.View;
  items3[2] = closure_7(View2, obj14);
  return closure_8(View, obj11);
}
function ShimmerTextSlot(arg0) {
  let View2;
  let View4;
  let View5;
  let animatedStyles;
  let animationWidth;
  let clippingWindowWidth;
  let color;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj3;
  let obj5;
  let obj6;
  let shiftedText;
  let styles;
  let text;
  let variant;
  ({ variant, color, animationWidth, clippingWindowWidth, animatedStyles, styles } = arg0);
  const obj = { children: items2 };
  ({ text, shiftedText } = arg0);
  const obj2 = { style: items, children: metroImportDefault(View2, obj3) };
  items = [styles.window, { width: clippingWindowWidth }, animatedStyles.plainWindow];
  const View = ReanimatedRexportDefault.View;
  obj3 = { style: items1, children: metroImportDefault(Text_Text.Text, { variant, color, lineClamp: 1, ellipsizeMode: "clip", children: text }) };
  items1 = [styles.layer, { width: animationWidth }, animatedStyles.plainText];
  View2 = ReanimatedRexportDefault.View;
  items2 = [metroImportDefault(View, obj2), ];
  const obj4 = { style: items3, children: metroImportDefault(View4, obj5) };
  items3 = [styles.window, { width: clippingWindowWidth }, animatedStyles.shiftedOuterWindow];
  const View3 = ReanimatedRexportDefault.View;
  obj5 = { style: items4, children: metroImportDefault(View5, obj6) };
  items4 = [styles.window, { width: clippingWindowWidth }, animatedStyles.shiftedInnerWindow];
  View4 = ReanimatedRexportDefault.View;
  obj6 = { style: items5, children: metroImportDefault(Text_Text.Text, { variant, color, lineClamp: 1, ellipsizeMode: "clip", children: shiftedText }) };
  items5 = [styles.layer, { width: animationWidth }, animatedStyles.shiftedText];
  View5 = ReanimatedRexportDefault.View;
  items2[1] = metroImportDefault(View3, obj4);
  return metroImportAll(React4, obj);
}
function useAnimatedSlotStyles(animationProgress) {
  let fn2;
  let fn3;
  let fn4;
  let fn5;
  let obj4;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  animationProgress = animationProgress.animationProgress;
  const slot = animationProgress.slot;
  const animationWidth = animationProgress.animationWidth;
  const clippingWindowWidth = animationProgress.clippingWindowWidth;
  const overshoot = animationProgress.overshoot;
  let obj = animationProgress(animationWidth[9]);
  const fn = function c() {
    let obj3;
    const value = animationProgress.get();
    const rounded = Math.floor(value);
    const obj = { isIncoming: obj3.incomingSlotForPass(rounded) === slot };
    const obj2 = waveTransition2;
    const merged = Object.assign(obj2.bandEdgesAt(value - rounded, animationWidth, overshoot));
    obj3 = createWaveTransition2;
    return obj;
  };
  let obj2 = { animationProgress, bandEdgesAt: animationProgress(animationWidth[8]).bandEdgesAt, animationWidth, overshoot, incomingSlotForPass: animationProgress(animationWidth[11]).incomingSlotForPass, slot };
  fn.__closure = obj2;
  fn.__workletHash = 13081262734940;
  fn.__initData = __initData3;
  const derivedValue = obj.useDerivedValue(fn);
  let obj3 = { plainWindow: obj4.useAnimatedStyle(fn2), plainText: obj5.useAnimatedStyle(fn3), shiftedOuterWindow: obj6.useAnimatedStyle(S), shiftedInnerWindow: obj8.useAnimatedStyle(fn4), shiftedText: obj9.useAnimatedStyle(fn5) };
  fn2 = function h() {
    let items;
    const value = derivedValue.get();
    let outgoingTextStart = value.outgoingTextStart;
    if (value.isIncoming) {
      outgoingTextStart = tmp2 - clippingWindowWidth;
    }
    const obj = { transform: items };
    items = [{ translateX: outgoingTextStart }];
    return obj;
  };
  fn2.__closure = { slotState: derivedValue, clippingWindowWidth };
  fn2.__workletHash = 9591569129869;
  fn2.__initData = __initData4;
  fn3 = function u() {
    let diff;
    let items;
    const value = derivedValue.get();
    if (value.isIncoming) {
      diff = clippingWindowWidth - tmp2;
    } else {
      diff = -tmp3;
    }
    const obj = { transform: items };
    items = [{ translateX: diff }];
    return obj;
  };
  fn3.__closure = { slotState: derivedValue, clippingWindowWidth };
  fn3.__workletHash = 13527163592001;
  fn3.__initData = __initData5;
  obj4 = animationProgress(animationWidth[9]);
  obj5 = animationProgress(animationWidth[9]);
  obj6 = animationProgress(animationWidth[9]);
  class S {
    constructor() {
      let bandStart;
      let isIncoming;
      let items;
      const value = derivedValue.get();
      let bandEnd = value.bandEnd;
      ({ bandStart, isIncoming } = value);
      const obj = { opacity: waveTransition2.SHIFTED_OPACITY, transform: items };
      if (isIncoming) {
        bandEnd = bandStart;
      }
      items = [{ translateX: bandEnd }];
      return obj;
    }
  }
  S.__closure = { slotState: derivedValue, SHIFTED_OPACITY: animationProgress(animationWidth[8]).SHIFTED_OPACITY };
  S.__workletHash = 9376178759405;
  S.__initData = __initData6;
  ({ slotState: derivedValue, SHIFTED_OPACITY: animationProgress(animationWidth[8]).SHIFTED_OPACITY });
  fn4 = function p() {
    let items;
    const value = derivedValue.get();
    const obj = { transform: items };
    items = [];
    const obj2 = { translateX: (value.isIncoming ? value.incomingTextEnd - value.bandStart : value.outgoingTextStart - value.bandEnd) - clippingWindowWidth };
    items[0] = obj2;
    return obj;
  };
  fn4.__closure = { slotState: derivedValue, clippingWindowWidth };
  fn4.__workletHash = 5550998645378;
  fn4.__initData = __initData7;
  fn5 = function _() {
    let items;
    const value = derivedValue.get();
    let incomingTextEnd = value.outgoingTextStart;
    const tmp2 = clippingWindowWidth;
    if (value.isIncoming) {
      incomingTextEnd = value.incomingTextEnd;
    }
    const obj = { transform: items };
    items = [];
    const obj2 = { translateX: tmp2 - incomingTextEnd };
    items[0] = obj2;
    return obj;
  };
  fn5.__closure = { slotState: derivedValue, clippingWindowWidth };
  fn5.__workletHash = 5116410661440;
  fn5.__initData = __initData8;
  obj8 = animationProgress(animationWidth[9]);
  obj9 = animationProgress(animationWidth[9]);
  return obj3;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ PixelRatio: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let closure_10 = createStyles.createStyles((height, height2) => {
  let rect;
  const obj = { container: { alignSelf: "flex-start", height }, sizer: { opacity: 0 }, layer: { position: "absolute", top: 0, left: 0, height }, glyphLayer: rect, window: { position: "absolute", top: 0, left: 0, height, overflow: "hidden" } };
  rect = { position: "absolute", top: (height - height2) / 2, left: 0, height: height2 };
  return obj;
});
const __initData = { code: "function AIShimmerNativeTsx1(){const{animationProgress,BAND_UPDATES_PER_PASS,bandGlyphsAt,slotCount,glyphChoices,overshootInSlots}=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const updateStep=Math.floor(passProgress*BAND_UPDATES_PER_PASS)/BAND_UPDATES_PER_PASS;return bandGlyphsAt(updateStep,slotCount,glyphChoices,overshootInSlots);}" };
const __initData2 = { code: "function AIShimmerNativeTsx2(next,previous){const{runOnJS,setGlyphs}=this.__closure;if(next===previous)return;runOnJS(setGlyphs)(next);}" };
const memoResult = react.memo((variant) => {
  let str = variant.variant;
  if (str === undefined) {
    str = "text-md/normal";
  }
  let AI_TEXT_EFFECT_DEFAULT_DELAY = variant.delay;
  if (AI_TEXT_EFFECT_DEFAULT_DELAY === undefined) {
    AI_TEXT_EFFECT_DEFAULT_DELAY = AIShimmerTypes.AI_TEXT_EFFECT_DEFAULT_DELAY;
  }
  let num = variant.initialDelay;
  if (num === undefined) {
    num = 0;
  }
  let AI_TEXT_EFFECT_DEFAULT_DURATION = variant.duration;
  if (AI_TEXT_EFFECT_DEFAULT_DURATION === undefined) {
    AI_TEXT_EFFECT_DEFAULT_DURATION = AIShimmerTypes.AI_TEXT_EFFECT_DEFAULT_DURATION;
  }
  const obj = { variant: str, delay: AI_TEXT_EFFECT_DEFAULT_DELAY, initialDelay: num, duration: AI_TEXT_EFFECT_DEFAULT_DURATION };
  const merged = Object.assign(Object.assign(variant, Object.assign({ variant: 0, delay: 0, initialDelay: 0, duration: 0 })));
  return metroImportDefault(AIShimmerInner, obj, str);
});
let closure_16 = react.memo((animationProgress) => {
  let closure_4;
  let color;
  let fontSize;
  let style;
  animationProgress = animationProgress.animationProgress;
  const slotCount = animationProgress.slotCount;
  const overshootInSlots = animationProgress.overshootInSlots;
  const glyphChoices = animationProgress.glyphChoices;
  react = undefined;
  ({ fontSize, color, style } = animationProgress);
  const tmp = glyphChoices(react.useState(glyphChoices), 2);
  react = tmp3;
  const children = tmp[0];
  const tmp4 = animationProgress(overshootInSlots[9]);
  class T {
    constructor() {
      const value = animationProgress.get();
      const result = Math.floor(30 * (value - Math.floor(value))) / 30;
      const obj = waveTransition2;
      return obj.bandGlyphsAt(result, slotCount, glyphChoices, overshootInSlots);
    }
  }
  let obj = { animationProgress, BAND_UPDATES_PER_PASS: 30, bandGlyphsAt: animationProgress(overshootInSlots[8]).bandGlyphsAt, slotCount, glyphChoices, overshootInSlots };
  const useAnimatedReaction = tmp4.useAnimatedReaction;
  T.__closure = obj;
  T.__workletHash = 7805477121955;
  T.__initData = __initData;
  const fn = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_4)(arg0);
    }
  };
  fn.__closure = { runOnJS: animationProgress(overshootInSlots[9]).runOnJS, setGlyphs: tmp[1] };
  fn.__workletHash = 1613883007105;
  fn.__initData = __initData2;
  ({ runOnJS: animationProgress(overshootInSlots[9]).runOnJS, setGlyphs: tmp[1] });
  const animatedReaction = useAnimatedReaction(T, fn);
  return closure_7(animationProgress(overshootInSlots[12]).AIGlyphText, { size, color, allowFontScaling: false, numberOfLines: 1, ellipsizeMode: "clip", style, children });
});
const __initData3 = { code: "function AIShimmerNativeTsx3(){const{animationProgress,bandEdgesAt,animationWidth,overshoot,incomingSlotForPass,slot}=this.__closure;const totalProgress=animationProgress.get();const passIndex=Math.floor(totalProgress);const passProgress=totalProgress-passIndex;return{...bandEdgesAt(passProgress,animationWidth,overshoot),isIncoming:incomingSlotForPass(passIndex)===slot};}" };
const __initData4 = { code: "function AIShimmerNativeTsx4(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:isIncoming?incomingTextEnd-clippingWindowWidth:outgoingTextStart}]};}" };
const __initData5 = { code: "function AIShimmerNativeTsx5(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:isIncoming?clippingWindowWidth-incomingTextEnd:-outgoingTextStart}]};}" };
const __initData6 = { code: "function AIShimmerNativeTsx6(){const{slotState,SHIFTED_OPACITY}=this.__closure;const{bandStart:bandStart,bandEnd:bandEnd,isIncoming:isIncoming}=slotState.get();return{opacity:SHIFTED_OPACITY,transform:[{translateX:isIncoming?bandStart:bandEnd}]};}" };
const __initData7 = { code: "function AIShimmerNativeTsx7(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd,bandStart:bandStart,bandEnd:bandEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();const shiftedWidth=isIncoming?incomingTextEnd-bandStart:outgoingTextStart-bandEnd;return{transform:[{translateX:shiftedWidth-clippingWindowWidth}]};}" };
const __initData8 = { code: "function AIShimmerNativeTsx8(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:clippingWindowWidth-(isIncoming?incomingTextEnd:outgoingTextStart)}]};}" };
const __initData9 = { code: "function AIShimmerNativeTsx9(){const{animationProgress,bandEdgesAt,animationWidth,overshoot,glyphLayerOpacityAt,easeTail}=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const{bandStart:bandStart,bandEnd:bandEnd}=bandEdgesAt(passProgress,animationWidth,overshoot);return{bandStart:bandStart,bandEnd:bandEnd,opacity:glyphLayerOpacityAt(easeTail(passProgress))};}" };
const __initData10 = { code: "function AIShimmerNativeTsx10(){const{crossFadeOpacity}=this.__closure;return{opacity:crossFadeOpacity.get()};}" };
const __initData11 = { code: "function AIShimmerNativeTsx11(){const{bandState}=this.__closure;const{bandStart:bandStart,opacity:opacity}=bandState.get();return{opacity:opacity,transform:[{translateX:bandStart}]};}" };
const __initData12 = { code: "function AIShimmerNativeTsx12(){const{bandState,clippingWindowWidth}=this.__closure;const{bandStart:bandStart,bandEnd:bandEnd}=bandState.get();return{transform:[{translateX:bandEnd-bandStart-clippingWindowWidth}]};}" };
const __initData13 = { code: "function AIShimmerNativeTsx13(){const{bandState,clippingWindowWidth}=this.__closure;const{bandEnd:bandEnd}=bandState.get();return{transform:[{translateX:clippingWindowWidth-bandEnd}]};}" };
let result = size.fileFinishedImporting("design/visual-identities/ai/AIShimmer/AIShimmer.native.tsx");

export const AIShimmer = memoResult;
