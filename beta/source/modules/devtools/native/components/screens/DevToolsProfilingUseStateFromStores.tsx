// Module ID: 15217
// Function ID: 15218
// Name: DevToolsProfilingUseStateFromStores
// Dependencies: [32, 19, 21, 15218, 4832, 5999, 6621, 5917, 6031, 11100, 9845, 15219, 4790, 1115, 2]
// Exports: DevToolsProfilingUseStateFromStores

// Module 15217 (DevToolsProfilingUseStateFromStores)
import useStateFromStoresPerformanceDebugging from "useStateFromStoresPerformanceDebugging" /* 15218 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingUseStateFromStores.tsx");

export const DevToolsProfilingUseStateFromStores = function DevToolsProfilingUseStateFromStores() {
  let closure_2;
  let closure_4;
  let closure_6;
  let closure_8;
  let first1;
  let intl;
  let items10;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj13;
  let obj17;
  let obj21;
  let obj24;
  let obj9;
  let str;
  let str2;
  let str3;
  let tmp5;
  let value;
  const useState = str2.useState;
  let obj = value(str[3]);
  [value, tmp5] = useState(obj.getUseStateFromStoresDebuggingEnabled());
  const useState2 = str2.useState;
  const obj2 = value(str[3]);
  [str, _slicedToArray] = useState2(obj2.getUseStateFromStoresExecutionWindowThresholdMs());
  const useState3 = str2.useState;
  const obj3 = value(str[3]);
  [str2, closure_4] = useState3(obj3.getUseStateFromStoresExecutionTimeWarningThresholdMs());
  const useState4 = str2.useState;
  const obj4 = value(str[3]);
  [str3, closure_6] = useState4(obj4.getUseStateFromStoresExecutionCountWarningThreshold());
  const useState5 = str2.useState;
  const obj5 = value(str[3]);
  [first1, closure_8] = useState5(obj5.getUseStateFromStoresSpecificHookFilter());
  const items = [value];
  const effect = str2.useEffect(() => {
    const obj = useStateFromStoresPerformanceDebugging;
    const result = obj.setUseStateFromStoresDebuggingEnabled(first);
  }, items);
  const items1 = [str];
  const effect1 = str2.useEffect(() => {
    const obj = useStateFromStoresPerformanceDebugging;
    const result = obj.setUseStateFromStoresExecutionWindowThresholdMs(str);
  }, items1);
  const items2 = [str2];
  const effect2 = str2.useEffect(() => {
    const obj = useStateFromStoresPerformanceDebugging;
    const result = obj.setUseStateFromStoresExecutionTimeWarningThresholdMs(str2);
  }, items2);
  const items3 = [str3];
  const effect3 = str2.useEffect(() => {
    const obj = useStateFromStoresPerformanceDebugging;
    const result = obj.setUseStateFromStoresExecutionCountWarningThreshold(str3);
  }, items3);
  const items4 = [first1];
  const effect4 = str2.useEffect(() => {
    const obj = useStateFromStoresPerformanceDebugging;
    const result = obj.setUseStateFromStoresSpecificHookFilter(first1);
  }, items4);
  const ref = str2.useRef(null);
  const obj6 = { title: "useStateFromStores Profiling", hasIcons: false, children: closure_4(value(str[6]).TableSwitchRow, { label: "Enable useStateFromStores profiling", subLabel: "May require app restart after changes.", onValueChange: tmp5, value }) };
  const TableRowGroup = value(str[5]).TableRowGroup;
  const children = [closure_4(TableRowGroup, obj6), ];
  let tmp17Result = null;
  if (value) {
    const obj7 = { title: "useStateFromStores Config", hasIcons: false, children: items7 };
    const TableRowGroup2 = tmp(tmp2[5]).TableRowGroup;
    const obj8 = { label: "Execution time window threshold", subLabel: closure_6(str3, obj9) };
    obj9 = { children: items6 };
    const TableRow = tmp(tmp2[7]).TableRow;
    const obj10 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Time window to wait for before reporting violations." };
    items6 = [closure_4(tmp(tmp2[4]).Text, obj10), ];
    const obj11 = {
      size: "sm",
      defaultValue: str.toString(),
      onChange(arg0) {
          const NumberResult = Number(arg0);
          if (!isNaN(NumberResult)) {
            if (NumberResult > 1000) {
              closure_2(NumberResult);
            }
          }
          const current = ref.current;
          if (current != null) {
            current.setText("60000");
          }
        },
      keyboardType: "numeric",
      leadingIcon: value(str[9]).TimerIcon,
      trailingText: "ms",
      ref
    };
    const TextField = tmp(tmp2[8]).TextField;
    items6[1] = closure_4(TextField, obj11);
    items7 = [closure_4(TableRow, obj8), , , ];
    const obj12 = { label: "Cumulative execution time warning threshold", subLabel: closure_6(str3, obj13) };
    obj13 = { children: items8 };
    const TableRow2 = tmp(tmp2[7]).TableRow;
    const obj14 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Total execution time limit for hooks before reporting violations." };
    items8 = [closure_4(tmp(tmp2[4]).Text, obj14), ];
    const obj15 = {
      size: "sm",
      defaultValue: str2.toString(),
      keyboardType: "numeric",
      leadingIcon: value(str[9]).TimerIcon,
      trailingText: "ms",
      onChange(arg0) {
          closure_4(Number(arg0));
        }
    };
    const TextField2 = tmp(tmp2[8]).TextField;
    items8[1] = closure_4(TextField2, obj15);
    items7[1] = closure_4(TableRow2, obj12);
    const obj16 = { label: "Cumulative execution count warning threshold", subLabel: closure_6(str3, obj17) };
    obj17 = { children: items9 };
    const TableRow3 = tmp(tmp2[7]).TableRow;
    const obj18 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Execution counts limit for hooks before reporting violations." };
    items9 = [closure_4(tmp(tmp2[4]).Text, obj18), ];
    const obj19 = {
      size: "sm",
      defaultValue: str3.toString(),
      keyboardType: "numeric",
      leadingIcon: value(str[10]).AnalyticsIcon,
      trailingText: "times",
      onChange(arg0) {
          closure_6(Number(arg0));
        }
    };
    const TextField3 = tmp(tmp2[8]).TextField;
    items9[1] = closure_4(TextField3, obj19);
    items7[2] = closure_4(TableRow3, obj16);
    const obj20 = { label: "Track specific hook", subLabel: closure_6(str3, obj21) };
    obj21 = { children: items10 };
    const TableRow4 = tmp(tmp2[7]).TableRow;
    const obj22 = { variant: "text-xs/medium", color: "text-subtle", style: { marginBottom: 4 }, children: "Include a specific hook in the profiling regardless of limits." };
    items10 = [closure_4(tmp(tmp2[4]).Text, obj22), ];
    const obj23 = {
      size: "sm",
      keyboardType: "email-address",
      autoCapitalize: "none",
      autoCorrect: false,
      defaultValue: first1,
      placeholder: "hookName",
      leadingIcon: value(str[11]).LettersIcon,
      trailingIcon: value(str[12]).TrashIcon,
      trailingPressableProps: obj24,
      onChange(arg0) {
          closure_8(arg0);
        }
    };
    const TextField4 = tmp(tmp2[8]).TextField;
    obj24 = {
      accessibilityLabel: intl.string(value(str[13]).t.VkKicb),
      onPress() {
          closure_8("");
        }
    };
    intl = tmp(tmp2[13]).intl;
    items10[1] = closure_4(TextField4, obj23);
    items7[3] = closure_4(TableRow4, obj20);
    tmp17Result = tmp17(TableRowGroup2, obj7);
  }
  children[1] = tmp17Result;
  return closure_6(str3, { children });
};
