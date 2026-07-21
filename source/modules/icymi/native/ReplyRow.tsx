// Module ID: 15110
// Function ID: 114024
// Name: ContentInventoryReplyRow
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: ContentInventoryReplyRow

// Module 15110 (ContentInventoryReplyRow)
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
  obj = { 2019522654: true, 2018474062: true, 2018605136: true, 2018801746: true };
  ({ margin: obj3.marginHorizontal, margin: obj3.marginBottom } = margin);
  obj.gap = importDefault(dependencyMap[4]).space.PX_12;
  obj.container = obj;
  obj.buttonContainer = { height: importDefault(dependencyMap[4]).space.PX_40 };
  const obj2 = { padding: "Next", paddingBottom: null, flexDirection: null, gap: importDefault(dependencyMap[4]).space.PX_12, height: importDefault(dependencyMap[4]).space.PX_40 };
  obj.feedbackContainer = obj2;
  obj.icon = { bhk: false, bic: "internal" };
  const obj3 = { tintColor: importDefault(dependencyMap[4]).colors.BUTTON_OUTLINE_PRIMARY_TEXT };
  obj.feedbackButtonIcon = obj3;
  const obj1 = { height: importDefault(dependencyMap[4]).space.PX_40 };
  obj.input = { flex: 1, borderRadius: importDefault(dependencyMap[4]).radii.round };
  const obj5 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, backgroundColor: importDefault(dependencyMap[4]).colors.REDESIGN_CHAT_INPUT_BACKGROUND };
  obj.contentInventoryPressable = obj5;
  const obj6 = { alignSelf: 14, marginBottom: 16, flex: 8, justifyContent: null, alignItems: "\u{1F44F}\u{1F3FF}", marginLeft: margin.margin, paddingVertical: importDefault(dependencyMap[4]).space.PX_8, gap: importDefault(dependencyMap[4]).space.PX_4 };
  obj.contentInventoryContainer = obj6;
  obj.contentInventoryText = { flexShrink: 1 };
  obj.replyContainer = { marginLeft: margin.inset, marginTop: margin.margin };
  return obj;
});
const result = __exportStarResult1.fileFinishedImporting("modules/icymi/native/ReplyRow.tsx");

export const ContentInventoryReplyRow = function ContentInventoryReplyRow(onPress) {
  const reactText = onPress.reactText;
  const tmp = callback3();
  let obj = { style: tmp.replyContainer };
  obj = { accessibilityRole: "button", onPress: onPress.onReply, style: tmp.contentInventoryPressable, accessibilityLabel: reactText, pointerEvents: "box-only" };
  obj = { style: tmp.contentInventoryContainer };
  const obj1 = { -9223372036854775808: true, 0: true, 0: true, style: tmp.contentInventoryText, children: reactText };
  const items = [callback(arg1(dependencyMap[6]).Text, obj1), callback(arg1(dependencyMap[7]).ReactionIcon, { style: tmp.icon, size: "custom" })];
  obj.children = items;
  obj.children = callback2(View, obj);
  obj.children = callback(arg1(dependencyMap[5]).PressableOpacity, obj);
  return callback(View, obj);
};
