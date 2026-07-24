// Module ID: 11172
// Function ID: 86947
// Name: num2
// Dependencies: [31, 27, 33, 4130, 689, 477, 9173, 1212, 4629, 4126, 10381, 2]
// Exports: default

// Module 11172 (num2)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "set";
import set from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.ICON_MUTED, marginEnd: 4 };
let num = 0;
if (set.isAndroid()) {
  num = 2;
}
_createForOfIteratorHelperLoose.marginTop = num;
_createForOfIteratorHelperLoose.iconRead = _createForOfIteratorHelperLoose;
let obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, marginEnd: 4 };
let num2 = 0;
if (set.isAndroid()) {
  num2 = 2;
}
obj1.marginTop = num2;
_createForOfIteratorHelperLoose.iconUnread = obj1;
_createForOfIteratorHelperLoose.messageUnreadCount = { marginStart: 4 };
_createForOfIteratorHelperLoose.container = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("modules/forums/native/posts/ForumPostMessageCount.tsx");

export default function ForumPostMessageCount(hasUnreads) {
  let containerStyle;
  let isMaxMessageCount;
  let messageCount;
  let messageCountText;
  let thread;
  let unreadCount;
  hasUnreads = hasUnreads.hasUnreads;
  ({ thread, containerStyle } = hasUnreads);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(9173) /* sortForumPostReactionsByPopularityDesc */;
  messageCount = obj.useMessageCount(thread);
  ({ messageCountText, unreadCount } = messageCount);
  let str = "text-muted";
  ({ isMaxMessageCount, messageCount } = messageCount);
  if (hasUnreads) {
    str = "text-default";
  }
  obj = { style: items };
  items = [tmp.container, containerStyle];
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["8M0DrB"], { count: messageCountText });
  obj = { size: "xs", style: hasUnreads ? tmp.iconUnread : tmp.iconRead };
  let str2 = "icon-muted";
  if (hasUnreads) {
    str2 = "interactive-text-default";
  }
  obj.color = str2;
  const items1 = [closure_4(require(4629) /* ChatIcon */.ChatIcon, obj), , ];
  if (isMaxMessageCount) {
    const obj1 = { variant: "text-sm/semibold", color: str, children: messageCountText };
    let tmp6Result = tmp6(require(4126) /* Text */.Text, obj1);
  } else {
    const obj2 = { count: messageCount, textVariant: "text-sm/semibold", textColor: str, animate: false };
    tmp6Result = tmp6(importDefault(10381), obj2);
  }
  items1[1] = tmp6Result;
  let tmp12 = null != unreadCount;
  if (tmp12) {
    const obj3 = { variant: "text-sm/semibold", color: "text-brand", style: tmp.messageUnreadCount };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj4 = { count: unreadCount };
    const items2 = ["(", intl2.format(require(1212) /* getSystemLocale */.t.z3PEth, obj4), ")"];
    obj3.children = items2;
    tmp12 = callback(require(4126) /* Text */.Text, obj3);
  }
  items1[2] = tmp12;
  obj.children = items1;
  return callback(View, obj);
};
