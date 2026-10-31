// Module ID: 9431
// Function ID: 9432
// Name: HTMLParserLinkUtils
// Dependencies: [109, 9405, 6038, 1943, 6037, 9430, 2]
// Exports: addTextLinks

// Module 9431 (HTMLParserLinkUtils)
import MarkupLinkRuleDefault from "MarkupLinkRule" /* 6037 */;
import HTMLParserRunUtils from "HTMLParserRunUtils" /* 9430 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import HTMLParserConstants from "HTMLParserConstants" /* 9405 */;
import module_1943_mod from "module_1943" /* 1943 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let module_1943;
let obj2;
let obj3;
let unpackModuleId;
function getLink(href) {
  if (null != href) {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(href);
      if ("http:" !== uRL.protocol) {
        return href;
      }
      href = tmp4.href;
    } catch (err) {
    }
  }
}
function appendParsedNode(items1, content, bold, target) {
  if (Array.isArray(content)) {
    const iter = content[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp19 = appendParsedNode(items1, nextResult, bold, target);
      continue;
    }
  } else {
    if ("text" === content.type) {
      if (typeof content.content === "string") {
        let tmp5 = bold;
        const mergeRun = HTMLParserRunUtils.mergeRun;
        content = content.content;
        HTMLParserRunUtils;
        if (null != target) {
          const obj = { link: target };
          const merged = Object.assign(bold);
          tmp5 = obj;
        }
        mergeRun(items1, content, tmp5);
      }
    }
    if ("link" === content.type) {
      appendParsedNode(items1, content.content, bold, content.target);
    }
  }
}
let closure_3 = ["link"];
let closure_4 = ["link"];
({ ASCII_CONTROL_CHARACTERS: metroRequire, HTTP_URL_SCHEME: metroImportDefault, URL_AT_RUN_END: metroImportAll, URL_CONTINUATION_AT_RUN_START: c9, URL_IN_LABEL: c10, URL_MATCH: unpackModuleId } = HTMLParserConstants);
let obj = { text: module_1943.defaultRules.text, link: obj2, url: obj3 };
obj2 = {
  match(arg0, arg1, arg2) {
    const str = MarkupLinkRuleDefault;
    const match = str.match(arg0, arg1, arg2);
    let tmp4 = null;
    if (null != match) {
      tmp4 = null;
      const tmpResult = module_1943;
      if (null != getLink(tmpResult.unescapeUrl(match[2]))) {
        tmp4 = match;
      }
    }
    return tmp4;
  },
  parse(content, arg1, arg2) {
    let closure_0;
    const obj = module_1943;
    const tmp3 = getLink(obj.unescapeUrl(content[2]));
    if (null != tmp3) {
      let parsed;
      const obj4 = require("UnicodeSanitizationUtils");
      _require = tmp3;
      const sanitizeWhitespaceResult = obj4.sanitizeWhitespace(content[1]);
      const obj5 = require("UnicodeSanitizationUtils");
      const result = obj5.sanitizeUnicodeConfusables(sanitizeWhitespaceResult);
      const _Array = Array;
      const arr = Array.from(result.matchAll(closure_10));
      if (!arr.some((item) => {
        let tmp;
        [tmp] = item;
        return getLink(tmp, true) !== link;
      })) {
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
  order: module_1943.defaultRules.url.order,
  requiredFirstCharacters: ["h", "H"],
  match(arg0) {
    const match = unpackModuleId.exec(arg0);
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
    const searchResult = arg0[1].search(metroRequire);
    let substr = arr;
    if (-1 !== searchResult) {
      substr = arr.slice(0, searchResult);
    }
    const tmp2 = getLink(substr, true);
    if (null == tmp2) {
      return { type: "text", content: arg0[1] };
    } else {
      const obj = { type: "link", content: items, target: tmp2 };
      items = [{ type: "text", content: substr }];
      const obj3 = { type: "text", content: substr };
      const substr1 = arr.slice(substr.length);
      let tmp4 = obj;
      if ("" !== substr1) {
        const items1 = [obj, ];
        const obj4 = { type: "text", content: substr1 };
        items1[1] = obj4;
        tmp4 = items1;
      }
      return tmp4;
    }
  }
};
module_1943 = module_1943_mod;
let closure_13 = module_1943.parserFor(obj);
let result = size.fileFinishedImporting("modules/html_parser/HTMLParserLinkUtils.tsx");

export { getLink };
export function addTextLinks(items1) {
  let link;
  const items = [...items1];
  set = new Set();
  let num = 0;
  if (0 < items1.length) {
    while (true) {
      let tmp = items1[num];
      let sum3 = num;
      if (null != tmp.link) {
        if ("" !== tmp.link) {
          let sum = sum3 + 1;
          let tmp5 = sum;
          if (sum < items1.length) {
            let tmp6 = sum;
            tmp5 = sum;
            if (items1[sum].link === tmp.link) {
              let sum1 = tmp6 + 1;
              tmp5 = sum1;
              while (sum1 < items1.length) {
                tmp6 = sum1;
                tmp5 = sum1;
                if (items1[sum1].link !== tmp.link) {
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
              str = `${items1[tmp8].text}`;
              sum2 = sum2 + 1;
              str2 = str;
            } while (sum2 < tmp5);
          }
          let tmp9 = link;
          let obj2 = link(6038);
          let str3 = obj2.sanitizeWhitespace(str2);
          let trimmed = str3.trim();
          let str4 = "";
          if (0 !== trimmed.length) {
            link = tmp.link;
            let tmp9Result = tmp9(6038);
            let result = tmp9Result.sanitizeUnicodeConfusables(trimmed);
            let _Array = Array;
            let arr = Array.from(result.matchAll(closure_10));
            let link1;
            if (!arr.some((item) => {
              let tmp;
              [tmp] = item;
              return getLink(tmp, true) !== link;
            })) {
              link1 = tmp.link;
            }
            str4 = link1;
          }
          let sum4 = tmp5;
          if (str4 !== tmp.link) {
            sum4 = tmp5;
            if (sum3 < tmp5) {
              do {
                let tmp13 = items1[sum3];
                link = tmp13.link;
                let tmp16 = _objectWithoutProperties(tmp13, closure_3);
                let tmp18 = tmp16;
                if (null != str4) {
                  let obj = { link: str4 };
                  let merged = Object.assign(tmp16);
                  tmp18 = obj;
                }
                items[sum3] = tmp18;
                if (null == str4) {
                  let addResult = set.add(sum3);
                }
                sum3 = sum3 + 1;
                sum4 = tmp5;
              } while (sum3 < tmp5);
            }
          }
          num = sum4;
          if (sum4 >= items1.length) {
            break;
          }
        }
      }
      sum4 = sum3 + 1;
    }
  }
  items1 = [];
  let num2 = 0;
  let flag = false;
  if (0 < items.length) {
    do {
      let flag2;
      let tmp23 = items[num2];
      if (null != tmp23.link) {
        if ("" === tmp23.link) {
          let link2 = tmp23.link;
          let tmp48 = _objectWithoutProperties(tmp23, closure_4);
          let obj11 = link(9430);
          let mergeRunResult = obj11.mergeRun(items1, tmp23.text, tmp48);
          flag2 = false;
        } else {
          let obj10 = link(9430);
          let mergeRunResult1 = obj10.mergeRun(items1, tmp23.text, tmp23);
          flag2 = false;
        }
      } else {
        let tmp52 = items[num2 + 1];
        let isMatch = null != tmp52 && null == tmp52.link;
        if (isMatch) {
          let text = tmp23.text;
          isMatch = !text.includes("](");
        }
        if (isMatch) {
          isMatch = regex2.test(tmp23.text);
        }
        if (isMatch) {
          isMatch = regex3.test(tmp52.text);
        }
        if (!flag) {
          if (!isMatch) {
            let hasItem = set.has(num2);
            let tmp30 = !hasItem;
            let text2 = tmp23.text;
            let hasItem2 = tmp30;
            let hasItem1 = text2.includes("[");
            if (!hasItem) {
              let text3 = tmp23.text;
              hasItem2 = text3.includes("](");
            }
            if (!hasItem2) {
              let obj3 = { inline: true, allowLinks: tmp30 };
              let tmp39 = appendParsedNode(items1, closure_13(tmp23.text, obj3), tmp23);
              flag2 = isMatch;
            }
            let obj7 = link(9430);
            let mergeRunResult2 = obj7.mergeRun(items1, tmp23.text, tmp23);
            flag2 = isMatch;
          }
        }
        let obj9 = link(9430);
        let mergeRunResult3 = obj9.mergeRun(items1, tmp23.text, tmp23);
        flag2 = isMatch;
      }
      num2 = num2 + 1;
      flag = flag2;
    } while (num2 < items.length);
  }
  return items1;
}
