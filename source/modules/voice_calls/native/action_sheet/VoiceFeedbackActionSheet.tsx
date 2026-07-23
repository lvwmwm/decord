// Module ID: 16031
// Function ID: 124090
// Name: trackOpen
// Dependencies: [31, 653, 9500, 33, 675, 1212, 2428, 9503, 16025, 16032, 16026, 4098, 16027, 1934, 3830, 2]
// Exports: default

// Module 16031 (trackOpen)
import "result";
import { AnalyticEvents } from "ME";
import FeedbackRating from "FeedbackRating";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function trackOpen() {
  importDefault(675).track(AnalyticEvents.OPEN_POPOUT, { type: "Call Session Feedback" });
}
({ AudioFeedbackOption: closure_4, ConnectionFeedbackOption: closure_5, FeedbackCategory: closure_6, FeedbackType: closure_7, PeopleFeedbackOption: closure_8, VideoFeedbackOption: closure_9 } = FeedbackRating);
const result = require("FeedbackRating").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceFeedbackActionSheet.tsx");

export default function VoiceFeedbackActionSheet(analyticsData) {
  analyticsData = analyticsData.analyticsData;
  const intl = analyticsData(1212).intl;
  const intl2 = analyticsData(1212).intl;
  let obj = { value: constants3.CONNECTION };
  const stringResult = intl.string(analyticsData(1212).t.Ss6tlb);
  const intl3 = analyticsData(1212).intl;
  obj.label = intl3.string(importDefault(2428).FVhMw6);
  const intl4 = analyticsData(1212).intl;
  obj.problemsHeader = intl4.string(analyticsData(1212).t.FJmoxF);
  let obj1 = analyticsData(9503);
  obj.problemOptions = obj1.getConnectionFeedbackOptions();
  obj = { value: constants2.FREEFORM };
  const intl5 = analyticsData(1212).intl;
  obj.label = intl5.string(analyticsData(1212).t.emlT91);
  obj.freeformConfig = obj;
  obj = { value: constants3.AUDIO };
  const intl6 = analyticsData(1212).intl;
  obj.label = intl6.string(importDefault(2428).PL2l6A);
  const intl7 = analyticsData(1212).intl;
  obj.problemsHeader = intl7.string(analyticsData(1212).t.FJmoxF);
  let obj4 = analyticsData(9503);
  obj.problemOptions = obj4.getAudioFeedbackOptions({ isMobile: true });
  obj1 = { value: constants.FREEFORM };
  const intl8 = analyticsData(1212).intl;
  obj1.label = intl8.string(analyticsData(1212).t.emlT91);
  obj.freeformConfig = obj1;
  const obj2 = { value: constants3.VIDEO };
  const intl9 = analyticsData(1212).intl;
  obj2.label = intl9.string(importDefault(2428)["0WFzPh"]);
  const intl10 = analyticsData(1212).intl;
  obj2.problemsHeader = intl10.string(analyticsData(1212).t.FJmoxF);
  const stringResult1 = intl2.string(analyticsData(1212).t.tLi4cR);
  obj2.problemOptions = analyticsData(9503).getVideoFeedbackOptions();
  let obj3 = { value: constants5.FREEFORM };
  const intl11 = analyticsData(1212).intl;
  obj3.label = intl11.string(analyticsData(1212).t.emlT91);
  obj2.freeformConfig = obj3;
  obj4 = { value: constants3.PEOPLE };
  const intl12 = analyticsData(1212).intl;
  obj4.label = intl12.string(importDefault(2428).Moa3W9);
  const intl13 = analyticsData(1212).intl;
  obj4.problemsHeader = intl13.string(analyticsData(1212).t.FJmoxF);
  const obj8 = analyticsData(9503);
  obj4.problemOptions = analyticsData(9503).getPeopleFeedbackOptions();
  let obj5 = { value: constants4.FREEFORM };
  const intl14 = analyticsData(1212).intl;
  obj5.label = intl14.string(analyticsData(1212).t.emlT91);
  obj4.freeformConfig = obj5;
  const obj6 = { headerLabel: stringResult, showHeaderCloseButton: true, ratingBody: stringResult1 };
  const obj11 = analyticsData(9503);
  const intl15 = analyticsData(1212).intl;
  obj6.categoriesHeader = intl15.string(importDefault(2428).tq8598);
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
      let obj = analyticsData(outer1_2[7]);
      obj = { feedbackType: outer1_7.VOICE, location: "VoiceFeedbackActionSheet" };
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
      outer1_1(outer1_2[9])(outer1_3.CALL_REPORT_PROBLEM, obj);
      if (null != reason) {
        if (obj3.shouldShowLogUploadForCategory(rating, category, reason)) {
          ({ media_session_id: obj6.mediaSessionId, rtc_connection_id: obj6.rtcConnectionId } = analyticsData);
          outer1_1(outer1_2[11]).openLazy(analyticsData(outer1_2[13])(outer1_2[12], outer1_2.paths), "UploadLogs", {});
          const obj1 = {};
          const obj5 = outer1_1(outer1_2[11]);
        }
        obj3 = analyticsData(outer1_2[10]);
      }
      const tmp23 = outer1_1(outer1_2[9]);
      analyticsData(outer1_2[14]).presentFeedbackSent();
      const obj4 = analyticsData(outer1_2[14]);
    }
  };
  return jsx(importDefault(16025), { headerLabel: stringResult, showHeaderCloseButton: true, ratingBody: stringResult1 });
};
