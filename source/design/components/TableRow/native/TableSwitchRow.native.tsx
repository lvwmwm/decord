// Module ID: 5502
// Function ID: 46884
// Name: TableSwitchRow
// Dependencies: []
// Exports: TableSwitchRow

// Module 5502 (TableSwitchRow)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles(() => ({ labelWithTrailing: {} }));
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/components/TableRow/native/TableSwitchRow.native.tsx");

export const TableSwitchRow = function TableSwitchRow(value) {
  let disabled;
  let label;
  let subLabel;
  let trailing;
  value = value.value;
  const arg1 = value;
  ({ onValueChange: closure_1, label, subLabel, trailing, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  const variant = value.variant;
  let obj = {};
  Object.setPrototypeOf(null);
  const merged = Object.assign(value, obj);
  let callback;
  function handleOnPress() {
    let tmp;
    if (null != callback) {
      tmp = callback(!value);
    }
    return tmp;
  }
  let obj1 = arg1(dependencyMap[5]);
  const tmp3 = callback3();
  let obj2 = arg1(dependencyMap[6]);
  const nodeText = obj2.getNodeText(label);
  let obj3 = arg1(dependencyMap[6]);
  const nodeText1 = obj3.getNodeText(subLabel);
  const tmp7 = callback(React.useState(value), 2);
  callback = tmp7[1];
  const items = [value];
  const effect = React.useEffect(() => {
    callback2(value);
  }, items);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["variant"] = variant;
  obj["arrow"] = false;
  let tmp17Result = label;
  if (null != trailing) {
    obj = { style: tmp3.labelWithTrailing };
    let tmp12Result = label;
    if (!React.isValidElement(label)) {
      obj1 = { variant: "text-md/semibold" };
      let str2 = "mobile-text-heading-primary";
      if ("danger" === variant) {
        str2 = "text-feedback-critical";
      }
      obj1.color = str2;
      obj1.children = label;
      tmp12Result = callback2(arg1(dependencyMap[8]).Text, obj1);
      const tmp12 = callback2;
    }
    const items1 = [tmp12Result, trailing];
    obj.children = items1;
    tmp17Result = closure_6(View, obj);
    const tmp17 = closure_6;
    const tmp18 = View;
  }
  obj["label"] = tmp17Result;
  obj["subLabel"] = subLabel;
  obj["disabled"] = disabled;
  obj2 = { disabled, checked: tmp7[0] };
  obj["accessibilityState"] = obj2;
  obj["accessible"] = true;
  obj["accessibilityRole"] = "switch";
  let str4 = "";
  if (null != nodeText1) {
    str4 = nodeText1;
  }
  obj["accessibilityLabel"] = "" + nodeText + ", " + str4;
  obj["accessibilityHint"] = value.accessibilityHint;
  let tmp16;
  if (isAndroidResult) {
    tmp16 = handleOnPress;
  }
  obj["onPress"] = tmp16;
  obj["onAccessibilityTap"] = function onAccessibilityTap() {
    callback2(!value);
    const timerId = setTimeout(() => {
      if (null != callback) {
        callback(!closure_0);
      }
    });
  };
  obj3 = { aria-hidden: true, value, onValueChange: handleOnPress, disabled };
  obj["trailing"] = callback2(arg1(dependencyMap[9]).FormSwitch, obj3);
  return callback2(arg1(dependencyMap[7]).TableRow, obj);
};
