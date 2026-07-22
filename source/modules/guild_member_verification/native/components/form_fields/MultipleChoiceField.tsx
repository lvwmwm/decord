// Module ID: 9262
// Function ID: 72359
// Name: MultipleChoiceField
// Dependencies: []
// Exports: default

// Module 9262 (MultipleChoiceField)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { "Bool(false)": 155167561210812170000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000004665176389013491 } };
obj = {};
const tmp2 = arg1(dependencyMap[3]);
const merged = Object.assign(importDefault(dependencyMap[5])(arg1(dependencyMap[2]).Fonts.DISPLAY_SEMIBOLD, importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY, 16, { uppercase: false }));
obj["paddingBottom"] = 16;
obj.formHeader = obj;
let closure_6 = obj.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[5]);
const obj1 = { uppercase: false };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/MultipleChoiceField.tsx");

export default function MultipleChoiceField(hasIcons) {
  let field;
  ({ field, onChange: closure_0 } = hasIcons);
  const tmp = callback2();
  const choices = field.choices;
  const dependencyMap = choices;
  const response = field.response;
  const items = [choices];
  const memo = React.useMemo(() => choices.map((name, value) => ({ name, value })), items);
  let obj = { style: tmp.container };
  obj = { "Null": "String", "Null": "justifyContent", alignItems: "np", style: tmp.formHeader, children: field.label };
  const items1 = [callback(arg1(dependencyMap[7]).Text, obj), ];
  obj = {};
  let num = -1;
  if (null != response) {
    num = response;
  }
  obj.defaultValue = num;
  obj.onChange = function onChange(arg0) {
    return callback(arg0);
  };
  obj.hasIcons = hasIcons.hasIcons;
  obj.children = memo.map((label) => callback2(callback(choices[9]).TableRadioRow, { label: label.name, value: label.value }, label.value));
  items1[1] = callback(arg1(dependencyMap[8]).TableRadioGroup, obj);
  obj.children = items1;
  return closure_5(View, obj);
};
