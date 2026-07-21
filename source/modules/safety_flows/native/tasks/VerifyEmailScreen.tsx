// Module ID: 16434
// Function ID: 126947
// Name: onTaskComplete
// Dependencies: []
// Exports: default

// Module 16434 (onTaskComplete)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/safety_flows/native/tasks/VerifyEmailScreen.tsx");

export default function _default() {
  let obj = arg1(dependencyMap[4]);
  let obj1 = arg1(dependencyMap[5]);
  const onTaskComplete = obj1.useOnTaskComplete();
  const arg1 = onTaskComplete;
  const importDefault = React.useRef("");
  const tmp2 = callback2(React.useState(""), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  const tmp4 = callback2(React.useState(false), 2);
  let callback = tmp5;
  const tmp6 = callback2(React.useState(false), 2);
  const first1 = tmp6[0];
  const callback2 = first1;
  const React = tmp8;
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
  const intl = arg1(dependencyMap[8]).intl;
  obj.title = intl.string(importDefault(dependencyMap[9]).Qm6K/s);
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.action = intl2.string(importDefault(dependencyMap[9]).wq2RDq);
  obj.onAction = callback;
  obj.submitting = tmp4[0];
  obj = { spacing: importDefault(dependencyMap[12]).space.PX_16 };
  obj1 = {};
  const intl3 = arg1(dependencyMap[8]).intl;
  obj1.children = intl3.string(importDefault(dependencyMap[9]).aveKoG);
  const items3 = [callback(arg1(dependencyMap[13]).Text, obj1), ];
  const obj2 = { spacing: importDefault(dependencyMap[12]).space.PX_8 };
  const obj3 = { "Null": 49419008, "Null": 49421056, "Null": 49421056 };
  const intl4 = arg1(dependencyMap[8]).intl;
  obj3.placeholder = intl4.string(importDefault(dependencyMap[9]).d9Ykjr);
  obj3.value = first;
  obj3.onChange = tmp2[1];
  const items4 = [callback(arg1(dependencyMap[14]).TextInput, obj3), ];
  const obj4 = { setLoading: tmp4[1] };
  const flow_context = obj.useSafetyFlowTask().task.flow_context;
  let flow_id;
  const tmp13 = importDefault(dependencyMap[10]);
  if (null != flow_context) {
    flow_id = flow_context.flow_id;
  }
  obj4.flowId = flow_id;
  items4[1] = callback(importDefault(dependencyMap[15]), obj4);
  obj2.children = items4;
  items3[1] = closure_7(arg1(dependencyMap[11]).Stack, obj2);
  obj.children = items3;
  obj.children = closure_7(arg1(dependencyMap[11]).Stack, obj);
  return callback(tmp13, obj);
};
