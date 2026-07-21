// Module ID: 10175
// Function ID: 78603
// Name: RolePill
// Dependencies: []
// Exports: default

// Module 10175 (RolePill)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, MAX_VISUAL_ROLE_LENGTH: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).radii.xs };
obj.container = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.pill = { borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.bubble = { borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.ICON_MUTED };
const obj2 = { borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.ICON_MUTED };
obj.verifiedContainer = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.roleIcon = { paddingRight: 4 };
let closure_8 = obj.createStyles(obj);
const obj3 = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
const result = arg1(dependencyMap[13]).fileFinishedImporting("components_native/common/RolePill.tsx");

export default function RolePill(role) {
  let color;
  let guildId;
  role = role.role;
  const arg1 = role;
  ({ guildId, color } = role);
  const DeveloperMode = arg1(dependencyMap[6]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = arg1(dependencyMap[7]);
  obj = { guildId, roleId: role.id, size: 12 };
  const roleIcon = obj.useRoleIcon(obj);
  let name = role.name;
  let importDefault = name;
  if (role.name.length > closure_5) {
    name = role.name;
    const _HermesInternal = HermesInternal;
    const combined = "" + name.slice(0, closure_5) + "...";
    importDefault = combined;
    name = combined;
  }
  if (null == color) {
    color = role.colorString;
  }
  const tags = role.tags;
  let guild_connections;
  if (null != tags) {
    guild_connections = tags.guild_connections;
  }
  const tmp7 = callback2();
  obj = {};
  let disableInteraction = !setting;
  if (!disableInteraction) {
    disableInteraction = role.disableInteraction;
  }
  obj.disabled = disableInteraction;
  obj.style = tmp7.container;
  obj.onPress = function handlePress() {
    role(closure_2[8]).copy(role.id);
    const obj = role(closure_2[8]);
    role(closure_2[9]).roleIdCopied(combined);
  };
  obj.accessible = false;
  const obj1 = { style: tmp7.pill };
  if (undefined !== guild_connections) {
    const obj2 = { style: tmp7.verifiedContainer, roleId: role.id };
    if (null == guildId) {
      guildId = closure_4;
    }
    obj2.guildId = guildId;
    let tmp18;
    if (null != color) {
      tmp18 = color;
    }
    obj2.roleColor = tmp18;
    obj2.size = 14;
    obj2.displayRoleIcon = false;
    let tmp11Result = callback(importDefault(dependencyMap[11]), obj2);
    const tmp14 = callback;
    const tmp17 = importDefault(dependencyMap[11]);
  } else {
    const obj3 = {};
    const items = [tmp7.bubble, ];
    if (null != color) {
      const obj4 = { backgroundColor: color };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    items[1] = obj5;
    obj3.style = items;
    tmp11Result = callback(View, obj3);
    const tmp11 = callback;
    const tmp12 = View;
  }
  const items1 = [tmp11Result, , ];
  let tmp19 = null;
  if (null != roleIcon) {
    const obj6 = { style: tmp7.roleIcon, children: roleIcon };
    tmp19 = callback(View, obj6);
  }
  items1[1] = tmp19;
  const obj7 = { children: name };
  items1[2] = callback(arg1(dependencyMap[12]).Text, obj7);
  obj1.children = items1;
  obj.children = closure_7(View, obj1);
  return callback(arg1(dependencyMap[10]).PressableHighlight, obj);
};
