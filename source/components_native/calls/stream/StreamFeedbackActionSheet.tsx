// Module ID: 15895
// Function ID: 121792
// Name: StreamFeedbackActionSheet
// Dependencies: []
// Exports: default

// Module 15895 (StreamFeedbackActionSheet)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
({ FeedbackCategory: closure_5, FeedbackType: closure_6, StreamFeedbackOption: closure_7 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("components_native/calls/stream/StreamFeedbackActionSheet.tsx");

export default function StreamFeedbackActionSheet(stream) {
  stream = stream.stream;
  const arg1 = stream;
  const importDefault = stream.analyticsData;
  let obj = arg1(closure_2[5]);
  closure_2 = obj.useGetStreamApplication(stream);
  let obj1 = arg1(closure_2[6]);
  const items = [closure_3];
  const stateFromStores = obj1.useStateFromStores(items, () => id.getId() === stream.ownerId);
  const intl = arg1(closure_2[7]).intl;
  const intl2 = arg1(closure_2[7]).intl;
  const stringResult = intl.string(arg1(closure_2[7]).t.5smP3R);
  const intl3 = arg1(closure_2[7]).intl;
  let stringResult2 = intl3.string(arg1(closure_2[7]).t.CqjnLN);
  obj = { value: stateFromStores ? tmp5.STREAMING : tmp5.STREAM_WATCHING };
  const intl4 = arg1(closure_2[7]).intl;
  const tmp6 = importDefault(closure_2[8]);
  obj.label = intl4.string(stateFromStores ? tmp6.0ZBLiZ : tmp6.TVTIT1);
  const intl5 = arg1(closure_2[7]).intl;
  obj.problemsHeader = intl5.string(arg1(closure_2[7]).t.6Y1t5P);
  const stringResult1 = intl2.string(arg1(closure_2[7]).t.0uxA2V);
  obj.problemOptions = arg1(closure_2[9]).getStreamFeedbackOptions({ isStreamer: stateFromStores });
  obj = { value: constants.FREEFORM };
  const intl6 = arg1(closure_2[7]).intl;
  obj.label = intl6.string(arg1(closure_2[7]).t.emlT91);
  obj.freeformConfig = obj;
  obj1 = { headerLabel: stringResult, showHeaderCloseButton: true };
  const obj4 = arg1(closure_2[9]);
  const tmp7 = jsx;
  if (stateFromStores) {
    stringResult2 = stringResult1;
  }
  obj1.ratingBody = stringResult2;
  const intl7 = arg1(closure_2[7]).intl;
  obj1.categoriesHeader = intl7.string(importDefault(closure_2[8]).tq8598);
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
    obj.track(constants.OPEN_POPOUT, obj);
  };
  obj1.trackReport = function trackReport(dontShowAgain) {
    let category;
    let feedback;
    let rating;
    let reason;
    ({ rating, category, reason, feedback } = dontShowAgain);
    if (dontShowAgain.dontShowAgain) {
      let obj = stream(user[9]);
      obj = { feedbackType: constants2.STREAM, location: "StreamFeedbackActionSheet" };
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
        const obj3 = stream(user[13]);
      }
      const tmp25 = analyticsData(user[12]);
      stream(user[17]).presentFeedbackSent();
      const obj4 = stream(user[17]);
    }
  };
  return tmp7(importDefault(closure_2[10]), obj1);
};
