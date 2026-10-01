// Module ID: 16148
// Function ID: 16149
// Name: ReplyRow
// Dependencies: [19, 17, 21, 16091, 576, 5435, 4832, 8219, 2]
// Exports: ContentInventoryReplyRow

// Module 16148 (ReplyRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import ReactionIcon from "ReactionIcon" /* 8219 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16091 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createICYMIStyles.createICYMIStyles((marginLeft) => {
  const obj = { separator: size, container: { flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", marginHorizontal: marginLeft.margin, marginBottom: marginLeft.margin, gap: nativeDefault.space.PX_12 }, buttonContainer: { flexGrow: 1, flexBasis: 0, height: nativeDefault.space.PX_40 }, feedbackContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12, height: nativeDefault.space.PX_40 }, icon: { width: 20, height: 20 }, feedbackButtonIcon: { tintColor: nativeDefault.colors.BUTTON_OUTLINE_PRIMARY_TEXT }, input: { flex: 1, borderRadius: nativeDefault.radii.round }, contentInventoryPressable: { borderRadius: 20, width: "100%", minHeight: 40, backgroundColor: nativeDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND, justifyContent: "center" }, contentInventoryContainer: { marginLeft: marginLeft.margin, marginRight: 10, paddingVertical: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, contentInventoryText: { flexShrink: 1 }, replyContainer: { flexDirection: "row", alignItems: "center", marginLeft: marginLeft.inset, marginTop: marginLeft.margin } };
  size = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: marginLeft.margin, width: "100%" };
  ({ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", marginHorizontal: marginLeft.margin, marginBottom: marginLeft.margin, gap: nativeDefault.space.PX_12 });
  ({ flexGrow: 1, flexBasis: 0, height: nativeDefault.space.PX_40 });
  ({ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12, height: nativeDefault.space.PX_40 });
  ({ tintColor: nativeDefault.colors.BUTTON_OUTLINE_PRIMARY_TEXT });
  ({ flex: 1, borderRadius: nativeDefault.radii.round });
  ({ borderRadius: 20, width: "100%", minHeight: 40, backgroundColor: nativeDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND, justifyContent: "center" });
  ({ marginLeft: marginLeft.margin, marginRight: 10, paddingVertical: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/ReplyRow.tsx");

export const ContentInventoryReplyRow = function ContentInventoryReplyRow(reactText) {
  let PressableOpacity;
  let items;
  let obj2;
  let obj3;
  reactText = reactText.reactText;
  const onReply = reactText.onReply;
  const tmp = closure_6();
  const obj = { style: tmp.replyContainer, children: React3(PressableOpacity, obj2) };
  obj2 = { accessibilityRole: "button", onPress: onReply, style: tmp.contentInventoryPressable, accessibilityLabel: reactText, pointerEvents: "box-only", children: hasOwnProperty(View, obj3) };
  obj3 = { style: tmp.contentInventoryContainer, children: items };
  PressableOpacity = Pressables.PressableOpacity;
  items = [, ];
  const obj4 = { variant: "text-md/medium", color: "input-placeholder-text-default", lineClamp: 1, style: tmp.contentInventoryText, children: reactText };
  items[0] = React3(Text_Text.Text, obj4);
  const obj5 = { style: tmp.icon, size: "custom" };
  items[1] = React3(ReactionIcon.ReactionIcon, obj5);
  return React3(View, obj);
};
