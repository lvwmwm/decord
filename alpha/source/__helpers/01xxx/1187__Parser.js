// Module ID: 1187
// Function ID: 1188
// Name: _Parser
// Dependencies: [1188, 1171, 1189, 1191, 1198]
// Exports: parse

// Module 1187 (_Parser)
import TYPE from "TYPE" /* 1188 */;
import Parser from "Parser" /* 1189 */;
import module_1171 from "module_1171" /* 1171 */;

const require = globalThis.__r;

let tmp;
const ErrorKind = tmp(1191);
module_1171.__exportStar(TYPE, exports);

export const parse = function parse(arg0, arg1) {
  const f88062 = (style) => {
    delete style[`location`];
    if (!TYPE.isSelectElement(style)) {
      if (!TYPE.isPluralElement(style)) {
        if (!TYPE.isNumberElement(style)) {
          if (TYPE.isTagElement(style)) {
            const children = style.children;
            const item = children.forEach(f88062);
          }
        }
        delete style.style["location"];
      }
    }
    for (const key10046 in style.options) {
      delete style.options[key10046][str];
      let value = style.options[key10046].value;
      let item1 = value.forEach(f88062);
      continue;
    }
  };
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  const obj2 = module_1171;
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
      let item = val.forEach(f88062);
    }
    return parsed.val;
  }
};
export const _Parser = Parser.Parser;
export const isStructurallySame = require("hoistSelectors").isStructurallySame;
