// Module ID: 12928
// Function ID: 12929
// Name: TraitPicker
// Dependencies: [19, 17, 21, 5043, 12926, 575, 6765, 1112, 3495, 5634, 12860, 1495, 5223, 12929, 6444, 6397, 12931, 2]
// Exports: default, useTraitOptionSize

// Module 12928 (TraitPicker)
import react2 from "react" /* 19 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import _modDef3495 from "module_3495" /* 3495 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5223 */;
import Text_Text from "Text/Text" /* 5634 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6765 */;
import CheckpointTextDefault from "CheckpointText" /* 12860 */;
import TraitOptionList from "TraitOptionList" /* 12926 */;
import TraitOptionDetailsDefault from "TraitOptionDetails" /* 12929 */;
import useTraitPicker from "useTraitPicker" /* 12931 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const TraitOptionListDefault = TraitOptionList;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function EarnedCountHeader(customizationOption) {
  let earnedCount;
  let intl2;
  let obj4;
  let totalCount;
  ({ earnedCount, totalCount } = customizationOption);
  customizationOption = customizationOption.customizationOption;
  const tmp = closure_9();
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
  const combined = "" + customizationOptionName + ", " + intl.formatToPlainString(_modDef3495.Vfq58K, obj2);
  const obj3 = { variant: "body-md/medium", color: "text-default", style: tmp.earnedRow, accessibilityRole: "header", accessibilityLabel: combined, children: intl2.format(_modDef3495.Vfq58K, obj4) };
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  obj4 = {
    earnedCount,
    totalCount,
    countHook(children, arg1) {
      const obj = { variant: "body-md/semibold", tabularNumbers: true, children };
      return closure_1_5(CheckpointTextDefault, obj, arg1);
    }
  };
  return hasOwnProperty(Text, obj3);
}
class TraitPickerDetails {
  constructor(option) {
    let customizationOption;
    let obj2;
    let obj3;
    let title;
    let titleAccessibilityLabel;
    let tmp7;
    option = option.option;
    ({ customizationOption, title, titleAccessibilityLabel } = option);
    let tmp2 = null;
    if (null != option) {
      const obj = { style: tmp.details, children: hasOwnProperty(tmp7, obj2) };
      obj2 = { option, hideRarity: !obj3.getIsTraitRarityVisible(customizationOption), title, titleAccessibilityLabel };
      tmp7 = TraitOptionDetailsDefault;
      obj3 = CheckpointCustomizationUtils;
      tmp2 = hasOwnProperty(React3, obj);
    }
    return tmp2;
  }
}
class TraitPickerOptionList {
  constructor(customizationOption) {
    let options;
    let options2;
    let tmp4;
    customizationOption = customizationOption.customizationOption;
    const merged = Object.assign(customizationOption, Object.assign({ customizationOption: 0 }));
    ({ options, options: options2 } = merged);
    const someResult = options.some((optionId) => optionId.optionId === merged.selectedOptionId);
    if (someResult) {
      TraitOptionListDefault;
      const merged1 = Object.assign(merged);
      tmp4 = <tmp8 key={customizationOption} customizationOption={customizationOption} hideRarity={!merged(6765).getIsTraitRarityVisible(customizationOption)} />;
      const obj2 = merged(6765);
    } else {
      tmp4 = null;
    }
    return tmp4;
  }
}
class TraitPickerPortrait {
  constructor(arg0) {
    let details;
    let header;
    let items;
    let optionList;
    ({ header, optionList, details } = arg0);
    const obj = { style: closure_9().container, children: items };
    items = [header, optionList, details];
    return metroRequire(React3, obj);
  }
}
class TraitPickerLandscape {
  constructor(details) {
    let header;
    let items;
    let items1;
    let optionList;
    details = details.details;
    ({ header, optionList } = details);
    const tmp = closure_9();
    const obj = { alwaysBounceVertical: false, contentContainerStyle: tmp.landscapeScrollContent, children: items };
    items = [, , , , , ];
    const obj2 = { style: tmp.landscapeGap };
    items[0] = hasOwnProperty(React3, obj2);
    items[1] = header;
    const obj3 = { style: tmp.landscapeGap };
    items[2] = hasOwnProperty(React3, obj3);
    let tmp2Result = null != details;
    const tmp3 = _false;
    if (tmp2Result) {
      const obj4 = { children: items1 };
      items1 = [details, ];
      const obj5 = { style: tmp.landscapeGap };
      items1[1] = hasOwnProperty(React3, obj5);
      tmp2Result = tmp2(metroImportDefault, obj4);
    }
    items[3] = tmp2Result;
    items[4] = optionList;
    const obj6 = { style: tmp.landscapeGap };
    items[5] = hasOwnProperty(React3, obj6);
    return metroRequire(tmp3, obj);
  }
}
({ ScrollView: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
const createElement = react2.createElement;
let createStyles = createStyles_mod;
let obj = { container: obj2, earnedRow: obj3, landscapeGap: obj4, details: obj5, landscapeScrollContent: { flexGrow: 1, justifyContent: "center" } };
obj2 = { gap: TraitOptionList.TRAIT_OPTION_SPACING };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: TraitOptionList.CONTENT_INSET };
obj4 = { flexGrow: 1, minHeight: nativeDefault.space.PX_8, maxHeight: nativeDefault.space.PX_16 };
obj5 = { paddingHorizontal: TraitOptionList.CONTENT_INSET };
const React4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPicker.tsx");

export default function TraitPicker(onSelectOption) {
  let customizationOption;
  let disabled;
  let isLandscape;
  let obj3;
  let obj4;
  let obj5;
  ({ customizationOption, disabled, isLandscape } = onSelectOption);
  onSelectOption = onSelectOption.onSelectOption;
  const obj = useTraitPicker;
  const traitPicker = obj.useTraitPicker({ customizationOption, disabled, onSelectOption });
  let str = "md";
  if (isLandscape) {
    str = "md";
    if (tmp4 <= useWindowSizeClassifier.WINDOW_SIZE_THRESHOLD_LARGE) {
      str = "sm";
    }
  }
  const obj2 = { header: hasOwnProperty(EarnedCountHeader, obj3), optionList: hasOwnProperty(TraitPickerOptionList, obj4), details: hasOwnProperty(TraitPickerDetails, obj5) };
  obj3 = { customizationOption, earnedCount: traitPicker.earnedCount, totalCount: traitPicker.totalCount };
  obj4 = { customizationOption, size: str, options: traitPicker.traitOptions, selectedOptionId: traitPicker.selectedOptionId, disabled, onSelectOption: traitPicker.onSelectOption };
  obj5 = { customizationOption, option: traitPicker.selectedOption };
  const tmp6 = isLandscape ? TraitPickerLandscape : TraitPickerPortrait;
  return hasOwnProperty(tmp6, obj2);
};
export function useTraitOptionSize(isLandscape) {
  let str = "md";
  if (isLandscape) {
    str = "md";
    if (tmp2 <= useWindowSizeClassifier.WINDOW_SIZE_THRESHOLD_LARGE) {
      str = "sm";
    }
  }
  return str;
}
export { TraitPickerDetails };
export { TraitPickerOptionList };
export { TraitPickerPortrait };
export { TraitPickerLandscape };
