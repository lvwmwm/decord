// Module ID: 7263
// Function ID: 7264
// Name: PostConnectionCallbackStore
// Dependencies: [7264, 6394, 572, 2]
// Exports: addPostConnectionCallback

// Module 7263 (PostConnectionCallbackStore)
import NewUserStore from "NewUserStore" /* 7264 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6394 */;
import Dispatcher_mod from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

function processCallbacks() {
  if (null == NewUserStore.getType()) {
    let item = closure_2.forEach((item) => {
      setImmediate(() => item());
    });
    closure_2 = [];
  }
}
let closure_2 = [];
let Dispatcher = Dispatcher_mod;
const subscription = Dispatcher.subscribe("CONNECTION_OPEN", processCallbacks);
Dispatcher = Dispatcher_mod;
const subscription1 = Dispatcher.subscribe("CONNECTION_RESUMED", processCallbacks);
Dispatcher = Dispatcher_mod;
const subscription2 = Dispatcher.subscribe("NUF_COMPLETE", processCallbacks);
const result = size.fileFinishedImporting("modules/gateway/PostConnectionCallbackStore.tsx");

export function addPostConnectionCallback(arg0) {
  if (GatewayConnectionStore.isConnectedOrOverlay()) {
    if (null == NewUserStore.getType()) {
      let closure_0 = arg0;
      const _setImmediate = setImmediate;
      setImmediate(() => item());
    }
  }
  closure_2.push(arg0);
}
