// Module ID: 14543
// Function ID: 14544
// Name: react
// Dependencies: [19, 2]
// Exports: useAutoSelectTraitOption

// Module 14543 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/hooks/useAutoSelectTraitOption.tsx");

export function useAutoSelectTraitOption(isPaused) {
  let availableTraitOptions;
  let closure_129_0;
  let onSelectOption;
  ({ availableTraitOptions, selectedOptionId: closure_129_0, onSelectOption } = isPaused);
  let flag = isPaused.isPaused;
  if (flag === undefined) {
    flag = false;
  }
  const first = availableTraitOptions[0];
  const someResult = availableTraitOptions.some((optionId) => optionId.optionId === closure_1_0);
  let c4 = someResult;
  const items = [first, someResult, onSelectOption, flag];
  const effect = react.useEffect(() => {
    const tmp = flag || null == first || c4;
    if (!tmp) {
      onSelectOption(first.trait, first.optionId);
    }
  }, items);
}
