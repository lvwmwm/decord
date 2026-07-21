// Module ID: 14733
// Function ID: 111100
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 14733 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
    canBasicChannelResult = type.type !== arg1(dependencyMap[13]).ChannelTypes.GUILD_STAGE_VOICE;
  }
  if (canBasicChannelResult) {
    canBasicChannelResult = arg1 !== type.id;
  }
  if (canBasicChannelResult) {
    canBasicChannelResult = obj.canBasicChannel(BasicPermissions.VIEW_CHANNEL, type);
  }
  return canBasicChannelResult;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const isVoiceChannel = arg1(dependencyMap[2]).isVoiceChannel;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
const BasicPermissions = arg1(dependencyMap[12]).BasicPermissions;
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/guilds_bar/useGuildMediaState.tsx");

export default function useGuildMediaState(guild_id) {
  const arg1 = guild_id;
  const items = [closure_13];
  const stateFromStores = arg1(dependencyMap[14]).useStateFromStores(items, () => closure_13.isMuted(arg0));
  const importDefault = stateFromStores;
  const obj = arg1(dependencyMap[14]);
  const isDontBadgeMutedVcsEnabled = arg1(dependencyMap[15]).useIsDontBadgeMutedVcsEnabled("useGuildMediaState");
  const dependencyMap = isDontBadgeMutedVcsEnabled;
  const obj2 = arg1(dependencyMap[15]);
  const guildActiveEvent = arg1(dependencyMap[16]).useGuildActiveEvent(guild_id);
  let closure_3 = guildActiveEvent;
  const obj3 = arg1(dependencyMap[16]);
  const items1 = [closure_3, closure_11];
  const stateFromStoresArray = arg1(dependencyMap[14]).useStateFromStoresArray(items1, () => {
    const embeddedActivitiesForGuild = guildActiveEvent.getEmbeddedActivitiesForGuild(arg0);
    return embeddedActivitiesForGuild.filter((userIds) => {
      const items = [...userIds.userIds];
      return !callback(closure_2[17]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs.getBlockedOrIgnoredIDs());
    });
  });
  let closure_4 = stateFromStoresArray;
  const obj4 = arg1(dependencyMap[14]);
  const first = stateFromStoresArray[0];
  let _location;
  if (null != first) {
    _location = first.location;
  }
  const embeddedActivityLocationChannelId = arg1(dependencyMap[18]).getEmbeddedActivityLocationChannelId(_location);
  const obj5 = arg1(dependencyMap[18]);
  const isActivitiesInTextEnabled = arg1(dependencyMap[19]).useIsActivitiesInTextEnabled(embeddedActivityLocationChannelId);
  const isVoiceChannel = isActivitiesInTextEnabled;
  const obj6 = arg1(dependencyMap[19]);
  const items2 = [closure_12, closure_14, closure_9, closure_10, closure_8, closure_13];
  const items3 = [guild_id, stateFromStores, isDontBadgeMutedVcsEnabled];
  const stateFromStoresObject = arg1(dependencyMap[14]).useStateFromStoresObject(items2, () => {
    const voiceChannelId = store.getVoiceChannelId();
    const guild = id.getGuild(arg0);
    if (null != guild) {
      const afkChannelId = guild.afkChannelId;
    }
    const usersWithVideo = authStore.getUsersWithVideo(arg0);
    let obj = arg0(isDontBadgeMutedVcsEnabled[17]);
    const result = obj.filterBlockedUsersFromVoiceStates(authStore.getVoiceStates(arg0));
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
            let tmp9 = closure_18;
            let tmp12;
            let basicChannel = selectedVoiceChannelHasVideo.getBasicChannel(channelId);
            if (null != afkChannelId) {
              tmp12 = afkChannelId;
            }
            let tmp13 = closure_10;
            if (!tmp9(basicChannel, tmp12, closure_10)) {
              continue;
            } else {
              let tmp14 = isDontBadgeMutedVcsEnabled;
              flag = true;
              if (!isDontBadgeMutedVcsEnabled) {
                break;
              } else {
                let tmp15 = closure_13;
                let tmp16 = arg0;
                flag = true;
                if (!closure_13.isGuildOrCategoryOrChannelMuted(arg0, channelId)) {
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
      const tmp18 = callback(usersWithVideo);
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
            let tmp21 = closure_18;
            let tmp24;
            let basicChannel1 = selectedVoiceChannelHasVideo.getBasicChannel(channelId);
            if (null != afkChannelId) {
              tmp24 = afkChannelId;
            }
            let tmp25 = closure_10;
            if (tmp21(basicChannel1, tmp24, closure_10)) {
              let tmp26 = isDontBadgeMutedVcsEnabled;
              flag2 = true;
              if (!isDontBadgeMutedVcsEnabled) {
                break;
              } else {
                let tmp27 = closure_13;
                let tmp28 = arg0;
                flag2 = true;
                if (!closure_13.isGuildOrCategoryOrChannelMuted(arg0, channelId)) {
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
      hasVideoResult = authStore.hasVideo(voiceChannelId);
    }
    obj.selectedVoiceChannelHasVideo = hasVideoResult;
    return obj;
  }, items3);
  const guildHasVoice = stateFromStoresObject.guildHasVoice;
  let closure_6 = guildHasVoice;
  const guildHasVideo = stateFromStoresObject.guildHasVideo;
  let id = guildHasVideo;
  const selectedVoiceChannelHasVideo = stateFromStoresObject.selectedVoiceChannelHasVideo;
  closure_8 = selectedVoiceChannelHasVideo;
  id = id.getId();
  closure_9 = id;
  const obj7 = arg1(dependencyMap[14]);
  const items4 = [closure_12, closure_8, closure_3, closure_4, closure_6, closure_10, closure_13];
  const items5 = [guild_id, stateFromStores, selectedVoiceChannelHasVideo, id, isActivitiesInTextEnabled, stateFromStoresArray, guildActiveEvent, guildHasVoice, guildHasVideo, isDontBadgeMutedVcsEnabled];
  return arg1(dependencyMap[14]).useStateFromStoresObject(items4, () => {
    const voiceChannelId = store.getVoiceChannelId();
    const channel = selectedVoiceChannelHasVideo.getChannel(voiceChannelId);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    let tmp4 = guild_id === arg0;
    if (!tmp4) {
      if (stateFromStores) {
        return {};
      }
    }
    let obj = stateFromStores(isDontBadgeMutedVcsEnabled[20]);
    const keys = obj.keys(stateFromStoresArray.getStageInstancesByGuild(arg0));
    let someResult = keys.some((channelId) => {
      const channel = channel.getChannel(channelId);
      let canResult = null != channel;
      if (canResult) {
        canResult = closure_10.can(callback(closure_2[21]).JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
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
      tmp11 = null != guildHasVoice.getActiveStreamForUser(id, arg0);
    }
    const result = arg0(isDontBadgeMutedVcsEnabled[17]).filterOutStreamsByBlockedOwner(guildHasVoice.getAllApplicationStreams());
    let someResult1 = result.some((guildId) => {
      let tmp = guildId.guildId !== closure_0;
      if (!tmp) {
        let result = closure_2;
        if (closure_2) {
          result = guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(closure_0, guildId.channelId);
        }
        tmp = result;
      }
      return !tmp;
    });
    if (isActivitiesInTextEnabled) {
      let flag = stateFromStoresArray.length > 0;
    } else {
      const tmp18 = callback(stateFromStoresArray);
      const iter = tmp18();
      let iter2 = iter;
      flag = false;
      if (!iter.done) {
        while (true) {
          let tmp19 = selectedVoiceChannelHasVideo;
          let tmp20 = arg0;
          let tmp21 = isDontBadgeMutedVcsEnabled;
          let obj6 = arg0(isDontBadgeMutedVcsEnabled[18]);
          let channel2 = selectedVoiceChannelHasVideo.getChannel(obj6.getEmbeddedActivityLocationChannelId(iter2.value.location));
          if (null == channel2) {
            let iter3 = tmp18();
            iter2 = iter3;
            flag = false;
            if (iter3.done) {
              break;
            } else {
              // continue
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
