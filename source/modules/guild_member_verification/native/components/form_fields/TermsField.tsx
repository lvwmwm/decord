// Module ID: 9170
// Function ID: 71832
// Name: TermsField
// Dependencies: []
// Exports: default

// Module 9170 (TermsField)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: { flexDirection: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011797377198986917, alignItems: 0.00000000000000000000000000000000000000000000000000000000000000000000000120740547407299 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsField.tsx");

export default function TermsField(field) {
  let onChange;
  let rulesChannelId;
  field = field.field;
  ({ onChange, rulesChannelId } = field);
  const response = field.response;
  let tmp2 = null != response;
  if (tmp2) {
    tmp2 = response;
  }
  let obj = { style: callback3().container };
  const items = [callback(importDefault(dependencyMap[4]), { rules: field.values, rulesChannelId }), ];
  obj = { 0: null, 0: null, checked: tmp2 };
  const intl = arg1(dependencyMap[6]).intl;
  obj.label = intl.string(arg1(dependencyMap[6]).t.2EXfGJ);
  obj.onPress = onChange;
  items[1] = callback(arg1(dependencyMap[5]).TableCheckboxRow, obj);
  obj.children = items;
  return callback2(View, obj);
};
