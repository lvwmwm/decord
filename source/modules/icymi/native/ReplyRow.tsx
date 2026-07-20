// Module ID: 15103
// Function ID: 114000
// Name: ContentInventoryReplyRow
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: ContentInventoryReplyRow

// Module 15103 (ContentInventoryReplyRow)
import "result";
import { View } from "result";
import result from "result";
import result from "result";
import result from "result";

({ jsx: closure_4, jsxs: closure_5 } = result);
let closure_6 = result.createICYMIStyles((margin) => {
  let obj = {};
  obj = { height: 1, backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE, marginBottom: margin.margin, width: "100%" };
  obj.separator = obj;
  obj = { marginHorizontal: margin.margin, marginBottom: margin.margin, gap: importDefault(dependencyMap[4]).space.PX_12 };
  obj.container = obj;
  const obj1 = { MCP_RESOURCE_URI_ATTRIBUTE: null, handleFeedItemUnseen: null, height: importDefault(dependencyMap[4]).space.PX_40 };
  obj.buttonContainer = obj1;
  const obj2 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, gap: importDefault(dependencyMap[4]).space.PX_12, height: importDefault(dependencyMap[4]).space.PX_40 };
  obj.feedbackContainer = obj2;
  obj.icon = { aze: false, azj: false };
  obj.feedbackButtonIcon = { tintColor: importDefault(dependencyMap[4]).colors.BUTTON_OUTLINE_PRIMARY_TEXT };
  const obj3 = { tintColor: importDefault(dependencyMap[4]).colors.BUTTON_OUTLINE_PRIMARY_TEXT };
  obj.input = { flex: 1, borderRadius: importDefault(dependencyMap[4]).radii.round };
  const obj5 = { "Bool(true)": "delayV", "Bool(true)": "kSplineTableSize", "Bool(true)": "Boolean", "Bool(true)": "isArray", "Bool(true)": "type", backgroundColor: importDefault(dependencyMap[4]).colors.REDESIGN_CHAT_INPUT_BACKGROUND };
  obj.contentInventoryPressable = obj5;
  const obj6 = { alignSelf: 14, marginBottom: 16, flex: 8, justifyContent: null, alignItems: "\u{1F44F}\u{1F3FF}", marginLeft: margin.margin, paddingVertical: importDefault(dependencyMap[4]).space.PX_8, gap: importDefault(dependencyMap[4]).space.PX_4 };
  obj.contentInventoryContainer = obj6;
  obj.contentInventoryText = { flexShrink: 1 };
  ({ inset: obj10.marginLeft, margin: obj10.marginTop } = margin);
  obj.replyContainer = { -9223372036854775808: true, filter: true };
  return obj;
});
result = result.fileFinishedImporting("modules/icymi/native/ReplyRow.tsx");

export const ContentInventoryReplyRow = function ContentInventoryReplyRow(onPress) {
  const reactText = onPress.reactText;
  const tmp = callback3();
  let obj = { style: tmp.replyContainer };
  obj = { accessibilityRole: "button", onPress: onPress.onReply, style: tmp.contentInventoryPressable, accessibilityLabel: reactText, pointerEvents: "box-only" };
  obj = { style: tmp.contentInventoryContainer };
  const obj1 = { 9223372036854775807: true, 9223372036854775807: true, 9223372036854775807: true, style: tmp.contentInventoryText, children: reactText };
  const items = [callback(arg1(dependencyMap[6]).Text, obj1), callback(arg1(dependencyMap[7]).ReactionIcon, { style: tmp.icon, size: "custom" })];
  obj.children = items;
  obj.children = callback2(View, obj);
  obj.children = callback(arg1(dependencyMap[5]).PressableOpacity, obj);
  return callback(View, obj);
};
