// Module ID: 14421
// Function ID: 14422
// Name: TraitOptionList
// Dependencies: [32, 19, 17, 5244, 6314, 21, 575, 5243, 14422, 8197, 6681, 504, 14399, 14400, 5505, 1652, 5854, 1493, 5491, 2]
// Exports: default

// Module 14421 (TraitOptionList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import HapticUtils from "HapticUtils" /* 5491 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6681 */;
import inlineStyles from "inlineStyles" /* 8197 */;
import TraitOptionItem from "TraitOptionItem" /* 14422 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
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
  let c12;
  let disabled;
  let items2;
  let obj5;
  let tmp10;
  let tmp17;
  let tmp2Result;
  size = size.size;
  const options = size.options;
  ({ selectedOptionId: dependencyMap, disabled } = size);
  ({ hideRarity: react, onSelectOption: View } = size);
  let useReducedMotion;
  c12 = undefined;
  function handleScrollSettled(arg0) {
    const tmp = disabled;
    if (!tmp) {
      const tmp2 = isScreenReaderEnabled;
      if (!tmp2) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const tmp7 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, arg0 / c13), options.length - 1))];
        if (null != tmp7) {
          if (tmp7.optionId !== dependencyMap) {
            View(tmp7.trait, tmp7.optionId);
            const obj = HapticUtils;
            const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
            closure_7();
          }
        }
      }
    }
  }
  function cancelScrollSettle() {
    if (null != closure_11.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_11.current);
      closure_11.current = null;
    }
  }
  const customizationOption = size.customizationOption;
  let tmp = c12();
  let tmp2 = size;
  let obj = size(504);
  const items = [useReducedMotion];
  useReducedMotion = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = options(14399);
  let closure_7 = tmp4(options(14400));
  let obj2 = size(5505);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = size(1652);
  const animatedRef = obj3.useAnimatedRef();
  const ref = react.useRef(false);
  let closure_11 = react.useRef(null);
  const bound = Math.max(options.findIndex((optionId) => optionId.optionId === dependencyMap), 0);
  const tmp8 = options(5854)(bound);
  [tmp10, c12] = disabled(react.useState(options(1493)().width), 2);
  const tmp9 = disabled(react.useState(options(1493)().width), 2);
  const width = size(14422).TRAIT_OPTION_SIZE_TO_DIMENSIONS[size].width;
  const sum = width + ref;
  let c13 = sum;
  const items1 = [disabled, isScreenReaderEnabled];
  const bound1 = Math.max(closure_11, tmp10 - closure_11 - width);
  const effect = react.useEffect(() => cancelScrollSettle, items1);
  const obj4 = {
    ref: animatedRef,
    horizontal: true,
    contentOffset: { x: tmp8 * sum, y: 0 },
    scrollEnabled: !disabled,
    showsHorizontalScrollIndicator: false,
    decelerationRate: "fast",
    snapToInterval: tmp17,
    onScrollBeginDrag: function handleScrollBeginDrag() {
      const tmp = isScreenReaderEnabled;
      if (!tmp) {
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
    onMomentumScrollBegin: cancelScrollSettle,
    onMomentumScrollEnd: function handleMomentumScrollEnd(nativeEvent) {
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
    onLayout: function handleLayout(nativeEvent) {
      _undefined(nativeEvent.nativeEvent.layout.width);
    },
    contentContainerStyle: items2,
    children: isScreenReaderEnabled(View, obj5)
  };
  tmp17 = undefined;
  const ScrollView = options(1652).ScrollView;
  const tmp14 = animatedRef;
  if (!isScreenReaderEnabled) {
    tmp17 = sum;
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
      let obj = {
        size,
        traitOption,
        accessibilityLabel: obj2.getAssetAccessibilityLabel(traitOption, obj3),
        isSelected: traitOption.optionId === dependencyMap,
        showSelectedBorder: isScreenReaderEnabled && traitOption.optionId === tmp4,
        hideCornerFlag: skipDescription,
        disabled,
        onPress() {
          const tmp2 = index;
          if (null != ref.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref.current);
            ref.current = null;
          }
          closure_10.current = false;
          if (traitOption.optionId !== dependencyMap) {
            View(traitOption.trait, traitOption.optionId);
            const obj = traitOption(closure_1_2[18]);
            const result = obj.triggerHapticFeedback(traitOption(closure_1_2[18]).HapticFeedbackTypes.IMPACT_LIGHT);
            closure_7();
          }
          const tmp13 = isScreenReaderEnabled;
          if (!tmp13) {
            const current = animatedRef.current;
            if (current != null) {
              const obj2 = { x: tmp2 * c13, animated: !useReducedMotion };
              current.scrollTo(obj2);
            }
          }
        }
      };
      let tmp2 = options(dependencyMap[8]);
      obj2 = size(dependencyMap[10]);
      obj3 = { skipRarity: skipDescription, skipDescription };
      return isScreenReaderEnabled(tmp2, obj, traitOption.optionId);
    })
  };
  tmp2Result = tmp2(6681);
  const children = [tmp16(ScrollView, obj4), ];
  let tmp16Result = !isScreenReaderEnabled;
  if (tmp16Result) {
    const obj6 = { size };
    tmp16Result = tmp16(c13, obj6);
  }
  children[1] = tmp16Result;
  return tmp14(View, { children });
};
export const TRAIT_OPTION_SPACING = PX_12;
export const CONTENT_INSET = PX_16;
