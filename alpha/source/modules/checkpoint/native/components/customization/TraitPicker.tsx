// Module ID: 13679
// Function ID: 13680
// Name: TraitPicker
// Dependencies: [32, 19, 17, 5015, 6066, 21, 575, 6434, 5014, 13680, 1113, 3092, 5624, 13624, 504, 5274, 13682, 5612, 5095, 5254, 13683, 13684, 2]
// Exports: default

// Module 13679 (TraitPicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import _modDef3092 from "module_3092" /* 3092 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import Text_Text from "Text/Text" /* 5624 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6434 */;
import CheckpointTextDefault from "CheckpointText" /* 13624 */;
import TraitOptionList from "TraitOptionList" /* 13680 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
function EarnedCountHeader(customizationOption) {
  let earnedCount;
  let intl2;
  let obj4;
  let totalCount;
  ({ earnedCount, totalCount } = customizationOption);
  customizationOption = customizationOption.customizationOption;
  const tmp = closure_11();
  let obj = CheckpointCustomizationUtils;
  const customizationOptionName = obj.getCustomizationOptionName(customizationOption);
  const intl = intl3.intl;
  const obj2 = {
    earnedCount,
    totalCount,
    countHook(arg0) {
      return arg0;
    }
  };
  const combined = "" + customizationOptionName + ", " + intl.formatToPlainString(_modDef3092.Vfq58K, obj2);
  const obj3 = { variant: "experimental/body-sm/medium", color: "text-default", style: tmp.earnedRow, accessibilityRole: "header", accessibilityLabel: combined, children: intl2.format(_modDef3092.Vfq58K, obj4) };
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  obj4 = {
    earnedCount,
    totalCount,
    countHook(children, arg1) {
      const obj = { variant: "experimental/mono-md/bold", children };
      return closure_1_8(CheckpointTextDefault, obj, arg1);
    }
  };
  return metroImportAll(Text, obj3);
}
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
const rarityOrder = CheckpointConstants.CHECKPOINT_RARITY_ORDER_MOBILE;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: obj2, earnedRow: obj3, details: obj4 };
obj2 = { gap: TraitOptionList.TRAIT_OPTION_SPACING };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: TraitOptionList.CONTENT_INSET };
obj4 = { paddingHorizontal: TraitOptionList.CONTENT_INSET };
let closure_11 = createStyles(obj);
const __initData = { code: "function TraitPickerTsx1(){const{INTRO_DETAILS_DURATION_MS,Easing,withTiming,isDetailsVisible,INTRO_DETAILS_OFFSET_Y}=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isDetailsVisible?1:0,timing),transform:[{translateY:withTiming(isDetailsVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};}" };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPicker.tsx");

export default function TraitPicker(customizationOption) {
  let availableTraitOptions;
  let closure_2;
  let closure_3;
  let earnedCount;
  let items1;
  let items2;
  let items3;
  let obj11;
  let optionIds;
  let savedOptionId;
  let showEarnedCount;
  let tmp12;
  let tmp13;
  let tmp15;
  customizationOption = customizationOption.customizationOption;
  let flag = customizationOption.disabled;
  const style = customizationOption.style;
  if (flag === undefined) {
    flag = false;
  }
  const selectedOptionId = customizationOption.selectedOptionId;
  ({ showEarnedCount, optionIds, savedOptionId } = customizationOption);
  if (showEarnedCount === undefined) {
    showEarnedCount = false;
  }
  const onSelectOption = customizationOption.onSelectOption;
  dependencyMap = undefined;
  earnedCount = undefined;
  let useReducedMotion;
  let tmp = closure_11();
  const tmp2 = customizationOption;
  let obj = customizationOption(6434);
  const tmp4 = !obj.getIsTraitRarityVisible(customizationOption);
  let obj2 = customizationOption(504);
  let items = [useReducedMotion];
  dependencyMap = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = customizationOption(5274);
  _slicedToArray = obj3.useIsScreenReaderEnabled();
  const obj4 = customizationOption(13682);
  const obj5 = { customizationOption, optionIds, savedOptionId, rarityOrder };
  const traitPickerOptions = obj4.useTraitPickerOptions(obj5);
  ({ availableTraitOptions, earnedCount } = traitPickerOptions);
  let closure_5 = tmp6;
  const totalCount = traitPickerOptions.totalCount;
  const tmp8 = selectedOptionId(5612)(() => {
    let num = 0;
    const tmp = customizationOption;
    if (!closure_5) {
      num = 0;
      if (tmp !== tmp2) {
        num = 0;
        if (!closure_2) {
          num = 0;
          if (!closure_3) {
            const _Math = Math;
            num = Math.max(earnedCount - 1, 0);
          }
        }
      }
    }
    return num;
  });
  let tmp9 = tmp6;
  if (!tmp9) {
    let num = 0;
    tmp9 = 0 === tmp8;
  }
  useReducedMotion = tmp9;
  const fn = function b() {
    let Easing;
    let items;
    const obj = { duration: 600, easing: Easing.out(ReanimatedRexport.Easing.cubic) };
    Easing = ReanimatedRexport.Easing;
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (useReducedMotion) {
      num = 1;
    }
    let num2 = 0;
    const obj2 = { opacity: withTiming(num, obj), transform: items };
    const withTiming2 = tmp(5254).withTiming;
    timing;
    if (!useReducedMotion) {
      num2 = PX_12;
    }
    items = [{ translateY: withTiming2(num2, obj) }];
    ({ translateY: withTiming2(num2, obj) });
    return obj2;
  };
  const tmp2Result = tmp2(5095);
  fn.__closure = { INTRO_DETAILS_DURATION_MS: 600, Easing: tmp2(5095).Easing, withTiming: tmp2(5254).withTiming, isDetailsVisible: tmp9, INTRO_DETAILS_OFFSET_Y: PX_12 };
  fn.__workletHash = 9456849062820;
  fn.__initData = __initData;
  ({ INTRO_DETAILS_DURATION_MS: 600, Easing: tmp2(5095).Easing, withTiming: tmp2(5254).withTiming, isDetailsVisible: tmp9, INTRO_DETAILS_OFFSET_Y: PX_12 });
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  [tmp12, tmp13] = earnedCount.useState(tmp8);
  _slicedToArray(earnedCount.useState(tmp8), 2);
  const obj7 = { availableTraitOptions, selectedOptionId, onSelectOption, paused: tmp15 };
  tmp15 = flag;
  const useAutoSelectTraitOption = tmp2(13683).useAutoSelectTraitOption;
  tmp2(13683);
  if (!flag) {
    let tmp16 = !tmp6;
    if (tmp16) {
      let num2 = 0;
      tmp16 = tmp12 > 0;
    }
    tmp15 = tmp16;
  }
  const autoSelectTraitOption = useAutoSelectTraitOption(obj7);
  let diff = earnedCount;
  if (null == selectedOptionId) {
    diff = earnedCount - tmp12;
  }
  let found = availableTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
  if (found == null) {
    found = availableTraitOptions[0];
  }
  const obj8 = { style: items1, children: items2 };
  items1 = [tmp.container, style];
  const tmp20 = closure_9;
  const tmp21 = closure_5;
  if (showEarnedCount) {
    const obj9 = { customizationOption, earnedCount: diff, totalCount };
    showEarnedCount = closure_8(EarnedCountHeader, obj9);
  }
  items2 = [showEarnedCount, closure_8(selectedOptionId(13680), { customizationOption, options: availableTraitOptions, selectedOptionId, disabled: flag, hideRarity: tmp4, introStartIndex: tmp8, onIntroStep: tmp13, onSelectOption }), ];
  let tmp24Result = null != found;
  if (tmp24Result) {
    const obj10 = { style: items3, children: closure_8(selectedOptionId(13684), obj11) };
    items3 = [tmp.details, animatedStyle];
    View = tmp7(5095).View;
    obj11 = { asset: found, hideDescriptionAndRarity: tmp4 };
    tmp24Result = tmp24(View, obj10);
  }
  items2[2] = tmp24Result;
  return tmp20(tmp21, obj8);
};
