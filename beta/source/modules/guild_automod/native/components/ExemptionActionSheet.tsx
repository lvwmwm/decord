// Module ID: 17339
// Function ID: 17340
// Name: ExemptionActionSheet
// Dependencies: [32, 19, 17, 21, 4836, 576, 6470, 5829, 5916, 6571, 6570, 8996, 1115, 4800, 6471, 6476, 2]
// Exports: default

// Module 17339 (ExemptionActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import fuzzysearchDefault from "fuzzysearch" /* 5829 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, set;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { search: obj2, list: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/ExemptionActionSheet.tsx");

export default function ExemptionActionSheet(getSearchText) {
  let ActionSheetHeaderPressableText;
  let BottomSheetTitleHeader;
  let getId;
  let intl;
  let items3;
  let items4;
  let listId;
  let obj2;
  let obj3;
  let searchPlaceholder;
  let title;
  let items = getSearchText.items;
  ({ initialSelected: importDefault, getId } = getSearchText);
  getSearchText = getSearchText.getSearchText;
  const renderLabel = getSearchText.renderLabel;
  const renderIcon = getSearchText.renderIcon;
  const onSave = getSearchText.onSave;
  closure_8 = undefined;
  ({ title, searchPlaceholder, listId } = getSearchText);
  let tmp = closure_8();
  let tmp2 = require("useScaledRowHeight")();
  let tmp3 = getSearchText(renderLabel.useState(() => {
    set = new Set(importDefault);
    return set;
  }), 2);
  const first = tmp3[0];
  closure_8 = tmp3[1];
  const tmp5 = getSearchText(renderLabel.useState(""), 2);
  const first1 = tmp5[0];
  const items1 = [items, first1, getSearchText];
  const tmp7 = tmp5[1];
  const memo = renderLabel.useMemo(() => {
    let closure_0;
    let str = first1;
    if ("" === first1) {
      return items;
    } else {
      items = str.toLowerCase();
      let tmp = items;
      return items.filter((item) => {
        const tmp = fuzzysearchDefault;
        const str = getSearchText(item);
        return tmp(closure_0, str.toLowerCase());
      });
    }
  }, items1);
  const callback = renderLabel.useCallback((arg0) => {
    let closure_0 = arg0;
    let tmp = closure_8((items) => {
      set = new Set(items);
      const tmp = closure_0;
      if (!set.delete(closure_0)) {
        set.add(tmp);
      }
      return set;
    });
  }, []);
  const items2 = [memo, first, getId, renderIcon, renderLabel, callback];
  const callback1 = renderLabel.useCallback((arg0, arg1) => {
    let tmp4;
    const tmp2 = getId(memo[arg1]);
    let closure_0 = tmp2;
    const obj = {
      start: 0 === arg1,
      end: arg1 === memo.length - 1,
      icon: tmp4,
      label: renderLabel(memo[arg1]),
      labelLineClamp: 1,
      checked: first.has(tmp2),
      onPress() {
        return callback(closure_0);
      }
    };
    tmp4 = undefined;
    const TableCheckboxRow = items(getId[8]).TableCheckboxRow;
    const tmp3 = onSave;
    if (renderIcon != null) {
      tmp4 = renderIcon(tmp);
    }
    return tmp3(TableCheckboxRow, obj, tmp2);
  }, items2);
  let obj = { scrollable: true, startExpanded: true, header: onSave(BottomSheetTitleHeader, obj2), children: items3 };
  BottomSheet = items(getId[9]).BottomSheet;
  obj2 = { title, trailing: onSave(ActionSheetHeaderPressableText, obj3) };
  BottomSheetTitleHeader = items(getId[10]).BottomSheetTitleHeader;
  obj3 = {
    label: intl.string(items(getId[12]).t.i4jeWR),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      onSave(first);
    }
  };
  ActionSheetHeaderPressableText = items(getId[11]).ActionSheetHeaderPressableText;
  intl = items(getId[12]).intl;
  items3 = [, ];
  const obj4 = { style: tmp.search, children: onSave(items(getId[14]).SearchField, { size: "md", onChange: tmp7, placeholder: searchPlaceholder }) };
  items3[0] = onSave(renderIcon, obj4);
  const obj5 = { inActionSheet: true, keyboardShouldPersistTaps: "handled", style: tmp.list, listId, estimatedListSize: "windowSize", itemSize: tmp2, sections: items4, renderItem: callback1 };
  items4 = [memo.length];
  items3[1] = onSave(require("FastestList"), obj5);
  return first(BottomSheet, obj);
};
