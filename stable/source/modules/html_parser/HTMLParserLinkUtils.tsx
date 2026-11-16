// Module ID: 9545
// Function ID: 9546
// Name: HTMLParserLinkUtils
// Dependencies: [109, 9519, 6202, 5905, 1378, 2067, 6201, 9544, 2]
// Exports: addTextLinks

// Module 9545 (HTMLParserLinkUtils)
import MarkupLinkRule2 from "MarkupLinkRule" /* 6201 */;
import UnicodeSanitizationUtils from "UnicodeSanitizationUtils" /* 6202 */;
import HTMLParserRunUtils from "HTMLParserRunUtils" /* 9544 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import HTMLParserConstants from "HTMLParserConstants" /* 9519 */;
import module_2067_mod from "module_2067" /* 2067 */;
import size from "module_2" /* 2 */;

const MarkupLinkRuleDefault = MarkupLinkRule2;
let _require, importDefault, set, url;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let module_2067;
let obj2;
let obj3;
let unpackModuleId;
function parseAllowedURL(unescapeUrlResult, flag) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(unescapeUrlResult);
    if ("http:" !== uRL.protocol) {
      let tmp8;
      if ("https:" !== uRL.protocol) {
        if (!flag) {
          if ("mailto:" === uRL.protocol) {
            const _Array = Array;
            const searchParams = tmp4.searchParams;
            let tmp11;
            const arr = Array.from(searchParams.keys());
            if (arr.every((item) => set.has(item.toLowerCase()))) {
              tmp11 = uRL;
            }
            tmp8 = tmp11;
          }
        }
      }
      return tmp8;
    }
    tmp8 = uRL;
  } catch (err) {
  }
}
function getLink(arr3, flag) {
  if (flag === undefined) {
    flag = false;
  }
  let tmp;
  if (null != arr3) {
    const tmp3 = parseAllowedURL(arr3, flag);
    let href;
    if (tmp3 != null) {
      href = tmp3.href;
    }
    tmp = href;
  }
  return tmp;
}
function normalizeLabelForComparison(content) {
  const obj = UnicodeSanitizationUtils;
  const str = obj.sanitizeWhitespace(content);
  const sanitizeUnicodeConfusables = UnicodeSanitizationUtils.sanitizeUnicodeConfusables;
  UnicodeSanitizationUtils;
  const normalizer = str.replace(authStore3, "");
  return sanitizeUnicodeConfusables(normalizer.normalize("NFKC"));
}
function hasMisleadingURLLabel(str, href) {
  let formatted;
  _require = str;
  importDefault = href;
  if (0 === str.trim().length) {
    return true;
  } else {
    const obj2 = require("findCodedLinks")(str);
    if (obj2.some((url) => {
      url = url.url;
      let tmp2;
      const obj = str;
      if (null != url) {
        const tmp4 = parseAllowedURL(url, true);
        href = undefined;
        if (tmp4 != null) {
          href = tmp4.href;
        }
        tmp2 = href;
      }
      let tmp6 = tmp2 === tmp;
      if (!tmp6) {
        const startsWithResult = url.startsWith("http://");
        let hasItem = !startsWithResult;
        if (startsWithResult) {
          hasItem = obj.includes(url);
        }
        let tmp9 = !hasItem;
        if (tmp9) {
          const _HermesInternal = HermesInternal;
          const combined = "https://" + url.slice(7);
          let tmp12;
          if (null != combined) {
            const tmp14 = parseAllowedURL(combined, true);
            let href1;
            if (tmp14 != null) {
              href1 = tmp14.href;
            }
            tmp12 = href1;
          }
          tmp9 = tmp12 === tmp;
        }
        tmp6 = tmp9;
      }
      return !tmp6;
    })) {
      return true;
    } else {
      let tmp = closure_10;
      str = "$1://";
      const normalizer = str.replace(closure_10, "$1://");
      let tmp2 = globalThis;
      const _Array = Array;
      let tmp3 = closure_13;
      const arr = Array.from(normalizer.matchAll(closure_13), (arg0) => {
        let tmp;
        [tmp] = arg0;
        return tmp;
      });
      let tmp4 = _require;
      let tmp6 = closure_14;
      const str3 = normalizer.normalize("NFKD");
      const sanitizeUnicodeConfusables = require("UnicodeSanitizationUtils").sanitizeUnicodeConfusables;
      require("UnicodeSanitizationUtils");
      const normalizer2 = str3.replace(closure_14, "");
      const str6 = sanitizeUnicodeConfusables(normalizer2.normalize("NFKC"));
      const str7 = str6.replace(closure_10, "$1://");
      let match = str7.match(closure_13);
      if (match == null) {
        match = [];
      }
      if (match.length > arr.length) {
        return true;
      } else if (arr.some((item) => {
        let tmp;
        if (null != item) {
          const tmp3 = parseAllowedURL(item, true);
          href = undefined;
          if (tmp3 != null) {
            href = tmp3.href;
          }
          tmp = href;
        }
        return tmp !== closure_1;
      })) {
        return true;
      } else {
        const _Array2 = Array;
        const replaced = str.replace(tmp3, " ");
        const fromResult = from(replaced.matchAll(closure_11), (arg0) => {
          let tmp;
          [, tmp] = arg0;
          return tmp;
        });
        if (0 === fromResult.length) {
          return false;
        } else if (href.startsWith("mailto:")) {
          const _URL = URL;
          const self = this;
          const self2 = this;
          const safeDecodeURIComponent = tmp15(formatted[4]).safeDecodeURIComponent;
          require("URLUtils");
          const uRL = new URL(href);
          let tmp12 = uRL;
          const str9 = safeDecodeURIComponent(uRL.pathname);
          formatted = undefined;
          if (str9 != null) {
            formatted = str9.toLowerCase();
          }
          let tmp14 = null == formatted || fromResult.some((item) => item.toLowerCase() !== formatted);
          return tmp14;
        } else {
          return true;
        }
      }
    }
  }
}
function trimUnmatchedParenthesis(nextResult) {
  let diff = nextResult.length - 1;
  if (0 <= diff) {
    let num2 = 0;
    if (")" === nextResult[diff]) {
      const index = nextResult.indexOf("(", num2);
      while (-1 !== index) {
        let diff1 = diff - 1;
        if (0 <= diff1) {
          diff = diff1;
          num2 = tmp4;
        }
      }
      return nextResult.slice(0, -1);
    }
  }
  return nextResult;
}
function withoutLink(items) {
  return Object.assign(items, Object.assign({ link: 0 }));
}
function appendParsedNode(items, content, text) {
  if (Array.isArray(content)) {
    const tmp12 = content[Symbol.iterator]();
    while (tmp12 !== undefined) {
      let tmp17 = appendParsedNode(items, tmp14, text);
      continue;
    }
  } else {
    if ("text" === content.type) {
      if (typeof content.content === "string") {
        const push = items.push;
        const obj2 = { text: content.content };
        const merged = Object.assign(text);
        push(obj2);
      }
    }
    const tmp = "link" !== content.type && "url" !== content.type;
    if (!tmp) {
      content = content.content;
      const obj = { link: content.target, rawURL: "url" === content.type };
      const merged1 = Object.assign(text);
      appendParsedNode(items, content, obj);
    }
  }
}
function appendTextLinks(items, text, allowLinks) {
  text = text.text;
  let hasItem1 = allowLinks;
  const hasItem = text.includes("[");
  if (allowLinks) {
    const text2 = text.text;
    hasItem1 = text2.includes("](");
  }
  if (!hasItem1) {
    const obj = { inline: true, allowLinks };
    appendParsedNode(items, closure_22(text.text, obj), text);
  }
  items.push(text);
}
function mayContainLink(link, arr, arg2) {
  let tmp;
  if (null != link.link) {
    tmp = "" !== link.link;
  } else {
    tmp = arg2;
    if (tmp) {
      const isMatch = regex2.test(arr) || arr.includes("](");
      tmp = isMatch;
    }
  }
  return tmp;
}
function validateSplitURLs(items) {
  let index;
  let sum3;
  let tmp18;
  let tmp27;
  function getComparisonLabels(arr) {
    let tmp9;
    let mapped = arr.map((text) => {
      const str = text.text;
      const parts = str.split(closure_1_16);
      const mapped = parts.map(closure_1_19);
      return mapped.join(" ");
    });
    let num = 0;
    if (0 < arr.length) {
      while (true) {
        let tmp = arr[num];
        let link = tmp;
        if (null != tmp.link) {
          let sum2;
          if (true !== tmp.rawURL) {
            sum = num + 1;
            let tmp3 = sum;
            if (sum < arr.length) {
              tmp3 = sum;
              if (true !== arr[sum].rawURL) {
                let tmp4 = sum;
                tmp3 = sum;
                if (arr[sum].link === tmp.link) {
                  let sum1 = tmp4 + 1;
                  tmp3 = sum1;
                  while (sum1 < arr.length) {
                    tmp3 = sum1;
                    if (true === arr[sum1].rawURL) {
                      break;
                    } else {
                      tmp4 = sum1;
                      tmp3 = sum1;
                      if (arr[sum1].link !== tmp.link) {
                        break;
                      }
                    }
                  }
                }
              }
            }
            let substr = mapped.slice(num, tmp3);
            let joined = substr.join("");
            let _Array = Array;
            let arr2 = Array.from(joined.matchAll(closure_13));
            let tmp7 = tmp3;
            sum2 = tmp3;
            if (arr2.some((item) => {
              let arr;
              [arr] = item;
              let diff = arr.length - 1;
              let substr = arr;
              if (0 <= diff) {
                let num2 = 0;
                substr = arr;
                if (")" === arr[diff]) {
                  const index = arr.indexOf("(", num2);
                  while (-1 !== index) {
                    let diff1 = diff - 1;
                    substr = arr;
                    if (0 <= diff1) {
                      diff = diff1;
                      num2 = tmp5;
                      substr = arr;
                    }
                  }
                  substr = arr.slice(0, -1);
                }
              }
              let tmp7;
              if (null != substr) {
                const tmp9 = parseAllowedURL(substr, true);
                let href;
                if (tmp9 != null) {
                  href = tmp9.href;
                }
                tmp7 = href;
              }
              return tmp7 === link.link;
            })) {
              let diff = tmp3 - 1;
              mapped[diff] = `${arr[tmp9]} `;
              sum2 = tmp3;
            }
          }
          num = sum2;
          if (sum2 >= arr.length) {
            break;
          }
        }
        sum2 = num + 1;
      }
    }
    return mapped;
  }
  if (items.some((link) => null != link.link)) {
    let num = 0;
    const arr = getComparisonLabels(items);
    let require = 0;
    let mapped = arr.map((item) => {
      let require;
      require = require + item.length;
      return require;
    });
    items = [];
    let tmp3 = items;
    let tmp4 = items;
    let num2 = 0;
    HermesBuiltin.arraySpread(items, items, 0);
    let num3 = 0;
    let str = "";
    let joined = arr.join("");
    let tmp6 = closure_13;
    const matchAllResult = joined.matchAll(closure_13);
    const iter = matchAllResult[Symbol.iterator]();
    let tmp9 = null;
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp13 = nextResult;
      let arr3 = trimUnmatchedParenthesis(nextResult[0]);
      if (mapped[num3] <= nextResult.index) {
        do {
          let sum = num3 + 1;
          num3 = sum;
          tmp18 = mapped[sum];
          index = tmp13.index;
        } while (tmp18 <= index);
      }
      let sum1 = tmp13.index + arr3.length;
      let tmp24 = num3;
      if (mapped[num3] < sum1) {
        do {
          let sum2 = tmp24 + 1;
          tmp24 = sum2;
          tmp27 = mapped[sum2];
        } while (tmp27 < sum1);
      }
      if (num3 !== tmp24) {
        let tmp33 = getLink(arr3, true);
        let tmp35 = num3;
        if (num3 <= tmp24) {
          do {
            let tmp38 = null != tmp33;
            if (tmp38) {
              tmp38 = items[tmp35].link === tmp33;
            }
            if (!tmp38) {
              items[tmp35] = withoutLink(items[tmp35]);
            }
            sum3 = tmp35 + 1;
            tmp35 = sum3;
          } while (sum3 <= tmp24);
        }
      }
      continue;
    }
    return items;
  } else {
    return items;
  }
}
let closure_3 = ["rawURL"];
({ ALLOWED_MAILTO_HEADERS: hasOwnProperty, BIDI_CONTROL_CHARACTERS: metroRequire, BIDI_CONTROL_CHARACTERS_GLOBAL: metroImportDefault, BIDI_PARAGRAPH_SEPARATOR: metroImportAll, BIDI_PARAGRAPH_SEPARATORS: c9, BROKEN_URL_SCHEME_IN_LABEL: c10, EMAIL_IN_LABEL: unpackModuleId, HTTP_URL_SCHEME: closure_12, URL_IN_LABEL: map1, URL_LABEL_IGNORABLE_CHARACTERS: closure_14, URL_MATCH: closure_15, URL_TEXT_BOUNDARY: closure_16 } = HTMLParserConstants);
let obj = { text: module_2067.defaultRules.text, link: obj2, url: obj3 };
obj2 = {
  match(arg0, arg1, arg2) {
    const str = MarkupLinkRuleDefault;
    const match = str.match(arg0, arg1, arg2);
    let tmp4 = null;
    if (null != match) {
      tmp4 = null;
      if (!metroImportAll.test(match[0])) {
        const tmpResult = module_2067;
        const unescapeUrlResult = tmpResult.unescapeUrl(match[2]);
        let tmp7;
        if (null != unescapeUrlResult) {
          const tmp9 = parseAllowedURL(unescapeUrlResult, false);
          let href;
          if (tmp9 != null) {
            href = tmp9.href;
          }
          tmp7 = href;
        }
        let tmp11 = null;
        if (null != tmp7) {
          tmp11 = match;
        }
        tmp4 = tmp11;
      }
    }
    return tmp4;
  },
  parse(content, arg1, arg2) {
    const obj = module_2067;
    const unescapeUrlResult = obj.unescapeUrl(content[2]);
    let tmp4;
    if (null != unescapeUrlResult) {
      const tmp6 = parseAllowedURL(unescapeUrlResult, false);
      let href;
      if (tmp6 != null) {
        href = tmp6.href;
      }
      tmp4 = href;
    }
    if (null != tmp4) {
      let parsed;
      const tmp12 = content[1];
      const obj4 = UnicodeSanitizationUtils;
      const str = obj4.sanitizeWhitespace(tmp12);
      const sanitizeUnicodeConfusables = UnicodeSanitizationUtils.sanitizeUnicodeConfusables;
      UnicodeSanitizationUtils;
      const normalizer = str.replace(authStore3, "");
      if (!hasMisleadingURLLabel(sanitizeUnicodeConfusables(normalizer.normalize("NFKC")), tmp4)) {
        const tmpResult = MarkupLinkRuleDefault;
        parsed = tmpResult.parse(content, arg1, arg2);
      }
      return parsed;
    }
    parsed = { type: "text", content: content[0] };
  }
};
const MarkupLinkRule = Object.assign(MarkupLinkRuleDefault);
obj3 = {
  order: module_2067.defaultRules.url.order,
  requiredFirstCharacters: ["h", "H"],
  match(arg0) {
    const match = regex3.exec(arg0);
    if (null != match) {
      let diff = arr.length - 1;
      let substr = arr;
      if (0 <= diff) {
        let num2 = 0;
        substr = arr;
        if (")" === match[1][diff]) {
          const index = arr.indexOf("(", num2);
          while (-1 !== index) {
            let diff1 = diff - 1;
            substr = arr;
            if (0 <= diff1) {
              diff = diff1;
              num2 = tmp5;
              substr = arr;
            }
          }
          substr = arr.slice(0, -1);
        }
      }
      match[1] = substr;
      match[0] = substr;
    }
    return match;
  },
  parse(arg0) {
    let items;
    const searchResult = arg0[1].search(authStore4);
    let str = arr;
    if (-1 !== searchResult) {
      str = arr.slice(0, searchResult);
    }
    const user = parseAllowedURL(str, true);
    if (null == user) {
      return { type: "text", content: arg0[1] };
    } else {
      const obj7 = MarkupLinkRule2;
      const punycodeLinkResult = obj7.punycodeLink(str);
      let displayTarget;
      if (punycodeLinkResult != null) {
        displayTarget = punycodeLinkResult.displayTarget;
      }
      if (null == displayTarget) {
        return { type: "text", content: arg0[1] };
      } else {
        const _URL = URL;
        const self = this;
        const self2 = this;
        const uRL = new URL(displayTarget);
        if ("" === user.username) {
          let tmp3;
          if ("" === user.password) {
            const formatted = str.toLowerCase();
            const _HermesInternal = HermesInternal;
            tmp3 = str;
          }
          const obj3 = { type: "url", content: items, target: user.href };
          items = [{ type: "text", content: tmp3 }];
          const obj4 = { type: "text", content: tmp3 };
          const substr = arr.slice(str.length);
          let tmp5 = obj3;
          if ("" !== substr) {
            const items1 = [obj3, ];
            const obj5 = { type: "text", content: substr };
            items1[1] = obj5;
            tmp5 = items1;
          }
          return tmp5;
        }
        tmp3 = displayTarget;
      }
    }
  }
};
module_2067 = module_2067_mod;
let closure_22 = module_2067.parserFor(obj);
const result = size.fileFinishedImporting("modules/html_parser/HTMLParserLinkUtils.tsx");

