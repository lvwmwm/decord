// Module ID: 5639
// Function ID: 5640
// Name: PostConnectionCallbackStore
// Dependencies: [5640, 5358, 573, 2]
// Exports: addPostConnectionCallback

// Module 5639 (PostConnectionCallbackStore)
import NewUserStore from "NewUserStore" /* 5640 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5358 */;
import Dispatcher_mod from "Dispatcher" /* 573 */;

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
let Dispatcher = Dispatcher_mod;
const subscription1 = Dispatcher.subscribe("CONNECTION_RESUMED", processCallbacks);
let Dispatcher = Dispatcher_mod;
const subscription2 = Dispatcher.subscribe("NUF_COMPLETE", processCallbacks);
const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/PostConnectionCallbackStore.tsx");

export const addPostConnectionCallback = function addPostConnectionCallback(arg0) {
  if (GatewayConnectionStore.isConnectedOrOverlay()) {
    if (null == NewUserStore.getType()) {
      closure_0 = arg0;
      const _setImmediate = setImmediate;
      setImmediate(() => item());
    }
  }
  closure_2.push(arg0);
};
