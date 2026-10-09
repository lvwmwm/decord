// Module ID: 14723
// Function ID: 14724
// Name: EmbeddedActivitiesManager
// Dependencies: [5, 6043, 2068, 502, 2064, 5109, 2115, 1390, 14651, 2063, 1085, 14650, 1295, 4698, 10795, 5295, 1265, 10769, 10780, 10781, 5105, 1279, 2031, 9225, 2002, 1121, 584, 10447, 10773, 10806, 10810, 6849, 10803, 1126, 10881, 10778, 10883, 11567, 5439, 6872, 2]

// Module 14723 (EmbeddedActivitiesManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import v1 from "v1" /* 1279 */;
import StringUtils from "StringUtils" /* 2031 */;
import ChannelRecord from "ChannelRecord" /* 2068 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4698 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5105 */;
import ThermalUtilsDefault from "ThermalUtils" /* 5295 */;
import InteractionTypes from "InteractionTypes" /* 5439 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6872 */;
import CommandPermissionContext from "CommandPermissionContext" /* 9225 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10769 */;
import getURLForApplication from "getURLForApplication" /* 10773 */;
import tryLaunchAsFrame from "tryLaunchAsFrame" /* 10780 */;
import pendingFrameLaunch from "pendingFrameLaunch" /* 10781 */;
import getShelfItemDataDefault from "getShelfItemData" /* 10795 */;
import ActivitySessionAnalytics from "ActivitySessionAnalytics" /* 14650 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6043 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import UserStore from "UserStore" /* 1390 */;
import ActivityShelfStore from "ActivityShelfStore" /* 14651 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import Constants from "Constants" /* 1085 */;
import LifecycleManager from "LifecycleManager" /* 2002 */;
import size_mod from "module_2" /* 2 */;

