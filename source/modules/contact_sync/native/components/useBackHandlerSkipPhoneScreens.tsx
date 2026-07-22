// Module ID: 11714
// Function ID: 90971
// Name: useBackHandlerSkipPhoneScreens
// Dependencies: []
// Exports: default, useBackHandlerMinimizeApp

// Module 11714 (useBackHandlerSkipPhoneScreens)
const NativeModules = require(dependencyMap[0]).NativeModules;
const ContactSyncScenes = require(dependencyMap[1]).ContactSyncScenes;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx");

export default function useBackHandlerSkipPhoneScreens(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  require(dependencyMap[2]).useNavigatorBackPressHandler(() => {
    if (null != arg1) {
      arg1();
    } else {
      let arr = arg0;
      const items = [, , ];
      ({ ADD_PHONE: arr2[0], VERIFY_PHONE: arr2[1], VERIFY_PASSWORD: arr2[2] } = closure_3);
      const routes = arg0.getState().routes;
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
  require(dependencyMap[2]).useNavigatorBackPressHandler(() => {
    const MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
};
