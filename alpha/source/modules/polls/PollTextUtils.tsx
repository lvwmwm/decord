// Module ID: 12180
// Function ID: 12181
// Name: PollTextUtils
// Dependencies: [7036, 7148, 2]
// Exports: getPollPlainText

// Module 12180 (PollTextUtils)
import MarkupUtilsDefault from "MarkupUtils" /* 7036 */;
import markup_MarkupParser from "markup/MarkupParser" /* 7148 */;
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
