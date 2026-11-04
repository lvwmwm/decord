// Module ID: 13917
// Function ID: 13918
// Name: FinalizeTraitActionSheet
// Dependencies: [21, 6569, 3219, 7502, 7457, 1113, 7199, 5382, 7202, 2]
// Exports: default

// Module 13917 (FinalizeTraitActionSheet)
import Fragment from "Fragment" /* 21 */;
import _modDef3219 from "module_3219" /* 3219 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6569 */;
import size from "module_2" /* 2 */;

let option;

const jsx = Fragment.jsx;
let obj = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA, subtitle: _modDef3219.f4BaUg };
const items = [obj, , , , , ];
let obj2 = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE, subtitle: _modDef3219.gpEOaS };
items[1] = obj2;
const obj3 = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES, subtitle: _modDef3219["l/tCAO"] };
items[2] = obj3;
items[3] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, subtitle: _modDef3219["+oFzYq"] };
({ option: CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, subtitle: _modDef3219["+oFzYq"] });
items[4] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, subtitle: _modDef3219.xa55WX };
({ option: CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, subtitle: _modDef3219.xa55WX });
items[5] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE, subtitle: _modDef3219["1dd6Fx"] };
({ option: CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE, subtitle: _modDef3219["1dd6Fx"] });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx");

export default function FinalizeTraitActionSheet(onSelectOption) {
  let intl;
  let intl2;
  onSelectOption = onSelectOption.onSelectOption;
  const selectedOption = onSelectOption.selectedOption;
  const ActionSheet = onSelectOption(7502).ActionSheet;
  let obj2 = { title: intl.string(_modDef3219.Zl5vPW) };
  const BottomSheetTitleHeader = onSelectOption(7457).BottomSheetTitleHeader;
  intl = onSelectOption(1113).intl;
  ({
    hasIcons: false,
    accessibilityLabel: intl2.string(_modDef3219.Zl5vPW),
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
      const intl = onSelectOption(dependencyMap[5]).intl;
      return <TableRadioRow key={option} value={option} label={obj2.getCustomizationOptionName(option)} subLabel={intl.string(subtitle)} />;
    })
  });
  const TableRadioGroup = onSelectOption(7199).TableRadioGroup;
  intl2 = onSelectOption(1113).intl;
  return <ActionSheet startExpanded header={null}>{null}</ActionSheet>;
};
