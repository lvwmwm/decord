// Module ID: 14214
// Function ID: 14215
// Name: useBackHandlerSkipPhoneScreens
// Dependencies: [17, 14196, 6998, 2]
// Exports: default, useBackHandlerMinimizeApp

// Module 14214 (useBackHandlerSkipPhoneScreens)
import react_native from "react-native" /* 17 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 6998 */;
import ContactSyncConstants from "ContactSyncConstants" /* 14196 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let MinimizeApp, _require, dependencyMap;

const NativeModules = react_native.NativeModules;
const ContactSyncScenes = ContactSyncConstants.ContactSyncScenes;
const result = size.fileFinishedImporting("modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx");

export default function useBackHandlerSkipPhoneScreens(arg0, arg1) {
  let closure_1;
  let state;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("useNavigatorBackPressHandler");
  obj.useNavigatorBackPressHandler(() => {
    if (null != closure_1) {
      tmp();
    } else {
      const items = [, , ];
      ({ ADD_PHONE: arr2[0], VERIFY_PHONE: arr2[1], VERIFY_PASSWORD: arr2[2] } = ContactSyncScenes);
      const routes = state.getState().routes;
      if (routes.length <= 2) {
        state.pop();
      } else if (items.includes(routes[routes.length - 2].name)) {
        state.pop(routes.length - 1);
      }
    }
    return true;
  });
};
export function useBackHandlerMinimizeApp() {
  const obj = useNavigatorBackPressHandler;
  obj.useNavigatorBackPressHandler(() => {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
}
