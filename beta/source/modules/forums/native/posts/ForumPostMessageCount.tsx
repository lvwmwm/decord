// Module ID: 11500
// Function ID: 11501
// Name: ForumPostMessageCount
// Dependencies: [19, 17, 21, 4836, 576, 1364, 7310, 1115, 5385, 4832, 10858, 2]
// Exports: default

// Module 11500 (ForumPostMessageCount)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import ForumHooks from "ForumHooks" /* 7310 */;
import AnimatedCounterDefault from "AnimatedCounter" /* 10858 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let num;
let num2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { tintColor: nativeDefault.colors.ICON_MUTED, marginEnd: 4, marginTop: num };
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
num = 0;
if (PlatformUtils.isAndroid()) {
  num = 2;
}
let obj2 = { iconRead: obj, iconUnread: obj3, messageUnreadCount: { marginStart: 4 }, container: { flexDirection: "row", alignItems: "center" } };
obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginEnd: 4, marginTop: num2 };
PlatformUtils = PlatformUtils_mod;
num2 = 0;
if (PlatformUtils.isAndroid()) {
  num2 = 2;
}
let closure_6 = createStyles(obj2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostMessageCount.tsx");

export default function ForumPostMessageCount(hasUnreads) {
  let containerStyle;
  let intl;
  let isMaxMessageCount;
  let items;
  let items1;
  let items2;
  let messageCount;
  let messageCountText;
  let str2;
  let thread;
  let tmp7Result;
  let unreadCount;
  hasUnreads = hasUnreads.hasUnreads;
  ({ thread, containerStyle } = hasUnreads);
  const tmp = closure_6();
  const obj = ForumHooks;
  const messageCount1 = obj.useMessageCount(thread);
  ({ messageCountText, unreadCount } = messageCount1);
  let str = "text-muted";
  ({ isMaxMessageCount, messageCount } = messageCount1);
  if (hasUnreads) {
    str = "text-default";
  }
  const obj2 = { style: items, accessibilityLabel: intl.formatToPlainString(intl3.t["8M0DrB"], { count: messageCountText }), children: items1 };
  items = [tmp.container, containerStyle];
  intl = tmp2(1115).intl;
  const obj3 = { size: "xs", style: hasUnreads ? tmp.iconUnread : tmp.iconRead, color: str2 };
  str2 = "icon-muted";
  const ChatIcon = tmp2(5385).ChatIcon;
  const tmp6 = View;
  if (hasUnreads) {
    str2 = "interactive-text-default";
  }
  items1 = [React3(ChatIcon, obj3), , ];
  if (isMaxMessageCount) {
    const obj4 = { variant: "text-sm/semibold", color: str, children: messageCountText };
    tmp7Result = tmp7(tmp2(4832).Text, obj4);
  } else {
    const obj5 = { count: messageCount, textVariant: "text-sm/semibold", textColor: str, animate: false };
    tmp7Result = tmp7(AnimatedCounterDefault, obj5);
  }
  items1[1] = tmp7Result;
  let tmp5Result = null != unreadCount;
  if (tmp5Result) {
    const obj6 = { variant: "text-sm/semibold", color: "text-brand", style: tmp.messageUnreadCount, children: items2 };
    const Text = tmp2(4832).Text;
    const intl2 = tmp2(1115).intl;
    const obj7 = { count: unreadCount };
    items2 = ["(", intl2.format(intl3.t.z3PEth, obj7), ")"];
    tmp5Result = tmp5(Text, obj6);
  }
  items1[2] = tmp5Result;
  return hasOwnProperty(tmp6, obj2);
};
