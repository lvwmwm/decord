// Module ID: 12677
// Function ID: 12678
// Dependencies: []

// Module 12677
function noop(arg0) {
  return arg0;
}
function generate(type, fn, arg2, arg3) {
  let closure_1;
  let str = ",";
  switch (type.type) {
    case "Group":
    {
      let closure_0 = fn;
      generate = arg2;
      let closure_2 = arg3;
      if (" " !== type.combinator) {
        let combinator;
        if (!arg3) {
          combinator = `${" " + type.combinator} `;
        }
        const terms = type.terms;
        const mapped = terms.map((item) => generate(item, fn, closure_1, closure_2));
        const joined = mapped.join(combinator);
        const explicit = type.explicit || arg2;
        let sum1 = joined;
        if (explicit) {
          let str27;
          if (arg3) {
            str27 = "[";
          } else {
            str27 = "[ ";
          }
          let str28 = " ]";
          const sum = str27 + joined;
          if (arg3) {
            str28 = "]";
          }
          sum1 = sum + str28;
        }
        let str29 = "";
        if (type.disallowEmpty) {
          str29 = "!";
        }
        str = sum1 + str29;
        return fn(str, type);
      }
      combinator = type.combinator;
      break;
    }
    case "Multiplier":
    {
      let str16;
      const tmp11 = generate(type.term, fn, arg2, arg3);
      if (0 !== type.min) {
        let str17;
        if (0 !== type.min) {
          let str18;
          if (1 === type.min) {
            if (0 === type.max) {
              let str25 = "+";
              if (type.comma) {
                str25 = "#";
              }
              str18 = str25;
            }
            str17 = str18;
          }
          if (1 !== type.min) {
            let text;
            let str19 = "";
            let str20 = "";
            if (type.comma) {
              str20 = "#";
            }
            if (type.min === type.max) {
              text = `${"{" + type.min}}`;
            } else {
              const text1 = `{${type.min}`;
              if (0 !== type.max) {
                str19 = type.max;
              }
              text = `${tmp12 + "," + str19}}`;
            }
            str18 = str20 + text;
          } else {
            str18 = "";
          }
        } else {
          str17 = "?";
        }
        str16 = str17;
      } else {
        str16 = "*";
      }
      return tmp11 + fn(str16, type);
    }
    case "Type":
    {
      let str7 = "";
      const text2 = `<${type.name}`;
      if (type.opts) {
        const opts = type.opts;
        if ("Range" === opts.type) {
          let str11 = "-\u221E";
          if (null !== opts.min) {
            str11 = opts.min;
          }
          let str13 = "\u221E";
          const text3 = ` [${str11}`;
          if (null !== opts.max) {
            str13 = opts.max;
          }
          str7 = fn(text3 + "," + str13 + "]", type.opts);
        } else {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Unknown node type `" + opts.type + "`");
          throw error;
        }
      }
      str = `${tmp + str7}>`;
      break;
    }
    case "Property":
    {
      str = `${"<'" + type.name}'>`;
      break;
    }
    case "Keyword":
    {
      str = type.name;
      break;
    }
    case "AtKeyword":
    {
      str = `@${type.name}`;
      break;
    }
    case "Function":
    {
      str = `${type.name}(`;
      break;
    }
    case "String":
    {
      str = type.value;
      break;
    }
    case "Token":
    {
      str = type.value;
      break;
    }
    case "Comma":
    {
      break;
    }
    default:
    {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error1 = new Error("Unknown node type `" + type.type + "`");
      throw error1;
    }
  }
}

export default (arg0, forceBraces) => {
  let decorate = noop;
  let flag = false;
  let flag2 = false;
  let tmp = forceBraces;
  if (typeof forceBraces !== "function") {
    flag = false;
    flag2 = false;
    tmp = decorate;
    if (forceBraces) {
      const _Boolean = Boolean;
      const _Boolean2 = Boolean;
      const BooleanResult = Boolean(forceBraces.forceBraces);
      const BooleanResult1 = Boolean(forceBraces.compact);
      if (typeof forceBraces.decorate === "function") {
        decorate = forceBraces.decorate;
      }
      tmp = decorate;
      flag = BooleanResult1;
      flag2 = BooleanResult;
    }
  }
  return generate(arg0, tmp, flag2, flag);
};
