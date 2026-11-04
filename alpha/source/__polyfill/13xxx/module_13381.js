// Module ID: 13381
// Function ID: 13382
// Dependencies: [13300, 13321, 13346]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13381
import _mod13300 from "module_13300" /* 13300 */;
import _mod13321 from "module_13321" /* 13321 */;
import _mod13346 from "module_13346" /* 13346 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod13300;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13300.withScope,
    getClient() {
      const obj = _mod13300;
      return obj.getClient();
    },
    getScope: _mod13300.getCurrentScope,
    getIsolationScope: _mod13300.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod13300;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod13300;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod13321.captureEvent,
    addBreadcrumb: _mod13346.addBreadcrumb,
    setUser: _mod13321.setUser,
    setTags: _mod13321.setTags,
    setTag: _mod13321.setTag,
    setExtra: _mod13321.setExtra,
    setExtras: _mod13321.setExtras,
    setContext: _mod13321.setContext,
    getIntegration(id) {
      const obj = _mod13300;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod13321.startSession,
    endSession: _mod13321.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod13321;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod13300;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod13300;
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
