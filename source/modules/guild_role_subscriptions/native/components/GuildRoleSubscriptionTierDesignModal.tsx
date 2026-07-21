// Module ID: 16329
// Function ID: 126001
// Name: MemberPreviews
// Dependencies: []
// Exports: GuildRoleSubscriptionTierDesignTab, default

// Module 16329 (MemberPreviews)
function MemberPreviews(role) {
  role = role.role;
  const tmp = callback5();
  let obj = arg1(dependencyMap[8]);
  const token = obj.useToken(importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, importDefault(dependencyMap[7]).themes.DARK);
  const token1 = arg1(dependencyMap[8]).useToken(importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, importDefault(dependencyMap[7]).themes.LIGHT);
  const obj2 = arg1(dependencyMap[8]);
  const token2 = arg1(dependencyMap[8]).useToken(importDefault(dependencyMap[7]).colors.TEXT_DEFAULT, importDefault(dependencyMap[7]).themes.DARK);
  const obj3 = arg1(dependencyMap[8]);
  obj = { style: tmp.memberPreviews };
  const token3 = arg1(dependencyMap[8]).useToken(importDefault(dependencyMap[7]).colors.TEXT_DEFAULT, importDefault(dependencyMap[7]).themes.LIGHT);
  const items = [, , ];
  ({ member: arr[0], memberLight: arr[1] } = tmp);
  items[2] = { backgroundColor: token1 };
  const items1 = [callback3(arg1(dependencyMap[9]).GuildRoleSubscriptionMemberPreview, { style: items, textStyle: { color: token3 }, role }), ];
  const items2 = [, , ];
  ({ member: arr3[0], memberDark: arr3[1] } = tmp);
  items2[2] = { backgroundColor: token };
  items1[1] = callback3(arg1(dependencyMap[9]).GuildRoleSubscriptionMemberPreview, { style: items2, textStyle: { color: token2 }, role });
  obj.children = items1;
  return callback4(View, obj);
}
function Content() {
  let editStateId;
  let guildId;
  let tmp4;
  let tmp5;
  const tmp = importDefault(dependencyMap[10])();
  let obj = callback(dependencyMap[11]);
  const editStateContext = obj.useEditStateContext();
  ({ editStateId, guildId } = editStateContext);
  let obj1 = importAll(dependencyMap[12]);
  [tmp4, tmp5] = callback2(obj1.useRoleColor(editStateId, guildId), 2);
  let obj2 = importAll(dependencyMap[12]);
  const callback = callback2(obj2.useRoleIcon(editStateId, guildId), 2)[1];
  let obj3 = importAll(dependencyMap[12]);
  const role = obj3.useRole(editStateId, guildId);
  const importDefault = role;
  const items = [role];
  const customIconSrc = React.useMemo(() => {
    let roleIconData = callback(closure_3[13]).getRoleIconData(role);
    if (null == roleIconData) {
      roleIconData = {};
    }
    return roleIconData;
  }, items).customIconSrc;
  let tmp7;
  if (null != customIconSrc) {
    obj = { uri: customIconSrc };
    tmp7 = obj;
  }
  const tmp3 = callback2(obj1.useRoleColor(editStateId, guildId), 2);
  const roleSubscriptionSettingsDisabled = callback(dependencyMap[14]).useRoleSubscriptionSettingsDisabled();
  obj = {};
  const items1 = [callback3(MemberPreviews, { role }), , , , ];
  obj1 = { style: tmp.header };
  const obj6 = callback(dependencyMap[14]);
  const intl = callback(dependencyMap[16]).intl;
  obj1.children = intl.string(callback(dependencyMap[16]).t.sEr1zr);
  items1[1] = callback3(importDefault(dependencyMap[15]), obj1);
  obj2 = {};
  const tmp9 = importDefault(dependencyMap[15]);
  const intl2 = callback(dependencyMap[16]).intl;
  obj2.description = intl2.string(callback(dependencyMap[16]).t.Glqj9m);
  obj2.image = tmp7;
  obj2.imageUploadSize = UPLOAD_SMALL_SIZE;
  obj2.previewShape = callback(dependencyMap[17]).PreviewShape.SQUIRCLE;
  obj2.previewResizeMode = "cover";
  obj2.setImage = function setImage(icon) {
    return callback({ icon: icon.uri, unicodeEmoji: undefined });
  };
  obj2.disabled = roleSubscriptionSettingsDisabled;
  items1[2] = callback3(importDefault(dependencyMap[17]), obj2);
  obj3 = { style: tmp.header };
  const tmp10 = importDefault(dependencyMap[17]);
  const intl3 = callback(dependencyMap[16]).intl;
  obj3.children = intl3.string(callback(dependencyMap[16]).t.W7hH+z);
  items1[3] = callback3(importDefault(dependencyMap[15]), obj3);
  items1[4] = callback3(importDefault(dependencyMap[18]), { color: tmp4, onChange: tmp5, disabled: roleSubscriptionSettingsDisabled });
  obj.children = items1;
  return callback4(closure_11, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_7 = arg1(dependencyMap[3]).GuildRoleSubscriptionsTierScenes;
const UPLOAD_SMALL_SIZE = arg1(dependencyMap[4]).UPLOAD_SMALL_SIZE;
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { memberPreviews: {} };
obj = { borderRadius: importDefault(dependencyMap[7]).radii.none, borderColor: importDefault(dependencyMap[7]).colors.BORDER_STRONG };
obj.member = obj;
obj.memberLight = { "Null": true, "Null": 10, "Null": 0 };
obj.memberDark = { "Null": true, "Null": 10, FOREST: 0 };
let closure_12 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDesignModal.tsx");

export default function GuildRoleSubscriptionTierDesignModal(arg0) {
  const obj = {};
  const intl = arg1(dependencyMap[16]).intl;
  obj.title = intl.string(arg1(dependencyMap[16]).t.AbcgTx);
  const intl2 = arg1(dependencyMap[16]).intl;
  obj.description = intl2.string(arg1(dependencyMap[16]).t.YAUjGn);
  obj.canProceedToNextStep = true;
  obj.nextStep = constants.CONFIRMATION;
  const merged = Object.assign(arg0);
  obj["children"] = callback3(Content, {});
  return callback3(importDefault(dependencyMap[19]), obj);
};
export const GuildRoleSubscriptionTierDesignTab = function GuildRoleSubscriptionTierDesignTab() {
  return callback3(Content, {});
};
