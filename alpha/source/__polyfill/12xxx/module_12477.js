// Module ID: 12477
// Function ID: 12478
// Dependencies: [12396, 12417, 12442]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12477
import _mod12396 from "module_12396" /* 12396 */;
import _mod12417 from "module_12417" /* 12417 */;
import _mod12442 from "module_12442" /* 12442 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12396;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12396.withScope,
    getClient() {
      const obj = _mod12396;
      return obj.getClient();
    },
    getScope: _mod12396.getCurrentScope,
    getIsolationScope: _mod12396.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12396;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12396;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12417.captureEvent,
    addBreadcrumb: _mod12442.addBreadcrumb,
    setUser: _mod12417.setUser,
    setTags: _mod12417.setTags,
    setTag: _mod12417.setTag,
    setExtra: _mod12417.setExtra,
    setExtras: _mod12417.setExtras,
    setContext: _mod12417.setContext,
    getIntegration(id) {
      const obj = _mod12396;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12417.startSession,
    endSession: _mod12417.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12417;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12396;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12396;
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
