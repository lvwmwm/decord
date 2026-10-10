// Module ID: 11432
// Function ID: 11433
// Name: ConjureRemovedItems
// Dependencies: [19, 17, 21, 5092, 587, 1126, 8766, 558, 576, 8233, 11433, 8201, 5377, 5088, 4832, 6177, 3849, 6264, 6176, 2]
// Exports: formatWithAppTag

// Module 11432 (ConjureRemovedItems)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import react_native from "react-native" /* 4832 */;
import Text_Text from "Text/Text" /* 5088 */;
import TableCheckboxRow2 from "TableCheckboxRow" /* 6176 */;
import FormCheckbox from "FormCheckbox" /* 6177 */;
import TableRowGroup2 from "TableRowGroup" /* 6264 */;
import FolderIcon from "FolderIcon" /* 8201 */;
import AppsIcon from "AppsIcon" /* 8233 */;
import BotTagDefault from "BotTag" /* 8766 */;
import RobotIcon from "RobotIcon" /* 11433 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
const Stack_Stack = tmp(5377);
({ Pressable: closure_4, View: hasOwnProperty } = react_native2);
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { box: obj2, boxDimmed: { opacity: 0.5 }, optionalLabel: { flex: 1 } };
obj2 = { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ItemIcon(kind) {
  const obj = react2;
  const cResult = obj.c(3);
  kind = kind.kind;
  if ("channel" === kind) {
    let first;
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = metroRequire(AppsIcon.AppsIcon, { size: "sm", color: "text-subtle" });
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
      const tmp11 = metroRequire(RobotIcon.RobotIcon, { size: "sm", color: "text-subtle" });
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
      const tmp7 = metroRequire(FolderIcon.FolderIcon, { size: "sm", color: "text-subtle" });
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
    return metroRequire(AppsIcon.AppsIcon, { size: "sm", color: "text-subtle" });
  } else if ("app" === kind) {
    return metroRequire(RobotIcon.RobotIcon, { size: "sm", color: "text-subtle" });
  } else if ("project" === kind) {
    return metroRequire(FolderIcon.FolderIcon, { size: "sm", color: "text-subtle" });
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ItemsBox(arg0) {
  let children;
  let dimmed;
  let items;
  let items1;
  let obj = react2;
  const cResult = obj.c(12);
  ({ items, dimmed, children } = arg0);
  const tmp4 = undefined !== dimmed && dimmed;
  const tmp5 = closure_8();
  let boxDimmed = null;
  if (tmp4) {
    boxDimmed = tmp5.boxDimmed;
  }
  if (cResult[0] === tmp5.box) {
    let tmp7;
    let tmp8;
    if (cResult[1] === boxDimmed) {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== items) {
      let tmp10;
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(kind) {
          let items;
          const obj = { direction: "horizontal", spacing: 8, align: "center", children: items };
          const obj2 = { kind: kind.kind };
          const Stack = Stack_Stack.Stack;
          items = [closure_1_6(closure_1_9, obj2), ];
          const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: kind.label };
          items[1] = closure_1_6(Text_Text.Text, obj3);
          return closure_1_7(Stack, obj, kind.key);
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
    if (cResult[6] === children) {
      let tmp12;
      if (cResult[7] === tmp8) {
        tmp12 = cResult[8];
      }
      if (cResult[9] === tmp7) {
        let tmp15;
        if (cResult[10] === tmp12) {
          tmp15 = cResult[11];
        }
        return tmp15;
      }
      let obj2 = { style: tmp7, children: tmp12 };
      const tmp18 = metroRequire(hasOwnProperty, obj2);
      cResult[9] = tmp7;
      cResult[10] = tmp12;
      cResult[11] = tmp18;
      tmp15 = tmp18;
    }
    let obj3 = { spacing: 8, children: items1 };
    items1 = [tmp8, children];
    const tmp14 = metroImportDefault(Stack_Stack.Stack, obj3);
    cResult[6] = children;
    cResult[7] = tmp8;
    cResult[8] = tmp14;
    tmp12 = tmp14;
  }
  const items2 = [tmp5.box, boxDimmed];
  cResult[0] = tmp5.box;
  cResult[1] = boxDimmed;
  cResult[2] = items2;
  tmp7 = items2;
}) : (function ItemsBox(children) {
  let Stack;
  let dimmed;
  let items;
  let items2;
  let obj2;
  ({ items, dimmed } = children);
  if (dimmed === undefined) {
    dimmed = false;
  }
  children = children.children;
  const tmp = closure_8();
  const items1 = [tmp.box, ];
  let boxDimmed = null;
  const tmp2 = metroRequire;
  const tmp3 = hasOwnProperty;
  if (dimmed) {
    boxDimmed = tmp.boxDimmed;
  }
  let obj = { style: items1, children: metroImportDefault(Stack, obj2) };
  items1[1] = boxDimmed;
  obj2 = { spacing: 8, children: items2 };
  Stack = Stack_Stack.Stack;
  items2 = [
    items.map((kind) => {
      let items;
      const obj = { direction: "horizontal", spacing: 8, align: "center", children: items };
      const obj2 = { kind: kind.kind };
      const Stack = Stack_Stack.Stack;
      items = [closure_1_6(closure_1_9, obj2), ];
      const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: kind.label };
      items[1] = closure_1_6(Text_Text.Text, obj3);
      return closure_1_7(Stack, obj, kind.key);
    }),
    children
  ];
  return tmp2(tmp3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function OptionalItemRow(onChange) {
  let accessibilityRole;
  let accessibilityState;
  let checked;
  let item;
  let items;
  const obj = react2;
  const cResult = obj.c(25);
  ({ item, checked } = onChange);
  onChange = onChange.onChange;
  const disabled = onChange.disabled;
  const tmp4 = closure_8();
  if (cResult[0] === checked) {
    let tmp5;
    if (cResult[1] === disabled) {
      tmp5 = cResult[2];
    }
    const tmpResult = react_native;
    const checkboxA11yNative = tmpResult.useCheckboxA11yNative(tmp5);
    ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
    let boxDimmed = null;
    if (disabled) {
      boxDimmed = tmp4.boxDimmed;
    }
    if (cResult[3] === checked) {
      let tmp8;
      let tmp9;
      if (cResult[4] === onChange) {
        tmp8 = cResult[5];
      }
      if (cResult[6] !== item.kind) {
        const obj2 = { kind: item.kind };
        const tmp12 = metroRequire(closure_9, obj2);
        cResult[6] = item.kind;
        cResult[7] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[7];
      }
      if (cResult[8] === item.label) {
        let tmp13;
        let tmp16;
        if (cResult[9] === tmp4.optionalLabel) {
          tmp13 = cResult[10];
        }
        if (cResult[11] !== checked) {
          const obj3 = { checked };
          const tmp18 = metroRequire(FormCheckbox.FormCheckbox, obj3);
          cResult[11] = checked;
          cResult[12] = tmp18;
          tmp16 = tmp18;
        } else {
          tmp16 = cResult[12];
        }
        if (cResult[13] === tmp9) {
          if (cResult[14] === tmp13) {
            let tmp19;
            if (cResult[15] === tmp16) {
              tmp19 = cResult[16];
            }
            if (cResult[17] === accessibilityRole) {
              if (cResult[18] === accessibilityState) {
                if (cResult[19] === disabled) {
                  if (cResult[20] === item.label) {
                    if (cResult[21] === boxDimmed) {
                      if (cResult[22] === tmp8) {
                        let tmp22;
                        if (cResult[23] === tmp19) {
                          tmp22 = cResult[24];
                        }
                        return tmp22;
                      }
                    }
                  }
                }
              }
            }
            const obj4 = { accessibilityRole, accessibilityState, accessibilityLabel: item.label, disabled, style: boxDimmed, onPress: tmp8, children: tmp19 };
            const tmp25 = metroRequire(React3, obj4);
            cResult[17] = accessibilityRole;
            cResult[18] = accessibilityState;
            cResult[19] = disabled;
            cResult[20] = item.label;
            cResult[21] = boxDimmed;
            cResult[22] = tmp8;
            cResult[23] = tmp19;
            cResult[24] = tmp25;
            tmp22 = tmp25;
          }
        }
        const obj5 = { direction: "horizontal", spacing: 8, align: "center", children: items };
        items = [tmp9, tmp13, tmp16];
        const tmp21 = metroImportDefault(Stack_Stack.Stack, obj5);
        cResult[13] = tmp9;
        cResult[14] = tmp13;
        cResult[15] = tmp16;
        cResult[16] = tmp21;
        tmp19 = tmp21;
      }
      const obj6 = { variant: "text-sm/medium", color: "text-subtle", style: tmp4.optionalLabel, children: item.label };
      const tmp15 = metroRequire(Text_Text.Text, obj6);
      cResult[8] = item.label;
      cResult[9] = tmp4.optionalLabel;
      cResult[10] = tmp15;
      tmp13 = tmp15;
    }
    const fn = function y() {
      return onChange(!checked);
    };
    cResult[3] = checked;
    cResult[4] = onChange;
    cResult[5] = fn;
    tmp8 = fn;
  }
  const obj7 = { checked, disabled };
  cResult[0] = checked;
  cResult[1] = disabled;
  cResult[2] = obj7;
  tmp5 = obj7;
}) : (function OptionalItemRow(arg0) {
  let Stack;
  let boxDimmed;
  let checked;
  let closure_129_1;
  let disabled;
  let item;
  let items;
  let obj3;
  ({ item, checked } = arg0);
  ({ onChange: closure_129_1, disabled } = arg0);
  const tmp = closure_8();
  const obj = react_native;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked, disabled });
  const obj2 = {
    accessibilityRole: checkboxA11yNative.accessibilityRole,
    accessibilityState: checkboxA11yNative.accessibilityState,
    accessibilityLabel: item.label,
    disabled,
    style: boxDimmed,
    onPress() {
      return closure_1_1(!checked);
    },
    children: metroImportDefault(Stack, obj3)
  };
  boxDimmed = null;
  const tmp6 = React3;
  if (disabled) {
    boxDimmed = tmp.boxDimmed;
  }
  obj3 = { direction: "horizontal", spacing: 8, align: "center", children: items };
  const obj4 = { kind: item.kind };
  Stack = tmp2(5377).Stack;
  items = [metroRequire(closure_9, obj4), , ];
  const obj5 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.optionalLabel, children: item.label };
  items[1] = metroRequire(Text_Text.Text, obj5);
  items[2] = metroRequire(FormCheckbox.FormCheckbox, { checked });
  return metroRequire(tmp6, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRemovedItems(arg0) {
  let first;
  let intl;
  let items;
  let items1;
  let optionalItem;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(6);
  ({ items, optionalItem } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-md/semibold", color: "text-strong", children: intl.string(_modDef3849["+E2PqP"]) };
    const Text = tmp(5088).Text;
    intl = tmp(1126).intl;
    const tmp7 = metroRequire(Text, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== optionalItem) {
    let tmp9 = null;
    if (null != optionalItem) {
      const obj3 = {};
      const merged = Object.assign(optionalItem);
      tmp9 = metroRequire(closure_11, obj3);
    }
    cResult[1] = optionalItem;
    cResult[2] = tmp9;
    tmp8 = tmp9;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === items) {
    let tmp15;
    if (cResult[4] === tmp8) {
      tmp15 = cResult[5];
    }
    return tmp15;
  }
  const obj4 = { spacing: 8, children: items1 };
  items1 = [first, ];
  const Stack = tmp(5377).Stack;
  items1[1] = metroRequire(closure_10, { items, children: tmp8 });
  const tmp16 = metroImportDefault(Stack, obj4);
  cResult[3] = items;
  cResult[4] = tmp8;
  cResult[5] = tmp16;
  tmp15 = tmp16;
}) : (function ConjureRemovedItems(optionalItem) {
  let intl;
  let tmp2Result;
  optionalItem = optionalItem.optionalItem;
  const items = optionalItem.items;
  const Stack = Stack_Stack.Stack;
  const obj = { variant: "text-md/semibold", color: "text-strong", children: intl.string(_modDef3849["+E2PqP"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  const items1 = [metroRequire(Text, obj), ];
  const obj2 = { items, children: tmp2Result };
  tmp2Result = null;
  const tmp = metroImportDefault;
  const tmp3 = closure_10;
  if (null != optionalItem) {
    const obj3 = {};
    const merged = Object.assign(optionalItem);
    tmp2Result = tmp2(closure_11, obj3);
  }
  const obj4 = { spacing: 8, children: items1 };
  items1[1] = metroRequire(tmp3, obj2);
  return tmp(Stack, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRemoveEverythingField(arg0) {
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
    const stringResult = intl.string(_modDef3849.gKA9tU);
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
      const tmp16 = metroImportDefault(Stack_Stack.Stack, obj2);
      cResult[7] = tmp7;
      cResult[8] = tmp10;
      cResult[9] = tmp16;
      tmp14 = tmp16;
    }
    const obj3 = { items, dimmed: !checked };
    const tmp13 = metroRequire(closure_10, obj3);
    cResult[4] = items;
    cResult[5] = !checked;
    cResult[6] = tmp13;
    tmp10 = tmp13;
  }
  const obj4 = { hasIcons: false, children: metroRequire(TableCheckboxRow2.TableCheckboxRow, { label: first, checked, onPress: onChange }) };
  const TableRowGroup = tmp(6264).TableRowGroup;
  const tmp8 = metroRequire(TableRowGroup, obj4);
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
  const obj2 = { hasIcons: false, children: metroRequire(TableCheckboxRow, obj3) };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  obj3 = { label: intl.string(_modDef3849.gKA9tU), checked, onPress: onChange };
  TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
  intl = intl2.intl;
  items1 = [metroRequire(TableRowGroup, obj2), ];
  const obj4 = { items, dimmed: !checked };
  items1[1] = metroRequire(closure_10, obj4);
  return metroImportDefault(Stack, obj);
});
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureRemovedItems.tsx");

export default tmp4;
export const formatWithAppTag = function formatWithAppTag(HmNT_r, targetAppName) {
  let Fragment;
  let items;
  let obj2;
  const intl = intl2.intl;
  const obj = { app: metroImportDefault(Fragment, obj2, "app") };
  obj2 = { children: items };
  items = [targetAppName, " ", ];
  const format = intl.format;
  Fragment = react.Fragment;
  items[2] = metroRequire(BotTagDefault, {});
  return format(HmNT_r, obj);
};
export const ConjureRemoveEverythingField = tmp5;
