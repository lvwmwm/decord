// Module ID: 9177
// Function ID: 71889
// Name: MemberVerificationFormRenderer
// Dependencies: [31, 27, 33, 4130, 3950, 9178, 9179, 9267, 9268, 9269, 2]
// Exports: default

// Module 9177 (MemberVerificationFormRenderer)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ Keyboard: closure_3, View: closure_4 } = get_ActivityIndicator);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 0 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx");

export default function MemberVerificationFormRenderer(arg0) {
  let dependencyMap;
  let formFields;
  let importDefault;
  let require;
  ({ rulesChannelId: require, formFields, onChange: importDefault, verification: dependencyMap } = arg0);
  let obj = { style: callback().container };
  let mapped;
  if (null != formFields) {
    mapped = formFields.map((field_type) => (function renderFormField(field_type, arg1, arg2) {
      let closure_0 = arg1;
      field_type = field_type.field_type;
      if (outer2_0(outer2_2[4]).VerificationFormFieldTypes.TERMS === field_type) {
        let obj = {
          field: field_type,
          rulesChannelId: outer1_0,
          onChange(arg0) {
              outer2_1(closure_0, arg0);
              outer3_3.dismiss();
            }
        };
        return outer2_5(outer2_1(outer2_2[5]), obj, arg2);
      } else if (outer2_0(outer2_2[4]).VerificationFormFieldTypes.VERIFICATION === field_type) {
        obj = { verification: outer1_2, field: field_type };
        return outer2_5(outer2_1(outer2_2[6]), obj, arg2);
      } else if (outer2_0(outer2_2[4]).VerificationFormFieldTypes.TEXT_INPUT === field_type) {
        const obj1 = {
          field: field_type,
          onChange(arg0) {
              return outer2_1(closure_0, arg0);
            }
        };
        return outer2_5(outer2_1(outer2_2[7]), obj1, arg2);
      } else if (outer2_0(outer2_2[4]).VerificationFormFieldTypes.PARAGRAPH === field_type) {
        const obj2 = {
          field: field_type,
          onChange(arg0) {
              return outer2_1(closure_0, arg0);
            }
        };
        return outer2_5(outer2_1(outer2_2[8]), obj2, arg2);
      } else if (outer2_0(outer2_2[4]).VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
        obj = {
          field: field_type,
          hasIcons: false,
          onChange(arg0) {
              outer2_1(closure_0, arg0);
              outer3_3.dismiss();
            }
        };
        return outer2_5(outer2_1(outer2_2[9]), obj, arg2);
      } else {
        return null;
      }
    })(field_type, arg1, "verification-field-" + arg1));
  }
  obj.children = mapped;
  return <closure_4 style={callback().container} />;
};
