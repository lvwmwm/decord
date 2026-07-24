// Module ID: 14695
// Function ID: 111914
// Name: ClipboardCopyInput
// Dependencies: [5, 31, 27, 6651, 653, 33, 4130, 566, 8435, 5582, 5490, 7574, 2]
// Exports: default

// Module 14695 (ClipboardCopyInput)
import jsxProd from "jsxProd";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AppStates } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ inputContainer: { flexDirection: "column", alignSelf: "stretch" } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/mfa/native/components/ClipboardCopyInput.tsx");

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
  let _require;
  let ref;
  let stateFromStores;
  let c3;
  _require = React.useRef(null);
  ref = React.useRef(null);
  let obj = _require(stateFromStores[7]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getState());
  const tmp = callback();
  const tmp5 = ref(stateFromStores[8])(isValidClipboardCode);
  c3 = tmp5;
  const items1 = [stateFromStores, tmp5, ref(stateFromStores[8])(onChangeCode)];
  const effect = React.useEffect(() => {
    function _run() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      return obj(...arguments);
    }
    if (stateFromStores === outer1_7.ACTIVE) {
      (function run() {
        return _run(...arguments);
      })();
    }
  }, items1);
  obj = { style: tmp.inputContainer, children: jsx(_require(stateFromStores[11]).TextInput, obj) };
  obj = { ref, autoFocus, autoCorrect: false, autoCapitalize: "none", errorMessage: error, maxLength, onChange: onChangeCode, label, accessibilityLabel: label, placeholder, isClearable: true, textContentType, autoComplete, keyboardType, isDisabled };
  return <View ref={ref} autoFocus={autoFocus} autoCorrect={false} autoCapitalize="none" errorMessage={error} maxLength={maxLength} onChange={onChangeCode} label={label} accessibilityLabel={label} placeholder={placeholder} isClearable textContentType={textContentType} autoComplete={autoComplete} keyboardType={keyboardType} isDisabled={isDisabled} />;
};
