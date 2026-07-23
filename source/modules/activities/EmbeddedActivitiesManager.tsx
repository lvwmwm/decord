// Module ID: 10508
// Function ID: 82015
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 5, 4143, 1352, 1194, 1348, 4202, 1906, 1849, 10509, 1347, 653, 8183, 477, 507, 3748, 10510, 10511, 675, 10487, 10513, 10514, 4323, 491, 1832, 7925, 10438, 10481, 10515, 5465, 10517, 1212, 10518, 10486, 10519, 10827, 1881, 5484, 1207, 686, 4530, 2]
// Exports: getActiveAnalyticsSessionIDs, trackFrameSessionEnd, trackFrameSessionStart

// Module 10508 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_5 from "ME";
import set from "set";
import closure_7 from "_isNativeReflectConstruct";
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_9 from "_isNativeReflectConstruct";
import { GUILD_VOCAL_CHANNEL_TYPES } from "_callSuper";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";
import tmp3 from "LifecycleManager";

let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
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
function getShelfItemTrackingProperties(activity) {
  const obj = {};
  let release_phase;
  if (null != activity) {
    activity = activity.activity;
    if (null != activity) {
      const obj2 = require(477) /* set */;
      release_phase = activity.client_platform_config[importDefault(8183)(undefined, obj2.getOS(obj2))].release_phase;
      const tmp4 = importDefault(8183);
    }
  }
  obj.releasePhase = release_phase;
  return obj;
}
function setAwaitingAnalyticsContext(arg0) {
  let applicationId;
  let locations;
  let nonce;
  let source;
  ({ locations, source } = arg0);
  let flag = null != locations;
  ({ applicationId, nonce } = arg0);
  if (!flag) {
    flag = null != source;
  }
  if (flag) {
    const obj = { nonce, locations, source };
    closure_24[applicationId] = obj;
    flag = true;
  }
  return flag;
}
function clearAwaitingAnalyticsContextImmediate(arg0, arg1) {
  if (null != dependencyMap2[arg0]) {
    if (tmp3.nonce === arg1) {
      delete tmp[tmp2];
      return tmp3;
    }
  }
}
function clearAwaitingAnalyticsContextAsync(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const timerId = setTimeout(() => outer1_32(closure_0, closure_1), 2000);
}
function handleActivityLaunchStart(applicationId) {
  const source = applicationId.source;
  const obj = { applicationId: applicationId.applicationId, nonce: applicationId.nonce, locations: applicationId.analyticsLocations };
  let tmp2;
  if (null != source) {
    tmp2 = source;
  }
  obj.source = tmp2;
  setAwaitingAnalyticsContext(obj);
}
function handleActivityClose() {
  return _handleActivityClose(...arguments);
}
function _handleActivityClose() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  return obj(...arguments);
}
function handleOpenEmbeddedActivity(applicationId) {
  let _location;
  let embeddedActivity;
  let inviterUserId;
  let isStart;
  let participants;
  applicationId = applicationId.applicationId;
  ({ isStart, participants, embeddedActivity, location: _location, inviterUserId } = applicationId);
  let obj = applicationId(10487);
  obj.leaveCurrentFrame();
  let obj1 = applicationId(10513);
  if (obj1.tryLaunchAsFrame({ applicationId })) {
    obj = { isStart, inviterUserId };
    const obj15 = applicationId(10514);
    obj.channelId = applicationId(3748).getEmbeddedActivityLocationChannelId(_location);
    const obj17 = applicationId(3748);
    obj.guildId = applicationId(3748).getEmbeddedActivityLocationGuildId(_location);
    obj.locationKind = _location.kind;
    ({ launchId: obj16.launchId, compositeInstanceId: obj16.compositeInstanceId } = embeddedActivity);
    let num12 = 1;
    if ("location" in embeddedActivity) {
      num12 = 2;
    }
    obj.activitiesInfraVersion = num12;
    const result = obj15.stashPendingFrameLaunch(applicationId, obj);
    const obj18 = applicationId(3748);
  } else {
    const importDefault = id.getId();
    const found = participants.find((userId) => userId.userId === closure_1);
    let obj2 = applicationId(3748);
    const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(_location);
    let obj3 = applicationId(3748);
    const embeddedActivityLocationGuildId = obj3.getEmbeddedActivityLocationGuildId(_location);
    const channel = store.getChannel(embeddedActivityLocationChannelId);
    let isFirstActivityInChannel = isStart;
    if (isStart) {
      isFirstActivityInChannel = null != channel;
    }
    if (isFirstActivityInChannel) {
      isFirstActivityInChannel = channel.isPrivate();
    }
    if (isFirstActivityInChannel) {
      isFirstActivityInChannel = applicationId.isFirstActivityInChannel;
    }
    if (isFirstActivityInChannel) {
      isFirstActivityInChannel = null == found;
    }
    if (isFirstActivityInChannel) {
      const participant = importDefault(4323).selectParticipant(channel.id, null);
      const obj6 = importDefault(4323);
    }
    if (null != found) {
      const mediaSessionId = store2.getMediaSessionId();
      const compositeInstanceId = embeddedActivity.compositeInstanceId;
      let tmp17 = null == mediaSessionId;
      if (tmp17) {
        let isVocalResult;
        if (null != channel) {
          isVocalResult = channel.isVocal();
        }
        tmp17 = true === isVocalResult;
      }
      if (tmp17) {
        let isPrivateResult;
        if (null != channel) {
          isPrivateResult = channel.isPrivate();
        }
        tmp17 = false === isPrivateResult;
      }
      if (null != compositeInstanceId) {
        if (!tmp17) {
          const v4Result = applicationId(491).v4();
          let num5 = 1;
          if ("location" in embeddedActivity) {
            num5 = 2;
          }
          const currentUser = authStore2.getCurrentUser();
          if (null != currentUser) {
            const shelfActivities = store4.getShelfActivities(embeddedActivityLocationGuildId);
            const shelfOrder = store3.getState().shelfOrder;
            obj = { applicationId, activityConfigs: shelfActivities };
            const tmp65 = importDefault(10510)(obj);
            const sum = 1 + shelfOrder.findIndex((arg0) => arg0 === applicationId);
            const rawThermalState = importDefault(10511).getRawThermalState();
            if (null != mediaSessionId) {
              const items = [mediaSessionId];
              let items1 = items;
            } else {
              items1 = [];
            }
            obj1 = { activitySessionId: compositeInstanceId, activityUserSessionId: v4Result, launchId: embeddedActivity.launchId, mediaSessionIds: items1, activitiesInfraVersion: num5 };
            closure_23[applicationId] = obj1;
            const obj20 = importDefault(10511);
            let isNullOrEmptyResult = applicationId(1832).isNullOrEmpty(found.nonce);
            if (!isNullOrEmptyResult) {
              let nonce;
              if (null != tmp26) {
                nonce = tmp26.nonce;
              }
              isNullOrEmptyResult = found.nonce === nonce;
            }
            const obj9 = applicationId(1832);
            obj2 = { channel_id: embeddedActivityLocationChannelId, guild_id: embeddedActivityLocationGuildId, media_session_id: items1[0], activity_session_id: compositeInstanceId, application_id: applicationId };
            let locations;
            if (null != dependencyMap2[applicationId]) {
              locations = tmp26.locations;
            }
            obj2.location_stack = locations;
            obj2.user_premium_tier = currentUser.premiumType;
            obj2.raw_thermal_state = rawThermalState;
            let userParticipantCount = null;
            if (null != channel) {
              userParticipantCount = authStore.getUserParticipantCount(channel.id);
            }
            obj2.n_participants = userParticipantCount;
            obj2.is_activity_start = isStart;
            obj2.release_phase = getShelfItemTrackingProperties(tmp65).releasePhase;
            let shelf_rank;
            if (null != tmp65) {
              const activity = tmp65.activity;
              if (null != activity) {
                shelf_rank = activity.shelf_rank;
              }
            }
            obj2.shelf_rank = shelf_rank;
            let tmp39 = null;
            if (sum > 0) {
              tmp39 = sum;
            }
            obj2.shelf_sorted_rank = tmp39;
            obj2.activity_user_session_id = v4Result;
            let type;
            if (null != channel) {
              type = channel.type;
            }
            obj2.channel_type = type;
            let source;
            if (null != dependencyMap2[applicationId]) {
              source = tmp26.source;
            }
            obj2.source = source;
            let commandContextType = null;
            if (null != channel) {
              commandContextType = applicationId(7925).computeCommandContextType(channel, applicationId);
              const obj12 = applicationId(7925);
            }
            obj2.command_context_type = commandContextType;
            obj2.invite_inviter_id = inviterUserId;
            let interactionId;
            if (null != dependencyMap2[applicationId]) {
              interactionId = tmp26.interactionId;
            }
            obj2.interaction_id = interactionId;
            obj2.embedded_activity_location_kind = _location.kind;
            importDefault(675).track(constants.ACTIVITY_SESSION_JOINED, obj2);
            const obj10 = importDefault(675);
            obj3 = {};
            let locations1;
            if (null != dependencyMap2[applicationId]) {
              locations1 = tmp26.locations;
            }
            obj3.location_stack = locations1;
            obj3.channel_id = embeddedActivityLocationChannelId;
            let type1;
            if (null != channel) {
              type1 = channel.type;
            }
            obj3.channel_type = type1;
            obj3.guild_id = embeddedActivityLocationGuildId;
            obj3.application_id = applicationId;
            obj3.instance_id = embeddedActivity.launchId;
            obj3.initial_media_session_id = items1[0];
            obj3.activity_user_session_id = v4Result;
            obj3.raw_thermal_state = rawThermalState;
            obj3.is_activity_start = isStart;
            let shelf_rank1;
            if (null != tmp65) {
              const activity2 = tmp65.activity;
              if (null != activity2) {
                shelf_rank1 = activity2.shelf_rank;
              }
            }
            obj3.shelf_rank = shelf_rank1;
            let tmp53 = null;
            if (sum > 0) {
              tmp53 = sum;
            }
            obj3.shelf_sorted_rank = tmp53;
            obj3.activities_infra_version = num5;
            obj3.embedded_activity_location_kind = _location.kind;
            importDefault(675).track(constants.ACTIVITY_IFRAME_MOUNT, obj3);
            const obj13 = importDefault(675);
          }
          const obj7 = applicationId(491);
        }
      }
    }
  }
}
({ AnalyticEvents: closure_18, RPCCloseCodes: closure_19, Endpoints: closure_20, RTCConnectionStates: closure_21, ComponentActions: closure_22 } = ME);
let closure_23 = {};
let closure_24 = {};
let closure_25 = {};
let c26;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/activities/EmbeddedActivitiesManager.tsx");

