// Module ID: 13193
// Function ID: 13194
// Dependencies: [13112, 13133, 13158]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13193
import _mod13112 from "module_13112" /* 13112 */;
import _flush from "_flush" /* 13133 */;
import _mod13158 from "module_13158" /* 13158 */;

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod13112.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13112.withScope,
    getClient() {
      return _mod13112.getClient();
    },
    getScope: _mod13112.getCurrentScope,
    getIsolationScope: _mod13112.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod13112.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod13112.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod13158.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod13112.getClient();
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
