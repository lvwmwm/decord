// Module ID: 16064
// Function ID: 16065
// Name: FramesManager
// Dependencies: [4860, 6810, 1084, 7250, 15982, 10803, 5662, 16065, 1264, 2]

// Module 16064 (FramesManager)
import ChannelRecord from "ChannelRecord" /* 4860 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5662 */;
import leaveFrame from "leaveFrame" /* 10803 */;
import ActivitySessionAnalytics from "ActivitySessionAnalytics" /* 15982 */;
import isPostMessageDisconnectDefault from "isPostMessageDisconnect" /* 16065 */;
import FramesStore from "FramesStore" /* 6810 */;
import Constants from "Constants" /* 1084 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7250 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const isPrivate = ChannelRecord.isPrivate;
({ AnalyticEvents: hasOwnProperty, RPCCloseCodes: metroRequire } = Constants);
class FramesManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      RPC_APP_DISCONNECTED(arg0) {
        require.handleRPCDisconnect(arg0);
      },
      FRAME_LAUNCH(arg0) {
        let analyticsContext;
        let applicationId;
        ({ applicationId, analyticsContext } = arg0);
        const obj = ActivitySessionAnalytics;
        const result = obj.trackFrameSessionStart(applicationId, analyticsContext);
      },
      FRAME_LAUNCH_FAIL(arg0) {
        let analyticsContext;
        let applicationId;
        let error;
        ({ applicationId, error, analyticsContext } = arg0);
        const obj = ActivitySessionAnalytics;
        const result = obj.trackFrameSessionStartFailed(applicationId, error, analyticsContext);
      },
      FRAME_STOP(applicationId) {
        applicationId = applicationId.applicationId;
        const obj = ActivitySessionAnalytics;
        obj.trackFrameSessionEnd(applicationId);
      },
      VOICE_CHANNEL_SELECT(arg0) {
        const result = require.handleVoiceChannelSelect(arg0);
      },
      CHANNEL_DELETE(channel) {
        const framesForChannel = FramesStore.getFramesForChannel(channel.channel.id);
        for (const item10010 of framesForChannel) {
          let obj = leaveFrame;
          let leaveFrameResult = obj.leaveFrame(item10010.id);
          continue;
        }
      },
      GUILD_DELETE(guild) {
        guild = guild.guild;
        if (!("unavailable" in guild)) {
          const allFrames = FramesStore.getAllFrames();
          for (const item10014 of allFrames) {
            let tmp5 = item10014;
            let tmp6 = require;
            let tmp7 = dependencyMap;
            let tmp8 = item10014.surface.type !== EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN;
            if (tmp8) {
              tmp8 = tmp5.surface.type !== tmp6(tmp7[6]).EmbeddedSurfaceType.OVERLAY;
            }
            if (tmp8) {
              tmp8 = tmp5.surface.guildId === guild.id;
            }
            if (tmp8) {
              let tmp6Result = tmp6(tmp7[5]);
              let leaveFrameResult = tmp6Result.leaveFrame(tmp5.id);
            }
            continue;
          }
        }
      },
      CHANNEL_UPDATES(channels) {
        channels = channels.channels;
        for (const item10008 of channels) {
          let tmp = item10008;
          if (!isPrivate(item10008.type)) {
            let framesForChannel = FramesStore.getFramesForChannel(tmp.id);
            for (const item10022 of framesForChannel) {
              let tmp8 = item10022;
              let tmp9 = require;
              let tmp10 = dependencyMap;
              let tmp11 = item10022.surface.type !== EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN;
              if (tmp11) {
                tmp11 = tmp8.applicationId !== tmp.application_id;
              }
              if (tmp11) {
                let tmp9Result = tmp9(tmp10[5]);
                let leaveFrameResult = tmp9Result.leaveFrame(tmp8.id);
              }
              continue;
            }
          }
          continue;
        }
      }
    };
    applyArgumentsResult.handleVoiceChannelSelect = function handleVoiceChannelSelect(currentVoiceChannelId) {
      currentVoiceChannelId = currentVoiceChannelId.currentVoiceChannelId;
      if (null != currentVoiceChannelId) {
        if (currentVoiceChannelId !== currentVoiceChannelId.channelId) {
          const getFramesForSurface = FramesStore.getFramesForSurface;
          const obj2 = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId: currentVoiceChannelId };
          const framesForSurface = getFramesForSurface(obj2);
          for (const item10005 of framesForSurface) {
            let obj = leaveFrame;
            let leaveFrameResult = obj.leaveFrame(item10005.id);
            continue;
          }
        }
      }
    };
    applyArgumentsResult.handleRPCDisconnect = function handleRPCDisconnect(reason) {
      reason = reason.reason;
      if (null != reason) {
        const tmp7 = importDefault;
        if (isPostMessageDisconnectDefault(reason)) {
          const frameByEmbeddedContext = FramesStore.getFrameByEmbeddedContext(reason.context, reason.source.iframeId);
          if (null != frameByEmbeddedContext) {
            const obj3 = leaveFrame;
            obj3.leaveFrame(frameByEmbeddedContext.id);
            if (reason.code !== metroRequire.CLOSE_NORMAL) {
              const obj = { rpc_close_code: null, rpc_message: null, application_id: frameByEmbeddedContext.applicationId };
              ({ code: obj2.rpc_close_code, message: obj2.rpc_message } = reason);
              const tmp7Result = tmp7(1264);
              tmp7Result.track(hasOwnProperty.ACTIVITY_CLOSED_RPC_ERROR, obj);
              const result = require.showRPCDisconnectErrorUI(reason);
            }
          }
        }
      }
    };
    return applyArgumentsResult;
  }
}
FramesManager.displayName = "FramesManager";
let result = size.fileFinishedImporting("modules/frames/FramesManager.tsx");

export default FramesManager;
