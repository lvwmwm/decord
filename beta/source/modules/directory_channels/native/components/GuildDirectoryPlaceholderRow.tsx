// Module ID: 11819
// Function ID: 11820
// Name: GuildDirectoryPlaceholderRow
// Dependencies: [19, 17, 21, 4836, 576, 5753, 11820, 2]

// Module 11819 (GuildDirectoryPlaceholderRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import getChatPlaceholderRowWidthDefault from "getChatPlaceholderRowWidth" /* 11820 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let size;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: { flexDirection: "row", padding: 16 }, rowInner: { flex: 1 }, placeholderAvatar: size, placeholderText: obj2, placeholderBody: { width: "100%", marginTop: 10 } };
size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm, overflow: "hidden", marginRight: 16, backgroundColor: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
createStyles = createStyles.createStyles;
obj2 = { height: 15, borderRadius: 5, backgroundColor: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
let closure_5 = createStyles(obj);
const memoResult = react.memo(() => {
  let items;
  let items1;
  let items2;
  const tmp = closure_5();
  let closure_0 = tmp;
  const sum = Math.floor(2 * Math.random()) + 2;
  let closure_1 = Math.floor(10 * Math.random());
  let obj = { style: tmp.row, children: items };
  const obj2 = { style: tmp.placeholderAvatar };
  const sum1 = Math.floor(50 * Math.random()) + 10;
  items = [closure_3(View, obj2), ];
  const obj3 = { style: tmp.rowInner, children: items2 };
  const obj4 = { style: items1 };
  items1 = [tmp.placeholderText, { width: "" + sum1 + "%" }];
  items2 = [, ];
  ({ width: "" + sum1 + "%" });
  items2[0] = closure_3(View, obj4);
  const array = new Array(sum);
  const fillResult = array.fill(undefined);
  items2[1] = fillResult.map((item, index) => {
    let items;
    const obj = { style: items };
    items = [, , ];
    ({ placeholderText: arr[0], placeholderBody: arr[1] } = closure_0);
    items[2] = { width: "" + getChatPlaceholderRowWidthDefault(closure_1 + index) + "%" };
    ({ width: "" + getChatPlaceholderRowWidthDefault(closure_1 + index) + "%" });
    return _false(View, obj, index);
  });
  items[1] = closure_4(View, obj3);
  return closure_4(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryPlaceholderRow.tsx");

export default memoResult;
