// Module ID: 15125
// Function ID: 15126
// Name: CacheActionsStorageDiagnostics
// Dependencies: [5, 32, 19, 21, 15124, 4528, 4787, 1115, 5279, 4832, 5281, 2]
// Exports: default

// Module 15125 (CacheActionsStorageDiagnostics)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c4, c5, dependencyMap, ref;

let metroImportDefault;
let metroRequire;
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
      let cHxSwT;
      let closure_1;
      let intl;
      let obj3;
      let string;
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
          return { value: "HermesInternal", done: null };
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = undefined;
              if (!ref.current) {
                if (null != tmp(ref[4]).uploadStorageDiagnostics) {
                  ref.current = true;
                  onBusyChange(true);
                  _undefined(true);
                  c3 = 2;
                  c4 = 3;
                  c5 = 1;
                  const obj5 = { value: obj3.uploadStorageDiagnostics(), done: false };
                  obj3 = tmp(ref[4]);
                  return obj5;
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
              const obj6 = {
                key: "storage-diagnostics-upload",
                icon() {
                          return closure_1_6(closure_1_0(closure_1_2[6]).CircleInformationIcon, {});
                        },
                content: intl.string(closure_0(ref[7]).t["L/aQij"])
              };
              const open = tmp(ref[5]).open;
              const tmp16 = tmp(ref[5]);
              intl = closure_0(ref[7]).intl;
              open(obj6);
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
              closure_0 = value;
              const obj7 = {
                key: "storage-diagnostics-upload",
                icon() {
                          return closure_1_6(closure_1_0(closure_1_2[6]).CircleInformationIcon, {});
                        },
                content: string(cHxSwT)
              };
              const open2 = tmp(ref[5]).open;
              const tmp56 = tmp(ref[5]);
              const intl2 = closure_0(ref[7]).intl;
              string = intl2.string;
              const t = closure_0(ref[7]).t;
              if (closure_0) {
                cHxSwT = t.H99tIV;
              } else {
                cHxSwT = t.cHxSwT;
              }
              open2(obj7);
              c3 = 1;
            }
            c3 = 0;
            closure_129_2.current = false;
            closure_129_1(false);
            closure_129_0(false);
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp45) {
          ref = tmp45;
          if (0 === c3) {
            c5 = 3;
            throw tmp45;
          } else if (1 === tmp47) {
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
  const Stack = onBusyChange(5279).Stack;
  let obj2 = { variant: "text-sm/normal", color: "text-subtle", children: intl.string(onBusyChange(1115).t.Fzi4HX) };
  const Text = onBusyChange(4832).Text;
  intl = onBusyChange(1115).intl;
  items = [closure_6(Text, obj2), ];
  let obj3 = {
    variant: "secondary",
    text: intl2.string(onBusyChange(1115).t.VSunuT),
    loading: tmp2,
    disabled: tmp2,
    onPress: function handleUpload() {
      return obj(...arguments);
    }
  };
  const Button = onBusyChange(5281).Button;
  intl2 = onBusyChange(1115).intl;
  items[1] = closure_6(Button, obj3);
  return closure_7(Stack, obj);
};
