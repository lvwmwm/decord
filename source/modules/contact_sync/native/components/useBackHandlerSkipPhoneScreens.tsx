// Module ID: 12110
// Function ID: 12111
// Name: useBackHandlerSkipPhoneScreens
// Dependencies: [17, 12093, 5315, 2]
// Exports: default, useBackHandlerMinimizeApp

// Module 12110 (useBackHandlerSkipPhoneScreens)
import { NativeModules } from "get ActivityIndicator";
import { ContactSyncScenes } from "ContactSyncLandingPage";

const result = require("useNavigatorBackPressHandler").fileFinishedImporting("modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx");

export default function useBackHandlerSkipPhoneScreens(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  _require(5315).useNavigatorBackPressHandler(() => {
    if (null != closure_1) {
      tmp();
    } else {
      let arr = state;
      const items = [, , ];
      ({ ADD_PHONE: arr2[0], VERIFY_PHONE: arr2[1], VERIFY_PASSWORD: arr2[2] } = outer1_3);
      const routes = state.getState().routes;
      if (routes.length <= 2) {
        arr = arr.pop();
      } else if (items.includes(routes[routes.length - 2].name)) {
        arr = arr.pop(routes.length - 1);
      }
    }
    return true;
  });
};
export const useBackHandlerMinimizeApp = function useBackHandlerMinimizeApp() {
  require(5315) /* useNavigatorBackPressHandler */.useNavigatorBackPressHandler(() => {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
};
