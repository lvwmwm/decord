// Module ID: 13923
// Function ID: 13924
// Name: TraitOptionList
// Dependencies: [32, 19, 17, 5141, 6199, 21, 575, 5140, 13924, 8101, 6566, 504, 5390, 1652, 5739, 1493, 5376, 2]
// Exports: default

// Module 13923 (TraitOptionList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import HapticUtils from "HapticUtils" /* 5376 */;
import CheckpointConstants from "CheckpointConstants" /* 6199 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6566 */;
import inlineStyles from "inlineStyles" /* 8101 */;
import TraitOptionItem from "TraitOptionItem" /* 13924 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

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
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionList.tsx");

export default function TraitOptionList(size) {
  let _undefined;
  let c11;
  let disabled;
  let hideCornerFlag;
  let items2;
  let obj5;
  let tmp16;
  let tmp2Result;
  let tmp9;
  size = size.size;
  const options = size.options;
  ({ selectedOptionId: dependencyMap, disabled } = size);
  ({ hideRarity: react, onSelectOption: View } = size);
  let useReducedMotion;
  c11 = undefined;
  let c12;
  function cancelScrollSettle() {
    if (null != closure_10.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_10.current);
      closure_10.current = null;
    }
  }
  const customizationOption = size.customizationOption;
  let tmp = c12();
  let tmp2 = size;
  let tmp3 = dependencyMap;
  let obj = size(504);
  const items = [useReducedMotion];
  useReducedMotion = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = size(5390);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const obj3 = size(1652);
  const animatedRef = obj3.useAnimatedRef();
  const ref = react.useRef(false);
  let closure_10 = react.useRef(null);
  const bound = Math.max(options.findIndex((optionId) => optionId.optionId === dependencyMap), 0);
  let tmp7 = options(5739)(bound);
  let tmp8 = disabled(react.useState(options(1493)().width), 2);
  [tmp9, c11] = tmp8;
  const width = size(13924).TRAIT_OPTION_SIZE_TO_DIMENSIONS[size].width;
  const sum = width + closure_10;
  c12 = sum;
  const items1 = [disabled, isScreenReaderEnabled];
  const bound1 = Math.max(c11, tmp9 - c11 - width);
  const effect = react.useEffect(() => cancelScrollSettle, items1);
  const obj4 = {
    ref: animatedRef,
    horizontal: true,
    contentOffset: { x: tmp7 * sum, y: 0 },
    scrollEnabled: !disabled,
    showsHorizontalScrollIndicator: false,
    decelerationRate: "fast",
    snapToInterval: tmp16,
    onScrollBeginDrag: function handleScrollBeginDrag() {
      const tmp = isScreenReaderEnabled;
      if (!tmp) {
        if (null != closure_10.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_10.current);
          closure_10.current = null;
        }
        ref.current = true;
      }
    },
    onScrollEndDrag: function scheduleScrollSettle(nativeEvent) {
      let closure_0;
      const x = nativeEvent.nativeEvent.contentOffset.x;
      const tmp = closure_10;
      if (null != closure_10.current) {
        let tmp2 = globalThis;
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
        tmp.current = null;
      }
      tmp.current = setTimeout(() => {
        closure_10.current = null;
        ref.current = false;
        const tmp2 = disabled;
        if (!tmp2) {
          const tmp3 = isScreenReaderEnabled;
          if (!tmp3) {
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const tmp7 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp / c12), options.length - 1))];
            if (null != tmp7) {
              if (tmp7.optionId !== dependencyMap) {
                View(tmp7.trait, tmp7.optionId);
                const obj = x(closure_1_2[16]);
                const result = obj.triggerHapticFeedback(x(closure_1_2[16]).HapticFeedbackTypes.IMPACT_LIGHT);
              }
            }
          }
        }
      }, 100);
    },
    onMomentumScrollBegin: cancelScrollSettle,
    onMomentumScrollEnd: function handleMomentumScrollEnd(arg0) {
      if (null != closure_10.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_10.current);
        closure_10.current = null;
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
            const tmp12 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp6 / c12), options.length - 1))];
            if (null != tmp12) {
              if (tmp12.optionId !== dependencyMap) {
                View(tmp12.trait, tmp12.optionId);
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
    contentContainerStyle: items2,
    children: animatedRef(View, obj5)
  };
  tmp16 = undefined;
  const ScrollView = options(1652).ScrollView;
  const tmp13 = ref;
  if (!isScreenReaderEnabled) {
    tmp16 = sum;
  }
  items2 = [tmp.assetList, { paddingRight: bound1 }];
  obj5 = {
    style: tmp.radioGroup,
    accessibilityRole: "radiogroup",
    accessibilityLabel: tmp2Result.getCustomizationOptionName(customizationOption),
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
          const tmp2 = index;
          if (null != ref.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref.current);
            ref.current = null;
          }
          closure_9.current = false;
          if (traitOption.optionId !== dependencyMap) {
            View(traitOption.trait, traitOption.optionId);
            const obj = traitOption(closure_1_2[16]);
            const result = obj.triggerHapticFeedback(traitOption(closure_1_2[16]).HapticFeedbackTypes.IMPACT_LIGHT);
          }
          const tmp11 = isScreenReaderEnabled;
          if (!tmp11) {
            const current = animatedRef.current;
            if (current != null) {
              const obj2 = { x: tmp2 * c12, animated: !useReducedMotion };
              current.scrollTo(obj2);
            }
          }
        }
      };
      let tmp2 = options(dependencyMap[8]);
      obj2 = size(dependencyMap[10]);
      return animatedRef(tmp2, obj, traitOption.optionId);
    })
  };
  tmp2Result = tmp2(6566);
  const children = [tmp15(ScrollView, obj4), ];
  let tmp15Result = !isScreenReaderEnabled;
  if (tmp15Result) {
    const obj6 = { size };
    tmp15Result = tmp15(cancelScrollSettle, obj6);
  }
  children[1] = tmp15Result;
  return tmp13(View, { children });
};
export const TRAIT_OPTION_SPACING = PX_12;
export const CONTENT_INSET = PX_16;
