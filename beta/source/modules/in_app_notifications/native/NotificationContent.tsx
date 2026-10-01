// Module ID: 9631
// Function ID: 9632
// Name: NotificationContent
// Dependencies: [19, 17, 21, 4836, 576, 9632, 2]
// Exports: default

// Module 9631 (NotificationContent)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import MessageNotificationHeader from "MessageNotificationHeader" /* 9632 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const MessageNotificationHeaderDefault = MessageNotificationHeader;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: { flex: 1 }, iconContainer: obj2, contentContainer: obj3, headerContainer: { flex: 1 }, labelContainer: { flexDirection: "row", alignItems: "center" } };
obj2 = { marginRight: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_12, flexDirection: "row" };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/NotificationContent.tsx");

export default function NotificationContent(arg0) {
  let accessoryLabelNode;
  let children;
  let header;
  let icon;
  let items;
  let items1;
  let items2;
  let rightAccessory;
  let tmp7Result;
  ({ icon, accessoryLabelNode, header } = arg0);
  ({ children, rightAccessory } = arg0);
  const tmp = closure_6();
  let tmp4 = null;
  const obj = { style: tmp.contentContainer, children: items };
  if (null != icon) {
    const obj2 = { style: tmp.iconContainer, children: icon };
    tmp4 = React3(tmp3, obj2);
  }
  items = [tmp4, , ];
  let tmp6 = null;
  const obj3 = { style: tmp.body, children: items2 };
  const obj4 = { style: tmp.labelContainer, children: items1 };
  if (null != accessoryLabelNode) {
    tmp6 = accessoryLabelNode;
  }
  items1 = [tmp6, ];
  const obj5 = { style: tmp.headerContainer, children: tmp7Result };
  if ("message" === header.type) {
    const obj6 = {};
    const tmp16 = MessageNotificationHeaderDefault;
    const merged = Object.assign(header);
    tmp7Result = tmp7(tmp16, obj6);
  } else {
    const obj7 = {};
    const SimpleNotificationHeader = MessageNotificationHeader.SimpleNotificationHeader;
    const merged1 = Object.assign(header);
    tmp7Result = tmp7(SimpleNotificationHeader, obj7);
  }
  items1[1] = React3(View, obj5);
  items2 = [hasOwnProperty(View, obj4), children];
  items[1] = hasOwnProperty(View, obj3);
  items[2] = rightAccessory;
  return hasOwnProperty(View, obj);
};
