// Module ID: 5345
// Function ID: 45681
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: trackMessageNotificationTimestamps

// Module 5345 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = null;
let closure_11 = null;
let closure_12 = null;
let closure_13 = null;
let closure_14 = {};
let closure_15 = {};
let closure_16 = {};
let closure_17 = {};
let tmp2 = (Store) => {
  class LastMentionTimestampStore {
    constructor() {
      self = this;
      tmp = closure_2(this, LastMentionTimestampStore);
      obj = closure_5(LastMentionTimestampStore);
      tmp2 = closure_4;
      if (closure_18()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = LastMentionTimestampStore;
  callback2(LastMentionTimestampStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7, closure_8, closure_9);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getGlobalStats",
    value() {
      function age(closure_10) {
        let rounded = null;
        if (null != closure_10) {
          const _Math = Math;
          const _Date = Date;
          rounded = Math.floor((Date.now() - closure_10) / 1000);
        }
        return rounded;
      }
      return { approx_seconds_since_last_notification: age(closure_10), approx_seconds_since_last_mention: age(closure_11), approx_seconds_since_last_role_mention: age(closure_12), approx_seconds_since_last_everyone_mention: age(closure_13) };
    }
  };
  items[1] = obj;
  obj = {
    key: "getStats",
    value(arg0) {
      function age(closure_10) {
        let rounded = null;
        if (null != closure_10) {
          const _Math = Math;
          const _Date = Date;
          rounded = Math.floor((Date.now() - closure_10) / 1000);
        }
        return rounded;
      }
      const obj = { approx_seconds_since_last_notification: age(closure_10), approx_seconds_since_last_mention: age(closure_11), approx_seconds_since_last_role_mention: age(closure_12), approx_seconds_since_last_everyone_mention: age(closure_13) };
      let ageResult = null;
      if (null != arg0) {
        ageResult = age(closure_14[arg0]);
      }
      obj.approx_seconds_since_last_guild_notification = ageResult;
      let ageResult1 = null;
      if (null != arg0) {
        ageResult1 = age(closure_15[arg0]);
      }
      obj.approx_seconds_since_last_guild_mention = ageResult1;
      let ageResult2 = null;
      if (null != arg0) {
        ageResult2 = age(closure_17[arg0]);
      }
      obj.approx_seconds_since_last_guild_role_mention = ageResult2;
      let ageResult3 = null;
      if (null != arg0) {
        ageResult3 = age(closure_16[arg0]);
      }
      obj.approx_seconds_since_last_guild_everyone_mention = ageResult3;
      return obj;
    }
  };
  items[2] = obj;
  return callback(LastMentionTimestampStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    function isRecent(closure_10) {
      let tmp = null != closure_10;
      if (tmp) {
        const _Date = Date;
        tmp = Date.now() - closure_10 < 60000;
      }
      return tmp;
    }
    if (!isRecent(closure_10)) {
      closure_10 = null;
    }
    if (!isRecent(closure_11)) {
      closure_11 = null;
    }
    if (!isRecent(closure_12)) {
      closure_12 = null;
    }
    if (!isRecent(closure_13)) {
      closure_13 = null;
    }
    for (const key10016 in closure_14) {
      let tmp9 = key10016;
      let tmp10 = closure_14;
      if (isRecent(closure_14[key10016])) {
        continue;
      } else {
        let tmp5 = closure_14;
        delete r8[r9];
        // continue
      }
      continue;
    }
    for (const key10020 in closure_15) {
      let tmp11 = key10020;
      let tmp12 = closure_15;
      if (isRecent(closure_15[key10020])) {
        continue;
      } else {
        let tmp6 = closure_15;
        delete r8[r9];
        // continue
      }
      continue;
    }
    for (const key10024 in closure_17) {
      let tmp13 = key10024;
      let tmp14 = closure_17;
      if (isRecent(closure_17[key10024])) {
        continue;
      } else {
        let tmp7 = closure_17;
        delete r8[r9];
        // continue
      }
      continue;
    }
    for (const key10028 in closure_16) {
      let tmp15 = key10028;
      let tmp16 = closure_16;
      if (isRecent(closure_16[key10028])) {
        continue;
      } else {
        let tmp8 = closure_16;
        delete r8[r9];
        // continue
      }
      continue;
    }
  },
  MESSAGE_NOTIFICATION_SHOWN: function handleMessageNotificationShown(guildId) {
    let everyoneMentioned;
    let mentioned;
    let roleMentioned;
    guildId = guildId.guildId;
    ({ mentioned, roleMentioned, everyoneMentioned } = guildId);
    const timestamp = Date.now();
    let closure_10 = timestamp;
    if (null != guildId) {
      closure_14[guildId] = timestamp;
    }
    if (mentioned) {
      let closure_11 = timestamp;
      if (null != guildId) {
        closure_15[guildId] = timestamp;
      }
    }
    if (roleMentioned) {
      let closure_12 = timestamp;
      if (null != guildId) {
        closure_17[guildId] = timestamp;
      }
    }
    if (everyoneMentioned) {
      let closure_13 = timestamp;
      if (null != guildId) {
        closure_16[guildId] = timestamp;
      }
    }
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/notifications/LastMentionTimestampStore.tsx");

export default tmp2;
export const trackMessageNotificationTimestamps = function trackMessageNotificationTimestamps(mentions, guildId) {
  const currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  const importDefault = id;
  const result = closure_8.isSuppressEveryoneEnabled(guildId);
  let someResult = null != mentions.mentions;
  const result1 = closure_8.isSuppressRolesEnabled(guildId);
  if (someResult) {
    mentions = mentions.mentions;
    someResult = mentions.some((id) => id.id === id);
  }
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != id) {
      member = member.getMember(guildId, id);
    }
  }
  const dependencyMap = member;
  let someResult1 = null != mentions.mention_roles && null != member && null != member.roles;
  if (someResult1) {
    const mention_roles = mentions.mention_roles;
    someResult1 = mention_roles.some((arg0) => {
      const roles = member.roles;
      return roles.includes(arg0);
    });
  }
  let obj = importDefault(dependencyMap[8]);
  obj = { type: "MESSAGE_NOTIFICATION_SHOWN", guildId, mentioned: someResult };
  if (someResult1) {
    someResult1 = !result1;
  }
  obj.roleMentioned = someResult1;
  obj.everyoneMentioned = true === mentions.mention_everyone && !result;
  obj.dispatch(obj);
};
