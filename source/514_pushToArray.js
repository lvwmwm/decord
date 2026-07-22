// Module ID: 514
// Function ID: 6589
// Name: pushToArray
// Dependencies: []

// Module 514 (pushToArray)
let obj = {
  brackets(arg0) {
    return arg0 + "[]";
  },
  comma: "comma",
  indices(arg0, arg1) {
    return arg0 + "[" + arg1 + "]";
  },
  repeat(arg0) {
    return arg0;
  }
};
function pushToArray(arg0, arg1) {
  let tmp2 = arg1;
  if (!isArray(arg1)) {
    const items = [arg1];
    tmp2 = items;
  }
  push.apply(arg0, tmp2);
}
obj = {
  encoder: require(dependencyMap[0]).encode,
  filter: undefined,
  format: require(dependencyMap[1]).default,
  formatter: require(dependencyMap[1]).formatters[require(undefined, dependencyMap[1]).default],
  indices: false,
  serializeDate(arg0) {
    return toISOString.call(arg0);
  },
  skipNulls: false,
  strictNullHandling: false
};
let closure_9 = {};
function stringify(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, get) {
  const require = arg12;
  let value = get.get(closure_9);
  let num = 0;
  let flag = false;
  let num2 = 0;
  if (undefined !== value) {
    while (true) {
      value = value.get(arg0);
      let num3 = num + 1;
      let tmp2 = value;
      if (undefined !== value) {
        flag = true;
        if (value === num3) {
          break;
        }
      }
      let tmp3 = closure_9;
      if (undefined === value.get(closure_9)) {
        num3 = 0;
      }
      let tmp4 = closure_9;
      let value1 = value.get(closure_9);
      num2 = num3;
      if (undefined !== value1) {
        value = value1;
        num = num3;
        num2 = num3;
      }
    }
    const _RangeError = RangeError;
    const rangeError = new RangeError("Cyclic object value");
    throw rangeError;
  }
  if ("function" === typeof arg9) {
    let str2 = arg9(arg1, arg0);
  } else {
    const _Date = Date;
    if (arg0 instanceof Date) {
      str2 = arg12(arg0);
    } else {
      let tmp7 = "comma" === arg2;
      if (tmp7) {
        tmp7 = isArray(arg0);
      }
      str2 = arg0;
      if (tmp7) {
        str2 = require(dependencyMap[0]).maybeMap(arg0, (arg0) => {
          let tmp = arg0;
          if (arg0 instanceof Date) {
            tmp = arg12(arg0);
          }
          return tmp;
        });
        const obj2 = require(dependencyMap[0]);
      }
    }
  }
  if (null === str2) {
    str2 = "";
    if (arg5) {
      let tmp77 = arg1;
      if (arg8) {
        tmp77 = arg1;
        if (!arg15) {
          tmp77 = arg8(arg1, obj.encoder, arg16, "key", arg13);
        }
      }
      return tmp77;
    }
  }
  let tmp12 = "string" === tmp11;
  if (!tmp12) {
    tmp12 = "number" === tmp11;
  }
  if (!tmp12) {
    tmp12 = "boolean" === tmp11;
  }
  if (!tmp12) {
    tmp12 = "symbol" === tmp11;
  }
  if (!tmp12) {
    tmp12 = "bigint" === tmp11;
  }
  if (!tmp12) {
    if (!obj3.isBuffer(str2)) {
      const items = [];
      if (undefined === str2) {
        return items;
      } else {
        if ("comma" === arg2) {
          if (isArray(str2)) {
            let tmp19 = arg15;
            if (arg15) {
              tmp19 = arg8;
            }
            let maybeMapResult = str2;
            if (tmp19) {
              maybeMapResult = require(dependencyMap[0]).maybeMap(str2, arg8);
              const obj5 = require(dependencyMap[0]);
            }
            const obj = {};
            let tmp22;
            if (maybeMapResult.length > 0) {
              tmp22 = maybeMapResult.join(",") || null;
              const tmp23 = maybeMapResult.join(",") || null;
            }
            obj.value = tmp22;
            const items1 = [obj];
            let arr2 = maybeMapResult;
            let arr3 = items1;
          }
          const _String = String;
          const str8 = String(arg1);
          if (arg7) {
            let replaced = str8.replace(/\./g, "%2E");
          } else {
            replaced = str8;
          }
          let text = replaced;
          if (arg3) {
            text = replaced;
            if (isArray(arr2)) {
              text = replaced;
              if (1 === arr2.length) {
                text = `${tmp25}[]`;
              }
            }
          }
          if (arg4) {
            if (isArray(arr2)) {
              if (0 === arr2.length) {
                return text + "[]";
              }
            }
          }
          let num5 = 0;
          if (0 < arr3.length) {
            while (true) {
              let iter = arr3[num5];
              if ("object" === typeof iter) {
                if (iter) {
                  if (undefined !== iter.value) {
                    value = iter.value;
                    if (!arg6) {
                      if (arg11) {
                        if (arg7) {
                          let _String3 = String;
                          let str16 = String(iter);
                          let replaced1 = str16.replace(/\./g, "%2E");
                          let tmp31 = isArray;
                          if (isArray(arr2)) {
                            let tmp34 = text;
                            if ("function" === tmp29) {
                              tmp34 = arg2(text, replaced1);
                            }
                            let sum = tmp34;
                          } else {
                            if (arg11) {
                              let text1 = `.${tmp30}`;
                            } else {
                              text1 = `${"[" + tmp30}]`;
                            }
                            sum = text + text1;
                          }
                          let result = get.set(arg0, num2);
                          let tmp36 = require;
                          let tmp37 = dependencyMap;
                          let obj7 = require(dependencyMap[2])();
                          let tmp38 = closure_9;
                          let result1 = obj7.set(closure_9, get);
                          if (tmp87) {
                            if (arg15) {
                              let tmp42 = isArray;
                              let tmp43 = null;
                            }
                            let tmp44 = value;
                            let tmp45 = sum;
                            let tmp46 = arg2;
                            let tmp47 = arg3;
                            let tmp48 = arg4;
                            let tmp49 = arg5;
                            let tmp50 = arg6;
                            let tmp51 = arg7;
                            let tmp52 = tmp43;
                            let tmp53 = arg9;
                            let tmp54 = arg10;
                            let tmp55 = arg11;
                            let tmp56 = arg12;
                            let tmp57 = arg13;
                            let tmp58 = arg14;
                            let tmp59 = arg15;
                            let tmp60 = arg16;
                            let tmp61 = obj7;
                            let tmp40Result = tmp40(items, tmp41(value, sum, arg2, arg3, arg4, arg5, arg6, arg7, tmp43, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, obj7));
                            let tmp63 = replaced1;
                            let tmp64 = obj7;
                          }
                          tmp43 = arg8;
                        }
                      }
                      let _String2 = String;
                      replaced1 = String(iter);
                    }
                    num5 = num5 + 1;
                    if (num5 >= arr3.length) {
                      break;
                    }
                  }
                }
              }
              value = arr2[iter];
            }
          }
          return items;
        }
        arr2 = str2;
        arr3 = arg9;
        if (!isArray(arg9)) {
          const _Object = Object;
          const keys = Object.keys(str2);
          let sorted = keys;
          if (arg10) {
            sorted = keys.sort(arg10);
          }
          arr3 = sorted;
          arr2 = str2;
        }
      }
    }
    const obj3 = require(dependencyMap[0]);
  }
  if (arg8) {
    let tmp67 = arg1;
    if (!arg15) {
      tmp67 = arg8(arg1, obj.encoder, arg16, "key", arg13);
    }
    const text2 = `${arg14(tmp67)}=`;
    const items2 = [`${arg14(tmp67)}=` + arg14(arg8(str2, obj.encoder, arg16, "value", arg13))];
    let items3 = items2;
  } else {
    const _String4 = String;
    const text3 = `${arg14(arg1)}=`;
    items3 = [`${arg14(arg1)}=` + arg14(String(str2))];
  }
  return items3;
}

