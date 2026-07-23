// Module ID: 8362
// Function ID: 66650
// Name: canEveryoneRoleViewEvent
// Dependencies: [1353, 1348, 1907, 1838, 3758, 6758, 1354, 653, 3763, 8363, 566, 2]
// Exports: default

// Module 8362 (canEveryoneRoleViewEvent)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import { isGuildEventEnded } from "_isNativeReflectConstruct";
import { GuildScheduledEventEntityTypes as closure_9 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { Permissions } from "ME";

const require = arg1;
function canEveryoneRoleViewEvent(guildEvent, items1) {
  let obj;
  let tmp = items1;
  if (items1 === undefined) {
    const items = [closure_4];
    tmp = items;
  }
  [obj] = tmp;
  let tmp3 = guildEvent;
  if ("entity_type" in guildEvent) {
    obj = {};
    ({ entity_type: obj2.entityType, channel_id: obj2.channelId } = guildEvent);
    tmp3 = obj;
  }
  if (tmp3.entityType === constants.EXTERNAL) {
    return true;
  } else {
    const channel = obj.getChannel(tmp4);
    let canEveryoneRoleResult = null != channel;
    if (canEveryoneRoleResult) {
      canEveryoneRoleResult = importAll(3763).canEveryoneRole(Permissions.VIEW_CHANNEL, channel);
      const obj3 = importAll(3763);
    }
    return canEveryoneRoleResult;
  }
}
function isGuildEventInvitable(guildEvent) {
  let obj;
  let obj2;
  let obj3;
  let obj4;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_5, closure_4, _createForOfIteratorHelperLoose, _isNativeReflectConstruct];
    tmp = items;
  }
  [obj, obj2, obj3, obj4] = tmp;
  if (isGuildEventEnded(guildEvent)) {
    return false;
  } else {
    const channel_id = guildEvent.channel_id;
    if (guildEvent.entity_type === constants.EXTERNAL) {
      let defaultChannel = obj.getDefaultChannel(guildEvent.guild_id);
    } else {
      defaultChannel = obj2.getChannel(channel_id);
    }
    const guild = obj3.getGuild(guildEvent.guild_id);
    const stageInstanceByChannel = obj4.getStageInstanceByChannel(channel_id);
    const obj5 = require(8363) /* canViewInviteModal */;
    const tmp15 = !obj5.canViewInviteModal(closure_7, guild, defaultChannel, stageInstanceByChannel);
    let tmp16 = !tmp15;
    if (!tmp15) {
      let tmp18 = null != defaultChannel;
      if (tmp18) {
        const items1 = [obj2];
        tmp18 = canEveryoneRoleViewEvent(guildEvent, items1);
      }
      tmp16 = tmp18;
    }
    return tmp16;
  }
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx");

export default function useCanInviteForGuildEvent(arg0) {
  const _require = arg0;
  let items = [closure_5, closure_4, _createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => {
    const items = [outer1_5, outer1_4, outer1_6, outer1_3];
    return outer1_12(closure_0, items);
  }, items1);
};
export { canEveryoneRoleViewEvent };
export { isGuildEventInvitable };
