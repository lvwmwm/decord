// Module ID: 3960
// Function ID: 32789
// Name: parse
// Dependencies: [3961]

// Module 3960 (parse)
function parse(str, delimiter) {
  const items = [];
  str = delimiter;
  if (delimiter) {
    str = delimiter.delimiter;
  }
  if (!str) {
    str = "/";
  }
  const match = regExp.exec(str);
  let match1 = match;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  let str2 = "";
  if (null != match) {
    do {
      let tmp16 = match1[1];
      let index = match1.index;
      let text = `${str.slice(num2, index)}`;
      let sum = index + match1[0].length;
      if (tmp16) {
        let str3 = `${str.slice(num2, index)}${tmp16[1]}`;
        let sum1 = num;
        let tmp19 = tmp4;
        let tmp20 = tmp5;
        let tmp21 = tmp6;
        let tmp22 = tmp7;
        let tmp23 = tmp8;
        let tmp24 = tmp9;
        let tmp25 = tmp10;
        let tmp27 = tmp11;
        let tmp28 = tmp12;
        let tmp29 = tmp13;
        let tmp30 = tmp14;
        let tmp31 = tmp15;
      } else {
        tmp19 = str[sum];
        tmp20 = match1[2];
        tmp21 = match1[3];
        tmp22 = match1[4];
        tmp24 = match1[6];
        tmp25 = match1[7];
        str3 = text;
        if (`${str.slice(num2, index)}`) {
          let arr = items.push(`${str.slice(num2, index)}`);
          str3 = "";
        }
        tmp27 = null != tmp20 && null != tmp19 && tmp19 !== tmp20;
        tmp28 = "+" === tmp24 || "*" === tmp24;
        tmp29 = "?" === tmp24 || "*" === tmp24;
        tmp30 = match1[2] || str;
        tmp31 = tmp22;
        if (!tmp22) {
          tmp31 = match1[5];
        }
        let obj = {};
        let tmp32 = tmp21;
        sum1 = num;
        if (!tmp21) {
          let tmp34 = +num;
          sum1 = tmp34 + 1;
          tmp32 = tmp34;
        }
        obj.name = tmp32;
        let str4 = tmp20;
        if (!tmp20) {
          str4 = "";
        }
        obj.prefix = str4;
        obj.delimiter = tmp30;
        obj.optional = tmp29;
        obj.repeat = tmp28;
        obj.partial = tmp27;
        obj.asterisk = tmp25;
        if (tmp31) {
          let tmp36 = escapeGroup;
          let str5 = escapeGroup(tmp31);
        } else {
          str5 = ".*";
          if (!tmp25) {
            let tmp35 = escapeString;
            str5 = `${"[^" + escapeString(tmp30)}]+?`;
          }
        }
        obj.pattern = str5;
        arr = items.push(obj);
      }
      let tmp38 = regExp;
      match1 = regExp.exec(str);
      num = sum1;
      let tmp3 = str3;
      tmp4 = tmp19;
      tmp5 = tmp20;
      tmp6 = tmp21;
      tmp7 = tmp22;
      tmp8 = tmp23;
      tmp9 = tmp24;
      tmp10 = tmp25;
      tmp11 = tmp27;
      tmp12 = tmp28;
      tmp13 = tmp29;
      tmp14 = tmp30;
      tmp15 = tmp31;
      num2 = sum;
      num3 = sum;
      str2 = str3;
    } while (null != match1);
  }
  let sum2 = str2;
  if (num3 < str.length) {
    sum2 = str2 + str.substr(num3);
  }
  if (sum2) {
    items.push(sum2);
  }
  return items;
}
function encodeURIComponentPretty(arg0) {
  return encodeURI(arg0).replace(/[\/?#]/g, (str) => {
    str = str.charCodeAt(0);
    return "%" + str.charCodeAt(0).toString(16).toUpperCase();
  });
}
function tokensToFunction(arg0) {
  let closure_0 = arg0;
  const array = new Array(arg0.length);
  for (let num = 0; num < arg0.length; num = num + 1) {
    if ("object" === typeof arg0[num]) {
      let _RegExp = RegExp;
      let tmp2 = new.target;
      let tmp3 = new.target;
      let regExp = new RegExp("^(?:" + arg0[num].pattern + ")$");
      let tmp5 = regExp;
      array[num] = regExp;
    }
  }
  return (arg0, arg1) => {
    let replaced;
    let tmp5;
    let obj = arg0;
    obj = arg1;
    if (!arg0) {
      obj = {};
    }
    if (!obj) {
      obj = {};
    }
    if (obj.pretty) {
      let _encodeURIComponent = outer1_4;
    } else {
      _encodeURIComponent = encodeURIComponent;
    }
    let str = "";
    let num = 0;
    let str2 = "";
    if (0 < lib.length) {
      while (true) {
        let tmp4 = lib;
        tmp5 = lib[num];
        if ("string" !== typeof tmp5) {
          let arr = obj[tmp5.name];
          if (null == arr) {
            if (tmp5.optional) {
              let text = str;
              let tmp7 = tmp2;
              let tmp38 = arr;
              let num2 = tmp3;
              if (tmp5.partial) {
                text = `${tmp5.prefix}`;
                tmp7 = tmp2;
                let tmp39 = arr;
                num2 = tmp3;
              }
            } else {
              let _TypeError5 = TypeError;
              let str17 = "Expected \"";
              let tmp34 = new.target;
              let str18 = "\" to be defined";
              let tmp35 = new.target;
              let typeError = new TypeError("Expected \"" + tmp5.name + "\" to be defined");
              let tmp37 = typeError;
              throw typeError;
            }
          } else {
            let tmp41 = lib;
            let tmp42 = array;
            if (lib(array[0])(arr)) {
              if (tmp5.repeat) {
                if (0 === arr.length) {
                  text = str;
                  tmp7 = tmp2;
                  let tmp29 = arr;
                  num2 = tmp3;
                  if (!tmp5.optional) {
                    let _TypeError4 = TypeError;
                    let str15 = "Expected \"";
                    let tmp30 = new.target;
                    let str16 = "\" to not be empty";
                    let tmp31 = new.target;
                    let typeError1 = new TypeError("Expected \"" + tmp5.name + "\" to not be empty");
                    let tmp33 = typeError1;
                    throw typeError1;
                  }
                } else {
                  let sum = str;
                  let num3 = 0;
                  text = str;
                  tmp7 = tmp2;
                  let tmp43 = arr;
                  num2 = 0;
                  if (0 < arr.length) {
                    let _encodeURIComponentResult = _encodeURIComponent(arr[num3]);
                    let tmp21 = array;
                    let obj4 = array[num];
                    while (obj4.test(_encodeURIComponentResult)) {
                      sum = sum + ((0 === num3 ? tmp5.prefix : tmp5.delimiter) + _encodeURIComponentResult);
                      num3 = num3 + 1;
                      text = sum;
                      tmp7 = _encodeURIComponentResult;
                      let tmp28 = arr;
                      num2 = num3;
                      continue;
                    }
                    let _TypeError3 = TypeError;
                    let str11 = "Expected all \"";
                    let str12 = "\" to match \"";
                    let _JSON2 = JSON;
                    let text1 = `Expected all "${tmp5.name}" to match "${tmp5.pattern}`;
                    let str13 = "\", but received `";
                    let tmp23 = new.target;
                    let str14 = "`";
                    let tmp24 = new.target;
                    let typeError2 = new TypeError(text1 + "\", but received `" + JSON.stringify(_encodeURIComponentResult) + "`");
                    let tmp26 = typeError2;
                    throw typeError2;
                  }
                }
              } else {
                let _TypeError2 = TypeError;
                let str8 = "Expected \"";
                let _JSON = JSON;
                let text2 = `Expected "${tmp5.name}`;
                let str9 = "\" to not repeat, but received `";
                let tmp16 = new.target;
                let str10 = "`";
                let tmp17 = new.target;
                let typeError3 = new TypeError(`Expected "${tmp5.name}` + "\" to not repeat, but received `" + JSON.stringify(arr) + "`");
                let tmp19 = typeError3;
                throw typeError3;
              }
            } else {
              if (tmp5.asterisk) {
                let _encodeURI = encodeURI;
                let str3 = encodeURI(arr);
                replaced = str3.replace(/[?#]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "%" + str.charCodeAt(0).toString(16).toUpperCase();
                });
              } else {
                replaced = _encodeURIComponent(arr);
              }
              let tmp9 = array;
              let obj3 = array[num];
              if (!obj3.test(replaced)) {
                break;
              } else {
                text = str + (tmp5.prefix + replaced);
                tmp7 = replaced;
                let tmp14 = arr;
                num2 = tmp3;
              }
            }
          }
        } else {
          text = str + tmp5;
          tmp7 = tmp2;
          num2 = tmp3;
        }
        num = num + 1;
        let tmp40 = lib;
        str = text;
        tmp2 = tmp7;
        tmp3 = num2;
        str2 = text;
      }
      const _TypeError = TypeError;
      const typeError4 = new TypeError("Expected \"" + tmp5.name + "\" to match \"" + tmp5.pattern + "\", but received \"" + replaced + "\"");
      throw typeError4;
    }
    return str2;
  };
}
function escapeString(prefix) {
  return prefix.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function escapeGroup(str) {
  return str.replace(/([=!:$\/()])/g, "\\$1");
}
function attachKeys(regExp, items) {
  regExp.keys = items;
  return regExp;
}
function flags(id) {
  let str = "i";
  if (id.sensitive) {
    str = "";
  }
  return str;
}
function tokensToRegExp(arg0, items, id) {
  let tmp19;
  let tmp4;
  let obj = id;
  if (!require(3961)(items)) {
    let tmp = items;
    if (!items) {
      tmp = id;
    }
    items = [];
    obj = tmp;
  }
  if (!obj) {
    obj = {};
  }
  const strict = obj.strict;
  let str = "";
  let str2 = "";
  let num = 0;
  let str3 = "";
  if (0 < arg0.length) {
    while (true) {
      tmp4 = arg0[num];
      if ("string" === typeof tmp4) {
        let tmp11 = escapeString;
        let text = `${escapeString(tmp4)}`;
        let tmp10 = tmp2;
        let text3 = tmp3;
      } else {
        let tmp18 = escapeString;
        tmp19 = escapeString(tmp4.prefix);
        let text1 = `${"(?:" + tmp4.pattern})`;
        let arr = items.push(tmp4);
        let text2 = text1;
        if (tmp4.repeat) {
          text2 = `${"(?:" + tmp4.pattern})${"(?:" + tmp19 + `${"(?:" + tmp4.pattern})` + ")*"}`;
        }
        if (tmp4.optional) {
          break;
        } else {
          text3 = `${tmp19 + "(" + tmp5})`;
          text = `${str2}${`${tmp19 + "(" + tmp5})`}`;
          tmp10 = tmp19;
        }
      }
      num = num + 1;
      str2 = text;
      tmp2 = tmp10;
      tmp3 = text3;
      str3 = text;
    }
    if (tmp4.partial) {
      let text4 = `${tmp19 + "(" + tmp5})?`;
    } else {
      text4 = `${"(?:" + tmp19 + "(" + tmp5}))?`;
    }
  }
  let str4 = obj.delimiter;
  if (!str4) {
    str4 = "/";
  }
  const tmp12Result = escapeString(str4);
  const tmp13 = str3.slice(-tmp12Result.length) === tmp12Result;
  let text5 = str3;
  if (!strict) {
    let substr = str3;
    if (tmp13) {
      substr = str3.slice(0, -tmp12Result.length);
    }
    text5 = `${tmp15 + "(?:" + arr2}(?=$))?`;
  }
  let str6 = "$";
  if (false === obj.end) {
    if (!strict) {
      str = `${"(?=" + arr2}|$)`;
    }
    str6 = str;
  }
  const regExp = new RegExp("^" + (text5 + str6), flags(obj));
  attachKeys(regExp, items);
  return regExp;
}
function pathToRegexp(source, items, id) {
  let length;
  let length2;
  let obj = id;
  if (!require(3961)(items)) {
    let tmp = items;
    if (!items) {
      tmp = id;
    }
    items = [];
    obj = tmp;
  }
  if (!obj) {
    obj = {};
  }
  if (source instanceof RegExp) {
    const match = source.source.match(/\((?!\?)/g);
    if (match) {
      let num2 = 0;
      if (0 < match.length) {
        do {
          obj = { name: num2, prefix: null, delimiter: null, optional: false, repeat: false, partial: false, asterisk: false, pattern: null };
          let arr = items.push(obj);
          num2 = num2 + 1;
          length2 = match.length;
        } while (num2 < length2);
      }
    }
    attachKeys(source, items);
    let tmp6 = source;
    const str4 = source.source;
  } else if (require(3961)(source)) {
    const items1 = [];
    let num = 0;
    if (0 < source.length) {
      do {
        let tmp7 = pathToRegexp;
        arr = items1.push(pathToRegexp(source[num], items, obj).source);
        num = num + 1;
        length = source.length;
      } while (num < length);
    }
    const _RegExp = RegExp;
    const text = `(?:${arr2.join("|")}`;
    const regExp = new RegExp(`(?:${arr2.join("|")}` + ")", flags(obj));
    attachKeys(regExp, items);
    tmp6 = regExp;
  } else {
    tmp6 = tokensToRegExp(parse(source, obj), items, obj);
  }
  return tmp6;
}
module.exports.parse = parse;
module.exports.compile = function compile(arg0, arg1) {
  return tokensToFunction(parse(arg0, arg1));
};
module.exports.tokensToFunction = tokensToFunction;
module.exports.tokensToRegExp = tokensToRegExp;
let items = ["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"];
let regExp = new RegExp(items.join("|"), "g");

export default pathToRegexp;
