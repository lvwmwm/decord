// Module ID: 16256
// Function ID: 126589
// Name: EmojiOverflowActionSheet
// Dependencies: [5, 31, 27, 33, 4130, 5500, 1392, 4126, 5503, 5165, 4089, 1212, 9391, 9106, 4029, 3830, 5119, 2]
// Exports: default

// Module 16256 (EmojiOverflowActionSheet)
import ActionSheet from "ActionSheet";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ header: { paddingHorizontal: 8, flexDirection: "row", alignItems: "center", gap: 16 }, emojiImage: { width: 30, height: 30, resizeMode: "contain" } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/native/EmojiOverflowActionSheet.tsx");

export default function EmojiOverflowActionSheet(emoji) {
  let ActionSheet;
  let importAll;
  let onClose;
  let onSelectRolesForEmoji;
  emoji = emoji.emoji;
  ({ guildId: importAll, onSelectRolesForEmoji } = emoji);
  ({ onEdit: ActionSheet, onClose } = emoji);
  const tmp2 = callback4();
  let obj = {};
  obj = { style: tmp2.header };
  obj = { style: tmp2.emojiImage };
  const obj1 = {};
  let obj4 = importAll(onSelectRolesForEmoji[6]);
  obj1.uri = obj4.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj.source = obj1;
  const items = [callback2(onClose, obj), ];
  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: ":" + emoji.name + ":" };
  items[1] = callback2(emoji(onSelectRolesForEmoji[7]).Text, obj3);
  obj.children = items;
  const items1 = [callback3(closure_5, obj), ];
  obj4 = { hasIcons: true };
  const obj5 = { icon: callback2(emoji(onSelectRolesForEmoji[10]).TrashIcon, { color: "text-feedback-critical" }) };
  const obj6 = { variant: "text-md/semibold", color: "text-feedback-critical" };
  const intl = emoji(onSelectRolesForEmoji[11]).intl;
  obj6.children = intl.string(emoji(onSelectRolesForEmoji[11]).t.oyYWHE);
  obj5.label = callback2(emoji(onSelectRolesForEmoji[7]).Text, obj6);
  obj5.onPress = function onPress() {
    emoji(onSelectRolesForEmoji[12]).deleteEmoji(closure_1, emoji.id);
    onClose();
  };
  const items2 = [callback2(emoji(onSelectRolesForEmoji[9]).TableRow, obj5), , , ];
  const obj7 = { icon: callback2(emoji(onSelectRolesForEmoji[13]).PencilIcon, {}) };
  const obj8 = { variant: "text-md/semibold" };
  const intl2 = emoji(onSelectRolesForEmoji[11]).intl;
  obj8.children = intl2.string(emoji(onSelectRolesForEmoji[11]).t.bt75uw);
  obj7.label = callback2(emoji(onSelectRolesForEmoji[7]).Text, obj8);
  obj7.onPress = function onPress() {
    callback();
    onClose();
  };
  items2[1] = callback2(emoji(onSelectRolesForEmoji[9]).TableRow, obj7);
  let tmp4 = null;
  if (null != onSelectRolesForEmoji) {
    const obj9 = { icon: callback2(emoji(onSelectRolesForEmoji[13]).PencilIcon, {}) };
    const obj10 = { variant: "text-md/semibold" };
    const intl3 = emoji(onSelectRolesForEmoji[11]).intl;
    obj10.children = intl3.string(emoji(onSelectRolesForEmoji[11]).t["+riKdA"]);
    obj9.label = callback2(emoji(onSelectRolesForEmoji[7]).Text, obj10);
    // CreateGeneratorClosureLongIndex (0x67)
    obj9.onPress = callback(tmp);
    tmp4 = callback2(emoji(onSelectRolesForEmoji[9]).TableRow, obj9);
  }
  items2[2] = tmp4;
  const obj11 = { icon: callback2(emoji(onSelectRolesForEmoji[16]).XSmallIcon, {}) };
  const obj12 = { variant: "text-md/semibold" };
  const intl4 = emoji(onSelectRolesForEmoji[11]).intl;
  obj12.children = intl4.string(emoji(onSelectRolesForEmoji[11]).t["ETE/oC"]);
  obj11.label = callback2(emoji(onSelectRolesForEmoji[7]).Text, obj12);
  obj11.onPress = onClose;
  items2[3] = callback2(emoji(onSelectRolesForEmoji[9]).TableRow, obj11);
  obj4.children = items2;
  items1[1] = callback3(emoji(onSelectRolesForEmoji[8]).TableRowGroup, obj4);
  obj.children = items1;
  return callback3(emoji(onSelectRolesForEmoji[5]).ActionSheet, obj);
};
