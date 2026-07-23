// Module ID: 16024
// Function ID: 124052
// Name: StreamFeedbackActionSheet
// Dependencies: [31, 1194, 653, 9500, 33, 6981, 566, 1212, 2428, 9503, 16025, 675, 15893, 16026, 4098, 16027, 1934, 3830, 2]
// Exports: default

// Module 16024 (StreamFeedbackActionSheet)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import FeedbackRating from "FeedbackRating";
import { jsx } from "jsxProd";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ FeedbackCategory: closure_5, FeedbackType: closure_6, StreamFeedbackOption: closure_7 } = FeedbackRating);
const result = require("ME").fileFinishedImporting("components_native/calls/stream/StreamFeedbackActionSheet.tsx");

export default function StreamFeedbackActionSheet(stream) {
  stream = stream.stream;
  const analyticsData = stream.analyticsData;
  let obj = stream(6981);
  const dependencyMap = obj.useGetStreamApplication(stream);
  let obj1 = stream(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_3.getId() === stream.ownerId);
  const intl = stream(1212).intl;
  const intl2 = stream(1212).intl;
  const stringResult = intl.string(stream(1212).t["5smP3R"]);
  const intl3 = stream(1212).intl;
  let stringResult2 = intl3.string(stream(1212).t.CqjnLN);
  obj = { value: stateFromStores ? tmp5.STREAMING : tmp5.STREAM_WATCHING };
  const intl4 = stream(1212).intl;
  let tmp6 = analyticsData(2428);
  obj.label = intl4.string(stateFromStores ? tmp6["0ZBLiZ"] : tmp6.TVTIT1);
  const intl5 = stream(1212).intl;
  obj.problemsHeader = intl5.string(stream(1212).t["6Y1t5P"]);
  const stringResult1 = intl2.string(stream(1212).t["0uxA2V"]);
  obj.problemOptions = stream(9503).getStreamFeedbackOptions({ isStreamer: stateFromStores });
  obj = { value: constants.FREEFORM };
  const intl6 = stream(1212).intl;
  obj.label = intl6.string(stream(1212).t.emlT91);
  obj.freeformConfig = obj;
  obj1 = { headerLabel: stringResult, showHeaderCloseButton: true };
  let obj4 = stream(9503);
  const tmp7 = jsx;
  if (stateFromStores) {
    stringResult2 = stringResult1;
  }
  obj1.ratingBody = stringResult2;
  const intl7 = stream(1212).intl;
  obj1.categoriesHeader = intl7.string(analyticsData(2428).tq8598);
  const items1 = [obj];
  obj1.optionsTree = items1;
  obj1.trackOpen = function trackOpen() {
    let obj = analyticsData(user[11]);
    obj = { type: "Stream Feedback Sheet", other_user_id: stream.ownerId };
    let id = null;
    if (null != user) {
      id = user.id;
    }
    obj.application_id = id;
    let name = null;
    if (null != user) {
      name = user.name;
    }
    obj.application_name = name;
    let id1 = null;
    if (null != user) {
      id1 = user.id;
    }
    obj.game_id = id1;
    obj.track(outer1_4.OPEN_POPOUT, obj);
  };
  obj1.trackReport = function trackReport(dontShowAgain) {
    let category;
    let feedback;
    let rating;
    let reason;
    ({ rating, category, reason, feedback } = dontShowAgain);
    if (dontShowAgain.dontShowAgain) {
      let obj = stream(user[9]);
      obj = { feedbackType: outer1_6.STREAM, location: "StreamFeedbackActionSheet" };
      obj.processOptOut(obj);
    }
    if (null != rating) {
      obj = { category };
      let value;
      if (null != reason) {
        value = reason.value;
      }
      let tmp6 = null;
      if (null != value) {
        tmp6 = value;
      }
      obj.problem = tmp6;
      let variant;
      if (null != reason) {
        variant = reason.variant;
      }
      let tmp8 = null;
      if (null != variant) {
        tmp8 = variant;
      }
      obj.variant = tmp8;
      obj.stream = stream;
      let str2 = "";
      if (null != feedback) {
        str2 = feedback;
      }
      obj.feedback = str2;
      obj.streamApplication = user;
      obj.analyticsData = analyticsData;
      obj.location = "Stream End";
      obj.rating = rating;
      analyticsData(user[12])(obj);
      if (null != reason) {
        if (obj3.shouldShowLogUploadForCategory(rating, category, reason)) {
          ({ media_session_id: obj6.mediaSessionId, rtc_connection_id: obj6.rtcConnectionId } = analyticsData);
          analyticsData(user[14]).openLazy(stream(user[16])(user[15], user.paths), "UploadLogs", {});
          const obj1 = {};
          const obj5 = analyticsData(user[14]);
        }
        obj3 = stream(user[13]);
      }
      const tmp25 = analyticsData(user[12]);
      stream(user[17]).presentFeedbackSent();
      const obj4 = stream(user[17]);
    }
  };
  return tmp7(analyticsData(16025), obj1);
};
