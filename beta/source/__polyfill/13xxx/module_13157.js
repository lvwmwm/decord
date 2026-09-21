// Module ID: 13157
// Function ID: 13158
// Dependencies: [13076, 13097, 13122]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13157
import _mod13076 from "module_13076" /* 13076 */;
import _flush from "_flush" /* 13097 */;
import _mod13122 from "module_13122" /* 13122 */;

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod13076.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13076.withScope,
    getClient() {
      return _mod13076.getClient();
    },
    getScope: _mod13076.getCurrentScope,
    getIsolationScope: _mod13076.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod13076.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod13076.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod13122.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod13076.getClient();
      let integrationByName = client;
      if (client) {
        integrationByName = client.getIntegrationByName(id.id);
      }
      if (!integrationByName) {
        integrationByName = null;
      }
      return integrationByName;
    },
    startSession: _flush.startSession,
    endSession: _flush.endSession,
    captureSession(arg0) {
      if (arg0) {
        return tmp(tmp2[1]).endSession();
      } else {
        const currentScope = tmp(tmp2[0]).getCurrentScope();
        const tmpResult3 = tmp(tmp2[0]);
        const client = tmp(tmp2[0]).getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
      }
    }
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };
