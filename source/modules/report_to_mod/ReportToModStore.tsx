// Module ID: 9524
// Function ID: 74161
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9524 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleSelectedGuildChange() {
  const lastSelectedGuildId = lastSelectedGuildId.getLastSelectedGuildId();
  if (lastSelectedGuildId !== closure_6) {
    let tmp2 = null;
    let closure_7 = null;
    if (null != lastSelectedGuildId) {
      tmp2 = lastSelectedGuildId;
    }
    closure_6 = tmp2;
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = null;
let closure_7 = null;
let closure_8 = { reportedMessages: {} };
let tmp2 = (PersistedStore) => {
  class ReportToModStore {
    constructor() {
      self = this;
      tmp = ReportToModStore(this, ReportToModStore);
      obj = closure_3(ReportToModStore);
      tmp2 = closure_2;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = ReportToModStore;
  callback2(ReportToModStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(reportedMessages) {
      const self = this;
      if (null != reportedMessages) {
        const _Object = Object;
        const _Object2 = Object;
        const entries = Object.entries(reportedMessages.reportedMessages);
        closure_8.reportedMessages = Object.fromEntries(entries.map((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          const items = [tmp, new Set(tmp2)];
          return items;
        }));
      }
      const items = [closure_5];
      self.syncWith(items, closure_10);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "isUserBanned",
    value(arg0) {
      let value;
      if (null != closure_7) {
        value = closure_7.get(arg0);
      }
      let tmp3 = null;
      if (null != value) {
        tmp3 = value;
      }
      return tmp3;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getReportedMessages",
    value() {
      return closure_8.reportedMessages;
    }
  };
  items[4] = {
    key: "hasReportedMessage",
    value(arg0, arg1) {
      let hasItem;
      if (null != closure_8.reportedMessages[arg0]) {
        hasItem = obj.has(arg1);
      }
      return null != hasItem && hasItem;
    }
  };
  return callback(ReportToModStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp2.displayName = "ReportToModStore";
tmp2.persistKey = "ReportToModStore";
const items = [
  (reportedMessages) => {
    const obj = {};
    reportedMessages = undefined;
    if (null != reportedMessages) {
      reportedMessages = reportedMessages.reportedMessages;
    }
    if (null == reportedMessages) {
      reportedMessages = {};
    }
    obj.reportedMessages = reportedMessages;
    return obj;
  }
];
tmp2.migrations = items;
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS: function handleMessageReportSuccess(channelId) {
    channelId = channelId.channelId;
    if (null == closure_8.reportedMessages[channelId]) {
      const _Set = Set;
      const set = new Set();
      closure_8.reportedMessages[channelId] = set;
    }
    closure_8.reportedMessages[channelId].add(channelId.messageId);
  },
  GUILD_BAN_ADD: function handleGuildBanAdd(guildId) {
    let tmp = guildId.guildId === closure_6;
    if (tmp) {
      tmp = null != store;
    }
    if (tmp) {
      const result = store.set(guildId.user.id, true);
    }
  },
  GUILD_BAN_REMOVE: function handleGuildBanRemove(guildId) {
    let tmp = guildId.guildId === closure_6;
    if (tmp) {
      tmp = null != store;
    }
    if (tmp) {
      const result = store.set(guildId.user.id, false);
    }
  },
  GUILD_SETTINGS_LOADED_BANS_BATCH: function handleGuildBansLoaded(guildId) {
    let bans;
    let userIds;
    ({ bans, userIds } = guildId);
    let closure_0;
    if (guildId.guildId === closure_6) {
      const _Set = Set;
      const set = new Set(bans.map((user) => {
        user = user.user;
        let id;
        if (null != user) {
          id = user.id;
        }
        return id;
      }));
      closure_0 = set;
      let _Set2 = Set;
      if (null == userIds) {
        userIds = [];
      }
      const prototype = _Set2.prototype;
      _Set2 = new _Set2(userIds);
      const found = Array.from(_Set2).filter((arg0) => !set.has(arg0));
      if (null == closure_7) {
        const _Map = Map;
        const map = new Map();
        closure_7 = map;
      }
      const item = set.forEach((arg0) => {
        if (null != map) {
          const result = map.set(arg0, true);
        }
      });
      const item1 = found.forEach((arg0) => {
        if (null != map) {
          const result = map.set(arg0, false);
        }
      });
      const arr = Array.from(_Set2);
    }
  },
  LOGOUT: function handleLogout() {
    let closure_6 = null;
    let closure_7 = null;
    closure_8.reportedMessages = {};
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/report_to_mod/ReportToModStore.tsx");

export default tmp2;
