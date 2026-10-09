// Module ID: 11387
// Function ID: 11388
// Name: ConjureRemovedItems
// Dependencies: [19, 17, 21, 5091, 587, 1126, 8750, 558, 576, 8217, 11388, 8185, 5374, 5087, 3827, 6269, 6183, 2]
// Exports: formatWithAppTag

// Module 11387 (ConjureRemovedItems)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import Text_Text from "Text/Text" /* 5087 */;
import TableCheckboxRow2 from "TableCheckboxRow" /* 6183 */;
import TableRowGroup2 from "TableRowGroup" /* 6269 */;
import FolderIcon from "FolderIcon" /* 8185 */;
import AppsIcon from "AppsIcon" /* 8217 */;
import BotTagDefault from "BotTag" /* 8750 */;
import RobotIcon from "RobotIcon" /* 11388 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let tmp;
const Stack_Stack = tmp(5374);
const View = react_native.View;
let Fragment = Fragment_mod;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { box: obj2, boxDimmed: { opacity: 0.5 } };
obj2 = { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ItemIcon(kind) {
  const obj = react2;
  const cResult = obj.c(3);
  kind = kind.kind;
  if ("channel" === kind) {
    let first;
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = hasOwnProperty(AppsIcon.AppsIcon, { size: "sm", color: "text-subtle" });
      cResult[0] = tmp15;
      first = tmp15;
    } else {
      first = cResult[0];
    }
    return first;
  } else if ("app" === kind) {
    let tmp9;
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = hasOwnProperty(RobotIcon.RobotIcon, { size: "sm", color: "text-subtle" });
      cResult[1] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[1];
    }
    return tmp9;
  } else if ("project" === kind) {
    let tmp5;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp7 = hasOwnProperty(FolderIcon.FolderIcon, { size: "sm", color: "text-subtle" });
      cResult[2] = tmp7;
      tmp5 = tmp7;
    } else {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
}) : (function ItemIcon(kind) {
  kind = kind.kind;
  if ("channel" === kind) {
    return hasOwnProperty(AppsIcon.AppsIcon, { size: "sm", color: "text-subtle" });
  } else if ("app" === kind) {
    return hasOwnProperty(RobotIcon.RobotIcon, { size: "sm", color: "text-subtle" });
  } else if ("project" === kind) {
    return hasOwnProperty(FolderIcon.FolderIcon, { size: "sm", color: "text-subtle" });
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ItemsBox(arg0) {
  let dimmed;
  let items;
  let obj = react2;
  const cResult = obj.c(11);
  ({ items, dimmed } = arg0);
  const tmp4 = undefined !== dimmed && dimmed;
  const tmp5 = closure_7();
  let boxDimmed = null;
  if (tmp4) {
    boxDimmed = tmp5.boxDimmed;
  }
  if (cResult[0] === tmp5.box) {
    let tmp7;
    let tmp8;
    let tmp12;
    if (cResult[1] === boxDimmed) {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== items) {
      let tmp10;
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function b(kind) {
          let items;
          const obj = { direction: "horizontal", spacing: 8, align: "center", children: items };
          const obj2 = { kind: kind.kind };
          const Stack = Stack_Stack.Stack;
          items = [closure_1_5(closure_1_8, obj2), ];
          const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: kind.label };
          items[1] = closure_1_5(Text_Text.Text, obj3);
          return closure_1_6(Stack, obj, kind.key);
        };
        cResult[5] = fn;
        tmp10 = fn;
      } else {
        tmp10 = cResult[5];
      }
      const mapped = items.map(tmp10);
      cResult[3] = items;
      cResult[4] = mapped;
      tmp8 = mapped;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[6] !== tmp8) {
      let obj2 = { spacing: 8, children: tmp8 };
      const tmp14 = hasOwnProperty(Stack_Stack.Stack, obj2);
      cResult[6] = tmp8;
      cResult[7] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] === tmp7) {
      let tmp15;
      if (cResult[9] === tmp12) {
        tmp15 = cResult[10];
      }
      return tmp15;
    }
    let obj3 = { style: tmp7, children: tmp12 };
    const tmp18 = hasOwnProperty(View, obj3);
    cResult[8] = tmp7;
    cResult[9] = tmp12;
    cResult[10] = tmp18;
    tmp15 = tmp18;
  }
  const items1 = [tmp5.box, boxDimmed];
  cResult[0] = tmp5.box;
  cResult[1] = boxDimmed;
  cResult[2] = items1;
  tmp7 = items1;
}) : (function ItemsBox(arg0) {
  let Stack;
  let dimmed;
  let items;
  let obj2;
  ({ items, dimmed } = arg0);
  if (dimmed === undefined) {
    dimmed = false;
  }
  const tmp = closure_7();
  const items1 = [tmp.box, ];
  let boxDimmed = null;
  const tmp3 = View;
  if (dimmed) {
    boxDimmed = tmp.boxDimmed;
  }
  let obj = { style: items1, children: hasOwnProperty(Stack, obj2) };
  items1[1] = boxDimmed;
  obj2 = {
    spacing: 8,
    children: items.map((kind) => {
      let items;
      const obj = { direction: "horizontal", spacing: 8, align: "center", children: items };
      const obj2 = { kind: kind.kind };
      const Stack = Stack_Stack.Stack;
      items = [closure_1_5(closure_1_8, obj2), ];
      const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: kind.label };
      items[1] = closure_1_5(Text_Text.Text, obj3);
      return closure_1_6(Stack, obj, kind.key);
    })
  };
  Stack = Stack_Stack.Stack;
  return hasOwnProperty(tmp3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRemovedItems(items) {
  let first;
  let intl;
  let items1;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  items = items.items;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-md/semibold", color: "text-strong", children: intl.string(_modDef3827["+E2PqP"]) };
    const Text = tmp(5087).Text;
    intl = tmp(1126).intl;
    const tmp7 = hasOwnProperty(Text, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== items) {
    const obj3 = { spacing: 8, children: items1 };
    items1 = [first, ];
    const obj4 = { items };
    const Stack = tmp(5374).Stack;
    items1[1] = hasOwnProperty(closure_9, obj4);
    const tmp12 = metroRequire(Stack, obj3);
    cResult[1] = items;
    cResult[2] = tmp12;
    tmp8 = tmp12;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function ConjureRemovedItems(items) {
  let intl;
  let items1;
  items = items.items;
  const obj = { spacing: 8, children: items1 };
  const Stack = Stack_Stack.Stack;
  const obj2 = { variant: "text-md/semibold", color: "text-strong", children: intl.string(_modDef3827["+E2PqP"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1 = [hasOwnProperty(Text, obj2), hasOwnProperty(closure_9, { items })];
  return metroRequire(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRemoveEverythingField(arg0) {
  let checked;
  let first;
  let items;
  let items1;
  let onChange;
  const obj = react2;
  const cResult = obj.c(10);
  ({ checked, onChange, items } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(_modDef3827.gKA9tU);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === checked) {
    let tmp7;
    if (cResult[2] === onChange) {
      tmp7 = cResult[3];
    }
    if (cResult[4] === items) {
      let tmp10;
      if (cResult[5] === !checked) {
        tmp10 = cResult[6];
      }
      if (cResult[7] === tmp7) {
        let tmp14;
        if (cResult[8] === tmp10) {
          tmp14 = cResult[9];
        }
        return tmp14;
      }
      const obj2 = { spacing: 8, children: items1 };
      items1 = [tmp7, tmp10];
      const tmp16 = metroRequire(Stack_Stack.Stack, obj2);
      cResult[7] = tmp7;
      cResult[8] = tmp10;
      cResult[9] = tmp16;
      tmp14 = tmp16;
    }
    const obj3 = { items, dimmed: !checked };
    const tmp13 = hasOwnProperty(closure_9, obj3);
    cResult[4] = items;
    cResult[5] = !checked;
    cResult[6] = tmp13;
    tmp10 = tmp13;
  }
  const obj4 = { hasIcons: false, children: hasOwnProperty(TableCheckboxRow2.TableCheckboxRow, { label: first, checked, onPress: onChange }) };
  const TableRowGroup = tmp(6269).TableRowGroup;
  const tmp8 = hasOwnProperty(TableRowGroup, obj4);
  cResult[1] = checked;
  cResult[2] = onChange;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : (function ConjureRemoveEverythingField(checked) {
  let TableCheckboxRow;
  let intl;
  let items;
  let items1;
  let obj3;
  let onChange;
  checked = checked.checked;
  ({ onChange, items } = checked);
  const obj = { spacing: 8, children: items1 };
  const Stack = Stack_Stack.Stack;
  const obj2 = { hasIcons: false, children: hasOwnProperty(TableCheckboxRow, obj3) };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  obj3 = { label: intl.string(_modDef3827.gKA9tU), checked, onPress: onChange };
  TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
  intl = intl2.intl;
  items1 = [hasOwnProperty(TableRowGroup, obj2), ];
  const obj4 = { items, dimmed: !checked };
  items1[1] = hasOwnProperty(closure_9, obj4);
  return metroRequire(Stack, obj);
});
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureRemovedItems.tsx");

export default tmp3;
export const formatWithAppTag = function formatWithAppTag(_87CtcA, targetAppName) {
  let Fragment;
  let items;
  let obj2;
  const intl = intl2.intl;
  const obj = { app: metroRequire(Fragment, obj2, "app") };
  obj2 = { children: items };
  items = [targetAppName, " ", ];
  const format = intl.format;
  Fragment = react.Fragment;
  items[2] = hasOwnProperty(BotTagDefault, {});
  return format(_87CtcA, obj);
};
export const ConjureRemoveEverythingField = tmp4;
