// Module ID: 12114
// Function ID: 12115
// Dependencies: [12033, 12054, 12079]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12114
import _mod12033 from "module_12033" /* 12033 */;
import _mod12054 from "module_12054" /* 12054 */;
import _mod12079 from "module_12079" /* 12079 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12033;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12033.withScope,
    getClient() {
      const obj = _mod12033;
      return obj.getClient();
    },
    getScope: _mod12033.getCurrentScope,
    getIsolationScope: _mod12033.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12033;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12033;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12054.captureEvent,
    addBreadcrumb: _mod12079.addBreadcrumb,
    setUser: _mod12054.setUser,
    setTags: _mod12054.setTags,
    setTag: _mod12054.setTag,
    setExtra: _mod12054.setExtra,
    setExtras: _mod12054.setExtras,
    setContext: _mod12054.setContext,
    getIntegration(id) {
      const obj = _mod12033;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12054.startSession,
    endSession: _mod12054.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12054;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12033;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12033;
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
