// Module ID: 17985
// Function ID: 17986
// Name: DateInput
// Dependencies: [19, 17, 21, 4702, 5056, 8561, 2000, 6284, 1200, 2]
// Exports: default

// Module 17985 (DateInput)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import _modDef4702 from "module_4702" /* 4702 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Keyboard = react_native.Keyboard;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/age_gate/native/components/DateInput.tsx");

export default function DateInput(date) {
  let error;
  let label;
  let ref;
  let str2;
  let style;
  let tmp10;
  date = date.date;
  ({ onChangeDate: importDefault, label } = date);
  let ref1;
  function updateDate(arg0) {
    importDefault(arg0);
    const current = ref1.current;
    if (current != null) {
      current.blur();
    }
  }
  function openDatePicker() {
    let obj4;
    let obj5;
    let toDateResult;
    Keyboard.dismiss();
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj = { onSubmit: updateDate, title: label, startDate: toDateResult, maximumDate: obj4.toDate(), minimumDate: obj5.toDate(), requireDateChanged: true };
    toDateResult = undefined;
    ActionSheetActionCreatorsDefault;
    const obj2 = date;
    const tmp5 = asyncRequire(8561, dependencyMap.paths);
    if (date != null) {
      toDateResult = obj2.toDate();
    }
    if (toDateResult == null) {
      const obj3 = _modDef4702();
      const result = obj3.set("year", obj3.year() - 10);
      toDateResult = obj3.toDate();
    }
    obj4 = _modDef4702();
    const result1 = obj4.set("year", obj4.year() - 3);
    obj5 = _modDef4702();
    const result2 = obj5.set("year", obj5.year() - 100);
    openLazy(tmp5, "DatePicker", obj);
  }
  ({ style, error, ref } = date);
  ref1 = ref1.useRef(null);
  const imperativeHandle = ref1.useImperativeHandle(ref, () => ({
    focus() {
      openDatePicker();
    }
  }));
  let formatResult;
  if (date != null) {
    formatResult = date.format("L");
  }
  const tmp4 = label;
  let tmp5 = require("module_4702");
  let obj = require("module_4702")();
  let result = obj.set("year", obj.year() - 10);
  const tmp5Result = tmp5(obj.toDate());
  const formatResult1 = tmp5Result.format("L");
  let obj2 = { style, ref: ref1, value: str2, placeholder: formatResult1, returnKeyType: "next", textContentType: "none", autoCapitalize: "none", clearButtonVisibility: date(tmp4[8]).ClearButtonVisibility.NEVER, editable: false, forceAccessibleContainer: true, accessibilityLabel: "" + label + ", " + tmp10, onPress: openDatePicker, label, error };
  str2 = formatResult;
  const tmp8 = openDatePicker;
  const tmp9 = require("FreeFormInputGroup");
  if (formatResult == null) {
    str2 = "";
  }
  tmp10 = formatResult1;
  if (null != formatResult) {
    tmp10 = formatResult;
  }
  return tmp8(tmp9, obj2);
};
