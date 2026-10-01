// Module ID: 10382
// Function ID: 10383
// Name: useNavigatorConfirmChangesOnBack
// Dependencies: [19, 17, 1074, 10383, 10384, 2]
// Exports: default

// Module 10382 (useNavigatorConfirmChangesOnBack)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const Keyboard = react_native.Keyboard;
const NOOP = Constants.NOOP;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx");

export default function useNavigatorConfirmChangesOnBack() {
  let ref2;
  let resetPending;
  const ref = react.useRef(null);
  dependencyMap = react.useRef(false);
  let obj = { onGoBack: ref(10383)(obj2).onGoBack, ref };
  return obj;
};
