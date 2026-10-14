// Module ID: 8281
// Function ID: 8282
// Name: showReportModal
// Dependencies: [5, 8282, 8283, 5093, 8284, 1987, 2]
// Exports: hideReportModal, showReportModal

// Module 8281 (showReportModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_3, menu;

let obj = function _showReportModal() {
  obj = _asyncToGenerator(async (reportType, arg1, afterSubmit) => {
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (async (arg0, value, arg2) => {
      let c2;
      let isEligibleForFeedback;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              menu = tmp;
              closure_3 = tmp4;
              afterSubmit = undefined;
              isEligibleForFeedback = undefined;
              ({ onSubmit: c2, isEligibleForFeedback } = closure_2);
              if (isEligibleForFeedback === undefined) {
                isEligibleForFeedback = true;
              }
              menu = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "Reflect", done: null };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              c5 = 1;
              const REPORT_TO_MOD = closure_132_0(closure_132_2[1]).ReportMenuTypeSets.REPORT_TO_MOD;
              const hasItem = REPORT_TO_MOD.has(reportType.name);
              const obj10 = closure_132_0(closure_132_2[2]);
              if (hasItem) {
                c6 = 4;
                c7 = 1;
                const obj6 = { value: obj10.getReportMenuForModeratorReport(reportType, closure_1), done: false };
                return obj6;
              } else {
                c6 = 3;
                c7 = 1;
                const obj7 = { value: obj10.getReportMenu(reportType, closure_1), done: false };
                return obj7;
              }
            }
          } else {
            if (2 === c6) {
              c5 = 0;
            } else {
              if (3 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  return { value, done: true };
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                return { value, done: true };
              }
              menu = value;
              const obj9 = { menu, reportType, afterSubmit, isEligibleForFeedback };
              const obj2 = closure_132_1(closure_132_2[3]);
              obj2.pushLazy(closure_132_0(closure_132_2[5])(closure_132_2[4], closure_132_2.paths), obj9, closure_132_4);
              c5 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp26) {
          if (0 === c5) {
            c7 = 3;
            throw tmp26;
          } else {
            c6 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const IN_APP_REPORT_MODAL_KEY = "IN_APP_REPORT_MODAL_KEY";
const result = size.fileFinishedImporting("modules/in_app_reports/showReportModal.native.tsx");

export const showReportModal = function showReportModal() {
  return obj(...arguments);
};
export const hideReportModal = function hideReportModal() {
  obj = ModalActionCreatorsDefault;
  obj.popWithKey(IN_APP_REPORT_MODAL_KEY);
};
