// Module ID: 15627
// Function ID: 15628
// Name: react-native
// Dependencies: [15628, 2]
// Exports: setClientState

// Module 15627 (react-native)
import react_nativeDefault from "react-native" /* 15628 */;
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
