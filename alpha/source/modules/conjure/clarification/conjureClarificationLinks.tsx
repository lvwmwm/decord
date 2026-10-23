// Module ID: 12439
// Function ID: 12440
// Name: conjureClarificationLinks
// Dependencies: [11815, 2]
// Exports: sendAfterLinkingApps

// Module 12439 (conjureClarificationLinks)
import conjureLinkedApps from "conjureLinkedApps" /* 11815 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/clarification/conjureClarificationLinks.tsx");

export const sendAfterLinkingApps = function sendAfterLinkingApps(arg0, result1, arg2, first1, fn) {
  let closure_0 = arg0;
  let closure_1 = arg2;
  let closure_2 = first1;
  const questions = result1.questions;
  const flatMapResult = questions.flatMap((link) => {
    if (true === link.link) {
      let kind;
      if (closure_1[link.id] != null) {
        kind = tmp.kind;
      }
      if ("entities" === kind) {
        const entities = tmp.entities;
        const mapped = entities.map((id) => ({ target: id.id, build: first1[link.id] }));
      }
      return [];
    }
  });
  if (0 !== flatMapResult.length) {
    const allSettledResult = Promise.allSettled(flatMapResult.map((item) => {
      let build;
      let target;
      ({ target, build } = item);
      const obj = conjureLinkedApps;
      return obj.linkConjureApp(target, closure_0, build);
    }));
    allSettledResult.then(fn);
  } else {
    const tmp = fn();
  }
};
