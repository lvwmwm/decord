// Module ID: 17172
// Function ID: 17173
// Name: InteractionIframeModal
// Dependencies: [32, 19, 17, 1361, 21, 4837, 588, 558, 576, 17160, 6399, 7784, 17173, 5277, 4531, 1127, 8916, 8917, 4786, 5436, 4833, 8736, 2]

// Module 17172 (InteractionIframeModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import intl2 from "intl" /* 1127 */;
import ApplicationConstants from "ApplicationConstants" /* 1361 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import closeIFrameModalDefault from "closeIFrameModal" /* 17173 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let application;
  let channel_id;
  let closure_1;
  let first;
  let first1;
  let guild_id;
  let id;
  let iframeUrl;
  let instance_id;
  let items1;
  let queryParams;
  let title;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp16;
  const tmp = id;
  let obj = id(R[8]);
  const cResult = obj.c(55);
  const tmp4 = closure_10();
  ({ application, title } = arg0);
  id = application.id;
  const obj2 = id(R[9]);
  const iframeModalState = obj2.useIframeModalState(arg0);
  ({ queryParams, iframeUrl } = iframeModalState);
  [first, importDefault] = react.useState(false);
  const obj3 = react;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { includeKeyboardHeight: true };
    cResult[0] = obj4;
    first1 = obj4;
  } else {
    first1 = cResult[0];
  }
  const insets = require("useSafeAreaInsetsKeyboardAware")(first1).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        obj = id(closure_2[11]);
        lockOrientationResult = obj.lockOrientation("PORTRAIT");
        return () => { /* body not rendered: F146948 */ };
      }
    }
    const items = [];
    cResult[1] = B;
    cResult[2] = items;
    tmp11 = items;
    tmp10 = B;
  } else {
    class B {
      constructor() {
        obj = id(closure_2[11]);
        lockOrientationResult = obj.lockOrientation("PORTRAIT");
        return () => { /* body not rendered: F146948 */ };
      }
    }
    tmp11 = cResult[2];
  }
  const layoutEffect = obj3.useLayoutEffect(tmp10, tmp11);
  if (cResult[3] !== id) {
    class R {
      constructor() {
        tmp = closure_1(closure_2[12])(id, undefined);
        return;
      }
    }
    cResult[3] = id;
    cResult[4] = R;
  } else {
    class R {
      constructor() {
        tmp = closure_1(closure_2[12])(id, undefined);
        return;
      }
    }
  }
  R = tmp13;
  if (cResult[5] !== tmp13) {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    cResult[5] = tmp13;
    cResult[6] = H;
    tmp14 = H;
  } else {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
  }
  require("useBackPressHandler")(tmp14);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    cResult[7] = tmp17;
    tmp16 = tmp17;
  } else {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
  }
  if (cResult[8] !== tmp13) {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    cResult[8] = tmp13;
    cResult[9] = tmp19;
  } else {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
  }
  if (!first) {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    ({ channel_id, guild_id, instance_id } = queryParams);
    if (cResult[10] !== application) {
      class H {
        constructor() {
          tmp = closure_2();
          return true;
        }
      }
      cResult[10] = application;
      cResult[11] = obj5.allowPopups(application);
      const allowPopupsResult = obj5.allowPopups(application);
    } else {
      class H {
        constructor() {
          tmp = closure_2();
          return true;
        }
      }
    }
    if (cResult[12] === application.id) {
      class H {
        constructor() {
          tmp = closure_2();
          return true;
        }
      }
    }
    const obj6 = { onActivityCrash: tmp16, applicationId: tmp20, channelId: channel_id, guildId: guild_id, activityUrl: iframeUrl, activitySessionId: instance_id, queryParams, onLoadError: tmp18, allowPopups: tmp21, referrerPolicy: "origin", isPipOrGridMode: false, webViewKey: "Reflect", ignoreSilentHardwareSwitch: "fr-BJ" };
    cResult[12] = application.id;
    cResult[13] = iframeUrl;
    cResult[14] = tmp18;
    cResult[15] = queryParams;
    cResult[16] = tmp21;
    cResult[17] = closure_7(require("EmbeddedActivityWebView"), obj6);
    const tmp25 = closure_7(require("EmbeddedActivityWebView"), obj6);
  }
  if (cResult[18] === insets.bottom) {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    if (cResult[21] === tmp4.wrapper) {
      let tmp28;
      let tmp30;
      class H {
        constructor() {
          tmp = closure_2();
          return true;
        }
      }
      const _Symbol = Symbol;
      const header = tmp4.header;
      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
        const stringResult = obj8.string(tmp(R[15]).t.cpT0Cq);
        cResult[24] = stringResult;
        tmp28 = stringResult;
      } else {
        class H {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
        const tmp31 = closure_7(tmp(R[18]).XLargeIcon, {});
        cResult[25] = tmp31;
        tmp30 = tmp31;
      } else {
        class H {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
      }
      if (cResult[26] === tmp13) {
        class H {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
        if (cResult[29] !== application.name) {
          class H {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
          const obj7 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
          cResult[29] = application.name;
          cResult[30] = closure_7(tmp(R[20]).Text, obj7);
          const tmp36 = closure_7(tmp(R[20]).Text, obj7);
        } else {
          class H {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
        }
        if (application.bot != null) {
          class H {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
        }
        if (cResult[31] === tmp4.botTag) {
          class H {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
          if (cResult[34] === tmp4.headerTitleContainer) {
            class H {
              constructor() {
                tmp = closure_2();
                return true;
              }
            }
          }
          const obj9 = { style: tmp4.headerTitleContainer, children: items1 };
          items1 = [tmp35, tmp38];
          cResult[34] = tmp4.headerTitleContainer;
          cResult[35] = tmp35;
          cResult[36] = tmp38;
          cResult[37] = closure_8(View, obj9);
          const tmp45 = closure_8(View, obj9);
        }
        const obj10 = { type: BotTagTypes.BOT, verified: undefined, style: tmp4.botTag };
        cResult[31] = tmp4.botTag;
        cResult[32] = undefined;
        cResult[33] = closure_7(require("BotTag"), obj10);
        const tmp41 = closure_7(require("BotTag"), obj10);
      }
      const obj11 = { accessibilityRole: "button", accessibilityLabel: tmp28, onPress: tmp13, style: tmp4.closeButton, children: tmp30 };
      cResult[26] = tmp13;
      cResult[27] = tmp4.closeButton;
      cResult[28] = closure_7(tmp(R[19]).PressableOpacity, obj11);
      const tmp34 = closure_7(tmp(R[19]).PressableOpacity, obj11);
    }
    const items2 = [tmp4.wrapper, tmp26];
    cResult[21] = tmp4.wrapper;
    cResult[22] = tmp26;
    cResult[23] = items2;
  }
  const obj12 = { paddingTop: insets.top, paddingBottom: insets.bottom };
  cResult[18] = insets.bottom;
  cResult[19] = insets.top;
  cResult[20] = obj12;
}) : ((application) => {
  let closure_1;
  let first;
  let intl;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let onPress;
  let tmp2Result;
  let verified;
  const tmp = closure_10();
  application = application.application;
  const id = application.id;
  const title = application.title;
  let obj = id(onPress[9]);
  const iframeModalState = obj.useIframeModalState(application);
  const queryParams = iframeModalState.queryParams;
  const iframeUrl = iframeModalState.iframeUrl;
  [first, importDefault] = react.useState(false);
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = id(callback[11]);
    obj.lockOrientation("PORTRAIT");
    return () => {
      const obj = id(onPress[11]);
      const result = obj.restoreDefaultOrientation();
    };
  }, []);
  const items = [id];
  onPress = react.useCallback(() => {
    closeIFrameModalDefault(id, undefined);
  }, items);
  const items1 = [onPress];
  const callback1 = react.useCallback(() => {
    callback();
    return true;
  }, items1);
  require("useBackPressHandler")(callback1);
  let tmp12 = null;
  if (!first) {
    ({ channel_id: obj2.channelId, guild_id: obj2.guildId } = queryParams);
    const obj3 = {
      onActivityCrash() {
          closure_1(true);
          const timerId = setTimeout(() => closure_1_1(false), 0);
        },
      applicationId: application.id,
      channelId: null,
      guildId: null,
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
      webViewKey: "Reflect",
      ignoreSilentHardwareSwitch: "fr-BJ"
    };
    const tmp7Result = require("EmbeddedActivityWebView");
    tmp2Result = id(onPress[16]);
    tmp12 = closure_7(tmp7Result, obj3);
  }
  const obj4 = { style: items2, children: items6 };
  items2 = [tmp.wrapper, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  const obj5 = { style: tmp.header, children: items3 };
  const obj6 = { accessibilityRole: "button", accessibilityLabel: intl.string(id(onPress[15]).t.cpT0Cq), onPress, style: tmp.closeButton, children: closure_7(id(onPress[18]).XLargeIcon, {}) };
  const PressableOpacity = tmp2(tmp3[19]).PressableOpacity;
  intl = tmp2(tmp3[15]).intl;
  items3 = [closure_7(PressableOpacity, obj6), , ];
  const obj8 = { style: tmp.headerTitleContainer, children: items4 };
  items4 = [, ];
  const obj7 = { style: tmp.headerCenterContainer, children: items5 };
  const obj9 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
  items4[0] = closure_7(id(onPress[20]).Text, obj9);
  const bot = application.bot;
  const obj10 = { type: BotTagTypes.BOT, verified, style: tmp.botTag };
  verified = undefined;
  const tmp7Result2 = require("BotTag");
  if (bot != null) {
    verified = bot.verified;
  }
  items4[1] = closure_7(tmp7Result2, obj10);
  items5 = [closure_8(View, obj8), closure_7(id(tmp3[20]).Text, { variant: "text-xs/medium", color: "interactive-text-default", children: title })];
  items3[1] = closure_8(View, obj7);
  const obj11 = { style: tmp.spacerView };
  items3[2] = closure_7(View, obj11);
  items6 = [closure_8(View, obj5), tmp12];
  return closure_8(View, obj4);
});
let result = size.fileFinishedImporting("modules/interaction_components/native/InteractionIframeModal.tsx");

export default tmp3;
