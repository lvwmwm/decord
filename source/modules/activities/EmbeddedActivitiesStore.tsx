// Module ID: 1347
// Function ID: 15830
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 15, 17, 18, 6, 7, 1194, 1348, 1906, 1849, 4155, 10226, 653, 10535, 10536, 3748, 10481, 12992, 1207, 10523, 686, 10438, 8183, 477, 1881, 6755, 566, 2]

// Module 1347 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import getEmbeddedActivityLocationChannelId from "getEmbeddedActivityLocationChannelId";
import isActivityParticipantCurrentUserCurrentSession from "isActivityParticipantCurrentUserCurrentSession";
import reportDevtoolsEvent from "reportDevtoolsEvent";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import ActivityPanelModes from "ActivityPanelModes";
import ME from "ME";
import set from "_getPrototypeOf";

let closure_15;
let closure_16;
const require = arg1;
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
  ({ launchId, compositeInstanceId, location: _location, participants } = obj);
  let tmp = importDefault(10481)(applicationId);
  if (null != tmp) {
    let embeddedActivityLocationChannelId = applicationId(3748).getEmbeddedActivityLocationChannelId(_location);
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
    importDefault = store.getId();
    const someResult = mapped.some((arg0) => arg0 === closure_1);
    const found1 = participants.find((userId) => userId.userId === closure_1);
    if (null != found1) {
      const sessionId = found1.sessionId;
    }
    const obj14 = applicationId(3748);
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
    let _Set = Set;
    let set = new Set(mapped);
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
        let result = map.set(value1.applicationId, obj);
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
            const embeddedActivityLocationChannelId1 = applicationId(3748).getEmbeddedActivityLocationChannelId(_location);
            if (null != embeddedActivityLocationChannelId1) {
              getOrCreateBucket(map2, embeddedActivityLocationChannelId1).upsert(applicationId, _location.id, tmp44);
              const obj11 = getOrCreateBucket(map2, embeddedActivityLocationChannelId1);
              const obj12 = applicationId(3748);
              getOrCreateBucket(map1, getNormalizedGuildId(applicationId(3748).getEmbeddedActivityLocationGuildId(_location))).upsert(applicationId, _location.id, tmp44);
              const obj13 = getOrCreateBucket(map1, getNormalizedGuildId(applicationId(3748).getEmbeddedActivityLocationGuildId(_location)));
            }
            const obj10 = applicationId(3748);
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
        (function openActivity(arg0) {
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
          const tmp = callback(outer1_2[16])(applicationId);
          if (null != tmp) {
            if (null != outer1_9.getSessionId()) {
              const value = outer1_21.get(applicationId);
              let id;
              if (null != value) {
                id = value.location.id;
              }
              if (id === _location.id) {
                return false;
              } else {
                const embeddedActivityLocationChannelId = applicationId(outer1_2[15]).getEmbeddedActivityLocationChannelId(_location);
                const channel = outer1_10.getChannel(embeddedActivityLocationChannelId);
                if (null != channel) {
                  const guildId = channel.getGuildId();
                }
                if (null == outer1_12.getCurrentUser()) {
                  return false;
                } else {
                  if (null == guildId) {
                    let isPrivateResult;
                    if (null != channel) {
                      isPrivateResult = channel.isPrivate();
                    }
                    return false;
                  }
                  const outer1_34 = _location;
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
                  const result = outer1_21.set(applicationId, obj);
                  const ComponentDispatch = applicationId(outer1_2[18]).ComponentDispatch;
                  obj = { location: _location, applicationId, isFirstActivityInChannel, isStart, participants };
                  obj.embeddedActivity = obj;
                  obj.inviterUserId = inviterUserId;
                  ComponentDispatch.dispatch(outer1_15.OPEN_EMBEDDED_ACTIVITY, obj);
                  if (obj3.shouldOpenActivityInPopoutWindow()) {
                    let outer1_35 = outer1_13.ACTIVITY_POPOUT_WINDOW;
                    callback(outer1_2[20]).wait(() => {
                      callback(outer2_2[20]).dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                    });
                    const obj4 = callback(outer1_2[20]);
                  } else {
                    if (embeddedActivityLocationChannelId === outer1_11.getChannelId()) {
                      if (!callback(outer1_2[21])(embeddedActivityLocationChannelId)) {
                        let PIP = outer1_13.PANEL;
                      }
                      outer1_35 = PIP;
                    }
                    PIP = outer1_13.PIP;
                  }
                  const _Date2 = Date;
                  obj3 = applicationId(outer1_2[19]);
                  const result1 = outer1_33.set(outer1_50(_location.id, applicationId), Date.now());
                }
                const obj5 = applicationId(outer1_2[15]);
              }
            }
          }
          return false;
        })(obj1);
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
    const someResult1 = participants.some((userId) => applicationId(outer1_2[17]).isActivityParticipantCurrentUserCurrentSession(userId));
    const tmp14 = getLaunchStatesKey;
  }
}
function updateEmbeddedActivitiesForGuild(guild) {
  const activity_instances = guild.activity_instances;
  if (null != activity_instances) {
    const item = activity_instances.forEach((arg0) => {
      outer1_46(arg0);
    });
  }
}
function disconnectEmbeddedActivity(value1) {
  map.delete(value1.applicationId);
  const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
  ComponentDispatch.dispatch(constants.RELEASE_ACTIVITY_WEB_VIEW);
}
function handleEmbeddedActivityLaunchEnd(channelId) {
  map4.delete(getLaunchStatesKey(channelId.channelId, channelId.applicationId));
}
function getActivityKey(arg0, arg1) {
  return "" + arg0 + ":" + arg1;
}
ActivityPanelModes = ActivityPanelModes.ActivityPanelModes;
const FocusedActivityLayouts = ActivityPanelModes.FocusedActivityLayouts;
({ ComponentActions: closure_15, PopoutWindowKeys: closure_16 } = ME);
let set = new Set([]);
let obj = { everLaunchedActivities: new Set(), seenNewActivities: {}, seenUpdatedActivities: {}, lastCheckedForBadgeableActivities: null, dateRangesForSurfaces: {} };
let items = [];
let items1 = [];
let closure_20 = (() => {
  class ActivityBucket {
    constructor() {
      tmp = outer1_7(this, ActivityBucket);
      this.items = [];
      this.cachedVisible = null;
      this.cachedHidden = null;
      return;
    }
  }
  let obj = {
    key: "upsert",
    value(arg0, arg1, arg2) {
      const self = this;
      let closure_0 = arg0;
      let closure_1 = arg1;
      const items = this.items;
      this.items = items.filter((applicationId) => {
        let tmp = applicationId.applicationId === closure_0;
        if (tmp) {
          tmp = applicationId.location.id === closure_1;
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
  let items = [obj, , , , ];
  obj = {
    key: "removeWhere",
    value(arg0) {
      let closure_0 = arg0;
      const items = this.items;
      this.items = items.filter((arg0) => !callback(arg0));
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
      const ContentClassificationEmbeddedActivityFilterExperiment = ActivityBucket(outer1_2[13]).ContentClassificationEmbeddedActivityFilterExperiment;
      if (ContentClassificationEmbeddedActivityFilterExperiment.getConfig({ location: "embedded_activity_store" }).enabled) {
        if ("all" !== arg0) {
          if ("visible" === arg0) {
            let cachedVisible = self.cachedVisible;
            if (cachedVisible == null) {
              const items = self.items;
              const found = items.filter((contentClassification) => !ActivityBucket(outer2_2[14]).isAgeRestrictedClassificationReference(contentClassification.contentClassification));
              self.cachedVisible = found;
              cachedVisible = found;
            }
            return cachedVisible;
          } else if ("hidden" === arg0) {
            let cachedHidden = self.cachedHidden;
            if (cachedHidden == null) {
              const items1 = self.items;
              const found1 = items1.filter((contentClassification) => ActivityBucket(outer2_2[14]).isAgeRestrictedClassificationReference(contentClassification.contentClassification));
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
})();
let map = new Map();
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
let c34;
const DISCONNECTED = ActivityPanelModes.DISCONNECTED;
let RESIZABLE = FocusedActivityLayouts.RESIZABLE;
const NORMAL = require("items3").ActivityPopoutWindowLayouts.NORMAL;
let tmp19 = ((PersistedStore) => {
  class EmbeddedActivitiesStoreClass {
    constructor() {
      self = this;
      tmp = outer1_7(this, EmbeddedActivitiesStoreClass);
      obj = outer1_5(EmbeddedActivitiesStoreClass);
      tmp2 = outer1_4;
      if (outer1_41()) {
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
  callback(EmbeddedActivitiesStoreClass, PersistedStore);
  let obj = {
    key: "initialize",
    value: function initialize(everLaunchedActivities) {
      this.waitFor(outer1_9, outer1_10, outer1_11, outer1_12);
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
        const outer1_17 = obj;
      }
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getState",
    value: function getState() {
      return outer1_17;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSelfEmbeddedActivityForChannel",
    value: function getSelfEmbeddedActivityForChannel(channelId) {
      let closure_0 = channelId;
      let tmp = null;
      if (null != channelId) {
        const _Array = Array;
        const found = Array.from(outer1_21.values()).find((location) => EmbeddedActivitiesStoreClass(outer2_2[15]).getEmbeddedActivityLocationChannelId(location.location) === closure_0);
        let tmp5 = null;
        if (null != found) {
          tmp5 = found;
        }
        tmp = tmp5;
        const arr = Array.from(outer1_21.values());
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSelfEmbeddedActivityForLocation",
    value: function getSelfEmbeddedActivityForLocation(connectedActivityLocation) {
      let closure_0 = connectedActivityLocation;
      let tmp = null;
      if (null != connectedActivityLocation) {
        const _Array = Array;
        const found = Array.from(outer1_21.values()).find((location) => location.location.id === id.id);
        let tmp5 = null;
        if (null != found) {
          tmp5 = found;
        }
        tmp = tmp5;
        const arr = Array.from(outer1_21.values());
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getSelfEmbeddedActivities",
    value: function getSelfEmbeddedActivities() {
      return outer1_21;
    }
  };
  items[5] = {
    key: "getEmbeddedActivitiesForGuild",
    value: function getEmbeddedActivitiesForGuild(closure_0) {
      const value = outer1_22.get(closure_0);
      let items;
      if (null != value) {
        items = value.getItems("visible");
      }
      if (null == items) {
        items = outer1_18;
      }
      return items;
    }
  };
  items[6] = {
    key: "getEmbeddedActivitiesForChannel",
    value: function getEmbeddedActivitiesForChannel(id) {
      const value = outer1_23.get(id);
      let items;
      if (null != value) {
        items = value.getItems("visible");
      }
      if (null == items) {
        items = outer1_18;
      }
      return items;
    }
  };
  items[7] = {
    key: "getEmbeddedActivitiesForLocation",
    value: function getEmbeddedActivitiesForLocation(id) {
      const value = outer1_24.get(id.id);
      let items;
      if (null != value) {
        items = value.getItems("visible");
      }
      if (null == items) {
        items = outer1_18;
      }
      return items;
    }
  };
  items[8] = {
    key: "getEmbeddedActivitiesForGuildIncludingHidden",
    value: function getEmbeddedActivitiesForGuildIncludingHidden(arg0) {
      const value = outer1_22.get(arg0);
      let items;
      if (null != value) {
        items = value.getItems("all");
      }
      if (null == items) {
        items = outer1_18;
      }
      return items;
    }
  };
  items[9] = {
    key: "getEmbeddedActivitiesForChannelIncludingHidden",
    value: function getEmbeddedActivitiesForChannelIncludingHidden(channelId) {
      const value = outer1_23.get(channelId);
      let items;
      if (null != value) {
        items = value.getItems("all");
      }
      if (null == items) {
        items = outer1_18;
      }
      return items;
    }
  };
  items[10] = {
    key: "getEmbeddedActivitiesForLocationIncludingHidden",
    value: function getEmbeddedActivitiesForLocationIncludingHidden(location) {
      const value = outer1_24.get(location.id);
      let items;
      if (null != value) {
        items = value.getItems("all");
      }
      if (null == items) {
        items = outer1_18;
      }
      return items;
    }
  };
  items[11] = {
    key: "getEmbeddedActivitiesByChannel",
    value: function getEmbeddedActivitiesByChannel() {
      const map = new Map();
      const item = outer1_23.forEach((getItems) => {
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
      const value = outer1_33.get(outer1_50(id, applicationId));
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
      return outer1_25.size > 0;
    }
  };
  items[14] = {
    key: "getShelfActivities",
    value: function getShelfActivities(embeddedActivityLocationGuildId) {
      let value = outer1_27.get(outer1_43(embeddedActivityLocationGuildId));
      if (null == value) {
        value = outer1_19;
      }
      return value;
    }
  };
  items[15] = {
    key: "getShelfFetchStatus",
    value: function getShelfFetchStatus(arg0) {
      return outer1_28.get(outer1_43(arg0));
    }
  };
  items[16] = {
    key: "shouldFetchShelf",
    value: function shouldFetchShelf(arg0) {
      let value = outer1_28.get(outer1_43(arg0));
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
      return outer1_29.get(applicationId);
    }
  };
  items[18] = {
    key: "getPipOrientationLockStateForApp",
    value: function getPipOrientationLockStateForApp(applicationId) {
      const self = this;
      let orientationLockStateForApp = outer1_30.get(applicationId);
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
      let orientationLockStateForApp = outer1_31.get(applicationId);
      if (null == orientationLockStateForApp) {
        orientationLockStateForApp = outer1_30.get(applicationId);
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
      return outer1_32.get(id);
    }
  };
  items[21] = {
    key: "getConnectedActivityChannelId",
    value: function getConnectedActivityChannelId() {
      if (null != outer1_34) {
        return EmbeddedActivitiesStoreClass(outer1_2[15]).getEmbeddedActivityLocationChannelId(outer1_34);
      }
    }
  };
  items[22] = {
    key: "getConnectedActivityLocation",
    value: function getConnectedActivityLocation() {
      return outer1_34;
    }
  };
  items[23] = {
    key: "getActivityPanelMode",
    value: function getActivityPanelMode() {
      return outer1_35;
    }
  };
  items[24] = {
    key: "getFocusedLayout",
    value: function getFocusedLayout() {
      return outer1_36;
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
      return outer1_26.has(arg0);
    }
  };
  items[27] = {
    key: "getEmbeddedActivityForUserId",
    value: function getEmbeddedActivityForUserId(author_id, id) {
      let iter5;
      if (undefined !== id) {
        const tmp3 = outer1_39(outer1_24);
        const iter = tmp3();
        let iter2 = iter;
        let tmp4;
        if (!iter.done) {
          do {
            let tmp5 = outer1_3;
            let tmp6 = outer1_3(iter2.value, 2);
            let first = tmp6[0];
            let tmp8 = outer1_39;
            let obj = tmp6[1];
            let tmp9 = outer1_39(obj.getItems("visible"));
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
      const everLaunchedActivities = outer1_17.everLaunchedActivities;
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
        return outer1_25.get(outer1_42(tmp3, applicationId));
      }
    }
  };
  items[30] = {
    key: "getLaunchStates",
    value: function getLaunchStates() {
      return outer1_25;
    }
  };
  items[31] = {
    key: "getActivityPopoutWindowLayout",
    value: function getActivityPopoutWindowLayout() {
      return outer1_37;
    }
  };
  return callback2(EmbeddedActivitiesStoreClass, items);
})(require("initialize").PersistedStore);
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
      surfacesToShowNewActivityIndicator.add(require(1881) /* PermissionOverwriteType */.EmbeddedActivitySurfaces.VOICE_LAUNCHER);
    }
    delete tmp.shouldShowNewActivityIndicator;
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
    delete tmp.surfacesToShowNewActivityIndicator;
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
      outer1_47(arg0);
    });
    const id = store.getId();
    function _loop(location) {
      let closure_0 = location;
      const embeddedActivitiesForLocationIncludingHidden = outer1_38.getEmbeddedActivitiesForLocationIncludingHidden(location.location);
      if (!embeddedActivitiesForLocationIncludingHidden.some((applicationId) => {
        let hasItem = applicationId.applicationId === _location.applicationId;
        if (hasItem) {
          hasItem = applicationId.launchId === _location.launchId;
        }
        if (hasItem) {
          const userIds = applicationId.userIds;
          hasItem = userIds.has(_location);
        }
        return hasItem;
      })) {
        outer1_48(location);
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
    let value = map2.get(channel.id);
    let items;
    if (null != value) {
      items = value.getItems("all");
    }
    map2.delete(channel.id);
    value = map1.get(getNormalizedGuildId(channel.guild_id));
    if (null != value) {
      value.removeWhere((location) => channel(outer1_2[15]).getEmbeddedActivityLocationChannelId(location.location) === channel.id);
    }
    const item = items.forEach((location) => {
      outer1_24.delete(location.location.id);
    });
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function handleEmbeddedActivityLaunchStart(channelId) {
    let commandOrigin;
    let componentId;
    let inviterUserId;
    let launchParams;
    ({ componentId, commandOrigin, launchParams, inviterUserId } = channelId);
    const result = map4.set(getLaunchStatesKey(channelId.channelId, channelId.applicationId), { isLaunching: true, componentId, inviterUserId, launchParams });
    if (commandOrigin === require(6755) /* ApplicationCommandSectionType */.CommandOrigin.APP_DMS_ENTRY_POINT_COMMAND_BUTTON) {
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
    if (null != _undefined) {
      id1 = _undefined.id;
    }
    if (id === id1) {
      _undefined = undefined;
    }
  },
  EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: function handleUpdatePopoutWindowLayout(layout) {
    layout = layout.layout;
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
    let tmp = getNormalizedGuildId(activities.guildId);
    const result = map5.set(tmp, activities);
    const timestamp = Date.now();
    (function handleShowingNewActivityIndicator(arg0) {
      let activities;
      let closure_0;
      ({ activities, now: closure_0 } = arg0);
      const tmp = outer1_1(outer1_2[22]);
      let closure_1 = tmp(outer1_0(outer1_2[23]).getOS());
      outer1_17.dateRangesForSurfaces = activities.reduce((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = tmp;
        if (null != arg1.client_platform_config[closure_1].label_from) {
          if (null != tmp.label_until) {
            const obj = {};
            ({ label_from: obj.fromDate, label_until: obj.untilDate } = tmp);
            let _Date = Date;
            let date = new Date(tmp.label_from);
            const time = date.getTime();
            const _Date2 = Date;
            let tmp3 = time > closure_0;
            if (!tmp3) {
              tmp3 = tmp16 < closure_0;
            }
            if (!tmp3) {
              const _Object = Object;
              const values = Object.values(outer2_0(outer2_2[24]).EmbeddedActivitySurfaces);
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
                  table[arg0] = obj;
                }
              });
            }
            return arg0;
          }
        }
        return arg0;
      }, {});
    })({ activities, now: timestamp });
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
    activityPanelMode = activityPanelMode.activityPanelMode;
  },
  EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function handleSetFocusedLayout(focusedActivityLayout) {
    focusedActivityLayout = focusedActivityLayout.focusedActivityLayout;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    if (null != c34) {
      const embeddedActivityLocationChannelId = require(3748) /* getEmbeddedActivityLocationChannelId */.getEmbeddedActivityLocationChannelId(c34);
      let tmp6 = null != embeddedActivityLocationChannelId && embeddedActivityLocationChannelId !== tmp;
      if (tmp6) {
        tmp6 = PIP === ActivityPanelModes.PANEL;
      }
      if (tmp6) {
        PIP = ActivityPanelModes.PIP;
      }
      const obj = require(3748) /* getEmbeddedActivityLocationChannelId */;
    }
  },
  POPOUT_WINDOW_CLOSE: function handlePopoutWindowClose(key) {
    if (key.key === constants2.ACTIVITY_POPOUT) {
      const PIP = ActivityPanelModes.PIP;
    }
  }
};
tmp19 = new tmp19(require("dispatcher"), obj);
let closure_38 = tmp19;
let result = set.fileFinishedImporting("modules/activities/EmbeddedActivitiesStore.tsx");

export default tmp19;
export const FEATURED_ACTIVITY_IDS = set;
export const NO_ACTIVITIES = items;
export const NO_ACTIVITY_CONFIGS = items1;
export const ACTIVITIES_GUILD_ID_SENTINEL_FOR_PRIVATE_CHANNELS = "0";
