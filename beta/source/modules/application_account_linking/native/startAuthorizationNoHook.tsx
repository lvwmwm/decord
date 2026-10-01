// Module ID: 11264
// Function ID: 11265
// Name: startAuthorizationNoHook
// Dependencies: [5, 1074, 6588, 4525, 1241, 2]
// Exports: startAuthorizationNoHook

// Module 11264 (startAuthorizationNoHook)
import Constants from "Constants" /* 1074 */;
import LinkingDefault from "Linking" /* 4525 */;
import useAuthorizationApp from "useAuthorizationApp" /* 6588 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_3, closure_4, location_stack, prop;

let obj = function _startAuthorizationNoHook() {
  obj = _asyncToGenerator(async (location_stack, arg1) => {
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let authorizationApp;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              location_stack = closure_1;
              authorizationApp = undefined;
              if (null != location_stack) {
                const obj4 = useAuthorizationApp;
                authorizationApp = obj4.getAuthorizationApp(tmp27);
                prop = undefined;
                if (authorizationApp != null) {
                  prop = authorizationApp.connectionEntrypointUrl;
                }
                if (null != prop) {
                  c5 = 1;
                  const obj5 = LinkingDefault;
                  prop = obj5.openURL(authorizationApp.connectionEntrypointUrl);
                  c6 = 2;
                  c7 = 1;
                  return { value: prop, done: false };
                }
              }
            }
          } else if (1 === tmp4) {
            c5 = 0;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            const obj8 = { location_stack, application_id: authorizationApp.id, flow_type: "web" };
            obj = closure_131_1(closure_131_2[4]);
            obj.track(closure_131_4.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, obj8);
            c5 = 0;
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp20) {
          closure_4 = tmp20;
          if (0 === c5) {
            c7 = 3;
            throw tmp20;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/application_account_linking/native/startAuthorizationNoHook.tsx");

export const startAuthorizationNoHook = function startAuthorizationNoHook() {
  return obj(...arguments);
};
