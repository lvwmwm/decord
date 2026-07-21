// Module ID: 15898
// Function ID: 121814
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15898 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
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
const FeedbackType = arg1(dependencyMap[9]).FeedbackType;
let tmp2 = (arg0) => {
  class FeedbackManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, FeedbackManager);
      items1 = [...items];
      obj = closure_6(FeedbackManager);
      tmp2 = closure_5;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      FeedbackManager = tmp2Result;
      tmp2Result.actions = {
        VOICE_CHANNEL_SHOW_FEEDBACK(arg0) {
              return tmp2Result.handleShowVoiceFeedback(arg0);
            },
        STREAM_CLOSE(arg0) {
              return tmp2Result.handleShowStreamFeedback(arg0);
            },
        EMBEDDED_ACTIVITY_CLOSE(arg0) {
              return tmp2Result.handleShowActivityFeedback(arg0);
            },
        IN_APP_REPORTS_SHOW_FEEDBACK(arg0) {
              return tmp2Result.handleInAppReportsFeedback(arg0);
            }
      };
      tmp2Result.handleShowStreamFeedback = (streamKey) => {
        if (streamKey.canShowFeedback) {
          const result = tmp2Result.possiblyShowFeedbackModal(constants.STREAM, () => {
            let obj = streamKey(paths[10]);
            const decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
            const streamKey = decodeStreamKeyResult;
            const channel = channel.getChannel(decodeStreamKeyResult.channelId);
            if (null == channel) {
              let videoStats = store.getVideoStats(streamKey);
              if (null == videoStats) {
                videoStats = {};
              }
              obj = { media_session_id: store.getMediaSessionId(streamKey), rtc_connection_id: store.getRtcConnectionId(streamKey), stream_region: store.getRegion(streamKey), max_viewers: store.getMaxViewers(streamKey) };
              const merged = Object.assign(videoStats);
              const paths = streamKey(paths[12])(paths[11], paths.paths);
              streamKey(paths[13]).runAfterInteractions(() => {
                let obj = obj(closure_2[14]);
                obj = { stream: decodeStreamKeyResult, analyticsData: obj };
                obj.openLazy(closure_2, "StreamFeedback" + decodeStreamKeyResult, obj);
              });
              const obj5 = streamKey(paths[13]);
            }
          });
        }
      };
      tmp2Result.handleShowActivityFeedback = (applicationId) => {
        applicationId = applicationId.applicationId;
        const _location = applicationId.location;
        const application = application.getApplication(applicationId);
        const channel2 = channel.getChannel(applicationId(application[15]).getEmbeddedActivityLocationChannelId(_location));
        if (tmp2) {
          const result = tmp2Result.possiblyShowFeedbackModal(constants.ACTIVITY, () => {
            const applicationId = applicationId(application[12])(application[16], application.paths);
            const _location = { media_session_id: store.getMediaSessionId(), rtc_connection_id: store.getRTCConnectionId() };
            const obj = { media_session_id: store.getMediaSessionId(), rtc_connection_id: store.getRTCConnectionId() };
            applicationId(application[13]).runAfterInteractions(() => {
              let obj = obj(closure_2[14]);
              obj = { analyticsData: obj, activityApplication: closure_2, channel: closure_3, embeddedActivityLocation: obj };
              obj.openLazy(closure_0, "ActivityFeedback" + obj.id + closure_0, obj);
            });
          });
        }
      };
      tmp2Result.handleShowVoiceFeedback = (analyticsData) => {
        const result = analyticsData.analyticsData.possiblyShowFeedbackModal(constants.VOICE, () => {
          const analyticsData = analyticsData(paths[12])(paths[17], paths.paths);
          analyticsData(paths[13]).runAfterInteractions(() => {
            let obj = callback(closure_2[14]);
            obj = { analyticsData: channel_id };
            obj.openLazy(channel_id, "VoiceFeedback" + channel_id.channel_id, obj);
          });
        });
      };
      tmp2Result.handleInAppReportsFeedback = (arg0) => {
        ({ reportId: closure_0, reportType: closure_1 } = arg0);
        const result = tmp2Result.possiblyShowFeedbackModal(constants.IN_APP_REPORTS, () => {
          const callback = callback(paths[12])(paths[18], paths.paths);
          callback(paths[13]).runAfterInteractions(() => {
            let obj = callback(closure_2[14]);
            let str = "";
            if (null != closure_0) {
              str = closure_0;
            }
            obj = { reportId: closure_0, reportType: callback };
            obj.openLazy(closure_0, "ReportingFeedback" + callback + str, obj);
          });
        });
      };
      return tmp2Result;
    }
  }
  const arg1 = FeedbackManager;
  callback2(FeedbackManager, arg0);
  return callback(FeedbackManager);
}(importDefault(dependencyMap[19]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/feedback/native/FeedbackManager.tsx");

export default tmp2;
