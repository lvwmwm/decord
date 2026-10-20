// Module ID: 1190
// Function ID: 1191
// Name: Parser
// Dependencies: [1191, 1189, 1192, 1193, 1195, 1172]

// Module 1190 (Parser)
import SPACE_SEPARATOR_REGEX from "SPACE_SEPARATOR_REGEX" /* 1191 */;

let DUPLICATE_PLURAL_ARGUMENT_SELECTOR, EMPTY_ARGUMENT, EXPECT_ARGUMENT_CLOSING_BRACE, EXPECT_ARGUMENT_CLOSING_BRACE2, EXPECT_ARGUMENT_CLOSING_BRACE3, EXPECT_ARGUMENT_STYLE, EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, EXPECT_SELECT_ARGUMENT_OPTIONS, ErrorKind, INVALID_TAG, INVALID_TAG2, INVALID_TAG3, MALFORMED_ARGUMENT, MALFORMED_ARGUMENT2, MISSING_OTHER_CLAUSE, UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, UNCLOSED_TAG, UNMATCHED_CLOSING_TAG, _Error, _Error2, addResult, arr1, arr2, arr3, arr4, bestPattern, bound, bumpResult, bumpResult1, bumpResult2, bumpResult3, bumpResult4, bumpResult5, bumpResult6, bumpSpaceResult, bumpSpaceResult1, bumpSpaceResult2, bumpSpaceResult3, bumpSpaceResult4, bumpSpaceResult5, bumpToResult, bumpToResult1, charCodeAt, charResult, charResult1, clonePositionResult, clonePositionResult1, clonePositionResult2, clonePositionResult3, clonePositionResult4, clonePositionResult5, combined, concat, concat2, element, error, error2, error3, error3Result, error4, error4Result, error5, error6, errorResult, errorResult1, flag2, index, iter, message, message1, num10, num11, num12, num13, num14, num15, num16, num17, num18, num19, num20, num21, num22, num23, num24, num25, num26, num27, num28, num29, num30, num31, num32, num33, num34, num35, num36, num37, num38, num39, num4, num40, num41, num42, num43, num44, num45, num46, num47, num48, num49, num5, num50, num51, num52, num53, num54, num55, num56, num57, num58, num59, num6, num60, num61, num62, num63, num64, num65, num66, num67, num7, num8, num9, obj1, obj10, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj2, obj23, obj24, obj25, obj26, obj27, obj28, obj29, obj30, obj31, obj32, obj33, obj34, obj35, obj36, obj37, obj38, obj39, obj4, obj40, obj9, offset, offsetResult, parseArgumentResult, parseLiteralResult, parseMessageResult, parseNumberSkeletonResult, parseTagNameResult, parseTagResult, peekResult, position, position2, position3, position4, result, result1, result2, result3, result4, result5, result6, result7, set, str10, str11, str12, str13, str14, str15, str3, str4, str6, str7, str8, str9, style, style1, style2, substr, time, time2, tmp10, tmp16, tmp18, tmp20, tmp22, tmp26, tmp28, tmp30, tmp34, tmp38, tmp4, tmp40, tmp42, tmp44, tmp46, tmp52, tmp54, tmp60, tmp66, tryParseDecimalInteger, tryParseQuoteResult, tryParseUnquotedResult, val, value;

