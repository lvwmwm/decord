// Module ID: 17089
// Function ID: 17090
// Name: DateInput
// Dependencies: [19, 17, 21, 4421, 4800, 8995, 1981, 6023, 1177, 2]

// Module 17089 (DateInput)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import _modDef4421 from "module_4421" /* 4421 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let date;

const Keyboard = react_native.Keyboard;
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((date, ref) => {
  let error;
  let label;
  let str2;
  let style;
  let tmp10;
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
    let obj4;
    let obj5;
    let toDateResult;
    Keyboard.dismiss();
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj = { onSubmit: updateDate, title: label, startDate: toDateResult, maximumDate: obj4.toDate(), minimumDate: obj5.toDate(), requireDateChanged: true };
    toDateResult = undefined;
    ActionSheetActionCreatorsDefault;
    const obj2 = date;
    const tmp5 = asyncRequire(8995, dependencyMap.paths);
    if (date != null) {
      toDateResult = obj2.toDate();
    }
    if (toDateResult == null) {
      const obj3 = _modDef4421();
      const result = obj3.set("year", obj3.year() - 10);
      toDateResult = obj3.toDate();
    }
    obj4 = _modDef4421();
    const result1 = obj4.set("year", obj4.year() - 3);
    obj5 = _modDef4421();
    const result2 = obj5.set("year", obj5.year() - 100);
    openLazy(tmp5, "DatePicker", obj);
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
  const tmp4 = label;
  let tmp5 = require("module_4421");
  let obj = require("module_4421")();
  let result = obj.set("year", obj.year() - 10);
  const tmp5Result = tmp5(obj.toDate());
  const formatResult1 = tmp5Result.format("L");
  let obj2 = { style, ref, value: str2, placeholder: formatResult1, returnKeyType: "next", textContentType: "none", autoCapitalize: "none", clearButtonVisibility: date(tmp4[8]).ClearButtonVisibility.NEVER, editable: false, forceAccessibleContainer: true, accessibilityLabel: "" + label + ", " + tmp10, onPress: openDatePicker, label, error };
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
});
let result = size.fileFinishedImporting("modules/age_gate/native/components/DateInput.tsx");

export default forwardRefResult;
