// Module ID: 14545
// Function ID: 14546
// Name: FinalizeTraitActionSheet
// Dependencies: [21, 6744, 7951, 7913, 1113, 3317, 7745, 5552, 7747, 2]
// Exports: default

// Module 14545 (FinalizeTraitActionSheet)
import Fragment from "Fragment" /* 21 */;
import _modDef3317 from "module_3317" /* 3317 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6744 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const items = [CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA, CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE, CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES, CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE];
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx");

export default function FinalizeTraitActionSheet(onSelectOption) {
  let intl;
  let intl2;
  onSelectOption = onSelectOption.onSelectOption;
  const selectedOption = onSelectOption.selectedOption;
  const ActionSheet = onSelectOption(7951).ActionSheet;
  let obj2 = { title: intl.string(_modDef3317.Zl5vPW) };
  const BottomSheetTitleHeader = onSelectOption(7913).BottomSheetTitleHeader;
  intl = onSelectOption(1113).intl;
  ({
    hasIcons: false,
    accessibilityLabel: intl2.string(_modDef3317.Zl5vPW),
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
  const TableRadioGroup = onSelectOption(7745).TableRadioGroup;
  intl2 = onSelectOption(1113).intl;
  return <ActionSheet startExpanded header={null}>{null}</ActionSheet>;
};
