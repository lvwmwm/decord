// Module ID: 10911
// Function ID: 84814
// Name: useAppLauncherChatInputRefDummy
// Dependencies: [31, 3991, 8226, 10912, 2]
// Exports: useAppLauncherContext, useRequiredAppLauncherContext

// Module 10911 (useAppLauncherChatInputRefDummy)
import importAllResult from "result";

const require = arg1;
function useAppLauncherChatInputRefDummy(noop) {
  noop = noop.noop;
  return importAllResult.useRef({
    getApplicationCommandManager() {
      if (!noop) {
        const _Error = Error;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    openCustomKeyboard() {
      if (!noop) {
        const _Error = Error;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    closeCustomKeyboard() {
      if (!noop) {
        const _Error = Error;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    }
  });
}
let obj = { DISMISSED: 0, [0]: "DISMISSED", COMMAND: 1, [1]: "COMMAND", ACTIVITY: 2, [2]: "ACTIVITY", BACK: 3, [3]: "BACK", OAUTH_MODAL: 4, [4]: "OAUTH_MODAL" };
let context = importAllResult.createContext(undefined);
const result = require("AppLauncherEntrypoint").fileFinishedImporting("modules/app_launcher/native/AppLauncherContext.tsx");

export const AppLauncherKeyboardCloseReason = obj;
export const AppLauncherBottomSheetExpandReason = { GESTURE: 0, [0]: "GESTURE", KEYBOARD: 1, [1]: "KEYBOARD", APP_VIEW: 2, [2]: "APP_VIEW", COMMAND_VIEW: 3, [3]: "COMMAND_VIEW", OTHER: 4, [4]: "OTHER" };
export const AppLauncherContext = context;
export { useAppLauncherChatInputRefDummy };
export const useRequiredAppLauncherContext = function useRequiredAppLauncherContext() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("AppLauncherContext not found, must be used within AppLauncherNavigator");
    throw error;
  } else {
    return context;
  }
};
export const useAppLauncherContext = function useAppLauncherContext() {
  const _require = sharedValue.useRef(sharedValue1.DISMISSED);
  const dependencyMap = sharedValue.useRef(undefined);
  sharedValue = _require(3991).useSharedValue(-1);
  const obj = _require(3991);
  sharedValue1 = _require(3991).useSharedValue(0);
  const TEXT = _require(8226).AppLauncherEntrypoint.TEXT;
  const obj2 = _require(3991);
  const defaultAppLauncherWidth = _require(10912).useDefaultAppLauncherWidth(TEXT);
  const tmp4 = defaultAppLauncherWidth({ noop: false });
  let closure_6 = tmp4;
  const items = [defaultAppLauncherWidth, TEXT, tmp4, sharedValue, sharedValue1];
  let memo = sharedValue.useMemo(() => ({ keyboardCloseReasonRef: closure_0, bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef: closure_1, chatInputRef: closure_6, width: defaultAppLauncherWidth, entrypoint: TEXT, onActivityItemSelected: undefined }), items);
  const context = sharedValue.useContext(TEXT);
  if (null != context) {
    memo = context;
  }
  return memo;
};
