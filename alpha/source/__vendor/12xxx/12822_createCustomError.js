// Module ID: 12822
// Function ID: 12823
// Name: createCustomError
// Dependencies: [12802, 12818]

// Module 12822 (createCustomError)
import createCustomError from "createCustomError" /* 12802 */;

let tmp;
const _mod12818 = tmp(12818);
function fromLoc(loc, start) {
  let tmp3 = null;
  if (loc && loc.loc && loc.loc[start]) {
    let tmp4 = tmp;
    if ("line" in (loc && loc.loc && loc.loc[start])) {
      const obj = { offset: null, line: null, column: null };
      ({ offset: obj.offset, line: obj.line, column: obj.column } = loc && loc.loc && loc.loc[start]);
      tmp4 = obj;
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
let closure_2 = { offset: 0, line: 1, column: 1 };
let obj = {
  SyntaxReferenceError(arg0, reference) {
    let str = "";
    const tmp = createCustomError;
    if (reference) {
      str = `${" `" + reference}\``;
    }
    const tmpResult = tmp("SyntaxReferenceError", arg0 + str);
    tmpResult.reference = reference;
    return tmpResult;
  },
  SyntaxMatchError(reason, syntax, loc, arg3) {
    let longestMatch;
    let tmp28;
    let tokens;
    const tmp3 = createCustomError("SyntaxMatchError", reason);
    ({ tokens, longestMatch } = arg3);
    let tmp5 = null;
    if ((longestMatch < tokens.length && tokens[longestMatch].node || null) !== loc) {
      tmp5 = tmp4;
    }
    let str = "";
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let str2 = "";
    let num5 = 0;
    let num6 = 0;
    let num7 = 0;
    const tmp6 = null !== tmp5;
    if (0 < tokens.length) {
      do {
        let value = tokens[num].value;
        let length = num3;
        let length2 = num4;
        if (num === longestMatch) {
          length = value.length;
          length2 = ``.length;
        }
        let tmp10 = tmp6 && tokens[num].node === tmp5;
        let tmp11 = num2;
        if (tmp10) {
          let num8 = 0;
          if (num <= longestMatch) {
            num8 = num2 + 1;
          }
          tmp11 = num8;
        }
        str = str + value;
        num = num + 1;
        num2 = tmp11;
        num3 = length;
        num4 = length2;
        str2 = str;
        num5 = tmp11;
        num6 = length;
        num7 = length2;
      } while (num < tokens.length);
    }
    if (longestMatch !== tokens.length) {
      let tmp13;
      let tmp29Result;
      if (1 >= num5) {
        tmp13 = fromLoc(tmp5, "start");
        if (!tmp13) {
          const tmp12 = fromLoc(loc, "start") || closure_2;
          const str3 = str2.slice(0, num7);
          const obj = { offset: null, line: null, column: null };
          ({ offset: obj.offset, line: obj.line, column: obj.column } = tmp12);
          tmp13 = obj;
          if (str3) {
            let sum;
            const parts = str3.split(/\n|\r\n?|\f/);
            obj.offset = obj.offset + str3.length;
            obj.line = obj.line + (parts.length - 1);
            if (1 === parts.length) {
              sum = obj.column + str3.length;
            } else {
              sum = parts.pop().length + 1;
            }
            obj.column = sum;
            tmp13 = obj;
          }
        }
        tmp29Result = tmp29(tmp5, "end");
        if (!tmp29Result) {
          const str5 = str2.substr(num7, num6);
          const obj4 = { offset: null, line: null, column: null };
          ({ offset: obj2.offset, line: obj2.line, column: obj2.column } = tmp13);
          tmp29Result = obj4;
          if (str5) {
            let sum1;
            const parts1 = str5.split(/\n|\r\n?|\f/);
            obj4.offset = obj4.offset + str5.length;
            obj4.line = obj4.line + (parts1.length - 1);
            if (1 === parts1.length) {
              sum1 = obj4.column + str5.length;
            } else {
              sum1 = parts1.pop().length + 1;
            }
            obj4.column = sum1;
            tmp29Result = obj4;
          }
        }
      }
      tmp3.rawMessage = reason;
      let str6 = "<generic>";
      if (syntax) {
        str6 = _mod12818(syntax);
      }
      tmp3.syntax = str6;
      tmp3.css = str2;
      tmp3.mismatchOffset = num7;
      tmp3.mismatchLength = num6;
      let str8 = str2;
      const text = `${reason}
      syntax: ${tmp3.syntax}`;
      if (!str2) {
        str8 = "<empty string>";
      }
      const _HermesInternal = HermesInternal;
      const _Array = Array;
      const self = this;
      const self2 = this;
      const combined = `${tmp23}
       value: ` + str8 + "\n  --------";
      const array = new Array(tmp3.mismatchOffset + 1);
      tmp3.message = `${tmp25}${obj5.join("-")}^`;
      const _Object = Object;
      const merged = Object.assign(tmp3, tmp13);
      const obj6 = { source: tmp28, start: tmp13, end: tmp29Result };
      tmp28 = loc && loc.loc && loc.loc.source || "<unknown>";
      tmp3.loc = obj6;
      return tmp3;
    }
    let tmp18 = tmp5;
    const tmp17 = fromLoc;
    if (!tmp5) {
      tmp18 = loc;
    }
    let tmp17Result = tmp17(tmp18, "end");
    if (!tmp17Result) {
      const obj10 = { offset: null, line: null, column: null };
      ({ offset: obj3.offset, line: obj3.line, column: obj3.column } = closure_2);
      tmp17Result = obj10;
      if (str2) {
        let sum2;
        const parts2 = str2.split(/\n|\r\n?|\f/);
        obj10.offset = obj10.offset + str2.length;
        obj10.line = obj10.line + (parts2.length - 1);
        if (1 === parts2.length) {
          sum2 = obj10.column + str2.length;
        } else {
          sum2 = parts2.pop().length + 1;
        }
        obj10.column = sum2;
        tmp17Result = obj10;
      }
    }
    tmp13 = tmp17Result;
    tmp29Result = { offset: tmp17Result.offset, line: tmp17Result.line, column: tmp17Result.column };
  }
};

export default obj;
