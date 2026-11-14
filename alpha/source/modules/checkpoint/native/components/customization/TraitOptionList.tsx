// Module ID: 14539
// Function ID: 14540
// Name: TraitOptionList
// Dependencies: [32, 19, 17, 5307, 6377, 21, 575, 5306, 14540, 8263, 6744, 504, 14488, 14518, 5568, 5917, 1496, 5554, 2]
// Exports: default

// Module 14539 (TraitOptionList)
import nativeDefault from "native" /* 575 */;
import HapticUtils from "HapticUtils" /* 5554 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6744 */;
import inlineStyles from "inlineStyles" /* 8263 */;
import TraitOptionItem from "TraitOptionItem" /* 14540 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
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
  let c12;
  let closure_5;
  let disabled;
  let items2;
  let obj4;
  let tmp10;
  let tmp18;
  let tmp2Result;
  size = size.size;
  const options = size.options;
  ({ selectedOptionId: dependencyMap, disabled } = size);
  ({ hideRarity: react, onSelectOption: closure_5 } = size);
  let closure_7;
  c12 = undefined;
  let c13;
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
            closure_5(tmp7.trait, tmp7.optionId);
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
  let tmp = c13();
  let tmp2 = size;
  let obj = size(504);
  const items = [closure_7];
  let closure_6 = obj.useStateFromStores(items, () => closure_7.useReducedMotion);
  const tmp4 = options(14488);
  closure_7 = tmp4(options(14518));
  let obj2 = size(5568);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  react.useRef(null);
  const ref = react.useRef(false);
  let closure_11 = react.useRef(null);
  const bound = Math.max(options.findIndex((optionId) => optionId.optionId === dependencyMap), 0);
  const tmp8 = options(5917)(bound);
  [tmp10, c12] = disabled(react.useState(options(1496)().width), 2);
  const tmp9 = disabled(react.useState(options(1496)().width), 2);
  const width = size(14540).TRAIT_OPTION_SIZE_TO_DIMENSIONS[size].width;
  const sum = width + closure_11;
  c13 = sum;
  const items1 = [disabled, isScreenReaderEnabled];
  const bound1 = Math.max(c12, tmp10 - c12 - width);
  const effect = react.useEffect(() => cancelScrollSettle, items1);
  let obj3 = {
    ref,
    horizontal: true,
    contentOffset: { x: tmp8 * sum, y: 0 },
    scrollEnabled: !disabled,
    showsHorizontalScrollIndicator: false,
    decelerationRate: "fast",
    snapToInterval: tmp18,
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
    children: tmp16(tmp15, obj4)
  };
  tmp18 = undefined;
  const tmp14 = ref;
  const tmp17 = closure_5;
  if (!isScreenReaderEnabled) {
    tmp18 = sum;
  }
  items2 = [tmp.assetList, { paddingRight: bound1 }];
  obj4 = {
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
            closure_5(traitOption.trait, traitOption.optionId);
            const obj = traitOption(closure_1_2[17]);
            const result = obj.triggerHapticFeedback(traitOption(closure_1_2[17]).HapticFeedbackTypes.IMPACT_LIGHT);
            closure_7();
          }
          const tmp13 = isScreenReaderEnabled;
          if (!tmp13) {
            const current = ref.current;
            if (current != null) {
              const obj2 = { x: tmp2 * c13, animated: !closure_6 };
              current.scrollTo(obj2);
            }
          }
        }
      };
      let tmp2 = options(dependencyMap[8]);
      obj2 = size(dependencyMap[10]);
      obj3 = { skipRarity: skipDescription, skipDescription };
      return ref(tmp2, obj, traitOption.optionId);
    })
  };
  tmp2Result = tmp2(6744);
  const children = [tmp16(tmp17, obj3), ];
  let tmp16Result = !isScreenReaderEnabled;
  if (tmp16Result) {
    const obj5 = { size };
    tmp16Result = tmp16(handleScrollSettled, obj5);
  }
  children[1] = tmp16Result;
  return tmp14(closure_6, { children });
};
export const TRAIT_OPTION_SPACING = PX_12;
export const CONTENT_INSET = PX_16;
