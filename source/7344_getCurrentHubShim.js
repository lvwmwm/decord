// Module ID: 7344
// Function ID: 59256
// Name: getCurrentHubShim
// Dependencies: [7263, 7284, 7309]

// Module 7344 (getCurrentHubShim)
const require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = outer1_0(outer1_1[0]).getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: require(7263) /* getCurrentScope */.withScope,
    getClient() {
      return outer1_0(outer1_1[0]).getClient();
    },
    getScope: require(7263) /* getCurrentScope */.getCurrentScope,
    getIsolationScope: require(7263) /* getCurrentScope */.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = outer1_0(outer1_1[0]).getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = outer1_0(outer1_1[0]).getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: require(7284) /* captureCheckIn */.captureEvent,
    addBreadcrumb: require(7309) /* addBreadcrumb */.addBreadcrumb,
    setUser: require(7284) /* captureCheckIn */.setUser,
    setTags: require(7284) /* captureCheckIn */.setTags,
    setTag: require(7284) /* captureCheckIn */.setTag,
    setExtra: require(7284) /* captureCheckIn */.setExtra,
    setExtras: require(7284) /* captureCheckIn */.setExtras,
    setContext: require(7284) /* captureCheckIn */.setContext,
    getIntegration(id) {
      const client = outer1_0(outer1_1[0]).getClient();
      let integrationByName = client;
      if (client) {
        integrationByName = client.getIntegrationByName(id.id);
      }
      if (!integrationByName) {
        integrationByName = null;
      }
      return integrationByName;
    },
    startSession: require(7284) /* captureCheckIn */.startSession,
    endSession: require(7284) /* captureCheckIn */.endSession,
    captureSession(arg0) {
      if (arg0) {
        let tmpResult = tmp(tmp2[1]);
        return tmpResult.endSession();
      } else {
        tmpResult = tmp(tmp2[0]);
        const currentScope = tmpResult.getCurrentScope();
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
arg5.getCurrentHub = getCurrentHubShim;
arg5.getCurrentHubShim = getCurrentHubShim;
