// Module ID: 9165
// Function ID: 71812
// Name: MemberVerificationFormRenderer
// Dependencies: []
// Exports: default

// Module 9165 (MemberVerificationFormRenderer)
importAll(dependencyMap[0]);
({ Keyboard: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp3 = arg1(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: { "Bool(false)": -1253965825, "Bool(false)": 16777472, "Bool(false)": 15477, "Bool(false)": 0 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx");

export default function MemberVerificationFormRenderer(arg0) {
  let formFields;
  ({ rulesChannelId: closure_0, formFields, onChange: closure_1, verification: closure_2 } = arg0);
  const obj = { style: callback().container };
  let mapped;
  if (null != formFields) {
    mapped = formFields.map((field_type) => function renderFormField(field_type, arg1, arg2) {
      field_type = field_type.field_type;
      if (arg1(closure_2[4]).VerificationFormFieldTypes.TERMS === field_type) {
        let obj = {
          field: field_type,
          rulesChannelId: arg1,
          onChange(arg0) {
              callback(arg1, arg0);
              closure_3.dismiss();
            }
        };
        return callback2(callback(closure_2[5]), obj, arg2);
      } else if (arg1(closure_2[4]).VerificationFormFieldTypes.VERIFICATION === field_type) {
        obj = { verification: closure_2, field: field_type };
        return callback2(callback(closure_2[6]), obj, arg2);
      } else if (arg1(closure_2[4]).VerificationFormFieldTypes.TEXT_INPUT === field_type) {
        const obj1 = {
          field: field_type,
          onChange(arg0) {
              return callback(arg1, arg0);
            }
        };
        return callback2(callback(closure_2[7]), obj1, arg2);
      } else if (arg1(closure_2[4]).VerificationFormFieldTypes.PARAGRAPH === field_type) {
        const obj2 = {
          field: field_type,
          onChange(arg0) {
              return callback(arg1, arg0);
            }
        };
        return callback2(callback(closure_2[8]), obj2, arg2);
      } else if (arg1(closure_2[4]).VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
        obj = {
          field: field_type,
          hasIcons: false,
          onChange(arg0) {
              callback(arg1, arg0);
              closure_3.dismiss();
            }
        };
        return callback2(callback(closure_2[9]), obj, arg2);
      } else {
        return null;
      }
    }(field_type, arg1, "verification-field-" + arg1));
  }
  obj.children = mapped;
  return <closure_4 {...obj} />;
};
