// Module ID: 6176
// Function ID: 6177
// Name: MemberVerificationFormRenderer
// Dependencies: [19, 17, 21, 5090, 558, 576, 4902, 6177, 6198, 6761, 6762, 6766, 2]

// Module 6176 (MemberVerificationFormRenderer)
import Fragment from "Fragment" /* 21 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4902 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ Keyboard: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 0 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function MemberVerificationFormRenderer(rulesChannelId) {
  let formFields;
  let onChange;
  let verification;
  const obj = rulesChannelId(verification[5]);
  const cResult = obj.c(10);
  rulesChannelId = rulesChannelId.rulesChannelId;
  ({ formFields, onChange } = rulesChannelId);
  verification = rulesChannelId.verification;
  const tmp2 = closure_6();
  if (cResult[0] === onChange) {
    if (cResult[1] === rulesChannelId) {
      let tmp3;
      if (cResult[2] === verification) {
        tmp3 = cResult[3];
      }
      let closure_3 = tmp3;
      if (cResult[4] === formFields) {
        let tmp4;
        if (cResult[5] === tmp3) {
          tmp4 = cResult[6];
        }
        if (cResult[7] === tmp2.container) {
          let tmp7;
          if (cResult[8] === tmp4) {
            tmp7 = cResult[9];
          }
          return tmp7;
        }
        const tmp10 = <closure_4 style={tmp2.container}>{tmp4}</closure_4>;
        cResult[7] = tmp2.container;
        cResult[8] = tmp4;
        cResult[9] = tmp10;
        tmp7 = tmp10;
      }
      let mapped;
      if (formFields != null) {
        mapped = formFields.map((item, index) => closure_3(item, index, "verification-field-" + index));
      }
      cResult[4] = formFields;
      cResult[5] = tmp3;
      cResult[6] = mapped;
      tmp4 = mapped;
    }
  }
  function renderFormField(field_type, arg1, arg2) {
    let closure_0;
    rulesChannelId = arg1;
    field_type = field_type.field_type;
    if (rulesChannelId(verification[6]).VerificationFormFieldTypes.TERMS === field_type) {
      return jsx(onChange(verification[7]), {
        field: field_type,
        rulesChannelId,
        onChange(arg0) {
            onChange(closure_0, arg0);
            _false.dismiss();
          }
      }, arg2);
    } else if (rulesChannelId(verification[6]).VerificationFormFieldTypes.VERIFICATION === field_type) {
      return jsx(onChange(verification[8]), { verification, field: field_type }, arg2);
    } else if (rulesChannelId(verification[6]).VerificationFormFieldTypes.TEXT_INPUT === field_type) {
      return jsx(onChange(verification[9]), {
        field: field_type,
        onChange(arg0) {
            return onChange(closure_0, arg0);
          }
      }, arg2);
    } else if (rulesChannelId(verification[6]).VerificationFormFieldTypes.PARAGRAPH === field_type) {
      return jsx(onChange(verification[10]), {
        field: field_type,
        onChange(arg0) {
            return onChange(closure_0, arg0);
          }
      }, arg2);
    } else if (rulesChannelId(verification[6]).VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
      return jsx(onChange(verification[11]), {
        field: field_type,
        hasIcons: false,
        onChange(arg0) {
            onChange(closure_0, arg0);
            _false.dismiss();
          }
      }, arg2);
    } else {
      return null;
    }
  }
  cResult[0] = onChange;
  cResult[1] = rulesChannelId;
  cResult[2] = verification;
  cResult[3] = renderFormField;
  tmp3 = renderFormField;
}) : (function MemberVerificationFormRenderer(arg0) {
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
});
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx");

export default tmp4;
