// Module ID: 15897
// Function ID: 121815
// Name: InAppReportsFeedbackActionSheet
// Dependencies: []
// Exports: default

// Module 15897 (InAppReportsFeedbackActionSheet)
importAll(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const FeedbackType = arg1(dependencyMap[2]).FeedbackType;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx");

export default function InAppReportsFeedbackActionSheet(arg0) {
  ({ reportId: closure_0, reportType: closure_1 } = arg0);
  let obj = arg1(dependencyMap[5]);
  const result = obj.improperGetEnglishIntlMessageText("CALL_FEEDBACK_OPTION_OTHER");
  obj = { 1414727442: null, 351700189: null, -1498590505: null };
  const tmp = importDefault(dependencyMap[4])();
  const intl = arg1(dependencyMap[7]).intl;
  obj.headerLabel = intl.string(arg1(dependencyMap[7]).t.MP5lDj);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.ratingsBodyLabel = intl2.string(arg1(dependencyMap[7]).t.7Ct0Dj);
  const intl3 = arg1(dependencyMap[7]).intl;
  obj.reasonsHeaderLabel = intl3.string(arg1(dependencyMap[7]).t.FJmoxF);
  obj.reasons = tmp;
  const items = [result];
  obj.feedbackReasons = items;
  obj.otherKey = result;
  obj.trackOpen = function trackOpen() {
    let obj = callback2(closure_2[8]);
    obj = { report_id: closure_0, report_type: callback2 };
    obj.track(constants.IAR_FEEDBACK_MODAL_VIEWED, obj);
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
    obj.reportId = callback;
    obj.reportType = callback2;
    obj.dontShowAgain = null != dontShowAgain && dontShowAgain;
    callback2(closure_2[9])(obj);
    if (dontShowAgain) {
      obj = { feedbackType: constants2.IN_APP_REPORTS, location: "InAppReportsFeedbackActionSheet" };
      callback(closure_2[10]).processOptOut(obj);
      const obj2 = callback(closure_2[10]);
    }
    if (null != rating) {
      callback(closure_2[11]).presentFeedbackSent();
      const obj4 = callback(closure_2[11]);
    }
  };
  return jsx(importDefault(dependencyMap[6]), obj);
};
