// Module ID: 6505
// Function ID: 6506
// Name: ParagraphField
// Dependencies: [19, 17, 5366, 21, 4836, 6506, 4832, 1115, 2]
// Exports: default

// Module 6505 (ParagraphField)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import MemberVerificationConstants from "MemberVerificationConstants" /* 5366 */;
import TextArea2 from "TextArea" /* 6506 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const maxLength = MemberVerificationConstants.MAX_PARAGRAPH_RESPONSE_LENGTH;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/ParagraphField.tsx");

export default function ParagraphField(field) {
  let intl;
  field = field.field;
  const onChange = field.onChange;
  let str = field.response;
  const label = field.label;
  ({ label: null, maxLength, value: str, placeholder: intl.string(intl2.t["Sqn+Wh"]), onChange });
  const TextArea = TextArea2.TextArea;
  if (str == null) {
    str = "";
  }
  intl = tmp3(1115).intl;
  return <tmp2 style={closure_5().container}>{null}</tmp2>;
};
