// Module ID: 4568
// Function ID: 40049
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 1362, 4569, 4563, 1327, 4114, 1443, 4570, 3829, 22, 2]

// Module 4568 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import importDefaultResult from "priv";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function sanitizeWithCache(outer1_0) {
  const value = importDefaultResult.get(outer1_0);
  if (null != value) {
    return value;
  } else {
    let obj = require(4569) /* makeMatcher */;
    const sanitizeWhitespaceResult = obj.sanitizeWhitespace(outer1_0);
    obj = { whitespaceSanitized: sanitizeWhitespaceResult, fullySanitized: require(4569) /* makeMatcher */.sanitizeUnicodeConfusables(sanitizeWhitespaceResult) };
    const result = importDefaultResult.set(outer1_0, obj);
    return obj;
  }
}
function validateContentTypes(content, items, items2) {
  items = items2;
  if (items2 === undefined) {
    items = [];
  }
  let tmp = content;
  if (!Array.isArray(content)) {
    const items1 = [content];
    tmp = items1;
  }
  const tmp2 = _createForOfIteratorHelperLoose(tmp);
  let iter = tmp2();
  if (!iter.done) {
    const value = iter.value;
    while (undefined !== value) {
      if (!items.includes(value.type)) {
        break;
      } else {
        let tmp3 = require;
        let tmp4 = dependencyMap;
        if (value.type === require(4563) /* AST_KEY */.AST_KEY.INLINE_CODE) {
          items2 = [];
          let tmp5 = items2;
          let tmp6 = items;
          let num = 0;
          let tmp7 = items2;
          let tmp8 = items;
          let arraySpreadResult = HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(items, 0));
          let tmp10 = validateContentTypes;
          if (null == validateContentTypes(value.validationChildContent, items2)) {
            return null;
          }
        }
        let _Array = Array;
        if (Array.isArray(value.content)) {
          let tmp11 = validateContentTypes;
          if (null == validateContentTypes(value.content, items)) {
            return null;
          }
        }
        let iter2 = tmp2();
        iter = iter2;
      }
    }
    return null;
  }
  return tmp;
}
function getRawText(content) {
  const tmp = _createForOfIteratorHelperLoose(content);
  const iter = tmp();
  let iter2 = iter;
  let str = "";
  let str2 = "";
  if (!iter.done) {
    while (true) {
      let value = iter2.value;
      let type = value.type;
      let tmp2 = require;
      let tmp3 = dependencyMap;
      if (require(4563) /* AST_KEY */.AST_KEY.TEXT !== type) {
        let tmp13 = require;
        let tmp14 = dependencyMap;
        if (require(4563) /* AST_KEY */.AST_KEY.INLINE_CODE !== type) {
          let tmp15 = require;
          let tmp16 = dependencyMap;
          if (require(4563) /* AST_KEY */.AST_KEY.CUSTOM_EMOJI === type) {
            let text = `${value.name}`;
          } else {
            let tmp17 = require;
            let tmp18 = dependencyMap;
            if (require(4563) /* AST_KEY */.AST_KEY.EMOJI === type) {
              text = `${value.surrogate}`;
            } else {
              let tmp19 = require;
              let tmp20 = dependencyMap;
              if (require(4563) /* AST_KEY */.AST_KEY.LINE_BREAK === type) {
                text = `
  `;
              } else {
                let tmp21 = require;
                let tmp22 = dependencyMap;
                if (require(4563) /* AST_KEY */.AST_KEY.STRONG !== type) {
                  let tmp23 = require;
                  let tmp24 = dependencyMap;
                  if (require(4563) /* AST_KEY */.AST_KEY.ITALICS !== type) {
                    let tmp25 = require;
                    let tmp26 = dependencyMap;
                    if (require(4563) /* AST_KEY */.AST_KEY.UNDERLINE !== type) {
                      let tmp27 = require;
                      let tmp28 = dependencyMap;
                      if (require(4563) /* AST_KEY */.AST_KEY.STRIKETHROUGH !== type) {
                        let tmp29 = require;
                        let tmp30 = dependencyMap;
                        if (require(4563) /* AST_KEY */.AST_KEY.SPOILER !== type) {
                          let tmp31 = require;
                          let tmp32 = dependencyMap;
                          if (require(4563) /* AST_KEY */.AST_KEY.TIMESTAMP === type) {
                            text = `<timestamp>`;
                          } else {
                            let tmp33 = require;
                            let tmp34 = dependencyMap;
                            if (require(4563) /* AST_KEY */.AST_KEY.BLOCK_QUOTE !== type) {
                              let tmp35 = require;
                              let tmp36 = dependencyMap;
                              if (require(4563) /* AST_KEY */.AST_KEY.LIST !== type) {
                                let tmp4 = require;
                                let tmp5 = dependencyMap;
                                if (require(4563) /* AST_KEY */.AST_KEY.HEADING !== type) {
                                  let tmp6 = require;
                                  let tmp7 = dependencyMap;
                                  if (require(4563) /* AST_KEY */.AST_KEY.SUBTEXT !== type) {
                                    let tmp8 = require;
                                    let tmp9 = dependencyMap;
                                    let obj = require(1327) /* isDiscordFrontendDevelopment */;
                                    let assertNeverResult = obj.assertNever(value.type);
                                    text = str;
                                  }
                                }
                              }
                            }
                            let _HermesInternal = HermesInternal;
                            text = str + "<" + value.type + "Content>";
                          }
                        }
                      }
                    }
                  }
                }
                let tmp12 = getRawText;
                text = str + getRawText(value.content);
              }
            }
          }
        }
        let iter3 = tmp();
        str = text;
        iter2 = iter3;
        str2 = text;
        if (iter3.done) {
          break;
        }
      }
      text = str + value.content;
    }
  }
  return str2;
}
function isSuspiciousUrl(outer1_0) {
  if (obj.isSuspiciousCodedLink(outer1_0)) {
    return true;
  } else if (sanitizeWithCache(outer1_0).whitespaceSanitized !== outer1_0) {
    return true;
  } else {
    const toURLSafeResult = importDefault(1443).toURLSafe(outer1_0);
    if (null == toURLSafeResult) {
      return true;
    } else {
      if ("http:" !== toURLSafeResult.protocol) {
        if ("https:" !== toURLSafeResult.protocol) {
          return false;
        }
      }
      const parts = outer1_0.split("/");
      let tmp2 = parts.length < 3;
      if (!tmp2) {
        let tmp3 = "" !== parts[1];
        if (!tmp3) {
          tmp3 = importDefault(1443).safeDecodeURIComponent(parts[2]) !== parts[2];
          const obj2 = importDefault(1443);
        }
        tmp2 = tmp3;
      }
      return tmp2;
    }
    const obj3 = importDefault(1443);
  }
  obj = require(4114) /* _createForOfIteratorHelperLoose */;
}
function punycodeLink(outer1_0) {
  if (isSuspiciousUrl(outer1_0)) {
    const _Error3 = Error;
    const _JSON = JSON;
    const error = new Error("Rejected due to suspicious characters in URL: " + JSON.stringify(outer1_0));
    throw error;
  } else {
    const _URL = URL;
    const uRL = new URL(outer1_0);
    const protocol = uRL.protocol;
    let str2 = "";
    if (null != protocol) {
      str2 = protocol;
    }
    if (items.includes(str2.toLowerCase())) {
      if ("http:" === tmp9) {
        const _Error2 = Error;
        const error1 = new Error("no hostname");
        throw error1;
      }
      let obj = importDefault(4570);
      tmp6.hostname = obj.toASCII(tmp6.hostname.toLowerCase());
      tmp6.username = "";
      tmp6.password = "";
      obj = { target: require(4569) /* makeMatcher */.safelyMakeUrlHumanReadable(tmp6) };
      const obj2 = require(4569) /* makeMatcher */;
      const str7 = tmp6.hostname;
      obj.displayTarget = require(4569) /* makeMatcher */.safelyMakeUrlHumanReadable(tmp6);
      return obj;
    } else {
      const _Error = Error;
      const error2 = new Error("Provided protocol is not allowed: " + tmp9);
      throw error2;
    }
  }
}
let obj = { max: 50 };
importDefaultResult = new importDefaultResult(obj);
let items = ["http:", "https:", "discord:", "tel:", "sms:", "mailto:"];
let items1 = [require("AST_KEY").AST_KEY.TEXT, require("AST_KEY").AST_KEY.UNDERLINE, require("AST_KEY").AST_KEY.STRONG, require("AST_KEY").AST_KEY.ITALICS, require("AST_KEY").AST_KEY.STRIKETHROUGH, require("AST_KEY").AST_KEY.INLINE_CODE, require("AST_KEY").AST_KEY.SPOILER, require("AST_KEY").AST_KEY.LINE_BREAK, require("AST_KEY").AST_KEY.TIMESTAMP];
let items2 = [...items1, require("AST_KEY").AST_KEY.EMOJI, require("AST_KEY").AST_KEY.CUSTOM_EMOJI];
const items3 = [require("AST_KEY").AST_KEY.LIST, require("AST_KEY").AST_KEY.HEADING, require("AST_KEY").AST_KEY.BLOCK_QUOTE, require("AST_KEY").AST_KEY.SUBTEXT];
const items4 = [require("AST_KEY").AST_KEY.TEXT];
const items5 = [require("AST_KEY").AST_KEY.UNDERLINE, require("AST_KEY").AST_KEY.STRONG, require("AST_KEY").AST_KEY.ITALICS, require("AST_KEY").AST_KEY.STRIKETHROUGH, require("AST_KEY").AST_KEY.INLINE_CODE, require("AST_KEY").AST_KEY.SPOILER, require("AST_KEY").AST_KEY.LINE_BREAK, require("AST_KEY").AST_KEY.TIMESTAMP, require("AST_KEY").AST_KEY.EMOJI, require("AST_KEY").AST_KEY.CUSTOM_EMOJI, require("AST_KEY").AST_KEY.LIST, require("AST_KEY").AST_KEY.HEADING, require("AST_KEY").AST_KEY.BLOCK_QUOTE, require("AST_KEY").AST_KEY.SUBTEXT];
obj = {};
let merged = Object.assign(require("t").defaultRules.link);
obj["match"] = function match(arr, allowLinks) {
  if (allowLinks.allowLinks) {
    if (-1 === arr.indexOf("](")) {
      return null;
    } else {
      let num4 = 0;
      let num5 = 0;
      let num3 = 0;
      if (0 < arr.length) {
        while (true) {
          let tmp2 = arr[num3];
          let tmp3 = num4;
          let num2 = 0;
          if (")" !== tmp2) {
            if ("[" === tmp2) {
              let sum = num4 + 1;
              if (sum > 10) {
                break;
              }
            } else if ("]" === tmp2) {
              sum = num4;
              if (num4 > 0) {
                sum = num4 - 1;
              }
            } else {
              sum = num4;
              tmp3 = num4;
              num2 = num5;
            }
            num2 = num5 + 1;
            tmp3 = sum;
            if (num2 > 200) {
              let tmp8 = null;
              return null;
            }
          }
          num3 = num3 + 1;
          num4 = tmp3;
          num5 = num2;
        }
        return null;
      }
      return importDefault(3829).defaultRules.link.match(arr, allowLinks, arg2);
    }
  } else {
    return null;
  }
};
obj["parse"] = function parse(arg0, rules, allowEmojiLinks) {
  function renderIndividualParts() {
    return { type: callback(outer1_2[3]).AST_KEY.TEXT, content: callback };
  }
  const tmp = callback(arg0, 4);
  const _require = tmp[0];
  if (isSuspiciousUrl(tmp[2])) {
    return renderIndividualParts();
  } else {
    const tmp7 = sanitizeWithCache(tmp2);
    let str = "";
    if (null != tmp4) {
      str = tmp4;
    }
    const tmp5Result = sanitizeWithCache(str);
    const tmp5 = sanitizeWithCache;
    const tmp6 = sanitizeWithCache(tmp3);
    const trimmed = str3.trim();
    if (0 !== str2.trim().length) {
      if (0 !== trimmed.length) {
        const tmp38 = punycodeLink(importDefault(3829).unescapeUrl(tmp3));
        let tmp12 = importDefault(4114)(tmp2).length > 0;
        if (!tmp12) {
          tmp12 = importDefault(4114)(tmp4).length > 0;
        }
        if (null != tmp38) {
          if (!tmp12) {
            let obj = {};
            const merged = Object.assign(allowEmojiLinks);
            obj["allowEscape"] = false;
            obj["parseInlineCodeChildContent"] = true;
            const tmp16 = allowEmojiLinks.allowEmojiLinks ? items2 : items1;
            const items = [];
            HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(tmp16, 0));
            items1 = [];
            HermesBuiltin.arraySpread(items5, HermesBuiltin.arraySpread(items4, 0));
            items2 = [_require(4563).AST_KEY.EMOJI];
            const tmp31 = validateContentTypes(rules(str3, obj), items, items2);
            if (null != tmp31) {
              if (null != validateContentTypes(rules(tmp5Result.fullySanitized, obj), items1)) {
                if (0 === str6.trim().length) {
                  return renderIndividualParts();
                } else {
                  const obj2 = importDefault(22);
                  const pickResult = importDefault(22).pick(rules.rules, tmp16);
                  obj = {};
                  obj.content = importDefault(3829).parserFor(pickResult)(tmp7.whitespaceSanitized, obj);
                  obj.target = tmp38.target;
                  obj.title = tmp5Result.whitespaceSanitized;
                  return obj;
                }
                str6 = getRawText(tmp31);
              }
            }
            return renderIndividualParts();
          }
        }
        return renderIndividualParts();
      }
    }
    return renderIndividualParts();
  }
};
let result = require("makeMatcher").fileFinishedImporting("modules/markup/MarkupLinkRule.tsx");

export default obj;
export const ALLOWED_PROTOCOLS = items;
export { isSuspiciousUrl };
export { punycodeLink };
