// Module ID: 16190
// Function ID: 125119
// Name: onMembersLoadFail
// Dependencies: []
// Exports: default

// Module 16190 (onMembersLoadFail)
function onMembersLoadFail() {
  let obj = importDefault(dependencyMap[8]);
  obj = { key: "ERROR_OCCURRED_TRY_AGAIN", icon: importDefault(dependencyMap[9]) };
  const intl = arg1(dependencyMap[10]).intl;
  obj.content = intl.string(arg1(dependencyMap[10]).t.fEptJP);
  obj.open(obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_12, flex: 1 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[5]);
obj.containerSearchBar = { paddingBottom: importDefault(dependencyMap[7]).space.PX_12 };
const obj1 = { paddingBottom: importDefault(dependencyMap[7]).space.PX_12 };
obj.missingMembers = { borderRadius: importDefault(dependencyMap[7]).radii.md, borderWidth: 1, borderColor: importDefault(dependencyMap[7]).colors.ICON_FEEDBACK_INFO, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_FEEDBACK_INFO, marginBottom: importDefault(dependencyMap[7]).space.PX_16, padding: importDefault(dependencyMap[7]).space.PX_8, flexDirection: "row", alignItems: "center" };
const obj2 = { borderRadius: importDefault(dependencyMap[7]).radii.md, borderWidth: 1, borderColor: importDefault(dependencyMap[7]).colors.ICON_FEEDBACK_INFO, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_FEEDBACK_INFO, marginBottom: importDefault(dependencyMap[7]).space.PX_16, padding: importDefault(dependencyMap[7]).space.PX_8, flexDirection: "row", alignItems: "center" };
obj.missingMembersText = { marginLeft: importDefault(dependencyMap[7]).space.PX_8, flex: 1 };
let closure_10 = obj.createStyles(obj);
const obj3 = { marginLeft: importDefault(dependencyMap[7]).space.PX_8, flex: 1 };
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleMembers.tsx");

export default function GuildSettingsRoleMembers(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const role = guild.role;
  const importDefault = role;
  const locked = guild.locked;
  const dependencyMap = locked;
  const tmp = callback4();
  const tmp2 = callback(React.useState(""), 2);
  const formatted = tmp2[0].trim().toLowerCase();
  let callback = formatted;
  let obj = arg1(dependencyMap[11]);
  const queryGuildMembers = obj.useQueryGuildMembers(guild.id, formatted);
  let obj1 = arg1(dependencyMap[11]);
  const guildRoleMembers = obj1.useGuildRoleMembers(guild.id, role.id, onMembersLoadFail);
  const found = guildRoleMembers.filter((name) => {
    const formatted = name.name.toLowerCase();
    return formatted.includes(formatted);
  });
  const React = found;
  let obj2 = arg1(dependencyMap[12]);
  obj = { [guild.id]: guildRoleMembers.map((id) => id.id) };
  const subscribeGuildMembers = obj2.useSubscribeGuildMembers(obj, "GuildSettingsRoleMembers");
  let obj4 = arg1(dependencyMap[13]);
  const items = [closure_6];
  const items1 = [guild.id, role.id];
  const items2 = [guild.id, , ];
  ({ id: arr5[1], name: arr5[2] } = role);
  const str = tmp2[0];
  const str2 = tmp2[0].trim();
  callback = React.useCallback((name, arr) => {
    const guild = name;
    const found = arr.filter((arg0) => arg0 !== found.id);
    const role = found;
    if (found.length !== arr.length) {
      let obj = role(locked[14]);
      obj = {};
      const intl = guild(locked[10]).intl;
      obj.title = intl.string(guild(locked[10]).t.7sFNfW);
      const intl2 = guild(locked[10]).intl;
      obj = { username: name.name, roleName: role.name };
      obj.body = intl2.format(guild(locked[10]).t.scORUv, obj);
      const intl3 = guild(locked[10]).intl;
      obj.cancelText = intl3.string(guild(locked[10]).t.ETE/oC);
      const intl4 = guild(locked[10]).intl;
      obj.confirmText = intl4.string(guild(locked[10]).t.N86XcP);
      obj.onConfirm = function onConfirm() {
        const items = [found.id];
        const obj = found(closure_2[15]);
        found(closure_2[15]).updateMemberRoles(arg0.id, arg0.id, found, [], items).catch(() => {
          let obj = callback2(closure_2[8]);
          obj = { key: "ERROR_OCCURRED_TRY_AGAIN" };
          const intl = callback(closure_2[10]).intl;
          obj.content = intl.string(callback(closure_2[10]).t.fEptJP);
          obj.icon = callback2(closure_2[9]);
          obj.open(obj);
        });
      };
      obj.hideActionSheet = false;
      obj.confirmColor = guild(locked[16]).ButtonColors.RED;
      obj.show(obj);
    }
  }, items2);
  const View = callback;
  const items3 = [guild, role];
  const items4 = [callback, guild.id, locked, found];
  const callback1 = React.useCallback(() => {
    let obj = role(locked[17]);
    obj.track(constants.OPEN_POPOUT, { 9223372036854775807: true, 0: "/assets/design/components/Illustration/native/redesign/generated/images", 9223372036854775807: 375 });
    const obj2 = role(locked[18]);
    obj = { guild, role };
    obj2.openLazy(guild(locked[20])(locked[19], locked.paths), "role-add-members-" + guild.id + "-" + role.id, obj);
  }, items3);
  closure_6 = React.useCallback((item) => {
    item = item.item;
    const guild = item;
    const index = item.index;
    let obj = { end: index === found.length - 1 };
    let tmp3 = 0 === index;
    if (tmp3) {
      tmp3 = locked;
    }
    obj.start = tmp3;
    obj.guildId = guild.id;
    obj.userId = item.user.id;
    let tmp4 = null;
    if (!locked) {
      obj = { icon: callback(guild(locked[23]).CircleXIcon, {}) };
      const intl = guild(locked[10]).intl;
      obj.accessibilityLabel = intl.string(guild(locked[10]).t.7sFNfW);
      obj.accessibilityRole = "button";
      obj.onPress = function onPress() {
        return callback(item, item.roles);
      };
      obj.variant = "icon-only";
      tmp4 = callback(guild(locked[22]).IconButton, obj);
    }
    obj.trailing = tmp4;
    return callback(role(locked[21]), obj, item.id);
  }, items4);
  obj = { style: tmp.container };
  obj1 = { style: tmp.containerSearchBar, children: callback2(arg1(dependencyMap[24]).SearchField, { onChange: tmp2[1] }) };
  const items5 = [callback2(View, obj1), ];
  obj2 = { style: guild.contentContainerStyle };
  let tmp11 = null;
  if (tmp6) {
    const obj3 = { style: tmp.missingMembers };
    obj4 = { color: importDefault(dependencyMap[7]).colors.TEXT_LINK, size: "md" };
    const items6 = [callback2(arg1(dependencyMap[25]).CircleInformationIcon, obj4), ];
    const obj5 = { style: tmp.missingMembersText, variant: "text-sm/medium" };
    const intl = arg1(dependencyMap[10]).intl;
    obj5.children = intl.string(arg1(dependencyMap[10]).t.RQxHZ8);
    items6[1] = callback2(arg1(dependencyMap[26]).Text, obj5);
    obj3.children = items6;
    tmp11 = callback3(View, obj3);
  }
  const items7 = [tmp11, , ];
  let tmp18 = null;
  if (!locked) {
    const obj6 = { arrow: true };
    const intl2 = arg1(dependencyMap[10]).intl;
    obj6.label = intl2.string(arg1(dependencyMap[10]).t.ZYOK46);
    const obj7 = { size: "md" };
    obj6.icon = callback2(arg1(dependencyMap[28]).CirclePlusIcon, obj7);
    obj6.onPress = callback1;
    obj6.start = true;
    obj6.end = 0 === found.length;
    tmp18 = callback2(arg1(dependencyMap[27]).TableRow, obj6);
  }
  items7[1] = tmp18;
  items7[2] = found.map((item, index) => roleMemberCount({ item, index }));
  obj2.children = items7;
  items5[1] = callback3(View, obj2);
  obj.children = items5;
  return callback3(View, obj);
};
