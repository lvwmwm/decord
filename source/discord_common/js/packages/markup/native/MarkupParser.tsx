// Module ID: 7675
// Function ID: 61322
// Name: saferParse
// Dependencies: [7676, 3829, 2]

// Module 7675 (saferParse)
function saferParse(arg0, arg1, inline) {
  let tmp = arg3;
  let flag = arg4;
  let text = arg1;
  if (arg3 === undefined) {
    tmp = null;
  }
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    text = `${tmp2}

  `;
  }
  const tmp5 = arg0(text, inline);
  const obj = require(7676) /* _isNativeReflectConstruct */;
  const flattenAstResult = require(7676) /* _isNativeReflectConstruct */.flattenAst(inline, tmp5);
  const obj2 = require(7676) /* _isNativeReflectConstruct */;
  let ast = require(7676) /* _isNativeReflectConstruct */.constrainAst(flattenAstResult).ast;
  while (true) {
    let tmp9 = tmp;
    if (!tmp3) {
      break;
    } else {
      let tmp10 = tmp;
      let tmp11 = ast;
      ast = tmp3(ast, inline.inline, tmp8);
      break;
    }
    return ast;
  }
}
const result = require("set").fileFinishedImporting("../discord_common/js/packages/markup/native/MarkupParser.tsx");

export default {
  astParserFor(importDefaultResultResult) {
    let closure_0 = importDefault(3829).parserFor(importDefaultResultResult);
    return (arg0, inline) => {
      let str = arg0;
      let obj = arg2;
      let tmp = arg3;
      if (arg0 === undefined) {
        str = "";
      }
      if (obj === undefined) {
        obj = {};
      }
      if (tmp === undefined) {
        tmp = null;
      }
      obj = { inline };
      const merged = Object.assign(obj);
      return outer1_3(closure_0, str, obj, tmp, !inline);
    };
  },
  reactParserFor(importDefaultResultResult) {
    let closure_0 = importDefault(3829).parserFor(importDefaultResultResult);
    let obj = importDefault(3829);
    const obj2 = importDefault(3829);
    importDefault = obj2.reactFor(importDefault(3829).ruleOutput(importDefaultResultResult, "react"));
    return () => {
      let str = arg0;
      let flag = arg1;
      let obj = arg2;
      let tmp = arg3;
      if (arg0 === undefined) {
        str = "";
      }
      if (flag === undefined) {
        flag = true;
      }
      if (obj === undefined) {
        obj = {};
      }
      if (tmp === undefined) {
        tmp = null;
      }
      if (str.trim()) {
        obj = { inline: flag };
        const merged = Object.assign(obj);
        const tmp11 = outer1_3(closure_0, str, obj, tmp, !flag);
        return callback(tmp11, obj);
      } else {
        return null;
      }
    };
  }
};
