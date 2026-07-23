// Module ID: 4569
// Function ID: 40061
// Name: makeMatcher
// Dependencies: [1443, 2]
// Exports: safelyMakeUrlHumanReadable, sanitizeUnicodeConfusables, sanitizeWhitespace, sanitizeWhitespaceExcludingTabs

// Module 4569 (makeMatcher)
function makeMatcher(join) {
  const regExp = new RegExp(join.join("|"), "gu");
  return regExp;
}
function safelyPartiallyDecodeURIComponent(hash) {
  const result = importDefault(1443).safeDecodeURIComponent(hash);
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
              let tmp16 = table;
              let tmp7 = 1 !== table[codePointAtResult1];
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
  const obj = importDefault(1443);
}
const items = ["\u034F", "\u17B4", "\u17B5", "\u1160", "\u3164", "\uFFA0"];
let regExp = new RegExp("" + /(?:[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])|\u2028|\u2029|[\0-\t\x0B-\x1F\x7F-\x9F]|[\xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g.source + "|" + items.join("|"), "gu");
const regExp1 = new RegExp("" + /(?:[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])|\u2028|\u2029|[\0-\x08\x0B-\x1F\x7F-\x9F]|[\xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g.source + "|" + items.join("|"), "gu");
let obj = { character: "h", matcher: makeMatcher(["H", "\u04BB", "\u0570", "\u13C2", "\u210E", "\u{1D421}", "\u{1D489}", "\u{1D4BD}", "\u{1D4F1}", "\u{1D525}", "\u{1D559}", "\u{1D58D}", "\u{1D5C1}", "\u{1D5F5}", "\u{1D629}", "\u{1D65D}", "\u{1D691}", "\uFF48"]) };
const items1 = [obj, , , , , ];
obj = { character: "t", matcher: makeMatcher(["T", "\u{1D42D}", "\u{1D461}", "\u{1D495}", "\u{1D4C9}", "\u{1D4FD}", "\u{1D531}", "\u{1D565}", "\u{1D599}", "\u{1D5CD}", "\u{1D601}", "\u{1D635}", "\u{1D669}", "\u{1D69D}"]) };
items1[1] = obj;
obj = { character: "p", matcher: makeMatcher(["P", "\u03C1", "\u03F1", "\u0440", "\u2374", "\u2CA3", "\u{1D429}", "\u{1D45D}", "\u{1D491}", "\u{1D4C5}", "\u{1D4F9}", "\u{1D52D}", "\u{1D561}", "\u{1D595}", "\u{1D5C9}", "\u{1D5FD}", "\u{1D631}", "\u{1D665}", "\u{1D699}", "\u{1D6D2}", "\u{1D6E0}", "\u{1D70C}", "\u{1D71A}", "\u{1D746}", "\u{1D754}", "\u{1D780}", "\u{1D78E}", "\u{1D7BA}", "\u{1D7C8}", "\uFF50", "\u048F"]) };
items1[2] = obj;
items1[3] = { character: "s", matcher: makeMatcher(["S", "\u01BD", "\u0455", "\uA731", "\uABAA", "\u{10448}", "\u{118C1}", "\u{1D42C}", "\u{1D460}", "\u{1D494}", "\u{1D4C8}", "\u{1D4FC}", "\u{1D530}", "\u{1D564}", "\u{1D598}", "\u{1D5CC}", "\u{1D600}", "\u{1D634}", "\u{1D668}", "\u{1D69C}", "\uFF53"]) };
const obj1 = { character: "s", matcher: makeMatcher(["S", "\u01BD", "\u0455", "\uA731", "\uABAA", "\u{10448}", "\u{118C1}", "\u{1D42C}", "\u{1D460}", "\u{1D494}", "\u{1D4C8}", "\u{1D4FC}", "\u{1D530}", "\u{1D564}", "\u{1D598}", "\u{1D5CC}", "\u{1D600}", "\u{1D634}", "\u{1D668}", "\u{1D69C}", "\uFF53"]) };
items1[4] = { character: ":", matcher: makeMatcher(["\u02D0", "\u02F8", "\u0589", "\u05C3", "\u0703", "\u0704", "\u0903", "\u0A83", "\u16EC", "\u1803", "\u1809", "\u205A", "\u2236", "\uA4FD", "\uA789", "\uFE30", "\uFF1A", ";", "\u037E"]) };
const obj2 = { character: ":", matcher: makeMatcher(["\u02D0", "\u02F8", "\u0589", "\u05C3", "\u0703", "\u0704", "\u0903", "\u0A83", "\u16EC", "\u1803", "\u1809", "\u205A", "\u2236", "\uA4FD", "\uA789", "\uFE30", "\uFF1A", ";", "\u037E"]) };
items1[5] = { character: "/", matcher: makeMatcher(["\u1735", "\u2041", "\u2044", "\u2215", "\u2571", "\u27CB", "\u29F8", "\u2CC6", "\u2F03", "\u3033", "\u30CE", "\u31D3", "\u4E3F", "\u{1D23A}"]) };
let closure_5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];
const obj3 = { character: "/", matcher: makeMatcher(["\u1735", "\u2041", "\u2044", "\u2215", "\u2571", "\u27CB", "\u29F8", "\u2CC6", "\u2F03", "\u3033", "\u30CE", "\u31D3", "\u4E3F", "\u{1D23A}"]) };
let result = require("set").fileFinishedImporting("modules/markup/UnicodeSanitizationUtils.tsx");

export const BLANK_CHARACTERS_TO_SANITIZE_REGEX = regExp;
export const BLANK_CHARACTERS_TO_SANITIZE_REGEX_EXCLUDING_TABS = regExp1;
export const sanitizeWhitespace = function sanitizeWhitespace(outer1_0) {
  return outer1_0.replace(regExp, "");
};
export const sanitizeWhitespaceExcludingTabs = function sanitizeWhitespaceExcludingTabs(str) {
  return str.replace(regExp1, "");
};
export const UNICODE_CONFUSABLES_FOR_URL_DETECTION = items1;
export const sanitizeUnicodeConfusables = function sanitizeUnicodeConfusables(sanitizeWhitespaceResult) {
  let closure_0 = sanitizeWhitespaceResult;
  const item = items1.forEach((matcher) => {

  });
  return closure_0;
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
    str6 = origin.href;
  }
  const sum = protocol + safelyPartiallyDecodeURIComponent(origin.pathname);
  const sum1 = sum + safelyPartiallyDecodeURIComponent(origin.search);
  return sum1 + safelyPartiallyDecodeURIComponent(origin.hash);
};
