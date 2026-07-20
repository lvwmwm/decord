// Module ID: 9162
// Function ID: 71790
// Name: FormSeparator
// Dependencies: []
// Exports: default

// Module 9162 (FormSeparator)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderBottomColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.separator = obj;
let closure_2 = obj.createStyles(obj);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/FormSeparator.tsx");

export default function FormSeparator(style) {
  const obj = {};
  const merged = Object.assign(style);
  const items = [callback().separator, style.style];
  obj["style"] = items;
  return <View {...obj} />;
};
