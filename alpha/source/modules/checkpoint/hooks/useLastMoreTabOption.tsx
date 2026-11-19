// Module ID: 12704
// Function ID: 12705
// Name: useLastMoreTabOption
// Dependencies: [32, 19, 6215, 2]
// Exports: default

// Module 12704 (useLastMoreTabOption)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6215 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/hooks/useLastMoreTabOption.tsx");

export default function useLastMoreTabOption(arg0) {
  let tmp5;
  let tmp6;
  const FINALIZE_MORE_OPTIONS = CheckpointCustomizationUtils.FINALIZE_MORE_OPTIONS;
  let hasItem = FINALIZE_MORE_OPTIONS.includes(arg0);
  let tmp3 = null;
  const useState = react.useState;
  if (hasItem) {
    tmp3 = arg0;
  }
  [tmp5, tmp6] = useState(tmp3);
  _slicedToArray(useState(tmp3), 2);
  if (hasItem) {
    hasItem = tmp5 !== arg0;
  }
  if (hasItem) {
    tmp6(arg0);
  }
  return tmp5;
};
