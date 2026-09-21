// Module ID: 12842
// Function ID: 12843
// Name: useBackHandlerSkipPhoneScreens
// Dependencies: [17, 12825, 558, 568, 5845, 2]

// Module 12842 (useBackHandlerSkipPhoneScreens)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 568 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 5845 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12825 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const NativeModules = _mod17.NativeModules;
const ContactSyncScenes = ContactSyncConstants.ContactSyncScenes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(3);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp4 = cResult[2];
    }
    require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(tmp4);
  }
  const fn = function o() {
    if (null != closure_1) {
      tmp();
    } else {
      const items = [, , ];
      ({ ADD_PHONE: arr2[0], VERIFY_PHONE: arr2[1], VERIFY_PASSWORD: arr2[2] } = ContactSyncScenes);
      const routes = state.getState().routes;
      if (routes.length <= 2) {
        arr.pop();
      } else if (items.includes(routes[routes.length - 2].name)) {
        arr.pop(routes.length - 1);
      }
    }
    return true;
  };
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => {
    if (null != closure_1) {
      tmp();
    } else {
      const items = [, , ];
      ({ ADD_PHONE: arr2[0], VERIFY_PHONE: arr2[1], VERIFY_PASSWORD: arr2[2] } = ContactSyncScenes);
      const routes = state.getState().routes;
      if (routes.length <= 2) {
        arr.pop();
      } else if (items.includes(routes[routes.length - 2].name)) {
        arr.pop(routes.length - 1);
      }
    }
    return true;
  });
});
const result = size.fileFinishedImporting("modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx");

export default tmp2;
export const useBackHandlerMinimizeApp = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      MinimizeApp = MinimizeApp.MinimizeApp;
      MinimizeApp.minimizeApp();
      return true;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(first);
}) : (() => {
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
});
