// Module ID: 12473
// Function ID: 12474
// Name: ConjureClarificationServerSheet
// Dependencies: [32, 19, 17, 21, 4972, 587, 558, 576, 7250, 7147, 1125, 3831, 5235, 6989, 6905, 6885, 5211, 7300, 2]

// Module 12473 (ConjureClarificationServerSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, name;

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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureClarificationServerSheet(sheetKey) {
  let Text;
  let closure_2;
  let guilds;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj7;
  let onPick;
  let str;
  let title;
  let tmp6;
  let tmp7;
  let tmp = sheetKey;
  let obj = sheetKey(576);
  const cResult = obj.c(19);
  sheetKey = sheetKey.sheetKey;
  ({ title, guilds, onPick } = sheetKey);
  const tmp4 = closure_8();
  [str, tmp6] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  if (cResult[0] !== str) {
    const trimmed = str.trim();
    let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
    cResult[0] = str;
    cResult[1] = toLocaleLowerCaseResult;
    tmp7 = toLocaleLowerCaseResult;
  } else {
    tmp7 = cResult[1];
  }
  dependencyMap = tmp7;
  if (cResult[2] === guilds) {
    let arr;
    let tmp10;
    let tmp14;
    let tmp20;
    if (cResult[3] === tmp7) {
      arr = cResult[4];
    }
    if (cResult[5] !== title) {
      let obj2 = { title };
      const tmp12 = closure_6(tmp(7250).BottomSheetTitleHeader, obj2);
      cResult[5] = title;
      cResult[6] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { size: "md", round: true, grow: false, accessibilityLabel: intl.string(onPick(3831).gnsPOt), placeholder: intl2.string(onPick(3831).gnsPOt), onChange: tmp6 };
      const SearchBar = tmp(7147).SearchBar;
      intl = tmp(1125).intl;
      intl2 = tmp(1125).intl;
      const tmp17 = closure_6(SearchBar, obj3);
      cResult[7] = tmp17;
      tmp14 = tmp17;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] === onPick) {
      if (cResult[9] === sheetKey) {
        if (cResult[10] === arr) {
          let tmp18;
          if (cResult[11] === tmp4.empty) {
            tmp18 = cResult[12];
          }
          if (cResult[13] === tmp4.list) {
            let tmp23;
            if (cResult[14] === tmp18) {
              tmp23 = cResult[15];
            }
            if (cResult[16] === tmp10) {
              let tmp27;
              if (cResult[17] === tmp23) {
                tmp27 = cResult[18];
              }
              return tmp27;
            }
            const obj4 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: tmp10, children: items };
            items = [tmp14, tmp23];
            const tmp29 = closure_7(tmp(7300).ActionSheet, obj4);
            cResult[16] = tmp10;
            cResult[17] = tmp23;
            cResult[18] = tmp29;
            tmp27 = tmp29;
          }
          const obj5 = { style: tmp4.list, children: tmp18 };
          const tmp26 = closure_6(View, obj5);
          cResult[13] = tmp4.list;
          cResult[14] = tmp18;
          cResult[15] = tmp26;
          tmp23 = tmp26;
        }
      }
    }
    if (0 === arr.length) {
      const obj6 = { style: tmp4.empty, children: closure_6(Text, obj7) };
      obj7 = { variant: "text-md/normal", color: "text-muted", children: intl3.string(tmp(1125).t.V6nAfF) };
      Text = tmp(5235).Text;
      intl3 = tmp(1125).intl;
      tmp20 = closure_6(View, obj6);
    } else {
      const obj8 = {
        hasIcons: true,
        children: arr.map((guild) => {
              let obj2;
              let tmp;
              let closure_0 = guild;
              let obj = {
                label: guild.name,
                icon: closure_1_6(tmp, obj2),
                onPress() {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet(sheetKey);
                  onPick(guild);
                }
              };
              const TableRow = sheetKey(closure_2[14]).TableRow;
              obj2 = { guild, size: sheetKey(closure_2[15]).GuildIconSizes.SMALL_32 };
              tmp = onPick(closure_2[15]);
              return closure_1_6(TableRow, obj, guild.id);
            })
      };
      const TableRowGroup = tmp(6989).TableRowGroup;
      tmp20 = closure_6(TableRowGroup, obj8);
    }
    cResult[8] = onPick;
    cResult[9] = sheetKey;
    cResult[10] = arr;
    cResult[11] = tmp4.empty;
    cResult[12] = tmp20;
    tmp18 = tmp20;
  }
  let found = guilds;
  if ("" !== tmp7) {
    found = guilds.filter((name) => {
      name = name.name;
      const toLocaleLowerCaseResult = name.toLocaleLowerCase();
      return toLocaleLowerCaseResult.includes(closure_2);
    });
  }
  cResult[2] = guilds;
  cResult[3] = tmp7;
  cResult[4] = found;
  arr = found;
}) : (function ConjureClarificationServerSheet(onPick) {
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
  let obj2 = { size: "md", round: true, grow: false, accessibilityLabel: intl.string(guilds(onPick[11]).gnsPOt), placeholder: intl2.string(guilds(onPick[11]).gnsPOt), onChange: tmp3 };
  const SearchBar = require("SearchBar").SearchBar;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  items1 = [closure_6(SearchBar, obj2), ];
  const obj3 = { style: tmp.list, children: tmp8Result };
  const tmp5 = closure_7;
  if (0 === memo.length) {
    const obj4 = { style: tmp.empty, children: closure_6(Text, obj5) };
    obj5 = { variant: "text-md/normal", color: "text-muted", children: intl3.string(require("intl").t.V6nAfF) };
    Text = tmp6(tmp7[12]).Text;
    intl3 = tmp6(tmp7[10]).intl;
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
          tmp = guilds(onPick[15]);
          return closure_1_6(TableRow, obj, guild.id);
        })
    };
    const TableRowGroup = tmp6(tmp7[13]).TableRowGroup;
    tmp8Result = tmp8(TableRowGroup, obj6);
  }
  items1[1] = closure_6(View, obj3);
  return tmp5(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationServerSheet.tsx");

export default tmp4;
