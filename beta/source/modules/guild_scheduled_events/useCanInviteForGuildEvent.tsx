// Module ID: 8982
// Function ID: 8983
// Name: useCanInviteForGuildEvent
// Dependencies: [4868, 4863, 4944, 4885, 4946, 6855, 4869, 1072, 4951, 8983, 504, 2]
// Exports: default

// Module 8982 (useCanInviteForGuildEvent)
import Constants from "Constants" /* 1072 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 4869 */;
import PermissionUtilsAll from "PermissionUtils" /* 4951 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6855 */;
import canViewInviteModal from "canViewInviteModal" /* 8983 */;
import StageInstanceStore from "StageInstanceStore" /* 4868 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildChannelStore from "GuildChannelStore" /* 4944 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function canEveryoneRoleViewEvent(guildEvent, items1) {
  let obj;
  let tmp = items1;
  if (items1 === undefined) {
    const items = [ChannelStore];
    tmp = items;
  }
  [obj] = tmp;
  let tmp3 = guildEvent;
  if ("entity_type" in guildEvent) {
    const obj4 = { entityType: null, channelId: null };
    ({ entity_type: obj2.entityType, channel_id: obj2.channelId } = guildEvent);
    tmp3 = obj4;
  }
  if (tmp3.entityType === constants.EXTERNAL) {
    return true;
  } else {
    const channel = obj.getChannel(tmp4);
    let canEveryoneRoleResult = null != channel;
    if (canEveryoneRoleResult) {
      const obj3 = PermissionUtilsAll;
      canEveryoneRoleResult = obj3.canEveryoneRole(Permissions.VIEW_CHANNEL, channel);
    }
    return canEveryoneRoleResult;
  }
}
function isGuildEventInvitable(guildEvent, items) {
  let obj;
  let obj2;
  let obj3;
  let obj4;
  let tmp = items;
  if (items === undefined) {
    items = [GuildChannelStore, ChannelStore, GuildStore, StageInstanceStore];
    tmp = items;
  }
  [obj, obj2, obj3, obj4] = tmp;
  if (isGuildEventEnded(guildEvent)) {
    return false;
  } else {
    let defaultChannel;
    const channel_id = guildEvent.channel_id;
    const guild_id = guildEvent.guild_id;
    if (guildEvent.entity_type === constants.EXTERNAL) {
      defaultChannel = obj.getDefaultChannel(guildEvent.guild_id);
    } else {
      defaultChannel = obj2.getChannel(channel_id);
    }
    const guild = obj3.getGuild(guild_id);
    const stageInstanceByChannel = obj4.getStageInstanceByChannel(channel_id);
    const obj5 = canViewInviteModal;
    let canViewInviteModalResult = obj5.canViewInviteModal(PermissionStore, guild, defaultChannel, stageInstanceByChannel);
    if (canViewInviteModalResult) {
      let tmp17 = null != defaultChannel;
      if (tmp17) {
        const items1 = [obj2];
        tmp17 = canEveryoneRoleViewEvent(guildEvent, items1);
      }
      canViewInviteModalResult = tmp17;
    }
    return canViewInviteModalResult;
  }
}
const isGuildEventEnded = GuildScheduledEventStore.isGuildEventEnded;
const constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx");

export default function useCanInviteForGuildEvent(arg0) {
  let closure_0;
  _require = arg0;
  let items = [GuildChannelStore, ChannelStore, GuildStore, StageInstanceStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const items = [GuildChannelStore, ChannelStore, GuildStore, StageInstanceStore];
    return isGuildEventInvitable(closure_0, items);
  }, items1);
};
export { canEveryoneRoleViewEvent };
export { isGuildEventInvitable };
