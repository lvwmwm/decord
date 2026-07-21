// Module ID: 4566
// Function ID: 40014
// Name: makeMatcher
// Dependencies: []
// Exports: safelyMakeUrlHumanReadable, sanitizeUnicodeConfusables, sanitizeWhitespace, sanitizeWhitespaceExcludingTabs

// Module 4566 (makeMatcher)
function makeMatcher(join) {
  const regExp = new RegExp(join.join("|"), "gu");
  return regExp;
}
function safelyPartiallyDecodeURIComponent(hash) {
  const result = importDefault(dependencyMap[0]).safeDecodeURIComponent(hash);
  if (null == result) {
    return hash;
  } else {
    let str3 = "";
    let str = hash;
    let str2 = result;
    let str4 = "";
    if (hash.length > 0) {
      do {
        let codePointAtResult = str.codePointAt(0);
        let codePointAtResult1 = str2.codePointAt(0);
        let tmp4 = str;
        let tmp5 = str2;
        if (codePointAtResult !== codePointAtResult1) {
          let _String2 = String;
          let fromCodePointResult = String.fromCodePoint(codePointAtResult1);
          let _encodeURIComponent = encodeURIComponent;
          let encodeURIComponentResult = encodeURIComponent(fromCodePointResult);
          let num = 3;
          if (encodeURIComponentResult !== fromCodePointResult) {
            num = encodeURIComponentResult.length;
          }
          if (codePointAtResult1 >= 0) {
            if (codePointAtResult1 < 128) {
              let tmp16 = closure_5;
              let tmp7 = 1 !== closure_5[codePointAtResult1];
              let tmp17 = fromCodePointResult;
              if (tmp7) {
                tmp17 = encodeURIComponentResult;
              }
              let sum = str3 + tmp17;
              str = str.substring(num);
              str2 = str2.substring(fromCodePointResult.length);
              let tmp18 = codePointAtResult1;
              let tmp19 = fromCodePointResult;
              let tmp20 = encodeURIComponentResult;
              let tmp21 = num;
            }
          }
          tmp7 = 8206 === codePointAtResult1 || 8207 === codePointAtResult1 || 8234 === codePointAtResult1 || 8235 === codePointAtResult1 || 8236 === codePointAtResult1 || 8237 === codePointAtResult1 || 8238 === codePointAtResult1 || 1564 === codePointAtResult1 || 8294 === codePointAtResult1 || 8295 === codePointAtResult1 || 8296 === codePointAtResult1 || 8297 === codePointAtResult1 || 128271 === codePointAtResult1 || 128272 === codePointAtResult1 || 128274 === codePointAtResult1 || 128275 === codePointAtResult1 || 133 === codePointAtResult1 || 160 === codePointAtResult1 || 5760 === codePointAtResult1 || 8192 === codePointAtResult1 || 8193 === codePointAtResult1 || 8194 === codePointAtResult1 || 8195 === codePointAtResult1 || 8196 === codePointAtResult1 || 8197 === codePointAtResult1 || 8198 === codePointAtResult1 || 8199 === codePointAtResult1 || 8200 === codePointAtResult1 || 8201 === codePointAtResult1 || 8202 === codePointAtResult1 || 8232 === codePointAtResult1 || 8233 === codePointAtResult1 || 8239 === codePointAtResult1 || 8287 === codePointAtResult1 || 12288 === codePointAtResult1 || 10240 === codePointAtResult1 || 173 === codePointAtResult1 || 847 === codePointAtResult1;
          if (!tmp7) {
            let tmp8 = codePointAtResult1 >= 1536 && codePointAtResult1 <= 1541;
            tmp7 = tmp8;
          }
          if (!tmp7) {
            tmp7 = 1757 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 1807 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 2274 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 4447 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 4448 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 6068 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 6069 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 6155 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 6156 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 6157 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 6158 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 8203 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 8204 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 8205 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 8288 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 8289 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 8290 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 8291 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 8292 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 8293 === codePointAtResult1;
          }
          if (!tmp7) {
            let tmp9 = codePointAtResult1 >= 8298 && codePointAtResult1 <= 8303;
            tmp7 = tmp9;
          }
          if (!tmp7) {
            tmp7 = 12644 === codePointAtResult1;
          }
          if (!tmp7) {
            let tmp10 = codePointAtResult1 >= 65520 && codePointAtResult1 <= 65528;
            tmp7 = tmp10;
          }
          if (!tmp7) {
            let tmp11 = codePointAtResult1 >= 65024 && codePointAtResult1 <= 65039;
            tmp7 = tmp11;
          }
          if (!tmp7) {
            tmp7 = 65279 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 65440 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 65529 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 65530 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 65531 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 69821 === codePointAtResult1;
          }
          if (!tmp7) {
            tmp7 = 69837 === codePointAtResult1;
          }
          if (!tmp7) {
            let tmp12 = codePointAtResult1 >= 78896 && codePointAtResult1 <= 78904;
            tmp7 = tmp12;
          }
          if (!tmp7) {
            let tmp13 = codePointAtResult1 >= 113824 && codePointAtResult1 <= 113827;
            tmp7 = tmp13;
          }
          if (!tmp7) {
            let tmp14 = codePointAtResult1 >= 119155 && codePointAtResult1 <= 119162;
            tmp7 = tmp14;
          }
          if (!tmp7) {
            let tmp15 = codePointAtResult1 >= 917504 && codePointAtResult1 <= 921599;
            tmp7 = tmp15;
          }
        } else {
          let _String = String;
          let fromCodePointResult1 = String.fromCodePoint(codePointAtResult);
          sum = str3 + fromCodePointResult1;
          str = str.substring(fromCodePointResult1.length);
          str2 = str2.substring(fromCodePointResult1.length);
        }
        str3 = sum;
        str4 = sum;
      } while (str.length > 0);
    }
    return str4;
  }
  const obj = importDefault(dependencyMap[0]);
}
const items = [];
const regExp = new RegExp("" + /(?:[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])|\u2028|\u2029|[\0-\t\x0B-\x1F\x7F-\x9F]|[\xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g.source + "|" + items.join("|"), "gu");
const regExp1 = new RegExp("" + /(?:[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])|\u2028|\u2029|[\0-\x08\x0B-\x1F\x7F-\x9F]|[\xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g.source + "|" + items.join("|"), "gu");
let obj = { character: "h", matcher: makeMatcher([]) };
const items1 = [obj, , , , , ];
obj = { character: "t", matcher: makeMatcher([]) };
items1[1] = obj;
obj = { character: "p", matcher: makeMatcher([]) };
items1[2] = obj;
items1[3] = { character: "s", matcher: makeMatcher([]) };
const obj1 = { character: "s", matcher: makeMatcher([]) };
items1[4] = { character: ":", matcher: makeMatcher(["top", "top_arrow", "\u201CSoon\u201D com seta para a direita", "em breve", "flecha", "seta", "seta \"SOON\"", "s\u00EDmbolo \u201CSoon\u201D", "soon", "soon_arrow", "heavy_check_mark", "check_mark", "ballot_box_with_check", "radio_button", "white_circle", "red_circle", "blue_circle", false, false]) };
const obj2 = { character: ":", matcher: makeMatcher(["top", "top_arrow", "\u201CSoon\u201D com seta para a direita", "em breve", "flecha", "seta", "seta \"SOON\"", "s\u00EDmbolo \u201CSoon\u201D", "soon", "soon_arrow", "heavy_check_mark", "check_mark", "ballot_box_with_check", "radio_button", "white_circle", "red_circle", "blue_circle", false, false]) };
items1[5] = { character: "/", matcher: makeMatcher([15184219107047550000000000000000000000000000000000000000000000000000000000000000000, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009366128460446297, 15182625100030070000000000000000000000000000000000000000000000000000000000000000000, 15183184964747270000000000000000000000000000000000000000000000000000000000000000000, 15192438776760394000000000000000000000000000000000000000000000000000000000000000000, 494871446913607900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011468028909977662, -2437606577914517000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, true, true, true, true, true, true]) };
let closure_5 = [];
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/markup/UnicodeSanitizationUtils.tsx");

export const BLANK_CHARACTERS_TO_SANITIZE_REGEX = regExp;
export const BLANK_CHARACTERS_TO_SANITIZE_REGEX_EXCLUDING_TABS = regExp1;
export const sanitizeWhitespace = function sanitizeWhitespace(closure_0) {
  return closure_0.replace(regExp, "");
};
export const sanitizeWhitespaceExcludingTabs = function sanitizeWhitespaceExcludingTabs(str) {
  return str.replace(regExp1, "");
};
export const UNICODE_CONFUSABLES_FOR_URL_DETECTION = items1;
export const sanitizeUnicodeConfusables = function sanitizeUnicodeConfusables(sanitizeWhitespaceResult) {
  const importDefault = sanitizeWhitespaceResult;
  const item = items1.forEach((matcher) => {

  });
  return importDefault;
};
export const safelyMakeUrlHumanReadable = function safelyMakeUrlHumanReadable(origin) {
  let startsWithResult = "null" === origin.origin;
  if (startsWithResult) {
    const pathname = origin.pathname;
    startsWithResult = pathname.startsWith("//");
  }
  if (startsWithResult) {
    let protocol = origin.protocol;
  } else {
    let str3 = "";
    if ("" !== origin.username) {
      str3 = `${origin.username}`;
    }
    let text = str3;
    if ("" !== origin.password) {
      text = `${str3}:${origin.password}`;
    }
    let text1 = text;
    if ("" !== text) {
      text1 = `${tmp2}@`;
    }
    let str8 = "";
    if ("//" === str6.substr(origin.protocol.length, 2)) {
      str8 = "//";
    }
    const _HermesInternal = HermesInternal;
    protocol = "" + origin.protocol + str8 + text1 + origin.host;
    const str6 = origin.href;
  }
  const sum = protocol + safelyPartiallyDecodeURIComponent(origin.pathname);
  const sum1 = sum + safelyPartiallyDecodeURIComponent(origin.search);
  return sum1 + safelyPartiallyDecodeURIComponent(origin.hash);
};
