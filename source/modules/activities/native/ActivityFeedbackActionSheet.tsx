// Module ID: 16075
// Function ID: 124404
// Name: ActivityFeedbackReasons
// Dependencies: [31, 4155, 653, 9536, 33, 675, 16076, 9557, 1212, 9539, 3830, 16077, 2]
// Exports: default

// Module 16075 (ActivityFeedbackReasons)
import "result";
import { ActivityFeedbackReasons } from "items3";
import { AnalyticEvents } from "ME";
import { FeedbackType } from "FeedbackRating";
import { jsx } from "jsxProd";

const require = arg1;
const items = [, , ];
({ OTHER: arr[0], ADS: arr[1], NOT_FUN: arr[2] } = ActivityFeedbackReasons);
const result = require("ME").fileFinishedImporting("modules/activities/native/ActivityFeedbackActionSheet.tsx");

export default function ActivityFeedbackActionSheet(activityApplication) {
  let ActivityFeedbackReasons;
  let dependencyMap;
  let importDefault;
  activityApplication = activityApplication.activityApplication;
  ({ channel: importDefault, embeddedActivityLocation: dependencyMap, analyticsData: ActivityFeedbackReasons } = activityApplication);
  const embeddedActivityConfig = activityApplication.embeddedActivityConfig;
  let prop;
  if (null != embeddedActivityConfig) {
    prop = embeddedActivityConfig.displays_advertisements;
  }
  let obj = {};
  const tmp2 = importDefault(16076)(true, true === prop);
  const intl = activityApplication(1212).intl;
  obj = { applicationName: activityApplication.name };
  obj.headerLabel = intl.formatToPlainString(activityApplication(1212).t.QXYwoD, obj);
  obj.showHeaderCloseButton = true;
  const intl2 = activityApplication(1212).intl;
  obj.ratingsBodyLabel = intl2.string(activityApplication(1212).t["9hk2KF"]);
  const intl3 = activityApplication(1212).intl;
  obj.reasonsHeaderLabel = intl3.string(activityApplication(1212).t.g1q5fr);
  obj.reasons = tmp2;
  obj.feedbackReasons = items;
  obj.otherKey = ActivityFeedbackReasons.OTHER;
  obj.trackOpen = function trackOpen() {
    let obj = outer1_1(outer1_2[5]);
    obj = { type: "Activity Feedback Sheet", application_id: activityApplication.id, application_name: activityApplication.name, game_id: activityApplication.id, source: "Activity End" };
    obj.track(outer1_4.OPEN_POPOUT, obj);
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
      let obj = outer1_1(outer1_2[5]);
      obj = { application_id: activityApplication.id, rating };
      obj.track(outer1_4.ACTIVITY_REPORT_DONT_SHOW, obj);
      obj = { feedbackType: outer1_5.ACTIVITY, location: "ActivityFeedbackActionSheet" };
      activityApplication(outer1_2[9]).processOptOut(obj);
      const obj3 = activityApplication(outer1_2[9]);
    }
    if (null != rating) {
      activityApplication(outer1_2[10]).presentFeedbackSent();
      const obj1 = { problem: value, channel: closure_1, embeddedActivityLocation: closure_2 };
      let str2 = "";
      const obj5 = activityApplication(outer1_2[10]);
      if (null != feedback) {
        str2 = feedback;
      }
      obj1.feedback = str2;
      obj1.activityApplication = activityApplication;
      obj1.analyticsData = closure_3;
      obj1.location = "Activity End";
      obj1.rating = rating;
      outer1_1(outer1_2[11])(obj1);
      const tmp17 = outer1_1(outer1_2[11]);
    }
  };
  return jsx(importDefault(9557), { applicationName: activityApplication.name });
};
