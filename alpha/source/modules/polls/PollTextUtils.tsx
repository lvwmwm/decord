// Module ID: 8790
// Function ID: 8791
// Name: PollTextUtils
// Dependencies: [5637, 8726, 2]
// Exports: getPollPlainText

// Module 8790 (PollTextUtils)
import MarkupUtilsDefault from "MarkupUtils" /* 5637 */;
import markup_MarkupParser from "markup/MarkupParser" /* 8726 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollTextUtils.tsx");

export function getPollPlainText(questionText) {
  const obj = MarkupUtilsDefault;
  const parsePollToASTResult = obj.parsePollToAST(questionText, true);
  const obj2 = markup_MarkupParser;
  obj2.walkAst(parsePollToASTResult, (type) => {
    if ("timestamp" === type.type) {
      type.content = type.formatted;
    }
  });
  const obj3 = markup_MarkupParser;
  return obj3.astToString(parsePollToASTResult);
}
