// Module ID: 16103
// Function ID: 124636
// Name: InAppReportsFeedbackActionSheet
// Dependencies: [31, 653, 9457, 33, 16104, 16105, 9478, 1212, 675, 16106, 9460, 3831, 2]
// Exports: default

// Module 16103 (InAppReportsFeedbackActionSheet)
import "result";
import { AnalyticEvents } from "ME";
import { FeedbackType } from "FeedbackRating";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("FeedbackRating").fileFinishedImporting("modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx");

export default function InAppReportsFeedbackActionSheet(arg0) {
  let importDefault;
  let require;
  ({ reportId: require, reportType: importDefault } = arg0);
  let obj = require(16105) /* newGetEnglishMessageText */;
  const result = obj.improperGetEnglishIntlMessageText("CALL_FEEDBACK_OPTION_OTHER");
  obj = { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true };
  const tmp = importDefault(16104)();
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.headerLabel = intl.string(require(1212) /* getSystemLocale */.t.MP5lDj);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.ratingsBodyLabel = intl2.string(require(1212) /* getSystemLocale */.t["7Ct0Dj"]);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.reasonsHeaderLabel = intl3.string(require(1212) /* getSystemLocale */.t.FJmoxF);
  obj.reasons = tmp;
  const items = [result];
  obj.feedbackReasons = items;
  obj.otherKey = result;
  obj.trackOpen = function trackOpen() {
    let obj = outer1_1(outer1_2[8]);
    obj = { report_id: closure_0, report_type: closure_1 };
    obj.track(outer1_3.IAR_FEEDBACK_MODAL_VIEWED, obj);
  };
  obj.trackReport = function trackReport(arg0) {
    let dontShowAgain;
    let feedback;
    let rating;
    let reason;
    ({ rating, reason, feedback, dontShowAgain } = arg0);
    let value = null;
    if (null != reason) {
      value = reason.value;
    }
    let obj = { rating, problem: value };
    let str = "";
    if (null != feedback) {
      str = feedback;
    }
    obj.feedback = str;
    obj.reportId = closure_0;
    obj.reportType = closure_1;
    obj.dontShowAgain = null != dontShowAgain && dontShowAgain;
    outer1_1(outer1_2[9])(obj);
    if (dontShowAgain) {
      obj = { feedbackType: outer1_4.IN_APP_REPORTS, location: "InAppReportsFeedbackActionSheet" };
      outer1_0(outer1_2[10]).processOptOut(obj);
      const obj2 = outer1_0(outer1_2[10]);
    }
    if (null != rating) {
      outer1_0(outer1_2[11]).presentFeedbackSent();
      const obj4 = outer1_0(outer1_2[11]);
    }
  };
  return jsx(importDefault(9478), { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true });
};
