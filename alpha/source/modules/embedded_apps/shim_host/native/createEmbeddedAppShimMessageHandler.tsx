// Module ID: 11412
// Function ID: 11413
// Name: createEmbeddedAppShimMessageHandler
// Dependencies: [11413, 11414, 2]
// Exports: createEmbeddedAppShimMessageHandler

// Module 11412 (createEmbeddedAppShimMessageHandler)
import bridgeProtocol from "bridgeProtocol" /* 11414 */;
import size from "module_2" /* 2 */;

let hasOwnProperty, map;

let result = size.fileFinishedImporting("modules/embedded_apps/shim_host/native/createEmbeddedAppShimMessageHandler.tsx");

export const createEmbeddedAppShimMessageHandler = function createEmbeddedAppShimMessageHandler(id, shellBridgeSecret, arg2) {
  let closure_2 = arg2;
  map = new Map();
  let obj = {
    handleMessage(event) {
      if (null != event) {
        if (typeof event === "object") {
          const _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          if (hasOwnProperty.call(event, id(shellBridgeSecret[1]).SHELL_BRIDGE_KEY)) {
            let flag = event[tmp8(undefined, tmp9[1]).SHELL_BRIDGE_KEY] !== shellBridgeSecret;
            if (!flag) {
              if ("open" === event.event) {
                const pipeId = event.pipeId;
                const obj = {
                  post(arg0) {
                              closure_2("" + bridgeProtocol.SHELL_BRIDGE_GLOBAL + ".post(" + pipeId + ", " + JSON.stringify(arg0) + ");");
                            },
                  listen(arg0) {
                              const result = map.set(pipeId, arg0);
                            },
                  close() {
                              map.delete(pipeId);
                              closure_2("" + bridgeProtocol.SHELL_BRIDGE_GLOBAL + ".close(" + pipeId + ");");
                            }
                };
                const tmp8Result = id(shellBridgeSecret[0]);
                tmp8Result.shimPipeOpened(pipeId, obj);
                flag = true;
              } else {
                const value = map.get(event.pipeId);
                flag = true;
                if (value != null) {
                  value(event.message);
                  flag = true;
                }
              }
            }
            return flag;
          }
        }
      }
      return false;
    },
    close() {
      map.clear();
    }
  };
  return obj;
};
