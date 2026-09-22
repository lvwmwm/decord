// Module ID: 14479
// Function ID: 14480
// Name: ClientStateStoreStorage
// Dependencies: [13910, 2]
// Exports: setClientState

// Module 14479 (ClientStateStoreStorage)
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13910 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(arg0) {
  let str;
  if (arg0 != null) {
    str = arg0.toString();
  }
  NativeFastConnectModuleDefault.setClientState(str, undefined);
};
