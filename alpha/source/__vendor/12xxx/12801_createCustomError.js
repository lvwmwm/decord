// Module ID: 12801
// Function ID: 12802
// Name: createCustomError
// Dependencies: [12802]

// Module 12801 (createCustomError)
let _require;

function sourceFragment(source, arg1) {
  let column;
  let line;
  const f127284 = (item, index) => {
    let length;
    const StringResult = String(line + index + 1);
    let tmp = StringResult;
    let tmp2 = StringResult;
    if (StringResult.length < require) {
      do {
        let text = ` ${tmp}`;
        tmp = text;
        tmp2 = text;
        length = ` ${tmp}`.length;
      } while (length < require);
    }
    return tmp2 + " |" + item;
  };
  const str = source.source;
  const parts = str.split(/\r\n?|\n|\f/);
  ({ line, column } = source);
  const diff = Math.max(1, line - arg1) - 1;
  const bound = Math.min(line + arg1, parts.length + 1);
  const sum = Math.max(4, String(bound).length) + 1;
  const require = sum;
  const str2 = parts[line - 1];
  const str3 = str2.substr(0, column - 1);
  const sum1 = column + 3 * (str3.match(/\t/g) || []).length;
  let num = 0;
  let num2 = sum1;
  str3.match(/\t/g) || [];
  if (sum1 > 100) {
    num = sum1 - 60 + 3;
    num2 = 58;
  }
  let sum3 = diff;
  if (diff <= bound) {
    do {
      let tmp7 = sum3 >= 0;
      if (0 <= sum3) {
        tmp7 = sum3 < parts.length;
      }
      if (tmp7) {
        let str4 = parts[sum3];
        parts[sum3] = str4.replace(/\t/g, "    ");
        let str5 = "";
        if (0 < num) {
          str5 = "";
          if (parts[sum3].length > num) {
            str5 = "\u2026";
          }
        }
        let str6 = parts[sum3];
        let str7 = "";
        let sum2 = str5 + str6.substr(num, 98);
        if (parts[sum3].length > tmp5) {
          str7 = "\u2026";
        }
        parts[sum3] = sum2 + str7;
      }
      sum3 = sum3 + 1;
    } while (sum3 <= bound);
  }
  const substr = parts.slice(diff, line);
  const mapped = substr.map(f127284);
  const items = [mapped.join("\n"), , ];
  const array = new Array(num2 + sum + 2);
  items[1] = `${obj2.join("-")}^`;
  const substr1 = parts.slice(line, bound);
  const mapped1 = substr1.map(f127284);
  items[2] = mapped1.join("\n");
  const found = items.filter(Boolean);
  return found.join("\n");
}

export default (arg0, source, offset, line, column) => {
  let message;
  let tmp = require("createCustomError")("SyntaxError", arg0);
  _require = tmp;
  tmp.source = source;
  tmp.offset = offset;
  tmp.line = line;
  tmp.column = column;
  tmp.sourceFragment = (arg0) => {
    let num = 0;
    const tmp = sourceFragment;
    const tmp2 = message;
    if (!isNaN(arg0)) {
      num = arg0;
    }
    return tmp(tmp2, num);
  };
  const obj = {
    get() {
      return `Parse error: ${closure_0.message}` + "\n" + sourceFragment(message, 2);
    }
  };
  Object.defineProperty(tmp, "formattedMessage", obj);
  tmp.parseError = { offset, line, column };
  return tmp;
};
