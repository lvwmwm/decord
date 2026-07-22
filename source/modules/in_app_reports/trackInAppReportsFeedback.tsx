// Module ID: 15919
// Function ID: 121934
// Name: trackInAppReportsFeedback
// Dependencies: [670, 2, 6]
// Exports: default

// Module 15919 (trackInAppReportsFeedback)
import { AnalyticEvents } from "MessageEmbedTypes";
import _classCallCheck from "_classCallCheck";

const result = _classCallCheck.fileFinishedImporting("modules/in_app_reports/trackInAppReportsFeedback.tsx");

export default function trackInAppReportsFeedback(reportId) {
  let feedback;
  let problem;
  let reportType;
  reportId = reportId.reportId;
  ({ problem, feedback, reportType } = reportId);
  if (reportId === undefined) {
    reportId = null;
  }
  let rating = reportId.rating;
  if (rating === undefined) {
    rating = null;
  }
  let obj = importDefault(dependencyMap[1]);
  obj = { reason: problem, report_type: reportType, report_id: reportId, rating, feedback, dont_show_again: reportId.dontShowAgain };
  obj.track(AnalyticEvents.IAR_FEEDBACK_SUBMITTED, obj);
};
