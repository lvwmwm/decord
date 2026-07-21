// Module ID: 16123
// Function ID: 124313
// Name: EmojiOverflowActionSheet
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 33554469, 1962934272, 4096]
// Exports: default

// Module 16123 (EmojiOverflowActionSheet)
import closure_3 from "__exportStarResult1";
import "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import showActionSheet from "showActionSheet";

({ Image: closure_4, View: closure_5 } = __exportStarResult1);
({ jsx: closure_6, jsxs: closure_7 } = __exportStarResult1);
let closure_8 = __exportStarResult1.createStyles({ header: {}, emojiImage: { "Null": false, "Null": false, "Null": false } });
const result = showActionSheet.fileFinishedImporting("modules/guild_settings/native/EmojiOverflowActionSheet.tsx");

export default function EmojiOverflowActionSheet(emoji) {
  let onClose;
  let onSelectRolesForEmoji;
  emoji = emoji.emoji;
  const arg1 = emoji;
  ({ guildId: closure_1, onSelectRolesForEmoji } = emoji);
  const dependencyMap = onSelectRolesForEmoji;
  ({ onEdit: closure_3, onClose } = emoji);
  const tmp2 = callback4();
  let obj = {};
  obj = { style: tmp2.header };
  obj = { style: tmp2.emojiImage };
  const obj1 = {};
  let obj4 = importAll(dependencyMap[6]);
  obj1.uri = obj4.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj.source = obj1;
  const items = [callback2(onClose, obj), ];
  const obj3 = { children: ":" + emoji.name + ":" };
  items[1] = callback2(arg1(dependencyMap[7]).Text, obj3);
  obj.children = items;
  const items1 = [callback3(closure_5, obj), ];
  obj4 = { hasIcons: true };
  const obj5 = { icon: callback2(arg1(dependencyMap[10]).TrashIcon, { color: "text-feedback-critical" }) };
  const obj6 = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj6.children = intl.string(arg1(dependencyMap[11]).t.oyYWHE);
  obj5.label = callback2(arg1(dependencyMap[7]).Text, obj6);
  obj5.onPress = function onPress() {
    emoji(onSelectRolesForEmoji[12]).deleteEmoji(closure_1, emoji.id);
    onClose();
  };
  const items2 = [callback2(arg1(dependencyMap[9]).TableRow, obj5), , , ];
  const obj7 = { icon: callback2(arg1(dependencyMap[13]).PencilIcon, {}) };
  const obj8 = { variant: "text-md/semibold" };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj8.children = intl2.string(arg1(dependencyMap[11]).t.bt75uw);
  obj7.label = callback2(arg1(dependencyMap[7]).Text, obj8);
  obj7.onPress = function onPress() {
    callback();
    onClose();
  };
  items2[1] = callback2(arg1(dependencyMap[9]).TableRow, obj7);
  let tmp4 = null;
  if (null != onSelectRolesForEmoji) {
    const obj9 = { icon: callback2(arg1(dependencyMap[13]).PencilIcon, {}) };
    const obj10 = { variant: "text-md/semibold" };
    const intl3 = arg1(dependencyMap[11]).intl;
    obj10.children = intl3.string(arg1(dependencyMap[11]).t.+riKdA);
    obj9.label = callback2(arg1(dependencyMap[7]).Text, obj10);
    // CreateGeneratorClosureLongIndex (0x67)
    obj9.onPress = callback(tmp);
    tmp4 = callback2(arg1(dependencyMap[9]).TableRow, obj9);
  }
  items2[2] = tmp4;
  const obj11 = { icon: callback2(arg1(dependencyMap[16]).XSmallIcon, {}) };
  const obj12 = { variant: "text-md/semibold" };
  const intl4 = arg1(dependencyMap[11]).intl;
  obj12.children = intl4.string(arg1(dependencyMap[11]).t.ETE/oC);
  obj11.label = callback2(arg1(dependencyMap[7]).Text, obj12);
  obj11.onPress = onClose;
  items2[3] = callback2(arg1(dependencyMap[9]).TableRow, obj11);
  obj4.children = items2;
  items1[1] = callback3(arg1(dependencyMap[8]).TableRowGroup, obj4);
  obj.children = items1;
  return callback3(arg1(dependencyMap[5]).ActionSheet, obj);
};
