// Module ID: 11645
// Function ID: 11646
// Name: conjureTemplateIntakeRequests
// Dependencies: [5, 11077, 1128, 2]
// Exports: fetchStoredConjureIntake

// Module 11645 (conjureTemplateIntakeRequests)
import intl from "intl" /* 1128 */;
import conjureWorkerFetch from "conjureWorkerFetch" /* 11077 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _fetchStoredConjureIntake() {
  obj = _asyncToGenerator(async (arg0, template) => {
    let closure_2;
    let closure_0 = arg0;
    let c3 = 0;
    let c5 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj5;
      const obj4 = { query: obj5 };
      obj5 = { template, locale: intl.intl.currentLocale };
      const fetchConjureWorker = conjureWorkerFetch.fetchConjureWorker;
      conjureWorkerFetch;
      closure_0 = await fetchConjureWorker(closure_0, "/agent/template-intake", obj4);
      if (!closure_0.ok) {
        return null;
      }
      template = await closure_0.json();
      const _Array = Array;
      let tmp6 = null;
      if (Array.isArray(template.questions)) {
        tmp6 = null;
        if (template.questions.length > 0) {
          tmp6 = template;
        }
      }
      return tmp6;
    })();
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/conjure/templates/conjureTemplateIntakeRequests.tsx");

export const fetchStoredConjureIntake = function fetchStoredConjureIntake() {
  return obj(...arguments);
};
