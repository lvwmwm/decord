// Module ID: 8670
// Function ID: 8671
// Name: PollTextUtils
// Dependencies: [5518, 8606, 2]
// Exports: getPollPlainText

// Module 8670 (PollTextUtils)
import MarkupUtilsDefault from "MarkupUtils" /* 5518 */;
import markup_MarkupParser from "markup/MarkupParser" /* 8606 */;
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
