// Module ID: 16642
// Function ID: 16643
// Name: react-native
// Dependencies: [16643, 2]
// Exports: setClientState

// Module 16642 (react-native)
import react_nativeDefault from "react-native" /* 16643 */;
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
