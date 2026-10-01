// Module ID: 17367
// Function ID: 17368
// Name: EmojiOverflowActionSheet
// Dependencies: [5, 19, 17, 21, 4836, 6618, 1397, 4832, 5999, 5917, 4790, 1115, 9797, 9713, 4735, 4527, 5992, 2]
// Exports: default

// Module 17367 (EmojiOverflowActionSheet)
import EmojiActionCreators from "EmojiActionCreators" /* 9797 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, c6, closure_3;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Image: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ header: { paddingHorizontal: 8, flexDirection: "row", alignItems: "center", gap: 16 }, emojiImage: { width: 30, height: 30, resizeMode: "contain" } });
const result = size.fileFinishedImporting("modules/guild_settings/native/EmojiOverflowActionSheet.tsx");

export default function EmojiOverflowActionSheet(emoji) {
  let Text2;
  let Text3;
  let Text4;
  let Text5;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj10;
  let obj12;
  let obj16;
  let obj3;
  let obj4;
  let obj5;
  let obj8;
  let onClose;
  let onSelectRolesForEmoji;
  emoji = emoji.emoji;
  ({ guildId: importAll, onSelectRolesForEmoji } = emoji);
  ({ onEdit: _asyncToGenerator, onClose } = emoji);
  const tmp = closure_8();
  const tmp3 = emoji;
  const tmp4 = onSelectRolesForEmoji;
  let obj = { style: tmp.header, children: items };
  let obj2 = { style: tmp.emojiImage, source: obj3 };
  obj3 = { uri: obj4.getEmojiURL(obj5) };
  const ActionSheet = emoji(onSelectRolesForEmoji[5]).ActionSheet;
  obj4 = require("AvatarUtils");
  obj5 = { id: emoji.id, animated: emoji.animated, size: 48 };
  items = [closure_6(onClose, obj2), ];
  let obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: ":" + emoji.name + ":" };
  const Text = emoji(onSelectRolesForEmoji[7]).Text;
  items[1] = closure_6(Text, obj6);
  const items1 = [closure_7(closure_5, obj), ];
  const TableRowGroup = emoji(onSelectRolesForEmoji[8]).TableRowGroup;
  let obj7 = {
    icon: closure_6(emoji(onSelectRolesForEmoji[10]).TrashIcon, { color: "text-feedback-critical" }),
    label: closure_6(Text2, obj8),
    onPress() {
      const obj = EmojiActionCreators;
      obj.deleteEmoji(importAll, emoji.id);
      onClose();
    }
  };
  const TableRow = emoji(onSelectRolesForEmoji[9]).TableRow;
  obj8 = { variant: "text-md/semibold", color: "text-feedback-critical", children: intl.string(emoji(onSelectRolesForEmoji[11]).t.oyYWHE) };
  Text2 = emoji(onSelectRolesForEmoji[7]).Text;
  intl = emoji(onSelectRolesForEmoji[11]).intl;
  const items2 = [closure_6(TableRow, obj7), , , ];
  const obj9 = {
    icon: closure_6(emoji(onSelectRolesForEmoji[13]).PencilIcon, {}),
    label: closure_6(Text3, obj10),
    onPress() {
      _asyncToGenerator();
      onClose();
    }
  };
  const TableRow2 = emoji(onSelectRolesForEmoji[9]).TableRow;
  obj10 = { variant: "text-md/semibold", children: intl2.string(emoji(onSelectRolesForEmoji[11]).t.bt75uw) };
  Text3 = emoji(onSelectRolesForEmoji[7]).Text;
  intl2 = emoji(onSelectRolesForEmoji[11]).intl;
  items2[1] = closure_6(TableRow2, obj9);
  let tmp5Result = null;
  if (null != onSelectRolesForEmoji) {
    const obj11 = {
      icon: closure_6(tmp3(tmp4[13]).PencilIcon, {}),
      label: closure_6(Text4, obj12),
      onPress: _asyncToGenerator(async (arg0, value) => {
          let closure_2;
          let obj2;
          if (c6 === 2) {
            c6 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            let c4;
            try {
              let anyErrorMessage;
              let roles;
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  onSelectRolesForEmoji = tmp;
                  anyErrorMessage = tmp4;
                  roles = undefined;
                  c4 = 1;
                  c5 = 2;
                  c6 = 1;
                  const obj5 = { value: onSelectRolesForEmoji(emoji), done: false };
                  return obj5;
                }
              } else {
                if (1 === c5) {
                  c4 = 0;
                  anyErrorMessage = closure_3;
                  if (anyErrorMessage instanceof roles(onSelectRolesForEmoji[14]).APIError) {
                    const presentError = roles(onSelectRolesForEmoji[15]).presentError;
                    const tmp23 = roles(onSelectRolesForEmoji[15]);
                    anyErrorMessage = anyErrorMessage.getAnyErrorMessage();
                    roles = anyErrorMessage;
                    if (anyErrorMessage == null) {
                      const intl = roles(onSelectRolesForEmoji[11]).intl;
                      roles = intl.string(roles(onSelectRolesForEmoji[11]).t.R0RpRX);
                    }
                    presentError(roles);
                  }
                } else if (2 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 0;
                    c6 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    roles = value;
                    const obj7 = { guildId: closure_130_1, emojiId: closure_130_0.id, roles };
                    c5 = 3;
                    c6 = 1;
                    const obj8 = { value: obj2.updateEmoji(obj7), done: false };
                    obj2 = roles(onSelectRolesForEmoji[12]);
                    return obj8;
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c4 = 0;
                }
                closure_130_4();
                c6 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp38) {
              closure_3 = tmp38;
              if (0 === c4) {
                c6 = 3;
                throw tmp38;
              } else {
                c5 = 1;
              }
            }
          }
        })
    };
    const TableRow3 = tmp3(tmp4[9]).TableRow;
    obj12 = { variant: "text-md/semibold", children: intl3.string(tmp3(tmp4[11]).t["+riKdA"]) };
    Text4 = tmp3(tmp4[7]).Text;
    intl3 = tmp3(tmp4[11]).intl;
    tmp5Result = tmp5(TableRow3, obj11);
  }
  const obj13 = { children: items1 };
  const obj14 = { hasIcons: true, children: items2 };
  items2[2] = tmp5Result;
  const obj15 = { icon: closure_6(tmp3(tmp4[16]).XSmallIcon, {}), label: closure_6(Text5, obj16), onPress: onClose };
  const TableRow4 = tmp3(tmp4[9]).TableRow;
  obj16 = { variant: "text-md/semibold", children: intl4.string(tmp3(tmp4[11]).t["ETE/oC"]) };
  Text5 = tmp3(tmp4[7]).Text;
  intl4 = tmp3(tmp4[11]).intl;
  items2[3] = closure_6(TableRow4, obj15);
  items1[1] = closure_7(TableRowGroup, obj14);
  return closure_7(ActionSheet, obj13);
};
