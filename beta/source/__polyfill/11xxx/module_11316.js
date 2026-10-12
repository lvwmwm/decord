// Module ID: 11316
// Function ID: 11317
// Dependencies: [11235, 11256, 11281]
// Exports: getCurrentHub, getCurrentHubShim

// Module 11316
import _mod11235 from "module_11235" /* 11235 */;
import _mod11256 from "module_11256" /* 11256 */;
import _mod11281 from "module_11281" /* 11281 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod11235;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod11235.withScope,
    getClient() {
      const obj = _mod11235;
      return obj.getClient();
    },
    getScope: _mod11235.getCurrentScope,
    getIsolationScope: _mod11235.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod11235;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod11235;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod11256.captureEvent,
    addBreadcrumb: _mod11281.addBreadcrumb,
    setUser: _mod11256.setUser,
    setTags: _mod11256.setTags,
    setTag: _mod11256.setTag,
    setExtra: _mod11256.setExtra,
    setExtras: _mod11256.setExtras,
    setContext: _mod11256.setContext,
    getIntegration(id) {
      const obj = _mod11235;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod11256.startSession,
    endSession: _mod11256.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod11256;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod11235;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod11235;
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
