// Module ID: 1849
// Function ID: 20270
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1849 (_isNativeReflectConstruct)
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
function mergeGuildAvatar(id, guildId, avatar) {
  if (null == obj[id]) {
    return false;
  } else {
    if (null == avatar) {
      let result = obj.removeGuildAvatarHash(guildId);
    } else {
      result = obj.addGuildAvatarHash(guildId, avatar);
    }
    obj[obj.id] = result;
    if (obj !== result) {
      closure_17 = closure_17 + 1;
    }
    return obj !== result;
  }
}
function mergeUserPrimaryGuild(arg0, primary_guild) {
  let tmp2 = null != tmp;
  if (tmp2) {
    const obj = primary_guild(dependencyMap[11]);
    let tmp5 = !obj.isUserPrimaryGuildEqual(tmp.primaryGuild, primary_guild.primary_guild);
    if (tmp5) {
      let flag = null == tmp.primaryGuild || null != primary_guild.primary_guild;
      if (flag) {
        tmp.primaryGuild = primary_guild(dependencyMap[11]).ensureUserPrimaryGuild(primary_guild.primary_guild);
        obj[tmp.id] = tmp;
        closure_17 = closure_17 + 1;
        flag = true;
        const obj2 = primary_guild(dependencyMap[11]);
      }
      tmp5 = flag;
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
function transformUser(mfa_enabled) {
  mfa_enabled = mfa_enabled.mfa_enabled;
  if (null != mfa_enabled) {
    mfa_enabled.mfaEnabled = mfa_enabled;
    delete r0.mfa_enabled;
  }
  const premiumTypeFromRawValue = arg1(dependencyMap[12]).getPremiumTypeFromRawValue(mfa_enabled.premium_type);
  if (undefined !== premiumTypeFromRawValue) {
    mfa_enabled.premiumType = premiumTypeFromRawValue;
    delete r0.premium_type;
  }
  const nsfw_allowed = mfa_enabled.nsfw_allowed;
  if (null != nsfw_allowed) {
    mfa_enabled.nsfwAllowed = nsfw_allowed;
    delete r0.nsfw_allowed;
  }
  const age_verification_status = mfa_enabled.age_verification_status;
  if (null != age_verification_status) {
    mfa_enabled.ageVerificationStatus = age_verification_status;
    delete r0.age_verification_status;
  }
  const public_flags = mfa_enabled.public_flags;
  if (null != public_flags) {
    mfa_enabled.publicFlags = public_flags;
    delete r0.public_flags;
  }
  const purchased_flags = mfa_enabled.purchased_flags;
  if (undefined !== purchased_flags) {
    mfa_enabled.purchasedFlags = purchased_flags;
    delete r0.purchased_flags;
  }
  const premium_usage_flags = mfa_enabled.premium_usage_flags;
  if (undefined !== premium_usage_flags) {
    mfa_enabled.premiumUsageFlags = premium_usage_flags;
    delete r0.premium_usage_flags;
  }
  if (null === mfa_enabled.banner_color) {
    delete r0.banner_color;
  }
  const avatar_decoration_data = mfa_enabled.avatar_decoration_data;
  if (undefined !== avatar_decoration_data) {
    mfa_enabled.avatarDecorationData = arg1(dependencyMap[13]).parseAvatarDecorationData(avatar_decoration_data);
    delete r0.avatar_decoration_data;
    const obj2 = arg1(dependencyMap[13]);
  }
  const collectibles = mfa_enabled.collectibles;
  if (undefined !== collectibles) {
    delete r0.collectibles;
    mfa_enabled.collectibles = arg1(dependencyMap[14]).parseServerUserCollectibles(collectibles);
    const obj3 = arg1(dependencyMap[14]);
  }
  const global_name = mfa_enabled.global_name;
  if (undefined !== global_name) {
    mfa_enabled.globalName = global_name;
    delete r0.global_name;
  }
  const primary_guild = mfa_enabled.primary_guild;
  if (undefined !== primary_guild) {
    mfa_enabled.primary_guild = arg1(dependencyMap[11]).ensureUserPrimaryGuild(primary_guild);
    const obj4 = arg1(dependencyMap[11]);
  }
  const display_name_styles = mfa_enabled.display_name_styles;
  if (undefined !== display_name_styles) {
    mfa_enabled.displayNameStyles = arg1(dependencyMap[15]).parseServerDisplayNameStyles(display_name_styles);
    delete r0.display_name_styles;
    const obj5 = arg1(dependencyMap[15]);
  }
  const premium_state = mfa_enabled.premium_state;
  if (undefined !== premium_state) {
    mfa_enabled.premiumState = arg1(dependencyMap[16]).parseServerPremiumState(premium_state);
    delete r0.premium_state;
    const obj6 = arg1(dependencyMap[16]);
  }
  const restricted_schedule = mfa_enabled.restricted_schedule;
  if (undefined !== restricted_schedule) {
    const RestrictedScheduleRecord = arg1(dependencyMap[17]).RestrictedScheduleRecord;
    const fromServerResult = RestrictedScheduleRecord.fromServer(restricted_schedule);
    let tmp15 = null;
    if (null != fromServerResult) {
      tmp15 = fromServerResult;
    }
    mfa_enabled.restrictedSchedule = tmp15;
    delete r0.restricted_schedule;
  }
  const app_transaction_ids = mfa_enabled.app_transaction_ids;
  if (undefined !== app_transaction_ids) {
    mfa_enabled.appTransactionIds = app_transaction_ids;
    delete r0.app_transaction_ids;
  }
  return mfa_enabled;
}
function isNotCurrentUser(user) {
  return user.id !== store2.getId();
}
function mergeUser(user, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let tmp = undefined !== user.id;
  if (tmp) {
    tmp = user.id === store2.getId();
  }
  if (null == obj[user.id]) {
    transformUser(user);
    const prototype = ctor.prototype;
    const tmp26 = new ctor(user);
    const premiumType3 = tmp26.premiumType;
    let tmp19 = premiumType3;
    let mergeResult = tmp26;
    if (tmp28) {
      tmp26.premiumType = getUserPremiumType(arg1(dependencyMap[12]).isStaffEnv(tmp26), tmp26.premiumType);
      tmp19 = premiumType3;
      mergeResult = tmp26;
      const obj6 = arg1(dependencyMap[12]);
    }
    const tmp28 = undefined !== premiumType3 && tmp;
  } else {
    mergeResult = obj;
    if (flag) {
      transformUser(user);
      let premiumType = user.premium_type;
      if (null == premiumType) {
        premiumType = user.premiumType;
      }
      let isStaffEnvRawDataResult = undefined !== premiumType && tmp;
      if (isStaffEnvRawDataResult) {
        isStaffEnvRawDataResult = arg1(dependencyMap[12]).isStaffEnvRawData(user);
        const obj2 = arg1(dependencyMap[12]);
      }
      if (isStaffEnvRawDataResult) {
        let premiumType2 = user.premium_type;
        if (null == premiumType2) {
          premiumType2 = user.premiumType;
        }
        const tmp11 = getUserPremiumType(arg1(dependencyMap[12]).isStaffEnvRawData(user), premiumType2);
        if (undefined !== user.premiumType) {
          user.premiumType = tmp11;
        } else if (undefined !== user.premium_type) {
          user.premium_type = tmp11;
        }
        const obj3 = arg1(dependencyMap[12]);
      }
      if (tmp12 !== true) {
        if (tmp13 !== true) {
          if (obj4.isUserPrimaryGuildEqual(obj.primaryGuild, user.primary_guild) !== true) {
            user.primary_guild = arg1(dependencyMap[11]).ensureUserPrimaryGuild(user.primary_guild);
            const obj5 = arg1(dependencyMap[11]);
          }
          const obj4 = arg1(dependencyMap[11]);
        }
        user.primary_guild = obj.primaryGuild;
        const tmp13 = null != obj.primaryGuild && null == user.primary_guild;
      }
      mergeResult = obj.merge(user);
      tmp19 = premiumType;
      const tmp12 = null == obj.primaryGuild && null == user.primary_guild;
    }
  }
  const obj7 = arg1(dependencyMap[12]);
  obj7.validatePremiumType(arg1(dependencyMap[12]).isStaffEnv(mergeResult), tmp19, mergeResult.premiumType);
  obj[user.id][user.id] = mergeResult;
  if (obj[user.id][user.id] !== mergeResult) {
    closure_17 = closure_17 + 1;
  }
  return obj[user.id][user.id] !== mergeResult;
}
function getUserPremiumType(arg0, premiumType) {
  if (arg0) {
    let premiumTypeOverride = store.getPremiumTypeOverride();
    if (premiumTypeOverride === closure_15) {
      premiumTypeOverride = store.getPremiumTypeActual();
    }
    return premiumTypeOverride;
  } else {
    return premiumType;
  }
}
function processResolvedUsers(resolved, arg1) {
  let users;
  if (null != resolved) {
    users = resolved.users;
  }
  if (null == users) {
    return false;
  } else {
    for (const key10008 in arg0.users) {
      let tmp4 = key10008;
      let tmp5 = arg0.users[key10008];
      let tmp6 = closure_26;
      if (!closure_26(tmp5)) {
        continue;
      } else {
        let tmp2 = closure_27;
        let tmp3 = closure_27(tmp5, arg1);
        // continue
      }
      continue;
    }
  }
}
function mergeUsersFromMessage(message, arg1) {
  let tmp = null != message.author;
  if (tmp) {
    tmp = "SENDING" !== message.state;
  }
  if (tmp) {
    tmp = isNotCurrentUser(message.author);
  }
  if (tmp) {
    mergeUser(message.author, arg1);
  }
  const mentions = message.mentions;
  if (null != mentions) {
    const item = mentions.forEach((arg0) => {
      if (callback(arg0)) {
        callback2(arg0, arg1);
      }
    });
  }
  const interaction = message.interaction;
  let user;
  if (null != interaction) {
    user = interaction.user;
  }
  let tmp8Result = null != user;
  if (tmp8Result) {
    const interaction2 = message.interaction;
    let user1;
    if (null != interaction2) {
      user1 = interaction2.user;
    }
    tmp8Result = isNotCurrentUser(user1);
    const tmp8 = isNotCurrentUser;
  }
  if (tmp8Result) {
    mergeUser(message.interaction.user, arg1);
  }
  const attachments = message.attachments;
  if (null != attachments) {
    const item1 = attachments.forEach((clip_participants) => {
      clip_participants = clip_participants.clip_participants;
      if (null != clip_participants) {
        const item = clip_participants.forEach((arg0) => {
          if (callback(arg0)) {
            callback2(arg0, closure_0);
          }
        });
      }
    });
  }
  processResolvedUsers(message.resolved, arg1);
  const interaction_metadata = message.interaction_metadata;
  let user2;
  if (null != interaction_metadata) {
    user2 = interaction_metadata.user;
  }
  let tmp15 = null != user2;
  if (tmp15) {
    tmp15 = isNotCurrentUser(message.interaction_metadata.user);
  }
  if (tmp15) {
    mergeUser(message.interaction_metadata.user, arg1);
  }
  if (null != message.message_snapshots) {
    const message_snapshots = message.message_snapshots;
    const item2 = message_snapshots.forEach((moderator_report) => {
      moderator_report = moderator_report.moderator_report;
      let user;
      if (null != moderator_report) {
        const reported_member = moderator_report.reported_member;
        if (null != reported_member) {
          user = reported_member.user;
        }
      }
      if (null != user) {
        callback2(moderator_report.moderator_report.reported_member.user, arg1);
      }
      const moderator_report2 = moderator_report.moderator_report;
      let user1;
      if (null != moderator_report2) {
        const reporting_member = moderator_report2.reporting_member;
        if (null != reporting_member) {
          user1 = reporting_member.user;
        }
      }
      if (null != user1) {
        callback2(moderator_report.moderator_report.reporting_member.user, arg1);
      }
      const message = moderator_report.message;
      let users;
      if (null != message) {
        const resolved = message.resolved;
        if (null != resolved) {
          users = resolved.users;
        }
      }
      if (null == users) {
        users = {};
      }
      const values = Object.values(users);
      const item = values.forEach((arg0) => {
        if (callback(arg0)) {
          callback2(arg0, closure_0);
        }
      });
    });
  }
}
function handleConnectionOpen(arg0) {
  let guilds;
  let user;
  let users;
  ({ users, guilds, user } = arg0);
  delete r5.premium;
  delete r5.banner_color;
  mergeUser(user);
  const item = users.forEach((arg0) => {
    callback(arg0);
  });
  const item1 = guilds.forEach((members) => {
    members = members.members;
    const item = members.forEach((user) => {
      callback(user.user.id, user.id, user.avatar);
      callback2(user.user.id, user.user);
    });
  });
  if (null != obj[closure_11.getId(closure_11)]) {
    const obj = { "Null": "FOREST", "Null": "UNACCEPTED", "Null": "UNDETERMINED", "Null": "UNDETERMINED", "Null": "UNDETERMINED", id: closure_18 };
    const prototype = ctor.prototype;
    const tmp10 = new ctor(obj);
    obj[closure_18] = tmp10;
  }
}
function handleConnectionOpenSupplemental(arg0) {
  let guilds;
  let lazyPrivateChannels;
  ({ guilds, lazyPrivateChannels } = arg0);
  const item = guilds.forEach((members) => {
    members = members.members;
    const item = members.forEach((user) => {
      callback(user.user.id, user.id, user.avatar);
      callback2(user.user.id, user.user);
    });
  });
  if (null != lazyPrivateChannels) {
    const item1 = lazyPrivateChannels.forEach((rawRecipients) => {
      rawRecipients = rawRecipients.rawRecipients;
      if (null != rawRecipients) {
        const item = rawRecipients.forEach((arg0) => {
          callback(arg0);
        });
      }
    });
  }
}
function isIncompleteUser(arg0) {
  return !("incomplete" in arg0);
}
function handleInitialize(users) {
  let iter2;
  if (null != users.users) {
    const tmp2 = _createForOfIteratorHelperLoose(users.users);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp3 = closure_16;
        let tmp4 = value.id in closure_16;
        if (tmp4) {
          let tmp5 = closure_33;
          tmp4 = closure_33(value);
        }
        if (!tmp4) {
          let tmp6 = closure_16;
          let tmp7 = closure_10;
          let prototype = closure_10.prototype;
          let tmp8 = new.target;
          let tmp9 = new.target;
          let tmp10 = value;
          let tmp11 = new closure_10(value);
          let tmp12 = tmp11;
          closure_16[value.id] = tmp11;
        }
        iter2 = tmp2();
        iter = iter2;
      } while (!iter2.done);
    }
  }
}
function handleUserUpdate(user) {
  user = user.user;
  if (isNotCurrentUser(user)) {
    mergeUser(user);
  } else {
    return false;
  }
}
function handleRestrictedScheduleUpdate(id) {
  return mergeUser({ id: id.userId, restricted_schedule: id.restrictedSchedule });
}
function handleUserProfileFetchSuccess(userProfile) {
  userProfile = userProfile.userProfile;
  if (isNotCurrentUser(userProfile.user)) {
    mergeUser(userProfile.user);
  } else {
    return false;
  }
}
function handleCurrentUserUpdate(user) {
  mergeUser(user.user);
}
function updatePremiumType(user) {
  user = user.user;
  mergeUser({ id: user.id, premiumType: user.premiumType }, true);
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const item = messages.forEach((arg0) => {
    callback(arg0, true);
  });
  return false;
}
function handleConversationFetchSuccess(messages) {
  messages = messages.messages;
  const combined = messages.concat(messages.messageReferences);
  const item = combined.forEach((arg0) => {
    callback(arg0, true);
  });
  return false;
}
function handleConversationsFetchSuccess(rawConversations) {
  rawConversations = rawConversations.rawConversations;
  const item = rawConversations.forEach((messages) => {
    messages = messages.messages;
    let item;
    if (null != messages) {
      item = messages.forEach((arg0) => {
        callback(arg0, true);
      });
    }
    return item;
  });
  return false;
}
function handleLoadPinnedMessages(pins) {
  pins = pins.pins;
  const item = pins.forEach((message) => {
    callback(message.message, true);
  });
  return false;
}
function handleThreadListSync(mostRecentMessages) {
  mostRecentMessages = mostRecentMessages.mostRecentMessages;
  if (null != mostRecentMessages) {
    const item = mostRecentMessages.forEach((arg0) => {
      callback(arg0, false);
    });
  }
  return false;
}
function handleLoadSearchResults(data) {
  data = data.data;
  const item = data.forEach((arg0) => {
    let channels;
    let messages;
    ({ messages, channels } = arg0);
    const item = messages.forEach((arr) => {
      const item = arr.forEach((arg0) => {
        callback(arg0, true);
      });
    });
    const item1 = channels.forEach((type) => {
      let tmp = type.type !== constants.DM;
      if (tmp) {
        tmp = type.type !== constants.GROUP_DM;
      }
      if (!tmp) {
        const recipients = type.recipients;
        if (null != recipients) {
          const item = recipients.forEach((arg0) => callback(arg0));
        }
        if (null != type.recipient) {
          callback(type.recipient);
        }
      }
    });
  });
  return false;
}
function handleLoadThreadsSuccess(arg0) {
  let firstMessages;
  let owners;
  ({ firstMessages, owners } = arg0);
  if (null != firstMessages) {
    const item = firstMessages.forEach((arg0) => {
      callback2(arg0, true);
    });
  }
  if (null != owners) {
    const item1 = owners.forEach((user) => callback(user.user, true));
  }
}
function handleLoadForumPosts(threads) {
  const values = Object.values(threads.threads);
  const item = values.forEach((arg0) => {
    let first_message;
    let most_recent_message;
    let owner;
    ({ first_message, most_recent_message, owner } = arg0);
    if (null != first_message) {
      callback2(first_message, true);
    }
    if (null != most_recent_message) {
      callback2(most_recent_message, true);
    }
    if (tmp5) {
      callback(owner.user, true);
    }
  });
}
function handleLoadMessageRequestsSupplementalDataSuccess(supplementalData) {
  const values = Object.values(supplementalData.supplementalData);
  const item = values.forEach((message_preview) => {
    message_preview = message_preview.message_preview;
    if (null != message_preview) {
      callback(message_preview, true);
    }
  });
}
function handleFetchUsersForGuildEventSuccess(arg0) {
  let guildScheduledEventUsers;
  ({ guildScheduledEventUsers, guildId: closure_0 } = arg0);
  const item = guildScheduledEventUsers.forEach((arg0) => {
    let member;
    let user;
    ({ user, member } = arg0);
    if (null != user) {
      callback2(user);
      let avatar;
      if (null != member) {
        avatar = member.avatar;
      }
      if (null != avatar) {
        callback(user.id, closure_0, avatar);
      }
    }
  });
}
function handleLoadNotificationCenterItems(items) {
  items = items.items;
  const item = items.forEach((other_user) => {
    if (null != other_user.other_user) {
      callback(other_user.other_user);
    }
  });
}
function handleNotificationCenterItemCreate(item) {
  item = item.item;
  if (null != item.other_user) {
    mergeUser(item.other_user);
  }
}
function handleIncomingMessage(message) {
  message = message.message;
  mergeUsersFromMessage(message, true);
  if (null != message.flags) {
    const obj = importAll(dependencyMap[18]);
    if (obj.hasFlag(message.flags, constants2.URGENT)) {
      let flag = null != obj2;
      if (flag) {
        const id = store2.getId();
        obj[id] = obj2.set("flags", importAll(dependencyMap[18]).setFlag(obj2.flags, constants.HAS_UNREAD_URGENT_MESSAGES, true));
        flag = true;
        const obj3 = importAll(dependencyMap[18]);
      }
      return flag;
    }
  }
  return false;
}
function handleCreateChannel(channel) {
  const rawRecipients = channel.channel.rawRecipients;
  if (null != rawRecipients) {
    const item = rawRecipients.forEach((arg0) => callback(arg0));
  }
  return false;
}
function handleUpdateChannels(channels) {
  let iter2;
  const tmp = _createForOfIteratorHelperLoose(channels.channels);
  let iter = tmp();
  if (!iter.done) {
    do {
      let rawRecipients = iter.value.rawRecipients;
      if (null != rawRecipients) {
        let item = rawRecipients.forEach((arg0) => callback(arg0));
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  return false;
}
function handlePresenceUpdates(updates) {
  updates = updates.updates;
  const mapped = updates.map((arg0) => {
    const tmp = closure_16[arg0.user.id];
    if (null == tmp) {
      return false;
    } else {
      const reduced = closure_19.reduce((arg0, arg1) => {
        const user = arg0.user;
        let tmp = arg0;
        if (user.hasOwnProperty(arg1)) {
          const result = tmp.set(arg0(closure_3[19]).camelCase(arg1), arg0.user[arg1]);
          let tmp7 = arg0;
          if (!arg0) {
            tmp7 = result !== tmp;
          }
          tmp = result;
          tmp = tmp7;
          const obj = arg0(closure_3[19]);
        }
        return tmp;
      }, false);
      let tmp5 = !tmp4;
      if (!!reduced) {
        closure_16[tmp.id] = tmp;
        tmp5 = reduced;
      }
      return tmp5;
    }
  });
  return mapped.some((arg0) => arg0);
}
function handleLoadedBans(bans) {
  bans = bans.bans;
  const item = bans.forEach((user) => callback(user.user));
}
function handleLoadedBansBatch(bans) {
  bans = bans.bans;
  const item = bans.forEach((user) => callback(user.user));
}
function handleBan(user) {
  return mergeUser(user.user);
}
function handleRecipient(isMember) {
  let tmp2 = !tmp;
  if (!!isMember.isMember) {
    tmp2 = mergeUser(isMember.user);
  }
  return tmp2;
}
function handleGuildMembers(user) {
  const tmp = mergeUser(user.user);
  return mergeGuildAvatar(user.user.id, user.guildId, user.avatar) || mergeUser(user.user);
}
function handleGuildMemberListUpdate(ops) {
  let iter3;
  const tmp = _createForOfIteratorHelperLoose(ops.ops);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let value = iter2.value;
      if ("INSERT" === value.op) {
        let member = value.item.member;
        let user;
        if (null != member) {
          user = member.user;
        }
        let tmp3 = member;
        let tmp4 = user;
        if (null != user) {
          let tmp5 = closure_24;
          let tmp6 = closure_24(user.id, user);
          let tmp7 = member;
          let tmp8 = user;
        }
      }
      iter3 = tmp();
      iter2 = iter3;
    } while (!iter3.done);
  }
  return false;
}
function handleGuildMembersChunkBatch(chunks) {
  let done;
  let closure_0 = false;
  function _loop(value) {
    let closure_0 = value;
    const members = value.members;
    closure_0 = members.reduce((arg0, user) => {
      const tmp = callback2(user.user);
      return callback(user.user.id, tmp.guildId, user.avatar) || tmp || arg0;
    }, false) || closure_0;
  }
  const tmp = _createForOfIteratorHelperLoose(chunks.chunks);
  let iter = tmp();
  if (!iter.done) {
    do {
      let _loopResult = _loop(iter.value);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return closure_0;
}
function handlePassiveUpdateV2(members) {
  let iter3;
  const tmp = _createForOfIteratorHelperLoose(members.members);
  const iter = tmp();
  let iter2 = iter;
  let flag = false;
  let flag2 = false;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp2 = closure_27;
      if (closure_27(value.user)) {
        flag = true;
      }
      let tmp3 = closure_23;
      if (closure_23(value.user.id, members.guildId, value.avatar)) {
        flag = true;
      }
      iter3 = tmp();
      iter2 = iter3;
      flag2 = flag;
    } while (!iter3.done);
  }
  return flag2;
}
function handleLocalMessagesLoaded(users) {
  let iter3;
  users = users.users;
  if (null == users) {
    users = [];
  }
  const tmpResult = _createForOfIteratorHelperLoose(users);
  const iter = tmpResult();
  let iter2 = iter;
  let flag = false;
  let flag2 = false;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let _Object = Object;
      let tmp3 = closure_16;
      let tmp4 = flag;
      if (!Object.hasOwn(closure_16, value.id)) {
        let tmp5 = closure_27;
        let tmp6 = closure_27(value) || flag;
        tmp4 = tmp6;
      }
      iter3 = tmpResult();
      flag = tmp4;
      iter2 = iter3;
      flag2 = tmp4;
    } while (!iter3.done);
  }
  return flag2;
}
function handleThreadMemberListUpdate(members) {
  members = members.members;
  let closure_0 = false;
  const item = members.forEach((member) => {
    let tmp = null != member.member;
    if (tmp) {
      tmp = callback(member.member.user);
    }
    if (tmp) {
      let closure_0 = true;
    }
    let tmp3 = null != member.presence;
    if (tmp3) {
      tmp3 = callback(member.presence.user);
    }
    if (tmp3) {
      closure_0 = true;
    }
  });
  return closure_0;
}
function handleThreadMembersUpdate(addedMembers) {
  addedMembers = addedMembers.addedMembers;
  let closure_0 = false;
  if (null != addedMembers) {
    const item = addedMembers.forEach((member) => {
      let tmp = null != member.member;
      if (tmp) {
        tmp = callback(member.member.user);
      }
      if (tmp) {
        let closure_0 = true;
      }
      let tmp3 = null != member.presence;
      if (tmp3) {
        tmp3 = callback(member.presence.user);
      }
      if (tmp3) {
        closure_0 = true;
      }
    });
  }
  return closure_0;
}
function handleGuildCreate(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const members = guild.members;
  const item = members.forEach((user) => {
    let avatar;
    let bot;
    let discriminator;
    let username;
    user = user.user;
    const id = user.id;
    ({ username, avatar, discriminator, bot } = user);
    if (id !== id.getId()) {
      const obj = { id, username, avatar, discriminator, bot };
      callback2(obj);
    }
    callback(id, guild.id, user.avatar);
  });
}
function handleRelationshipAdd(relationship) {
  return mergeUser(relationship.relationship.user);
}
function handleGameRelationshipAdd(gameRelationship) {
  return mergeUser(gameRelationship.gameRelationship.user);
}
function handleLoadRelationships(relationships) {
  relationships = relationships.relationships;
  return relationships.reduce((arg0, user) => callback(user.user) || arg0, false);
}
function handleFriendSuggestionCreate(suggestion) {
  return mergeUser(suggestion.suggestion.suggested_user);
}
function handleLoadFriendSuggestions(suggestions) {
  suggestions = suggestions.suggestions;
  return suggestions.reduce((arg0, suggested_user) => callback(suggested_user.suggested_user) || arg0, false);
}
function handleAuditLogFetched(users) {
  users = users.users;
  const item = users.forEach((id) => {
    if (null == closure_16[id.id]) {
      const prototype = ctor.prototype;
      const tmp6 = new ctor(id);
      closure_16[id.id] = tmp6;
    }
  });
}
function handleGiftCodeResolve(giftCode) {
  giftCode = giftCode.giftCode;
  let tmp = null != giftCode.user;
  if (tmp) {
    tmp = mergeUser(giftCode.user);
  }
  return tmp;
}
function handleGuildPremiumSubscriptionsFetchSuccess(appliedBoosts) {
  appliedBoosts = appliedBoosts.appliedBoosts;
  const item = appliedBoosts.forEach((user) => {
    user = user.user;
    if (null != user) {
      callback(user);
    }
  });
}
function handleGuildJoinRequest(request) {
  let actioned_by_user;
  let user;
  ({ user, actioned_by_user } = request.request);
  let flag = false;
  if (null != user) {
    flag = mergeUser(user);
  }
  let tmp2 = flag;
  if (null != actioned_by_user) {
    let tmp3 = flag;
    if (!flag) {
      tmp3 = mergeUser(actioned_by_user);
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
function handleInitialFamilyCenterLoad(familyCenterTeenActivity) {
  const items = [...familyCenterTeenActivity.familyCenterTeenActivity.users];
  return items.reduce((arg0, arg1) => callback(arg1) || arg0, false);
}
function handleLinkedUserFetch(users) {
  users = users.users;
  return users.reduce((arg0, arg1) => callback(arg1) || arg0, false);
}
function handleRequestLinkSuccess(users) {
  users = users.users;
  return users.reduce((arg0, arg1) => callback(arg1) || arg0, false);
}
function handleTeenActivityFetch(familyCenterTeenActivity) {
  familyCenterTeenActivity = familyCenterTeenActivity.familyCenterTeenActivity;
  if (undefined !== familyCenterTeenActivity) {
    const users = familyCenterTeenActivity.users;
    return users.reduce((arg0, arg1) => callback(arg1) || arg0, false);
  }
}
function handleTeenActivityMoreFetch(familyCenterTeenActivity) {
  const users = familyCenterTeenActivity.familyCenterTeenActivity.users;
  return users.reduce((arg0, arg1) => callback(arg1) || arg0, false);
}
function handleMemberSafetyGuildMemberSearchSuccess(members) {
  members = members.members;
  const id = store2.getId();
  return members.reduce((arg0, member) => {
    let tmp = arg0;
    if (member.member.user.id !== closure_0) {
      tmp = callback(member.member.user) || arg0;
      const tmp3 = callback(member.member.user) || arg0;
    }
    return tmp;
  }, false);
}
function handleLoadICYMIHydratedItems(messageItems) {
  messageItems = messageItems.messageItems;
  const item = messageItems.forEach((message) => {
    if (null != message.message) {
      callback(message.message, true);
    }
  }, false);
}
function handleEmbeddedActivityUpdateV2(instance) {
  const participants = instance.instance.participants;
  return participants.reduce((arg0, member) => {
    let tmp = callback(closure_3[20])(member);
    if (tmp) {
      tmp = callback2(member.member.user);
    }
    if (!tmp) {
      tmp = arg0;
    }
    return tmp;
  }, false);
}
function handleInitiateAgeVerification(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    let flag = null != obj;
    if (flag) {
      const id = store2.getId();
      obj[id] = obj.set("ageVerificationStatus", arg1(dependencyMap[21]).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING);
      flag = true;
    }
    return flag;
  }
}
function handleCloseAgeVerificationModal(status) {
  let tmp = null != obj;
  if (tmp) {
    let flag = obj.ageVerificationStatus === arg1(dependencyMap[21]).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
    if (flag) {
      const id = store2.getId();
      obj[id] = obj.set("ageVerificationStatus", status.status);
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
}
function handleInteractionModalCreate(resolved) {
  return processResolvedUsers(resolved.resolved, true);
}
function handleGuildStickersFetchSuccess(stickers) {
  stickers = stickers.stickers;
  return stickers.reduce((arg0, user) => {
    let tmp = null != user.user;
    if (tmp) {
      tmp = callback(user.user);
    }
    if (!tmp) {
      tmp = arg0;
    }
    return tmp;
  }, false);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
const importDefaultResult = importDefault(dependencyMap[8]);
({ UserFlags: closure_12, MessageFlags: closure_13, ChannelTypes: closure_14 } = arg1(dependencyMap[9]));
let closure_15 = arg1(dependencyMap[10]).UNSELECTED_PREMIUM_TYPE_OVERRIDE;
const obj = {};
let closure_17 = 0;
let closure_18 = "47835198259242069";
let closure_19 = [];
let tmp4 = (importDefaultResult) => {
  class UserStore {
    constructor() {
      self = this;
      tmp = closure_4(this, UserStore);
      obj = {
        CONNECTION_OPEN: closure_31,
        CONNECTION_OPEN_SUPPLEMENTAL: closure_32,
        UPDATE_CLIENT_PREMIUM_TYPE: closure_39,
        OVERLAY_INITIALIZE: closure_34,
        CACHE_LOADED(users) {
              return tmp2Result.handleLoadCache(users);
            },
        USER_UPDATE: closure_35,
        USER_RESTRICTED_SCHEDULE_UPDATE: closure_36,
        USER_PROFILE_FETCH_SUCCESS: closure_37,
        CURRENT_USER_UPDATE: closure_38,
        PRESENCE_UPDATES: closure_55,
        SEARCH_MESSAGES_SUCCESS: closure_45,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: closure_45,
        LOAD_MESSAGES_SUCCESS: closure_40,
        LOAD_MESSAGES_AROUND_SUCCESS: closure_40,
        LOAD_RECENT_MENTIONS_SUCCESS: closure_40,
        CONVERSATION_FETCH_SUCCESS: closure_41,
        CONVERSATIONS_FETCH_SUCCESS: closure_42,
        LOAD_PINNED_MESSAGES_SUCCESS: closure_43,
        THREAD_LIST_SYNC: closure_44,
        MESSAGE_CREATE: closure_52,
        MESSAGE_UPDATE: closure_52,
        GUILD_SETTINGS_LOADED_BANS: closure_56,
        GUILD_SETTINGS_LOADED_BANS_BATCH: closure_57,
        GUILD_CREATE: closure_67,
        GUILD_BAN_ADD: closure_58,
        GUILD_BAN_REMOVE: closure_58,
        CHANNEL_RECIPIENT_ADD: closure_59,
        CHANNEL_RECIPIENT_REMOVE: closure_59,
        GUILD_STICKERS_FETCH_SUCCESS: closure_88,
        GUILD_JOIN_REQUEST_CREATE: closure_76,
        GUILD_JOIN_REQUEST_UPDATE: closure_76,
        GUILD_MEMBER_ADD: closure_60,
        GUILD_MEMBER_UPDATE: closure_60,
        GUILD_MEMBERS_CHUNK_BATCH: closure_62,
        GUILD_MEMBER_LIST_UPDATE: closure_61,
        THREAD_MEMBER_LIST_UPDATE: closure_65,
        THREAD_MEMBERS_UPDATE: closure_66,
        CHANNEL_CREATE: closure_53,
        CHANNEL_UPDATES: closure_54,
        RELATIONSHIP_ADD: closure_68,
        GAME_RELATIONSHIP_ADD: closure_69,
        LOAD_RELATIONSHIPS_SUCCESS: closure_70,
        FRIEND_SUGGESTION_CREATE: closure_71,
        LOAD_FRIEND_SUGGESTIONS_SUCCESS: closure_72,
        AUDIT_LOG_FETCH_SUCCESS: closure_73,
        AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: closure_73,
        GIFT_CODE_RESOLVE_SUCCESS: closure_74,
        GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: closure_75,
        LOAD_THREADS_SUCCESS: closure_46,
        LOAD_ARCHIVED_THREADS_SUCCESS: closure_46,
        LOAD_FORUM_POSTS: closure_47,
        GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: closure_49,
        LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: closure_50,
        NOTIFICATION_CENTER_ITEM_CREATE: closure_51,
        LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: closure_48,
        PASSIVE_UPDATE_V2: closure_63,
        LOCAL_MESSAGES_LOADED: closure_64,
        FAMILY_CENTER_INITIAL_LOAD: closure_77,
        FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: closure_78,
        FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: closure_80,
        FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: closure_81,
        FAMILY_CENTER_REQUEST_LINK_SUCCESS: closure_79,
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: closure_82,
        LOAD_ICYMI_HYDRATED: closure_83,
        EMBEDDED_ACTIVITY_UPDATE_V2: closure_84,
        INITIATE_AGE_VERIFICATION: closure_85,
        CLOSE_AGE_VERIFICATION_MODAL: closure_86,
        INTERACTION_MODAL_CREATE: closure_87
      };
      items = [];
      items[0] = obj;
      obj2 = closure_7(UserStore);
      tmp2 = closure_6;
      if (closure_20()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj2, items, closure_7(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      UserStore = tmp2Result;
      return tmp2Result;
    }
  }
  const arg1 = UserStore;
  callback2(UserStore, importDefaultResult);
  let obj = {
    key: "initialize",
    value: function initialize() {
      this.waitFor(closure_11, closure_9);
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "takeSnapshot",
    value: function takeSnapshot() {
      let obj = { version: UserStore.LATEST_SNAPSHOT_VERSION };
      obj = {};
      const items = [this.getCurrentUser()];
      obj.users = items.filter(UserStore(closure_3[22]).isNotNullish);
      obj.data = obj;
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "handleLoadCache",
    value: function handleLoadCache(users) {
      let done;
      let iter4;
      const snapshot = this.readSnapshot(UserStore.LATEST_SNAPSHOT_VERSION);
      if (null != snapshot) {
        const tmp3 = callback4(snapshot.users);
        let iter = tmp3();
        if (!iter.done) {
          do {
            let value = iter.value;
            let tmp4 = closure_16;
            let tmp5 = closure_10;
            let prototype = closure_10.prototype;
            let tmp6 = new.target;
            let tmp7 = new.target;
            let tmp8 = value;
            let tmp9 = new closure_10(value);
            let tmp10 = tmp9;
            closure_16[value.id] = tmp9;
            let iter2 = tmp3();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
      }
      if (null != users.users) {
        const tmp12 = callback4(users.users);
        let iter3 = tmp12();
        if (!iter3.done) {
          do {
            value = iter3.value;
            let tmp13 = closure_16;
            let tmp14 = value.id in closure_16;
            if (tmp14) {
              let tmp15 = closure_33;
              tmp14 = closure_33(value);
            }
            if (!tmp14) {
              let tmp16 = closure_16;
              let tmp17 = closure_10;
              let prototype2 = closure_10.prototype;
              let tmp18 = new.target;
              let tmp19 = new.target;
              let tmp20 = value;
              let tmp21 = new closure_10(value);
              let tmp22 = tmp21;
              closure_16[value.id] = tmp21;
            }
            iter4 = tmp12();
            iter3 = iter4;
          } while (!iter4.done);
        }
      }
      const items = [, ];
      ({ privateChannels: arr[0], initialGuildChannels: arr[1] } = users);
      for (let num = 0; num < items.length; num = num + 1) {
        let tmp23 = callback4;
        let tmp24 = callback4(items[num]);
        let iter5 = tmp24();
        if (!iter5.done) {
          do {
            let rawRecipients = iter5.value.rawRecipients;
            if (null != rawRecipients) {
              let item = rawRecipients.forEach((arg0) => callback(arg0, false));
            }
            let iter6 = tmp24();
            iter5 = iter6;
            let tmp26 = rawRecipients;
          } while (!iter6.done);
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUserStoreVersion",
    value: function getUserStoreVersion() {
      return closure_17;
    }
  };
  items[4] = {
    key: "getUser",
    value: function getUser(arg0) {
      if (null != arg0) {
        return closure_16[arg0];
      }
    }
  };
  items[5] = {
    key: "getUsers",
    value: function getUsers() {
      return closure_16;
    }
  };
  items[6] = {
    key: "forEach",
    value: function forEach(arg0) {
      for (const key10005 in closure_16) {
        let tmp = key10005;
        let tmp2 = closure_16;
        if (false === arg0(closure_16[key10005])) {
          break;
        }
      }
    }
  };
  items[7] = {
    key: "findByTag",
    value: function findByTag(match, match2) {
      for (const key10005 in closure_16) {
        let tmp = key10005;
        let tmp2 = closure_16;
        let obj = closure_16[key10005];
        if (null != arg1) {
          if (obj.username === arg0) {
            if (obj.discriminator === arg1) {
              return obj;
            }
          }
        }
        if (null != arg1) {
          continue;
        } else {
          if (obj.username !== arg0) {
            continue;
          } else if (!obj.hasUniqueUsername()) {
            continue;
          } else {
            return obj;
          }
          continue;
        }
        continue;
      }
    }
  };
  items[8] = {
    key: "filter",
    value: function filter(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      const items = [];
      for (const key10006 in closure_16) {
        let tmp3 = key10006;
        let tmp4 = closure_16;
        let tmp5 = closure_16[key10006];
        if (!arg0(tmp5)) {
          continue;
        } else {
          let arr = items.push(tmp5);
          // continue
        }
        continue;
      }
      if (flag) {
        const sorted = items.sort((username, username2) => {
          let num = 1;
          if (username.username <= username2.username) {
            let num2 = 0;
            if (username.username < username2.username) {
              num2 = -1;
            }
            num = num2;
          }
          return num;
        });
      }
      return items;
    }
  };
  items[9] = {
    key: "getCurrentUser",
    value: function getCurrentUser() {
      return closure_16[closure_11.getId(closure_11)];
    }
  };
  return callback(UserStore, items);
}(importDefaultResult);
tmp4.displayName = "UserStore";
tmp4.LATEST_SNAPSHOT_VERSION = 1;
tmp4 = new tmp4();
const tmp3 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("stores/UserStore.tsx");

export default tmp4;
export const users = obj;
export const ASSISTANT_WUMPUS_VOICE_USER = "47835198259242069";
export { transformUser };
export { mergeUser };
