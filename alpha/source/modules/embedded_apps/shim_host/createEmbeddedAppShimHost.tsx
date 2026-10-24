// Module ID: 18779
// Function ID: 18780
// Name: createEmbeddedAppShimHost
// Dependencies: [18780, 18781, 2]
// Exports: createEmbeddedAppShimHost

// Module 18779 (createEmbeddedAppShimHost)
import protocol from "protocol" /* 18780 */;
import connection from "connection" /* 18781 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/embedded_apps/shim_host/createEmbeddedAppShimHost.tsx");

export const createEmbeddedAppShimHost = function createEmbeddedAppShimHost(state, arg1) {
  ({ onChildState: require, onDisconnect: dependencyMap } = arg1);
  let obj = connection;
  let closure_3 = obj.createChildConnector(function handleMessage(type) {
    if (type.type === protocol.ChildToParentEvent.STATE_UPDATED) {
      require(type.state);
    } else if (type.type === protocol.ChildToParentEvent.DISCONNECTED) {
      dependencyMap();
    }
  }, function sendParentState() {
    const obj = { type: protocol.ParentToChildEvent.STATE_UPDATED, state };
    closure_3.dispatch(obj);
  });
  return {
    offer(arg0) {
      return closure_3.offer(arg0);
    },
    setParentState(parentState) {
      let closure_0 = parentState;
      let closure_1 = state;
      const keys = Object.keys(parentState);
      if (!keys.every((item) => closure_0[item] === closure_1[item])) {
        state = parentState;
        const dispatch = closure_3.dispatch;
        const obj = { type: protocol.ParentToChildEvent.STATE_UPDATED, state };
        dispatch(obj);
      }
    },
    close() {
      closure_3.close();
      dependencyMap();
    }
  };
};
