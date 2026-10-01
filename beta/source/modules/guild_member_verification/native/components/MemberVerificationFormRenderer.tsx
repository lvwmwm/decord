// Module ID: 5911
// Function ID: 5912
// Name: MemberVerificationFormRenderer
// Dependencies: [19, 17, 21, 4836, 4658, 5912, 5931, 6504, 6505, 6509, 2]
// Exports: default

// Module 5911 (MemberVerificationFormRenderer)
import Fragment from "Fragment" /* 21 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let field_type;

let c3;
let closure_4;
({ Keyboard: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 0 } });
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx");

export default function MemberVerificationFormRenderer(arg0) {
  let formFields;
  let mapped;
  let rulesChannelId;
  let verification;
  ({ rulesChannelId: require, formFields, onChange: importDefault, verification: dependencyMap } = arg0);
  const obj = { style: closure_6().container, children: mapped };
  mapped = undefined;
  const tmp = jsx;
  const tmp2 = closure_4;
  if (formFields != null) {
    mapped = formFields.map((field_type, index) => {
      let tmp4;
      const combined = "verification-field-" + index;
      require = index;
      field_type = field_type.field_type;
      if (MemberVerificationTypes.VerificationFormFieldTypes.TERMS === field_type) {
        tmp4 = jsx(require("TermsField"), {
          field: field_type,
          rulesChannelId: require,
          onChange(arg0) {
              importDefault(index, arg0);
              _false.dismiss();
            }
        }, combined);
      } else if (MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION === field_type) {
        tmp4 = jsx(require("UserVerification"), { verification: dependencyMap, field: field_type }, combined);
      } else if (MemberVerificationTypes.VerificationFormFieldTypes.TEXT_INPUT === field_type) {
        tmp4 = jsx(require("TextInputField"), {
          field: field_type,
          onChange(arg0) {
              return importDefault(index, arg0);
            }
        }, combined);
      } else if (MemberVerificationTypes.VerificationFormFieldTypes.PARAGRAPH === field_type) {
        tmp4 = jsx(require("ParagraphField"), {
          field: field_type,
          onChange(arg0) {
              return importDefault(index, arg0);
            }
        }, combined);
      } else {
        tmp4 = null;
        if (MemberVerificationTypes.VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
          tmp4 = jsx(require("MultipleChoiceField"), {
            field: field_type,
            hasIcons: false,
            onChange(arg0) {
                  importDefault(index, arg0);
                  _false.dismiss();
                }
          }, combined);
        }
      }
      return tmp4;
    });
  }
  return tmp(tmp2, obj);
};
