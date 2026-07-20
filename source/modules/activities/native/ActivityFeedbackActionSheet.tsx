// Module ID: 15892
// Function ID: 121798
// Name: ActivityFeedbackReasons
// Dependencies: []
// Exports: default

// Module 15892 (ActivityFeedbackReasons)
importAll(dependencyMap[0]);
const ActivityFeedbackReasons = arg1(dependencyMap[1]).ActivityFeedbackReasons;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const FeedbackType = arg1(dependencyMap[3]).FeedbackType;
const jsx = arg1(dependencyMap[4]).jsx;
const items = [, , ];
({ OTHER: arr[0], ADS: arr[1], NOT_FUN: arr[2] } = ActivityFeedbackReasons);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/activities/native/ActivityFeedbackActionSheet.tsx");

export default function ActivityFeedbackActionSheet(activityApplication) {
  activityApplication = activityApplication.activityApplication;
  const arg1 = activityApplication;
  ({ channel: closure_1, embeddedActivityLocation: closure_2, analyticsData: closure_3 } = activityApplication);
  const embeddedActivityConfig = activityApplication.embeddedActivityConfig;
  let prop;
  if (null != embeddedActivityConfig) {
    prop = embeddedActivityConfig.displays_advertisements;
  }
  let obj = {};
  const tmp2 = importDefault(dependencyMap[6])(true, true === prop);
  const intl = arg1(dependencyMap[8]).intl;
  obj = { applicationName: activityApplication.name };
  obj.headerLabel = intl.formatToPlainString(arg1(dependencyMap[8]).t.QXYwoD, obj);
  obj.showHeaderCloseButton = true;
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.ratingsBodyLabel = intl2.string(arg1(dependencyMap[8]).t.9hk2KF);
  const intl3 = arg1(dependencyMap[8]).intl;
  obj.reasonsHeaderLabel = intl3.string(arg1(dependencyMap[8]).t.g1q5fr);
  obj.reasons = tmp2;
  obj.feedbackReasons = items;
  obj.otherKey = ActivityFeedbackReasons.OTHER;
  obj.trackOpen = function trackOpen() {
    let obj = callback(closure_2[5]);
    obj = { type: "Activity Feedback Sheet", application_id: activityApplication.id, application_name: activityApplication.name, game_id: activityApplication.id, source: "Activity End" };
    obj.track(constants.OPEN_POPOUT, obj);
  };
  obj.trackReport = function trackReport(dontShowAgain) {
    let feedback;
    let rating;
    let reason;
    ({ rating, reason, feedback } = dontShowAgain);
    let value = null;
    if (null != reason) {
      value = reason.value;
    }
    if (dontShowAgain.dontShowAgain) {
      let obj = callback(closure_2[5]);
      obj = { application_id: activityApplication.id, rating };
      obj.track(constants.ACTIVITY_REPORT_DONT_SHOW, obj);
      obj = { feedbackType: constants2.ACTIVITY, location: "ActivityFeedbackActionSheet" };
      activityApplication(closure_2[9]).processOptOut(obj);
      const obj3 = activityApplication(closure_2[9]);
    }
    if (null != rating) {
      activityApplication(closure_2[10]).presentFeedbackSent();
      const obj1 = { problem: value, channel: callback, embeddedActivityLocation: closure_2 };
      let str2 = "";
      const obj5 = activityApplication(closure_2[10]);
      if (null != feedback) {
        str2 = feedback;
      }
      obj1.feedback = str2;
      obj1.activityApplication = activityApplication;
      obj1.analyticsData = closure_3;
      obj1.location = "Activity End";
      obj1.rating = rating;
      callback(closure_2[11])(obj1);
      const tmp17 = callback(closure_2[11]);
    }
  };
  return jsx(importDefault(dependencyMap[7]), obj);
};
