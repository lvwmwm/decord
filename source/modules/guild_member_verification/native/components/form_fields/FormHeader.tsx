// Module ID: 7488
// Function ID: 60070
// Name: FormHeader
// Dependencies: []
// Exports: default

// Module 7488 (FormHeader)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = {};
const merged = Object.assign(importDefault(dependencyMap[4])(arg1(dependencyMap[1]).Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[5]).colors.TEXT_SUBTLE, 12, { uppercase: true }));
obj["paddingBottom"] = 8;
obj.fieldHeader = obj;
let closure_3 = obj.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[4]);
const obj1 = { uppercase: true };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/FormHeader.tsx");

export default function FormHeader(children) {
  let obj = Object.create(null);
  obj.children = 0;
  const merged = Object.assign(children, obj);
  obj = {};
  const merged1 = Object.assign(merged);
  const items = [callback().fieldHeader, merged.style];
  obj["style"] = items;
  obj["children"] = children.children;
  return jsx(arg1(dependencyMap[6]).LegacyText, obj);
};
