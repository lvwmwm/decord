// Module ID: 17702
// Function ID: 17703
// Name: VerifyEmailScreen
// Dependencies: [5, 32, 19, 21, 17697, 17698, 17692, 4528, 1115, 2781, 17701, 5279, 576, 4832, 6024, 17703, 2]
// Exports: default

// Module 17702 (VerifyEmailScreen)
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, first, importDefault, ref;

let metroImportDefault;
let metroRequire;
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/VerifyEmailScreen.tsx");

export default function _default() {
  let Stack;
  let closure_3;
  let closure_5;
  let first2;
  let flow_id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let items4;
  let obj4;
  let onTaskComplete;
  let value;
  let obj = onTaskComplete(value[4]);
  const task = obj.useSafetyFlowTask().task;
  let obj2 = onTaskComplete(value[5]);
  onTaskComplete = obj2.useOnTaskComplete();
  importDefault = react.useRef("");
  const tmp2 = first2(react.useState(""), 2);
  value = tmp2[0];
  const tmp4 = tmp2[1];
  const tmp5 = first2(react.useState(false), 2);
  _asyncToGenerator = tmp7;
  const first1 = tmp5[0];
  const tmp8 = first2(react.useState(false), 2);
  first2 = tmp8[0];
  react = tmp8[1];
  const items = [onTaskComplete];
  const onAction = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let closure_2;
    let intl;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === ref) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const current = ref.current;
            if (null != current) {
              if ("" !== current) {
                c3 = 1;
                v0(true);
                closure_5(true);
                const obj4 = { verification_code: current, type: tmp(first[6]).TaskInputType.VerificationCode };
                ref = 2;
                c4 = 1;
                const obj5 = { value: onTaskComplete(obj4), done: false };
                return obj5;
              }
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_3(false);
          closure_128_5(false);
          const obj6 = { key: "SAFETY_FLOWS_VERIFY_EMAIL_ERROR", content: intl.string(ref(first[9]).PfbG6H) };
          const open = ref(first[7]).open;
          const tmp16 = ref(first[7]);
          intl = tmp(first[8]).intl;
          open(obj6);
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_3(false);
          c3 = 0;
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp28) {
        first = tmp28;
        if (0 === c3) {
          c4 = 3;
          throw tmp28;
        } else {
          ref = 1;
        }
      }
    }
  }), items);
  const items1 = [value];
  const effect = react.useEffect(() => {
    ref.current = current;
  }, items1);
  const items2 = [value, first2, onAction];
  const effect1 = react.useEffect(() => {
    const tmp = 6 !== first.length || first2;
    if (!tmp) {
      callback();
    }
  }, items2);
  let obj3 = { title: intl.string(require("module_2781")["Qm6K/s"]), action: intl2.string(require("module_2781").wq2RDq), onAction, submitting: first1, children: tmp15(Stack, obj4) };
  const tmp14 = require("SafetyFlowTaskScreen");
  intl = onTaskComplete(value[8]).intl;
  intl2 = onTaskComplete(value[8]).intl;
  obj4 = { spacing: require("native").space.PX_16, children: items3 };
  Stack = onTaskComplete(value[11]).Stack;
  let obj5 = { variant: "text-sm/medium", color: "text-subtle", children: intl3.string(require("module_2781").aveKoG) };
  const Text = onTaskComplete(value[13]).Text;
  intl3 = onTaskComplete(value[8]).intl;
  items3 = [onAction(Text, obj5), ];
  let obj6 = { spacing: require("native").space.PX_8, children: items4 };
  const Stack2 = onTaskComplete(value[11]).Stack;
  const obj7 = { placeholder: intl4.string(require("module_2781").d9Ykjr), maxLength: 6, returnKeyType: "done", value, onChange: tmp4 };
  const TextInput = onTaskComplete(value[14]).TextInput;
  intl4 = onTaskComplete(value[8]).intl;
  items4 = [onAction(TextInput, obj7), ];
  const flow_context = task.flow_context;
  const obj8 = { setLoading: tmp5[1], flowId: flow_id };
  flow_id = undefined;
  let tmp16 = require("ResendVerificationCodeButton");
  if (flow_context != null) {
    flow_id = flow_context.flow_id;
  }
  items4[1] = onAction(tmp16, obj8);
  items3[1] = closure_7(Stack2, obj6);
  return onAction(tmp14, obj3);
};
