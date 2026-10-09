// Module ID: 15954
// Function ID: 15955
// Name: FinalizeTraitActionSheet
// Dependencies: [21, 15924, 3115, 558, 576, 6835, 1126, 5055, 6266, 6892, 6267, 2]

// Module 15954 (FinalizeTraitActionSheet)
import Fragment from "Fragment" /* 21 */;
import _modDef3115 from "module_3115" /* 3115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 15924 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let option;

const jsx = Fragment.jsx;
let obj = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA, subtitle: _modDef3115.f4BaUg };
const items = [obj, , , , , ];
let obj2 = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE, subtitle: _modDef3115.gpEOaS };
items[1] = obj2;
const obj3 = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES, subtitle: _modDef3115["l/tCAO"] };
items[2] = obj3;
items[3] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, subtitle: _modDef3115["+oFzYq"] };
({ option: CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, subtitle: _modDef3115["+oFzYq"] });
items[4] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, subtitle: _modDef3115.xa55WX };
({ option: CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, subtitle: _modDef3115.xa55WX });
items[5] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE, subtitle: _modDef3115["1dd6Fx"] };
({ option: CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE, subtitle: _modDef3115["1dd6Fx"] });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function FinalizeTraitActionSheet(arg0) {
  let first;
  let onSelectOption;
  let selectedOption;
  let tmp11;
  let obj = onSelectOption(576);
  const cResult = obj.c(8);
  ({ selectedOption, onSelectOption } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const BottomSheetTitleHeader = tmp(6835).BottomSheetTitleHeader;
    let intl = tmp(1126).intl;
    const tmp7 = <BottomSheetTitleHeader title={intl.string(_modDef3115.Zl5vPW)} />;
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(_modDef3115.Zl5vPW);
    cResult[1] = stringResult;
  }
  if (cResult[2] !== onSelectOption) {
    const fn = function c(arg0) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      onSelectOption(arg0);
    };
    cResult[2] = onSelectOption;
    cResult[3] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const mapped = items.map((option) => {
      option = option.option;
      const subtitle = option.subtitle;
      const TableRadioRow = onSelectOption(dependencyMap[8]).TableRadioRow;
      const obj2 = onSelectOption(dependencyMap[1]);
      const intl = onSelectOption(dependencyMap[6]).intl;
      return <TableRadioRow key={option} value={option} label={obj2.getCustomizationOptionName(option)} subLabel={intl.string(subtitle)} />;
    });
    cResult[4] = mapped;
  }
  if (cResult[5] === selectedOption) {
    let tmp15;
    if (cResult[6] === tmp11) {
      tmp15 = cResult[7];
    }
    return tmp15;
  }
  const ActionSheet = tmp(6892).ActionSheet;
  const tmp16 = <ActionSheet startExpanded header={first}>{null}</ActionSheet>;
  cResult[5] = selectedOption;
  cResult[6] = tmp11;
  cResult[7] = tmp16;
  tmp15 = tmp16;
}) : (function FinalizeTraitActionSheet(onSelectOption) {
  let intl;
  let intl2;
  onSelectOption = onSelectOption.onSelectOption;
  const selectedOption = onSelectOption.selectedOption;
  const ActionSheet = onSelectOption(6892).ActionSheet;
  let obj2 = { title: intl.string(_modDef3115.Zl5vPW) };
  const BottomSheetTitleHeader = onSelectOption(6835).BottomSheetTitleHeader;
  intl = onSelectOption(1126).intl;
  ({
    hasIcons: false,
    accessibilityLabel: intl2.string(_modDef3115.Zl5vPW),
    defaultValue: selectedOption,
    onChange(arg0) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      onSelectOption(arg0);
    },
    children: items.map((option) => {
      option = option.option;
      const subtitle = option.subtitle;
      const TableRadioRow = onSelectOption(dependencyMap[8]).TableRadioRow;
      const obj2 = onSelectOption(dependencyMap[1]);
      const intl = onSelectOption(dependencyMap[6]).intl;
      return <TableRadioRow key={option} value={option} label={obj2.getCustomizationOptionName(option)} subLabel={intl.string(subtitle)} />;
    })
  });
  const TableRadioGroup = onSelectOption(6267).TableRadioGroup;
  intl2 = onSelectOption(1126).intl;
  return <ActionSheet startExpanded header={null}>{null}</ActionSheet>;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx");

export default tmp2;
