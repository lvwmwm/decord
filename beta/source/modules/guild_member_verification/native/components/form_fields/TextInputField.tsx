// Module ID: 6504
// Function ID: 6505
// Name: TextInputField
// Dependencies: [19, 17, 5366, 21, 4836, 6024, 4832, 1115, 2]
// Exports: default

// Module 6504 (TextInputField)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import MemberVerificationConstants from "MemberVerificationConstants" /* 5366 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6024 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const MAX_TEXT_RESPONSE_LENGTH = MemberVerificationConstants.MAX_TEXT_RESPONSE_LENGTH;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TextInputField.tsx");

export default function TextInputField(field) {
  let intl;
  field = field.field;
  const onChange = field.onChange;
  let str = field.response;
  const label = field.label;
  ({ label: null, maxLength: MAX_TEXT_RESPONSE_LENGTH, value: str, placeholder: intl.string(intl2.t["Sqn+Wh"]), onChange });
  const TextInput = TextInput_TextInput.TextInput;
  if (str == null) {
    str = "";
  }
  intl = tmp3(1115).intl;
  return <tmp2 style={closure_5().container}>{null}</tmp2>;
};
