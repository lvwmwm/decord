// Module ID: 12354
// Function ID: 12355
// Name: AppLauncherActionSheet
// Dependencies: [32, 19, 1497, 21, 5090, 11466, 11467, 11468, 5267, 12231, 12355, 5586, 2]
// Exports: useAppLauncherActionSheet

// Module 12354 (AppLauncherActionSheet)
import Fragment from "Fragment" /* 21 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1497 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5267 */;
import reactDefault from "react" /* 5586 */;
import AppLauncherContext from "AppLauncherContext" /* 11466 */;
import AppLauncherTypes from "AppLauncherTypes" /* 11467 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 11468 */;
import AppLauncherNavigatorDefault from "AppLauncherNavigator" /* 12231 */;
import getAppDMApplication from "getAppDMApplication" /* 12355 */;
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

export function useAppLauncherActionSheet(arg0) {
  let items;
  let memo;
  let closure_0 = arg0;
  let tmp = memo(react.useState(false), 2);
  const first = tmp[0];
  let closure_2 = tmp3;
  memo = react.useMemo(() => ({
    transitionState: "visible",
    close() {

    },
    onLeave() {
      closure_1_2(false);
    },
    registerDismissHandler() {

    }
  }), []);
  const obj = {
    appLauncherActionSheet: react.useMemo(() => {
      let tmp = null;
      if (first) {
        const Provider = reactDefault.Provider;
        const merged = Object.assign(closure_0);
        tmp = <Provider value={memo}>{null}</Provider>;
      }
      return tmp;
    }, items),
    setAppLauncherActionSheetEnabled: tmp[1]
  };
  items = [memo, first, arg0];
  return obj;
}
