// Module ID: 4213
// Function ID: 36669
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4213 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
function getPresence(arg0, arg1) {
  let tmp2 = null;
  if (null != closure_15[arg0]) {
    tmp2 = tmp[arg1];
  }
  return tmp2;
}
function typeScore(type) {
  type = type.type;
  if (constants2.CUSTOM_STATUS === type) {
    return 4;
  } else if (constants2.COMPETING === type) {
    return 3;
  } else if (constants2.STREAMING === type) {
    return 2;
  } else if (constants2.PLAYING === type) {
    return 1;
  } else {
    return 0;
  }
}
function richnessScore(created_at2) {
  let num = 0;
  if (importDefault(dependencyMap[8])(created_at2)) {
    num = 1;
  }
  return num;
}
function sortActivity(created_at, created_at2) {
  let diff = typeScore(created_at2) - typeScore(created_at);
  if (!diff) {
    diff = richnessScore(created_at2) - richnessScore(created_at);
    const tmp4 = richnessScore(created_at2);
  }
  if (!diff) {
    created_at = created_at2.created_at;
    let num = 0;
    if (null != created_at) {
      num = created_at;
    }
    created_at2 = created_at.created_at;
    let num2 = 0;
    if (null != created_at2) {
      num2 = created_at2;
    }
    diff = num - num2;
  }
  return diff;
}
function filterPlayingActivities(arg0) {
  let iter;
  if (0 === arg0.length) {
    return arg0;
  } else {
    const items = [];
    const items1 = [];
    const tmp13 = _createForOfIteratorHelperLoose(arg0);
    let iter2 = tmp13();
    if (!iter2.done) {
      do {
        let value = iter2.value;
        let tmp = closure_10;
        if (value.type === closure_10.PLAYING) {
          let arr = items1.push(value);
        } else {
          arr = items.push(value);
        }
        iter = tmp13();
        iter2 = iter;
      } while (!iter.done);
    }
    if (items1.length <= 1) {
      return arg0;
    } else {
      const items2 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
      const items3 = [];
      arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      items3[arraySpreadResult] = items2.sort(sortActivity)[0];
      const sum = arraySpreadResult + 1;
      return items3.sort(sortActivity);
    }
  }
}
function setActivitiesForUser(id, activities) {
  closure_17[id] = activities;
  closure_18[id] = filterPlayingActivities(activities);
}
function flattenPresence(userId) {
  delete r0[r2];
  delete r0[r2];
  delete r0[r2];
  delete r0[r2];
  delete r0[r2];
  if (null != closure_15[userId]) {
    const _Object3 = Object;
    let values = Object.values(closure_15[userId]);
    const reduced = values.reduce((processedAtTimestamp, processedAtTimestamp2) => {
      processedAtTimestamp = processedAtTimestamp2.processedAtTimestamp;
      processedAtTimestamp2 = processedAtTimestamp.processedAtTimestamp;
      let num = 0;
      if (null != processedAtTimestamp2.activities) {
        num = processedAtTimestamp2.activities.length;
      }
      let num2 = 0;
      if (null != processedAtTimestamp.activities) {
        num2 = processedAtTimestamp.activities.length;
      }
      if (processedAtTimestamp > processedAtTimestamp2) {
        let tmp = processedAtTimestamp2;
      } else {
        tmp = processedAtTimestamp;
        if (processedAtTimestamp === processedAtTimestamp2) {
          tmp = processedAtTimestamp;
        }
      }
      return tmp;
    }, values[0]);
    if (reduced.status === constants.OFFLINE) {
      if (obj.every(closure_15[userId], (status) => {
        let tmp = status.status === constants.OFFLINE;
        if (tmp) {
          let tmp3 = null == status.hiddenActivities;
          if (!tmp3) {
            tmp3 = 0 === status.hiddenActivities.length;
          }
          tmp = tmp3;
        }
        return tmp;
      })) {
        delete r5[r2];
      } else if (values.some((hiddenActivities) => {
        let tmp = null != hiddenActivities.hiddenActivities;
        if (tmp) {
          tmp = hiddenActivities.hiddenActivities.length > 0;
        }
        return tmp;
      })) {
        const _Object = Object;
        values = Object.values(values);
        closure_19[userId] = dedupeHiddenActivities(values.flatMap((hiddenActivities) => {
          hiddenActivities = hiddenActivities.hiddenActivities;
          if (null == hiddenActivities) {
            hiddenActivities = [];
          }
          return hiddenActivities;
        }));
      }
      const obj = importDefault(dependencyMap[9]);
    }
    closure_16[userId] = reduced.status;
    setActivitiesForUser(userId, reduced.activities);
    const _Object2 = Object;
    const values1 = Object.values(values);
    closure_19[userId] = dedupeHiddenActivities(values1.flatMap((hiddenActivities) => {
      hiddenActivities = hiddenActivities.hiddenActivities;
      if (null == hiddenActivities) {
        hiddenActivities = [];
      }
      return hiddenActivities;
    }));
    if (null != reduced.clientStatus) {
      closure_20[userId] = reduced.clientStatus;
    }
  }
}
function dedupeHiddenActivities(values) {
  if (0 === values.length) {
    return values;
  } else {
    const items = [];
    HermesBuiltin.arraySpread(values, 0);
    const reversed = items.reverse();
    const _Map = Map;
    const map = new Map(reversed.map((party) => {
      party = party.party;
      let id;
      if (null != party) {
        id = party.id;
      }
      const items = ["" + party.application_id + ":" + id, party];
      return items;
    }));
    const items1 = [];
    HermesBuiltin.arraySpread(map.values(), 0);
    return items1;
  }
}
function flattenPresenceInConnectionOpen(id) {
  if (null != closure_15[id]) {
    const _Object = Object;
    const maxByResult = importDefault(dependencyMap[9]).maxBy(Object.values(tmp), (processedAtTimestamp) => processedAtTimestamp.processedAtTimestamp);
    if (maxByResult.status !== constants.OFFLINE) {
      closure_16[id] = maxByResult.status;
      setActivitiesForUser(id, maxByResult.activities);
      let hiddenActivities = maxByResult.hiddenActivities;
      if (null == hiddenActivities) {
        hiddenActivities = [];
      }
      closure_19[id] = hiddenActivities;
      if (null != maxByResult.clientStatus) {
        closure_20[id] = maxByResult.clientStatus;
      }
      const tmp5 = closure_19;
    }
    const obj = importDefault(dependencyMap[9]);
  }
}
function updatePresence(arg0) {
  let activities;
  let clientStatus;
  let guildId;
  let hiddenActivities;
  let processedAtTimestamp;
  let status;
  let userId;
  ({ guildId, userId, status, clientStatus, activities, hiddenActivities, processedAtTimestamp } = arg0);
  if (userId === store.getId()) {
    return false;
  } else {
    let tmp3 = status === constants.OFFLINE;
    if (tmp3) {
      let tmp2 = null == hiddenActivities;
      if (!tmp2) {
        tmp2 = 0 === hiddenActivities.length;
      }
      tmp3 = tmp2;
    }
    let tmp5 = closure_15[userId];
    if (null == tmp5) {
      if (tmp3) {
        return false;
      } else {
        let obj = {};
        closure_15[userId] = obj;
        tmp5 = obj;
      }
    }
    if (tmp3) {
      obj = { status, clientStatus, activities: closure_14, hiddenActivities: closure_14, processedAtTimestamp };
      tmp5[guildId] = obj;
    } else {
      let sorted = activities;
      if (activities.length > 1) {
        const items = [];
        HermesBuiltin.arraySpread(activities, 0);
        sorted = items.sort(sortActivity);
      }
      if (null == hiddenActivities) {
        hiddenActivities = [];
      }
      let activities2 = sorted;
      if (null != tmp5[guildId]) {
        activities2 = sorted;
        if (importDefault(dependencyMap[10])(tmp15.activities, sorted)) {
          activities2 = tmp15.activities;
        }
      }
      obj = { status, clientStatus, activities: activities2, hiddenActivities: dedupeHiddenActivities(hiddenActivities), processedAtTimestamp };
      tmp5[guildId] = obj;
      const tmp13 = dedupeHiddenActivities;
      const tmp13Result = dedupeHiddenActivities(hiddenActivities);
    }
    delete r1[r2];
    flattenPresence(userId);
    return true;
  }
}
function updatePresenceInConnectionOpen(arg0) {
  let activities;
  let clientStatus;
  let guildId;
  let hiddenActivities;
  let processedAtTimestamp;
  let status;
  let userId;
  ({ guildId, userId, status, clientStatus, activities, hiddenActivities, processedAtTimestamp } = arg0);
  if (userId !== store.getId()) {
    let tmp3 = status === constants.OFFLINE;
    if (tmp3) {
      let tmp2 = null == hiddenActivities;
      if (!tmp2) {
        tmp2 = 0 === hiddenActivities.length;
      }
      tmp3 = tmp2;
    }
    let tmp5 = closure_15[userId];
    if (null == tmp5) {
      if (!tmp3) {
        let obj = {};
        closure_15[userId] = obj;
        tmp5 = obj;
      }
    }
    if (tmp3) {
      obj = { status, clientStatus, activities: closure_14, hiddenActivities: closure_14, processedAtTimestamp };
      tmp5[guildId] = obj;
    } else {
      let sorted = activities;
      if (activities.length > 1) {
        const items = [];
        HermesBuiltin.arraySpread(activities, 0);
        sorted = items.sort(sortActivity);
      }
      if (null == hiddenActivities) {
        hiddenActivities = [];
      }
      obj = { status, clientStatus, activities: sorted, hiddenActivities: dedupeHiddenActivities(hiddenActivities), processedAtTimestamp };
      tmp5[guildId] = obj;
      const tmp13 = dedupeHiddenActivities;
    }
  }
}
function clearPresence(guildId, id) {
  if (id === store.getId()) {
    return false;
  } else {
    if (null != closure_15[id]) {
      if (null != tmp2[guildId]) {
        delete r4[r1];
        const _Object = Object;
        if (0 === Object.keys(tmp2).length) {
          delete r1[r2];
        }
        flattenPresence(id);
      }
    }
    return false;
  }
}
function clearPresences(closure_12) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(importDefault(dependencyMap[11]).keys(closure_15));
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = closure_36;
      let tmp3 = closure_36(closure_12, iter.value);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
