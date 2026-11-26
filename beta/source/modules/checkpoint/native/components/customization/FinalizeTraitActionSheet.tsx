// Module ID: 12801
// Function ID: 12802
// Name: FinalizeTraitActionSheet
// Dependencies: [21, 7553, 7515, 1112, 3440, 7347, 5127, 6336, 7349, 2]
// Exports: default

// Module 12801 (FinalizeTraitActionSheet)
import Fragment from "Fragment" /* 21 */;
import _modDef3440 from "module_3440" /* 3440 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx");

export default function FinalizeTraitActionSheet(onSelectOption) {
  let intl;
  let intl2;
  let prop;
  onSelectOption = onSelectOption.onSelectOption;
  const selectedOption = onSelectOption.selectedOption;
  const ActionSheet = onSelectOption(7553).ActionSheet;
  let obj2 = { title: intl.string(_modDef3440.Zl5vPW) };
  const BottomSheetTitleHeader = onSelectOption(7515).BottomSheetTitleHeader;
  intl = onSelectOption(1112).intl;
  ({
    hasIcons: false,
    accessibilityLabel: intl2.string(_modDef3440.Zl5vPW),
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
  const TableRadioGroup = onSelectOption(7347).TableRadioGroup;
  intl2 = onSelectOption(1112).intl;
  prop = onSelectOption(6336).FINALIZE_MORE_OPTIONS;
  return <ActionSheet startExpanded header={null}>{null}</ActionSheet>;
};
