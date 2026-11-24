// Module ID: 12703
// Function ID: 12704
// Name: TraitOptionList
// Dependencies: [32, 19, 17, 4918, 6270, 21, 575, 4917, 12704, 7813, 6639, 504, 12457, 12681, 5147, 5496, 1494, 5133, 2]
// Exports: default

// Module 12703 (TraitOptionList)
import nativeDefault from "native" /* 575 */;
import HapticUtils from "HapticUtils" /* 5133 */;
import CheckpointConstants from "CheckpointConstants" /* 6270 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6639 */;
import inlineStyles from "inlineStyles" /* 7813 */;
import TraitOptionItem from "TraitOptionItem" /* 12704 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4918 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4917 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
function SelectedWindow(size) {
  let Polygon;
  let height;
  let obj;
  let width;
  size = size.size;
  const tmp = closure_13();
  ({ width, height } = TraitOptionItem.TRAIT_OPTION_SIZE_TO_DIMENSIONS[size]);
  const size1 = { width, height, style: tmp.selectorOverlay, pointerEvents: "none", children: React4(Polygon, obj) };
  obj = { points: TraitOptionItem.TRAIT_OPTION_SIZE_TO_SHAPE_POINTS[size], fill: "transparent", stroke: CHECKPOINT_PRIMARY, strokeWidth: CheckpointCustomizationUtils.TRAIT_OPTION_STROKE_WIDTH };
  const tmp2 = inlineStylesDefault;
  Polygon = inlineStyles.Polygon;
  return React4(tmp2, size1);
}
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
let obj = { assetList: { paddingHorizontal: PX_16 }, radioGroup: { flexDirection: "row", gap: PX_12 }, selectorOverlay: { position: "absolute", left: PX_16, top: 0 } };
let closure_13 = createStyles.createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionList.tsx");

export default function TraitOptionList(size) {
  let _undefined;
  let c13;
  let closure_5;
  let disabled;
  let items2;
  let items3;
  let obj5;
  let tmp10;
  let tmp19;
  let tmp2Result;
  size = size.size;
  const options = size.options;
  ({ selectedOptionId: dependencyMap, disabled } = size);
  ({ hideRarity: react, onSelectOption: closure_5 } = size);
  let closure_7;
  c13 = undefined;
  function handleScrollSettled(arg0) {
    const tmp = disabled;
    if (!tmp) {
      const tmp2 = isScreenReaderEnabled;
      if (!tmp2) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const tmp7 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, arg0 / c15), options.length - 1))];
        if (null != tmp7) {
          if (tmp7.optionId !== dependencyMap) {
            closure_5(tmp7.trait, tmp7.optionId);
            const obj = HapticUtils;
            const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
            closure_7();
          }
        }
      }
    }
  }
  function handlePressOption(optionId, arg1) {
    if (null != closure_11.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_11.current);
      closure_11.current = null;
    }
    if (null != closure_18.current) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(closure_18.current);
      closure_18.current = null;
    }
    closure_10.current = false;
    ref5.current = true;
    if (optionId.optionId !== dependencyMap) {
      closure_5(optionId.trait, optionId.optionId);
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
      closure_7();
    }
    const tmp14 = isScreenReaderEnabled;
    if (!tmp14) {
      const current = ref.current;
      if (current != null) {
        const obj2 = { x: arg1 * c15, animated: !closure_6 };
        current.scrollTo(obj2);
      }
    }
  }
  const customizationOption = size.customizationOption;
  let tmp = c13();
  let tmp2 = size;
  let obj = size(504);
  const items = [closure_7];
  let closure_6 = obj.useStateFromStores(items, () => closure_7.useReducedMotion);
  const tmp4 = options(12457);
  closure_7 = tmp4(options(12681));
  let obj2 = size(5147);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  react.useRef(null);
  const ref = react.useRef(false);
  let closure_11 = react.useRef(null);
  const bound = Math.max(options.findIndex((optionId) => optionId.optionId === dependencyMap), 0);
  const tmp8 = options(5496)(bound);
  const tmp9 = disabled(react.useState(options(1494)().width), 2);
  [tmp10, c13] = tmp9;
  const width = size(12704).TRAIT_OPTION_SIZE_TO_DIMENSIONS[size].width;
  const sum = width + closure_11;
  let c15 = sum;
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(tmp8 * sum);
  let closure_18 = react.useRef(null);
  const ref3 = react.useRef(0);
  const ref4 = react.useRef(0);
  const ref5 = react.useRef(false);
  const items1 = [disabled, isScreenReaderEnabled];
  const bound1 = Math.max(bound, tmp10 - bound - width);
  const effect = react.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    if (null != ref2.current) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, items1);
  let obj3 = { ref: ref1, children: items3 };
  const obj4 = {
    ref,
    horizontal: true,
    contentOffset: { x: tmp8 * sum, y: 0 },
    scrollEnabled: !disabled,
    showsHorizontalScrollIndicator: false,
    decelerationRate: "fast",
    snapToInterval: tmp19,
    onScrollBeginDrag: function handleScrollBeginDrag() {
      const tmp = isScreenReaderEnabled;
      if (!tmp) {
        if (null != closure_11.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_11.current);
          closure_11.current = null;
        }
        if (null != closure_18.current) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(closure_18.current);
          closure_18.current = null;
        }
        ref.current = true;
      }
    },
    onScrollEndDrag: function scheduleScrollSettle(nativeEvent) {
      const x = nativeEvent.nativeEvent.contentOffset.x;
      let closure_0 = x;
      closure_17.current = x;
      if (null != closure_11.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_11.current);
        closure_11.current = null;
      }
      closure_11.current = setTimeout(() => {
        closure_11.current = null;
        ref.current = false;
        handleScrollSettled(closure_0);
      }, 100);
    },
    onMomentumScrollBegin: function cancelScrollSettle() {
      if (null != closure_11.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_11.current);
        closure_11.current = null;
      }
    },
    onMomentumScrollEnd: function handleMomentumScrollEnd(nativeEvent) {
      ref2.current = nativeEvent.nativeEvent.contentOffset.x;
      if (null != closure_11.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_11.current);
        closure_11.current = null;
      }
      if (ref.current) {
        tmp4.current = false;
        handleScrollSettled(nativeEvent.nativeEvent.contentOffset.x);
      }
    },
    onScroll: function handleScroll(nativeEvent) {
      ref2.current = nativeEvent.nativeEvent.contentOffset.x;
    },
    scrollEventThrottle: 16,
    onTouchStart: function handleTouchStart(nativeEvent) {
      if (null != closure_18.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_18.current);
        closure_18.current = null;
      }
      ref5.current = false;
      ref3.current = nativeEvent.nativeEvent.pageX;
      ref4.current = ref2.current;
    },
    onTouchEnd: function handleTouchEnd() {
      const tmp = disabled;
      if (!tmp) {
        const tmp2 = isScreenReaderEnabled;
        if (!tmp2) {
          if (!ref.current) {
            if (!ref5.current) {
              let current = ref4.current;
              if (null != closure_18.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(closure_18.current);
                closure_18.current = null;
              }
              const _setTimeout = setTimeout;
              closure_18.current = setTimeout(() => {
                closure_18.current = null;
                current = ref1.current;
                if (current != null) {
                  current.measureInWindow((arg0) => {
                    const diff = closure_1_0 - arg0 + closure_1_1 - bound;
                    let rounded = Math.floor(diff / closure_2_15);
                    if (diff >= 0) {
                      if (null != current[rounded]) {
                        handlePressOption(current[rounded], rounded);
                      }
                    }
                    rounded = closure_2_12;
                  });
                }
              }, 100);
            }
          }
        }
      }
    },
    onLayout: function handleLayout(nativeEvent) {
      _undefined(nativeEvent.nativeEvent.layout.width);
    },
    contentContainerStyle: items2,
    children: ref(closure_6, obj5)
  };
  tmp19 = undefined;
  const tmp15 = ref;
  const tmp18 = closure_5;
  if (!isScreenReaderEnabled) {
    tmp19 = sum;
  }
  items2 = [tmp.assetList, { paddingRight: bound1 }];
  obj5 = {
    style: tmp.radioGroup,
    accessibilityRole: "radiogroup",
    accessibilityLabel: tmp2Result.getCustomizationOptionName(customizationOption),
    children: options.map((traitOption, index) => {
      let obj2;
      let obj3;
      size = traitOption;
      let closure_1 = index;
      const obj = {
        size,
        traitOption,
        accessibilityLabel: obj2.getAssetAccessibilityLabel(traitOption, obj3),
        isSelected: traitOption.optionId === dependencyMap,
        showSelectedBorder: isScreenReaderEnabled && traitOption.optionId === tmp4,
        hideCornerFlag: skipDescription,
        disabled,
        onPress() {
          handlePressOption(traitOption, index);
        }
      };
      const tmp2 = options(dependencyMap[8]);
      obj2 = size(dependencyMap[10]);
      obj3 = { skipRarity: skipDescription, skipDescription };
      return ref(tmp2, obj, traitOption.optionId);
    })
  };
  tmp2Result = tmp2(6639);
  items3 = [tmp17(tmp18, obj4), ];
  let tmp17Result = !isScreenReaderEnabled;
  if (tmp17Result) {
    const obj6 = { size };
    tmp17Result = tmp17(width, obj6);
  }
  items3[1] = tmp17Result;
  return tmp15(closure_6, obj3);
};
export const TRAIT_OPTION_SPACING = PX_12;
export const CONTENT_INSET = PX_16;
