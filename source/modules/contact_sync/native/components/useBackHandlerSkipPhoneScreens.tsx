// Module ID: 11724
// Function ID: 91020
// Name: useBackHandlerSkipPhoneScreens
// Dependencies: [27, 11707, 5093, 2]
// Exports: default, useBackHandlerMinimizeApp

// Module 11724 (useBackHandlerSkipPhoneScreens)
import { NativeModules } from "get ActivityIndicator";
import { ContactSyncScenes } from "ContactSyncLandingPage";

const result = require("useNavigatorBackPressHandler").fileFinishedImporting("modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx");

export default function useBackHandlerSkipPhoneScreens(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  _require(5093).useNavigatorBackPressHandler(() => {
    if (null != callback) {
      callback();
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
  require(5093) /* useNavigatorBackPressHandler */.useNavigatorBackPressHandler(() => {
    const MinimizeApp = outer1_2.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
};
