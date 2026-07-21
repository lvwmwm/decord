// Module ID: 14003
// Function ID: 106515
// Name: GuildRoleSubscriptionMemberPreview
// Dependencies: []
// Exports: GuildRoleSubscriptionMemberPreview

// Module 14003 (GuildRoleSubscriptionMemberPreview)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).radii.xs, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.avatar = {};
obj.content = { marginStart: 16 };
obj.contextRow = {};
let closure_9 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx");

export const GuildRoleSubscriptionMemberPreview = function GuildRoleSubscriptionMemberPreview(content) {
  let guildId;
  let role;
  let style;
  let textStyle;
  content = content.content;
  if (content === undefined) {
    const intl = arg1(dependencyMap[6]).intl;
    content = intl.string(arg1(dependencyMap[6]).t.6OSasb);
  }
  ({ guildId, role } = content);
  ({ style, textStyle } = content);
  const tmp3 = callback2();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  importDefault(dependencyMap[8]);
  if (null == role) {
    return null;
  } else {
    let avatarURL;
    if (null != stateFromStores) {
      avatarURL = stateFromStores.getAvatarURL(guildId, 40);
    }
    if (null == avatarURL) {
      let obj2 = importDefault(dependencyMap[9]);
      avatarURL = obj2.getDefaultAvatarURL(undefined, undefined);
    }
    const source = importDefault(dependencyMap[9]).makeSource(avatarURL);
    let obj3 = arg1(dependencyMap[10]);
    const roleIconData = obj3.getRoleIconData(role, 16);
    obj = {};
    const items1 = [tmp3.container, style];
    obj.style = items1;
    obj = { style: tmp3.avatar, source };
    const items2 = [callback(importDefault(dependencyMap[11]), obj), ];
    const obj1 = { style: tmp3.content };
    obj2 = { style: tmp3.contextRow };
    obj3 = {};
    const obj4 = {};
    let obj10 = importAll(dependencyMap[13]);
    obj4.color = obj10.int2hex(role.color);
    obj3.style = obj4;
    obj3.children = tmp5;
    const items3 = [callback(arg1(dependencyMap[12]).Text, obj3), , , ];
    let tmp19Result = null;
    if (null != roleIconData) {
      const obj5 = {};
      const obj6 = { size: 4 };
      const items4 = [callback(arg1(dependencyMap[14]).Spacer, obj6), ];
      const obj7 = { name: role.name };
      let tmp26;
      if (null != roleIconData.customIconSrc) {
        const obj8 = { uri: roleIconData.customIconSrc };
        tmp26 = obj8;
      }
      obj7.source = tmp26;
      obj7.unicodeEmoji = roleIconData.unicodeEmoji;
      obj7.size = 16;
      items4[1] = callback(importDefault(dependencyMap[15]), obj7);
      obj5.children = items4;
      tmp19Result = closure_8(closure_7, obj5);
      const tmp19 = closure_8;
      const tmp20 = closure_7;
      const tmp21 = callback;
      const tmp25 = importDefault(dependencyMap[15]);
    }
    items3[1] = tmp19Result;
    const obj9 = { size: 8 };
    items3[2] = callback(arg1(dependencyMap[14]).Spacer, obj9);
    items3[3] = callback(arg1(dependencyMap[12]).Text, { "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000226520928722202, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015837483642314752, "Bool(false)": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030192904449987895 });
    obj2.children = items3;
    const items5 = [closure_8(View, obj2), ];
    obj10 = { style: textStyle, children: content };
    items5[1] = callback(arg1(dependencyMap[12]).Text, obj10);
    obj1.children = items5;
    items2[1] = closure_8(View, obj1);
    obj.children = items2;
    return closure_8(View, obj);
  }
};
