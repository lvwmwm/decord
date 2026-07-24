// Module ID: 16083
// Function ID: 124429
// Name: trackInAppReportsFeedback
// Dependencies: [653, 675, 2]
// Exports: default

// Module 16083 (trackInAppReportsFeedback)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/in_app_reports/trackInAppReportsFeedback.tsx");

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
  let obj = importDefault(675);
  obj = { reason: problem, report_type: reportType, report_id: reportId, rating, feedback, dont_show_again: reportId.dontShowAgain };
  obj.track(AnalyticEvents.IAR_FEEDBACK_SUBMITTED, obj);
};
