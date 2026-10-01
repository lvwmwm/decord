// Module ID: 10785
// Function ID: 10786
// Name: AppLauncherContext
// Dependencies: [19, 4566, 8712, 10786, 2]
// Exports: useAppLauncherChatInputRefDummy, useAppLauncherContext, useRequiredAppLauncherContext

// Module 10785 (AppLauncherContext)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8712 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 10786 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const AppLauncherKeyboardCloseReason = { DISMISSED: 0, [0]: "DISMISSED", COMMAND: 1, [1]: "COMMAND", ACTIVITY: 2, [2]: "ACTIVITY", BACK: 3, [3]: "BACK", OAUTH_MODAL: 4, [4]: "OAUTH_MODAL" };
let context = react.createContext(undefined);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherContext.tsx");

export { AppLauncherKeyboardCloseReason };
export const AppLauncherBottomSheetExpandReason = { GESTURE: 0, [0]: "GESTURE", KEYBOARD: 1, [1]: "KEYBOARD", APP_VIEW: 2, [2]: "APP_VIEW", COMMAND_VIEW: 3, [3]: "COMMAND_VIEW", OTHER: 4, [4]: "OTHER" };
export const AppLauncherContext = context;
export const useAppLauncherChatInputRefDummy = function useAppLauncherChatInputRefDummy(noop) {
  noop = noop.noop;
  const obj = {
    getApplicationCommandManager() {
      const tmp = c0;
      if (!tmp) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    openCustomKeyboard() {
      const tmp = c0;
      if (!tmp) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    closeCustomKeyboard() {
      const tmp = c0;
      if (!tmp) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    }
  };
  return react.useRef(obj);
};
export const useRequiredAppLauncherContext = function useRequiredAppLauncherContext() {
  context = react.useContext(context);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("AppLauncherContext not found, must be used within AppLauncherNavigator");
    throw error;
  } else {
    return context;
  }
};
export const useAppLauncherContext = function useAppLauncherContext() {
  let obj;
  let closure_0 = react.useRef(obj.DISMISSED);
  let closure_1 = react.useRef(undefined);
  obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(-1);
  const obj2 = ReanimatedRexport;
  const sharedValue1 = obj2.useSharedValue(0);
  const TEXT = AppLauncherTypes.AppLauncherEntrypoint.TEXT;
  const obj3 = useDefaultAppLauncherWidth;
  const defaultAppLauncherWidth = obj3.useDefaultAppLauncherWidth(TEXT);
  let c0 = false;
  const obj4 = {
    getApplicationCommandManager() {
      const tmp = c0;
      if (!tmp) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    openCustomKeyboard() {
      const tmp = c0;
      if (!tmp) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    closeCustomKeyboard() {
      const tmp = c0;
      if (!tmp) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    }
  };
  const ref = react.useRef(obj4);
  const items = [defaultAppLauncherWidth, TEXT, ref, sharedValue, sharedValue1];
  const memo = react.useMemo(() => ({ keyboardCloseReasonRef, bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef, chatInputRef: ref, width: defaultAppLauncherWidth, entrypoint: TEXT, onActivityItemSelected: "Boolean" }), items);
  context = react.useContext(context);
  if (context == null) {
    context = memo;
  }
  return context;
};
