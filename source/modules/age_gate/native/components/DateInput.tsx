// Module ID: 15984
// Function ID: 123592
// Name: subtractYearsFromToday
// Dependencies: [31, 27, 33, 3712, 4098, 8389, 1934, 9000, 1273, 2]

// Module 15984 (subtractYearsFromToday)
import importAllResult from "result";
import { Keyboard } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function subtractYearsFromToday(arg0) {
  const obj = importDefault(3712)();
  const result = obj.set("year", obj.year() - arg0);
  return obj.toDate();
}
function initialDate() {
  return subtractYearsFromToday(10);
}
const forwardRefResult = importAllResult.forwardRef((date) => {
  let error;
  let importDefault;
  let label;
  let style;
  date = date.date;
  ({ onChangeDate: importDefault, label } = date);
  let ref;
  function updateDate(arg0) {
    callback(arg0);
    const current = ref.current;
    if (null != current) {
      current.blur();
    }
  }
  function openDatePicker() {
    updateDate.dismiss();
    let obj = outer1_1(label[4]);
    obj = { onSubmit: updateDate, title: label };
    let toDateResult;
    if (null != date) {
      toDateResult = date.toDate();
    }
    if (null == toDateResult) {
      toDateResult = outer1_7();
    }
    obj.startDate = toDateResult;
    obj.maximumDate = outer1_6(3);
    obj.minimumDate = outer1_6(100);
    obj.requireDateChanged = true;
    obj.openLazy(date(label[6])(label[5], label.paths), "DatePicker", obj);
  }
  ({ style, error } = date);
  ref = ref.useRef(null);
  const imperativeHandle = ref.useImperativeHandle(arg1, () => ({
    focus() {
      outer1_5();
    }
  }));
  let formatResult;
  if (null != date) {
    formatResult = date.format("L");
  }
  let tmp4;
  if (null != formatResult) {
    tmp4 = formatResult;
  }
  const tmp5 = importDefault(label[3]);
  let formatResult1 = importDefault(label[3])(initialDate()).format("L");
  let obj = { style, ref };
  let str2 = "";
  const tmp5Result = importDefault(label[3])(initialDate());
  const tmp7 = openDatePicker;
  if (null != tmp4) {
    str2 = tmp4;
  }
  obj.value = str2;
  obj.placeholder = formatResult1;
  obj.returnKeyType = "next";
  obj.textContentType = "none";
  obj.autoCapitalize = "none";
  obj.clearButtonVisibility = date(label[8]).ClearButtonVisibility.NEVER;
  obj.editable = false;
  obj.forceAccessibleContainer = true;
  if (null != tmp4) {
    formatResult1 = tmp4;
  }
  obj.accessibilityLabel = "" + label + ", " + formatResult1;
  obj.onPress = openDatePicker;
  obj.label = label;
  obj.error = error;
  return tmp7(importDefault(label[7]), obj);
});
let result = require("jsxProd").fileFinishedImporting("modules/age_gate/native/components/DateInput.tsx");

export default forwardRefResult;
