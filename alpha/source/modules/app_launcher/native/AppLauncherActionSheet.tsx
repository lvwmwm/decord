// Module ID: 12032
// Function ID: 12033
// Name: AppLauncherActionSheet
// Dependencies: [32, 19, 1504, 21, 558, 576, 4945, 10932, 10933, 10934, 12033, 11877, 7118, 7120, 2]

// Module 12032 (AppLauncherActionSheet)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1504 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4945 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7118 */;
import reactDefault from "react" /* 7120 */;
import AppLauncherContext from "AppLauncherContext" /* 10932 */;
import AppLauncherTypes from "AppLauncherTypes" /* 10933 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 10934 */;
import AppLauncherNavigatorDefault from "AppLauncherNavigator" /* 11877 */;
import getAppDMApplication from "getAppDMApplication" /* 12033 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherActionSheet(chatInputRef) {
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
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
    const fn = function y() {
      const current = chatInputRef.current;
      let applicationCommandManager;
      if (current != null) {
        applicationCommandManager = current.getApplicationCommandManager();
      }
      return applicationCommandManager;
    };
    cResult[2] = chatInputRef;
    cResult[3] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
      }
    }
    class E {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.expandActionSheet();
        }
      }
    }
    cResult[4] = L;
    cResult[5] = E;
    tmp11 = L;
    tmp12 = E;
  } else {
    class L {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
      }
    }
    class E {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.expandActionSheet();
        }
      }
    }
  }
  if (cResult[6] !== tmp10) {
    class L {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
      }
    }
    class E {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.expandActionSheet();
        }
      }
    }
    tmp14[1] = tmp11;
    tmp14[2] = tmp12;
    cResult[6] = tmp10;
    cResult[7] = tmp14;
    tmp13 = tmp14;
  } else {
    class L {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
      }
    }
  }
  const ref3 = obj2.useRef(tmp13);
  if (cResult[8] !== channel) {
    class L {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
      }
    }
    class E {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.expandActionSheet();
        }
      }
    }
    if (tmp17 != null) {
      class L {
        constructor() {
          const current = ref.current;
          if (current != null) {
            current.closeActionSheet();
          }
        }
      }
    }
    cResult[8] = channel;
    cResult[9] = undefined;
  } else {
    class L {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
      }
    }
  }
  if (cResult[10] !== tmp16) {
    class L {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
      }
    }
    class E {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.expandActionSheet();
        }
      }
    }
    tmp20[0] = AppLauncherRouteName.HOME;
    tmp20[1] = tmp16;
    cResult[10] = tmp16;
    cResult[11] = tmp20;
  } else {
    class L {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
      }
    }
  }
  if (cResult[12] === sharedValue) {
    class L {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
      }
    }
  }
  cResult[12] = sharedValue;
  cResult[13] = sharedValue1;
  cResult[14] = tmp9;
  cResult[15] = tmp19;
  cResult[16] = defaultAppLauncherWidth;
  cResult[17] = jsx(AppLauncherNavigatorDefault, { bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef: ref1, context: tmp9, chatInputRef: ref3, entrypoint: TEXT, keyboardCloseReasonRef: ref2, width: defaultAppLauncherWidth, overrideParams: tmp19 });
  jsx(AppLauncherNavigatorDefault, { bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef: ref1, context: tmp9, chatInputRef: ref3, entrypoint: TEXT, keyboardCloseReasonRef: ref2, width: defaultAppLauncherWidth, overrideParams: tmp19 });
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
  let first;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(6);
  [tmp4, tmp5] = react.useState(false);
  let closure_0 = tmp5;
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {
      transitionState: "visible",
      close() {

        },
      onLeave() {
          tmp5(false);
        },
      registerDismissHandler() {

        }
    };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp4) {
    let tmp7;
    let tmp15;
    if (cResult[2] === arg0) {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp7) {
      const obj3 = { appLauncherActionSheet: tmp7, setAppLauncherActionSheetEnabled: tmp5 };
      cResult[4] = tmp7;
      cResult[5] = obj3;
      tmp15 = obj3;
    } else {
      tmp15 = cResult[5];
    }
    return tmp15;
  }
  let tmp8 = null;
  if (tmp4) {
    const Provider = reactDefault.Provider;
    const merged = Object.assign(arg0);
    tmp8 = <Provider value={first}>{null}</Provider>;
  }
  cResult[1] = tmp4;
  cResult[2] = arg0;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : (function useAppLauncherActionSheet(arg0) {
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
});
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherActionSheet.tsx");

export const useAppLauncherActionSheet = tmp2;
