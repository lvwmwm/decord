// Module ID: 11630
// Function ID: 11631
// Name: BadgeUnlockAnimation
// Dependencies: [32, 19, 17, 5143, 21, 1652, 5142, 11631, 1377, 5139, 10754, 5372, 11601, 7107, 504, 11611, 11633, 8832, 1705, 5149, 11606, 5263, 2]
// Exports: default

// Module 11630 (BadgeUnlockAnimation)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import shared from "shared" /* 5149 */;
import timing_timing from "timing/timing" /* 5372 */;
import reactDefault from "react" /* 10754 */;
import trackBadgeDirectoryActionDefault from "trackBadgeDirectoryAction" /* 11606 */;
import BadgeUtils from "BadgeUtils" /* 11611 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5142 */;
import size_mod from "module_2" /* 2 */;

let set, set2, set3;

let metroImportAll;
let metroImportDefault;
let tmp;
const ColorUtils = tmp(5139);
function BadgeLayer(onLoad) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let ambientUrl;
  let artUrl;
  let c4;
  let c6;
  let c7;
  let duration;
  let easing;
  let hasFill;
  let isShown;
  let items10;
  let items11;
  let items9;
  let num;
  let obj11;
  let obj8;
  let obj9;
  let rasterUrl;
  let size1;
  let tmp17;
  let tmp21;
  let tmp23Result3;
  let tmp28;
  let tmp5;
  let tmp50;
  let tmp6;
  let tmp8;
  let tmp9;
  ({ artUrl, rasterUrl, ambientUrl, hasFill, isShown } = onLoad);
  onLoad = onLoad.onLoad;
  let sharedValue;
  let FALLBACK_BADGE_COLOR;
  react = undefined;
  let closure_5;
  c6 = undefined;
  c7 = undefined;
  let closure_8;
  const fillOpacity = onLoad.fillOpacity;
  let tmp = closure_17();
  let tmp3 = sharedValue;
  let obj = isShown(sharedValue[5]);
  sharedValue = obj.useSharedValue(0);
  let obj2 = isShown(sharedValue[5]);
  let items = [closure_18, sharedValue];
  let c0;
  [tmp5, tmp6] = items;
  class BadgeUnlockAnimationTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items1 = [tmp6];
  BadgeUnlockAnimationTsx1.__closure = items1;
  BadgeUnlockAnimationTsx1.__workletHash = 5168065107335;
  BadgeUnlockAnimationTsx1.__initData = tmp5;
  const animatedStyle = obj2.useAnimatedStyle(BadgeUnlockAnimationTsx1);
  const items2 = [closure_19, fillOpacity];
  c0 = undefined;
  [tmp8, tmp9] = items2;
  const tmp2Result = isShown(tmp3[5]);
  class BadgeUnlockAnimationTsx2 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items3 = [tmp9];
  BadgeUnlockAnimationTsx2.__closure = items3;
  BadgeUnlockAnimationTsx2.__workletHash = 11413155013124;
  BadgeUnlockAnimationTsx2.__initData = tmp8;
  const animatedStyle1 = tmp2Result.useAnimatedStyle(BadgeUnlockAnimationTsx2);
  const tmp2Result3 = isShown(tmp3[7]);
  const badgeColor = tmp2Result3.useBadgeColor(rasterUrl);
  FALLBACK_BADGE_COLOR = badgeColor;
  if (badgeColor == null) {
    FALLBACK_BADGE_COLOR = tmp2(tmp3[7]).FALLBACK_BADGE_COLOR;
  }
  let obj5 = react;
  const items4 = [FALLBACK_BADGE_COLOR];
  const items5 = [FALLBACK_BADGE_COLOR];
  const memo = react.useMemo(() => ({ backgroundColor: FALLBACK_BADGE_COLOR }), items4);
  const memo1 = react.useMemo(() => ({ shadowColor: FALLBACK_BADGE_COLOR }), items5);
  const items6 = [FALLBACK_BADGE_COLOR];
  const memo2 = react.useMemo(() => {
    let items;
    let obj4;
    let obj6;
    let obj8;
    let tmpResult;
    let tmp3 = null;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const obj3 = { dropShadow: obj4 };
      const obj2 = { filter: items };
      items = [obj3, , ];
      const obj5 = { dropShadow: obj6 };
      obj4 = { offsetX: 0, offsetY: 0, standardDeviation: 4, color: FALLBACK_BADGE_COLOR };
      obj6 = { offsetX: 0, offsetY: 0, standardDeviation: 4, color: FALLBACK_BADGE_COLOR };
      items[1] = obj5;
      const obj7 = { dropShadow: obj8 };
      obj8 = { offsetX: 0, offsetY: 0, standardDeviation: 10, color: tmpResult.hexOpacityToRgba(FALLBACK_BADGE_COLOR, 0.8) };
      items[2] = obj7;
      tmp3 = obj2;
      tmpResult = ColorUtils;
    }
    return tmp3;
  }, items6);
  [tmp17, c4] = FALLBACK_BADGE_COLOR(react.useState(false), 2);
  FALLBACK_BADGE_COLOR(react.useState(false), 2);
  const callback = react.useCallback(() => _undefined(true), []);
  closure_5 = tmp19;
  [tmp21, c6] = FALLBACK_BADGE_COLOR(obj5.useState(false), 2);
  FALLBACK_BADGE_COLOR(obj5.useState(false), 2);
  const callback1 = obj5.useCallback(() => _undefined2(true), []);
  const tmp24 = onLoad(tmp3[10]);
  if (null == ambientUrl) {
    num = null;
  } else {
    num = 1000;
  }
  tmp24(callback1, num);
  [tmp28, c7] = FALLBACK_BADGE_COLOR(obj5.useState(false), 2);
  let tmp30 = tmp19;
  FALLBACK_BADGE_COLOR(obj5.useState(false), 2);
  const callback2 = obj5.useCallback(() => _undefined3(true), []);
  if (null == artUrl || tmp17) {
    tmp30 = null != badgeColor;
  }
  if (tmp30) {
    tmp30 = null == tmp26 || tmp28;
  }
  closure_8 = tmp30;
  const items7 = [tmp30, onLoad];
  const effect = obj5.useEffect(() => {
    const tmp = closure_8;
    if (tmp) {
      onLoad();
    }
  }, items7);
  const items8 = [null == artUrl || tmp17, isShown, sharedValue];
  const effect1 = obj5.useEffect(() => {
    const tmp = closure_5;
    if (tmp) {
      let num2 = 1;
      set = sharedValue.set;
      if (isShown) {
        const obj2 = { duration, easing };
        const obj = timing_timing;
        num2 = obj.withTiming(1, obj2, "animate-always");
      }
      const result = set(num2);
    }
  }, items8);
  if (null == artUrl) {
    return null;
  } else {
    let tmp40;
    let tmp39;
    size = { url: artUrl, width: 192, height: 120, fallbackUrl: rasterUrl, sharesSvgLoad: true };
    let obj3 = { style: animatedStyle, children: items9 };
    const View2 = tmp23(tmp3[5]).View;
    const tmp52 = closure_8;
    if (null != tmp26) {
      let obj4 = { style: tmp.artSize, children: c7(onLoad(tmp3[12]), size1) };
      size1 = { url: tmp26, width: 205.7142857142857, height: 171.42857142857142, animated: true, onLoad: callback, onError: callback1, style: tmp.nitroAmbientArt };
      tmp40 = c7(closure_5, obj4);
      tmp39 = c7;
    } else {
      let obj6 = { onLoad: callback };
      const tmp23Result = onLoad(tmp3[12]);
      const merged = Object.assign(size);
      tmp39 = c7;
      tmp40 = c7(tmp23Result, obj6);
    }
    items9 = [tmp40, ];
    if (hasFill) {
      let obj7 = { style: items10, children: tmp39(closure_5, obj8) };
      items10 = [, , , ];
      ({ layer: arr11[0], haloGlow: arr11[1] } = tmp);
      items10[2] = memo1;
      items10[3] = animatedStyle1;
      obj8 = { style: items11, children: tmp39(closure_5, obj9) };
      items11 = [tmp.edgeGlow, memo1];
      const items12 = [tmp.edgeGlow, memo1, , ];
      View = tmp23(tmp3[5]).View;
      const tmp2Result4 = isShown(tmp3[8]);
      obj9 = { style: items12, children: tmp39(tmp23Result3, obj11) };
      items12[2] = tmp2Result4.isAndroid() && tmp.glowArea;
      items12[3] = memo2;
      tmp2Result4.isAndroid() && tmp.glowArea;
      const obj10 = { onLoad: tmp50 };
      tmp23Result3 = onLoad(tmp3[13]);
      const tmp23Result4 = onLoad(tmp3[12]);
      const merged1 = Object.assign(size);
      tmp50 = undefined;
      if (null != tmp26) {
        tmp50 = callback2;
      }
      obj11 = { maskElement: tmp39(tmp23Result4, obj10), children: tmp39(closure_5, tmp51) };
      class BadgeUnlockAnimationTsx1 {
        constructor() {
          const obj = { opacity: _undefined.get() };
          return obj;
        }
      }
      const items13 = [tmp.artSize, memo];
      tmp51[0] = items13;
      hasFill = tmp39(View, obj7);
    }
    items9[1] = hasFill;
    return tmp52(View2, obj3);
  }
}
let react = react_mod;
let View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const Easing = _mod1652.Easing;
let closure_9 = Easing.bezier(0.33, 0, 0.67, 1);
const Easing2 = _mod1652.Easing;
let closure_10 = Easing2.bezier(0.62, 0, 0.47, 1);
const Easing3 = _mod1652.Easing;
let closure_11 = Easing3.bezier(0.43, 0, 0.54, 1);
const Easing4 = _mod1652.Easing;
let closure_12 = Easing4.bezier(0.17, 0.17, 0.83, 0.83);
const Easing5 = _mod1652.Easing;
let closure_13 = Easing5.bezier(0.67, 0, 0.28, 1);
let c14 = 250;
let c15 = 1000;
let c16 = 200;
let obj = { pulse: { position: "absolute", top: -40, left: -54, width: 300, height: 200 }, pulseHidden: { opacity: 0 }, layer: { position: "absolute", top: 0, left: 0 }, artSize: { width: 192, height: 120 }, nitroAmbientArt: { position: "absolute", left: -6.857142857142847, top: -25.714285714285708 }, edgeGlow: { shadowOpacity: 1, shadowRadius: 4, shadowOffset: { width: 0, height: 0 } }, haloGlow: { shadowOpacity: 0.8, shadowRadius: 10, shadowOffset: { width: 0, height: 0 } }, glowArea: { margin: -30, padding: 30 } };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = { code: "(function BadgeUnlockAnimationTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let closure_19 = { code: "(function BadgeUnlockAnimationTsx2(){let[fillOpacity]=this.__closure;return{opacity:fillOpacity.get()};})" };
let closure_21 = { code: "(function BadgeUnlockAnimationTsx3(){let[sheetIndex]=this.__closure;return sheetIndex.get()>=0;})" };
let closure_22 = { code: "(function BadgeUnlockAnimationTsx4(isUp){let[scheduleOnRN,setIsSheetUp]=this.__closure;if(isUp)scheduleOnRN(setIsSheetUp,true);})" };
let closure_23 = { code: "(function BadgeUnlockAnimationTsx5(finished){let[scheduleOnRN,startPulse]=this.__closure;if(finished===true)scheduleOnRN(startPulse);})" };
let closure_24 = { code: "(function BadgeUnlockAnimationTsx6(finished){let[scheduleOnRN,setIsFillDone]=this.__closure;if(finished===true)scheduleOnRN(setIsFillDone,true);})" };
let closure_25 = { code: "(function BadgeUnlockAnimationTsx7(){let[groupScale]=this.__closure;return{transform:[{scale:groupScale.get()}]};})" };
let closure_26 = { code: "(function BadgeUnlockAnimationTsx8(){let[oldScale]=this.__closure;return{transform:[{scale:oldScale.get()}]};})" };
let closure_27 = { code: "(function BadgeUnlockAnimationTsx9(){let[newScale]=this.__closure;return{transform:[{scale:newScale.get()}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/badges/native/BadgeUnlockAnimation.tsx");

export default function BadgeUnlockAnimation(badge) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let animatedUrl;
  let animatedUrl1;
  let c17;
  let c21;
  let displayedUserId;
  let duration;
  let duration2;
  let easing;
  let easing2;
  let easing3;
  let easing4;
  let easing5;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let obj11;
  let obj13;
  let obj7;
  let previousTierKey;
  let source;
  let tmp20;
  let tmp22;
  let tmp25;
  let tmp32;
  let tmp33;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp44;
  let tmp47;
  let tmp48;
  let tmp50;
  let tmp51;
  let tmp53;
  let tmp54;
  let tmp62;
  let tmp65;
  badge = badge.badge;
  ({ userId: importDefault, source: dependencyMap, previousTierKey } = badge);
  ({ contentOpacity: react, titleScale: View, unlockLabelOpacity: AccessibilityStore } = badge);
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let sharedValue21;
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  closure_18 = undefined;
  let ref;
  let FALLBACK_BADGE_COLOR;
  c21 = undefined;
  closure_22 = undefined;
  const sheetIndex = badge.sheetIndex;
  let tmp = c17();
  const tmp2 = badge;
  let obj = badge(504);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  let obj2 = badge(11611);
  const findTierResult = obj2.findTier(badge, previousTierKey);
  const getBadgeUnlockArt = badge(11633).getBadgeUnlockArt;
  badge(11633);
  let obj3 = badge(11611);
  const badgeUnlockArt = getBadgeUnlockArt(badge, obj3.getDisplayTier(badge), false);
  let obj4 = badge(11633);
  const badgeUnlockArt1 = obj4.getBadgeUnlockArt(badge, findTierResult, true);
  const tmp9 = badge.badge_id === badge(8832).BadgeId.PREMIUM_TENURE && !stateFromStores;
  let tmp61Result = null != findTierResult && !stateFromStores;
  let closure_8 = tmp61Result;
  let num = 0;
  if (tmp61Result) {
    num = 250;
  }
  let tmp2Result = tmp2(1652);
  let num2 = 1;
  sharedValue = tmp2Result.useSharedValue(1);
  const tmp2Result10 = tmp2(1652);
  sharedValue1 = tmp2Result10.useSharedValue(1);
  const tmp2Result11 = tmp2(1652);
  sharedValue2 = tmp2Result11.useSharedValue(0);
  let num3 = 0;
  const useSharedValue = tmp2(1652).useSharedValue;
  tmp2(1652);
  if (stateFromStores) {
    num3 = num2;
  }
  sharedValue3 = useSharedValue(num3);
  let num4 = num2;
  const useSharedValue2 = tmp2(1652).useSharedValue;
  tmp2(1652);
  if (stateFromStores) {
    num4 = 0;
  }
  sharedValue21 = useSharedValue2(num4);
  let obj8 = react;
  [tmp20, c15] = previousTierKey(react.useState(stateFromStores), 2);
  previousTierKey(react.useState(stateFromStores), 2);
  [tmp22, c16] = previousTierKey(react.useState(0), 2);
  const tmp21 = previousTierKey(react.useState(0), 2);
  const callback = react.useCallback(() => _undefined((arg0) => arg0 + 1), []);
  const tmp24 = previousTierKey(react.useState(false), 2);
  [tmp25, c17] = tmp24;
  if (tmp61Result) {
    num2 = 2;
  }
  const tmp26 = tmp22 >= num2 || tmp25;
  let tmp29 = 1000;
  const tmp28 = reactDefault;
  if (tmp26) {
    tmp29 = null;
  }
  tmp28(() => _undefined2(true), tmp29);
  [tmp32, tmp33] = previousTierKey(obj8.useState(false), 2);
  previousTierKey(obj8.useState(false), 2);
  let items1 = [c21, sheetIndex];
  let c0;
  [tmp35, tmp36] = items1;
  const tmp2Result14 = tmp2(1652);
  class BadgeUnlockAnimationTsx3 {
    constructor() {
      return _undefined.get() >= 0;
    }
  }
  let items2 = [tmp36];
  BadgeUnlockAnimationTsx3.__closure = items2;
  BadgeUnlockAnimationTsx3.__workletHash = 17283210868115;
  BadgeUnlockAnimationTsx3.__initData = tmp35;
  let items3 = [closure_22, , ];
  const useAnimatedReaction = tmp2Result14.useAnimatedReaction;
  items3[1] = tmp2(1705).scheduleOnRN;
  items3[2] = tmp33;
  c0 = undefined;
  let c1;
  [tmp37, tmp38, tmp39] = items3;
  class BadgeUnlockAnimationTsx4 {
    constructor(arg0) {
      const tmp = arg0;
      if (tmp) {
        _undefined(c1, true);
      }
    }
  }
  const items4 = [tmp38, tmp39];
  BadgeUnlockAnimationTsx4.__closure = items4;
  BadgeUnlockAnimationTsx4.__workletHash = 2871332509453;
  BadgeUnlockAnimationTsx4.__initData = tmp37;
  const animatedReaction = useAnimatedReaction(BadgeUnlockAnimationTsx3, BadgeUnlockAnimationTsx4);
  closure_18 = tmp32;
  ref = obj8.useRef(null);
  const tmp2Result15 = tmp2(11631);
  FALLBACK_BADGE_COLOR = tmp2Result15.useBadgeColor(badgeUnlockArt.rasterUrl);
  if (FALLBACK_BADGE_COLOR == null) {
    FALLBACK_BADGE_COLOR = tmp2(11631).FALLBACK_BADGE_COLOR;
  }
  const items5 = [FALLBACK_BADGE_COLOR];
  const memo = obj8.useMemo(() => ({ fill: FALLBACK_BADGE_COLOR }), items5);
  [tmp44, c21] = previousTierKey(obj8.useState(false), 2);
  const items6 = [stateFromStores];
  previousTierKey(obj8.useState(false), 2);
  const effect = obj8.useEffect(() => {
    const tmp = stateFromStores;
    if (!tmp) {
      const current = ref.current;
      if (current != null) {
        current.pause();
      }
    }
  }, items6);
  closure_22 = obj8.useCallback(() => {
    _undefined3(true);
    const current = ref.current;
    if (current != null) {
      current.play();
    }
  }, []);
  const items7 = [tmp32];
  const effect1 = obj8.useEffect(() => {
    let tmp24;
    let tmp25;
    let tmp26;
    let tmp62;
    let tmp63;
    let tmp64;
    const tmp = closure_18;
    if (tmp) {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const obj = BadgeUtils;
      announce(obj.getBadgeUnlockLabel(badge, previousTierKey), "polite");
      const obj2 = { actionName: "badge_unlock_viewed", badge, displayedUserId: importDefault, isSociallyNavigated: false, source: dependencyMap, surface: "badge_details" };
      trackBadgeDirectoryActionDefault(obj2);
      const tmp11 = stateFromStores;
      if (tmp11) {
        const result = sharedValue3.set(1);
        const result1 = sharedValue21.set(0);
        const obj3 = { duration, easing };
        const set9 = react.set;
        const tmp2Result = timing_timing;
        set9(tmp2Result.withTiming(1, obj3, "animate-always"));
        const result2 = View.set(1);
      } else {
        set = sharedValue.set;
        const withDelay = tmp2(1652).withDelay;
        _mod1652;
        const withSequence = _mod1652.withSequence;
        const tmp2Result25 = _mod1652;
        const Never = tmp2(1652).ReduceMotion.Never;
        const obj4 = { duration: num, easing };
        const tmp2Result26 = timing_timing;
        const withTimingResult = tmp2Result26.withTiming(1.1, obj4, "animate-always");
        const items = [closure_23, , ];
        const withTiming = timing_timing.withTiming;
        const obj5 = { duration: duration2, easing };
        const tmp2Result27 = timing_timing;
        items[1] = _mod1705.scheduleOnRN;
        items[2] = closure_22;
        let c0;
        let c1;
        [tmp24, tmp25, tmp26] = items;
        class BadgeUnlockAnimationTsx5 {
          constructor(arg0) {
            if (true === arg0) {
              tmp = closure_0;
              tmp2 = closure_1;
              tmp3 = closure_0(closure_1);
            }
            return;
          }
        }
        const items1 = [tmp25, tmp26];
        BadgeUnlockAnimationTsx5.__closure = items1;
        BadgeUnlockAnimationTsx5.__workletHash = 11528024484669;
        BadgeUnlockAnimationTsx5.__initData = tmp24;
        const obj6 = { duration: 150, easing };
        const withTimingResult1 = withTiming(1.15, obj5, "animate-always", BadgeUnlockAnimationTsx5);
        const tmp2Result28 = timing_timing;
        const obj7 = { duration: 350, easing };
        const withTimingResult2 = tmp2Result28.withTiming(0.75, obj6, "animate-always");
        const tmp2Result29 = timing_timing;
        const withSequenceResult = withSequence(Never, withTimingResult, withTimingResult1, withTimingResult2, tmp2Result29.withTiming(1, obj7, "animate-always"));
        const result3 = set(withDelay(tmp14, withSequenceResult, tmp2(1652).ReduceMotion.Never));
        const tmp38 = closure_8;
        if (tmp38) {
          set2 = sharedValue2.set;
          const withDelay2 = tmp2(1652).withDelay;
          _mod1652;
          const obj8 = { duration: 750, easing: easing4 };
          const tmp2Result31 = timing_timing;
          const withTimingResult3 = tmp2Result31.withTiming(1, obj8, "animate-always");
          set2(withDelay2(c16, withTimingResult3, _mod1652.ReduceMotion.Never));
          set3 = sharedValue1.set;
          const withDelay3 = tmp2(1652).withDelay;
          _mod1652;
          const obj9 = { duration: 250, easing: easing2 };
          const tmp2Result33 = timing_timing;
          const withTimingResult4 = tmp2Result33.withTiming(0, obj9, "animate-always");
          set3(withDelay3(c16 + num, withTimingResult4, _mod1652.ReduceMotion.Never));
        }
        const set4 = sharedValue3.set;
        const withDelay4 = tmp2(1652).withDelay;
        _mod1652;
        const obj10 = { duration: 500, easing: easing3 };
        const sum = tmp14 + tmp16;
        const tmp2Result35 = timing_timing;
        const withTimingResult5 = tmp2Result35.withTiming(1, obj10, "animate-always");
        set4(withDelay4(sum, withTimingResult5, _mod1652.ReduceMotion.Never));
        const set5 = sharedValue21.set;
        const withDelay5 = tmp2(1652).withDelay;
        _mod1652;
        const items2 = [closure_24, , ];
        const withTiming2 = timing_timing.withTiming;
        const obj11 = { duration: 400, easing: easing4 };
        const tmp2Result37 = timing_timing;
        items2[1] = _mod1705.scheduleOnRN;
        items2[2] = duration2;
        c0 = undefined;
        c1 = undefined;
        [tmp62, tmp63, tmp64] = items2;
        class BadgeUnlockAnimationTsx6 {
          constructor(arg0) {
            if (true === arg0) {
              tmp = closure_0;
              tmp2 = closure_1;
              tmp3 = closure_0(closure_1, true);
            }
            return;
          }
        }
        const items3 = [tmp63, tmp64];
        BadgeUnlockAnimationTsx6.__closure = items3;
        BadgeUnlockAnimationTsx6.__workletHash = 5104272508772;
        BadgeUnlockAnimationTsx6.__initData = tmp62;
        const sum1 = sum + 750;
        const withTiming2Result = withTiming2(0, obj11, "animate-always", BadgeUnlockAnimationTsx6);
        set5(withDelay5(sum1, withTiming2Result, _mod1652.ReduceMotion.Never));
        const set6 = react.set;
        const withDelay6 = tmp2(1652).withDelay;
        _mod1652;
        const obj12 = { duration, easing };
        const sum2 = sum + tmp20;
        const tmp2Result39 = timing_timing;
        const withTimingResult6 = tmp2Result39.withTiming(1, obj12, "animate-always");
        set6(withDelay6(sum2, withTimingResult6, _mod1652.ReduceMotion.Never));
        const set7 = AccessibilityStore.set;
        const withSequence2 = tmp2(1652).withSequence;
        _mod1652;
        const Never2 = tmp2(1652).ReduceMotion.Never;
        const withDelay7 = tmp2(1652).withDelay;
        _mod1652;
        const obj13 = { duration, easing };
        const tmp2Result42 = timing_timing;
        const withTimingResult7 = tmp2Result42.withTiming(1, obj13, "animate-always");
        const withDelay7Result = withDelay7(c16, withTimingResult7, _mod1652.ReduceMotion.Never);
        const withDelay8 = tmp2(1652).withDelay;
        _mod1652;
        const obj14 = { duration, easing };
        const tmp2Result44 = timing_timing;
        const withTimingResult8 = tmp2Result44.withTiming(0, obj14, "animate-always");
        set7(withSequence2(Never2, withDelay7Result, withDelay8(num + duration2 - 500, withTimingResult8, _mod1652.ReduceMotion.Never)));
        const set8 = View.set;
        const withDelay9 = tmp2(1652).withDelay;
        _mod1652;
        const obj15 = { duration, easing: easing5 };
        const tmp2Result46 = timing_timing;
        const withTimingResult9 = tmp2Result46.withTiming(1, obj15, "animate-always");
        set8(withDelay9(sum2, withTimingResult9, _mod1652.ReduceMotion.Never));
      }
    }
  }, items7);
  const items8 = [closure_25, sharedValue];
  c0 = undefined;
  [tmp47, tmp48] = items8;
  const tmp2Result16 = tmp2(1652);
  class BadgeUnlockAnimationTsx7 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: _undefined.get() }];
      ({ scale: _undefined.get() });
      return obj;
    }
  }
  const items9 = [tmp48];
  BadgeUnlockAnimationTsx7.__closure = items9;
  BadgeUnlockAnimationTsx7.__workletHash = 15667029482838;
  BadgeUnlockAnimationTsx7.__initData = tmp47;
  const animatedStyle = tmp2Result16.useAnimatedStyle(BadgeUnlockAnimationTsx7);
  const items10 = [closure_26, sharedValue1];
  c0 = undefined;
  [tmp50, tmp51] = items10;
  const tmp2Result17 = tmp2(1652);
  class BadgeUnlockAnimationTsx8 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: _undefined.get() }];
      ({ scale: _undefined.get() });
      return obj;
    }
  }
  const items11 = [tmp51];
  BadgeUnlockAnimationTsx8.__closure = items11;
  BadgeUnlockAnimationTsx8.__workletHash = 4734288509049;
  BadgeUnlockAnimationTsx8.__initData = tmp50;
  const animatedStyle1 = tmp2Result17.useAnimatedStyle(BadgeUnlockAnimationTsx8);
  const items12 = [closure_27, sharedValue3];
  c0 = undefined;
  [tmp53, tmp54] = items12;
  const tmp2Result18 = tmp2(1652);
  class BadgeUnlockAnimationTsx9 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: _undefined.get() }];
      ({ scale: _undefined.get() });
      return obj;
    }
  }
  const items13 = [tmp54];
  BadgeUnlockAnimationTsx9.__closure = items13;
  BadgeUnlockAnimationTsx9.__workletHash = 10763015167128;
  BadgeUnlockAnimationTsx9.__initData = tmp53;
  let obj5 = { style: tmp.artSize, pointerEvents: "none", "aria-hidden": true, children: items15 };
  let tmp59Result = !stateFromStores;
  const animatedStyle2 = tmp2Result18.useAnimatedStyle(BadgeUnlockAnimationTsx9);
  if (!stateFromStores) {
    const items14 = [tmp.pulse, ];
    const tmp60 = !tmp44 && tmp.pulseHidden;
    let obj6 = { style: items14, children: tmp59(tmp2(5263).BadgeUnlockPulseRive, obj7) };
    items14[1] = tmp60;
    obj7 = { ref, artboard: "Mobile", dataBinding: memo };
    tmp59Result = tmp59(tmp57, obj6);
  }
  items15 = [tmp59Result, ];
  let obj9 = { style: items16, children: items18 };
  items16 = [tmp.artSize, animatedStyle];
  View = tmp27(1652).View;
  if (tmp61Result) {
    let obj10 = { style: items17, children: tmp61(tmp62, obj11) };
    items17 = [tmp.layer, animatedStyle1];
    obj11 = { artUrl: null, rasterUrl: null, fillOpacity: sharedValue2, ambientUrl: animatedUrl, hasFill: !tmp20 && !stateFromStores, isShown: tmp26, onLoad: callback };
    ({ artUrl: obj18.artUrl, rasterUrl: obj18.rasterUrl } = badgeUnlockArt1);
    animatedUrl = undefined;
    const View2 = tmp27(1652).View;
    tmp62 = FALLBACK_BADGE_COLOR;
    if (tmp9) {
      animatedUrl = badgeUnlockArt1.animatedUrl;
    }
    tmp61Result = tmp61(View2, obj10);
  }
  items18 = [tmp61Result, ];
  const tmp64 = stateFromStores;
  let obj12 = { style: items19, children: tmp64(tmp65, obj13) };
  items19 = [tmp.layer, animatedStyle2];
  obj13 = { artUrl: badgeUnlockArt.artUrl, rasterUrl: badgeUnlockArt.rasterUrl, fillOpacity: sharedValue21, ambientUrl: animatedUrl1, hasFill: !tmp20 && !stateFromStores, isShown: tmp26, onLoad: callback };
  animatedUrl1 = undefined;
  const View3 = tmp27(1652).View;
  tmp65 = FALLBACK_BADGE_COLOR;
  if (tmp9) {
    animatedUrl1 = badgeUnlockArt.animatedUrl;
  }
  items18[1] = tmp64(View3, obj12);
  items15[1] = closure_8(View, obj9);
  return closure_8(View, obj5);
};
