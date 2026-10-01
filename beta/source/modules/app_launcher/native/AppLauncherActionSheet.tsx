// Module ID: 16295
// Function ID: 16296
// Name: AppLauncherActionSheet
// Dependencies: [32, 19, 1484, 21, 4566, 10785, 8712, 10786, 6571, 11564, 11678, 6573, 2]
// Exports: useAppLauncherActionSheet

// Module 16295 (AppLauncherActionSheet)
import Fragment from "Fragment" /* 21 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import reactDefault from "react" /* 6573 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8712 */;
import AppLauncherContext from "AppLauncherContext" /* 10785 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 10786 */;
import AppLauncherNavigatorDefault from "AppLauncherNavigator" /* 11564 */;
import getAppDMApplication from "getAppDMApplication" /* 11678 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let BottomSheet;

function AppLauncherActionSheet(arg0) {
  let channel;
  let closure_129_0;
  let name;
  ({ chatInputRef: closure_129_0, channel } = arg0);
  const ref = react.useRef(null);
  const obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(-1);
  const obj2 = ReanimatedRexport;
  const sharedValue1 = obj2.useSharedValue(0);
  const ref1 = react.useRef(undefined);
  const ref2 = react.useRef(AppLauncherContext.AppLauncherKeyboardCloseReason.DISMISSED);
  const TEXT = AppLauncherTypes.AppLauncherEntrypoint.TEXT;
  const items = [channel];
  const obj3 = useDefaultAppLauncherWidth;
  const defaultAppLauncherWidth = obj3.useDefaultAppLauncherWidth(TEXT);
  const obj4 = {
    getApplicationCommandManager() {
      const current = ref.current;
      let applicationCommandManager;
      if (current != null) {
        applicationCommandManager = current.getApplicationCommandManager();
      }
      return applicationCommandManager;
    },
    closeCustomKeyboard() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
    },
    openCustomKeyboard() {
      const current = ref.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  };
  const memo = react.useMemo(() => ({ channel, type: "channel" }), items);
  const ref3 = react.useRef(obj4);
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const obj7 = { initialRouteName: AppLauncherRouteName.HOME, initialSearchQuery: name };
  AppLauncherNavigatorDefault;
  const obj8 = getAppDMApplication;
  const appDMApplication = obj8.getAppDMApplication(channel);
  name = undefined;
  if (appDMApplication != null) {
    name = appDMApplication.name;
  }
  return <BottomSheet ref={ref} animatedIndex={sharedValue} scrollable startExpanded>{null}</BottomSheet>;
}
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherActionSheet.tsx");

export const useAppLauncherActionSheet = function useAppLauncherActionSheet(arg0) {
  let first;
  let items;
  let tmp3;
  let closure_0 = arg0;
  [first, tmp3] = react.useState(false);
  let closure_2 = tmp3;
  const obj = {
    appLauncherActionSheet: react.useMemo(() => {
      let tmp = null;
      if (first) {
        const obj2 = {
          transitionState: "visible",
          close() {

            },
          onLeave() {
              closure_1_2(false);
            },
          registerDismissHandler() {

            }
        };
        const Provider = reactDefault.Provider;
        const merged = Object.assign(closure_0);
        tmp = <Provider value={obj2}>{null}</Provider>;
      }
      return tmp;
    }, items),
    setAppLauncherActionSheetEnabled: tmp3
  };
  items = [first, arg0];
  return obj;
};
