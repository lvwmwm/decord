// Module ID: 13533
// Function ID: 13534
// Name: AppLauncherActionSheet
// Dependencies: [32, 19, 1501, 21, 1655, 12578, 12579, 12580, 5566, 13413, 13534, 5897, 2]
// Exports: useAppLauncherActionSheet

// Module 13533 (AppLauncherActionSheet)
import Fragment from "Fragment" /* 21 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1501 */;
import _mod1655 from "module_1655" /* 1655 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5566 */;
import reactDefault from "react" /* 5897 */;
import AppLauncherContext from "AppLauncherContext" /* 12578 */;
import AppLauncherTypes from "AppLauncherTypes" /* 12579 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 12580 */;
import AppLauncherNavigatorDefault from "AppLauncherNavigator" /* 13413 */;
import getAppDMApplication from "getAppDMApplication" /* 13534 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function AppLauncherActionSheet(arg0) {
  let channel;
  let closure_129_0;
  let name;
  ({ chatInputRef: closure_129_0, channel } = arg0);
  const ref = react.useRef(null);
  const obj = _mod1655;
  const sharedValue = obj.useSharedValue(-1);
  const obj2 = _mod1655;
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
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
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