let _undefined, commandOrigin, has, userIds, voiceChannelId;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
function clearAwaitingAnalyticsContextImmediate(arg0, arg1) {
  const tmp4 = ActivitySessionAnalytics.awaitingAnalyticsContext[arg0];
  const tmp = arg0;
  if (null != tmp4) {
    if (tmp4.nonce === arg1) {
      delete ActivitySessionAnalytics.awaitingAnalyticsContext[tmp];
      return tmp4;
    }
  }
}
function handleActivityLaunchStart(arg0) {
  let analyticsLocations;
  let applicationId;
  let nonce;
  let source;
  ({ analyticsLocations, source } = arg0);
  ({ applicationId, nonce } = arg0);
  const tmp = null != analyticsLocations || null != source;
  if (tmp) {
    obj = { nonce, locations: analyticsLocations, source };
    ActivitySessionAnalytics.awaitingAnalyticsContext[applicationId] = obj;
  }
}
function handleActivityClose() {
  return obj(...arguments);
}
let obj = function _handleActivityClose() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let closure_2;
    let duration_ms;
    let obj7;
    let shelf_rank;
    let tmp41;
    let closure_0 = arg0;
    if (1 === c3) {
      if (arg0 === 1) {
        let c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        duration_ms = closure_130_12.getEmbeddedActivityDurationMs(user.id, application_id);
        const session_id = closure_130_6.getSessionId();
        const tmp7 = null != c2 && null != session_id;
        if (tmp7) {
          const HTTP = closure_130_0(closure_130_2[12]).HTTP;
          const request = { url: closure_130_15.ACTIVITY_LEAVE(application_id, user.id, c2), body: obj7, retries: 2, rejectWithError: false };
          const post = HTTP.post;
          obj7 = { session_id };
          c3 = 2;
          c4 = 1;
          const obj8 = { value: post(request), done: false };
          return obj8;
        }
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      obj = { value, done: true };
      return obj;
    }
    let closure_5 = closure_130_0(closure_130_2[11]).activeSessionIds[application_id];
    const obj2 = closure_130_0(closure_130_2[13]);
    const channel_id = obj2.getEmbeddedActivityLocationChannelId(user);
    const obj3 = closure_130_0(closure_130_2[13]);
    const guild_id = obj3.getEmbeddedActivityLocationGuildId(user);
    let type = closure_130_7.getChannel(channel_id);
    const premiumType = closure_130_10.getCurrentUser();
    if (null != closure_5) {
      if (null != premiumType) {
        if (null == closure_5.connectedSince) {
          const activityConfigs = closure_130_12.getShelfActivities(guild_id);
          const obj9 = { applicationId: application_id, activityConfigs };
          let activity = closure_130_1(closure_130_2[14])(obj9);
          const obj12 = closure_130_0(closure_130_2[11]);
          const releasePhase = obj12.getShelfItemTrackingProperties(activity).releasePhase;
          const obj13 = closure_130_1(closure_130_2[15]);
          const raw_thermal_state = obj13.getRawThermalState();
          const obj10 = { channel_id, guild_id, media_session_id: closure_5.mediaSessionIds[0], activity_session_id: closure_5.activitySessionId, application_id, duration_ms, user_premium_tier: premiumType.premiumType, raw_thermal_state, release_phase: releasePhase, shelf_rank, activity_user_session_id: closure_5.activityUserSessionId, channel_type: type, media_session_ids: closure_5.mediaSessionIds, embedded_activity_location_kind: user.kind };
          shelf_rank = undefined;
          const track2 = closure_130_1(closure_130_2[16]).track;
          const ACTIVITY_SESSION_LEFT = closure_130_13.ACTIVITY_SESSION_LEFT;
          const tmp94 = closure_130_1(closure_130_2[16]);
          if (activity != null) {
            activity = activity.activity;
            if (activity != null) {
              shelf_rank = activity.shelf_rank;
            }
          }
          type = undefined;
          if (type != null) {
            type = type.type;
          }
          track2(ACTIVITY_SESSION_LEFT, obj10);
          const obj11 = { channel_id, guild_id, application_id, instance_ids: tmp41, media_session_ids: closure_5.mediaSessionIds, activity_user_session_id: closure_5.activityUserSessionId, raw_thermal_state, duration_ms, embedded_activity_location_kind: user.kind };
          tmp41 = undefined;
          const track = closure_130_1(closure_130_2[16]).track;
          const ACTIVITY_IFRAME_UNMOUNT = closure_130_13.ACTIVITY_IFRAME_UNMOUNT;
          const tmp35 = closure_130_1(closure_130_2[16]);
          if (null != closure_5.launchId) {
            const items = [closure_5.launchId];
            tmp41 = items;
          }
          track(ACTIVITY_IFRAME_UNMOUNT, obj11);
          delete closure_130_0(undefined, closure_130_2[11]).activeSessionIds[application_id];
        }
      }
    }
    await "IconComponent";
    ({ applicationId: c0, location: c1, instanceId: c2 } = closure_0);
    return "Set";
  });
  return obj(...arguments);
};
function handleOpenEmbeddedActivity(applicationId) {
  let _location;
  let commandContextType;
  let embeddedActivity;
  let interactionId;
  let inviterUserId;
  let isStart;
  let locations;
  let num4;
  let participants;
  let shelf_rank;
  let shelf_rank1;
  let source;
  let tmp34;
  let tmp44;
  let tmp4Result10;
  let tmp4Result9;
  let type;
  let type1;
  let userParticipantCount;
  applicationId = applicationId.applicationId;
  ({ isStart, participants, embeddedActivity, location: _location, inviterUserId } = applicationId);
  const isFirstActivityInChannel = applicationId.isFirstActivityInChannel;
  if (true !== embeddedActivity.renderInFramePool) {
    obj = FramesActionCreatorsDefault;
    obj.clearMainFrameSlot();
  }
  const obj2 = tryLaunchAsFrame;
  if (obj2.tryLaunchAsFrame({ applicationId })) {
    const obj3 = { isStart, inviterUserId, channelId: tmp4Result9.getEmbeddedActivityLocationChannelId(_location), guildId: tmp4Result10.getEmbeddedActivityLocationGuildId(_location), locationKind: _location.kind, launchId: null, compositeInstanceId: null, activitiesInfraVersion: num4 };
    const stashPendingFrameLaunch = pendingFrameLaunch.stashPendingFrameLaunch;
    pendingFrameLaunch;
    tmp4Result9 = embeddedActivityLocationUtils;
    ({ launchId: obj13.launchId, compositeInstanceId: obj13.compositeInstanceId } = embeddedActivity);
    num4 = 1;
    tmp4Result10 = embeddedActivityLocationUtils;
    if ("location" in embeddedActivity) {
      num4 = 2;
    }
    const result = stashPendingFrameLaunch(applicationId, obj3);
  } else {
    const id = AuthenticationStore.getId();
    const found = participants.find((userId) => userId.userId === closure_1);
    const tmp4Result11 = embeddedActivityLocationUtils;
    const embeddedActivityLocationChannelId = tmp4Result11.getEmbeddedActivityLocationChannelId(_location);
    const tmp4Result12 = embeddedActivityLocationUtils;
    const embeddedActivityLocationGuildId = tmp4Result12.getEmbeddedActivityLocationGuildId(_location);
    const channel = ChannelStore.getChannel(embeddedActivityLocationChannelId);
    const isPrivateResult = isStart && null != channel && channel.isPrivate() && isFirstActivityInChannel && null == found;
    if (isPrivateResult) {
      const obj6 = ChannelRTCActionCreatorsDefault;
      const participant = obj6.selectParticipant(channel.id, null);
    }
    if (null != found) {
      const mediaSessionId = RTCConnectionStore.getMediaSessionId();
      const compositeInstanceId = embeddedActivity.compositeInstanceId;
      let tmp19 = null == mediaSessionId;
      if (tmp19) {
        let isVocalResult;
        if (channel != null) {
          isVocalResult = channel.isVocal();
        }
        tmp19 = true === isVocalResult;
      }
      if (tmp19) {
        let isPrivateResult1;
        if (channel != null) {
          isPrivateResult1 = channel.isPrivate();
        }
        tmp19 = false === isPrivateResult1;
      }
      if (null != compositeInstanceId) {
        if (!tmp19) {
          const tmp4Result13 = v1;
          const v4Result = tmp4Result13.v4();
          let num2 = 1;
          if ("location" in embeddedActivity) {
            num2 = 2;
          }
          const currentUser = UserStore.getCurrentUser();
          if (null != currentUser) {
            let items1;
            const shelfActivities = EmbeddedActivitiesStore.getShelfActivities(embeddedActivityLocationGuildId);
            const shelfOrder = ActivityShelfStore.getState().shelfOrder;
            const obj4 = { applicationId, activityConfigs: shelfActivities };
            const tmp54 = getShelfItemDataDefault(obj4);
            const sum = 1 + shelfOrder.findIndex((item) => item === applicationId);
            const tmp4Result14 = ActivitySessionAnalytics;
            const releasePhase = tmp4Result14.getShelfItemTrackingProperties(tmp54).releasePhase;
            const obj18 = ThermalUtilsDefault;
            const rawThermalState = obj18.getRawThermalState();
            if (null != mediaSessionId) {
              const items = [mediaSessionId];
              items1 = items;
            } else {
              items1 = [];
            }
            const obj5 = { activitySessionId: compositeInstanceId, activityUserSessionId: v4Result, launchId: embeddedActivity.launchId, mediaSessionIds: items1, activitiesInfraVersion: num2 };
            ActivitySessionAnalytics.activeSessionIds[applicationId] = obj5;
            const tmp24 = ActivitySessionAnalytics.awaitingAnalyticsContext[applicationId];
            const tmp4Result15 = StringUtils;
            let isNullOrEmptyResult = tmp4Result15.isNullOrEmpty(found.nonce);
            if (!isNullOrEmptyResult) {
              let nonce1;
              const nonce = found.nonce;
              if (tmp24 != null) {
                nonce1 = tmp24.nonce;
              }
              isNullOrEmptyResult = nonce === nonce1;
            }
            const obj7 = { channel_id: embeddedActivityLocationChannelId, guild_id: embeddedActivityLocationGuildId, media_session_id: items1[0], activity_session_id: compositeInstanceId, application_id: applicationId, location_stack: locations, user_premium_tier: currentUser.premiumType, raw_thermal_state: rawThermalState, n_participants: userParticipantCount, is_activity_start: isStart, release_phase: releasePhase, shelf_rank, shelf_sorted_rank: tmp34, activity_user_session_id: v4Result, channel_type: type, source, command_context_type: commandContextType, invite_inviter_id: inviterUserId, interaction_id: interactionId, embedded_activity_location_kind: _location.kind };
            locations = undefined;
            const track = AnalyticsUtilsDefault.track;
            const ACTIVITY_SESSION_JOINED = map1.ACTIVITY_SESSION_JOINED;
            AnalyticsUtilsDefault;
            const tmp28 = map1;
            if (tmp24 != null) {
              locations = tmp24.locations;
            }
            userParticipantCount = null;
            if (null != channel) {
              userParticipantCount = ChannelRTCStore.getUserParticipantCount(channel.id);
            }
            shelf_rank = undefined;
            if (tmp54 != null) {
              const activity = tmp54.activity;
              if (activity != null) {
                shelf_rank = activity.shelf_rank;
              }
            }
            tmp34 = null;
            if (sum > 0) {
              tmp34 = sum;
            }
            type = undefined;
            if (channel != null) {
              type = channel.type;
            }
            source = undefined;
            if (tmp24 != null) {
              source = tmp24.source;
            }
            commandContextType = null;
            if (null != channel) {
              const tmp4Result16 = CommandPermissionContext;
              commandContextType = tmp4Result16.computeCommandContextType(channel, applicationId);
            }
            interactionId = undefined;
            if (tmp24 != null) {
              interactionId = tmp24.interactionId;
            }
            track(ACTIVITY_SESSION_JOINED, obj7);
            let locations1;
            const track2 = AnalyticsUtilsDefault.track;
            const ACTIVITY_IFRAME_MOUNT = tmp28.ACTIVITY_IFRAME_MOUNT;
            AnalyticsUtilsDefault;
            if (tmp24 != null) {
              locations1 = tmp24.locations;
            }
            const obj8 = { location_stack: locations1, channel_id: embeddedActivityLocationChannelId, channel_type: type1, guild_id: embeddedActivityLocationGuildId, application_id: applicationId, instance_id: embeddedActivity.launchId, initial_media_session_id: items1[0], activity_user_session_id: v4Result, raw_thermal_state: rawThermalState, is_activity_start: isStart, shelf_rank: shelf_rank1, shelf_sorted_rank: tmp44, activities_infra_version: num2, embedded_activity_location_kind: _location.kind };
            type1 = undefined;
            if (channel != null) {
              type1 = channel.type;
            }
            shelf_rank1 = undefined;
            if (tmp54 != null) {
              const activity2 = tmp54.activity;
              if (activity2 != null) {
                shelf_rank1 = activity2.shelf_rank;
              }
            }
            tmp44 = null;
            if (sum > 0) {
              tmp44 = sum;
            }
            track2(ACTIVITY_IFRAME_MOUNT, obj8);
          }
        }
      }
    }
  }
}
const GUILD_VOCAL_CHANNEL_TYPES = ChannelRecord.GUILD_VOCAL_CHANNEL_TYPES;
({ AnalyticEvents: map1, RPCCloseCodes: closure_14, Endpoints: closure_15, RTCConnectionStates: closure_16, ComponentActions: closure_17 } = Constants);
let closure_18 = {};
let c24;
class EmbeddedActivitiesManager extends LifecycleManager {
  constructor() {
    let applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleLeave = function handleLeave(location) {
      obj = { location: location.location, applicationId: location.applicationId, showFeedback: location.showFeedback, shouldClosePopout: location.shouldClosePopout };
      require.leaveActivity(obj);
    };
    applyArgumentsResult.handleSelectedChannelUpdate = function handleSelectedChannelUpdate() {
      let _location;
      let applicationId;
      let closure_0;
      voiceChannelId = voiceChannelId.getVoiceChannelId();
      const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
      const values = selfEmbeddedActivities.values();
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        ({ location: _location, applicationId } = nextResult);
        let tmp4 = _location;
        let tmp6 = dependencyMap;
        let obj2 = embeddedActivityLocationUtils;
        let embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(_location);
        let tmp8 = embeddedActivityLocationChannelId;
        let tmp9 = null != embeddedActivityLocationChannelId;
        if (tmp9) {
          tmp9 = require("isVoiceEmbeddedActivity")(tmp8);
        }
        if (tmp9) {
          tmp9 = tmp8 !== voiceChannelId;
        }
        if (tmp9) {
          obj = { location: tmp4, applicationId };
          let leaveActivityResult = require.leaveActivity(obj);
        }
        continue;
      }
      if (null != voiceChannelId) {
        const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(voiceChannelId);
        require = id.getId();
        const item = embeddedActivitiesForChannel.forEach((userIds) => {
          userIds = userIds.userIds;
          if (userIds.has(closure_0)) {
            obj = embeddedActivityLocationUtils;
            const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(obj.getEmbeddedActivityLocationChannelId(userIds.location));
            if (null == selfEmbeddedActivityForChannel) {
              const obj5 = { location: null, applicationId: null };
              ({ location: obj3.location, applicationId: obj3.applicationId } = userIds);
              require.leaveActivity(obj5);
            } else if (null == c24) {
              const obj6 = { location: null, applicationId: null };
              ({ location: obj2.location, applicationId: obj2.applicationId } = selfEmbeddedActivityForChannel);
              require.hidePIPEmbed(obj6);
            }
          }
        });
      }
    };
    applyArgumentsResult.handleActivityWebViewRelease = function handleActivityWebViewRelease() {
      require.releaseWebView();
    };
    applyArgumentsResult.handleActivityLaunchSuccess = function handleActivityLaunchSuccess(arg0) {
      let closure_129_0;
      let closure_129_1;
      ({ applicationId: closure_129_0, nonce: closure_129_1 } = arg0);
      const timerId = setTimeout(() => {
        const tmp5 = ActivitySessionAnalytics.awaitingAnalyticsContext[closure_0];
        let tmp6;
        const tmp = closure_0;
        const tmp2 = nonce;
        const tmp3 = require;
        const tmp4 = dependencyMap;
        if (null != tmp5) {
          if (tmp5.nonce === tmp2) {
            delete tmp3(undefined, tmp4[11]).awaitingAnalyticsContext[tmp];
            tmp6 = tmp5;
          }
        }
        return tmp6;
      }, 2000);
      obj = getURLForApplication;
      if (obj.isUsingDevShelfActivityUrlOverride()) {
        const result = require.showDevShelfOverrideEnabled();
      }
    };
    applyArgumentsResult = _asyncToGenerator(async (arg0, value) => {
      let application_id;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let guildId;
      let is_activity_start;
      let locations;
      let obj3;
      let source;
      closure_0 = arg0;
      if (is_activity_start === 2) {
        is_activity_start = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let channel_id;
          let embedded_activity_location_kind;
          let channel;
          let closure_8;
          let type;
          let raw_thermal_state;
          is_activity_start = 2;
          if (0 === application_id) {
            if (arg0 === 1) {
              is_activity_start = 3;
              throw value;
            } else if (arg0 === 2) {
              is_activity_start = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_3 = tmp4;
              c0 = undefined;
              c1 = undefined;
              channel_id = undefined;
              c3 = undefined;
              embedded_activity_location_kind = undefined;
              ({ error: c0, nonce: c1, channelId: c2, guildId: c3, applicationId: c4, isStart: c5, locationKind: c6 } = closure_0);
              channel = undefined;
              closure_8 = undefined;
              type = undefined;
              raw_thermal_state = undefined;
              application_id = 1;
              is_activity_start = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === application_id) {
            if (arg0 === 1) {
              is_activity_start = 3;
              throw value;
            } else if (arg0 === 2) {
              is_activity_start = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              channel = closure_1_19(application_id, c1);
              application_id = 2;
              is_activity_start = 1;
              const obj6 = { value: obj3.getActivityLaunchErrorInfo(c0, application_id), done: false };
              obj3 = closure_0(channel_id[29]);
              return obj6;
            }
          } else if (arg0 === 1) {
            is_activity_start = 3;
            throw value;
          } else if (arg0 === 2) {
            is_activity_start = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_8 = value;
            guildId(channel_id[30])(closure_8.message);
            type = channel.getChannel(channel_id);
            const obj8 = guildId(channel_id[15]);
            raw_thermal_state = obj8.getRawThermalState();
            const obj9 = { channel_id, guild_id: guildId, application_id, raw_thermal_state, is_activity_start, channel_type: type, location_stack: locations, error_type: closure_8.errorType, error_status: closure_8.errorStatus, error_code: closure_8.errorCode, source, embedded_activity_location_kind };
            const tmp46 = guildId(channel_id[16]);
            guildId = c3;
            const track = tmp46.track;
            const ACTIVITY_SESSION_JOIN_FAILED = constants.ACTIVITY_SESSION_JOIN_FAILED;
            if (c3 == null) {
              guildId = undefined;
              obj = type;
              if (type != null) {
                guildId = obj.getGuildId();
              }
            }
            type = undefined;
            if (type != null) {
              type = type.type;
            }
            locations = undefined;
            if (channel != null) {
              locations = channel.locations;
            }
            source = undefined;
            if (channel != null) {
              source = channel.source;
            }
            track(ACTIVITY_SESSION_JOIN_FAILED, obj9);
            is_activity_start = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp32) {
          is_activity_start = 3;
          throw tmp32;
        }
      }
    });
    applyArgumentsResult.handleActivityLaunchFail = function() {
      return closure_0(...arguments);
    };
    applyArgumentsResult.handleActivityLaunchCancel = function handleActivityLaunchCancel(applicationId) {
      applicationId = applicationId.applicationId;
      const nonce = applicationId.nonce;
      const tmp3 = ActivitySessionAnalytics.awaitingAnalyticsContext[applicationId];
      const tmp = require;
      const tmp2 = dependencyMap;
      if (null != tmp3) {
        if (tmp3.nonce === nonce) {
          delete tmp(undefined, tmp2[11]).awaitingAnalyticsContext[applicationId];
        }
      }
    };
    applyArgumentsResult.handleRPCDisconnect = function handleRPCDisconnect(reason) {
      reason = reason.reason;
      id = reason.application.id;
      if (null != id) {
        if (null != reason) {
          const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
          const values = selfEmbeddedActivities.values();
          for (const item10008 of values) {
            let _location = item10008.location;
            if (item10008.applicationId === id) {
              obj = { location: _location, applicationId: id };
              let leaveActivityResult = require.leaveActivity(obj);
            }
            continue;
          }
          if (reason.code !== constants.CLOSE_NORMAL) {
            const obj4 = { rpc_close_code: null, rpc_message: null, application_id: id };
            ({ code: obj3.rpc_close_code, message: obj3.rpc_message } = reason);
            const obj2 = AnalyticsUtilsDefault;
            obj2.track(map1.ACTIVITY_CLOSED_RPC_ERROR, obj4);
            require.showErrorModal(reason, id);
          }
        }
      }
    };
    applyArgumentsResult.handleCallDelete = function handleCallDelete(channelId) {
      channelId = channelId.channelId;
      voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      const tmp2 = null != voiceChannelId && voiceChannelId === channelId;
      if (tmp2) {
        require.handleCallEnded(channelId);
      }
    };
    applyArgumentsResult.handleRTCConnectionState = function handleRTCConnectionState(state) {
      if (state.state === constants2.DISCONNECTED) {
        require.handleCallEnded(state.channelId);
      }
    };
    applyArgumentsResult.handleCallEnded = function handleCallEnded(channelId) {
      const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channelId);
      if (null != selfEmbeddedActivityForChannel) {
        obj = { location: null, applicationId: null };
        ({ location: obj.location, applicationId: obj.applicationId } = selfEmbeddedActivityForChannel);
        require.leaveActivity(obj);
      }
    };
    applyArgumentsResult = _asyncToGenerator(async (channelId) => {
      let inviterUserId;
      let c5 = 0;
      let c6 = 0;
      const iter = (async (arg0, value) => {
        let c0;
        let c1;
        let c2;
        let c3;
        let c4;
        let channel2;
        let launchId;
        let obj14;
        let obj18;
        let obj9;
        if (1 === has) {
          if (arg0 === 1) {
            let c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            channel2 = channel.getChannel(channelId);
            if (undefined !== channel2) {
              let type;
              has = has.has;
              if (channel2 != null) {
                type = channel2.type;
              }
              if (!has(type)) {
                closure_1_12.getSelfEmbeddedActivityForChannel(channelId);
                applicationId = undefined;
                if (applicationId != null) {
                  applicationId = applicationId.applicationId;
                }
                if (applicationId !== _undefined) {
                  has = 2;
                  c6 = 1;
                  const obj5 = { value: obj18.fetchApplication(_undefined), done: false };
                  obj18 = _undefined(analyticsLocations[31]);
                  return obj5;
                }
              }
            }
          }
        } else if (2 === has) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            channel = value;
            const obj24 = channelId(analyticsLocations[32]);
            if (obj24.getIsActivitiesEnabledForCurrentPlatform()) {
              let supported_platforms;
              const tmp58 = _undefined(analyticsLocations[34]);
              if (channel != null) {
                const embedded_activity_config = channel.embedded_activity_config;
                if (embedded_activity_config != null) {
                  supported_platforms = embedded_activity_config.supported_platforms;
                }
              }
              if (tmp58(supported_platforms)) {
                guildId = undefined;
                const obj13 = channel2;
                if (channel2 != null) {
                  guildId = obj13.getGuildId();
                }
                _undefined = guildId;
                if (guildId == null) {
                  _undefined = undefined;
                }
                guildId = _undefined;
                has = 3;
                c6 = 1;
                const obj7 = { guildId };
                const obj8 = { value: obj14.fetchShelf(obj7), done: false };
                obj14 = channelId(analyticsLocations[35]);
                return obj8;
              } else {
                const tmp64 = _undefined(analyticsLocations[30]);
                const intl2 = channelId(analyticsLocations[33]).intl;
                tmp64(intl2.string(channelId(analyticsLocations[33]).t.uGDCcw));
              }
            } else {
              const tmp48 = _undefined(analyticsLocations[30]);
              const intl = channelId(analyticsLocations[33]).intl;
              tmp48(intl.string(channelId(analyticsLocations[33]).t.UXoQTp));
            }
          }
        } else {
          if (3 === has) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              voiceChannelId = value;
              const activityConfigs = voiceChannelId.activityConfigs;
              const applications = voiceChannelId.applications;
              const obj11 = { applicationId: _undefined, activityConfigs, applications };
              if (null == _undefined(analyticsLocations[14])(obj11)) {
                has = 4;
                c6 = 1;
                const obj12 = { guildId, force: true };
                const obj15 = { value: obj9.fetchShelf(obj12), done: false };
                obj9 = channelId(analyticsLocations[35]);
                return obj15;
              }
            }
          } else if (4 === has) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              let closure_12 = value;
              const obj17 = { applicationId: _undefined, activityConfigs: closure_12.activityConfigs, applications: closure_12.applications };
              _undefined(analyticsLocations[14])(obj17);
            }
          } else if (5 === has) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          }
          const embeddedActivitiesForChannel = closure_1_12.getEmbeddedActivitiesForChannel(channelId);
          let closure_13 = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === _undefined);
          size = undefined;
          if (closure_13 != null) {
            size = closure_13.userIds.size;
          }
          analyticsLocations = size;
          if (size == null) {
            analyticsLocations = 0;
          }
          if (analyticsLocations > 0) {
            const obj20 = { channelId, applicationId: _undefined, launchId, inputApplication: null, analyticsLocations, inviterUserId };
            launchId = undefined;
            const maybeJoinEmbeddedActivity = channelId(analyticsLocations[36]).maybeJoinEmbeddedActivity;
            channelId(analyticsLocations[36]);
            if (closure_13 != null) {
              launchId = closure_13.launchId;
            }
            has = 6;
            c6 = 1;
            const obj21 = { value: maybeJoinEmbeddedActivity(obj20), done: false };
            return obj21;
          } else {
            has = 5;
            c6 = 1;
            const obj22 = { targetApplicationId: _undefined, channelId, analyticsLocations, commandOrigin, inviterUserId };
            const obj23 = { value: _undefined(analyticsLocations[37])(obj22), done: false };
            return obj23;
          }
        }
        await "IconComponent";
        commandOrigin = 0;
        ({ channelId: c0, applicationId: c1, analyticsLocations: c2, commandOrigin: c3, inviterUserId: c4 } = channelId);
        return "Set";
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleDeferredOpen = function() {
      return closure_0(...arguments);
    };
    applyArgumentsResult.handleGuildDelete = function handleGuildDelete(guild) {
      guild = guild.guild;
      const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
      const item = selfEmbeddedActivities.forEach((location) => {
        const _location = location.location;
        const applicationId = location.applicationId;
        obj = embeddedActivityLocationUtils;
        if (guild.id === obj.getEmbeddedActivityLocationGuildId(_location)) {
          const obj2 = { location: _location, applicationId };
          require.leaveActivity(obj2);
        }
      });
    };
    applyArgumentsResult.handleChannelDelete = function handleChannelDelete(channel) {
      const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.channel.id);
      if (null != selfEmbeddedActivityForChannel) {
        obj = { location: null, applicationId: null };
        ({ location: obj.location, applicationId: obj.applicationId } = selfEmbeddedActivityForChannel);
        require.leaveActivity(obj);
      }
    };
    applyArgumentsResult.handleInteractionQueue = function handleInteractionQueue(arg0) {
      let applicationId;
      let data;
      let locations;
      let nonce;
      let nonce2;
      let source;
      ({ nonce, data } = arg0);
      if (null == ActivitySessionAnalytics.awaitingAnalyticsContext[data.applicationId]) {
        let tmp3;
        if (data.interactionType === InteractionTypes.InteractionTypes.APPLICATION_COMMAND) {
          const items = [AnalyticsLocationDefault.INTERACTION_APPLICATION_COMMAND];
          tmp3 = items;
        } else if (data.interactionType === InteractionTypes.InteractionTypes.MESSAGE_COMPONENT) {
          const items1 = [AnalyticsLocationDefault.INTERACTION_MESSAGE_COMPONENT];
          tmp3 = items1;
        } else if (data.interactionType === InteractionTypes.InteractionTypes.MODAL_SUBMIT) {
          const items2 = [AnalyticsLocationDefault.INTERACTION_MODAL_SUBMIT];
          tmp3 = items2;
        }
        obj = { applicationId: data.applicationId, nonce, locations: tmp3 };
        ({ locations, source } = obj);
        let flag = null != locations;
        ({ applicationId, nonce: nonce2 } = obj);
        if (!flag) {
          flag = null != source;
        }
        if (flag) {
          const obj2 = { nonce: nonce2, locations, source };
          ActivitySessionAnalytics.awaitingAnalyticsContext[applicationId] = obj2;
          flag = true;
        }
        if (flag) {
          closure_1_18[nonce] = data.applicationId;
        }
      }
    };
    applyArgumentsResult.handleInteractionCreate = function handleInteractionCreate(nonce) {
      nonce = nonce.nonce;
      if (null != nonce) {
        if (null != closure_1_18[nonce]) {
          const tmp6 = ActivitySessionAnalytics.awaitingAnalyticsContext[closure_1_18[nonce]];
          if (null != tmp6) {
            tmp6.interactionId = tmp;
          }
        }
      }
    };
    applyArgumentsResult.handleInteractionSuccess = function handleInteractionSuccess(nonce) {
      nonce = nonce.nonce;
      if (null != nonce) {
        let tmp = closure_18[nonce];
        if (null != tmp) {
          delete closure_18[nonce];
          let closure_0 = tmp;
          let tmp2 = globalThis;
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const tmp5 = ActivitySessionAnalytics.awaitingAnalyticsContext[closure_0];
            let tmp6;
            const tmp = closure_0;
            const tmp2 = nonce;
            const tmp3 = require;
            const tmp4 = dependencyMap;
            if (null != tmp5) {
              if (tmp5.nonce === tmp2) {
                delete tmp3(undefined, tmp4[11]).awaitingAnalyticsContext[tmp];
                tmp6 = tmp5;
              }
            }
            return tmp6;
          }, 2000);
        }
      }
    };
    applyArgumentsResult.handleInteractionFailure = function handleInteractionFailure(nonce) {
      nonce = nonce.nonce;
      if (null != nonce) {
        if (null != closure_1_18[nonce]) {
          delete closure_1_18[nonce];
          const tmp4 = ActivitySessionAnalytics.awaitingAnalyticsContext[closure_1_18[nonce]];
          const tmp2 = require;
          const tmp3 = dependencyMap;
          if (null != tmp4) {
            if (tmp4.nonce === nonce) {
              delete tmp2(undefined, tmp3[11]).awaitingAnalyticsContext[closure_1_18[nonce]];
            }
          }
        }
      }
    };
    return applyArgumentsResult;
  }
  _initialize() {
    SelectedChannelStore.addChangeListener(this.handleSelectedChannelUpdate);
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants4.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease);
    const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants4.OPEN_EMBEDDED_ACTIVITY, handleOpenEmbeddedActivity);
    obj = DispatcherDefault;
    const subscription2 = obj.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", handleActivityLaunchStart);
    const obj2 = DispatcherDefault;
    const subscription3 = obj2.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess);
    const obj3 = DispatcherDefault;
    const subscription4 = obj3.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail);
    const obj4 = DispatcherDefault;
    const subscription5 = obj4.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel);
    const obj5 = DispatcherDefault;
    const subscription6 = obj5.subscribe("EMBEDDED_ACTIVITY_CLOSE", handleActivityClose);
    const obj6 = DispatcherDefault;
    const subscription7 = obj6.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen);
    const obj7 = DispatcherDefault;
    const subscription8 = obj7.subscribe("EMBEDDED_ACTIVITY_LEAVE", this.handleLeave);
    const obj8 = DispatcherDefault;
    const subscription9 = obj8.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect);
    const obj9 = DispatcherDefault;
    const subscription10 = obj9.subscribe("CALL_DELETE", this.handleCallDelete);
    const obj10 = DispatcherDefault;
    const subscription11 = obj10.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState);
    const obj11 = DispatcherDefault;
    const subscription12 = obj11.subscribe("GUILD_DELETE", this.handleGuildDelete);
    const obj12 = DispatcherDefault;
    const subscription13 = obj12.subscribe("CHANNEL_DELETE", this.handleChannelDelete);
    const obj13 = DispatcherDefault;
    const subscription14 = obj13.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue);
    const obj14 = DispatcherDefault;
    const subscription15 = obj14.subscribe("INTERACTION_CREATE", this.handleInteractionCreate);
    const obj15 = DispatcherDefault;
    const subscription16 = obj15.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess);
    const obj16 = DispatcherDefault;
    const subscription17 = obj16.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
  }
  _terminate() {
    SelectedChannelStore.removeChangeListener(this.handleSelectedChannelUpdate);
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.unsubscribe(constants4.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease);
    const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch2.unsubscribe(constants4.OPEN_EMBEDDED_ACTIVITY, handleOpenEmbeddedActivity);
    obj = DispatcherDefault;
    obj.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", handleActivityLaunchStart);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess);
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail);
    const obj4 = DispatcherDefault;
    obj4.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel);
    const obj5 = DispatcherDefault;
    obj5.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", handleActivityClose);
    const obj6 = DispatcherDefault;
    obj6.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen);
    const obj7 = DispatcherDefault;
    obj7.unsubscribe("EMBEDDED_ACTIVITY_LEAVE", this.handleLeave);
    const obj8 = DispatcherDefault;
    obj8.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect);
    const obj9 = DispatcherDefault;
    obj9.unsubscribe("CALL_DELETE", this.handleCallDelete);
    const obj10 = DispatcherDefault;
    obj10.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState);
    const obj11 = DispatcherDefault;
    obj11.unsubscribe("GUILD_DELETE", this.handleGuildDelete);
    const obj12 = DispatcherDefault;
    obj12.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete);
    const obj13 = DispatcherDefault;
    obj13.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue);
    const obj14 = DispatcherDefault;
    obj14.unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate);
    const obj15 = DispatcherDefault;
    obj15.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess);
    const obj16 = DispatcherDefault;
    obj16.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
  }
}
const prototype = EmbeddedActivitiesManager.prototype;
let size = size_mod;
let result = size.fileFinishedImporting("modules/activities/EmbeddedActivitiesManager.tsx");

export default EmbeddedActivitiesManager;
