// Module ID: 4308
// Function ID: 37748
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: channelTypeString, computeSummarizedVoiceUsers, denyChannelAccessForNonPaidUsers, getBitrateLimit, getChannelAnalyticsPage, getChannelLinkToCopy, getMentionIconType, getPrivateChannelUserTagsString, isAnyVoiceStateStage, isChannelFull, permissionOverwriteForRole, permissionOverwriteForUser, permissionOverwritesForAnnouncement, permissionOverwritesForRoles, previousTextChannelRouteForGuild

// Module 4308 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
function isTypeOrCategory(channelType, closure_21) {
  let tmp = channelType === closure_21;
  if (!tmp) {
    tmp = channelType === closure_22;
  }
  return tmp;
}
function allowChannelAccess(id, channelType, MEMBER) {
  const NONE = importAll(dependencyMap[8]).NONE;
  let tmp = callback(channelType);
  if (!tmp) {
    tmp = channelType === closure_22;
  }
  let addResult = NONE;
  if (tmp) {
    let obj = importAll(dependencyMap[9]);
    addResult = obj.add(NONE, constants.VIEW_CHANNEL);
  }
  let tmp7 = isTypeOrCategory(channelType, closure_21);
  if (!tmp7) {
    tmp7 = isTypeOrCategory(channelType, closure_23);
  }
  let addResult2 = addResult;
  if (tmp7) {
    const obj2 = importAll(dependencyMap[9]);
    const addResult1 = importAll(dependencyMap[9]).add(addResult, constants.VIEW_CHANNEL);
    addResult2 = importAll(dependencyMap[9]).add(addResult1, constants.CONNECT);
    const obj3 = importAll(dependencyMap[9]);
  }
  obj = { id, type: MEMBER, deny: importAll(dependencyMap[8]).NONE, allow: addResult2 };
  return obj;
}
function computeSummarizedVoiceStates(arg0) {
  let channels;
  ({ channels, selectedChannelId: closure_0, selectedVoiceChannelId: closure_1, voiceStates: closure_2 } = arg0);
  const items = [];
  const dependencyMap = items;
  const item = channels.forEach((id) => {
    if (id.id !== closure_1) {
      if (id.id !== closure_0) {
        if (null != closure_2[id.id]) {
          const forEach = arr.forEach;
          if (id.isGuildStageVoice()) {
            const item = forEach((voiceState) => {
              const audienceRequestToSpeakState = callback(arr[12]).getAudienceRequestToSpeakState(voiceState.voiceState);
              if (audienceRequestToSpeakState === callback(arr[12]).RequestToSpeakStates.ON_STAGE) {
                const arr = arr.push(voiceState);
              }
            });
          } else {
            const item1 = forEach((arg0) => arr.push(arg0));
          }
        }
      }
    }
  });
  return items;
}
function getChannelPermalink(guild_id, id, id2, id3) {
  let str = "";
  if (null != id3) {
    const _HermesInternal = HermesInternal;
    str = "?summaryId=" + id3;
  }
  return "" + location.protocol + "//" + location.host + closure_18.CHANNEL(guild_id, id, id2) + str;
}
function getChannelThreadPermalink(guildId, id, id2, id2) {
  if (null != guildId) {
    if (null != id) {
      if (null != id2) {
        const _location = location;
        const _location2 = location;
        const _HermesInternal = HermesInternal;
        let combined = "" + protocol + "//" + host + closure_18.CHANNEL_THREAD_VIEW(guildId, id, id2, id2);
      }
      return combined;
    }
  }
  combined = getChannelPermalink(guildId, id, id2);
}
const _module = require(dependencyMap[0]);
({ isGuildSelectableChannelType: closure_4, TEXT_CHANNEL_TYPES: closure_5, THREAD_CHANNEL_TYPES: closure_6 } = _module);
let closure_7 = importDefault(dependencyMap[1]);
let closure_8 = importDefault(dependencyMap[2]);
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
const _module1 = require(dependencyMap[6]);
const ChannelTypes = _module1.ChannelTypes;
({ Permissions: closure_13, GuildFeatures: closure_14, BoostedGuildTiers: closure_15, BITRATE_MAX: closure_16, BITRATE_DEFAULT: closure_17, Routes: closure_18, AnalyticsPages: closure_19 } = _module1);
const BoostedGuildFeatures = require(dependencyMap[7]).BoostedGuildFeatures;
({ GUILD_VOICE: closure_21, GUILD_CATEGORY: closure_22, GUILD_STAGE_VOICE: closure_23 } = ChannelTypes);
const _module2 = require(dependencyMap[17]);
const result = _module2.fileFinishedImporting("utils/ChannelUtils.tsx");

