// Module ID: 13019
// Function ID: 13020
// Name: AIShimmer
// Dependencies: [32, 19, 17, 21, 5170, 13020, 5231, 5783, 13021, 1652, 13022, 13023, 1705, 12465, 2]

// Module 13019 (AIShimmer)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import Text_Text from "Text/Text" /* 5783 */;
import AIGlyphText from "AIGlyphText" /* 12465 */;
import AIShimmerTypes from "AIShimmerTypes" /* 13020 */;
import waveTransition2 from "waveTransition" /* 13021 */;
import createWaveTransition2 from "createWaveTransition" /* 13023 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let bandStart, fontScale, incomingTextEnd, obj1, outgoingTextStart, rounded;

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
  fontScale = undefined;
  let bound;
  let closure_7;
  let obj = react;
  let tmp = sharedValue;
  ({ text, delay, initialDelay, duration, onComplete, onStart, style, ref } = arg0);
  const reducedMotion = react.useContext(sharedValue(pass[6]).AccessibilityPreferencesContext).reducedMotion;
  fontScale = fontScale.getFontScale();
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
  fontScale = react.useRef(null);
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
  let animationProgress2;
  let animationWidth;
  let animationWidth2;
  let clippingWindowWidth;
  let color;
  let crossFadeOpacity;
  let crossFadeOpacity2;
  let glyphColor;
  let glyphCount;
  let glyphFontSize;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let obj10;
  let obj11;
  let obj9;
  let overshoot;
  let overshoot2;
  let styles;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp9;
  let variant;
  pass = pass.pass;
  ({ animationProgress, glyphCount, glyphFontSize, variant, color, styles, animationWidth, clippingWindowWidth, overshoot } = pass);
  let obj = { animationWidth, clippingWindowWidth, overshoot };
  let obj2 = { animationProgress, slot: "A" };
  ({ crossFadeOpacity, glyphColor } = pass);
  const merged = Object.assign(obj);
  const obj3 = { animationProgress, slot: "B" };
  const tmp2 = useAnimatedSlotStyles(obj2);
  const merged1 = Object.assign(obj);
  const obj4 = { animationProgress, crossFadeOpacity };
  const tmp4 = useAnimatedSlotStyles(obj3);
  const merged2 = Object.assign(obj);
  const clippingWindowWidth2 = obj4.clippingWindowWidth;
  ({ animationProgress: animationProgress2, crossFadeOpacity: crossFadeOpacity2, animationWidth: animationWidth2, overshoot: overshoot2 } = obj4);
  let items = [closure_24, animationProgress2, , , , , ];
  const useDerivedValue = pass(1652).useDerivedValue;
  pass(1652);
  items[2] = pass(13021).bandEdgesAt;
  items[3] = animationWidth2;
  items[4] = overshoot2;
  items[5] = pass(13021).glyphLayerOpacityAt;
  items[6] = pass(13021).easeTail;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  class AIShimmerNativeTsx9 {
    constructor() {
      const value = _undefined.get();
      const diff = value - Math.floor(value);
      const tmp3 = _undefined2(diff, c2, c3);
      const obj = { bandStart: tmp3.bandStart, bandEnd: tmp3.bandEnd, opacity: _undefined3(_undefined4(diff)) };
      return obj;
    }
  }
  const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  AIShimmerNativeTsx9.__closure = items1;
  AIShimmerNativeTsx9.__workletHash = 5793871475453;
  AIShimmerNativeTsx9.__initData = tmp9;
  const derivedValue = useDerivedValue(AIShimmerNativeTsx9);
  const items2 = [closure_25, crossFadeOpacity2];
  c0 = undefined;
  [tmp17, tmp18] = items2;
  const tmp6Result = pass(1652);
  class AIShimmerNativeTsx10 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items3 = [tmp18];
  AIShimmerNativeTsx10.__closure = items3;
  AIShimmerNativeTsx10.__workletHash = 4137951391928;
  AIShimmerNativeTsx10.__initData = tmp17;
  const animatedStyle = tmp6Result.useAnimatedStyle(AIShimmerNativeTsx10);
  const items4 = [closure_26, derivedValue];
  c0 = undefined;
  [tmp20, tmp21] = items4;
  const tmp6Result4 = pass(1652);
  class AIShimmerNativeTsx11 {
    constructor() {
      let items;
      const value = _undefined.get();
      const obj = { opacity: value.opacity, transform: items };
      items = [];
      const obj2 = { translateX: value.bandStart };
      items[0] = obj2;
      return obj;
    }
  }
  const items5 = [tmp21];
  AIShimmerNativeTsx11.__closure = items5;
  AIShimmerNativeTsx11.__workletHash = 14375697888926;
  AIShimmerNativeTsx11.__initData = tmp20;
  const animatedStyle1 = tmp6Result4.useAnimatedStyle(AIShimmerNativeTsx11);
  const items6 = [closure_27, derivedValue, clippingWindowWidth2];
  c0 = undefined;
  c1 = undefined;
  [tmp23, tmp24, tmp25] = items6;
  const tmp6Result5 = pass(1652);
  class AIShimmerNativeTsx12 {
    constructor() {
      let items;
      const value = _undefined.get();
      const obj = { transform: items };
      items = [];
      const obj2 = { translateX: value.bandEnd - value.bandStart - c1 };
      items[0] = obj2;
      return obj;
    }
  }
  const items7 = [tmp24, tmp25];
  AIShimmerNativeTsx12.__closure = items7;
  AIShimmerNativeTsx12.__workletHash = 1324009353313;
  AIShimmerNativeTsx12.__initData = tmp23;
  const animatedStyle2 = tmp6Result5.useAnimatedStyle(AIShimmerNativeTsx12);
  const items8 = [closure_28, derivedValue, clippingWindowWidth2];
  c0 = undefined;
  c1 = undefined;
  [tmp27, tmp28, tmp29] = items8;
  const tmp6Result6 = pass(1652);
  class AIShimmerNativeTsx13 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ translateX: c1 - _undefined.get().bandEnd }];
      ({ translateX: c1 - _undefined.get().bandEnd });
      return obj;
    }
  }
  const items9 = [tmp28, tmp29];
  AIShimmerNativeTsx13.__closure = items9;
  AIShimmerNativeTsx13.__workletHash = 1661222839154;
  AIShimmerNativeTsx13.__initData = tmp27;
  const items10 = [pass.slotA];
  const animatedStyle3 = tmp6Result6.useAnimatedStyle(AIShimmerNativeTsx13);
  const items11 = [pass.slotB];
  const memo = react.useMemo(() => {
    const obj = waveTransition2;
    return obj.shiftedLineFor(pass.slotA);
  }, items10);
  const memo1 = react.useMemo(() => {
    const obj = waveTransition2;
    return obj.shiftedLineFor(pass.slotB);
  }, items11);
  const obj5 = { style: items12, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items13 };
  items12 = [styles.layer, { width: animationWidth }, animatedStyle];
  const obj6 = { text: pass.slotA, shiftedText: memo, variant, color, animationWidth, clippingWindowWidth, animatedStyles: tmp2, styles };
  const View = _modDef1652.View;
  items13 = [closure_7(ShimmerTextSlot, obj6), , ];
  const obj7 = { text: pass.slotB, shiftedText: memo1, variant, color, animationWidth, clippingWindowWidth, animatedStyles: tmp4, styles };
  items13[1] = closure_7(ShimmerTextSlot, obj7);
  const obj8 = { style: items14, children: closure_7(View3, obj9) };
  items14 = [styles.window, { width: clippingWindowWidth }, animatedStyle1];
  const View2 = _modDef1652.View;
  obj9 = { style: items15, children: closure_7(View4, obj10) };
  items15 = [styles.window, { width: clippingWindowWidth }, animatedStyle2];
  View3 = _modDef1652.View;
  obj10 = { style: items16, children: closure_7(closure_16, obj11) };
  items16 = [styles.layer, { width: glyphCount * glyphFontSize }, animatedStyle3];
  obj11 = { animationProgress, slotCount: glyphCount, overshootInSlots: overshoot / glyphFontSize, glyphChoices: pass.band, fontSize: glyphFontSize, color: glyphColor, style: styles.glyphLayer };
  View4 = _modDef1652.View;
  items13[2] = closure_7(View2, obj8);
  return closure_8(View, obj5);
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
  const View = _modDef1652.View;
  obj3 = { style: items1, children: metroImportDefault(Text_Text.Text, { variant, color, lineClamp: 1, ellipsizeMode: "clip", children: text }) };
  items1 = [styles.layer, { width: animationWidth }, animatedStyles.plainText];
  View2 = _modDef1652.View;
  items2 = [metroImportDefault(View, obj2), ];
  const obj4 = { style: items3, children: metroImportDefault(View4, obj5) };
  items3 = [styles.window, { width: clippingWindowWidth }, animatedStyles.shiftedOuterWindow];
  const View3 = _modDef1652.View;
  obj5 = { style: items4, children: metroImportDefault(View5, obj6) };
  items4 = [styles.window, { width: clippingWindowWidth }, animatedStyles.shiftedInnerWindow];
  View4 = _modDef1652.View;
  obj6 = { style: items5, children: metroImportDefault(Text_Text.Text, { variant, color, lineClamp: 1, ellipsizeMode: "clip", children: shiftedText }) };
  items5 = [styles.layer, { width: animationWidth }, animatedStyles.shiftedText];
  View5 = _modDef1652.View;
  items2[1] = metroImportDefault(View3, obj4);
  return metroImportAll(React4, obj);
}
function useAnimatedSlotStyles(clippingWindowWidth) {
  let animationProgress;
  let animationWidth;
  let overshoot;
  let slot;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  clippingWindowWidth = clippingWindowWidth.clippingWindowWidth;
  let tmp2 = dependencyMap;
  ({ animationProgress, slot, animationWidth, overshoot } = clippingWindowWidth);
  const tmp3 = _mod1652;
  let items = [closure_17, animationProgress, , , , , ];
  const useDerivedValue = tmp3.useDerivedValue;
  items[2] = waveTransition2.bandEdgesAt;
  items[3] = animationWidth;
  items[4] = overshoot;
  items[5] = createWaveTransition2.incomingSlotForPass;
  items[6] = slot;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  class AIShimmerNativeTsx3 {
    constructor() {
      value = closure_0.get();
      rounded = Math.floor(value);
      obj = {};
      merged = Object.assign(closure_1(value - rounded, closure_2, closure_3));
      obj.isIncoming = closure_4(rounded) === closure_5;
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
  AIShimmerNativeTsx3.__closure = items1;
  AIShimmerNativeTsx3.__workletHash = 1280666156005;
  AIShimmerNativeTsx3.__initData = tmp4;
  const derivedValue = useDerivedValue(AIShimmerNativeTsx3);
  const items2 = [closure_18, derivedValue, clippingWindowWidth];
  c0 = undefined;
  c1 = undefined;
  [tmp12, tmp13, tmp14] = items2;
  const tmpResult = _mod1652;
  class AIShimmerNativeTsx4 {
    constructor() {
      value = closure_0.get();
      outgoingTextStart = value.outgoingTextStart;
      if (value.isIncoming) {
        tmp3 = closure_1;
        outgoingTextStart = tmp2 - closure_1;
      }
      obj = { transform: null };
      items = [];
      items[0] = { translateX: outgoingTextStart };
      obj.transform = items;
      return obj;
    }
  }
  const items3 = [tmp13, tmp14];
  AIShimmerNativeTsx4.__closure = items3;
  AIShimmerNativeTsx4.__workletHash = 9334787013812;
  AIShimmerNativeTsx4.__initData = tmp12;
  const animatedStyle = tmpResult.useAnimatedStyle(AIShimmerNativeTsx4);
  const items4 = [closure_19, derivedValue, clippingWindowWidth];
  c0 = undefined;
  c1 = undefined;
  [tmp16, tmp17, tmp18] = items4;
  const tmpResult5 = _mod1652;
  class AIShimmerNativeTsx5 {
    constructor() {
      value = closure_0.get();
      if (value.isIncoming) {
        tmp5 = closure_1;
        diff = closure_1 - tmp2;
      } else {
        diff = -tmp3;
      }
      obj = { transform: null };
      items = [];
      items[0] = { translateX: diff };
      obj.transform = items;
      return obj;
    }
  }
  const items5 = [tmp17, tmp18];
  AIShimmerNativeTsx5.__closure = items5;
  AIShimmerNativeTsx5.__workletHash = 10286408218584;
  AIShimmerNativeTsx5.__initData = tmp16;
  const animatedStyle1 = tmpResult5.useAnimatedStyle(AIShimmerNativeTsx5);
  const items6 = [closure_20, derivedValue, ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items6[2] = waveTransition2.SHIFTED_OPACITY;
  c0 = undefined;
  c1 = undefined;
  [tmp21, tmp22, tmp23] = items6;
  class AIShimmerNativeTsx6 {
    constructor() {
      value = closure_0.get();
      bandStart = value.bandEnd;
      obj = { opacity: closure_1, transform: null };
      if (value.isIncoming) {
        bandStart = value.bandStart;
      }
      items = [];
      items[0] = { translateX: bandStart };
      obj.transform = items;
      return obj;
    }
  }
  const items7 = [tmp22, tmp23];
  AIShimmerNativeTsx6.__closure = items7;
  AIShimmerNativeTsx6.__workletHash = 9677475424724;
  AIShimmerNativeTsx6.__initData = tmp21;
  const animatedStyle2 = useAnimatedStyle(AIShimmerNativeTsx6);
  const items8 = [closure_21, derivedValue, clippingWindowWidth];
  c0 = undefined;
  c1 = undefined;
  [tmp25, tmp26, tmp27] = items8;
  const tmpResult7 = _mod1652;
  class AIShimmerNativeTsx7 {
    constructor() {
      value = closure_0.get();
      obj = { transform: null };
      obj1 = { translateX: (value.isIncoming ? value.incomingTextEnd - value.bandStart : value.outgoingTextStart - value.bandEnd) - closure_1 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items9 = [tmp26, tmp27];
  AIShimmerNativeTsx7.__closure = items9;
  AIShimmerNativeTsx7.__workletHash = 15141224175259;
  AIShimmerNativeTsx7.__initData = tmp25;
  const animatedStyle3 = tmpResult7.useAnimatedStyle(AIShimmerNativeTsx7);
  const items10 = [closure_22, derivedValue, clippingWindowWidth];
  c0 = undefined;
  c1 = undefined;
  [tmp29, tmp30, tmp31] = items10;
  const tmpResult8 = _mod1652;
  class AIShimmerNativeTsx8 {
    constructor() {
      value = closure_0.get();
      incomingTextEnd = value.outgoingTextStart;
      tmp2 = closure_1;
      if (value.isIncoming) {
        incomingTextEnd = value.incomingTextEnd;
      }
      obj = { transform: null };
      obj1 = { translateX: tmp2 - incomingTextEnd };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items11 = [tmp30, tmp31];
  AIShimmerNativeTsx8.__closure = items11;
  AIShimmerNativeTsx8.__workletHash = 11355419187929;
  AIShimmerNativeTsx8.__initData = tmp29;
  let obj = { plainWindow: animatedStyle, plainText: animatedStyle1, shiftedOuterWindow: animatedStyle2, shiftedInnerWindow: animatedStyle3, shiftedText: tmpResult8.useAnimatedStyle(AIShimmerNativeTsx8) };
  return obj;
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
let closure_14 = { code: "(function AIShimmerNativeTsx1(){let[animationProgress,BAND_UPDATES_PER_PASS,bandGlyphsAt,slotCount,glyphChoices,overshootInSlots]=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const updateStep=Math.floor(passProgress*BAND_UPDATES_PER_PASS)/BAND_UPDATES_PER_PASS;return bandGlyphsAt(updateStep,slotCount,glyphChoices,overshootInSlots);})" };
let closure_15 = { code: "(function AIShimmerNativeTsx2(next,previous){let[scheduleOnRN,setGlyphs]=this.__closure;if(next===previous)return;scheduleOnRN(setGlyphs,next);})" };
const memoResult = react.memo(function AIShimmer(variant) {
  let str = variant.variant;
  if (str === undefined) {
    str = "body-md/normal";
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
let closure_16 = react.memo(function GlyphBand(glyphChoices) {
  let animationProgress;
  let color;
  let fontSize;
  let overshootInSlots;
  let slotCount;
  let style;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp2;
  let tmp3;
  let tmp7;
  let tmp8;
  let tmp9;
  glyphChoices = glyphChoices.glyphChoices;
  ({ animationProgress, slotCount, overshootInSlots, fontSize, color, style } = glyphChoices);
  [tmp2, tmp3] = _slicedToArray(react.useState(glyphChoices), 2);
  const items = [closure_14, animationProgress, 30, , , , ];
  const tmp = _slicedToArray(react.useState(glyphChoices), 2);
  const useAnimatedReaction = _mod1652.useAnimatedReaction;
  _mod1652;
  items[3] = waveTransition2.bandGlyphsAt;
  items[4] = slotCount;
  items[5] = glyphChoices;
  items[6] = overshootInSlots;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
  class AIShimmerNativeTsx1 {
    constructor() {
      value = closure_0.get();
      return closure_2(Math.floor((value - Math.floor(value)) * closure_1) / closure_1, closure_3, closure_4, closure_5);
    }
  }
  const items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  AIShimmerNativeTsx1.__closure = items1;
  AIShimmerNativeTsx1.__workletHash = 11538958195002;
  AIShimmerNativeTsx1.__initData = tmp7;
  const items2 = [closure_15, _mod1705.scheduleOnRN, tmp3];
  c0 = undefined;
  c1 = undefined;
  [tmp14, tmp15, tmp16] = items2;
  class AIShimmerNativeTsx2 {
    constructor(arg0, arg1) {
      if (glyphChoices !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, glyphChoices);
      }
      return;
    }
  }
  const items3 = [tmp15, tmp16];
  AIShimmerNativeTsx2.__closure = items3;
  AIShimmerNativeTsx2.__workletHash = 3832507172693;
  AIShimmerNativeTsx2.__initData = tmp14;
  const animatedReaction = useAnimatedReaction(AIShimmerNativeTsx1, AIShimmerNativeTsx2);
  return metroImportDefault(AIGlyphText.AIGlyphText, { size, color, allowFontScaling: false, numberOfLines: 1, ellipsizeMode: "clip", style, children });
});
let closure_17 = { code: "(function AIShimmerNativeTsx3(){let[animationProgress,bandEdgesAt,animationWidth,overshoot,incomingSlotForPass,slot]=this.__closure;const totalProgress=animationProgress.get();const passIndex=Math.floor(totalProgress);const passProgress=totalProgress-passIndex;return{...bandEdgesAt(passProgress,animationWidth,overshoot),isIncoming:incomingSlotForPass(passIndex)===slot};})" };
let closure_18 = { code: "(function AIShimmerNativeTsx4(){let[slotState,clippingWindowWidth]=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:isIncoming?incomingTextEnd-clippingWindowWidth:outgoingTextStart}]};})" };
let closure_19 = { code: "(function AIShimmerNativeTsx5(){let[slotState,clippingWindowWidth]=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:isIncoming?clippingWindowWidth-incomingTextEnd:-outgoingTextStart}]};})" };
let closure_20 = { code: "(function AIShimmerNativeTsx6(){let[slotState,SHIFTED_OPACITY]=this.__closure;const{bandStart:bandStart,bandEnd:bandEnd,isIncoming:isIncoming}=slotState.get();return{opacity:SHIFTED_OPACITY,transform:[{translateX:isIncoming?bandStart:bandEnd}]};})" };
let closure_21 = { code: "(function AIShimmerNativeTsx7(){let[slotState,clippingWindowWidth]=this.__closure;const{incomingTextEnd:incomingTextEnd,bandStart:bandStart,bandEnd:bandEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();const shiftedWidth=isIncoming?incomingTextEnd-bandStart:outgoingTextStart-bandEnd;return{transform:[{translateX:shiftedWidth-clippingWindowWidth}]};})" };
let closure_22 = { code: "(function AIShimmerNativeTsx8(){let[slotState,clippingWindowWidth]=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:clippingWindowWidth-(isIncoming?incomingTextEnd:outgoingTextStart)}]};})" };
let closure_24 = { code: "(function AIShimmerNativeTsx9(){let[animationProgress,bandEdgesAt,animationWidth,overshoot,glyphLayerOpacityAt,easeTail]=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const{bandStart:bandStart,bandEnd:bandEnd}=bandEdgesAt(passProgress,animationWidth,overshoot);return{bandStart:bandStart,bandEnd:bandEnd,opacity:glyphLayerOpacityAt(easeTail(passProgress))};})" };
let closure_25 = { code: "(function AIShimmerNativeTsx10(){let[crossFadeOpacity]=this.__closure;return{opacity:crossFadeOpacity.get()};})" };
let closure_26 = { code: "(function AIShimmerNativeTsx11(){let[bandState]=this.__closure;const{bandStart:bandStart,opacity:opacity}=bandState.get();return{opacity:opacity,transform:[{translateX:bandStart}]};})" };
let closure_27 = { code: "(function AIShimmerNativeTsx12(){let[bandState,clippingWindowWidth]=this.__closure;const{bandStart:bandStart,bandEnd:bandEnd}=bandState.get();return{transform:[{translateX:bandEnd-bandStart-clippingWindowWidth}]};})" };
let closure_28 = { code: "(function AIShimmerNativeTsx13(){let[bandState,clippingWindowWidth]=this.__closure;const{bandEnd:bandEnd}=bandState.get();return{transform:[{translateX:clippingWindowWidth-bandEnd}]};})" };
let result = size.fileFinishedImporting("design/visual-identities/ai/AIShimmer/AIShimmer.native.tsx");

export const AIShimmer = memoResult;
