// Module ID: 12383
// Function ID: 12384
// Dependencies: [12302, 12323, 12348]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12383
import _mod12302 from "module_12302" /* 12302 */;
import _mod12323 from "module_12323" /* 12323 */;
import _mod12348 from "module_12348" /* 12348 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12302;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12302.withScope,
    getClient() {
      const obj = _mod12302;
      return obj.getClient();
    },
    getScope: _mod12302.getCurrentScope,
    getIsolationScope: _mod12302.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12302;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12302;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12323.captureEvent,
    addBreadcrumb: _mod12348.addBreadcrumb,
    setUser: _mod12323.setUser,
    setTags: _mod12323.setTags,
    setTag: _mod12323.setTag,
    setExtra: _mod12323.setExtra,
    setExtras: _mod12323.setExtras,
    setContext: _mod12323.setContext,
    getIntegration(id) {
      const obj = _mod12302;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12323.startSession,
    endSession: _mod12323.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12323;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12302;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12302;
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
