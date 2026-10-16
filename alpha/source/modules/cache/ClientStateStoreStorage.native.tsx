// Module ID: 15136
// Function ID: 15137
// Name: react-native
// Dependencies: [15137, 2]
// Exports: setClientState

// Module 15136 (react-native)
import react_nativeDefault from "react-native" /* 15137 */;
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
