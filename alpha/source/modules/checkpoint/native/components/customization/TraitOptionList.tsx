// Module ID: 13645
// Function ID: 13646
// Name: TraitOptionList
// Dependencies: [19, 17, 5010, 6061, 21, 575, 5009, 8023, 6429, 504, 5269, 5090, 5607, 1492, 5249, 5255, 13646, 2]
// Exports: default

// Module 13645 (TraitOptionList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6429 */;
import inlineStyles from "inlineStyles" /* 8023 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;
let importDefault, set;

let TRAIT_OPTION_HEIGHT;
let c10;
let c9;
let metroRequire;
function SelectedWindow() {
  let Polygon;
  let obj;
  size = { width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT, style: closure_13().selectorOverlay, pointerEvents: "none", children: React4(Polygon, obj) };
  closure_13();
  obj = { points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS, fill: "transparent", stroke: metroRequire, strokeWidth: CheckpointCustomizationUtils.TRAIT_OPTION_STROKE_WIDTH };
  const tmp2 = inlineStylesDefault;
  Polygon = inlineStyles.Polygon;
  return React4(tmp2, size);
}
const View = react_native.View;
({ CHECKPOINT_PRIMARY: metroRequire, TRAIT_OPTION_HEIGHT } = CheckpointConstants);
const TRAIT_OPTION_WIDTH = CheckpointConstants.TRAIT_OPTION_WIDTH;
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
let closure_12 = TRAIT_OPTION_WIDTH + PX_12;
let obj = { assetList: { paddingHorizontal: PX_16 }, radioGroup: { flexDirection: "row", gap: PX_12 }, selectorOverlay: { position: "absolute", left: PX_16, top: 0, width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT } };
let closure_13 = createStyles.createStyles(obj);
const __initData = { code: "function TraitOptionListTsx1(){const{introIndex}=this.__closure;return introIndex.get();}" };
const __initData2 = { code: "function TraitOptionListTsx2(index,previousIndex){const{scrollTo,scrollViewRef,ASSET_ITEM_STEP}=this.__closure;if(previousIndex!=null&&index!==previousIndex)scrollTo(scrollViewRef,index*ASSET_ITEM_STEP,0,false);}" };
let closure_17 = { code: "function TraitOptionListTsx3(finished){const{runOnJS,onIntroStep,target}=this.__closure;if(finished===true)runOnJS(onIntroStep)(target);}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionList.tsx");

export default function TraitOptionList(options) {
  let disabled;
  let hideCornerFlag;
  let introStartIndex;
  let items3;
  let obj7;
  let tmp19;
  let tmp2Result4;
  options = options.options;
  ({ selectedOptionId: importDefault, disabled } = options);
  ({ hideRarity: react, introStartIndex } = options);
  const onIntroStep = options.onIntroStep;
  const onSelectOption = options.onSelectOption;
  let sharedValue;
  function cancelScrollSettle() {
    if (null != closure_11.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_11.current);
      closure_11.current = null;
    }
  }
  const customizationOption = options.customizationOption;
  let tmp = cancelScrollSettle();
  let tmp2 = options;
  let tmp3 = disabled;
  let obj = options(disabled[9]);
  let items = [onIntroStep];
  let closure_7 = obj.useStateFromStores(items, () => onIntroStep.useReducedMotion);
  let obj2 = options(disabled[10]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = options(disabled[11]);
  const animatedRef = obj3.useAnimatedRef();
  const ref = react.useRef(false);
  let closure_11 = react.useRef(null);
  let bound = Math.max(options.findIndex((optionId) => optionId.optionId === importDefault), 0);
  let tmp7 = importDefault;
  let tmp8 = require("react");
  if (introStartIndex > 0) {
    bound = introStartIndex;
  }
  const tmp8Result = tmp8(bound);
  const bound1 = Math.max(closure_11, tmp7(tmp3[13])().width - closure_11 - isScreenReaderEnabled);
  const tmp2Result = tmp2(tmp3[11]);
  sharedValue = tmp2Result.useSharedValue(introStartIndex);
  let fn = function w() {
    return sharedValue.get();
  };
  fn.__closure = { introIndex: sharedValue };
  fn.__workletHash = 13442585118467;
  fn.__initData = __initData;
  const tmp2Result3 = tmp2(tmp3[11]);
  class P {
    constructor(arg0, arg1) {
      const tmp = null != arg1 && arg0 !== arg1;
      if (tmp) {
        const obj = ReanimatedRexport;
        obj.scrollTo(animatedRef, arg0 * closure_12, 0, false);
      }
    }
  }
  P.__closure = { scrollTo: tmp2(tmp3[11]).scrollTo, scrollViewRef: animatedRef, ASSET_ITEM_STEP: sharedValue };
  P.__workletHash = 9917910763820;
  P.__initData = __initData2;
  let tmp12 = sharedValue;
  ({ scrollTo: tmp2(tmp3[11]).scrollTo, scrollViewRef: animatedRef, ASSET_ITEM_STEP: sharedValue });
  const animatedReaction = tmp2Result3.useAnimatedReaction(fn, P);
  const items1 = [sharedValue, introStartIndex, onIntroStep];
  const effect = obj4.useEffect(() => {
    let tmp2;
    if (0 !== introStartIndex) {
      let tmp3 = globalThis;
      const _Array = Array;
      let obj = { length: tmp2 };
      const arr = Array.from(obj, (arg0, arg1) => {
        let Easing;
        const diff = closure_4 - arg1 - 1;
        let closure_0 = diff;
        const withDelay = options(disabled[11]).withDelay;
        const tmp2 = options(disabled[11]);
        const tmp3 = options(disabled[14]);
        let obj = { duration: 100, easing: Easing.out(options(disabled[11]).Easing.cubic) };
        const withTiming = tmp3.withTiming;
        Easing = options(disabled[11]).Easing;
        const fn = function o(arg0) {
          if (true === arg0) {
            const obj = options(disabled[11]);
            obj.runOnJS(onIntroStep)(closure_0);
          }
        };
        fn.__closure = { runOnJS: options(disabled[11]).runOnJS, onIntroStep, target: diff };
        fn.__workletHash = 1554090468151;
        fn.__initData = __initData;
        ({ runOnJS: options(disabled[11]).runOnJS, onIntroStep, target: diff });
        return withDelay(250, withTiming(diff, obj, "respect-motion-settings", fn));
      });
      set = sharedValue.set;
      const tmp8 = ReanimatedRexport;
      const withSequence = tmp8.withSequence;
      const items = [];
      HermesBuiltin.arraySpread(items, arr, 0);
      const result = set(HermesBuiltin.apply(withSequence, items, tmp8));
      return () => {
        const obj = options(disabled[11]);
        return obj.cancelAnimation(sharedValue);
      };
    }
  }, items1);
  const items2 = [disabled, isScreenReaderEnabled];
  const effect1 = obj4.useEffect(() => cancelScrollSettle, items2);
  const obj6 = {
    ref: animatedRef,
    horizontal: true,
    contentOffset: { x: tmp8Result * sharedValue, y: 0 },
    scrollEnabled: !disabled,
    showsHorizontalScrollIndicator: false,
    decelerationRate: "fast",
    snapToInterval: tmp19,
    onScrollBeginDrag: function handleScrollBeginDrag() {
      const tmp = isScreenReaderEnabled;
      if (!tmp) {
        const obj = ReanimatedRexport;
        obj.cancelAnimation(sharedValue);
        if (null != closure_11.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_11.current);
          closure_11.current = null;
        }
        ref.current = true;
      }
    },
    onScrollEndDrag: function scheduleScrollSettle(nativeEvent) {
      let closure_0;
      const x = nativeEvent.nativeEvent.contentOffset.x;
      const tmp = closure_11;
      if (null != closure_11.current) {
        let tmp2 = globalThis;
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
        tmp.current = null;
      }
      tmp.current = setTimeout(() => {
        closure_11.current = null;
        ref.current = false;
        const tmp2 = disabled;
        if (!tmp2) {
          const tmp3 = isScreenReaderEnabled;
          if (!tmp3) {
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const tmp7 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp / sharedValue), options.length - 1))];
            if (null != tmp7) {
              if (tmp7.optionId !== importDefault) {
                onSelectOption(tmp7.trait, tmp7.optionId);
                const obj = x(closure_1_2[15]);
                const result = obj.triggerHapticFeedback(x(closure_1_2[15]).HapticFeedbackTypes.IMPACT_LIGHT);
              }
            }
          }
        }
      }, 100);
    },
    onMomentumScrollBegin: cancelScrollSettle,
    onMomentumScrollEnd: function handleMomentumScrollEnd(arg0) {
      if (null != closure_11.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_11.current);
        closure_11.current = null;
      }
      if (ref.current) {
        tmp4.current = false;
        const tmp7 = disabled;
        if (!tmp7) {
          const tmp8 = isScreenReaderEnabled;
          if (!tmp8) {
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const tmp12 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp6 / closure_12), options.length - 1))];
            if (null != tmp12) {
              if (tmp12.optionId !== importDefault) {
                onSelectOption(tmp12.trait, tmp12.optionId);
                const obj = HapticUtils;
                const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
              }
            }
          }
        }
      }
    },
    contentContainerStyle: items3,
    children: animatedRef(introStartIndex, obj7)
  };
  tmp19 = undefined;
  const ScrollView = tmp7(tmp3[11]).ScrollView;
  const tmp16 = ref;
  if (!isScreenReaderEnabled) {
    tmp19 = tmp12;
  }
  items3 = [tmp.assetList, { paddingRight: bound1 }];
  obj7 = {
    style: tmp.radioGroup,
    accessibilityRole: "radiogroup",
    accessibilityLabel: tmp2Result4.getCustomizationOptionName(customizationOption),
    children: options.map((traitOption, index) => {
      let obj2;
      importDefault = index;
      let obj = {
        traitOption,
        accessibilityLabel: obj2.getAssetAccessibilityLabel(traitOption, hideCornerFlag),
        isSelected: traitOption.optionId === importDefault,
        showSelectedBorder: isScreenReaderEnabled && traitOption.optionId === tmp4,
        hideCornerFlag,
        disabled,
        onPress() {
          const obj = ReanimatedRexport;
          obj.cancelAnimation(sharedValue);
          const tmp2 = index;
          if (null != ref.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref.current);
            ref.current = null;
          }
          closure_10.current = false;
          if (traitOption.optionId !== importDefault) {
            onSelectOption(traitOption.trait, traitOption.optionId);
            const obj2 = traitOption(disabled[15]);
            const result = obj2.triggerHapticFeedback(traitOption(disabled[15]).HapticFeedbackTypes.IMPACT_LIGHT);
          }
          const tmp14 = isScreenReaderEnabled;
          if (!tmp14) {
            const current = animatedRef.current;
            if (current != null) {
              const obj3 = { x: tmp2 * closure_12, animated: !closure_7 };
              current.scrollTo(obj3);
            }
          }
        }
      };
      let tmp2 = require("TraitOptionItem");
      obj2 = options(disabled[8]);
      return animatedRef(tmp2, obj, traitOption.optionId);
    })
  };
  tmp2Result4 = tmp2(tmp3[8]);
  const children = [animatedRef(ScrollView, obj6), ];
  children[1] = !isScreenReaderEnabled && tmp18(SelectedWindow, {});
  const tmp18Result = !isScreenReaderEnabled && tmp18(SelectedWindow, {});
  return tmp16(introStartIndex, { children });
};
export const TRAIT_OPTION_SPACING = PX_12;
export const CONTENT_INSET = PX_16;
