// Module ID: 18326
// Function ID: 18327
// Name: conjureMarkup
// Dependencies: [19, 21, 12, 5637, 18327, 18328, 2]
// Exports: parseConjureMarkup

// Module 18326 (conjureMarkup)
import Fragment from "Fragment" /* 21 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5637 */;
import conjureFileMentions from "conjureFileMentions" /* 18327 */;
import ConjureFileMentionDefault from "ConjureFileMention" /* 18328 */;
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
