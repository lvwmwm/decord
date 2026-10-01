// Module ID: 8754
// Function ID: 8755
// Name: FramesManager
// Dependencies: [8499, 1074, 4739, 6539, 8755, 8501, 1241, 573, 2]

// Module 8754 (FramesManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Constants2 from "Constants" /* 4739 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8501 */;
import EmbeddedActivitiesManager from "EmbeddedActivitiesManager" /* 8755 */;
import FramesStore from "FramesStore" /* 8499 */;
import Constants from "Constants" /* 1074 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6539 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ AnalyticEvents: closure_4, RPCCloseCodes: hasOwnProperty } = Constants);
const TransportTypes = Constants2.TransportTypes;
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
    applyArgumentsResult.handleRPCDisconnect = function handleRPCDisconnect(arg0) {
      let reason;
      let source;
      ({ reason, source } = arg0);
      if (null != reason) {
        if (source.type === TransportTypes.POST_MESSAGE) {
          const frameByIframeId = FramesStore.getFrameByIframeId(source.iframeId);
          if (null != frameByIframeId) {
            require.leaveFrame(frameByIframeId.id);
            const obj3 = require;
            if (reason.code !== hasOwnProperty.CLOSE_NORMAL) {
              const obj4 = { rpc_close_code: null, rpc_message: null, application_id: frameByIframeId.applicationId };
              ({ code: obj2.rpc_close_code, message: obj2.rpc_message } = reason);
              const obj = AnalyticsUtilsDefault;
              obj.track(constants.ACTIVITY_CLOSED_RPC_ERROR, obj4);
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
