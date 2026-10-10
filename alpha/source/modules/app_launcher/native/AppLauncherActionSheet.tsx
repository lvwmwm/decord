// Module ID: 17104
// Function ID: 17105
// Name: AppLauncherActionSheet
// Dependencies: [32, 19, 1502, 21, 558, 576, 4850, 10621, 10622, 10623, 11905, 11754, 6839, 6841, 2]

// Module 17104 (AppLauncherActionSheet)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1502 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6839 */;
import reactDefault from "react" /* 6841 */;
import AppLauncherContext from "AppLauncherContext" /* 10621 */;
import AppLauncherTypes from "AppLauncherTypes" /* 10622 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 10623 */;
import AppLauncherNavigatorDefault from "AppLauncherNavigator" /* 11754 */;
import getAppDMApplication from "getAppDMApplication" /* 11905 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, expandActionSheetResult;

const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherActionSheet(chatInputRef) {
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(21);
  chatInputRef = chatInputRef.chatInputRef;
  const channel = chatInputRef.channel;
  const ref = react.useRef(null);
  const obj3 = ReanimatedRexport;
  const sharedValue = obj3.useSharedValue(-1);
  const obj4 = ReanimatedRexport;
  const sharedValue1 = obj4.useSharedValue(0);
  const ref1 = react.useRef(undefined);
  const ref2 = react.useRef(AppLauncherContext.AppLauncherKeyboardCloseReason.DISMISSED);
  const TEXT = AppLauncherTypes.AppLauncherEntrypoint.TEXT;
  const obj5 = useDefaultAppLauncherWidth;
  const defaultAppLauncherWidth = obj5.useDefaultAppLauncherWidth(TEXT);
  const obj2 = react;
  if (cResult[0] !== channel) {
    const obj6 = { channel, type: "channel" };
    cResult[0] = channel;
    cResult[1] = obj6;
    tmp9 = obj6;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== chatInputRef) {
    class L {
      constructor() {
        current = chatInputRef.current;
        applicationCommandManager = undefined;
        if (current != null) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      }
    }
    cResult[2] = chatInputRef;
    cResult[3] = L;
  } else {
    class L {
      constructor() {
        current = chatInputRef.current;
        applicationCommandManager = undefined;
        if (current != null) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        current = chatInputRef.current;
        applicationCommandManager = undefined;
        if (current != null) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      }
    }
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          expandActionSheetResult = current.expandActionSheet();
        }
        return;
      }
    }
    cResult[4] = tmp13;
    cResult[5] = E;
    tmp11 = tmp13;
    tmp12 = E;
  } else {
    class L {
      constructor() {
        current = chatInputRef.current;
        applicationCommandManager = undefined;
        if (current != null) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      }
    }
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          expandActionSheetResult = current.expandActionSheet();
        }
        return;
      }
    }
  }
  if (cResult[6] !== tmp10) {
    class L {
      constructor() {
        current = chatInputRef.current;
        applicationCommandManager = undefined;
        if (current != null) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      }
    }
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          expandActionSheetResult = current.expandActionSheet();
        }
        return;
      }
    }
    tmp15[1] = tmp11;
    tmp15[2] = tmp12;
    cResult[6] = tmp10;
    cResult[7] = tmp15;
    tmp14 = tmp15;
  } else {
    class L {
      constructor() {
        current = chatInputRef.current;
        applicationCommandManager = undefined;
        if (current != null) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      }
    }
  }
  const ref3 = obj2.useRef(tmp14);
  if (cResult[8] !== channel) {
    class L {
      constructor() {
        current = chatInputRef.current;
        applicationCommandManager = undefined;
        if (current != null) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      }
    }
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          expandActionSheetResult = current.expandActionSheet();
        }
        return;
      }
    }
    if (tmp18 != null) {
      class L {
        constructor() {
          current = chatInputRef.current;
          applicationCommandManager = undefined;
          if (current != null) {
            applicationCommandManager = current.getApplicationCommandManager();
          }
          return applicationCommandManager;
        }
      }
    }
    cResult[8] = channel;
    cResult[9] = undefined;
  } else {
    class L {
      constructor() {
        current = chatInputRef.current;
        applicationCommandManager = undefined;
        if (current != null) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      }
    }
  }
  if (cResult[10] !== tmp17) {
    class L {
      constructor() {
        current = chatInputRef.current;
        applicationCommandManager = undefined;
        if (current != null) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      }
    }
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          expandActionSheetResult = current.expandActionSheet();
        }
        return;
      }
    }
    tmp21[0] = AppLauncherRouteName.HOME;
    tmp21[1] = tmp17;
    cResult[10] = tmp17;
    cResult[11] = tmp21;
  } else {
    class L {
      constructor() {
        current = chatInputRef.current;
        applicationCommandManager = undefined;
        if (current != null) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      }
    }
  }
  if (cResult[12] === sharedValue) {
    class L {
      constructor() {
        current = chatInputRef.current;
        applicationCommandManager = undefined;
        if (current != null) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      }
    }
  }
  cResult[12] = sharedValue;
  cResult[13] = sharedValue1;
  cResult[14] = tmp9;
  cResult[15] = tmp20;
  cResult[16] = defaultAppLauncherWidth;
  cResult[17] = jsx(AppLauncherNavigatorDefault, { bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef: ref1, context: tmp9, chatInputRef: ref3, entrypoint: TEXT, keyboardCloseReasonRef: ref2, width: defaultAppLauncherWidth, overrideParams: tmp20 });
  jsx(AppLauncherNavigatorDefault, { bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef: ref1, context: tmp9, chatInputRef: ref3, entrypoint: TEXT, keyboardCloseReasonRef: ref2, width: defaultAppLauncherWidth, overrideParams: tmp20 });
}) : (function AppLauncherActionSheet(arg0) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppLauncherActionSheet(arg0) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  [tmp4, tmp5] = react.useState(false);
  let closure_0 = tmp5;
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === tmp4) {
    let tmp6;
    let tmp14;
    if (cResult[1] === arg0) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== tmp6) {
      const obj2 = { appLauncherActionSheet: tmp6, setAppLauncherActionSheetEnabled: tmp5 };
      cResult[3] = tmp6;
      cResult[4] = obj2;
      tmp14 = obj2;
    } else {
      tmp14 = cResult[4];
    }
    return tmp14;
  }
  let tmp7 = null;
  if (tmp4) {
    const obj4 = {
      transitionState: "visible",
      close() {

        },
      onLeave() {
          tmp5(false);
        },
      registerDismissHandler() {

        }
    };
    const Provider = reactDefault.Provider;
    const merged = Object.assign(arg0);
    tmp7 = <Provider value={obj4}>{null}</Provider>;
  }
  cResult[0] = tmp4;
  cResult[1] = arg0;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function useAppLauncherActionSheet(arg0) {
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
});
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherActionSheet.tsx");

export const useAppLauncherActionSheet = tmp2;
