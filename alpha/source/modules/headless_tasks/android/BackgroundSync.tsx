// Module ID: 18455
// Function ID: 18456
// Name: BackgroundSync
// Dependencies: [5753, 502, 1998, 3, 2107, 17774, 2]

// Module 18455 (BackgroundSync)
import LoggerDefault from "Logger" /* 3 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2107 */;
import background_sync_BackgroundSync from "background_sync/BackgroundSync" /* 17774 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5753 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AppStateStore from "AppStateStore" /* 1998 */;
import size from "module_2" /* 2 */;

let tmp = new LoggerDefault("BackgroundSync");
let closure_6 = tmp;
let result = size.fileFinishedImporting("modules/headless_tasks/android/BackgroundSync.tsx");

export default function(arg0) {
  let logger;
  let resolved;
  let closure_0 = arg0;
  if ("active" === AppStateStore.getState()) {
    resolved = Promise.resolve();
  } else {
    let obj = GatewayConnectionStore;
    const tmp = GatewayConnectionStore.isConnected() || obj.isTryingToConnect();
    if (!tmp) {
      const obj2 = DatabaseManagerDefault;
      const result = obj2.carefullyOpenDatabase(AuthenticationStore.getId());
    }
    const self = this;
    const self2 = this;
    resolved = new Promise((arg0) => {
      logger.log("Executing BackgroundSync with ", closure_0);
      const obj = background_sync_BackgroundSync;
      const backgroundSyncResult = obj.backgroundSync({});
      backgroundSyncResult.then(arg0);
    });
  }
  return resolved;
};
