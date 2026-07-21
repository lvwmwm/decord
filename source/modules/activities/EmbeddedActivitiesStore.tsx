// Module ID: 1347
// Function ID: 15829
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 1347 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getLaunchStatesKey(channelId, applicationId) {
  return "" + applicationId + ":" + channelId;
}
function getNormalizedGuildId(guildId) {
  let str = "0";
  if (null != guildId) {
    str = guildId;
  }
  return str;
}
function getOrCreateBucket(map1, embeddedActivityLocationChannelId1) {
  let value = map1.get(embeddedActivityLocationChannelId1);
  if (null == value) {
    const prototype = ctor.prototype;
    const tmp5 = new ctor();
    const result = map1.set(embeddedActivityLocationChannelId1, tmp5);
    value = tmp5;
  }
  return value;
}
function participantFromServer(userId) {
  return { userId: userId.user_id, sessionId: userId.session_id, nonce: userId.nonce };
}
function updateEmbeddedActivities(instance) {
  let _location;
  let compositeInstanceId;
  let launchId;
  let participants;
  let obj = { applicationId: instance.application_id, launchId: instance.launch_id, compositeInstanceId: instance.composite_instance_id, location: instance.location, participants: participants.map(participantFromServer), contentClassification: instance.content_classification };
  participants = instance.participants;
  const applicationId = obj.applicationId;
  const arg1 = applicationId;
  ({ launchId, compositeInstanceId, location: _location, participants } = obj);
  const tmp = importDefault(dependencyMap[16])(applicationId);
  if (null != tmp) {
    const embeddedActivityLocationChannelId = arg1(dependencyMap[15]).getEmbeddedActivityLocationChannelId(_location);
    if (null != embeddedActivityLocationChannelId) {
      let value = map2.get(embeddedActivityLocationChannelId);
      let items;
      if (null != value) {
        items = value.getItems("all");
      }
    }
    value = map3.get(_location.id);
    let items1;
    if (null != value) {
      items1 = value.getItems("all");
    }
    if (null == items1) {
      items1 = items;
    }
    const found = items1.find((applicationId) => applicationId.applicationId === applicationId);
    const mapped = participants.map((userId) => userId.userId);
    const importDefault = store.getId();
    const someResult = mapped.some((arg0) => arg0 === closure_1);
    const found1 = participants.find((userId) => userId.userId === closure_1);
    if (null != found1) {
      const sessionId = found1.sessionId;
    }
    const obj14 = arg1(dependencyMap[15]);
    const value1 = map.get(applicationId);
    let tmp15 = null;
    if (null != embeddedActivityLocationChannelId) {
      tmp15 = embeddedActivityLocationChannelId;
    }
    const value2 = map4.get(getLaunchStatesKey(tmp15, applicationId));
    if (null != value2) {
      const launchParams = value2.launchParams;
    }
    obj = { applicationId, location: _location, launchId, compositeInstanceId, url: tmp };
    const _Set = Set;
    const set = new Set(mapped);
    obj.userIds = set;
    obj.participants = participants;
    obj.contentClassification = obj.contentClassification;
    let referrerId;
    if (null != value1) {
      referrerId = value1.referrerId;
    }
    if (null == referrerId) {
      let referrerId1;
      if (null != launchParams) {
        referrerId1 = launchParams.referrerId;
      }
      referrerId = referrerId1;
    }
    obj.referrerId = referrerId;
    let customId;
    if (null != value1) {
      customId = value1.customId;
    }
    if (null == customId) {
      let customId1;
      if (null != launchParams) {
        customId1 = launchParams.customId;
      }
      customId = customId1;
    }
    obj.customId = customId;
    let proxyTicket;
    if (null != value2) {
      proxyTicket = value2.proxyTicket;
    }
    obj.proxyTicket = proxyTicket;
    if (someResult) {
      if (null != value1) {
        obj = {};
        const merged = Object.assign(value1);
        const merged1 = Object.assign(obj);
        proxyTicket = obj.proxyTicket;
        if (null == proxyTicket) {
          proxyTicket = value1.proxyTicket;
        }
        obj["proxyTicket"] = proxyTicket;
        const result = map.set(value1.applicationId, obj);
      }
    }
    if (null != value1) {
      if (_location.id === value1.location.id) {
        if (applicationId === value1.applicationId) {
          if (someResult) {
            let tmp44 = null;
            if (mapped.length > 0) {
              tmp44 = obj;
            }
            getOrCreateBucket(map3, _location.id).upsert(applicationId, _location.id, tmp44);
            const obj9 = getOrCreateBucket(map3, _location.id);
            const embeddedActivityLocationChannelId1 = arg1(dependencyMap[15]).getEmbeddedActivityLocationChannelId(_location);
            if (null != embeddedActivityLocationChannelId1) {
              getOrCreateBucket(map2, embeddedActivityLocationChannelId1).upsert(applicationId, _location.id, tmp44);
              const obj11 = getOrCreateBucket(map2, embeddedActivityLocationChannelId1);
              const obj12 = arg1(dependencyMap[15]);
              getOrCreateBucket(map1, getNormalizedGuildId(arg1(dependencyMap[15]).getEmbeddedActivityLocationGuildId(_location))).upsert(applicationId, _location.id, tmp44);
              const obj13 = getOrCreateBucket(map1, getNormalizedGuildId(arg1(dependencyMap[15]).getEmbeddedActivityLocationGuildId(_location)));
            }
            const obj10 = arg1(dependencyMap[15]);
          } else {
            const _Array = Array;
            const arr = Array.from(value1.userIds);
          }
          disconnectEmbeddedActivity(value1);
        }
      }
    }
    if (someResult) {
      if (sessionId === store.getSessionId()) {
        const obj1 = { applicationId, launchId, compositeInstanceId, location: _location, participants, isFirstActivityInChannel: 0 === items.length, isStart: null == found };
        ({ referrerId: obj7.referrerId, customId: obj7.customId } = obj);
        let inviterUserId;
        if (null != value2) {
          inviterUserId = value2.inviterUserId;
        }
        obj1.inviterUserId = inviterUserId;
        obj1.proxyTicket = obj.proxyTicket;
        function openActivity(arg0) {
          let _location;
          let applicationId;
          let compositeInstanceId;
          let customId;
          let inviterUserId;
          let isFirstActivityInChannel;
          let isStart;
          let launchId;
          let participants;
          let proxyTicket;
          let referrerId;
          ({ applicationId, location: _location, participants } = arg0);
          ({ launchId, compositeInstanceId, isFirstActivityInChannel, isStart, referrerId, customId, inviterUserId, proxyTicket } = arg0);
          const tmp = callback(closure_2[16])(applicationId);
          if (null != tmp) {
            if (null != sessionId.getSessionId()) {
              const value = store.get(applicationId);
              let id;
              if (null != value) {
                id = value.location.id;
              }
              if (id === _location.id) {
                return false;
              } else {
                const embeddedActivityLocationChannelId = applicationId(closure_2[15]).getEmbeddedActivityLocationChannelId(_location);
                const channel = channel.getChannel(embeddedActivityLocationChannelId);
                if (null != channel) {
                  const guildId = channel.getGuildId();
                }
                if (null == currentUser.getCurrentUser()) {
                  return false;
                } else {
                  if (null == guildId) {
                    let isPrivateResult;
                    if (null != channel) {
                      isPrivateResult = channel.isPrivate();
                    }
                    return false;
                  }
                  let obj = { applicationId, url: tmp };
                  const _Set = Set;
                  const set = new Set(participants.map((userId) => userId.userId));
                  obj.userIds = set;
                  obj.participants = participants;
                  const _Date = Date;
                  obj.connectedSince = Date.now();
                  obj.launchId = launchId;
                  obj.compositeInstanceId = compositeInstanceId;
                  obj.location = _location;
                  obj.referrerId = referrerId;
                  obj.customId = customId;
                  obj.proxyTicket = proxyTicket;
                  const result = store.set(applicationId, obj);
                  const ComponentDispatch = applicationId(closure_2[18]).ComponentDispatch;
                  obj = { location: _location, applicationId, isFirstActivityInChannel, isStart, participants };
                  obj.embeddedActivity = obj;
                  obj.inviterUserId = inviterUserId;
                  ComponentDispatch.dispatch(constants2.OPEN_EMBEDDED_ACTIVITY, obj);
                  if (obj3.shouldOpenActivityInPopoutWindow()) {
                    let PIP = constants.ACTIVITY_POPOUT_WINDOW;
                    callback(closure_2[20]).wait(() => {
                      callback(closure_2[20]).dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                    });
                    const obj4 = callback(closure_2[20]);
                  } else {
                    if (embeddedActivityLocationChannelId === channelId.getChannelId()) {
                      if (!callback(closure_2[21])(embeddedActivityLocationChannelId)) {
                        PIP = constants.PANEL;
                      }
                    }
                    PIP = constants.PIP;
                  }
                  const _Date2 = Date;
                  const obj3 = applicationId(closure_2[19]);
                  const result1 = closure_33.set(callback2(_location.id, applicationId), Date.now());
                }
                const obj5 = applicationId(closure_2[15]);
              }
            }
          }
          return false;
        }(obj1);
      }
      const obj2 = {};
      let tmp42 = null;
      if (null != embeddedActivityLocationChannelId) {
        tmp42 = embeddedActivityLocationChannelId;
      }
      obj2.channelId = tmp42;
      obj2.applicationId = applicationId;
      handleEmbeddedActivityLaunchEnd(obj2);
      const tmp41 = handleEmbeddedActivityLaunchEnd;
    }
    const someResult1 = participants.some((userId) => applicationId(closure_2[17]).isActivityParticipantCurrentUserCurrentSession(userId));
    const tmp14 = getLaunchStatesKey;
  }
}
function updateEmbeddedActivitiesForGuild(guild) {
  const activity_instances = guild.activity_instances;
  if (null != activity_instances) {
    const item = activity_instances.forEach((arg0) => {
      callback(arg0);
    });
  }
}
function disconnectEmbeddedActivity(value1) {
  map.delete(value1.applicationId);
  const ComponentDispatch = arg1(dependencyMap[18]).ComponentDispatch;
  ComponentDispatch.dispatch(constants.RELEASE_ACTIVITY_WEB_VIEW);
}
function handleEmbeddedActivityLaunchEnd(channelId) {
  map4.delete(getLaunchStatesKey(channelId.channelId, channelId.applicationId));
}
function getActivityKey(arg0, arg1) {
  return "" + arg0 + ":" + arg1;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
const tmp2 = arg1(dependencyMap[11]);
const ActivityPanelModes = tmp2.ActivityPanelModes;
const FocusedActivityLayouts = tmp2.FocusedActivityLayouts;
({ ComponentActions: closure_15, PopoutWindowKeys: closure_16 } = arg1(dependencyMap[12]));
const tmp3 = arg1(dependencyMap[12]);
let obj = {};
const set = new Set([]);
obj.everLaunchedActivities = new Set();
obj.seenNewActivities = {};
obj.seenUpdatedActivities = {};
obj.lastCheckedForBadgeableActivities = null;
obj.dateRangesForSurfaces = {};
const items = [];
const items1 = [];
let closure_20 = () => {
  class ActivityBucket {
    constructor() {
      tmp = closure_7(this, ActivityBucket);
      this.items = [];
      this.cachedVisible = null;
      this.cachedHidden = null;
      return;
    }
  }
  const arg1 = ActivityBucket;
  let obj = {
    key: "upsert",
    value(arg0, arg1, arg2) {
      const self = this;
      const ActivityBucket = arg0;
      const items = this.items;
      this.items = items.filter((applicationId) => {
        let tmp = applicationId.applicationId === applicationId;
        if (tmp) {
          tmp = applicationId.location.id === arg1;
        }
        return !tmp;
      });
      if (null != arg2) {
        const items1 = self.items;
        items1.push(arg2);
      }
      self.invalidate();
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "removeWhere",
    value(arg0) {
      const ActivityBucket = arg0;
      const items = this.items;
      this.items = items.filter((arg0) => !arg0(arg0));
      this.invalidate();
    }
  };
  items[1] = obj;
  obj = {
    key: "clear",
    value() {
      this.items = [];
      this.invalidate();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getItems",
    value(arg0) {
      const self = this;
      const ContentClassificationEmbeddedActivityFilterExperiment = ActivityBucket(closure_2[13]).ContentClassificationEmbeddedActivityFilterExperiment;
      if (ContentClassificationEmbeddedActivityFilterExperiment.getConfig({ location: "embedded_activity_store" }).enabled) {
        if ("all" !== arg0) {
          if ("visible" === arg0) {
            let cachedVisible = self.cachedVisible;
            if (cachedVisible == null) {
              const items = self.items;
              const found = items.filter((contentClassification) => !callback(closure_2[14]).isAgeRestrictedClassificationReference(contentClassification.contentClassification));
              self.cachedVisible = found;
              cachedVisible = found;
            }
            return cachedVisible;
          } else if ("hidden" === arg0) {
            let cachedHidden = self.cachedHidden;
            if (cachedHidden == null) {
              const items1 = self.items;
              const found1 = items1.filter((contentClassification) => callback(closure_2[14]).isAgeRestrictedClassificationReference(contentClassification.contentClassification));
              self.cachedHidden = found1;
              cachedHidden = found1;
            }
            return cachedHidden;
          }
        }
      }
      return self.items;
    }
  };
  items[4] = {
    key: "invalidate",
    value() {
      this.cachedVisible = null;
      this.cachedHidden = null;
    }
  };
  return callback2(ActivityBucket, items);
}();
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
const set2 = new Set();
const map5 = new Map();
const map6 = new Map();
const map7 = new Map();
const map8 = new Map();
const map9 = new Map();
const map10 = new Map();
const map11 = new Map();
let closure_34;
const DISCONNECTED = ActivityPanelModes.DISCONNECTED;
const RESIZABLE = FocusedActivityLayouts.RESIZABLE;
const NORMAL = arg1(dependencyMap[10]).ActivityPopoutWindowLayouts.NORMAL;
let tmp19 = (PersistedStore) => {
  class EmbeddedActivitiesStoreClass {
    constructor() {
      self = this;
      tmp = closure_7(this, EmbeddedActivitiesStoreClass);
      obj = closure_5(EmbeddedActivitiesStoreClass);
      tmp2 = closure_4;
      if (closure_41()) {
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
  const arg1 = EmbeddedActivitiesStoreClass;
  callback(EmbeddedActivitiesStoreClass, PersistedStore);
  let obj = {
    key: "initialize",
    value: function initialize(everLaunchedActivities) {
      this.waitFor(closure_9, closure_10, closure_11, closure_12);
      let prop;
      if (null != everLaunchedActivities) {
        prop = everLaunchedActivities.everLaunchedActivities;
      }
      if (null == prop) {
        prop = [];
      }
      if (null != everLaunchedActivities) {
        const obj = {};
        const merged = Object.assign(everLaunchedActivities);
        obj["everLaunchedActivities"] = set;
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getState",
    value: function getState() {
      return closure_17;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSelfEmbeddedActivityForChannel",
    value: function getSelfEmbeddedActivityForChannel(channelId) {
      const EmbeddedActivitiesStoreClass = channelId;
      let tmp = null;
      if (null != channelId) {
        const _Array = Array;
        const found = Array.from(closure_21.values()).find((location) => location(closure_2[15]).getEmbeddedActivityLocationChannelId(location.location) === location);
        let tmp5 = null;
        if (null != found) {
          tmp5 = found;
        }
        tmp = tmp5;
        const arr = Array.from(closure_21.values());
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSelfEmbeddedActivityForLocation",
    value: function getSelfEmbeddedActivityForLocation(connectedActivityLocation) {
      const EmbeddedActivitiesStoreClass = connectedActivityLocation;
      let tmp = null;
      if (null != connectedActivityLocation) {
        const _Array = Array;
        const found = Array.from(closure_21.values()).find((location) => location.location.id === location.id);
        let tmp5 = null;
        if (null != found) {
          tmp5 = found;
        }
        tmp = tmp5;
        const arr = Array.from(closure_21.values());
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getSelfEmbeddedActivities",
    value: function getSelfEmbeddedActivities() {
      return closure_21;
    }
  };
  items[5] = {
    key: "getEmbeddedActivitiesForGuild",
    value: function getEmbeddedActivitiesForGuild(guildId) {
      const value = store.get(guildId);
      let items;
      if (null != value) {
        items = value.getItems("visible");
      }
      if (null == items) {
        items = closure_18;
      }
      return items;
    }
  };
  items[6] = {
    key: "getEmbeddedActivitiesForChannel",
    value: function getEmbeddedActivitiesForChannel(id) {
      const value = store2.get(id);
      let items;
      if (null != value) {
        items = value.getItems("visible");
      }
      if (null == items) {
        items = closure_18;
      }
      return items;
    }
  };
  items[7] = {
    key: "getEmbeddedActivitiesForLocation",
    value: function getEmbeddedActivitiesForLocation(id) {
      const value = store3.get(id.id);
      let items;
      if (null != value) {
        items = value.getItems("visible");
      }
      if (null == items) {
        items = closure_18;
      }
      return items;
    }
  };
  items[8] = {
    key: "getEmbeddedActivitiesForGuildIncludingHidden",
    value: function getEmbeddedActivitiesForGuildIncludingHidden(arg0) {
      const value = store.get(arg0);
      let items;
      if (null != value) {
        items = value.getItems("all");
      }
      if (null == items) {
        items = closure_18;
      }
      return items;
    }
  };
  items[9] = {
    key: "getEmbeddedActivitiesForChannelIncludingHidden",
    value: function getEmbeddedActivitiesForChannelIncludingHidden(channelId) {
      const value = store2.get(channelId);
      let items;
      if (null != value) {
        items = value.getItems("all");
      }
      if (null == items) {
        items = closure_18;
      }
      return items;
    }
  };
  items[10] = {
    key: "getEmbeddedActivitiesForLocationIncludingHidden",
    value: function getEmbeddedActivitiesForLocationIncludingHidden(location) {
      const value = store3.get(location.id);
      let items;
      if (null != value) {
        items = value.getItems("all");
      }
      if (null == items) {
        items = closure_18;
      }
      return items;
    }
  };
  items[11] = {
    key: "getEmbeddedActivitiesByChannel",
    value: function getEmbeddedActivitiesByChannel() {
      const map = new Map();
      const EmbeddedActivitiesStoreClass = map;
      const item = store2.forEach((getItems) => {
        const items = getItems.getItems("visible");
        if (items.length > 0) {
          const result = map.set(arg1, items);
        }
      });
      return map;
    }
  };
  items[12] = {
    key: "getEmbeddedActivityDurationMs",
    value: function getEmbeddedActivityDurationMs(id, applicationId) {
      const value = closure_33.get(callback6(id, applicationId));
      let diff = null;
      if (null != value) {
        const _Date = Date;
        diff = Date.now() - value;
      }
      return diff;
    }
  };
  items[13] = {
    key: "isLaunchingActivity",
    value: function isLaunchingActivity() {
      return closure_25.size > 0;
    }
  };
  items[14] = {
    key: "getShelfActivities",
    value: function getShelfActivities(embeddedActivityLocationGuildId) {
      let value = closure_27.get(callback5(embeddedActivityLocationGuildId));
      if (null == value) {
        value = closure_19;
      }
      return value;
    }
  };
  items[15] = {
    key: "getShelfFetchStatus",
    value: function getShelfFetchStatus(arg0) {
      return store4.get(callback5(arg0));
    }
  };
  items[16] = {
    key: "shouldFetchShelf",
    value: function shouldFetchShelf(arg0) {
      let value = store4.get(callback5(arg0));
      if (null == value) {
        const obj = { isFetching: false };
        value = obj;
      }
      let lastFetchTimestampMs;
      const timestamp = Date.now();
      if (null != value) {
        lastFetchTimestampMs = value.lastFetchTimestampMs;
      }
      let num = 0;
      if (null != lastFetchTimestampMs) {
        num = lastFetchTimestampMs;
      }
      let isFetching = null != value;
      if (isFetching) {
        isFetching = value.isFetching;
      }
      return !isFetching && timestamp - num > 21600000;
    }
  };
  items[17] = {
    key: "getOrientationLockStateForApp",
    value: function getOrientationLockStateForApp(applicationId) {
      return closure_29.get(applicationId);
    }
  };
  items[18] = {
    key: "getPipOrientationLockStateForApp",
    value: function getPipOrientationLockStateForApp(applicationId) {
      const self = this;
      let orientationLockStateForApp = store5.get(applicationId);
      if (null == orientationLockStateForApp) {
        orientationLockStateForApp = self.getOrientationLockStateForApp(applicationId);
      }
      return orientationLockStateForApp;
    }
  };
  items[19] = {
    key: "getGridOrientationLockStateForApp",
    value: function getGridOrientationLockStateForApp(applicationId) {
      const self = this;
      let orientationLockStateForApp = closure_31.get(applicationId);
      if (null == orientationLockStateForApp) {
        orientationLockStateForApp = store5.get(applicationId);
      }
      if (null == orientationLockStateForApp) {
        orientationLockStateForApp = self.getOrientationLockStateForApp(applicationId);
      }
      return orientationLockStateForApp;
    }
  };
  items[20] = {
    key: "getLayoutModeForApp",
    value: function getLayoutModeForApp(id) {
      return closure_32.get(id);
    }
  };
  items[21] = {
    key: "getConnectedActivityChannelId",
    value: function getConnectedActivityChannelId() {
      if (null != closure_34) {
        return EmbeddedActivitiesStoreClass(closure_2[15]).getEmbeddedActivityLocationChannelId(closure_34);
      }
    }
  };
  items[22] = {
    key: "getConnectedActivityLocation",
    value: function getConnectedActivityLocation() {
      return closure_34;
    }
  };
  items[23] = {
    key: "getActivityPanelMode",
    value: function getActivityPanelMode() {
      return closure_35;
    }
  };
  items[24] = {
    key: "getFocusedLayout",
    value: function getFocusedLayout() {
      return closure_36;
    }
  };
  items[25] = {
    key: "getCurrentEmbeddedActivity",
    value: function getCurrentEmbeddedActivity() {
      const selfEmbeddedActivityForLocation = this.getSelfEmbeddedActivityForLocation(this.getConnectedActivityLocation());
      let tmp2;
      if (null != selfEmbeddedActivityForLocation) {
        tmp2 = selfEmbeddedActivityForLocation;
      }
      return tmp2;
    }
  };
  items[26] = {
    key: "isProxyTicketRefreshing",
    value: function isProxyTicketRefreshing(arg0) {
      return set.has(arg0);
    }
  };
  items[27] = {
    key: "getEmbeddedActivityForUserId",
    value: function getEmbeddedActivityForUserId(author_id, id) {
      let iter5;
      if (undefined !== id) {
        const tmp3 = callback3(closure_24);
        const iter = tmp3();
        let iter2 = iter;
        let tmp4;
        if (!iter.done) {
          do {
            let tmp5 = closure_3;
            let tmp6 = closure_3(iter2.value, 2);
            let first = tmp6[0];
            let tmp8 = closure_39;
            let obj = tmp6[1];
            let tmp9 = closure_39(obj.getItems("visible"));
            let iter3 = tmp9();
            if (!iter3.done) {
              while (true) {
                let value = iter3.value;
                if (value.applicationId !== id) {
                  let iter4 = tmp9();
                  iter3 = iter4;
                  let tmp10 = value;
                  break;
                } else {
                  let userIds = value.userIds;
                  tmp4 = value;
                  if (userIds.has(author_id)) {
                    break;
                  }
                }
                break;
              }
            }
            iter5 = tmp3();
            iter2 = iter5;
          } while (!iter5.done);
        }
        return tmp4;
      }
    }
  };
  items[28] = {
    key: "hasActivityEverBeenLaunched",
    value: function hasActivityEverBeenLaunched(applicationId) {
      const everLaunchedActivities = obj.everLaunchedActivities;
      return everLaunchedActivities.has(applicationId);
    }
  };
  items[29] = {
    key: "getLaunchState",
    value: function getLaunchState(applicationId, id) {
      if (null != applicationId) {
        let tmp3 = null;
        if (null != id) {
          tmp3 = id;
        }
        return closure_25.get(closure_42(tmp3, applicationId));
      }
    }
  };
  items[30] = {
    key: "getLaunchStates",
    value: function getLaunchStates() {
      return closure_25;
    }
  };
  items[31] = {
    key: "getActivityPopoutWindowLayout",
    value: function getActivityPopoutWindowLayout() {
      return closure_37;
    }
  };
  return callback2(EmbeddedActivitiesStoreClass, items);
}(importDefault(dependencyMap[26]).PersistedStore);
tmp19.displayName = "EmbeddedActivitiesStore";
tmp19.persistKey = "EmbeddedActivities";
const items2 = [
  (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["seenFeaturedActivities"] = [];
    obj["shouldShowNewActivityIndicator"] = false;
    return obj;
  },
  (arg0) => {
    // DelByIdLong (0x48)
    const merged = Object.assign(arg0);
    return {};
  },
  (arg0) => {
    // DelByIdLong (0x48)
    const merged = Object.assign(arg0);
    return {};
  },
  (arg0) => {
    // DelByIdLong (0x48)
    // DelByIdLong (0x48)
    // DelByIdLong (0x48)
    // DelByIdLong (0x48)
    const merged = Object.assign(arg0);
    return {};
  },
  (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["seenNewActivities"] = {};
    obj["seenUpdatedActivities"] = {};
    return obj;
  },
  (everLaunchedActivities) => {
    let prop = everLaunchedActivities.everLaunchedActivities;
    if (null == prop) {
      prop = [];
    }
    const obj = {};
    const merged = Object.assign(everLaunchedActivities);
    obj["everLaunchedActivities"] = new Set(prop);
    return obj;
  },
  (arg0) => {
    // DelByIdLong (0x48)
    const merged = Object.assign(arg0);
    return {};
  },
  (shouldShowNewActivityIndicator) => {
    shouldShowNewActivityIndicator.surfacesToShowNewActivityIndicator = new Set();
    if (shouldShowNewActivityIndicator.shouldShowNewActivityIndicator) {
      const surfacesToShowNewActivityIndicator = shouldShowNewActivityIndicator.surfacesToShowNewActivityIndicator;
      surfacesToShowNewActivityIndicator.add(arg1(dependencyMap[24]).EmbeddedActivitySurfaces.VOICE_LAUNCHER);
    }
    delete r1.shouldShowNewActivityIndicator;
    const merged = Object.assign(shouldShowNewActivityIndicator);
    return {};
  },
  (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["lastCheckedForBadgeableActivities"] = null;
    return obj;
  },
  (arg0) => {
    delete r1.surfacesToShowNewActivityIndicator;
    const obj = {};
    const merged = Object.assign(arg0);
    obj["dateRangesForSurfaces"] = {};
    return obj;
  }
];
tmp19.migrations = items2;
obj = {
  ACTIVITY_LAYOUT_MODE_UPDATE: function handleActivityLayoutModeUpdate(applicationId) {
    const result = map10.set(applicationId.applicationId, applicationId.layoutMode);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpen(guilds) {
    let length;
    guilds = guilds.guilds;
    map2.clear();
    map1.clear();
    map3.clear();
    const item = guilds.forEach((arg0) => {
      callback(arg0);
    });
    const id = store.getId();
    function _loop(location) {
      let closure_0 = location;
      const embeddedActivitiesForLocationIncludingHidden = embeddedActivitiesForLocationIncludingHidden.getEmbeddedActivitiesForLocationIncludingHidden(location.location);
      if (!embeddedActivitiesForLocationIncludingHidden.some((applicationId) => {
        let hasItem = applicationId.applicationId === applicationId.applicationId;
        if (hasItem) {
          hasItem = applicationId.launchId === applicationId.launchId;
        }
        if (hasItem) {
          const userIds = applicationId.userIds;
          hasItem = userIds.has(applicationId);
        }
        return hasItem;
      })) {
        callback2(location);
      }
    }
    const arr = Array.from(map.values());
    let num = 0;
    if (0 < arr.length) {
      do {
        let _loopResult = _loop(arr[num]);
        num = num + 1;
        length = arr.length;
      } while (num < length);
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    updateEmbeddedActivitiesForGuild(guild.guild);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    const arg1 = channel;
    let value = map2.get(channel.id);
    let items;
    if (null != value) {
      items = value.getItems("all");
    }
    map2.delete(channel.id);
    value = map1.get(getNormalizedGuildId(channel.guild_id));
    if (null != value) {
      value.removeWhere((location) => channel(closure_2[15]).getEmbeddedActivityLocationChannelId(location.location) === channel.id);
    }
    const item = items.forEach((location) => {
      set.delete(location.location.id);
    });
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function handleEmbeddedActivityLaunchStart(channelId) {
    let commandOrigin;
    let componentId;
    let inviterUserId;
    let launchParams;
    ({ componentId, commandOrigin, launchParams, inviterUserId } = channelId);
    const result = map4.set(getLaunchStatesKey(channelId.channelId, channelId.applicationId), { isLaunching: true, componentId, inviterUserId, launchParams });
    if (commandOrigin === arg1(dependencyMap[25]).CommandOrigin.APP_DMS_ENTRY_POINT_COMMAND_BUTTON) {
      let RESIZABLE = FocusedActivityLayouts.NO_CHAT;
    } else {
      RESIZABLE = FocusedActivityLayouts.RESIZABLE;
    }
  },
  EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: function handleEmbeddedActivityLaunchSetProxyTicket(channelId) {
    const tmp = getLaunchStatesKey(channelId.channelId, channelId.applicationId);
    const value = map4.get(tmp);
    if (null != value) {
      const obj = {};
      const merged = Object.assign(value);
      obj["proxyTicket"] = channelId.proxyTicket;
      const result = map4.set(tmp, obj);
    }
  },
  EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET: function handleEmbeddedActivityUpdateConnectedProxyTicket(applicationId) {
    applicationId = applicationId.applicationId;
    const value = map.get(applicationId);
    if (null == value) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(value);
      obj["proxyTicket"] = applicationId.proxyTicket;
      const result = map.set(applicationId, obj);
    }
  },
  EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING: function handleEmbeddedActivitySetProxyTicketRefreshing(applicationId) {
    applicationId = applicationId.applicationId;
    if (applicationId.refreshing) {
      obj.add(applicationId);
    } else {
      obj.delete(applicationId);
    }
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function handleEmbeddedActivityLaunchSuccess(applicationId) {
    const everLaunchedActivities = obj.everLaunchedActivities;
    everLaunchedActivities.add(applicationId.applicationId);
  },
  EMBEDDED_ACTIVITY_LAUNCH_FAIL: function handleEmbeddedActivityLaunchFail(applicationId) {
    applicationId = applicationId.applicationId;
    handleEmbeddedActivityLaunchEnd({ applicationId, channelId: applicationId.channelId });
    set2.delete(applicationId);
  },
  EMBEDDED_ACTIVITY_LAUNCH_CANCEL: function handleEmbeddedActivityLaunchCancel(applicationId) {
    applicationId = applicationId.applicationId;
    handleEmbeddedActivityLaunchEnd({ applicationId, channelId: applicationId.channelId });
    set2.delete(applicationId);
  },
  EMBEDDED_ACTIVITY_CLOSE: function handleEmbeddedActivityClose(applicationId) {
    applicationId = applicationId.applicationId;
    const value = map.get(applicationId);
    map.delete(applicationId);
    let id;
    if (null != value) {
      id = value.location.id;
    }
    let id1;
    if (null != id) {
      id1 = id.id;
    }
    if (id === id1) {
      id = undefined;
    }
  },
  EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: function handleUpdatePopoutWindowLayout(layout) {
    const NORMAL = layout.layout;
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    updateEmbeddedActivities(instance.instance);
  },
  LOCAL_ACTIVITY_UPDATE: function handleLocalActivityUpdate(activity) {
    activity = activity.activity;
    if (null == activity) {
      return false;
    } else {
      const application_id = activity.application_id;
      let str = "";
      if (null != application_id) {
        str = application_id;
      }
      const value = map.get(str);
      if (null == value) {
        return false;
      } else {
        const obj = {};
        const merged = Object.assign(value);
        const result = map.set(value.applicationId, obj);
      }
    }
  },
  EMBEDDED_ACTIVITY_SET_CONFIG: function handleSetSelfEmbeddedActivityConfig(applicationId) {
    const value = map.get(applicationId.applicationId);
    if (null != value) {
      const obj = {};
      const merged = Object.assign(value);
      obj["config"] = applicationId.config;
      const result = map.set(value.applicationId, obj);
    }
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF: function handleEmbeddedActivityFetchShelf(guildId) {
    const tmp = getNormalizedGuildId(guildId.guildId);
    const value = map6.get(tmp);
    const obj = { isFetching: true };
    let lastFetchTimestampMs;
    if (null != value) {
      lastFetchTimestampMs = value.lastFetchTimestampMs;
    }
    obj.lastFetchTimestampMs = lastFetchTimestampMs;
    const result = map6.set(tmp, obj);
    obj.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString();
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function handleEmbeddedActivityFetchShelfSuccess(activities) {
    activities = activities.activities;
    const tmp = getNormalizedGuildId(activities.guildId);
    const result = map5.set(tmp, activities);
    const timestamp = Date.now();
    function handleShowingNewActivityIndicator(arg0) {
      let activities;
      ({ activities, now: closure_0 } = arg0);
      const tmp = callback2(closure_2[22]);
      const callback2 = tmp(callback(closure_2[23]).getOS());
      closure_17.dateRangesForSurfaces = activities.reduce((arg0, arg1) => {
        let closure_1 = tmp;
        if (null != arg1.client_platform_config[closure_1].label_from) {
          if (null != tmp.label_until) {
            const obj = {};
            ({ label_from: obj.fromDate, label_until: obj.untilDate } = tmp);
            const _Date = Date;
            const date = new Date(tmp.label_from);
            const time = date.getTime();
            const _Date2 = Date;
            let tmp3 = time > arg0;
            if (!tmp3) {
              tmp3 = tmp16 < arg0;
            }
            if (!tmp3) {
              const _Object = Object;
              const values = Object.values(arg0(obj[24]).EmbeddedActivitySurfaces);
              const found = values.filter((arg0) => {
                const omit_badge_from_surfaces = tmp.omit_badge_from_surfaces;
                return !omit_badge_from_surfaces.includes(arg0);
              });
              const item = found.forEach((arg0) => {
                let tmp2 = null == tmp;
                if (!tmp2) {
                  const _Date = Date;
                  const date = new Date(tmp.fromDate);
                  tmp2 = date.getTime() < time;
                }
                if (tmp2) {
                  arg0[arg0] = obj;
                }
              });
            }
            return arg0;
          }
        }
        return arg0;
      }, {});
    }({ activities, now: timestamp });
    const result1 = map6.set(tmp, { isFetching: false, lastFetchTimestampMs: timestamp });
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function handleEmbeddedActivityFetchShelfFail(guildId) {
    const tmp = getNormalizedGuildId(guildId.guildId);
    const value = map6.get(tmp);
    const obj = { isFetching: false };
    let lastFetchTimestampMs;
    if (null != value) {
      lastFetchTimestampMs = value.lastFetchTimestampMs;
    }
    obj.lastFetchTimestampMs = lastFetchTimestampMs;
    const result = map6.set(tmp, obj);
  },
  EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function handleOrientationLockState(arg0) {
    let applicationId;
    let gridLockState;
    let lockState;
    let pictureInPictureLockState;
    ({ applicationId, lockState, pictureInPictureLockState, gridLockState } = arg0);
    if (null == lockState) {
      map7.delete(applicationId);
    } else {
      const result = map7.set(applicationId, lockState);
    }
    if (null === pictureInPictureLockState) {
      map8.delete(applicationId);
    } else if (undefined !== pictureInPictureLockState) {
      const result1 = map8.set(applicationId, pictureInPictureLockState);
    }
    if (null === gridLockState) {
      map9.delete(applicationId);
    } else if (undefined !== gridLockState) {
      const result2 = map9.set(applicationId, gridLockState);
    }
  },
  EMBEDDED_ACTIVITY_SET_PANEL_MODE: function handleSetPanelMode(activityPanelMode) {
    const DISCONNECTED = activityPanelMode.activityPanelMode;
  },
  EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function handleSetFocusedLayout(focusedActivityLayout) {
    const RESIZABLE = focusedActivityLayout.focusedActivityLayout;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    if (null != closure_34) {
      const embeddedActivityLocationChannelId = arg1(dependencyMap[15]).getEmbeddedActivityLocationChannelId(closure_34);
      let tmp6 = null != embeddedActivityLocationChannelId && embeddedActivityLocationChannelId !== tmp;
      if (tmp6) {
        tmp6 = DISCONNECTED === ActivityPanelModes.PANEL;
      }
      if (tmp6) {
        const DISCONNECTED = ActivityPanelModes.PIP;
      }
      const obj = arg1(dependencyMap[15]);
    }
  },
  POPOUT_WINDOW_CLOSE: function handlePopoutWindowClose(key) {
    if (key.key === constants2.ACTIVITY_POPOUT) {
      const DISCONNECTED = ActivityPanelModes.PIP;
    }
  }
};
tmp19 = new tmp19(importDefault(dependencyMap[20]), obj);
const set1 = new Set();
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/activities/EmbeddedActivitiesStore.tsx");

export default tmp19;
export const FEATURED_ACTIVITY_IDS = set;
export const NO_ACTIVITIES = items;
export const NO_ACTIVITY_CONFIGS = items1;
export const ACTIVITIES_GUILD_ID_SENTINEL_FOR_PRIVATE_CHANNELS = "0";
