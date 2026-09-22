// Module ID: 17731
// Function ID: 17732
// Name: DateInput
// Dependencies: [19, 17, 21, 4352, 4725, 9780, 1984, 6845, 1181, 2]

// Module 17731 (DateInput)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import _modDef4352 from "module_4352" /* 4352 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Keyboard = fn(17).Keyboard;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_gate/native/components/DateInput.tsx");

export default noop.forwardRef((date, ref) => {
  date = date.date;
  ({ onChangeDate: importDefault, label } = date);
  ref = undefined;
  function updateDate(arg0) {
    importDefault(arg0);
    const current = ref.current;
    if (current != null) {
      current.blur();
    }
  }
  function openDatePicker() {
    Keyboard.dismiss();
    const obj2 = { onSubmit: updateDate, title: label, startDate: null, maximumDate: null, minimumDate: null, requireDateChanged: true };
    let toDateResult;
    const obj = ActionSheetActionCreatorsDefault;
    const obj3 = date;
    if (date != null) {
      toDateResult = obj3.toDate();
    }
    if (toDateResult == null) {
      const obj4 = tmp2(4352)();
      const result = obj4.set("year", obj4.year() - 10);
      toDateResult = obj4.toDate();
    }
    obj2.startDate = toDateResult;
    const obj5 = _modDef4352();
    const result1 = obj5.set("year", obj5.year() - 3);
    obj2.maximumDate = obj5.toDate();
    const obj6 = _modDef4352();
    const result2 = obj6.set("year", obj6.year() - 100);
    obj2.minimumDate = obj6.toDate();
    obj.openLazy(asyncRequireImpl(9780, dependencyMap.paths), "DatePicker", obj2);
  }
  ({ style, error } = date);
  ref = ref.useRef(null);
  const imperativeHandle = ref.useImperativeHandle(ref, () => ({
    focus() {
      openDatePicker();
    }
  }));
  let formatResult;
  if (date != null) {
    formatResult = date.format("L");
  }
  let obj = require("module_4352")();
  let result = obj.set("year", obj.year() - 10);
  const tmp4 = label;
  const tmp5 = require("module_4352");
  const formatResult1 = require("module_4352")(obj.toDate()).format("L");
  let obj2 = { style, ref, value: null, placeholder: null, returnKeyType: "next", textContentType: "none", autoCapitalize: "none", clearButtonVisibility: null, editable: false, forceAccessibleContainer: true, accessibilityLabel: null, onPress: null, label: null, error: null };
  let str2 = formatResult;
  const tmp5Result = require("module_4352")(obj.toDate());
  const tmp8 = openDatePicker;
  if (formatResult == null) {
    str2 = "";
  }
  obj2.value = str2;
  obj2.placeholder = formatResult1;
  obj2.clearButtonVisibility = date(tmp4[8]).ClearButtonVisibility.NEVER;
  let tmp10 = formatResult1;
  if (null != formatResult) {
    tmp10 = formatResult;
  }
  obj2.accessibilityLabel = "" + label + ", " + tmp10;
  obj2.onPress = openDatePicker;
  obj2.label = label;
  obj2.error = error;
  return tmp8(require("FreeFormInputGroup"), obj2);
});
