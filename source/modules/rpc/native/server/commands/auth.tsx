// Module ID: 13491
// Function ID: 103678
// Dependencies: [4167, 653, 10525, 7371, 1207, 13492, 2]

// Module 13491
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ ComponentActions: closure_4, ApplicationFlags: closure_5, RPCErrors: closure_6 } = ME);
const tmp3 = require("authorizeWithPrompt")((arg0) => {
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let _isNativeReflectConstruct;
  let closure_4;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let dependencyMap;
  let importDefault;
  let require;
  ({ clientId: require, authorizations: importDefault, scopes: dependencyMap, parsedPermissions: _isNativeReflectConstruct, responseType: closure_4, redirectUri: closure_5, codeChallenge: closure_6, codeChallengeMethod: closure_7, state: closure_8, guildId: closure_9, channelId: closure_10, prompt: closure_11, disableGuildSelect: closure_12, disclosures: closure_13, integrationType: closure_14 } = arg0);
  return new Promise((applicationId) => {
    let closure_0 = applicationId;
    let closure_1 = arg1;
    let tmp;
    if (null != closure_14) {
      let value;
      if (null != closure_1) {
        value = closure_1.get(closure_14);
      }
      tmp = value;
    }
    let application;
    if (null != tmp) {
      application = tmp.application;
    }
    if (null == application) {
      application = outer1_3.getApplication(closure_0);
    }
    let obj = { clientId: closure_0, scopes: null != closure_2 ? closure_2 : [], responseType: closure_4, redirectUri: closure_5, codeChallenge: closure_6, codeChallengeMethod: closure_7, state: closure_8, guildId: closure_9, channelId: closure_10, permissions: _isNativeReflectConstruct, prompt: closure_11 };
    if ("boolean" === typeof closure_12) {
      let tmp10 = closure_12;
    } else {
      tmp10 = "true" === closure_12;
    }
    obj.disableGuildSelect = tmp10;
    obj.showLogout = false;
    obj.callback = function callback(location) {
      if (null != location.location) {
        applicationId(location.location);
      } else {
        let tmp4 = outer2_1(outer2_2[2]);
        const obj = { errorCode: outer2_6.OAUTH2_ERROR };
        const prototype = tmp4.prototype;
        tmp4 = new tmp4(obj, "User cancelled authorization");
        callback(tmp4);
      }
    };
    obj.isEmbeddedFlow = outer1_0(outer1_2[3]).hasApplicationFlag(application, outer1_5.EMBEDDED);
    obj.disclosures = closure_13;
    obj.integrationType = closure_14;
    const ComponentDispatch = outer1_0(outer1_2[4]).ComponentDispatch;
    ComponentDispatch.dispatch(outer1_4.SHOW_OAUTH2_MODAL, obj);
  });
}, function onAuthorizeValidationPassed() {

});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/native/server/commands/auth.tsx");

export default tmp3;
