// Module ID: 14509
// Function ID: 109248
// Name: DevToolsProfilingUseStateFromStores
// Dependencies: []
// Exports: DevToolsProfilingUseStateFromStores

// Module 14509 (DevToolsProfilingUseStateFromStores)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingUseStateFromStores.tsx");

export const DevToolsProfilingUseStateFromStores = function DevToolsProfilingUseStateFromStores() {
  function renderLabel(children) {
    return callback2(first(str[4]).Text, { style: { marginBottom: 4 }, children });
  }
  let obj = arg1(dependencyMap[3]);
  const tmp = callback(React.useState(obj.getUseStateFromStoresDebuggingEnabled()), 2);
  const first = tmp[0];
  const arg1 = first;
  let obj1 = arg1(dependencyMap[3]);
  const tmp3 = callback(React.useState(obj1.getUseStateFromStoresExecutionWindowThresholdMs()), 2);
  const dependencyMap = str;
  const callback = tmp3[1];
  let obj2 = arg1(dependencyMap[3]);
  const tmp4 = callback(React.useState(obj2.getUseStateFromStoresExecutionTimeWarningThresholdMs()), 2);
  const React = str2;
  const callback2 = tmp4[1];
  let obj3 = arg1(dependencyMap[3]);
  const tmp5 = callback(React.useState(obj3.getUseStateFromStoresExecutionCountWarningThreshold()), 2);
  const str3 = tmp5[0];
  const callback3 = tmp5[1];
  let obj4 = arg1(dependencyMap[3]);
  const tmp6 = callback(React.useState(obj4.getUseStateFromStoresSpecificHookFilter()), 2);
  const first1 = tmp6[0];
  let closure_8 = tmp6[1];
  const items = [first];
  const effect = React.useEffect(() => {
    const result = first(str[3]).setUseStateFromStoresDebuggingEnabled(first);
  }, items);
  const items1 = [tmp3[0]];
  const effect1 = React.useEffect(() => {
    const result = first(str[3]).setUseStateFromStoresExecutionWindowThresholdMs(str);
  }, items1);
  const items2 = [tmp4[0]];
  const effect2 = React.useEffect(() => {
    const result = first(str[3]).setUseStateFromStoresExecutionTimeWarningThresholdMs(str2);
  }, items2);
  const items3 = [str3];
  const effect3 = React.useEffect(() => {
    const result = first(str[3]).setUseStateFromStoresExecutionCountWarningThreshold(str3);
  }, items3);
  const items4 = [first1];
  const effect4 = React.useEffect(() => {
    const result = first(str[3]).setUseStateFromStoresSpecificHookFilter(first1);
  }, items4);
  let tmp13 = null;
  const ref = React.useRef(null);
  obj = {};
  obj = { "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000255558858949825, "Bool(false)": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024607565574193414, children: callback2(arg1(dependencyMap[6]).TableSwitchRow, { onValueChange: tmp[1], value: first }) };
  const items5 = [callback2(arg1(dependencyMap[5]).TableRowGroup, obj), ];
  if (first) {
    obj1 = { "Bool(false)": true, "Bool(false)": true };
    obj2 = { label: "Execution time window threshold" };
    obj3 = {};
    const items6 = [renderLabel("Time window to wait for before reporting violations."), ];
    obj4 = {
      defaultValue: str.toString(),
      onChange(arg0) {
          const NumberResult = Number(arg0);
          if (!isNaN(NumberResult)) {
            if (NumberResult > 1000) {
              callback(NumberResult);
            }
          }
          const current = ref.current;
          if (null != current) {
            current.setText("60000");
          }
        },
      leadingIcon: arg1(dependencyMap[9]).TimerIcon,
      ref
    };
    items6[1] = callback2(arg1(dependencyMap[8]).TextField, obj4);
    obj3.children = items6;
    obj2.subLabel = callback3(str3, obj3);
    const items7 = [callback2(arg1(dependencyMap[7]).TableRow, obj2), , , ];
    const obj5 = { label: "Cumulative execution time warning threshold" };
    const obj6 = {};
    const items8 = [renderLabel("Total execution time limit for hooks before reporting violations."), ];
    const obj7 = {
      "Null": true,
      "Null": true,
      "Null": true,
      "Null": true,
      "Null": true,
      defaultValue: str2.toString(),
      leadingIcon: arg1(dependencyMap[9]).TimerIcon,
      onChange(arg0) {
          callback2(Number(arg0));
        }
    };
    items8[1] = callback2(arg1(dependencyMap[8]).TextField, obj7);
    obj6.children = items8;
    obj5.subLabel = callback3(str3, obj6);
    items7[1] = callback2(arg1(dependencyMap[7]).TableRow, obj5);
    const obj8 = { label: "Cumulative execution count warning threshold" };
    const obj9 = {};
    const items9 = [renderLabel("Execution counts limit for hooks before reporting violations."), ];
    const obj10 = {
      "Null": "stackSymbols",
      "Null": "%Promise_all%",
      "Null": "SOLID",
      "Null": "_sent",
      "Null": "Array",
      defaultValue: str3.toString(),
      leadingIcon: arg1(dependencyMap[10]).AnalyticsIcon,
      onChange(arg0) {
          callback3(Number(arg0));
        }
    };
    items9[1] = callback2(arg1(dependencyMap[8]).TextField, obj10);
    obj9.children = items9;
    obj8.subLabel = callback3(str3, obj9);
    items7[2] = callback2(arg1(dependencyMap[7]).TableRow, obj8);
    const obj11 = { label: "Track specific hook" };
    const obj12 = {};
    const items10 = [renderLabel("Include a specific hook in the profiling regardless of limits."), ];
    const obj13 = { defaultValue: first1, leadingIcon: arg1(dependencyMap[11]).LettersIcon, trailingIcon: arg1(dependencyMap[12]).TrashIcon };
    const obj14 = {};
    const intl = arg1(dependencyMap[13]).intl;
    obj14.accessibilityLabel = intl.string(arg1(dependencyMap[13]).t.VkKicb);
    obj14.onPress = function onPress() {
      callback4("");
    };
    obj13.trailingPressableProps = obj14;
    obj13.onChange = function onChange(arg0) {
      callback4(arg0);
    };
    items10[1] = callback2(arg1(dependencyMap[8]).TextField, obj13);
    obj12.children = items10;
    obj11.subLabel = callback3(str3, obj12);
    items7[3] = callback2(arg1(dependencyMap[7]).TableRow, obj11);
    obj1.children = items7;
    tmp13 = callback3(arg1(dependencyMap[5]).TableRowGroup, obj1);
  }
  items5[1] = tmp13;
  obj.children = items5;
  return callback3(str3, obj);
};
