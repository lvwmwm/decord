// Module ID: 15906
// Function ID: 121874
// Name: trackOpen
// Dependencies: []
// Exports: default

// Module 15906 (trackOpen)
function trackOpen() {
  importDefault(dependencyMap[4]).track(AnalyticEvents.OPEN_POPOUT, { type: "Call Session Feedback" });
}
importAll(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
({ AudioFeedbackOption: closure_4, ConnectionFeedbackOption: closure_5, FeedbackCategory: closure_6, FeedbackType: closure_7, PeopleFeedbackOption: closure_8, VideoFeedbackOption: closure_9 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceFeedbackActionSheet.tsx");

export default function VoiceFeedbackActionSheet(analyticsData) {
  const arg1 = analyticsData.analyticsData;
  const intl = arg1(dependencyMap[5]).intl;
  const intl2 = arg1(dependencyMap[5]).intl;
  let obj = { value: constants3.CONNECTION };
  const stringResult = intl.string(arg1(dependencyMap[5]).t.Ss6tlb);
  const intl3 = arg1(dependencyMap[5]).intl;
  obj.label = intl3.string(importDefault(dependencyMap[6]).FVhMw6);
  const intl4 = arg1(dependencyMap[5]).intl;
  obj.problemsHeader = intl4.string(arg1(dependencyMap[5]).t.FJmoxF);
  let obj1 = arg1(dependencyMap[7]);
  obj.problemOptions = obj1.getConnectionFeedbackOptions();
  obj = { value: constants2.FREEFORM };
  const intl5 = arg1(dependencyMap[5]).intl;
  obj.label = intl5.string(arg1(dependencyMap[5]).t.emlT91);
  obj.freeformConfig = obj;
  obj = { value: constants3.AUDIO };
  const intl6 = arg1(dependencyMap[5]).intl;
  obj.label = intl6.string(importDefault(dependencyMap[6]).PL2l6A);
  const intl7 = arg1(dependencyMap[5]).intl;
  obj.problemsHeader = intl7.string(arg1(dependencyMap[5]).t.FJmoxF);
  let obj4 = arg1(dependencyMap[7]);
  obj.problemOptions = obj4.getAudioFeedbackOptions({ isMobile: true });
  obj1 = { value: constants.FREEFORM };
  const intl8 = arg1(dependencyMap[5]).intl;
  obj1.label = intl8.string(arg1(dependencyMap[5]).t.emlT91);
  obj.freeformConfig = obj1;
  const obj2 = { value: constants3.VIDEO };
  const intl9 = arg1(dependencyMap[5]).intl;
  obj2.label = intl9.string(importDefault(dependencyMap[6]).0WFzPh);
  const intl10 = arg1(dependencyMap[5]).intl;
  obj2.problemsHeader = intl10.string(arg1(dependencyMap[5]).t.FJmoxF);
  const stringResult1 = intl2.string(arg1(dependencyMap[5]).t.tLi4cR);
  obj2.problemOptions = arg1(dependencyMap[7]).getVideoFeedbackOptions();
  const obj3 = { value: constants5.FREEFORM };
  const intl11 = arg1(dependencyMap[5]).intl;
  obj3.label = intl11.string(arg1(dependencyMap[5]).t.emlT91);
  obj2.freeformConfig = obj3;
  obj4 = { value: constants3.PEOPLE };
  const intl12 = arg1(dependencyMap[5]).intl;
  obj4.label = intl12.string(importDefault(dependencyMap[6]).Moa3W9);
  const intl13 = arg1(dependencyMap[5]).intl;
  obj4.problemsHeader = intl13.string(arg1(dependencyMap[5]).t.FJmoxF);
  const obj8 = arg1(dependencyMap[7]);
  obj4.problemOptions = arg1(dependencyMap[7]).getPeopleFeedbackOptions();
  const obj5 = { value: constants4.FREEFORM };
  const intl14 = arg1(dependencyMap[5]).intl;
  obj5.label = intl14.string(arg1(dependencyMap[5]).t.emlT91);
  obj4.freeformConfig = obj5;
  const obj6 = { headerLabel: stringResult, showHeaderCloseButton: true, ratingBody: stringResult1 };
  const obj11 = arg1(dependencyMap[7]);
  const intl15 = arg1(dependencyMap[5]).intl;
  obj6.categoriesHeader = intl15.string(importDefault(dependencyMap[6]).tq8598);
  const items = [obj, obj, obj2, obj4];
  obj6.optionsTree = items;
  obj6.trackOpen = trackOpen;
  obj6.trackReport = function trackReport(dontShowAgain) {
    let category;
    let feedback;
    let rating;
    let reason;
    ({ rating, category, reason, feedback } = dontShowAgain);
    if (dontShowAgain.dontShowAgain) {
      let obj = analyticsData(paths[7]);
      obj = { feedbackType: constants2.VOICE, location: "VoiceFeedbackActionSheet" };
      obj.processOptOut(obj);
    }
    if (null != rating) {
      obj = { rating, category };
      let value;
      if (null != reason) {
        value = reason.value;
      }
      let tmp6 = null;
      if (null != value) {
        tmp6 = value;
      }
      obj.reasonDescription = tmp6;
      let variant;
      if (null != reason) {
        variant = reason.variant;
      }
      let tmp8 = null;
      if (null != variant) {
        tmp8 = variant;
      }
      obj.variant = tmp8;
      let str2 = "";
      if (null != feedback) {
        str2 = feedback;
      }
      obj.feedback = str2;
      obj.analyticsData = analyticsData;
      callback(paths[9])(constants.CALL_REPORT_PROBLEM, obj);
      if (null != reason) {
        if (obj3.shouldShowLogUploadForCategory(rating, category, reason)) {
          ({ media_session_id: obj6.mediaSessionId, rtc_connection_id: obj6.rtcConnectionId } = analyticsData);
          callback(paths[11]).openLazy(analyticsData(paths[13])(paths[12], paths.paths), "UploadLogs", {});
          const obj1 = {};
          const obj5 = callback(paths[11]);
        }
        const obj3 = analyticsData(paths[10]);
      }
      const tmp23 = callback(paths[9]);
      analyticsData(paths[14]).presentFeedbackSent();
      const obj4 = analyticsData(paths[14]);
    }
  };
  return jsx(importDefault(dependencyMap[8]), obj6);
};
