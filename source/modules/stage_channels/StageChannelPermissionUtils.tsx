// Module ID: 4946
// Function ID: 42389
// Name: createOrUpdateModeratorOverwrite
// Dependencies: []
// Exports: canLurkerListen, createModeratorOverwrite, isEmptyOverwrite, removeModeratorOverwrite, useCanCreateStageChannelByGuild, useCanModerateRequestToSpeak, useCanUpdateStageChannelModerators

// Module 4946 (createOrUpdateModeratorOverwrite)
function createOrUpdateModeratorOverwrite(id, type, deny) {
  const obj = { id, type };
  deny = undefined;
  if (null != deny) {
    deny = deny.deny;
  }
  if (null == deny) {
    deny = importAll(dependencyMap[9]).NONE;
  }
  obj.deny = importAll(dependencyMap[8]).remove(deny, type(dependencyMap[10]).MODERATE_STAGE_CHANNEL_PERMISSIONS);
  const obj2 = importAll(dependencyMap[8]);
  let allow;
  if (null != deny) {
    allow = deny.allow;
  }
  if (null == allow) {
    allow = importAll(dependencyMap[9]).NONE;
  }
  obj.allow = importAll(dependencyMap[8]).combine(type(dependencyMap[10]).MODERATE_STAGE_CHANNEL_PERMISSIONS, allow);
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
const isGuildOwner = arg1(dependencyMap[1]).isGuildOwner;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ GuildFeatures: closure_10, Permissions: closure_11 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/stage_channels/StageChannelPermissionUtils.tsx");

export const createModeratorOverwrite = function createModeratorOverwrite(id, MEMBER, closure_0) {
  let tmp2;
  if (null != closure_0) {
    tmp2 = closure_0.permissionOverwrites[id];
  }
  return createOrUpdateModeratorOverwrite(id, MEMBER, tmp2);
};
export { createOrUpdateModeratorOverwrite };
export const removeModeratorOverwrite = function removeModeratorOverwrite(id, MEMBER, channel) {
  let tmp;
  if (null != channel) {
    tmp = channel.permissionOverwrites[id];
  }
  const obj = { id, type: MEMBER };
  let deny;
  if (null != tmp) {
    deny = tmp.deny;
  }
  if (null == deny) {
    deny = importAll(dependencyMap[9]).NONE;
  }
  obj.deny = deny;
  let allow;
  if (null != tmp) {
    allow = tmp.allow;
  }
  if (null == allow) {
    allow = importAll(dependencyMap[9]).NONE;
  }
  obj.allow = importAll(dependencyMap[8]).remove(allow, MEMBER(dependencyMap[10]).MODERATE_STAGE_CHANNEL_PERMISSIONS);
  return obj;
};
export const isEmptyOverwrite = function isEmptyOverwrite(arg0) {
  let allow;
  let deny;
  ({ allow, deny } = arg0);
  let equalsResult = importAll(dependencyMap[8]).equals(allow, importAll(dependencyMap[9]).NONE);
  if (equalsResult) {
    equalsResult = importAll(dependencyMap[8]).equals(deny, importAll(dependencyMap[9]).NONE);
    const obj2 = importAll(dependencyMap[8]);
  }
  return equalsResult;
};
export const useCanCreateStageChannelByGuild = function useCanCreateStageChannelByGuild(guildId) {
  const arg1 = guildId;
  const items = [closure_8, closure_5, closure_7];
  const items1 = [guildId];
  return arg1(dependencyMap[11]).useStateFromStores(items, () => {
    const id = id.getId();
    const guild = guild.getGuild(arg0);
    let tmp3 = null != guild;
    if (tmp3) {
      const features = guild.features;
      const tmp5 = !features.has(constants.COMMUNITY);
      let tmp6 = !tmp5;
      if (!tmp5) {
        const tmp8 = !callback(guild, id);
        let canResult = !tmp8;
        if (tmp8) {
          canResult = closure_8.can(arg0(closure_2[10]).CREATE_STAGE_CHANNEL_PERMISSIONS, guild);
        }
        tmp6 = canResult;
      }
      tmp3 = tmp6;
    }
    return tmp3;
  }, items1);
};
export const useCanUpdateStageChannelModerators = function useCanUpdateStageChannelModerators(id) {
  const arg1 = id;
  const items = [closure_8, closure_7, closure_6];
  const items1 = [id];
  return arg1(dependencyMap[11]).useStateFromStores(items, () => {
    const channel = channel.getChannel(arg0);
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let tmp3 = !closure_8.can(constants.ADMINISTRATOR, guild.getGuild(guildId));
    if (tmp3) {
      tmp3 = !closure_8.can(constants.MANAGE_ROLES, channel, undefined, undefined, true);
    }
    let canResult = !tmp3;
    if (tmp3) {
      canResult = closure_8.can(arg0(closure_2[10]).UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, channel);
    }
    return canResult;
  }, items1);
};
export const useCanModerateRequestToSpeak = function useCanModerateRequestToSpeak(id) {
  const arg1 = id;
  const items = [closure_6, closure_8];
  const items1 = [id];
  return arg1(dependencyMap[11]).useStateFromStores(items, () => {
    let canResult = null != arg0;
    if (canResult) {
      canResult = closure_8.can(constants.MUTE_MEMBERS, channel.getChannel(arg0));
    }
    return canResult;
  }, items1);
};
export const canLurkerListen = function canLurkerListen(channel) {
  const tmp = null == channel || !channel.isGuildStageVoice();
  let tmp2 = !tmp;
  if (!tmp) {
    const tmp4 = !lurking.isLurking(channel.guild_id);
    let tmp5 = !tmp4;
    if (!tmp4) {
      const tmp7 = !_public.isPublic(channel.id);
      let canResult = !tmp7;
      if (!tmp7) {
        canResult = closure_8.can(arg1(dependencyMap[10]).JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
      }
      tmp5 = canResult;
    }
    tmp2 = tmp5;
  }
  return tmp2;
};
