// Module ID: 13363
// Function ID: 13364
// Dependencies: [13282, 13303, 13328]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13363
import _mod13282 from "module_13282" /* 13282 */;
import _mod13303 from "module_13303" /* 13303 */;
import _mod13328 from "module_13328" /* 13328 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod13282;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13282.withScope,
    getClient() {
      const obj = _mod13282;
      return obj.getClient();
    },
    getScope: _mod13282.getCurrentScope,
    getIsolationScope: _mod13282.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod13282;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod13282;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod13303.captureEvent,
    addBreadcrumb: _mod13328.addBreadcrumb,
    setUser: _mod13303.setUser,
    setTags: _mod13303.setTags,
    setTag: _mod13303.setTag,
    setExtra: _mod13303.setExtra,
    setExtras: _mod13303.setExtras,
    setContext: _mod13303.setContext,
    getIntegration(id) {
      const obj = _mod13282;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod13303.startSession,
    endSession: _mod13303.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod13303;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod13282;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod13282;
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
