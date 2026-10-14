// Module ID: 14805
// Function ID: 14806
// Name: react-native
// Dependencies: [14806, 2]
// Exports: setClientState

// Module 14805 (react-native)
import react_nativeDefault from "react-native" /* 14806 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(arg0) {
  let str;
  const setClientState = react_nativeDefault.setClientState;
  react_nativeDefault;
  if (arg0 != null) {
    str = arg0.toString();
  }
  setClientState(str, undefined);
};
