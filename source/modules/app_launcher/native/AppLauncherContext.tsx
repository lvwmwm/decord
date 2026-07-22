// Module ID: 10874
// Function ID: 84576
// Name: useAppLauncherChatInputRefDummy
// Dependencies: []
// Exports: useAppLauncherContext, useRequiredAppLauncherContext

// Module 10874 (useAppLauncherChatInputRefDummy)
function useAppLauncherChatInputRefDummy(noop) {
  const arg1 = noop.noop;
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
const importAllResult = importAll(dependencyMap[0]);
const obj = { DISMISSED: 0, [0]: "DISMISSED", COMMAND: 1, [1]: "COMMAND", ACTIVITY: 2, [2]: "ACTIVITY", BACK: 3, [3]: "BACK", OAUTH_MODAL: 4, [4]: "OAUTH_MODAL" };
const context = importAllResult.createContext(undefined);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/app_launcher/native/AppLauncherContext.tsx");

export const AppLauncherKeyboardCloseReason = obj;
export const AppLauncherBottomSheetExpandReason = { GESTURE: 0, [0]: "GESTURE", KEYBOARD: 1, [1]: "KEYBOARD", APP_VIEW: 2, [2]: "APP_VIEW", COMMAND_VIEW: 3, [3]: "COMMAND_VIEW", OTHER: 4, [4]: "OTHER" };
export const AppLauncherContext = context;
export { useAppLauncherChatInputRefDummy };
export const useRequiredAppLauncherContext = function useRequiredAppLauncherContext() {
  const context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("AppLauncherContext not found, must be used within AppLauncherNavigator");
    throw error;
  } else {
    return context;
  }
};
export const useAppLauncherContext = function useAppLauncherContext() {
  const callback = importAllResult.useRef(obj.DISMISSED);
  let closure_1 = importAllResult.useRef(undefined);
  let obj = callback(closure_1[1]);
  const sharedValue = obj.useSharedValue(-1);
  const sharedValue1 = callback(closure_1[1]).useSharedValue(0);
  obj = sharedValue1;
  const TEXT = callback(closure_1[2]).AppLauncherEntrypoint.TEXT;
  let context = TEXT;
  const obj2 = callback(closure_1[1]);
  const defaultAppLauncherWidth = callback(closure_1[3]).useDefaultAppLauncherWidth(TEXT);
  const useAppLauncherChatInputRefDummy = defaultAppLauncherWidth;
  const tmp4 = useAppLauncherChatInputRefDummy({ noop: false });
  const items = [defaultAppLauncherWidth, TEXT, tmp4, sharedValue, sharedValue1];
  let memo = importAllResult.useMemo(() => ({ keyboardCloseReasonRef: closure_0, bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef: closure_1, chatInputRef: tmp4, width: defaultAppLauncherWidth, entrypoint: TEXT, onActivityItemSelected: undefined }), items);
  context = importAllResult.useContext(context);
  if (null != context) {
    memo = context;
  }
  return memo;
};
