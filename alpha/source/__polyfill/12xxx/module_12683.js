// Module ID: 12683
// Function ID: 12684
// Dependencies: [12657, 12684, 12685]

// Module 12683
import tokenize from "tokenize" /* 12657 */;
import anPlusB from "anPlusB" /* 12684 */;
import urange from "urange" /* 12685 */;

const dimension = (arg0, fn, arg2) => {
  let iter = arg0;
  let num = 0;
  if (null !== arg0) {
    if (iter.type === tokenize.TYPE.Function) {
      let tmp10;
      const value = iter.value;
      let num3 = 0;
      let flag = false;
      if (0 < length.length) {
        const tmp = length[num3];
        flag = true;
        const obj = tokenize;
        while (!obj.cmpStr(value, 0, value.length, tmp)) {
          let sum = num3 + 1;
          num3 = sum;
          flag = false;
          if (sum >= arr2.length) {
            break;
          }
        }
      }
      if (flag) {
        let num5 = 0;
        const sum1 = num5 + 1;
        tmp10 = sum1;
        while (iter.balance > iter.index) {
          iter = fn(sum1);
          num5 = sum1;
          tmp10 = sum1;
          if (!iter) {
            break;
          }
        }
      }
      num = tmp10;
    }
    tmp10 = integer(iter, fn, arg2);
  }
  return num;
};
const f117293 = (type) => {
  let num;
  if (null === type) {
    num = 0;
  } else {
    num = 1;
  }
  return num;
};
const f1172942 = (type, arg1, type2) => {
  if (null !== type) {
    if (type.type === tokenize.TYPE.Dimension) {
      const tmp7Result = tokenize;
      const consumeNumberResult = tmp7Result.consumeNumber(type.value, 0);
      const obj3 = f117294;
      if (null !== f117294) {
        const value = type.value;
        const index = value.indexOf("\\", consumeNumberResult);
        if (-1 !== index) {
          let str2;
          const value3 = type.value;
          let tmp = index === value3.length - 2;
          if (tmp) {
            let isDigitResult = 92 === value3.charCodeAt(index);
            if (isDigitResult) {
              const tmp7Result2 = tokenize;
              isDigitResult = tmp7Result2.isDigit(value3.charCodeAt(index + 1));
            }
            tmp = isDigitResult;
          }
          if (tmp) {
            const str3 = type.value;
            str2 = str3.substring(consumeNumberResult, index);
          }
          if (false === obj3.hasOwnProperty(str2.toLowerCase())) {
            return 0;
          }
        }
        const str = type.value;
        str2 = str.substr(consumeNumberResult);
      }
      const value4 = type.value;
      let flag2 = false;
      if (type2) {
        flag2 = false;
        if ("Range" === type2.type) {
          let substr = value4;
          const _Number = Number;
          if (undefined !== consumeNumberResult) {
            substr = value4;
            if (consumeNumberResult !== value4.length) {
              substr = value4.substr(0, consumeNumberResult);
            }
          }
          const _NumberResult = _Number(substr);
          const _isNaN = isNaN;
          flag2 = true;
          if (!isNaN(_NumberResult)) {
            if (null === type2.min) {
              flag2 = false;
              if (null !== type2.max) {
                flag2 = false;
                if (_NumberResult > type2.max) {
                  flag2 = true;
                }
              }
            } else {
              flag2 = true;
            }
          }
        }
      }
      let num4 = 1;
      if (flag2) {
        num4 = 0;
      }
      return num4;
    }
  }
  return 0;
};
const zero2 = (type, arg1, arg2) => {
  if (null !== type) {
    let num;
    if (type.type === tokenize.TYPE.Number) {
      const _Number = Number;
      num = 1;
    }
    return num;
  }
  num = n(type, arg1, arg2);
};
const length = ["unset", "initial", "inherit"];
let closure_3 = ["calc(", "-moz-calc(", "-webkit-calc("];
let obj = {
  "ident-token": f117293,
  "function-token": f117293,
  "at-keyword-token": f117293,
  "hash-token": f117293,
  "string-token": f117293,
  "bad-string-token": f117293,
  "url-token": f117293,
  "bad-url-token": f117293,
  "delim-token": f117293,
  "number-token": f117293,
  "percentage-token": f117293,
  "dimension-token": f117293,
  "whitespace-token": f117293,
  "CDO-token": f117293,
  "CDC-token": f117293,
  "colon-token": f117293,
  "semicolon-token": f117293,
  "comma-token": f117293,
  "[-token": f117293,
  "]-token": f117293,
  "(-token": f117293,
  ")-token": f117293,
  "{-token": f117293,
  "}-token": f117293,
  string: f117293,
  ident: f117293,
  "custom-ident": function customIdent(type) {
    if (null !== type) {
      const tmp13 = require;
      if (type.type === tokenize.TYPE.Ident) {
        let flag;
        let tmp8;
        const str2 = type.value;
        const formatted = str2.toLowerCase();
        let num4 = 1;
        let num2 = 0;
        let tmp10 = tmp13;
        if (0 >= length.length) {
          flag = false;
          tmp8 = tmp10;
        } else {
          const tmp = length[num2];
          tmp8 = require;
          flag = true;
          const obj = tokenize;
          const tmp2 = require;
          while (!obj.cmpStr(formatted, 0, formatted.length, tmp)) {
            num2 = num2 + num4;
            tmp10 = tmp2;
            break;
          }
        }
        if (flag) {
          num4 = 0;
        } else {
          tmp8(12657);
        }
        return num4;
      }
    }
    return 0;
  },
  "custom-property-name": function customPropertyName(type) {
    if (null !== type) {
      if (type.type === tokenize.TYPE.Ident) {
        let num4;
        const value = type.value;
        let num2 = 0;
        if (0 < value.length) {
          num2 = value.charCodeAt(0);
        }
        if (45 === num2) {
          const value2 = type.value;
          num4 = 1;
          if (1 < value2.length) {
            value2.charCodeAt(num4);
          }
        }
        return num4;
      }
    }
    num4 = 0;
  },
  "hex-color": function hexColor(type) {
    if (null !== type) {
      if (type.type === tokenize.TYPE.Hash) {
        if (4 !== type.value.length) {
          if (5 !== type.value.length) {
            if (7 !== type.value.length) {
              if (9 !== type.value.length) {
                return 0;
              }
            }
          }
        }
        let num6 = 1;
        if (1 < type.value.length) {
          tokenize;
          const value = type.value;
          while (tmp4(value.charCodeAt(num6))) {
            num6 = num6 + 1;
          }
          return 0;
        }
        return 1;
      }
    }
    return 0;
  },
  "id-selector": function idSelector(type) {
    let num = 0;
    if (null !== type) {
      num = 0;
      if (type.type === tokenize.TYPE.Hash) {
        const value = type.value;
        let num2 = 0;
        const isIdentifierStart = tmp(12657).isIdentifierStart;
        tokenize;
        if (1 < value.length) {
          num2 = value.charCodeAt(1);
        }
        const value3 = type.value;
        let num4 = 0;
        if (2 < value3.length) {
          num4 = value3.charCodeAt(2);
        }
        const value4 = type.value;
        let num6 = 0;
        if (3 < value4.length) {
          num6 = value4.charCodeAt(3);
        }
        let num7 = 0;
        if (isIdentifierStart(num2, num4, num6)) {
          num7 = 1;
        }
        num = num7;
      }
    }
    return num;
  },
  "an-plus-b": anPlusB,
  urange,
  "declaration-value": function declarationValue(arg0, fn) {
    let iter = arg0;
    if (iter) {
      const index = iter.index;
      let num2 = 0;
      let num3 = 0;
      const type = iter.type;
      let tmp6 = num3;
      while (tokenize.TYPE.BadString !== type) {
        tmp6 = num3;
        if (tmp(12657).TYPE.BadUrl === type) {
          break;
        } else {
          let sum;
          if (tmp(12657).TYPE.RightCurlyBracket !== type) {
            if (tmp(12657).TYPE.RightParenthesis !== type) {
              if (tmp(12657).TYPE.RightSquareBracket !== type) {
                if (tmp(12657).TYPE.Semicolon === type) {
                  sum = num2;
                  tmp6 = num3;
                  if (0 === num2) {
                    break;
                  }
                } else if (tmp(12657).TYPE.Delim === type) {
                  sum = num2;
                  if ("!" === iter.value) {
                    sum = num2;
                    tmp6 = num3;
                    if (0 === num2) {
                      break;
                    }
                  }
                  break;
                } else {
                  if (tmp(12657).TYPE.Function !== type) {
                    if (tmp(12657).TYPE.LeftParenthesis !== type) {
                      if (tmp(12657).TYPE.LeftSquareBracket !== type) {
                        sum = num2;
                      }
                    }
                  }
                  sum = num2 + 1;
                }
                let sum1 = num3 + 1;
                tmp6 = sum1;
                if (iter.balance <= index) {
                  break;
                } else {
                  iter = fn(sum1);
                  num2 = sum;
                  num3 = sum1;
                  tmp6 = sum1;
                  if (!iter) {
                    break;
                  }
                }
              }
              return tmp6;
            }
          }
          tmp6 = num3;
          if (iter.balance > iter.index) {
            break;
          } else {
            tmp6 = num3;
            if (iter.balance < index) {
              break;
            } else {
              sum = num2 - 1;
            }
          }
        }
      }
    } else {
      return 0;
    }
  },
  "any-value": function anyValue(arg0, fn) {
    let tmp = arg0;
    if (tmp) {
      const index = tmp.index;
      let num2 = 0;
      const type = tmp.type;
      let tmp6 = num2;
      while (tokenize.TYPE.BadString !== type) {
        tmp6 = num2;
        if (tmp2(12657).TYPE.BadUrl === type) {
          break;
        } else {
          if (tmp2(12657).TYPE.RightCurlyBracket !== type) {
            let sum = num2 + 1;
            tmp6 = sum;
            if (tmp.balance <= index) {
              break;
            } else {
              tmp = fn(sum);
              num2 = sum;
              tmp6 = sum;
              if (!tmp) {
                break;
              }
            }
          }
          tmp6 = num2;
          if (tmp.balance > tmp.index) {
            break;
          } else {
            tmp6 = num2;
            if (tmp.balance < index) {
              break;
            }
          }
        }
      }
      return tmp6;
    } else {
      return 0;
    }
  },
  dimension,
  angle: dimension,
  decibel: dimension,
  frequency: dimension,
  flex: dimension,
  length: dimension,
  resolution: dimension,
  semitones: dimension,
  time: dimension,
  percentage: dimension,
  zero: zero2,
  number: dimension,
  integer: dimension,
  "-ms-legacy-expression": (arg0, fn) => {
    let iter = arg0;
    let num = 0;
    if (null !== arg0) {
      const value = iter.value;
      num = 0;
      const obj = tokenize;
      if (obj.cmpStr(value, 0, value.length, c0)) {
        let num4 = 0;
        const sum = num4 + 1;
        num = sum;
        while (iter.balance > iter.index) {
          iter = fn(sum);
          num4 = sum;
          num = sum;
          if (!iter) {
            break;
          }
        }
      }
    }
    return num;
  }
};
const Function = tokenize.TYPE.Function;
const AtKeyword = tokenize.TYPE.AtKeyword;
const Hash = tokenize.TYPE.Hash;
const BadString = tokenize.TYPE.BadString;
const Url = tokenize.TYPE.Url;
const BadUrl = tokenize.TYPE.BadUrl;
const Delim = tokenize.TYPE.Delim;
const Number = tokenize.TYPE.Number;
const Percentage = tokenize.TYPE.Percentage;
const Dimension = tokenize.TYPE.Dimension;
const WhiteSpace = tokenize.TYPE.WhiteSpace;
const CDO = tokenize.TYPE.CDO;
const CDC = tokenize.TYPE.CDC;
const Colon = tokenize.TYPE.Colon;
const Semicolon = tokenize.TYPE.Semicolon;
const Comma = tokenize.TYPE.Comma;
const LeftSquareBracket = tokenize.TYPE.LeftSquareBracket;
const RightSquareBracket = tokenize.TYPE.RightSquareBracket;
const LeftParenthesis = tokenize.TYPE.LeftParenthesis;
const RightParenthesis = tokenize.TYPE.RightParenthesis;
const LeftCurlyBracket = tokenize.TYPE.LeftCurlyBracket;
const RightCurlyBracket = tokenize.TYPE.RightCurlyBracket;
const String = tokenize.TYPE.String;
const Ident = tokenize.TYPE.Ident;
let c0 = null;
let closure_0 = { deg: true, grad: true, rad: true, turn: true };
closure_0 = { db: true };
closure_0 = { hz: true, khz: true };
closure_0 = { fr: true };
closure_0 = { px: true, mm: true, cm: true, in: true, pt: true, pc: true, q: true, em: true, ex: true, ch: true, rem: true, vh: true, vw: true, vmin: true, vmax: true, vm: true };
const zero = zero2;
closure_0 = { dpi: true, dpcm: true, dppx: true, x: true };
closure_0 = { st: true };
closure_0 = { s: true, ms: true };
const f117294 = f1172942;
function percentage(type, arg1, arg2) {
  if (null !== type) {
    let num2;
    if (type.type === percentage(dependencyMap[0]).TYPE.Percentage) {
      const value = type.value;
      num2 = 1;
      const diff = type.value.length - 1;
      if (arg2) {
        if ("Range" === arg2.type) {
          let substr = value;
          const _Number = Number;
          if (diff !== value.length) {
            substr = value.substr(0, diff);
          }
          const _NumberResult = _Number(substr);
          const _isNaN = isNaN;
        }
      }
    }
    return num2;
  }
  num2 = 0;
}
let n;
if (typeof undefined !== "function") {
  n = function n() {
    return 0;
  };
}
function number(value, arg1, type) {
  if (null === value) {
    return 0;
  } else {
    let num4;
    const obj2 = number(dependencyMap[0]);
    const consumeNumberResult = obj2.consumeNumber(value.value, 0);
    const tmp7 = number;
    const tmp8 = dependencyMap;
    if (consumeNumberResult === value.value.length) {
      value = value.value;
      let flag = false;
      if (type) {
        flag = false;
        if ("Range" === type.type) {
          let substr = value;
          const _Number = Number;
          if (undefined !== consumeNumberResult) {
            substr = value;
            if (consumeNumberResult !== value.length) {
              substr = value.substr(0, consumeNumberResult);
            }
          }
          const _NumberResult = _Number(substr);
          const _isNaN = isNaN;
          flag = true;
          if (!isNaN(_NumberResult)) {
            if (null === type.min) {
              flag = false;
              if (null !== type.max) {
                flag = false;
                if (_NumberResult > type.max) {
                  flag = true;
                }
              }
            } else {
              flag = true;
            }
          }
        }
      }
      let num5 = 1;
      if (flag) {
        num5 = 0;
      }
      num4 = num5;
    } else {
      const value2 = value.value;
      let tmp = consumeNumberResult === value2.length - 2;
      if (tmp) {
        let isDigitResult = 92 === value2.charCodeAt(consumeNumberResult);
        if (isDigitResult) {
          const tmp7Result = tmp7(tmp8[0]);
          isDigitResult = tmp7Result.isDigit(value2.charCodeAt(consumeNumberResult + 1));
        }
        tmp = isDigitResult;
      }
      num4 = 0;
    }
    return num4;
  }
}
function integer(type, arg1, type2) {
  if (null !== type) {
    if (type.type === integer(dependencyMap[0]).TYPE.Number) {
      let num2;
      const value2 = type.value;
      if (43 === value2.charCodeAt(0)) {
        num2 = 1;
      } else {
        const value = type.value;
        num2 = 0;
      }
      let num3 = 1;
      let sum = num2;
      let tmp2 = num2;
      if (num2 < type.value.length) {
        integer(dependencyMap[0]);
        const value3 = type.value;
        while (tmp6(value3.charCodeAt(sum))) {
          sum = sum + num3;
          tmp2 = sum;
        }
        return 0;
      }
      const value6 = type.value;
      let flag = false;
      if (type2) {
        flag = false;
        if ("Range" === type2.type) {
          let substr = value6;
          const _Number = Number;
          if (tmp2 !== value6.length) {
            substr = value6.substr(0, tmp2);
          }
          const _NumberResult = _Number(substr);
          const _isNaN = isNaN;
          flag = true;
          if (!isNaN(_NumberResult)) {
            if (null === type2.min) {
              flag = false;
              if (null !== type2.max) {
                flag = false;
                if (_NumberResult > type2.max) {
                  flag = true;
                }
              }
            } else {
              flag = true;
            }
          }
        }
      }
      if (flag) {
        num3 = 0;
      }
      return num3;
    }
  }
  return 0;
}
c0 = "expression(";

export default obj;
