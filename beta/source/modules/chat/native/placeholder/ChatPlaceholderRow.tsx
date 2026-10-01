// Module ID: 12138
// Function ID: 12139
// Name: ChatPlaceholderRow
// Dependencies: [19, 17, 21, 1177, 4836, 576, 12137, 11820, 2]

// Module 12138 (ChatPlaceholderRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import getChatPlaceholderRowWidthDefault from "getChatPlaceholderRowWidth" /* 11820 */;
import getChatPlaceholderRowHeight from "getChatPlaceholderRowHeight" /* 12137 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const tmp3 = native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL];
let createStyles = createStyles_mod;
let obj = { row: obj2, rowInner: obj3, placeholderAvatar: size, placeholderText: obj4, placeholderBody: obj5 };
obj2 = { paddingLeft: nativeDefault.space.PX_12, paddingTop: getChatPlaceholderRowHeight.CHAT_PLACEHOLDER_ROW_MARGIN_TOP, flexDirection: "row" };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_12, flex: 1 };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: tmp3, width: tmp3, borderRadius: nativeDefault.radii.round };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: getChatPlaceholderRowHeight.CHAT_PLACEHOLDER_ROW_LINE_HEIGHT, borderRadius: nativeDefault.radii.sm };
obj5 = { marginTop: getChatPlaceholderRowHeight.CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP, width: "100%" };
let closure_5 = createStyles(obj);
const memoResult = react.memo(function ChatPlaceholderRow(lines) {
  let items1;
  let items2;
  let items3;
  let items4;
  lines = lines.lines;
  const tmp = closure_5();
  const rounded = Math.floor(10 * Math.random());
  const items = [];
  let num = 0;
  const sum = Math.floor(50 * Math.random()) + 10;
  if (0 < lines) {
    do {
      let obj = { style: items1 };
      items1 = [tmp.placeholderText, tmp.placeholderBody, ];
      let obj2 = { width: "" + getChatPlaceholderRowWidthDefault(rounded + num) + "%" };
      let _HermesInternal = HermesInternal;
      let push = items.push;
      items1[2] = obj2;
      let arr = push(_false(View, obj, num));
      num = num + 1;
    } while (num < lines);
  }
  const obj3 = { style: tmp.row, children: items2 };
  items2 = [, ];
  const obj4 = { style: tmp.placeholderAvatar };
  items2[0] = _false(View, obj4);
  const obj5 = { style: tmp.rowInner, children: items4 };
  const obj6 = { style: items3 };
  items3 = [tmp.placeholderText, { width: "" + sum + "%" }];
  items4 = [, ];
  ({ width: "" + sum + "%" });
  items4[0] = _false(View, obj6);
  items4[1] = items;
  items2[1] = React3(View, obj5);
  return React3(View, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholderRow.tsx");

export default memoResult;