export default tmp3;
export const trackFrameSessionStart = function trackFrameSessionStart(applicationId) {
  let activitiesInfraVersion;
  let channelId;
  let compositeInstanceId;
  let guildId;
  let isStart;
  let launchId;
  let locationKind;
  const _require = applicationId;
  let obj = _require(10514);
  const result = obj.consumePendingFrameLaunch(applicationId);
  if (null != result) {
    ({ isStart, channelId, guildId, locationKind, launchId, compositeInstanceId, activitiesInfraVersion } = result);
    const currentUser = authStore2.getCurrentUser();
    if (null != currentUser) {
      let channel = null;
      if (null != channelId) {
        channel = store.getChannel(channelId);
      }
      const mediaSessionId = store2.getMediaSessionId();
      if (null != mediaSessionId) {
        const items = [mediaSessionId];
        let items1 = items;
      } else {
        items1 = [];
      }
      let obj1 = _require(491);
      const v4Result = obj1.v4();
      obj = { activitySessionId: compositeInstanceId, activityUserSessionId: v4Result, launchId, mediaSessionIds: items1, activitiesInfraVersion };
      const _Date = Date;
      obj.connectedSince = Date.now();
      obj.frameChannelId = channelId;
      obj.frameGuildId = guildId;
      obj.frameLocationKind = locationKind;
      closure_23[applicationId] = obj;
      const shelfActivities = store4.getShelfActivities(guildId);
      const shelfOrder = store3.getState().shelfOrder;
      obj = { applicationId, activityConfigs: shelfActivities };
      const tmp15 = importDefault(10510)(obj);
      const sum = 1 + shelfOrder.findIndex((arg0) => arg0 === closure_0);
      const rawThermalState = importDefault(10511).getRawThermalState();
      const obj5 = importDefault(10511);
      obj1 = { channel_id: channelId, guild_id: guildId, media_session_id: items1[0], activity_session_id: compositeInstanceId, application_id: applicationId };
      let locations;
      if (null != dependencyMap2[applicationId]) {
        locations = tmp20.locations;
      }
      obj1.location_stack = locations;
      obj1.user_premium_tier = currentUser.premiumType;
      obj1.raw_thermal_state = rawThermalState;
      let userParticipantCount = null;
      if (null != channel) {
        userParticipantCount = authStore.getUserParticipantCount(channel.id);
      }
      obj1.n_participants = userParticipantCount;
      obj1.is_activity_start = isStart;
      obj1.release_phase = getShelfItemTrackingProperties(tmp15).releasePhase;
      let shelf_rank;
      if (null != tmp15) {
        const activity = tmp15.activity;
        if (null != activity) {
          shelf_rank = activity.shelf_rank;
        }
      }
      obj1.shelf_rank = shelf_rank;
      let tmp27 = null;
      if (sum > 0) {
        tmp27 = sum;
      }
      obj1.shelf_sorted_rank = tmp27;
      obj1.activity_user_session_id = v4Result;
      let type;
      if (null != channel) {
        type = channel.type;
      }
      obj1.channel_type = type;
      let source;
      if (null != dependencyMap2[applicationId]) {
        source = tmp20.source;
      }
      obj1.source = source;
      let commandContextType = null;
      if (null != channel) {
        commandContextType = _require(7925).computeCommandContextType(channel, applicationId);
        const obj8 = _require(7925);
      }
      obj1.command_context_type = commandContextType;
      obj1.invite_inviter_id = result.inviterUserId;
      let interactionId;
      if (null != dependencyMap2[applicationId]) {
        interactionId = tmp20.interactionId;
      }
      obj1.interaction_id = interactionId;
      obj1.embedded_activity_location_kind = locationKind;
      importDefault(675).track(constants.ACTIVITY_SESSION_JOINED, obj1);
      const obj6 = importDefault(675);
      const obj2 = {};
      let locations1;
      if (null != dependencyMap2[applicationId]) {
        locations1 = tmp20.locations;
      }
      obj2.location_stack = locations1;
      obj2.channel_id = channelId;
      let type1;
      if (null != channel) {
        type1 = channel.type;
      }
      obj2.channel_type = type1;
      obj2.guild_id = guildId;
      obj2.application_id = applicationId;
      obj2.instance_id = launchId;
      obj2.initial_media_session_id = items1[0];
      obj2.activity_user_session_id = v4Result;
      obj2.raw_thermal_state = rawThermalState;
      obj2.is_activity_start = isStart;
      let shelf_rank1;
      if (null != tmp15) {
        const activity2 = tmp15.activity;
        if (null != activity2) {
          shelf_rank1 = activity2.shelf_rank;
        }
      }
      obj2.shelf_rank = shelf_rank1;
      let tmp41 = null;
      if (sum > 0) {
        tmp41 = sum;
      }
      obj2.shelf_sorted_rank = tmp41;
      obj2.activities_infra_version = activitiesInfraVersion;
      obj2.embedded_activity_location_kind = locationKind;
      importDefault(675).track(constants.ACTIVITY_IFRAME_MOUNT, obj2);
      const obj9 = importDefault(675);
    }
  }
};
export const getActiveAnalyticsSessionIDs = function getActiveAnalyticsSessionIDs(id) {
  return dependencyMap[id];
};
export const trackFrameSessionEnd = function trackFrameSessionEnd(applicationId) {
  const currentUser = authStore2.getCurrentUser();
  if (null != dependencyMap[applicationId]) {
    if (null != currentUser) {
      const frameChannelId = tmp3.frameChannelId;
      let tmp5 = null;
      if (null != frameChannelId) {
        tmp5 = frameChannelId;
      }
      const frameGuildId = tmp3.frameGuildId;
      let tmp6 = null;
      if (null != frameGuildId) {
        tmp6 = frameGuildId;
      }
      let channel = null;
      if (null != tmp5) {
        channel = store.getChannel(tmp5);
      }
      const shelfActivities = store4.getShelfActivities(tmp6);
      let obj = { applicationId, activityConfigs: shelfActivities };
      const tmp13 = importDefault(10510)(obj);
      const rawThermalState = importDefault(10511).getRawThermalState();
      let diff = null;
      if (null != tmp3.connectedSince) {
        const _Date = Date;
        diff = Date.now() - tmp3.connectedSince;
      }
      const obj2 = importDefault(10511);
      obj = { channel_id: tmp5, guild_id: tmp6, media_session_id: tmp3.mediaSessionIds[0], activity_session_id: tmp3.activitySessionId, application_id: applicationId, duration_ms: diff, user_premium_tier: currentUser.premiumType, raw_thermal_state: rawThermalState, release_phase: getShelfItemTrackingProperties(tmp13).releasePhase };
      let shelf_rank;
      if (null != tmp13) {
        const activity = tmp13.activity;
        if (null != activity) {
          shelf_rank = activity.shelf_rank;
        }
      }
      obj.shelf_rank = shelf_rank;
      obj.activity_user_session_id = tmp3.activityUserSessionId;
      let type;
      if (null != channel) {
        type = channel.type;
      }
      obj.channel_type = type;
      ({ mediaSessionIds: obj4.media_session_ids, frameLocationKind: obj4.embedded_activity_location_kind } = tmp3);
      importDefault(675).track(constants.ACTIVITY_SESSION_LEFT, obj);
      const obj3 = importDefault(675);
      obj = { channel_id: tmp5, guild_id: tmp6, application_id: applicationId };
      let tmp27;
      if (null != tmp3.launchId) {
        const items = [tmp3.launchId];
        tmp27 = items;
      }
      obj.instance_ids = tmp27;
      ({ mediaSessionIds: obj6.media_session_ids, activityUserSessionId: obj6.activity_user_session_id } = tmp3);
      obj.raw_thermal_state = rawThermalState;
      obj.duration_ms = diff;
      obj.embedded_activity_location_kind = tmp3.frameLocationKind;
      importDefault(675).track(constants.ACTIVITY_IFRAME_UNMOUNT, obj);
      delete tmp[tmp2];
      const obj5 = importDefault(675);
    }
  }
};
