// Module ID: 5688
// Function ID: 48973
// Name: createHandoffTokenWithLoadingModal
// Dependencies: []

// Module 5688 (createHandoffTokenWithLoadingModal)
function createHandoffTokenWithLoadingModal(arg0) {
  ({ nonce: closure_0, fingerprint: closure_1, handoffSource: closure_2 } = arg0);
  return new Promise((onResolved) => {
    let obj = callback(closure_2[3]);
    obj.popWithKey(closure_8);
    if (authenticated.isAuthenticated()) {
      obj = {
        operation() {
            return callback(closure_2[5]).createHandoffToken(arg0);
          },
        onResolved,
        onRejected(_55) {
            let obj = callback(closure_2[6]);
            obj = { reason: "handoff_token_fetch_failure", fingerprint: _55(closure_2[7]).maybeExtractId(callback), handoff_source: closure_2 };
            obj = { fingerprint: callback };
            obj.track(constants.MOBILE_WEB_HANDOFF_FAILURE, obj, obj);
            _55("null");
          }
      };
      const result = onResolved(closure_2[4]).showSimpleLoadingModal(closure_8, obj);
      const obj6 = onResolved(closure_2[4]);
    } else {
      let obj1 = callback(closure_2[6]);
      obj = { reason: "user_not_authenticated_in_app", fingerprint: onResolved(closure_2[7]).maybeExtractId(callback), handoff_source: closure_2 };
      obj1 = { fingerprint: callback };
      obj1.track(constants.MOBILE_WEB_HANDOFF_FAILURE, obj, obj1);
      onResolved("null");
      const obj4 = onResolved(closure_2[7]);
    }
  });
}
async function _redirectWithHandoffToken(arg0, arg1) {
  const fn = function*(arg0) {
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
      nonce = callback2(closure_2[5]).generateNonce();
      const obj3 = callback2(closure_2[5]);
    }
    obj["nonce"] = nonce;
    obj["handoffSource"] = callback(closure_2[8]).getLoginHandoffSourceFromRedirectTo(arg0);
    const obj4 = callback(closure_2[8]);
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
      uRL2 = new URL(callback2(closure_2[9]).makeUrl(constants.LOGIN_HANDOFF, false));
      const obj5 = callback2(closure_2[9]);
    }
    const searchParams = uRL2.searchParams;
    searchParams.append("handoff_token", yield closure_9(obj));
    if (true !== merged.skipLoginRedirect) {
      const searchParams2 = uRL2.searchParams;
      searchParams2.append("handoff_key", obj.nonce);
      const searchParams3 = uRL2.searchParams;
      searchParams3.append("redirect_to", arg0);
    }
    const obj6 = callback2(closure_2[10]);
    if (flag) {
      obj6.openURLExternally(uRL2.href);
    } else {
      obj6.performURLNavigation(uRL2.href);
    }
  };
  fn.next();
  return fn;
}
async function _redirectDeveloperPortalWithHandoffToken(arg0, arg1) {
  const fn = function*(arg0) {
    let obj = arg1;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    obj = {};
    const merged = Object.assign(obj);
    let nonce = obj.nonce;
    if (null == nonce) {
      nonce = callback2(closure_2[5]).generateNonce();
      const obj3 = callback2(closure_2[5]);
    }
    obj["nonce"] = nonce;
    obj["handoffSource"] = callback(closure_2[8]).LoginHandoffSource.ROLE_SUBSCRIPTION_SETTING;
    const uRL = new URL("" + location.protocol + closure_6.DEVELOPER_PORTAL_LOGIN_HANDOFF(obj.nonce, yield closure_9(obj), arg0));
    callback2(closure_2[10]).performURLNavigation(uRL.href);
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ AnalyticEvents: closure_5, MarketingURLs: closure_6, Routes: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = "mweb-handoff";
const obj = {
  redirectWithHandoffToken(combined, arg1) {
    return _redirectWithHandoffToken(...arguments);
  },
  redirectDeveloperPortalWithHandoffToken(DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY) {
    return _redirectDeveloperPortalWithHandoffToken(...arguments);
  }
};
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/mobile_web_handoff/native/MobileWebHandoffLinking.tsx");

export default obj;
