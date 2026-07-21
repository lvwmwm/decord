// Module ID: 15855
// Function ID: 121332
// Name: subtractYearsFromToday
// Dependencies: []

// Module 15855 (subtractYearsFromToday)
function subtractYearsFromToday(arg0) {
  const obj = importDefault(dependencyMap[3])();
  const result = obj.set("year", obj.year() - arg0);
  return obj.toDate();
}
function initialDate() {
  return subtractYearsFromToday(10);
}
const importAllResult = importAll(dependencyMap[0]);
const Keyboard = arg1(dependencyMap[1]).Keyboard;
const jsx = arg1(dependencyMap[2]).jsx;
const forwardRefResult = importAllResult.forwardRef((date) => {
  let error;
  let label;
  let style;
  const arg1 = date;
  ({ onChangeDate: closure_1, label } = date);
  const dependencyMap = label;
  let importAllResult;
  function updateDate(arg0) {
    callback(arg0);
    const current = ref.current;
    if (null != current) {
      current.blur();
    }
  }
  function openDatePicker() {
    updateDate.dismiss();
    let obj = callback(label[4]);
    obj = { onSubmit: updateDate, title: label };
    let toDateResult;
    if (null != date) {
      toDateResult = date.toDate();
    }
    if (null == toDateResult) {
      toDateResult = callback3();
    }
    obj.startDate = toDateResult;
    obj.maximumDate = callback2(3);
    obj.minimumDate = callback2(100);
    obj.requireDateChanged = true;
    obj.openLazy(date(label[6])(label[5], label.paths), "DatePicker", obj);
  }
  const jsx = openDatePicker;
  ({ style, error } = date);
  const ref = importAllResult.useRef(null);
  importAllResult = ref;
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    focus() {
      callback();
    }
  }));
  let formatResult;
  if (null != date.date) {
    formatResult = date.format("L");
  }
  let tmp4;
  if (null != formatResult) {
    tmp4 = formatResult;
  }
  const tmp5 = importDefault(dependencyMap[3]);
  let formatResult1 = importDefault(dependencyMap[3])(initialDate()).format("L");
  const obj = { style, ref };
  let str2 = "";
  const tmp5Result = importDefault(dependencyMap[3])(initialDate());
  const tmp7 = jsx;
  if (null != tmp4) {
    str2 = tmp4;
  }
  obj.value = str2;
  obj.placeholder = formatResult1;
  obj.returnKeyType = "next";
  obj.textContentType = "none";
  obj.autoCapitalize = "none";
  obj.clearButtonVisibility = arg1(dependencyMap[8]).ClearButtonVisibility.NEVER;
  obj.editable = false;
  obj.forceAccessibleContainer = true;
  if (null != tmp4) {
    formatResult1 = tmp4;
  }
  obj.accessibilityLabel = "" + label + ", " + formatResult1;
  obj.onPress = openDatePicker;
  obj.label = label;
  obj.error = error;
  return tmp7(importDefault(dependencyMap[7]), obj);
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/age_gate/native/components/DateInput.tsx");

export default forwardRefResult;
