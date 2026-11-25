// Module ID: 12879
// Function ID: 12880
// Name: FinalizeTraitActionSheet
// Dependencies: [21, 7515, 7476, 1112, 3494, 7220, 5226, 6734, 7222, 2]
// Exports: default

// Module 12879 (FinalizeTraitActionSheet)
import Fragment from "Fragment" /* 21 */;
import _modDef3494 from "module_3494" /* 3494 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx");

export default function FinalizeTraitActionSheet(onSelectOption) {
  let intl;
  let intl2;
  let prop;
  onSelectOption = onSelectOption.onSelectOption;
  const selectedOption = onSelectOption.selectedOption;
  const ActionSheet = onSelectOption(7515).ActionSheet;
  let obj2 = { title: intl.string(_modDef3494.Zl5vPW) };
  const BottomSheetTitleHeader = onSelectOption(7476).BottomSheetTitleHeader;
  intl = onSelectOption(1112).intl;
  ({
    hasIcons: false,
    accessibilityLabel: intl2.string(_modDef3494.Zl5vPW),
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
  const TableRadioGroup = onSelectOption(7220).TableRadioGroup;
  intl2 = onSelectOption(1112).intl;
  prop = onSelectOption(6734).FINALIZE_MORE_OPTIONS;
  return <ActionSheet startExpanded header={null}>{null}</ActionSheet>;
};
