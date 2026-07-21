// Module ID: 7668
// Function ID: 61263
// Name: saferParse
// Dependencies: []

// Module 7668 (saferParse)
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
  const obj = require(dependencyMap[0]);
  const flattenAstResult = require(dependencyMap[0]).flattenAst(inline, tmp5);
  const obj2 = require(dependencyMap[0]);
  let ast = require(dependencyMap[0]).constrainAst(flattenAstResult).ast;
  while (true) {
    let tmp9 = tmp;
    if (!tmp3) {
      break;
    } else {
      let tmp10 = tmp;
      let tmp11 = ast;
      ast = tmp3(ast, inline.inline, tmp8);
      // break
    }
    return ast;
  }
}
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/markup/native/MarkupParser.tsx");

export default {
  astParserFor(importDefaultResultResult) {
    let closure_0 = importDefault(dependencyMap[1]).parserFor(importDefaultResultResult);
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
      return callback(closure_0, str, obj, tmp, !inline);
    };
  },
  reactParserFor(importDefaultResultResult) {
    let closure_0 = importDefault(dependencyMap[1]).parserFor(importDefaultResultResult);
    const obj = importDefault(dependencyMap[1]);
    const obj2 = importDefault(dependencyMap[1]);
    const importDefault = obj2.reactFor(importDefault(dependencyMap[1]).ruleOutput(importDefaultResultResult, "react"));
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
        const tmp11 = callback2(closure_0, str, obj, tmp, !flag);
        return callback(tmp11, obj);
      } else {
        return null;
      }
    };
  }
};
