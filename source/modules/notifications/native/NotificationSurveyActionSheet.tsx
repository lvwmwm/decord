// Module ID: 9512
// Function ID: 74031
// Name: trackOpen
// Dependencies: []
// Exports: default

// Module 9512 (trackOpen)
function trackOpen() {
  importDefault(dependencyMap[5]).track(AnalyticEvents.OPEN_POPOUT, {});
}
importAll(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[1]).NotificationUserFeedbackReasons;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/notifications/native/NotificationSurveyActionSheet.tsx");

export default function NotificationSurveyActionSheet(arg0) {
  ({ notificationType: closure_0, location: closure_1, messageId: closure_2 } = arg0);
  let obj = { value: constants.TOO_MANY };
  const intl = arg1(dependencyMap[4]).intl;
  obj.label = intl.string(arg1(dependencyMap[4]).t.pLeQp0);
  const items = [obj, , ];
  obj = { value: constants.IRRELEVANT };
  const intl2 = arg1(dependencyMap[4]).intl;
  obj.label = intl2.string(arg1(dependencyMap[4]).t.tuwPcC);
  items[1] = obj;
  obj = { value: constants.DISLIKE_CONTENT };
  const intl3 = arg1(dependencyMap[4]).intl;
  obj.label = intl3.string(arg1(dependencyMap[4]).t.glUMhg);
  items[2] = obj;
  const obj1 = { "Null": null, "Null": null, "Null": null };
  const intl4 = arg1(dependencyMap[4]).intl;
  obj1.headerLabel = intl4.string(arg1(dependencyMap[4]).t.wGioO1);
  const intl5 = arg1(dependencyMap[4]).intl;
  obj1.ratingsBodyLabel = intl5.string(arg1(dependencyMap[4]).t.Yzl7Or);
  const intl6 = arg1(dependencyMap[4]).intl;
  obj1.reasonsHeaderLabel = intl6.string(arg1(dependencyMap[4]).t.g1q5fr);
  obj1.reasons = items;
  obj1.trackOpen = trackOpen;
  obj1.trackReport = function trackReport(arg0) {
    let rating;
    let reason;
    ({ rating, reason } = arg0);
    if (null != rating) {
      let obj = callback2(paths[5]);
      obj = {};
      let value = null;
      if (null != reason) {
        value = reason.value;
      }
      obj.reason = value;
      obj.rating = rating;
      obj.notification_type = callback;
      obj.location = callback2;
      obj.message_id = paths;
      obj.track(constants.NOTIFICATION_REPORT_SUBMITTED, obj);
    }
    callback(paths[7]).handleSurveyCleanup();
    const obj3 = callback(paths[7]);
    obj = {};
    const obj4 = callback2(paths[8]);
    const intl = callback(paths[4]).intl;
    obj.header = intl.string(callback(paths[4]).t.wGioO1);
    obj4.openLazy(callback(paths[10])(paths[9], paths.paths), "UserFeedbackSurvey", obj);
  };
  return jsx(importDefault(dependencyMap[6]), obj1);
};
