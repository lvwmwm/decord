// Module ID: 12687
// Function ID: 12688
// Dependencies: [12606, 12627, 12652]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12687
import _mod12606 from "module_12606" /* 12606 */;
import _mod12627 from "module_12627" /* 12627 */;
import _mod12652 from "module_12652" /* 12652 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12606;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12606.withScope,
    getClient() {
      const obj = _mod12606;
      return obj.getClient();
    },
    getScope: _mod12606.getCurrentScope,
    getIsolationScope: _mod12606.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12606;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12606;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12627.captureEvent,
    addBreadcrumb: _mod12652.addBreadcrumb,
    setUser: _mod12627.setUser,
    setTags: _mod12627.setTags,
    setTag: _mod12627.setTag,
    setExtra: _mod12627.setExtra,
    setExtras: _mod12627.setExtras,
    setContext: _mod12627.setContext,
    getIntegration(id) {
      const obj = _mod12606;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12627.startSession,
    endSession: _mod12627.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12627;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12606;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12606;
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
