// Module ID: 15236
// Function ID: 116270
// Name: ContentInventoryReplyRow
// Dependencies: [31, 27, 33, 15179, 689, 4660, 4126, 8007, 2]
// Exports: ContentInventoryReplyRow

// Module 15236 (ContentInventoryReplyRow)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createICYMIStyles from "createICYMIStyles";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj = {};
  obj = { height: 1, backgroundColor: importDefault(689).colors.BORDER_SUBTLE, marginBottom: margin.margin, width: "100%" };
  obj.separator = obj;
  obj = { flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row" };
  ({ margin: obj3.marginHorizontal, margin: obj3.marginBottom } = margin);
  obj.gap = importDefault(689).space.PX_12;
  obj.container = obj;
  const obj1 = { flexGrow: 1, flexBasis: 0, height: importDefault(689).space.PX_40 };
  obj.buttonContainer = obj1;
  const obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: importDefault(689).space.PX_12, height: importDefault(689).space.PX_40 };
  obj.feedbackContainer = obj2;
  obj.icon = { width: 20, height: 20 };
  const obj3 = { tintColor: importDefault(689).colors.BUTTON_OUTLINE_PRIMARY_TEXT };
  obj.feedbackButtonIcon = obj3;
  obj.input = { flex: 1, borderRadius: importDefault(689).radii.round };
  const obj5 = { borderRadius: 20, width: "100%", minHeight: 40, backgroundColor: importDefault(689).colors.REDESIGN_CHAT_INPUT_BACKGROUND, justifyContent: "center" };
  obj.contentInventoryPressable = obj5;
  const obj6 = { marginLeft: margin.margin, marginRight: 10, paddingVertical: importDefault(689).space.PX_8, flexDirection: "row", alignItems: "center", gap: importDefault(689).space.PX_4 };
  obj.contentInventoryContainer = obj6;
  obj.contentInventoryText = { flexShrink: 1 };
  ({ inset: obj10.marginLeft, margin: obj10.marginTop } = margin);
  obj.replyContainer = { flexDirection: "row", alignItems: "center" };
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/icymi/native/ReplyRow.tsx");

export const ContentInventoryReplyRow = function ContentInventoryReplyRow(onPress) {
  const reactText = onPress.reactText;
  const tmp = callback3();
  let obj = { style: tmp.replyContainer };
  obj = { accessibilityRole: "button", onPress: onPress.onReply, style: tmp.contentInventoryPressable, accessibilityLabel: reactText, pointerEvents: "box-only" };
  obj = { style: tmp.contentInventoryContainer };
  const obj1 = { variant: "text-md/medium", color: "input-placeholder-text-default", lineClamp: 1, style: tmp.contentInventoryText, children: reactText };
  const items = [callback(require(4126) /* Text */.Text, obj1), callback(require(8007) /* ReactionIcon */.ReactionIcon, { style: tmp.icon, size: "custom" })];
  obj.children = items;
  obj.children = callback2(View, obj);
  obj.children = callback(require(4660) /* PressableBase */.PressableOpacity, obj);
  return callback(View, obj);
};
