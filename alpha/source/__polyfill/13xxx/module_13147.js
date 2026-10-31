// Module ID: 13147
// Function ID: 13148
// Dependencies: [13066, 13087, 13112]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13147
import _mod13066 from "module_13066" /* 13066 */;
import _mod13087 from "module_13087" /* 13087 */;
import _mod13112 from "module_13112" /* 13112 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod13066;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13066.withScope,
    getClient() {
      const obj = _mod13066;
      return obj.getClient();
    },
    getScope: _mod13066.getCurrentScope,
    getIsolationScope: _mod13066.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod13066;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod13066;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod13087.captureEvent,
    addBreadcrumb: _mod13112.addBreadcrumb,
    setUser: _mod13087.setUser,
    setTags: _mod13087.setTags,
    setTag: _mod13087.setTag,
    setExtra: _mod13087.setExtra,
    setExtras: _mod13087.setExtras,
    setContext: _mod13087.setContext,
    getIntegration(id) {
      const obj = _mod13066;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod13087.startSession,
    endSession: _mod13087.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod13087;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod13066;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod13066;
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
