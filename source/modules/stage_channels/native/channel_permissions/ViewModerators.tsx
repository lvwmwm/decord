// Module ID: 15509
// Function ID: 119526
// Name: openAddModeratorsActionSheet
// Dependencies: [5, 31, 1917, 1910, 1838, 653, 7485, 33, 675, 4098, 15510, 1934, 1456, 566, 4948, 8413, 1356, 1881, 4471, 1212, 4140, 8414, 3830, 1273, 8421, 4541, 5503, 5165, 11254, 2]
// Exports: default

// Module 15509 (openAddModeratorsActionSheet)
import ME from "ME";
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_createForOfIteratorHelperLoose";
import { AnalyticEvents } from "ME";
import { RowType } from "RowType";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
const require = arg1;
function openAddModeratorsActionSheet(channel) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(675);
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = importDefault(4098);
  obj = { channel, canSkip: flag };
  obj2.openLazy(require(1934) /* maybeLoadBundle */(15510, dependencyMap.paths), "channel-add-moderators-" + channel.id, obj);
}
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/native/channel_permissions/ViewModerators.tsx");

export default function ViewModerators(channel) {
  let guild;
  let sortedGuildRoles;
  channel = channel.channel;
  let canUpdateStageChannelModerators;
  function handleRemovePermission(name) {
    let closure_0 = name;
    let obj = channel(handleRemovePermission[14]);
    if (name.rowType === outer1_9.ROLE) {
      let MEMBER = channel(handleRemovePermission[17]).PermissionOverwriteType.ROLE;
    } else {
      MEMBER = channel(handleRemovePermission[17]).PermissionOverwriteType.MEMBER;
    }
    let closure_2 = obj.removeModeratorOverwrite(name.id, MEMBER, closure_0);
    obj = {};
    const intl = channel(handleRemovePermission[19]).intl;
    obj.title = intl.string(channel(handleRemovePermission[19]).t.GuPYQB);
    const intl2 = channel(handleRemovePermission[19]).intl;
    obj = { name: name.name };
    obj.body = intl2.format(channel(handleRemovePermission[19]).t.xERCnZ, obj);
    const intl3 = channel(handleRemovePermission[19]).intl;
    obj.cancelText = intl3.string(channel(handleRemovePermission[19]).t["ETE/oC"]);
    const intl4 = channel(handleRemovePermission[19]).intl;
    obj.confirmText = intl4.string(channel(handleRemovePermission[19]).t.fKxYb0);
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_1 = renderRowItem(tmp);
    obj.onConfirm = function() {
      return callback(...arguments);
    };
    obj.hideActionSheet = false;
    obj.confirmColor = channel(handleRemovePermission[23]).ButtonColors.RED;
    guildId(handleRemovePermission[18]).show(obj);
  }
  function renderRowItem(id) {
    return outer1_10(guildId(handleRemovePermission[24]), { guildId: channel.guild_id, item: id, channelId: channel.id, showType: true, showRemove: canUpdateStageChannelModerators, onRemove: handleRemovePermission }, id.id);
  }
  let obj = channel(handleRemovePermission[12]);
  const navigation = obj.useNavigation();
  obj = {
    headerRight() {
      return null;
    }
  };
  navigation.setOptions(obj);
  const guildId = channel.getGuildId();
  let obj3 = channel(handleRemovePermission[13]);
  const items = [closure_7, _createForOfIteratorHelperLoose];
  const items1 = [guildId];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    const obj = { guild: outer1_7.getGuild(guildId) };
    let sortedRoles;
    if (null != guildId) {
      sortedRoles = outer1_6.getSortedRoles(guildId);
    }
    obj.sortedGuildRoles = sortedRoles;
    return obj;
  }, items1);
  ({ guild, sortedGuildRoles } = stateFromStoresObject);
  let obj4 = channel(handleRemovePermission[14]);
  canUpdateStageChannelModerators = obj4.useCanUpdateStageChannelModerators(channel.id);
  if (null != guild) {
    if (null != sortedGuildRoles) {
      let isGuildStageVoiceResult = channel.isGuildStageVoice();
      let id;
      if (null != guild) {
        id = guild.id;
      }
      memberIds = memberIds.getMemberIds(id);
      let obj5 = canUpdateStageChannelModerators(handleRemovePermission[15]);
      const existingMembersRows = obj5.getExistingMembersRows(memberIds, channel, guild, channel(handleRemovePermission[16]).MODERATE_STAGE_CHANNEL_PERMISSIONS);
      const obj7 = canUpdateStageChannelModerators(handleRemovePermission[15]);
      const existingRolesRowWithPermissionDisabled = obj7.getExistingRolesRowWithPermissionDisabled(guild, sortedGuildRoles, channel, channel(handleRemovePermission[16]).MODERATE_STAGE_CHANNEL_PERMISSIONS);
      if (isGuildStageVoiceResult) {
        obj = {};
        const obj1 = { paddingHorizontal: 16 };
        obj.style = obj1;
        obj.spacing = 16;
        const obj2 = {};
        let intl = channel(handleRemovePermission[19]).intl;
        obj2.title = intl.string(channel(handleRemovePermission[19]).t.f7VbhF);
        obj2.hasIcons = true;
        obj3 = { icon: callback(channel(handleRemovePermission[28]).CirclePlusIcon, {}) };
        let intl2 = channel(handleRemovePermission[19]).intl;
        obj3.label = intl2.string(channel(handleRemovePermission[19]).t.n3bcy8);
        obj3.onPress = function onPress() {
          if (null != channel) {
            outer1_12(channel);
          }
        };
        obj3.disabled = !canUpdateStageChannelModerators;
        obj3.arrow = true;
        obj2.children = callback(channel(handleRemovePermission[27]).TableRow, obj3);
        const items2 = [callback(channel(handleRemovePermission[26]).TableRowGroup, obj2), , ];
        obj4 = {};
        let intl3 = channel(handleRemovePermission[19]).intl;
        obj4.title = intl3.string(channel(handleRemovePermission[19]).t.ghdVJL);
        obj4.hasIcons = true;
        obj4.children = existingRolesRowWithPermissionDisabled.map((arg0) => renderRowItem(arg0));
        items2[1] = callback(channel(handleRemovePermission[26]).TableRowGroup, obj4);
        obj5 = {};
        let intl4 = channel(handleRemovePermission[19]).intl;
        obj5.title = intl4.string(channel(handleRemovePermission[19]).t.ghdVJL);
        obj5.hasIcons = true;
        obj5.children = existingMembersRows.map((arg0) => renderRowItem(arg0));
        items2[2] = callback(channel(handleRemovePermission[26]).TableRowGroup, obj5);
        obj.children = items2;
        isGuildStageVoiceResult = callback2(channel(handleRemovePermission[25]).Stack, obj);
      }
      return isGuildStageVoiceResult;
    }
  }
  return null;
};
export { openAddModeratorsActionSheet };
