// Module ID: 5401
// Function ID: 5402
// Name: MarkupLinkRule
// Dependencies: [32, 1456, 5402, 5396, 1387, 5070, 1383, 5403, 1948, 12, 2]

// Module 5401 (MarkupLinkRule)
import _modDef12 from "module_12" /* 12 */;
import URLUtilsDefault from "URLUtils" /* 1383 */;
import LRUCacheDefault from "LRUCache" /* 1456 */;
import _modDef1948 from "module_1948" /* 1948 */;
import findCodedLinks from "findCodedLinks" /* 5070 */;
import MarkupTypes from "MarkupTypes" /* 5396 */;
import UnicodeSanitizationUtils from "UnicodeSanitizationUtils" /* 5402 */;
import _modDef5403 from "module_5403" /* 5403 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const findCodedLinksDefault = findCodedLinks;

function validateContentTypes(content, items, items2) {
  items = items2;
  if (items2 === undefined) {
    items = [];
  }
  let tmp2 = content;
  if (!Array.isArray(content)) {
    items1 = [content];
    tmp2 = items1;
  }
  const iter = tmp2[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (undefined !== nextResult) {
      if (items.includes(tmp4.type)) {
        if (tmp4.type === MarkupTypes.AST_KEY.INLINE_CODE) {
          items2 = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(items2, items, HermesBuiltin.arraySpread(items2, items, 0));
          if (null == validateContentTypes(tmp4.validationChildContent, items2)) {
            iter.return();
            return null;
          }
        }
        let _Array = Array;
        if (Array.isArray(tmp4.content)) {
          if (null == validateContentTypes(tmp4.content, items)) {
            iter.return();
            return null;
          }
        }
        continue;
      }
    }
    iter.return();
    return null;
  }
  return tmp2;
}
function getRawText(content) {
  let tmp2;
  let str = "";
  const iter = content[Symbol.iterator]();
  const nextResult = iter.next();
  for (; iter !== undefined; str = str + tmp2.content) {
    tmp2 = nextResult;
    let type = nextResult.type;
    let tmp3 = require;
    if (MarkupTypes.AST_KEY.TEXT !== type) {
      if (tmp3(5396).AST_KEY.INLINE_CODE !== type) {
        if (tmp3(5396).AST_KEY.CUSTOM_EMOJI === type) {
          str = `${tmp2.name}`;
        } else if (tmp3(5396).AST_KEY.EMOJI === type) {
          str = `${tmp2.name}${tmp2.surrogate}`;
        } else if (tmp3(5396).AST_KEY.LINE_BREAK === type) {
          str = `${tmp2.name}${tmp2.surrogate}
  `;
        } else {
          if (tmp3(5396).AST_KEY.STRONG !== type) {
            if (tmp3(5396).AST_KEY.ITALICS !== type) {
              if (tmp3(5396).AST_KEY.UNDERLINE !== type) {
                if (tmp3(5396).AST_KEY.STRIKETHROUGH !== type) {
                  if (tmp3(5396).AST_KEY.SPOILER !== type) {
                    if (tmp3(5396).AST_KEY.TIMESTAMP === type) {
                      str = `${tmp2.name}${tmp2.surrogate}
  <timestamp>`;
                    } else {
                      if (tmp3(5396).AST_KEY.BLOCK_QUOTE !== type) {
                        if (tmp3(5396).AST_KEY.LIST !== type) {
                          if (tmp3(5396).AST_KEY.HEADING !== type) {
                            if (tmp3(5396).AST_KEY.SUBTEXT !== type) {
                              let tmp3Result = tmp3(1387);
                              let assertNeverResult = tmp3Result.assertNever(tmp2.type);
                            }
                          }
                        }
                      }
                      let _HermesInternal = HermesInternal;
                      str = str + "<" + tmp2.type + "Content>";
                    }
                  }
                }
              }
            }
          }
          str = str + getRawText(tmp2.content);
        }
      }
      continue;
    }
  }
  return str;
}
function isSuspiciousUrl(url) {
  let tmpResult2;
  const obj = findCodedLinks;
  if (obj.isSuspiciousCodedLink(url)) {
    return true;
  } else {
    let value = closure_4.get(url);
    const obj2 = closure_4;
    if (null == value) {
      const tmpResult = UnicodeSanitizationUtils;
      const sanitizeWhitespaceResult = tmpResult.sanitizeWhitespace(url);
      const obj3 = { whitespaceSanitized: sanitizeWhitespaceResult, fullySanitized: tmpResult2.sanitizeUnicodeConfusables(sanitizeWhitespaceResult) };
      tmpResult2 = UnicodeSanitizationUtils;
      const result = obj2.set(url, obj3);
      value = obj3;
    }
    if (value.whitespaceSanitized !== url) {
      return true;
    } else {
      const obj7 = URLUtilsDefault;
      const toURLSafeResult = obj7.toURLSafe(url);
      const tmp9 = importDefault;
      if (null == toURLSafeResult) {
        return true;
      } else {
        if ("http:" !== toURLSafeResult.protocol) {
          if ("https:" !== toURLSafeResult.protocol) {
            return false;
          }
        }
        const parts = url.split("/");
        let tmp7 = parts.length < 3;
        if (!tmp7) {
          let tmp8 = "" !== parts[1];
          if (!tmp8) {
            const tmp9Result = tmp9(1383);
            tmp8 = tmp9Result.safeDecodeURIComponent(parts[2]) !== parts[2];
          }
          tmp7 = tmp8;
        }
        return tmp7;
      }
    }
  }
}
function punycodeLink(url) {
  let obj2;
  let obj4;
  try {
    if (isSuspiciousUrl(url)) {
      const _Error3 = Error;
      const _JSON = JSON;
      const self7 = this;
      const self8 = this;
      const error = new Error("Rejected due to suspicious characters in URL: " + JSON.stringify(url));
      throw error;
    } else {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(url);
      if (items.includes((uRL.protocol ?? "").toLowerCase())) {
        if ("http:" === (uRL.protocol ?? "")) {
          const _Error2 = Error;
          const self5 = this;
          const self6 = this;
          const error1 = new Error("no hostname");
          throw error1;
        }
        const obj = _modDef5403;
        const str6 = uRL.hostname;
        uRL.hostname = obj.toASCII(str6.toLowerCase());
        uRL.username = "";
        uRL.password = "";
        const obj3 = { target: obj2.safelyMakeUrlHumanReadable(uRL), displayTarget: obj4.safelyMakeUrlHumanReadable(uRL) };
        obj2 = UnicodeSanitizationUtils;
        obj4 = UnicodeSanitizationUtils;
        return obj3;
      } else {
        const _Error = Error;
        const self3 = this;
        const self4 = this;
        const error2 = new Error("Provided protocol is not allowed: " + tmp9);
        throw error2;
      }
    }
  } catch (err) {
    return null;
  }
}
let tmp2 = new LRUCacheDefault({ max: 50 });
let closure_4 = tmp2;
let items = ["http:", "https:", "discord:", "tel:", "sms:", "mailto:"];
let items1 = [MarkupTypes.AST_KEY.TEXT, MarkupTypes.AST_KEY.UNDERLINE, MarkupTypes.AST_KEY.STRONG, MarkupTypes.AST_KEY.ITALICS, MarkupTypes.AST_KEY.STRIKETHROUGH, MarkupTypes.AST_KEY.INLINE_CODE, MarkupTypes.AST_KEY.SPOILER, MarkupTypes.AST_KEY.LINE_BREAK, MarkupTypes.AST_KEY.TIMESTAMP];
let items2 = [...items1, MarkupTypes.AST_KEY.EMOJI, MarkupTypes.AST_KEY.CUSTOM_EMOJI];
let items3 = [MarkupTypes.AST_KEY.LIST, MarkupTypes.AST_KEY.HEADING, MarkupTypes.AST_KEY.BLOCK_QUOTE, MarkupTypes.AST_KEY.SUBTEXT];
const items4 = [MarkupTypes.AST_KEY.TEXT];
const items5 = [MarkupTypes.AST_KEY.UNDERLINE, MarkupTypes.AST_KEY.STRONG, MarkupTypes.AST_KEY.ITALICS, MarkupTypes.AST_KEY.STRIKETHROUGH, MarkupTypes.AST_KEY.INLINE_CODE, MarkupTypes.AST_KEY.SPOILER, MarkupTypes.AST_KEY.LINE_BREAK, MarkupTypes.AST_KEY.TIMESTAMP, MarkupTypes.AST_KEY.EMOJI, MarkupTypes.AST_KEY.CUSTOM_EMOJI, MarkupTypes.AST_KEY.LIST, MarkupTypes.AST_KEY.HEADING, MarkupTypes.AST_KEY.BLOCK_QUOTE, MarkupTypes.AST_KEY.SUBTEXT];
let obj = {
  match(arr, allowLinks, arg2) {
    if (allowLinks.allowLinks) {
      if (-1 === arr.indexOf("](")) {
        return null;
      } else {
        let num4 = 0;
        let num7 = 0;
        let num5 = 0;
        let num6 = 0;
        if (0 < arr.length) {
          while (true) {
            let tmp3 = arr[num4];
            let num2 = 0;
            if (2 <= num6) {
              num2 = num7 + 1;
              if (100 < num2) {
                break;
              }
            }
            let num3 = 0;
            let tmp8 = num6;
            if (")" !== tmp3) {
              let sum;
              if ("[" === tmp3) {
                sum = num6 + 1;
                if (10 < sum) {
                  return null;
                }
              } else if ("]" === tmp3) {
                sum = num6;
                if (0 < num6) {
                  sum = num6 - 1;
                }
              } else {
                sum = num6;
                num3 = num5;
                tmp8 = num6;
              }
              num3 = num5 + 1;
              tmp8 = sum;
              if (200 < num3) {
                return null;
              }
            }
            num4 = num4 + 1;
            num5 = num3;
            num6 = tmp8;
            num7 = num2;
          }
          return null;
        }
        const str2 = _modDef1948.defaultRules.link;
        return str2.match(arr, allowLinks, arg2);
      }
    } else {
      return null;
    }
  },
  parse(arg0, rules, maskedLinkValidation) {
    let obj10;
    let obj4;
    let obj7;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp58Result2;
    let tmp6;
    [tmp3, tmp4, tmp5, tmp6] = arg0;
    _slicedToArray(arg0, 4);
    if (null != maskedLinkValidation.maskedLinkValidation) {
      maskedLinkValidation.maskedLinkValidation.foundNestedMaskedLink = true;
      const obj3 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
      return obj3;
    } else if (isSuspiciousUrl(tmp5)) {
      const obj6 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
      return obj6;
    } else {
      let value = closure_4.get(tmp5);
      if (null == value) {
        const obj2 = UnicodeSanitizationUtils;
        const sanitizeWhitespaceResult = obj2.sanitizeWhitespace(tmp5);
        const obj9 = { whitespaceSanitized: sanitizeWhitespaceResult, fullySanitized: obj4.sanitizeUnicodeConfusables(sanitizeWhitespaceResult) };
        obj4 = UnicodeSanitizationUtils;
        const result = obj.set(tmp5, obj9);
        value = obj9;
      }
      let value3 = obj.get(tmp4);
      if (null == value3) {
        const obj5 = UnicodeSanitizationUtils;
        const sanitizeWhitespaceResult1 = obj5.sanitizeWhitespace(tmp4);
        const obj11 = { whitespaceSanitized: sanitizeWhitespaceResult1, fullySanitized: obj7.sanitizeUnicodeConfusables(sanitizeWhitespaceResult1) };
        obj7 = UnicodeSanitizationUtils;
        const result1 = obj.set(tmp4, obj11);
        value3 = obj11;
      }
      let str = "";
      if (null != tmp6) {
        str = tmp6;
      }
      let value4 = obj.get(str);
      if (null == value4) {
        const obj8 = UnicodeSanitizationUtils;
        const sanitizeWhitespaceResult2 = obj8.sanitizeWhitespace(str);
        const obj12 = { whitespaceSanitized: sanitizeWhitespaceResult2, fullySanitized: obj10.sanitizeUnicodeConfusables(sanitizeWhitespaceResult2) };
        obj10 = UnicodeSanitizationUtils;
        const result2 = obj.set(str, obj12);
        value4 = obj12;
      }
      const fullySanitized = value4.fullySanitized;
      const str2 = value.whitespaceSanitized;
      const trimmed = str3.trim();
      if (0 !== str2.trim().length) {
        if (0 !== trimmed.length) {
          const obj29 = _modDef1948;
          const tmp60 = punycodeLink(obj29.unescapeUrl(tmp5));
          if (null != tmp60) {
            const obj30 = findCodedLinks;
            if (!obj30.containsCodedLink(tmp6)) {
              const obj13 = { allowEscape: false, parseInlineCodeChildContent: true };
              const merged = Object.assign(maskedLinkValidation);
              const obj14 = { foundNestedMaskedLink: false };
              const merged1 = Object.assign(obj13);
              const tmp29 = maskedLinkValidation.allowEmojiLinks ? items2 : items1;
              items = [];
              HermesBuiltin.arraySpread(items, items3, HermesBuiltin.arraySpread(items, tmp29, 0));
              items1 = [];
              HermesBuiltin.arraySpread(items1, items5, HermesBuiltin.arraySpread(items1, items4, 0));
              if (obj14.foundNestedMaskedLink) {
                const obj16 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
                return obj16;
              } else {
                items2 = [MarkupTypes.AST_KEY.EMOJI];
                const tmp43 = validateContentTypes(tmp41, items, items2);
                if (obj14.foundNestedMaskedLink) {
                  const obj17 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
                  return obj17;
                } else {
                  if (null != tmp43) {
                    if (null != validateContentTypes(tmp44, items1)) {
                      const str4 = getRawText(tmp43);
                      if (0 === str4.trim().length) {
                        const obj18 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
                        return obj18;
                      } else if (findCodedLinksDefault(str4).length > 0) {
                        const obj19 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
                        return obj19;
                      } else {
                        if (str4 !== value3.fullySanitized) {
                          if (findCodedLinksDefault(value3.fullySanitized).length > 0) {
                            const obj20 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
                            return obj20;
                          } else if (obj14.foundNestedMaskedLink) {
                            const obj21 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
                            return obj21;
                          } else {
                            items3 = [];
                            const arraySpreadResult4 = HermesBuiltin.arraySpread(items3, items, 0);
                            items3[arraySpreadResult4] = MarkupTypes.AST_KEY.EMOJI;
                            if (null == validateContentTypes(tmp63, items3)) {
                              const obj22 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
                              return obj22;
                            }
                          }
                        }
                        const tmp58Result = _modDef12;
                        const pickResult = tmp58Result.pick(rules.rules, tmp29);
                        const obj23 = { content: tmp58Result2.parserFor(pickResult)(value3.whitespaceSanitized, obj13), target: tmp60.target, title: value4.whitespaceSanitized };
                        tmp58Result2 = _modDef1948;
                        return obj23;
                      }
                    }
                  }
                  const obj24 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
                  return obj24;
                }
              }
            }
          }
          const obj25 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
          return obj25;
        }
      }
      const obj26 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
      return obj26;
    }
  }
};
let merged = Object.assign(_modDef1948.defaultRules.link);
let result = size.fileFinishedImporting("modules/markup/MarkupLinkRule.tsx");

export default obj;
export const ALLOWED_PROTOCOLS = items;
export { isSuspiciousUrl };
export { punycodeLink };
