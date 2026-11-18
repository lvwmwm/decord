// Module ID: 12723
// Function ID: 12724
// Name: FinalizeTraitActionSheet
// Dependencies: [21, 7464, 7426, 1113, 3339, 7258, 5037, 6244, 7260, 2]
// Exports: default

// Module 12723 (FinalizeTraitActionSheet)
import Fragment from "Fragment" /* 21 */;
import _modDef3339 from "module_3339" /* 3339 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx");

export default function FinalizeTraitActionSheet(onSelectOption) {
  let intl;
  let intl2;
  let prop;
  onSelectOption = onSelectOption.onSelectOption;
  const selectedOption = onSelectOption.selectedOption;
  const ActionSheet = onSelectOption(7464).ActionSheet;
  let obj2 = { title: intl.string(_modDef3339.Zl5vPW) };
  const BottomSheetTitleHeader = onSelectOption(7426).BottomSheetTitleHeader;
  intl = onSelectOption(1113).intl;
  ({
    hasIcons: false,
    accessibilityLabel: intl2.string(_modDef3339.Zl5vPW),
    defaultValue: selectedOption,
    onChange(arg0) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      onSelectOption(arg0);
    },
    children: prop.map((value) => {
      const TableRadioRow = onSelectOption(dependencyMap[8]).TableRadioRow;
      const obj2 = onSelectOption(dependencyMap[7]);
      return <TableRadioRow key={arg0} value={arg0} label={obj2.getCustomizationOptionName(arg0)} />;
    })
  });
  const TableRadioGroup = onSelectOption(7258).TableRadioGroup;
  intl2 = onSelectOption(1113).intl;
  prop = onSelectOption(6244).FINALIZE_MORE_OPTIONS;
  return <ActionSheet startExpanded header={null}>{null}</ActionSheet>;
};
