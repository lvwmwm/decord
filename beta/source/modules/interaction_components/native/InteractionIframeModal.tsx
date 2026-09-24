// Module ID: 17822
// Function ID: 17823
// Name: InteractionIframeModal
// Dependencies: [32, 19, 17, 1353, 21, 4790, 580, 558, 568, 17810, 7256, 8640, 17823, 5215, 4490, 1119, 9757, 9758, 4742, 5373, 4786, 9580, 2]

// Module 17822 (InteractionIframeModal)
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4490 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 5215 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7256 */;
import closeIFrameModalDefault from "closeIFrameModal" /* 17823 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const BotTagTypes = fn(1353).BotTagTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const interaction_iframe_modal = "interaction_iframe_modal";
const createStyles = fn(4790);
let obj2 = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 }, header: { flexDirection: "row", padding: 16, justifyContent: "space-between", alignItems: "center" }, headerCenterContainer: { flexDirection: "column", alignItems: "center" }, headerTitleContainer: { flexDirection: "row", marginBottom: 2 }, closeButton: { marginEnd: 8 }, spacerView: { marginStart: 8, width: 32 }, botTag: { marginStart: 4 } };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/native/InteractionIframeModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = id(568).c(55);
  closure_10();
  ({ application, title } = arg0);
  id = application.id;
  const obj = id(568);
  const iframeModalState = id(17810).useIframeModalState(arg0);
  ({ queryParams, iframeUrl } = iframeModalState);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp5[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { includeKeyboardHeight: true };
    cResult[0] = obj4;
    let first = obj4;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        obj = id(closure_2[11]);
        lockOrientationResult = obj.lockOrientation("PORTRAIT");
        return () => { ... };
      }
    }
    const items = [];
    cResult[1] = B;
    cResult[2] = items;
    let tmp9 = items;
    const tmp8 = B;
  } else {
    class B {
      constructor() {
        obj = id(closure_2[11]);
        lockOrientationResult = obj.lockOrientation("PORTRAIT");
        return () => { ... };
      }
    }
    tmp9 = cResult[2];
  }
  const layoutEffect = noop.useLayoutEffect(tmp8, tmp9);
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
  dependencyMap = tmp11;
  if (cResult[5] !== tmp11) {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    cResult[5] = tmp11;
    cResult[6] = H;
    const tmp12 = H;
  } else {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
  }
  useBackPressHandlerDefault(tmp12);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    cResult[7] = tmp15;
    const tmp14 = tmp15;
  } else {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
  }
  if (cResult[8] !== tmp11) {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    cResult[8] = tmp11;
    cResult[9] = tmp17;
  } else {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
  }
  if (tmp5[0]) {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    const obj6 = { paddingTop: null, paddingBottom: null };
    ({ top: obj7.paddingTop, bottom: obj7.paddingBottom } = insets);
    cResult[18] = insets.bottom;
    cResult[19] = insets.top;
    cResult[20] = obj6;
  } else {
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
      const allowPopupsResult = obj5.allowPopups(application);
      cResult[10] = application;
      cResult[11] = allowPopupsResult;
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
    const obj10 = { onActivityCrash: tmp14, applicationId: tmp18, channelId: channel_id, guildId: guild_id, activityUrl: iframeUrl, activitySessionId: instance_id, queryParams, onLoadError: tmp16, allowPopups: tmp19, referrerPolicy: "origin", isPipOrGridMode: false, webViewKey: "Set", ignoreSilentHardwareSwitch: "fr-BI" };
    const tmp23 = closure_7(tmp7(9758), obj10);
    cResult[12] = application.id;
    cResult[13] = iframeUrl;
    cResult[14] = tmp16;
    cResult[15] = queryParams;
    cResult[16] = tmp19;
    cResult[17] = tmp23;
  }
}) : ((children) => {
  const tmp = closure_10();
  const application = children.application;
  const id = application.id;
  const iframeModalState = id(onPress[9]).useIframeModalState(children);
  const queryParams = iframeModalState.queryParams;
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp5[1];
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  const layoutEffect = noop.useLayoutEffect(() => {
    id(callback[11]).lockOrientation("PORTRAIT");
    return () => {
      const result = id(onPress[11]).restoreDefaultOrientation();
    };
  }, []);
  const items = [id];
  onPress = noop.useCallback(() => {
    closeIFrameModalDefault(id, undefined);
  }, items);
  const items1 = [onPress];
  const callback1 = noop.useCallback(() => {
    callback();
    return true;
  }, items1);
  require("useBackPressHandler")(callback1);
  let tmp11 = null;
  if (!tmp5[0]) {
    const obj3 = {
      onActivityCrash() {
          closure_1(true);
          const timerId = setTimeout(() => closure_1_1(false), 0);
        },
      applicationId: application.id,
      channelId: null,
      guildId: null,
      activityUrl: null,
      activitySessionId: null,
      queryParams: null,
      onLoadError: null,
      allowPopups: null,
      referrerPolicy: "origin",
      isPipOrGridMode: false,
      webViewKey: "Set",
      ignoreSilentHardwareSwitch: "fr-BI"
    };
    ({ channel_id: obj2.channelId, guild_id: obj2.guildId } = queryParams);
    obj3.activityUrl = iframeModalState.iframeUrl;
    obj3.activitySessionId = queryParams.instance_id;
    obj3.queryParams = queryParams;
    obj3.onLoadError = function onLoadError() {
      const obj2 = { key: interaction_iframe_modal, content: null };
      const intl = util.intl;
      obj2.content = intl.string(util.t.HehpFW);
      ToastActionCreatorsDefault.open(obj2);
      callback();
    };
    const tmp6Result = tmp6(tmp3[17]);
    obj3.allowPopups = tmp2(tmp3[16]).allowPopups(application);
    tmp11 = closure_7(tmp6Result, obj3);
    const tmp2Result = tmp2(tmp3[16]);
  }
  const obj4 = { style: null, children: null };
  const items2 = [tmp.wrapper, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  obj4.style = items2;
  const obj5 = { style: tmp.header, children: null };
  const obj6 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  let intl = tmp2(tmp3[15]).intl;
  obj6.accessibilityLabel = intl.string(id(onPress[15]).t.cpT0Cq);
  obj6.onPress = onPress;
  obj6.style = tmp.closeButton;
  obj6.children = closure_7(id(onPress[18]).XLargeIcon, {});
  const items3 = [closure_7(id(onPress[19]).PressableOpacity, obj6), , ];
  const obj7 = { style: tmp.headerCenterContainer, children: null };
  const obj8 = { style: tmp.headerTitleContainer, children: null };
  const items4 = [closure_7(id(onPress[20]).Text, { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name }), ];
  const obj10 = { type: BotTagTypes.BOT, verified: null, style: null };
  const bot = application.bot;
  let verified;
  const obj = id(onPress[9]);
  const obj9 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
  if (bot != null) {
    verified = bot.verified;
  }
  obj10.verified = verified;
  obj10.style = tmp.botTag;
  items4[1] = closure_7(require("BotTag"), obj10);
  obj8.children = items4;
  const items5 = [closure_8(View, obj8), closure_7(id(onPress[20]).Text, { variant: "text-xs/medium", color: "interactive-text-default", children: children.title })];
  obj7.children = items5;
  items3[1] = closure_8(View, obj7);
  items3[2] = closure_7(View, { style: tmp.spacerView });
  obj5.children = items3;
  const items6 = [closure_8(View, obj5), tmp11];
  obj4.children = items6;
  return closure_8(View, obj4);
});
