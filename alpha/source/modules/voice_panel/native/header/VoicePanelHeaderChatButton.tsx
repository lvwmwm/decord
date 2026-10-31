// Module ID: 19237
// Function ID: 19238
// Name: VoicePanelHeaderChatButton
// Dependencies: [19, 1072, 21, 5014, 575, 1108, 19238, 6960, 19143, 8643, 1113, 2]
// Exports: default

// Module 19237 (VoicePanelHeaderChatButton)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import intl2 from "intl" /* 1113 */;
import NativeViewDefault from "NativeView" /* 6960 */;
import ChatIcon2 from "ChatIcon" /* 8643 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 19143 */;
import useChatBadgeDefault from "useChatBadge" /* 19238 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
const ComponentActions = Constants.ComponentActions;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { badgeContainer: { position: "absolute", top: -2, right: -2 }, badge: size, notificationBadge: obj2 };
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx");

export default function VoicePanelHeaderChatButton(channelId) {
  let ChatIcon;
  let intl;
  let items1;
  let obj2;
  let obj4;
  channelId = channelId.channelId;
  const tmp = closure_7();
  const callback = react.useCallback(() => {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_OPEN_CHAT_TAB);
  }, []);
  const tmp5 = useChatBadgeDefault(channelId);
  const obj = { icon: hasOwnProperty(ChatIcon, obj2), accessibilityLabel: intl.string(intl2.t["5KxXrK"]), onPress: callback };
  const tmp7 = NativeViewDefault;
  obj2 = { color: nativeDefault.colors.ICON_STRONG, size: "sm" };
  const tmp9 = VoicePanelIconButtonDefault;
  ChatIcon = ChatIcon2.ChatIcon;
  intl = intl2.intl;
  const children = [hasOwnProperty(tmp9, obj), ];
  let tmp8Result = null != tmp5;
  const tmp6 = metroRequire;
  if (tmp8Result) {
    const obj3 = { style: tmp.badgeContainer, children: hasOwnProperty(NativeViewDefault, obj4) };
    obj4 = { style: items1 };
    items1 = [, ];
    ({ badge: arr2[0], notificationBadge: arr2[1] } = tmp);
    const tmp3Result = NativeViewDefault;
    tmp8Result = tmp8(tmp3Result, obj3);
  }
  children[1] = tmp8Result;
  return tmp6(tmp7, { children });
};
