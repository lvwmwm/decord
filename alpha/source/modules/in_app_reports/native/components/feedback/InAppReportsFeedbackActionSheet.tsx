// Module ID: 19662
// Function ID: 19663
// Name: InAppReportsFeedbackActionSheet
// Dependencies: [19, 1071, 12118, 21, 19663, 19664, 12139, 1112, 1255, 19665, 12121, 5693, 2]
// Exports: default

// Module 19662 (InAppReportsFeedbackActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl4 from "intl" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import ToastUtils from "ToastUtils" /* 5693 */;
import Constants2 from "Constants" /* 12118 */;
import FeedbackUtils from "FeedbackUtils" /* 12121 */;
import FeedbackActionSheetDefault from "FeedbackActionSheet" /* 12139 */;
import getInAppReportsFeedbackOptionsDefault from "getInAppReportsFeedbackOptions" /* 19663 */;
import improperGetEnglishIntlMessageText from "improperGetEnglishIntlMessageText" /* 19664 */;
import trackInAppReportsFeedbackDefault from "trackInAppReportsFeedback" /* 19665 */;
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
