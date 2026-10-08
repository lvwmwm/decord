// Module ID: 11151
// Function ID: 11152
// Name: FramesManager
// Dependencies: [10612, 1085, 6797, 10625, 8586, 11152, 1264, 584, 2]

// Module 11151 (FramesManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8586 */;
import EmbeddedActivitiesManager from "EmbeddedActivitiesManager" /* 10625 */;
import isPostMessageDisconnectDefault from "isPostMessageDisconnect" /* 11152 */;
import FramesStore from "FramesStore" /* 10612 */;
import Constants from "Constants" /* 1085 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ AnalyticEvents: closure_4, RPCCloseCodes: hasOwnProperty } = Constants);
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
        const obj = EmbeddedActivitiesManager;
        const result = obj.trackFrameSessionStart(applicationId, analyticsContext);
      },
      FRAME_LAUNCH_FAIL(arg0) {
        let analyticsContext;
        let applicationId;
        let error;
        ({ applicationId, error, analyticsContext } = arg0);
        const obj = EmbeddedActivitiesManager;
        const result = obj.trackFrameSessionStartFailed(applicationId, error, analyticsContext);
      },
      FRAME_STOP(applicationId) {
        applicationId = applicationId.applicationId;
        const obj = EmbeddedActivitiesManager;
        obj.trackFrameSessionEnd(applicationId);
      },
      VOICE_CHANNEL_SELECT(arg0) {
        const result = require.handleVoiceChannelSelect(arg0);
      },
      CHANNEL_DELETE(channel) {
        const framesForChannel = FramesStore.getFramesForChannel(channel.channel.id);
        for (const item10010 of framesForChannel) {
          let leaveFrameResult = require.leaveFrame(item10010.id);
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
            let tmp8 = item10014.surface.type !== EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN;
            if (tmp8) {
              tmp8 = tmp5.surface.type !== tmp6(8586).EmbeddedSurfaceType.OVERLAY;
            }
            if (tmp8) {
              tmp8 = tmp5.surface.guildId === guild.id;
            }
            if (tmp8) {
              let leaveFrameResult = require.leaveFrame(tmp5.id);
            }
            continue;
          }
        }
      },
      CHANNEL_UPDATES(channels) {
        channels = channels.channels;
        for (const item10008 of channels) {
          let tmp = item10008;
          let framesForChannel = FramesStore.getFramesForChannel(item10008.id);
          for (const item10018 of framesForChannel) {
            if (item10018.applicationId !== tmp.application_id) {
              let leaveFrameResult = require.leaveFrame(tmp6.id);
            }
            continue;
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
          const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId: currentVoiceChannelId };
          const framesForSurface = getFramesForSurface(obj);
          for (const item10018 of framesForSurface) {
            let leaveFrameResult = require.leaveFrame(item10018.id);
            continue;
          }
        }
      }
    };
    applyArgumentsResult.handleRPCDisconnect = function handleRPCDisconnect(reason) {
      reason = reason.reason;
      if (null != reason) {
        const tmp6 = importDefault;
        if (isPostMessageDisconnectDefault(reason)) {
          const frameByEmbeddedContext = FramesStore.getFrameByEmbeddedContext(reason.context, reason.source.iframeId);
          if (null != frameByEmbeddedContext) {
            require.leaveFrame(frameByEmbeddedContext.id);
            const obj3 = require;
            if (reason.code !== hasOwnProperty.CLOSE_NORMAL) {
              const obj = { rpc_close_code: null, rpc_message: null, application_id: frameByEmbeddedContext.applicationId };
              ({ code: obj2.rpc_close_code, message: obj2.rpc_message } = reason);
              const tmp6Result = tmp6(1264);
              tmp6Result.track(constants.ACTIVITY_CLOSED_RPC_ERROR, obj);
              const result = obj3.showRPCDisconnectErrorUI(reason);
            }
          }
        }
      }
    };
    return applyArgumentsResult;
  }
  leaveFrame(frameId) {
    const frame = FramesStore.getFrame(frameId);
    if (null != frame) {
      const obj3 = { type: "FRAME_STOP", applicationId: null, frameId: null };
      ({ applicationId: obj2.applicationId, id: obj2.frameId } = frame);
      const obj = DispatcherDefault;
      obj.dispatch(obj3);
    }
  }
}
const prototype = FramesManager.prototype;
FramesManager.displayName = "FramesManager";
let result = size.fileFinishedImporting("modules/frames/FramesManager.tsx");

export default FramesManager;
