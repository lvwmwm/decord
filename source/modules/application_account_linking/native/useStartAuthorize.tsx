// Module ID: 5464
// Function ID: 46708
// Name: useStartAuthorize
// Dependencies: []
// Exports: default

// Module 5464 (useStartAuthorize)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const AuthorizeFlow = arg1(dependencyMap[2]).AuthorizeFlow;
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/application_account_linking/native/useStartAuthorize.tsx");

export default function useStartAuthorize(getOfficialApplicationId) {
  let fetched;
  let token;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let arg1;
  const debug = obj.debug;
  const authorizationApp = arg1(dependencyMap[4]).useAuthorizationApp(getOfficialApplicationId);
  arg1 = authorizationApp;
  let prop;
  if (null != authorizationApp) {
    prop = authorizationApp.connectionEntrypointUrl;
  }
  let WEB = null;
  if (null != prop) {
    WEB = AuthorizeFlow.WEB;
  }
  const obj2 = arg1(dependencyMap[4]);
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
  const authorizedAppsToken = arg1(dependencyMap[5]).useAuthorizedAppsToken(parentId);
  ({ token, fetched } = authorizedAppsToken);
  const items = [authorizationApp];
  obj = { fetched };
  const callback = React.useCallback(() => {
    let closure_0 = callback(async (arg0) => {
      let prop;
      if (null != lib) {
        prop = lib.connectionEntrypointUrl;
      }
      if (null == prop) {
        return false;
      } else {
        yield callback(closure_2[6]).openURL(closure_0.connectionEntrypointUrl);
        if (null != arg0.onConfirm) {
          arg0.onConfirm();
        }
        let obj = callback(closure_2[7]);
        obj = { location_stack: arg0.analyticsLocations, application_id: lib.id, flow_type: constants.WEB };
        obj.track(constants2.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, obj);
        const obj5 = callback(closure_2[6]);
        obj = {};
        ({ onSuccess: obj4.onSuccess, onError: obj4.onError } = arg0);
        const result = lib(closure_2[8]).accountLinkAuthorizationStarted(lib.id, obj);
        return true;
      }
    });
    return function() {
      return callback(...arguments);
    };
  }(), items);
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
