// Module ID: 512
// Function ID: 6566
// Name: interpretNumericEntities
// Dependencies: [513]

// Module 512 (interpretNumericEntities)
let obj = { allowDots: false, allowEmptyArrays: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decodeDotInKeys: false, decoder: require("items").decode, delimiter: "&", depth: 5, duplicates: "combine", ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1000, parseArrays: true, plainObjects: false, strictDepth: false, strictNullHandling: false, throwOnLimitExceeded: false };
function interpretNumericEntities(str) {
  return str.replace(/&#(\d+);/g, (arg0, replaced) => String.fromCharCode(parseInt(replaced, 10)));
}
function parseArrayValue(arr, comma, arg2) {
  if (arr) {
    if ("string" === typeof arr) {
      if (comma.comma) {
        if (arr.indexOf(",") > -1) {
          return arr.split(",");
        }
      }
    }
  }
  if (comma.throwOnLimitExceeded) {
    if (arg2 >= comma.arrayLimit) {
      let _RangeError = RangeError;
      let str4 = "s";
      const text = `Array limit exceeded. Only ${comma.arrayLimit}`;
      if (1 === comma.arrayLimit) {
        str4 = "";
      }
      const prototype = _RangeError.prototype;
      _RangeError = new _RangeError(text + " element" + str4 + " allowed in an array.");
      throw _RangeError;
    }
  }
  return arr;
}
function parseQueryStringKeys(str, arr, allowDots, arg3) {
  if (str) {
    let replaced = str;
    if (allowDots.allowDots) {
      replaced = str.replace(/\.([^.[]+)/g, "[$1]");
    }
    let obj = /(\[[^[\]]*])/g;
    let match = allowDots.depth > 0;
    if (match) {
      match = /(\[[^[\]]*])/.exec(replaced);
      const obj2 = /(\[[^[\]]*])/;
    }
    let substr = replaced;
    if (match) {
      substr = replaced.slice(0, match.index);
    }
    const items = [];
    if (substr) {
      if (!allowDots.plainObjects) {
        const _Object = Object;
      }
      arr = items.push(substr);
    }
    if (allowDots.depth > 0) {
      const match1 = obj.exec(replaced);
      match = match1;
      if (null !== match1) {
        let tmp9 = match1;
        let num2 = 0;
        match = match1;
        if (0 < allowDots.depth) {
          while (true) {
            num2 = num2 + 1;
            if (!allowDots.plainObjects) {
              let tmp6 = hasOwnProperty;
              let _Object2 = Object;
              let arr3 = tmp9[1];
              if (hasOwnProperty.call(Object.prototype, arr3.slice(1, -1))) {
                if (!allowDots.allowPrototypes) {
                  break;
                }
              }
            }
            arr = items.push(tmp9[1]);
            match = tmp9;
            if (allowDots.depth > 0) {
              let match2 = obj.exec(replaced);
              match = match2;
              if (null !== match2) {
                tmp9 = match2;
                match = match2;
              }
            }
          }
        }
      }
    }
    if (match) {
      if (true === allowDots.strictDepth) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("Input depth exceeded depth option of " + allowDots.depth + " and strictDepth is true");
        throw rangeError;
      } else {
        items.push(`[${arr.slice(tmp.index)}]`);
      }
    }
    let num3 = 0;
    if (items.length > 0) {
      num3 = 0;
      if ("[]" === items[items.length - 1]) {
        const substr1 = items.slice(0, -1);
        const joined = substr1.join("");
        const _Array = Array;
        let num6 = 0;
        if (Array.isArray(arr)) {
          num6 = 0;
          if (arr[joined]) {
            num6 = arr[joined].length;
          }
        }
        num3 = num6;
      }
    }
    let tmp13 = arr;
    if (!arg3) {
      tmp13 = parseArrayValue(arr, allowDots, num3);
    }
    let diff = items.length - 1;
    let tmp18 = tmp13;
    let tmp22 = tmp13;
    if (diff >= 0) {
      while (true) {
        let str10 = items[diff];
        if ("[]" === str10) {
          if (allowDots.parseArrays) {
            break;
          }
        }
        let tmp23 = allowDots.plainObjects ? Object.create(null) : {};
        let str11 = str10;
        if ("[" === str10.charAt(0)) {
          str11 = str10;
          if ("]" === str10.charAt(str10.length - 1)) {
            str11 = str10.slice(1, -1);
          }
        }
        let replaced1 = str11;
        if (allowDots.decodeDotInKeys) {
          replaced1 = str11.replace(/%2E/g, ".");
        }
        let _parseInt = parseInt;
        let parsed = parseInt(replaced1, 10);
        let tmp26 = replaced1;
        if (!allowDots.parseArrays) {
          if ("" === replaced1) {
            obj = {};
            obj[0] = tmp18;
            let tmp27 = str11;
            let tmp28 = replaced1;
            let tmp29 = parsed;
          }
          diff = diff - 1;
          tmp18 = obj;
          let tmp19 = tmp27;
          let tmp20 = tmp28;
          let tmp21 = tmp29;
          tmp22 = obj;
        }
        let _isNaN = isNaN;
        if (!isNaN(parsed)) {
          if (str10 !== replaced1) {
            let _String = String;
            if (String(parsed) === replaced1) {
              if (parsed >= 0) {
                if (allowDots.parseArrays) {
                  if (parsed <= allowDots.arrayLimit) {
                    let items1 = [];
                    items1[parsed] = tmp18;
                    obj = items1;
                    tmp27 = str11;
                    tmp28 = replaced1;
                    tmp29 = parsed;
                  }
                }
              }
            }
          }
        }
        obj = tmp23;
        tmp27 = str11;
        tmp28 = replaced1;
        tmp29 = parsed;
        if ("__proto__" !== replaced1) {
          tmp23[replaced1] = tmp18;
          obj = tmp23;
          tmp27 = str11;
          tmp28 = replaced1;
          tmp29 = parsed;
        }
      }
      if (!allowDots.allowEmptyArrays) {
        let combineResult = require(513) /* items */.combine([], tmp18);
        const obj5 = require(513) /* items */;
      }
      combineResult = [];
    }
    return tmp22;
  }
}

export default (arg0, allowEmptyArrays) => {
  let length;
  if (allowEmptyArrays) {
    if (undefined !== allowEmptyArrays.allowEmptyArrays) {
      if ("boolean" !== typeof allowEmptyArrays.allowEmptyArrays) {
        const _TypeError6 = TypeError;
        const typeError = new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        throw typeError;
      }
    }
    if (undefined !== allowEmptyArrays.decodeDotInKeys) {
      if ("boolean" !== typeof allowEmptyArrays.decodeDotInKeys) {
        const _TypeError5 = TypeError;
        const typeError1 = new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
        throw typeError1;
      }
    }
    if (null !== allowEmptyArrays.decoder) {
      if (undefined !== allowEmptyArrays.decoder) {
        if ("function" !== typeof allowEmptyArrays.decoder) {
          const _TypeError4 = TypeError;
          const typeError2 = new TypeError("Decoder has to be a function.");
          throw typeError2;
        }
      }
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
    if (undefined !== allowEmptyArrays.throwOnLimitExceeded) {
      if ("boolean" !== typeof allowEmptyArrays.throwOnLimitExceeded) {
        const _TypeError2 = TypeError;
        const typeError4 = new TypeError("`throwOnLimitExceeded` option must be a boolean");
        throw typeError4;
      }
    }
    if (undefined === allowEmptyArrays.charset) {
      let charset = obj.charset;
    } else {
      charset = allowEmptyArrays.charset;
    }
    if (undefined === allowEmptyArrays.duplicates) {
      let duplicates = obj.duplicates;
    } else {
      duplicates = allowEmptyArrays.duplicates;
    }
    if ("combine" !== duplicates) {
      if ("first" !== duplicates) {
        if ("last" !== duplicates) {
          const _TypeError = TypeError;
          const typeError5 = new TypeError("The duplicates option must be either combine, first, or last");
          throw typeError5;
        }
      }
    }
    obj = {};
    if (undefined === allowEmptyArrays.allowDots) {
      let allowDots = true === allowEmptyArrays.decodeDotInKeys;
      if (!allowDots) {
        allowDots = obj.allowDots;
      }
    } else {
      allowDots = allowEmptyArrays.allowDots;
    }
    obj.allowDots = allowDots;
    if ("boolean" === typeof allowEmptyArrays.allowEmptyArrays) {
      allowEmptyArrays = allowEmptyArrays.allowEmptyArrays;
    } else {
      allowEmptyArrays = obj.allowEmptyArrays;
    }
    obj.allowEmptyArrays = allowEmptyArrays;
    if ("boolean" === typeof allowEmptyArrays.allowPrototypes) {
      let allowPrototypes = allowEmptyArrays.allowPrototypes;
    } else {
      allowPrototypes = obj.allowPrototypes;
    }
    obj.allowPrototypes = allowPrototypes;
    if ("boolean" === typeof allowEmptyArrays.allowSparse) {
      let allowSparse = allowEmptyArrays.allowSparse;
    } else {
      allowSparse = obj.allowSparse;
    }
    obj.allowSparse = allowSparse;
    if ("number" === typeof allowEmptyArrays.arrayLimit) {
      let arrayLimit = allowEmptyArrays.arrayLimit;
    } else {
      arrayLimit = obj.arrayLimit;
    }
    obj.arrayLimit = arrayLimit;
    obj.charset = charset;
    if ("boolean" === typeof allowEmptyArrays.charsetSentinel) {
      let charsetSentinel = allowEmptyArrays.charsetSentinel;
    } else {
      charsetSentinel = obj.charsetSentinel;
    }
    obj.charsetSentinel = charsetSentinel;
    if ("boolean" === typeof allowEmptyArrays.comma) {
      let comma = allowEmptyArrays.comma;
    } else {
      comma = obj.comma;
    }
    obj.comma = comma;
    if ("boolean" === typeof allowEmptyArrays.decodeDotInKeys) {
      let decodeDotInKeys = allowEmptyArrays.decodeDotInKeys;
    } else {
      decodeDotInKeys = obj.decodeDotInKeys;
    }
    obj.decodeDotInKeys = decodeDotInKeys;
    if ("function" === typeof allowEmptyArrays.decoder) {
      let decoder = allowEmptyArrays.decoder;
    } else {
      decoder = obj.decoder;
    }
    obj.decoder = decoder;
    if ("string" !== typeof allowEmptyArrays.delimiter) {
      if (!obj2.isRegExp(allowEmptyArrays.delimiter)) {
        let delimiter = obj.delimiter;
      }
      obj.delimiter = delimiter;
      if ("number" !== typeof allowEmptyArrays.depth) {
        if (false !== allowEmptyArrays.depth) {
          let depth = obj.depth;
        }
        obj.depth = depth;
        obj.duplicates = duplicates;
        obj.ignoreQueryPrefix = true === allowEmptyArrays.ignoreQueryPrefix;
        if ("boolean" === typeof allowEmptyArrays.interpretNumericEntities) {
          let interpretNumericEntities = allowEmptyArrays.interpretNumericEntities;
        } else {
          interpretNumericEntities = obj.interpretNumericEntities;
        }
        obj.interpretNumericEntities = interpretNumericEntities;
        if ("number" === typeof allowEmptyArrays.parameterLimit) {
          let parameterLimit = allowEmptyArrays.parameterLimit;
        } else {
          parameterLimit = obj.parameterLimit;
        }
        obj.parameterLimit = parameterLimit;
        obj.parseArrays = false !== allowEmptyArrays.parseArrays;
        if ("boolean" === typeof allowEmptyArrays.plainObjects) {
          let plainObjects = allowEmptyArrays.plainObjects;
        } else {
          plainObjects = obj.plainObjects;
        }
        obj.plainObjects = plainObjects;
        if ("boolean" === typeof allowEmptyArrays.strictDepth) {
          let strictDepth = allowEmptyArrays.strictDepth;
        } else {
          strictDepth = obj.strictDepth;
        }
        obj.strictDepth = strictDepth;
        if ("boolean" === typeof allowEmptyArrays.strictNullHandling) {
          let strictNullHandling = allowEmptyArrays.strictNullHandling;
        } else {
          strictNullHandling = obj.strictNullHandling;
        }
        obj.strictNullHandling = strictNullHandling;
        obj.throwOnLimitExceeded = "boolean" === typeof allowEmptyArrays.throwOnLimitExceeded && allowEmptyArrays.throwOnLimitExceeded;
        let tmp = obj;
      }
      depth = +allowEmptyArrays.depth;
      obj2 = require(513) /* items */;
    }
    delimiter = allowEmptyArrays.delimiter;
  } else {
    tmp = obj;
  }
  if ("" !== arg0) {
    if (null != arg0) {
      let tmp24 = arg0;
      if ("string" === typeof arg0) {
        tmp24 = (function parseQueryStringValues(str, ignoreQueryPrefix) {
          let closure_0 = ignoreQueryPrefix;
          let obj = Object.create(null);
          if (ignoreQueryPrefix.ignoreQueryPrefix) {
            str = str.replace(/^\?/, "");
          }
          const str3 = str.replace(/%5B/gi, "[");
          let parameterLimit;
          if (ignoreQueryPrefix.parameterLimit !== Infinity) {
            parameterLimit = ignoreQueryPrefix.parameterLimit;
          }
          let sum = parameterLimit;
          if (ignoreQueryPrefix.throwOnLimitExceeded) {
            sum = parameterLimit + 1;
          }
          const parts = str.replace(/%5B/gi, "[").replace(/%5D/gi, "]").split(ignoreQueryPrefix.delimiter, sum);
          if (ignoreQueryPrefix.throwOnLimitExceeded) {
            if (parts.length > parameterLimit) {
              let _RangeError = RangeError;
              let str13 = "s";
              const text = `Parameter limit exceeded. Only ${tmp2}`;
              if (1 === parameterLimit) {
                str13 = "";
              }
              const prototype = _RangeError.prototype;
              _RangeError = new _RangeError(text + " parameter" + str13 + " allowed.");
              throw _RangeError;
            }
          }
          const charset = ignoreQueryPrefix.charset;
          let c1 = charset;
          let num2 = -1;
          let tmp4 = charset;
          if (ignoreQueryPrefix.charsetSentinel) {
            let num4 = 0;
            let str10 = charset;
            num2 = -1;
            tmp4 = charset;
            if (0 < parts.length) {
              while (0 !== arr2.indexOf("utf8=")) {
                num4 = num4 + 1;
                num2 = -1;
                tmp4 = str10;
              }
              if ("utf8=%E2%9C%93" === parts[num4]) {
                c1 = "utf-8";
                str10 = "utf-8";
              } else if ("utf8=%26%2310003%3B" === parts[num4]) {
                c1 = "iso-8859-1";
                str10 = "iso-8859-1";
              }
              arr2 = parts[num4];
            }
          }
          for (let num6 = 0; num6 < parts.length; num6 = num6 + 1) {
            if (num6 !== num2) {
              let arr4 = parts[num6];
              let index = arr4.indexOf("]=");
              if (-1 === index) {
                let index1 = arr4.indexOf("=");
              } else {
                index1 = index + 1;
              }
              if (-1 === index1) {
                let tmp13 = outer1_4;
                let tmp14 = ignoreQueryPrefix;
                let tmp15 = arr4;
                let tmp16 = tmp4;
                let str11 = "key";
                let tmp18 = "";
                let decoderResult = ignoreQueryPrefix.decoder(arr4, outer1_4.decoder, tmp4, "key");
                if (ignoreQueryPrefix.strictNullHandling) {
                  tmp18 = null;
                }
                let maybeMapResult = tmp18;
                let tmp12 = decoderResult;
              } else {
                let tmp54 = outer1_4;
                let tmp55 = ignoreQueryPrefix;
                let tmp56 = tmp4;
                let str16 = "key";
                let decoderResult1 = ignoreQueryPrefix.decoder(arr4.slice(0, index1), outer1_4.decoder, tmp4, "key");
                let tmp58 = outer1_0;
                let tmp59 = outer1_1;
                let obj2 = outer1_0(outer1_1[0]);
                let tmp60 = outer1_6;
                let tmp62 = outer1_3;
                let substr = arr4.slice(index1 + 1);
                let num7 = 0;
                if (outer1_3(obj[decoderResult1])) {
                  num7 = obj[decoderResult1].length;
                }
                maybeMapResult = obj2.maybeMap(tmp60(substr, ignoreQueryPrefix, num7), (arg0) => ignoreQueryPrefix.decoder(arg0, outer2_4.decoder, c1, "value"));
                tmp12 = decoderResult1;
              }
              let interpretNumericEntities = maybeMapResult;
              if (maybeMapResult) {
                interpretNumericEntities = ignoreQueryPrefix.interpretNumericEntities;
              }
              if (interpretNumericEntities) {
                interpretNumericEntities = tmp9;
              }
              let tmp19 = maybeMapResult;
              if (interpretNumericEntities) {
                let tmp20 = outer1_5;
                let _String = String;
                tmp19 = outer1_5(String(maybeMapResult));
              }
              let tmp21 = tmp19;
              if (arr4.indexOf("[]=") > -1) {
                let tmp22 = outer1_3;
                let tmp23 = tmp19;
                if (outer1_3(tmp19)) {
                  let items = [tmp19];
                  tmp23 = items;
                }
                tmp21 = tmp23;
              }
              let tmp24 = outer1_2;
              let callResult = outer1_2.call(obj, tmp12);
              if (callResult) {
                if ("combine" === ignoreQueryPrefix.duplicates) {
                  let tmp39 = outer1_0;
                  let tmp40 = outer1_1;
                  obj = outer1_0(outer1_1[0]);
                  obj[tmp12] = obj.combine(obj[tmp12], tmp21);
                  let tmp41 = tmp12;
                  let tmp42 = tmp21;
                  let tmp43 = arr4;
                  let tmp44 = index;
                  let tmp45 = index1;
                  let tmp46 = callResult;
                }
              }
              let tmp26 = callResult;
              if (callResult) {
                tmp26 = "last" !== ignoreQueryPrefix.duplicates;
              }
              let tmp27 = tmp12;
              let tmp28 = tmp21;
              let tmp29 = arr4;
              let tmp30 = index;
              let tmp31 = index1;
              let tmp32 = callResult;
              if (!tmp26) {
                obj[tmp12] = tmp21;
                let tmp33 = tmp12;
                let tmp34 = tmp21;
                let tmp35 = arr4;
                let tmp36 = index;
                let tmp37 = index1;
                let tmp38 = callResult;
              }
            }
          }
          return obj;
        })(arg0, tmp);
      }
      const tmp25 = tmp.plainObjects ? Object.create(null) : {};
      const _Object = Object;
      const keys = Object.keys(tmp24);
      let mergeResult = tmp25;
      let num3 = 0;
      let tmp28 = tmp25;
      if (0 < keys.length) {
        do {
          let tmp29 = keys[num3];
          let tmp30 = parseQueryStringKeys;
          let tmp31 = tmp29;
          let tmp32 = tmp;
          let tmp33 = tmp72;
          let tmp35 = require;
          let tmp36 = dependencyMap;
          let tmp34 = parseQueryStringKeys(tmp29, tmp24[tmp29], tmp, tmp72);
          let obj3 = require(513) /* items */;
          mergeResult = obj3.merge(mergeResult, tmp34, tmp);
          num3 = num3 + 1;
          tmp28 = mergeResult;
          length = keys.length;
        } while (num3 < length);
      }
      let compactResult = tmp28;
      if (true !== tmp.allowSparse) {
        compactResult = require(513) /* items */.compact(tmp28);
        const obj4 = require(513) /* items */;
      }
      return compactResult;
    }
  }
  if (tmp.plainObjects) {
    obj = Object.create(null);
  } else {
    obj = {};
  }
  return obj;
};
