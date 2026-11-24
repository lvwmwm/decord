// Module ID: 12081
// Function ID: 12082
// Name: PollTextUtils
// Dependencies: [6941, 7053, 2]
// Exports: getPollPlainText

// Module 12081 (PollTextUtils)
import MarkupUtilsDefault from "MarkupUtils" /* 6941 */;
import markup_MarkupParser from "markup/MarkupParser" /* 7053 */;
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
