// Module ID: 1917
// Function ID: 21602
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: getUserCommunicationDisabledVersion

// Module 1917 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function trackCommunicationDisabled(guildId, communicationDisabledUntil) {
  if (null != communicationDisabledUntil.communicationDisabledUntil) {
    if (obj2.isMemberCommunicationDisabled(communicationDisabledUntil)) {
      const tmp2 = getCommunicationDisabledUserKey(guildId, communicationDisabledUntil.userId);
      let result = closure_20[tmp2] !== communicationDisabledUntil.communicationDisabledUntil;
      if (result) {
        result = communicationDisabledUntil(dependencyMap[13]).isMemberCommunicationDisabled(communicationDisabledUntil);
        const obj = communicationDisabledUntil(dependencyMap[13]);
      }
      if (result) {
        closure_20[tmp2] = communicationDisabledUntil.communicationDisabledUntil;
        incrementCommunicationDisabledVersion(tmp2);
      }
    }
    const obj2 = communicationDisabledUntil(dependencyMap[13]);
  }
  removeCommunicationDisabled(guildId, communicationDisabledUntil.userId);
}
function removeCommunicationDisabled(id, userId) {
  if (null != userId) {
    const tmp7 = getCommunicationDisabledUserKey(id, userId);
    if (null != closure_20[tmp7]) {
      incrementCommunicationDisabledVersion(tmp7);
    }
    _removeCommunicationDisabledFromMap(getCommunicationDisabledUserKey(id, userId));
  } else {
    for (const key10006 in closure_20) {
      let tmp14 = key10006;
      let tmp15 = closure_37;
      if (closure_37(key10006) !== arg0) {
        continue;
      } else {
        let tmp2 = closure_33;
        let tmp3 = closure_33(key10006);
        let tmp4 = closure_34;
        let tmp5 = closure_34(key10006);
        // continue
      }
      continue;
    }
  }
}
function incrementCommunicationDisabledVersion(arg0) {
  const sum = closure_22 + 1;
  closure_22 = sum;
  closure_24[arg0] = sum;
}
function _removeCommunicationDisabledFromMap(communicationDisabledUserKey) {
  if (tmp === store2.getId()) {
    callback3(getGuildIdFromCommunicationDisabledUserKey(communicationDisabledUserKey));
  }
  delete r1[r2];
}
function getCommunicationDisabledUserKey(guildId, userId) {
  const items = [];
  items[constants.GUILD] = guildId;
  items[constants.USER] = userId;
  return items.join("-");
}
function getUserIdFromCommunicationDisabledUserKey(communicationDisabledUserKey) {
  return communicationDisabledUserKey.split("-")[closure_27.USER];
}
function getGuildIdFromCommunicationDisabledUserKey(communicationDisabledUserKey) {
  return communicationDisabledUserKey.split("-")[closure_27.GUILD];
}
function computeDerivedMemberState(unsafeMutableRoles, roles) {
  let iter;
  if (0 === roles.length) {
    let obj = { "Bool(false)": "o", "Bool(false)": "o", colorRoleId: undefined, hoistRoleId: undefined, iconRoleId: undefined, highestRoleId: undefined };
    return obj;
  } else {
    const tmp40 = _createForOfIteratorHelperLoose(roles);
    const iter3 = tmp40();
    let iter2 = iter3;
    let tmp27;
    let tmp28;
    let tmp29;
    let tmp30;
    if (!iter3.done) {
      do {
        let tmp = unsafeMutableRoles[iter2.value];
        let tmp2 = tmp23;
        let tmp3 = tmp24;
        let tmp4 = tmp25;
        let tmp5 = tmp26;
        if (null != tmp) {
          let doesRoleSortHigherResult = null == tmp26;
          if (!doesRoleSortHigherResult) {
            let tmp6 = closure_0;
            let tmp7 = closure_2;
            obj = closure_0(closure_2[14]);
            doesRoleSortHigherResult = obj.doesRoleSortHigher(tmp, tmp26);
          }
          let tmp9 = tmp26;
          if (doesRoleSortHigherResult) {
            tmp9 = tmp;
          }
          let tmp10 = tmp.color > 0;
          if (tmp10) {
            let doesRoleSortHigherResult1 = null == tmp23;
            if (!doesRoleSortHigherResult1) {
              let tmp12 = closure_0;
              let tmp13 = closure_2;
              let obj2 = closure_0(closure_2[14]);
              doesRoleSortHigherResult1 = obj2.doesRoleSortHigher(tmp, tmp23);
            }
            tmp10 = doesRoleSortHigherResult1;
          }
          let tmp14 = tmp23;
          if (tmp10) {
            tmp14 = tmp;
          }
          let hoist = tmp.hoist;
          if (hoist) {
            let doesRoleSortHigherResult2 = null == tmp24;
            if (!doesRoleSortHigherResult2) {
              let tmp16 = closure_0;
              let tmp17 = closure_2;
              let obj3 = closure_0(closure_2[14]);
              doesRoleSortHigherResult2 = obj3.doesRoleSortHigher(tmp, tmp24);
            }
            hoist = doesRoleSortHigherResult2;
          }
          let tmp18 = tmp24;
          if (hoist) {
            tmp18 = tmp;
          }
          let tmp19 = null != tmp.icon || null != tmp.unicodeEmoji;
          if (tmp19) {
            let doesRoleSortHigherResult3 = null == tmp25;
            if (!doesRoleSortHigherResult3) {
              let tmp21 = closure_0;
              let tmp22 = closure_2;
              let obj4 = closure_0(closure_2[14]);
              doesRoleSortHigherResult3 = obj4.doesRoleSortHigher(tmp, tmp25);
            }
            tmp19 = doesRoleSortHigherResult3;
          }
          tmp2 = tmp14;
          tmp3 = tmp18;
          tmp4 = tmp25;
          tmp5 = tmp9;
          if (tmp19) {
            tmp2 = tmp14;
            tmp3 = tmp18;
            tmp4 = tmp;
            tmp5 = tmp9;
          }
        }
        iter = tmp40();
        let tmp23 = tmp2;
        let tmp24 = tmp3;
        let tmp25 = tmp4;
        let tmp26 = tmp5;
        iter2 = iter;
        tmp27 = tmp2;
        tmp28 = tmp3;
        tmp29 = tmp4;
        tmp30 = tmp5;
      } while (!iter.done);
    }
    obj = {};
    let colorString;
    if (null != tmp27) {
      colorString = tmp27.colorString;
    }
    let tmp32 = null;
    if (null != colorString) {
      tmp32 = colorString;
    }
    obj.colorString = tmp32;
    let colorStrings;
    if (null != tmp27) {
      colorStrings = tmp27.colorStrings;
    }
    let tmp34 = null;
    if (null != colorStrings) {
      tmp34 = colorStrings;
    }
    obj.colorStrings = tmp34;
    let id;
    if (null != tmp27) {
      id = tmp27.id;
    }
    obj.colorRoleId = id;
    let id1;
    if (null != tmp29) {
      id1 = tmp29.id;
    }
    obj.iconRoleId = id1;
    let id2;
    if (null != tmp28) {
      id2 = tmp28.id;
    }
    obj.hoistRoleId = id2;
    let id3;
    if (null != tmp30) {
      id3 = tmp30.id;
    }
    obj.highestRoleId = id3;
    return obj;
  }
}
function createMember(guildRoles) {
  let avatar;
  let avatarDecoration;
  let collectibles;
  let communicationDisabledUntil;
  let displayNameStyles;
  let flags;
  let fullProfileLoadedTimestamp;
  let guildId;
  let isPending;
  let joinedAt;
  let nick;
  let premiumSince;
  let roles;
  let unusualDMActivityUntil;
  let userId;
  ({ userId, guildId, roles } = guildRoles);
  ({ nick, avatar, avatarDecoration, premiumSince, isPending, joinedAt, communicationDisabledUntil, unusualDMActivityUntil, fullProfileLoadedTimestamp, flags, collectibles, displayNameStyles } = guildRoles);
  const tmp = computeDerivedMemberState(guildRoles.guildRoles, roles);
  let obj = { userId, nick, guildId, avatar, avatarDecoration, roles, colorString: tmp.colorString, colorStrings: tmp.colorStrings, colorRoleId: tmp.colorRoleId, iconRoleId: tmp.iconRoleId, hoistRoleId: tmp.hoistRoleId, highestRoleId: tmp.highestRoleId, premiumSince, isPending, joinedAt, communicationDisabledUntil, unusualDMActivityUntil, fullProfileLoadedTimestamp, flags, collectibles, displayNameStyles };
  const flags2 = obj.flags;
  let num = 0;
  if (null != flags2) {
    num = flags2;
  }
  if (obj2.hasFlag(num, GuildMemberFlags.IS_GUEST)) {
    const flags3 = obj.flags;
    let num2 = 0;
    if (null != flags3) {
      num2 = flags3;
    }
    obj.flags = arg1(dependencyMap[15]).addFlag(num2, GuildMemberFlags.BYPASSES_VERIFICATION);
    const obj3 = arg1(dependencyMap[15]);
  }
  if (null == closure_16[guildId]) {
    return obj;
  } else {
    if (userId === store2.getId()) {
      if (!store.isViewingRoles(guildId)) {
        if (!store.isFullServerPreview(guildId)) {
          if (null != closure_18[guildId]) {
            delete r1[r3];
          }
        }
      }
      const viewingRoles = store.getViewingRoles(guildId);
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(store.getMemberOptions(guildId));
      if (null != viewingRoles) {
        let keys = importDefault(dependencyMap[16]).keys(viewingRoles);
        const obj5 = importDefault(dependencyMap[16]);
      } else {
        keys = [];
      }
      obj["roles"] = keys;
      closure_18[guildId] = obj;
      const tmp10 = closure_18;
    }
    return obj;
  }
  const obj2 = arg1(dependencyMap[15]);
}
function handleCachedGuilds(guilds) {
  let iter3;
  const tmp = _createForOfIteratorHelperLoose(guilds);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp3 = tmp2;
      if (null != value.member) {
        let tmp11 = closure_19;
        let tmp12 = closure_19;
        if (null == closure_19[value.id]) {
          let member = value.member;
        } else {
          member = {};
          let tmp4 = member;
          let merged = Object.assign(value.member);
          member["roles"] = value.member.roles;
        }
        tmp12[value.id] = member;
        let tmp6 = closure_16;
        tmp3 = tmp2;
        if (null != closure_16[value.id]) {
          let tmp7 = closure_16;
          let tmp8 = closure_16[value.id];
          tmp3 = tmp8;
          if (null != tmp8[value.member.userId]) {
            let obj = {};
            let tmp9 = obj;
            let merged1 = Object.assign(tmp8[value.member.userId]);
            obj["roles"] = value.member.roles;
            tmp8[value.member.userId] = obj;
            tmp3 = tmp8;
          }
        }
      }
      iter3 = tmp();
      let tmp2 = tmp3;
      iter2 = iter3;
    } while (!iter3.done);
  }
}
function handleGuildMemberUpdate(arg0) {
  let guildId;
  let user;
  ({ guildId, user } = arg0);
  if (null == closure_16[guildId]) {
    return false;
  } else {
    const guild = store5.getGuild(guildId);
    if (null == guild) {
      const _HermesInternal = HermesInternal;
      importDefaultResult.warn("Guild " + guildId + " not found during GUILD_MEMBER_UPDATE.");
      return false;
    } else {
      const obj = { userId: user.id, nick: tmp, guildId, avatar: tmp2, avatarDecoration: arg1(dependencyMap[17]).parseAvatarDecorationData(tmp3), guildRoles: store4.getUnsafeMutableRoles(guild.id), roles: tmp4, premiumSince: tmp5, isPending: tmp6, joinedAt: tmp7, communicationDisabledUntil: tmp8, unusualDMActivityUntil: tmp9 };
      let prop;
      if (null != tmp13[user.id]) {
        prop = tmp26.fullProfileLoadedTimestamp;
      }
      obj.fullProfileLoadedTimestamp = prop;
      obj.flags = tmp10;
      obj.collectibles = tmp11;
      obj.displayNameStyles = tmp12;
      tmp13[user.id] = createMember(obj);
      trackCommunicationDisabled(guildId, tmp13[user.id]);
    }
  }
}
function batchUpdateGuildMembers(guildId, mapped) {
  mapped = guildId;
  const importDefault = tmp;
  if (null == closure_16[guildId]) {
    return false;
  } else {
    const guild = store5.getGuild(guildId);
    const dependencyMap = guild;
    if (null == guild) {
      const _HermesInternal = HermesInternal;
      importDefaultResult.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
      let flag = false;
    } else {
      const item = mapped.forEach((user) => {
        const obj = { userId: user.user.id, nick: user.nick, guildId: user, avatar: user.avatar, avatarDecoration: callback2(user), guildRoles: unsafeMutableRoles.getUnsafeMutableRoles(guild.id), roles: user.roles, premiumSince: user.premium_since, isPending: user.pending, joinedAt: user.joined_at, communicationDisabledUntil: user.communication_disabled_until, flags: user.flags };
        let prop;
        if (null != tmp[user.user.id]) {
          prop = tmp2.fullProfileLoadedTimestamp;
        }
        obj.fullProfileLoadedTimestamp = prop;
        let unusual_dm_activity_until = user.unusual_dm_activity_until;
        if (null == unusual_dm_activity_until) {
          let prop1;
          if (null != tmp2) {
            prop1 = tmp2.unusualDMActivityUntil;
          }
          unusual_dm_activity_until = prop1;
        }
        obj.unusualDMActivityUntil = unusual_dm_activity_until;
        obj.collectibles = user(guild[18]).parseServerUserCollectibles(user.collectibles);
        const obj2 = user(guild[18]);
        const tmp3 = closure_39;
        obj.displayNameStyles = user(guild[19]).parseServerDisplayNameStyles(user.display_name_styles);
        tmp[user.user.id] = tmp3(obj);
        callback(user, tmp[user.user.id]);
      });
      closure_23 = closure_23 + 1;
      flag = true;
    }
    return flag;
  }
}
function getAvatarDecorationFromServerMember(guildMember) {
  return arg1(dependencyMap[17]).parseAvatarDecorationData(guildMember.avatar_decoration_data);
}
function _removeMemberFromGuild(guildId, id) {
  if (null != closure_16[guildId]) {
    if (null != tmp[id]) {
      delete r0[r3];
      removeCommunicationDisabled(guildId, id);
      closure_23 = closure_23 + 1;
    }
  }
  return false;
}
function buildMembersFromActivityParticipants(embeddedActivityLocationGuildId, participants) {
  const obj = { id: embeddedActivityLocationGuildId };
  const found = participants.filter(importDefault(dependencyMap[21]));
  obj.members = found.map((member) => member.member);
  return buildMembers(obj);
}
function buildMembers(guild) {
  let iter;
  let unusual_dm_activity_until;
  const id = guild.id;
  if (!(id in closure_16)) {
    closure_16[guild.id] = {};
  }
  guild = store5.getGuild(id);
  if (null == guild) {
    return false;
  } else {
    const tmp17 = _createForOfIteratorHelperLoose(guild.members);
    let iter2 = tmp17();
    if (!iter2.done) {
      do {
        let value = iter2.value;
        let id2 = value.user.id;
        let tmp3 = tmp15[id2];
        let obj = { userId: id2, nick: value.nick, guildId: guild.id, avatar: value.avatar };
        let tmp5 = closure_42;
        let tmp4 = closure_39;
        obj.avatarDecoration = closure_42(value);
        let tmp6 = closure_12;
        obj.guildRoles = closure_12.getUnsafeMutableRoles(guild.id);
        ({ roles: obj.roles, premium_since: obj.premiumSince, pending: obj.isPending, joined_at: obj.joinedAt, communication_disabled_until: obj.communicationDisabledUntil } = value);
        let prop;
        if (null != tmp3) {
          prop = tmp3.fullProfileLoadedTimestamp;
        }
        obj.fullProfileLoadedTimestamp = prop;
        ({ flags: obj.flags, unusual_dm_activity_until } = value);
        if (null == unusual_dm_activity_until) {
          let prop1;
          if (null != tmp3) {
            prop1 = tmp3.unusualDMActivityUntil;
          }
          unusual_dm_activity_until = prop1;
        }
        obj.unusualDMActivityUntil = unusual_dm_activity_until;
        let tmp9 = closure_0;
        let tmp10 = closure_2;
        let obj2 = closure_0(closure_2[18]);
        obj.collectibles = obj2.parseServerUserCollectibles(value.collectibles);
        let obj3 = closure_0(closure_2[19]);
        obj.displayNameStyles = obj3.parseServerDisplayNameStyles(value.display_name_styles);
        let tmp4Result = tmp4(obj);
        tmp15[id2] = tmp4Result;
        let tmp12 = closure_31;
        let tmp13 = closure_31(id, tmp4Result);
        iter = tmp17();
        iter2 = iter;
      } while (!iter.done);
    }
    return true;
  }
}
function handleGuildRoleUpdateOrDelete(guildId) {
  const arg1 = guildId;
  if (null == closure_16[guildId.guildId]) {
    return false;
  } else {
    const guild = store5.getGuild(guildId.guildId);
    if (null == guild) {
      const _HermesInternal = HermesInternal;
      importDefaultResult.warn("Guild " + guildId.guildId + " not found during " + guildId.type + ".");
      return false;
    } else {
      const id = store2.getId();
      const tmp18 = _createForOfIteratorHelperLoose(importDefault(dependencyMap[16]).keys(tmp));
      let iter2 = tmp18();
      if (!iter2.done) {
        while (true) {
          let value = iter2.value;
          let tmp2 = tmp[value];
          if (null == tmp2.roles) {
            let iter = tmp18();
            iter2 = iter;
            if (iter.done) {
              break;
            }
          }
          if (value === id) {
            if ("GUILD_ROLE_DELETE" === guildId.type) {
              let roles = tmp2.roles;
              roles = roles.filter((arg0) => arg0 !== arg0.roleId);
              let obj = { userId: value, nick: tmp2.nick, guildId: guildId.guildId };
              ({ avatar: obj.avatar, avatarDecoration: obj.avatarDecoration } = tmp2);
              let tmp4 = store4;
              let tmp3 = createMember;
              obj.guildRoles = store4.getUnsafeMutableRoles(guild.id);
              obj.roles = roles;
              ({ premiumSince: obj.premiumSince, isPending: obj.isPending, joinedAt: obj.joinedAt, flags: obj.flags } = tmp2);
              let prop;
              if (null != tmp2) {
                prop = tmp2.fullProfileLoadedTimestamp;
              }
              obj.fullProfileLoadedTimestamp = prop;
              ({ collectibles: obj.collectibles, displayNameStyles: obj.displayNameStyles } = tmp2);
              tmp[value] = tmp3(obj);
              let tmp6 = trackCommunicationDisabled;
              let tmp7 = trackCommunicationDisabled(guildId.guildId, tmp[value]);
            }
          }
          roles = tmp2.roles;
        }
      }
    }
  }
}
function handleImpersonateUpdate(guildId) {
  guildId = guildId.guildId;
  if (null == closure_16[guildId]) {
    return false;
  } else {
    const guild = store5.getGuild(guildId);
    if (null == guild) {
      const _HermesInternal = HermesInternal;
      importDefaultResult.warn("Guild " + guildId + " not found during IMPERSONATE_UPDATE.");
      return false;
    } else {
      const id = store2.getId();
      const obj = { userId: id, nick: tmp[id].nick, guildId };
      ({ avatar: obj.avatar, avatarDecoration: obj.avatarDecoration } = tmp[id]);
      obj.guildRoles = store4.getUnsafeMutableRoles(guild.id);
      ({ roles: obj.roles, premiumSince: obj.premiumSince, isPending: obj.isPending, joinedAt: obj.joinedAt, communicationDisabledUntil: obj.communicationDisabledUntil, fullProfileLoadedTimestamp: obj.fullProfileLoadedTimestamp, flags: obj.flags, collectibles: obj.collectibles, displayNameStyles: obj.displayNameStyles } = tmp[id]);
      tmp[id] = createMember(obj);
    }
  }
}
function processResolvedMembers(resolved, id) {
  id = resolved;
  let members;
  if (null != resolved) {
    members = resolved.members;
  }
  let tmp2 = null != members && null != id;
  if (tmp2) {
    const obj = { id };
    const _Object = Object;
    const entries = Object.entries(resolved.members);
    const mapped = entries.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      let tmp3;
      if (null != arg0) {
        const users = arg0.users;
        if (null != users) {
          tmp3 = users[tmp];
        }
      }
      if (null != tmp3) {
        const obj = {};
        const merged = Object.assign(tmp2);
        obj["user"] = tmp3;
        return obj;
      }
    });
    obj.members = mapped.filter((arg0) => null != arg0);
    tmp2 = buildMembers(obj);
  }
  return tmp2;
}
function processMessageResolvedMembers(message, guildId) {
  guildId = message;
  let closure_1 = false;
  const message_snapshots = message.message_snapshots;
  if (null != message_snapshots) {
    const item = message_snapshots.forEach((message) => {
      message = message.message;
      let resolved;
      if (null != message) {
        resolved = message.resolved;
      }
      const message_reference = message.message_reference;
      let guild_id;
      if (null != message_reference) {
        guild_id = message_reference.guild_id;
      }
      if (closure_46(resolved, guild_id)) {
        let closure_1 = true;
      }
    });
  }
  return processResolvedMembers(message.resolved, guildId) || closure_1;
}
function handleIncomingMessage(message) {
  return processMessageResolvedMembers(message.message, message.guildId);
}
function mergeMessageResolvedMembers(channel_id) {
  const channel = store3.getChannel(channel_id.channel_id);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  processMessageResolvedMembers(channel_id, guild_id);
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const item = messages.forEach((arg0) => {
    callback(arg0);
  });
}
function handleLoadSearchResults(data) {
  data = data.data;
  const items = [];
  const arg1 = items;
  const item = data.forEach((messages) => {
    messages = messages.messages;
    const item = messages.forEach((arr) => {
      const item = arr.forEach((arg0) => {

      });
    });
  });
  handleLoadMessages({ messages: items });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).clearCommunicationDisabledNotice;
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
const GuildMemberFlags = arg1(dependencyMap[11]).GuildMemberFlags;
let importDefaultResult = importDefault(dependencyMap[12]);
importDefaultResult = new importDefaultResult("GuildMemberStore");
let closure_16 = {};
let closure_17 = {};
let closure_18 = {};
let closure_19 = {};
let closure_20 = {};
let closure_21 = false;
let closure_22 = 0;
let closure_23 = 0;
let closure_24 = {};
let closure_25 = {};
let closure_26 = { added: [], removed: [] };
let closure_27 = { GUILD: 0, [0]: "GUILD", USER: 1, [1]: "USER" };
let tmp4 = (Store) => {
  class GuildMemberStore {
    constructor() {
      self = this;
      tmp = closure_3(this, GuildMemberStore);
      obj = closure_6(GuildMemberStore);
      tmp2 = closure_5;
      if (closure_28()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildMemberStore;
  callback2(GuildMemberStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_10, closure_11, closure_12, closure_13, closure_9);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getMutableAllGuildsAndMembers",
    value() {
      return closure_16;
    }
  };
  items[1] = obj;
  obj = {
    key: "memberOf",
    value(arg0) {
      const GuildMemberStore = arg0;
      const obj = callback(closure_2[22])(closure_16);
      const found = callback(closure_2[22])(closure_16).toPairs().filter((arg0) => {
        let tmp;
        [, tmp] = arg0;
        return null != tmp[closure_0];
      });
      const toPairsResult = callback(closure_2[22])(closure_16).toPairs();
      return found.map((arg0) => {
        let tmp;
        [tmp] = arg0;
        return tmp;
      }).value();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getNicknameGuildsMapping",
    value(arg0) {
      const obj = {};
      for (const key10006 in closure_16) {
        let tmp3 = key10006;
        let tmp4 = closure_16;
        let tmp5 = closure_16[key10006][arg0];
        let nick;
        if (null != tmp5) {
          nick = tmp5.nick;
        }
        if (null == nick) {
          continue;
        } else {
          let _Object = Object;
          if (!hasOwnProperty.call(obj, nick)) {
            obj[nick] = [];
          }
          let arr = obj[nick];
          arr = arr.push(key10006);
          // continue
        }
        continue;
      }
      return obj;
    }
  };
  items[4] = {
    key: "getNicknames",
    value(arg0) {
      return Object.keys(this.getNicknameGuildsMapping(arg0));
    }
  };
  items[5] = {
    key: "isMember",
    value(arg0, arg1) {
      if (null != arg0) {
        if (null != arg1) {
          return null != closure_16[arg0] && null != closure_16[arg0][arg1];
        }
      }
      return false;
    }
  };
  items[6] = {
    key: "isGuestOrLurker",
    value(arg0, arg1) {
      if (null != arg0) {
        if (null != arg1) {
          let tmp3 = null != tmp2;
          if (tmp3) {
            let joinedAt;
            if (null != tmp2[arg1]) {
              joinedAt = tmp4.joinedAt;
            }
            tmp3 = null == joinedAt;
          }
          return tmp3;
        }
      }
      return false;
    }
  };
  items[7] = {
    key: "isCurrentUserGuest",
    value(arg0) {
      if (null == arg0) {
        return false;
      } else {
        const id = store.getId();
        if (null != closure_16[arg0]) {
          if (null != tmp4[id]) {
            const flags = tmp4[id].flags;
            let hasFlagResult = null != flags;
            if (hasFlagResult) {
              hasFlagResult = GuildMemberStore(closure_2[15]).hasFlag(flags, constants.IS_GUEST);
              const obj = GuildMemberStore(closure_2[15]);
            }
            return hasFlagResult;
          }
        }
        return false;
      }
    }
  };
  items[8] = {
    key: "getMemberIds",
    value(arg0) {
      if (null == arg0) {
        return [];
      } else {
        if (null == closure_16[arg0]) {
          let items = [];
        } else {
          items = callback(closure_2[16]).keys(tmp2);
          const obj = callback(closure_2[16]);
        }
        return items;
      }
    }
  };
  items[9] = {
    key: "getMembers",
    value(arg0) {
      if (null == arg0) {
        return [];
      } else {
        if (null == closure_16[arg0]) {
          let items = [];
        } else {
          const _Object = Object;
          items = Object.values(tmp2);
        }
        return items;
      }
    }
  };
  items[10] = {
    key: "getTrueMember",
    value(arg0, arg1) {
      let tmp2 = null;
      if (null != closure_16[arg0]) {
        tmp2 = tmp[arg1];
      }
      return tmp2;
    }
  };
  items[11] = {
    key: "getMember",
    value(arg0, arg1) {
      const trueMember = this.getTrueMember(arg0, arg1);
      let tmp2 = trueMember;
      if (null != trueMember) {
        tmp2 = trueMember;
        if (arg1 === store.getId()) {
          if (closure_9.isViewingRoles(arg0)) {
            tmp2 = trueMember;
            if (null != closure_18[arg0]) {
              tmp2 = tmp7;
            }
          } else {
            tmp2 = trueMember;
          }
        }
      }
      return tmp2;
    }
  };
  items[12] = {
    key: "getSelfMember",
    value(guildId) {
      return this.getMember(guildId, store.getId());
    }
  };
  items[13] = {
    key: "getSelfMemberJoinedAt",
    value(arg0) {
      const self = this;
      if (null != closure_17[arg0]) {
        return tmp;
      } else {
        const selfMember = self.getSelfMember(arg0);
        if (null != selfMember) {
          if (null != selfMember.joinedAt) {
            const _Date = Date;
            const date = new Date(selfMember.joinedAt);
            closure_17[arg0] = date;
            return date;
          }
        }
        return null;
      }
    }
  };
  items[14] = {
    key: "getCachedSelfMember",
    value(arg0) {
      let tmp2 = null;
      if (null != closure_19[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[15] = {
    key: "getNick",
    value(guildId, id) {
      const self = this;
      if (null != guildId) {
        if (null != id) {
          const member = self.getMember(guildId, id);
          let nick = null;
          if (null != member) {
            nick = member.nick;
          }
          return nick;
        }
      }
      return null;
    }
  };
  items[16] = {
    key: "getCommunicationDisabledUserMap",
    value() {
      return closure_20;
    }
  };
  items[17] = {
    key: "getCommunicationDisabledVersion",
    value() {
      return closure_22;
    }
  };
  items[18] = {
    key: "getPendingRoleUpdates",
    value(arg0) {
      let tmp = closure_25[arg0];
      if (null == tmp) {
        tmp = closure_26;
      }
      return tmp;
    }
  };
  items[19] = {
    key: "getMemberRoleWithPendingUpdates",
    value(guildId, id) {
      const member = this.getMember(guildId, id);
      let roles;
      if (null != member) {
        roles = member.roles;
      }
      if (null == roles) {
        roles = [];
      }
      let differenceResult = roles;
      if (null != closure_25[guildId]) {
        const obj = callback(closure_2[22]);
        differenceResult = obj.difference(callback(closure_2[22]).union(roles, tmp2.added), tmp2.removed);
        const obj2 = callback(closure_2[22]);
      }
      return differenceResult;
    }
  };
  items[20] = {
    key: "getMemberVersion",
    value() {
      return closure_23;
    }
  };
  return callback(GuildMemberStore, items);
}(importDefault(dependencyMap[24]).Store);
tmp4.displayName = "GuildMemberStore";
tmp4 = new tmp4(importDefault(dependencyMap[25]), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    if (closure_21) {
      closure_21 = false;
    } else {
      let closure_16 = {};
      let closure_17 = {};
    }
    let closure_20 = {};
    function mergeGuildMembers(guilds) {
      guilds = guilds.guilds;
      const item = guilds.forEach((arg0) => {
        callback(arg0);
      });
    }(guilds);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(guilds) {
    guilds = guilds.guilds;
    const item = guilds.forEach((id) => {
      id = id.id;
      callback({ id, members: id.members });
      const activity_instances = id.activity_instances;
      if (null != activity_instances) {
        const item = activity_instances.forEach((participants) => {
          callback(id, participants.participants);
        });
      }
    });
  },
  OVERLAY_INITIALIZE: function handleInitialize(guildMembers) {
    const merged = Object.assign(guildMembers.guildMembers);
    let closure_16 = {};
    let closure_17 = {};
  },
  CACHE_LOADED: function handleCacheLoaded(guildMembers) {
    let closure_21 = true;
    const merged = Object.assign(guildMembers.guildMembers);
    let closure_16 = {};
    let closure_17 = {};
    let closure_19 = {};
    handleCachedGuilds(guildMembers.guilds);
  },
  CACHE_LOADED_LAZY: function handleCacheLoadedLazy(guilds) {
    handleCachedGuilds(guilds.guilds);
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    return buildMembers(guild.guild);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    delete r3[r2];
    delete r3[r2];
    removeCommunicationDisabled(guild.guild.id);
  },
  GUILD_MEMBER_ADD: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE_LOCAL: function handleGuildMemberUpdateLocal(arg0) {
    let addedRoleIds;
    let flags;
    let guildId;
    let removedRoleIds;
    let roles;
    ({ guildId, roles, addedRoleIds, removedRoleIds, flags } = arg0);
    const id = store2.getId();
    let tmp3 = null;
    if (null != closure_16[guildId]) {
      tmp3 = tmp2[id];
    }
    if (null == tmp3) {
      return false;
    } else {
      const guild = store5.getGuild(guildId);
      if (null == guild) {
        return false;
      } else {
        let obj = closure_25[guildId];
        if (null == obj) {
          obj = {};
        }
        obj = {};
        const obj3 = importDefault(dependencyMap[22]);
        const tmp4 = closure_25;
        let added = obj.added;
        if (null == added) {
          added = [];
        }
        let items = removedRoleIds;
        const obj4 = importDefault(dependencyMap[22]);
        if (null == removedRoleIds) {
          items = [];
        }
        obj.added = obj3.difference(importDefault(dependencyMap[22]).union(added, addedRoleIds), items);
        const unionResult = importDefault(dependencyMap[22]).union(added, addedRoleIds);
        const obj5 = importDefault(dependencyMap[22]);
        let removed = obj.removed;
        if (null == removed) {
          removed = [];
        }
        const obj6 = importDefault(dependencyMap[22]);
        if (null == addedRoleIds) {
          addedRoleIds = [];
        }
        obj.removed = obj5.difference(importDefault(dependencyMap[22]).union(removed, removedRoleIds), addedRoleIds);
        tmp4[guildId] = obj;
        obj = { userId: id, guildId };
        ({ nick: obj7.nick, avatar: obj7.avatar, avatarDecoration: obj7.avatarDecoration } = tmp3);
        obj.guildRoles = store4.getUnsafeMutableRoles(guild.id);
        if (null == roles) {
          roles = tmp3.roles;
        }
        obj.roles = roles;
        ({ premiumSince: obj7.premiumSince, isPending: obj7.isPending, joinedAt: obj7.joinedAt } = tmp3);
        if (null == flags) {
          flags = tmp3.flags;
        }
        obj.flags = flags;
        ({ fullProfileLoadedTimestamp: obj7.fullProfileLoadedTimestamp, collectibles: obj7.collectibles, displayNameStyles: obj7.displayNameStyles } = tmp3);
        tmp2[id] = createMember(obj);
      }
    }
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(chunks) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(chunks.chunks);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = closure_41;
        let tmp3 = closure_41(value.guildId, value.members) || flag;
        iter3 = tmp();
        flag = tmp3;
        iter2 = iter3;
        flag2 = tmp3;
      } while (!iter3.done);
    }
    return flag2;
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    _removeMemberFromGuild(guildId.guildId, guildId.user.id);
  },
  GUILD_MEMBER_REMOVE_LOCAL: function handleGuildMemberRemoveLocal(guildId) {
    _removeMemberFromGuild(guildId.guildId, guildId.userId);
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(members) {
    members = members.members;
    const mapped = members.map((member) => member.member);
    return batchUpdateGuildMembers(members.guildId, mapped.filter(arg1(dependencyMap[20]).isNotNullish));
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(addedMembers) {
    addedMembers = addedMembers.addedMembers;
    let tmp2 = null != addedMembers;
    if (tmp2) {
      const mapped = addedMembers.map((member) => member.member);
      tmp2 = batchUpdateGuildMembers(tmp, mapped.filter(arg1(dependencyMap[20]).isNotNullish));
    }
    return tmp2;
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function handleLoadArchivedThreadsSuccess(guildId) {
    return batchUpdateGuildMembers(guildId.guildId, guildId.owners);
  },
  LOAD_FORUM_POSTS: function handleLoadForumPosts(threads) {
    const values = Object.values(threads.threads);
    return batchUpdateGuildMembers(threads.guildId, values.reduce((arr, owner) => {
      if (null != owner.owner) {
        arr.push(owner.owner);
      }
      let message_snapshots;
      if (null != owner) {
        const first_message = owner.first_message;
        if (null != first_message) {
          message_snapshots = first_message.message_snapshots;
        }
      }
      if (null != message_snapshots) {
        const first = owner.first_message.message_snapshots[0];
        const moderator_report = first.moderator_report;
        let reported_member;
        if (null != moderator_report) {
          reported_member = moderator_report.reported_member;
        }
        if (null != reported_member) {
          arr.push(first.moderator_report.reported_member);
        }
        const moderator_report2 = first.moderator_report;
        let reporting_member;
        if (null != moderator_report2) {
          reporting_member = moderator_report2.reporting_member;
        }
        if (null != reporting_member) {
          arr.push(first.moderator_report.reporting_member);
        }
      }
      return arr;
    }, []));
  },
  GUILD_ROLE_UPDATE: handleGuildRoleUpdateOrDelete,
  GUILD_ROLE_DELETE: handleGuildRoleUpdateOrDelete,
  GUILD_ROLE_MEMBER_REMOVE: function handleGuildMemberRoleRemove(arg0) {
    let guildId;
    let roleId;
    let userId;
    ({ guildId, userId, roleId } = arg0);
    const arg1 = roleId;
    if (null == closure_16[guildId]) {
      return false;
    } else {
      const guild = store5.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        importDefaultResult.warn("Guild " + guildId + " not found during GUILD_MEMBER_UPDATE.");
        return false;
      } else if (null == tmp[userId]) {
        return false;
      } else {
        let roles = tmp16.roles;
        if (roles.includes(roleId)) {
          roles = tmp16.roles;
          tmp16.roles = roles.filter((arg0) => arg0 !== roleId);
          const tmp4 = computeDerivedMemberState(store4.getUnsafeMutableRoles(guild.id), tmp16.roles);
          const obj = {};
          const merged = Object.assign(tmp16);
          const merged1 = Object.assign(tmp4);
          tmp[userId] = obj;
          return true;
        } else {
          return false;
        }
      }
    }
  },
  GUILD_ROLE_MEMBER_ADD: function handleGuildMemberRoleAdd(arg0) {
    let guildId;
    let roleId;
    let userId;
    ({ guildId, userId, roleId } = arg0);
    if (null == closure_16[guildId]) {
      return false;
    } else {
      const guild = store5.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        importDefaultResult.warn("Guild " + guildId + " not found during GUILD_MEMBER_UPDATE.");
        return false;
      } else if (null == tmp[userId]) {
        return false;
      } else {
        const roles = tmp19.roles;
        if (roles.includes(roleId)) {
          return false;
        } else {
          const items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(tmp19.roles, 0);
          items[arraySpreadResult] = roleId;
          const sum = arraySpreadResult + 1;
          tmp19.roles = items;
          const tmp7 = computeDerivedMemberState(store4.getUnsafeMutableRoles(guild.id), tmp19.roles);
          const obj = {};
          const merged = Object.assign(tmp19);
          const merged1 = Object.assign(tmp7);
          tmp[userId] = obj;
          return true;
        }
      }
    }
  },
  GUILD_MEMBER_PROFILE_UPDATE: function handleGuildMemberProfileUpdate(arg0) {
    let guildId;
    let guildMember;
    ({ guildMember, guildId } = arg0);
    if (null == closure_16[guildId]) {
      return false;
    } else {
      const guild = store5.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        importDefaultResult.warn("Guild " + guildId + " not found during GUILD_MEMBER_UPDATE.");
        return false;
      } else {
        const obj = { userId: guildMember.user.id, nick: guildMember.nick, guildId, avatar: guildMember.avatar, avatarDecoration: getAvatarDecorationFromServerMember(guildMember), guildRoles: store4.getUnsafeMutableRoles(guild.id) };
        ({ roles: obj.roles, premium_since: obj.premiumSince, pending: obj.isPending, joined_at: obj.joinedAt, communication_disabled_until: obj.communicationDisabledUntil, unusual_dm_activity_until: obj.unusualDMActivityUntil, flags: obj.flags } = guildMember);
        const _Date = Date;
        obj.fullProfileLoadedTimestamp = Date.now();
        obj.collectibles = arg1(dependencyMap[18]).parseServerUserCollectibles(guildMember.collectibles);
        const obj2 = arg1(dependencyMap[18]);
        obj.displayNameStyles = arg1(dependencyMap[19]).parseServerDisplayNameStyles(guildMember.display_name_styles);
        tmp[guildMember.user.id] = createMember(obj);
        trackCommunicationDisabled(guildId, tmp[guildMember.user.id]);
      }
    }
  },
  IMPERSONATE_UPDATE: handleImpersonateUpdate,
  IMPERSONATE_STOP: handleImpersonateUpdate,
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(members) {
    let tmp = members.members.length > 0;
    if (tmp) {
      tmp = batchUpdateGuildMembers(members.guildId, members.members);
    }
    return tmp;
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function handleClearPendingUpdates(guildId) {
    if (null == guildId.guildId) {
      return false;
    } else {
      delete r0[r1];
    }
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(guildId) {
    let iter2;
    if (null != guildId.guildId) {
      if (null != store5.getGuild(guildId.guildId)) {
        let closure_21 = true;
        let obj = closure_16[guildId.guildId];
        if (null == obj) {
          obj = {};
        }
        closure_16[guildId.guildId] = obj;
        closure_21 = true;
        obj = closure_16[guildId.guildId];
        if (null == obj) {
          obj = {};
        }
        closure_16[guildId.guildId] = obj;
        const tmp4 = _createForOfIteratorHelperLoose(guildId.members);
        let iter = tmp4();
        let flag = false;
        let flag2 = false;
        if (!iter.done) {
          do {
            let value = iter.value;
            let tmp5 = closure_16;
            if (null == closure_16[guildId.guildId][value.userId]) {
              let tmp6 = closure_16;
              closure_16[guildId.guildId][value.userId] = value;
              flag = true;
            }
            iter2 = tmp4();
            iter = iter2;
            flag2 = flag;
          } while (!iter2.done);
        }
        return flag2;
      }
    }
    return false;
  },
  MESSAGE_CREATE: handleIncomingMessage,
  MESSAGE_UPDATE: handleIncomingMessage,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_RECENT_MENTIONS_SUCCESS: handleLoadMessages,
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    const item = pins.forEach((message) => {
      callback(message.message);
    });
  },
  SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function hangdleMemberSafetyGuildMemberSearchSuccess(members) {
    members = members.members;
    return batchUpdateGuildMembers(members.guildId, members.map((member) => member.member));
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    instance = instance.instance;
    const embeddedActivityLocationGuildId = arg1(dependencyMap[23]).getEmbeddedActivityLocationGuildId(instance.location);
    let tmp2 = null != embeddedActivityLocationGuildId;
    if (tmp2) {
      tmp2 = buildMembersFromActivityParticipants(embeddedActivityLocationGuildId, instance.participants);
    }
    return tmp2;
  },
  INTERACTION_MODAL_CREATE: function handleInteractionModalCreate(channelId) {
    const channel = store3.getChannel(channelId.channelId);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return processResolvedMembers(channelId.resolved, guild_id);
  }
});
const result = arg1(dependencyMap[26]).fileFinishedImporting("stores/GuildMemberStore.tsx");

export default tmp4;
export const getUserCommunicationDisabledVersion = function getUserCommunicationDisabledVersion(guildId, userId) {
  const tmp = getCommunicationDisabledUserKey(guildId, userId);
  let num = -1;
  if (tmp in closure_24) {
    num = closure_24[tmp];
  }
  return num;
};
export { getCommunicationDisabledUserKey };
export { getUserIdFromCommunicationDisabledUserKey };
export { getGuildIdFromCommunicationDisabledUserKey };
