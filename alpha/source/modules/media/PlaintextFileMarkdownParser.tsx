// Module ID: 12426
// Function ID: 12427
// Name: PlaintextFileMarkdownParser
// Dependencies: [12427, 12432, 6285, 6284, 5988, 2]
// Exports: parseMarkdownPreview

// Module 12426 (PlaintextFileMarkdownParser)
import findCodedLinks from "findCodedLinks" /* 5988 */;
import MarkupLinkRule from "MarkupLinkRule" /* 6284 */;
import UnicodeSanitizationUtils from "UnicodeSanitizationUtils" /* 6285 */;
import _modDef12427 from "module_12427" /* 12427 */;
import dollarmathPlugin from "dollarmathPlugin" /* 12432 */;
import size from "module_2" /* 2 */;

function createLinkNode(arr) {
  let attrs;
  let attrs2;
  let attrs3;
  let children;
  let children2;
  let children3;
  let items2;
  let markup;
  let markup2;
  ({ attrs, children } = arr);
  let str = attrs.href;
  const punycodeLink = MarkupLinkRule.punycodeLink;
  MarkupLinkRule;
  if (str == null) {
    str = "";
  }
  const punycodeLinkResult = punycodeLink(str);
  if ("autolink" === arr.markup) {
    let element2;
    if (null == punycodeLinkResult) {
      let element1;
      ({ attrs: attrs3, children: children3, markup: markup2 } = arr);
      if ("autolink" === markup2) {
        const items = ["<"];
        items[HermesBuiltin.arraySpread(items, children3, 1)] = ">";
        const element = { type: "element", tag: "span", attrs: {}, children: items };
        element1 = element;
      } else {
        let str15 = "";
        if (null != attrs3.title) {
          str15 = "";
          if ("" !== attrs3.title) {
            const _HermesInternal3 = HermesInternal;
            str15 = " \"" + attrs3.title + "\"";
          }
        }
        let str18 = attrs3.href;
        if (str18 == null) {
          str18 = "";
        }
        const _HermesInternal4 = HermesInternal;
        let str21 = "[";
        const combined = "](" + str18 + str15 + ")";
        if ("image" === markup2) {
          str21 = "![";
        }
        const items1 = [str21, ];
        items1[HermesBuiltin.arraySpread(items1, children3, 1)] = combined;
        element1 = { type: "element", tag: "span", attrs: {}, children: items1 };
      }
      element2 = element1;
    } else {
      element2 = { type: "link", href: null, title: null, children: items2 };
      ({ target: obj8.href, displayTarget: obj8.title } = punycodeLinkResult);
      items2 = [punycodeLinkResult.displayTarget];
    }
    return element2;
  } else {
    let element5;
    const tmp2Result = UnicodeSanitizationUtils;
    const str24 = tmp2Result.sanitizeWhitespace(arr.text);
    let displayTarget = str24.trim();
    let str2 = attrs.title;
    const sanitizeWhitespace = UnicodeSanitizationUtils.sanitizeWhitespace;
    UnicodeSanitizationUtils;
    if (str2 == null) {
      str2 = "";
    }
    const str3 = sanitizeWhitespace(str2);
    let trimmed = str3.trim();
    if (null != punycodeLinkResult) {
      if (true !== arr.hasMath) {
        if (children.length <= 0) {
          const test = re4.test;
          const tmp2Result7 = UnicodeSanitizationUtils;
          const tmp7 = re4;
          if (!test(tmp2Result7.sanitizeUnicodeConfusables(displayTarget))) {
            const test2 = tmp7.test;
            const tmp2Result8 = UnicodeSanitizationUtils;
            if (!test2(tmp2Result8.sanitizeUnicodeConfusables(trimmed))) {
              const tmp2Result9 = findCodedLinks;
              if (!tmp2Result9.containsCodedLink(displayTarget)) {
                const tmp2Result10 = findCodedLinks;
                if (!tmp2Result10.containsCodedLink(trimmed)) {
                  if ("" === trimmed) {
                    if ("" === displayTarget) {
                      displayTarget = punycodeLinkResult.displayTarget;
                    }
                    trimmed = displayTarget;
                  }
                  const element3 = { type: "link", href: punycodeLinkResult.target, title: trimmed, children };
                  if (children.length <= 0) {
                    const items3 = [punycodeLinkResult.displayTarget];
                    children = items3;
                  }
                  return element3;
                }
              }
            }
          }
        }
      }
    }
    ({ attrs: attrs2, children: children2, markup } = arr);
    if ("autolink" === markup) {
      const items4 = ["<"];
      items4[HermesBuiltin.arraySpread(items4, children2, 1)] = ">";
      const element4 = { type: "element", tag: "span", attrs: {}, children: items4 };
      element5 = element4;
    } else {
      let str6 = "";
      if (null != attrs2.title) {
        str6 = "";
        if ("" !== attrs2.title) {
          const _HermesInternal = HermesInternal;
          str6 = " \"" + attrs2.title + "\"";
        }
      }
      let str9 = attrs2.href;
      if (str9 == null) {
        str9 = "";
      }
      const _HermesInternal2 = HermesInternal;
      let str12 = "[";
      const combined1 = "](" + str9 + str6 + ")";
      if ("image" === markup) {
        str12 = "![";
      }
      const items5 = [str12, ];
      items5[HermesBuiltin.arraySpread(items5, children2, 1)] = combined1;
      element5 = { type: "element", tag: "span", attrs: {}, children: items5 };
    }
    return element5;
  }
}
function closeMarkdownFrame(items) {
  const arr = items.pop();
  items[items.length - 1].text = items[items.length - 1].text + arr.text;
  if (true === arr.hasMath) {
    items[items.length - 1].hasMath = true;
  }
  const children = tmp3.children;
  const push = children.push;
  if (arr.hidden) {
    items = [];
    HermesBuiltin.arraySpread(items, arr.children, 0);
    HermesBuiltin.apply(push, items, children);
  } else {
    let element1;
    if ("a" === arr.tag) {
      element1 = createLinkNode(arr);
    } else if (set.has(arr.tag)) {
      const element = { type: "element", tag: null, attrs: null, children: null, loose: null, align: null };
      ({ tag: obj2.tag, attrs: obj2.attrs, children: obj2.children, loose: obj2.loose, align: obj2.align } = arr);
      element1 = element;
    } else {
      element1 = { type: "element", tag: "span", attrs: {}, children: arr.children };
    }
    push(element1);
  }
}
function parseMarkdownTokens(arg0, remaining) {
  let _String2;
  let attrs;
  let fromEntries;
  let items3;
  let length;
  let str3;
  let tmp21;
  let tmp5;
  let items = [{ tag: "", attrs: {}, children: [], text: "", markup: "" }];
  if (0 < arg0.length) {
    let num2 = 0;
    if (remaining.remaining > 0) {
      while (true) {
        remaining.remaining = remaining.remaining - 1;
        let element = arg0[num2];
        let tmp2 = items[items.length - 1];
        if (1 !== element.nesting) {
          if (-1 !== element.nesting) {
            let children2;
            let sum;
            let children4;
            let obj3;
            let sum1;
            let children5;
            let push3;
            let str4;
            let str5;
            let tmp16;
            let parts;
            let first;
            let tmp19;
            let obj4;
            switch (element.type) {
              case "inline":
              {
                let children = tmp2.children;
                let push4 = children.push;
                let children1 = element.children;
                let tmp27 = parseMarkdownTokens;
                if (children1 == null) {
                  children1 = [];
                }
                let items1 = [];
                let arraySpreadResult = HermesBuiltin.arraySpread(items1, tmp27(children1, remaining), 0);
                let applyResult = HermesBuiltin.apply(push4, items1, children);
                break;
              }
              case "text":
              {
                children2 = tmp2.children;
                let arr = children2.push(element.content);
                sum = tmp2.text + element.content;
                tmp2.text = sum;
                break;
              }
              case "text_special":
              {
                children2 = tmp2.children;
                let arr = children2.push(element.content);
                sum = tmp2.text + element.content;
                tmp2.text = sum;
                break;
              }
              case "code_inline":
              {
                let children3 = tmp2.children;
                let obj2 = { type: "inlineCode", content: element.content };
                let arr2 = children3.push(obj2);
                tmp2.text = tmp2.text + element.content;
                break;
              }
              case "math_inline":
              {
                children4 = tmp2.children;
                obj3 = { type: "inlineMath", content: element.content, display: tmp21 };
                tmp21 = "math_inline_double" === element.type;
                let arr3 = children4.push(obj3);
                sum1 = tmp2.text + element.content;
                tmp2.text = sum1;
                tmp2.hasMath = true;
                break;
              }
              case "math_inline_double":
              {
                children4 = tmp2.children;
                obj3 = { type: "inlineMath", content: element.content, display: tmp21 };
                tmp21 = "math_inline_double" === element.type;
                let arr3 = children4.push(obj3);
                sum1 = tmp2.text + element.content;
                tmp2.text = sum1;
                tmp2.hasMath = true;
                break;
              }
              case "fence":
              {
                children5 = tmp2.children;
                push3 = children5.push;
                str4 = element.info;
                str5 = str4.trim();
                tmp16 = /\s+/;
                parts = str5.split(tmp16);
                first = parts[0];
                tmp19 = undefined;
                if ("" !== first) {
                  tmp19 = first;
                }
                obj4 = { type: "codeBlock", language: tmp19, content: element.content };
                let push3Result = push3(obj4);
                break;
              }
              case "code_block":
              {
                children5 = tmp2.children;
                push3 = children5.push;
                str4 = element.info;
                str5 = str4.trim();
                tmp16 = /\s+/;
                parts = str5.split(tmp16);
                first = parts[0];
                tmp19 = undefined;
                if ("" !== first) {
                  tmp19 = first;
                }
                obj4 = { type: "codeBlock", language: tmp19, content: element.content };
                let push3Result = push3(obj4);
                break;
              }
              case "math_block":
              {
                let children6 = tmp2.children;
                let obj5 = { type: "mathBlock", content: element.content };
                let arr4 = children6.push(obj5);
                break;
              }
              case "softbreak":
              {
                let children7 = tmp2.children;
                let arr5 = children7.push(" ");
                tmp2.text = tmp2.text + " ";
                break;
              }
              case "hardbreak":
              {
                let children8 = tmp2.children;
                let arr6 = children8.push({ type: "br" });
                tmp2.text = tmp2.text + " ";
                break;
              }
              case "hr":
              {
                let children9 = tmp2.children;
                let arr7 = children9.push({ type: "hr" });
                break;
              }
              case "image":
              {
                let content = element.content;
                let children10 = tmp2.children;
                let push2 = children10.push;
                if (items.some((tag) => "a" === tag.tag)) {
                  let push2Result = push2(content);
                  tmp2.text = tmp2.text + content;
                } else {
                  let tmp9 = createLinkNode;
                  let _String = String;
                  let str2 = element.attrGet("src") ?? "";
                  let obj6 = { href: _String(str2), title: _String2(str3) };
                  _String2 = String;
                  str3 = element.attrGet("title") ?? "";
                  let obj7 = { tag: "a", attrs: obj6, children: items3, text: content, markup: "image" };
                  if ("" !== content) {
                    let items2 = [content];
                    items3 = items2;
                  } else {
                    items3 = [];
                  }
                  let push2Result1 = push2(tmp9(obj7));
                }
                break;
              }
              default:
              {
                if ("" !== element.content) {
                  let children11 = tmp2.children;
                  let arr8 = children11.push(element.content);
                  tmp2.text = tmp2.text + element.content;
                }
                break;
              }
            }
          } else if (items.length > 1) {
            let tmp42 = closeMarkdownFrame(items);
          }
        } else {
          let tmp4 = "p" === element.tag && !element.hidden && "li" === tmp2.tag && items.length >= 2;
          if (tmp4) {
            items[items.length - 2].loose = true;
          }
          let obj = {
            tag: null,
            attrs: fromEntries(attrs.map((item) => {
                      let tmp;
                      let tmp2;
                      [tmp, tmp2] = item;
                      const items = [tmp, String(tmp2)];
                      return items;
                    })),
            children: [],
            text: "",
            markup: element.markup,
            align: tmp5,
            hidden: element.hidden
          };
          ({ tag: obj.tag, attrs } = element);
          let push = items.push;
          let _Object = Object;
          fromEntries = Object.fromEntries;
          if (attrs == null) {
            attrs = [];
          }
          if ("th" === element.tag) {
            let str = element.attrGet("style");
            let match = null;
            if (typeof str === "string") {
              match = str.match(/text-align:\s*(left|center|right)/);
            }
            let tmp7;
            if (null != match) {
              tmp7 = match[1];
            }
            tmp5 = tmp7;
          }
          let arr9 = push(obj);
        }
        let sum2 = num2 + 1;
        if (sum2 >= arg0.length) {
          break;
        } else {
          num2 = sum2;
          if (remaining.remaining <= 0) {
            break;
          }
        }
      }
    }
  }
  if (items.length > 1) {
    do {
      let tmp37 = closeMarkdownFrame(items);
      length = items.length;
    } while (length > 1);
  }
  if (remaining.remaining <= 0) {
    const children12 = items[0].children;
    children12.push("\u2026");
  }
  return items[0].children;
}
let obj = new _modDef12427({ html: false, linkify: false, typographer: false });
let closure_2 = obj.use(dollarmathPlugin.dollarmathPlugin, { allow_space: false, allow_digits: false, allow_labels: false });
const set = new Set(["h1", "h2", "h3", "h4", "h5", "h6", "p", "ul", "ol", "li", "em", "strong", "s", "blockquote", "table", "thead", "tbody", "tr", "th", "td"]);
const re4 = /(?:https?|steam):\/\/[^\s<]/i;
const result = size.fileFinishedImporting("modules/media/PlaintextFileMarkdownParser.tsx");

export function parseMarkdownPreview(text) {
  return parseMarkdownTokens(closure_2.parse(text, {}), { remaining: 5000 });
}
