// Module ID: 7511
// Function ID: 60163
// Name: FormSwitchRow
// Dependencies: []
// Exports: default

// Module 7511 (FormSwitchRow)
function FormSwitchRow(onValueChange) {
  let accessibilityHint;
  let label;
  let numberOfLines;
  let subLabel;
  let switchProps;
  let trailing;
  onValueChange = onValueChange.onValueChange;
  const arg1 = onValueChange;
  const value = onValueChange.value;
  const importDefault = value;
  let flag = onValueChange.disabled;
  if (flag === undefined) {
    flag = false;
  }
  ({ label, subLabel, trailing, switchProps, accessibilityHint, numberOfLines } = onValueChange);
  if (switchProps === undefined) {
    switchProps = {};
  }
  let obj = { <string:996410367>: true, <string:1374595670>: 6, <string:22250482>: 132, <string:3708090627>: null, <string:1374118239>: "\u{1F9D1}\u200D\u{1F680}", <string:1365489647>: true, <string:3780275961>: 12.1, <string:1646712485>: 133, <string:4132544763>: null };
  Object.setPrototypeOf(null);
  const merged = Object.assign(onValueChange, obj);
  let dependencyMap;
  let callback;
  let obj1 = arg1(dependencyMap[5]);
  const tmp3 = callback3();
  const tmp5 = callback(React.useState(value), 2);
  const first = tmp5[0];
  dependencyMap = first;
  callback = tmp5[1];
  const items = [value];
  const effect = React.useEffect(() => {
    callback(value);
  }, items);
  let tmp8;
  if ("string" === typeof label) {
    tmp8 = label;
  }
  let sum = tmp8;
  if (tmp9) {
    const _HermesInternal = HermesInternal;
    sum = tmp8 + " " + subLabel;
  }
  obj = {};
  const isAndroidResult = obj1.isAndroid();
  const tmp12 = callback2;
  const tmp9 = null != tmp8 && "string" === typeof subLabel;
  const merged1 = Object.assign(merged);
  obj = { style: tmp3.trailing };
  const items1 = [callback2(importDefault(dependencyMap[7]), { numberOfLines, text: label }), null != trailing && trailing];
  obj.children = items1;
  obj["label"] = closure_7(View, obj);
  obj["subLabel"] = subLabel;
  obj["disabled"] = flag;
  let fn;
  if (isAndroidResult) {
    fn = () => {
      let tmp = null != onValueChange;
      if (tmp) {
        tmp = null != value;
      }
      if (tmp) {
        onValueChange(!value);
      }
    };
  }
  obj["onPress"] = fn;
  obj["accessible"] = true;
  obj["onAccessibilityTap"] = function onAccessibilityTap() {
    callback(!first);
    const timerId = setTimeout(() => {
      if (null != callback) {
        callback(!closure_2);
      }
    });
  };
  obj["accessibilityRole"] = "switch";
  obj["accessibilityLabel"] = sum;
  obj1 = { disabled: flag, checked: first };
  obj["accessibilityState"] = obj1;
  obj["accessibilityHint"] = accessibilityHint;
  const obj2 = { disabled: flag, value, onValueChange };
  const tmp13 = importDefault(dependencyMap[6]);
  const tmp15 = closure_7;
  const tmp16 = View;
  const merged2 = Object.assign(switchProps);
  obj["trailing"] = callback2(importDefault(dependencyMap[8]), obj2);
  return tmp12(tmp13, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ trailing: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("design/void/Form/native/FormSwitchRow.tsx");

export default function FormSwitchRowContainer(DEPRECATED_style) {
  if (React.useContext(arg1(dependencyMap[9]).RedesignCompatContext)) {
    let obj = { style: DEPRECATED_style.DEPRECATED_style };
    obj = {};
    ({ value: obj3.value, onValueChange: obj3.onValueChange } = DEPRECATED_style);
    const merged = Object.assign(DEPRECATED_style);
    obj.children = callback2(arg1(dependencyMap[10]).TableSwitchRow, obj);
    let tmpResult = tmp(View, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(DEPRECATED_style);
    tmpResult = tmp(FormSwitchRow, obj);
  }
  return tmpResult;
};
