// Module ID: 1495
// Function ID: 17228
// Name: validateArrayFormatSeparator
// Dependencies: []
// Exports: exclude, parseUrl, pick, stringify, stringifyUrl

// Module 1495 (validateArrayFormatSeparator)
function validateArrayFormatSeparator(arrayFormatSeparator) {
  const typeError = new TypeError("arrayFormatSeparator must be single character string");
  throw typeError;
}
function encode(arg0, encode) {
  if (!encode.encode) {
    return arg0;
  } else if (encode.strict) {
    let encodeURIComponentResult = require(dependencyMap[3])(arg0);
  } else {
    const _encodeURIComponent = encodeURIComponent;
    encodeURIComponentResult = encodeURIComponent(arg0);
  }
}
function decode(arg0, decode) {
  let tmp = arg0;
  if (decode.decode) {
    tmp = require(dependencyMap[4])(arg0);
  }
  return tmp;
}
function keysSorter(arr) {
  const require = arr;
  if (Array.isArray(arr)) {
    let sorted = arr.sort();
  } else {
    sorted = arr;
    if ("object" === typeof arr) {
      const _Object = Object;
      const sorted1 = keysSorter(Object.keys(arr)).sort((arg0, arg1) => Number(arg0) - Number(arg1));
      sorted = sorted1.map((arg0) => arg0[arg0]);
      const obj = keysSorter(Object.keys(arr));
    }
  }
  return sorted;
}
function removeHash(url) {
  const index = url.indexOf("#");
  let substr = url;
  if (-1 !== index) {
    substr = url.slice(0, index);
  }
  return substr;
}
function extract(url) {
  const arr = removeHash(url);
  const index = arr.indexOf("?");
  let str = "";
  if (-1 !== index) {
    str = arr.slice(index + 1);
  }
  return str;
}
function parseValue(str, parseNumbers) {
  if (parseNumbers.parseNumbers) {
    const _Number = Number;
    const _Number2 = Number;
    if (!Number.isNaN(Number(str))) {
      if ("string" === typeof str) {
        if ("" !== str.trim()) {
          const _Number3 = Number;
          let NumberResult = Number(str);
        }
        return NumberResult;
      }
    }
  }
  let tmp3 = !parseNumbers.parseBooleans;
  if (!tmp3) {
    tmp3 = null === str;
  }
  if (!tmp3) {
    let tmp5 = "true" !== str.toLowerCase();
    if (tmp5) {
      tmp5 = "false" !== str.toLowerCase();
    }
    tmp3 = tmp5;
  }
  NumberResult = str;
  if (!tmp3) {
    NumberResult = "true" === str.toLowerCase();
  }
}
function parse(str) {
  let tmp15;
  let tmp16;
  const merged = Object.assign({ "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true }, arg1);
  validateArrayFormatSeparator(merged.arrayFormatSeparator);
  const tmp4 = function parserForArrayFormat(merged) {
    const arrayFormat = merged.arrayFormat;
    if ("index" === arrayFormat) {
      return (str) => {
        let closure_1 = /\[(\d*)\]$/.exec(str);
        const replaced = str.replace(/\[\d*\]$/, "");
        if (closure_1) {
          if (undefined === arg2[replaced]) {
            arg2[replaced] = {};
          }
          arg2[replaced][closure_1[1]] = arg1;
        } else {
          arg2[replaced] = arg1;
        }
      };
    } else if ("bracket" === arrayFormat) {
      return (str) => {
        let closure_1 = /(\[\])$/.exec(str);
        const replaced = str.replace(/\[\]$/, "");
        if (closure_1) {
          if (undefined !== arg2[replaced]) {
            const items = [];
            arg2[replaced] = items.concat(arg2[replaced], arg1);
          } else {
            const items1 = [arg1];
            arg2[replaced] = items1;
          }
        } else {
          arg2[replaced] = arg1;
        }
      };
    } else if ("colon-list-separator" === arrayFormat) {
      return (str) => {
        let closure_1 = /(:list)$/.exec(str);
        const replaced = str.replace(/:list$/, "");
        if (closure_1) {
          if (undefined !== arg2[replaced]) {
            const items = [];
            arg2[replaced] = items.concat(arg2[replaced], arg1);
          } else {
            const items1 = [arg1];
            arg2[replaced] = items1;
          }
        } else {
          arg2[replaced] = arg1;
        }
      };
    } else {
      if ("comma" !== arrayFormat) {
        if ("separator" !== arrayFormat) {
          return "bracket-separator" === arrayFormat ? (str, str2) => {
            const isMatch = /(\[\])$/.test(str);
            const replaced = str.replace(/\[\]$/, "");
            if (isMatch) {
              if (null === str2) {
                let items = [];
              } else {
                const parts = str2.split(str.arrayFormatSeparator);
                items = parts.map((arg0) => callback(arg0, closure_0));
              }
              if (undefined !== arg2[replaced]) {
                const items1 = [];
                arg2[replaced] = items1.concat(arg2[replaced], items);
              } else {
                arg2[replaced] = items;
              }
            } else {
              let tmp3 = str2;
              if (str2) {
                tmp3 = callback(str2, str);
              }
              arg2[replaced] = tmp3;
            }
          } : (arg0, arg1, arg2) => {
            if (undefined !== arg2[arg0]) {
              const items = [];
              arg2[arg0] = items.concat(arg2[arg0], arg1);
            } else {
              arg2[arg0] = arg1;
            }
          };
        }
      }
      return (arg0, arr) => {
        let hasItem1 = "string" === typeof arr;
        let hasItem = hasItem1;
        if (hasItem1) {
          hasItem = arr.includes(arg0.arrayFormatSeparator);
        }
        if (hasItem1) {
          hasItem1 = !hasItem;
        }
        if (hasItem1) {
          hasItem1 = callback(arr, arg0).includes(arg0.arrayFormatSeparator);
          const obj = callback(arr, arg0);
        }
        let str = arr;
        if (hasItem1) {
          str = callback(arr, arg0);
        }
        if (!hasItem) {
          if (!hasItem1) {
            let mapped = str;
            if (null !== str) {
              mapped = callback(str, arg0);
            }
          }
          arg2[arg0] = mapped;
        }
        const parts = str.split(arg0.arrayFormatSeparator);
        mapped = parts.map((arg0) => callback(arg0, closure_0));
      };
    }
  }(merged);
  const obj = Object.create(null);
  const require = obj;
  if ("string" !== typeof str) {
    return obj;
  } else {
    const str7 = str.trim().replace(/^[?#&]/, "");
    if (str7) {
      const parts = str7.split("&");
      const iter = parts[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let str8 = nextResult;
        if ("" !== nextResult) {
          let tmp54 = require;
          let tmp55 = dependencyMap;
          let tmp57 = merged;
          let tmp58 = nextResult;
          let tmp56 = require(dependencyMap[5]);
          if (tmp2.decode) {
            let replaced = str8.replace(/\+/g, " ");
          } else {
            replaced = str8;
          }
          let tmp13 = callback2;
          let tmp14 = callback2(tmp56(replaced, "="), 2);
          [tmp15, tmp16] = tmp14;
          let tmp18 = null;
          if (undefined === tmp16) {
            let tmp25 = null;
            let tmp26 = tmp4;
            let tmp27 = decode;
            let tmp28 = tmp15;
            let tmp29 = merged;
            let tmp30 = obj;
            let tmp4Result = tmp4(decode(tmp15, tmp2), null, tmp6);
          } else {
            let items = [];
            let tmp19 = merged;
            if (items.includes(tmp2.arrayFormat)) {
              let tmp23 = tmp16;
            } else {
              let tmp20 = decode;
              let tmp21 = tmp16;
              let tmp22 = merged;
              tmp23 = decode(tmp17, tmp2);
            }
            let tmp24 = tmp23;
          }
        }
        // continue
      }
      const _Object = Object;
      const keys = Object.keys(tmp6);
      const iter2 = keys[Symbol.iterator]();
      const nextResult1 = iter2.next();
      while (iter2 !== undefined) {
        let tmp60 = obj;
        let tmp61 = tmp6[nextResult1];
        let tmp62 = tmp61;
        let tmp59 = nextResult1;
        if ("object" === typeof tmp61) {
          let tmp37 = tmp61;
          if (null !== tmp62) {
            let _Object2 = Object;
            let tmp43 = tmp61;
            let keys1 = Object.keys(tmp62);
            let tmp45 = keys1;
            for (const item10096 of keys1) {
              let tmp46 = tmp61;
              let tmp47 = closure_13;
              let tmp48 = merged;
              tmp62[item10096] = closure_13(tmp62[item10096], tmp2);
            }
            // continue
          }
        }
        let tmp38 = obj;
        let tmp39 = nextResult1;
        let tmp40 = parseValue;
        let tmp41 = tmp61;
        let tmp42 = merged;
        tmp6[tmp59] = parseValue(tmp62, tmp2);
      }
      if (false === tmp2.sort) {
        let reduced = obj;
      } else {
        if (true === tmp2.sort) {
          const _Object4 = Object;
          const keys2 = Object.keys(tmp6);
          let sorted = keys2.sort();
        } else {
          const _Object3 = Object;
          const keys3 = Object.keys(tmp6);
          sorted = keys3.sort(merged.sort);
        }
        const _Object5 = Object;
        reduced = sorted.reduce((arg0, arg1) => {
          if (Boolean(obj[arg1])) {
            if ("object" === typeof tmp) {
              const _Array = Array;
              if (!Array.isArray(tmp)) {
                arg0[arg1] = callback(tmp);
              }
              return arg0;
            }
          }
          arg0[arg1] = obj[arg1];
        }, Object.create(null));
      }
      return reduced;
    } else {
      return tmp6;
    }
    const str5 = str.trim();
  }
}
let closure_3 = require(dependencyMap[0]);
let closure_4 = require(dependencyMap[1]);
let closure_5 = require(dependencyMap[2]);
let closure_6 = Symbol("encodeFragmentIdentifier");

export { extract };
export { parse };
export const stringify = (arg0, arg1) => {
  const require = arg0;
  let exports = arg1;
  if (arg0) {
    const _Object = Object;
    const merged = Object.assign({ 5426273: true, 1678426334: true, -1564117289: true, 1172060754: true }, arg1);
    exports = merged;
    validateArrayFormatSeparator(merged.arrayFormatSeparator);
    function shouldFilter(item10026) {
      let skipNull = merged.skipNull;
      if (skipNull) {
        skipNull = null == item10026[item10026];
      }
      if (!skipNull) {
        let skipEmptyString = merged.skipEmptyString;
        if (skipEmptyString) {
          skipEmptyString = "" === item10026[item10026];
        }
        skipNull = skipEmptyString;
      }
      return skipNull;
    }
    let closure_2 = function encoderForArrayFormat(merged) {
      const arrayFormat = merged.arrayFormat;
      if ("index" === arrayFormat) {
        return (arg0) => (self) => {
          let length = self.length;
          let tmp = self;
          if (undefined !== arg1) {
            if (!self.skipNull) {
              if (self.skipEmptyString) {
                tmp = self;
              }
              const items = [];
              if (null === arg1) {
                const items1 = [callback2(self, self), "[", length, "]"];
                length = [items1.join("")];
                let items3 = length;
              } else {
                const items2 = [callback2(self, self), "[", callback2(length, self), "]=", callback2(arg1, self)];
                items3 = [items2.join("")];
              }
              const combined = items.concat(callback(self), items3);
              const tmp5 = callback(self);
            } else {
              tmp = self;
            }
          }
          return tmp;
        };
      } else if ("bracket" === arrayFormat) {
        return (arg0) => (self) => {
          let tmp = self;
          if (undefined !== arg1) {
            if (!self.skipNull) {
              if (self.skipEmptyString) {
                tmp = self;
              }
              const items = [];
              if (null === arg1) {
                const items1 = [callback2(self, self), "[]"];
                const items2 = [items1.join("")];
                let items4 = items2;
              } else {
                const items3 = [callback2(self, self), "[]=", callback2(arg1, self)];
                items4 = [items3.join("")];
              }
              const combined = items.concat(callback(self), items4);
              const tmp5 = callback(self);
            } else {
              tmp = self;
            }
          }
          return tmp;
        };
      } else if ("colon-list-separator" === arrayFormat) {
        return (arg0) => (self) => {
          let tmp = self;
          if (undefined !== arg1) {
            if (!self.skipNull) {
              if (self.skipEmptyString) {
                tmp = self;
              }
              const items = [];
              if (null === arg1) {
                const items1 = [callback2(self, self), ":list="];
                const items2 = [items1.join("")];
                let items4 = items2;
              } else {
                const items3 = [callback2(self, self), ":list=", callback2(arg1, self)];
                items4 = [items3.join("")];
              }
              const combined = items.concat(callback(self), items4);
              const tmp5 = callback(self);
            } else {
              tmp = self;
            }
          }
          return tmp;
        };
      } else {
        if ("comma" !== arrayFormat) {
          if ("separator" !== arrayFormat) {
            if ("bracket-separator" !== arrayFormat) {
              return (arg0) => (self) => {
                let tmp = self;
                if (undefined !== arg1) {
                  if (!self.skipNull) {
                    if (self.skipEmptyString) {
                      tmp = self;
                    }
                    const items = [];
                    if (null === arg1) {
                      const items1 = [callback2(self, self)];
                      let items3 = items1;
                    } else {
                      const items2 = [callback2(self, self), "=", callback2(arg1, self)];
                      items3 = [items2.join("")];
                    }
                    const combined = items.concat(callback(self), items3);
                    const tmp5 = callback(self);
                  } else {
                    tmp = self;
                  }
                }
                return tmp;
              };
            }
          }
        }
        let str6 = "=";
        if ("bracket-separator" === merged.arrayFormat) {
          str6 = "[]=";
        }
        merged = str6;
        return (arg0) => (self) => {
          let tmp = self;
          if (undefined !== arg1) {
            if (!self.skipNull) {
              if (self.skipEmptyString) {
                tmp = self;
              }
              let str3 = "";
              if (null !== arg1) {
                str3 = arg1;
              }
              if (0 === self.length) {
                const items = [callback(self, self), closure_1, callback(str3, self)];
                const items1 = [items.join("")];
                let items3 = items1;
              } else {
                const items2 = [self, callback(str3, self)];
                items3 = [items2.join(self.arrayFormatSeparator)];
              }
            } else {
              tmp = self;
            }
          }
          return tmp;
        };
      }
    }(merged);
    const obj = {};
    const _Object2 = Object;
    const keys = Object.keys(tmp);
    for (const item10026 of keys) {
      let tmp9 = item10026;
      let tmp10 = shouldFilter;
      if (!shouldFilter(item10026)) {
        let tmp11 = obj;
        let tmp12 = item10026;
        let tmp13 = arg0;
        obj[tmp9] = tmp[tmp9];
      }
    }
    const _Object3 = Object;
    const keys1 = Object.keys(obj);
    if (false !== merged.sort) {
      const sorted = keys1.sort(merged.sort);
    }
    const mapped = keys1.map((arg0) => {
      if (undefined === arg0[arg0]) {
        return "";
      } else if (null === arr) {
        let text1 = callback2(arg0, merged);
      } else {
        const _Array = Array;
        if (Array.isArray(arr)) {
          if (0 !== arr.length) {
            const reduced = arr.reduce(callback(arg0), []);
            let joined = reduced.join("&");
          }
          joined = `${closure_8(arg0, closure_1)}[]`;
        } else {
          const text = `${closure_8(arg0, closure_1)}=`;
          text1 = `${closure_8(arg0, closure_1)}=${closure_8(arr, closure_1)}`;
        }
      }
    });
    const found = mapped.filter((arg0) => arg0.length > 0);
    return found.join("&");
  } else {
    return "";
  }
};
export const parseUrl = (arg0, arg1) => {
  const merged = Object.assign({ decode: true }, arg1);
  const tmp2 = callback2(require(dependencyMap[5])(arg0, "#"), 2);
  let obj = { url: tmp2[0].split("?")[0] || "", query: parse(extract(arg0), merged) };
  if (merged) {
    if (merged.parseFragmentIdentifier) {
      if (tmp3) {
        obj = { fragmentIdentifier: decode(tmp3, merged) };
      }
      return Object.assign(obj, {});
    }
  }
};
export const stringifyUrl = (url) => {
  let concat = url;
  const merged = Object.assign(callback({ size: null, text: null }, closure_6, true), arg1);
  const str = removeHash(url.url);
  const json = exports.stringify(Object.assign(exports.parse(exports.extract(concat.url), { sort: false }), concat.query), merged);
  let combined = json;
  if (json) {
    const _HermesInternal = HermesInternal;
    combined = "?" + json;
  }
  url = concat.url;
  const index = url.indexOf("#");
  let str2 = "";
  if (-1 !== index) {
    str2 = url.slice(index);
  }
  if (!concat.fragmentIdentifier) {
    const _HermesInternal3 = HermesInternal;
    return "" + tmp2 + combined + str2;
  } else {
    if (merged[closure_6]) {
      let fragmentIdentifier = encode(concat.fragmentIdentifier, merged);
    } else {
      fragmentIdentifier = concat.fragmentIdentifier;
    }
    const _HermesInternal2 = HermesInternal;
    concat = HermesInternal.concat;
    const combined1 = concat(fragmentIdentifier);
  }
};
export const pick = (arg0, arg1, arg2) => {
  let fragmentIdentifier;
  let query;
  const merged = Object.assign(callback({ parseFragmentIdentifier: true }, closure_6, false), arg2);
  const parseUrlResult = exports.parseUrl(arg0, merged);
  ({ query, fragmentIdentifier } = parseUrlResult);
  return exports.stringifyUrl({ url: parseUrlResult.url, query: require(dependencyMap[6])(query, arg1), fragmentIdentifier }, merged);
};
export const exclude = (value, arg1, videoUploadQuality) => {
  const require = arg1;
  return exports.pick(value, Array.isArray(arg1) ? (arg0) => !arg1.includes(arg0) : (arg0, arg1) => !arg1(arg0, arg1), videoUploadQuality);
};
