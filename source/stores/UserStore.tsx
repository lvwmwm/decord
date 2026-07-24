// Module ID: 1849
// Function ID: 20277
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1850, 1857, 1194, 1196, 653, 1851, 1859, 1855, 1828, 1829, 1860, 1864, 1870, 1360, 22, 1880, 1881, 1327, 2]

// Module 1849 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import wrapHue from "wrapHue";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hasFlag from "hasFlag";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import { UNSELECTED_PREMIUM_TYPE_OVERRIDE as closure_15 } from "GuildFeatures";
import tmp4 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";

let closure_12;
let closure_13;
let closure_14;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function mergeUserPrimaryGuild(id, user) {
  let tmp2 = null != tmp;
  if (tmp2) {
    const obj = require(1859) /* isUserPrimaryGuildEqual */;
    let tmp5 = !obj.isUserPrimaryGuildEqual(tmp.primaryGuild, user.primary_guild);
    if (tmp5) {
      let flag = null == tmp.primaryGuild || null != user.primary_guild;
      if (flag) {
        tmp.primaryGuild = require(1859) /* isUserPrimaryGuildEqual */.ensureUserPrimaryGuild(user.primary_guild);
        obj[tmp.id] = tmp;
        closure_17 = closure_17 + 1;
        flag = true;
        const obj2 = require(1859) /* isUserPrimaryGuildEqual */;
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
    delete tmp.mfa_enabled;
  }
  const premiumTypeFromRawValue = require(1855) /* getEnv */.getPremiumTypeFromRawValue(mfa_enabled.premium_type);
  if (undefined !== premiumTypeFromRawValue) {
    mfa_enabled.premiumType = premiumTypeFromRawValue;
    delete tmp.premium_type;
  }
  const nsfw_allowed = mfa_enabled.nsfw_allowed;
  if (null != nsfw_allowed) {
    mfa_enabled.nsfwAllowed = nsfw_allowed;
    delete tmp.nsfw_allowed;
  }
  const age_verification_status = mfa_enabled.age_verification_status;
  if (null != age_verification_status) {
    mfa_enabled.ageVerificationStatus = age_verification_status;
    delete tmp.age_verification_status;
  }
  const public_flags = mfa_enabled.public_flags;
  if (null != public_flags) {
    mfa_enabled.publicFlags = public_flags;
    delete tmp.public_flags;
  }
  const purchased_flags = mfa_enabled.purchased_flags;
  if (undefined !== purchased_flags) {
    mfa_enabled.purchasedFlags = purchased_flags;
    delete tmp.purchased_flags;
  }
  const premium_usage_flags = mfa_enabled.premium_usage_flags;
  if (undefined !== premium_usage_flags) {
    mfa_enabled.premiumUsageFlags = premium_usage_flags;
    delete tmp.premium_usage_flags;
  }
  if (null === mfa_enabled.banner_color) {
    delete tmp.banner_color;
  }
  const avatar_decoration_data = mfa_enabled.avatar_decoration_data;
  if (undefined !== avatar_decoration_data) {
    mfa_enabled.avatarDecorationData = require(1828) /* parseAvatarDecorationData */.parseAvatarDecorationData(avatar_decoration_data);
    delete tmp.avatar_decoration_data;
    const obj2 = require(1828) /* parseAvatarDecorationData */;
  }
  const collectibles = mfa_enabled.collectibles;
  if (undefined !== collectibles) {
    delete tmp.collectibles;
    mfa_enabled.collectibles = require(1829) /* parseSkuIdFromServerData */.parseServerUserCollectibles(collectibles);
    const obj3 = require(1829) /* parseSkuIdFromServerData */;
  }
  const global_name = mfa_enabled.global_name;
  if (undefined !== global_name) {
    mfa_enabled.globalName = global_name;
    delete tmp.global_name;
  }
  const primary_guild = mfa_enabled.primary_guild;
  if (undefined !== primary_guild) {
    mfa_enabled.primary_guild = require(1859) /* isUserPrimaryGuildEqual */.ensureUserPrimaryGuild(primary_guild);
    const obj4 = require(1859) /* isUserPrimaryGuildEqual */;
  }
  const display_name_styles = mfa_enabled.display_name_styles;
  if (undefined !== display_name_styles) {
    mfa_enabled.displayNameStyles = require(1860) /* wrapHue */.parseServerDisplayNameStyles(display_name_styles);
    delete tmp.display_name_styles;
    const obj5 = require(1860) /* wrapHue */;
  }
  const premium_state = mfa_enabled.premium_state;
  if (undefined !== premium_state) {
    mfa_enabled.premiumState = require(1864) /* parseServerPremiumState */.parseServerPremiumState(premium_state);
    delete tmp.premium_state;
    const obj6 = require(1864) /* parseServerPremiumState */;
  }
  const restricted_schedule = mfa_enabled.restricted_schedule;
  if (undefined !== restricted_schedule) {
    const RestrictedScheduleRecord = require(1870) /* _createForOfIteratorHelperLoose */.RestrictedScheduleRecord;
    const fromServerResult = RestrictedScheduleRecord.fromServer(restricted_schedule);
    let tmp16 = null;
    if (null != fromServerResult) {
      tmp16 = fromServerResult;
    }
    mfa_enabled.restrictedSchedule = tmp16;
    delete tmp.restricted_schedule;
  }
  const app_transaction_ids = mfa_enabled.app_transaction_ids;
  if (undefined !== app_transaction_ids) {
    mfa_enabled.appTransactionIds = app_transaction_ids;
    delete tmp.app_transaction_ids;
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
      tmp26.premiumType = getUserPremiumType(require(1855) /* getEnv */.isStaffEnv(tmp26), tmp26.premiumType);
      tmp19 = premiumType3;
      mergeResult = tmp26;
      const obj6 = require(1855) /* getEnv */;
    }
    tmp28 = undefined !== premiumType3 && tmp;
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
        isStaffEnvRawDataResult = require(1855) /* getEnv */.isStaffEnvRawData(user);
        const obj2 = require(1855) /* getEnv */;
      }
      if (isStaffEnvRawDataResult) {
        let premiumType2 = user.premium_type;
        if (null == premiumType2) {
          premiumType2 = user.premiumType;
        }
        const tmp11 = getUserPremiumType(require(1855) /* getEnv */.isStaffEnvRawData(user), premiumType2);
        if (undefined !== user.premiumType) {
          user.premiumType = tmp11;
        } else if (undefined !== user.premium_type) {
          user.premium_type = tmp11;
        }
        const obj3 = require(1855) /* getEnv */;
      }
      if (tmp12 !== true) {
        if (tmp13 !== true) {
          if (obj4.isUserPrimaryGuildEqual(obj.primaryGuild, user.primary_guild) !== true) {
            user.primary_guild = require(1859) /* isUserPrimaryGuildEqual */.ensureUserPrimaryGuild(user.primary_guild);
            const obj5 = require(1859) /* isUserPrimaryGuildEqual */;
          }
          obj4 = require(1859) /* isUserPrimaryGuildEqual */;
        }
        user.primary_guild = obj.primaryGuild;
        tmp13 = null != obj.primaryGuild && null == user.primary_guild;
      }
      mergeResult = obj.merge(user);
      tmp19 = premiumType;
      tmp12 = null == obj.primaryGuild && null == user.primary_guild;
    }
  }
  const obj7 = require(1855) /* getEnv */;
  obj7.validatePremiumType(require(1855) /* getEnv */.isStaffEnv(mergeResult), tmp19, mergeResult.premiumType);
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
      let tmp6 = isNotCurrentUser;
      if (!isNotCurrentUser(tmp5)) {
        continue;
      } else {
        let tmp2 = mergeUser;
        let tmp3 = mergeUser(tmp5, arg1);
        continue;
      }
      continue;
    }
  }
}
function mergeUsersFromMessage(message, arg1) {
  let closure_0 = arg1;
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
    let item = mentions.forEach((arg0) => {
      if (outer1_26(arg0)) {
        outer1_27(arg0, closure_0);
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
          if (outer2_26(arg0)) {
            outer2_27(arg0, outer1_0);
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
        outer1_27(moderator_report.moderator_report.reported_member.user, closure_0);
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
        outer1_27(moderator_report.moderator_report.reporting_member.user, closure_0);
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
        if (outer2_26(arg0)) {
          outer2_27(arg0, outer1_0);
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
  delete tmp.premium;
  delete tmp.banner_color;
  mergeUser(user);
  let item = users.forEach((arg0) => {
    outer1_27(arg0);
  });
  const item1 = guilds.forEach((members) => {
    let closure_0 = members;
    members = members.members;
    const item = members.forEach((user) => {
      outer2_23(user.user.id, members.id, user.avatar);
      outer2_24(user.user.id, user.user);
    });
  });
  if (null != obj[store2.getId(store2)]) {
    obj = { id: c18, username: "Wumpus", discriminator: "0", globalName: "Wumpus", avatar: "c1f86b313385cb97985f1b118851c28c" };
    const prototype = ctor.prototype;
    const tmp11 = new ctor(obj);
    obj[c18] = tmp11;
  }
}
function handleConnectionOpenSupplemental(arg0) {
  let guilds;
  let lazyPrivateChannels;
  ({ guilds, lazyPrivateChannels } = arg0);
  let item = guilds.forEach((members) => {
    let closure_0 = members;
    members = members.members;
    const item = members.forEach((user) => {
      outer2_23(user.user.id, members.id, user.avatar);
      outer2_24(user.user.id, user.user);
    });
  });
  if (null != lazyPrivateChannels) {
    const item1 = lazyPrivateChannels.forEach((rawRecipients) => {
      rawRecipients = rawRecipients.rawRecipients;
      if (null != rawRecipients) {
        const item = rawRecipients.forEach((arg0) => {
          outer2_27(arg0);
        });
      }
    });
  }
}
function isIncompleteUser(value) {
  return !("incomplete" in value);
}
function handleInitialize(users) {
  let iter2;
  if (null != users.users) {
    const tmp2 = _createForOfIteratorHelperLoose(users.users);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp3 = obj;
        let tmp4 = value.id in obj;
        if (tmp4) {
          let tmp5 = isIncompleteUser;
          tmp4 = isIncompleteUser(value);
        }
        if (!tmp4) {
          let tmp6 = obj;
          let tmp7 = ctor;
          let prototype = ctor.prototype;
          let tmp8 = new.target;
          let tmp9 = new.target;
          let tmp10 = value;
          let tmp11 = new ctor(value);
          let tmp12 = tmp11;
          obj[value.id] = tmp11;
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
    outer1_30(arg0, true);
  });
  return false;
}
function handleConversationFetchSuccess(messages) {
  messages = messages.messages;
  const combined = messages.concat(messages.messageReferences);
  const item = combined.forEach((arg0) => {
    outer1_30(arg0, true);
  });
  return false;
}
function handleConversationsFetchSuccess(rawConversations) {
  rawConversations = rawConversations.rawConversations;
  let item = rawConversations.forEach((messages) => {
    messages = messages.messages;
    let item;
    if (null != messages) {
      item = messages.forEach((arg0) => {
        outer2_30(arg0, true);
      });
    }
    return item;
  });
  return false;
}
function handleLoadPinnedMessages(pins) {
  pins = pins.pins;
  const item = pins.forEach((message) => {
    outer1_30(message.message, true);
  });
  return false;
}
function handleThreadListSync(mostRecentMessages) {
  mostRecentMessages = mostRecentMessages.mostRecentMessages;
  if (null != mostRecentMessages) {
    const item = mostRecentMessages.forEach((arg0) => {
      outer1_30(arg0, false);
    });
  }
  return false;
}
function handleLoadSearchResults(data) {
  data = data.data;
  let item = data.forEach((arg0) => {
    let channels;
    let messages;
    ({ messages, channels } = arg0);
    let item = messages.forEach((arr) => {
      const item = arr.forEach((arg0) => {
        outer3_30(arg0, true);
      });
    });
    const item1 = channels.forEach((type) => {
      let tmp = type.type !== outer2_14.DM;
      if (tmp) {
        tmp = type.type !== outer2_14.GROUP_DM;
      }
      if (!tmp) {
        const recipients = type.recipients;
        if (null != recipients) {
          const item = recipients.forEach((arg0) => outer3_27(arg0));
        }
        if (null != type.recipient) {
          outer2_27(type.recipient);
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
      outer1_30(arg0, true);
    });
  }
  if (null != owners) {
    const item1 = owners.forEach((user) => outer1_27(user.user, true));
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
      outer1_30(first_message, true);
    }
    if (null != most_recent_message) {
      outer1_30(most_recent_message, true);
    }
    if (tmp5) {
      outer1_27(owner.user, true);
    }
  });
}
function handleLoadMessageRequestsSupplementalDataSuccess(supplementalData) {
  const values = Object.values(supplementalData.supplementalData);
  const item = values.forEach((message_preview) => {
    message_preview = message_preview.message_preview;
    if (null != message_preview) {
      outer1_30(message_preview, true);
    }
  });
}
function handleFetchUsersForGuildEventSuccess(arg0) {
  let guildScheduledEventUsers;
  let require;
  ({ guildScheduledEventUsers, guildId: require } = arg0);
  const item = guildScheduledEventUsers.forEach((arg0) => {
    let member;
    let user;
    ({ user, member } = arg0);
    if (null != user) {
      outer1_27(user);
      let avatar;
      if (null != member) {
        avatar = member.avatar;
      }
      if (null != avatar) {
        outer1_23(user.id, closure_0, avatar);
      }
    }
  });
}
function handleLoadNotificationCenterItems(items) {
  items = items.items;
  const item = items.forEach((other_user) => {
    if (null != other_user.other_user) {
      outer1_27(other_user.other_user);
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
    const obj = importAll(1360);
    if (obj.hasFlag(message.flags, constants2.URGENT)) {
      const obj2 = obj[store2.getId(store2)];
      let flag = null != obj2;
      if (flag) {
        const id = store2.getId();
        obj[id] = obj2.set("flags", importAll(1360).setFlag(obj2.flags, constants.HAS_UNREAD_URGENT_MESSAGES, true));
        flag = true;
        const obj3 = importAll(1360);
      }
      return flag;
    }
  }
  return false;
}
function handleCreateChannel(channel) {
  const rawRecipients = channel.channel.rawRecipients;
  if (null != rawRecipients) {
    const item = rawRecipients.forEach((arg0) => outer1_27(arg0));
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
        let item = rawRecipients.forEach((arg0) => outer1_27(arg0));
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
    let closure_0 = arg0;
    const id = tmp;
    if (null == outer1_16[arg0.user.id]) {
      return false;
    } else {
      const reduced = outer1_19.reduce((arg0, arg1) => {
        const user = closure_0.user;
        let tmp = arg0;
        if (user.hasOwnProperty(arg1)) {
          const result = tmp.set(outer2_0(outer2_3[19]).camelCase(arg1), closure_0.user[arg1]);
          let tmp7 = arg0;
          if (!arg0) {
            tmp7 = result !== tmp;
          }
          tmp = result;
          tmp = tmp7;
          const obj = outer2_0(outer2_3[19]);
        }
        return tmp;
      }, false);
      let tmp5 = !tmp4;
      if (!!reduced) {
        outer1_16[id.id] = id;
        tmp5 = reduced;
      }
      return tmp5;
    }
  });
  return mapped.some((arg0) => arg0);
}
function handleLoadedBans(bans) {
  bans = bans.bans;
  const item = bans.forEach((user) => outer1_27(user.user));
}
function handleLoadedBansBatch(bans) {
  bans = bans.bans;
  const item = bans.forEach((user) => outer1_27(user.user));
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
          let tmp5 = mergeUserPrimaryGuild;
          let tmp6 = mergeUserPrimaryGuild(user.id, user);
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
  let c0 = false;
  function _loop(value) {
    let closure_0 = value;
    const members = value.members;
    closure_0 = members.reduce((arg0, user) => {
      const tmp = outer2_27(user.user);
      return outer2_23(user.user.id, value.guildId, user.avatar) || outer2_27(user.user) || arg0;
    }, false) || closure_0;
  }
  let tmp = _createForOfIteratorHelperLoose(chunks.chunks);
  let iter = tmp();
  if (!iter.done) {
    do {
      let _loopResult = _loop(iter.value);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return c0;
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
      let tmp2 = mergeUser;
      if (mergeUser(value.user)) {
        flag = true;
      }
      let tmp3 = mergeGuildAvatar;
      if (mergeGuildAvatar(value.user.id, members.guildId, value.avatar)) {
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
      let tmp3 = obj;
      let tmp4 = flag;
      if (!Object.hasOwn(obj, value.id)) {
        let tmp5 = mergeUser;
        let tmp6 = mergeUser(value) || flag;
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
  let c0 = false;
  const item = members.forEach((member) => {
    let tmp = null != member.member;
    if (tmp) {
      tmp = outer1_27(member.member.user);
    }
    if (tmp) {
      let c0 = true;
    }
    let tmp3 = null != member.presence;
    if (tmp3) {
      tmp3 = outer1_27(member.presence.user);
    }
    if (tmp3) {
      c0 = true;
    }
  });
  return c0;
}
function handleThreadMembersUpdate(addedMembers) {
  addedMembers = addedMembers.addedMembers;
  let c0 = false;
  if (null != addedMembers) {
    const item = addedMembers.forEach((member) => {
      let tmp = null != member.member;
      if (tmp) {
        tmp = outer1_27(member.member.user);
      }
      if (tmp) {
        let c0 = true;
      }
      let tmp3 = null != member.presence;
      if (tmp3) {
        tmp3 = outer1_27(member.presence.user);
      }
      if (tmp3) {
        c0 = true;
      }
    });
  }
  return c0;
}
function handleGuildCreate(guild) {
  guild = guild.guild;
  const members = guild.members;
  const item = members.forEach((user) => {
    let avatar;
    let bot;
    let discriminator;
    let username;
    user = user.user;
    const id = user.id;
    ({ username, avatar, discriminator, bot } = user);
    if (id !== outer1_11.getId()) {
      const obj = { id, username, avatar, discriminator, bot };
      outer1_27(obj);
    }
    outer1_23(id, guild.id, user.avatar);
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
  return relationships.reduce((arg0, user) => outer1_27(user.user) || arg0, false);
}
function handleFriendSuggestionCreate(suggestion) {
  return mergeUser(suggestion.suggestion.suggested_user);
}
function handleLoadFriendSuggestions(suggestions) {
  suggestions = suggestions.suggestions;
  return suggestions.reduce((arg0, suggested_user) => outer1_27(suggested_user.suggested_user) || arg0, false);
}
function handleAuditLogFetched(users) {
  users = users.users;
  const item = users.forEach((id) => {
    if (null == outer1_16[id.id]) {
      const prototype = outer1_10.prototype;
      const tmp6 = new outer1_10(id);
      outer1_16[id.id] = tmp6;
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
      outer1_27(user);
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
  return items.reduce((arg0, arg1) => outer1_27(arg1) || arg0, false);
}
function handleLinkedUserFetch(users) {
  users = users.users;
  return users.reduce((arg0, arg1) => outer1_27(arg1) || arg0, false);
}
function handleRequestLinkSuccess(users) {
  users = users.users;
  return users.reduce((arg0, arg1) => outer1_27(arg1) || arg0, false);
}
function handleTeenActivityFetch(familyCenterTeenActivity) {
  familyCenterTeenActivity = familyCenterTeenActivity.familyCenterTeenActivity;
  if (undefined !== familyCenterTeenActivity) {
    const users = familyCenterTeenActivity.users;
    return users.reduce((arg0, arg1) => outer1_27(arg1) || arg0, false);
  }
}
function handleTeenActivityMoreFetch(familyCenterTeenActivity) {
  const users = familyCenterTeenActivity.familyCenterTeenActivity.users;
  return users.reduce((arg0, arg1) => outer1_27(arg1) || arg0, false);
}
function handleMemberSafetyGuildMemberSearchSuccess(members) {
  members = members.members;
  const id = store2.getId();
  return members.reduce((arg0, member) => {
    let tmp = arg0;
    if (member.member.user.id !== closure_0) {
      tmp = outer1_27(member.member.user) || arg0;
      const tmp3 = outer1_27(member.member.user) || arg0;
    }
    return tmp;
  }, false);
}
function handleLoadICYMIHydratedItems(messageItems) {
  messageItems = messageItems.messageItems;
  const item = messageItems.forEach((message) => {
    if (null != message.message) {
      outer1_30(message.message, true);
    }
  }, false);
}
function handleEmbeddedActivityUpdateV2(instance) {
  const participants = instance.instance.participants;
  return participants.reduce((arg0, member) => {
    let tmp = outer1_1(outer1_3[20])(member);
    if (tmp) {
      tmp = outer1_27(member.member.user);
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
    obj = obj[store2.getId(store2)];
    let flag = null != obj;
    if (flag) {
      const id = store2.getId();
      obj[id] = obj.set("ageVerificationStatus", require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING);
      flag = true;
    }
    return flag;
  }
}
function handleCloseAgeVerificationModal(status) {
  obj = obj[store2.getId(store2)];
  let tmp = null != obj;
  if (tmp) {
    let flag = obj.ageVerificationStatus === require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
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
      tmp = outer1_27(user.user);
    }
    if (!tmp) {
      tmp = arg0;
    }
    return tmp;
  }, false);
}
({ UserFlags: closure_12, MessageFlags: closure_13, ChannelTypes: closure_14 } = ME);
let obj = {};
let c17 = 0;
let c18 = "47835198259242069";
let closure_19 = ["username", "avatar", "global_name", "discriminator", "bot", "primary_guild"];
tmp4.displayName = "UserStore";
tmp4.LATEST_SNAPSHOT_VERSION = 1;
tmp4 = new tmp4();
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/UserStore.tsx");

export default tmp4;
export const users = obj;
export const ASSISTANT_WUMPUS_VOICE_USER = "47835198259242069";
export { transformUser };
export { mergeUser };
