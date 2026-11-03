// Module ID: 13822
// Function ID: 13823
// Name: TraitPicker
// Dependencies: [32, 19, 17, 5142, 6186, 21, 575, 6554, 5141, 13823, 1113, 3219, 5747, 13779, 1652, 5377, 13825, 1493, 504, 5397, 13827, 5735, 13828, 5325, 13829, 2]
// Exports: default

// Module 13822 (TraitPicker)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import _modDef3219 from "module_3219" /* 3219 */;
import timing_timing from "timing/timing" /* 5377 */;
import Text_Text from "Text/Text" /* 5747 */;
import CheckpointConstants from "CheckpointConstants" /* 6186 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6554 */;
import CheckpointTextDefault from "CheckpointText" /* 13779 */;
import TraitOptionList from "TraitOptionList" /* 13823 */;
import TraitOptionDetails from "TraitOptionDetails" /* 13825 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
const TraitOptionDetailsDefault = TraitOptionDetails;
let dependencyMap, obj1;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
function EarnedCountHeader(customizationOption) {
  let earnedCount;
  let intl2;
  let obj4;
  let totalCount;
  ({ earnedCount, totalCount } = customizationOption);
  customizationOption = customizationOption.customizationOption;
  const tmp = closure_13();
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
  const combined = "" + customizationOptionName + ", " + intl.formatToPlainString(_modDef3219.Vfq58K, obj2);
  const obj3 = { variant: "body-sm/medium", color: "text-default", style: tmp.earnedRow, accessibilityRole: "header", accessibilityLabel: combined, children: intl2.format(_modDef3219.Vfq58K, obj4) };
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  obj4 = {
    earnedCount,
    totalCount,
    countHook(children, arg1) {
      const obj = { variant: "mono-md/bold", children };
      return closure_1_9(CheckpointTextDefault, obj, arg1);
    }
  };
  return React4(Text, obj3);
}
function TraitPickerDetails(arg0) {
  let asset;
  let descriptionVisibility;
  let isVisible;
  let items2;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ asset, isVisible, descriptionVisibility } = arg0);
  let items = [closure_15, 600, , , , ];
  const tmp = closure_13();
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[2] = _mod1652.Easing;
  items[3] = timing_timing.withTiming;
  items[4] = isVisible;
  items[5] = PX_12;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  class TraitPickerTsx1 {
    constructor() {
      obj = { duration: closure_0, easing: closure_1.out(closure_1.cubic) };
      tmp = closure_2;
      num = 0;
      tmp2 = closure_3;
      if (tmp2) {
        num = 1;
      }
      obj1 = { opacity: tmp(num, obj), transform: null };
      num2 = 0;
      if (!tmp2) {
        num2 = closure_4;
      }
      obj4 = { translateY: tmp(num2, obj) };
      items = [];
      items[0] = obj4;
      obj1.transform = items;
      return obj1;
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9];
  TraitPickerTsx1.__closure = items1;
  TraitPickerTsx1.__workletHash = 14501915990015;
  TraitPickerTsx1.__initData = tmp4;
  const animatedStyle = useAnimatedStyle(TraitPickerTsx1);
  let obj = { style: items2, children: React4(TraitOptionDetailsDefault, { asset, descriptionVisibility }) };
  items2 = [tmp.details, animatedStyle];
  const View = _modDef1652.View;
  return React4(View, obj);
}
function TraitPickerPortrait(selectedAsset) {
  let DescriptionVisibility;
  let header;
  let isDetailsVisible;
  let isRarityVisible;
  let items;
  let optionList;
  selectedAsset = selectedAsset.selectedAsset;
  ({ header, optionList, isDetailsVisible, isRarityVisible } = selectedAsset);
  const obj = { style: closure_13().container, children: items };
  items = [header, optionList, ];
  let tmp4Result = null != selectedAsset;
  const tmp = authStore;
  const tmp2 = metroRequire;
  if (tmp4Result) {
    const obj2 = { asset: selectedAsset, isVisible: isDetailsVisible, descriptionVisibility: isRarityVisible ? DescriptionVisibility.VISIBLE : DescriptionVisibility.INVISIBLE };
    DescriptionVisibility = TraitOptionDetails.DescriptionVisibility;
    tmp4Result = React4(TraitPickerDetails, obj2);
  }
  items[2] = tmp4Result;
  return tmp(tmp2, obj);
}
function TraitPickerLandscape(selectedAsset) {
  let DescriptionVisibility;
  let header;
  let isDetailsVisible;
  let isRarityVisible;
  let items;
  let items1;
  let optionList;
  selectedAsset = selectedAsset.selectedAsset;
  ({ header, optionList, isDetailsVisible, isRarityVisible } = selectedAsset);
  const tmp = closure_13();
  const obj = { alwaysBounceVertical: false, contentContainerStyle: tmp.landscapeScrollContent, children: items };
  items = [, , , , , ];
  const obj2 = { style: tmp.landscapeGap };
  items[0] = React4(metroRequire, obj2);
  items[1] = header;
  const obj3 = { style: tmp.landscapeGap };
  items[2] = React4(metroRequire, obj3);
  let tmp2Result = null != selectedAsset;
  const tmp3 = hasOwnProperty;
  if (tmp2Result) {
    const obj4 = { asset: selectedAsset, isVisible: isDetailsVisible, descriptionVisibility: isRarityVisible ? DescriptionVisibility.VISIBLE : DescriptionVisibility.GONE };
    DescriptionVisibility = TraitOptionDetails.DescriptionVisibility;
    const obj5 = { children: items1 };
    items1 = [React4(TraitPickerDetails, obj4), ];
    const obj6 = { style: tmp.landscapeGap };
    items1[1] = React4(metroRequire, obj6);
    tmp2Result = tmp2(unpackModuleId, obj5);
  }
  items[3] = tmp2Result;
  items[4] = optionList;
  const obj7 = { style: tmp.landscapeGap };
  items[5] = React4(metroRequire, obj7);
  return authStore(tmp3, obj);
}
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const rarityOrder = CheckpointConstants.CHECKPOINT_RARITY_ORDER_MOBILE;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: obj2, earnedRow: obj3, landscapeGap: obj4, details: obj5, landscapeScrollContent: { flexGrow: 1, justifyContent: "center" } };
obj2 = { gap: TraitOptionList.TRAIT_OPTION_SPACING };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: TraitOptionList.CONTENT_INSET };
obj4 = { flexGrow: 1, minHeight: nativeDefault.space.PX_8, maxHeight: nativeDefault.space.PX_16 };
obj5 = { paddingHorizontal: TraitOptionList.CONTENT_INSET };
let closure_13 = createStyles(obj);
let closure_15 = { code: "(function TraitPickerTsx1(){let[INTRO_DETAILS_DURATION_MS,Easing,withTiming,isVisible,INTRO_DETAILS_OFFSET_Y]=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isVisible?1:0,timing),transform:[{translateY:withTiming(isVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};})" };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPicker.tsx");

export default function TraitPicker(customizationOption) {
  let closure_2;
  let closure_3;
  let isCurrentTraitBlocked;
  let isFinalizeRoute;
  let isLandscape;
  let num2;
  let obj11;
  let optionIds;
  let savedOptionId;
  let tmp10;
  let tmp12;
  let tmp17Result;
  let tmp20;
  let tmp9;
  let tmpResult;
  let useReducedMotion;
  customizationOption = customizationOption.customizationOption;
  let flag = customizationOption.disabled;
  ({ isFinalizeRoute, isCurrentTraitBlocked } = customizationOption);
  if (flag === undefined) {
    flag = false;
  }
  const selectedOptionId = customizationOption.selectedOptionId;
  ({ isLandscape, optionIds, savedOptionId } = customizationOption);
  if (isLandscape === undefined) {
    isLandscape = false;
  }
  const onSelectOption = customizationOption.onSelectOption;
  dependencyMap = undefined;
  const tmp2 = dependencyMap;
  const onSelectFinalizeOption = customizationOption.onSelectFinalizeOption;
  let tmp = selectedOptionId;
  const height = selectedOptionId(1493)().height;
  const obj = customizationOption(6554);
  const isTraitRarityVisible = obj.getIsTraitRarityVisible(customizationOption);
  const items = [AccessibilityStore];
  const obj2 = customizationOption(504);
  dependencyMap = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = customizationOption(5397);
  _slicedToArray = obj3.useIsScreenReaderEnabled();
  const obj4 = customizationOption(13827);
  const obj5 = { customizationOption, optionIds, savedOptionId, rarityOrder };
  const traitPickerOptions = obj4.useTraitPickerOptions(obj5);
  const availableTraitOptions = traitPickerOptions.availableTraitOptions;
  const earnedCount = traitPickerOptions.earnedCount;
  let tmp6 = null != selectedOptionId;
  let closure_6 = tmp6;
  const totalCount = traitPickerOptions.totalCount;
  const tmp7 = selectedOptionId(5735)(() => {
    let num = 0;
    const tmp = customizationOption;
    if (!closure_6) {
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
  [tmp9, tmp10] = availableTraitOptions.useState(tmp7);
  _slicedToArray(availableTraitOptions.useState(tmp7), 2);
  const obj7 = { availableTraitOptions, selectedOptionId, onSelectOption, paused: tmp12 };
  tmp12 = flag;
  const useAutoSelectTraitOption = customizationOption(13828).useAutoSelectTraitOption;
  customizationOption(13828);
  const obj6 = availableTraitOptions;
  if (!flag) {
    let tmp13 = !tmp6;
    if (tmp13) {
      let num = 0;
      tmp13 = tmp9 > 0;
    }
    tmp12 = tmp13;
  }
  const autoSelectTraitOption = useAutoSelectTraitOption(obj7);
  let diff = earnedCount;
  if (!tmp6) {
    diff = earnedCount - tmp9;
  }
  const items1 = [availableTraitOptions, selectedOptionId];
  let str = "md";
  const memo = obj6.useMemo(() => {
    let found = availableTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
    const tmp = availableTraitOptions;
    if (found == null) {
      found = tmp[0];
    }
    return found;
  }, items1);
  if (isLandscape) {
    str = "md";
    if (height <= customizationOption(5325).WINDOW_SIZE_THRESHOLD_LARGE) {
      str = "sm";
    }
  }
  if (isFinalizeRoute) {
    const obj8 = { activeCustomizationOption: customizationOption, onSelectOption: onSelectFinalizeOption, disableSwitching: isCurrentTraitBlocked, disabled: flag };
    tmp17Result = tmp17(tmp3(13829).FinalizeTraitTabs, obj8);
    tmp20 = tmp17;
  } else {
    const obj9 = { customizationOption, earnedCount: diff, totalCount };
    tmp17Result = tmp17(EarnedCountHeader, obj9);
    tmp20 = tmp17;
  }
  const obj10 = { header: tmp17Result, optionList: tmp20(tmpResult, obj11, customizationOption), selectedAsset: memo, isDetailsVisible: tmp6, isRarityVisible: isTraitRarityVisible };
  obj11 = { customizationOption, size: str, options: availableTraitOptions, selectedOptionId, disabled: flag, hideRarity: !isTraitRarityVisible, introStartIndex: num2, onIntroStep: tmp10, onSelectOption };
  num2 = 0;
  tmpResult = tmp(13823);
  if (!tmp6) {
    num2 = tmp7;
  }
  if (!tmp6) {
    tmp6 = 0 === tmp7;
  }
  const obj12 = {};
  const tmp22 = isLandscape ? TraitPickerLandscape : TraitPickerPortrait;
  const merged = Object.assign(obj10);
  return tmp20(tmp22, obj12);
};
