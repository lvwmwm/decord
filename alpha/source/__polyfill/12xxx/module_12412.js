// Module ID: 12412
// Function ID: 12413
// Dependencies: [12331, 12352, 12377]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12412
import _mod12331 from "module_12331" /* 12331 */;
import _mod12352 from "module_12352" /* 12352 */;
import _mod12377 from "module_12377" /* 12377 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12331;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12331.withScope,
    getClient() {
      const obj = _mod12331;
      return obj.getClient();
    },
    getScope: _mod12331.getCurrentScope,
    getIsolationScope: _mod12331.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12331;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12331;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12352.captureEvent,
    addBreadcrumb: _mod12377.addBreadcrumb,
    setUser: _mod12352.setUser,
    setTags: _mod12352.setTags,
    setTag: _mod12352.setTag,
    setExtra: _mod12352.setExtra,
    setExtras: _mod12352.setExtras,
    setContext: _mod12352.setContext,
    getIntegration(id) {
      const obj = _mod12331;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12352.startSession,
    endSession: _mod12352.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12352;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12331;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12331;
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
