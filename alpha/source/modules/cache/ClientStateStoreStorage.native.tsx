// Module ID: 15938
// Function ID: 15939
// Name: react-native
// Dependencies: [15939, 2]
// Exports: setClientState

// Module 15938 (react-native)
import react_nativeDefault from "react-native" /* 15939 */;
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
