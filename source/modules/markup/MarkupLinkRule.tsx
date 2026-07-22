// Module ID: 4564
// Function ID: 40017
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 4564 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
function sanitizeWithCache(closure_0) {
  const value = importDefaultResult.get(closure_0);
  if (null != value) {
    return value;
  } else {
    let obj = arg1(dependencyMap[2]);
    const sanitizeWhitespaceResult = obj.sanitizeWhitespace(closure_0);
    obj = { whitespaceSanitized: sanitizeWhitespaceResult, fullySanitized: arg1(dependencyMap[2]).sanitizeUnicodeConfusables(sanitizeWhitespaceResult) };
    const result = importDefaultResult.set(closure_0, obj);
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
        let tmp3 = items;
        let tmp4 = dependencyMap;
        if (value.type === items(dependencyMap[3]).AST_KEY.INLINE_CODE) {
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
      let tmp2 = arg1;
      let tmp3 = dependencyMap;
      if (arg1(dependencyMap[3]).AST_KEY.TEXT !== type) {
        let tmp13 = arg1;
        let tmp14 = dependencyMap;
        if (arg1(dependencyMap[3]).AST_KEY.INLINE_CODE !== type) {
          let tmp15 = arg1;
          let tmp16 = dependencyMap;
          if (arg1(dependencyMap[3]).AST_KEY.CUSTOM_EMOJI === type) {
            let text = `${value.name}`;
          } else {
            let tmp17 = arg1;
            let tmp18 = dependencyMap;
            if (arg1(dependencyMap[3]).AST_KEY.EMOJI === type) {
              text = `${value.surrogate}`;
            } else {
              let tmp19 = arg1;
              let tmp20 = dependencyMap;
              if (arg1(dependencyMap[3]).AST_KEY.LINE_BREAK === type) {
                text = `
  `;
              } else {
                let tmp21 = arg1;
                let tmp22 = dependencyMap;
                if (arg1(dependencyMap[3]).AST_KEY.STRONG !== type) {
                  let tmp23 = arg1;
                  let tmp24 = dependencyMap;
                  if (arg1(dependencyMap[3]).AST_KEY.ITALICS !== type) {
                    let tmp25 = arg1;
                    let tmp26 = dependencyMap;
                    if (arg1(dependencyMap[3]).AST_KEY.UNDERLINE !== type) {
                      let tmp27 = arg1;
                      let tmp28 = dependencyMap;
                      if (arg1(dependencyMap[3]).AST_KEY.STRIKETHROUGH !== type) {
                        let tmp29 = arg1;
                        let tmp30 = dependencyMap;
                        if (arg1(dependencyMap[3]).AST_KEY.SPOILER !== type) {
                          let tmp31 = arg1;
                          let tmp32 = dependencyMap;
                          if (arg1(dependencyMap[3]).AST_KEY.TIMESTAMP === type) {
                            text = `<timestamp>`;
                          } else {
                            let tmp33 = arg1;
                            let tmp34 = dependencyMap;
                            if (arg1(dependencyMap[3]).AST_KEY.BLOCK_QUOTE !== type) {
                              let tmp35 = arg1;
                              let tmp36 = dependencyMap;
                              if (arg1(dependencyMap[3]).AST_KEY.LIST !== type) {
                                let tmp4 = arg1;
                                let tmp5 = dependencyMap;
                                if (arg1(dependencyMap[3]).AST_KEY.HEADING !== type) {
                                  let tmp6 = arg1;
                                  let tmp7 = dependencyMap;
                                  if (arg1(dependencyMap[3]).AST_KEY.SUBTEXT !== type) {
                                    let tmp8 = arg1;
                                    let tmp9 = dependencyMap;
                                    let obj = arg1(dependencyMap[4]);
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
function isSuspiciousUrl(closure_0) {
  if (obj.isSuspiciousCodedLink(closure_0)) {
    return true;
  } else if (sanitizeWithCache(closure_0).whitespaceSanitized !== closure_0) {
    return true;
  } else {
    const toURLSafeResult = importDefault(dependencyMap[6]).toURLSafe(closure_0);
    if (null == toURLSafeResult) {
      return true;
    } else {
      if ("http:" !== toURLSafeResult.protocol) {
        if ("https:" !== toURLSafeResult.protocol) {
          return false;
        }
      }
      const parts = closure_0.split("/");
      let tmp2 = parts.length < 3;
      if (!tmp2) {
        let tmp3 = "" !== parts[1];
        if (!tmp3) {
          tmp3 = importDefault(dependencyMap[6]).safeDecodeURIComponent(parts[2]) !== parts[2];
          const obj2 = importDefault(dependencyMap[6]);
        }
        tmp2 = tmp3;
      }
      return tmp2;
    }
    const obj3 = importDefault(dependencyMap[6]);
  }
  const obj = arg1(dependencyMap[5]);
}
function punycodeLink(closure_0) {
  if (isSuspiciousUrl(closure_0)) {
    const _Error3 = Error;
    const _JSON = JSON;
    const error = new Error("Rejected due to suspicious characters in URL: " + JSON.stringify(closure_0));
    throw error;
  } else {
    const _URL = URL;
    const uRL = new URL(closure_0);
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
      let obj = importDefault(dependencyMap[7]);
      tmp6.hostname = obj.toASCII(tmp6.hostname.toLowerCase());
      tmp6.username = "";
      tmp6.password = "";
      obj = { target: arg1(dependencyMap[2]).safelyMakeUrlHumanReadable(tmp6) };
      const obj2 = arg1(dependencyMap[2]);
      const str7 = tmp6.hostname;
      obj.displayTarget = arg1(dependencyMap[2]).safelyMakeUrlHumanReadable(tmp6);
      return obj;
    } else {
      const _Error = Error;
      const error2 = new Error("Provided protocol is not allowed: " + tmp9);
      throw error2;
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let importDefaultResult = importDefault(dependencyMap[1]);
let obj = { max: 50 };
importDefaultResult = new importDefaultResult(obj);
const items = ["setLaunchPadShown", "origin_channel_id", "SET_AUDIO_DEVICE_BY_ID", "UIDensity", "APPLE_PAY_MERCHANT_VALIDATION_NETWORK", "UIDensity"];
const items1 = [arg1(dependencyMap[3]).AST_KEY.TEXT, arg1(dependencyMap[3]).AST_KEY.UNDERLINE, arg1(dependencyMap[3]).AST_KEY.STRONG, arg1(dependencyMap[3]).AST_KEY.ITALICS, arg1(dependencyMap[3]).AST_KEY.STRIKETHROUGH, arg1(dependencyMap[3]).AST_KEY.INLINE_CODE, arg1(dependencyMap[3]).AST_KEY.SPOILER, arg1(dependencyMap[3]).AST_KEY.LINE_BREAK, arg1(dependencyMap[3]).AST_KEY.TIMESTAMP];
const items2 = [...items1, arg1(dependencyMap[3]).AST_KEY.EMOJI, arg1(dependencyMap[3]).AST_KEY.CUSTOM_EMOJI];
const items3 = [arg1(dependencyMap[3]).AST_KEY.LIST, arg1(dependencyMap[3]).AST_KEY.HEADING, arg1(dependencyMap[3]).AST_KEY.BLOCK_QUOTE, arg1(dependencyMap[3]).AST_KEY.SUBTEXT];
const items4 = [arg1(dependencyMap[3]).AST_KEY.TEXT];
const items5 = [arg1(dependencyMap[3]).AST_KEY.UNDERLINE, arg1(dependencyMap[3]).AST_KEY.STRONG, arg1(dependencyMap[3]).AST_KEY.ITALICS, arg1(dependencyMap[3]).AST_KEY.STRIKETHROUGH, arg1(dependencyMap[3]).AST_KEY.INLINE_CODE, arg1(dependencyMap[3]).AST_KEY.SPOILER, arg1(dependencyMap[3]).AST_KEY.LINE_BREAK, arg1(dependencyMap[3]).AST_KEY.TIMESTAMP, arg1(dependencyMap[3]).AST_KEY.EMOJI, arg1(dependencyMap[3]).AST_KEY.CUSTOM_EMOJI, arg1(dependencyMap[3]).AST_KEY.LIST, arg1(dependencyMap[3]).AST_KEY.HEADING, arg1(dependencyMap[3]).AST_KEY.BLOCK_QUOTE, arg1(dependencyMap[3]).AST_KEY.SUBTEXT];
obj = {};
const merged = Object.assign(importDefault(dependencyMap[8]).defaultRules.link);
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
      return importDefault(dependencyMap[8]).defaultRules.link.match(arr, allowLinks, arg2);
    }
  } else {
    return null;
  }
};
obj["parse"] = function parse(arg0, rules, allowEmojiLinks) {
  function renderIndividualParts() {
    return { type: callback(closure_2[3]).AST_KEY.TEXT, content: callback };
  }
  const tmp = callback2(arg0, 4);
  const callback = tmp[0];
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
        const tmp38 = punycodeLink(importDefault(dependencyMap[8]).unescapeUrl(tmp3));
        let tmp12 = importDefault(dependencyMap[5])(tmp2).length > 0;
        if (!tmp12) {
          tmp12 = importDefault(dependencyMap[5])(tmp4).length > 0;
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
            const items1 = [];
            HermesBuiltin.arraySpread(items5, HermesBuiltin.arraySpread(items4, 0));
            const items2 = [callback(dependencyMap[3]).AST_KEY.EMOJI];
            const tmp31 = validateContentTypes(rules(str3, obj), items, items2);
            if (null != tmp31) {
              if (null != validateContentTypes(rules(tmp5Result.fullySanitized, obj), items1)) {
                if (0 === str6.trim().length) {
                  return renderIndividualParts();
                } else {
                  const obj2 = importDefault(dependencyMap[9]);
                  const pickResult = importDefault(dependencyMap[9]).pick(rules.rules, tmp16);
                  obj = {};
                  obj.content = importDefault(dependencyMap[8]).parserFor(pickResult)(tmp7.whitespaceSanitized, obj);
                  obj.target = tmp38.target;
                  obj.title = tmp5Result.whitespaceSanitized;
                  return obj;
                }
                const str6 = getRawText(tmp31);
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
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/markup/MarkupLinkRule.tsx");

export default obj;
export const ALLOWED_PROTOCOLS = items;
export { isSuspiciousUrl };
export { punycodeLink };
