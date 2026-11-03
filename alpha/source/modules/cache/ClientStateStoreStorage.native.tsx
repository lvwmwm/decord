// Module ID: 16166
// Function ID: 16167
// Name: react-native
// Dependencies: [16167, 2]
// Exports: setClientState

// Module 16166 (react-native)
import react_nativeDefault from "react-native" /* 16167 */;
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
