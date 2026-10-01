// Module ID: 16324
// Function ID: 16325
// Name: ActivityFeedbackActionSheet
// Dependencies: [19, 2005, 1074, 11121, 21, 1241, 16325, 11142, 1115, 11124, 4527, 16326, 2]
// Exports: default

// Module 16324 (ActivityFeedbackActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Constants2 from "Constants" /* 2005 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import Constants3 from "Constants" /* 11121 */;
import FeedbackUtils from "FeedbackUtils" /* 11124 */;
import FeedbackActionSheetDefault from "FeedbackActionSheet" /* 11142 */;
import getActivityReportOptionsDefault from "getActivityReportOptions" /* 16325 */;
import trackActivityProblemDefault from "trackActivityProblem" /* 16326 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ActivityFeedbackReasons = Constants2.ActivityFeedbackReasons;
const AnalyticEvents = Constants.AnalyticEvents;
const FeedbackType = Constants3.FeedbackType;
const jsx = Fragment.jsx;
const items = [, , ];
({ OTHER: arr[0], ADS: arr[1], NOT_FUN: arr[2] } = ActivityFeedbackReasons);
const result = size.fileFinishedImporting("modules/activities/native/ActivityFeedbackActionSheet.tsx");

export default function ActivityFeedbackActionSheet(activityApplication) {
  let analyticsData;
  let channel;
  let embeddedActivityLocation;
  activityApplication = activityApplication.activityApplication;
  ({ channel: importDefault, embeddedActivityLocation: dependencyMap, analyticsData: ActivityFeedbackReasons } = activityApplication);
  const embeddedActivityConfig = activityApplication.embeddedActivityConfig;
  let prop;
  if (embeddedActivityConfig != null) {
    prop = embeddedActivityConfig.displays_advertisements;
  }
  const tmp2 = getActivityReportOptionsDefault(true, true === prop);
  FeedbackActionSheetDefault;
  const intl = activityApplication(1115).intl;
  let obj2 = { applicationName: activityApplication.name };
  const intl2 = activityApplication(1115).intl;
  const intl3 = activityApplication(1115).intl;
  return <tmp3 headerLabel={intl.formatToPlainString(activityApplication(1115).t.QXYwoD, obj2)} showHeaderCloseButton ratingsBodyLabel={intl2.string(activityApplication(1115).t["9hk2KF"])} reasonsHeaderLabel={intl3.string(activityApplication(1115).t.g1q5fr)} reasons={tmp2} feedbackReasons={items} otherKey={ActivityFeedbackReasons.OTHER} trackOpen={function trackOpen() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: "Activity Feedback Sheet", application_id: activityApplication.id, application_name: activityApplication.name, game_id: activityApplication.id, source: "Activity End" };
    obj.track(AnalyticEvents.OPEN_POPOUT, obj2);
  }} trackReport={function trackReport(dontShowAgain) {
    let feedback;
    let rating;
    let reason;
    ({ rating, reason, feedback } = dontShowAgain);
    let value = null;
    dontShowAgain = dontShowAgain.dontShowAgain;
    if (null != reason) {
      value = reason.value;
    }
    if (dontShowAgain) {
      const obj2 = { application_id: activityApplication.id, rating };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.ACTIVITY_REPORT_DONT_SHOW, obj2);
      const obj4 = { feedbackType: FeedbackType.ACTIVITY, location: "ActivityFeedbackActionSheet" };
      const obj3 = FeedbackUtils;
      obj3.processOptOut(obj4);
    }
    if (null != rating) {
      const obj5 = ToastUtils;
      obj5.presentFeedbackSent();
      const obj6 = { problem: value, channel: importDefault, embeddedActivityLocation: dependencyMap, feedback, activityApplication, analyticsData: ActivityFeedbackReasons, location: "Activity End", rating };
      const tmp16 = trackActivityProblemDefault;
      if (feedback == null) {
        feedback = "";
      }
      tmp16(obj6);
    }
  }} />;
};
