// Module ID: 17549
// Function ID: 17550
// Name: VoicePanelHeaderChatButton
// Dependencies: [19, 1078, 21, 4758, 580, 558, 568, 1114, 17550, 17469, 5291, 1119, 5804, 2]

// Module 17549 (VoicePanelHeaderChatButton)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1114 */;
import util from "util" /* 1119 */;
import ChatIcon from "ChatIcon" /* 5291 */;
import NativeViewDefault from "NativeView" /* 5804 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 17469 */;
import useChatBadgeDefault from "useChatBadge" /* 17550 */;
import noop from "module_19" /* 19 */;

require = fn;
const ComponentActions = fn(1078).ComponentActions;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4758);
let obj2 = { badgeContainer: { position: "absolute", top: -2, right: -2 }, badge: null, notificationBadge: null };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round };
obj2.badge = size;
obj2.notificationBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = c.c(7);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants.VOICE_PANEL_OPEN_CHAT_TAB);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp7 = useChatBadgeDefault(channelId.channelId);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { icon: null, accessibilityLabel: null, onPress: null };
    const obj3 = { color: tmp6(580).colors.WHITE, size: "sm" };
    obj2.icon = hasOwnProperty(tmp(5291).ChatIcon, obj3);
    const intl = tmp(1119).intl;
    obj2.accessibilityLabel = intl.string(tmp(1119).t["5KxXrK"]);
    obj2.onPress = first;
    const tmp11 = hasOwnProperty(tmp6(17469), obj2);
    cResult[1] = tmp11;
    let tmp8 = tmp11;
    const tmp6Result = tmp6(17469);
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp7) {
    if (cResult[3] === tmp4) {
      let tmp12 = cResult[4];
    }
    if (cResult[5] !== tmp12) {
      const obj4 = { children: null };
      const items = [tmp8, tmp12];
      obj4.children = items;
      const tmp18 = timestampProducer(tmp6(5804), obj4);
      cResult[5] = tmp12;
      cResult[6] = tmp18;
      let tmp16 = tmp18;
    } else {
      tmp16 = cResult[6];
    }
    return tmp16;
  }
  let tmp13 = null != tmp7;
  if (tmp13) {
    const obj5 = { style: tmp4.badgeContainer, children: null };
    const obj6 = { style: null };
    const items1 = [, ];
    ({ badge: arr[0], notificationBadge: arr[1] } = tmp4);
    obj6.style = items1;
    obj5.children = hasOwnProperty(tmp6(5804), obj6);
    tmp13 = hasOwnProperty(tmp6(5804), obj5);
    const tmp6Result2 = tmp6(5804);
  }
  cResult[2] = tmp7;
  cResult[3] = tmp4;
  cResult[4] = tmp13;
  tmp12 = tmp13;
}) : ((channelId) => {
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_OPEN_CHAT_TAB);
  }, []);
  const tmp5 = useChatBadgeDefault(channelId.channelId);
  const tmp6 = timestampProducer;
  const obj = { icon: null, accessibilityLabel: null, onPress: null };
  const tmp7 = NativeViewDefault;
  const tmp9 = VoicePanelIconButtonDefault;
  obj.icon = hasOwnProperty(ChatIcon.ChatIcon, { color: nativeDefault.colors.WHITE, size: "sm" });
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["5KxXrK"]);
  obj.onPress = callback;
  const children = [hasOwnProperty(tmp9, obj), ];
  let tmp8Result = null != tmp5;
  if (tmp8Result) {
    const obj3 = { style: tmp.badgeContainer, children: null };
    const obj4 = { style: null };
    const items1 = [, ];
    ({ badge: arr2[0], notificationBadge: arr2[1] } = tmp);
    obj4.style = items1;
    obj3.children = tmp8(tmp3(5804), obj4);
    tmp8Result = tmp8(tmp3(5804), obj3);
    const tmp3Result = tmp3(5804);
  }
  children[1] = tmp8Result;
  return tmp6(tmp7, { children });
});
