// Module ID: 14473
// Function ID: 14474
// Name: ClientStateStoreStorage
// Dependencies: [13902, 2]
// Exports: setClientState

// Module 14473 (ClientStateStoreStorage)
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13902 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(arg0) {
  let str;
  if (arg0 != null) {
    str = arg0.toString();
  }
  NativeFastConnectModuleDefault.setClientState(str, undefined);
};
