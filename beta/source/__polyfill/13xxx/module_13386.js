// Module ID: 13386
// Function ID: 13387
// Dependencies: [13305, 13326, 13351]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13386
import _mod13305 from "module_13305" /* 13305 */;
import _mod13326 from "module_13326" /* 13326 */;
import _mod13351 from "module_13351" /* 13351 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod13305;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13305.withScope,
    getClient() {
      const obj = _mod13305;
      return obj.getClient();
    },
    getScope: _mod13305.getCurrentScope,
    getIsolationScope: _mod13305.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod13305;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod13305;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod13326.captureEvent,
    addBreadcrumb: _mod13351.addBreadcrumb,
    setUser: _mod13326.setUser,
    setTags: _mod13326.setTags,
    setTag: _mod13326.setTag,
    setExtra: _mod13326.setExtra,
    setExtras: _mod13326.setExtras,
    setContext: _mod13326.setContext,
    getIntegration(id) {
      const obj = _mod13305;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod13326.startSession,
    endSession: _mod13326.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod13326;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod13305;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod13305;
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
