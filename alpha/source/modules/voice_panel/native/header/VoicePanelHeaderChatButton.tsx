// Module ID: 16921
// Function ID: 16922
// Name: VoicePanelHeaderChatButton
// Dependencies: [19, 1074, 21, 4829, 576, 1110, 16922, 5896, 16826, 5378, 1115, 2]
// Exports: default

// Module 16921 (VoicePanelHeaderChatButton)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import util from "util" /* 1115 */;
import ChatIcon from "ChatIcon" /* 5378 */;
import NativeViewDefault from "NativeView" /* 5896 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 16826 */;
import useChatBadgeDefault from "useChatBadge" /* 16922 */;
import noop from "module_19" /* 19 */;

require = fn;
const ComponentActions = fn(1074).ComponentActions;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
const obj2 = { badgeContainer: { position: "absolute", top: -2, right: -2 }, badge: null, notificationBadge: null };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round };
obj2.badge = size;
obj2.notificationBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx");

export default function VoicePanelHeaderChatButton(channelId) {
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
    obj3.children = tmp8(tmp3(5896), obj4);
    tmp8Result = tmp8(tmp3(5896), obj3);
    const tmp3Result = tmp3(5896);
  }
  children[1] = tmp8Result;
  return tmp6(tmp7, { children });
};
