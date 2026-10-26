// Module ID: 13032
// Function ID: 13033
// Name: useAutoSelectTraitOption
// Dependencies: [19, 558, 576, 2]

// Module 13032 (useAutoSelectTraitOption)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAutoSelectTraitOption(onSelectOption) {
  let availableTraitOptions;
  let selectedOptionId;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(11);
  ({ availableTraitOptions, selectedOptionId } = onSelectOption);
  onSelectOption = onSelectOption.onSelectOption;
  const paused = onSelectOption.paused;
  const first = availableTraitOptions[0];
  if (cResult[0] === availableTraitOptions) {
    let tmp3;
    if (cResult[1] === selectedOptionId) {
      tmp3 = cResult[2];
    }
    let closure_4 = tmp3;
    if (cResult[5] === first) {
      if (cResult[6] === tmp3) {
        if (cResult[7] === onSelectOption) {
          let tmp6;
          let tmp7;
          if (cResult[8] === paused) {
            tmp6 = cResult[9];
            tmp7 = cResult[10];
          }
          const effect = react.useEffect(tmp6, tmp7);
        }
      }
    }
    const fn2 = function v() {
      const tmp = paused || null == first || closure_4;
      if (!tmp) {
        onSelectOption(first.trait, first.optionId);
      }
    };
    const items = [first, tmp3, onSelectOption, paused];
    cResult[5] = first;
    cResult[6] = tmp3;
    cResult[7] = onSelectOption;
    cResult[8] = paused;
    cResult[9] = fn2;
    cResult[10] = items;
    tmp7 = items;
    tmp6 = fn2;
  }
  if (cResult[3] !== selectedOptionId) {
    const fn = function l(optionId) {
      return optionId.optionId === selectedOptionId;
    };
    cResult[3] = selectedOptionId;
    cResult[4] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[4];
  }
  const someResult = availableTraitOptions.some(tmp4);
  cResult[0] = availableTraitOptions;
  cResult[1] = selectedOptionId;
  cResult[2] = someResult;
  tmp3 = someResult;
}) : (function useAutoSelectTraitOption(paused) {
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
});
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useAutoSelectTraitOption.tsx");

export const useAutoSelectTraitOption = tmp2;
