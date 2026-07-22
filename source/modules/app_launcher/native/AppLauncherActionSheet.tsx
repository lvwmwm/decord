// Module ID: 15330
// Function ID: 116635
// Name: AppLauncherActionSheet
// Dependencies: []
// Exports: useAppLauncherActionSheet

// Module 15330 (AppLauncherActionSheet)
function AppLauncherActionSheet(arg0) {
  let channel;
  ({ chatInputRef: closure_0, channel } = arg0);
  const importDefault = channel;
  const ref = React.useRef(null);
  const dependencyMap = ref;
  let obj = arg1(dependencyMap[4]);
  const sharedValue = obj.useSharedValue(-1);
  let obj1 = arg1(dependencyMap[4]);
  const sharedValue1 = obj1.useSharedValue(0);
  const ref1 = React.useRef(undefined);
  const TEXT = arg1(dependencyMap[6]).AppLauncherEntrypoint.TEXT;
  let obj2 = arg1(dependencyMap[7]);
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
  const ref2 = React.useRef(arg1(dependencyMap[5]).AppLauncherKeyboardCloseReason.DISMISSED);
  obj = { ref, animatedIndex: sharedValue, scrollable: true, startExpanded: true };
  obj1 = { bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef: ref1, context: memo, chatInputRef: React.useRef(obj), entrypoint: TEXT, keyboardCloseReasonRef: ref2, width: defaultAppLauncherWidth };
  obj2 = { initialRouteName: AppLauncherRouteName.HOME };
  const ref3 = React.useRef(obj);
  const tmp10 = jsx;
  const tmp9 = jsx;
  const tmp11 = importDefault(dependencyMap[9]);
  const appDMApplication = arg1(dependencyMap[10]).getAppDMApplication(channel);
  let name;
  if (null != appDMApplication) {
    name = appDMApplication.name;
  }
  obj2.initialSearchQuery = name;
  obj1.overrideParams = obj2;
  obj.children = tmp10(tmp11, obj1);
  return tmp9(arg1(dependencyMap[8]).BottomSheet, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const AppLauncherRouteName = arg1(dependencyMap[2]).AppLauncherRouteName;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/app_launcher/native/AppLauncherActionSheet.tsx");

export const useAppLauncherActionSheet = function useAppLauncherActionSheet(arg0) {
  const arg1 = arg0;
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const importDefault = first;
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
              callback(false);
            },
          registerDismissHandler(onDismiss) {

            }
        };
        obj.value = obj;
        obj = {};
        const merged = Object.assign(arg0);
        obj.children = callback(closure_7, obj);
        tmp = callback(first(tmp3[11]).Provider, obj);
      }
      return tmp;
    }, items),
    setAppLauncherActionSheetEnabled: tmp[1]
  };
};
