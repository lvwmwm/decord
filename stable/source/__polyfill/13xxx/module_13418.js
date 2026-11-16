// Module ID: 13418
// Function ID: 13419
// Dependencies: [13337, 13358, 13383]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13418
import _mod13337 from "module_13337" /* 13337 */;
import _mod13358 from "module_13358" /* 13358 */;
import _mod13383 from "module_13383" /* 13383 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod13337;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13337.withScope,
    getClient() {
      const obj = _mod13337;
      return obj.getClient();
    },
    getScope: _mod13337.getCurrentScope,
    getIsolationScope: _mod13337.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod13337;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod13337;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod13358.captureEvent,
    addBreadcrumb: _mod13383.addBreadcrumb,
    setUser: _mod13358.setUser,
    setTags: _mod13358.setTags,
    setTag: _mod13358.setTag,
    setExtra: _mod13358.setExtra,
    setExtras: _mod13358.setExtras,
    setContext: _mod13358.setContext,
    getIntegration(id) {
      const obj = _mod13337;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod13358.startSession,
    endSession: _mod13358.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod13358;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod13337;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod13337;
        const client = tmpResult4.getClient();
        const session = currentScope.getSession();
        const tmp5 = client && session;
        if (tmp5) {
          client.captureSession(session);
        }
      }
    }
  };
  return obj;
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };
