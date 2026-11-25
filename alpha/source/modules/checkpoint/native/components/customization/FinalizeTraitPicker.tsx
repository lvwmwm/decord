// Module ID: 12866
// Function ID: 12867
// Name: FinalizeTraitPicker
// Dependencies: [19, 17, 21, 5012, 12867, 575, 6734, 12869, 5603, 1112, 3494, 12868, 12876, 12877, 12872, 12878, 6411, 6412, 2]
// Exports: default

// Module 12866 (FinalizeTraitPicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import _modDef3494 from "module_3494" /* 3494 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6411 */;
import CheckpointTrait from "CheckpointTrait" /* 6412 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6734 */;
import TraitOptionList from "TraitOptionList" /* 12867 */;
import TraitOptionItem from "TraitOptionItem" /* 12868 */;
import TraitPicker from "TraitPicker" /* 12869 */;
import useTraitPicker from "useTraitPicker" /* 12872 */;
import useLastColorwayIdByOutfitIdDefault from "useLastColorwayIdByOutfitId" /* 12876 */;
import useLastMoreTabOptionDefault from "useLastMoreTabOption" /* 12877 */;
import FinalizeTraitTabs from "FinalizeTraitTabs" /* 12878 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let tmp6;
const Text_Text = tmp6(5603);
function ColorwayDetails(option) {
  let combined;
  let items;
  let name;
  let tmp8;
  option = option.option;
  if (option != null) {
    name = option.getName();
  }
  let outfitName;
  if (null != option) {
    const obj = CheckpointCustomizationUtils;
    outfitName = obj.getOutfitName(option.optionId);
  }
  const obj2 = { customizationOption: CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR, option, title: tmp8, titleAccessibilityLabel: combined };
  const TraitPickerDetails = TraitPicker.TraitPickerDetails;
  tmp8 = undefined;
  if (null != outfitName) {
    const obj3 = { children: items };
    items = [name, ];
    const _HermesInternal = HermesInternal;
    const obj4 = { variant: "body-lg/medium", color: "text-subtle", children: " / " + outfitName };
    const Text = Text_Text.Text;
    items[1] = React3(Text, obj4);
    tmp8 = metroRequire(hasOwnProperty, obj3);
  }
  combined = undefined;
  if (null != outfitName) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + name + ", " + outfitName;
  }
  return React3(TraitPickerDetails, obj2);
}
function NoOutfitColorways(minHeight) {
  let intl;
  let intl2;
  let items1;
  minHeight = minHeight.minHeight;
  const tmp = closure_7();
  const items = [tmp.message, ];
  let tmp4 = null != minHeight;
  const tmp2 = metroRequire;
  const tmp3 = View;
  if (tmp4) {
    tmp4 = { minHeight };
    const obj = { minHeight };
  }
  const obj2 = { style: items, children: items1 };
  items[1] = tmp4;
  const obj3 = { variant: "body-lg/medium", color: "text-default", children: intl.string(_modDef3494.zsYYN1) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items1 = [React3(Text, obj3), ];
  const obj4 = { variant: "body-md/medium", color: "text-subtle", style: tmp.description, children: intl2.string(_modDef3494.BkuqWx) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items1[1] = React3(Text2, obj4);
  return tmp2(tmp3, obj2);
}
function DetailsSpacer() {
  let items;
  const tmp = closure_7();
  const obj = { style: tmp.message, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items };
  items = [React3(Text_Text.Text, { variant: "body-lg/medium", children: " " }), ];
  const obj2 = { variant: "body-md/medium", style: tmp.description, children: " " };
  items[1] = React3(Text_Text.Text, obj2);
  return metroRequire(View, obj);
}
function OptionListSpacer(arg0) {
  const obj = { style: { height: TraitOptionItem.TRAIT_OPTION_SIZE_TO_DIMENSIONS[arg0.size].height }, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  ({ height: TraitOptionItem.TRAIT_OPTION_SIZE_TO_DIMENSIONS[arg0.size].height });
  return React3(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { message: obj2, description: obj3 };
obj2 = { paddingHorizontal: TraitOptionList.CONTENT_INSET };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitPicker.tsx");

export default function FinalizeTraitPicker(arg0) {
  let customizationOption;
  let disabled;
  let isCurrentTraitBlocked;
  let isLandscape;
  let obj11;
  let obj12;
  let obj13;
  let obj14;
  let obj15;
  let obj5;
  let obj6;
  let onSelectFinalizeOption;
  let onSelectOption;
  let onSelectOption2;
  let onSelectOption3;
  let traitOptions;
  let traitOptions2;
  ({ customizationOption, disabled, isLandscape } = arg0);
  ({ isCurrentTraitBlocked, onSelectOption, onSelectFinalizeOption } = arg0);
  const tmp2 = useLastColorwayIdByOutfitIdDefault();
  let closure_0 = tmp2;
  const tmp3 = useLastMoreTabOptionDefault(customizationOption);
  const obj = useTraitPicker;
  const traitPicker = obj.useTraitPicker({ customizationOption, disabled, onSelectOption });
  const obj2 = TraitPicker;
  const traitOptionSize = obj2.useTraitOptionSize(isLandscape);
  const tmp7 = TraitPicker;
  const tmp8 = isLandscape ? tmp7.TraitPickerLandscape : tmp7.TraitPickerPortrait;
  const obj3 = { header: React3(FinalizeTraitTabs.FinalizeTraitTabs, { activeCustomizationOption: customizationOption, moreTabOption: tmp3, onSelectOption: onSelectFinalizeOption, isCurrentTraitBlocked, disabled }) };
  if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR === customizationOption) {
    let tmp15;
    const selectedOptionId = traitPicker.selectedOptionId;
    if (null != selectedOptionId) {
      let obj4;
      const tmp4Result = CheckpointCharacterTraits;
      if (!tmp4Result.isTraitNoneOptionId(CheckpointTrait.CheckpointTrait.OUTFIT, selectedOptionId)) {
        obj4 = { optionList: React3(TraitPicker.TraitPickerOptionList, obj5), details: React3(ColorwayDetails, obj6) };
        ({ traitOptions, onSelectOption: onSelectOption2 } = traitPicker);
        obj5 = { customizationOption, size: traitOptionSize, options: traitOptions, selectedOptionId: traitPicker.selectedOptionId, disabled, onSelectOption: onSelectOption2 };
        obj6 = { option: traitPicker.selectedOption };
      }
      obj13 = obj4;
    }
    const obj7 = { optionList: null, details: null };
    if (isLandscape) {
      const obj8 = { size: traitOptionSize };
      obj7.optionList = React3(OptionListSpacer, obj8);
      obj7.details = React3(NoOutfitColorways, {});
      tmp15 = obj7;
    } else {
      const obj9 = { minHeight: TraitOptionItem.TRAIT_OPTION_SIZE_TO_DIMENSIONS[traitOptionSize].height };
      obj7.optionList = React3(NoOutfitColorways, obj9);
      obj7.details = React3(DetailsSpacer, {});
      tmp15 = obj7;
    }
    obj4 = tmp15;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT === customizationOption) {
    function selectOutfit(arg0, arg1) {
      const onSelectOption = traitPicker.onSelectOption;
      let value = closure_0.get(arg1);
      if (value == null) {
        value = arg1;
      }
      onSelectOption(arg0, value);
    }
    const obj10 = { optionList: React3(TraitPicker.TraitPickerOptionList, obj11), details: React3(TraitPicker.TraitPickerDetails, obj12) };
    const tmp4Result2 = CheckpointCustomizationUtils;
    const result = tmp4Result2.withLastColorwayThumbnails(traitPicker.traitOptions, tmp2);
    obj13 = obj10;
    obj11 = { customizationOption, size: traitOptionSize, options: result, selectedOptionId: traitPicker.selectedOptionId, disabled, onSelectOption: selectOutfit };
    obj12 = { customizationOption, option: traitPicker.selectedOption };
  } else {
    obj13 = { optionList: React3(TraitPicker.TraitPickerOptionList, obj14), details: React3(TraitPicker.TraitPickerDetails, obj15) };
    ({ traitOptions: traitOptions2, onSelectOption: onSelectOption3 } = traitPicker);
    obj14 = { customizationOption, size: traitOptionSize, options: traitOptions2, selectedOptionId: traitPicker.selectedOptionId, disabled, onSelectOption: onSelectOption3 };
    obj15 = { customizationOption, option: traitPicker.selectedOption };
  }
  const merged = Object.assign(obj13);
  return React3(tmp8, obj3);
};