let flag;
let tmp11;
let regExp = new RegExp("^".concat(SPACE_SEPARATOR_REGEX.SPACE_SEPARATOR_REGEX.source, "*"));
const regExp1 = new RegExp("".concat(SPACE_SEPARATOR_REGEX.SPACE_SEPARATOR_REGEX.source, "*$"));
let startsWithResult = String.prototype.startsWith;
if (startsWithResult) {
  let str = "_a";
  const startsWith = "_a".startsWith;
  let num = 1;
  let str2 = "a";
  startsWithResult = "_a".startsWith("a", 1);
}
let tmp5 = !String.fromCodePoint;
let tmp6 = !Object.fromEntries;
let tmp7 = !String.prototype.codePointAt;
let tmp8 = !String.prototype.trimStart;
let tmp9 = !String.prototype.trimEnd;
if (Number.isSafeInteger) {
  const _Number = Number;
  let fn = Number.isSafeInteger;
} else {
  fn = (num) => {
    let isFiniteResult = typeof num === "number";
    if (typeof num === "number") {
      const _isFinite = isFinite;
      isFiniteResult = isFinite(num);
    }
    if (isFiniteResult) {
      const _Math = Math;
      isFiniteResult = Math.floor(num) === num;
    }
    if (isFiniteResult) {
      const _Math2 = Math;
      isFiniteResult = Math.abs(num) <= 9007199254740991;
    }
    return isFiniteResult;
  };
}
class RE {
  constructor(arg0, arg1) {
    regExp = new RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    return regExp;
  }
}
try {
  let num2 = 0;
  let str5 = "a";
  const REResult = RE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  const match = REResult.exec("a");
  let tmp12 = null;
  let first;
  if (null !== match) {
    let tmp14 = match;
    if (undefined !== tmp11) {
      first = match[0];
    }
  }
  flag = "a" === first;
} catch (err) {
  flag = false;
}
let closure_6 = startsWithResult ? (function startsWith(str, arg1, arg2) {
  return str.startsWith(arg1, arg2);
}) : (function startsWith(arr, arg1, arg2) {
  return arr.slice(arg2, arg2 + arg1.length) === arg1;
});
if (!tmp5) {
  let _String = String;
} else {
  fromCodePoint = function fromCodePoint() {
    let length;
    const items = [];
    let num = 0;
    if (0 < arguments.length) {
      do {
        items[num] = arguments[num];
        num = num + 1;
        length = arguments.length;
      } while (num < length);
    }
    let str = "";
    let num2 = 0;
    let str2 = "";
    if (items.length > 0) {
      while (items[num2] <= 1114111) {
        let fromCharCodeResult;
        if (tmp < 65536) {
          let _String2 = String;
          fromCharCodeResult = String.fromCharCode(tmp);
        } else {
          let _String = String;
          let diff = tmp - 65536;
          fromCharCodeResult = String.fromCharCode(55296 + (diff >> 10), diff % 1024 + 56320);
        }
        num2 = num2 + 1;
        str = str + fromCharCodeResult;
        str2 = str;
      }
      const _RangeError = RangeError;
      throw RangeError(items[num2] + " is not a valid code point");
    }
    return str2;
  };
}
if (!tmp6) {
  const _Object = Object;
} else {
  fromEntries = function fromEntries(items1) {
    let length;
    const obj = {};
    let num = 0;
    if (0 < items1.length) {
      do {
        let tmp = items1[num];
        obj[tmp[0]] = tmp[1];
        num = num + 1;
        length = items1.length;
      } while (num < length);
    }
    return obj;
  };
}
let closure_9 = !tmp7 ? (function codePointAt(str, arg1) {
  return str.codePointAt(arg1);
}) : (function codePointAt(str, arg1) {
  if (arg1 >= 0) {
    if (arg1 < str.length) {
      const charCodeAtResult = str.charCodeAt(arg1);
      let sum = charCodeAtResult;
      if (charCodeAtResult >= 55296) {
        sum = charCodeAtResult;
        if (charCodeAtResult <= 56319) {
          sum = charCodeAtResult;
          if (arg1 + 1 !== str.length) {
            const charCodeAtResult1 = str.charCodeAt(arg1 + 1);
            sum = charCodeAtResult;
            if (charCodeAtResult1 >= 56320) {
              sum = charCodeAtResult;
              if (charCodeAtResult1 <= 57343) {
                sum = charCodeAtResult1 - 56320 + (charCodeAtResult - 55296 << 10) + 65536;
              }
            }
          }
        }
      }
      return sum;
    }
  }
});
let closure_10 = !tmp8 ? (function trimStart(str) {
  return str.trimStart();
}) : (function trimStart(str) {
  return str.replace(regExp, "");
});
let closure_11 = !tmp9 ? (function trimEnd(str) {
  return str.trimEnd();
}) : (function trimEnd(str) {
  return str.replace(regExp1, "");
});
if (flag) {
  let num3 = 0;
  const regex = RE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  function matchIdentifierAtIndex(arg0, lastIndex) {
    regex.lastIndex = lastIndex;
    const tmp = regex.exec(arg0)[1];
    let str = "";
    if (null !== tmp) {
      str = "";
      if (undefined !== tmp) {
        str = tmp;
      }
    }
    return str;
  }
} else {
  matchIdentifierAtIndex = function matchIdentifierAtIndex(arg0, arg1) {
    let sum = arg1;
    const items = [];
    const tmp2 = closure_9(arg0, sum);
    const tmp3 = tmp2;
    while (undefined !== tmp2) {
      let tmp852 = tmp3 >= 9;
      let tmp6 = tmp852;
      let tmp853 = tmp852;
      if (tmp853) {
        tmp6 = tmp3 <= 13;
      }
      let tmp7 = tmp6;
      if (!tmp7) {
        tmp6 = 32 === tmp3;
      }
      let tmp9 = tmp6;
      if (!tmp9) {
        tmp6 = 133 === tmp3;
      }
      let tmp11 = tmp6;
      if (!tmp11) {
        let tmp13 = tmp3 >= 8206;
        let tmp14 = tmp13;
        let tmp15 = tmp13;
        if (tmp15) {
          tmp14 = tmp3 <= 8207;
        }
        tmp6 = tmp14;
      }
      let tmp17 = tmp6;
      if (!tmp17) {
        tmp6 = 8232 === tmp3;
      }
      let tmp19 = tmp6;
      if (!tmp19) {
        tmp6 = 8233 === tmp3;
      }
      let tmp21 = tmp6;
      if (tmp21) {
        break;
      } else {
        let tmp23 = tmp3 >= 33;
        let tmp24 = tmp23;
        let tmp25 = tmp23;
        if (tmp25) {
          tmp24 = tmp3 <= 35;
        }
        let tmp27 = tmp24;
        if (!tmp27) {
          tmp24 = 36 === tmp3;
        }
        let tmp29 = tmp24;
        if (!tmp29) {
          let tmp31 = tmp3 >= 37;
          let tmp32 = tmp31;
          let tmp33 = tmp31;
          if (tmp33) {
            tmp32 = tmp3 <= 39;
          }
          tmp24 = tmp32;
        }
        let tmp35 = tmp24;
        if (!tmp35) {
          tmp24 = 40 === tmp3;
        }
        let tmp37 = tmp24;
        if (!tmp37) {
          tmp24 = 41 === tmp3;
        }
        let tmp39 = tmp24;
        if (!tmp39) {
          tmp24 = 42 === tmp3;
        }
        let tmp41 = tmp24;
        if (!tmp41) {
          tmp24 = 43 === tmp3;
        }
        let tmp43 = tmp24;
        if (!tmp43) {
          tmp24 = 44 === tmp3;
        }
        let tmp45 = tmp24;
        if (!tmp45) {
          tmp24 = 45 === tmp3;
        }
        let tmp47 = tmp24;
        if (!tmp47) {
          let tmp49 = tmp3 >= 46;
          let tmp50 = tmp49;
          let tmp51 = tmp49;
          if (tmp51) {
            tmp50 = tmp3 <= 47;
          }
          tmp24 = tmp50;
        }
        let tmp53 = tmp24;
        if (!tmp53) {
          let tmp55 = tmp3 >= 58;
          let tmp56 = tmp55;
          let tmp57 = tmp55;
          if (tmp57) {
            tmp56 = tmp3 <= 59;
          }
          tmp24 = tmp56;
        }
        let tmp59 = tmp24;
        if (!tmp59) {
          let tmp61 = tmp3 >= 60;
          let tmp62 = tmp61;
          let tmp63 = tmp61;
          if (tmp63) {
            tmp62 = tmp3 <= 62;
          }
          tmp24 = tmp62;
        }
        let tmp65 = tmp24;
        if (!tmp65) {
          let tmp67 = tmp3 >= 63;
          let tmp68 = tmp67;
          let tmp69 = tmp67;
          if (tmp69) {
            tmp68 = tmp3 <= 64;
          }
          tmp24 = tmp68;
        }
        let tmp71 = tmp24;
        if (!tmp71) {
          tmp24 = 91 === tmp3;
        }
        let tmp73 = tmp24;
        if (!tmp73) {
          tmp24 = 92 === tmp3;
        }
        let tmp75 = tmp24;
        if (!tmp75) {
          tmp24 = 93 === tmp3;
        }
        let tmp77 = tmp24;
        if (!tmp77) {
          tmp24 = 94 === tmp3;
        }
        let tmp79 = tmp24;
        if (!tmp79) {
          tmp24 = 96 === tmp3;
        }
        let tmp81 = tmp24;
        if (!tmp81) {
          tmp24 = 123 === tmp3;
        }
        let tmp83 = tmp24;
        if (!tmp83) {
          tmp24 = 124 === tmp3;
        }
        let tmp85 = tmp24;
        if (!tmp85) {
          tmp24 = 125 === tmp3;
        }
        let tmp87 = tmp24;
        if (!tmp87) {
          tmp24 = 126 === tmp3;
        }
        let tmp89 = tmp24;
        if (!tmp89) {
          tmp24 = 161 === tmp3;
        }
        let tmp91 = tmp24;
        if (!tmp91) {
          let tmp93 = tmp3 >= 162;
          let tmp94 = tmp93;
          let tmp95 = tmp93;
          if (tmp95) {
            tmp94 = tmp3 <= 165;
          }
          tmp24 = tmp94;
        }
        let tmp97 = tmp24;
        if (!tmp97) {
          tmp24 = 166 === tmp3;
        }
        let tmp99 = tmp24;
        if (!tmp99) {
          tmp24 = 167 === tmp3;
        }
        let tmp101 = tmp24;
        if (!tmp101) {
          tmp24 = 169 === tmp3;
        }
        let tmp103 = tmp24;
        if (!tmp103) {
          tmp24 = 171 === tmp3;
        }
        let tmp105 = tmp24;
        if (!tmp105) {
          tmp24 = 172 === tmp3;
        }
        let tmp107 = tmp24;
        if (!tmp107) {
          tmp24 = 174 === tmp3;
        }
        let tmp109 = tmp24;
        if (!tmp109) {
          tmp24 = 176 === tmp3;
        }
        let tmp111 = tmp24;
        if (!tmp111) {
          tmp24 = 177 === tmp3;
        }
        let tmp113 = tmp24;
        if (!tmp113) {
          tmp24 = 182 === tmp3;
        }
        let tmp115 = tmp24;
        if (!tmp115) {
          tmp24 = 187 === tmp3;
        }
        let tmp117 = tmp24;
        if (!tmp117) {
          tmp24 = 191 === tmp3;
        }
        let tmp119 = tmp24;
        if (!tmp119) {
          tmp24 = 215 === tmp3;
        }
        let tmp121 = tmp24;
        if (!tmp121) {
          tmp24 = 247 === tmp3;
        }
        let tmp123 = tmp24;
        if (!tmp123) {
          let tmp125 = tmp3 >= 8208;
          let tmp126 = tmp125;
          let tmp127 = tmp125;
          if (tmp127) {
            tmp126 = tmp3 <= 8213;
          }
          tmp24 = tmp126;
        }
        let tmp129 = tmp24;
        if (!tmp129) {
          let tmp131 = tmp3 >= 8214;
          let tmp132 = tmp131;
          let tmp133 = tmp131;
          if (tmp133) {
            tmp132 = tmp3 <= 8215;
          }
          tmp24 = tmp132;
        }
        let tmp135 = tmp24;
        if (!tmp135) {
          tmp24 = 8216 === tmp3;
        }
        let tmp137 = tmp24;
        if (!tmp137) {
          tmp24 = 8217 === tmp3;
        }
        let tmp139 = tmp24;
        if (!tmp139) {
          tmp24 = 8218 === tmp3;
        }
        let tmp141 = tmp24;
        if (!tmp141) {
          let tmp143 = tmp3 >= 8219;
          let tmp144 = tmp143;
          let tmp145 = tmp143;
          if (tmp145) {
            tmp144 = tmp3 <= 8220;
          }
          tmp24 = tmp144;
        }
        let tmp147 = tmp24;
        if (!tmp147) {
          tmp24 = 8221 === tmp3;
        }
        let tmp149 = tmp24;
        if (!tmp149) {
          tmp24 = 8222 === tmp3;
        }
        let tmp151 = tmp24;
        if (!tmp151) {
          tmp24 = 8223 === tmp3;
        }
        let tmp153 = tmp24;
        if (!tmp153) {
          let tmp155 = tmp3 >= 8224;
          let tmp156 = tmp155;
          let tmp157 = tmp155;
          if (tmp157) {
            tmp156 = tmp3 <= 8231;
          }
          tmp24 = tmp156;
        }
        let tmp159 = tmp24;
        if (!tmp159) {
          let tmp161 = tmp3 >= 8240;
          let tmp162 = tmp161;
          let tmp163 = tmp161;
          if (tmp163) {
            tmp162 = tmp3 <= 8248;
          }
          tmp24 = tmp162;
        }
        let tmp165 = tmp24;
        if (!tmp165) {
          tmp24 = 8249 === tmp3;
        }
        let tmp167 = tmp24;
        if (!tmp167) {
          tmp24 = 8250 === tmp3;
        }
        let tmp169 = tmp24;
        if (!tmp169) {
          let tmp171 = tmp3 >= 8251;
          let tmp172 = tmp171;
          let tmp173 = tmp171;
          if (tmp173) {
            tmp172 = tmp3 <= 8254;
          }
          tmp24 = tmp172;
        }
        let tmp175 = tmp24;
        if (!tmp175) {
          let tmp177 = tmp3 >= 8257;
          let tmp178 = tmp177;
          let tmp179 = tmp177;
          if (tmp179) {
            tmp178 = tmp3 <= 8259;
          }
          tmp24 = tmp178;
        }
        let tmp181 = tmp24;
        if (!tmp181) {
          tmp24 = 8260 === tmp3;
        }
        let tmp183 = tmp24;
        if (!tmp183) {
          tmp24 = 8261 === tmp3;
        }
        let tmp185 = tmp24;
        if (!tmp185) {
          tmp24 = 8262 === tmp3;
        }
        let tmp187 = tmp24;
        if (!tmp187) {
          let tmp189 = tmp3 >= 8263;
          let tmp190 = tmp189;
          let tmp191 = tmp189;
          if (tmp191) {
            tmp190 = tmp3 <= 8273;
          }
          tmp24 = tmp190;
        }
        let tmp193 = tmp24;
        if (!tmp193) {
          tmp24 = 8274 === tmp3;
        }
        let tmp195 = tmp24;
        if (!tmp195) {
          tmp24 = 8275 === tmp3;
        }
        let tmp197 = tmp24;
        if (!tmp197) {
          let tmp199 = tmp3 >= 8277;
          let tmp200 = tmp199;
          let tmp201 = tmp199;
          if (tmp201) {
            tmp200 = tmp3 <= 8286;
          }
          tmp24 = tmp200;
        }
        let tmp203 = tmp24;
        if (!tmp203) {
          let tmp205 = tmp3 >= 8592;
          let tmp206 = tmp205;
          let tmp207 = tmp205;
          if (tmp207) {
            tmp206 = tmp3 <= 8596;
          }
          tmp24 = tmp206;
        }
        let tmp209 = tmp24;
        if (!tmp209) {
          let tmp211 = tmp3 >= 8597;
          let tmp212 = tmp211;
          let tmp213 = tmp211;
          if (tmp213) {
            tmp212 = tmp3 <= 8601;
          }
          tmp24 = tmp212;
        }
        let tmp215 = tmp24;
        if (!tmp215) {
          let tmp217 = tmp3 >= 8602;
          let tmp218 = tmp217;
          let tmp219 = tmp217;
          if (tmp219) {
            tmp218 = tmp3 <= 8603;
          }
          tmp24 = tmp218;
        }
        let tmp221 = tmp24;
        if (!tmp221) {
          let tmp223 = tmp3 >= 8604;
          let tmp224 = tmp223;
          let tmp225 = tmp223;
          if (tmp225) {
            tmp224 = tmp3 <= 8607;
          }
          tmp24 = tmp224;
        }
        let tmp227 = tmp24;
        if (!tmp227) {
          tmp24 = 8608 === tmp3;
        }
        let tmp229 = tmp24;
        if (!tmp229) {
          let tmp231 = tmp3 >= 8609;
          let tmp232 = tmp231;
          let tmp233 = tmp231;
          if (tmp233) {
            tmp232 = tmp3 <= 8610;
          }
          tmp24 = tmp232;
        }
        let tmp235 = tmp24;
        if (!tmp235) {
          tmp24 = 8611 === tmp3;
        }
        let tmp237 = tmp24;
        if (!tmp237) {
          let tmp239 = tmp3 >= 8612;
          let tmp240 = tmp239;
          let tmp241 = tmp239;
          if (tmp241) {
            tmp240 = tmp3 <= 8613;
          }
          tmp24 = tmp240;
        }
        let tmp243 = tmp24;
        if (!tmp243) {
          tmp24 = 8614 === tmp3;
        }
        let tmp245 = tmp24;
        if (!tmp245) {
          let tmp247 = tmp3 >= 8615;
          let tmp248 = tmp247;
          let tmp249 = tmp247;
          if (tmp249) {
            tmp248 = tmp3 <= 8621;
          }
          tmp24 = tmp248;
        }
        let tmp251 = tmp24;
        if (!tmp251) {
          tmp24 = 8622 === tmp3;
        }
        let tmp253 = tmp24;
        if (!tmp253) {
          let tmp255 = tmp3 >= 8623;
          let tmp256 = tmp255;
          let tmp257 = tmp255;
          if (tmp257) {
            tmp256 = tmp3 <= 8653;
          }
          tmp24 = tmp256;
        }
        let tmp259 = tmp24;
        if (!tmp259) {
          let tmp261 = tmp3 >= 8654;
          let tmp262 = tmp261;
          let tmp263 = tmp261;
          if (tmp263) {
            tmp262 = tmp3 <= 8655;
          }
          tmp24 = tmp262;
        }
        let tmp265 = tmp24;
        if (!tmp265) {
          let tmp267 = tmp3 >= 8656;
          let tmp268 = tmp267;
          let tmp269 = tmp267;
          if (tmp269) {
            tmp268 = tmp3 <= 8657;
          }
          tmp24 = tmp268;
        }
        let tmp271 = tmp24;
        if (!tmp271) {
          tmp24 = 8658 === tmp3;
        }
        let tmp273 = tmp24;
        if (!tmp273) {
          tmp24 = 8659 === tmp3;
        }
        let tmp275 = tmp24;
        if (!tmp275) {
          tmp24 = 8660 === tmp3;
        }
        let tmp277 = tmp24;
        if (!tmp277) {
          let tmp279 = tmp3 >= 8661;
          let tmp280 = tmp279;
          let tmp281 = tmp279;
          if (tmp281) {
            tmp280 = tmp3 <= 8691;
          }
          tmp24 = tmp280;
        }
        let tmp283 = tmp24;
        if (!tmp283) {
          let tmp285 = tmp3 >= 8692;
          let tmp286 = tmp285;
          let tmp287 = tmp285;
          if (tmp287) {
            tmp286 = tmp3 <= 8959;
          }
          tmp24 = tmp286;
        }
        let tmp289 = tmp24;
        if (!tmp289) {
          let tmp291 = tmp3 >= 8960;
          let tmp292 = tmp291;
          let tmp293 = tmp291;
          if (tmp293) {
            tmp292 = tmp3 <= 8967;
          }
          tmp24 = tmp292;
        }
        let tmp295 = tmp24;
        if (!tmp295) {
          tmp24 = 8968 === tmp3;
        }
        let tmp297 = tmp24;
        if (!tmp297) {
          tmp24 = 8969 === tmp3;
        }
        let tmp299 = tmp24;
        if (!tmp299) {
          tmp24 = 8970 === tmp3;
        }
        let tmp301 = tmp24;
        if (!tmp301) {
          tmp24 = 8971 === tmp3;
        }
        let tmp303 = tmp24;
        if (!tmp303) {
          let tmp305 = tmp3 >= 8972;
          let tmp306 = tmp305;
          let tmp307 = tmp305;
          if (tmp307) {
            tmp306 = tmp3 <= 8991;
          }
          tmp24 = tmp306;
        }
        let tmp309 = tmp24;
        if (!tmp309) {
          let tmp311 = tmp3 >= 8992;
          let tmp312 = tmp311;
          let tmp313 = tmp311;
          if (tmp313) {
            tmp312 = tmp3 <= 8993;
          }
          tmp24 = tmp312;
        }
        let tmp315 = tmp24;
        if (!tmp315) {
          let tmp317 = tmp3 >= 8994;
          let tmp318 = tmp317;
          let tmp319 = tmp317;
          if (tmp319) {
            tmp318 = tmp3 <= 9000;
          }
          tmp24 = tmp318;
        }
        let tmp321 = tmp24;
        if (!tmp321) {
          tmp24 = 9001 === tmp3;
        }
        let tmp323 = tmp24;
        if (!tmp323) {
          tmp24 = 9002 === tmp3;
        }
        let tmp325 = tmp24;
        if (!tmp325) {
          let tmp327 = tmp3 >= 9003;
          let tmp328 = tmp327;
          let tmp329 = tmp327;
          if (tmp329) {
            tmp328 = tmp3 <= 9083;
          }
          tmp24 = tmp328;
        }
        let tmp331 = tmp24;
        if (!tmp331) {
          tmp24 = 9084 === tmp3;
        }
        let tmp333 = tmp24;
        if (!tmp333) {
          let tmp335 = tmp3 >= 9085;
          let tmp336 = tmp335;
          let tmp337 = tmp335;
          if (tmp337) {
            tmp336 = tmp3 <= 9114;
          }
          tmp24 = tmp336;
        }
        let tmp339 = tmp24;
        if (!tmp339) {
          let tmp341 = tmp3 >= 9115;
          let tmp342 = tmp341;
          let tmp343 = tmp341;
          if (tmp343) {
            tmp342 = tmp3 <= 9139;
          }
          tmp24 = tmp342;
        }
        let tmp345 = tmp24;
        if (!tmp345) {
          let tmp347 = tmp3 >= 9140;
          let tmp348 = tmp347;
          let tmp349 = tmp347;
          if (tmp349) {
            tmp348 = tmp3 <= 9179;
          }
          tmp24 = tmp348;
        }
        let tmp351 = tmp24;
        if (!tmp351) {
          let tmp353 = tmp3 >= 9180;
          let tmp354 = tmp353;
          let tmp355 = tmp353;
          if (tmp355) {
            tmp354 = tmp3 <= 9185;
          }
          tmp24 = tmp354;
        }
        let tmp357 = tmp24;
        if (!tmp357) {
          let tmp359 = tmp3 >= 9186;
          let tmp360 = tmp359;
          let tmp361 = tmp359;
          if (tmp361) {
            tmp360 = tmp3 <= 9254;
          }
          tmp24 = tmp360;
        }
        let tmp363 = tmp24;
        if (!tmp363) {
          let tmp365 = tmp3 >= 9255;
          let tmp366 = tmp365;
          let tmp367 = tmp365;
          if (tmp367) {
            tmp366 = tmp3 <= 9279;
          }
          tmp24 = tmp366;
        }
        let tmp369 = tmp24;
        if (!tmp369) {
          let tmp371 = tmp3 >= 9280;
          let tmp372 = tmp371;
          let tmp373 = tmp371;
          if (tmp373) {
            tmp372 = tmp3 <= 9290;
          }
          tmp24 = tmp372;
        }
        let tmp375 = tmp24;
        if (!tmp375) {
          let tmp377 = tmp3 >= 9291;
          let tmp378 = tmp377;
          let tmp379 = tmp377;
          if (tmp379) {
            tmp378 = tmp3 <= 9311;
          }
          tmp24 = tmp378;
        }
        let tmp381 = tmp24;
        if (!tmp381) {
          let tmp383 = tmp3 >= 9472;
          let tmp384 = tmp383;
          let tmp385 = tmp383;
          if (tmp385) {
            tmp384 = tmp3 <= 9654;
          }
          tmp24 = tmp384;
        }
        let tmp387 = tmp24;
        if (!tmp387) {
          tmp24 = 9655 === tmp3;
        }
        let tmp389 = tmp24;
        if (!tmp389) {
          let tmp391 = tmp3 >= 9656;
          let tmp392 = tmp391;
          let tmp393 = tmp391;
          if (tmp393) {
            tmp392 = tmp3 <= 9664;
          }
          tmp24 = tmp392;
        }
        let tmp395 = tmp24;
        if (!tmp395) {
          tmp24 = 9665 === tmp3;
        }
        let tmp397 = tmp24;
        if (!tmp397) {
          let tmp399 = tmp3 >= 9666;
          let tmp400 = tmp399;
          let tmp401 = tmp399;
          if (tmp401) {
            tmp400 = tmp3 <= 9719;
          }
          tmp24 = tmp400;
        }
        let tmp403 = tmp24;
        if (!tmp403) {
          let tmp405 = tmp3 >= 9720;
          let tmp406 = tmp405;
          let tmp407 = tmp405;
          if (tmp407) {
            tmp406 = tmp3 <= 9727;
          }
          tmp24 = tmp406;
        }
        let tmp409 = tmp24;
        if (!tmp409) {
          let tmp411 = tmp3 >= 9728;
          let tmp412 = tmp411;
          let tmp413 = tmp411;
          if (tmp413) {
            tmp412 = tmp3 <= 9838;
          }
          tmp24 = tmp412;
        }
        let tmp415 = tmp24;
        if (!tmp415) {
          tmp24 = 9839 === tmp3;
        }
        let tmp417 = tmp24;
        if (!tmp417) {
          let tmp419 = tmp3 >= 9840;
          let tmp420 = tmp419;
          let tmp421 = tmp419;
          if (tmp421) {
            tmp420 = tmp3 <= 10087;
          }
          tmp24 = tmp420;
        }
        let tmp423 = tmp24;
        if (!tmp423) {
          tmp24 = 10088 === tmp3;
        }
        let tmp425 = tmp24;
        if (!tmp425) {
          tmp24 = 10089 === tmp3;
        }
        let tmp427 = tmp24;
        if (!tmp427) {
          tmp24 = 10090 === tmp3;
        }
        let tmp429 = tmp24;
        if (!tmp429) {
          tmp24 = 10091 === tmp3;
        }
        let tmp431 = tmp24;
        if (!tmp431) {
          tmp24 = 10092 === tmp3;
        }
        let tmp433 = tmp24;
        if (!tmp433) {
          tmp24 = 10093 === tmp3;
        }
        let tmp435 = tmp24;
        if (!tmp435) {
          tmp24 = 10094 === tmp3;
        }
        let tmp437 = tmp24;
        if (!tmp437) {
          tmp24 = 10095 === tmp3;
        }
        let tmp439 = tmp24;
        if (!tmp439) {
          tmp24 = 10096 === tmp3;
        }
        let tmp441 = tmp24;
        if (!tmp441) {
          tmp24 = 10097 === tmp3;
        }
        let tmp443 = tmp24;
        if (!tmp443) {
          tmp24 = 10098 === tmp3;
        }
        let tmp445 = tmp24;
        if (!tmp445) {
          tmp24 = 10099 === tmp3;
        }
        let tmp447 = tmp24;
        if (!tmp447) {
          tmp24 = 10100 === tmp3;
        }
        let tmp449 = tmp24;
        if (!tmp449) {
          tmp24 = 10101 === tmp3;
        }
        let tmp451 = tmp24;
        if (!tmp451) {
          let tmp453 = tmp3 >= 10132;
          let tmp454 = tmp453;
          let tmp455 = tmp453;
          if (tmp455) {
            tmp454 = tmp3 <= 10175;
          }
          tmp24 = tmp454;
        }
        let tmp457 = tmp24;
        if (!tmp457) {
          let tmp459 = tmp3 >= 10176;
          let tmp460 = tmp459;
          let tmp461 = tmp459;
          if (tmp461) {
            tmp460 = tmp3 <= 10180;
          }
          tmp24 = tmp460;
        }
        let tmp463 = tmp24;
        if (!tmp463) {
          tmp24 = 10181 === tmp3;
        }
        let tmp465 = tmp24;
        if (!tmp465) {
          tmp24 = 10182 === tmp3;
        }
        let tmp467 = tmp24;
        if (!tmp467) {
          let tmp469 = tmp3 >= 10183;
          let tmp470 = tmp469;
          let tmp471 = tmp469;
          if (tmp471) {
            tmp470 = tmp3 <= 10213;
          }
          tmp24 = tmp470;
        }
        let tmp473 = tmp24;
        if (!tmp473) {
          tmp24 = 10214 === tmp3;
        }
        let tmp475 = tmp24;
        if (!tmp475) {
          tmp24 = 10215 === tmp3;
        }
        let tmp477 = tmp24;
        if (!tmp477) {
          tmp24 = 10216 === tmp3;
        }
        let tmp479 = tmp24;
        if (!tmp479) {
          tmp24 = 10217 === tmp3;
        }
        let tmp481 = tmp24;
        if (!tmp481) {
          tmp24 = 10218 === tmp3;
        }
        let tmp483 = tmp24;
        if (!tmp483) {
          tmp24 = 10219 === tmp3;
        }
        let tmp485 = tmp24;
        if (!tmp485) {
          tmp24 = 10220 === tmp3;
        }
        let tmp487 = tmp24;
        if (!tmp487) {
          tmp24 = 10221 === tmp3;
        }
        let tmp489 = tmp24;
        if (!tmp489) {
          tmp24 = 10222 === tmp3;
        }
        let tmp491 = tmp24;
        if (!tmp491) {
          tmp24 = 10223 === tmp3;
        }
        let tmp493 = tmp24;
        if (!tmp493) {
          let tmp495 = tmp3 >= 10224;
          let tmp496 = tmp495;
          let tmp497 = tmp495;
          if (tmp497) {
            tmp496 = tmp3 <= 10239;
          }
          tmp24 = tmp496;
        }
        let tmp499 = tmp24;
        if (!tmp499) {
          let tmp501 = tmp3 >= 10240;
          let tmp502 = tmp501;
          let tmp503 = tmp501;
          if (tmp503) {
            tmp502 = tmp3 <= 10495;
          }
          tmp24 = tmp502;
        }
        let tmp505 = tmp24;
        if (!tmp505) {
          let tmp507 = tmp3 >= 10496;
          let tmp508 = tmp507;
          let tmp509 = tmp507;
          if (tmp509) {
            tmp508 = tmp3 <= 10626;
          }
          tmp24 = tmp508;
        }
        let tmp511 = tmp24;
        if (!tmp511) {
          tmp24 = 10627 === tmp3;
        }
        let tmp513 = tmp24;
        if (!tmp513) {
          tmp24 = 10628 === tmp3;
        }
        let tmp515 = tmp24;
        if (!tmp515) {
          tmp24 = 10629 === tmp3;
        }
        let tmp517 = tmp24;
        if (!tmp517) {
          tmp24 = 10630 === tmp3;
        }
        let tmp519 = tmp24;
        if (!tmp519) {
          tmp24 = 10631 === tmp3;
        }
        let tmp521 = tmp24;
        if (!tmp521) {
          tmp24 = 10632 === tmp3;
        }
        let tmp523 = tmp24;
        if (!tmp523) {
          tmp24 = 10633 === tmp3;
        }
        let tmp525 = tmp24;
        if (!tmp525) {
          tmp24 = 10634 === tmp3;
        }
        let tmp527 = tmp24;
        if (!tmp527) {
          tmp24 = 10635 === tmp3;
        }
        let tmp529 = tmp24;
        if (!tmp529) {
          tmp24 = 10636 === tmp3;
        }
        let tmp531 = tmp24;
        if (!tmp531) {
          tmp24 = 10637 === tmp3;
        }
        let tmp533 = tmp24;
        if (!tmp533) {
          tmp24 = 10638 === tmp3;
        }
        let tmp535 = tmp24;
        if (!tmp535) {
          tmp24 = 10639 === tmp3;
        }
        let tmp537 = tmp24;
        if (!tmp537) {
          tmp24 = 10640 === tmp3;
        }
        let tmp539 = tmp24;
        if (!tmp539) {
          tmp24 = 10641 === tmp3;
        }
        let tmp541 = tmp24;
        if (!tmp541) {
          tmp24 = 10642 === tmp3;
        }
        let tmp543 = tmp24;
        if (!tmp543) {
          tmp24 = 10643 === tmp3;
        }
        let tmp545 = tmp24;
        if (!tmp545) {
          tmp24 = 10644 === tmp3;
        }
        let tmp547 = tmp24;
        if (!tmp547) {
          tmp24 = 10645 === tmp3;
        }
        let tmp549 = tmp24;
        if (!tmp549) {
          tmp24 = 10646 === tmp3;
        }
        let tmp551 = tmp24;
        if (!tmp551) {
          tmp24 = 10647 === tmp3;
        }
        let tmp553 = tmp24;
        if (!tmp553) {
          tmp24 = 10648 === tmp3;
        }
        let tmp555 = tmp24;
        if (!tmp555) {
          let tmp557 = tmp3 >= 10649;
          let tmp558 = tmp557;
          let tmp559 = tmp557;
          if (tmp559) {
            tmp558 = tmp3 <= 10711;
          }
          tmp24 = tmp558;
        }
        let tmp561 = tmp24;
        if (!tmp561) {
          tmp24 = 10712 === tmp3;
        }
        let tmp563 = tmp24;
        if (!tmp563) {
          tmp24 = 10713 === tmp3;
        }
        let tmp565 = tmp24;
        if (!tmp565) {
          tmp24 = 10714 === tmp3;
        }
        let tmp567 = tmp24;
        if (!tmp567) {
          tmp24 = 10715 === tmp3;
        }
        let tmp569 = tmp24;
        if (!tmp569) {
          let tmp571 = tmp3 >= 10716;
          let tmp572 = tmp571;
          let tmp573 = tmp571;
          if (tmp573) {
            tmp572 = tmp3 <= 10747;
          }
          tmp24 = tmp572;
        }
        let tmp575 = tmp24;
        if (!tmp575) {
          tmp24 = 10748 === tmp3;
        }
        let tmp577 = tmp24;
        if (!tmp577) {
          tmp24 = 10749 === tmp3;
        }
        let tmp579 = tmp24;
        if (!tmp579) {
          let tmp581 = tmp3 >= 10750;
          let tmp582 = tmp581;
          let tmp583 = tmp581;
          if (tmp583) {
            tmp582 = tmp3 <= 11007;
          }
          tmp24 = tmp582;
        }
        let tmp585 = tmp24;
        if (!tmp585) {
          let tmp587 = tmp3 >= 11008;
          let tmp588 = tmp587;
          let tmp589 = tmp587;
          if (tmp589) {
            tmp588 = tmp3 <= 11055;
          }
          tmp24 = tmp588;
        }
        let tmp591 = tmp24;
        if (!tmp591) {
          let tmp593 = tmp3 >= 11056;
          let tmp594 = tmp593;
          let tmp595 = tmp593;
          if (tmp595) {
            tmp594 = tmp3 <= 11076;
          }
          tmp24 = tmp594;
        }
        let tmp597 = tmp24;
        if (!tmp597) {
          let tmp599 = tmp3 >= 11077;
          let tmp600 = tmp599;
          let tmp601 = tmp599;
          if (tmp601) {
            tmp600 = tmp3 <= 11078;
          }
          tmp24 = tmp600;
        }
        let tmp603 = tmp24;
        if (!tmp603) {
          let tmp605 = tmp3 >= 11079;
          let tmp606 = tmp605;
          let tmp607 = tmp605;
          if (tmp607) {
            tmp606 = tmp3 <= 11084;
          }
          tmp24 = tmp606;
        }
        let tmp609 = tmp24;
        if (!tmp609) {
          let tmp611 = tmp3 >= 11085;
          let tmp612 = tmp611;
          let tmp613 = tmp611;
          if (tmp613) {
            tmp612 = tmp3 <= 11123;
          }
          tmp24 = tmp612;
        }
        let tmp615 = tmp24;
        if (!tmp615) {
          let tmp617 = tmp3 >= 11124;
          let tmp618 = tmp617;
          let tmp619 = tmp617;
          if (tmp619) {
            tmp618 = tmp3 <= 11125;
          }
          tmp24 = tmp618;
        }
        let tmp621 = tmp24;
        if (!tmp621) {
          let tmp623 = tmp3 >= 11126;
          let tmp624 = tmp623;
          let tmp625 = tmp623;
          if (tmp625) {
            tmp624 = tmp3 <= 11157;
          }
          tmp24 = tmp624;
        }
        let tmp627 = tmp24;
        if (!tmp627) {
          tmp24 = 11158 === tmp3;
        }
        let tmp629 = tmp24;
        if (!tmp629) {
          let tmp631 = tmp3 >= 11159;
          let tmp632 = tmp631;
          let tmp633 = tmp631;
          if (tmp633) {
            tmp632 = tmp3 <= 11263;
          }
          tmp24 = tmp632;
        }
        let tmp635 = tmp24;
        if (!tmp635) {
          let tmp637 = tmp3 >= 11776;
          let tmp638 = tmp637;
          let tmp639 = tmp637;
          if (tmp639) {
            tmp638 = tmp3 <= 11777;
          }
          tmp24 = tmp638;
        }
        let tmp641 = tmp24;
        if (!tmp641) {
          tmp24 = 11778 === tmp3;
        }
        let tmp643 = tmp24;
        if (!tmp643) {
          tmp24 = 11779 === tmp3;
        }
        let tmp645 = tmp24;
        if (!tmp645) {
          tmp24 = 11780 === tmp3;
        }
        let tmp647 = tmp24;
        if (!tmp647) {
          tmp24 = 11781 === tmp3;
        }
        let tmp649 = tmp24;
        if (!tmp649) {
          let tmp651 = tmp3 >= 11782;
          let tmp652 = tmp651;
          let tmp653 = tmp651;
          if (tmp653) {
            tmp652 = tmp3 <= 11784;
          }
          tmp24 = tmp652;
        }
        let tmp655 = tmp24;
        if (!tmp655) {
          tmp24 = 11785 === tmp3;
        }
        let tmp657 = tmp24;
        if (!tmp657) {
          tmp24 = 11786 === tmp3;
        }
        let tmp659 = tmp24;
        if (!tmp659) {
          tmp24 = 11787 === tmp3;
        }
        let tmp661 = tmp24;
        if (!tmp661) {
          tmp24 = 11788 === tmp3;
        }
        let tmp663 = tmp24;
        if (!tmp663) {
          tmp24 = 11789 === tmp3;
        }
        let tmp665 = tmp24;
        if (!tmp665) {
          let tmp667 = tmp3 >= 11790;
          let tmp668 = tmp667;
          let tmp669 = tmp667;
          if (tmp669) {
            tmp668 = tmp3 <= 11798;
          }
          tmp24 = tmp668;
        }
        let tmp671 = tmp24;
        if (!tmp671) {
          tmp24 = 11799 === tmp3;
        }
        let tmp673 = tmp24;
        if (!tmp673) {
          let tmp675 = tmp3 >= 11800;
          let tmp676 = tmp675;
          let tmp677 = tmp675;
          if (tmp677) {
            tmp676 = tmp3 <= 11801;
          }
          tmp24 = tmp676;
        }
        let tmp679 = tmp24;
        if (!tmp679) {
          tmp24 = 11802 === tmp3;
        }
        let tmp681 = tmp24;
        if (!tmp681) {
          tmp24 = 11803 === tmp3;
        }
        let tmp683 = tmp24;
        if (!tmp683) {
          tmp24 = 11804 === tmp3;
        }
        let tmp685 = tmp24;
        if (!tmp685) {
          tmp24 = 11805 === tmp3;
        }
        let tmp687 = tmp24;
        if (!tmp687) {
          let tmp689 = tmp3 >= 11806;
          let tmp690 = tmp689;
          let tmp691 = tmp689;
          if (tmp691) {
            tmp690 = tmp3 <= 11807;
          }
          tmp24 = tmp690;
        }
        let tmp693 = tmp24;
        if (!tmp693) {
          tmp24 = 11808 === tmp3;
        }
        let tmp695 = tmp24;
        if (!tmp695) {
          tmp24 = 11809 === tmp3;
        }
        let tmp697 = tmp24;
        if (!tmp697) {
          tmp24 = 11810 === tmp3;
        }
        let tmp699 = tmp24;
        if (!tmp699) {
          tmp24 = 11811 === tmp3;
        }
        let tmp701 = tmp24;
        if (!tmp701) {
          tmp24 = 11812 === tmp3;
        }
        let tmp703 = tmp24;
        if (!tmp703) {
          tmp24 = 11813 === tmp3;
        }
        let tmp705 = tmp24;
        if (!tmp705) {
          tmp24 = 11814 === tmp3;
        }
        let tmp707 = tmp24;
        if (!tmp707) {
          tmp24 = 11815 === tmp3;
        }
        let tmp709 = tmp24;
        if (!tmp709) {
          tmp24 = 11816 === tmp3;
        }
        let tmp711 = tmp24;
        if (!tmp711) {
          tmp24 = 11817 === tmp3;
        }
        let tmp713 = tmp24;
        if (!tmp713) {
          let tmp715 = tmp3 >= 11818;
          let tmp716 = tmp715;
          let tmp717 = tmp715;
          if (tmp717) {
            tmp716 = tmp3 <= 11822;
          }
          tmp24 = tmp716;
        }
        let tmp719 = tmp24;
        if (!tmp719) {
          tmp24 = 11823 === tmp3;
        }
        let tmp721 = tmp24;
        if (!tmp721) {
          let tmp723 = tmp3 >= 11824;
          let tmp724 = tmp723;
          let tmp725 = tmp723;
          if (tmp725) {
            tmp724 = tmp3 <= 11833;
          }
          tmp24 = tmp724;
        }
        let tmp727 = tmp24;
        if (!tmp727) {
          let tmp729 = tmp3 >= 11834;
          let tmp730 = tmp729;
          let tmp731 = tmp729;
          if (tmp731) {
            tmp730 = tmp3 <= 11835;
          }
          tmp24 = tmp730;
        }
        let tmp733 = tmp24;
        if (!tmp733) {
          let tmp735 = tmp3 >= 11836;
          let tmp736 = tmp735;
          let tmp737 = tmp735;
          if (tmp737) {
            tmp736 = tmp3 <= 11839;
          }
          tmp24 = tmp736;
        }
        let tmp739 = tmp24;
        if (!tmp739) {
          tmp24 = 11840 === tmp3;
        }
        let tmp741 = tmp24;
        if (!tmp741) {
          tmp24 = 11841 === tmp3;
        }
        let tmp743 = tmp24;
        if (!tmp743) {
          tmp24 = 11842 === tmp3;
        }
        let tmp745 = tmp24;
        if (!tmp745) {
          let tmp747 = tmp3 >= 11843;
          let tmp748 = tmp747;
          let tmp749 = tmp747;
          if (tmp749) {
            tmp748 = tmp3 <= 11855;
          }
          tmp24 = tmp748;
        }
        let tmp751 = tmp24;
        if (!tmp751) {
          let tmp753 = tmp3 >= 11856;
          let tmp754 = tmp753;
          let tmp755 = tmp753;
          if (tmp755) {
            tmp754 = tmp3 <= 11857;
          }
          tmp24 = tmp754;
        }
        let tmp757 = tmp24;
        if (!tmp757) {
          tmp24 = 11858 === tmp3;
        }
        let tmp759 = tmp24;
        if (!tmp759) {
          let tmp761 = tmp3 >= 11859;
          let tmp762 = tmp761;
          let tmp763 = tmp761;
          if (tmp763) {
            tmp762 = tmp3 <= 11903;
          }
          tmp24 = tmp762;
        }
        let tmp765 = tmp24;
        if (!tmp765) {
          let tmp767 = tmp3 >= 12289;
          let tmp768 = tmp767;
          let tmp769 = tmp767;
          if (tmp769) {
            tmp768 = tmp3 <= 12291;
          }
          tmp24 = tmp768;
        }
        let tmp771 = tmp24;
        if (!tmp771) {
          tmp24 = 12296 === tmp3;
        }
        let tmp773 = tmp24;
        if (!tmp773) {
          tmp24 = 12297 === tmp3;
        }
        let tmp775 = tmp24;
        if (!tmp775) {
          tmp24 = 12298 === tmp3;
        }
        let tmp777 = tmp24;
        if (!tmp777) {
          tmp24 = 12299 === tmp3;
        }
        let tmp779 = tmp24;
        if (!tmp779) {
          tmp24 = 12300 === tmp3;
        }
        let tmp781 = tmp24;
        if (!tmp781) {
          tmp24 = 12301 === tmp3;
        }
        let tmp783 = tmp24;
        if (!tmp783) {
          tmp24 = 12302 === tmp3;
        }
        let tmp785 = tmp24;
        if (!tmp785) {
          tmp24 = 12303 === tmp3;
        }
        let tmp787 = tmp24;
        if (!tmp787) {
          tmp24 = 12304 === tmp3;
        }
        let tmp789 = tmp24;
        if (!tmp789) {
          tmp24 = 12305 === tmp3;
        }
        let tmp791 = tmp24;
        if (!tmp791) {
          let tmp793 = tmp3 >= 12306;
          let tmp794 = tmp793;
          let tmp795 = tmp793;
          if (tmp795) {
            tmp794 = tmp3 <= 12307;
          }
          tmp24 = tmp794;
        }
        let tmp797 = tmp24;
        if (!tmp797) {
          tmp24 = 12308 === tmp3;
        }
        let tmp799 = tmp24;
        if (!tmp799) {
          tmp24 = 12309 === tmp3;
        }
        let tmp801 = tmp24;
        if (!tmp801) {
          tmp24 = 12310 === tmp3;
        }
        let tmp803 = tmp24;
        if (!tmp803) {
          tmp24 = 12311 === tmp3;
        }
        let tmp805 = tmp24;
        if (!tmp805) {
          tmp24 = 12312 === tmp3;
        }
        let tmp807 = tmp24;
        if (!tmp807) {
          tmp24 = 12313 === tmp3;
        }
        let tmp809 = tmp24;
        if (!tmp809) {
          tmp24 = 12314 === tmp3;
        }
        let tmp811 = tmp24;
        if (!tmp811) {
          tmp24 = 12315 === tmp3;
        }
        let tmp813 = tmp24;
        if (!tmp813) {
          tmp24 = 12316 === tmp3;
        }
        let tmp815 = tmp24;
        if (!tmp815) {
          tmp24 = 12317 === tmp3;
        }
        let tmp817 = tmp24;
        if (!tmp817) {
          let tmp819 = tmp3 >= 12318;
          let tmp820 = tmp819;
          let tmp821 = tmp819;
          if (tmp821) {
            tmp820 = tmp3 <= 12319;
          }
          tmp24 = tmp820;
        }
        let tmp823 = tmp24;
        if (!tmp823) {
          tmp24 = 12320 === tmp3;
        }
        let tmp825 = tmp24;
        if (!tmp825) {
          tmp24 = 12336 === tmp3;
        }
        let tmp827 = tmp24;
        if (!tmp827) {
          tmp24 = 64830 === tmp3;
        }
        let tmp829 = tmp24;
        if (!tmp829) {
          tmp24 = 64831 === tmp3;
        }
        let tmp831 = tmp24;
        if (!tmp831) {
          let tmp833 = tmp3 >= 65093;
          let tmp834 = tmp833;
          let tmp835 = tmp833;
          if (tmp835) {
            tmp834 = tmp3 <= 65094;
          }
          tmp24 = tmp834;
        }
        let tmp837 = tmp24;
        if (tmp837) {
          break;
        } else {
          let push = arr2.push;
          let arr = push(tmp3);
          let tmp845 = tmp3 >= 65536;
          let num88 = 1;
          let tmp847 = tmp845;
          if (tmp847) {
            num88 = 2;
          }
          sum = tmp4 + num88;
          continue;
        }
      }
    }
    const applyResult = fromCodePoint.apply(undefined, items);
    return applyResult;
  };
}

