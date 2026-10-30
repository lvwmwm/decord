// Module ID: 15978
// Function ID: 15979
// Name: react-native
// Dependencies: [15979, 2]
// Exports: setClientState

// Module 15978 (react-native)
import react_nativeDefault from "react-native" /* 15979 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export function setClientState(arg0) {
  let str;
  const setClientState = react_nativeDefault.setClientState;
  react_nativeDefault;
  if (arg0 != null) {
    str = arg0.toString();
  }
  setClientState(str, undefined);
}
