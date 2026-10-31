// Module ID: 19460
// Function ID: 19461
// Name: VoiceFeedbackActionSheet
// Dependencies: [19, 1072, 10158, 21, 1252, 1113, 2804, 10161, 19454, 19461, 19455, 5258, 19456, 1994, 5711, 2]
// Exports: default

// Module 19460 (VoiceFeedbackActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants2 from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import _modDef2804 from "module_2804" /* 2804 */;
import ToastUtils from "ToastUtils" /* 5711 */;
import FeedbackUtils from "FeedbackUtils" /* 10161 */;
import FeedbackActionSheetV2Default from "FeedbackActionSheetV2" /* 19454 */;
import shouldShowLogUploadForCategory from "shouldShowLogUploadForCategory" /* 19455 */;
import trackVoiceFeedbackDefault from "trackVoiceFeedback" /* 19461 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 10158 */;
import size from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function trackOpen() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Call Session Feedback" });
}
const AnalyticEvents = Constants2.AnalyticEvents;
({ AudioFeedbackOption: closure_4, ConnectionFeedbackOption: hasOwnProperty, FeedbackCategory: metroRequire, FeedbackType: metroImportDefault, PeopleFeedbackOption: metroImportAll, VideoFeedbackOption: c9 } = Constants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceFeedbackActionSheet.tsx");

export default function VoiceFeedbackActionSheet(analyticsData) {
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj11;
  let obj12;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  analyticsData = analyticsData.analyticsData;
  const intl = analyticsData(1113).intl;
  const stringResult = intl.string(analyticsData(1113).t.Ss6tlb);
  const intl2 = analyticsData(1113).intl;
  let obj = { value: constants3.CONNECTION, label: intl3.string(_modDef2804.FVhMw6), problemsHeader: intl4.string(analyticsData(1113).t.FJmoxF), problemOptions: obj2.getConnectionFeedbackOptions(), freeformConfig: obj3 };
  const stringResult1 = intl2.string(analyticsData(1113).t.tLi4cR);
  intl3 = analyticsData(1113).intl;
  intl4 = analyticsData(1113).intl;
  obj2 = analyticsData(10161);
  obj3 = { value: constants2.FREEFORM, label: intl5.string(analyticsData(1113).t.emlT91) };
  intl5 = analyticsData(1113).intl;
  let obj4 = { value: constants3.AUDIO, label: intl6.string(_modDef2804.PL2l6A), problemsHeader: intl7.string(analyticsData(1113).t.FJmoxF), problemOptions: obj5.getAudioFeedbackOptions({ isMobile: true }), freeformConfig: obj6 };
  intl6 = analyticsData(1113).intl;
  intl7 = analyticsData(1113).intl;
  obj5 = analyticsData(10161);
  obj6 = { value: constants.FREEFORM, label: intl8.string(analyticsData(1113).t.emlT91) };
  intl8 = analyticsData(1113).intl;
  let obj7 = { value: constants3.VIDEO, label: intl9.string(_modDef2804["0WFzPh"]), problemsHeader: intl10.string(analyticsData(1113).t.FJmoxF), problemOptions: obj8.getVideoFeedbackOptions(), freeformConfig: obj9 };
  intl9 = analyticsData(1113).intl;
  intl10 = analyticsData(1113).intl;
  obj8 = analyticsData(10161);
  obj9 = { value: constants6.FREEFORM, label: intl11.string(analyticsData(1113).t.emlT91) };
  intl11 = analyticsData(1113).intl;
  const obj10 = { value: constants3.PEOPLE, label: intl12.string(_modDef2804.Moa3W9), problemsHeader: intl13.string(analyticsData(1113).t.FJmoxF), problemOptions: obj11.getPeopleFeedbackOptions(), freeformConfig: obj12 };
  intl12 = analyticsData(1113).intl;
  intl13 = analyticsData(1113).intl;
  obj11 = analyticsData(10161);
  obj12 = { value: constants5.FREEFORM, label: intl14.string(analyticsData(1113).t.emlT91) };
  intl14 = analyticsData(1113).intl;
  FeedbackActionSheetV2Default;
  const intl15 = analyticsData(1113).intl;
  const items = [obj, obj4, obj7, obj10];
  return <tmp3 headerLabel={stringResult} showHeaderCloseButton ratingBody={stringResult1} categoriesHeader={intl15.string(_modDef2804.tq8598)} optionsTree={items} trackOpen={trackOpen} trackReport={function trackReport(dontShowAgain) {
    let category;
    let feedback;
    let rating;
    let reason;
    let value;
    let variant;
    ({ rating, category, reason, feedback } = dontShowAgain);
    if (dontShowAgain.dontShowAgain) {
      const obj2 = { feedbackType: metroImportDefault.VOICE, location: "VoiceFeedbackActionSheet" };
      const obj = FeedbackUtils;
      obj.processOptOut(obj2);
    }
    if (null != rating) {
      const obj5 = { rating, category, reasonDescription: value, variant, feedback, analyticsData };
      value = undefined;
      const CALL_REPORT_PROBLEM = AnalyticEvents.CALL_REPORT_PROBLEM;
      const tmp20 = importDefault;
      const tmp22 = trackVoiceFeedbackDefault;
      if (reason != null) {
        value = reason.value;
      }
      if (value == null) {
        value = null;
      }
      variant = undefined;
      if (reason != null) {
        variant = reason.variant;
      }
      if (variant == null) {
        variant = null;
      }
      if (feedback == null) {
        feedback = "";
      }
      tmp22(CALL_REPORT_PROBLEM, obj5);
      const tmp7 = analyticsData;
      if (null != reason) {
        const obj3 = shouldShowLogUploadForCategory;
        if (obj3.shouldShowLogUploadForCategory(rating, category, reason)) {
          const obj7 = { mediaSessionId: null, rtcConnectionId: null };
          ({ media_session_id: obj6.mediaSessionId, rtc_connection_id: obj6.rtcConnectionId } = tmp7);
          const tmp20Result = tmp20(5258);
          tmp20Result.openLazy(asyncRequire(19456, dependencyMap.paths), "UploadLogs", obj7);
        }
      }
      const obj4 = ToastUtils;
      obj4.presentFeedbackSent();
    }
  }} />;
};
