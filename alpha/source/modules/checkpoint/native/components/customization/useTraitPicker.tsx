// Module ID: 12716
// Function ID: 12717
// Name: useTraitPicker
// Dependencies: [19, 5877, 12717, 12718, 12719, 12424, 2]
// Exports: useTraitPicker

// Module 12716 (useTraitPicker)
import CheckpointConstants from "CheckpointConstants" /* 5877 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 12424 */;
import useTraitPickerSelection from "useTraitPickerSelection" /* 12717 */;
import useTraitPickerOptions from "useTraitPickerOptions" /* 12718 */;
import react2 from "react" /* 12719 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const rarityOrder = CheckpointConstants.CHECKPOINT_RARITY_ORDER_MOBILE;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/useTraitPicker.tsx");

export function useTraitPicker(customizationOption) {
  let disabled;
  let earnedCount;
  let onSelectOption;
  let totalCount;
  customizationOption = customizationOption.customizationOption;
  ({ disabled, onSelectOption } = customizationOption);
  const obj = useTraitPickerSelection;
  const traitPickerSelection = obj.useTraitPickerSelection({ customizationOption, onSelectOption });
  const obj2 = useTraitPickerOptions;
  const obj3 = { customizationOption, optionIds: traitPickerSelection.optionIds, savedOptionId: traitPickerSelection.savedOptionId, rarityOrder };
  const traitPickerOptions = obj2.useTraitPickerOptions(obj3);
  const availableTraitOptions = traitPickerOptions.availableTraitOptions;
  ({ totalCount, earnedCount } = traitPickerOptions);
  const obj4 = react2;
  const obj5 = { availableTraitOptions, selectedOptionId: traitPickerSelection.selectedOptionId, onSelectOption: CheckpointActionCreators.selectCharacterTrait, isPaused: disabled };
  const autoSelectTraitOption = obj4.useAutoSelectTraitOption(obj5);
  const items = [availableTraitOptions, traitPickerSelection.selectedOptionId];
  const obj6 = {
    traitOptions: availableTraitOptions,
    selectedOption: react.useMemo(() => {
      let selectedOptionId;
      let found = availableTraitOptions.find((optionId) => optionId.optionId === selectedOptionId.selectedOptionId);
      const tmp = availableTraitOptions;
      if (found == null) {
        found = tmp[0];
      }
      return found;
    }, items),
    selectedOptionId: traitPickerSelection.selectedOptionId,
    totalCount,
    earnedCount,
    onSelectOption: traitPickerSelection.onSelectOption
  };
  return obj6;
}
