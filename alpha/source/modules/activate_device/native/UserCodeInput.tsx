// Module ID: 15705
// Function ID: 15706
// Name: UserCodeInput
// Dependencies: [32, 19, 17, 15706, 21, 5014, 15707, 15708, 5624, 1113, 7082, 5634, 2]
// Exports: UserCodeInput

// Module 15705 (UserCodeInput)
import react_native from "react-native" /* 17 */;
import intl5 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import TextInput_TextInput from "TextInput/TextInput" /* 7082 */;
import OAuthConstants2 from "OAuthConstants" /* 15706 */;
import useUserCodeSubmit from "useUserCodeSubmit" /* 15707 */;
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles" /* 15708 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const OAuthConstants = OAuthConstants2.OAuthConstants;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ text: { textAlign: "center" } });
const result = size.fileFinishedImporting("modules/activate_device/native/UserCodeInput.tsx");

export function UserCodeInput(prefilledUserCode) {
  let arr;
  let c0;
  let error;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let manualSubmit;
  let obj7;
  let onClose;
  let onUserCodeAccepted;
  let submitting;
  let str = prefilledUserCode.prefilledUserCode;
  c0 = undefined;
  ({ onClose, onUserCodeAccepted } = prefilledUserCode);
  const tmp = closure_10();
  const useState = react.useState;
  if (str == null) {
    str = "";
  }
  [arr, c0] = useState(str);
  _slicedToArray(useState(str), 2);
  const obj = useUserCodeSubmit;
  const userCodeSubmit = obj.useUserCodeSubmit(arr, onUserCodeAccepted, onClose);
  const obj2 = { children: items1 };
  ({ manualSubmit, error, submitting } = userCodeSubmit);
  const obj3 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: items };
  const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: intl.string(intl5.t.KYPNUv) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items = [metroImportDefault(Text, obj4), ];
  const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: intl2.string(intl5.t.xRHk7f) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items[1] = metroImportDefault(Text2, obj5);
  items1 = [metroImportAll(View, obj3), , ];
  const obj6 = {
    onChange(arg0) {
      return _undefined(arg0);
    },
    maxLength: OAuthConstants.USER_CODE_LENGTH,
    value: arr,
    autoFocus: true,
    autoComplete: "off",
    placeholder: intl3.formatToPlainString(intl5.t["0tbz6x"], obj7),
    errorMessage: error
  };
  const TextInput = TextInput_TextInput.TextInput;
  intl3 = intl5.intl;
  obj7 = { number: OAuthConstants.USER_CODE_LENGTH };
  items1[1] = metroImportDefault(TextInput, obj6);
  const obj8 = { size: "lg", text: intl4.string(intl5.t["3PatSz"]), onPress: manualSubmit, loading: submitting, disabled: arr.length !== OAuthConstants.USER_CODE_LENGTH, grow: true };
  const Button = components_Button_Button.Button;
  intl4 = intl5.intl;
  items1[2] = metroImportDefault(Button, obj8);
  return metroImportAll(React4, obj2);
}
