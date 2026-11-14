// Module ID: 7443
// Function ID: 7444
// Name: TableRow
// Dependencies: [19, 17, 21, 5306, 575, 7444, 5902, 7445, 7453, 7455, 7456, 7458, 5944, 1380, 7459, 7461, 5929, 2]

// Module 7443 (TableRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import useToken from "useToken" /* 5902 */;
import useFontScale from "useFontScale" /* 5944 */;
import react2 from "react" /* 7444 */;
import TableRowDivider from "TableRowDivider" /* 7453 */;
import TableRowIcon from "TableRowIcon" /* 7455 */;
import TableRowArrow from "TableRowArrow" /* 7456 */;
import TableRowTrailingText from "TableRowTrailingText" /* 7458 */;
import TableRowBadge from "TableRowBadge" /* 7461 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
class TableRow {
  constructor(draggable) {
    let arrow;
    let badge;
    let disabled;
    let end;
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
    ({ icon, disabled } = draggable);
    ({ label, subLabel, trailing, badge, arrow, onPress } = draggable);
    if (disabled === undefined) {
      disabled = false;
    }
    ({ variant, start, end, labelLineClamp, subLabelLineClamp } = draggable);
    if (variant === undefined) {
      variant = "default";
    }
    draggable = draggable.draggable;
    const height = draggable.height;
    const merged = Object.assign(draggable, Object.assign({ label: 0, subLabel: 0, icon: 0, trailing: 0, badge: 0, arrow: 0, onPress: 0, disabled: 0, start: 0, end: 0, labelLineClamp: 0, subLabelLineClamp: 0, variant: 0, draggable: 0, height: 0 }));
    const context = react.useContext(react2.TableRowGroupContext);
    const tmp2Result = useToken;
    const token = tmp2Result.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
    const obj = { radius: token, shadow: "none", border: "none", padding: "none", variant: "muted", start: tmp8, end: !context && true === end, onPress, disabled, draggable, children: hasOwnProperty(TableRowInner, { height, label, subLabel, icon, trailing, badge, arrow, disabled, labelLineClamp, subLabelLineClamp, variant, draggable }) };
    tmp8 = !context;
    const InternalCard = tmp2(7445).InternalCard;
    if (!context) {
      tmp8 = true === start;
    }
    const merged1 = Object.assign(merged);
    const tmp7Result = hasOwnProperty(InternalCard, obj);
    let tmp11 = tmp7Result;
    if (!context) {
      tmp11 = tmp7Result;
      if (!(!context && true === end)) {
        const obj2 = { children: items };
        items = [tmp7Result, ];
        const obj3 = { adjustSpacingForIcon: null != icon, adjustSpacingForDragHandle: draggable };
        items[1] = hasOwnProperty(TableRowDivider.TableRowDivider, obj3);
        tmp11 = metroImportDefault(metroRequire, obj2);
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
    const tmp8 = closure_8(true === disabled, true === flag, null != tmp, tmp7);
    let tmp9 = null;
    if (null != badge) {
      const obj4 = {};
      const Badge = tmp4(7459).Badge;
      const tmp4Result = TableRowBadge;
      const merged = Object.assign(tmp4Result.resolveTableRowBadgeProps(badge));
      tmp9 = hasOwnProperty(Badge, obj4);
    }
    const tmp4Result3 = useToken;
    const token = tmp4Result3.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
    const obj5 = { style: items, children: items1 };
    items = [tmp8.row, { borderRadius, height }];
    let tmp17 = null != icon;
    const tmp4Result4 = useToken;
    const token1 = tmp4Result4.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
    if (tmp17) {
      const obj6 = { style: tmp8.iconContainer, children: icon };
      tmp17 = hasOwnProperty(tmp16, obj6);
    }
    items1 = [tmp17, , , , ];
    const obj8 = { style: tmp8.labels, accessible: flag || undefined, accessibilityRole: str, children: items2 };
    str = undefined;
    const obj7 = { style: tmp8.content, children: items3 };
    if (flag) {
      str = "text";
    }
    let tmp20Result = label;
    if (!react.isValidElement(label)) {
      const obj9 = { variant: token, color: str2, lineClamp: labelLineClamp, includeFontPadding: true, children: label };
      str2 = "text-feedback-critical";
      const Text = tmp4(5929).Text;
      const tmp20 = hasOwnProperty;
      if ("danger" !== variant) {
        str2 = token1;
      }
      tmp20Result = tmp20(Text, obj9);
    }
    items2 = [tmp20Result, ];
    let tmp21 = null != subLabel;
    if (tmp21) {
      let tmp23Result = subLabel;
      if (!react.isValidElement(subLabel)) {
        let str4 = "text-subtle";
        const Text2 = tmp4(5929).Text;
        const tmp23 = hasOwnProperty;
        if ("danger" === variant) {
          str4 = "text-feedback-critical";
        }
        const obj10 = { variant: "body-xs/medium", color: str4, lineClamp: subLabelLineClamp, includeFontPadding: true, children: subLabel };
        tmp23Result = tmp23(Text2, obj10);
      }
      tmp21 = tmp23Result;
    }
    items2[1] = tmp21;
    items3 = [metroImportDefault(View, obj8), ];
    let tmp24 = null != tmp;
    if (tmp24) {
      let tmp15Result;
      if (null != tmp9) {
        const obj11 = { style: items4, children: items5 };
        items4 = [, , ];
        ({ trailing: arr6[0], trailingText: arr6[1], trailingTextWithBadge: arr6[2] } = tmp8);
        items5 = [tmp9, ];
        const obj12 = { style: tmp8.trailingTextContent, children: tmp };
        items5[1] = hasOwnProperty(View, obj12);
        tmp15Result = tmp15(tmp16, obj11);
      } else {
        const obj13 = { style: items6, children: tmp };
        items6 = [, ];
        ({ trailing: arr5[0], trailingText: arr5[1] } = tmp8);
        tmp15Result = hasOwnProperty(tmp16, obj13);
      }
      tmp24 = tmp15Result;
    }
    items3[1] = tmp24;
    items1[1] = metroImportDefault(View, obj7);
    let tmp28 = null != tmp9 && null == tmp;
    if (tmp28) {
      const obj14 = { style: tmp8.badge, children: tmp9 };
      tmp28 = hasOwnProperty(tmp16, obj14);
    }
    items1[2] = tmp28;
    let tmp31Result = null != trailing && null == tmp;
    if (tmp31Result) {
      const items7 = [tmp8.trailing, ];
      let trailingAfterBadge = null != tmp9;
      const tmp31 = hasOwnProperty;
      if (trailingAfterBadge) {
        trailingAfterBadge = tmp8.trailingAfterBadge;
      }
      const obj15 = { style: items7, children: trailing };
      items7[1] = trailingAfterBadge;
      tmp31Result = tmp31(tmp16, obj15);
    }
    items1[3] = tmp31Result;
    if (arrow) {
      arrow = hasOwnProperty(tmp4(7456).TableRowArrow, {});
    }
    items1[4] = arrow;
    return metroImportDefault(View, obj5);
  }
}
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const metroImportAll = createStyles.createStyles((arg0, arg1, arg2, arg3) => {
  let num;
  let num2;
  let num3;
  let num4;
  let num5;
  let obj4;
  let obj5;
  let str2;
  let str4;
  const obj = { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, paddingStart: num, minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", opacity: num2, borderRadius: nativeDefault.radii.md };
  num = undefined;
  if (arg1) {
    num = 0;
  }
  num2 = 1;
  if (arg0) {
    num2 = 0.5;
  }
  let str = "row";
  const obj2 = { row: obj, iconContainer: { minWidth: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" }, trailing: { marginStart: 18 }, trailingAfterBadge: { marginStart: 8 }, badge: { marginStart: 18, flexShrink: 0 }, trailingTextWithBadge: { flexDirection: "row", alignItems: "center", gap: 8 }, trailingTextContent: { flexShrink: 1 }, content: obj4, labels: obj5, trailingText: { flexShrink: 1, marginStart: num5 } };
  ({ minWidth: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" });
  if (arg3) {
    str = "column";
  }
  obj4 = { flexShrink: 1, flexGrow: 1, flexDirection: str, alignItems: str2, justifyContent: "space-between" };
  str2 = "center";
  if (arg3) {
    str2 = "stretch";
  }
  let str3 = "100%";
  if (arg2) {
    str3 = "100%";
  }
  obj5 = { width: str3, flexGrow: num3, flexShrink: num4, maxWidth: str4 };
  num3 = undefined;
  if (arg2) {
    if (!arg3) {
      num3 = 1;
    }
  }
  num4 = 1;
  if (arg2) {
    num4 = 1;
  }
  str4 = undefined;
  if (arg2) {
    if (!arg3) {
      str4 = "70%";
    }
  }
  num5 = 18;
  if (arg3) {
    num5 = 0;
  }
  return obj2;
});
TableRow.Icon = TableRowIcon.TableRowIcon;
TableRow.Arrow = TableRowArrow.TableRowArrow;
TableRow.TrailingText = TableRowTrailingText.TableRowTrailingText;
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRow.native.tsx");

export { TableRow };
export { TableRowInner };
