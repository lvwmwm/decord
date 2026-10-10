// Module ID: 18277
// Function ID: 18278
// Name: ExemptionActionSheet
// Dependencies: [32, 19, 17, 21, 5092, 587, 558, 576, 6737, 6094, 5056, 6176, 1126, 8562, 6838, 6738, 6743, 6839, 2]

// Module 18277 (ExemptionActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import fuzzysearchDefault from "fuzzysearch" /* 6094 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExemptionActionSheet(getId) {
  let getSearchText;
  let initialSelected;
  let items;
  let listId;
  let searchPlaceholder;
  let title;
  let tmp11;
  let tmp4;
  let obj = initialSelected(getSearchText[7]);
  const cResult = obj.c(39);
  ({ title, searchPlaceholder, listId, items, initialSelected } = getId);
  getId = getId.getId;
  getSearchText = getId.getSearchText;
  const renderLabel = getId.renderLabel;
  const renderIcon = getId.renderIcon;
  const onSave = getId.onSave;
  let tmp2 = closure_8();
  let tmp3 = getId(getSearchText[8])();
  if (cResult[0] !== initialSelected) {
    class S {
      constructor() {
        set = new Set(initialSelected);
        return set;
      }
    }
    cResult[0] = initialSelected;
    cResult[1] = S;
    tmp4 = S;
  } else {
    class S {
      constructor() {
        set = new Set(initialSelected);
        return set;
      }
    }
  }
  const tmp5 = renderLabel(renderIcon.useState(tmp4), 2);
  const first = tmp5[0];
  let closure_7 = tmp5[1];
  let str = renderLabel(renderIcon.useState(""), 2)[0];
  renderLabel(renderIcon.useState(""), 2);
  if ("" !== str) {
    class S {
      constructor() {
        set = new Set(initialSelected);
        return set;
      }
    }
    closure_8 = str.toLowerCase();
    const found = items.filter((item) => {
      const tmp = fuzzysearchDefault;
      const str = getSearchText(item);
      return tmp(closure_8, str.toLowerCase());
    });
    cResult[2] = getSearchText;
    cResult[3] = items;
    cResult[4] = str;
    cResult[5] = found;
  }
  items = tmp8;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor(arg0) {
        closure_0 = getId;
        tmp = closure_7((items) => {
          set = new Set(items);
          const tmp = closure_0;
          if (!set.delete(closure_0)) {
            set.add(tmp);
          }
          return set;
        });
        return;
      }
    }
    cResult[6] = D;
    tmp11 = D;
  } else {
    class D {
      constructor(arg0) {
        closure_0 = getId;
        tmp = closure_7((items) => {
          set = new Set(items);
          const tmp = closure_0;
          if (!set.delete(closure_0)) {
            set.add(tmp);
          }
          return set;
        });
        return;
      }
    }
  }
  D = tmp11;
  if (cResult[7] === onSave) {
    class D {
      constructor(arg0) {
        closure_0 = getId;
        tmp = closure_7((items) => {
          set = new Set(items);
          const tmp = closure_0;
          if (!set.delete(closure_0)) {
            set.add(tmp);
          }
          return set;
        });
        return;
      }
    }
    if (cResult[10] === getId) {
      class D {
        constructor(arg0) {
          closure_0 = getId;
          tmp = closure_7((items) => {
            set = new Set(items);
            const tmp = closure_0;
            if (!set.delete(closure_0)) {
              set.add(tmp);
            }
            return set;
          });
          return;
        }
      }
    }
    class V {
      constructor(arg0, arg1) {
        tmp = closure_9[arg1];
        tmp2 = getId(tmp);
        closure_0 = tmp2;
        tmp3 = closure_6;
        obj = { start: 0 === arg1, end: arg1 === closure_9.length - 1, icon: null, label: null, labelLineClamp: 1, checked: null, onPress: null };
        tmp4 = undefined;
        TableCheckboxRow = initialSelected(getSearchText[11]).TableCheckboxRow;
        if (renderIcon != null) {
          tmp4 = renderIcon(tmp);
        }
        obj.icon = tmp4;
        obj.label = renderLabel(tmp);
        obj.checked = closure_6.has(tmp2);
        obj.onPress = function onPress() {
          return D(closure_0);
        };
        return tmp3(TableCheckboxRow, obj, tmp2);
      }
    }
    cResult[10] = getId;
    cResult[11] = renderIcon;
    cResult[12] = renderLabel;
    cResult[13] = first;
    cResult[14] = items;
    cResult[15] = V;
  }
  function handleDone() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    onSave(first);
  }
  cResult[7] = onSave;
  cResult[8] = first;
  cResult[9] = handleDone;
}) : (function ExemptionActionSheet(getSearchText) {
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
    const TableCheckboxRow = items(getId[11]).TableCheckboxRow;
    const tmp3 = onSave;
    if (renderIcon != null) {
      tmp4 = renderIcon(tmp);
    }
    return tmp3(TableCheckboxRow, obj, tmp2);
  }, items2);
  let obj = { scrollable: true, startExpanded: true, header: onSave(BottomSheetTitleHeader, obj2), children: items3 };
  BottomSheet = items(getId[17]).BottomSheet;
  obj2 = { title, trailing: onSave(ActionSheetHeaderPressableText, obj3) };
  BottomSheetTitleHeader = items(getId[14]).BottomSheetTitleHeader;
  obj3 = {
    label: intl.string(items(getId[12]).t.i4jeWR),
    onPress: function handleDone() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      onSave(first);
    }
  };
  ActionSheetHeaderPressableText = items(getId[13]).ActionSheetHeaderPressableText;
  intl = items(getId[12]).intl;
  items3 = [, ];
  const obj4 = { style: tmp.search, children: onSave(items(getId[15]).SearchField, { size: "md", onChange: tmp7, placeholder: searchPlaceholder }) };
  items3[0] = onSave(renderIcon, obj4);
  const obj5 = { inActionSheet: true, keyboardShouldPersistTaps: "handled", style: tmp.list, listId, estimatedListSize: "windowSize", itemSize: tmp2, sections: items4, renderItem: callback1 };
  items4 = [memo.length];
  items3[1] = onSave(require("FastestList"), obj5);
  return first(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/guild_automod/native/components/ExemptionActionSheet.tsx");

export default tmp4;
