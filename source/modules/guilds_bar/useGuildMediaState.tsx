// Module ID: 14907
// Function ID: 113666
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1347, 1353, 1352, 4149, 1194, 1348, 1838, 3758, 3767, 1906, 4325, 4146, 653, 669, 566, 14908, 8499, 14897, 3748, 8005, 21, 1356, 2]
// Exports: default

// Module 14907 (_createForOfIteratorHelperLoose)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isVoiceChannel } from "_callSuper";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import { BasicPermissions } from "ME";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function canConnectToChannel(type) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = closure_10;
  }
  let canBasicChannelResult = null != type;
  if (canBasicChannelResult) {
    canBasicChannelResult = type.type !== require(669) /* set */.ChannelTypes.GUILD_STAGE_VOICE;
  }
  if (canBasicChannelResult) {
    canBasicChannelResult = arg1 !== type.id;
  }
  if (canBasicChannelResult) {
    canBasicChannelResult = obj.canBasicChannel(BasicPermissions.VIEW_CHANNEL, type);
  }
  return canBasicChannelResult;
}
let result = require("_callSuper").fileFinishedImporting("modules/guilds_bar/useGuildMediaState.tsx");

export default function useGuildMediaState(guild_id) {
  const _require = guild_id;
  let items = [closure_13];
  const stateFromStores = _require(isDontBadgeMutedVcsEnabled[14]).useStateFromStores(items, () => outer1_13.isMuted(closure_0));
  let obj = _require(isDontBadgeMutedVcsEnabled[14]);
  isDontBadgeMutedVcsEnabled = _require(isDontBadgeMutedVcsEnabled[15]).useIsDontBadgeMutedVcsEnabled("useGuildMediaState");
  const obj2 = _require(isDontBadgeMutedVcsEnabled[15]);
  const guildActiveEvent = _require(isDontBadgeMutedVcsEnabled[16]).useGuildActiveEvent(guild_id);
  const obj3 = _require(isDontBadgeMutedVcsEnabled[16]);
  const items1 = [guildActiveEvent, closure_11];
  const stateFromStoresArray = _require(isDontBadgeMutedVcsEnabled[14]).useStateFromStoresArray(items1, () => {
    const embeddedActivitiesForGuild = guildActiveEvent.getEmbeddedActivitiesForGuild(closure_0);
    return embeddedActivitiesForGuild.filter((userIds) => {
      const items = [...userIds.userIds];
      return !callback(isDontBadgeMutedVcsEnabled[17]).hasBlockedOrIgnoredUserIds(items, outer2_11.getBlockedOrIgnoredIDs());
    });
  });
  const obj4 = _require(isDontBadgeMutedVcsEnabled[14]);
  const first = stateFromStoresArray[0];
  let _location;
  if (null != first) {
    _location = first.location;
  }
  const embeddedActivityLocationChannelId = _require(isDontBadgeMutedVcsEnabled[18]).getEmbeddedActivityLocationChannelId(_location);
  const obj5 = _require(isDontBadgeMutedVcsEnabled[18]);
  const isActivitiesInTextEnabled = _require(isDontBadgeMutedVcsEnabled[19]).useIsActivitiesInTextEnabled(embeddedActivityLocationChannelId);
  let obj6 = _require(isDontBadgeMutedVcsEnabled[19]);
  const items2 = [closure_12, closure_14, id, closure_10, selectedVoiceChannelHasVideo, closure_13];
  const items3 = [guild_id, stateFromStores, isDontBadgeMutedVcsEnabled];
  const stateFromStoresObject = _require(isDontBadgeMutedVcsEnabled[14]).useStateFromStoresObject(items2, () => {
    const voiceChannelId = outer1_12.getVoiceChannelId();
    const guild = id.getGuild(guild_id);
    if (null != guild) {
      const afkChannelId = guild.afkChannelId;
    }
    const usersWithVideo = outer1_14.getUsersWithVideo(guild_id);
    let obj = guild_id(isDontBadgeMutedVcsEnabled[17]);
    const result = obj.filterBlockedUsersFromVoiceStates(outer1_14.getVoiceStates(guild_id));
    obj = {};
    let flag = false;
    if (!stateFromStores) {
      flag = false;
      const keys = Object.keys();
      if (keys !== undefined) {
        flag = false;
        while (keys[tmp] !== undefined) {
          let tmp31 = tmp8;
          let channelId = result[tmp8].channelId;
          if (null == channelId) {
            continue;
          } else {
            let tmp10 = selectedVoiceChannelHasVideo;
            let tmp9 = outer1_18;
            let tmp12;
            let basicChannel = selectedVoiceChannelHasVideo.getBasicChannel(channelId);
            if (null != afkChannelId) {
              tmp12 = afkChannelId;
            }
            let tmp13 = outer1_10;
            if (!tmp9(basicChannel, tmp12, outer1_10)) {
              continue;
            } else {
              let tmp14 = isDontBadgeMutedVcsEnabled;
              flag = true;
              if (!isDontBadgeMutedVcsEnabled) {
                break;
              } else {
                let tmp15 = outer1_13;
                let tmp16 = guild_id;
                flag = true;
                if (!outer1_13.isGuildOrCategoryOrChannelMuted(guild_id, channelId)) {
                  break;
                }
              }
            }
            break;
          }
          continue;
        }
      }
    }
    obj.guildHasVoice = flag;
    let flag2 = false;
    if (!stateFromStores) {
      const tmp18 = outer1_16(usersWithVideo);
      let iter = tmp18();
      flag2 = false;
      if (!iter.done) {
        while (true) {
          let tmp19 = result[iter.value];
          channelId = undefined;
          if (null != tmp19) {
            channelId = tmp19.channelId;
          }
          if (null != channelId) {
            let tmp22 = selectedVoiceChannelHasVideo;
            let tmp21 = outer1_18;
            let tmp24;
            let basicChannel1 = selectedVoiceChannelHasVideo.getBasicChannel(channelId);
            if (null != afkChannelId) {
              tmp24 = afkChannelId;
            }
            let tmp25 = outer1_10;
            if (tmp21(basicChannel1, tmp24, outer1_10)) {
              let tmp26 = isDontBadgeMutedVcsEnabled;
              flag2 = true;
              if (!isDontBadgeMutedVcsEnabled) {
                break;
              } else {
                let tmp27 = outer1_13;
                let tmp28 = guild_id;
                flag2 = true;
                if (!outer1_13.isGuildOrCategoryOrChannelMuted(guild_id, channelId)) {
                  break;
                }
              }
            }
            break;
          }
          let iter2 = tmp18();
          iter = iter2;
          flag2 = false;
          if (iter2.done) {
            break;
          }
        }
      }
    }
    obj.guildHasVideo = flag2;
    let hasVideoResult = null != voiceChannelId;
    if (hasVideoResult) {
      hasVideoResult = outer1_14.hasVideo(voiceChannelId);
    }
    obj.selectedVoiceChannelHasVideo = hasVideoResult;
    return obj;
  }, items3);
  const guildHasVoice = stateFromStoresObject.guildHasVoice;
  const guildHasVideo = stateFromStoresObject.guildHasVideo;
  selectedVoiceChannelHasVideo = stateFromStoresObject.selectedVoiceChannelHasVideo;
  id = guildHasVideo.getId();
  const obj7 = _require(isDontBadgeMutedVcsEnabled[14]);
  const items4 = [closure_12, selectedVoiceChannelHasVideo, guildActiveEvent, stateFromStoresArray, guildHasVoice, closure_10, closure_13];
  const items5 = [guild_id, stateFromStores, selectedVoiceChannelHasVideo, id, isActivitiesInTextEnabled, stateFromStoresArray, guildActiveEvent, guildHasVoice, guildHasVideo, isDontBadgeMutedVcsEnabled];
  return _require(isDontBadgeMutedVcsEnabled[14]).useStateFromStoresObject(items4, () => {
    const voiceChannelId = outer1_12.getVoiceChannelId();
    let channel = selectedVoiceChannelHasVideo.getChannel(voiceChannelId);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    let tmp4 = guild_id === guild_id;
    if (!tmp4) {
      if (stateFromStores) {
        return { audio: false, video: false, screenshare: false, liveStage: false, activeEvent: false, activity: false, isCurrentUserConnected: false };
      }
    }
    let obj = stateFromStores(isDontBadgeMutedVcsEnabled[20]);
    const keys = obj.keys(stateFromStoresArray.getStageInstancesByGuild(guild_id));
    let someResult = keys.some((channelId) => {
      const channel = selectedVoiceChannelHasVideo.getChannel(channelId);
      let canResult = null != channel;
      if (canResult) {
        canResult = outer2_10.can(callback(isDontBadgeMutedVcsEnabled[21]).JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
      }
      return canResult;
    });
    let tmp7 = tmp4;
    if (tmp4) {
      const channel1 = selectedVoiceChannelHasVideo.getChannel(voiceChannelId);
      let isGuildStageVoiceResult;
      if (null != channel1) {
        isGuildStageVoiceResult = channel1.isGuildStageVoice();
      }
      tmp7 = null != isGuildStageVoiceResult;
      const tmp8 = isGuildStageVoiceResult;
    }
    if (tmp7) {
      tmp7 = tmp8;
    }
    let tmp11 = tmp4;
    if (tmp4) {
      tmp11 = null != guildHasVoice.getActiveStreamForUser(id, guild_id);
    }
    let result = guild_id(isDontBadgeMutedVcsEnabled[17]).filterOutStreamsByBlockedOwner(guildHasVoice.getAllApplicationStreams());
    let someResult1 = result.some((guildId) => {
      let tmp = guildId.guildId !== outer1_0;
      if (!tmp) {
        let result = outer1_2;
        if (outer1_2) {
          result = outer2_13.isGuildOrCategoryOrChannelMuted(outer1_0, guildId.channelId);
        }
        tmp = result;
      }
      return !tmp;
    });
    if (isActivitiesInTextEnabled) {
      let flag = stateFromStoresArray.length > 0;
    } else {
      const tmp18 = outer1_16(stateFromStoresArray);
      const iter = tmp18();
      let iter2 = iter;
      flag = false;
      if (!iter.done) {
        while (true) {
          let tmp19 = selectedVoiceChannelHasVideo;
          let tmp20 = guild_id;
          let tmp21 = isDontBadgeMutedVcsEnabled;
          let obj6 = guild_id(isDontBadgeMutedVcsEnabled[18]);
          let channel2 = selectedVoiceChannelHasVideo.getChannel(obj6.getEmbeddedActivityLocationChannelId(iter2.value.location));
          if (null == channel2) {
            let iter3 = tmp18();
            iter2 = iter3;
            flag = false;
            if (iter3.done) {
              break;
            }
          } else {
            let tmp23 = isActivitiesInTextEnabled;
            flag = true;
            if (isActivitiesInTextEnabled(channel2.type)) {
              break;
            }
          }
          break;
        }
      }
    }
    if (tmp4) {
      let channel_id;
      if (null != guildActiveEvent) {
        channel_id = guildActiveEvent.channel_id;
      }
      let tmp33 = tmp4;
      if (tmp4) {
        tmp33 = selectedVoiceChannelHasVideo;
      }
      let flag2 = true;
      let tmp28 = tmp33;
      let tmp27 = channel_id === voiceChannelId;
      someResult = tmp7;
      someResult1 = tmp11;
      flag = tmp25;
      const tmp32 = channel_id === voiceChannelId;
    } else {
      flag2 = guildHasVoice;
      tmp27 = null != guildActiveEvent;
      tmp28 = guildHasVideo;
    }
    obj = { audio: flag2, video: tmp28, screenshare: someResult1, liveStage: someResult, activeEvent: tmp27, activity: flag };
    if (!tmp4) {
      tmp4 = tmp7;
    }
    obj.isCurrentUserConnected = tmp4;
    return obj;
  }, items5);
};
