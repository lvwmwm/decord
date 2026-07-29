// Module ID: 6476
// Function ID: 6477
// Name: getCurrentHubShim
// Dependencies: [6395, 6416, 6441]

// Module 6476 (getCurrentHubShim)
const require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = callback(6395).getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: require(6395) /* getClient */.withScope,
    getClient() {
      return callback(6395).getClient();
    },
    getScope: require(6395) /* getClient */.getCurrentScope,
    getIsolationScope: require(6395) /* getClient */.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = callback(6395).getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = callback(6395).getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: require(6416) /* _flush */.captureEvent,
    addBreadcrumb: require(6441) /* addBreadcrumb */.addBreadcrumb,
    setUser: require(6416) /* _flush */.setUser,
    setTags: require(6416) /* _flush */.setTags,
    setTag: require(6416) /* _flush */.setTag,
    setExtra: require(6416) /* _flush */.setExtra,
    setExtras: require(6416) /* _flush */.setExtras,
    setContext: require(6416) /* _flush */.setContext,
    getIntegration(id) {
      const client = callback(6395).getClient();
      let integrationByName = client;
      if (client) {
        integrationByName = client.getIntegrationByName(id.id);
      }
      if (!integrationByName) {
        integrationByName = null;
      }
      return integrationByName;
    },
    startSession: require(6416) /* _flush */.startSession,
    endSession: require(6416) /* _flush */.endSession,
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
