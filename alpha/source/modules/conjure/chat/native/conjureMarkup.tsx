// Module ID: 12188
// Function ID: 12189
// Name: conjureMarkup
// Dependencies: [19, 21, 12, 5179, 12105, 12168, 2]
// Exports: parseConjureMarkup

// Module 12188 (conjureMarkup)
import Fragment from "Fragment" /* 21 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5179 */;
import conjureFileMentions from "conjureFileMentions" /* 12105 */;
import ConjureFileMentionDefault from "ConjureFileMention" /* 12168 */;
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

export const parseConjureMarkup = function parseConjureMarkup() {
  const items = [...arguments];
  const tmp = closure_4();
  return tmp(...items);
};
