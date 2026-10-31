// Module ID: 20066
// Function ID: 20067
// Name: RequestToStreamManager
// Dependencies: [6714, 6061, 14839, 14873, 1072, 7287, 14868, 11, 14870, 7901, 2]

// Module 20066 (RequestToStreamManager)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Constants from "Constants" /* 1072 */;
import StreamActionCreatorsAll from "StreamActionCreators" /* 7901 */;
import MobileRequestToStreamExperiment2 from "MobileRequestToStreamExperiment" /* 14868 */;
import useStreamRequestActivities from "useStreamRequestActivities" /* 14870 */;
import RequestToStreamConstants from "RequestToStreamConstants" /* 14873 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6714 */;
import MessageStore from "MessageStore" /* 6061 */;
import RequestToStreamStore from "RequestToStreamStore" /* 14839 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7287 */;
import size from "module_2" /* 2 */;

let closure_7 = RequestToStreamConstants.STREAM_REQUEST_AUTO_WATCH_MAX_AGE;
const ActivityActionTypes = Constants.ActivityActionTypes;
class RequestToStreamManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates };
    return applyArgumentsResult;
  }
  handleVoiceStateUpdates(arg0) {
    let channelId;
    function _loop() {
      if (null != channelId.channelId) {
        if (true === channelId.selfStream) {
          const pendingRequestForUser = RequestToStreamStore.getPendingRequestForUser(tmp.userId);
          if (null == pendingRequestForUser) {
            return 0;
          } else {
            if (null != channelId.guildId) {
              const MobileRequestToStreamExperiment = MobileRequestToStreamExperiment2.MobileRequestToStreamExperiment;
              const obj = { guildId: channelId.guildId, location: "RequestToStreamManager" };
              if (!MobileRequestToStreamExperiment.getConfig(obj, { autoTrackExposure: false }).enabled) {
                return 0;
              }
            }
            const message = MessageStore.getMessage(tmp.channelId, pendingRequestForUser);
            let type;
            if (message != null) {
              const activity = message.activity;
              if (activity != null) {
                type = activity.type;
              }
            }
            if (type !== ActivityActionTypes.STREAM_REQUEST) {
              return 0;
            } else {
              const _Date = Date;
              const obj4 = SnowflakeUtilsDefault;
              const extractTimestampResult = obj4.extractTimestamp(pendingRequestForUser);
              if (extractTimestampResult < Date.now() - closure_7) {
                return 0;
              } else {
                const application = message.application;
                let id;
                if (application != null) {
                  id = application.id;
                }
                if (null != id) {
                  const obj2 = useStreamRequestActivities;
                  const streamRequestActivities = obj2.getStreamRequestActivities(tmp.userId, tmp.guildId);
                  if (null == streamRequestActivities.find((application_id) => application_id.application_id === id)) {
                    return 0;
                  }
                }
                const streamForUser = ApplicationStreamingStore.getStreamForUser(tmp.userId, tmp.guildId);
                if (null == streamForUser) {
                  return 0;
                } else {
                  const obj3 = StreamActionCreatorsAll;
                  obj3.watchStream(streamForUser, { forceMultiple: true, noFocus: true });
                }
              }
            }
          }
        }
      }
      return 0;
    }
    const iter = arg0.voiceStates[Symbol.iterator]();
    while (iter !== undefined) {
      channelId = iter.next();
      let _loopResult = _loop();
      continue;
    }
  }
}
const prototype = RequestToStreamManager.prototype;
const requestToStreamManager = new RequestToStreamManager();
const result = size.fileFinishedImporting("modules/request_to_stream/RequestToStreamManager.tsx");

export default requestToStreamManager;
