// Module ID: 6621
// Function ID: 6622
// Name: TableSwitchRow
// Dependencies: [32, 19, 17, 21, 4836, 1364, 4533, 5917, 4832, 6622, 2]
// Exports: TableSwitchRow

// Module 6621 (TableSwitchRow)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import native from "native" /* 4533 */;
import TableRow2 from "TableRow" /* 5917 */;
import FormSwitch from "FormSwitch" /* 6622 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles(() => ({ labelWithTrailing: { flexDirection: "row", alignItems: "center", gap: 8 } }));
const result = size.fileFinishedImporting("design/components/TableRow/native/TableSwitchRow.native.tsx");

export const TableSwitchRow = function TableSwitchRow(value) {
  let closure_129_1;
  let closure_2;
  let disabled;
  let first;
  let handleOnPress;
  let items1;
  let label;
  let str3;
  let subLabel;
  let tmp15;
  let tmp16Result;
  let trailing;
  value = value.value;
  ({ onValueChange: closure_129_1, label, subLabel, trailing, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  const variant = value.variant;
  const accessibilityHint = value.accessibilityHint;
  const merged = Object.assign(value, Object.assign({ value: 0, onValueChange: 0, label: 0, subLabel: 0, trailing: 0, disabled: 0, accessibilityHint: 0, variant: 0 }));
  closure_2 = undefined;
  const tmp2 = closure_7();
  const obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  const obj2 = native;
  const nodeText = obj2.getNodeText(label);
  const obj3 = native;
  const nodeText1 = obj3.getNodeText(subLabel);
  [first, closure_2] = react.useState(value);
  const items = [value];
  const effect = react.useEffect(() => {
    closure_2(value);
  }, items);
  const obj5 = {
    variant,
    arrow: false,
    label: tmp16Result,
    subLabel,
    disabled,
    accessibilityState: { disabled, checked: first },
    accessible: true,
    accessibilityRole: "switch",
    accessibilityLabel: "" + nodeText + ", " + str3,
    accessibilityHint,
    onPress: tmp15,
    onAccessibilityTap() {
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
  tmp16Result = label;
  const obj4 = react;
  if (null != trailing) {
    let tmp11Result = label;
    const obj6 = { style: tmp2.labelWithTrailing, children: items1 };
    const tmp16 = metroRequire;
    const tmp17 = View;
    if (!obj4.isValidElement(label)) {
      let str = "mobile-text-heading-primary";
      const Text = tmp3(4832).Text;
      if ("danger" === variant) {
        str = "text-feedback-critical";
      }
      const obj7 = { variant: "text-md/semibold", color: str, includeFontPadding: true, children: label };
      tmp11Result = tmp11(Text, obj7);
    }
    items1 = [tmp11Result, trailing];
    tmp16Result = tmp16(tmp17, obj6);
  }
  str3 = nodeText1;
  if (nodeText1 == null) {
    str3 = "";
  }
  handleOnPress = function handleOnPress() {
    let tmpResult;
    if (closure_1_1 != null) {
      tmpResult = tmp(!value);
    }
    return tmpResult;
  };
  tmp15 = undefined;
  if (isAndroidResult) {
    tmp15 = handleOnPress;
  }
  return hasOwnProperty(TableRow, obj5);
};
