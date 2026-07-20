// Module ID: 7591
// Function ID: 60813
// Name: _showReportModal
// Dependencies: []
// Exports: hideReportModal, showReportModal

// Module 7591 (_showReportModal)
async function _showReportModal(arg0, arg1, arg2, arg3) {
  const fn = function*(name) {
    let isEligibleForFeedback;
    let onSubmit;
    ({ isEligibleForFeedback, onSubmit } = arg2);
    if (isEligibleForFeedback === undefined) {
      isEligibleForFeedback = true;
    }
    yield undefined;
    const REPORT_TO_MOD = callback(paths[1]).ReportMenuTypeSets.REPORT_TO_MOD;
    const hasItem = REPORT_TO_MOD.has(name.name);
    let obj = callback(paths[2]);
    if (hasItem) {
      const tmp8 = yield obj.getReportMenuForModeratorReport(name, arg1);
      obj = { menu: tmp8, reportType: name, afterSubmit: onSubmit, isEligibleForFeedback };
      callback2(paths[3]).pushLazy(callback(paths[5])(paths[4], paths.paths), obj, closure_4);
      const obj2 = callback2(paths[3]);
    } else {
      const tmp5 = yield obj.getReportMenu(name, arg1);
      return tmp5;
    }
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = "IN_APP_REPORT_MODAL_KEY";
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/in_app_reports/showReportModal.native.tsx");

export const showReportModal = function showReportModal(arg0, arg1, arg2) {
  return _showReportModal(...arguments);
};
export const hideReportModal = function hideReportModal() {
  importDefault(dependencyMap[3]).popWithKey(closure_4);
};
