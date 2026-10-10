// Module ID: 14704
// Function ID: 14705
// Name: ActivitySessionAnalytics
// Dependencies: [5, 5440, 6036, 7390, 2065, 5110, 1390, 14705, 2064, 1085, 11716, 1382, 10856, 9232, 12967, 5729, 10857, 1279, 10869, 5296, 1265, 9252, 5734, 10814, 2]
// Exports: getActiveAnalyticsSessionIDs, getShelfItemTrackingProperties, trackFrameSessionEnd, trackFrameSessionStart, trackFrameSessionStartFailed

// Module 14704 (ActivitySessionAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import v1 from "v1" /* 1279 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ThermalUtilsDefault from "ThermalUtils" /* 5296 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5729 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 9232 */;
import CommandPermissionContext from "CommandPermissionContext" /* 9252 */;
import activityLaunchErrorUtils from "activityLaunchErrorUtils" /* 10814 */;
import pendingFrameLaunch from "pendingFrameLaunch" /* 10856 */;
import getShelfItemDataDefault from "getShelfItemData" /* 10869 */;
import getPlatformDefault from "getPlatform" /* 11716 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6036 */;
import QuestStore from "QuestStore" /* 7390 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
import UserStore from "UserStore" /* 1390 */;
import ActivityShelfStore from "ActivityShelfStore" /* 14705 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let embedded_activity_location_kind, location_stack;

let closure_12;
let map1;
let tmp2;
const QuestMatchingUtils = tmp2(12967);
const f118249 = (userStatus) => {
  userStatus = userStatus.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  return null != enrolledAt;
};
function resolveFrameLaunchContext(applicationId, arg1) {
  let analyticsLocations;
  let interactionId;
  let source;
  let result = arg1;
  obj = pendingFrameLaunch;
  if (arg1 == null) {
    result = obj.consumePendingFrameLaunch(applicationId);
  }
  if (null != result) {
    obj2 = { analyticsLocations, source, interactionId };
    const merged = Object.assign(result);
    analyticsLocations = result.analyticsLocations;
    if (analyticsLocations == null) {
      let locations;
      if (obj2[applicationId] != null) {
        locations = tmp3.locations;
      }
      analyticsLocations = locations;
    }
    source = result.source;
    if (source == null) {
      let source1;
      if (obj2[applicationId] != null) {
        source1 = tmp3.source;
      }
      source = source1;
    }
    interactionId = result.interactionId;
    if (interactionId == null) {
      let interactionId1;
      if (obj2[applicationId] != null) {
        interactionId1 = tmp3.interactionId;
      }
      interactionId = interactionId1;
    }
    return obj2;
  }
}
function maybeEmitFrameSessionMetricsForQuest(applicationId, name) {
  const application = ApplicationStore.getApplication(applicationId);
  obj = ApplicationFlagUtils;
  if (obj.hasApplicationFlag(application, map1.QUEST)) {
    const tmp2Result = QuestMatchingUtils;
    const eligibleQuestsForApplicationId = tmp2Result.getEligibleQuestsForApplicationId(QuestStore.quests, applicationId, true);
    if (eligibleQuestsForApplicationId.length > 0) {
      const _HermesInternal2 = HermesInternal;
      const items = ["application_id:" + applicationId];
      const found = eligibleQuestsForApplicationId.find(f118249);
      let id;
      if (found != null) {
        id = found.id;
      }
      if (null != id) {
        const _HermesInternal = HermesInternal;
        items.push("quest_id:" + id);
      }
      obj2 = { name, tags: items };
      const obj3 = MonitoringAgentDefault;
      obj3.increment(obj2);
    }
  }
}
let obj = function _trackFrameSessionStartFailed() {
  obj = _asyncToGenerator(async (application_id, is_activity_start, arg2) => {
    let closure_2 = arg2;
    let c6 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2) => {
      let c1;
      let c3;
      let c4;
      let c5;
      let c6;
      let channelId;
      let obj4;
      let type;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          let closure_8;
          c7 = 2;
          if (0 === source) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              let closure_5 = tmp;
              let closure_4 = tmp2;
              is_activity_start = undefined;
              channelId = undefined;
              c3 = undefined;
              embedded_activity_location_kind = undefined;
              location_stack = undefined;
              source = undefined;
              channel = undefined;
              closure_8 = undefined;
              const tmp51 = resolveFrameLaunchContext(application_id, closure_2);
              const tmp47 = application_id;
              const tmp48 = closure_1;
              if (null != tmp51) {
                ({ isStart: c1, channelId } = tmp51);
                ({ guildId: c3, locationKind: c4, analyticsLocations: c5, source: c6 } = tmp51);
                channel = null;
                if (null != channelId) {
                  channel = channel.getChannel(channelId);
                }
                source = 1;
                c7 = 1;
                const obj6 = { value: obj4.getActivityLaunchErrorInfo(tmp48, tmp47), done: false };
                obj4 = activityLaunchErrorUtils;
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            closure_8 = value;
            const obj8 = { channel_id: channelId, guild_id: guildId, application_id, raw_thermal_state: obj2.getRawThermalState(), is_activity_start, channel_type: type, location_stack, error_type: closure_8.errorType, error_status: closure_8.errorStatus, error_code: closure_8.errorCode, source, embedded_activity_location_kind };
            guildId = c3;
            const track = closure_133_1(closure_133_2[20]).track;
            const ACTIVITY_SESSION_JOIN_FAILED = closure_133_12.ACTIVITY_SESSION_JOIN_FAILED;
            closure_133_1(closure_133_2[20]);
            if (c3 == null) {
              guildId = undefined;
              obj = channel;
              if (channel != null) {
                guildId = obj.getGuildId();
              }
            }
            type = undefined;
            obj2 = closure_133_1(closure_133_2[19]);
            if (channel != null) {
              type = channel.type;
            }
            track(ACTIVITY_SESSION_JOIN_FAILED, obj8);
            closure_133_17(application_id, closure_133_0(closure_133_2[22]).MetricEvents.FRAME_SESSION_JOIN_FAILED);
          }
          c7 = 3;
          return { value: "IconComponent", done: "+51" };
        } catch (tmp34) {
          c7 = 3;
          throw tmp34;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AnalyticEvents: closure_12, ApplicationFlags: map1 } = Constants);
obj = {};
let obj2 = {};
let result = size.fileFinishedImporting("modules/activities/ActivitySessionAnalytics.tsx");

export const activeSessionIds = obj;
export const awaitingAnalyticsContext = obj2;
export const getShelfItemTrackingProperties = function getShelfItemTrackingProperties(activity) {
  let releasePhase;
  if (activity != null) {
    activity = activity.activity;
    if (activity != null) {
      const client_platform_config = activity.client_platform_config;
      const tmp4 = getPlatformDefault;
      obj = PlatformUtils;
      releasePhase = client_platform_config[tmp4(undefined, obj.getOS(obj))].release_phase;
    }
  }
  return { releasePhase };
};
export const trackFrameSessionStart = function trackFrameSessionStart(applicationId, analyticsContext) {
  let activitiesInfraVersion;
  let analyticsLocations;
  let analyticsLocations2;
  let channelId;
  let commandContextType;
  let compositeInstanceId;
  let interactionId;
  let interactionId2;
  let inviterUserId;
  let isStart;
  let launchId;
  let shelf_rank;
  let shelf_rank1;
  let source;
  let source2;
  let tmp38;
  let tmp52;
  let type;
  let type1;
  let userParticipantCount;
  let closure_0 = applicationId;
  let result = analyticsContext;
  obj = pendingFrameLaunch;
  if (analyticsContext == null) {
    result = obj.consumePendingFrameLaunch(applicationId);
  }
  let tmp4;
  if (null != result) {
    obj2 = { analyticsLocations, source, interactionId };
    const merged = Object.assign(result);
    analyticsLocations = result.analyticsLocations;
    if (analyticsLocations == null) {
      let locations;
      if (obj2[applicationId] != null) {
        locations = tmp6.locations;
      }
      analyticsLocations = locations;
    }
    source = result.source;
    if (source == null) {
      let source1;
      if (obj2[applicationId] != null) {
        source1 = tmp6.source;
      }
      source = source1;
    }
    interactionId = result.interactionId;
    if (interactionId == null) {
      let interactionId1;
      if (obj2[applicationId] != null) {
        interactionId1 = tmp6.interactionId;
      }
      interactionId = interactionId1;
    }
    tmp4 = obj2;
  }
  if (null != tmp4) {
    ({ isStart, channelId, launchId, compositeInstanceId, activitiesInfraVersion, analyticsLocations: analyticsLocations2 } = tmp4);
    ({ inviterUserId, source: source2, interactionId: interactionId2 } = tmp4);
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      let items1;
      let channel = null;
      if (null != channelId) {
        channel = ChannelStore.getChannel(channelId);
      }
      let guildId = tmp4.guildId;
      if (guildId == null) {
        let guildId1;
        if (channel != null) {
          guildId1 = channel.getGuildId();
        }
        guildId = guildId1;
      }
      if (guildId == null) {
        guildId = null;
      }
      let locationKind = tmp4.locationKind;
      if (locationKind == null) {
        let tmp17;
        if (null != channel) {
          let PRIVATE_CHANNEL;
          if (null != guildId) {
            PRIVATE_CHANNEL = tmp2(10857).EmbeddedActivityLocationKind.GUILD_CHANNEL;
          } else {
            PRIVATE_CHANNEL = tmp2(10857).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
          }
          tmp17 = PRIVATE_CHANNEL;
        }
        locationKind = tmp17;
      }
      const mediaSessionId = RTCConnectionStore.getMediaSessionId();
      if (null != mediaSessionId) {
        const items = [mediaSessionId];
        items1 = items;
      } else {
        items1 = [];
      }
      const tmp2Result = v1;
      const v4Result = tmp2Result.v4();
      const _Date = Date;
      obj[applicationId] = { activitySessionId: compositeInstanceId, activityUserSessionId: v4Result, launchId, mediaSessionIds: items1, activitiesInfraVersion, connectedSince: Date.now(), frameChannelId: channelId, frameGuildId: guildId, frameLocationKind: locationKind };
      const obj3 = { activitySessionId: compositeInstanceId, activityUserSessionId: v4Result, launchId, mediaSessionIds: items1, activitiesInfraVersion, connectedSince: Date.now(), frameChannelId: channelId, frameGuildId: guildId, frameLocationKind: locationKind };
      const shelfActivities = EmbeddedActivitiesStore.getShelfActivities(guildId);
      const shelfOrder = ActivityShelfStore.getState().shelfOrder;
      const obj4 = { applicationId, activityConfigs: shelfActivities };
      const tmp27 = getShelfItemDataDefault(obj4);
      const sum = 1 + shelfOrder.findIndex((item) => item === closure_0);
      let release_phase;
      if (tmp27 != null) {
        const activity = tmp27.activity;
        if (activity != null) {
          const client_platform_config = activity.client_platform_config;
          const tmp26Result = getPlatformDefault;
          const tmp2Result5 = PlatformUtils;
          release_phase = client_platform_config[tmp26Result(undefined, tmp2Result5.getOS(tmp2Result5))].release_phase;
        }
      }
      const tmp26Result5 = ThermalUtilsDefault;
      const rawThermalState = tmp26Result5.getRawThermalState();
      const obj5 = { channel_id: channelId, guild_id: guildId, media_session_id: items1[0], activity_session_id: compositeInstanceId, application_id: applicationId, location_stack: analyticsLocations2, user_premium_tier: currentUser.premiumType, raw_thermal_state: rawThermalState, n_participants: userParticipantCount, is_activity_start: isStart, release_phase, shelf_rank, shelf_sorted_rank: tmp38, activity_user_session_id: v4Result, channel_type: type, source: source2, command_context_type: commandContextType, invite_inviter_id: inviterUserId, interaction_id: interactionId2, embedded_activity_location_kind: locationKind };
      userParticipantCount = null;
      const track = AnalyticsUtilsDefault.track;
      const ACTIVITY_SESSION_JOINED = constants.ACTIVITY_SESSION_JOINED;
      AnalyticsUtilsDefault;
      const tmp33 = constants;
      if (null != channel) {
        userParticipantCount = ChannelRTCStore.getUserParticipantCount(channel.id);
      }
      shelf_rank = undefined;
      if (tmp27 != null) {
        const activity2 = tmp27.activity;
        if (activity2 != null) {
          shelf_rank = activity2.shelf_rank;
        }
      }
      tmp38 = null;
      if (sum > 0) {
        tmp38 = sum;
      }
      type = undefined;
      if (channel != null) {
        type = channel.type;
      }
      commandContextType = null;
      if (null != channel) {
        const tmp2Result6 = CommandPermissionContext;
        commandContextType = tmp2Result6.computeCommandContextType(channel, applicationId);
      }
      track(ACTIVITY_SESSION_JOINED, obj5);
      const FRAME_SESSION_JOIN = tmp2(5734).MetricEvents.FRAME_SESSION_JOIN;
      const application = ApplicationStore.getApplication(applicationId);
      const tmp2Result7 = ApplicationFlagUtils;
      if (tmp2Result7.hasApplicationFlag(application, map1.QUEST)) {
        const tmp2Result8 = QuestMatchingUtils;
        const eligibleQuestsForApplicationId = tmp2Result8.getEligibleQuestsForApplicationId(QuestStore.quests, applicationId, true);
        if (eligibleQuestsForApplicationId.length > 0) {
          const _HermesInternal2 = HermesInternal;
          const items2 = ["application_id:" + applicationId];
          const found = eligibleQuestsForApplicationId.find(f118249);
          let id;
          if (found != null) {
            id = found.id;
          }
          if (null != id) {
            const _HermesInternal = HermesInternal;
            items2.push("quest_id:" + id);
          }
          const obj6 = { name: FRAME_SESSION_JOIN, tags: items2 };
          const tmp26Result7 = MonitoringAgentDefault;
          tmp26Result7.increment(obj6);
        }
      }
      const obj7 = { location_stack: analyticsLocations2, channel_id: channelId, channel_type: type1, guild_id: guildId, application_id: applicationId, instance_id: launchId, initial_media_session_id: items1[0], activity_user_session_id: v4Result, raw_thermal_state: rawThermalState, is_activity_start: isStart, shelf_rank: shelf_rank1, shelf_sorted_rank: tmp52, activities_infra_version: activitiesInfraVersion, embedded_activity_location_kind: locationKind };
      type1 = undefined;
      const track2 = AnalyticsUtilsDefault.track;
      const ACTIVITY_IFRAME_MOUNT = tmp33.ACTIVITY_IFRAME_MOUNT;
      AnalyticsUtilsDefault;
      if (channel != null) {
        type1 = channel.type;
      }
      shelf_rank1 = undefined;
      if (tmp27 != null) {
        const activity3 = tmp27.activity;
        if (activity3 != null) {
          shelf_rank1 = activity3.shelf_rank;
        }
      }
      tmp52 = null;
      if (sum > 0) {
        tmp52 = sum;
      }
      track2(ACTIVITY_IFRAME_MOUNT, obj7);
    }
  }
};
export const getActiveAnalyticsSessionIDs = function getActiveAnalyticsSessionIDs(id) {
  return obj[id];
};
export const trackFrameSessionStartFailed = function trackFrameSessionStartFailed() {
  return obj(...arguments);
};
export const trackFrameSessionEnd = function trackFrameSessionEnd(applicationId) {
  let shelf_rank;
  let tmp26;
  let type;
  const currentUser = UserStore.getCurrentUser();
  const tmp = applicationId;
  const tmp2 = obj;
  if (null != obj[applicationId]) {
    if (null != currentUser) {
      let frameChannelId = tmp3.frameChannelId;
      if (frameChannelId == null) {
        frameChannelId = null;
      }
      let frameGuildId = tmp3.frameGuildId;
      if (frameGuildId == null) {
        frameGuildId = null;
      }
      let channel = null;
      if (null != frameChannelId) {
        channel = ChannelStore.getChannel(frameChannelId);
      }
      const shelfActivities = EmbeddedActivitiesStore.getShelfActivities(frameGuildId);
      obj = { applicationId, activityConfigs: shelfActivities };
      const tmp13 = getShelfItemDataDefault(obj);
      let release_phase;
      if (tmp13 != null) {
        const activity = tmp13.activity;
        if (activity != null) {
          const client_platform_config = activity.client_platform_config;
          const tmp11Result = getPlatformDefault;
          obj2 = PlatformUtils;
          release_phase = client_platform_config[tmp11Result(undefined, obj2.getOS(obj2))].release_phase;
        }
      }
      const tmp11Result4 = ThermalUtilsDefault;
      const rawThermalState = tmp11Result4.getRawThermalState();
      let diff = null;
      if (null != obj[applicationId].connectedSince) {
        const _Date = Date;
        diff = Date.now() - tmp3.connectedSince;
      }
      const obj3 = { channel_id: frameChannelId, guild_id: frameGuildId, media_session_id: obj[applicationId].mediaSessionIds[0], activity_session_id: obj[applicationId].activitySessionId, application_id: applicationId, duration_ms: diff, user_premium_tier: currentUser.premiumType, raw_thermal_state: rawThermalState, release_phase, shelf_rank, activity_user_session_id: obj[applicationId].activityUserSessionId, channel_type: type, media_session_ids: null, embedded_activity_location_kind: null };
      shelf_rank = undefined;
      const track = AnalyticsUtilsDefault.track;
      const ACTIVITY_SESSION_LEFT = constants.ACTIVITY_SESSION_LEFT;
      AnalyticsUtilsDefault;
      const tmp21 = constants;
      if (tmp13 != null) {
        const activity2 = tmp13.activity;
        if (activity2 != null) {
          shelf_rank = activity2.shelf_rank;
        }
      }
      type = undefined;
      if (channel != null) {
        type = channel.type;
      }
      ({ mediaSessionIds: obj4.media_session_ids, frameLocationKind: obj4.embedded_activity_location_kind } = obj[applicationId]);
      track(ACTIVITY_SESSION_LEFT, obj3);
      const obj7 = { channel_id: frameChannelId, guild_id: frameGuildId, application_id: applicationId, instance_ids: tmp26, media_session_ids: null, activity_user_session_id: null, raw_thermal_state: rawThermalState, duration_ms: diff, embedded_activity_location_kind: obj[applicationId].frameLocationKind };
      tmp26 = undefined;
      const track2 = AnalyticsUtilsDefault.track;
      const ACTIVITY_IFRAME_UNMOUNT = tmp21.ACTIVITY_IFRAME_UNMOUNT;
      AnalyticsUtilsDefault;
      if (null != obj[applicationId].launchId) {
        const items = [obj[applicationId].launchId];
        tmp26 = items;
      }
      ({ mediaSessionIds: obj5.media_session_ids, activityUserSessionId: obj5.activity_user_session_id } = obj[applicationId]);
      track2(ACTIVITY_IFRAME_UNMOUNT, obj7);
      delete tmp2[tmp];
    }
  }
};
