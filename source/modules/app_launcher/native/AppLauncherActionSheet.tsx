// Module ID: 15447
// Function ID: 118809
// Name: AppLauncherActionSheet
// Dependencies: [57, 31, 1455, 33, 3991, 10884, 8182, 10885, 5187, 11201, 11316, 5444, 2]
// Exports: useAppLauncherActionSheet

// Module 15447 (AppLauncherActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { jsx } from "jsxProd";

const require = arg1;
function AppLauncherActionSheet(arg0) {
  let channel;
  let require;
  ({ chatInputRef: require, channel } = arg0);
  const ref = React.useRef(null);
  let obj = require(ref[4]);
  const sharedValue = obj.useSharedValue(-1);
  let obj1 = require(ref[4]);
  const sharedValue1 = obj1.useSharedValue(0);
  const ref1 = React.useRef(undefined);
  const TEXT = require(ref[6]).AppLauncherEntrypoint.TEXT;
  let obj2 = require(ref[7]);
  const items = [channel];
  const defaultAppLauncherWidth = obj2.useDefaultAppLauncherWidth(TEXT);
  obj = {
    getApplicationCommandManager() {
      const current = ref.current;
      let applicationCommandManager;
      if (null != current) {
        applicationCommandManager = current.getApplicationCommandManager();
      }
      return applicationCommandManager;
    },
    closeCustomKeyboard() {
      const current = ref.current;
      if (null != current) {
        current.closeActionSheet();
      }
    },
    openCustomKeyboard() {
      const current = ref.current;
      if (null != current) {
        current.expandActionSheet();
      }
    }
  };
  const memo = React.useMemo(() => ({ channel, type: "channel" }), items);
  const ref2 = React.useRef(require(ref[5]).AppLauncherKeyboardCloseReason.DISMISSED);
  obj = { ref, animatedIndex: sharedValue, scrollable: true, startExpanded: true };
  obj1 = { bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef: ref1, context: memo, chatInputRef: React.useRef(obj), entrypoint: TEXT, keyboardCloseReasonRef: ref2, width: defaultAppLauncherWidth };
  obj2 = { initialRouteName: AppLauncherRouteName.HOME };
  const ref3 = React.useRef(obj);
  const tmp10 = jsx;
  const tmp9 = jsx;
  const tmp11 = channel(ref[9]);
  const appDMApplication = require(ref[10]).getAppDMApplication(channel);
  let name;
  if (null != appDMApplication) {
    name = appDMApplication.name;
  }
  obj2.initialSearchQuery = name;
  obj1.overrideParams = obj2;
  obj.children = tmp10(tmp11, obj1);
  return tmp9(require(ref[8]).BottomSheet, obj);
}
const result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/app_launcher/native/AppLauncherActionSheet.tsx");

export const useAppLauncherActionSheet = function useAppLauncherActionSheet(arg0) {
  let closure_0 = arg0;
  let tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const dependencyMap = tmp3;
  const items = [first, arg0];
  return {
    appLauncherActionSheet: React.useMemo(() => {
      let tmp = null;
      if (first) {
        let obj = {};
        obj = {
          transitionState: "visible",
          close() {

            },
          onLeave() {
              outer1_2(false);
            },
          registerDismissHandler(onDismiss) {

            }
        };
        obj.value = obj;
        obj = {};
        const merged = Object.assign(closure_0);
        obj.children = outer1_6(outer1_7, obj);
        tmp = outer1_6(first(tmp3[11]).Provider, obj);
      }
      return tmp;
    }, items),
    setAppLauncherActionSheetEnabled: tmp[1]
  };
};
