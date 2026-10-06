// Module ID: 16317
// Function ID: 16318
// Name: FeedbackManager
// Dependencies: [5064, 2051, 4860, 4876, 10991, 16318, 4889, 16321, 1987, 6459, 4801, 4461, 16326, 16329, 16331, 2]

// Module 16317 (FeedbackManager)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4461 */;
import Constants from "Constants" /* 10991 */;
import ApplicationStore from "ApplicationStore" /* 5064 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4860 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4876 */;
import FeedbackManager2 from "feedback/FeedbackManager" /* 16318 */;
import size from "module_2" /* 2 */;

let videoStats;

const FeedbackType = Constants.FeedbackType;
class FeedbackManager extends FeedbackManager2 {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      VOICE_CHANNEL_SHOW_FEEDBACK(analyticsData) {
        return require.handleShowVoiceFeedback(analyticsData);
      },
      STREAM_CLOSE(streamKey) {
        return require.handleShowStreamFeedback(streamKey);
      },
      EMBEDDED_ACTIVITY_CLOSE(applicationId) {
        return require.handleShowActivityFeedback(applicationId);
      },
      IN_APP_REPORTS_SHOW_FEEDBACK(arg0) {
        return require.handleInAppReportsFeedback(arg0);
      }
    };
    applyArgumentsResult.handleShowStreamFeedback = function handleShowStreamFeedback(streamKey) {
      streamKey = streamKey.streamKey;
      if (streamKey.canShowFeedback) {
        const tmp = require;
        const tmp2 = FeedbackType;
        const result = require.possiblyShowFeedbackModal(FeedbackType.STREAM, () => {
          let obj = streamKey(closure_1_2[6]);
          const decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
          streamKey = decodeStreamKeyResult;
          channel = channel.getChannel(decodeStreamKeyResult.channelId);
          let isGuildStageVoiceResult;
          if (channel != null) {
            isGuildStageVoiceResult = channel.isGuildStageVoice();
          }
          if (!isGuildStageVoiceResult) {
            videoStats = videoStats.getVideoStats(tmp3);
            if (videoStats == null) {
              videoStats = {};
            }
            let obj2 = { media_session_id: videoStats.getMediaSessionId(streamKey), rtc_connection_id: videoStats.getRtcConnectionId(streamKey), stream_region: videoStats.getRegion(streamKey), max_viewers: videoStats.getMaxViewers(streamKey) };
            const merged = Object.assign(videoStats);
            let closure_2 = tmp(tmp2[8])(tmp2[7], tmp2.paths);
            const tmpResult = streamKey(closure_1_2[9]);
            tmpResult.runAfterInteractions(() => {
              obj2 = { stream: decodeStreamKeyResult, analyticsData: obj2 };
              const obj = closure_3_1(closure_3_2[10]);
              obj.openLazy(closure_2, "StreamFeedback" + streamKey, obj2);
            });
          }
        });
      }
    };
    applyArgumentsResult.handleShowActivityFeedback = function handleShowActivityFeedback(applicationId) {
      applicationId = applicationId.applicationId;
      const _location = applicationId.location;
      const showFeedback = applicationId.showFeedback;
      const application = ApplicationStore.getApplication(applicationId);
      const obj = embeddedActivityLocationUtils;
      const channel = ChannelStore.getChannel(obj.getEmbeddedActivityLocationChannelId(_location));
      const tmp2 = null != application && showFeedback;
      if (tmp2) {
        const result = require.possiblyShowFeedbackModal(FeedbackType.ACTIVITY, () => {
          let channel;
          let closure_0 = applicationId(application[8])(application[12], application.paths);
          let analyticsData = { media_session_id: closure_1_5.getMediaSessionId(), rtc_connection_id: closure_1_5.getRTCConnectionId() };
          let obj2 = applicationId(application[9]);
          obj2.runAfterInteractions(() => {
            analyticsData = closure_3_1(closure_3_2[10]);
            const obj2 = { analyticsData, activityApplication: application, channel, embeddedActivityLocation: _location };
            analyticsData.openLazy(closure_0, "ActivityFeedback" + _location.id + applicationId, obj2);
          });
        });
      }
    };
    applyArgumentsResult.handleShowVoiceFeedback = function handleShowVoiceFeedback(analyticsData) {
      analyticsData = analyticsData.analyticsData;
      const result = require.possiblyShowFeedbackModal(FeedbackType.VOICE, () => {
        let closure_0 = analyticsData(paths[8])(paths[13], paths.paths);
        let obj = analyticsData(paths[9]);
        obj.runAfterInteractions(() => {
          const obj = closure_3_1(closure_3_2[10]);
          const obj2 = { analyticsData };
          obj.openLazy(closure_0, "VoiceFeedback" + analyticsData.channel_id, obj2);
        });
      });
    };
    applyArgumentsResult.handleInAppReportsFeedback = function handleInAppReportsFeedback(arg0) {
      let closure_129_0;
      let closure_129_1;
      ({ reportId: closure_129_0, reportType: closure_129_1 } = arg0);
      const result = require.possiblyShowFeedbackModal(FeedbackType.IN_APP_REPORTS, () => {
        let closure_0 = closure_1_0(paths[8])(paths[14], paths.paths);
        const obj = closure_1_0(paths[9]);
        obj.runAfterInteractions(() => {
          let str = closure_2_0;
          const openLazy = closure_3_1(closure_3_2[10]).openLazy;
          closure_3_1(closure_3_2[10]);
          const tmp2 = closure_0;
          const tmp4 = closure_2_0;
          if (closure_2_0 == null) {
            str = "";
          }
          openLazy(tmp2, "ReportingFeedback" + reportType + str, { reportId: tmp4, reportType });
        });
      });
    };
    return applyArgumentsResult;
  }
}
const feedbackManager = new FeedbackManager();
let result = size.fileFinishedImporting("modules/feedback/native/FeedbackManager.tsx");

export default feedbackManager;
