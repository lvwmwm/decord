// Module ID: 12340
// Function ID: 12341
// Name: conjureMarkup
// Dependencies: [19, 21, 12, 5888, 12341, 12342, 2]
// Exports: parseConjureMarkup

// Module 12340 (conjureMarkup)
import Fragment from "Fragment" /* 21 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5888 */;
import conjureFileMentions from "conjureFileMentions" /* 12341 */;
import ConjureFileMentionDefault from "ConjureFileMention" /* 12342 */;
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
