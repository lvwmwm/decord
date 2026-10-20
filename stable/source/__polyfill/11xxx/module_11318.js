// Module ID: 11318
// Function ID: 11319
// Dependencies: [11237, 11258, 11283]
// Exports: getCurrentHub, getCurrentHubShim

// Module 11318
import _mod11237 from "module_11237" /* 11237 */;
import _mod11258 from "module_11258" /* 11258 */;
import _mod11283 from "module_11283" /* 11283 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod11237;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod11237.withScope,
    getClient() {
      const obj = _mod11237;
      return obj.getClient();
    },
    getScope: _mod11237.getCurrentScope,
    getIsolationScope: _mod11237.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod11237;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod11237;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod11258.captureEvent,
    addBreadcrumb: _mod11283.addBreadcrumb,
    setUser: _mod11258.setUser,
    setTags: _mod11258.setTags,
    setTag: _mod11258.setTag,
    setExtra: _mod11258.setExtra,
    setExtras: _mod11258.setExtras,
    setContext: _mod11258.setContext,
    getIntegration(id) {
      const obj = _mod11237;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod11258.startSession,
    endSession: _mod11258.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod11258;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod11237;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod11237;
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
