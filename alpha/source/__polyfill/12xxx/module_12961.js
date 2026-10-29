// Module ID: 12961
// Function ID: 12962
// Dependencies: [12880, 12901, 12926]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12961
import _mod12880 from "module_12880" /* 12880 */;
import _mod12901 from "module_12901" /* 12901 */;
import _mod12926 from "module_12926" /* 12926 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12880;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12880.withScope,
    getClient() {
      const obj = _mod12880;
      return obj.getClient();
    },
    getScope: _mod12880.getCurrentScope,
    getIsolationScope: _mod12880.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12880;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12880;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12901.captureEvent,
    addBreadcrumb: _mod12926.addBreadcrumb,
    setUser: _mod12901.setUser,
    setTags: _mod12901.setTags,
    setTag: _mod12901.setTag,
    setExtra: _mod12901.setExtra,
    setExtras: _mod12901.setExtras,
    setContext: _mod12901.setContext,
    getIntegration(id) {
      const obj = _mod12880;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12901.startSession,
    endSession: _mod12901.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12901;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12880;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12880;
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