export { getLink };
export function addTextLinks(items1, flag) {
  let marked;
  let num;
  let rawURLsOnly;
  function markInvalidAnchors(arg0) {
    const marked = [...arg0];
    const rawURLsOnly = new Set();
    let num = 0;
    if (0 < arg0.length) {
      while (true) {
        let tmp = arg0[num];
        let sum3 = num;
        if (null != tmp.link) {
          if ("" !== tmp.link) {
            let sum = sum3 + 1;
            let tmp5 = sum;
            if (sum < arg0.length) {
              let tmp6 = sum;
              tmp5 = sum;
              if (arg0[sum].link === tmp.link) {
                let sum1 = tmp6 + 1;
                tmp5 = sum1;
                while (sum1 < arg0.length) {
                  tmp6 = sum1;
                  tmp5 = sum1;
                  if (arg0[sum1].link !== tmp.link) {
                    break;
                  }
                }
              }
            }
            let sum2 = sum3;
            let str = "";
            let str2 = "";
            if (sum3 < tmp5) {
              do {
                str = `${arg0[tmp8].text}`;
                sum2 = sum2 + 1;
                str2 = str;
              } while (sum2 < tmp5);
            }
            let obj2 = require("UnicodeSanitizationUtils");
            let str3 = obj2.sanitizeWhitespace(str2);
            let tmp11 = require("UnicodeSanitizationUtils");
            let sanitizeUnicodeConfusables = tmp11.sanitizeUnicodeConfusables;
            let normalizer = str3.replace(closure_1_14, "");
            let str4 = sanitizeUnicodeConfusables(normalizer.normalize("NFKC"));
            let trimmed = str4.trim();
            let str5 = "";
            if (0 !== trimmed.length) {
              let link1;
              if (!hasMisleadingURLLabel(trimmed, tmp.link)) {
                link1 = tmp.link;
              }
              str5 = link1;
            }
            let sum4 = tmp5;
            if (str5 !== tmp.link) {
              sum4 = tmp5;
              if (sum3 < tmp5) {
                do {
                  let tmp15 = arg0[sum3];
                  let link = tmp15.link;
                  let obj = {};
                  let merged = Object.assign(tmp15, Object.assign({ link: 0 }));
                  let tmp19 = merged;
                  if (null != str5) {
                    let obj3 = { link: str5 };
                    let merged1 = Object.assign(merged);
                    tmp19 = obj3;
                  }
                  marked[sum3] = tmp19;
                  if (null == str5) {
                    let addResult = rawURLsOnly.add(sum3);
                  }
                  sum3 = sum3 + 1;
                  sum4 = tmp5;
                } while (sum3 < tmp5);
              }
            }
            num = sum4;
            if (sum4 >= arg0.length) {
              break;
            }
          }
        }
        sum4 = sum3 + 1;
      }
    }
    return { marked, rawURLsOnly };
  }
  function stripBidiAroundLinks(arr, flag) {
    let closure_0 = arr;
    let closure_1 = flag;
    if (arr.some((text) => regex.test(text.text))) {
      let c2 = 0;
      let mapped = arr.map((text) => {
        const str = text.text;
        const parts = str.split(closure_2_9);
        return parts.map((text) => {
          const obj = { text, paragraph };
          if (regex2.test(text)) {
            paragraph = paragraph + 1;
          }
          return obj;
        });
      });
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      const item = mapped.forEach((item, index) => {
        let paragraph;
        let text;
        const iter = item[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          ({ text, paragraph } = nextResult);
          let replaced = text.replace(closure_2_7, "");
          let tmp5 = "" !== replaced;
          if (tmp5) {
            tmp5 = mayContainLink(arr[index], tmp4, flag);
          }
          if (tmp5) {
            let addResult = set.add(paragraph);
          }
          continue;
        }
      });
      return arr.map((item, index) => {
        const obj = { text: mapped.join("") };
        const merged = Object.assign(item);
        arr = mapped[index];
        mapped = arr.map((text) => {
          let replaced = str;
          if (set.has(text.paragraph)) {
            replaced = str.replace(closure_2_7, "");
          }
          return replaced;
        });
        return obj;
      });
    } else {
      return arr;
    }
  }
  if (flag === undefined) {
    flag = true;
  }
  let tmp = markInvalidAnchors(stripBidiAroundLinks(items1, flag));
  ({ marked, rawURLsOnly } = tmp);
  const items = [];
  for (let num = 0; num < marked.length; num = num + 1) {
    let tmp2 = marked[num];
    if ("" === tmp2.link) {
      let tmp7 = withoutLink;
      let arr = items.push(withoutLink(tmp2));
    } else {
      if (null == tmp2.link) {
        if (flag) {
          let tmp5 = appendTextLinks;
          let tmp6 = appendTextLinks(items, tmp2, !rawURLsOnly.has(num));
        }
      }
      let arr2 = items.push(tmp2);
    }
  }
  items1 = [];
  let tmp9 = validateSplitURLs(items);
  for (const item10040 of tmp9) {
    let rawURL = item10040.rawURL;
    let tmp10 = _objectWithoutProperties;
    let tmp11 = closure_3;
    let tmp12 = _objectWithoutProperties(item10040, closure_3);
    let tmp13 = require;
    let obj = HTMLParserRunUtils;
    let mergeRunResult = obj.mergeRun(items1, tmp12.text, tmp12);
    continue;
  }
  return items1;
}
