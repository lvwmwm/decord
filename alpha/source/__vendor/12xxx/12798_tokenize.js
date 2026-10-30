// Module ID: 12798
// Function ID: 12799
// Name: tokenize
// Dependencies: [12794, 12795, 12792, 12793, 12797]

// Module 12798 (tokenize)
const require = globalThis.__r;
let _require;

function tokenize(arg0, arg1) {
  let closure_0;
  let length;
  let str = arg0;
  _require = arg0;
  let iter = arg1;
  function consumeNumericToken() {
    const obj = _mod12794;
    closure_2 = obj.consumeNumber(closure_0, closure_2);
    let num = 0;
    const isIdentifierStart = _mod12795.isIdentifierStart;
    _mod12795;
    if (closure_2 < length) {
      num = obj2.charCodeAt(tmp4);
    }
    const sum = closure_2 + 1;
    let num2 = 0;
    if (sum < length) {
      num2 = obj2.charCodeAt(sum);
    }
    const sum1 = closure_2 + 2;
    let num3 = 0;
    if (sum1 < length) {
      num3 = obj2.charCodeAt(sum1);
    }
    if (isIdentifierStart(num, num2, num3)) {
      BadString = tmp(12792).TYPE.Dimension;
      const tmpResult = _mod12794;
      closure_2 = tmpResult.consumeName(obj2, closure_2);
    } else {
      let num4 = 0;
      if (closure_2 < length) {
        num4 = obj2.charCodeAt(tmp8);
      }
      if (37 === num4) {
        BadString = tmp(12792).TYPE.Percentage;
        closure_2 = +closure_2 + 1;
      } else {
        BadString = tmp(12792).TYPE.Number;
      }
    }
    return tmp9;
  }
  function consumeIdentLikeToken() {
    const obj = _mod12794;
    const tmp = closure_2;
    closure_2 = obj.consumeName(closure_0, closure_2);
    const obj2 = _mod12794;
    if (obj2.cmpStr(closure_0, closure_2, closure_2, "url")) {
      let tmp7;
      let num = 0;
      if (closure_2 < length) {
        num = arr.charCodeAt(tmp4);
      }
      if (40 === num) {
        const tmp2Result = _mod12794;
        const findWhiteSpaceEndResult = tmp2Result.findWhiteSpaceEnd(closure_0, closure_2 + 1);
        closure_2 = findWhiteSpaceEndResult;
        let num5 = 0;
        if (findWhiteSpaceEndResult < length) {
          num5 = arr.charCodeAt(findWhiteSpaceEndResult);
        }
        if (34 !== num5) {
          let num7 = 0;
          if (closure_2 < length) {
            num7 = arr.charCodeAt(tmp35);
          }
          if (39 !== num7) {
            BadString = tmp2(12792).TYPE.Url;
            const tmp2Result2 = _mod12794;
            const findWhiteSpaceEndResult1 = tmp2Result2.findWhiteSpaceEnd(closure_0, closure_2);
            closure_2 = findWhiteSpaceEndResult1;
            if (findWhiteSpaceEndResult1 < closure_0.length) {
              const charCodeAtResult = closure_0.charCodeAt(closure_2);
              const obj4 = _mod12795;
              const charCodeCategoryResult = obj4.charCodeCategory(charCodeAtResult);
              while (41 !== charCodeCategoryResult) {
                if (tmp13(12795).charCodeCategory.Eof !== charCodeCategoryResult) {
                  if (tmp13(12795).charCodeCategory.WhiteSpace === charCodeCategoryResult) {
                    let tmp13Result = tmp13(12794);
                    let findWhiteSpaceEndResult2 = tmp13Result.findWhiteSpaceEnd(arr2, closure_2);
                    closure_2 = findWhiteSpaceEndResult2;
                    let num10 = 0;
                    if (findWhiteSpaceEndResult2 < length) {
                      num10 = arr2.charCodeAt(findWhiteSpaceEndResult2);
                    }
                    if (41 !== num10) {
                      if (closure_2 < arr2.length) {
                        let tmp13Result5 = tmp13(12794);
                        closure_2 = tmp13Result5.consumeBadUrlRemnants(arr2, closure_2);
                        BadString = tmp13(12792).TYPE.BadUrl;
                      }
                    }
                    if (closure_2 < arr2.length) {
                      let tmp30 = +closure_2;
                      closure_2 = tmp30 + 1;
                    }
                  } else {
                    if (34 !== charCodeCategoryResult) {
                      if (39 !== charCodeCategoryResult) {
                        if (40 !== charCodeCategoryResult) {
                          if (tmp13(12795).charCodeCategory.NonPrintable !== charCodeCategoryResult) {
                            if (92 === charCodeCategoryResult) {
                              let tmp13Result6 = tmp13(12795);
                              let sum = closure_2 + 1;
                              let num9 = 0;
                              let isValidEscape = tmp13Result6.isValidEscape;
                              if (sum < length) {
                                num9 = arr2.charCodeAt(sum);
                              }
                              let isValidEscapeResult = isValidEscape(charCodeAtResult, num9);
                              let tmp13Result7 = tmp13(12794);
                              if (isValidEscapeResult) {
                                closure_2 = tmp13Result7.consumeEscaped(arr2, closure_2) - 1;
                              } else {
                                closure_2 = tmp13Result7.consumeBadUrlRemnants(arr2, closure_2);
                                BadString = tmp13(12792).TYPE.BadUrl;
                              }
                            }
                            let sum1 = closure_2 + 1;
                            closure_2 = sum1;
                          }
                        }
                      }
                    }
                    let tmp13Result8 = tmp13(12794);
                    closure_2 = tmp13Result8.consumeBadUrlRemnants(arr2, closure_2);
                    BadString = tmp13(12792).TYPE.BadUrl;
                  }
                }
              }
              closure_2 = +closure_2 + 1;
            }
          }
          tmp7 = tmp34;
        }
        BadString = tmp2(12792).TYPE.Function;
        closure_2 = tmp + 4;
      }
      return tmp7;
    }
    let num3 = 0;
    if (closure_2 < length) {
      num3 = arr.charCodeAt(tmp6);
    }
    if (40 === num3) {
      BadString = tmp2(12792).TYPE.Function;
      closure_2 = +closure_2 + 1;
    } else {
      BadString = tmp2(12792).TYPE.Ident;
    }
  }
  function consumeStringToken(arg0) {
    let tmp = arg0;
    if (!tmp) {
      closure_2 = tmp3 + 1;
      let num = 0;
      if (+closure_2 < length) {
        num = closure_0.charCodeAt(tmp3);
      }
      tmp = num;
    }
    BadString = _mod12792.TYPE.String;
    if (closure_2 < closure_0.length) {
      const charCodeAtResult = closure_0.charCodeAt(closure_2);
      const obj = _mod12795;
      const charCodeCategoryResult = obj.charCodeCategory(charCodeAtResult);
      while (tmp !== charCodeCategoryResult) {
        if (tmp8(12795).charCodeCategory.Eof !== charCodeCategoryResult) {
          if (tmp8(12795).charCodeCategory.WhiteSpace === charCodeCategoryResult) {
            let tmp8Result = tmp8(12795);
            if (tmp8Result.isNewline(charCodeAtResult)) {
              let tmp8Result6 = tmp8(12794);
              closure_2 = closure_2 + tmp8Result6.getNewlineLength(arr, closure_2, charCodeAtResult);
              BadString = tmp8(12792).TYPE.BadString;
            }
          } else if (92 === charCodeCategoryResult) {
            if (closure_2 !== arr.length - 1) {
              let sum = closure_2 + 1;
              let num2 = 0;
              if (sum < length) {
                num2 = arr.charCodeAt(sum);
              }
              let tmp8Result7 = tmp8(12795);
              if (tmp8Result7.isNewline(num2)) {
                let tmp8Result8 = tmp8(12794);
                closure_2 = closure_2 + tmp8Result8.getNewlineLength(arr, closure_2 + 1, num2);
              } else {
                let tmp8Result9 = tmp8(12795);
                if (tmp8Result9.isValidEscape(charCodeAtResult, num2)) {
                  let tmp8Result10 = tmp8(12794);
                  closure_2 = tmp8Result10.consumeEscaped(arr, closure_2) - 1;
                }
              }
            }
          }
          let sum1 = closure_2 + 1;
          closure_2 = sum1;
        }
      }
      closure_2 = +closure_2 + 1;
    }
  }
  if (!arg1) {
    let tmp = _require;
    const tmp2 = length;
    const self = this;
    const self2 = this;
    iter = new require("TokenStream")();
  }
  const _String = String;
  if (!str) {
    str = "";
  }
  const _StringResult = _String(str);
  _require = _StringResult;
  length = _StringResult.length;
  const tmp3 = require("adoptBuffer")(iter.offsetAndType, length + 1);
  const tmp4 = require("adoptBuffer")(iter.balance, length + 1);
  let num = 0;
  const isBOM = require("module_12795").isBOM;
  const tmp5 = require("module_12795");
  if (0 < length) {
    num = _StringResult.charCodeAt(0);
  }
  const isBOMResult = isBOM(num);
  let closure_2 = isBOMResult;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  if (isBOMResult < length) {
    do {
      let tmp100;
      let tmp7 = closure_2;
      let charCodeAtResult = _StringResult.charCodeAt(closure_2);
      let BadString = 0;
      tmp4[num4] = length;
      let tmp9 = _require;
      let tmp10 = length;
      let obj = require("module_12795");
      let charCodeCategoryResult = obj.charCodeCategory(charCodeAtResult);
      let tmp12 = num2;
      let tmp13 = num3;
      let tmp14 = num4;
      if (require("module_12795").charCodeCategory.WhiteSpace === charCodeCategoryResult) {
        BadString = tmp9(tmp10[2]).TYPE.WhiteSpace;
        let tmp9Result = tmp9(tmp10[0]);
        closure_2 = tmp9Result.findWhiteSpaceEnd(_StringResult, closure_2 + 1);
      } else if (34 === charCodeCategoryResult) {
        let consumeStringTokenResult = consumeStringToken();
      } else if (35 === charCodeCategoryResult) {
        let tmp9Result11 = tmp9(tmp10[1]);
        let sum = closure_2 + 1;
        let num25 = 0;
        let isName = tmp9Result11.isName;
        if (sum < length) {
          num25 = _StringResult.charCodeAt(sum);
        }
        if (!isName(num25)) {
          let tmp9Result12 = tmp9(tmp10[1]);
          let sum1 = closure_2 + 1;
          let num26 = 0;
          let isValidEscape2 = tmp9Result12.isValidEscape;
          if (sum1 < length) {
            num26 = _StringResult.charCodeAt(sum1);
          }
          let sum2 = closure_2 + 2;
          let num27 = 0;
          if (sum2 < length) {
            num27 = _StringResult.charCodeAt(sum2);
          }
          if (!isValidEscape2(num26, num27)) {
            BadString = tmp9(tmp10[2]).TYPE.Delim;
            closure_2 = closure_2 + 1;
          }
        }
        BadString = tmp9(tmp10[2]).TYPE.Hash;
        let tmp9Result13 = tmp9(tmp10[0]);
        closure_2 = tmp9Result13.consumeName(_StringResult, closure_2 + 1);
      } else if (39 === charCodeCategoryResult) {
        let consumeStringTokenResult1 = consumeStringToken();
      } else if (40 === charCodeCategoryResult) {
        BadString = tmp9(tmp10[2]).TYPE.LeftParenthesis;
        closure_2 = closure_2 + 1;
      } else if (41 === charCodeCategoryResult) {
        BadString = tmp9(tmp10[2]).TYPE.RightParenthesis;
        closure_2 = closure_2 + 1;
      } else if (43 === charCodeCategoryResult) {
        let tmp9Result14 = tmp9(tmp10[1]);
        let sum3 = closure_2 + 1;
        let num23 = 0;
        let isNumberStart3 = tmp9Result14.isNumberStart;
        if (sum3 < length) {
          num23 = _StringResult.charCodeAt(sum3);
        }
        let sum4 = closure_2 + 2;
        let num24 = 0;
        if (sum4 < length) {
          num24 = _StringResult.charCodeAt(sum4);
        }
        if (isNumberStart3(charCodeAtResult, num23, num24)) {
          let consumeNumericTokenResult = consumeNumericToken();
        } else {
          BadString = tmp9(tmp10[2]).TYPE.Delim;
          closure_2 = closure_2 + 1;
        }
      } else if (44 === charCodeCategoryResult) {
        BadString = tmp9(tmp10[2]).TYPE.Comma;
        closure_2 = closure_2 + 1;
      } else if (45 === charCodeCategoryResult) {
        let tmp9Result15 = tmp9(tmp10[1]);
        let sum5 = closure_2 + 1;
        let num17 = 0;
        let isNumberStart2 = tmp9Result15.isNumberStart;
        if (sum5 < length) {
          num17 = _StringResult.charCodeAt(sum5);
        }
        let sum6 = closure_2 + 2;
        let num18 = 0;
        if (sum6 < length) {
          num18 = _StringResult.charCodeAt(sum6);
        }
        if (isNumberStart2(charCodeAtResult, num17, num18)) {
          let consumeNumericTokenResult1 = consumeNumericToken();
        } else {
          let sum7 = closure_2 + 1;
          let num19 = 0;
          if (sum7 < length) {
            num19 = _StringResult.charCodeAt(sum7);
          }
          if (45 === num19) {
            let sum8 = closure_2 + 2;
            let num20 = 0;
            if (sum8 < length) {
              num20 = _StringResult.charCodeAt(sum8);
            }
            if (62 === num20) {
              BadString = tmp9(tmp10[2]).TYPE.CDC;
              closure_2 = closure_2 + 3;
            }
          }
          let tmp9Result16 = tmp9(tmp10[1]);
          let sum9 = closure_2 + 1;
          let num21 = 0;
          let isIdentifierStart2 = tmp9Result16.isIdentifierStart;
          if (sum9 < length) {
            num21 = _StringResult.charCodeAt(sum9);
          }
          let sum10 = closure_2 + 2;
          let num22 = 0;
          if (sum10 < length) {
            num22 = _StringResult.charCodeAt(sum10);
          }
          if (isIdentifierStart2(charCodeAtResult, num21, num22)) {
            let result = consumeIdentLikeToken();
          } else {
            BadString = tmp9(tmp10[2]).TYPE.Delim;
            closure_2 = closure_2 + 1;
          }
        }
      } else if (46 === charCodeCategoryResult) {
        let tmp9Result17 = tmp9(tmp10[1]);
        let sum11 = closure_2 + 1;
        let num15 = 0;
        let isNumberStart = tmp9Result17.isNumberStart;
        if (sum11 < length) {
          num15 = _StringResult.charCodeAt(sum11);
        }
        let sum12 = closure_2 + 2;
        let num16 = 0;
        if (sum12 < length) {
          num16 = _StringResult.charCodeAt(sum12);
        }
        if (isNumberStart(charCodeAtResult, num15, num16)) {
          let consumeNumericTokenResult2 = consumeNumericToken();
        } else {
          BadString = tmp9(tmp10[2]).TYPE.Delim;
          closure_2 = closure_2 + 1;
        }
      } else if (47 === charCodeCategoryResult) {
        let sum13 = closure_2 + 1;
        let num14 = 0;
        if (sum13 < length) {
          num14 = _StringResult.charCodeAt(sum13);
        }
        if (42 === num14) {
          BadString = tmp9(tmp10[2]).TYPE.Comment;
          let sum14 = _StringResult.indexOf("*/", closure_2 + 2) + 2;
          closure_2 = sum14;
          if (1 === sum14) {
            closure_2 = _StringResult.length;
          }
        } else {
          BadString = tmp9(tmp10[2]).TYPE.Delim;
          closure_2 = closure_2 + 1;
        }
      } else if (58 === charCodeCategoryResult) {
        BadString = tmp9(tmp10[2]).TYPE.Colon;
        closure_2 = closure_2 + 1;
      } else if (59 === charCodeCategoryResult) {
        BadString = tmp9(tmp10[2]).TYPE.Semicolon;
        closure_2 = closure_2 + 1;
      } else if (60 === charCodeCategoryResult) {
        let sum15 = closure_2 + 1;
        let num11 = 0;
        if (sum15 < length) {
          num11 = _StringResult.charCodeAt(sum15);
        }
        if (33 === num11) {
          let sum16 = closure_2 + 2;
          let num12 = 0;
          if (sum16 < length) {
            num12 = _StringResult.charCodeAt(sum16);
          }
          if (45 === num12) {
            let sum17 = closure_2 + 3;
            let num13 = 0;
            if (sum17 < length) {
              num13 = _StringResult.charCodeAt(sum17);
            }
            if (45 === num13) {
              BadString = tmp9(tmp10[2]).TYPE.CDO;
              closure_2 = closure_2 + 4;
            }
          }
        }
        BadString = tmp9(tmp10[2]).TYPE.Delim;
        closure_2 = closure_2 + 1;
      } else if (64 === charCodeCategoryResult) {
        let tmp9Result18 = tmp9(tmp10[1]);
        let tmp27 = closure_2;
        let sum18 = closure_2 + 1;
        let num8 = 0;
        let isIdentifierStart = tmp9Result18.isIdentifierStart;
        if (sum18 < length) {
          num8 = _StringResult.charCodeAt(sum18);
        }
        let tmp29 = closure_2;
        let sum19 = closure_2 + 2;
        let num9 = 0;
        if (sum19 < length) {
          num9 = _StringResult.charCodeAt(sum19);
        }
        let tmp31 = closure_2;
        let sum20 = closure_2 + 3;
        let num10 = 0;
        if (sum20 < length) {
          num10 = _StringResult.charCodeAt(sum20);
        }
        let isIdentifierStartResult = isIdentifierStart(num8, num9, num10);
        let TYPE = tmp9(tmp10[2]).TYPE;
        if (isIdentifierStartResult) {
          BadString = TYPE.AtKeyword;
          let tmp9Result19 = tmp9(tmp10[0]);
          let tmp35 = closure_2;
          closure_2 = tmp9Result19.consumeName(_StringResult, closure_2 + 1);
        } else {
          BadString = TYPE.Delim;
          let tmp34 = closure_2;
          closure_2 = closure_2 + 1;
        }
      } else if (91 === charCodeCategoryResult) {
        BadString = tmp9(tmp10[2]).TYPE.LeftSquareBracket;
        let tmp25 = closure_2;
        closure_2 = closure_2 + 1;
      } else if (92 === charCodeCategoryResult) {
        let tmp9Result20 = tmp9(tmp10[1]);
        let tmp21 = closure_2;
        let sum21 = closure_2 + 1;
        let num7 = 0;
        let isValidEscape = tmp9Result20.isValidEscape;
        if (sum21 < length) {
          num7 = _StringResult.charCodeAt(sum21);
        }
        if (isValidEscape(charCodeAtResult, num7)) {
          let result1 = consumeIdentLikeToken();
        } else {
          BadString = tmp9(tmp10[2]).TYPE.Delim;
          let tmp23 = closure_2;
          closure_2 = closure_2 + 1;
        }
      } else if (93 === charCodeCategoryResult) {
        BadString = tmp9(tmp10[2]).TYPE.RightSquareBracket;
        let tmp19 = closure_2;
        closure_2 = closure_2 + 1;
      } else if (123 === charCodeCategoryResult) {
        BadString = tmp9(tmp10[2]).TYPE.LeftCurlyBracket;
        let tmp18 = closure_2;
        closure_2 = closure_2 + 1;
      } else if (125 === charCodeCategoryResult) {
        BadString = tmp9(tmp10[2]).TYPE.RightCurlyBracket;
        let tmp17 = closure_2;
        closure_2 = closure_2 + 1;
      } else if (tmp9(tmp10[1]).charCodeCategory.Digit === charCodeCategoryResult) {
        let consumeNumericTokenResult3 = consumeNumericToken();
      } else if (tmp9(tmp10[1]).charCodeCategory.NameStart === charCodeCategoryResult) {
        let result2 = consumeIdentLikeToken();
      } else if (tmp9(tmp10[1]).charCodeCategory.Eof !== charCodeCategoryResult) {
        BadString = tmp9(tmp10[2]).TYPE.Delim;
        closure_2 = closure_2 + 1;
      }
      let tmp99 = BadString;
      if (tmp13 === BadString) {
        let tmp101 = num2 & 16777215;
        let tmp102 = tmp4[tmp101];
        let tmp103 = tmp102 >> 24;
        tmp4[num4] = tmp101;
        let sum22 = tmp101 + 1;
        tmp4[tmp101] = num4;
        tmp100 = tmp102;
        tmp13 = tmp103;
        if (sum22 < num4) {
          do {
            if (tmp4[sum22] === length) {
              tmp4[sum22] = num4;
            }
            sum22 = sum22 + 1;
            tmp100 = tmp102;
            tmp13 = tmp103;
          } while (sum22 < num4);
        }
      } else {
        if (tmp9(tmp10[2]).TYPE.LeftParenthesis !== tmp99) {
          if (tmp9(tmp10[2]).TYPE.Function !== tmp99) {
            if (tmp9(tmp10[2]).TYPE.LeftSquareBracket === tmp99) {
              tmp4[num4] = num2;
              let RightSquareBracket = tmp9(tmp10[2]).TYPE.RightSquareBracket;
              tmp100 = RightSquareBracket << 24 | num4;
              tmp13 = RightSquareBracket;
            } else {
              tmp100 = num2;
              if (tmp9(tmp10[2]).TYPE.LeftCurlyBracket === tmp99) {
                tmp4[num4] = num2;
                let RightCurlyBracket = tmp9(tmp10[2]).TYPE.RightCurlyBracket;
                tmp100 = RightCurlyBracket << 24 | num4;
                tmp13 = RightCurlyBracket;
              }
            }
          }
        }
        tmp4[num4] = num2;
        let RightParenthesis = tmp9(tmp10[2]).TYPE.RightParenthesis;
        tmp100 = RightParenthesis << 24 | num4;
        tmp13 = RightParenthesis;
      }
      num4 = num4 + 1;
      tmp3[tmp14] = BadString << 24 | closure_2;
      num2 = tmp100;
      num3 = tmp13;
      num5 = tmp100;
      num6 = num4;
    } while (closure_2 < length);
  }
  tmp3[num6] = require("module_12792").TYPE.EOF << 24 | closure_2;
  tmp4[num6] = length;
  tmp4[length] = length;
  if (0 !== num5) {
    do {
      let tmp109 = num5 & 16777215;
      num5 = tmp4[tmp109];
      tmp4[tmp109] = length;
    } while (0 !== num5);
  }
  iter.source = _StringResult;
  iter.firstCharOffset = isBOMResult;
  iter.offsetAndType = tmp3;
  iter.tokenCount = num6;
  iter.balance = tmp4;
  iter.reset();
  iter.next();
  return iter;
}

export * from "module_12792";
export * from "module_12795";
export * from "module_12794";
export default tokenize;
