// Module ID: 11750
// Function ID: 91271
// Name: createHandoffTokenWithLoadingModal
// Dependencies: [5, 1194, 653, 4338, 11751, 11753, 675, 490, 11754, 1443, 3828, 2]

// Module 11750 (createHandoffTokenWithLoadingModal)
import _createHandoffToken from "_createHandoffToken";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function createHandoffTokenWithLoadingModal(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ nonce: require, fingerprint: importDefault, handoffSource: dependencyMap } = arg0);
  return new Promise((onResolved) => {
    let closure_0 = onResolved;
    let obj = outer1_1(outer1_2[3]);
    obj.popWithKey(outer1_8);
    if (outer1_4.isAuthenticated()) {
      obj = {
        operation(arg0) {
            return outer2_1(outer2_2[5]).createHandoffToken(closure_0);
          },
        onResolved,
        onRejected(_55) {
            let obj = outer2_1(outer2_2[6]);
            obj = { reason: "handoff_token_fetch_failure", fingerprint: outer2_0(outer2_2[7]).maybeExtractId(outer1_1), handoff_source: outer1_2 };
            obj = { fingerprint: outer1_1 };
            obj.track(outer2_5.MOBILE_WEB_HANDOFF_FAILURE, obj, obj);
            onResolved("null");
          }
      };
      const result = outer1_0(outer1_2[4]).showSimpleLoadingModal(outer1_8, obj);
      const obj6 = outer1_0(outer1_2[4]);
    } else {
      let obj1 = outer1_1(outer1_2[6]);
      obj = { reason: "user_not_authenticated_in_app", fingerprint: outer1_0(outer1_2[7]).maybeExtractId(closure_1), handoff_source: closure_2 };
      obj1 = { fingerprint: closure_1 };
      obj1.track(outer1_5.MOBILE_WEB_HANDOFF_FAILURE, obj, obj1);
      onResolved("null");
      const obj4 = outer1_0(outer1_2[7]);
    }
  });
}
function _redirectWithHandoffToken() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _redirectDeveloperPortalWithHandoffToken() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AnalyticEvents: closure_5, MarketingURLs: closure_6, Routes: closure_7 } = ME);
let c8 = "mweb-handoff";
let result = require("ME").fileFinishedImporting("modules/mobile_web_handoff/native/MobileWebHandoffLinking.tsx");

export default {
  redirectWithHandoffToken(combined, arg1) {
    return _redirectWithHandoffToken(...arguments);
  },
  redirectDeveloperPortalWithHandoffToken(DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY) {
    return _redirectDeveloperPortalWithHandoffToken(...arguments);
  }
};
