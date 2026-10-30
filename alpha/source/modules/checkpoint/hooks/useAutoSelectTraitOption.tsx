// Module ID: 13648
// Function ID: 13649
// Name: react
// Dependencies: [19, 2]
// Exports: useAutoSelectTraitOption

// Module 13648 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/hooks/useAutoSelectTraitOption.tsx");

export function useAutoSelectTraitOption(paused) {
  let availableTraitOptions;
  let closure_129_0;
  let onSelectOption;
  ({ availableTraitOptions, selectedOptionId: closure_129_0, onSelectOption } = paused);
  paused = paused.paused;
  const first = availableTraitOptions[0];
  const someResult = availableTraitOptions.some((optionId) => optionId.optionId === closure_1_0);
  let c4 = someResult;
  const items = [first, someResult, onSelectOption, paused];
  const effect = react.useEffect(() => {
    const tmp = paused || null == first || c4;
    if (!tmp) {
      onSelectOption(first.trait, first.optionId);
    }
  }, items);
}
