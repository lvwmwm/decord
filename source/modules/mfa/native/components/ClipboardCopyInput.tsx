// Module ID: 14516
// Function ID: 109336
// Name: ClipboardCopyInput
// Dependencies: []
// Exports: default

// Module 14516 (ClipboardCopyInput)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const AppStates = arg1(dependencyMap[4]).AppStates;
const jsx = arg1(dependencyMap[5]).jsx;
let closure_9 = arg1(dependencyMap[6]).createStyles({ inputContainer: { title: -1705967615, commandId: -184139303 } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/mfa/native/components/ClipboardCopyInput.tsx");

export default function ClipboardCopyInput(arg0) {
  let autoComplete;
  let autoFocus;
  let error;
  let isDisabled;
  let isValidClipboardCode;
  let keyboardType;
  let label;
  let maxLength;
  let onChangeCode;
  let placeholder;
  let textContentType;
  ({ label, onChangeCode, autoFocus } = arg0);
  ({ placeholder, isValidClipboardCode, maxLength, error, textContentType, autoComplete, keyboardType, isDisabled } = arg0);
  if (autoFocus === undefined) {
    autoFocus = true;
  }
  let callback;
  let importDefault;
  let dependencyMap;
  let closure_3;
  callback = React.useRef(null);
  const ref = React.useRef(null);
  importDefault = ref;
  let obj = callback(dependencyMap[7]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => state.getState());
  dependencyMap = stateFromStores;
  const tmp = callback2();
  const tmp5 = importDefault(dependencyMap[8])(isValidClipboardCode);
  closure_3 = tmp5;
  const items1 = [stateFromStores, tmp5, importDefault(dependencyMap[8])(onChangeCode)];
  const effect = React.useEffect(() => {
    function _run() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _run = obj;
      return obj(...arguments);
    }
    if (stateFromStores === constants.ACTIVE) {
      function run() {
        return _run(...arguments);
      }();
    }
  }, items1);
  obj = { style: tmp.inputContainer, children: jsx(callback(dependencyMap[11]).TextInput, obj) };
  obj = { ref, autoFocus, autoCorrect: false, autoCapitalize: "none", errorMessage: error, maxLength, onChange: onChangeCode, label, accessibilityLabel: label, placeholder, isClearable: true, textContentType, autoComplete, keyboardType, isDisabled };
  return <View {...obj} />;
};
