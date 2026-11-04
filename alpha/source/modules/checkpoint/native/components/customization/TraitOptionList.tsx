// Module ID: 13910
// Function ID: 13911
// Name: TraitOptionList
// Dependencies: [32, 19, 17, 5142, 6201, 21, 575, 5141, 13911, 8171, 6569, 504, 5398, 1652, 5749, 1493, 5378, 1705, 5384, 2]
// Exports: default

// Module 13910 (TraitOptionList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import HapticUtils from "HapticUtils" /* 5384 */;
import CheckpointConstants from "CheckpointConstants" /* 6201 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6569 */;
import inlineStyles from "inlineStyles" /* 8171 */;
import TraitOptionItem from "TraitOptionItem" /* 13911 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;
let set;

let c9;
let metroImportAll;
function SelectedWindow(size) {
  let Polygon;
  let height;
  let obj;
  let width;
  size = size.size;
  const tmp = closure_12();
  ({ width, height } = TraitOptionItem.TRAIT_OPTION_SIZE_TO_DIMENSIONS[size]);
  const size1 = { width, height, style: tmp.selectorOverlay, pointerEvents: "none", children: metroImportAll(Polygon, obj) };
  obj = { points: TraitOptionItem.TRAIT_OPTION_SIZE_TO_SHAPE_POINTS[size], fill: "transparent", stroke: CHECKPOINT_PRIMARY, strokeWidth: CheckpointCustomizationUtils.TRAIT_OPTION_STROKE_WIDTH };
  const tmp2 = inlineStylesDefault;
  Polygon = inlineStyles.Polygon;
  return metroImportAll(tmp2, size1);
}
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
let obj = { assetList: { paddingHorizontal: PX_16 }, radioGroup: { flexDirection: "row", gap: PX_12 }, selectorOverlay: { position: "absolute", left: PX_16, top: 0 } };
let closure_12 = createStyles.createStyles(obj);
let closure_14 = { code: "(function TraitOptionListTsx1(){let[introIndex]=this.__closure;return introIndex.get();})" };
let closure_15 = { code: "(function TraitOptionListTsx2(index,previousIndex){let[scrollTo,scrollViewRef,optionStep]=this.__closure;if(previousIndex!=null&&index!==previousIndex)scrollTo(scrollViewRef,index*optionStep,0,false);})" };
let closure_16 = { code: "(function TraitOptionListTsx3(finished){let[scheduleOnRN,onIntroStep,target]=this.__closure;if(finished===true)scheduleOnRN(onIntroStep,target);})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionList.tsx");

export default function TraitOptionList(size) {
  let _undefined;
  let c13;
  let disabled;
  let hideCornerFlag;
  let introStartIndex;
  let items7;
  let obj6;
  let tmp11;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp28;
  let tmp2Result4;
  size = size.size;
  const options = size.options;
  ({ selectedOptionId: dependencyMap, disabled } = size);
  ({ hideRarity: react, introStartIndex } = size);
  const onIntroStep = size.onIntroStep;
  const onSelectOption = size.onSelectOption;
  closure_12 = undefined;
  c13 = undefined;
  let c14;
  let sharedValue;
  function cancelScrollSettle() {
    if (null != closure_12.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_12.current);
      closure_12.current = null;
    }
  }
  const customizationOption = size.customizationOption;
  let tmp = closure_12();
  let tmp2 = size;
  let tmp3 = dependencyMap;
  let obj = size(504);
  let items = [onIntroStep];
  let closure_8 = obj.useStateFromStores(items, () => onIntroStep.useReducedMotion);
  let obj2 = size(5398);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = size(1652);
  const animatedRef = obj3.useAnimatedRef();
  const ref = react.useRef(false);
  closure_12 = react.useRef(null);
  let bound = Math.max(options.findIndex((optionId) => optionId.optionId === dependencyMap), 0);
  let tmp7 = options;
  let tmp8 = options(5749);
  if (introStartIndex > 0) {
    bound = introStartIndex;
  }
  const tmp8Result = tmp8(bound);
  [tmp11, c13] = disabled(obj4.useState(tmp7(1493)().width), 2);
  const tmp10 = disabled(obj4.useState(tmp7(1493)().width), 2);
  const width = tmp2(13911).TRAIT_OPTION_SIZE_TO_DIMENSIONS[size].width;
  const sum = width + animatedRef;
  c14 = sum;
  const bound1 = Math.max(ref, tmp11 - ref - width);
  const tmp2Result = tmp2(1652);
  sharedValue = tmp2Result.useSharedValue(introStartIndex);
  let items1 = [c14, sharedValue];
  let c0;
  [tmp16, tmp17] = items1;
  const tmp2Result3 = tmp2(1652);
  class TraitOptionListTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items2 = [tmp17];
  TraitOptionListTsx1.__closure = items2;
  TraitOptionListTsx1.__workletHash = 6181032318714;
  TraitOptionListTsx1.__initData = tmp16;
  const items3 = [sharedValue, , , ];
  const useAnimatedReaction = tmp2Result3.useAnimatedReaction;
  items3[1] = tmp2(1652).scrollTo;
  items3[2] = animatedRef;
  items3[3] = sum;
  c0 = undefined;
  let c1;
  let c2;
  [tmp18, tmp19, tmp20, tmp21] = items3;
  class TraitOptionListTsx2 {
    constructor(arg0, arg1) {
      const tmp = null != arg1 && arg0 !== arg1;
      if (tmp) {
        _undefined(c1, arg0 * c2, 0, false);
      }
    }
  }
  const items4 = [tmp19, tmp20, tmp21];
  TraitOptionListTsx2.__closure = items4;
  TraitOptionListTsx2.__workletHash = 10161312388757;
  TraitOptionListTsx2.__initData = tmp18;
  const animatedReaction = useAnimatedReaction(TraitOptionListTsx1, TraitOptionListTsx2);
  const items5 = [sharedValue, introStartIndex, onIntroStep];
  const effect = obj4.useEffect(() => {
    let tmp2;
    if (0 !== introStartIndex) {
      let tmp3 = globalThis;
      const _Array = Array;
      let obj = { length: tmp2 };
      const tmp5 = sharedValue;
      const tmp6 = require;
      const tmp7 = dependencyMap;
      const arr = Array.from(obj, (arg0, arg1) => {
        let Easing;
        let tmp4;
        let tmp5;
        let tmp6;
        let tmp7;
        const diff = introStartIndex - arg1 - 1;
        const withDelay = size(dependencyMap[13]).withDelay;
        const tmp2 = size(dependencyMap[13]);
        const tmp3 = size(dependencyMap[16]);
        const withTiming = tmp3.withTiming;
        const obj = { duration: 100, easing: Easing.out(size(dependencyMap[13]).Easing.cubic) };
        Easing = size(dependencyMap[13]).Easing;
        const items = [cancelScrollSettle, size(dependencyMap[17]).scheduleOnRN, onIntroStep, diff];
        let c0;
        let c1;
        let c2;
        [tmp4, tmp5, tmp6, tmp7] = items;
        class TraitOptionListTsx3 {
          constructor(arg0) {
            if (true === arg0) {
              tmp = closure_0;
              tmp2 = closure_1;
              tmp3 = closure_2;
              tmp4 = closure_0(closure_1, closure_2);
            }
            return;
          }
        }
        const items1 = [tmp5, tmp6, tmp7];
        TraitOptionListTsx3.__closure = items1;
        TraitOptionListTsx3.__workletHash = 14744162111459;
        TraitOptionListTsx3.__initData = tmp4;
        return withDelay(250, withTiming(diff, obj, "respect-motion-settings", TraitOptionListTsx3));
      });
      set = sharedValue.set;
      const tmp8 = _mod1652;
      const withSequence = tmp8.withSequence;
      let items = [];
      HermesBuiltin.arraySpread(items, arr, 0);
      const result = set(HermesBuiltin.apply(withSequence, items, tmp8));
      return () => {
        const obj = size(dependencyMap[13]);
        return obj.cancelAnimation(sharedValue);
      };
    }
  }, items5);
  const items6 = [disabled, isScreenReaderEnabled];
  const effect1 = obj4.useEffect(() => cancelScrollSettle, items6);
  const obj5 = {
    ref: animatedRef,
    horizontal: true,
    contentOffset: { x: tmp8Result * sum, y: 0 },
    scrollEnabled: !disabled,
    showsHorizontalScrollIndicator: false,
    decelerationRate: "fast",
    snapToInterval: tmp28,
    onScrollBeginDrag: function handleScrollBeginDrag() {
      const tmp = isScreenReaderEnabled;
      if (!tmp) {
        const obj = _mod1652;
        obj.cancelAnimation(sharedValue);
        if (null != closure_12.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_12.current);
          closure_12.current = null;
        }
        ref.current = true;
      }
    },
    onScrollEndDrag: function scheduleScrollSettle(nativeEvent) {
      let closure_0;
      const x = nativeEvent.nativeEvent.contentOffset.x;
      const tmp = closure_12;
      if (null != closure_12.current) {
        let tmp2 = globalThis;
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
        tmp.current = null;
      }
      tmp.current = setTimeout(() => {
        closure_12.current = null;
        ref.current = false;
        const tmp2 = disabled;
        if (!tmp2) {
          const tmp3 = isScreenReaderEnabled;
          if (!tmp3) {
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const tmp7 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp / c14), options.length - 1))];
            if (null != tmp7) {
              if (tmp7.optionId !== dependencyMap) {
                onSelectOption(tmp7.trait, tmp7.optionId);
                const obj = x(closure_1_2[18]);
                const result = obj.triggerHapticFeedback(x(closure_1_2[18]).HapticFeedbackTypes.IMPACT_LIGHT);
              }
            }
          }
        }
      }, 100);
    },
    onMomentumScrollBegin: cancelScrollSettle,
    onMomentumScrollEnd: function handleMomentumScrollEnd(arg0) {
      if (null != closure_12.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_12.current);
        closure_12.current = null;
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
            const tmp12 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp6 / c14), options.length - 1))];
            if (null != tmp12) {
              if (tmp12.optionId !== dependencyMap) {
                onSelectOption(tmp12.trait, tmp12.optionId);
                const obj = HapticUtils;
                const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
              }
            }
          }
        }
      }
    },
    onLayout: function handleLayout(nativeEvent) {
      _undefined(nativeEvent.nativeEvent.layout.width);
    },
    contentContainerStyle: items7,
    children: closure_8(introStartIndex, obj6)
  };
  tmp28 = undefined;
  const ScrollView = tmp7(1652).ScrollView;
  if (!isScreenReaderEnabled) {
    tmp28 = sum;
  }
  items7 = [tmp.assetList, { paddingRight: bound1 }];
  obj6 = {
    style: tmp.radioGroup,
    accessibilityRole: "radiogroup",
    accessibilityLabel: tmp2Result4.getCustomizationOptionName(customizationOption),
    children: options.map((traitOption, index) => {
      let obj2;
      size = traitOption;
      let closure_1 = index;
      let obj = {
        size,
        traitOption,
        accessibilityLabel: obj2.getAssetAccessibilityLabel(traitOption, hideCornerFlag),
        isSelected: traitOption.optionId === dependencyMap,
        showSelectedBorder: isScreenReaderEnabled && traitOption.optionId === tmp4,
        hideCornerFlag,
        disabled,
        onPress() {
          const obj = _mod1652;
          obj.cancelAnimation(sharedValue);
          const tmp2 = index;
          if (null != ref.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref.current);
            ref.current = null;
          }
          closure_11.current = false;
          if (traitOption.optionId !== dependencyMap) {
            onSelectOption(traitOption.trait, traitOption.optionId);
            const obj2 = traitOption(closure_1_2[18]);
            const result = obj2.triggerHapticFeedback(traitOption(closure_1_2[18]).HapticFeedbackTypes.IMPACT_LIGHT);
          }
          const tmp14 = isScreenReaderEnabled;
          if (!tmp14) {
            const current = animatedRef.current;
            if (current != null) {
              const obj3 = { x: tmp2 * c14, animated: !closure_8 };
              current.scrollTo(obj3);
            }
          }
        }
      };
      let tmp2 = options(dependencyMap[8]);
      obj2 = size(dependencyMap[10]);
      return closure_8(tmp2, obj, traitOption.optionId);
    })
  };
  tmp2Result4 = tmp2(6569);
  const children = [closure_8(ScrollView, obj5), ];
  let tmp27Result = !isScreenReaderEnabled;
  if (tmp27Result) {
    const obj7 = { size };
    tmp27Result = tmp27(c13, obj7);
  }
  children[1] = tmp27Result;
  return isScreenReaderEnabled(introStartIndex, { children });
};
export const TRAIT_OPTION_SPACING = PX_12;
export const CONTENT_INSET = PX_16;
