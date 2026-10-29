// Module ID: 19344
// Function ID: 19345
// Name: trackInAppReportsFeedback
// Dependencies: [1084, 1264, 2]
// Exports: default

// Module 19344 (trackInAppReportsFeedback)
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/in_app_reports/trackInAppReportsFeedback.tsx");

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
  const dontShowAgain = reportId.dontShowAgain;
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.IAR_FEEDBACK_SUBMITTED, { reason: problem, report_type: reportType, report_id: reportId, rating, feedback, dont_show_again: dontShowAgain });
};
