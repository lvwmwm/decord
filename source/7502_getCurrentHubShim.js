// Module ID: 7502
// Function ID: 7503
// Name: getCurrentHubShim
// Dependencies: [7421, 7442, 7467]

// Module 7502 (getCurrentHubShim)
const require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = callback(7421).getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: require(7421) /* getClient */.withScope,
    getClient() {
      return callback(7421).getClient();
    },
    getScope: require(7421) /* getClient */.getCurrentScope,
    getIsolationScope: require(7421) /* getClient */.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = callback(7421).getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = callback(7421).getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: require(7442) /* _flush */.captureEvent,
    addBreadcrumb: require(7467) /* addBreadcrumb */.addBreadcrumb,
    setUser: require(7442) /* _flush */.setUser,
    setTags: require(7442) /* _flush */.setTags,
    setTag: require(7442) /* _flush */.setTag,
    setExtra: require(7442) /* _flush */.setExtra,
    setExtras: require(7442) /* _flush */.setExtras,
    setContext: require(7442) /* _flush */.setContext,
    getIntegration(id) {
      const client = callback(7421).getClient();
      let integrationByName = client;
      if (client) {
        integrationByName = client.getIntegrationByName(id.id);
      }
      if (!integrationByName) {
        integrationByName = null;
      }
      return integrationByName;
    },
    startSession: require(7442) /* _flush */.startSession,
    endSession: require(7442) /* _flush */.endSession,
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
