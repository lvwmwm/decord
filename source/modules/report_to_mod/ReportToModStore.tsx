// Module ID: 9531
// Function ID: 74202
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3947, 566, 686, 2]

// Module 9531 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
function handleSelectedGuildChange() {
  lastSelectedGuildId = lastSelectedGuildId.getLastSelectedGuildId();
  if (lastSelectedGuildId !== c6) {
    let tmp2 = null;
    let c7 = null;
    if (null != lastSelectedGuildId) {
      tmp2 = lastSelectedGuildId;
    }
    c6 = tmp2;
  }
}
let c6 = null;
let c7 = null;
let closure_8 = { reportedMessages: {} };
let tmp2 = ((PersistedStore) => {
  class ReportToModStore {
    constructor() {
      self = this;
      tmp = ReportToModStore(this, ReportToModStore);
      obj = outer1_3(ReportToModStore);
      tmp2 = outer1_2;
      if (outer1_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ReportToModStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(reportedMessages) {
      const self = this;
      if (null != reportedMessages) {
        const _Object = Object;
        const _Object2 = Object;
        const entries = Object.entries(reportedMessages.reportedMessages);
        outer1_8.reportedMessages = Object.fromEntries(entries.map((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          const items = [tmp, new Set(tmp2)];
          return items;
        }));
      }
      let items = [outer1_5];
      self.syncWith(items, outer1_10);
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "isUserBanned",
    value(arg0) {
      let value;
      if (null != outer1_7) {
        value = outer1_7.get(arg0);
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
      return outer1_8.reportedMessages;
    }
  };
  items[4] = {
    key: "hasReportedMessage",
    value(arg0, arg1) {
      let hasItem;
      if (null != outer1_8.reportedMessages[arg0]) {
        hasItem = obj.has(arg1);
      }
      return null != hasItem && hasItem;
    }
  };
  return callback(ReportToModStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "ReportToModStore";
tmp2.persistKey = "ReportToModStore";
let items = [
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
tmp2 = new tmp2(require("dispatcher"), {
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
    let tmp = guildId.guildId === c6;
    if (tmp) {
      tmp = null != _null;
    }
    if (tmp) {
      const result = _null.set(guildId.user.id, true);
    }
  },
  GUILD_BAN_REMOVE: function handleGuildBanRemove(guildId) {
    let tmp = guildId.guildId === c6;
    if (tmp) {
      tmp = null != _null;
    }
    if (tmp) {
      const result = _null.set(guildId.user.id, false);
    }
  },
  GUILD_SETTINGS_LOADED_BANS_BATCH: function handleGuildBansLoaded(guildId) {
    let bans;
    let userIds;
    ({ bans, userIds } = guildId);
    let set;
    if (guildId.guildId === c6) {
      const _Set = Set;
      set = new Set(bans.map((user) => {
        user = user.user;
        let id;
        if (null != user) {
          id = user.id;
        }
        return id;
      }));
      let _Set2 = Set;
      if (null == userIds) {
        userIds = [];
      }
      const prototype = _Set2.prototype;
      _Set2 = new _Set2(userIds);
      const found = Array.from(_Set2).filter((arg0) => !set.has(arg0));
      if (null == map) {
        const _Map = Map;
        map = new Map();
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
    let c6 = null;
    let c7 = null;
    closure_8.reportedMessages = {};
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/report_to_mod/ReportToModStore.tsx");

export default tmp2;
