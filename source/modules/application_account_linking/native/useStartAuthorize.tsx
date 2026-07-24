// Module ID: 5465
// Function ID: 46724
// Name: useStartAuthorize
// Dependencies: [5, 31, 5466, 653, 5467, 5469, 3827, 675, 5471, 2]
// Exports: default

// Module 5465 (useStartAuthorize)
import useAuthorizedAppsTokens from "useAuthorizedAppsTokens";
import result from "result";
import { AuthorizeFlow } from "AuthorizeFlow";
import { AnalyticEvents } from "ME";

const require = arg1;
let result = require("AuthorizeFlow").fileFinishedImporting("modules/application_account_linking/native/useStartAuthorize.tsx");

export default function useStartAuthorize(getOfficialApplicationId) {
  let fetched;
  let token;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let authorizationApp;
  const debug = obj.debug;
  authorizationApp = authorizationApp(5467).useAuthorizationApp(getOfficialApplicationId);
  let prop;
  if (null != authorizationApp) {
    prop = authorizationApp.connectionEntrypointUrl;
  }
  let WEB = null;
  if (null != prop) {
    WEB = AuthorizeFlow.WEB;
  }
  const obj2 = authorizationApp(5467);
  const tmp = undefined !== debug && debug;
  let parentId;
  if (null != authorizationApp) {
    parentId = authorizationApp.parentId;
  }
  if (null == parentId) {
    let id;
    if (null != authorizationApp) {
      id = authorizationApp.id;
    }
    parentId = id;
  }
  const authorizedAppsToken = authorizationApp(5469).useAuthorizedAppsToken(parentId);
  ({ token, fetched } = authorizedAppsToken);
  const items = [authorizationApp];
  obj = { fetched };
  const callback = React.useCallback((() => {
    let closure_0 = outer1_3(async (arg0) => {
      let prop;
      if (null != user) {
        prop = user.connectionEntrypointUrl;
      }
      if (null == prop) {
        return false;
      } else {
        yield outer3_1(outer3_2[6]).openURL(closure_0.connectionEntrypointUrl);
        if (null != arg0.onConfirm) {
          arg0.onConfirm();
        }
        let obj = outer3_1(outer3_2[7]);
        obj = { location_stack: arg0.analyticsLocations, application_id: user.id, flow_type: outer3_5.WEB };
        obj.track(outer3_6.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, obj);
        const obj5 = outer3_1(outer3_2[6]);
        obj = {};
        ({ onSuccess: obj4.onSuccess, onError: obj4.onError } = arg0);
        const result = authorizationApp(outer3_2[8]).accountLinkAuthorizationStarted(user.id, obj);
        return true;
      }
    });
    return function() {
      return callback(...arguments);
    };
  })(), items);
  if (fetched) {
    fetched = null != token;
  }
  obj.hasAlreadyLinked = fetched;
  obj.canStartAuthorization = null != prop;
  obj.startAuthorization = callback;
  obj.connectionApp = authorizationApp;
  obj.chosenFlow = WEB;
  obj.token = token;
  if (!tmp) {
    obj.debug = undefined;
    return obj;
  } else {
    obj = { isSubscribedToAuthorizeRequest: false, oauth2Token: token };
    let prop1;
    if (null != authorizationApp) {
      prop1 = authorizationApp.connectionEntrypointUrl;
    }
    obj.hasConnectionEntrypointUrl = null != prop1;
    if (tmp4) {
      const items1 = [AuthorizeFlow.WEB];
      let items2 = items1;
    } else {
      items2 = [];
    }
    obj.validFlows = items2;
  }
};
