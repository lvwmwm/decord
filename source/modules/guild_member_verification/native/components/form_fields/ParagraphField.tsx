// Module ID: 9260
// Function ID: 72344
// Name: ParagraphField
// Dependencies: []
// Exports: default

// Module 9260 (ParagraphField)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_3 = arg1(dependencyMap[2]).MAX_PARAGRAPH_RESPONSE_LENGTH;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { container: { no: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011797377198986917, channel: 0.0000000000000000000000000000000000000000000000000000000000000000000000012074054740832208 } };
obj = {};
const tmp3 = arg1(dependencyMap[4]);
const merged = Object.assign(importDefault(dependencyMap[6])(arg1(dependencyMap[3]).Fonts.DISPLAY_SEMIBOLD, importDefault(dependencyMap[7]).colors.MOBILE_TEXT_HEADING_PRIMARY, 16, { uppercase: false }));
obj["paddingBottom"] = 16;
obj.formHeader = obj;
let closure_6 = obj.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[6]);
const obj1 = { uppercase: false };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/ParagraphField.tsx");

export default function ParagraphField(field) {
  field = field.field;
  const tmp = callback2();
  const response = field.response;
  let obj = { style: tmp.container };
  obj = { delete: "String", dispatch: "kind", raw: "justifyContent", style: tmp.formHeader, children: field.label };
  const items = [callback(arg1(dependencyMap[8]).Text, obj), ];
  obj = { maxLength: closure_3 };
  let str = "";
  if (null != response) {
    str = response;
  }
  obj.value = str;
  const intl = arg1(dependencyMap[10]).intl;
  obj.placeholder = intl.string(arg1(dependencyMap[10]).t.Sqn+Wh);
  obj.onChange = field.onChange;
  items[1] = callback(arg1(dependencyMap[9]).TextArea, obj);
  obj.children = items;
  return closure_5(View, obj);
};
