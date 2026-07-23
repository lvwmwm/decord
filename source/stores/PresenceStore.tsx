// Module ID: 4217
// Function ID: 36708
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 1849, 653, 4218, 22, 636, 21, 566, 686, 2]

// Module 4217 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_9;
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
function getPresence(arg0, arg1) {
  let tmp2 = null;
  if (null != dependencyMap[arg0]) {
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
  if (importDefault(4218)(created_at2)) {
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
        let tmp = constants2;
        if (value.type === constants2.PLAYING) {
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
  delete tmp[tmp2];
  delete tmp[tmp2];
  delete tmp[tmp2];
  delete tmp[tmp2];
  delete tmp[tmp2];
  if (null != dependencyMap[userId]) {
    const _Object3 = Object;
    let values = Object.values(dependencyMap[userId]);
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
      if (obj.every(dependencyMap[userId], (status) => {
        let tmp = status.status === outer1_9.OFFLINE;
        if (tmp) {
          let tmp3 = null == status.hiddenActivities;
          if (!tmp3) {
            tmp3 = 0 === status.hiddenActivities.length;
          }
          tmp = tmp3;
        }
        return tmp;
      })) {
        delete tmp3[tmp2];
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
      obj = importDefault(22);
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
    let items = [];
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
  if (null != dependencyMap[id]) {
    const _Object = Object;
    const maxByResult = importDefault(22).maxBy(Object.values(tmp), (processedAtTimestamp) => processedAtTimestamp.processedAtTimestamp);
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
    const obj = importDefault(22);
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
    let tmp5 = status === constants.OFFLINE;
    if (tmp5) {
      let tmp4 = null == hiddenActivities;
      if (!tmp4) {
        tmp4 = 0 === hiddenActivities.length;
      }
      tmp5 = tmp4;
    }
    let tmp7 = dependencyMap[userId];
    if (null == tmp7) {
      if (tmp5) {
        return false;
      } else {
        let obj = {};
        dependencyMap[userId] = obj;
        tmp7 = obj;
      }
    }
    if (tmp5) {
      obj = { status, clientStatus, activities: closure_14, hiddenActivities: closure_14, processedAtTimestamp };
      tmp7[guildId] = obj;
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
      if (null != tmp7[guildId]) {
        activities2 = sorted;
        if (importDefault(636)(tmp17.activities, sorted)) {
          activities2 = tmp17.activities;
        }
      }
      obj = { status, clientStatus, activities: activities2, hiddenActivities: dedupeHiddenActivities(hiddenActivities), processedAtTimestamp };
      tmp7[guildId] = obj;
      const tmp15 = dedupeHiddenActivities;
      const tmp15Result = dedupeHiddenActivities(hiddenActivities);
    }
    delete tmp[tmp2];
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
    let tmp5 = dependencyMap[userId];
    if (null == tmp5) {
      if (!tmp3) {
        let obj = {};
        dependencyMap[userId] = obj;
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
    if (null != dependencyMap[id]) {
      if (null != tmp5[guildId]) {
        delete tmp3[tmp];
        const _Object = Object;
        if (0 === Object.keys(tmp5).length) {
          delete tmp[tmp2];
        }
        flattenPresence(id);
      }
    }
    return false;
  }
}
function clearPresences(closure_12) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(importDefault(21).keys(closure_15));
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = clearPresence;
      let tmp3 = clearPresence(closure_12, iter.value);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
({ StatusTypes: closure_9, ActivityTypes: closure_10, ClientTypes: closure_11, ME: closure_12, UserFlags: closure_13 } = ME);
let closure_14 = Object.freeze([]);
let closure_15 = {};
let closure_16 = {};
let closure_17 = {};
let closure_18 = {};
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
let tmp3 = ((Store) => {
  class PresenceStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, PresenceStore);
      obj = outer1_5(PresenceStore);
      tmp2 = outer1_4;
      if (outer1_22()) {
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
  callback2(PresenceStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_8);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "setCurrentUserOnConnectionOpen",
    value(arg0, arg1) {
      outer1_16[outer1_7.getId()] = arg0;
      const items = [];
      const id = outer1_7.getId();
      HermesBuiltin.arraySpread(arg1, 0);
      outer1_30(id, items.sort(outer1_28));
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
        UNKNOWN = outer1_9.OFFLINE;
      }
      const user = outer1_8.getUser(arg0);
      let hasFlagResult = null != user;
      if (hasFlagResult) {
        hasFlagResult = user.hasFlag(outer1_13.BOT_HTTP_INTERACTIONS);
      }
      if (hasFlagResult) {
        UNKNOWN = outer1_9.UNKNOWN;
      }
      if (null == tmp) {
        if (null != outer1_16[arg0]) {
          UNKNOWN = tmp11;
        }
        return UNKNOWN;
      } else {
        const tmp7 = outer1_25(arg0, tmp);
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
        let tmp7 = outer1_18[arg0];
        if (null == tmp7) {
          tmp7 = outer1_14;
        }
        return tmp7;
      } else {
        const tmp3 = outer1_25(arg0, tmp);
        if (null != tmp3) {
          if (null != tmp3.activities) {
            let tmp5 = outer1_29(tmp3.activities);
          }
          return tmp5;
        }
        tmp5 = outer1_14;
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
        let tmp5 = outer1_17[arg0];
        if (null == tmp5) {
          tmp5 = outer1_14;
        }
        return tmp5;
      } else {
        const tmp3 = outer1_25(arg0, tmp);
        if (null != tmp3) {
          if (null != tmp3.activities) {
            let activities = tmp3.activities;
          }
          return activities;
        }
        activities = outer1_14;
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
        let tmp6 = outer1_19[arg0];
        if (null == tmp6) {
          tmp6 = outer1_14;
        }
        let hiddenActivities = tmp6;
      } else {
        const tmp3 = outer1_25(arg0, tmp);
        hiddenActivities = undefined;
        if (null != tmp3) {
          hiddenActivities = tmp3.hiddenActivities;
        }
        if (null == hiddenActivities) {
          hiddenActivities = outer1_14;
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
      return activities.filter((type) => type.type !== outer2_10.HANG_STATUS)[0];
    }
  };
  items[7] = {
    key: "getAllApplicationActivities",
    value(arg0) {
      let iter5;
      const items = [];
      let obj = PresenceStore(outer1_1[11]);
      const tmp = outer1_23(obj.keys(outer1_18));
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp2 = outer1_23;
          let tmp3 = outer1_18;
          let tmp4 = outer1_23(outer1_18[value]);
          let iter3 = tmp4();
          if (!iter3.done) {
            do {
              value = iter3.value;
              if (value.application_id === arg0) {
                obj = { userId: value, activity: value };
                let arr = items.push(obj);
              }
              iter4 = tmp4();
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
      let closure_0 = arg1;
      if (arg2 === undefined) {
        tmp = null;
      }
      return self.findActivity(arg0, (application_id) => application_id.application_id === closure_0, tmp, true);
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
      return outer1_21[arg0];
    }
  };
  items[11] = {
    key: "getUserIds",
    value() {
      return PresenceStore(outer1_1[11]).keys(outer1_17);
    }
  };
  items[12] = {
    key: "isMobileOnline",
    value(arg0) {
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = tmp[outer1_11.MOBILE] === outer1_9.ONLINE;
      }
      if (tmp2) {
        tmp2 = tmp[outer1_11.DESKTOP] !== outer1_9.ONLINE;
      }
      if (tmp2) {
        tmp2 = tmp[outer1_11.VR] !== outer1_9.ONLINE;
      }
      return tmp2;
    }
  };
  items[13] = {
    key: "isVROnline",
    value(arg0) {
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = tmp[outer1_11.VR] === outer1_9.ONLINE;
      }
      return tmp2;
    }
  };
  items[14] = {
    key: "getClientStatus",
    value(arg0) {
      return outer1_20[arg0];
    }
  };
  items[15] = {
    key: "getState",
    value() {
      return { presencesForGuilds: outer1_15, statuses: outer1_16, activities: outer1_17, filteredActivities: outer1_18, hiddenActivities: outer1_19, activityMetadata: outer1_21, clientStatuses: outer1_20 };
    }
  };
  return callback(PresenceStore, items);
})(require("initialize").Store);
tmp3.displayName = "PresenceStore";
tmp3 = new tmp3(require("dispatcher"), {
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
    obj = { [id]: obj[id] };
    obj = { [id]: obj[id] };
    obj = { [id]: obj[id] };
    obj1 = { [id]: obj1[id] };
    let closure_20 = { [id]: {} };
    const set = new Set();
    let item = guilds.forEach((presences) => {
      let closure_0 = presences;
      presences = presences.presences;
      const item = presences.forEach((status) => {
        const user = status.user;
        outer2_35({ guildId: presences.id, userId: user.id, status: status.status, clientStatus: status.clientStatus, activities: status.activities, hiddenActivities: status.hiddenActivities, processedAtTimestamp: status.processedAtTimestamp });
        presences.add(user.id);
      });
    });
    const item1 = presences.forEach((user) => {
      user = user.user;
      if (null != user) {
        const obj = { guildId: outer1_12, userId: user.id, status: tmp, clientStatus: tmp2, activities: tmp3, hiddenActivities: tmp4, processedAtTimestamp: tmp5 };
        outer1_35(obj);
        set.add(user.id);
      }
    });
    set.delete(id);
    const item2 = set.forEach(flattenPresenceInConnectionOpen);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(presences) {
    let closure_15;
    let closure_16;
    let closure_17;
    let closure_19;
    let closure_21;
    ({ presencesForGuilds: closure_15, statuses: closure_16, activities: closure_17, hiddenActivities: closure_19, activityMetadata: closure_21 } = presences.presences);
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const presences = guild.presences;
    const item = presences.forEach((user) => {
      outer1_34({ guildId: guild.id, userId: user.user.id, status: user.status, clientStatus: user.clientStatus, activities: user.activities, hiddenActivities: user.hiddenActivities, processedAtTimestamp: user.processedAtTimestamp });
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
        guildId = outer1_12;
      }
      obj.guildId = guildId;
      obj.userId = user.id;
      obj.status = status;
      obj.clientStatus = clientStatus;
      obj.activities = activities;
      obj.hiddenActivities = hiddenActivities;
      obj.processedAtTimestamp = processedAtTimestamp;
      return outer1_34(obj);
    });
    return mapped.some((arg0) => arg0);
  },
  PRESENCES_REPLACE: function handlePresenceReplace(presences) {
    presences = presences.presences;
    clearPresences(closure_12);
    const item = presences.forEach((user) => {
      user = user.user;
      if (null != user) {
        const obj = { guildId: outer1_12, userId: user.id, status: tmp, clientStatus: tmp2, activities: tmp3, hiddenActivities: tmp4, processedAtTimestamp: tmp5 };
        outer1_34(obj);
      }
    });
  },
  ACTIVITY_METADATA_UPDATE: function handleActivityMetadataUpdate(userId) {
    closure_21[userId.userId] = userId.metadata;
    return false;
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(arg0) {
    let importDefault;
    let members;
    ({ guildId: importDefault, members } = arg0);
    const item = members.forEach((presence) => {
      if (null != presence.presence) {
        const obj = { guildId: closure_0, userId: presence.user_id, status: presence.presence.status, clientStatus: presence.presence.clientStatus, activities: presence.presence.activities, hiddenActivities: presence.presence.hiddenActivities, processedAtTimestamp: presence.presence.processedAtTimestamp };
        outer1_34(obj);
      }
    });
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(arg0) {
    let addedMembers;
    let importDefault;
    ({ guildId: importDefault, addedMembers } = arg0);
    if (null != addedMembers) {
      const item = addedMembers.forEach((presence) => {
        if (null != presence.presence) {
          const obj = { guildId: closure_0, userId: presence.userId, status: presence.presence.status, clientStatus: presence.presence.clientStatus, activities: presence.presence.activities, hiddenActivities: presence.presence.hiddenActivities, processedAtTimestamp: presence.presence.processedAtTimestamp };
          outer1_34(obj);
        }
      });
    }
  },
  SELF_PRESENCE_STORE_UPDATE: function handleCurrentUserPresenceUpdate(status) {
    const id = store.getId();
    if (table[id] === status.status) {
      if (table2[id] === status.activities) {
        if (table3[id] === status.hiddenActivities) {
          return false;
        }
      }
    }
    table[id] = status.status;
    const items = [...status.activities];
    setActivitiesForUser(id, items.sort(sortActivity));
    const items1 = [...status.hiddenActivities];
    table3[id] = items1.sort(sortActivity);
    delete tmp[tmp2];
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/PresenceStore.tsx");

export default tmp3;
export { sortActivity };
