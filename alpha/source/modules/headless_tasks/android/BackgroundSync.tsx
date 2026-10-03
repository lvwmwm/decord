// Module ID: 18100
// Function ID: 18101
// Name: BackgroundSync
// Dependencies: [5436, 502, 1986, 3, 2095, 17441, 2]

// Module 18100 (BackgroundSync)
import LoggerDefault from "Logger" /* 3 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2095 */;
import background_sync_BackgroundSync from "background_sync/BackgroundSync" /* 17441 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AppStateStore from "AppStateStore" /* 1986 */;
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
