// Module ID: 11464
// Function ID: 11465
// Name: ConjureServerPickerSheet
// Dependencies: [32, 19, 17, 21, 5043, 575, 7546, 7507, 7406, 1112, 4245, 5275, 5634, 7251, 5257, 7253, 7052, 2]
// Exports: default

// Module 11464 (ConjureServerPickerSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1112 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import GuildIcon from "GuildIcon" /* 7052 */;
import TableRadioRow2 from "TableRadioRow" /* 7253 */;
import SearchBar2 from "SearchBar" /* 7406 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7507 */;
import ActionSheet2 from "ActionSheet" /* 7546 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let name;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { scroll: { flex: 1, minHeight: 0 }, list: obj2, empty: obj3 };
obj2 = { paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let closure_8 = createStyles(obj);
const other = "other";
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureServerPickerSheet.tsx");

export default function ConjureServerPickerSheet(selectedGuildId) {
  let Text;
  let c4;
  let guilds;
  let intl;
  let intl2;
  let intl3;
  let items3;
  let items4;
  let obj5;
  let otherOption;
  let str;
  let title;
  let tmp4;
  ({ sheetKey: require, title, guilds } = selectedGuildId);
  selectedGuildId = selectedGuildId.selectedGuildId;
  if (selectedGuildId === undefined) {
    selectedGuildId = null;
  }
  ({ onPick: dependencyMap, otherOption } = selectedGuildId);
  react = undefined;
  const tmp2 = closure_8();
  [str, tmp4] = otherOption(react.useState(""), 2);
  const tmp3 = otherOption(react.useState(""), 2);
  const trimmed = str.trim();
  let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  react = toLocaleLowerCaseResult;
  const items = [guilds, toLocaleLowerCaseResult];
  const memo = react.useMemo(() => {
    let found;
    if ("" === c4) {
      found = guilds;
    } else {
      found = guilds.filter((name) => {
        name = name.name;
        const toLocaleLowerCaseResult = name.toLocaleLowerCase();
        return toLocaleLowerCaseResult.includes(closure_1_4);
      });
    }
    return found;
  }, items);
  let tmp6 = null;
  if (null != otherOption) {
    const label = otherOption.label;
    tmp6 = null;
    const toLocaleLowerCaseResult1 = label.toLocaleLowerCase();
    if (toLocaleLowerCaseResult1.includes(toLocaleLowerCaseResult)) {
      tmp6 = otherOption;
    }
  }
  let obj = { scrollable: true, startExpanded: true, keyboardShouldPersistTaps: "handled", header: closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: null };
  const ActionSheet = ActionSheet2.ActionSheet;
  let obj2 = { size: "md", round: true, grow: false, accessibilityLabel: intl.string(guilds(4245)["+g5NWE"]), placeholder: intl2.string(guilds(4245)["+g5NWE"]), onChange: tmp4 };
  const SearchBar = SearchBar2.SearchBar;
  intl = intl4.intl;
  intl2 = intl4.intl;
  const items1 = [closure_6(SearchBar, obj2), ];
  let obj3 = { style: tmp2.scroll, contentContainerStyle: tmp2.list, keyboardShouldPersistTaps: "handled", children: null };
  const tmp7 = closure_7;
  if (0 === memo.length) {
    let tmp10Result;
    if (null == tmp6) {
      const obj4 = { style: tmp2.empty, children: closure_6(Text, obj5) };
      obj5 = { variant: "body-md/normal", color: "text-muted", children: intl3.string(intl4.t.V6nAfF) };
      Text = tmp8(5634).Text;
      intl3 = tmp8(1112).intl;
      tmp10Result = tmp10(View, obj4);
    }
    obj3.children = tmp10Result;
    items1[1] = closure_6(tmp11, obj3);
    obj.children = items1;
    return tmp7(ActionSheet, obj);
  }
  let selected;
  const TableRadioGroup = tmp8(7251).TableRadioGroup;
  if (otherOption != null) {
    selected = otherOption.selected;
  }
  if (true === selected) {
    selectedGuildId = other;
  }
  const obj6 = {
    hasIcons: true,
    value: selectedGuildId,
    onChange: function handlePick(arg0) {
      require = arg0;
      if (arg0 === other) {
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet(require);
        const obj3 = otherOption;
        if (otherOption != null) {
          obj3.onPick();
        }
      } else {
        const found = guilds.find((id) => id.id === closure_0);
        if (null != found) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(require);
          dependencyMap(found);
        }
      }
    },
    accessibilityLabel: title,
    children: items4
  };
  if (null != tmp6) {
    const obj8 = { value: other, label: null, labelLineClamp: 1, icon: null };
    ({ label: obj7.label, icon: obj7.icon } = tmp6);
    const items2 = [tmp10(tmp8(7253).TableRadioRow, obj8, other)];
    items3 = items2;
  } else {
    items3 = [];
  }
  items4 = [
    ...items3,
    ...memo.map((guild) => {
      let obj2;
      let tmp;
      const obj = { value: guild.id, label: guild.name, labelLineClamp: 1, icon: closure_1_6(tmp, obj2) };
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      obj2 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32 };
      tmp = guilds(dependencyMap[16]);
      return closure_1_6(TableRadioRow, obj, guild.id);
    })
  ];
  tmp10Result = tmp10(TableRadioGroup, obj6);
};
