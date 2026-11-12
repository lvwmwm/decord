// Module ID: 7462
// Function ID: 7463
// Name: TableSwitchRow
// Dependencies: [32, 19, 17, 21, 5170, 1377, 7071, 5783, 7085, 7463, 2]
// Exports: TableSwitchRow

// Module 7462 (TableSwitchRow)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import TableRow2 from "TableRow" /* 7071 */;
import TableRowBadge from "TableRowBadge" /* 7085 */;
import FormSwitch from "FormSwitch" /* 7463 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles(() => ({ labelWithTrailing: { flexDirection: "row", alignItems: "center", gap: 8 } }));
const result = size.fileFinishedImporting("design/components/TableRow/native/TableSwitchRow.native.tsx");

export function TableSwitchRow(value) {
  let badge;
  let closure_129_1;
  let closure_2;
  let disabled;
  let first;
  let handleOnPress;
  let items1;
  let label;
  let subLabel;
  let tmp13;
  let tmp14Result;
  let tmp3Result;
  let trailing;
  value = value.value;
  ({ onValueChange: closure_129_1, label, subLabel, trailing, badge, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  const variant = value.variant;
  const accessibilityHint = value.accessibilityHint;
  const merged = Object.assign(value, Object.assign({ value: 0, onValueChange: 0, label: 0, subLabel: 0, trailing: 0, badge: 0, disabled: 0, accessibilityHint: 0, variant: 0 }));
  closure_2 = undefined;
  const tmp2 = closure_7();
  const obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  [first, closure_2] = react.useState(value);
  const items = [value];
  const effect = react.useEffect(() => {
    closure_2(value);
  }, items);
  const obj3 = {
    variant,
    arrow: false,
    label: tmp14Result,
    subLabel,
    badge,
    disabled,
    accessibilityState: { disabled, checked: first },
    accessible: true,
    accessibilityRole: "switch",
    accessibilityLabel: tmp3Result.getTableRowAccessibilityLabel(label, subLabel, badge),
    accessibilityHint,
    onPress: tmp13,
    onAccessibilityTap: function handleAccessibilityTap() {
      const tmp = closure_2(!value);
      const timerId = setTimeout(() => {
        if (closure_1_1 != null) {
          tmp(!closure_1_0);
        }
      });
    },
    trailing: hasOwnProperty(FormSwitch.FormSwitch, { "aria-hidden": true, value, onValueChange: handleOnPress, disabled })
  };
  const TableRow = TableRow2.TableRow;
  const merged1 = Object.assign(merged);
  tmp14Result = label;
  const obj2 = react;
  if (null != trailing) {
    let tmp9Result = label;
    const obj4 = { style: tmp2.labelWithTrailing, children: items1 };
    const tmp14 = metroRequire;
    const tmp15 = View;
    if (!obj2.isValidElement(label)) {
      let str = "mobile-text-heading-primary";
      const Text = tmp3(5783).Text;
      if ("danger" === variant) {
        str = "text-feedback-critical";
      }
      const obj5 = { variant: "body-md/semibold", color: str, includeFontPadding: true, children: label };
      tmp9Result = tmp9(Text, obj5);
    }
    items1 = [tmp9Result, trailing];
    tmp14Result = tmp14(tmp15, obj4);
  }
  handleOnPress = function handleOnPress() {
    let tmpResult;
    if (closure_1_1 != null) {
      tmpResult = tmp(!value);
    }
    return tmpResult;
  };
  tmp13 = undefined;
  tmp3Result = TableRowBadge;
  if (isAndroidResult) {
    tmp13 = handleOnPress;
  }
  return hasOwnProperty(TableRow, obj3);
}