export const denyChannelAccessForNonPaidUsers = function denyChannelAccessForNonPaidUsers(id) {
  if (arg1 === ChannelTypes.GUILD_STAGE_VOICE) {
    let obj = importAll(dependencyMap[9]);
    obj = { id, type: require(dependencyMap[10]).PermissionOverwriteType.ROLE, allow: importAll(dependencyMap[8]).NONE };
    obj.deny = obj.add(importAll(dependencyMap[8]).NONE, constants.CONNECT);
    return obj;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Premium channel feature not supported for channel type " + arg1);
    throw error;
  }
};
export { allowChannelAccess };
export const permissionOverwritesForRoles = function permissionOverwritesForRoles(guildId, channelType, arr, arg3) {
  let flag = arg3;
  const require = channelType;
  if (arg3 === undefined) {
    flag = false;
  }
  const items = [];
  const importDefault = items;
  if (tmp) {
    const NONE = importAll(dependencyMap[8]).NONE;
    let tmp6 = callback(channelType);
    if (!tmp6) {
      tmp6 = channelType === closure_22;
    }
    let addResult = NONE;
    if (tmp6) {
      let obj = importAll(dependencyMap[9]);
      addResult = obj.add(NONE, constants.VIEW_CHANNEL);
    }
    let addResult2 = addResult;
    if (isTypeOrCategory(channelType, closure_21)) {
      const obj2 = importAll(dependencyMap[9]);
      const addResult1 = importAll(dependencyMap[9]).add(addResult, constants.VIEW_CHANNEL);
      addResult2 = importAll(dependencyMap[9]).add(addResult1, constants.CONNECT);
      const obj3 = importAll(dependencyMap[9]);
    }
    obj = { id: guildId, type: require(dependencyMap[10]).PermissionOverwriteType.ROLE, allow: importAll(dependencyMap[8]).NONE, deny: addResult2 };
    items.push(obj);
  }
  const item = arr.forEach((arg0) => {
    items.push(callback(arg0, arg1, arg1(closure_3[10]).PermissionOverwriteType.ROLE));
  });
  return items;
};
export const permissionOverwriteForUser = function permissionOverwriteForUser(id, channelType) {
  return allowChannelAccess(id, channelType, require(dependencyMap[10]).PermissionOverwriteType.MEMBER);
};
export const permissionOverwriteForRole = function permissionOverwriteForRole(id, channelType) {
  return allowChannelAccess(id, channelType, require(dependencyMap[10]).PermissionOverwriteType.ROLE);
};
export const permissionOverwritesForAnnouncement = function permissionOverwritesForAnnouncement(id) {
  const items = [{ id, type: require(dependencyMap[10]).PermissionOverwriteType.ROLE, deny: constants.SEND_MESSAGES, allow: importAll(dependencyMap[8]).NONE }];
  return items;
};
export const isChannelFull = function isChannelFull(channel, closure_11, closure_9) {
  const guildId = channel.getGuildId();
  const guild = closure_9.getGuild(guildId);
  let maxVideoChannelUsers;
  if (null != guild) {
    maxVideoChannelUsers = guild.maxVideoChannelUsers;
  }
  let num = -1;
  let num2 = -1;
  if (null != maxVideoChannelUsers) {
    num2 = maxVideoChannelUsers;
  }
  let prop;
  if (null != guild) {
    prop = guild.maxStageVideoChannelUsers;
  }
  if (null != prop) {
    num = prop;
  }
  const result = closure_11.countVoiceStatesForChannel(channel.id);
  const voiceStatesForChannel = closure_11.getVoiceStatesForChannel(channel);
  let canResult = closure_9.can(constants.MOVE_MEMBERS, channel);
  if (canResult) {
    canResult = closure_9.can(constants.CONNECT, channel);
  }
  if (channel.type === closure_23) {
    let tmp11 = null != guildId;
    if (tmp11) {
      let hasVideoResult = closure_11.hasVideo(channel.id);
      if (!hasVideoResult) {
        hasVideoResult = require(dependencyMap[11]).hasStream(voiceStatesForChannel);
        const obj = require(dependencyMap[11]);
      }
      tmp11 = hasVideoResult;
    }
    if (tmp11) {
      tmp11 = num > 0;
    }
    if (tmp11) {
      tmp11 = result >= num;
    }
    let tmp10 = tmp11;
  } else {
    tmp10 = null != guildId && closure_11.hasVideo(channel.id);
    if (tmp10) {
      tmp10 = num2 > 0;
    }
    if (tmp10) {
      let num4 = 0;
      if (canResult) {
        num4 = 1;
      }
      tmp10 = result >= num2 + num4;
    }
  }
  let tmp15 = channel.userLimit > 0 && result >= channel.userLimit;
  if (!tmp10) {
    if (tmp15) {
      tmp15 = !canResult;
    }
    tmp10 = tmp15;
  }
  return tmp10;
};
export const sanitizeGuildTextChannelName = importDefault(dependencyMap[18]);
export const getBitrateLimit = function getBitrateLimit(guild, channel) {
  if (channel.isGuildStageVoice()) {
    let bound = closure_17;
  } else if (null == guild) {
    bound = closure_16;
  } else {
    const features = guild.features;
    if (features.has(constants2.VIP_REGIONS)) {
      let bitrate = BoostedGuildFeatures[closure_15.TIER_3].limits.bitrate;
    } else {
      bitrate = closure_16;
    }
    bound = Math.max(bitrate, BoostedGuildFeatures[guild.premiumTier].limits.bitrate);
  }
  return bound;
};
export { computeSummarizedVoiceStates };
export const computeSummarizedVoiceUsers = function computeSummarizedVoiceUsers(channels) {
  return computeSummarizedVoiceStates({ channels: channels.channels, selectedChannelId: channels.selectedChannelId, selectedVoiceChannelId: channels.selectedVoiceChannelId, voiceStates: channels.voiceStates }).map((user) => user.user);
};
export const isAnyVoiceStateStage = function isAnyVoiceStateStage(channels, stateFromStores, arg2) {
  const tmp = _createForOfIteratorHelperLoose(channels);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      let value = iter2.value;
      let tmp4 = tmp2;
      let tmp5 = tmp3;
      if (value.id !== stateFromStores) {
        let tmp13 = arg2[value.id];
        let tmp14 = tmp13;
        tmp4 = tmp2;
        tmp5 = tmp3;
        if (null != tmp13) {
          let tmp15 = tmp13;
          tmp4 = tmp2;
          tmp5 = tmp3;
          if (value.isGuildStageVoice()) {
            let tmp6 = _createForOfIteratorHelperLoose;
            let tmp7 = _createForOfIteratorHelperLoose(tmp13);
            let iter3 = tmp7();
            let iter4 = iter3;
            let tmp8 = tmp13;
            tmp4 = iter3;
            tmp5 = tmp7;
            if (!iter3.done) {
              let tmp9 = require;
              let tmp10 = dependencyMap;
              let obj = require(dependencyMap[12]);
              let audienceRequestToSpeakState = obj.getAudienceRequestToSpeakState(iter4.value.voiceState);
              while (audienceRequestToSpeakState !== require(dependencyMap[12]).RequestToSpeakStates.ON_STAGE) {
                let iter5 = tmp7();
                iter4 = iter5;
                let tmp12 = tmp13;
                tmp4 = iter5;
                tmp5 = tmp7;
                continue;
              }
              let flag = true;
              return true;
            }
          }
        }
      }
      let iter6 = tmp();
      let tmp2 = tmp4;
      let tmp3 = tmp5;
      iter2 = iter6;
    }
  }
  return false;
};
export const channelTypeString = function channelTypeString(channel) {
  const type = channel.type;
  if (ChannelTypes.DM === type) {
    const intl10 = require(dependencyMap[13]).intl;
    return intl10.string(require(dependencyMap[13]).t.jN2DfZ);
  } else if (ChannelTypes.GROUP_DM === type) {
    const intl9 = require(dependencyMap[13]).intl;
    return intl9.string(require(dependencyMap[13]).t.e5y+gm);
  } else if (ChannelTypes.GUILD_TEXT === type) {
    const intl8 = require(dependencyMap[13]).intl;
    return intl8.string(require(dependencyMap[13]).t.Pnajj0);
  } else if (ChannelTypes.GUILD_FORUM === type) {
    const intl7 = require(dependencyMap[13]).intl;
    return intl7.string(require(dependencyMap[13]).t.GbryDd);
  } else if (ChannelTypes.GUILD_MEDIA === type) {
    const intl6 = require(dependencyMap[13]).intl;
    return intl6.string(require(dependencyMap[13]).t.seKITE);
  } else if (ChannelTypes.GUILD_VOICE === type) {
    const intl5 = require(dependencyMap[13]).intl;
    return intl5.string(require(dependencyMap[13]).t.BVZqJl);
  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
    const intl4 = require(dependencyMap[13]).intl;
    return intl4.string(require(dependencyMap[13]).t.EErMzA);
  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    const intl3 = require(dependencyMap[13]).intl;
    return intl3.string(require(dependencyMap[13]).t.l1dkSD);
  } else if (ChannelTypes.GUILD_STORE === type) {
    const intl2 = require(dependencyMap[13]).intl;
    return intl2.string(require(dependencyMap[13]).t.P1/Erq);
  } else if (ChannelTypes.GUILD_CATEGORY === type) {
    const intl = require(dependencyMap[13]).intl;
    return intl.string(require(dependencyMap[13]).t.vHCZwr);
  } else {
    return null;
  }
};
export const getPrivateChannelUserTagsString = function getPrivateChannelUserTagsString(recipients, closure_7) {
  let iter;
  if (null == recipients) {
    return null;
  } else {
    const currentUser = closure_7.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (null == id) {
      return null;
    } else {
      const items = [];
      const tmp8 = _createForOfIteratorHelperLoose(recipients);
      const iter3 = tmp8();
      let iter2 = iter3;
      if (!iter3.done) {
        do {
          let value = iter2.value;
          if (id !== value) {
            let user = closure_7.getUser(value);
            let tmp3 = user;
            if (null != user) {
              let arr = items.push(user);
              let tmp5 = user;
            }
          }
          iter = tmp8();
          iter2 = iter;
        } while (!iter.done);
      }
      if (0 === items.length) {
        return null;
      } else {
        const substr = items.slice(0, 2);
        const mapped = substr.map((isProvisional) => {
          const obj = callback(closure_3[14]);
          if (isProvisional.isProvisional) {
            let name = obj.getName(isProvisional);
          } else {
            name = obj.getUserTag(isProvisional);
          }
          return name;
        });
        const intl = require(dependencyMap[13]).intl;
        const obj = { users: items.length, user1: mapped[0], user2: mapped[1], extras: items.length - mapped.length };
        return intl.formatToPlainString(require(dependencyMap[13]).t.BXG0Eh, obj);
      }
    }
  }
};
export const getMentionIconType = function getMentionIconType(channel) {
  if (null == channel) {
    return "text";
  } else {
    const isNSFWResult = channel.isNSFW();
    const isSpoilerChannelResult = channel.isSpoilerChannel();
    if (channel.type === ChannelTypes.GUILD_VOICE) {
      let str11 = "voice-locked";
      if (closure_9.can(constants.CONNECT, channel)) {
        let str12 = "voice-nsfw";
        if (!isNSFWResult) {
          let str13 = "voice";
          if (isSpoilerChannelResult) {
            str13 = "voice-spoiler";
          }
          str12 = str13;
        }
        str11 = str12;
      }
      let tmp4 = str11;
    } else if (channel.type === ChannelTypes.GUILD_STAGE_VOICE) {
      let str10 = "stage-locked";
      if (closure_9.can(constants.CONNECT, channel)) {
        str10 = "stage";
      }
      tmp4 = str10;
    } else if (set2.has(channel.type)) {
      let str9 = "thread";
      if (channel.isForumPost()) {
        str9 = "post";
      }
      tmp4 = str9;
    } else if (channel.type === ChannelTypes.GUILD_FORUM) {
      if (tmp12) {
        let str8 = "media";
        if (isNSFWResult) {
          str8 = "media-nsfw";
        }
        let str6 = str8;
      } else {
        str6 = "forum-nsfw";
        if (!isNSFWResult) {
          let str7 = "forum";
          if (isSpoilerChannelResult) {
            str7 = "forum-spoiler";
          }
          str6 = str7;
        }
      }
    } else if (channel.type === ChannelTypes.GUILD_MEDIA) {
      let str5 = "media";
      if (isNSFWResult) {
        str5 = "media-nsfw";
      }
      tmp4 = str5;
    } else if (channel.type === ChannelTypes.GUILD_ANNOUNCEMENT) {
      let str3 = "announcement-nsfw";
      if (!isNSFWResult) {
        let str4 = "announcement";
        if (isSpoilerChannelResult) {
          str4 = "announcement-spoiler";
        }
        str3 = str4;
      }
      tmp4 = str3;
    } else if (set.has(channel.type)) {
      let str = "text-nsfw";
      if (!isNSFWResult) {
        let str2 = "text";
        if (isSpoilerChannelResult) {
          str2 = "text-spoiler";
        }
        str = str2;
      }
      tmp4 = str;
    }
    return tmp4;
  }
};
export const previousTextChannelRouteForGuild = function previousTextChannelRouteForGuild(arg0) {
  const channel = channel.getChannel(lastSelectedChannelId.getLastSelectedChannelId());
  if (null != channel) {
    if (channel.getGuildId() === arg0) {
      if (channel.type === ChannelTypes.GUILD_TEXT) {
        let id = channel.id;
      }
      return closure_18.CHANNEL(arg0, id);
    }
  }
  const defaultChannel = defaultChannel.getDefaultChannel(arg0);
  id = null;
  if (null != defaultChannel) {
    id = defaultChannel.id;
  }
};
export { getChannelPermalink };
export { getChannelThreadPermalink };
export const getChannelLinkToCopy = function getChannelLinkToCopy(channel, channel1, id2) {
  let tmp = arg3;
  const guildId = channel.getGuildId();
  if (null != channel1) {
    if (obj.canUseMediaPostEmbed(guildId, channel1)) {
      tmp = getChannelThreadPermalink(guildId, channel1.id, channel.id, importDefault(dependencyMap[16]).castChannelIdAsMessageId(channel.id));
      const obj2 = importDefault(dependencyMap[16]);
    }
    return tmp;
  }
  if (null == tmp) {
    tmp = getChannelPermalink(guildId, channel.id, id2);
  }
};
export const getChannelAnalyticsPage = function getChannelAnalyticsPage(type) {
  if (null == type) {
    return null;
  } else {
    type = type.type;
    if (ChannelTypes.GUILD_ANNOUNCEMENT !== type) {
      if (ChannelTypes.GUILD_TEXT !== type) {
        if (ChannelTypes.GUILD_FORUM !== type) {
          if (ChannelTypes.GUILD_MEDIA !== type) {
            if (ChannelTypes.GROUP_DM !== type) {
              if (ChannelTypes.DM !== type) {
                return null;
              }
            }
            return constants3.DM_CHANNEL;
          }
        }
      }
    }
    return constants3.GUILD_CHANNEL;
  }
};
