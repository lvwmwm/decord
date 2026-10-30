// Module ID: 12550
// Function ID: 12551
// Name: conjureClarificationLinks
// Dependencies: [12464, 2]
// Exports: sendAfterLinkingApps

// Module 12550 (conjureClarificationLinks)
import conjureLinkedApps from "conjureLinkedApps" /* 12464 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/clarification/conjureClarificationLinks.tsx");

export function sendAfterLinkingApps(projectId, questions, arg2, first1, fn) {
  let closure_0 = projectId;
  let closure_1 = arg2;
  let closure_2 = first1;
  questions = questions.questions;
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
      return obj.linkConjureApp(target, projectId, build);
    }));
    allSettledResult.then(fn);
  } else {
    const tmp = fn();
  }
}
