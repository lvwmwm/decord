// Module ID: 12544
// Function ID: 96453
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12544 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleMultipleUpdates(presences) {
  let closure_0 = false;
  const item = presences.forEach((arg0) => {
    closure_0 = false !== callback(arg0) || closure_0;
  });
  return closure_0;
}
function removeUserIfNeeded(id) {
  if (null == closure_13[id]) {
    return false;
  } else {
    const gameId = tmp.gameId;
    if (null != closure_12[gameId]) {
      let obj = {};
      const merged = Object.assign(closure_12);
      closure_12 = obj;
      delete r0[r1];
      const _Object = Object;
      if (0 === Object.values(closure_12[gameId]).length) {
        delete r0[r3];
      }
    }
    obj = {};
    const merged1 = Object.assign(closure_13);
    closure_13 = obj;
    delete r0[r1];
    return true;
  }
}
function _handlePresenceUpdate(user) {
  user = user.user;
  const importDefault = user;
  const activities = user.activities;
  let closure_1;
  if (null == user) {
    return false;
  } else {
    const found = activities.filter((type) => type.type !== constants.CUSTOM_STATUS);
    if (0 === found.length) {
      return removeUserIfNeeded(user.id);
    } else {
      closure_1 = false;
      const item = found.forEach((timestamps) => {
        if (function _handleActivityUpdate(timestamps, user) {
          const tmp = callback(closure_1[9])(timestamps);
          if (null == tmp) {
            return callback2(user.id);
          } else {
            if (tmp2) {
              callback2(user.id);
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
            const merged = Object.assign(obj);
            obj = {};
            const merged1 = Object.assign(obj[tmp]);
            obj[obj.userId] = obj;
            obj[tmp] = obj;
            const obj1 = {};
            const merged2 = Object.assign(obj1);
            const obj2 = { gameId: tmp, startedPlaying: obj.startedPlaying };
            obj1[obj.userId] = obj2;
            return true;
          }
        }(timestamps, user)) {
          let closure_1 = true;
        }
      });
      return closure_1;
    }
  }
}
function handleUserAffinitiesV2StoreUpdate() {
  let flag = false;
  if (!tmp) {
    flag = function refreshStateFromPresence() {
      let closure_12 = {};
      let closure_13 = {};
      let closure_0 = false;
      const userIds = userIds.getUserIds();
      const item = userIds.forEach((arg0) => {
        const user = user.getUser(arg0);
        if (null != user) {
          const obj = { user, activities: activities.getActivities(arg0) };
          closure_0 = callback(obj) || closure_0;
          const tmp4 = callback(obj) || closure_0;
        }
      });
      return closure_0;
    }();
  }
  let closure_11 = !closure_7.shouldFetch();
  return flag;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
const ActivityTypes = arg1(dependencyMap[8]).ActivityTypes;
let closure_11 = false;
let closure_12 = {};
let closure_13 = {};
let tmp2 = (Store) => {
  class NowPlayingStore {
    constructor() {
      self = this;
      tmp = closure_2(this, NowPlayingStore);
      obj = closure_5(NowPlayingStore);
      tmp2 = closure_4;
      if (closure_14()) {
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
  const importDefault = NowPlayingStore;
  callback2(NowPlayingStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_7, closure_9);
      const items = [closure_7];
      this.syncWith(items, closure_18);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "games",
    get() {
      return closure_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "usersPlaying",
    get() {
      return closure_13;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "gameIds",
    get() {
      return Object.keys(closure_12);
    }
  };
  items[4] = {
    key: "getNowPlaying",
    value(arg0) {
      return closure_12[arg0];
    }
  };
  items[5] = {
    key: "getUserGame",
    value(arg0) {
      return closure_13[arg0];
    }
  };
  return callback(NowPlayingStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp2.displayName = "NowPlayingStore";
tmp2 = new tmp2(importDefault(dependencyMap[11]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_12 = {};
    let closure_13 = {};
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(guilds) {
    guilds = guilds.guilds;
    let closure_0 = false;
    const item = guilds.forEach((presences) => {
      if (callback(presences.presences)) {
        let closure_0 = true;
      }
    });
    if (handleMultipleUpdates(guilds.presences)) {
      closure_0 = true;
    }
    return closure_0;
  },
  LOGOUT: function handleLogout() {
    let closure_12 = {};
    let closure_13 = {};
  },
  PRESENCE_UPDATES: function handlePresenceUpdates(updates) {
    updates = updates.updates;
    const mapped = updates.map((arg0) => callback(arg0));
    return mapped.some((arg0) => arg0);
  },
  PRESENCES_REPLACE: function handlePresencesReplace(presences) {
    return handleMultipleUpdates(presences.presences);
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("stores/NowPlayingStore.tsx");

export default tmp2;
