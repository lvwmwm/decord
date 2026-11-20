// Module ID: 12172
// Function ID: 12173
// Name: ConjureServerPickerSheet
// Dependencies: [32, 19, 17, 21, 4794, 575, 7433, 7395, 7307, 1112, 4091, 5026, 5385, 7227, 5008, 7229, 7202, 2]
// Exports: default

// Module 12172 (ConjureServerPickerSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4794 */;
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
let obj = { scroll: { flex: 1, minHeight: 0 }, list: obj2, empty: obj3 };
obj2 = { paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureServerPickerSheet.tsx");

export default function ConjureServerPickerSheet(selectedGuildId) {
  let Text;
  let c3;
  let guilds;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj5;
  let str;
  let title;
  let tmp4;
  let tmp9Result;
  ({ sheetKey: require, title, guilds } = selectedGuildId);
  selectedGuildId = selectedGuildId.selectedGuildId;
  if (selectedGuildId === undefined) {
    selectedGuildId = null;
  }
  const onPick = selectedGuildId.onPick;
  _slicedToArray = undefined;
  const tmp2 = closure_8();
  [str, tmp4] = _slicedToArray(react.useState(""), 2);
  const tmp3 = _slicedToArray(react.useState(""), 2);
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
  let obj = { scrollable: true, startExpanded: true, keyboardShouldPersistTaps: "handled", header: closure_6(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title }), children: items1 };
  const ActionSheet = require("ActionSheet").ActionSheet;
  let obj2 = { size: "md", round: true, grow: false, accessibilityLabel: intl.string(guilds(onPick[10])["+g5NWE"]), placeholder: intl2.string(guilds(onPick[10])["+g5NWE"]), onChange: tmp4 };
  const SearchBar = require("SearchBar").SearchBar;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  items1 = [closure_6(SearchBar, obj2), ];
  const obj3 = { style: tmp2.scroll, contentContainerStyle: tmp2.list, keyboardShouldPersistTaps: "handled", children: tmp9Result };
  const BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
  const tmp6 = closure_7;
  if (0 === memo.length) {
    const obj4 = { style: tmp2.empty, children: closure_6(Text, obj5) };
    obj5 = { variant: "body-md/normal", color: "text-muted", children: intl3.string(require("intl").t.V6nAfF) };
    Text = tmp7(tmp8[12]).Text;
    intl3 = tmp7(tmp8[9]).intl;
    tmp9Result = tmp9(View, obj4);
  } else {
    const TableRadioGroup = tmp7(tmp8[13]).TableRadioGroup;
    const obj6 = {
      hasIcons: true,
      value: selectedGuildId,
      onChange: function handlePick(arg0) {
          require = arg0;
          const found = guilds.find((id) => id.id === closure_0);
          if (null != found) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(require);
            onPick(found);
          }
        },
      accessibilityLabel: title,
      children: memo.map((guild) => {
          let obj2;
          let tmp;
          const obj = { value: guild.id, label: guild.name, labelLineClamp: 1, icon: closure_1_6(tmp, obj2) };
          const TableRadioRow = require("TableRadioRow").TableRadioRow;
          obj2 = { guild, size: require("GuildIcon").GuildIconSizes.SMALL_32 };
          tmp = guilds(onPick[16]);
          return closure_1_6(TableRadioRow, obj, guild.id);
        })
    };
    tmp9Result = tmp9(TableRadioGroup, obj6);
  }
  items1[1] = closure_6(BottomSheetScrollView, obj3);
  return tmp6(ActionSheet, obj);
};
