// Module ID: 9729
// Function ID: 9730
// Name: ForumComposerHeader
// Dependencies: [19, 17, 21, 4836, 576, 4989, 5435, 1115, 5992, 5402, 4832, 5389, 2]
// Exports: default

// Module 9729 (ForumComposerHeader)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import BookCheckIcon from "BookCheckIcon" /* 5389 */;
import ForumIcon from "ForumIcon" /* 5402 */;
import Pressables from "Pressables" /* 5435 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((height) => {
  let obj2;
  let obj4;
  const obj = { headerBar: obj2, headerBarContent: { flexDirection: "row", alignItems: "center", flex: 1 }, headerBarText: { marginHorizontal: nativeDefault.space.PX_16 }, headerBarSeparator: obj4, button: { paddingHorizontal: nativeDefault.space.PX_16 } };
  obj2 = { height, flexDirection: "row", alignItems: "center" };
  obj4 = { height: _false.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, top: undefined };
  ({ marginHorizontal: nativeDefault.space.PX_16 });
  const merged = Object.assign(_false.absoluteFillObject);
  ({ paddingHorizontal: nativeDefault.space.PX_16 });
  return obj;
});
const result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerHeader.tsx");

export default function ForumComposerHeader(height) {
  let channel;
  let closure_129_0;
  let intl;
  let intl3;
  let items;
  let items1;
  let items2;
  let onGuidelinesPress;
  let submitting;
  let title;
  ({ title, channel, onClose: closure_129_0 } = height);
  ({ submitting, onGuidelinesPress } = height);
  const tmp = closure_7(height.height);
  const obj = { style: tmp.headerBar, children: items };
  const obj2 = {
    style: tmp.button,
    accessibilityRole: "button",
    accessibilityLabel: intl.string(intl4.t.cpT0Cq),
    disabled: submitting,
    onPress() {
      return closure_1_0(false);
    },
    children: hasOwnProperty(XSmallIcon.XSmallIcon, {})
  };
  const tmp3 = useChannelNameDefault(channel);
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl4.intl;
  items = [hasOwnProperty(PressableOpacity, obj2), , , ];
  const obj3 = { style: tmp.headerBarContent, children: items1 };
  items1 = [hasOwnProperty(ForumIcon.ForumIcon, { size: "sm" }), ];
  const obj4 = { style: tmp.headerBarText, children: items2 };
  const Text = Text_Text.Text;
  if ("" === title) {
    const intl2 = tmp7(1115).intl;
    title = intl2.string(tmp7(1115).t["7EjFCk"]);
  }
  items2 = [hasOwnProperty(Text, { lineClamp: 1, ellipsizeMode: "tail", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title }), hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-default", children: tmp3 })];
  items1[1] = metroRequire(React3, obj4);
  items[1] = metroRequire(React3, obj3);
  let length;
  if (channel != null) {
    length = channel.topic.length;
  }
  let tmp6Result = null;
  if (length > 0) {
    const obj5 = { accessibilityRole: "button", accessibilityLabel: intl3.string(intl4.t.yR6HwZ), style: tmp.button, onPress: onGuidelinesPress, children: hasOwnProperty(BookCheckIcon.BookCheckIcon, {}) };
    const PressableOpacity2 = tmp7(5435).PressableOpacity;
    intl3 = tmp7(1115).intl;
    tmp6Result = tmp6(PressableOpacity2, obj5);
  }
  items[2] = tmp6Result;
  const obj6 = { style: tmp.headerBarSeparator };
  items[3] = hasOwnProperty(React3, obj6);
  return metroRequire(React3, obj);
};
