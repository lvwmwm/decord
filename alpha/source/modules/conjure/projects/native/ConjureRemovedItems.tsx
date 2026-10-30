// Module ID: 12523
// Function ID: 12524
// Name: ConjureRemovedItems
// Dependencies: [19, 17, 21, 5009, 575, 1114, 9183, 8670, 12408, 8638, 6022, 5619, 5077, 6983, 3865, 7054, 6968, 2]
// Exports: ConjureRemoveEverythingField, default, formatWithAppTag

// Module 12523 (ConjureRemovedItems)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import react_native from "react-native" /* 5077 */;
import Text_Text from "Text/Text" /* 5619 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import TableCheckboxRow2 from "TableCheckboxRow" /* 6968 */;
import FormCheckbox from "FormCheckbox" /* 6983 */;
import TableRowGroup2 from "TableRowGroup" /* 7054 */;
import FolderIcon from "FolderIcon" /* 8638 */;
import AppsIcon from "AppsIcon" /* 8670 */;
import BotTagDefault from "BotTag" /* 9183 */;
import RobotIcon from "RobotIcon" /* 12408 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
function ItemIcon(kind) {
  kind = kind.kind;
  if ("channel" === kind) {
    return metroRequire(AppsIcon.AppsIcon, { size: "sm", color: "text-subtle" });
  } else if ("app" === kind) {
    return metroRequire(RobotIcon.RobotIcon, { size: "sm", color: "text-subtle" });
  } else if ("project" === kind) {
    return metroRequire(FolderIcon.FolderIcon, { size: "sm", color: "text-subtle" });
  }
}
function ItemsBox(children) {
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
      items = [closure_1_6(ItemIcon, obj2), ];
      const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: kind.label };
      items[1] = closure_1_6(Text_Text.Text, obj3);
      return closure_1_7(Stack, obj, kind.key);
    }),
    children
  ];
  return tmp2(tmp3, obj);
}
function OptionalItemRow(arg0) {
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
  Stack = tmp2(6022).Stack;
  items = [metroRequire(ItemIcon, obj4), , ];
  const obj5 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.optionalLabel, children: item.label };
  items[1] = metroRequire(Text_Text.Text, obj5);
  items[2] = metroRequire(FormCheckbox.FormCheckbox, { checked });
  return metroRequire(tmp6, obj2);
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native2);
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { box: obj2, boxDimmed: { opacity: 0.5 }, optionalLabel: { flex: 1 } };
obj2 = { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureRemovedItems.tsx");

export default function ConjureRemovedItems(optionalItem) {
  let intl;
  let tmp2Result;
  optionalItem = optionalItem.optionalItem;
  const items = optionalItem.items;
  const Stack = Stack_Stack.Stack;
  const obj = { variant: "text-md/semibold", color: "text-strong", children: intl.string(_modDef3865["+E2PqP"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  const items1 = [metroRequire(Text, obj), ];
  const obj2 = { items, children: tmp2Result };
  tmp2Result = null;
  const tmp = metroImportDefault;
  const tmp3 = ItemsBox;
  if (null != optionalItem) {
    const obj3 = {};
    const merged = Object.assign(optionalItem);
    tmp2Result = tmp2(OptionalItemRow, obj3);
  }
  const obj4 = { spacing: 8, children: items1 };
  items1[1] = metroRequire(tmp3, obj2);
  return tmp(Stack, obj4);
};
export function formatWithAppTag(HmNT_r, targetAppName) {
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
}
export function ConjureRemoveEverythingField(checked) {
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
  obj3 = { label: intl.string(_modDef3865.gKA9tU), checked, onPress: onChange };
  TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
  intl = intl2.intl;
  items1 = [metroRequire(TableRowGroup, obj2), ];
  const obj4 = { items, dimmed: !checked };
  items1[1] = metroRequire(ItemsBox, obj4);
  return metroImportDefault(Stack, obj);
}
