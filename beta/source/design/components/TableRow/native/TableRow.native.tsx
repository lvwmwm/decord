// Module ID: 5917
// Function ID: 5918
// Name: TableRow
// Dependencies: [19, 17, 21, 4836, 576, 5918, 4531, 5919, 5914, 5923, 5924, 5926, 5288, 1364, 5927, 4832, 2]

// Module 5917 (TableRow)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useToken from "useToken" /* 4531 */;
import useFontScale from "useFontScale" /* 5288 */;
import TableRowDivider from "TableRowDivider" /* 5914 */;
import react2 from "react" /* 5918 */;
import TableRowIcon from "TableRowIcon" /* 5923 */;
import TableRowArrow from "TableRowArrow" /* 5924 */;
import TableRowTrailingText from "TableRowTrailingText" /* 5926 */;
import DragIcon from "DragIcon" /* 5927 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
class TableRow {
  constructor(arg0) {
    let arrow;
    let disabled;
    let dragHandlePressableProps;
    let draggable;
    let end;
    let height;
    let icon;
    let items;
    let label;
    let labelLineClamp;
    let onPress;
    let start;
    let subLabel;
    let subLabelLineClamp;
    let tmp8;
    let trailing;
    let variant;
    ({ icon, disabled } = arg0);
    ({ label, subLabel, trailing, arrow, onPress } = arg0);
    if (disabled === undefined) {
      disabled = false;
    }
    ({ variant, start, end, labelLineClamp, subLabelLineClamp } = arg0);
    if (variant === undefined) {
      variant = "default";
    }
    ({ draggable, dragHandlePressableProps, height } = arg0);
    const merged = Object.assign(arg0, Object.assign({ label: 0, subLabel: 0, icon: 0, trailing: 0, arrow: 0, onPress: 0, disabled: 0, start: 0, end: 0, labelLineClamp: 0, subLabelLineClamp: 0, variant: 0, draggable: 0, dragHandlePressableProps: 0, height: 0 }));
    const context = react.useContext(react2.TableRowGroupContext);
    const tmp2Result = useToken;
    const token = tmp2Result.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
    const obj = { radius: token, shadow: "none", border: "none", variant: "muted", start: tmp8, end: !context && true === end, onPress, disabled, style, children: metroRequire(TableRowInner, { height, label, subLabel, icon, trailing, arrow, disabled, labelLineClamp, subLabelLineClamp, variant, draggable, dragHandlePressableProps }) };
    tmp8 = !context;
    const InternalCard = tmp2(5919).InternalCard;
    if (!context) {
      tmp8 = true === start;
    }
    const merged1 = Object.assign(merged);
    const tmp7Result = metroRequire(InternalCard, obj);
    let tmp11 = tmp7Result;
    if (!context) {
      tmp11 = tmp7Result;
      if (!(!context && true === end)) {
        const obj2 = { children: items };
        items = [tmp7Result, ];
        const obj3 = { adjustSpacingForIcon: null != icon };
        items[1] = metroRequire(TableRowDivider.TableRowDivider, obj3);
        tmp11 = metroImportAll(metroImportDefault, obj2);
      }
    }
    return tmp11;
  }
}
class TableRowInner {
  constructor(draggable) {
    let arrow;
    let borderRadius;
    let disabled;
    let height;
    let icon;
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let label;
    let labelLineClamp;
    let obj6;
    let str;
    let str2;
    let subLabel;
    let subLabelLineClamp;
    let tmp7;
    let trailing;
    let variant;
    ({ label, subLabel, icon, trailing, arrow, variant } = draggable);
    ({ labelLineClamp, subLabelLineClamp, disabled } = draggable);
    if (variant === undefined) {
      variant = "default";
    }
    let flag = draggable.draggable;
    if (flag === undefined) {
      flag = false;
    }
    const dragHandlePressableProps = draggable.dragHandlePressableProps;
    ({ borderRadius, height } = draggable);
    let tmp;
    if (react.isValidElement(trailing)) {
      if (trailing.type === TableRowTrailingText.TableRowTrailingText) {
        tmp = trailing;
      }
    }
    const obj2 = useFontScale;
    const fontScale = obj2.useFontScale();
    const obj3 = PlatformUtils;
    if (obj3.isAndroid()) {
      tmp7 = fontScale > 1.2;
    } else {
      tmp7 = fontScale > 1.5;
    }
    const tmp8 = closure_10(true === disabled, null != tmp, tmp7);
    const tmp4Result = useToken;
    const token = tmp4Result.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
    const obj4 = { style: items, children: items1 };
    items = [tmp8.row, { borderRadius, height }];
    let tmp13 = flag;
    const tmp4Result2 = useToken;
    const token1 = tmp4Result2.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
    if (flag) {
      const obj5 = { children: metroRequire(DragIcon.DragIcon, obj6) };
      const merged = Object.assign(dragHandlePressableProps);
      obj6 = { size: "xs", style: tmp8.dragHandle };
      tmp13 = metroRequire(React3, obj5);
    }
    items1 = [tmp13, , , , ];
    let tmp19 = null != icon;
    if (tmp19) {
      const obj7 = { style: tmp8.iconContainer, children: icon };
      tmp19 = metroRequire(tmp12, obj7);
    }
    items1[1] = tmp19;
    const obj9 = { style: tmp8.labels, accessible: flag || undefined, accessibilityRole: str, children: items2 };
    str = undefined;
    const obj8 = { style: tmp8.content, children: items3 };
    if (flag) {
      str = "text";
    }
    let tmp22Result = label;
    if (!react.isValidElement(label)) {
      const obj10 = { variant: token, color: str2, lineClamp: labelLineClamp, includeFontPadding: true, children: label };
      str2 = "text-feedback-critical";
      const Text = tmp4(4832).Text;
      const tmp22 = metroRequire;
      if ("danger" !== variant) {
        str2 = token1;
      }
      tmp22Result = tmp22(Text, obj10);
    }
    items2 = [tmp22Result, ];
    let tmp23 = null != subLabel;
    if (tmp23) {
      let tmp25Result = subLabel;
      if (!react.isValidElement(subLabel)) {
        let str4 = "text-subtle";
        const Text2 = tmp4(4832).Text;
        const tmp25 = metroRequire;
        if ("danger" === variant) {
          str4 = "text-feedback-critical";
        }
        const obj11 = { variant: "text-xs/medium", color: str4, lineClamp: subLabelLineClamp, includeFontPadding: true, children: subLabel };
        tmp25Result = tmp25(Text2, obj11);
      }
      tmp23 = tmp25Result;
    }
    items2[1] = tmp23;
    items3 = [metroImportAll(hasOwnProperty, obj9), ];
    let tmp26 = null != tmp;
    if (tmp26) {
      const obj12 = { style: items4, children: tmp };
      items4 = [, ];
      ({ trailing: arr5[0], trailingText: arr5[1] } = tmp8);
      tmp26 = metroRequire(tmp12, obj12);
    }
    items3[1] = tmp26;
    items1[2] = metroImportAll(hasOwnProperty, obj8);
    let tmp28 = null != trailing && null == tmp;
    if (tmp28) {
      const obj13 = { style: tmp8.trailing, children: trailing };
      tmp28 = metroRequire(tmp12, obj13);
    }
    items1[3] = tmp28;
    if (arrow) {
      arrow = metroRequire(tmp4(5924).TableRowArrow, {});
    }
    items1[4] = arrow;
    return metroImportAll(hasOwnProperty, obj4);
  }
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
const React4 = { padding: 0 };
const authStore = createStyles.createStyles((arg0, arg1, arg2) => {
  let num;
  let num2;
  let num3;
  let num4;
  let obj4;
  let obj5;
  let str2;
  let str4;
  const obj = { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", opacity: num, borderRadius: nativeDefault.radii.md };
  num = 1;
  if (arg0) {
    num = 0.5;
  }
  let str = "row";
  const obj2 = { row: obj, iconContainer: { minWidth: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" }, trailing: { marginStart: 18 }, content: obj4, labels: obj5, trailingText: { flexShrink: 1, marginStart: num4 }, dragHandle: { marginEnd: 8 } };
  ({ minWidth: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" });
  if (arg2) {
    str = "column";
  }
  obj4 = { flexShrink: 1, flexGrow: 1, flexDirection: str, alignItems: str2, justifyContent: "space-between" };
  str2 = "center";
  if (arg2) {
    str2 = "stretch";
  }
  let str3 = "100%";
  if (arg1) {
    str3 = "100%";
  }
  obj5 = { width: str3, flexGrow: num2, flexShrink: num3, maxWidth: str4 };
  num2 = undefined;
  if (arg1) {
    if (!arg2) {
      num2 = 1;
    }
  }
  num3 = 1;
  if (arg1) {
    num3 = 1;
  }
  str4 = undefined;
  if (arg1) {
    if (!arg2) {
      str4 = "70%";
    }
  }
  num4 = 18;
  if (arg2) {
    num4 = 0;
  }
  return obj2;
});
TableRow.Icon = TableRowIcon.TableRowIcon;
TableRow.Arrow = TableRowArrow.TableRowArrow;
TableRow.TrailingText = TableRowTrailingText.TableRowTrailingText;
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRow.native.tsx");

export { TableRow };
export { TableRowInner };
