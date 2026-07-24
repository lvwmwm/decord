// Module ID: 14680
// Function ID: 111770
// Name: DevToolsProfilingUseStateFromStores
// Dependencies: [57, 31, 33, 14681, 4126, 5501, 5502, 5165, 5773, 10902, 9633, 7506, 4089, 1212, 2]
// Exports: DevToolsProfilingUseStateFromStores

// Module 14680 (DevToolsProfilingUseStateFromStores)
import _slicedToArray from "_slicedToArray";
import result from "result";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
let result = require("jsxProd").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingUseStateFromStores.tsx");

export const DevToolsProfilingUseStateFromStores = function DevToolsProfilingUseStateFromStores() {
  function renderLabel(children) {
    const obj = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children };
    return callback2(first(str[4]).Text, obj);
  }
  let obj = first(str[3]);
  const tmp = callback(str2.useState(obj.getUseStateFromStoresDebuggingEnabled()), 2);
  first = tmp[0];
  let obj1 = first(str[3]);
  const tmp3 = callback(str2.useState(obj1.getUseStateFromStoresExecutionWindowThresholdMs()), 2);
  str = tmp3[0];
  callback = tmp3[1];
  let obj2 = first(str[3]);
  const tmp4 = callback(str2.useState(obj2.getUseStateFromStoresExecutionTimeWarningThresholdMs()), 2);
  str2 = tmp4[0];
  const callback2 = tmp4[1];
  let obj3 = first(str[3]);
  const tmp5 = callback(str2.useState(obj3.getUseStateFromStoresExecutionCountWarningThreshold()), 2);
  const str3 = tmp5[0];
  const callback3 = tmp5[1];
  let obj4 = first(str[3]);
  const tmp6 = callback(str2.useState(obj4.getUseStateFromStoresSpecificHookFilter()), 2);
  const first1 = tmp6[0];
  let closure_8 = tmp6[1];
  const items = [first];
  const effect = str2.useEffect(() => {
    const result = first(str[3]).setUseStateFromStoresDebuggingEnabled(first);
  }, items);
  const items1 = [str];
  const effect1 = str2.useEffect(() => {
    const result = first(str[3]).setUseStateFromStoresExecutionWindowThresholdMs(str);
  }, items1);
  const items2 = [str2];
  const effect2 = str2.useEffect(() => {
    const result = first(str[3]).setUseStateFromStoresExecutionTimeWarningThresholdMs(str2);
  }, items2);
  const items3 = [str3];
  const effect3 = str2.useEffect(() => {
    const result = first(str[3]).setUseStateFromStoresExecutionCountWarningThreshold(str3);
  }, items3);
  const items4 = [first1];
  const effect4 = str2.useEffect(() => {
    const result = first(str[3]).setUseStateFromStoresSpecificHookFilter(first1);
  }, items4);
  let tmp13 = null;
  const ref = str2.useRef(null);
  obj = {};
  obj = { title: "useStateFromStores Profiling", hasIcons: false };
  obj1 = { label: "Enable useStateFromStores profiling", subLabel: "May require app restart after changes.", onValueChange: tmp[1], value: first };
  obj.children = callback2(first(str[6]).TableSwitchRow, obj1);
  const items5 = [callback2(first(str[5]).TableRowGroup, obj), ];
  if (first) {
    obj2 = { title: "useStateFromStores Config", hasIcons: false };
    obj3 = { label: "Execution time window threshold" };
    obj4 = {};
    const items6 = [renderLabel("Time window to wait for before reporting violations."), ];
    const obj5 = {
      size: "sm",
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
      keyboardType: "numeric",
      leadingIcon: first(str[9]).TimerIcon,
      trailingText: "ms",
      ref
    };
    items6[1] = callback2(first(str[8]).TextField, obj5);
    obj4.children = items6;
    obj3.subLabel = callback3(str3, obj4);
    const items7 = [callback2(first(str[7]).TableRow, obj3), , , ];
    const obj6 = { label: "Cumulative execution time warning threshold" };
    const obj7 = {};
    const items8 = [renderLabel("Total execution time limit for hooks before reporting violations."), ];
    const obj8 = {
      size: "sm",
      defaultValue: str2.toString(),
      keyboardType: "numeric",
      leadingIcon: first(str[9]).TimerIcon,
      trailingText: "ms",
      onChange(arg0) {
          callback2(Number(arg0));
        }
    };
    items8[1] = callback2(first(str[8]).TextField, obj8);
    obj7.children = items8;
    obj6.subLabel = callback3(str3, obj7);
    items7[1] = callback2(first(str[7]).TableRow, obj6);
    const obj9 = { label: "Cumulative execution count warning threshold" };
    const obj10 = {};
    const items9 = [renderLabel("Execution counts limit for hooks before reporting violations."), ];
    const obj11 = {
      size: "sm",
      defaultValue: str3.toString(),
      keyboardType: "numeric",
      leadingIcon: first(str[10]).AnalyticsIcon,
      trailingText: "times",
      onChange(arg0) {
          callback3(Number(arg0));
        }
    };
    items9[1] = callback2(first(str[8]).TextField, obj11);
    obj10.children = items9;
    obj9.subLabel = callback3(str3, obj10);
    items7[2] = callback2(first(str[7]).TableRow, obj9);
    const obj12 = { label: "Track specific hook" };
    const obj13 = {};
    const items10 = [renderLabel("Include a specific hook in the profiling regardless of limits."), ];
    const obj14 = { size: "sm", keyboardType: "email-address", autoCapitalize: "none", autoCorrect: false, defaultValue: first1, placeholder: "hookName", leadingIcon: first(str[11]).LettersIcon, trailingIcon: first(str[12]).TrashIcon };
    const obj15 = {};
    const intl = first(str[13]).intl;
    obj15.accessibilityLabel = intl.string(first(str[13]).t.VkKicb);
    obj15.onPress = function onPress() {
      callback4("");
    };
    obj14.trailingPressableProps = obj15;
    obj14.onChange = function onChange(arg0) {
      callback4(arg0);
    };
    items10[1] = callback2(first(str[8]).TextField, obj14);
    obj13.children = items10;
    obj12.subLabel = callback3(str3, obj13);
    items7[3] = callback2(first(str[7]).TableRow, obj12);
    obj2.children = items7;
    tmp13 = callback3(first(str[5]).TableRowGroup, obj2);
  }
  items5[1] = tmp13;
  obj.children = items5;
  return callback3(str3, obj);
};
