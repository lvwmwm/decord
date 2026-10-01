// Module ID: 8067
// Function ID: 8068
// Name: FormSwitchRow
// Dependencies: [32, 19, 17, 21, 4836, 1364, 6558, 6560, 8065, 5998, 6621, 2]
// Exports: default

// Module 8067 (FormSwitchRow)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import RedesignCompat from "RedesignCompat" /* 5998 */;
import FormRowDefault from "FormRow" /* 6558 */;
import FormLabelDefault from "FormLabel" /* 6560 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let tmp;
let tmp13;
const TableSwitchRow2 = tmp(6621);
const FormSwitchDefault = tmp13(8065);
function FormSwitchRow(onValueChange) {
  let accessibilityHint;
  let closure_3;
  let first;
  let fn;
  let items1;
  let label;
  let numberOfLines;
  let obj3;
  let obj4;
  let subLabel;
  let switchProps;
  let tmp13Result;
  let trailing;
  onValueChange = onValueChange.onValueChange;
  const value = onValueChange.value;
  let flag = onValueChange.disabled;
  if (flag === undefined) {
    flag = false;
  }
  ({ label, subLabel, trailing, switchProps, accessibilityHint, numberOfLines } = onValueChange);
  if (switchProps === undefined) {
    switchProps = {};
  }
  const merged = Object.assign(onValueChange, Object.assign({ onValueChange: 0, value: 0, disabled: 0, label: 0, subLabel: 0, accessibilityHint: 0, trailing: 0, numberOfLines: 0, switchProps: 0 }));
  first = undefined;
  closure_3 = undefined;
  let tmp2 = closure_8();
  const obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  [first, closure_3] = react.useState(value);
  const items = [value];
  const effect = react.useEffect(() => {
    closure_3(value);
  }, items);
  let tmp8;
  if (typeof label === "string") {
    tmp8 = label;
  }
  let sum = tmp8;
  const tmp9 = null != tmp8 && typeof subLabel === "string";
  if (tmp9) {
    const _HermesInternal = HermesInternal;
    sum = tmp8 + " " + subLabel;
  }
  const obj2 = {
    label: metroImportDefault(View, obj3),
    subLabel,
    disabled: flag,
    onPress: fn,
    accessible: true,
    onAccessibilityTap() {
      const tmp = closure_3(!first);
      const timerId = setTimeout(() => {
        if (onValueChange != null) {
          tmp(!first);
        }
      });
    },
    accessibilityRole: "switch",
    accessibilityLabel: sum,
    accessibilityState: { disabled: flag, checked: first },
    accessibilityHint,
    trailing: metroRequire(tmp13Result, obj4)
  };
  const tmp14 = FormRowDefault;
  const merged1 = Object.assign(merged);
  obj3 = { style: tmp2.trailing, children: items1 };
  items1 = [metroRequire(FormLabelDefault, { numberOfLines, text: label }), null != trailing && trailing];
  fn = undefined;
  if (isAndroidResult) {
    fn = () => {
      let tmp2 = null != onValueChange;
      const tmp = onValueChange;
      if (tmp2) {
        tmp2 = null != value;
      }
      if (tmp2) {
        tmp(!value);
      }
    };
  }
  obj4 = { disabled: flag, value, onValueChange };
  tmp13Result = FormSwitchDefault;
  const merged2 = Object.assign(switchProps);
  return metroRequire(tmp14, obj2);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ trailing: { flex: 1, flexDirection: "row", width: "100%", alignItems: "center" } });
const result = size.fileFinishedImporting("design/void/Form/native/FormSwitchRow.tsx");

export default function FormSwitchRowContainer(DEPRECATED_style) {
  let TableSwitchRow;
  let obj5;
  let tmp3Result;
  if (react.useContext(RedesignCompat.RedesignCompatContext)) {
    const obj2 = { style: DEPRECATED_style.DEPRECATED_style, children: metroRequire(TableSwitchRow, obj5) };
    obj5 = { value: null, onValueChange: null };
    ({ value: obj3.value, onValueChange: obj3.onValueChange } = DEPRECATED_style);
    TableSwitchRow = TableSwitchRow2.TableSwitchRow;
    const merged = Object.assign(DEPRECATED_style);
    tmp3Result = tmp3(View, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(DEPRECATED_style);
    tmp3Result = tmp3(FormSwitchRow, obj);
  }
  return tmp3Result;
};
