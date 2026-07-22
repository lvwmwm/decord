// Module ID: 4586
// Function ID: 40193
// Name: regExp
// Dependencies: []

// Module 4586 (regExp)
let closure_2 = /\n{2,}$/;
let closure_3 = /(?:^|\n)( *)$/;
const regExp = new RegExp("^" + "(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +".replace("%INDENT_CAPTURE_PATTERN%", " *"));
let closure_5 = / *\n$/;
const regExp1 = new RegExp("^( *)((?:[*-]|\\d+\\.)) [\\s\\S]+?(?:\\n(?! )(?!\\1(?:[*-]|\\d+\\.) )|$)");
let closure_7 = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;
const obj = {};
const merged = Object.assign(importDefault(dependencyMap[0]).defaultRules.list);
obj["requiredFirstCharacters"] = " *-0123456789".split("");
obj["match"] = function match(arg0, allowList) {
  if (allowList.allowList) {
    if (allowList._listLevel >= 11) {
      return null;
    } else {
      let str = "";
      if (null != allowList.prevCapture) {
        str = allowList.prevCapture[0];
      }
      const match = regex.exec(str);
      let match1 = null;
      if (null != match) {
        match1 = null;
        if (!regex3.test(match[0])) {
          match1 = regExp1.exec(arg0);
        }
      }
      return match1;
    }
  } else {
    return null;
  }
};
obj["parse"] = function parse(arg0, arg1, arg2) {
  const importDefault = arg1;
  const dependencyMap = arg2;
  let bound;
  if (arg0[2].length > 1) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(1000000000, Math.max(1, +arr));
  }
  const str2 = arg0[0].replace(closure_2, "\n");
  const match = regex2.exec(str2);
  let num2 = 0;
  if (null != match) {
    num2 = match[0].length;
  }
  let num3 = 0;
  if (null != match) {
    num3 = match[1].length;
  }
  const regExp = new RegExp("(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%(?:[*-]|\\d+\\.) )[^\\n]*)*(\n|$)".replaceAll("%INDENT_CAPTURE_PATTERN%", " {" + num3 + "," + num3 + 1 + "}"), "gm");
  const regExp1 = new RegExp("^ {1," + num2 + "}", "gm");
  closure_2 = regExp1;
  const match1 = str2.match(regExp);
  let closure_3 = match1;
  importDefault(dependencyMap[1])(null != match1, "markup list items can not be parsed.");
  const regex2 = false;
  const obj = {
    ordered: arg0[2].length > 1,
    start: bound,
    items: match1.map((str) => {
      let _list;
      let inline;
      const replaced = str.replace(closure_4, "").replace(regExp1, "");
      let tmp = arg1 === match1.length - 1;
      let tmp2 = -1 !== replaced.indexOf("\n\n");
      if (!tmp2) {
        if (tmp) {
          tmp = closure_4;
        }
        tmp2 = tmp;
      }
      closure_4 = tmp2;
      const _listLevel = arg2._listLevel;
      arg2._list = true;
      let num = 0;
      ({ inline, _list } = arg2);
      if (null != _listLevel) {
        num = _listLevel;
      }
      arg2._listLevel = num + 1;
      if (tmp2) {
        tmp4.inline = false;
        let replaced1 = replaced.replace(closure_5, "\n\n");
      } else {
        tmp4.inline = true;
        replaced1 = replaced.replace(closure_5, "");
      }
      const obj = {};
      const merged = Object.assign(arg2);
      obj["allowHeading"] = false;
      arg2.inline = inline;
      arg2._list = _list;
      arg2._listLevel = _listLevel;
      return function trimListResultTextElements(arr) {
        return arr.map((type) => {
          let tmp = "text" === type.type;
          if (tmp) {
            tmp = null != type.content;
          }
          if (tmp) {
            type.content = type.content.replace(/\n+\s*$/, "");
            const str = type.content;
          }
          return type;
        });
      }(arg1(replaced1, obj));
    })
  };
  return obj;
};
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/markup/MarkupListRule.tsx");

export default obj;
