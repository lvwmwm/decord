// Module ID: 13308
// Function ID: 101117
// Dependencies: []

// Module 13308
let closure_3 = importDefault(dependencyMap[0]);
({ ComponentActions: closure_4, ApplicationFlags: closure_5, RPCErrors: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const tmp3 = importDefault(dependencyMap[5])((arg0) => {
  ({ clientId: closure_0, authorizations: closure_1, scopes: closure_2, parsedPermissions: closure_3, responseType: closure_4, redirectUri: closure_5, codeChallenge: closure_6, codeChallengeMethod: closure_7, state: closure_8, guildId: closure_9, channelId: closure_10, prompt: closure_11, disableGuildSelect: closure_12, disclosures: closure_13, integrationType: closure_14 } = arg0);
  return new Promise((applicationId) => {
    let tmp;
    if (null != closure_14) {
      let value;
      if (null != arg1) {
        value = arg1.get(closure_14);
      }
      tmp = value;
    }
    let application;
    if (null != tmp) {
      application = tmp.application;
    }
    if (null == application) {
      application = application.getApplication(applicationId);
    }
    const obj = { clientId: applicationId, scopes: null != closure_2 ? closure_2 : [], responseType: SHOW_OAUTH2_MODAL, redirectUri: constants, codeChallenge: closure_6, codeChallengeMethod: closure_7, state: closure_8, guildId: closure_9, channelId: closure_10, permissions: application, prompt: closure_11 };
    if ("boolean" === typeof closure_12) {
      let tmp10 = closure_12;
    } else {
      tmp10 = "true" === closure_12;
    }
    obj.disableGuildSelect = tmp10;
    obj.showLogout = false;
    obj.callback = function callback(location) {
      if (null != location.location) {
        location(location.location);
      } else {
        let tmp4 = arg1(closure_2[2]);
        const obj = { errorCode: OAUTH2_ERROR.OAUTH2_ERROR };
        const prototype = tmp4.prototype;
        tmp4 = new tmp4(obj, "User cancelled authorization");
        arg1(tmp4);
      }
    };
    obj.isEmbeddedFlow = applicationId(closure_2[3]).hasApplicationFlag(application, constants.EMBEDDED);
    obj.disclosures = closure_13;
    obj.integrationType = closure_14;
    const ComponentDispatch = applicationId(closure_2[4]).ComponentDispatch;
    ComponentDispatch.dispatch(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, obj);
  });
}, function onAuthorizeValidationPassed() {

});
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/rpc/native/server/commands/auth.tsx");

export default tmp3;
