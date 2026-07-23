// Module ID: 16567
// Function ID: 129224
// Name: onTaskComplete
// Dependencies: [5, 57, 31, 33, 16562, 16563, 16557, 3831, 1212, 2460, 16566, 4541, 689, 4126, 7512, 16568, 2]
// Exports: default

// Module 16567 (onTaskComplete)
import getScreensForTaskType from "getScreensForTaskType";
import _slicedToArray from "_slicedToArray";
import result from "result";
import jsxProd from "jsxProd";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
const result = require("result").fileFinishedImporting("modules/safety_flows/native/tasks/VerifyEmailScreen.tsx");

export default function _default() {
  let obj = onTaskComplete(first[4]);
  let obj1 = onTaskComplete(first[5]);
  onTaskComplete = obj1.useOnTaskComplete();
  const importDefault = React.useRef("");
  const tmp2 = first1(React.useState(""), 2);
  first = tmp2[0];
  const tmp4 = first1(React.useState(false), 2);
  let callback = tmp5;
  const tmp6 = first1(React.useState(false), 2);
  first1 = tmp6[0];
  React = tmp8;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [onTaskComplete];
  callback = React.useCallback(callback(tmp8), items);
  const items1 = [first];
  const effect = React.useEffect(() => {
    closure_1.current = first;
  }, items1);
  const items2 = [first, first1, callback];
  const effect1 = React.useEffect(() => {
    if (!tmp) {
      callback();
    }
  }, items2);
  obj = {};
  const intl = onTaskComplete(first[8]).intl;
  obj.title = intl.string(importDefault(first[9])["Qm6K/s"]);
  const intl2 = onTaskComplete(first[8]).intl;
  obj.action = intl2.string(importDefault(first[9]).wq2RDq);
  obj.onAction = callback;
  obj.submitting = tmp4[0];
  obj = { spacing: importDefault(first[12]).space.PX_16 };
  obj1 = { variant: "text-sm/medium", color: "text-subtle" };
  const intl3 = onTaskComplete(first[8]).intl;
  obj1.children = intl3.string(importDefault(first[9]).aveKoG);
  const items3 = [callback(onTaskComplete(first[13]).Text, obj1), ];
  const obj2 = { spacing: importDefault(first[12]).space.PX_8 };
  const obj3 = { placeholder: null, maxLength: 6, returnKeyType: "done" };
  const intl4 = onTaskComplete(first[8]).intl;
  obj3.placeholder = intl4.string(importDefault(first[9]).d9Ykjr);
  obj3.value = first;
  obj3.onChange = tmp2[1];
  const items4 = [callback(onTaskComplete(first[14]).TextInput, obj3), ];
  const obj4 = { setLoading: tmp4[1] };
  const flow_context = obj.useSafetyFlowTask().task.flow_context;
  let flow_id;
  const tmp13 = importDefault(first[10]);
  if (null != flow_context) {
    flow_id = flow_context.flow_id;
  }
  obj4.flowId = flow_id;
  items4[1] = callback(importDefault(first[15]), obj4);
  obj2.children = items4;
  items3[1] = closure_7(onTaskComplete(first[11]).Stack, obj2);
  obj.children = items3;
  obj.children = closure_7(onTaskComplete(first[11]).Stack, obj);
  return callback(tmp13, obj);
};
