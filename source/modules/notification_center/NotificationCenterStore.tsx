// Module ID: 15006
// Function ID: 113030
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15006 (_isNativeReflectConstruct)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = 90 * importDefault(dependencyMap[7]).Millis.DAY;
let obj = { presenceCount: 0.00000000000000000000000000000000000000000000000000032876091724029187, zIndex: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000061520605953252, getCategoryFromSection: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001415738928680176, renderSettingSearchResultItem: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000073088767196, PREMIUM_TIER_2_PLANS: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000026116825458820042, localItemAcks: {} };
let tmp2 = (PersistedStore) => {
  class NotificationCenterStore {
    constructor() {
      self = this;
      tmp = closure_3(this, NotificationCenterStore);
      obj = closure_6(NotificationCenterStore);
      tmp2 = closure_5;
      if (closure_12()) {
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
  const arg1 = NotificationCenterStore;
  callback2(NotificationCenterStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(localItemAcks) {
      this.waitFor(closure_9);
      if (null != localItemAcks) {
        localItemAcks = localItemAcks.localItemAcks;
        if (null == localItemAcks) {
          localItemAcks = {};
        }
        const obj = {};
        const _Object = Object;
        const entries = Object.entries(localItemAcks);
        for (let num4 = 0; num4 < entries.length; num4 = num4 + 1) {
          let tmp3 = callback4;
          let tmp4 = callback4(entries[num4], 2);
          let tmp5 = tmp4[1];
          let _Date = Date;
          let tmp6 = closure_10;
          if (Date.now() - tmp5 < closure_10) {
            obj[tmp4[0]] = tmp5;
          }
        }
        localItemAcks.localItemAcks = obj;
        localItemAcks.isDataStale = true;
      }
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "getTab",
    value() {
      let ForYou = closure_11.tab;
      if (null == ForYou) {
        ForYou = NotificationCenterStore(closure_2[8]).NotificationCenterTabs.ForYou;
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
        let tmp3 = null != closure_11.localItemAcks[local_id.local_id];
        if (!tmp3) {
          tmp3 = callback(closure_2[9]).age(local_id.id) > closure_10;
          const obj = callback(closure_2[9]);
        }
        tmp = tmp3;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "hasNewMentions",
    value() {
      return closure_11.hasNewMentions;
    }
  };
  items[5] = {
    key: "isDataStale",
    value() {
      return closure_11.isDataStale;
    }
  };
  items[6] = {
    key: "isRefreshing",
    value() {
      return closure_11.isRefreshing;
    }
  };
  items[7] = {
    key: "shouldReload",
    value() {
      let isRefreshing = closure_11.hasNewMentions;
      if (!isRefreshing) {
        isRefreshing = closure_11.isDataStale;
      }
      if (!isRefreshing) {
        isRefreshing = closure_11.isRefreshing;
      }
      return isRefreshing;
    }
  };
  return callback(NotificationCenterStore, items);
}(importDefault(dependencyMap[10]).PersistedStore);
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
      const merged = Object.assign(obj);
      obj = {};
      const merged1 = Object.assign(obj.localItemAcks);
      obj[arg0] = Date.now();
      obj["localItemAcks"] = obj;
    });
  },
  NOTIFICATION_CENTER_REFRESH: function handleRefreshData() {
    obj.isRefreshing = true;
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: handleLoadFinished,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: handleLoadFinished
};
tmp2 = new tmp2(importDefault(dependencyMap[11]), obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/notification_center/NotificationCenterStore.tsx");

export default tmp2;