({ StatusTypes: closure_9, ActivityTypes: closure_10, ClientTypes: closure_11, ME: closure_12, UserFlags: closure_13 } = arg1(dependencyMap[7]));
let closure_14 = Object.freeze([]);
let closure_15 = {};
let closure_16 = {};
let closure_17 = {};
let closure_18 = {};
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
let tmp3 = (Store) => {
  class PresenceStore {
    constructor() {
      self = this;
      tmp = closure_2(this, PresenceStore);
      obj = closure_5(PresenceStore);
      tmp2 = closure_4;
      if (closure_22()) {
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
  const importDefault = PresenceStore;
  callback2(PresenceStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7, closure_8);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "setCurrentUserOnConnectionOpen",
    value(arg0, arg1) {
      closure_16[store.getId()] = arg0;
      const items = [];
      const id = store.getId();
      HermesBuiltin.arraySpread(arg1, 0);
      callback7(id, items.sort(closure_28));
    }
  };
  items[1] = obj;
  obj = {
    key: "getStatus",
    value(arg0) {
      let tmp = arg1;
      let UNKNOWN = arg2;
      if (arg1 === undefined) {
        tmp = null;
      }
      if (UNKNOWN === undefined) {
        UNKNOWN = constants.OFFLINE;
      }
      const user = user.getUser(arg0);
      let hasFlagResult = null != user;
      if (hasFlagResult) {
        hasFlagResult = user.hasFlag(constants2.BOT_HTTP_INTERACTIONS);
      }
      if (hasFlagResult) {
        UNKNOWN = constants.UNKNOWN;
      }
      if (null == tmp) {
        if (null != closure_16[arg0]) {
          UNKNOWN = tmp11;
        }
        return UNKNOWN;
      } else {
        const tmp7 = callback5(arg0, tmp);
        let status;
        if (null != tmp7) {
          status = tmp7.status;
        }
        let tmp9 = UNKNOWN;
        if (null != status) {
          tmp9 = status;
        }
        return tmp9;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getActivities",
    value(arg0) {
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = null;
      }
      if (null == tmp) {
        let tmp7 = closure_18[arg0];
        if (null == tmp7) {
          tmp7 = closure_14;
        }
        return tmp7;
      } else {
        const tmp3 = callback5(arg0, tmp);
        if (null != tmp3) {
          if (null != tmp3.activities) {
            let tmp5 = callback6(tmp3.activities);
          }
          return tmp5;
        }
        tmp5 = closure_14;
      }
    }
  };
  items[4] = {
    key: "getUnfilteredActivities",
    value(arg0) {
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = null;
      }
      if (null == tmp) {
        let tmp5 = closure_17[arg0];
        if (null == tmp5) {
          tmp5 = closure_14;
        }
        return tmp5;
      } else {
        const tmp3 = callback5(arg0, tmp);
        if (null != tmp3) {
          if (null != tmp3.activities) {
            let activities = tmp3.activities;
          }
          return activities;
        }
        activities = closure_14;
      }
    }
  };
  items[5] = {
    key: "getHiddenActivities",
    value(arg0) {
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = null;
      }
      if (null == tmp) {
        let tmp6 = closure_19[arg0];
        if (null == tmp6) {
          tmp6 = closure_14;
        }
        let hiddenActivities = tmp6;
      } else {
        const tmp3 = callback5(arg0, tmp);
        hiddenActivities = undefined;
        if (null != tmp3) {
          hiddenActivities = tmp3.hiddenActivities;
        }
        if (null == hiddenActivities) {
          hiddenActivities = closure_14;
        }
      }
      return hiddenActivities;
    }
  };
  items[6] = {
    key: "getPrimaryActivity",
    value(arg0) {
      let tmp = arg1;
      const self = this;
      if (arg1 === undefined) {
        tmp = null;
      }
      const activities = self.getActivities(arg0, tmp);
      return activities.filter((type) => type.type !== constants.HANG_STATUS)[0];
    }
  };
  items[7] = {
    key: "getAllApplicationActivities",
    value(arg0) {
      let iter5;
      const items = [];
      let obj = PresenceStore(closure_1[11]);
      const tmp = callback4(obj.keys(closure_18));
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp2 = closure_23;
          let tmp3 = closure_18;
          let tmp4 = closure_23(closure_18[value]);
          let iter3 = tmp4();
          if (!iter3.done) {
            do {
              value = iter3.value;
              if (value.application_id === arg0) {
                obj = { userId: value, activity: value };
                let arr = items.push(obj);
              }
              let iter4 = tmp4();
              iter3 = iter4;
              let tmp6 = value;
            } while (!iter4.done);
          }
          iter5 = tmp();
          iter2 = iter5;
        } while (!iter5.done);
      }
      return items;
    }
  };
  items[8] = {
    key: "getApplicationActivity",
    value(arg0, arg1) {
      let tmp = arg2;
      const self = this;
      const PresenceStore = arg1;
      if (arg2 === undefined) {
        tmp = null;
      }
      return self.findActivity(arg0, (application_id) => application_id.application_id === arg1, tmp, true);
    }
  };
  items[9] = {
    key: "findActivity",
    value(arg0, arg1) {
      let tmp = arg2;
      let flag = arg3;
      const self = this;
      if (arg2 === undefined) {
        tmp = null;
      }
      if (flag === undefined) {
        flag = false;
      }
      const activities = self.getActivities(arg0, tmp);
      let combined = activities;
      if (tmp2) {
        combined = activities.concat(self.getHiddenActivities(arg0, tmp));
      }
      return combined.find(arg1);
    }
  };
  items[10] = {
    key: "getActivityMetadata",
    value(arg0) {
      return closure_21[arg0];
    }
  };
  items[11] = {
    key: "getUserIds",
    value() {
      return PresenceStore(closure_1[11]).keys(closure_17);
    }
  };
  items[12] = {
    key: "isMobileOnline",
    value(arg0) {
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = tmp[closure_11.MOBILE] === constants.ONLINE;
      }
      if (tmp2) {
        tmp2 = tmp[closure_11.DESKTOP] !== constants.ONLINE;
      }
      if (tmp2) {
        tmp2 = tmp[closure_11.VR] !== constants.ONLINE;
      }
      return tmp2;
    }
  };
  items[13] = {
    key: "isVROnline",
    value(arg0) {
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = tmp[closure_11.VR] === constants.ONLINE;
      }
      return tmp2;
    }
  };
  items[14] = {
    key: "getClientStatus",
    value(arg0) {
      return closure_20[arg0];
    }
  };
  items[15] = {
    key: "getState",
    value() {
      return { presencesForGuilds: closure_15, statuses: closure_16, activities: closure_17, filteredActivities: closure_18, hiddenActivities: closure_19, activityMetadata: closure_21, clientStatuses: closure_20 };
    }
  };
  return callback(PresenceStore, items);
}(importDefault(dependencyMap[12]).Store);
tmp3.displayName = "PresenceStore";
tmp3 = new tmp3(importDefault(dependencyMap[13]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    return true;
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(arg0) {
    let guilds;
    let presences;
    ({ guilds, presences } = arg0);
    const id = store.getId();
    let closure_15 = {};
    let closure_21 = {};
    let obj = { [id]: closure_16[id] };
    closure_16 = obj;
    obj = { [id]: closure_17[id] };
    closure_17 = obj;
    obj = { [id]: closure_18[id] };
    closure_18 = obj;
    closure_19 = { [id]: closure_19[id] };
    let closure_20 = { [id]: {} };
    const set = new Set();
    const importDefault = set;
    const item = guilds.forEach((presences) => {
      presences = presences.presences;
      const item = presences.forEach((status) => {
        const user = status.user;
        callback({ guildId: status.id, userId: user.id, status: status.status, clientStatus: status.clientStatus, activities: status.activities, hiddenActivities: status.hiddenActivities, processedAtTimestamp: status.processedAtTimestamp });
        status.add(user.id);
      });
    });
    const item1 = presences.forEach((user) => {
      user = user.user;
      if (null != user) {
        const obj = { guildId: closure_12, userId: user.id, status: tmp, clientStatus: tmp2, activities: tmp3, hiddenActivities: tmp4, processedAtTimestamp: tmp5 };
        callback(obj);
        set.add(user.id);
      }
    });
    set.delete(id);
    const item2 = set.forEach(flattenPresenceInConnectionOpen);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(presences) {
    ({ presencesForGuilds: closure_15, statuses: closure_16, activities: closure_17, hiddenActivities: closure_19, activityMetadata: closure_21 } = presences.presences);
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const importDefault = guild;
    const presences = guild.presences;
    const item = presences.forEach((user) => {
      callback({ guildId: guild.id, userId: user.user.id, status: user.status, clientStatus: user.clientStatus, activities: user.activities, hiddenActivities: user.hiddenActivities, processedAtTimestamp: user.processedAtTimestamp });
    });
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    clearPresences(guild.guild.id);
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    return clearPresence(guildId.guildId, guildId.user.id);
  },
  PRESENCE_UPDATES: function handlePresenceUpdates(updates) {
    updates = updates.updates;
    const mapped = updates.map((guildId) => {
      let activities;
      let clientStatus;
      let hiddenActivities;
      let processedAtTimestamp;
      let status;
      let user;
      guildId = guildId.guildId;
      const obj = {};
      ({ user, status, clientStatus, activities, hiddenActivities, processedAtTimestamp } = guildId);
      if (null == guildId) {
        guildId = closure_12;
      }
      obj.guildId = guildId;
      obj.userId = user.id;
      obj.status = status;
      obj.clientStatus = clientStatus;
      obj.activities = activities;
      obj.hiddenActivities = hiddenActivities;
      obj.processedAtTimestamp = processedAtTimestamp;
      return closure_34(obj);
    });
    return mapped.some((arg0) => arg0);
  },
  PRESENCES_REPLACE: function handlePresenceReplace(presences) {
    presences = presences.presences;
    clearPresences(closure_12);
    const item = presences.forEach((user) => {
      user = user.user;
      if (null != user) {
        const obj = { guildId: closure_12, userId: user.id, status: tmp, clientStatus: tmp2, activities: tmp3, hiddenActivities: tmp4, processedAtTimestamp: tmp5 };
        callback(obj);
      }
    });
  },
  ACTIVITY_METADATA_UPDATE: function handleActivityMetadataUpdate(userId) {
    closure_21[userId.userId] = userId.metadata;
    return false;
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(arg0) {
    let members;
    ({ guildId: closure_0, members } = arg0);
    const item = members.forEach((presence) => {
      if (null != presence.presence) {
        const obj = { guildId: closure_0, userId: presence.user_id, status: presence.presence.status, clientStatus: presence.presence.clientStatus, activities: presence.presence.activities, hiddenActivities: presence.presence.hiddenActivities, processedAtTimestamp: presence.presence.processedAtTimestamp };
        callback(obj);
      }
    });
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(arg0) {
    let addedMembers;
    ({ guildId: closure_0, addedMembers } = arg0);
    if (null != addedMembers) {
      const item = addedMembers.forEach((presence) => {
        if (null != presence.presence) {
          const obj = { guildId: closure_0, userId: presence.userId, status: presence.presence.status, clientStatus: presence.presence.clientStatus, activities: presence.presence.activities, hiddenActivities: presence.presence.hiddenActivities, processedAtTimestamp: presence.presence.processedAtTimestamp };
          callback(obj);
        }
      });
    }
  },
  SELF_PRESENCE_STORE_UPDATE: function handleCurrentUserPresenceUpdate(status) {
    const id = store.getId();
    if (closure_16[id] === status.status) {
      if (closure_17[id] === status.activities) {
        if (closure_19[id] === status.hiddenActivities) {
          return false;
        }
      }
    }
    closure_16[id] = status.status;
    const items = [...status.activities];
    setActivitiesForUser(id, items.sort(sortActivity));
    const items1 = [...status.hiddenActivities];
    closure_19[id] = items1.sort(sortActivity);
    delete r1[r2];
  }
});
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    return true;
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(arg0) {
    let guilds;
    let presences;
    ({ guilds, presences } = arg0);
    const id = store.getId();
    let closure_15 = {};
    let closure_21 = {};
    let obj = { [id]: closure_16[id] };
    closure_16 = obj;
    obj = { [id]: closure_17[id] };
    closure_17 = obj;
    obj = { [id]: closure_18[id] };
    closure_18 = obj;
    closure_19 = { [id]: closure_19[id] };
    let closure_20 = { [id]: {} };
    const set = new Set();
    const importDefault = set;
    const item = guilds.forEach((presences) => {
      presences = presences.presences;
      const item = presences.forEach((status) => {
        const user = status.user;
        callback({ guildId: status.id, userId: user.id, status: status.status, clientStatus: status.clientStatus, activities: status.activities, hiddenActivities: status.hiddenActivities, processedAtTimestamp: status.processedAtTimestamp });
        status.add(user.id);
      });
    });
    const item1 = presences.forEach((user) => {
      user = user.user;
      if (null != user) {
        const obj = { guildId: closure_12, userId: user.id, status: tmp, clientStatus: tmp2, activities: tmp3, hiddenActivities: tmp4, processedAtTimestamp: tmp5 };
        callback(obj);
        set.add(user.id);
      }
    });
    set.delete(id);
    const item2 = set.forEach(flattenPresenceInConnectionOpen);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(presences) {
    ({ presencesForGuilds: closure_15, statuses: closure_16, activities: closure_17, hiddenActivities: closure_19, activityMetadata: closure_21 } = presences.presences);
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const importDefault = guild;
    const presences = guild.presences;
    const item = presences.forEach((user) => {
      callback({ guildId: guild.id, userId: user.user.id, status: user.status, clientStatus: user.clientStatus, activities: user.activities, hiddenActivities: user.hiddenActivities, processedAtTimestamp: user.processedAtTimestamp });
    });
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    clearPresences(guild.guild.id);
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    return clearPresence(guildId.guildId, guildId.user.id);
  },
  PRESENCE_UPDATES: function handlePresenceUpdates(updates) {
    updates = updates.updates;
    const mapped = updates.map((guildId) => {
      let activities;
      let clientStatus;
      let hiddenActivities;
      let processedAtTimestamp;
      let status;
      let user;
      guildId = guildId.guildId;
      const obj = {};
      ({ user, status, clientStatus, activities, hiddenActivities, processedAtTimestamp } = guildId);
      if (null == guildId) {
        guildId = closure_12;
      }
      obj.guildId = guildId;
      obj.userId = user.id;
      obj.status = status;
      obj.clientStatus = clientStatus;
      obj.activities = activities;
      obj.hiddenActivities = hiddenActivities;
      obj.processedAtTimestamp = processedAtTimestamp;
      return closure_34(obj);
    });
    return mapped.some((arg0) => arg0);
  },
  PRESENCES_REPLACE: function handlePresenceReplace(presences) {
    presences = presences.presences;
    clearPresences(closure_12);
    const item = presences.forEach((user) => {
      user = user.user;
      if (null != user) {
        const obj = { guildId: closure_12, userId: user.id, status: tmp, clientStatus: tmp2, activities: tmp3, hiddenActivities: tmp4, processedAtTimestamp: tmp5 };
        callback(obj);
      }
    });
  },
  ACTIVITY_METADATA_UPDATE: function handleActivityMetadataUpdate(userId) {
    closure_21[userId.userId] = userId.metadata;
    return false;
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(arg0) {
    let members;
    ({ guildId: closure_0, members } = arg0);
    const item = members.forEach((presence) => {
      if (null != presence.presence) {
        const obj = { guildId: closure_0, userId: presence.user_id, status: presence.presence.status, clientStatus: presence.presence.clientStatus, activities: presence.presence.activities, hiddenActivities: presence.presence.hiddenActivities, processedAtTimestamp: presence.presence.processedAtTimestamp };
        callback(obj);
      }
    });
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(arg0) {
    let addedMembers;
    ({ guildId: closure_0, addedMembers } = arg0);
    if (null != addedMembers) {
      const item = addedMembers.forEach((presence) => {
        if (null != presence.presence) {
          const obj = { guildId: closure_0, userId: presence.userId, status: presence.presence.status, clientStatus: presence.presence.clientStatus, activities: presence.presence.activities, hiddenActivities: presence.presence.hiddenActivities, processedAtTimestamp: presence.presence.processedAtTimestamp };
          callback(obj);
        }
      });
    }
  },
  SELF_PRESENCE_STORE_UPDATE: function handleCurrentUserPresenceUpdate(status) {
    const id = store.getId();
    if (closure_16[id] === status.status) {
      if (closure_17[id] === status.activities) {
        if (closure_19[id] === status.hiddenActivities) {
          return false;
        }
      }
    }
    closure_16[id] = status.status;
    const items = [...status.activities];
    setActivitiesForUser(id, items.sort(sortActivity));
    const items1 = [...status.hiddenActivities];
    closure_19[id] = items1.sort(sortActivity);
    delete r1[r2];
  }
};
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("stores/PresenceStore.tsx");

export default tmp3;
export { sortActivity };
