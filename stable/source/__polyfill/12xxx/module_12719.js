// Module ID: 12719
// Function ID: 12720
// Dependencies: [12638, 12659, 12684]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12719
import _mod12638 from "module_12638" /* 12638 */;
import _mod12659 from "module_12659" /* 12659 */;
import _mod12684 from "module_12684" /* 12684 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12638;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12638.withScope,
    getClient() {
      const obj = _mod12638;
      return obj.getClient();
    },
    getScope: _mod12638.getCurrentScope,
    getIsolationScope: _mod12638.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12638;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12638;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12659.captureEvent,
    addBreadcrumb: _mod12684.addBreadcrumb,
    setUser: _mod12659.setUser,
    setTags: _mod12659.setTags,
    setTag: _mod12659.setTag,
    setExtra: _mod12659.setExtra,
    setExtras: _mod12659.setExtras,
    setContext: _mod12659.setContext,
    getIntegration(id) {
      const obj = _mod12638;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12659.startSession,
    endSession: _mod12659.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12659;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12638;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12638;
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
