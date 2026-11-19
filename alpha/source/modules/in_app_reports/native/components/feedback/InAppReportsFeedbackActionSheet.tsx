// Module ID: 19563
// Function ID: 19564
// Name: InAppReportsFeedbackActionSheet
// Dependencies: [19, 1072, 10491, 21, 19564, 19565, 10512, 1113, 1256, 19566, 10494, 5473, 2]
// Exports: default

// Module 19563 (InAppReportsFeedbackActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import ToastUtils from "ToastUtils" /* 5473 */;
import Constants2 from "Constants" /* 10491 */;
import FeedbackUtils from "FeedbackUtils" /* 10494 */;
import FeedbackActionSheetDefault from "FeedbackActionSheet" /* 10512 */;
import getInAppReportsFeedbackOptionsDefault from "getInAppReportsFeedbackOptions" /* 19564 */;
import improperGetEnglishIntlMessageText from "improperGetEnglishIntlMessageText" /* 19565 */;
import trackInAppReportsFeedbackDefault from "trackInAppReportsFeedback" /* 19566 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const FeedbackType = Constants2.FeedbackType;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx");

export default function InAppReportsFeedbackActionSheet(arg0) {
  ({ reportId: require, reportType: importDefault } = arg0);
  const tmp = getInAppReportsFeedbackOptionsDefault();
  let obj = improperGetEnglishIntlMessageText;
  const result = obj.improperGetEnglishIntlMessageText("CALL_FEEDBACK_OPTION_OTHER");
  let tmp3 = FeedbackActionSheetDefault;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  const intl3 = intl4.intl;
  const items = [result];
  return <tmp3 headerLabel={intl.string(intl4.t.MP5lDj)} showHeaderCloseButton hideDontShowAgainCheckbox ratingsBodyLabel={intl2.string(intl4.t["7Ct0Dj"])} reasonsHeaderLabel={intl3.string(intl4.t.FJmoxF)} reasons={tmp} feedbackReasons={items} otherKey={result} trackOpen={function trackOpen() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { report_id, report_type };
    obj.track(AnalyticEvents.IAR_FEEDBACK_MODAL_VIEWED, obj2);
  }} trackReport={function trackReport(arg0) {
    let dontShowAgain;
    let feedback;
    let flag;
    let rating;
    let reason;
    ({ rating, reason, feedback, dontShowAgain } = arg0);
    let value = null;
    if (null != reason) {
      value = reason.value;
    }
    const obj = { rating, problem: value, feedback, reportId, reportType, dontShowAgain: flag };
    const tmp3 = trackInAppReportsFeedbackDefault;
    if (feedback == null) {
      feedback = "";
    }
    flag = dontShowAgain;
    if (dontShowAgain == null) {
      flag = false;
    }
    tmp3(obj);
    if (dontShowAgain) {
      const obj3 = { feedbackType: FeedbackType.IN_APP_REPORTS, location: "InAppReportsFeedbackActionSheet" };
      const obj2 = FeedbackUtils;
      obj2.processOptOut(obj3);
    }
    if (null != rating) {
      const obj4 = ToastUtils;
      obj4.presentFeedbackSent();
    }
  }} />;
};
