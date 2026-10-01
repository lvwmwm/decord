// Module ID: 12405
// Function ID: 12406
// Name: useBackHandlerSkipPhoneScreens
// Dependencies: [17, 12388, 6128, 2]
// Exports: default, useBackHandlerMinimizeApp

// Module 12405 (useBackHandlerSkipPhoneScreens)
import _mod17 from "module_17" /* 17 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 6128 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12388 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const NativeModules = _mod17.NativeModules;
const ContactSyncScenes = ContactSyncConstants.ContactSyncScenes;
const result = size.fileFinishedImporting("modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx");

export default function useBackHandlerSkipPhoneScreens(arg0, arg1) {
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
};
export const useBackHandlerMinimizeApp = function useBackHandlerMinimizeApp() {
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
};
