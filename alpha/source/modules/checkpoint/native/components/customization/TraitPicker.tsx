// Module ID: 13943
// Function ID: 13944
// Name: TraitPicker
// Dependencies: [19, 17, 6201, 21, 5142, 13944, 575, 6568, 1113, 3248, 5753, 13897, 13946, 1493, 13948, 13949, 13684, 5320, 13950, 2]
// Exports: default

// Module 13943 (TraitPicker)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _modDef3248 from "module_3248" /* 3248 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5320 */;
import Text_Text from "Text/Text" /* 5753 */;
import CheckpointConstants from "CheckpointConstants" /* 6201 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6568 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 13684 */;
import CheckpointTextDefault from "CheckpointText" /* 13897 */;
import TraitOptionList from "TraitOptionList" /* 13944 */;
import TraitOptionDetails from "TraitOptionDetails" /* 13946 */;
import useTraitPickerOptions from "useTraitPickerOptions" /* 13948 */;
import react2 from "react" /* 13949 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const TraitOptionDetailsDefault = TraitOptionDetails;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp;
const TraitOptionListDefault = tmp(13944);
function EarnedCountHeader(customizationOption) {
  let earnedCount;
  let intl2;
  let obj4;
  let totalCount;
  ({ earnedCount, totalCount } = customizationOption);
  customizationOption = customizationOption.customizationOption;
  const tmp = closure_10();
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
  const combined = "" + customizationOptionName + ", " + intl.formatToPlainString(_modDef3248.Vfq58K, obj2);
  const obj3 = { variant: "body-sm/medium", color: "text-default", style: tmp.earnedRow, accessibilityRole: "header", accessibilityLabel: combined, children: intl2.format(_modDef3248.Vfq58K, obj4) };
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  obj4 = {
    earnedCount,
    totalCount,
    countHook(children, arg1) {
      const obj = { variant: "mono-md/bold", children };
      return closure_1_7(CheckpointTextDefault, obj, arg1);
    }
  };
  return metroImportDefault(Text, obj3);
}
function TraitPickerDetails(arg0) {
  let asset;
  let descriptionVisibility;
  ({ asset, descriptionVisibility } = arg0);
  const obj = { style: closure_10().details, children: metroImportDefault(TraitOptionDetailsDefault, { asset, descriptionVisibility }) };
  return metroImportDefault(hasOwnProperty, obj);
}
function TraitPickerPortrait(selectedAsset) {
  let DescriptionVisibility;
  let header;
  let isRarityVisible;
  let items;
  let optionList;
  selectedAsset = selectedAsset.selectedAsset;
  ({ header, optionList, isRarityVisible } = selectedAsset);
  const obj = { style: closure_10().container, children: items };
  items = [header, optionList, ];
  let tmp4Result = null != selectedAsset;
  const tmp = metroImportAll;
  const tmp2 = hasOwnProperty;
  if (tmp4Result) {
    const obj2 = { asset: selectedAsset, descriptionVisibility: isRarityVisible ? DescriptionVisibility.VISIBLE : DescriptionVisibility.INVISIBLE };
    DescriptionVisibility = TraitOptionDetails.DescriptionVisibility;
    tmp4Result = metroImportDefault(TraitPickerDetails, obj2);
  }
  items[2] = tmp4Result;
  return tmp(tmp2, obj);
}
function TraitPickerLandscape(selectedAsset) {
  let DescriptionVisibility;
  let header;
  let isRarityVisible;
  let items;
  let items1;
  let optionList;
  selectedAsset = selectedAsset.selectedAsset;
  ({ header, optionList, isRarityVisible } = selectedAsset);
  const tmp = closure_10();
  const obj = { alwaysBounceVertical: false, contentContainerStyle: tmp.landscapeScrollContent, children: items };
  items = [, , , , , ];
  const obj2 = { style: tmp.landscapeGap };
  items[0] = metroImportDefault(hasOwnProperty, obj2);
  items[1] = header;
  const obj3 = { style: tmp.landscapeGap };
  items[2] = metroImportDefault(hasOwnProperty, obj3);
  let tmp2Result = null != selectedAsset;
  const tmp3 = React3;
  if (tmp2Result) {
    const obj4 = { asset: selectedAsset, descriptionVisibility: isRarityVisible ? DescriptionVisibility.VISIBLE : DescriptionVisibility.GONE };
    DescriptionVisibility = TraitOptionDetails.DescriptionVisibility;
    const obj5 = { children: items1 };
    items1 = [metroImportDefault(TraitPickerDetails, obj4), ];
    const obj6 = { style: tmp.landscapeGap };
    items1[1] = metroImportDefault(hasOwnProperty, obj6);
    tmp2Result = tmp2(React4, obj5);
  }
  items[3] = tmp2Result;
  items[4] = optionList;
  const obj7 = { style: tmp.landscapeGap };
  items[5] = metroImportDefault(hasOwnProperty, obj7);
  return metroImportAll(tmp3, obj);
}
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
const rarityOrder = CheckpointConstants.CHECKPOINT_RARITY_ORDER_MOBILE;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, earnedRow: obj3, landscapeGap: obj4, details: obj5, landscapeScrollContent: { flexGrow: 1, justifyContent: "center" } };
obj2 = { gap: TraitOptionList.TRAIT_OPTION_SPACING };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: TraitOptionList.CONTENT_INSET };
obj4 = { flexGrow: 1, minHeight: nativeDefault.space.PX_8, maxHeight: nativeDefault.space.PX_16 };
obj5 = { paddingHorizontal: TraitOptionList.CONTENT_INSET };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPicker.tsx");

export default function TraitPicker(selectedOptionId) {
  let customizationOption;
  let disabled;
  let earnedCount;
  let isCurrentTraitBlocked;
  let isFinalizeRoute;
  let isLandscape;
  let obj9;
  let onSelectFinalizeOption;
  let onSelectOption;
  let optionIds;
  let savedOptionId;
  let tmp11;
  let tmp8Result;
  let totalCount;
  ({ customizationOption, disabled } = selectedOptionId);
  ({ isFinalizeRoute, isCurrentTraitBlocked } = selectedOptionId);
  if (disabled === undefined) {
    disabled = false;
  }
  selectedOptionId = selectedOptionId.selectedOptionId;
  ({ isLandscape, optionIds, savedOptionId } = selectedOptionId);
  if (isLandscape === undefined) {
    isLandscape = false;
  }
  ({ onSelectOption, onSelectFinalizeOption } = selectedOptionId);
  let tmp = importDefault;
  const height = useWindowDimensionsDefault().height;
  const obj = CheckpointCustomizationUtils;
  const isTraitRarityVisible = obj.getIsTraitRarityVisible(customizationOption);
  const obj2 = useTraitPickerOptions;
  const obj3 = { customizationOption, optionIds, savedOptionId, rarityOrder };
  const traitPickerOptions = obj2.useTraitPickerOptions(obj3);
  const availableTraitOptions = traitPickerOptions.availableTraitOptions;
  ({ totalCount, earnedCount } = traitPickerOptions);
  const obj4 = react2;
  const obj5 = { availableTraitOptions, selectedOptionId, onSelectOption: CheckpointActionCreators.selectCharacterTrait, isPaused: disabled };
  const autoSelectTraitOption = obj4.useAutoSelectTraitOption(obj5);
  const items = [availableTraitOptions, selectedOptionId];
  let str = "md";
  const memo = react.useMemo(() => {
    let found = availableTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
    const tmp = availableTraitOptions;
    if (found == null) {
      found = tmp[0];
    }
    return found;
  }, items);
  if (isLandscape) {
    str = "md";
    if (height <= useWindowSizeClassifier.WINDOW_SIZE_THRESHOLD_LARGE) {
      str = "sm";
    }
  }
  if (isFinalizeRoute) {
    const obj6 = { activeCustomizationOption: customizationOption, onSelectOption: onSelectFinalizeOption, disableSwitching: isCurrentTraitBlocked, disabled };
    tmp8Result = tmp8(tmp3(13950).FinalizeTraitTabs, obj6);
    tmp11 = tmp8;
  } else {
    const obj7 = { customizationOption, earnedCount, totalCount };
    tmp8Result = tmp8(EarnedCountHeader, obj7);
    tmp11 = tmp8;
  }
  const obj8 = { header: tmp8Result, optionList: tmp11(TraitOptionListDefault, obj9, customizationOption), selectedAsset: memo, isRarityVisible: isTraitRarityVisible };
  const obj10 = {};
  obj9 = { customizationOption, size: str, options: availableTraitOptions, selectedOptionId, disabled, hideRarity: !isTraitRarityVisible, onSelectOption };
  const tmp12 = isLandscape ? TraitPickerLandscape : TraitPickerPortrait;
  const merged = Object.assign(obj8);
  return tmp11(tmp12, obj10);
};
