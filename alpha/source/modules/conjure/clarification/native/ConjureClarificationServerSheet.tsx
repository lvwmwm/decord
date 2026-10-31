// Module ID: 12752
// Function ID: 12753
// Name: ConjureClarificationServerSheet
// Dependencies: [32, 19, 17, 21, 5014, 575, 7366, 7321, 7218, 1113, 3868, 5624, 7060, 6975, 6957, 5258, 2]
// Exports: default

// Module 12752 (ConjureClarificationServerSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let name;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, empty: obj3 };
obj2 = { paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationServerSheet.tsx");

export default function ConjureClarificationServerSheet(onPick) {
  let Text;
  let c3;
  let guilds;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj5;
  let str;
  let tmp3;
  let tmp8Result;
  ({ sheetKey: require, guilds } = onPick);
  onPick = onPick.onPick;
  _slicedToArray = undefined;
  const title = onPick.title;
  let tmp = closure_8();
  [str, tmp3] = _slicedToArray(react.useState(""), 2);
  const tmp2 = _slicedToArray(react.useState(""), 2);
  const trimmed = str.trim();
  let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  _slicedToArray = toLocaleLowerCaseResult;
  const items = [guilds, toLocaleLowerCaseResult];
  const memo = react.useMemo(() => {
    let found;
    if ("" === c3) {
      found = guilds;
    } else {
      found = guilds.filter((name) => {
        name = name.name;
        const toLocaleLowerCaseResult = name.toLocaleLowerCase();
        return toLocaleLowerCaseResult.includes(closure_1_3);
      });
    }
    return found;
  }, items);
  let obj = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: closure_6(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title }), children: items1 };
  const ActionSheet = require("ActionSheet").ActionSheet;
  let obj2 = { size: "md", round: true, grow: false, accessibilityLabel: intl.string(guilds(onPick[10]).gnsPOt), placeholder: intl2.string(guilds(onPick[10]).gnsPOt), onChange: tmp3 };
  const SearchBar = require("SearchBar").SearchBar;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  items1 = [closure_6(SearchBar, obj2), ];
  const obj3 = { style: tmp.list, children: tmp8Result };
  const tmp5 = closure_7;
  if (0 === memo.length) {
    const obj4 = { style: tmp.empty, children: closure_6(Text, obj5) };
    obj5 = { variant: "text-md/normal", color: "text-muted", children: intl3.string(require("intl").t.V6nAfF) };
    Text = tmp6(tmp7[11]).Text;
    intl3 = tmp6(tmp7[9]).intl;
    tmp8Result = tmp8(tmp9, obj4);
  } else {
    const obj6 = {
      hasIcons: true,
      children: memo.map((guild) => {
          let obj2;
          let tmp;
          require = guild;
          let obj = {
            label: guild.name,
            icon: closure_1_6(tmp, obj2),
            onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(require);
              onPick(guild);
            }
          };
          const TableRow = require("TableRow").TableRow;
          obj2 = { guild, size: require("GuildIcon").GuildIconSizes.SMALL_32 };
          tmp = guilds(onPick[14]);
          return closure_1_6(TableRow, obj, guild.id);
        })
    };
    const TableRowGroup = tmp6(tmp7[12]).TableRowGroup;
    tmp8Result = tmp8(TableRowGroup, obj6);
  }
  items1[1] = closure_6(View, obj3);
  return tmp5(ActionSheet, obj);
};
