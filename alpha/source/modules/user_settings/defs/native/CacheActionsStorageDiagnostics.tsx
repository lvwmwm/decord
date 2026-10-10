// Module ID: 15852
// Function ID: 15853
// Name: CacheActionsStorageDiagnostics
// Dependencies: [5, 32, 19, 21, 4809, 5046, 15850, 1126, 5377, 5088, 5379, 2]
// Exports: default

// Module 15852 (CacheActionsStorageDiagnostics)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5046 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c4, c5, dependencyMap, ref;

let metroImportDefault;
let metroRequire;
function showStorageDiagnosticsToast(text) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text, icon: CircleInformationIcon.CircleInformationIcon };
  obj.open("storage-diagnostics-upload", obj2);
}
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CacheActionsStorageDiagnostics.tsx");

export default function CacheActionsStorageDiagnostics(onBusyChange) {
  let _undefined;
  let c1;
  let closure_2;
  let intl;
  let intl2;
  let items;
  let tmp2;
  onBusyChange = onBusyChange.onBusyChange;
  c1 = undefined;
  let obj = function _handleUpload() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      let tmp33Result;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        let c3;
        try {
          let closure_0;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = undefined;
              if (!ref.current) {
                const tmp33 = tmp;
                if (null != tmp(ref[6]).uploadStorageDiagnostics) {
                  ref.current = true;
                  onBusyChange(true);
                  _undefined(true);
                  c3 = 2;
                  c4 = 3;
                  c5 = 1;
                  const obj4 = { value: tmp33Result.uploadStorageDiagnostics(), done: false };
                  tmp33Result = tmp33(ref[6]);
                  return obj4;
                }
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_2.current = false;
            closure_129_1(false);
            closure_129_0(false);
            throw ref;
          } else {
            if (2 === c4) {
              c3 = 1;
              const intl = closure_0(ref[7]).intl;
              closure_1_8(intl.string(closure_0(ref[7]).t["L/aQij"]));
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_2.current = false;
              closure_129_1(false);
              closure_129_0(false);
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let cHxSwT;
              closure_0 = value;
              const intl2 = closure_0(ref[7]).intl;
              const string = intl2.string;
              const t = closure_0(ref[7]).t;
              const tmp50 = closure_1_8;
              if (closure_0) {
                cHxSwT = t.H99tIV;
              } else {
                cHxSwT = t.cHxSwT;
              }
              tmp50(string(cHxSwT));
              c3 = 1;
            }
            c3 = 0;
            closure_129_2.current = false;
            closure_129_1(false);
            closure_129_0(false);
          }
          c5 = 3;
          return { value: "IconComponent", done: "+51" };
        } catch (tmp41) {
          ref = tmp41;
          if (0 === c3) {
            c5 = 3;
            throw tmp41;
          } else if (1 === tmp43) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, c1] = tmp;
  dependencyMap = react.useRef(false);
  obj = { children: items };
  const Stack = onBusyChange(5377).Stack;
  let obj2 = { variant: "text-sm/normal", color: "text-subtle", children: intl.string(onBusyChange(1126).t.Fzi4HX) };
  const Text = onBusyChange(5088).Text;
  intl = onBusyChange(1126).intl;
  items = [closure_6(Text, obj2), ];
  let obj3 = {
    variant: "secondary",
    text: intl2.string(onBusyChange(1126).t.VSunuT),
    loading: tmp2,
    disabled: tmp2,
    onPress: function handleUpload() {
      return obj(...arguments);
    }
  };
  const Button = onBusyChange(5379).Button;
  intl2 = onBusyChange(1126).intl;
  items[1] = closure_6(Button, obj3);
  return closure_7(Stack, obj);
};
