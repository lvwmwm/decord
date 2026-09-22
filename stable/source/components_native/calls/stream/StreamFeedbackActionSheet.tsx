// Module ID: 17468
// Function ID: 17469
// Name: StreamFeedbackActionSheet
// Dependencies: [19, 502, 1074, 11759, 21, 7840, 504, 1114, 2658, 11762, 17469, 1240, 17329, 17470, 4603, 17471, 1896, 4334, 2]
// Exports: default

// Module 17468 (StreamFeedbackActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ToastUtils from "ToastUtils" /* 4334 */;
import FeedbackUtils from "FeedbackUtils" /* 11762 */;
import trackStreamProblemDefault from "trackStreamProblem" /* 17329 */;
import shouldShowLogUploadForCategory from "shouldShowLogUploadForCategory" /* 17470 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const Constants = fn(11759);
({ FeedbackCategory: hasOwnProperty, FeedbackType: metroRequire, StreamFeedbackOption: closure_7 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/stream/StreamFeedbackActionSheet.tsx");

export default function StreamFeedbackActionSheet(stream) {
  stream = stream.stream;
  const analyticsData = stream.analyticsData;
  dependencyMap = stream(7840).useGetStreamApplication(stream);
  let obj = stream(7840);
  const items = [AuthenticationStore];
  const stateFromStores = stream(504).useStateFromStores(items, () => AuthenticationStore.getId() === stream.ownerId);
  const intl = stream(1114).intl;
  let obj2 = stream(504);
  const intl2 = stream(1114).intl;
  const stringResult = intl.string(stream(1114).t["5smP3R"]);
  const intl3 = stream(1114).intl;
  let stringResult2 = intl3.string(stream(1114).t.CqjnLN);
  let obj3 = { value: stateFromStores ? constants.STREAMING : constants.STREAM_WATCHING, label: null, problemsHeader: null, problemOptions: null, freeformConfig: null };
  const intl4 = tmp(1114).intl;
  let tmp9 = analyticsData(2658);
  if (stateFromStores) {
    let TVTIT1 = tmp9["0ZBLiZ"];
    let tmp10 = tmp8;
  } else {
    TVTIT1 = tmp9.TVTIT1;
    tmp10 = tmp8;
  }
  obj3.label = intl4.string(TVTIT1);
  const intl5 = tmp(1114).intl;
  obj3.problemsHeader = intl5.string(stream(1114).t["6Y1t5P"]);
  const stringResult1 = intl2.string(stream(1114).t["0uxA2V"]);
  obj3.problemOptions = stream(11762).getStreamFeedbackOptions({ isStreamer: stateFromStores });
  let obj4 = { value: constants2.FREEFORM, label: null };
  const intl6 = tmp(1114).intl;
  obj4.label = intl6.string(stream(1114).t.emlT91);
  obj3.freeformConfig = obj4;
  let obj5 = { headerLabel: stringResult, showHeaderCloseButton: true, ratingBody: null, categoriesHeader: null, optionsTree: null, trackOpen: null, trackReport: null };
  const tmp11 = jsx;
  const tmpResult = stream(11762);
  if (stateFromStores) {
    stringResult2 = stringResult1;
  }
  obj5.ratingBody = stringResult2;
  const intl7 = tmp(1114).intl;
  obj5.categoriesHeader = intl7.string(tmp10(2658).tq8598);
  const items1 = [obj3];
  obj5.optionsTree = items1;
  obj5.trackOpen = function trackOpen() {
    const obj2 = { type: "Stream Feedback Sheet", other_user_id: stream.ownerId, application_id: null, application_name: null, game_id: null };
    let id = null;
    if (null != closure_2) {
      id = tmp.id;
    }
    obj2.application_id = id;
    let name = null;
    if (null != closure_2) {
      name = tmp.name;
    }
    obj2.application_name = name;
    let id1 = null;
    if (null != closure_2) {
      id1 = tmp.id;
    }
    obj2.game_id = id1;
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, obj2);
  };
  obj5.trackReport = function trackReport(dontShowAgain) {
    ({ rating, category, reason, feedback } = dontShowAgain);
    if (dontShowAgain.dontShowAgain) {
      const obj2 = { feedbackType: constants.STREAM, location: "StreamFeedbackActionSheet" };
      FeedbackUtils.processOptOut(obj2);
    }
    if (null != rating) {
      const obj5 = { category, problem: null, variant: null, stream: null, feedback: null, streamApplication: null, analyticsData: null, location: "Stream End", rating: null };
      value = undefined;
      if (reason != null) {
        value = reason.value;
      }
      if (value == null) {
        value = null;
      }
      obj5.problem = value;
      let variant;
      if (reason != null) {
        variant = reason.variant;
      }
      if (variant == null) {
        variant = null;
      }
      obj5.variant = variant;
      obj5.stream = stream;
      if (feedback == null) {
        feedback = "";
      }
      obj5.feedback = feedback;
      obj5.streamApplication = streamApplication;
      obj5.analyticsData = analyticsData;
      obj5.rating = rating;
      trackStreamProblemDefault(obj5);
      if (null != reason) {
        if (obj3.shouldShowLogUploadForCategory(rating, category, reason)) {
          ({ media_session_id: obj6.mediaSessionId, rtc_connection_id: obj6.rtcConnectionId } = tmp9);
          tmp22(4603).openLazy(asyncRequireImpl(17471, dependencyMap.paths), "UploadLogs", { mediaSessionId: null, rtcConnectionId: null });
          const obj7 = { mediaSessionId: null, rtcConnectionId: null };
          const tmp22Result = tmp22(4603);
        }
        obj3 = shouldShowLogUploadForCategory;
      }
      tmp22 = importDefault;
      tmp9 = analyticsData;
      ToastUtils.presentFeedbackSent();
    }
  };
  return tmp11(tmp10(17469), obj5);
};
