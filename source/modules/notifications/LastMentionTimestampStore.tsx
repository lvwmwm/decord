// Module ID: 5074
// Function ID: 44117
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1917, 4325, 1849, 686, 566, 2]
// Exports: trackMessageNotificationTimestamps

// Module 5074 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let c10 = null;
let c11 = null;
let c12 = null;
let c13 = null;
let closure_14 = {};
let closure_15 = {};
let closure_16 = {};
let closure_17 = {};
let tmp2 = ((Store) => {
  class LastMentionTimestampStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, LastMentionTimestampStore);
      obj = outer1_5(LastMentionTimestampStore);
      tmp2 = outer1_4;
      if (outer1_18()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(LastMentionTimestampStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_8, outer1_9);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getGlobalStats",
    value() {
      function age(outer1_10) {
        let rounded = null;
        if (null != outer1_10) {
          const _Math = Math;
          const _Date = Date;
          rounded = Math.floor((Date.now() - outer1_10) / 1000);
        }
        return rounded;
      }
      return { approx_seconds_since_last_notification: age(outer1_10), approx_seconds_since_last_mention: age(outer1_11), approx_seconds_since_last_role_mention: age(outer1_12), approx_seconds_since_last_everyone_mention: age(outer1_13) };
    }
  };
  items[1] = obj;
  obj = {
    key: "getStats",
    value(arg0) {
      function age(outer1_10) {
        let rounded = null;
        if (null != outer1_10) {
          const _Math = Math;
          const _Date = Date;
          rounded = Math.floor((Date.now() - outer1_10) / 1000);
        }
        return rounded;
      }
      const obj = { approx_seconds_since_last_notification: age(outer1_10), approx_seconds_since_last_mention: age(outer1_11), approx_seconds_since_last_role_mention: age(outer1_12), approx_seconds_since_last_everyone_mention: age(outer1_13) };
      let ageResult = null;
      if (null != arg0) {
        ageResult = age(outer1_14[arg0]);
      }
      obj.approx_seconds_since_last_guild_notification = ageResult;
      let ageResult1 = null;
      if (null != arg0) {
        ageResult1 = age(outer1_15[arg0]);
      }
      obj.approx_seconds_since_last_guild_mention = ageResult1;
      let ageResult2 = null;
      if (null != arg0) {
        ageResult2 = age(outer1_17[arg0]);
      }
      obj.approx_seconds_since_last_guild_role_mention = ageResult2;
      let ageResult3 = null;
      if (null != arg0) {
        ageResult3 = age(outer1_16[arg0]);
      }
      obj.approx_seconds_since_last_guild_everyone_mention = ageResult3;
      return obj;
    }
  };
  items[2] = obj;
  return callback(LastMentionTimestampStore, items);
})(require("initialize").Store);
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    function isRecent(c10) {
      let tmp = null != c10;
      if (tmp) {
        const _Date = Date;
        tmp = Date.now() - c10 < 60000;
      }
      return tmp;
    }
    if (!isRecent(c10)) {
      c10 = null;
    }
    if (!isRecent(c11)) {
      c11 = null;
    }
    if (!isRecent(c12)) {
      c12 = null;
    }
    if (!isRecent(c13)) {
      c13 = null;
    }
    for (const key10016 in closure_14) {
      let tmp11 = key10016;
      let tmp12 = table;
      if (isRecent(table[key10016])) {
        continue;
      } else {
        let tmp7 = table;
        delete tmp[tmp2];
        continue;
      }
      continue;
    }
    for (const key10020 in closure_15) {
      let tmp13 = key10020;
      let tmp14 = table2;
      if (isRecent(table2[key10020])) {
        continue;
      } else {
        let tmp8 = table2;
        delete tmp[tmp2];
        continue;
      }
      continue;
    }
    for (const key10024 in closure_17) {
      let tmp15 = key10024;
      let tmp16 = table4;
      if (isRecent(table4[key10024])) {
        continue;
      } else {
        let tmp9 = table4;
        delete tmp[tmp2];
        continue;
      }
      continue;
    }
    for (const key10028 in closure_16) {
      let tmp17 = key10028;
      let tmp18 = table3;
      if (isRecent(table3[key10028])) {
        continue;
      } else {
        let tmp10 = table3;
        delete tmp[tmp2];
        continue;
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
    if (null != guildId) {
      closure_14[guildId] = timestamp;
    }
    if (mentioned) {
      if (null != guildId) {
        closure_15[guildId] = timestamp;
      }
    }
    if (roleMentioned) {
      if (null != guildId) {
        closure_17[guildId] = timestamp;
      }
    }
    if (everyoneMentioned) {
      if (null != guildId) {
        closure_16[guildId] = timestamp;
      }
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/notifications/LastMentionTimestampStore.tsx");

export default tmp2;
export const trackMessageNotificationTimestamps = function trackMessageNotificationTimestamps(mentions, guildId) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
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
  let someResult1 = null != mentions.mention_roles && null != member && null != member.roles;
  if (someResult1) {
    const mention_roles = mentions.mention_roles;
    someResult1 = mention_roles.some((arg0) => {
      const roles = member.roles;
      return roles.includes(arg0);
    });
  }
  let obj = id(member[8]);
  obj = { type: "MESSAGE_NOTIFICATION_SHOWN", guildId, mentioned: someResult };
  if (someResult1) {
    someResult1 = !result1;
  }
  obj.roleMentioned = someResult1;
  obj.everyoneMentioned = true === mentions.mention_everyone && !result;
  obj.dispatch(obj);
};
