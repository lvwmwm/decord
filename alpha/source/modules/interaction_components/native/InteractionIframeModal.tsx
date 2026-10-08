// Module ID: 17859
// Function ID: 17860
// Name: InteractionIframeModal
// Dependencies: [32, 19, 17, 1372, 21, 5090, 587, 558, 576, 17847, 11128, 6656, 8426, 17860, 5370, 4766, 1126, 4995, 6189, 5086, 8741, 10615, 10750, 17462, 2]

// Module 17859 (InteractionIframeModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import ApplicationConstants from "ApplicationConstants" /* 1372 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import makeIframeIdDefault from "makeIframeId" /* 11128 */;
import closeIFrameModalDefault from "closeIFrameModal" /* 17860 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let lockOrientationResult;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
const BotTagTypes = ApplicationConstants.BotTagTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const interaction_iframe_modal = "interaction_iframe_modal";
let obj = { wrapper: obj2, header: { flexDirection: "row", padding: 16, justifyContent: "space-between", alignItems: "center" }, headerCenterContainer: { flexDirection: "column", alignItems: "center" }, headerTitleContainer: { flexDirection: "row", marginBottom: 2 }, closeButton: { marginEnd: 8 }, spacerView: { marginStart: 8, width: 32 }, botTag: { marginStart: 4 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
let closure_10 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function InteractionIframeModal(arg0) {
  let application;
  let first;
  let id;
  let id2;
  let iframeUrl;
  let items1;
  let queryParams;
  let title;
  let tmp10;
  let tmp13;
  let tmp9;
  const tmp = id2;
  let obj = id2(A[8]);
  const cResult = obj.c(60);
  const tmp4 = closure_10();
  ({ application, title, id } = arg0);
  id2 = application.id;
  const obj2 = id2(A[9]);
  const iframeModalState = obj2.useIframeModalState(arg0);
  ({ queryParams, iframeUrl } = iframeModalState);
  const tmp7 = _slicedToArray(react.useState(require("makeIframeId")), 2);
  [r10030, importDefault] = tmp7;
  const obj3 = react;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { includeKeyboardHeight: true };
    cResult[0] = obj4;
    first = obj4;
  } else {
    first = cResult[0];
  }
  const insets = tmp6(tmp2[11])(first).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        obj = id(closure_2[12]);
        lockOrientationResult = obj.lockOrientation("PORTRAIT");
        return () => { /* body not rendered: F150489 */ };
      }
    }
    const items = [];
    cResult[1] = B;
    cResult[2] = items;
    tmp10 = items;
    tmp9 = B;
  } else {
    class B {
      constructor() {
        obj = id(closure_2[12]);
        lockOrientationResult = obj.lockOrientation("PORTRAIT");
        return () => { /* body not rendered: F150489 */ };
      }
    }
    tmp10 = cResult[2];
  }
  const layoutEffect = obj3.useLayoutEffect(tmp9, tmp10);
  if (cResult[3] !== id2) {
    class A {
      constructor() {
        tmp = closure_1(closure_2[13])(id, undefined);
        return;
      }
    }
    cResult[3] = id2;
    cResult[4] = A;
  } else {
    class A {
      constructor() {
        tmp = closure_1(closure_2[13])(id, undefined);
        return;
      }
    }
  }
  A = tmp12;
  if (cResult[5] !== tmp12) {
    class D {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    cResult[5] = tmp12;
    cResult[6] = D;
    tmp13 = D;
  } else {
    class D {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
  }
  require("useBackPressHandler")(tmp13);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    cResult[7] = tmp16;
  } else {
    class D {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
  }
  if (cResult[8] !== tmp12) {
    class D {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    cResult[8] = tmp12;
    cResult[9] = tmp18;
  } else {
    class D {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
  }
  if (cResult[10] === insets.bottom) {
    class D {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    if (cResult[13] === tmp4.wrapper) {
      let tmp21;
      let tmp23;
      class D {
        constructor() {
          tmp = closure_2();
          return true;
        }
      }
      const _Symbol = Symbol;
      const header = tmp4.header;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
        const stringResult = obj6.string(tmp(A[16]).t.cpT0Cq);
        cResult[16] = stringResult;
        tmp21 = stringResult;
      } else {
        class D {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
        const tmp24 = closure_7(tmp(A[17]).XLargeIcon, {});
        cResult[17] = tmp24;
        tmp23 = tmp24;
      } else {
        class D {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
      }
      if (cResult[18] === tmp12) {
        class D {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
        if (cResult[21] !== application.name) {
          class D {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
          const obj5 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
          cResult[21] = application.name;
          cResult[22] = closure_7(tmp(A[19]).Text, obj5);
          const tmp29 = closure_7(tmp(A[19]).Text, obj5);
        } else {
          class D {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
        }
        if (application.bot != null) {
          class D {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
        }
        if (cResult[23] === tmp4.botTag) {
          class D {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
          if (cResult[26] === tmp4.headerTitleContainer) {
            class D {
              constructor() {
                tmp = closure_2();
                return true;
              }
            }
          }
          const obj7 = { style: tmp4.headerTitleContainer, children: items1 };
          items1 = [tmp28, tmp32];
          cResult[26] = tmp4.headerTitleContainer;
          cResult[27] = tmp28;
          cResult[28] = tmp32;
          cResult[29] = closure_8(View, obj7);
          const tmp39 = closure_8(View, obj7);
        }
        const obj8 = { type: BotTagTypes.BOT, verified: undefined, style: tmp4.botTag };
        cResult[23] = tmp4.botTag;
        cResult[24] = undefined;
        cResult[25] = closure_7(require("BotTag"), obj8);
        const tmp35 = closure_7(require("BotTag"), obj8);
      }
      const obj9 = { accessibilityRole: "button", accessibilityLabel: tmp21, onPress: tmp12, style: tmp4.closeButton, children: tmp23 };
      cResult[18] = tmp12;
      cResult[19] = tmp4.closeButton;
      cResult[20] = closure_7(tmp(A[18]).PressableOpacity, obj9);
      const tmp27 = closure_7(tmp(A[18]).PressableOpacity, obj9);
    }
    const items2 = [tmp4.wrapper, tmp19];
    cResult[13] = tmp4.wrapper;
    cResult[14] = tmp19;
    cResult[15] = items2;
  }
  const obj10 = { paddingTop: insets.top, paddingBottom: insets.bottom };
  cResult[10] = insets.bottom;
  cResult[11] = insets.top;
  cResult[12] = obj10;
}) : (function InteractionIframeModal(application) {
  let callback;
  let id;
  let intl;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj11;
  let onDisallowedNavigation;
  let title;
  let tmp2Result;
  let tmp7;
  let verified;
  const tmp = closure_10();
  application = application.application;
  const id2 = application.id;
  ({ title, id } = application);
  let obj = id2(onDisallowedNavigation[9]);
  const iframeModalState = obj.useIframeModalState(application);
  const queryParams = iframeModalState.queryParams;
  const iframeUrl = iframeModalState.iframeUrl;
  const tmp5 = importDefault;
  const tmp6 = _slicedToArray(react.useState(require("makeIframeId")), 2);
  [tmp7, importDefault] = tmp6;
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = id2(callback[12]);
    obj.lockOrientation("PORTRAIT");
    return () => {
      const obj = id2(callback[12]);
      const result = obj.restoreDefaultOrientation();
    };
  }, []);
  const items = [id2];
  onDisallowedNavigation = react.useCallback(() => {
    closeIFrameModalDefault(id2, undefined);
  }, items);
  const items1 = [onDisallowedNavigation];
  const callback1 = react.useCallback(() => {
    callback();
    return true;
  }, items1);
  require("useBackPressHandler")(callback1);
  const obj2 = { style: items2, children: items6 };
  items2 = [tmp.wrapper, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  const obj3 = { style: tmp.header, children: items3 };
  const obj4 = { accessibilityRole: "button", accessibilityLabel: intl.string(id2(onDisallowedNavigation[16]).t.cpT0Cq), onPress: onDisallowedNavigation, style: tmp.closeButton, children: closure_7(id2(onDisallowedNavigation[17]).XLargeIcon, {}) };
  const PressableOpacity = id2(onDisallowedNavigation[18]).PressableOpacity;
  intl = id2(onDisallowedNavigation[16]).intl;
  items3 = [closure_7(PressableOpacity, obj4), , ];
  const obj6 = { style: tmp.headerTitleContainer, children: items4 };
  items4 = [, ];
  const obj5 = { style: tmp.headerCenterContainer, children: items5 };
  const obj7 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
  items4[0] = closure_7(id2(onDisallowedNavigation[19]).Text, obj7);
  const bot = application.bot;
  const obj8 = { type: BotTagTypes.BOT, verified, style: tmp.botTag };
  verified = undefined;
  const tmp15 = require("BotTag");
  if (bot != null) {
    verified = bot.verified;
  }
  items4[1] = closure_7(tmp15, obj8);
  items5 = [closure_8(View, obj6), closure_7(id2(tmp3[19]).Text, { variant: "text-xs/medium", color: "interactive-text-default", children: title })];
  items3[1] = closure_8(View, obj5);
  const obj9 = { style: tmp.spacerView };
  items3[2] = closure_7(View, obj9);
  items6 = [closure_8(View, obj3), ];
  const obj10 = {
    iframeId: tmp7,
    onDisallowedNavigation,
    onActivityCrash() {
      importDefault(makeIframeIdDefault());
    },
    applicationId: application.id,
    channelId: queryParams.channel_id,
    guildId: queryParams.guild_id,
    contextSource: obj11,
    activityUrl: iframeUrl,
    activitySessionId: queryParams.instance_id,
    queryParams,
    onLoadError() {
      let intl;
      const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl2.intl;
      open(obj);
      callback();
    },
    allowPopups: tmp2Result.allowPopups(application),
    referrerPolicy: "origin",
    isPipOrGridMode: false,
    ignoreSilentHardwareSwitch: false
  };
  obj11 = { type: id2(onDisallowedNavigation[21]).EmbeddedContextSourceType.INTERACTION, interactionId: id };
  const tmp5Result = tmp5(onDisallowedNavigation[23]);
  tmp2Result = id2(onDisallowedNavigation[22]);
  items6[1] = closure_7(tmp5Result, obj10, tmp7);
  return closure_8(View, obj2);
});
let result = size.fileFinishedImporting("modules/interaction_components/native/InteractionIframeModal.tsx");

export default tmp3;
