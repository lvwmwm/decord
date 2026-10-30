// Module ID: 12448
// Function ID: 12449
// Name: conjureMarkup
// Dependencies: [19, 21, 12, 5749, 12449, 12450, 2]
// Exports: parseConjureMarkup

// Module 12448 (conjureMarkup)
import Fragment from "Fragment" /* 21 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5749 */;
import conjureFileMentions from "conjureFileMentions" /* 12449 */;
import ConjureFileMentionDefault from "ConjureFileMention" /* 12450 */;
import react from "react" /* 19 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = module_12.once(() => {
  let obj2;
  const obj = { conjureFile: obj2.createConjureFileMentionRule((attachmentId, arg1) => jsx(ConjureFileMentionDefault, { attachmentId }, arg1)) };
  const reactParserFor = MarkupUtilsDefault.reactParserFor;
  MarkupUtilsDefault;
  const merged = Object.assign(MarkupUtilsDefault.defaultRules);
  obj2 = conjureFileMentions;
  return reactParserFor(obj);
});
const result = size.fileFinishedImporting("modules/conjure/chat/native/conjureMarkup.tsx");

export function parseConjureMarkup() {
  const items = [...arguments];
  const tmp = closure_4();
  return tmp(...items);
}
