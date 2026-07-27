// Module ID: 7635
// Function ID: 61117
// Name: _showReportModal
// Dependencies: [5, 7636, 7637, 4338, 7638, 1935, 2]
// Exports: hideReportModal, showReportModal

// Module 7635 (_showReportModal)
import maybeLoadBundle from "maybeLoadBundle";

const require = arg1;
async function _showReportModal(arg0, arg1, arg2, arg3) {
  let iter = (function*(name) {
    let isEligibleForFeedback;
    let onSubmit;
    ({ isEligibleForFeedback, onSubmit } = arg2);
    if (isEligibleForFeedback === undefined) {
      isEligibleForFeedback = true;
    }
    yield undefined;
    const REPORT_TO_MOD = outer2_0(outer2_2[1]).ReportMenuTypeSets.REPORT_TO_MOD;
    const hasItem = REPORT_TO_MOD.has(name.name);
    let obj = outer2_0(outer2_2[2]);
    if (hasItem) {
      const tmp8 = yield obj.getReportMenuForModeratorReport(name, arg1);
      obj = { menu: tmp8, reportType: name, afterSubmit: onSubmit, isEligibleForFeedback };
      outer2_1(outer2_2[3]).pushLazy(outer2_0(outer2_2[5])(outer2_2[4], outer2_2.paths), obj, outer2_4);
      const obj2 = outer2_1(outer2_2[3]);
    } else {
      const tmp5 = yield obj.getReportMenu(name, arg1);
      return tmp5;
    }
  })();
  iter.next();
  return iter;
}
const IN_APP_REPORT_MODAL_KEY = "IN_APP_REPORT_MODAL_KEY";
const result = require("getReportMenu").fileFinishedImporting("modules/in_app_reports/showReportModal.native.tsx");

export const showReportModal = function showReportModal(arg0, arg1, arg2) {
  return _showReportModal(...arguments);
};
export const hideReportModal = function hideReportModal() {
  importDefault(4338).popWithKey(IN_APP_REPORT_MODAL_KEY);
};
