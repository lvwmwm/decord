// Module ID: 12715
// Function ID: 12716
// Name: FinalizeTraitActionSheet
// Dependencies: [21, 7420, 7381, 1112, 3442, 7125, 5131, 6639, 7127, 2]
// Exports: default

// Module 12715 (FinalizeTraitActionSheet)
import Fragment from "Fragment" /* 21 */;
import _modDef3442 from "module_3442" /* 3442 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx");

export default function FinalizeTraitActionSheet(onSelectOption) {
  let intl;
  let intl2;
  let prop;
  onSelectOption = onSelectOption.onSelectOption;
  const selectedOption = onSelectOption.selectedOption;
  const ActionSheet = onSelectOption(7420).ActionSheet;
  let obj2 = { title: intl.string(_modDef3442.Zl5vPW) };
  const BottomSheetTitleHeader = onSelectOption(7381).BottomSheetTitleHeader;
  intl = onSelectOption(1112).intl;
  ({
    hasIcons: false,
    accessibilityLabel: intl2.string(_modDef3442.Zl5vPW),
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
  const TableRadioGroup = onSelectOption(7125).TableRadioGroup;
  intl2 = onSelectOption(1112).intl;
  prop = onSelectOption(6639).FINALIZE_MORE_OPTIONS;
  return <ActionSheet startExpanded header={null}>{null}</ActionSheet>;
};
