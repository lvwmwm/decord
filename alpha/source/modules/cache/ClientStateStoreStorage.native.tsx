// Module ID: 15435
// Function ID: 15436
// Name: react-native
// Dependencies: [15436, 2]
// Exports: setClientState

// Module 15435 (react-native)
import react_nativeDefault from "react-native" /* 15436 */;
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
