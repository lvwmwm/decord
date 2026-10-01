// Module ID: 15235
// Function ID: 15236
// Name: ClipboardCopyInput
// Dependencies: [5, 19, 17, 1980, 1074, 21, 4836, 504, 6383, 6459, 6610, 6024, 2]
// Exports: default

// Module 15235 (ClipboardCopyInput)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3;

const View = react_native.View;
const AppStates = Constants.AppStates;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ inputContainer: { flexDirection: "column", alignSelf: "stretch" } });
const result = size.fileFinishedImporting("modules/mfa/native/components/ClipboardCopyInput.tsx");

export default function ClipboardCopyInput(arg0) {
  let autoComplete;
  let autoFocus;
  let closure_0;
  let error;
  let isDisabled;
  let isValidClipboardCode;
  let keyboardType;
  let label;
  let maxLength;
  let onChangeCode;
  let placeholder;
  let state;
  let textContentType;
  ({ onChangeCode, autoFocus } = arg0);
  ({ label, placeholder, isValidClipboardCode, maxLength, error, textContentType, autoComplete, keyboardType, isDisabled } = arg0);
  if (autoFocus === undefined) {
    autoFocus = true;
  }
  let stateFromStores;
  const tmp = closure_9();
  _require = react.useRef(null);
  const ref = react.useRef(null);
  let obj = require("get initialized");
  const items = [AppStateStore];
  stateFromStores = obj.useStateFromStores(items, () => state.getState());
  const tmp4 = ref(stateFromStores[8])(onChangeCode);
  const tmp5 = ref(stateFromStores[8])(isValidClipboardCode);
  let closure_3 = tmp5;
  const items1 = [stateFromStores, tmp5, tmp4];
  const effect = react.useEffect(() => {
    function run() {
      return obj(...arguments);
    }
    let obj = function _run() {
      obj = _asyncToGenerator(async function(arg0, value) {
        let obj2;
        let v3;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            let current;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                current = undefined;
                const self3 = this;
                const self4 = this;
                const promise = new Promise((arg0) => setTimeout(arg0, 500));
                c2 = 1;
                c3 = 1;
                const obj5 = { value: promise, done: false };
                return obj5;
              }
            } else if (1 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                const self = this;
                const self2 = this;
                const promise2 = new Promise((arg0) => {
                  obj = current(closure_1_2[9]);
                  return obj.runAfterInteractions(arg0);
                });
                c2 = 2;
                c3 = 1;
                const obj7 = { value: promise2, done: false };
                return obj7;
              }
            } else if (2 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                c2 = 3;
                c3 = 1;
                const obj9 = { value: obj2.getString(), done: false };
                obj2 = closure_2_0(stateFromStores[10]);
                return obj9;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              current = value.trim();
              if (current !== current.current) {
                current.current = current;
                if (c3(current)) {
                  current = ref.current;
                  if (current != null) {
                    current.setText(current);
                  }
                }
              }
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp26) {
            c3 = 3;
            throw tmp26;
          }
        }
      });
      return obj(...arguments);
    };
    if (stateFromStores === constants.ACTIVE) {
      run();
    }
  }, items1);
  return <View style={tmp.inputContainer}>{jsx(require("TextInput/TextInput").TextInput, { ref, autoFocus, autoCorrect: false, autoCapitalize: "none", errorMessage: error, maxLength, onChange: onChangeCode, label, placeholder, clearable: true, textContentType, autoComplete, keyboardType, disabled: isDisabled })}</View>;
};
