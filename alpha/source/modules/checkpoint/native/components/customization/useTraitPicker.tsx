// Module ID: 12708
// Function ID: 12709
// Name: useTraitPicker
// Dependencies: [19, 6270, 12709, 12710, 12711, 12415, 2]
// Exports: useTraitPicker

// Module 12708 (useTraitPicker)
import CheckpointConstants from "CheckpointConstants" /* 6270 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 12415 */;
import useTraitPickerSelection from "useTraitPickerSelection" /* 12709 */;
import useTraitPickerOptions from "useTraitPickerOptions" /* 12710 */;
import useAutoSelectTraitOption from "useAutoSelectTraitOption" /* 12711 */;
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
  const obj4 = useAutoSelectTraitOption;
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
