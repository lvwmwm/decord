// Module ID: 10158
// Function ID: 10159
// Name: NotificationSurveyActionSheet
// Dependencies: [19, 10136, 1072, 21, 1114, 1253, 10159, 10139, 5706, 2]
// Exports: default

// Module 10158 (NotificationSurveyActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl7 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import Constants2 from "Constants" /* 10136 */;
import PushFeedbackActions from "PushFeedbackActions" /* 10139 */;
import FeedbackActionSheetDefault from "FeedbackActionSheet" /* 10159 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function trackOpen() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Notification Feedback Sheet", source: "Notification End" });
}
const constants = Constants2.NotificationUserFeedbackReasons;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/notifications/native/NotificationSurveyActionSheet.tsx");

export default function NotificationSurveyActionSheet(arg0) {
  let _location;
  let intl;
  let intl2;
  let intl3;
  let message_id;
  let notification_type;
  ({ notificationType: require, location: importDefault, messageId: dependencyMap } = arg0);
  let obj = { value: constants.TOO_MANY, label: intl.string(intl7.t.pLeQp0) };
  intl = intl7.intl;
  const items = [obj, , ];
  let obj2 = { value: constants.IRRELEVANT, label: intl2.string(intl7.t.tuwPcC) };
  intl2 = intl7.intl;
  items[1] = obj2;
  let obj3 = { value: constants.DISLIKE_CONTENT, label: intl3.string(intl7.t.glUMhg) };
  intl3 = intl7.intl;
  items[2] = obj3;
  FeedbackActionSheetDefault;
  const intl4 = intl7.intl;
  const intl5 = intl7.intl;
  const intl6 = intl7.intl;
  return <tmp headerLabel={intl4.string(intl7.t.wGioO1)} showHeaderCloseButton hideDontShowAgainCheckbox ratingsBodyLabel={intl5.string(intl7.t.Yzl7Or)} reasonsHeaderLabel={intl6.string(intl7.t.g1q5fr)} reasons={items} trackOpen={trackOpen} trackReport={function handleSubmit(arg0) {
    let rating;
    let reason;
    ({ rating, reason } = arg0);
    if (null != rating) {
      let value = null;
      const track = AnalyticsUtilsDefault.track;
      const NOTIFICATION_REPORT_SUBMITTED = AnalyticEvents.NOTIFICATION_REPORT_SUBMITTED;
      AnalyticsUtilsDefault;
      if (null != reason) {
        value = reason.value;
      }
      const obj = { reason: value, rating, notification_type: require, location: importDefault, message_id: dependencyMap };
      track(NOTIFICATION_REPORT_SUBMITTED, obj);
      const obj2 = PushFeedbackActions;
      obj2.handleSurveyCleanup();
      const obj3 = ToastUtils;
      obj3.presentFeedbackSent();
    }
  }} />;
};
