// Module ID: 19440
// Function ID: 19441
// Name: createEmbeddedAppShimHost
// Dependencies: [19441, 12, 19436, 2]
// Exports: createEmbeddedAppShimHost

// Module 19440 (createEmbeddedAppShimHost)
import _mod12 from "module_12" /* 12 */;
import protocol from "protocol" /* 19436 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let map;

let result = size.fileFinishedImporting("modules/embedded_apps/shim_host/createEmbeddedAppShimHost.tsx");

export function createEmbeddedAppShimHost(arg0) {
  let onMessage;
  ({ onConnect: require, onMessage } = arg0);
  map = new Map();
  let obj = require("connection");
  let closure_3 = obj.createChildConnector(onMessage, () => {
    map.clear();
    require(obj2);
  });
  let obj2 = {
    offer(arg0) {
      return closure_3.offer(arg0);
    },
    dispatch(type) {
      const obj = _mod12;
      obj2 = map;
      if (!obj.isEqual(map.get(type.type), type)) {
        const result = obj2.set(type.type, type);
        closure_3.dispatch(type);
      }
    },
    close() {
      closure_3.close();
      const obj = { type: protocol.ChildToParentEvent.DISCONNECTED };
      onMessage(obj);
    }
  };
  return obj2;
}
