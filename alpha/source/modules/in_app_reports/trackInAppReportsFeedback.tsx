// Module ID: 17086
// Function ID: 17087
// Name: trackInAppReportsFeedback
// Dependencies: [1074, 1241, 2]
// Exports: default

// Module 17086 (trackInAppReportsFeedback)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/in_app_reports/trackInAppReportsFeedback.tsx");

export default function trackInAppReportsFeedback(dont_show_again) {
  let reportId = dont_show_again.reportId;
  ({ problem, feedback, reportType } = dont_show_again);
  if (reportId === undefined) {
    reportId = null;
  }
  let rating = dont_show_again.rating;
  if (rating === undefined) {
    rating = null;
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.IAR_FEEDBACK_SUBMITTED, { reason: problem, report_type: reportType, report_id: reportId, rating, feedback, dont_show_again: dont_show_again.dontShowAgain });
};
