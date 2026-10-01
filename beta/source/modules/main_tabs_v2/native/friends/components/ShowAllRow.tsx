// Module ID: 16587
// Function ID: 16588
// Name: ShowAllRow
// Dependencies: [19, 17, 21, 4836, 576, 5917, 13996, 1177, 4832, 1115, 2]
// Exports: default

// Module 16587 (ShowAllRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import TableRow2 from "TableRow" /* 5917 */;
import AvatarDuoPile2 from "AvatarDuoPile" /* 13996 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let getAvatarSource;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { labelContainer: { flexDirection: "row", alignItems: "center" }, showAllText: obj2 };
obj2 = { marginLeft: nativeDefault.space.PX_12 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ShowAllRow.tsx");

export default function ShowAllRow(users) {
  let count;
  let intl;
  let items;
  let obj2;
  let onPress;
  let substr;
  users = users.users;
  ({ onPress, count } = users);
  const tmp = closure_5();
  let obj = { onPress, end: true, height: "100%", label: React3(View, obj2), trailing: _false(TableRow2.TableRow.Arrow, {}) };
  obj2 = { style: tmp.labelContainer, children: items };
  const TableRow = TableRow2.TableRow;
  const obj3 = {
    size: native.AvatarSizes.XSMALL_20,
    "aria-label": "",
    children: substr.map((getAvatarSource, index) => {
      const obj = { source: getAvatarSource(null, false, native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL]), size: native.AvatarSizes.XSMALL_20 };
      const Avatar = native.Avatar;
      getAvatarSource = getAvatarSource.getAvatarSource;
      return closure_1_3(Avatar, obj, index);
    })
  };
  const AvatarDuoPile = AvatarDuoPile2.AvatarDuoPile;
  substr = users.slice(0, 2);
  items = [_false(AvatarDuoPile, obj3), ];
  const obj4 = { style: tmp.showAllText, variant: "text-md/semibold", color: "text-brand", children: intl.format(intl2.t.NrzztX, { count }) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[1] = _false(Text, obj4);
  return _false(TableRow, obj);
};
