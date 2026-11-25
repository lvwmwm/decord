// Module ID: 18414
// Function ID: 18415
// Name: useConjurePublishRemix
// Dependencies: [32, 19, 18415, 2]
// Exports: default

// Module 18414 (useConjurePublishRemix)
import useConjureSharingModeDefault from "useConjureSharingMode" /* 18415 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishRemix.tsx");

export default function useConjurePublishRemix(arg0) {
  let callback;
  let tmp4;
  const tmp = useConjureSharingModeDefault(arg0);
  const tmp2 = _slicedToArray(react.useState(null), 2);
  let first = tmp2[0];
  const mode = tmp.mode;
  let canChange = tmp.canChange;
  const changeMode = tmp.changeMode;
  const items = [first, mode, canChange, changeMode];
  const obj = { options: tmp.options, value: first, setValue: tmp4, canChange, save: callback };
  tmp4 = tmp2[1];
  callback = react.useCallback(() => {
    if (null != first) {
      if (first !== mode) {
        let resolved;
        const tmp3 = canChange;
        if (tmp3) {
          resolved = changeMode(tmp);
        }
        return resolved;
      }
    }
    resolved = Promise.resolve(true);
  }, items);
  if (first == null) {
    first = mode;
  }
  if (canChange) {
    canChange = !tmp.changing;
  }
  return obj;
};
