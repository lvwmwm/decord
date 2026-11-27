// Module ID: 15099
// Function ID: 15100
// Name: acquireDatagramConnection
// Dependencies: [15100, 15101, 15103, 2]
// Exports: subscribeToDatagramConnection

// Module 15099 (acquireDatagramConnection)
import DatagramConnectionRecoveryDefault from "DatagramConnectionRecovery" /* 15103 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, dependencyMap, importDefault;

function acquireDatagramConnection(rTCConnection, userId) {
  let datagramConnection;
  let tmp2;
  _require = rTCConnection;
  let obj = weakMap;
  const value = weakMap.get(rTCConnection);
  if (null == value) {
    if (value != null) {
      let connection = value.connection;
      connection.close();
    }
    const obj2 = { connection: datagramConnection, users: 0, userId };
    let tmp5 = dependencyMap;
    const self = this;
    const self2 = this;
    datagramConnection = new require("DatagramConnection").DatagramConnection(rTCConnection, userId);
    const result = obj.set(rTCConnection, obj2);
    const connection2 = obj2.connection;
    connection2.on(require("DatagramEvent").DatagramEvent.Disconnect, () => {
      const obj = weakMap;
      const tmp = rTCConnection;
      if (weakMap.get(rTCConnection) === obj2) {
        obj.delete(tmp);
      }
    });
    tmp2 = obj2;
  } else {
    tmp2 = value;
  }
  tmp2.users = tmp2.users + 1;
  dependencyMap = tmp2;
  weakMap = false;
  return {
    connection: tmp2.connection,
    release() {
      const tmp = c3;
      if (!tmp) {
        c3 = true;
        const diff = dependencyMap.users - 1;
        dependencyMap.users = diff;
        if (0 == diff) {
          const connection = tmp2.connection;
          connection.close();
          const obj = weakMap;
          const tmp5 = rTCConnection;
          if (weakMap.get(rTCConnection) === dependencyMap) {
            obj.delete(tmp5);
          }
        }
      }
    }
  };
}
let weakMap = new WeakMap();
const weakMap1 = new WeakMap();
let result = size.fileFinishedImporting("modules/webtransport_datagrams/acquireDatagramConnection.tsx");

export { acquireDatagramConnection };
export function subscribeToDatagramConnection(arg0, userId, arg2) {
  let closure_2;
  let tmp2;
  let closure_0 = arg0;
  importDefault = userId;
  let obj = weakMap1;
  let value = weakMap1.get(arg0);
  if (null == value) {
    if (value != null) {
      let owner = value.owner;
      owner.close();
    }
    const self = this;
    const self2 = this;
    const tmp6 = new DatagramConnectionRecoveryDefault(() => acquireDatagramConnection(closure_0, userId), () => {
      const value = weakMap1.get(closure_0);
      let owner;
      const obj = weakMap1;
      const tmp = closure_0;
      if (value != null) {
        owner = value.owner;
      }
      if (owner === closure_2) {
        obj.delete(tmp);
      }
    });
    dependencyMap = tmp6;
    const obj2 = { userId, owner: tmp6 };
    const result = obj.set(arg0, obj2);
    tmp2 = obj2;
  } else {
    tmp2 = value;
  }
  const owner2 = tmp2.owner;
  return owner2.subscribe(arg2);
}
