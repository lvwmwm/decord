// Module ID: 12672
// Function ID: 98682
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 6902, 4217, 1849, 653, 12673, 566, 686, 2]

// Module 12672 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { ActivityTypes } from "ME";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleMultipleUpdates(presences) {
  let c0 = false;
  const item = presences.forEach((arg0) => {
    c0 = false !== outer1_17(arg0) || c0;
  });
  return c0;
}
function removeUserIfNeeded(id) {
  if (null == obj[id]) {
    return false;
  } else {
    const gameId = tmp4.gameId;
    if (null != obj[gameId]) {
      obj = {};
      const merged = Object.assign(obj);
      delete tmp[tmp2];
      const _Object = Object;
      if (0 === Object.values(obj[gameId]).length) {
        delete tmp[tmp3];
      }
    }
    obj = {};
    const merged1 = Object.assign(obj);
    delete tmp[tmp2];
    return true;
  }
}
function _handlePresenceUpdate(user) {
  user = user.user;
  const activities = user.activities;
  let c1;
  if (null == user) {
    return false;
  } else {
    const found = activities.filter((type) => type.type !== outer1_10.CUSTOM_STATUS);
    if (0 === found.length) {
      return removeUserIfNeeded(user.id);
    } else {
      c1 = false;
      const item = found.forEach((timestamps) => {
        if ((function _handleActivityUpdate(timestamps, user) {
          const tmp = user(_true[9])(timestamps);
          if (null == tmp) {
            return outer2_16(user.id);
          } else {
            if (tmp2) {
              outer2_16(user.id);
            }
            timestamps = timestamps.timestamps;
            let start;
            if (null != timestamps) {
              start = timestamps.start;
            }
            if (null == start) {
              const _Date = Date;
              start = Date.now();
            }
            let obj = { userId: user.id, activity: timestamps, startedPlaying: start };
            obj = {};
            const merged = Object.assign(outer2_12);
            obj = {};
            const merged1 = Object.assign(outer2_12[tmp]);
            obj[obj.userId] = obj;
            obj[tmp] = obj;
            outer2_12 = obj;
            const obj1 = {};
            const merged2 = Object.assign(outer2_13);
            const obj2 = { gameId: tmp, startedPlaying: obj.startedPlaying };
            obj1[obj.userId] = obj2;
            outer2_13 = obj1;
            return true;
          }
        })(timestamps, user)) {
          let c1 = true;
        }
      });
      return c1;
    }
  }
}
function handleUserAffinitiesV2StoreUpdate() {
  let flag = false;
  if (!tmp) {
    flag = (function refreshStateFromPresence() {
      const outer1_12 = {};
      const outer1_13 = {};
      let c0 = false;
      const userIds = outer1_8.getUserIds();
      const item = userIds.forEach((arg0) => {
        const user = outer2_9.getUser(arg0);
        if (null != user) {
          const obj = { user, activities: outer2_8.getActivities(arg0) };
          c0 = outer2_17(obj) || c0;
          const tmp4 = outer2_17(obj) || c0;
        }
      });
      return c0;
    })();
  }
  let closure_11 = !closure_7.shouldFetch();
  return flag;
}
let c11 = false;
let closure_12 = {};
let closure_13 = {};
let tmp2 = ((Store) => {
  class NowPlayingStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, NowPlayingStore);
      obj = outer1_5(NowPlayingStore);
      tmp2 = outer1_4;
      if (outer1_14()) {
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
  callback2(NowPlayingStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_7, outer1_9);
      const items = [outer1_7];
      this.syncWith(items, outer1_18);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "games",
    get() {
      return outer1_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "usersPlaying",
    get() {
      return outer1_13;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "gameIds",
    get() {
      return Object.keys(outer1_12);
    }
  };
  items[4] = {
    key: "getNowPlaying",
    value(arg0) {
      return outer1_12[arg0];
    }
  };
  items[5] = {
    key: "getUserGame",
    value(arg0) {
      return outer1_13[arg0];
    }
  };
  return callback(NowPlayingStore, items);
})(require("initialize").Store);
tmp2.displayName = "NowPlayingStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_12 = {};
    let closure_13 = {};
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(guilds) {
    guilds = guilds.guilds;
    let c0 = false;
    const item = guilds.forEach((presences) => {
      if (outer1_15(presences.presences)) {
        let c0 = true;
      }
    });
    if (handleMultipleUpdates(guilds.presences)) {
      c0 = true;
    }
    return c0;
  },
  LOGOUT: function handleLogout() {
    let closure_12 = {};
    let closure_13 = {};
  },
  PRESENCE_UPDATES: function handlePresenceUpdates(updates) {
    updates = updates.updates;
    const mapped = updates.map((arg0) => outer1_17(arg0));
    return mapped.some((arg0) => arg0);
  },
  PRESENCES_REPLACE: function handlePresencesReplace(presences) {
    return handleMultipleUpdates(presences.presences);
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/NowPlayingStore.tsx");

export default tmp2;
