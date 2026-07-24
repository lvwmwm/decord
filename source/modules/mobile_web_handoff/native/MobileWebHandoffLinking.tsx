// Module ID: 5692
// Function ID: 49018
// Name: createHandoffTokenWithLoadingModal
// Dependencies: [5, 1194, 653, 4337, 5693, 5695, 675, 490, 5696, 1443, 3827, 2]

// Module 5692 (createHandoffTokenWithLoadingModal)
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
async function _redirectWithHandoffToken(arg0, arg1) {
  let iter = (function*(arg0) {
    let obj = arg1;
    if (obj === undefined) {
      obj = {};
    }
    let flag = obj.forceExternalBrowser;
    if (flag === undefined) {
      flag = false;
    }
    obj = Object.create(null);
    obj.forceExternalBrowser = 0;
    const merged = Object.assign(obj, obj);
    yield undefined;
    obj = {};
    const merged1 = Object.assign(merged);
    let nonce = merged.nonce;
    if (null == nonce) {
      nonce = outer2_1(outer2_2[5]).generateNonce();
      const obj3 = outer2_1(outer2_2[5]);
    }
    obj["nonce"] = nonce;
    obj["handoffSource"] = outer2_0(outer2_2[8]).getLoginHandoffSourceFromRedirectTo(arg0);
    const obj4 = outer2_0(outer2_2[8]);
    if (true === merged.skipLoginRedirect) {
      const _URL2 = URL;
      const _location = location;
      const _window = window;
      const _HermesInternal = HermesInternal;
      const uRL = new URL("" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT);
      const _URL3 = URL;
      const uRL1 = new URL(arg0, uRL);
      ({ pathname: tmp18.pathname, search: tmp18.search, hash: tmp18.hash } = uRL1);
      let uRL2 = uRL;
    } else {
      const _URL = URL;
      uRL2 = new URL(outer2_1(outer2_2[9]).makeUrl(outer2_7.LOGIN_HANDOFF, false));
      const obj5 = outer2_1(outer2_2[9]);
    }
    const searchParams = uRL2.searchParams;
    searchParams.append("handoff_token", yield outer2_9(obj));
    if (true !== merged.skipLoginRedirect) {
      const searchParams2 = uRL2.searchParams;
      searchParams2.append("handoff_key", obj.nonce);
      const searchParams3 = uRL2.searchParams;
      searchParams3.append("redirect_to", arg0);
    }
    const obj6 = outer2_1(outer2_2[10]);
    if (flag) {
      obj6.openURLExternally(uRL2.href);
    } else {
      obj6.performURLNavigation(uRL2.href);
    }
  })();
  iter.next();
  return iter;
}
async function _redirectDeveloperPortalWithHandoffToken(arg0, arg1) {
  let iter = (function*(arg0) {
    let obj = arg1;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    obj = {};
    const merged = Object.assign(obj);
    let nonce = obj.nonce;
    if (null == nonce) {
      nonce = outer2_1(outer2_2[5]).generateNonce();
      const obj3 = outer2_1(outer2_2[5]);
    }
    obj["nonce"] = nonce;
    obj["handoffSource"] = outer2_0(outer2_2[8]).LoginHandoffSource.ROLE_SUBSCRIPTION_SETTING;
    const uRL = new URL("" + location.protocol + outer2_6.DEVELOPER_PORTAL_LOGIN_HANDOFF(obj.nonce, yield outer2_9(obj), arg0));
    outer2_1(outer2_2[10]).performURLNavigation(uRL.href);
  })();
  iter.next();
  return iter;
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
