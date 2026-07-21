// Module ID: 11131
// Function ID: 86603
// Name: num2
// Dependencies: []
// Exports: default

// Module 11131 (num2)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { tintColor: importDefault(dependencyMap[4]).colors.ICON_MUTED, marginEnd: 4 };
const tmp3 = arg1(dependencyMap[2]);
let num = 0;
if (obj4.isAndroid()) {
  num = 2;
}
obj.marginTop = num;
obj.iconRead = obj;
const obj1 = { tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT, marginEnd: 4 };
const obj4 = arg1(dependencyMap[5]);
let num2 = 0;
if (obj6.isAndroid()) {
  num2 = 2;
}
obj1.marginTop = num2;
obj.iconUnread = obj1;
obj.messageUnreadCount = { marginStart: 4 };
obj.container = {};
let closure_6 = obj.createStyles(obj);
const obj6 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/forums/native/posts/ForumPostMessageCount.tsx");

export default function ForumPostMessageCount(hasUnreads) {
  let containerStyle;
  let isMaxMessageCount;
  let messageCount;
  let messageCountText;
  let thread;
  let unreadCount;
  hasUnreads = hasUnreads.hasUnreads;
  ({ thread, containerStyle } = hasUnreads);
  const tmp = callback2();
  let obj = arg1(dependencyMap[6]);
  messageCount = obj.useMessageCount(thread);
  ({ messageCountText, unreadCount } = messageCount);
  let str = "text-muted";
  ({ isMaxMessageCount, messageCount } = messageCount);
  if (hasUnreads) {
    str = "text-default";
  }
  obj = { style: items };
  const items = [tmp.container, containerStyle];
  const intl = arg1(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[7]).t.8M0DrB, { count: messageCountText });
  obj = { size: "xs", style: hasUnreads ? tmp.iconUnread : tmp.iconRead };
  let str2 = "icon-muted";
  if (hasUnreads) {
    str2 = "interactive-text-default";
  }
  obj.color = str2;
  const items1 = [closure_4(arg1(dependencyMap[8]).ChatIcon, obj), , ];
  if (isMaxMessageCount) {
    const obj1 = { variant: "text-sm/semibold", color: str, children: messageCountText };
    let tmp6Result = tmp6(arg1(dependencyMap[9]).Text, obj1);
  } else {
    const obj2 = { count: messageCount, textVariant: "text-sm/semibold", textColor: str, animate: false };
    tmp6Result = tmp6(importDefault(dependencyMap[10]), obj2);
  }
  items1[1] = tmp6Result;
  let tmp12 = null != unreadCount;
  if (tmp12) {
    const obj3 = { style: tmp.messageUnreadCount };
    const intl2 = arg1(dependencyMap[7]).intl;
    const obj4 = { count: unreadCount };
    const items2 = [null, intl2.format(arg1(dependencyMap[7]).t.z3PEth, obj4), ")"];
    obj3.children = items2;
    tmp12 = callback(arg1(dependencyMap[9]).Text, obj3);
  }
  items1[2] = tmp12;
  obj.children = items1;
  return callback(View, obj);
};