export default (arg0, allowEmptyArrays) => {
  let allowEmptyArrays2;
  let encodeDotInKeys2;
  let skipNulls2;
  let strictNullHandling2;
  if (allowEmptyArrays) {
    if (undefined !== allowEmptyArrays.allowEmptyArrays) {
      if ("boolean" !== typeof allowEmptyArrays.allowEmptyArrays) {
        const _TypeError6 = TypeError;
        const typeError = new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        throw typeError;
      }
    }
    if (undefined !== allowEmptyArrays.encodeDotInKeys) {
      if ("boolean" !== typeof allowEmptyArrays.encodeDotInKeys) {
        const _TypeError5 = TypeError;
        const typeError1 = new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
        throw typeError1;
      }
    }
    if (null !== allowEmptyArrays.encoder) {
      if (undefined !== allowEmptyArrays.encoder) {
        if ("function" !== typeof allowEmptyArrays.encoder) {
          const _TypeError4 = TypeError;
          const typeError2 = new TypeError("Encoder has to be a function.");
          throw typeError2;
        }
      }
    }
    let charset = allowEmptyArrays.charset;
    if (!charset) {
      charset = obj.charset;
    }
    if (undefined !== allowEmptyArrays.charset) {
      if ("utf-8" !== allowEmptyArrays.charset) {
        if ("iso-8859-1" !== allowEmptyArrays.charset) {
          const _TypeError3 = TypeError;
          const typeError3 = new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          throw typeError3;
        }
      }
    }
    let format = require(dependencyMap[1]).default;
    if (undefined !== allowEmptyArrays.format) {
      if (hasOwnProperty.call(require(dependencyMap[1]).formatters, allowEmptyArrays.format)) {
        format = allowEmptyArrays.format;
      } else {
        const _TypeError = TypeError;
        const typeError4 = new TypeError("Unknown format option provided.");
        throw typeError4;
      }
    }
    let filter = obj.filter;
    let tmp16 = "function" === typeof allowEmptyArrays.filter;
    if (!tmp16) {
      tmp16 = isArray(allowEmptyArrays.filter);
    }
    if (tmp16) {
      filter = allowEmptyArrays.filter;
    }
    if (allowEmptyArrays.arrayFormat in obj) {
      let arrayFormat = allowEmptyArrays.arrayFormat;
    } else if ("indices" in allowEmptyArrays) {
      let str9 = "repeat";
      if (allowEmptyArrays.indices) {
        str9 = "indices";
      }
      arrayFormat = str9;
    } else {
      arrayFormat = obj.arrayFormat;
    }
    if ("commaRoundTrip" in allowEmptyArrays) {
      if ("boolean" !== typeof allowEmptyArrays.commaRoundTrip) {
        const _TypeError2 = TypeError;
        const typeError5 = new TypeError("`commaRoundTrip` must be a boolean, or absent");
        throw typeError5;
      }
    }
    if (undefined === allowEmptyArrays.allowDots) {
      let allowDots = true === allowEmptyArrays.encodeDotInKeys;
      if (!allowDots) {
        allowDots = obj.allowDots;
      }
    } else {
      allowDots = allowEmptyArrays.allowDots;
    }
    const obj = {};
    if ("boolean" === typeof allowEmptyArrays.addQueryPrefix) {
      let addQueryPrefix = allowEmptyArrays.addQueryPrefix;
    } else {
      addQueryPrefix = obj.addQueryPrefix;
    }
    obj.addQueryPrefix = addQueryPrefix;
    obj.allowDots = allowDots;
    if ("boolean" === typeof allowEmptyArrays.allowEmptyArrays) {
      allowEmptyArrays = allowEmptyArrays.allowEmptyArrays;
    } else {
      allowEmptyArrays = obj.allowEmptyArrays;
    }
    obj.allowEmptyArrays = allowEmptyArrays;
    obj.arrayFormat = arrayFormat;
    obj.charset = charset;
    if ("boolean" === typeof allowEmptyArrays.charsetSentinel) {
      let charsetSentinel = allowEmptyArrays.charsetSentinel;
    } else {
      charsetSentinel = obj.charsetSentinel;
    }
    obj.charsetSentinel = charsetSentinel;
    obj.commaRoundTrip = allowEmptyArrays.commaRoundTrip;
    if (undefined === allowEmptyArrays.delimiter) {
      let delimiter = obj.delimiter;
    } else {
      delimiter = allowEmptyArrays.delimiter;
    }
    obj.delimiter = delimiter;
    if ("boolean" === typeof allowEmptyArrays.encode) {
      let encode = allowEmptyArrays.encode;
    } else {
      encode = obj.encode;
    }
    obj.encode = encode;
    if ("boolean" === typeof allowEmptyArrays.encodeDotInKeys) {
      let encodeDotInKeys = allowEmptyArrays.encodeDotInKeys;
    } else {
      encodeDotInKeys = obj.encodeDotInKeys;
    }
    obj.encodeDotInKeys = encodeDotInKeys;
    if ("function" === typeof allowEmptyArrays.encoder) {
      let encoder = allowEmptyArrays.encoder;
    } else {
      encoder = obj.encoder;
    }
    obj.encoder = encoder;
    if ("boolean" === typeof allowEmptyArrays.encodeValuesOnly) {
      let encodeValuesOnly = allowEmptyArrays.encodeValuesOnly;
    } else {
      encodeValuesOnly = obj.encodeValuesOnly;
    }
    obj.encodeValuesOnly = encodeValuesOnly;
    obj.filter = filter;
    obj.format = format;
    obj.formatter = require(dependencyMap[1]).formatters[format];
    if ("function" === typeof allowEmptyArrays.serializeDate) {
      let serializeDate = allowEmptyArrays.serializeDate;
    } else {
      serializeDate = obj.serializeDate;
    }
    obj.serializeDate = serializeDate;
    if ("boolean" === typeof allowEmptyArrays.skipNulls) {
      let skipNulls = allowEmptyArrays.skipNulls;
    } else {
      skipNulls = obj.skipNulls;
    }
    obj.skipNulls = skipNulls;
    let sort = null;
    if ("function" === typeof allowEmptyArrays.sort) {
      sort = allowEmptyArrays.sort;
    }
    obj.sort = sort;
    if ("boolean" === typeof allowEmptyArrays.strictNullHandling) {
      let strictNullHandling = allowEmptyArrays.strictNullHandling;
    } else {
      strictNullHandling = obj.strictNullHandling;
    }
    obj.strictNullHandling = strictNullHandling;
  } else {
    if ("function" === typeof obj.filter) {
      let found = arr.filter("", arg0);
    } else {
      found = arg0;
      if (isArray(arr.filter)) {
        filter = arr.filter;
        found = arg0;
      }
    }
    const items = [];
    if ("object" === typeof found) {
      if (null !== found) {
        if (!filter) {
          const _Object = Object;
          filter = Object.keys(found);
        }
        if (arr.sort) {
          const sorted = filter.sort(arr.sort);
        }
        const tmp42 = require(dependencyMap[2])();
        for (let num4 = 0; num4 < filter.length; num4 = num4 + 1) {
          let tmp43 = filter[num4];
          let tmp44 = found[tmp43];
          let tmp45 = arr.skipNulls && null === tmp44;
          if (!tmp45) {
            ({ allowEmptyArrays: allowEmptyArrays2, strictNullHandling: strictNullHandling2, skipNulls: skipNulls2, encodeDotInKeys: encodeDotInKeys2 } = arr);
            encoder = null;
            let tmp46 = pushToArray;
            let tmp47 = stringify;
            if (arr.encode) {
              encoder = arr.encoder;
            }
            let tmp49 = tmp44;
            let tmp50 = tmp43;
            let tmp51 = tmp90;
            let tmp52 = tmp37;
            let tmp53 = allowEmptyArrays2;
            let tmp54 = strictNullHandling2;
            let tmp55 = skipNulls2;
            let tmp56 = encodeDotInKeys2;
            let tmp57 = encoder;
            let tmp58 = tmp42;
            let tmp46Result = tmp46(items, tmp47(tmp44, tmp43, tmp90, tmp37, allowEmptyArrays2, strictNullHandling2, skipNulls2, encodeDotInKeys2, encoder, arr.filter, arr.sort, arr.allowDots, arr.serializeDate, arr.format, arr.formatter, arr.encodeValuesOnly, arr.charset, tmp42));
          }
        }
        const joined = items.join(arr.delimiter);
        let str16 = "";
        let str17 = "";
        if (true === arr.addQueryPrefix) {
          str17 = "?";
        }
        if (!arr.charsetSentinel) {
          if (joined.length > 0) {
            str16 = str17 + joined;
          }
          return str16;
        } else if ("iso-8859-1" === arr.charset) {
          let text = `${str17}utf8=%26%2310003%3B&`;
        } else {
          text = `${str17}utf8=%E2%9C%93&`;
        }
      }
    }
    return "";
  }
};
