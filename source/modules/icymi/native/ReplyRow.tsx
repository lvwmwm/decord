// Module ID: 15121
// Function ID: 114101
// Name: ContentInventoryReplyRow
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: ContentInventoryReplyRow

// Module 15121 (ContentInventoryReplyRow)
import "__exportStarResult1";
import { View } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_4, jsxs: closure_5 } = __exportStarResult1);
let closure_6 = __exportStarResult1.createICYMIStyles((margin) => {
  let obj = {};
  obj = { height: 1, backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE, marginBottom: margin.margin, width: "100%" };
  obj.separator = obj;
  obj = { marginHorizontal: margin.margin, marginBottom: margin.margin, gap: importDefault(dependencyMap[4]).space.PX_12 };
  obj.container = obj;
  const obj1 = { -9223372036854775808: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001288835093747774, 9223372036854775807: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005740555781694437, height: importDefault(dependencyMap[4]).space.PX_40 };
  obj.buttonContainer = obj1;
  const obj2 = { 9223372036854775807: "Array", 9223372036854775807: "isArray", 0: "accessibilityRole", gap: importDefault(dependencyMap[4]).space.PX_12, height: importDefault(dependencyMap[4]).space.PX_40 };
  obj.feedbackContainer = obj2;
  obj.icon = {};
  obj.feedbackButtonIcon = { tintColor: importDefault(dependencyMap[4]).colors.BUTTON_OUTLINE_PRIMARY_TEXT };
  const obj3 = { tintColor: importDefault(dependencyMap[4]).colors.BUTTON_OUTLINE_PRIMARY_TEXT };
  obj.input = { flex: 1, borderRadius: importDefault(dependencyMap[4]).radii.round };
  const obj5 = { borderless: "r", WindowDimensionsEvents: "isArray", ICYMITab: "isArray", WumpusMahjongSpotIllustration: "title", TRAIN_SIMULATOR: "r", backgroundColor: importDefault(dependencyMap[4]).colors.REDESIGN_CHAT_INPUT_BACKGROUND };
  obj.contentInventoryPressable = obj5;
  const obj4 = { flex: 1, borderRadius: importDefault(dependencyMap[4]).radii.round };
  obj.contentInventoryContainer = { marginLeft: margin.margin, paddingVertical: importDefault(dependencyMap[4]).space.PX_8, gap: importDefault(dependencyMap[4]).space.PX_4 };
  obj.contentInventoryText = { flexShrink: 1 };
  ({ inset: obj10.marginLeft, margin: obj10.marginTop } = margin);
  obj.replyContainer = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" };
  return obj;
});
const result = __exportStarResult1.fileFinishedImporting("modules/icymi/native/ReplyRow.tsx");

export const ContentInventoryReplyRow = function ContentInventoryReplyRow(onPress) {
  const reactText = onPress.reactText;
  const tmp = callback3();
  let obj = { style: tmp.replyContainer };
  obj = { accessibilityRole: "button", onPress: onPress.onReply, style: tmp.contentInventoryPressable, accessibilityLabel: reactText, pointerEvents: "box-only" };
  obj = { style: tmp.contentInventoryContainer };
  const obj1 = { 803799044: true, 1269170180: true, 711589892: true, style: tmp.contentInventoryText, children: reactText };
  const items = [callback(arg1(dependencyMap[6]).Text, obj1), callback(arg1(dependencyMap[7]).ReactionIcon, { style: tmp.icon, size: "custom" })];
  obj.children = items;
  obj.children = callback2(View, obj);
  obj.children = callback(arg1(dependencyMap[5]).PressableOpacity, obj);
  return callback(View, obj);
};
