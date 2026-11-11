// Module ID: 7379
// Function ID: 7380
// Name: TableRow
// Dependencies: [19, 17, 21, 5243, 575, 7380, 5839, 7381, 7385, 7387, 7388, 7390, 5881, 1377, 7391, 7393, 7394, 5866, 2]

// Module 7379 (TableRow)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useToken from "useToken" /* 5839 */;
import useFontScale from "useFontScale" /* 5881 */;
import react2 from "react" /* 7380 */;
import TableRowDivider from "TableRowDivider" /* 7385 */;
import TableRowIcon from "TableRowIcon" /* 7387 */;
import TableRowArrow from "TableRowArrow" /* 7388 */;
import TableRowTrailingText from "TableRowTrailingText" /* 7390 */;
import TableRowBadge from "TableRowBadge" /* 7393 */;
import DragIcon from "DragIcon" /* 7394 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
class TableRow {
  constructor(arg0) {
    let arrow;
    let badge;
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
    ({ label, subLabel, trailing, badge, arrow, onPress } = arg0);
    if (disabled === undefined) {
      disabled = false;
    }
    ({ variant, start, end, labelLineClamp, subLabelLineClamp } = arg0);
    if (variant === undefined) {
      variant = "default";
    }
    ({ draggable, dragHandlePressableProps, height } = arg0);
    const merged = Object.assign(arg0, Object.assign({ label: 0, subLabel: 0, icon: 0, trailing: 0, badge: 0, arrow: 0, onPress: 0, disabled: 0, start: 0, end: 0, labelLineClamp: 0, subLabelLineClamp: 0, variant: 0, draggable: 0, dragHandlePressableProps: 0, height: 0 }));
    const context = react.useContext(react2.TableRowGroupContext);
    const tmp2Result = useToken;
    const token = tmp2Result.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
    const obj = { radius: token, shadow: "none", border: "none", variant: "muted", start: tmp8, end: !context && true === end, onPress, disabled, style, children: metroRequire(TableRowInner, { height, label, subLabel, icon, trailing, badge, arrow, disabled, labelLineClamp, subLabelLineClamp, variant, draggable, dragHandlePressableProps }) };
    tmp8 = !context;
    const InternalCard = tmp2(7381).InternalCard;
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
    let badge;
    let borderRadius;
    let disabled;
    let height;
    let icon;
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let items5;
    let items6;
    let label;
    let labelLineClamp;
    let obj7;
    let str;
    let str2;
    let subLabel;
    let subLabelLineClamp;
    let tmp7;
    let trailing;
    let variant;
    ({ label, subLabel, icon, trailing, badge, arrow, variant } = draggable);
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
    let tmp9 = null;
    if (null != badge) {
      const obj4 = {};
      const Badge = tmp4(7391).Badge;
      const tmp4Result = TableRowBadge;
      const merged = Object.assign(tmp4Result.resolveTableRowBadgeProps(badge));
      tmp9 = metroRequire(Badge, obj4);
    }
    const tmp4Result3 = useToken;
    const token = tmp4Result3.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
    const obj5 = { style: items, children: items1 };
    items = [tmp8.row, { borderRadius, height }];
    let tmp17 = flag;
    const tmp4Result4 = useToken;
    const token1 = tmp4Result4.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
    if (flag) {
      const obj6 = { children: metroRequire(DragIcon.DragIcon, obj7) };
      const merged1 = Object.assign(dragHandlePressableProps);
      obj7 = { size: "xs", style: tmp8.dragHandle };
      tmp17 = metroRequire(React3, obj6);
    }
    items1 = [tmp17, , , , , ];
    let tmp23 = null != icon;
    if (tmp23) {
      const obj8 = { style: tmp8.iconContainer, children: icon };
      tmp23 = metroRequire(tmp16, obj8);
    }
    items1[1] = tmp23;
    const obj10 = { style: tmp8.labels, accessible: flag || undefined, accessibilityRole: str, children: items2 };
    str = undefined;
    const obj9 = { style: tmp8.content, children: items3 };
    if (flag) {
      str = "text";
    }
    let tmp26Result = label;
    if (!react.isValidElement(label)) {
      const obj11 = { variant: token, color: str2, lineClamp: labelLineClamp, includeFontPadding: true, children: label };
      str2 = "text-feedback-critical";
      const Text = tmp4(5866).Text;
      const tmp26 = metroRequire;
      if ("danger" !== variant) {
        str2 = token1;
      }
      tmp26Result = tmp26(Text, obj11);
    }
    items2 = [tmp26Result, ];
    let tmp27 = null != subLabel;
    if (tmp27) {
      let tmp29Result = subLabel;
      if (!react.isValidElement(subLabel)) {
        let str4 = "text-subtle";
        const Text2 = tmp4(5866).Text;
        const tmp29 = metroRequire;
        if ("danger" === variant) {
          str4 = "text-feedback-critical";
        }
        const obj12 = { variant: "body-xs/medium", color: str4, lineClamp: subLabelLineClamp, includeFontPadding: true, children: subLabel };
        tmp29Result = tmp29(Text2, obj12);
      }
      tmp27 = tmp29Result;
    }
    items2[1] = tmp27;
    items3 = [metroImportAll(hasOwnProperty, obj10), ];
    let tmp30 = null != tmp;
    if (tmp30) {
      let tmp15Result;
      if (null != tmp9) {
        const obj13 = { style: items4, children: items5 };
        items4 = [, , ];
        ({ trailing: arr6[0], trailingText: arr6[1], trailingTextWithBadge: arr6[2] } = tmp8);
        items5 = [tmp9, ];
        const obj14 = { style: tmp8.trailingTextContent, children: tmp };
        items5[1] = metroRequire(hasOwnProperty, obj14);
        tmp15Result = tmp15(tmp16, obj13);
      } else {
        const obj15 = { style: items6, children: tmp };
        items6 = [, ];
        ({ trailing: arr5[0], trailingText: arr5[1] } = tmp8);
        tmp15Result = metroRequire(tmp16, obj15);
      }
      tmp30 = tmp15Result;
    }
    items3[1] = tmp30;
    items1[2] = metroImportAll(hasOwnProperty, obj9);
    let tmp34 = null != tmp9 && null == tmp;
    if (tmp34) {
      const obj16 = { style: tmp8.badge, children: tmp9 };
      tmp34 = metroRequire(tmp16, obj16);
    }
    items1[3] = tmp34;
    let tmp37Result = null != trailing && null == tmp;
    if (tmp37Result) {
      const items7 = [tmp8.trailing, ];
      let trailingAfterBadge = null != tmp9;
      const tmp37 = metroRequire;
      if (trailingAfterBadge) {
        trailingAfterBadge = tmp8.trailingAfterBadge;
      }
      const obj17 = { style: items7, children: trailing };
      items7[1] = trailingAfterBadge;
      tmp37Result = tmp37(tmp16, obj17);
    }
    items1[4] = tmp37Result;
    if (arrow) {
      arrow = metroRequire(tmp4(7388).TableRowArrow, {});
    }
    items1[5] = arrow;
    return metroImportAll(hasOwnProperty, obj5);
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
  const obj2 = { row: obj, iconContainer: { minWidth: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" }, trailing: { marginStart: 18 }, trailingAfterBadge: { marginStart: 8 }, badge: { marginStart: 18, flexShrink: 0 }, trailingTextWithBadge: { flexDirection: "row", alignItems: "center", gap: 8 }, trailingTextContent: { flexShrink: 1 }, content: obj4, labels: obj5, trailingText: { flexShrink: 1, marginStart: num4 }, dragHandle: { marginEnd: 8 } };
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