export const Parser = (() => {
  class Parser {
    constructor(arg0, arg1) {
      obj = {};
      obj1 = arg1;
      if (undefined === arg1) {
        obj1 = {};
      }
      obj.message = arg0;
      obj.position = { offset: 0, line: 1, column: 1 };
      obj.ignoreTag = obj1.ignoreTag;
      obj.locale = obj1.locale;
      obj.requiresOtherClause = obj1.requiresOtherClause;
      obj.shouldParseSkeletons = obj1.shouldParseSkeletons;
      return;
    }
    parse() {
      self = this;
      if (0 !== this.offset()) {
        tmp = globalThis;
        _Error = Error;
        str2 = "parser can only be used once";
        throw Error("parser can only be used once");
      } else {
        flag = false;
        str = "";
        return self.parseMessage(0, "", false);
      }
    }
    parseMessage(arg0, arg1, arg2) {
      self = this;
      items = [];
      if (!this.isEOF()) {
        while (true) {
          charResult = self.char();
          if (123 === charResult) {
            parseArgumentResult = self.parseArgument(arg0, arg2);
            if (parseArgumentResult.err) {
              return parseArgumentResult;
            } else {
              arr1 = items.push(parseArgumentResult.val);
              if (self.isEOF()) {
                break;
              }
            }
          } else {
            if (125 !== charResult) {
              if (35 !== charResult) {
                tmp7 = 60 === charResult;
                if (tmp7) {
                  if (!self.ignoreTag) {
                    if (47 === self.peek()) {
                      if (arg2) {
                        break;
                      } else {
                        tmp8 = closure_1_0;
                        tmp9 = closure_1_1;
                        error = self.error;
                        UNMATCHED_CLOSING_TAG = closure_1_0(closure_1_1[2]).ErrorKind.UNMATCHED_CLOSING_TAG;
                        clonePositionResult = self.clonePosition();
                        obj1 = { start: null, end: null };
                        obj1.start = clonePositionResult;
                        obj1.end = self.clonePosition();
                        return error(UNMATCHED_CLOSING_TAG, obj1);
                      }
                    }
                    break;
                  }
                }
                if (tmp7) {
                  if (!self.ignoreTag) {
                    tmp11 = self.peek() || 0;
                    tmp12 = tmp11 >= 97 && tmp11 <= 122;
                    if (!tmp12) {
                      tmp13 = tmp11 >= 65 && tmp11 <= 90;
                      tmp12 = tmp13;
                    }
                    if (tmp12) {
                      parseTagResult = self.parseTag(arg0, arg1);
                      if (parseTagResult.err) {
                        return parseTagResult;
                      } else {
                        arr2 = items.push(parseTagResult.val);
                      }
                    }
                  }
                }
                parseLiteralResult = self.parseLiteral(arg0, arg1);
                if (parseLiteralResult.err) {
                  return parseLiteralResult;
                } else {
                  arr3 = items.push(parseLiteralResult.val);
                }
              } else if ("plural" === arg1) {
                clonePositionResult1 = self.clonePosition();
                bumpResult = self.bump();
                obj = { type: null, location: null };
                tmp4 = closure_1_0;
                tmp5 = closure_1_1;
                push = items.push;
                obj.type = closure_1_0(closure_1_1[1]).TYPE.pound;
                obj4 = { start: null, end: null };
                obj4.start = clonePositionResult1;
                obj4.end = self.clonePosition();
                obj.location = obj4;
                arr4 = push(obj);
              }
            } else if (arg0 > 0) {
              break;
            }
            break;
          }
          break;
        }
      }
      return { val: items, err: null };
    }
    parseTag(arg0, arg1) {
      self = this;
      clonePositionResult = this.clonePosition();
      bumpResult = this.bump();
      parseTagNameResult = this.parseTagName();
      bumpSpaceResult = this.bumpSpace();
      if (this.bumpIf("/>")) {
        obj1 = { val: null, err: null };
        obj12 = { type: null, value: null, location: null };
        tmp26 = closure_1_0;
        tmp27 = closure_1_1;
        obj12.type = closure_1_0(closure_1_1[1]).TYPE.literal;
        str3 = "<";
        concat = "<".concat;
        obj12.value = "<".concat(parseTagNameResult, "/>");
        obj13 = { start: null, end: null };
        obj13.start = clonePositionResult;
        obj13.end = self.clonePosition();
        obj12.location = obj13;
        obj1.val = obj12;
        return obj1;
      } else {
        str = ">";
        if (self.bumpIf(">")) {
          tmp7 = arg0;
          tmp8 = arg1;
          num = 1;
          flag = true;
          parseMessageResult = self.parseMessage(arg0 + 1, arg1, true);
          if (parseMessageResult.err) {
            return parseMessageResult;
          } else {
            val = parseMessageResult.val;
            clonePositionResult1 = self.clonePosition();
            str2 = "</";
            if (self.bumpIf("</")) {
              if (!self.isEOF()) {
                charResult = self.char();
                num2 = 97;
                tmp14 = charResult >= 97;
                if (tmp14) {
                  num3 = 122;
                  tmp14 = charResult <= 122;
                }
                if (!tmp14) {
                  num4 = 65;
                  tmp15 = charResult >= 65;
                  if (tmp15) {
                    num5 = 90;
                    tmp15 = charResult <= 90;
                  }
                  tmp14 = tmp15;
                }
                if (tmp14) {
                  clonePositionResult2 = self.clonePosition();
                  if (parseTagNameResult !== self.parseTagName()) {
                    tmp22 = closure_1_0;
                    tmp23 = closure_1_1;
                    error4 = self.error;
                    UNMATCHED_CLOSING_TAG = closure_1_0(closure_1_1[2]).ErrorKind.UNMATCHED_CLOSING_TAG;
                    obj14 = { start: null, end: null };
                    obj14.start = clonePositionResult2;
                    obj14.end = self.clonePosition();
                    error4Result = error4(UNMATCHED_CLOSING_TAG, obj14);
                  } else {
                    bumpSpaceResult1 = self.bumpSpace();
                    if (self.bumpIf(">")) {
                      obj15 = { val: null, err: null };
                      element = { type: null, value: null, children: null, location: null };
                      tmp20 = closure_1_0;
                      tmp21 = closure_1_1;
                      element.type = closure_1_0(closure_1_1[1]).TYPE.tag;
                      element.value = parseTagNameResult;
                      element.children = val;
                      obj16 = { start: null, end: null };
                      obj16.start = clonePositionResult;
                      obj16.end = self.clonePosition();
                      element.location = obj16;
                      obj15.val = element;
                      error4Result = obj15;
                    } else {
                      tmp17 = closure_1_0;
                      tmp18 = closure_1_1;
                      error3 = self.error;
                      INVALID_TAG2 = closure_1_0(closure_1_1[2]).ErrorKind.INVALID_TAG;
                      obj17 = { start: null, end: null };
                      obj17.start = clonePositionResult1;
                      obj17.end = self.clonePosition();
                      error4Result = error3(INVALID_TAG2, obj17);
                    }
                  }
                  return error4Result;
                }
              }
              tmp24 = closure_1_0;
              tmp25 = closure_1_1;
              error5 = self.error;
              INVALID_TAG3 = closure_1_0(closure_1_1[2]).ErrorKind.INVALID_TAG;
              obj18 = { start: null, end: null };
              obj18.start = clonePositionResult1;
              obj18.end = self.clonePosition();
              return error5(INVALID_TAG3, obj18);
            } else {
              tmp11 = closure_1_0;
              tmp12 = closure_1_1;
              error2 = self.error;
              UNCLOSED_TAG = closure_1_0(closure_1_1[2]).ErrorKind.UNCLOSED_TAG;
              obj19 = { start: null, end: null };
              obj19.start = clonePositionResult;
              obj19.end = self.clonePosition();
              return error2(UNCLOSED_TAG, obj19);
            }
          }
        } else {
          tmp5 = closure_1_0;
          tmp6 = closure_1_1;
          error = self.error;
          INVALID_TAG = closure_1_0(closure_1_1[2]).ErrorKind.INVALID_TAG;
          obj = { start: null, end: null };
          obj.start = clonePositionResult;
          obj.end = self.clonePosition();
          return error(INVALID_TAG, obj);
        }
      }
    }
    parseTagName() {
      self = this;
      offsetResult = this.offset();
      bumpResult = this.bump();
      if (!this.isEOF()) {
        charResult = self.char();
        num = 45;
        if (45 !== charResult) {
          num63 = 46;
          if (46 !== charResult) {
            num64 = 48;
            if (charResult < 48) {
              num3 = 95;
              if (95 !== charResult) {
                num65 = 97;
                if (charResult < 97) {
                  num5 = 65;
                  if (charResult < 65) {
                    num7 = 183;
                    if (183 != charResult) {
                      num66 = 192;
                      if (charResult < 192) {
                        num9 = 216;
                        if (charResult < 216) {
                          num11 = 248;
                          if (charResult < 248) {
                            num13 = 895;
                            if (charResult < 895) {
                              num15 = 8204;
                              if (charResult < 8204) {
                                num17 = 8255;
                                if (charResult < 8255) {
                                  num19 = 8304;
                                  if (charResult < 8304) {
                                    num21 = 11264;
                                    if (charResult < 11264) {
                                      num23 = 12289;
                                      if (charResult < 12289) {
                                        num25 = 63744;
                                        if (charResult < 63744) {
                                          num27 = 65008;
                                          if (charResult < 65008) {
                                            num29 = 65536;
                                            if (charResult >= 65536) {
                                              num67 = 983039;
                                            }
                                          } else {
                                            num28 = 65533;
                                          }
                                        } else {
                                          num26 = 64975;
                                        }
                                      } else {
                                        num24 = 55295;
                                      }
                                    } else {
                                      num22 = 12271;
                                    }
                                  } else {
                                    num20 = 8591;
                                  }
                                } else {
                                  num18 = 8256;
                                }
                              } else {
                                num16 = 8205;
                              }
                            } else {
                              num14 = 8191;
                            }
                          } else {
                            num12 = 893;
                          }
                        } else {
                          num10 = 246;
                        }
                      } else {
                        num8 = 214;
                      }
                    }
                  } else {
                    num6 = 90;
                  }
                } else {
                  num4 = 122;
                }
              }
            } else {
              num2 = 57;
            }
          }
        }
        bumpResult1 = self.bump();
        while (!self.isEOF()) {
          charResult1 = self.char();
          if (45 === charResult1) {
            continue;
          } else {
            num30 = 46;
            if (46 === charResult1) {
              continue;
            } else {
              num31 = 48;
              if (charResult1 < 48) {
                num33 = 95;
                if (95 === charResult1) {
                  continue;
                } else {
                  num34 = 97;
                  if (charResult1 < 97) {
                    num36 = 65;
                    if (charResult1 < 65) {
                      num38 = 183;
                      if (183 == charResult1) {
                        continue;
                      } else {
                        num39 = 192;
                        if (charResult1 < 192) {
                          num41 = 216;
                          if (charResult1 < 216) {
                            num43 = 248;
                            if (charResult1 < 248) {
                              num45 = 895;
                              if (charResult1 < 895) {
                                num47 = 8204;
                                if (charResult1 < 8204) {
                                  num49 = 8255;
                                  if (charResult1 < 8255) {
                                    num51 = 8304;
                                    if (charResult1 < 8304) {
                                      num53 = 11264;
                                      if (charResult1 < 11264) {
                                        num55 = 12289;
                                        if (charResult1 < 12289) {
                                          num57 = 63744;
                                          if (charResult1 < 63744) {
                                            num59 = 65008;
                                            if (charResult1 < 65008) {
                                              num61 = 65536;
                                              if (charResult1 < 65536) {
                                                break;
                                              } else {
                                                num62 = 983039;
                                                if (charResult1 > 983039) {
                                                  break;
                                                }
                                              }
                                            } else {
                                              num60 = 65533;
                                            }
                                            continue;
                                          } else {
                                            num58 = 64975;
                                          }
                                          continue;
                                        } else {
                                          num56 = 55295;
                                        }
                                        continue;
                                      } else {
                                        num54 = 12271;
                                      }
                                      continue;
                                    } else {
                                      num52 = 8591;
                                    }
                                    continue;
                                  } else {
                                    num50 = 8256;
                                  }
                                  continue;
                                } else {
                                  num48 = 8205;
                                }
                                continue;
                              } else {
                                num46 = 8191;
                              }
                              continue;
                            } else {
                              num44 = 893;
                            }
                            continue;
                          } else {
                            num42 = 246;
                          }
                          continue;
                        } else {
                          num40 = 214;
                        }
                        continue;
                      }
                      continue;
                    } else {
                      num37 = 90;
                    }
                    continue;
                  } else {
                    num35 = 122;
                  }
                  continue;
                }
                continue;
              } else {
                num32 = 57;
              }
              continue;
            }
            continue;
          }
          continue;
        }
      }
      message = self.message;
      return message.slice(offsetResult, self.offset());
    }
    parseLiteral(arg0, arg1) {
      self = this;
      str = "";
      clonePositionResult = this.clonePosition();
      while (true) {
        tryParseQuoteResult = self.tryParseQuote(arg1);
        tmp3 = str;
        if (tryParseQuoteResult) {
          str = `${tmp2}`;
          continue;
        } else {
          tryParseUnquotedResult = self.tryParseUnquoted(arg0, arg1);
          if (tryParseUnquotedResult) {
            str = `${tmp2}${tmp4}`;
            continue;
          } else {
            result = self.tryParseLeftAngleBracket();
            if (!result) {
              break;
            } else {
              str = `${tmp2}${tmp4}${tmp5}`;
              continue;
            }
          }
          continue;
        }
      }
      obj = { start: clonePositionResult, end: self.clonePosition() };
      obj1 = { val: null, err: null };
      obj4 = { type: closure_1_0(closure_1_1[1]).TYPE.literal, value: str, location: obj };
      obj1.val = obj4;
      return obj1;
    }
    tryParseLeftAngleBracket() {
      self = this;
      tmp = null;
      if (!this.isEOF()) {
        num = 60;
        tmp = null;
        if (60 === self.char()) {
          if (self.ignoreTag) {
            bumpResult = self.bump();
            tmp = "<";
          } else {
            tmp2 = self.peek() || 0;
            num2 = 97;
            tmp3 = tmp2 >= 97;
            if (tmp3) {
              num3 = 122;
              tmp3 = tmp2 <= 122;
            }
            if (!tmp3) {
              num4 = 65;
              tmp4 = tmp2 >= 65;
              if (tmp4) {
                num5 = 90;
                tmp4 = tmp2 <= 90;
              }
              tmp3 = tmp4;
            }
            if (!tmp3) {
              num6 = 47;
              tmp3 = 47 === tmp2;
            }
            tmp = null;
          }
        }
      }
      return tmp;
    }
    tryParseQuote(arg0) {
      self = this;
      if (!this.isEOF()) {
        num = 39;
        if (39 === self.char()) {
          peekResult = self.peek();
          if (39 === peekResult) {
            bumpResult = self.bump();
            bumpResult1 = self.bump();
            str3 = "'";
            return "'";
          } else {
            num6 = 123;
            if (123 !== peekResult) {
              num2 = 60;
              if (60 !== peekResult) {
                num3 = 62;
                if (62 !== peekResult) {
                  num4 = 125;
                  if (125 !== peekResult) {
                    num5 = 35;
                    if (35 === peekResult) {
                      tmp2 = arg0;
                      str = "plural";
                      if ("plural" !== arg0) {
                        str2 = "selectordinal";
                        if ("selectordinal" !== arg0) {
                          tmp3 = null;
                          return null;
                        }
                      }
                    } else {
                      tmp = null;
                      return null;
                    }
                  }
                }
              }
            }
            bumpResult2 = self.bump();
            items = [];
            items[0] = self.char();
            bumpResult3 = self.bump();
            if (!self.isEOF()) {
              while (true) {
                charResult = self.char();
                if (39 === charResult) {
                  if (39 !== self.peek()) {
                    break;
                  } else {
                    arr1 = items.push(39);
                    bumpResult4 = self.bump();
                  }
                } else {
                  arr2 = items.push(charResult);
                }
                bumpResult5 = self.bump();
              }
              bumpResult6 = self.bump();
            }
            tmp12 = closure_1_7;
            return closure_1_7.apply(undefined, items);
          }
        }
      }
      return null;
    }
    tryParseUnquoted(arg0, arg1) {
      self = this;
      if (this.isEOF()) {
        return null;
      } else {
        charResult = self.char();
        num = 60;
        tmp2 = null;
        if (60 !== charResult) {
          num2 = 123;
          tmp2 = null;
          if (123 !== charResult) {
            num3 = 35;
            if (35 !== charResult) {
              num4 = 125;
              if (125 !== charResult) {
                bumpResult = self.bump();
                tmp6 = closure_1_7;
                tmp2 = closure_1_7(charResult);
              } else {
                tmp4 = arg0;
                num5 = 0;
                tmp2 = null;
              }
            } else {
              tmp3 = arg1;
              str = "plural";
              tmp2 = null;
              if ("plural" !== arg1) {
                str2 = "selectordinal";
                tmp2 = null;
              }
            }
          }
        }
        return tmp2;
      }
    }
    parseArgument(arg0, arg1) {
      self = this;
      clonePositionResult = this.clonePosition();
      bumpResult = this.bump();
      bumpSpaceResult = this.bumpSpace();
      if (this.isEOF()) {
        tmp28 = closure_1_0;
        tmp29 = closure_1_1;
        error6 = self.error;
        EXPECT_ARGUMENT_CLOSING_BRACE3 = closure_1_0(closure_1_1[2]).ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE;
        obj1 = { start: null, end: null };
        obj1.start = clonePositionResult;
        obj1.end = self.clonePosition();
        return error6(EXPECT_ARGUMENT_CLOSING_BRACE3, obj1);
      } else {
        num = 125;
        if (125 === self.char()) {
          bumpResult1 = self.bump();
          tmp26 = closure_1_0;
          tmp27 = closure_1_1;
          error5 = self.error;
          EMPTY_ARGUMENT = closure_1_0(closure_1_1[2]).ErrorKind.EMPTY_ARGUMENT;
          obj10 = { start: null, end: null };
          obj10.start = clonePositionResult;
          obj10.end = self.clonePosition();
          return error5(EMPTY_ARGUMENT, obj10);
        } else {
          value = self.parseIdentifierIfPossible().value;
          if (value) {
            bumpSpaceResult1 = self.bumpSpace();
            if (self.isEOF()) {
              tmp23 = closure_1_0;
              tmp24 = closure_1_1;
              error4 = self.error;
              EXPECT_ARGUMENT_CLOSING_BRACE2 = closure_1_0(closure_1_1[2]).ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE;
              obj11 = { start: null, end: null };
              obj11.start = clonePositionResult;
              obj11.end = self.clonePosition();
              return error4(EXPECT_ARGUMENT_CLOSING_BRACE2, obj11);
            } else {
              charResult = self.char();
              if (125 === charResult) {
                bumpResult2 = self.bump();
                obj12 = { val: null, err: null };
                obj13 = { type: null, value: null, location: null };
                tmp21 = closure_1_0;
                tmp22 = closure_1_1;
                obj13.type = closure_1_0(closure_1_1[1]).TYPE.argument;
                obj13.value = value;
                obj14 = { start: null, end: null };
                obj14.start = clonePositionResult;
                obj14.end = self.clonePosition();
                obj13.location = obj14;
                obj12.val = obj13;
                return obj12;
              } else {
                num2 = 44;
                if (44 === charResult) {
                  bumpResult3 = self.bump();
                  bumpSpaceResult2 = self.bumpSpace();
                  if (self.isEOF()) {
                    tmp18 = closure_1_0;
                    tmp19 = closure_1_1;
                    error3 = self.error;
                    EXPECT_ARGUMENT_CLOSING_BRACE = closure_1_0(closure_1_1[2]).ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE;
                    obj15 = { start: null, end: null };
                    obj15.start = clonePositionResult;
                    obj15.end = self.clonePosition();
                    error3Result = error3(EXPECT_ARGUMENT_CLOSING_BRACE, obj15);
                  } else {
                    tmp12 = arg0;
                    tmp13 = arg1;
                    tmp14 = self;
                    tmp15 = value;
                    tmp16 = clonePositionResult;
                    error3Result = self.parseArgumentOptions(arg0, arg1, value, clonePositionResult);
                  }
                  return error3Result;
                } else {
                  tmp8 = closure_1_0;
                  tmp9 = closure_1_1;
                  error2 = self.error;
                  MALFORMED_ARGUMENT2 = closure_1_0(closure_1_1[2]).ErrorKind.MALFORMED_ARGUMENT;
                  obj16 = { start: null, end: null };
                  obj16.start = clonePositionResult;
                  obj16.end = self.clonePosition();
                  return error2(MALFORMED_ARGUMENT2, obj16);
                }
              }
            }
          } else {
            tmp4 = closure_1_0;
            tmp5 = closure_1_1;
            error = self.error;
            MALFORMED_ARGUMENT = closure_1_0(closure_1_1[2]).ErrorKind.MALFORMED_ARGUMENT;
            obj = { start: null, end: null };
            obj.start = clonePositionResult;
            obj.end = self.clonePosition();
            return error(MALFORMED_ARGUMENT, obj);
          }
        }
      }
    }
    parseIdentifierIfPossible() {
      clonePositionResult = this.clonePosition();
      offsetResult = this.offset();
      arr = closure_1_5(this.message, offsetResult);
      bumpToResult = this.bumpTo(offsetResult + arr.length);
      obj = { value: arr, location: null };
      obj1 = { start: clonePositionResult, end: this.clonePosition() };
      obj.location = obj1;
      return obj;
    }
    parseArgumentOptions(arg0, arg1, arg2, arg3) {
      self = this;
      clonePositionResult = this.clonePosition();
      value = this.parseIdentifierIfPossible().value;
      clonePositionResult1 = this.clonePosition();
      if ("" === value) {
        tmp65 = closure_1_0;
        tmp66 = closure_1_1;
        obj1 = { start: null, end: null };
        obj1.start = clonePositionResult;
        obj1.end = clonePositionResult1;
        return self.error(closure_1_0(closure_1_1[2]).ErrorKind.EXPECT_ARGUMENT_TYPE, obj1);
      } else {
        tmp67 = arg2;
        tmp68 = arg3;
        str10 = "number";
        if ("number" !== value) {
          str11 = "date";
          if ("date" !== value) {
            str12 = "time";
            if ("time" !== value) {
              str13 = "plural";
              if ("plural" !== value) {
                str = "selectordinal";
                if ("selectordinal" !== value) {
                  str2 = "select";
                  if ("select" !== value) {
                    tmp3 = closure_1_0;
                    tmp4 = closure_1_1;
                    obj = { start: null, end: null };
                    obj.start = clonePositionResult;
                    obj.end = clonePositionResult1;
                    return self.error(closure_1_0(closure_1_1[2]).ErrorKind.INVALID_ARGUMENT_TYPE, obj);
                  }
                }
              }
              clonePositionResult2 = self.clonePosition();
              bumpSpaceResult = self.bumpSpace();
              str3 = ",";
              if (self.bumpIf(",")) {
                bumpSpaceResult1 = self.bumpSpace();
                iter = self.parseIdentifierIfPossible();
                str4 = "select";
                num = 0;
                result1 = iter;
                if ("select" !== value) {
                  str14 = "offset";
                  num = 0;
                  result1 = iter;
                  if ("offset" === iter.value) {
                    str15 = ":";
                    if (self.bumpIf(":")) {
                      bumpSpaceResult2 = self.bumpSpace();
                      tmp15 = closure_1_0;
                      tmp16 = closure_1_1;
                      tryParseDecimalInteger = self.tryParseDecimalInteger;
                      result = tryParseDecimalInteger(closure_1_0(closure_1_1[2]).ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, closure_1_0(closure_1_1[2]).ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                      if (result.err) {
                        return result;
                      } else {
                        bumpSpaceResult3 = self.bumpSpace();
                        result1 = self.parseIdentifierIfPossible();
                        num = result.val;
                      }
                    } else {
                      tmp11 = closure_1_0;
                      tmp12 = closure_1_1;
                      error2 = self.error;
                      EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = closure_1_0(closure_1_1[2]).ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE;
                      clonePositionResult3 = self.clonePosition();
                      obj23 = { start: null, end: null };
                      obj23.start = clonePositionResult3;
                      obj23.end = self.clonePosition();
                      return error2(EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, obj23);
                    }
                  }
                }
                tmp19 = arg0;
                tmp20 = arg1;
                tmp21 = self;
                tmp22 = value;
                tmp23 = result1;
                result2 = self.tryParsePluralOrSelectOptions(arg0, value, arg1, result1);
                if (result2.err) {
                  return result2;
                } else {
                  result3 = self.tryParseArgumentClose(arg3);
                  if (result3.err) {
                    return result3;
                  } else {
                    obj24 = { start: null, end: null };
                    obj24.start = arg3;
                    obj24.end = self.clonePosition();
                    if ("select" === value) {
                      obj25 = { val: null, err: null };
                      obj26 = { type: null, value: null, options: null, location: null };
                      tmp29 = closure_1_0;
                      tmp30 = closure_1_1;
                      obj26.type = closure_1_0(closure_1_1[1]).TYPE.select;
                      obj26.value = arg2;
                      tmp31 = closure_1_8;
                      obj26.options = closure_1_8(result2.val);
                      obj26.location = obj24;
                      obj25.val = obj26;
                      obj28 = obj25;
                    } else {
                      obj27 = { type: null, value: null, options: null, offset: null, pluralType: null, location: null };
                      tmp26 = closure_1_0;
                      tmp27 = closure_1_1;
                      obj27.type = closure_1_0(closure_1_1[1]).TYPE.plural;
                      obj27.value = arg2;
                      tmp28 = closure_1_8;
                      obj27.options = closure_1_8(result2.val);
                      obj27.offset = num;
                      str5 = "ordinal";
                      if ("plural" === value) {
                        str5 = "cardinal";
                      }
                      obj28 = { val: null, err: null };
                      obj27.pluralType = str5;
                      obj27.location = obj24;
                      obj28.val = obj27;
                    }
                    return obj28;
                  }
                }
              } else {
                tmp7 = closure_1_0;
                tmp8 = closure_1_1;
                error = self.error;
                EXPECT_SELECT_ARGUMENT_OPTIONS = closure_1_0(closure_1_1[2]).ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS;
                obj2 = closure_1_0(closure_1_1[5]);
                obj29 = { start: null, end: null };
                obj29.start = clonePositionResult2;
                obj29.end = obj2.__assign({}, clonePositionResult2);
                return error(EXPECT_SELECT_ARGUMENT_OPTIONS, obj29);
              }
            }
          }
        }
        bumpSpaceResult4 = self.bumpSpace();
        str6 = ",";
        tmp33 = null;
        tmp34 = null;
        if (self.bumpIf(",")) {
          bumpSpaceResult5 = self.bumpSpace();
          clonePositionResult4 = self.clonePosition();
          result4 = self.parseSimpleArgStyleIfPossible();
          if (result4.err) {
            return result4;
          } else {
            tmp38 = closure_1_11;
            arr = closure_1_11(result4.val);
            num2 = 0;
            if (0 === arr.length) {
              tmp62 = closure_1_0;
              tmp63 = closure_1_1;
              error3 = self.error;
              EXPECT_ARGUMENT_STYLE = closure_1_0(closure_1_1[2]).ErrorKind.EXPECT_ARGUMENT_STYLE;
              clonePositionResult5 = self.clonePosition();
              obj30 = { start: null, end: null };
              obj30.start = clonePositionResult5;
              obj30.end = self.clonePosition();
              return error3(EXPECT_ARGUMENT_STYLE, obj30);
            } else {
              obj31 = { style: null, styleLocation: null };
              obj31.style = arr;
              obj32 = { start: null, end: null };
              obj32.start = clonePositionResult4;
              obj32.end = self.clonePosition();
              obj31.styleLocation = obj32;
              tmp34 = obj31;
            }
          }
        }
        result5 = self.tryParseArgumentClose(arg3);
        if (result5.err) {
          return result5;
        } else {
          obj33 = { start: null, end: null };
          obj33.start = arg3;
          obj33.end = self.clonePosition();
          if (tmp34) {
            style = undefined;
            tmp40 = closure_1_6;
            if (null != tmp34) {
              style = tmp34.style;
            }
            num3 = 0;
            str7 = "::";
            if (tmp40(style, "::", 0)) {
              tmp50 = closure_1_10;
              style1 = tmp34.style;
              num4 = 2;
              arr3 = closure_1_10(style1.slice(2));
              if ("number" === value) {
                result6 = self.parseNumberSkeletonFromString(arr3, tmp34.styleLocation);
                tmp59 = result6;
                if (!result6.err) {
                  obj34 = { val: null, err: null };
                  obj35 = { type: null, value: null, location: null, style: null };
                  tmp60 = closure_1_0;
                  tmp61 = closure_1_1;
                  obj35.type = closure_1_0(closure_1_1[1]).TYPE.number;
                  obj35.value = arg2;
                  obj35.location = obj33;
                  obj35.style = result6.val;
                  obj34.val = obj35;
                  tmp59 = obj34;
                }
                return tmp59;
              } else if (0 === arr3.length) {
                tmp56 = closure_1_0;
                tmp57 = closure_1_1;
                return self.error(closure_1_0(closure_1_1[2]).ErrorKind.EXPECT_DATE_TIME_SKELETON, obj33);
              } else {
                bestPattern = arr3;
                if (self.locale) {
                  tmp51 = closure_1_0;
                  tmp52 = closure_1_1;
                  bestPattern = closure_1_0(closure_1_1[3]).getBestPattern(arr3, self.locale);
                }
                obj36 = { type: null, pattern: null, location: null, parsedOptions: null };
                tmp54 = closure_1_0;
                tmp55 = closure_1_1;
                obj36.type = closure_1_0(closure_1_1[1]).SKELETON_TYPE.dateTime;
                obj36.pattern = bestPattern;
                obj36.location = tmp34.styleLocation;
                if (self.shouldParseSkeletons) {
                  result7 = tmp54(tmp55[4]).parseDateTimeSkeleton(bestPattern);
                } else {
                  result7 = {};
                }
                obj36.parsedOptions = result7;
                str9 = "date";
                if ("date" === value) {
                  time2 = tmp54(tmp55[1]).TYPE.date;
                } else {
                  time2 = tmp54(tmp55[1]).TYPE.time;
                }
                obj37 = { val: null, err: null };
                obj38 = { type: null, value: null, location: null, style: null };
                obj38.type = time2;
                obj38.value = arg2;
                obj38.location = obj33;
                obj38.style = obj36;
                obj37.val = obj38;
                return obj37;
              }
            }
          }
          if ("number" === value) {
            tmp46 = closure_1_0;
            tmp47 = closure_1_1;
            time = closure_1_0(closure_1_1[1]).TYPE.number;
          } else {
            str8 = "date";
            if ("date" === value) {
              tmp44 = closure_1_0;
              tmp45 = closure_1_1;
              time = closure_1_0(closure_1_1[1]).TYPE.date;
            } else {
              tmp42 = closure_1_0;
              tmp43 = closure_1_1;
              time = closure_1_0(closure_1_1[1]).TYPE.time;
            }
          }
          obj39 = { type: null, value: null, location: null, style: null };
          obj39.type = time;
          obj39.value = arg2;
          obj39.location = obj33;
          style2 = undefined;
          if (null != tmp34) {
            style2 = tmp34.style;
          }
          tmp49 = null;
          if (null !== style2) {
            tmp49 = null;
            if (undefined !== style2) {
              tmp49 = style2;
            }
          }
          obj40 = { val: null, err: null };
          obj39.style = tmp49;
          obj40.val = obj39;
          return obj40;
        }
      }
    }
    tryParseArgumentClose(arg0) {
      self = this;
      if (!this.isEOF()) {
        num = 125;
        if (125 === self.char()) {
          bumpResult = self.bump();
          errorResult = { val: true, err: null };
        }
        return errorResult;
      }
      error = self.error;
      EXPECT_ARGUMENT_CLOSING_BRACE = closure_1_0(closure_1_1[2]).ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE;
      obj1 = { start: arg0, end: self.clonePosition() };
      errorResult = error(EXPECT_ARGUMENT_CLOSING_BRACE, obj1);
      return;
    }
    parseSimpleArgStyleIfPossible() {
      self = this;
      clonePositionResult = this.clonePosition();
      num = 0;
      if (!this.isEOF()) {
        while (true) {
          charResult = self.char();
          tmp3 = num;
          if (39 === charResult) {
            bumpResult = self.bump();
            clonePositionResult1 = self.clonePosition();
            if (self.bumpUntil("'")) {
              bumpResult1 = self.bump();
              sum = num;
            } else {
              tmp9 = closure_1_0;
              tmp10 = closure_1_1;
              error = self.error;
              UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = closure_1_0(closure_1_1[2]).ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE;
              obj1 = { start: null, end: null };
              obj1.start = clonePositionResult1;
              obj1.end = self.clonePosition();
              return error(UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, obj1);
            }
          } else if (123 === charResult) {
            sum = num + 1;
            bumpResult2 = self.bump();
          } else if (125 === charResult) {
            if (0 >= num) {
              break;
            } else {
              sum = num - 1;
            }
          } else {
            bumpResult3 = self.bump();
            sum = num;
          }
          num = sum;
        }
        obj = { val: null, err: null };
        message = self.message;
        obj.val = message.slice(clonePositionResult.offset, self.offset());
        return obj;
      }
      obj4 = { val: null, err: null };
      message1 = self.message;
      obj4.val = message1.slice(clonePositionResult.offset, self.offset());
      return obj4;
    }
    parseNumberSkeletonFromString(arg0, arg1) {
      self = this;
      try {
        tmp = arg0;
        tmp2 = closure_1_0;
        tmp3 = closure_1_0;
        tmp4 = closure_1_1;
        tmp5 = closure_1_1;
        result = closure_1_0(closure_1_1[4]).parseNumberSkeletonFromString(arg0);
        obj = { type: null, tokens: null, location: null, parsedOptions: null };
        tmp7 = tmp2;
        tmp8 = tmp4;
        obj.type = tmp3(tmp5[1]).SKELETON_TYPE.number;
        tmp9 = result;
        obj.tokens = result;
        obj.location = arg1;
        if (self.shouldParseSkeletons) {
          tmp10 = tmp2;
          tmp11 = tmp4;
          parseNumberSkeletonResult = tmp3(tmp5[4]).parseNumberSkeleton(result);
        } else {
          parseNumberSkeletonResult = {};
        }
        obj1 = { val: null, err: null };
        obj.parsedOptions = parseNumberSkeletonResult;
        obj1.val = obj;
        return obj1;
      } catch (err) {
        tmp12 = closure_1_0;
        tmp13 = closure_1_0;
        tmp14 = closure_1_1;
        tmp15 = closure_1_1;
        return self.error(closure_1_0(closure_1_1[2]).ErrorKind.INVALID_NUMBER_SKELETON, arg1);
      }
      return;
    }
    tryParsePluralOrSelectOptions(arg0, arg1, arg2, arg3) {
      self = this;
      items = [];
      set = new Set();
      ({ value, location: _location } = arg3);
      tmp = "select" === arg1;
      flag = false;
      while (true) {
        tmp2 = _location;
        substr = value;
        tmp4 = flag;
        if (0 === value.length) {
          clonePositionResult = self.clonePosition();
          if (tmp) {
            break;
          } else if (!self.bumpIf("=")) {
            break;
          } else {
            tmp5 = closure_1_0;
            tmp6 = closure_1_1;
            tryParseDecimalInteger = self.tryParseDecimalInteger;
            result = tryParseDecimalInteger(closure_1_0(closure_1_1[2]).ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, closure_1_0(closure_1_1[2]).ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (result.err) {
              return result;
            } else {
              obj1 = { start: null, end: null };
              obj1.start = clonePositionResult;
              obj1.end = self.clonePosition();
              message = self.message;
              substr = message.slice(clonePositionResult.offset, self.offset());
              tmp2 = obj1;
            }
          }
        }
        tmp8 = substr;
        if (set.has(substr)) {
          error2 = self.error;
          if ("select" === arg1) {
            tmp24 = closure_1_0;
            tmp25 = closure_1_1;
            DUPLICATE_PLURAL_ARGUMENT_SELECTOR = closure_1_0(closure_1_1[2]).ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR;
          } else {
            tmp22 = closure_1_0;
            tmp23 = closure_1_1;
            DUPLICATE_PLURAL_ARGUMENT_SELECTOR = closure_1_0(closure_1_1[2]).ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR;
          }
          return error2(DUPLICATE_PLURAL_ARGUMENT_SELECTOR, tmp2);
        } else {
          flag2 = flag;
          if ("other" === substr) {
            flag2 = true;
          }
          bumpSpaceResult = self.bumpSpace();
          clonePositionResult1 = self.clonePosition();
          if (self.bumpIf("{")) {
            parseMessageResult = self.parseMessage(arg0 + 1, arg1, arg2);
            if (parseMessageResult.err) {
              return parseMessageResult;
            } else {
              result1 = self.tryParseArgumentClose(clonePositionResult1);
              if (result1.err) {
                return result1;
              } else {
                items1 = [, ];
                items1[0] = substr;
                obj9 = { value: null, location: null };
                obj9.value = parseMessageResult.val;
                push = items.push;
                obj10 = { start: null, end: null };
                obj10.start = clonePositionResult1;
                obj10.end = self.clonePosition();
                obj9.location = obj10;
                items1[1] = obj9;
                arr1 = push(items1);
                addResult = set.add(substr);
                bumpSpaceResult1 = self.bumpSpace();
                result2 = self.parseIdentifierIfPossible();
                ({ value, location: _location } = result2);
                flag = flag2;
                continue;
              }
            }
          } else {
            error = self.error;
            if ("select" === arg1) {
              tmp13 = closure_1_0;
              tmp14 = closure_1_1;
              EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = closure_1_0(closure_1_1[2]).ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT;
            } else {
              tmp11 = closure_1_0;
              tmp12 = closure_1_1;
              EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = closure_1_0(closure_1_1[2]).ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT;
            }
            clonePositionResult2 = self.clonePosition();
            obj11 = { start: null, end: null };
            obj11.start = clonePositionResult2;
            obj11.end = self.clonePosition();
            return error(EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, obj11);
          }
        }
      }
      if (0 === items.length) {
        tmp30 = closure_1_0;
        tmp31 = closure_1_1;
        error4 = self.error;
        ErrorKind = closure_1_0(closure_1_1[2]).ErrorKind;
        tmp32 = tmp ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR;
        clonePositionResult3 = self.clonePosition();
        obj12 = { start: null, end: null };
        obj12.start = clonePositionResult3;
        obj12.end = self.clonePosition();
        error4Result = error4(tmp32, obj12);
      } else {
        if (self.requiresOtherClause) {
          if (!flag) {
            tmp26 = closure_1_0;
            tmp27 = closure_1_1;
            error3 = self.error;
            MISSING_OTHER_CLAUSE = closure_1_0(closure_1_1[2]).ErrorKind.MISSING_OTHER_CLAUSE;
            clonePositionResult4 = self.clonePosition();
            obj13 = { start: null, end: null };
            obj13.start = clonePositionResult4;
            obj13.end = self.clonePosition();
            error4Result = error3(MISSING_OTHER_CLAUSE, obj13);
          }
        }
        obj14 = { val: null, err: null };
        obj14.val = items;
        error4Result = obj14;
      }
      return error4Result;
    }
    tryParseDecimalInteger(arg0, arg1) {
      self = this;
      clonePositionResult = this.clonePosition();
      num = 1;
      num2 = 1;
      if (!this.bumpIf("+")) {
        str = "-";
        if (self.bumpIf("-")) {
          num = -1;
        }
        num2 = num;
      }
      num3 = 0;
      flag = false;
      num4 = 0;
      flag2 = false;
      if (!self.isEOF()) {
        charResult = self.char();
        tmp3 = num3;
        tmp4 = flag;
        num4 = num3;
        flag2 = flag;
        while (charResult >= 48) {
          num4 = num3;
          flag2 = flag;
          if (charResult > 57) {
            break;
          } else {
            num3 = 10 * num3 + (charResult - 48);
            bumpResult = self.bump();
            flag = true;
            num4 = num3;
            flag2 = true;
            if (self.isEOF()) {
              break;
            }
          }
        }
      }
      obj = { start: clonePositionResult, end: self.clonePosition() };
      if (flag2) {
        tmp8 = closure_1_4;
        result = num4 * num2;
        if (closure_1_4(result)) {
          obj1 = { val: null, err: null };
          obj1.val = result;
          errorResult = obj1;
        } else {
          tmp10 = arg1;
          errorResult = self.error(arg1, obj);
        }
        errorResult1 = errorResult;
      } else {
        tmp6 = arg0;
        errorResult1 = self.error(arg0, obj);
      }
      return errorResult1;
    }
    offset() {
      return this.position.offset;
    }
    isEOF() {
      return this.offset() === this.message.length;
    }
    clonePosition() {
      obj = { offset: this.position.offset, line: this.position.line, column: this.position.column };
      return obj;
    }
    char() {
      offset = this.position.offset;
      if (offset >= this.message.length) {
        tmp5 = globalThis;
        _Error2 = Error;
        str3 = "out of bound";
        throw Error("out of bound");
      } else {
        tmp2 = closure_1_9;
        tmp3 = closure_1_9(tmp.message, offset);
        if (undefined === tmp3) {
          tmp4 = globalThis;
          _Error = Error;
          str = "Offset ";
          concat = "Offset ".concat;
          str2 = " is at invalid UTF-16 code unit boundary";
          throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
        } else {
          return tmp3;
        }
      }
    }
    error(arg0, arg1) {
      obj = { val: null, err: null };
      obj1 = { kind: arg0, message: this.message, location: arg1 };
      obj.err = obj1;
      return obj;
    }
    bump() {
      self = this;
      if (!this.isEOF()) {
        charResult = self.char();
        num = 10;
        if (10 === charResult) {
          position3 = self.position;
          num5 = 1;
          position3.line = position3.line + 1;
          self.position.column = 1;
          position4 = self.position;
          position4.offset = position4.offset + 1;
        } else {
          position = self.position;
          num2 = 1;
          position.column = position.column + 1;
          position2 = self.position;
          num3 = 65536;
          num4 = 2;
          offset = position2.offset;
          if (charResult < 65536) {
            num4 = 1;
          }
          position2.offset = offset + num4;
        }
      }
      return;
    }
    bumpIf(arg0) {
      self = this;
      if (closure_1_6(this.message, arg0, this.offset())) {
        num = 0;
        num2 = 1;
        if (0 < arg0.length) {
          do {
            bumpResult = self.bump();
            num = num + 1;
            length = arg0.length;
          } while (num < length);
        }
        flag2 = true;
        return true;
      } else {
        flag = false;
        return false;
      }
    }
    bumpUntil(arg0) {
      self = this;
      message = this.message;
      index = message.indexOf(arg0, this.offset());
      if (index >= 0) {
        bumpToResult = self.bumpTo(index);
        flag = true;
      } else {
        bumpToResult1 = self.bumpTo(self.message.length);
        flag = false;
      }
      return flag;
    }
    bumpTo(arg0) {
      self = this;
      if (this.offset() > arg0) {
        tmp5 = globalThis;
        _Error2 = Error;
        str3 = "targetOffset ";
        concat2 = "targetOffset ".concat;
        str4 = " must be greater than or equal to the current offset ";
        combined = "targetOffset ".concat(arg0, " must be greater than or equal to the current offset ");
        throw Error(combined.concat(self.offset()));
      } else {
        tmp = globalThis;
        _Math = Math;
        bound = Math.min(arg0, self.message.length);
        offsetResult = self.offset();
        while (offsetResult !== bound) {
          if (offsetResult > bound) {
            _Error = Error;
            str = "targetOffset ";
            concat = "targetOffset ".concat;
            str2 = " is at invalid UTF-16 code unit boundary";
            throw Error("targetOffset ".concat(bound, " is at invalid UTF-16 code unit boundary"));
          } else {
            bumpResult = self.bump();
            if (self.isEOF()) {
              break;
            }
          }
        }
        return;
      }
    }
    bumpSpace() {
      self = this;
      if (!this.isEOF()) {
        charResult = self.char();
        num = 9;
        tmp2 = charResult >= 9;
        if (tmp2) {
          num2 = 13;
          tmp2 = charResult <= 13;
        }
        if (!tmp2) {
          num3 = 32;
          tmp2 = 32 === charResult;
        }
        if (!tmp2) {
          num4 = 133;
          tmp2 = 133 === charResult;
        }
        if (!tmp2) {
          num5 = 8206;
          tmp3 = charResult >= 8206;
          if (tmp3) {
            num6 = 8207;
            tmp3 = charResult <= 8207;
          }
          tmp2 = tmp3;
        }
        if (!tmp2) {
          num7 = 8232;
          tmp2 = 8232 === charResult;
        }
        if (!tmp2) {
          num8 = 8233;
          tmp2 = 8233 === charResult;
        }
        num9 = 8233;
        num10 = 8232;
        num11 = 8207;
        num12 = 8206;
        num13 = 133;
        num14 = 32;
        num15 = 13;
        if (tmp2) {
          bumpResult = self.bump();
          while (!self.isEOF()) {
            charResult1 = self.char();
            tmp6 = charResult1 >= 9 && charResult1 <= 13 || 32 === charResult1 || 133 === charResult1;
            if (!tmp6) {
              tmp7 = charResult1 >= 8206 && charResult1 <= 8207;
              tmp6 = tmp7;
            }
            if (!tmp6) {
              tmp6 = 8232 === charResult1;
            }
            if (!tmp6) {
              tmp6 = 8233 === charResult1;
            }
            if (!tmp6) {
              break;
            }
          }
        }
      }
      return;
    }
    peek() {
      self = this;
      if (this.isEOF()) {
        tmp5 = null;
        return null;
      } else {
        charResult = self.char();
        message = self.message;
        num = 65536;
        num2 = 1;
        offsetResult = self.offset();
        charCodeAt = message.charCodeAt;
        if (charResult >= 65536) {
          num2 = 2;
        }
        charCodeAtResult = charCodeAt(offsetResult + num2);
        tmp4 = null;
        if (null != charCodeAtResult) {
          tmp4 = charCodeAtResult;
        }
        return tmp4;
      }
    }
  }
  return Parser;
})();
