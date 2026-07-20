// Module ID: 8351
// Function ID: 66578
// Name: canEveryoneRoleViewEvent
// Dependencies: []
// Exports: default

// Module 8351 (canEveryoneRoleViewEvent)
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
      canEveryoneRoleResult = importAll(dependencyMap[8]).canEveryoneRole(Permissions.VIEW_CHANNEL, channel);
      const obj3 = importAll(dependencyMap[8]);
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
    const items = [closure_5, closure_4, closure_6, closure_3];
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
    const obj5 = arg1(dependencyMap[9]);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const isGuildEventEnded = arg1(dependencyMap[5]).isGuildEventEnded;
let closure_9 = arg1(dependencyMap[6]).GuildScheduledEventEntityTypes;
const Permissions = arg1(dependencyMap[7]).Permissions;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx");

export default function useCanInviteForGuildEvent(arg0) {
  const arg1 = arg0;
  const items = [closure_5, closure_4, closure_6, closure_3];
  const items1 = [arg0];
  return arg1(dependencyMap[10]).useStateFromStores(items, () => {
    const items = [closure_5, closure_4, closure_6, closure_3];
    return callback(arg0, items);
  }, items1);
};
export { canEveryoneRoleViewEvent };
export { isGuildEventInvitable };
