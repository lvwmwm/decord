// Module ID: 4948
// Function ID: 42427
// Name: createOrUpdateModeratorOverwrite
// Dependencies: [3759, 1391, 1194, 1348, 1838, 3758, 1353, 653, 483, 3763, 1356, 566, 2]
// Exports: canLurkerListen, createModeratorOverwrite, isEmptyOverwrite, removeModeratorOverwrite, useCanCreateStageChannelByGuild, useCanModerateRequestToSpeak, useCanUpdateStageChannelModerators

// Module 4948 (createOrUpdateModeratorOverwrite)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isGuildOwner } from "isGuildOwner";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_11;
const require = arg1;
function createOrUpdateModeratorOverwrite(id, type, deny) {
  const obj = { id, type };
  deny = undefined;
  if (null != deny) {
    deny = deny.deny;
  }
  if (null == deny) {
    deny = importAll(3763).NONE;
  }
  obj.deny = importAll(483).remove(deny, require(1356) /* Permissions */.MODERATE_STAGE_CHANNEL_PERMISSIONS);
  const obj2 = importAll(483);
  let allow;
  if (null != deny) {
    allow = deny.allow;
  }
  if (null == allow) {
    allow = importAll(3763).NONE;
  }
  obj.allow = importAll(483).combine(require(1356) /* Permissions */.MODERATE_STAGE_CHANNEL_PERMISSIONS, allow);
  return obj;
}
({ GuildFeatures: closure_10, Permissions: closure_11 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/StageChannelPermissionUtils.tsx");

export const createModeratorOverwrite = function createModeratorOverwrite(id, MEMBER, outer3_0) {
  let tmp2;
  if (null != outer3_0) {
    tmp2 = outer3_0.permissionOverwrites[id];
  }
  return createOrUpdateModeratorOverwrite(id, MEMBER, tmp2);
};
export { createOrUpdateModeratorOverwrite };
export const removeModeratorOverwrite = function removeModeratorOverwrite(id, MEMBER, closure_0) {
  let tmp;
  if (null != closure_0) {
    tmp = closure_0.permissionOverwrites[id];
  }
  const obj = { id, type: MEMBER };
  let deny;
  if (null != tmp) {
    deny = tmp.deny;
  }
  if (null == deny) {
    deny = importAll(3763).NONE;
  }
  obj.deny = deny;
  let allow;
  if (null != tmp) {
    allow = tmp.allow;
  }
  if (null == allow) {
    allow = importAll(3763).NONE;
  }
  obj.allow = importAll(483).remove(allow, require(1356) /* Permissions */.MODERATE_STAGE_CHANNEL_PERMISSIONS);
  return obj;
};
export const isEmptyOverwrite = function isEmptyOverwrite(arg0) {
  let allow;
  let deny;
  ({ allow, deny } = arg0);
  let equalsResult = importAll(483).equals(allow, importAll(3763).NONE);
  if (equalsResult) {
    equalsResult = importAll(483).equals(deny, importAll(3763).NONE);
    const obj2 = importAll(483);
  }
  return equalsResult;
};
export const useCanCreateStageChannelByGuild = function useCanCreateStageChannelByGuild(guildId) {
  const _require = guildId;
  const items = [closure_8, closure_5, _createForOfIteratorHelperLoose];
  const items1 = [guildId];
  return _require(566).useStateFromStores(items, () => {
    const id = outer1_5.getId();
    const guild = outer1_7.getGuild(guildId);
    let tmp3 = null != guild;
    if (tmp3) {
      const features = guild.features;
      const tmp5 = !features.has(outer1_10.COMMUNITY);
      let tmp6 = !tmp5;
      if (!tmp5) {
        const tmp8 = !outer1_4(guild, id);
        let canResult = !tmp8;
        if (tmp8) {
          canResult = outer1_8.can(guildId(outer1_2[10]).CREATE_STAGE_CHANNEL_PERMISSIONS, guild);
        }
        tmp6 = canResult;
      }
      tmp3 = tmp6;
    }
    return tmp3;
  }, items1);
};
export const useCanUpdateStageChannelModerators = function useCanUpdateStageChannelModerators(id) {
  const _require = id;
  const items = [closure_8, _createForOfIteratorHelperLoose, closure_6];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => {
    const channel = outer1_6.getChannel(id);
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let tmp3 = !outer1_8.can(outer1_11.ADMINISTRATOR, outer1_7.getGuild(guildId));
    if (tmp3) {
      tmp3 = !outer1_8.can(outer1_11.MANAGE_ROLES, channel, undefined, undefined, true);
    }
    let canResult = !tmp3;
    if (tmp3) {
      canResult = outer1_8.can(id(outer1_2[10]).UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, channel);
    }
    return canResult;
  }, items1);
};
export const useCanModerateRequestToSpeak = function useCanModerateRequestToSpeak(id) {
  const _require = id;
  const items = [closure_6, closure_8];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = outer1_8.can(outer1_11.MUTE_MEMBERS, outer1_6.getChannel(closure_0));
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
        canResult = closure_8.can(require(1356) /* Permissions */.JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
      }
      tmp5 = canResult;
    }
    tmp2 = tmp5;
  }
  return tmp2;
};
