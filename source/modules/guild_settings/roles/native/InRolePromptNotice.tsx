// Module ID: 16193
// Function ID: 125121
// Name: InRolePromptNotice
// Dependencies: []
// Exports: default

// Module 16193 (InRolePromptNotice)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const RoleFlags = arg1(dependencyMap[2]).RoleFlags;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, paddingBottom: importDefault(dependencyMap[5]).space.PX_4, flexDirection: "row", alignItems: "center" };
obj.promptRow = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.promptText = { marginLeft: importDefault(dependencyMap[5]).space.PX_4 };
obj.icon = {};
let closure_7 = obj.createStyles(obj);
const obj1 = { marginLeft: importDefault(dependencyMap[5]).space.PX_4 };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_settings/roles/native/InRolePromptNotice.tsx");

export default function InRolePromptNotice(role) {
  role = role.role;
  let stringResult = callback();
  let obj = arg1(dependencyMap[6]);
  if (!obj.hasFlag(role.flags, RoleFlags.IN_PROMPT)) {
    return null;
  } else {
    let obj1 = arg1(dependencyMap[7]);
    obj = { style: stringResult.promptRow };
    let Icon = arg1(dependencyMap[8]).Icon;
    if (isRolePowerfulResult) {
      obj = { style: stringResult.icon, source: importDefault(tmp9[9]), color: importDefault(tmp9[5]).unsafe_rawColors.YELLOW_300 };
      const items = [tmp7(Icon, obj), ];
      obj1 = { style: stringResult.promptText, variant: "text-sm/medium" };
      const intl2 = tmp8(tmp9[11]).intl;
      stringResult = intl2.string(tmp8(tmp9[11]).t.YRbgXz);
      obj1.children = stringResult;
      Icon = tmp7(tmp8(tmp9[10]).Text, obj1);
      items[1] = Icon;
      obj.children = items;
      let tmp5Result = tmp5(tmp6, obj);
    } else {
      const obj2 = { style: stringResult.icon, source: importDefault(tmp9[9]) };
      const items1 = [tmp7(Icon, obj2), ];
      const obj3 = { style: stringResult.promptText, variant: "text-sm/medium" };
      const intl = tmp8(tmp9[11]).intl;
      obj3.children = intl.string(tmp8(tmp9[11]).t.mqeO2v);
      items1[1] = tmp7(tmp8(tmp9[10]).Text, obj3);
      obj.children = items1;
      tmp5Result = tmp5(tmp6, obj);
    }
    const isRolePowerfulResult = obj1.isRolePowerful(role);
  }
};
