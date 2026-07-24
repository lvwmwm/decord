// Module ID: 15186
// Function ID: 115622
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 6879, 664, 6882, 21, 566, 686, 2]

// Module 15186 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import closure_9 from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleLoadFinished() {
  obj.hasNewMentions = false;
  obj.isDataStale = false;
  obj.isRefreshing = false;
}
let closure_10 = 90 * require("set").Millis.DAY;
let obj = { tab: null, localItemAcks: {}, hasNewMentions: false, isDataStale: false, isRefreshing: false };
let tmp2 = ((PersistedStore) => {
  class NotificationCenterStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, NotificationCenterStore);
      obj = outer1_6(NotificationCenterStore);
      tmp2 = outer1_5;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(NotificationCenterStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(localItemAcks) {
      this.waitFor(outer1_9);
      if (null != localItemAcks) {
        const outer1_11 = localItemAcks;
        localItemAcks = localItemAcks.localItemAcks;
        if (null == localItemAcks) {
          localItemAcks = {};
        }
        const obj = {};
        const _Object = Object;
        const entries = Object.entries(localItemAcks);
        for (let num4 = 0; num4 < entries.length; num4 = num4 + 1) {
          let tmp3 = outer1_8;
          let tmp4 = outer1_8(entries[num4], 2);
          let tmp5 = tmp4[1];
          let _Date = Date;
          let tmp6 = outer1_10;
          if (Date.now() - tmp5 < outer1_10) {
            obj[tmp4[0]] = tmp5;
          }
        }
        localItemAcks.localItemAcks = obj;
        outer1_11.isDataStale = true;
      }
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "getTab",
    value() {
      let ForYou = outer1_11.tab;
      if (null == ForYou) {
        ForYou = NotificationCenterStore(outer1_2[8]).NotificationCenterTabs.ForYou;
      }
      return ForYou;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isLocalItemAcked",
    value(local_id) {
      let tmp = null != local_id.local_id;
      if (tmp) {
        let tmp3 = null != outer1_11.localItemAcks[local_id.local_id];
        if (!tmp3) {
          tmp3 = outer1_1(outer1_2[9]).age(local_id.id) > outer1_10;
          const obj = outer1_1(outer1_2[9]);
        }
        tmp = tmp3;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "hasNewMentions",
    value() {
      return outer1_11.hasNewMentions;
    }
  };
  items[5] = {
    key: "isDataStale",
    value() {
      return outer1_11.isDataStale;
    }
  };
  items[6] = {
    key: "isRefreshing",
    value() {
      return outer1_11.isRefreshing;
    }
  };
  items[7] = {
    key: "shouldReload",
    value() {
      let isRefreshing = outer1_11.hasNewMentions;
      if (!isRefreshing) {
        isRefreshing = outer1_11.isDataStale;
      }
      if (!isRefreshing) {
        isRefreshing = outer1_11.isRefreshing;
      }
      return isRefreshing;
    }
  };
  return callback(NotificationCenterStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "NotificationCenterStore";
tmp2.persistKey = "NotificationCenterStore";
obj = {
  MESSAGE_CREATE: function handleMessageCreate(message) {
    if (closure_9.hasMention(message.message.id)) {
      obj.hasNewMentions = true;
    }
  },
  NOTIFICATION_CENTER_SET_TAB: function handleSetTab(tab) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["tab"] = tab.tab;
  },
  NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function handleAck(localIds) {
    localIds = localIds.localIds;
    const item = localIds.forEach((arg0) => {
      let obj = {};
      const merged = Object.assign(outer1_11);
      obj = {};
      const merged1 = Object.assign(outer1_11.localItemAcks);
      obj[arg0] = Date.now();
      obj["localItemAcks"] = obj;
      outer1_11 = obj;
    });
  },
  NOTIFICATION_CENTER_REFRESH: function handleRefreshData() {
    obj.isRefreshing = true;
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: handleLoadFinished,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: handleLoadFinished
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/notification_center/NotificationCenterStore.tsx");

export default tmp2;
