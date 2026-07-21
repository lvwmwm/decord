// Module ID: 15384
// Function ID: 117309
// Name: openAddModeratorsActionSheet
// Dependencies: []
// Exports: default

// Module 15384 (openAddModeratorsActionSheet)
function openAddModeratorsActionSheet(channel) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(dependencyMap[8]);
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = importDefault(dependencyMap[9]);
  obj = { channel, canSkip: flag };
  obj2.openLazy(arg1(dependencyMap[11])(dependencyMap[10], dependencyMap.paths), "channel-add-moderators-" + channel.id, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const RowType = arg1(dependencyMap[6]).RowType;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/stage_channels/native/channel_permissions/ViewModerators.tsx");

export default function ViewModerators(channel) {
  let guild;
  let sortedGuildRoles;
  channel = channel.channel;
  const arg1 = channel;
  let importAll;
  function handleRemovePermission(name) {
    const channel = name;
    let obj = channel(handleRemovePermission[14]);
    if (name.rowType === constants.ROLE) {
      let MEMBER = channel(handleRemovePermission[17]).PermissionOverwriteType.ROLE;
    } else {
      MEMBER = channel(handleRemovePermission[17]).PermissionOverwriteType.MEMBER;
    }
    let closure_2 = obj.removeModeratorOverwrite(name.id, MEMBER, channel);
    obj = {};
    const intl = channel(handleRemovePermission[19]).intl;
    obj.title = intl.string(channel(handleRemovePermission[19]).t.GuPYQB);
    const intl2 = channel(handleRemovePermission[19]).intl;
    obj = { name: name.name };
    obj.body = intl2.format(channel(handleRemovePermission[19]).t.xERCnZ, obj);
    const intl3 = channel(handleRemovePermission[19]).intl;
    obj.cancelText = intl3.string(channel(handleRemovePermission[19]).t.ETE/oC);
    const intl4 = channel(handleRemovePermission[19]).intl;
    obj.confirmText = intl4.string(channel(handleRemovePermission[19]).t.fKxYb0);
    // CreateGeneratorClosureLongIndex (0x67)
    const guildId = renderRowItem(tmp);
    obj.onConfirm = function() {
      return callback(...arguments);
    };
    obj.hideActionSheet = false;
    obj.confirmColor = channel(handleRemovePermission[23]).ButtonColors.RED;
    guildId(handleRemovePermission[18]).show(obj);
  }
  function renderRowItem(id) {
    return callback(guildId(handleRemovePermission[24]), { guildId: channel.guild_id, item: id, channelId: channel.id, showType: true, showRemove: canUpdateStageChannelModerators, onRemove: handleRemovePermission }, id.id);
  }
  let obj = arg1(handleRemovePermission[12]);
  const navigation = obj.useNavigation();
  obj = {
    headerRight() {
      return null;
    }
  };
  navigation.setOptions(obj);
  const guildId = channel.getGuildId();
  const importDefault = guildId;
  let obj3 = arg1(handleRemovePermission[13]);
  const items = [closure_7, closure_6];
  const items1 = [guildId];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    const obj = { guild: guild.getGuild(guildId) };
    let sortedRoles;
    if (null != guildId) {
      sortedRoles = sortedRoles.getSortedRoles(guildId);
    }
    obj.sortedGuildRoles = sortedRoles;
    return obj;
  }, items1);
  ({ guild, sortedGuildRoles } = stateFromStoresObject);
  let obj4 = arg1(handleRemovePermission[14]);
  const canUpdateStageChannelModerators = obj4.useCanUpdateStageChannelModerators(channel.id);
  importAll = canUpdateStageChannelModerators;
  if (null != guild) {
    if (null != sortedGuildRoles) {
      let isGuildStageVoiceResult = channel.isGuildStageVoice();
      let id;
      if (null != guild) {
        id = guild.id;
      }
      const memberIds = memberIds.getMemberIds(id);
      let obj5 = importAll(handleRemovePermission[15]);
      const existingMembersRows = obj5.getExistingMembersRows(memberIds, channel, guild, arg1(handleRemovePermission[16]).MODERATE_STAGE_CHANNEL_PERMISSIONS);
      const obj7 = importAll(handleRemovePermission[15]);
      const existingRolesRowWithPermissionDisabled = obj7.getExistingRolesRowWithPermissionDisabled(guild, sortedGuildRoles, channel, arg1(handleRemovePermission[16]).MODERATE_STAGE_CHANNEL_PERMISSIONS);
      if (isGuildStageVoiceResult) {
        obj = {};
        const obj1 = { paddingHorizontal: 16 };
        obj.style = obj1;
        obj.spacing = 16;
        const obj2 = {};
        const intl = arg1(handleRemovePermission[19]).intl;
        obj2.title = intl.string(arg1(handleRemovePermission[19]).t.f7VbhF);
        obj2.hasIcons = true;
        obj3 = { icon: callback(arg1(handleRemovePermission[28]).CirclePlusIcon, {}) };
        const intl2 = arg1(handleRemovePermission[19]).intl;
        obj3.label = intl2.string(arg1(handleRemovePermission[19]).t.n3bcy8);
        obj3.onPress = function onPress() {
          if (null != channel) {
            callback2(channel);
          }
        };
        obj3.disabled = !canUpdateStageChannelModerators;
        obj3.arrow = true;
        obj2.children = callback(arg1(handleRemovePermission[27]).TableRow, obj3);
        const items2 = [callback(arg1(handleRemovePermission[26]).TableRowGroup, obj2), , ];
        obj4 = {};
        const intl3 = arg1(handleRemovePermission[19]).intl;
        obj4.title = intl3.string(arg1(handleRemovePermission[19]).t.ghdVJL);
        obj4.hasIcons = true;
        obj4.children = existingRolesRowWithPermissionDisabled.map((arg0) => renderRowItem(arg0));
        items2[1] = callback(arg1(handleRemovePermission[26]).TableRowGroup, obj4);
        obj5 = {};
        const intl4 = arg1(handleRemovePermission[19]).intl;
        obj5.title = intl4.string(arg1(handleRemovePermission[19]).t.ghdVJL);
        obj5.hasIcons = true;
        obj5.children = existingMembersRows.map((arg0) => renderRowItem(arg0));
        items2[2] = callback(arg1(handleRemovePermission[26]).TableRowGroup, obj5);
        obj.children = items2;
        isGuildStageVoiceResult = callback2(arg1(handleRemovePermission[25]).Stack, obj);
      }
      return isGuildStageVoiceResult;
    }
  }
  return null;
};
export { openAddModeratorsActionSheet };
