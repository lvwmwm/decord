// Module ID: 16348
// Function ID: 126133
// Name: GuildRoleSubscriptionRolePreview
// Dependencies: []
// Exports: GuildRoleSubscriptionRolePreview

// Module 16348 (GuildRoleSubscriptionRolePreview)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).radii.xs, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.avatar = {};
obj.content = { marginStart: 16 };
obj.contextRow = {};
let closure_8 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateRolePreview.tsx");

export const GuildRoleSubscriptionRolePreview = function GuildRoleSubscriptionRolePreview(content) {
  let guildId;
  let roleColor;
  let roleName;
  let style;
  let textStyle;
  content = content.content;
  if (content === undefined) {
    const intl = arg1(dependencyMap[6]).intl;
    content = intl.string(arg1(dependencyMap[6]).t.6OSasb);
  }
  const roleImage = content.roleImage;
  ({ style, textStyle, roleColor, roleName, guildId } = content);
  const tmp3 = callback3();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = importDefault(dependencyMap[8]);
  obj = { style: items1 };
  const items1 = [tmp3.container, style];
  const name = obj1.useName(guildId, null, stateFromStores);
  obj = { style: tmp3.avatar, source: { uri: roleImage } };
  const items2 = [callback(importDefault(dependencyMap[9]), obj), ];
  obj1 = { style: tmp3.content };
  const obj2 = { style: tmp3.contextRow };
  const obj3 = {};
  const obj4 = { color: importAll(dependencyMap[11]).int2hex(roleColor) };
  obj3.style = obj4;
  obj3.children = name;
  const items3 = [callback(arg1(dependencyMap[10]).Text, obj3), callback(arg1(dependencyMap[12]).Spacer, { size: 4 }), callback(importDefault(dependencyMap[13]), { name: roleName, source: { uri: roleImage }, size: 16 }), callback(arg1(dependencyMap[12]).Spacer, { size: 8 }), callback(arg1(dependencyMap[10]).Text, { "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000226520928722202, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015837483642314752, "Bool(false)": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030192904449987895 })];
  obj2.children = items3;
  const items4 = [callback2(View, obj2), ];
  const obj5 = { style: textStyle, children: content };
  items4[1] = callback(arg1(dependencyMap[10]).Text, obj5);
  obj1.children = items4;
  items2[1] = callback2(View, obj1);
  obj.children = items2;
  return callback2(View, obj);
};
