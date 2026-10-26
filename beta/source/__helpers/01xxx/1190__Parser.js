// Module ID: 1190
// Function ID: 1191
// Name: _Parser
// Dependencies: [1191, 1174, 1192, 1194, 1201]
// Exports: parse

// Module 1190 (_Parser)
import TYPE from "TYPE" /* 1191 */;
import Parser from "Parser" /* 1192 */;
import module_1174 from "module_1174" /* 1174 */;

const require = globalThis.__r;

let tmp;
const ErrorKind = tmp(1194);
module_1174.__exportStar(TYPE, exports);

export const parse = function parse(arg0, arg1) {
  const f87843 = (style) => {
    delete style[`location`];
    if (!TYPE.isSelectElement(style)) {
      if (!TYPE.isPluralElement(style)) {
        if (!TYPE.isNumberElement(style)) {
          if (TYPE.isTagElement(style)) {
            const children = style.children;
            const item = children.forEach(f87843);
          }
        }
        delete style.style["location"];
      }
    }
    for (const key10046 in style.options) {
      delete style.options[key10046][str];
      let value = style.options[key10046].value;
      let item1 = value.forEach(f87843);
      continue;
    }
  };
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  const obj2 = module_1174;
  const __assignResult = obj2.__assign({ shouldParseSkeletons: true, requiresOtherClause: true }, obj);
  const parser = new Parser.Parser(arg0, __assignResult);
  const parsed = parser.parse();
  if (parsed.err) {
    const _SyntaxError = SyntaxError;
    const SyntaxErrorResult = SyntaxError(ErrorKind.ErrorKind[parsed.err.kind]);
    SyntaxErrorResult.location = parsed.err.location;
    SyntaxErrorResult.originalMessage = parsed.err.message;
    throw SyntaxErrorResult;
  } else {
    let captureLocation;
    if (null != __assignResult) {
      captureLocation = __assignResult.captureLocation;
    }
    if (!captureLocation) {
      const val = parsed.val;
      let item = val.forEach(f87843);
    }
    return parsed.val;
  }
};
export const _Parser = Parser.Parser;
export const isStructurallySame = require("hoistSelectors").isStructurallySame;
