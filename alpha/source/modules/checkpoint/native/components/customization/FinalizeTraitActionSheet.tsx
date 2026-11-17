// Module ID: 13416
// Function ID: 13417
// Name: FinalizeTraitActionSheet
// Dependencies: [21, 6742, 7961, 7923, 1113, 3319, 7755, 5546, 7757, 2]
// Exports: default

// Module 13416 (FinalizeTraitActionSheet)
import Fragment from "Fragment" /* 21 */;
import _modDef3319 from "module_3319" /* 3319 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6742 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const items = [CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA, CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE, CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES, CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE];
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx");

export default function FinalizeTraitActionSheet(onSelectOption) {
  let intl;
  let intl2;
  onSelectOption = onSelectOption.onSelectOption;
  const selectedOption = onSelectOption.selectedOption;
  const ActionSheet = onSelectOption(7961).ActionSheet;
  let obj2 = { title: intl.string(_modDef3319.Zl5vPW) };
  const BottomSheetTitleHeader = onSelectOption(7923).BottomSheetTitleHeader;
  intl = onSelectOption(1113).intl;
  ({
    hasIcons: false,
    accessibilityLabel: intl2.string(_modDef3319.Zl5vPW),
    defaultValue: selectedOption,
    onChange(arg0) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      onSelectOption(arg0);
    },
    children: items.map((value) => {
      const TableRadioRow = onSelectOption(dependencyMap[8]).TableRadioRow;
      const obj2 = onSelectOption(dependencyMap[1]);
      return <TableRadioRow key={arg0} value={arg0} label={obj2.getCustomizationOptionName(arg0)} />;
    })
  });
  const TableRadioGroup = onSelectOption(7755).TableRadioGroup;
  intl2 = onSelectOption(1113).intl;
  return <ActionSheet startExpanded header={null}>{null}</ActionSheet>;
};
