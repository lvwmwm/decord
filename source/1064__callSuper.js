// Module ID: 1064
// Function ID: 11378
// Name: _callSuper
// Dependencies: [5, 15, 17, 18, 162, 57, 65, 6, 7, 794, 1009]

// Module 1064 (_callSuper)
import asyncGeneratorStep from "_slicedToArray";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _wrapNativeSuper from "_wrapNativeSuper";
import _slicedToArray from "_slicedToArray";
import _toConsumableArray from "_toConsumableArray";
import _classCallCheck from "_toConsumableArray";
import _defineProperties from "_classCallCheck";

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = _getPrototypeOf(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, _getPrototypeOf(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_3(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isShadowRoot(parentNode) {
  let host;
  if (null != parentNode) {
    host = parentNode.host;
  }
  let shadowRoot;
  if (null != host) {
    shadowRoot = host.shadowRoot;
  }
  return Boolean(shadowRoot === parentNode);
}
function isNativeShadowDom(parentNode) {
  return "[object ShadowRoot]" === toString.call(parentNode);
}
function stringifyStylesheet(sheet) {
  const rules = sheet.rules;
  let cssRules = rules;
  if (!rules) {
    cssRules = sheet.cssRules;
  }
  let tmp3 = null;
  if (cssRules) {
    const _Array = Array;
    const str2 = Array.from(tmp2, stringifyRule).join("");
    let hasItem = str2.includes(" background-clip: text;");
    if (hasItem) {
      hasItem = !str2.includes(" -webkit-background-clip: text;");
    }
    let replaced = str2;
    if (hasItem) {
      replaced = str2.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;");
    }
    tmp3 = replaced;
    const arr = Array.from(tmp2, stringifyRule);
  }
  return tmp3;
}
function stringifyRule(cssText) {
  let cssText2;
  let selectorText;
  if ("styleSheet" in cssText) {
    const tmp18 = stringifyStylesheet(tmp.styleSheet);
    let tmp19 = tmp18;
    if (!tmp18) {
      let str17 = tmp.cssText;
      if (str17.split("\"").length >= 3) {
        const _JSON = JSON;
        const _HermesInternal5 = HermesInternal;
        const items = ["@import", "url(" + JSON.stringify(tmp.href) + ")"];
        if ("" === tmp.layerName) {
          let arr = items.push("layer");
        } else if (tmp.layerName) {
          const _HermesInternal3 = HermesInternal;
          arr = items.push("layer(" + tmp.layerName + ")");
        }
        if (tmp.supportsText) {
          const _HermesInternal4 = HermesInternal;
          items.push("supports(" + tmp.supportsText + ")");
        }
        if (tmp.media.length) {
          items.push(tmp.media.mediaText);
        }
        str17 = `${arr.join(" ")};`;
      }
      tmp19 = str17;
    }
    cssText = tmp19;
  } else if ("selectorText" in tmp) {
    ({ cssText: cssText2, selectorText } = tmp);
    const hasItem = selectorText.includes(":");
    let all = "string" === typeof tmp.style.all;
    if (all) {
      all = tmp.style.all;
    }
    if (all) {
      let num = 0;
      let str7 = "";
      let str8 = "";
      if (0 < tmp.style.length) {
        do {
          let style = tmp.style;
          let tmp8 = style[num];
          let propertyPriority = style.getPropertyPriority(tmp8);
          let propertyValue = style.getPropertyValue(tmp8);
          let str9 = "";
          if (propertyPriority) {
            str9 = " !important";
          }
          let _HermesInternal = HermesInternal;
          let str10 = "";
          let tmp11 = tmp8;
          let str11 = ":";
          let tmp12 = propertyValue;
          let tmp13 = str9;
          let str12 = ";";
          str7 = str7 + "" + tmp8 + ":" + propertyValue + str9 + ";";
          num = num + 1;
          str8 = str7;
        } while (num < tmp.style.length);
      }
      const _HermesInternal2 = HermesInternal;
      cssText2 = "" + tmp.selectorText + " { " + str8 + " }";
    }
    let replaced = cssText2;
    if (hasItem) {
      replaced = cssText2.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
    }
    return replaced;
  }
  while (true) {
    if (cssText) {
      break;
    } else {
      cssText = cssText.cssText;
      break;
    }
    return cssText;
  }
}
function shouldMaskInput(arg0) {
  let maskInputOptions;
  let tagName;
  let type;
  ({ maskInputOptions, tagName, type } = arg0);
  if ("OPTION" === tagName) {
    tagName = "SELECT";
  }
  let tmp = maskInputOptions[tagName.toLowerCase(tagName)];
  if (!tmp) {
    let tmp2 = type;
    if (type) {
      tmp2 = maskInputOptions[type];
    }
    tmp = tmp2;
  }
  if (!tmp) {
    tmp = "password" === type;
  }
  if (!tmp) {
    tmp = "INPUT" === tagName && !type && maskInputOptions.text;
    const tmp3 = "INPUT" === tagName && !type && maskInputOptions.text;
  }
  return Boolean(tmp);
}
function maskInputValue(arg0) {
  let element;
  let isMasked;
  let maskInputFn;
  let value;
  ({ value, maskInputFn, isMasked, element } = arg0);
  if (!value) {
    value = "";
  }
  let repeatResult = value;
  if (isMasked) {
    let maskInputFnResult = value;
    if (maskInputFn) {
      maskInputFnResult = maskInputFn(value, element);
    }
    const repeat = "*".repeat;
    repeatResult = "*".repeat(maskInputFnResult.length);
  }
  return repeatResult;
}
function toLowerCase(str) {
  return str.toLowerCase();
}
function toUpperCase(str) {
  return str.toUpperCase();
}
function getInputType(type) {
  type = type.type;
  let str = "password";
  if (!type.hasAttribute("data-rr-is-password")) {
    let tmp = null;
    if (type) {
      tmp = toLowerCase(type);
    }
    str = tmp;
  }
  return str;
}
function getInputValue(getAttribute) {
  if ("INPUT" === arg1) {
    if ("radio" !== arg2) {
      return value;
    }
    value = getAttribute.getAttribute("value") || "";
  }
  value = getAttribute.value;
}
function extractFileExtension(href) {
  if (null == undefined) {
    const _window = window;
    href = window.location.href;
  }
  const uRL = new URL(href, href);
  const match = uRL.pathname.match(/\.([0-9a-z]+)(?:$)/i);
  let tmp5;
  if (null != match) {
    tmp5 = tmp4[1];
  }
  let tmp7 = null;
  if (null != tmp5) {
    tmp7 = tmp5;
  }
  return tmp7;
}
function getImplementation$1(clearTimeout) {
  if (table[clearTimeout]) {
    return tmp2;
  } else {
    const _window = window;
    const _document = window.document;
    const _window2 = window;
    let obj2 = window[tmp];
    if (_document) {
      if ("function" === typeof obj.createElement) {
        const element = <iframe />;
        element.hidden = true;
        const head = obj.head;
        head.appendChild(element);
        const contentWindow = element.contentWindow;
        let tmp11 = contentWindow;
        if (contentWindow) {
          tmp11 = tmp10[tmp];
        }
        if (tmp11) {
          obj2 = tmp10[tmp];
        }
        const head2 = _document.head;
        head2.removeChild(element);
      }
    }
    const _window3 = window;
    table[clearTimeout] = obj2.bind(window);
  }
}
function setTimeout$2() {
  return getImplementation$1("setTimeout")(...arguments);
}
function clearTimeout$1() {
  return getImplementation$1("clearTimeout")(...arguments);
}
function getIframeContentDocument(contentDocument) {
  return contentDocument.contentDocument;
}
function genId() {
  let closure_24 = tmp + 1;
  return +closure_24;
}
function absoluteToStylesheet(arg0, href) {
  let str = arg0;
  let closure_0 = href;
  if (!arg0) {
    str = "";
  }
  return str.replace(closure_26, (arg0, arg1, arg2, arg3, arg4, arg5) => {
    let str = arg1;
    let str2 = arg2;
    if (!arg2) {
      str2 = arg4;
    }
    if (!str2) {
      str2 = arg5;
    }
    if (!str) {
      str = arg3;
    }
    if (!str) {
      str = "";
    }
    if (str2) {
      if (!outer1_27.test(str2)) {
        if (!outer1_28.test(str2)) {
          if (outer1_29.test(str2)) {
            const _HermesInternal3 = HermesInternal;
            return "url(" + str + str2 + str + ")";
          } else if ("/" === 5) {
            if (href.indexOf("//") > -1) {
              const parts = str6.split("/");
              const substr = parts.slice(0, 3);
              let str8 = substr.join("/");
            } else {
              str8 = str6.split("/")[0];
            }
            const _HermesInternal2 = HermesInternal;
            return "url(" + str + str8.split("?")[0] + str2 + str + ")";
          } else {
            const parts1 = href.split("/");
            const parts2 = str2.split("/");
            parts1.pop();
            const iter = parts2[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp7 = nextResult;
              if ("." !== nextResult) {
                let tmp8 = nextResult;
                if (".." === tmp7) {
                  let tmp12 = parts1;
                  let arr = arr3.pop();
                } else {
                  let tmp9 = parts1;
                  let tmp10 = nextResult;
                  let arr1 = arr3.push(tmp7);
                }
              }
              continue;
            }
            const _HermesInternal = HermesInternal;
            return "url(" + str + parts1.join("/") + str + ")";
          }
        }
      }
      const _HermesInternal4 = HermesInternal;
      return "url(" + str + str2 + str + ")";
    } else {
      return arg0;
    }
  });
}
function absoluteToDoc(doc, str) {
  let tmp = str;
  if (str) {
    tmp = str;
    if ("" !== str.trim()) {
      tmp = getHref(doc, str);
    }
  }
  return tmp;
}
function isSVGElement(tagName) {
  let ownerSVGElement = "svg" === tagName.tagName;
  if (!ownerSVGElement) {
    ownerSVGElement = tagName.ownerSVGElement;
  }
  return Boolean(ownerSVGElement);
}
function getHref(doc, str) {
  let value = weakMap.get(doc);
  if (!value) {
    const element = <a />;
    const result = weakMap.set(doc, element);
    value = element;
  }
  let str2 = "";
  if (str) {
    if (!str.startsWith("blob:")) {
      str2 = str;
    }
    return str;
  }
  const attr = value.setAttribute("href", str2);
  return value.href;
}
function transformAttribute(doc, arg1, arg2, arg3, arg4, arg5, size) {
  if (arg3) {
    if ("src" !== arg2) {
      if ("xlink:href" === arg2) {
        if ("#" !== arg3[0]) {
          return absoluteToDoc(doc, arg3);
        }
      }
      if ("background" === arg2) {
        return absoluteToDoc(doc, arg3);
      }
      if ("srcset" === arg2) {
        return (function getAbsoluteSrcsetString(doc, str) {
          let closure_0 = str;
          function collectCharacters(outer1_31) {
            const match = outer1_31.exec(str.substring(closure_1));
            str = "";
            if (match) {
              const first = match[0];
              closure_1 = closure_1 + first.length;
              str = first;
            }
            return str;
          }
          if ("" === str.trim()) {
            return str;
          } else {
            let c1 = 0;
            const items = [];
            collectCharacters(outer1_31);
            if (c1 < str.length) {
              do {
                let tmp = outer1_30;
                let collectCharactersResult1 = collectCharacters(outer1_30);
                if ("," === collectCharactersResult1.slice(-1)) {
                  let tmp13 = outer1_108;
                  let arr = items.push(outer1_108(doc, collectCharactersResult1.substring(0, collectCharactersResult1.length - 1)));
                  let tmp8 = tmp18;
                  let tmp9 = tmp19;
                  let tmp10 = tmp20;
                } else {
                  let tmp24 = outer1_108;
                  let tmp25 = outer1_108(doc, collectCharactersResult1);
                  let str2 = "";
                  let flag = false;
                  let tmp2 = c1;
                  let charAtResult = str.charAt(c1);
                  let tmp4 = str2;
                  let tmp5 = flag;
                  while ("" !== charAtResult) {
                    if (flag) {
                      if (")" === charAtResult) {
                        flag = false;
                      }
                      str2 = str2 + charAtResult;
                      let tmp11 = c1;
                      c1 = c1 + 1;
                      continue;
                    } else if ("," === charAtResult) {
                      let tmp6 = c1;
                      c1 = c1 + 1;
                      str = tmp25 + str2;
                      arr = items.push(str.trim());
                      tmp8 = str2;
                      tmp9 = flag;
                      tmp10 = charAtResult;
                    } else if ("(" === charAtResult) {
                      flag = true;
                    }
                  }
                  let str3 = tmp25 + str2;
                  let arr1 = items.push(str3.trim());
                  tmp8 = str2;
                  tmp9 = flag;
                  tmp10 = charAtResult;
                }
                let tmp15 = outer1_31;
                let collectCharactersResult2 = collectCharacters(outer1_31);
                let tmp17 = c1;
                tmp18 = tmp8;
                tmp19 = tmp9;
                tmp20 = tmp10;
              } while (c1 < str.length);
            }
            return items.join(", ");
          }
        })(doc, arg3);
      } else if ("style" === arg2) {
        let tmp6 = absoluteToStylesheet(arg3, getHref(doc));
        let tmp7 = size;
        if (size) {
          tmp7 = size.size > 0;
        }
        if (!tmp7) {
          return tmp6;
        } else {
          if (tmp6) {
            if (0 !== obj.size) {
              const parts = str11.split(";");
              let items = [];
              const iter = parts[Symbol.iterator]();
              const str12 = iter.next();
              while (iter !== undefined) {
                let tmp35 = str12;
                let trimmed = str12.trim();
                let arr2 = trimmed;
                if (trimmed) {
                  let tmp11 = trimmed;
                  let index = arr2.indexOf(":");
                  if (-1 !== index) {
                    let tmp17 = trimmed;
                    let tmp18 = index;
                    let str13 = arr2.slice(0, tmp13);
                    let tmp19 = size;
                    if (!obj.has(str13.trim())) {
                      let tmp20 = items;
                      let tmp21 = trimmed;
                      let arr = items.push(arr2);
                    }
                  } else {
                    let tmp14 = items;
                    let tmp15 = trimmed;
                    arr = items.push(arr2);
                  }
                }
                continue;
              }
              let str16 = "";
              const joined = items.join("; ");
              if (items.length > 0) {
                str16 = "";
                if (str11.endsWith(";")) {
                  str16 = ";";
                }
              }
              let sum = joined + str16;
            }
            while (true) {
              let tmp26 = globalThis;
              let _console = console;
              let str17 = "Error filtering CSS properties:";
              let warnResult = console.warn("Error filtering CSS properties:", __exception);
              sum = tmp6;
              continue;
            }
          }
          sum = tmp6;
        }
      } else {
        if ("object" === arg1) {
          if ("data" === arg2) {
            let tmp = absoluteToDoc(doc, arg3);
          }
          return tmp;
        }
        tmp = arg3;
        if ("function" === typeof arg5) {
          tmp = arg5(arg2, arg3, arg4);
        }
      }
    }
    return absoluteToDoc(doc, arg3);
  } else {
    return arg3;
  }
}
function ignoreAttribute(arg0, arg1, arg2) {
  let tmp = "video" === arg0;
  if (!tmp) {
    tmp = "audio" === arg0;
  }
  if (tmp) {
    tmp = "autoplay" === arg1;
  }
  return tmp;
}
function distanceToMatch(nodeType) {
  let num = Infinity;
  if (arguments.length > 2) {
    num = Infinity;
    if (undefined !== arguments[2]) {
      num = arguments[2];
    }
  }
  let num2 = 0;
  if (arguments.length > 3) {
    num2 = 0;
    if (undefined !== arguments[3]) {
      num2 = arguments[3];
    }
  }
  let num3 = -1;
  if (nodeType) {
    let num4 = -1;
    if (nodeType.nodeType === nodeType.ELEMENT_NODE) {
      num4 = -1;
      if (num2 <= num) {
        let tmp = num2;
        if (!arg1(nodeType)) {
          tmp = distanceToMatch(nodeType.parentNode, arg1, num, num2 + 1);
        }
        num4 = tmp;
      }
    }
    num3 = num4;
  }
  return num3;
}
function createMatchPredicate(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0) => {
    if (null === arg0) {
      return false;
    } else {
      if (closure_0) {
        if ("string" === typeof closure_0) {
          const _HermesInternal = HermesInternal;
          if (obj.matches("." + closure_0)) {
            return true;
          }
        } else {
          let diff = tmp3 - 1;
          let flag2 = false;
          if (+obj.classList.length) {
            flag2 = true;
            while (!obj2.test(obj.classList[diff])) {
              let tmp5 = +diff;
              diff = tmp5 - 1;
              flag2 = false;
              if (!tmp5) {
                break;
              }
            }
          }
          if (flag2) {
            return true;
          }
          obj2 = closure_0;
        }
      }
      let tmp11 = tmp10;
      if (!!closure_1) {
        tmp11 = !obj.matches(closure_1);
      }
      return !tmp11;
    }
  };
}
function needMaskingText(nodeType, maskTextClass2, maskTextSelector2, unmaskTextClass2, unmaskTextSelector2, maskAllText2) {
  if (nodeType.nodeType === nodeType.ELEMENT_NODE) {
    let parentElement = nodeType;
  } else {
    parentElement = nodeType.parentElement;
  }
  if (null === parentElement) {
    return false;
  } else {
    if ("INPUT" === obj.tagName) {
      const items = ["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"];
      if (items.includes(obj.getAttribute("autocomplete"))) {
        return true;
      }
    }
    if (maskAllText2) {
      let tmp4Result = tmp4(obj, tmp6(unmaskTextClass2, unmaskTextSelector2));
      let tmp11Result = tmp4Result;
      if (tmp4Result < 0) {
        return true;
      } else {
        let num7 = Infinity;
        if (tmp11Result >= 0) {
          num7 = tmp11Result;
        }
        let tmp20Result = distanceToMatch(parentElement, createMatchPredicate(maskTextClass2, maskTextSelector2), num7);
        const tmp20 = distanceToMatch;
        const tmp22 = createMatchPredicate(maskTextClass2, maskTextSelector2);
      }
    } else {
      tmp4Result = tmp4(obj, tmp6(maskTextClass2, maskTextSelector2));
      tmp20Result = tmp4Result;
      if (tmp4Result < 0) {
        return false;
      } else {
        let num5 = Infinity;
        if (tmp20Result >= 0) {
          num5 = tmp20Result;
        }
        tmp11Result = distanceToMatch(obj, createMatchPredicate(unmaskTextClass2, unmaskTextSelector2), num5);
        const tmp11 = distanceToMatch;
        const tmp16 = createMatchPredicate(unmaskTextClass2, unmaskTextSelector2);
      }
    }
    if (tmp20Result >= 0) {
      let tmp31 = !tmp30;
      if (tmp11Result >= 0) {
        tmp31 = tmp20Result <= tmp11Result;
      }
      let tmp27 = tmp31;
    } else {
      tmp27 = !tmp26;
      if (tmp11Result < 0) {
        tmp27 = maskAllText2;
      }
    }
    return tmp27;
  }
}
function serializeNode(nodeType, newlyAddedElement) {
  let blockClass;
  let blockSelector;
  let dataURLOptions;
  let doc;
  let inlineImages;
  let inlineStylesheet;
  let keepIframeSrcFn;
  let maskAllText;
  let maskAllText2;
  let maskAttributeFn;
  let maskInputFn;
  let maskInputFn2;
  let maskInputOptions;
  let maskInputOptions2;
  let maskTextClass;
  let maskTextClass2;
  let maskTextFn;
  let maskTextFn2;
  let maskTextSelector;
  let maskTextSelector2;
  let mirror;
  let recordCanvas;
  let unblockSelector;
  let unmaskTextClass;
  let unmaskTextClass2;
  let unmaskTextSelector;
  let unmaskTextSelector2;
  ({ doc, mirror, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, maskInputOptions } = newlyAddedElement);
  ({ blockClass, blockSelector, unblockSelector, maskAllText, maskAttributeFn, inlineStylesheet } = newlyAddedElement);
  if (undefined === maskInputOptions) {
    maskInputOptions = {};
  }
  ({ maskInputFn, dataURLOptions, maskTextFn } = newlyAddedElement);
  if (undefined === dataURLOptions) {
    dataURLOptions = {};
  }
  newlyAddedElement = newlyAddedElement.newlyAddedElement;
  let tmp = undefined !== newlyAddedElement;
  ({ inlineImages, recordCanvas, keepIframeSrcFn } = newlyAddedElement);
  if (tmp) {
    tmp = newlyAddedElement;
  }
  if (mirror.hasNode(doc)) {
    const id = mirror.getId(doc);
    let tmp4;
    if (1 !== id) {
      tmp4 = id;
    }
  }
  nodeType = nodeType.nodeType;
  if (nodeType.DOCUMENT_NODE === nodeType) {
    if ("CSS1Compat" !== nodeType.compatMode) {
      let obj = { type: RN.Document, childNodes: [], compatMode: nodeType.compatMode };
    } else {
      obj = { type: RN.Document, childNodes: [] };
    }
    return obj;
  } else if (nodeType.DOCUMENT_TYPE_NODE === nodeType) {
    let obj1 = { type: RN.DocumentType };
    ({ name: obj8.name, publicId: obj8.publicId, systemId: obj8.systemId } = nodeType);
    obj1.rootId = tmp2;
    return obj1;
  } else if (nodeType.ELEMENT_NODE === nodeType) {
    let obj2 = { doc, blockClass, blockSelector, unblockSelector, inlineStylesheet, maskAttributeFn, maskInputOptions, maskInputFn, dataURLOptions, inlineImages, recordCanvas, keepIframeSrcFn, newlyAddedElement: tmp, rootId: tmp2, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, ignoreCSSAttributes: newlyAddedElement.ignoreCSSAttributes };
    return (function serializeElementNode(nodeType, newlyAddedElement) {
      let blockClass;
      let blockSelector;
      let dataURLOptions;
      let doc;
      let ignoreCSSAttributes;
      let inlineImages;
      let inlineStylesheet;
      let keepIframeSrcFn;
      let maskAttributeFn;
      let maskInputFn;
      let maskInputOptions;
      let maskTextClass;
      let maskTextSelector;
      let recordCanvas;
      let unblockSelector;
      let unmaskTextClass;
      let unmaskTextSelector;
      let obj = nodeType;
      let closure_0 = nodeType;
      ({ doc, blockClass, blockSelector, unblockSelector, maskInputOptions, inlineStylesheet } = newlyAddedElement);
      if (undefined === maskInputOptions) {
        maskInputOptions = {};
      }
      ({ maskAttributeFn, dataURLOptions, maskInputFn } = newlyAddedElement);
      if (undefined === dataURLOptions) {
        dataURLOptions = {};
      }
      newlyAddedElement = newlyAddedElement.newlyAddedElement;
      let tmp3 = undefined !== newlyAddedElement;
      ({ inlineImages, recordCanvas, keepIframeSrcFn } = newlyAddedElement);
      if (tmp3) {
        tmp3 = newlyAddedElement;
      }
      ({ maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, ignoreCSSAttributes } = newlyAddedElement);
      let obj1 = obj;
      let obj2 = blockClass;
      if (unblockSelector) {
        if (obj1.matches(unblockSelector)) {
          let flag2 = false;
        }
        while (true) {
          let tmp19 = globalThis;
          let str = "form";
          let tmp18 = flag2;
          if (obj instanceof globalThis.HTMLFormElement) {
            break;
          } else {
            let tmp20 = outer1_97;
            let tmp21 = outer1_97(obj.tagName);
            let tmp22 = outer1_25;
            let str2 = "div";
            if (!outer1_25.test(tmp21)) {
              str2 = tmp21;
            }
            str = str2;
            break;
          }
          let tmp23 = str;
          obj = {};
          let tmp24 = obj;
          let length2 = obj.attributes.length;
          let num = 0;
          for (let num2 = 0; num2 < length2; num2 = num2 + 1) {
            let tmp25 = nodeType;
            let iter = obj.attributes[num2];
            let name = iter.name;
            if (name) {
              let tmp26 = outer1_112;
              let tmp27 = str;
              let value = iter.value;
              name = !outer1_112(tmp23, iter.name, undefined);
            }
            if (name) {
              let tmp28 = tmp24;
              let tmp29 = outer1_111;
              let tmp30 = str;
              let tmp31 = outer1_97;
              let tmp32 = nodeType;
              let tmp33 = doc;
              let tmp34 = maskAttributeFn;
              let tmp35 = ignoreCSSAttributes;
              tmp24[iter.name] = outer1_111(doc, tmp23, outer1_97(iter.name), iter.value, obj, maskAttributeFn, ignoreCSSAttributes);
            }
          }
          let tmp36 = str;
          let str3 = "link";
          if ("link" === tmp23) {
            if (inlineStylesheet) {
              let _Array = Array;
              let arr = Array.from(doc.styleSheets);
              let found = arr.find((href) => href.href === nodeType.href);
              let tmp38 = null;
              let tmp39 = null;
              if (found) {
                let tmp40 = outer1_93;
                tmp39 = outer1_93(found);
              }
              if (tmp39) {
                let tmp41 = tmp24;
                tmp24.rel = null;
                tmp24.href = null;
                tmp24.crossorigin = null;
                let tmp42 = outer1_107;
                tmp24._cssText = outer1_107(tmp39, found.href);
              }
            }
          }
          let tmp43 = str;
          let str4 = "style";
          if ("style" === tmp23) {
            let tmp44 = nodeType;
            if (obj.sheet) {
              let tmp45 = nodeType;
              let str5 = obj.innerText;
              if (!str5) {
                let tmp46 = nodeType;
                str5 = obj.textContent;
              }
              if (!str5) {
                str5 = "";
              }
              if (!str5.trim().length) {
                let tmp47 = outer1_93;
                let tmp48 = nodeType;
                let tmp49 = outer1_93(obj.sheet);
                if (tmp49) {
                  let tmp50 = tmp24;
                  let tmp51 = outer1_107;
                  let tmp52 = outer1_110;
                  tmp24._cssText = outer1_107(tmp49, outer1_110(doc));
                }
              }
            }
          }
          let tmp53 = str;
          let str6 = "input";
          if ("input" !== tmp23) {
            let tmp54 = str;
            let str7 = "textarea";
            if ("textarea" !== tmp23) {
              let tmp55 = str;
              let str8 = "select";
              if ("select" !== tmp23) {
                let tmp56 = str;
                let str9 = "option";
              }
              let tmp76 = str;
              let str12 = "option";
              if ("option" === tmp23) {
                let tmp77 = nodeType;
                if (obj.selected) {
                  if (!maskInputOptions.select) {
                    let tmp78 = tmp24;
                    let flag3 = true;
                    tmp24.selected = true;
                  }
                }
                let tmp79 = tmp24;
                delete tmp2.selected;
              }
              let tmp80 = str;
              let str13 = "canvas";
              if ("canvas" === tmp23) {
                if (recordCanvas) {
                  let tmp81 = nodeType;
                  let str14 = "2d";
                  if ("2d" === obj.__context) {
                    let tmp86 = nodeType;
                    if (!(function is2DCanvasBlank(getContext) {
                      const context = getContext.getContext("2d");
                      if (context) {
                        let num3 = 0;
                        if (0 < getContext.width) {
                          while (true) {
                            let num4 = 0;
                            if (0 < getContext.height) {
                              while (true) {
                                let getImageData = context.getImageData;
                                let tmp3 = outer2_20;
                                let obj = getImageData;
                                if (outer2_20 in getImageData) {
                                  let tmp4 = outer2_20;
                                  obj = getImageData[outer2_20];
                                }
                                let _Uint32Array = Uint32Array;
                                let _Math = Math;
                                let _Math2 = Math;
                                let bound = Math.min(50, getContext.width - num3);
                                let tmp6 = obj;
                                let tmp7 = context;
                                let tmp8 = num3;
                                let tmp9 = num4;
                                let tmp10 = new.target;
                                let tmp11 = new.target;
                                let uint32Array = new Uint32Array(obj.call(context, num3, num4, bound, Math.min(50, getContext.height - num4)).data.buffer);
                                let tmp12 = uint32Array;
                                if (uint32Array.some((arg0) => 0 !== arg0)) {
                                  break;
                                } else {
                                  num4 = num4 + 50;
                                  let tmp13 = getImageData;
                                  continue;
                                }
                              }
                              let flag3 = false;
                              return false;
                            }
                            num3 = num3 + 50;
                          }
                        }
                        return true;
                      } else {
                        return true;
                      }
                    })(obj)) {
                      let tmp87 = tmp24;
                      let tmp88 = nodeType;
                      tmp24.rr_dataURL = obj.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                    }
                  } else {
                    let tmp82 = nodeType;
                    let str15 = "__context";
                    if (!("__context" in obj)) {
                      let tmp83 = nodeType;
                      let toDataURLResult = obj.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                      let element = <canvas />;
                      ({ width: obj7.width, height: obj7.height } = obj);
                      if (toDataURLResult !== element.toDataURL(dataURLOptions.type, dataURLOptions.quality)) {
                        let tmp85 = tmp24;
                        tmp24.rr_dataURL = toDataURLResult;
                      }
                    }
                  }
                }
              }
              let tmp89 = str;
              let str16 = "img";
              if ("img" === tmp23) {
                if (inlineImages) {
                  let tmp90 = outer1_22;
                  if (!outer1_22) {
                    let element1 = <canvas />;
                    outer1_22 = element1;
                    let str17 = "2d";
                    let outer1_23 = element1.getContext("2d");
                  }
                  let tmp91 = nodeType;
                  let str18 = obj.currentSrc;
                  if (!str18) {
                    let str19 = "src";
                    str18 = obj.getAttribute("src");
                  }
                  if (!str18) {
                    str18 = "<unknown-src>";
                  }
                  let crossOrigin = obj.crossOrigin;
                  function recordInlineImage() {
                    const removed = obj.removeEventListener("load", recordInlineImage);
                    outer2_22.width = obj.naturalWidth;
                    outer2_22.height = obj.naturalHeight;
                    outer2_23.drawImage(obj, 0, 0);
                    obj.rr_dataURL = outer2_22.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                    while (true) {
                      let tmp3 = obj;
                      let str = "anonymous";
                      if ("anonymous" !== obj.crossOrigin) {
                        break;
                      } else {
                        let tmp4 = crossOrigin;
                        if (crossOrigin) {
                          let tmp7 = obj;
                          let tmp8 = crossOrigin;
                          obj.crossOrigin = crossOrigin;
                          break;
                        } else {
                          let tmp5 = obj;
                          let str2 = "crossorigin";
                          let removeAttributeResult = obj.removeAttribute("crossorigin");
                          break;
                        }
                        break;
                      }
                    }
                  }
                  if (obj.complete) {
                    if (0 !== obj.naturalWidth) {
                      let recordInlineImageResult = recordInlineImage();
                    }
                  }
                  let str20 = "load";
                  let listener = obj.addEventListener("load", recordInlineImage);
                }
              }
              let tmp94 = str;
              let str21 = "audio";
              let tmp95 = "audio" !== tmp23;
              if (tmp95) {
                let tmp96 = str;
                let str22 = "video";
                tmp95 = "video" !== tmp23;
              }
              if (!tmp95) {
                let tmp97 = tmp24;
                let tmp98 = nodeType;
                let str23 = "played";
                if (obj.paused) {
                  str23 = "paused";
                }
                tmp24.rr_mediaState = str23;
                let tmp99 = tmp24;
                let keepIframeSrcFnResult = nodeType;
                tmp24.rr_mediaCurrentTime = obj.currentTime;
              }
              if (!tmp3) {
                keepIframeSrcFnResult = nodeType;
                if (obj.scrollLeft) {
                  keepIframeSrcFnResult = tmp24;
                  keepIframeSrcFnResult = nodeType;
                  tmp24.rr_scrollLeft = obj.scrollLeft;
                }
                keepIframeSrcFnResult = nodeType;
                if (obj.scrollTop) {
                  keepIframeSrcFnResult = tmp24;
                  keepIframeSrcFnResult = nodeType;
                  tmp24.rr_scrollTop = obj.scrollTop;
                }
              }
              keepIframeSrcFnResult = flag2;
              if (tmp18) {
                keepIframeSrcFnResult = nodeType;
                let size = obj.getBoundingClientRect();
                obj = {};
                keepIframeSrcFnResult = tmp24;
                obj.class = tmp24.class;
                let _HermesInternal = HermesInternal;
                let str24 = "";
                let str25 = "px";
                obj.rr_width = "" + size.width + "px";
                let _HermesInternal2 = HermesInternal;
                obj.rr_height = "" + size.height + "px";
                tmp24 = obj;
              }
              keepIframeSrcFnResult = str;
              let str26 = "iframe";
              keepIframeSrcFnResult = "iframe" !== tmp23;
              if (!keepIframeSrcFnResult) {
                keepIframeSrcFnResult = tmp24;
                keepIframeSrcFnResult = keepIframeSrcFn(tmp24.src);
              }
              if (!keepIframeSrcFnResult) {
                keepIframeSrcFnResult = flag2;
                if (!flag2) {
                  keepIframeSrcFnResult = outer1_105;
                  keepIframeSrcFnResult = nodeType;
                  keepIframeSrcFnResult = outer1_105(obj);
                }
                if (!keepIframeSrcFnResult) {
                  keepIframeSrcFnResult = tmp24;
                  tmp24.rr_src = tmp24.src;
                }
                keepIframeSrcFnResult = tmp24;
                delete tmp.src;
              }
              keepIframeSrcFnResult = str;
              if (globalThis.customElements.get(tmp23)) {
                let flag = true;
              }
              while (true) {
                obj1 = {};
                keepIframeSrcFnResult = outer1_18;
                obj1.type = outer1_18.Element;
                obj1.tagName = str;
                obj1.attributes = tmp24;
                obj1.childNodes = [];
                keepIframeSrcFnResult = outer1_109;
                keepIframeSrcFnResult = outer1_109(nodeType);
                if (keepIframeSrcFnResult) {
                  break;
                } else {
                  break;
                }
                obj1.isSVG = keepIframeSrcFnResult;
                obj1.needBlock = flag2;
                obj1.rootId = tmp4;
                obj1.isCustom = flag;
                return obj1;
              }
            }
          }
          let tmp58 = outer1_99;
          let tmp57 = nodeType;
          let tmp59 = outer1_99(obj);
          let tmp60 = outer1_100;
          let tmp61 = outer1_98;
          let tmp62 = str;
          let tmp63 = outer1_100(obj, outer1_98(tmp23), tmp59);
          let checked = obj.checked;
          let str10 = "submit";
          if ("submit" !== tmp59) {
            let str11 = "button";
            if ("button" !== tmp59) {
              if (tmp63) {
                let tmp64 = outer1_115;
                let tmp65 = outer1_95;
                obj2 = { type: tmp59 };
                let tmp66 = outer1_98;
                let tmp67 = str;
                obj2.tagName = outer1_98(tmp23);
                obj2.maskInputOptions = maskInputOptions;
                let tmp68 = obj;
                let tmp69 = maskTextClass;
                let tmp70 = maskTextSelector;
                let tmp71 = unmaskTextClass;
                let tmp72 = unmaskTextSelector;
                let tmp73 = tmp24;
                let tmp74 = outer1_96;
                let obj3 = { isMasked: outer1_115(tmp57, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, outer1_95(obj2)), element: obj, value: tmp63, maskInputFn };
                tmp24.value = outer1_96(obj3);
              }
            }
          }
          if (checked) {
            let tmp75 = tmp24;
            tmp24.checked = checked;
          }
        }
      }
      if ("string" === typeof obj2) {
        const classList = obj1.classList;
        if (classList.contains(blockClass)) {
          flag2 = true;
        }
      } else {
        let diff = tmp9 - 1;
        if (+obj1.classList.length) {
          while (!obj2.test(obj1.classList[diff])) {
            let tmp14 = diff;
            let tmp15 = +diff;
            diff = tmp15 - 1;
          }
          flag2 = true;
        }
      }
      if (blockSelector) {
        flag2 = obj1.matches(blockSelector);
      } else {
        flag2 = false;
      }
    })(nodeType, obj2);
  } else if (nodeType.TEXT_NODE === nodeType) {
    let obj3 = { doc, maskAllText, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, maskTextFn, maskInputOptions, maskInputFn, rootId: tmp2 };
    let tmp8 = obj3;
    ({ maskAllText: maskAllText2, maskTextClass: maskTextClass2, unmaskTextClass: unmaskTextClass2, maskTextSelector: maskTextSelector2, unmaskTextSelector: unmaskTextSelector2, maskTextFn: maskTextFn2, maskInputOptions: maskInputOptions2, maskInputFn: maskInputFn2 } = obj3);
    let tagName = nodeType.parentNode;
    if (tagName) {
      tagName = tmp7.parentNode.tagName;
    }
    let str2 = tmp7.textContent;
    let tmp13 = "TEXTAREA" === tagName || undefined;
    if ("STYLE" === tagName || undefined) {
      if (str2) {
        const nextSibling = tmp7.nextSibling;
        let previousSibling = nextSibling;
        if (!nextSibling) {
          previousSibling = tmp7.previousSibling;
        }
        if (!previousSibling) {
          const sheet = tmp7.parentNode.sheet;
          let cssRules = tmp20;
          if (null != sheet) {
            cssRules = sheet.cssRules;
          }
          if (cssRules) {
            str2 = stringifyStylesheet(tmp7.parentNode.sheet);
          }
        }
        tmp8 = getHref(tmp8.doc);
        str2 = absoluteToStylesheet(str2, tmp8);
        while (true) {
          let tmp23 = globalThis;
          let _console = console;
          let _HermesInternal = HermesInternal;
          let str6 = "Cannot get CSS styles from text's parentNode. Error: ";
          let tmp24 = nodeType;
          let warnResult = console.warn("Cannot get CSS styles from text's parentNode. Error: " + __exception, tmp7);
          continue;
        }
      }
    }
    if ("SCRIPT" === tagName || undefined) {
      str2 = "SCRIPT_PLACEHOLDER";
    }
    let tmp36 = needMaskingText(nodeType, maskTextClass2, maskTextSelector2, unmaskTextClass2, unmaskTextSelector2, maskAllText2);
    let tmp37 = tmp11;
    if (!("STYLE" === tagName || undefined)) {
      tmp37 = tmp12;
    }
    if (!tmp37) {
      tmp37 = tmp13;
    }
    if (!tmp37) {
      tmp37 = !str2;
    }
    if (!tmp37) {
      tmp37 = !tmp36;
    }
    if (tmp37) {
      if (tmp13) {
        tmp13 = str2;
      }
      if (tmp13) {
        tmp13 = maskInputOptions2.textarea || tmp36;
        let tmp43 = maskInputOptions2.textarea || tmp36;
      }
      if (!tmp13) {
        if ("OPTION" === tagName) {
          if (str2) {
            const obj4 = {};
            const obj5 = { type: null, tagName, maskInputOptions: maskInputOptions2 };
            obj4.isMasked = needMaskingText(tmp7, maskTextClass2, maskTextSelector2, unmaskTextClass2, unmaskTextSelector2, shouldMaskInput(obj5));
            obj4.element = nodeType;
            obj4.value = str2;
            obj4.maskInputFn = maskInputFn2;
            str2 = maskInputValue(obj4);
          }
        }
        const obj6 = { type: RN.Text };
        if (!str2) {
          str2 = "";
        }
        obj6.textContent = str2;
        obj6.isStyle = tmp11;
        obj6.rootId = obj3.rootId;
        return obj6;
      } else if (maskInputFn2) {
        let maskInputFn2Result = maskInputFn2(str2, tmp7.parentNode);
      } else {
        maskInputFn2Result = str2.replace(/[\S]/g, "*");
      }
    } else if (maskTextFn2) {
      let maskTextFn2Result = maskTextFn2(str2, tmp7.parentElement);
    } else {
      maskTextFn2Result = str2.replace(/[\S]/g, "*");
    }
  } else if (nodeType.CDATA_SECTION_NODE === nodeType) {
    const obj7 = { type: RN.CDATA, textContent: "", rootId: tmp2 };
    return obj7;
  } else if (nodeType.COMMENT_NODE === nodeType) {
    obj = { type: RN.Comment, textContent: nodeType.textContent || "", rootId: tmp2 };
    return obj;
  } else {
    return false;
  }
}
function lowerIfExists(name) {
  let str = "";
  if (null != name) {
    str = name.toLowerCase();
  }
  return str;
}
function serializeNodeWithId(nodeType, doc) {
  let obj = nodeType;
  let closure_0 = nodeType;
  doc = doc.doc;
  const mirror = doc.mirror;
  const blockClass = doc.blockClass;
  const blockSelector = doc.blockSelector;
  const unblockSelector = doc.unblockSelector;
  const maskAllText = doc.maskAllText;
  const maskTextClass = doc.maskTextClass;
  const unmaskTextClass = doc.unmaskTextClass;
  const maskTextSelector = doc.maskTextSelector;
  const unmaskTextSelector = doc.unmaskTextSelector;
  const skipChild = doc.skipChild;
  const inlineStylesheet = doc.inlineStylesheet;
  let c11 = tmp3;
  let maskInputOptions = doc.maskInputOptions;
  if (undefined === maskInputOptions) {
    maskInputOptions = {};
  }
  const maskAttributeFn = doc.maskAttributeFn;
  const maskTextFn = doc.maskTextFn;
  const maskInputFn = doc.maskInputFn;
  const slimDOMOptions = doc.slimDOMOptions;
  let dataURLOptions = doc.dataURLOptions;
  if (undefined === dataURLOptions) {
    dataURLOptions = {};
  }
  const inlineImages = doc.inlineImages;
  const RN = tmp4;
  const recordCanvas = doc.recordCanvas;
  let closure_19 = tmp5;
  const onSerialize = doc.onSerialize;
  const onIframeLoad = doc.onIframeLoad;
  const iframeLoadTimeout = doc.iframeLoadTimeout;
  let num = 5000;
  let num2 = 5000;
  if (undefined !== iframeLoadTimeout) {
    num2 = iframeLoadTimeout;
  }
  const onBlockedImageLoad = doc.onBlockedImageLoad;
  const onStylesheetLoad = doc.onStylesheetLoad;
  const stylesheetLoadTimeout = doc.stylesheetLoadTimeout;
  if (undefined !== stylesheetLoadTimeout) {
    num = stylesheetLoadTimeout;
  }
  let fn = doc.keepIframeSrcFn;
  if (undefined === fn) {
    fn = () => false;
  }
  const newlyAddedElement = doc.newlyAddedElement;
  const ignoreCSSAttributes = doc.ignoreCSSAttributes;
  const preserveWhiteSpace = doc.preserveWhiteSpace;
  let flag = undefined === preserveWhiteSpace || preserveWhiteSpace;
  let c28 = flag;
  obj = { doc, mirror, blockClass, blockSelector, maskAllText, unblockSelector, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, inlineStylesheet: tmp3, maskInputOptions, maskAttributeFn, maskTextFn, maskInputFn, dataURLOptions, inlineImages: undefined !== inlineImages && inlineImages, recordCanvas: undefined !== recordCanvas && recordCanvas, keepIframeSrcFn: fn, newlyAddedElement: undefined !== newlyAddedElement && newlyAddedElement, ignoreCSSAttributes };
  let tmp7 = serializeNode(obj, obj);
  if (tmp7) {
    if (mirror.hasNode(obj)) {
      let num4 = mirror.getId(obj);
    } else {
      if (!slimDOMOptions.comment) {
        let flag2 = false;
        if (tmp7.type === RN.Element) {
          if (!slimDOMOptions.script) {
            if (slimDOMOptions.headFavicon) {
              if ("link" !== tmp7.tagName) {
                if ("meta" === tmp7.tagName) {
                  flag2 = true;
                  if (!str38.match(/^msapplication-tile(image|color)$/)) {
                    flag2 = true;
                    if ("application-name" !== lowerIfExists(tmp7.attributes.name)) {
                      flag2 = true;
                      if ("icon" !== lowerIfExists(tmp7.attributes.rel)) {
                        let tmp = lowerIfExists;
                        flag2 = true;
                        if ("apple-touch-icon" !== lowerIfExists(tmp7.attributes.rel)) {
                          tmp = lowerIfExists;
                          flag2 = true;
                        }
                      }
                    }
                  }
                  str38 = lowerIfExists(tmp7.attributes.name);
                }
              } else {
                flag2 = true;
              }
            }
            flag2 = false;
            if ("meta" === tmp7.tagName) {
              if (!slimDOMOptions.headMetaDescKeywords) {
                if (!slimDOMOptions.headMetaSocial) {
                  if (!slimDOMOptions.headMetaRobots) {
                    if (!slimDOMOptions.headMetaHttpEquiv) {
                      if (!slimDOMOptions.headMetaAuthorship) {
                        flag2 = false;
                        if (slimDOMOptions.headMetaVerification) {
                          if ("google-site-verification" !== lowerIfExists(tmp7.attributes.name)) {
                            tmp = lowerIfExists;
                            if ("yandex-verification" !== lowerIfExists(tmp7.attributes.name)) {
                              tmp = lowerIfExists;
                              if ("csrf-token" !== lowerIfExists(tmp7.attributes.name)) {
                                if ("p:domain_verify" !== lowerIfExists(tmp7.attributes.name)) {
                                  if ("verify-v1" !== lowerIfExists(tmp7.attributes.name)) {
                                    if ("verification" !== lowerIfExists(tmp7.attributes.name)) {
                                      flag2 = false;
                                    }
                                  }
                                }
                              }
                            }
                          }
                          flag2 = true;
                        }
                      } else {
                        flag2 = true;
                        if ("author" !== lowerIfExists(tmp7.attributes.name)) {
                          tmp = lowerIfExists;
                          flag2 = true;
                          if ("generator" !== lowerIfExists(tmp7.attributes.name)) {
                            tmp = lowerIfExists;
                            flag2 = true;
                            if ("framework" !== lowerIfExists(tmp7.attributes.name)) {
                              tmp = lowerIfExists;
                              flag2 = true;
                              if ("publisher" !== lowerIfExists(tmp7.attributes.name)) {
                                tmp = lowerIfExists;
                                flag2 = true;
                                if ("progid" !== lowerIfExists(tmp7.attributes.name)) {
                                  tmp = lowerIfExists;
                                  flag2 = true;
                                  if (!str48.match(/^article:/)) {
                                    flag2 = true;
                                    const str18 = lowerIfExists(tmp7.attributes.property);
                                  }
                                  str48 = lowerIfExists(tmp7.attributes.property);
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      flag2 = true;
                    }
                  } else {
                    flag2 = true;
                    if ("robots" !== lowerIfExists(tmp7.attributes.name)) {
                      tmp = lowerIfExists;
                      flag2 = true;
                      if ("googlebot" !== lowerIfExists(tmp7.attributes.name)) {
                        tmp = lowerIfExists;
                        flag2 = true;
                      }
                    }
                  }
                } else {
                  flag2 = true;
                  if (!str13.match(/^(og|twitter|fb):/)) {
                    flag2 = true;
                    if (!str14.match(/^(og|twitter):/)) {
                      flag2 = true;
                    }
                    str14 = lowerIfExists(tmp7.attributes.name);
                  }
                  str13 = lowerIfExists(tmp7.attributes.property);
                }
              } else {
                flag2 = true;
                const str12 = lowerIfExists(tmp7.attributes.name);
              }
            }
          } else {
            flag2 = true;
            if ("script" !== tmp7.tagName) {
              if ("link" !== tmp7.tagName) {
                if ("link" === tmp7.tagName) {
                  if ("prefetch" === tmp7.attributes.rel) {
                    if ("string" === typeof tmp7.attributes.href) {
                      flag2 = true;
                    }
                  }
                }
              } else {
                flag2 = true;
                if ("preload" !== tmp7.attributes.rel) {
                  flag2 = true;
                }
              }
            }
          }
        }
      } else {
        flag2 = true;
      }
      num4 = -2;
      if (!flag2) {
        if (!flag) {
          if (tmp7.type === RN.Text) {
            if (!tmp7.isStyle) {
              num4 = -2;
              const str24 = tmp7.textContent;
            }
          }
        }
        num4 = genId();
      }
    }
    const _Object = Object;
    obj = { id: num4 };
    const merged = Object.assign(tmp7, obj);
    mirror.add(obj, merged);
    if (-2 === num4) {
      return null;
    } else {
      if (onSerialize) {
        onSerialize(obj);
      }
      let tmp42 = tmp39;
      if (tmp34.type === RN.Element) {
        let tmp43 = tmp39;
        if (tmp39) {
          tmp43 = !tmp34.needBlock;
        }
        const shadowRoot = obj.shadowRoot;
        let tmp46 = shadowRoot;
        if (shadowRoot) {
          tmp46 = isNativeShadowDom(shadowRoot);
        }
        tmp42 = tmp43;
        if (tmp46) {
          tmp34.isShadowHost = true;
          tmp42 = tmp43;
        }
      }
      if (tmp34.type === RN.Document) {
        if (tmp42) {
          let headWhitespace = slimDOMOptions.headWhitespace;
          if (headWhitespace) {
            headWhitespace = tmp34.type === RN.Element;
          }
          if (headWhitespace) {
            headWhitespace = "head" === tmp34.tagName;
          }
          if (headWhitespace) {
            c28 = false;
            flag = false;
          }
          const obj1 = { doc, mirror, blockClass, blockSelector, maskAllText, unblockSelector, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, skipChild: tmp2, inlineStylesheet: tmp3, maskInputOptions, maskAttributeFn, maskTextFn, maskInputFn, slimDOMOptions, dataURLOptions, inlineImages: tmp4, recordCanvas: tmp5, preserveWhiteSpace: flag, onSerialize, onIframeLoad, iframeLoadTimeout: num2, onBlockedImageLoad, onStylesheetLoad, stylesheetLoadTimeout: num, keepIframeSrcFn: fn, ignoreCSSAttributes };
          if (obj.childNodes) {
            const _Array = Array;
            let items = Array.from(obj.childNodes);
          } else {
            items = [];
          }
          items[Symbol.iterator]();
        }
      }
      while (true) {
        let tmp61 = nodeType;
        let parentNode = obj.parentNode;
        if (!parentNode) {
          break;
        } else {
          let tmp62 = isShadowRoot;
          let tmp63 = nodeType;
          parentNode = isShadowRoot(obj.parentNode);
          break;
        }
        if (parentNode) {
          let tmp64 = isNativeShadowDom;
          let tmp65 = nodeType;
          parentNode = isNativeShadowDom(obj.parentNode);
        }
        if (parentNode) {
          let tmp66 = merged;
          let flag5 = true;
          tmp34.isShadow = true;
        }
        let tmp67 = merged;
        let tmp68 = RN;
        let needBlock = tmp34.type !== RN.Element;
        if (!needBlock) {
          let tmp69 = merged;
          let str27 = "iframe";
          needBlock = "iframe" !== tmp34.tagName;
        }
        if (!needBlock) {
          let tmp70 = merged;
          needBlock = tmp34.needBlock;
        }
        if (!needBlock) {
          let tmp71 = nodeType;
          let tmp72 = (function onceIframeLoaded(contentWindow, arg1, arg2) {
            let closure_0 = arg1;
            contentWindow = contentWindow.contentWindow;
            if (contentWindow) {
              let c1 = false;
              const readyState = tmp2.document.readyState;
              if ("complete" === readyState) {
                if (contentWindow.location.href === "about:blank") {
                  if (obj.src !== "about:blank") {
                    if ("" !== obj.src) {
                      const listener = obj.addEventListener("load", tmp);
                    }
                  }
                }
                outer1_103(tmp, 0);
                return obj.addEventListener("load", tmp);
              } else {
                let closure_2 = outer1_103(() => {
                  if (!c1) {
                    callback();
                    c1 = true;
                  }
                }, arg2);
                const listener1 = obj.addEventListener("load", () => {
                  outer2_104(closure_2);
                  let c1 = true;
                  callback();
                });
              }
            }
          })(obj, () => {
            const tmp = outer1_105(closure_0);
            if (tmp) {
              if (onIframeLoad) {
                const obj = { doc: tmp, mirror, blockClass, blockSelector, unblockSelector, maskAllText, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, skipChild: false, inlineStylesheet: closure_11, maskInputOptions, maskAttributeFn, maskTextFn, maskInputFn, slimDOMOptions, dataURLOptions, inlineImages: closure_18, recordCanvas: closure_19, preserveWhiteSpace: c28, onSerialize, onIframeLoad, iframeLoadTimeout: num2, onStylesheetLoad, stylesheetLoadTimeout: num, keepIframeSrcFn: fn, ignoreCSSAttributes };
                const tmp30 = outer1_118(tmp, obj);
                if (tmp30) {
                  onIframeLoad(closure_0, tmp30);
                }
              }
            }
          }, num2);
        }
        let tmp73 = merged;
        let tmp74 = RN;
        if (tmp34.type === RN.Element) {
          let tmp75 = merged;
          let str28 = "img";
          if ("img" === tmp34.tagName) {
            let tmp76 = nodeType;
            if (!obj.complete) {
              let tmp77 = merged;
              if (tmp34.needBlock) {
                let tmp78 = nodeType;
                function updateImageDimensions() {
                  if (obj.isConnected) {
                    if (!obj.complete) {
                      if (onBlockedImageLoad) {
                        const boundingClientRect = obj.getBoundingClientRect();
                        let tmp7 = tmp6;
                        if (boundingClientRect.width > 0) {
                          tmp7 = tmp5.height > 0;
                        }
                        if (tmp7) {
                          onBlockedImageLoad(obj, merged, boundingClientRect);
                        }
                      }
                    }
                  }
                  const removed = obj.removeEventListener("load", updateImageDimensions);
                }
                if (obj.isConnected) {
                  let str29 = "load";
                  let listener = obj.addEventListener("load", updateImageDimensions);
                }
              }
            }
          }
        }
        let tmp80 = merged;
        let tmp81 = RN;
        let tmp82 = tmp34.type === RN.Element;
        if (tmp82) {
          let tmp83 = merged;
          let str30 = "link";
          tmp82 = "link" === tmp34.tagName;
        }
        if (tmp82) {
          let tmp84 = merged;
          let str31 = "string";
          tmp82 = "string" === typeof tmp34.attributes.rel;
        }
        if (tmp82) {
          let tmp85 = merged;
          let str32 = "stylesheet";
          let tmp86 = "stylesheet" === tmp34.attributes.rel;
          if (!tmp86) {
            let tmp87 = merged;
            let str33 = "preload";
            let tmp88 = "preload" === tmp34.attributes.rel;
            if (tmp88) {
              let tmp89 = merged;
              let str34 = "string";
              tmp88 = "string" === typeof tmp34.attributes.href;
            }
            if (tmp88) {
              let tmp90 = extractFileExtension;
              let tmp91 = merged;
              let str35 = "css";
              tmp88 = "css" === extractFileExtension(tmp34.attributes.href);
            }
            tmp86 = tmp88;
          }
          tmp82 = tmp86;
        }
        if (tmp82) {
          let tmp92 = nodeType;
          let tmp93 = (function onceStylesheetLoaded(sheet, arg1, arg2) {
            let closure_0 = arg1;
            let c1 = false;
            if (!sheet.sheet) {
              let closure_2 = outer1_103(() => {
                if (!c1) {
                  callback();
                  c1 = true;
                }
              }, arg2);
              const listener = sheet.addEventListener("load", () => {
                outer2_104(closure_2);
                let c1 = true;
                callback();
              });
            }
          })(obj, () => {
            if (onStylesheetLoad) {
              const obj = { doc, mirror, blockClass, blockSelector, unblockSelector, maskAllText, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, skipChild: false, inlineStylesheet: closure_11, maskInputOptions, maskAttributeFn, maskTextFn, maskInputFn, slimDOMOptions, dataURLOptions, inlineImages: closure_18, recordCanvas: closure_19, preserveWhiteSpace: c28, onSerialize, onIframeLoad, iframeLoadTimeout: num2, onStylesheetLoad, stylesheetLoadTimeout: num, keepIframeSrcFn: fn, ignoreCSSAttributes };
              const tmp30 = outer1_118(closure_0, obj);
              if (tmp30) {
                onStylesheetLoad(closure_0, tmp30);
              }
            }
          }, num);
        }
        let tmp94 = merged;
        let tmp95 = RN;
        if (tmp34.type === RN.Element) {
          let tmp96 = merged;
          delete tmp.needBlock;
        }
        return merged;
      }
    }
  } else {
    const _console = console;
    console.warn(obj, "not serialized");
    return null;
  }
}
function on(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let _document = arguments[2];
    }
    const obj = { capture: true, passive: true };
    const listener = _document.addEventListener(arg0, arg1, obj);
    return () => _document.removeEventListener(closure_0, closure_1, obj);
  }
  _document = document;
}
function throttle$1(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  if (arguments.length > 2) {
    let closure_2 = {};
    let c3 = null;
    let c4 = 0;
    return function() {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      let timestamp = Date.now();
      let tmp3 = timestamp;
      if (!timestamp) {
        tmp3 = false !== closure_2.leading;
      }
      const diff = self - (timestamp - timestamp);
      if (diff > 0) {
        if (diff <= self) {
          let tmp7 = c3;
          if (!c3) {
            tmp7 = false === closure_2.trailing;
          }
          if (!tmp7) {
            c3 = outer1_138(() => {
              let num = 0;
              if (false !== outer1_2.leading) {
                const _Date = Date;
                num = Date.now();
              }
              const timestamp = num;
              let c3 = null;
              array.apply(self, array);
            }, diff);
          }
        }
      }
      if (c3) {
        !(function clearTimeout$2(c3) {
          return outer2_137("clearTimeout")(...arguments);
        })(c3);
        c3 = null;
      }
      array.apply(self, array);
    };
  }
}
function hookSetter(arg0, arg1, arg2, arg3) {
  let tmp = arg2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  if (arguments.length > 4) {
    if (undefined !== arguments[4]) {
      let _window = arguments[4];
    }
    const _Object = _window.Object;
    const ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(arg0, arg1);
    const _Object2 = _window.Object;
    if (!arg3) {
      let obj = {
        set(arg0) {
              let closure_0 = arg0;
              const self = this;
              outer1_138(() => {
                outer1_2.set.call(self, closure_0);
              }, 0);
              let set = closure_3;
              if (closure_3) {
                set = closure_3.set;
              }
              if (set) {
                closure_3.set.call(this, arg0);
                const set2 = closure_3.set;
              }
            }
      };
      tmp = obj;
    }
    _Object2.defineProperty(arg0, arg1, tmp);
    return () => {
      let obj = closure_3;
      if (!closure_3) {
        obj = {};
      }
      return outer1_121(closure_0, closure_1, obj, true);
    };
  }
  _window = window;
}
function patch(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  if (arg1 in arg0) {
    const asyncGeneratorStep = tmp5;
    const tmp7 = arg2(tmp[tmp2]);
    if ("function" === typeof tmp7) {
      const prototype = tmp8.prototype;
      let obj = prototype;
      if (!prototype) {
        obj = {};
      }
      tmp8.prototype = obj;
      const _Object = Object;
      obj = {};
      obj = { enumerable: false, value: tmp5 };
      obj.__rrweb_original__ = obj;
      Object.defineProperties(tmp8, obj);
    }
    arg0[arg1] = tmp7;
    return () => {
      closure_0[closure_1] = closure_2;
    };
  } else {
    return () => {

    };
  }
}
function getWindowScroll(document) {
  const _document = document.document;
  const obj = {};
  if (_document.scrollingElement) {
    let num = _document.scrollingElement.scrollLeft;
  } else if (undefined !== document.pageXOffset) {
    num = document.pageXOffset;
  } else {
    num = undefined;
    if (null != _document) {
      num = _document.documentElement.scrollLeft;
    }
    if (!num) {
      let scrollLeft;
      if (null != _document) {
        const body = _document.body;
        if (null != body) {
          const parentElement = body.parentElement;
          if (null != parentElement) {
            scrollLeft = parentElement.scrollLeft;
          }
        }
      }
      num = scrollLeft;
    }
    if (!num) {
      let scrollLeft1;
      if (null != _document) {
        const body2 = _document.body;
        if (null != body2) {
          scrollLeft1 = body2.scrollLeft;
        }
      }
      num = scrollLeft1;
    }
    if (!num) {
      num = 0;
    }
  }
  obj.left = num;
  if (_document.scrollingElement) {
    let num2 = _document.scrollingElement.scrollTop;
  } else if (undefined !== document.pageYOffset) {
    num2 = document.pageYOffset;
  } else {
    num2 = undefined;
    if (null != _document) {
      num2 = _document.documentElement.scrollTop;
    }
    if (!num2) {
      let scrollTop;
      if (null != _document) {
        const body3 = _document.body;
        if (null != body3) {
          const parentElement2 = body3.parentElement;
          if (null != parentElement2) {
            scrollTop = parentElement2.scrollTop;
          }
        }
      }
      num2 = scrollTop;
    }
    if (!num2) {
      let scrollTop1;
      if (null != _document) {
        const body4 = _document.body;
        if (null != body4) {
          scrollTop1 = body4.scrollTop;
        }
      }
      num2 = scrollTop1;
    }
    if (!num2) {
      num2 = 0;
    }
  }
  obj.top = num2;
  return obj;
}
function getWindowHeight() {
  if (!innerHeight) {
    const _document = document;
    let clientHeight = document.documentElement;
    if (clientHeight) {
      const _document2 = document;
      clientHeight = document.documentElement.clientHeight;
    }
    innerHeight = clientHeight;
  }
  if (!innerHeight) {
    const _document3 = document;
    let clientHeight2 = document.body;
    if (clientHeight2) {
      const _document4 = document;
      clientHeight2 = document.body.clientHeight;
    }
    innerHeight = clientHeight2;
  }
  return innerHeight;
}
function getWindowWidth() {
  if (!innerWidth) {
    const _document = document;
    let clientWidth = document.documentElement;
    if (clientWidth) {
      const _document2 = document;
      clientWidth = document.documentElement.clientWidth;
    }
    innerWidth = clientWidth;
  }
  if (!innerWidth) {
    const _document3 = document;
    let clientWidth2 = document.body;
    if (clientWidth2) {
      const _document4 = document;
      clientWidth2 = document.body.clientWidth;
    }
    innerWidth = clientWidth2;
  }
  return innerWidth;
}
function closestElementOfNode$1(arg0) {
  if (arg0) {
    if (tmp.nodeType === tmp.ELEMENT_NODE) {
      let parentElement = arg0;
    } else {
      parentElement = tmp.parentElement;
    }
    return parentElement;
  } else {
    return null;
  }
}
function isBlocked(arg0, arg1, arg2, arg3, arg4) {
  if (arg0) {
    const obj = closestElementOfNode$1(arg0);
    if (obj) {
      const tmp5 = createMatchPredicate(arg1, arg2);
      if (arg4) {
        const tmp10 = distanceToMatch(obj, tmp5);
        let tmp12 = !tmp11;
        if (tmp10 >= 0) {
          let num3 = -1;
          if (arg3) {
            num3 = distanceToMatch(obj, createMatchPredicate(null, arg3));
          }
          tmp12 = tmp10 > -1 && num3 < 0 || tmp10 < num3;
          const tmp16 = tmp10 > -1 && num3 < 0 || tmp10 < num3;
        }
        return tmp12;
      } else {
        let matchesResult = arg3;
        if (arg3) {
          matchesResult = obj.matches(arg3);
        }
        return tmp5(obj) && !matchesResult;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function isIgnored(arg0, getId) {
  return -2 === getId.getId(arg0);
}
function isAncestorRemoved(parentNode, has) {
  if (isShadowRoot(parentNode)) {
    return false;
  } else {
    let tmp = !has.has(has.getId(parentNode));
    if (!tmp) {
      let tmp2 = !parentNode.parentNode || parentNode.parentNode.nodeType !== parentNode.DOCUMENT_NODE;
      if (tmp2) {
        let tmp3 = !parentNode.parentNode;
        if (!tmp3) {
          tmp3 = isAncestorRemoved(parentNode.parentNode, has);
        }
        tmp2 = tmp3;
      }
      tmp = tmp2;
    }
    return tmp;
  }
}
function legacy_isTouchEvent(changedTouches) {
  return Boolean(changedTouches.changedTouches);
}
function isSerializedIframe(nodeName, getMeta) {
  let meta = "IFRAME" === nodeName.nodeName;
  if (meta) {
    meta = getMeta.getMeta(nodeName);
  }
  return Boolean(meta);
}
function isSerializedStylesheet(nodeName, getMeta) {
  let getAttribute = "LINK" === nodeName.nodeName;
  if (getAttribute) {
    getAttribute = nodeName.nodeType === nodeName.ELEMENT_NODE;
  }
  if (getAttribute) {
    getAttribute = nodeName.getAttribute;
  }
  if (getAttribute) {
    getAttribute = "stylesheet" === nodeName.getAttribute("rel");
  }
  if (getAttribute) {
    getAttribute = getMeta.getMeta(nodeName);
  }
  return Boolean(getAttribute);
}
function hasShadowRoot(shadowRoot) {
  shadowRoot = undefined;
  if (null != shadowRoot) {
    shadowRoot = shadowRoot.shadowRoot;
  }
  return Boolean(shadowRoot);
}
function getShadowHost(getRootNode) {
  let nodeType;
  if (null != getRootNode.getRootNode) {
    const rootNode = getRootNode.getRootNode();
    if (null != rootNode) {
      nodeType = rootNode.nodeType;
    }
  }
  let host = null;
  if (tmp3) {
    host = getRootNode.getRootNode().host;
  }
  return host;
}
function shadowHostInDom(ownerDocument) {
  let tmp5;
  let tmp = ownerDocument;
  ownerDocument = ownerDocument.ownerDocument;
  if (ownerDocument) {
    let tmp3 = getShadowHost(tmp);
    if (tmp3) {
      do {
        let tmp4 = getShadowHost;
        tmp5 = getShadowHost(tmp3);
        tmp = tmp3;
        tmp3 = tmp5;
      } while (tmp5);
    }
    return ownerDocument.contains(tmp);
  } else {
    return false;
  }
}
function inDom(ownerDocument) {
  ownerDocument = ownerDocument.ownerDocument;
  let tmp2 = !tmp;
  if (!!ownerDocument) {
    let hasItem = ownerDocument.contains(ownerDocument);
    if (!hasItem) {
      hasItem = shadowHostInDom(ownerDocument);
    }
    tmp2 = hasItem;
  }
  return tmp2;
}
function getImplementation(arg0) {
  if (table2[arg0]) {
    return tmp2;
  } else {
    const _window = window;
    const _document = window.document;
    const _window2 = window;
    let obj2 = window[tmp];
    if (_document) {
      if ("function" === typeof obj.createElement) {
        const element = <iframe />;
        element.hidden = true;
        const head = obj.head;
        head.appendChild(element);
        const contentWindow = element.contentWindow;
        let tmp11 = contentWindow;
        if (contentWindow) {
          tmp11 = tmp10[tmp];
        }
        if (tmp11) {
          obj2 = tmp10[tmp];
        }
        const head2 = _document.head;
        head2.removeChild(element);
      }
    }
    const _window3 = window;
    table2[arg0] = obj2.bind(window);
  }
}
function setTimeout$1() {
  return getImplementation("setTimeout")(...arguments);
}
function getIFrameContentDocument(contentDocument) {
  return contentDocument.contentDocument;
}
function isNodeInLinkedList(arg0) {
  return "__ln" in arg0;
}
function deepDelete(arg0, childNodes) {
  let closure_0 = arg0;
  arg0.delete(childNodes);
  childNodes = childNodes.childNodes;
  if (null != childNodes) {
    const item = childNodes.forEach((arg0) => {
      outer1_141(closure_0, arg0);
    });
  }
}
function isParentRemoved(arg0, parentNode) {
  let tmp = 0 !== arg0.length;
  if (tmp) {
    tmp = (function _isParentRemoved(arg0, parentNode, arg2) {
      let closure_0 = arg0;
      let closure_1 = arg2;
      parentNode = parentNode.parentNode;
      if (parentNode) {
        const tmp = (function _loop() {
          const id2 = id.getId(parentNode);
          if (id2.some((id) => id.id === closure_0)) {
            const obj = { v: true };
            return obj;
          } else {
            parentNode = parentNode.parentNode;
          }
        })();
        while (!tmp) {
          let tmp2 = parentNode;
        }
        return tmp.v;
      }
      return false;
    })(arg0, parentNode, arg2);
  }
  return tmp;
}
function isAncestorInSet(size, parentNode) {
  let tmp = 0 !== size.size;
  if (tmp) {
    tmp = _isAncestorInSet(size, parentNode);
  }
  return tmp;
}
function _isAncestorInSet(has, parentNode) {
  parentNode = parentNode.parentNode;
  let tmp2 = !tmp;
  if (!!parentNode) {
    const tmp3 = !has.has(parentNode);
    let tmp4 = !tmp3;
    if (tmp3) {
      tmp4 = _isAncestorInSet(has, parentNode);
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function getEventTarget(composedPath) {
  if ("composedPath" in composedPath) {
    const composedPathResult = composedPath.composedPath();
    if (composedPathResult.length) {
      return tmp3[0];
    }
  } else if ("path" in composedPath) {
    if (composedPath.path.length) {
      return composedPath.path[0];
    }
  }
  while (true) {
    let tmp5 = composedPath;
    let target = composedPath;
    if (!composedPath) {
      break;
    } else {
      target = composedPath.target;
      break;
    }
    return target;
  }
}
function initMutationObserver(doc, doc) {
  let closure_0 = doc;
  const obj = new closure_45();
  obj.init(doc);
  let __rrMutationObserver = window.MutationObserver;
  if (!__rrMutationObserver) {
    const _window = window;
    __rrMutationObserver = window.__rrMutationObserver;
  }
  let __symbol__Result;
  if (null != window) {
    if (null != Zone) {
      if (null != Zone.__symbol__) {
        __symbol__Result = Zone.__symbol__("MutationObserver");
      }
    }
  }
  let tmp4 = __symbol__Result;
  if (__symbol__Result) {
    const _window2 = window;
    tmp4 = window[__symbol__Result];
  }
  if (tmp4) {
    const _window3 = window;
    __rrMutationObserver = window[__symbol__Result];
  }
  __rrMutationObserver = new __rrMutationObserver(callbackWrapper((arg0) => {
    let onMutation = doc.onMutation;
    if (onMutation) {
      onMutation = false === doc.onMutation(arg0);
    }
    if (!onMutation) {
      const processMutations = obj.processMutations;
      processMutations.bind(obj)(arg0);
    }
  }));
  __rrMutationObserver.observe(doc, { attributes: true, attributeOldValue: true, characterData: true, characterDataOldValue: true, childList: true, subtree: true });
  return __rrMutationObserver;
}
function initMouseInteractionObserver(doc) {
  let _getPrototypeOf;
  let _inherits;
  let asyncGeneratorStep;
  let closure_3;
  let dependencyMap;
  let require;
  let sampling;
  ({ mouseInteractionCb: require, doc: dependencyMap, mirror: asyncGeneratorStep, blockClass: closure_3, blockSelector: _getPrototypeOf, unblockSelector: _inherits, sampling } = doc);
  if (false === sampling.mouseInteraction) {
    return () => {

    };
  } else {
    if (true !== sampling.mouseInteraction) {
      if (undefined !== sampling.mouseInteraction) {
        let mouseInteraction = sampling.mouseInteraction;
      }
      let closure_7 = [];
      let c8 = null;
      const _Object = Object;
      const keys = Object.keys(closure_39);
      const found = keys.filter((str) => {
        let isNaNResult = Number.isNaN(Number(str));
        if (isNaNResult) {
          isNaNResult = !str.endsWith("_Departed");
        }
        if (isNaNResult) {
          isNaNResult = false !== mouseInteraction[str];
        }
        return isNaNResult;
      });
      let item = found.forEach((arg0) => {
        const str = outer1_97(arg0);
        let replaced = str;
        if (window.PointerEvent) {
          if (outer1_39.MouseDown !== outer1_39[arg0]) {
            if (outer1_39.MouseUp !== tmp4) {
              if (outer1_39.TouchStart !== tmp4) {
                replaced = str;
              }
            }
          }
          replaced = str.replace("mouse", "pointer");
        }
        let tmp = (function getHandler(arg0) {
          let closure_0 = arg0;
          return (pointerType) => {
            let clientX;
            let clientY;
            const tmp = outer3_145(pointerType);
            if (!outer3_127(tmp, outer2_3, outer2_4, outer2_5, true)) {
              if ("pointerType" in pointerType) {
                pointerType = pointerType.pointerType;
                if ("mouse" === pointerType) {
                  let Mouse = outer3_40.Mouse;
                } else if ("touch" === pointerType) {
                  Mouse = outer3_40.Touch;
                } else {
                  Mouse = null;
                  if ("pen" === pointerType) {
                    Mouse = outer3_40.Pen;
                  }
                }
                if (Mouse === outer3_40.Touch) {
                  let str2 = "TouchStart";
                  let Touch = Mouse;
                  if (outer3_39[closure_0] !== outer3_39.MouseDown) {
                    Touch = Mouse;
                    str2 = tmp2;
                    if (outer3_39[closure_0] === outer3_39.MouseUp) {
                      str2 = "TouchEnd";
                      Touch = Mouse;
                    }
                  }
                } else {
                  const Pen = outer3_40.Pen;
                  Touch = Mouse;
                  str2 = tmp2;
                }
              } else {
                Touch = null;
                str2 = tmp2;
                if (outer3_130(pointerType)) {
                  Touch = outer3_40.Touch;
                  str2 = tmp2;
                }
              }
              if (null !== Touch) {
                let outer2_8 = Touch;
                let startsWithResult = str2.startsWith("Touch");
                if (startsWithResult) {
                  startsWithResult = Touch === outer3_40.Touch;
                }
                if (!startsWithResult) {
                  let startsWithResult1 = str2.startsWith("Mouse");
                  if (startsWithResult1) {
                    startsWithResult1 = Touch === outer3_40.Mouse;
                  }
                  startsWithResult = startsWithResult1;
                }
                let tmp22 = Touch;
                if (startsWithResult) {
                  tmp22 = null;
                }
              } else {
                tmp22 = Touch;
                if (outer3_39[closure_0] === outer3_39.Click) {
                  tmp22 = outer2_8;
                  outer2_8 = null;
                }
              }
              let first = pointerType;
              if (outer3_130(pointerType)) {
                first = pointerType.changedTouches[0];
              }
              if (first) {
                const id = outer2_2.getId(tmp);
                ({ clientX, clientY } = first);
                let obj = { type: outer3_39[str2], id, x: clientX, y: clientY };
                let tmp36 = null !== tmp22;
                if (tmp36) {
                  obj = { pointerType: tmp22 };
                  tmp36 = obj;
                }
                outer3_46(outer2_0)(Object.assign(obj, tmp36));
                const tmp33 = outer3_46(outer2_0);
              }
            }
          };
        })(arg0);
      });
      return callbackWrapper(() => {
        const item = arr.forEach((arg0) => arg0());
      });
    }
    mouseInteraction = {};
  }
}
function initScrollObserver(sampling) {
  let _getPrototypeOf;
  let _inherits;
  let asyncGeneratorStep;
  let closure_3;
  let doc;
  let require;
  ({ scrollCb: require, doc } = sampling);
  ({ mirror: asyncGeneratorStep, blockClass: closure_3, blockSelector: _getPrototypeOf, unblockSelector: _inherits } = sampling);
  let num = sampling.sampling.scroll;
  if (!num) {
    num = 100;
  }
  return on("scroll", callbackWrapper(throttle$1(callbackWrapper((arg0) => {
    const tmp = outer1_145(arg0);
    if (tmp) {
      if (!outer1_127(tmp, closure_3, closure_4, closure_5, true)) {
        id = id.getId(tmp);
        if (tmp === doc) {
          if (doc.defaultView) {
            let obj = { id };
            ({ left: obj2.x, top: obj2.y } = outer1_123(doc.defaultView));
            callback(obj);
            const tmp15 = outer1_123(doc.defaultView);
          }
        }
        obj = { id };
        ({ scrollLeft: obj.x, scrollTop: obj.y } = tmp);
        callback(obj);
      }
    }
  }), num)), doc);
}
function initInputObserver(sampling) {
  let _classCallCheck;
  let _defineProperties;
  let _getPrototypeOf;
  let _inherits;
  let _slicedToArray;
  let _toConsumableArray;
  let asyncGeneratorStep;
  let c11;
  let c12;
  let c13;
  let c14;
  let closure_3;
  let doc;
  let require;
  let sentryReplaySession;
  function eventHandler(isTrusted) {
    const tmp = outer1_145(isTrusted);
    let parentElement = tmp;
    let tmp2 = tmp;
    if (tmp) {
      tmp2 = outer1_98(tmp.tagName);
    }
    const doc = tmp2;
    let obj = tmp;
    if ("OPTION" === tmp2) {
      parentElement = tmp.parentElement;
      obj = parentElement;
    }
    if (obj) {
      if (tmp2) {
        if (outer1_48.indexOf(tmp2) >= 0) {
          if (!outer1_127(obj, checked, closure_4, closure_5, true)) {
            const classList = obj.classList;
            if (!classList.contains(closure_6)) {
              if (!closure_7) {
                const tmp9 = outer1_99(obj);
                let closure_2 = tmp9;
                checked = false;
                obj = { maskInputOptions: closure_8, tagName: tmp2, type: tmp9 };
                const tmp20 = outer1_115(obj, closure_11, closure_13, closure_12, closure_14, outer1_95(obj));
                closure_4 = tmp20;
                let tmp21 = "radio" !== tmp9;
                if (tmp21) {
                  tmp21 = "checkbox" !== tmp9;
                }
                let flag2 = false;
                if (!tmp21) {
                  checked = obj.checked;
                  flag2 = checked;
                }
                obj = { isMasked: tmp20 };
                obj.element = obj;
                obj.value = outer1_100(obj, tmp2, tmp9);
                obj.maskInputFn = closure_9;
                const tmp24 = outer1_96(obj);
                if (closure_10) {
                  const obj1 = { text: tmp24, isChecked: flag2, userTriggered: isTrusted.isTrusted };
                  let obj2 = obj1;
                } else {
                  obj2 = { text: tmp24, isChecked: flag2 };
                }
                cbWithDedup(obj, obj2);
                const name = obj.name;
                if (tmp28) {
                  const _HermesInternal = HermesInternal;
                  const elements = doc.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]");
                  const item = elements.forEach((element) => {
                    if (element !== parentElement) {
                      let obj = { isMasked: closure_4, element, value: outer2_100(element, closure_1, closure_2), maskInputFn: outer1_9 };
                      const tmp10 = outer2_96(obj);
                      if (outer1_10) {
                        obj = { text: tmp10, isChecked: !checked, userTriggered: false };
                      } else {
                        obj = { text: tmp10, isChecked: !checked };
                      }
                      outer1_18(element, obj);
                      const tmp11 = outer1_18;
                    }
                  });
                }
                let tmp11 = outer1_100(obj, tmp2, tmp9);
                const tmp25 = cbWithDedup;
                tmp28 = "radio" === tmp9 && name && flag2;
              }
            }
          }
        }
      }
    }
  }
  function cbWithDedup(arg0, text) {
    const value = outer1_49.get(arg0);
    const result = outer1_49.set(arg0, text);
    id = id.getId(arg0);
    outer1_46(closure_0)(Object.assign({}, text, { id }));
  }
  ({ inputCb: require, doc } = sampling);
  ({ mirror: asyncGeneratorStep, blockClass: closure_3, blockSelector: _getPrototypeOf, unblockSelector: _inherits, ignoreClass: _slicedToArray, ignoreSelector: _toConsumableArray, maskInputOptions: _classCallCheck, maskInputFn: _defineProperties, userTriggeredOnInput: sentryReplaySession, maskTextClass: c11, unmaskTextClass: c12, maskTextSelector: c13, unmaskTextSelector: c14 } = sampling);
  const mapped = "last" === sampling.sampling.input ? ["change"] : ["input", "change"].map((arg0) => outer1_119(arg0, outer1_46(eventHandler), doc));
  const defaultView = doc.defaultView;
  if (defaultView) {
    const _Object = defaultView.Object;
    const ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(defaultView.HTMLInputElement.prototype, "value");
    const items = [defaultView.HTMLInputElement.prototype, "value"];
    const items1 = [items, , , , , ];
    const items2 = [defaultView.HTMLInputElement.prototype, "checked"];
    items1[1] = items2;
    const items3 = [defaultView.HTMLSelectElement.prototype, "value"];
    items1[2] = items3;
    const items4 = [defaultView.HTMLTextAreaElement.prototype, "value"];
    items1[3] = items4;
    const items5 = [defaultView.HTMLSelectElement.prototype, "selectedIndex"];
    items1[4] = items5;
    const items6 = [defaultView.HTMLOptionElement.prototype, "selected"];
    items1[5] = items6;
    let set = ownPropertyDescriptor;
    if (ownPropertyDescriptor) {
      set = ownPropertyDescriptor.set;
    }
    if (set) {
      const push = mapped.push;
      push.apply(mapped, _toConsumableArray(items1.map((arg0) => outer1_121(arg0[0], arg0[1], {
        set() {
          outer2_46(outer1_17)({ target: this, isTrusted: false });
        }
      }, false, defaultView))));
    }
    return callbackWrapper(() => {
      const item = mapped.forEach((arg0) => arg0());
    });
  } else {
    return () => {
      const item = mapped.forEach((arg0) => arg0());
    };
  }
  const arr = "last" === sampling.sampling.input ? ["change"] : ["input", "change"];
}
function getNestedCSSRulePositions(parentRule) {
  const items = [];
  if (!hasNestedCSSRule("CSSGroupingRule")) {
    if (!hasNestedCSSRule("CSSMediaRule")) {
      if (!hasNestedCSSRule("CSSSupportsRule")) {
        if (hasNestedCSSRule("CSSConditionRule")) {
          return items;
        }
        if (parentRule.parentStyleSheet) {
          const _Array = Array;
          let arr = Array.from(parentRule.parentStyleSheet.cssRules);
          arr = items.unshift(arr.indexOf(parentRule));
        }
      } else {
      }
    } else {
    }
  } else {
  }
  items.unshift(Array.from(parentRule.parentRule.cssRules).indexOf(parentRule));
}
function getIdAndStyleId(arg0, getId, getId2) {
  let obj = arg0;
  if (arg0) {
    if (obj.ownerNode) {
      const id = getId.getId(obj.ownerNode);
    } else {
      const id1 = getId2.getId(obj);
    }
    obj = { styleId: id1, id };
  } else {
    return {};
  }
}
function initAdoptedStyleSheetObserver(doc, doc) {
  let dependencyMap;
  let mirror;
  let closure_0 = doc;
  ({ mirror, stylesheetManager: dependencyMap } = doc);
  let id = null;
  if ("#document" === doc.nodeName) {
    id = mirror.getId(doc);
  } else {
    id = mirror.getId(doc.host);
  }
  if ("#document" === doc.nodeName) {
    const defaultView2 = doc.defaultView;
    let Document;
    if (null != defaultView2) {
      Document = defaultView2.Document;
    }
    let ShadowRoot = Document;
  } else {
    const ownerDocument = doc.ownerDocument;
    if (null != ownerDocument) {
      const defaultView = ownerDocument.defaultView;
      if (null != defaultView) {
        ShadowRoot = defaultView.ShadowRoot;
      }
    }
  }
  let ownPropertyDescriptor;
  if (null != ShadowRoot) {
    if (ShadowRoot.prototype) {
      let prototype;
      if (null != ShadowRoot) {
        prototype = ShadowRoot.prototype;
      }
      ownPropertyDescriptor = Object.getOwnPropertyDescriptor(prototype, "adoptedStyleSheets");
    }
  }
  if (null !== id) {
    if (-1 !== id) {
      if (ShadowRoot) {
        if (ownPropertyDescriptor) {
          const _Object = Object;
          const obj = {};
          ({ configurable: obj.configurable, enumerable: obj.enumerable } = ownPropertyDescriptor);
          obj.get = function get() {
            const get = ownPropertyDescriptor.get;
            let callResult;
            if (null != get) {
              const self = this;
              callResult = get.call(this);
            }
            return callResult;
          };
          obj.set = function set(adoptedStyleSheets) {
            if (null != ownPropertyDescriptor.set) {
              const self = this;
              set.call(this, adoptedStyleSheets);
            }
            if (null !== id) {
              if (-1 !== id) {
                closure_1.adoptStyleSheets(adoptedStyleSheets, id);
              }
            }
          };
          Object.defineProperty(doc, "adoptedStyleSheets", obj);
          let fn = callbackWrapper(() => {
            Object.defineProperty(closure_0, "adoptedStyleSheets", { configurable: ownPropertyDescriptor.configurable, enumerable: ownPropertyDescriptor.enumerable, get: ownPropertyDescriptor.get, set: ownPropertyDescriptor.set });
          });
        }
        return fn;
      }
    }
  }
  fn = () => {

  };
}
function initObservers(doc) {
  let defaultView = doc.doc.defaultView;
  if (defaultView) {
    if (doc.recordDOM) {
      let closure_0 = initMutationObserver(doc, doc.doc);
    }
    let closure_1 = (function initMoveObserver(doc) {
      let closure_0;
      let closure_1;
      let sampling;
      ({ mousemoveCb: closure_0, sampling, doc, mirror: closure_1 } = doc);
      if (false === sampling.mousemove) {
        return () => {

        };
      } else {
        let num = 50;
        if ("number" === typeof sampling.mousemove) {
          num = sampling.mousemove;
        }
        let num2 = 500;
        if ("number" === typeof sampling.mousemoveCallback) {
          num2 = sampling.mousemoveCallback;
        }
        let closure_3 = [];
        let closure_4 = outer1_120(outer1_46((arg0) => {
          const callback = Date.now() - c2;
          callback(arr.map((timeOffset) => {
            timeOffset.timeOffset = timeOffset.timeOffset - closure_0;
            return timeOffset;
          }), arg0);
          c2 = null;
        }), num2);
        let obj = { trailing: false };
        const tmp4 = outer1_46(outer1_120(outer1_46((arg0) => {
          let clientX;
          let clientY;
          let first = arg0;
          if (outer2_130(arg0)) {
            first = arg0.changedTouches[0];
          }
          ({ clientX, clientY } = first);
          if (!closure_2) {
            closure_2 = outer2_34();
          }
          const tmp = outer2_145(arg0);
          const obj = { x: clientX, y: clientY, id: id.getId(outer2_145(arg0)), timeOffset: outer2_34() - closure_2 };
          if ("undefined" !== typeof globalThis.DragEvent) {
            if (arg0 instanceof globalThis.DragEvent) {
              let Drag = outer2_38.Drag;
            }
            tmp5(Drag);
          }
          Drag = arg0 instanceof globalThis.MouseEvent ? tmp6.MouseMove : tmp6.TouchMove;
        }), num, obj));
        const items = [outer1_119("mousemove", tmp4, doc), outer1_119("touchmove", tmp4, doc), outer1_119("drag", tmp4, doc)];
        return outer1_46(() => {
          const item = items.forEach((arg0) => arg0());
        });
      }
    })(doc);
    let closure_2 = initMouseInteractionObserver(doc);
    let closure_3 = initScrollObserver(doc);
    let obj = { win: tmp };
    let closure_4 = (function initViewportResizeObserver(viewportResizeCb, win) {
      viewportResizeCb = viewportResizeCb.viewportResizeCb;
      let c1 = -1;
      let c2 = -1;
      return outer1_119("resize", outer1_46(outer1_120(outer1_46(() => {
        const tmp = outer2_124();
        const tmp2 = outer2_125();
        let tmp3 = c1 === tmp;
        if (tmp3) {
          tmp3 = c2 === tmp2;
        }
        if (!tmp3) {
          const obj = {};
          const _Number = Number;
          obj.width = Number(tmp2);
          const _Number2 = Number;
          obj.height = Number(tmp);
          viewportResizeCb(obj);
          c1 = tmp;
          c2 = tmp2;
        }
      }), 200)), win.win);
    })(doc, obj);
    let closure_5 = initInputObserver(doc);
    let closure_6 = (function initMediaInteractionObserver(doc) {
      let closure_0;
      let closure_1;
      let closure_2;
      let closure_3;
      let closure_4;
      let closure_5;
      ({ mediaInteractionCb: closure_0, blockClass: closure_1, blockSelector: closure_2, unblockSelector: closure_3, mirror: closure_4, sampling: closure_5, doc } = doc);
      let tmp = outer1_46((arg0) => {
        let closure_0 = arg0;
        let num = media.media;
        if (!num) {
          num = 500;
        }
        return outer2_120(outer2_46((arg0) => {
          let currentTime;
          let muted;
          let playbackRate;
          let volume;
          const tmp = outer3_145(arg0);
          if (tmp) {
            if (!outer3_127(tmp, outer1_1, outer1_2, outer1_3, true)) {
              const obj = { type: callback };
              ({ currentTime, volume, muted, playbackRate } = tmp);
              obj.id = outer1_4.getId(tmp);
              obj.currentTime = currentTime;
              obj.volume = volume;
              obj.muted = muted;
              obj.playbackRate = playbackRate;
              callback(obj);
            }
          }
        }), num);
      });
      const items = [outer1_119("play", tmp(outer1_41.Play), doc), outer1_119("pause", tmp(outer1_41.Pause), doc), outer1_119("seeked", tmp(outer1_41.Seeked), doc), outer1_119("volumechange", tmp(outer1_41.VolumeChange), doc), outer1_119("ratechange", tmp(outer1_41.RateChange), doc)];
      return outer1_46(() => {
        const item = items.forEach((arg0) => arg0());
      });
    })(doc);
    let closure_7 = function styleSheetObserver() {

    };
    let closure_8 = function adoptedStyleSheetObserver() {

    };
    let closure_9 = function styleDeclarationObserver() {

    };
    let closure_10 = function fontObserver() {

    };
    if (doc.recordDOM) {
      obj = { win: tmp };
      closure_7 = (function initStyleSheetObserver(doc, win) {
        let closure_0;
        let closure_1;
        let closure_2;
        ({ styleSheetRuleCb: closure_0, mirror: closure_1, stylesheetManager: closure_2 } = doc);
        win = win.win;
        if (win.CSSStyleSheet) {
          if (win.CSSStyleSheet.prototype) {
            const insertRule = win.CSSStyleSheet.prototype.insertRule;
            const _Proxy = Proxy;
            let obj = {
              apply: outer1_46((apply) => {
                    let id;
                    let styleId;
                    let tmp2;
                    let tmp3;
                    [tmp2, tmp3] = callback2(arg2, 2);
                    const tmp = callback2(arg2, 2);
                    ({ id, styleId } = outer2_151(arg1, closure_1, closure_2.styleMirror));
                    let tmp5 = id;
                    if (id) {
                      tmp5 = -1 !== id;
                    }
                    if (!tmp5) {
                      let tmp6 = styleId;
                      if (styleId) {
                        tmp6 = -1 !== styleId;
                      }
                      tmp5 = tmp6;
                    }
                    if (tmp5) {
                      let obj = { id, styleId };
                      obj = { rule: tmp2, index: tmp3 };
                      const items = [obj];
                      obj.adds = items;
                      callback(obj);
                    }
                    return apply.apply(arg1, arg2);
                  })
            };
            let proxy = new Proxy(insertRule, obj);
            win.CSSStyleSheet.prototype.insertRule = proxy;
            const deleteRule = win.CSSStyleSheet.prototype.deleteRule;
            const _Proxy2 = Proxy;
            obj = {
              apply: outer1_46((apply) => {
                    let id;
                    let styleId;
                    ({ id, styleId } = outer2_151(arg1, closure_1, closure_2.styleMirror));
                    let tmp2 = id;
                    if (id) {
                      tmp2 = -1 !== id;
                    }
                    if (!tmp2) {
                      let tmp3 = styleId;
                      if (styleId) {
                        tmp3 = -1 !== styleId;
                      }
                      tmp2 = tmp3;
                    }
                    if (tmp2) {
                      let obj = { id, styleId };
                      obj = { index: callback2(arg2, 1)[0] };
                      const items = [obj];
                      obj.removes = items;
                      callback(obj);
                    }
                    return apply.apply(arg1, arg2);
                  })
            };
            let proxy1 = new Proxy(deleteRule, obj);
            win.CSSStyleSheet.prototype.deleteRule = proxy1;
            if (win.CSSStyleSheet.prototype.replace) {
              const replace = win.CSSStyleSheet.prototype.replace;
              const _Proxy3 = Proxy;
              obj = {
                apply: outer1_46((apply) => {
                        let id;
                        let styleId;
                        ({ id, styleId } = outer2_151(arg1, closure_1, closure_2.styleMirror));
                        let tmp2 = id;
                        if (id) {
                          tmp2 = -1 !== id;
                        }
                        if (!tmp2) {
                          let tmp3 = styleId;
                          if (styleId) {
                            tmp3 = -1 !== styleId;
                          }
                          tmp2 = tmp3;
                        }
                        if (tmp2) {
                          const obj = { id, styleId, replace: callback2(arg2, 1)[0] };
                          callback(obj);
                        }
                        return apply.apply(arg1, arg2);
                      })
              };
              const proxy2 = new Proxy(replace, obj);
              win.CSSStyleSheet.prototype.replace = proxy2;
            }
            if (win.CSSStyleSheet.prototype.replaceSync) {
              const replaceSync = win.CSSStyleSheet.prototype.replaceSync;
              const _Proxy4 = Proxy;
              const obj1 = {
                apply: outer1_46((apply) => {
                        let id;
                        let styleId;
                        ({ id, styleId } = outer2_151(arg1, closure_1, closure_2.styleMirror));
                        let tmp2 = id;
                        if (id) {
                          tmp2 = -1 !== id;
                        }
                        if (!tmp2) {
                          let tmp3 = styleId;
                          if (styleId) {
                            tmp3 = -1 !== styleId;
                          }
                          tmp2 = tmp3;
                        }
                        if (tmp2) {
                          const obj = { id, styleId, replaceSync: callback2(arg2, 1)[0] };
                          callback(obj);
                        }
                        return apply.apply(arg1, arg2);
                      })
              };
              const proxy3 = new Proxy(replaceSync, obj1);
              win.CSSStyleSheet.prototype.replaceSync = proxy3;
            }
            const obj2 = {};
            if (outer1_155("CSSGroupingRule")) {
              obj2.CSSGroupingRule = win.CSSGroupingRule;
            } else {
              if (outer1_155("CSSMediaRule")) {
                obj2.CSSMediaRule = win.CSSMediaRule;
              }
              if (outer1_155("CSSConditionRule")) {
                obj2.CSSConditionRule = win.CSSConditionRule;
              }
              if (outer1_155("CSSSupportsRule")) {
                obj2.CSSSupportsRule = win.CSSSupportsRule;
              }
            }
            let closure_9 = {};
            const _Object = Object;
            let entries = Object.entries(obj2);
            let item = entries.forEach((arg0) => {
              let tmp = callback2(arg0, 2);
              const first = tmp[0];
              dependencyMap[first] = { insertRule: tmp[1].prototype.insertRule, deleteRule: tmp[1].prototype.deleteRule };
              let obj = {
                apply: outer2_46((apply, parentStyleSheet) => {
                  let id;
                  let styleId;
                  const tmp = callback(arg2, 2);
                  let num = tmp[1];
                  ({ id, styleId } = outer3_151(parentStyleSheet.parentStyleSheet, outer1_1, outer1_2.styleMirror));
                  let tmp3 = id;
                  if (id) {
                    tmp3 = -1 !== id;
                  }
                  if (!tmp3) {
                    let tmp4 = styleId;
                    if (styleId) {
                      tmp4 = -1 !== styleId;
                    }
                    tmp3 = tmp4;
                  }
                  if (tmp3) {
                    let obj = { id, styleId };
                    obj = { rule: tmp[0] };
                    const items = [];
                    if (!num) {
                      num = 0;
                    }
                    const items1 = [num];
                    obj.index = items.concat(callback2(outer3_150(parentStyleSheet)), items1);
                    const items2 = [obj];
                    obj.adds = items2;
                    outer1_0(obj);
                    const tmp5 = outer1_0;
                    const tmp8 = callback2(outer3_150(parentStyleSheet));
                  }
                  return apply.apply(parentStyleSheet, arg2);
                })
              };
              const proxy = new Proxy(dependencyMap[first].insertRule, obj);
              tmp[1].prototype.insertRule = proxy;
              obj = {
                apply: outer2_46((apply, parentStyleSheet) => {
                  let id;
                  let styleId;
                  ({ id, styleId } = outer3_151(parentStyleSheet.parentStyleSheet, outer1_1, outer1_2.styleMirror));
                  let tmp2 = id;
                  if (id) {
                    tmp2 = -1 !== id;
                  }
                  if (!tmp2) {
                    let tmp3 = styleId;
                    if (styleId) {
                      tmp3 = -1 !== styleId;
                    }
                    tmp2 = tmp3;
                  }
                  if (tmp2) {
                    let obj = { id, styleId };
                    obj = {};
                    const items = [];
                    const items1 = [callback(arg2, 1)[0]];
                    obj.index = items.concat(callback2(outer3_150(parentStyleSheet)), items1);
                    const items2 = [obj];
                    obj.removes = items2;
                    outer1_0(obj);
                  }
                  return apply.apply(parentStyleSheet, arg2);
                })
              };
              const proxy1 = new Proxy(dependencyMap[first].deleteRule, obj);
              tmp[1].prototype.deleteRule = proxy1;
            });
            return outer1_46(() => {
              win.CSSStyleSheet.prototype.insertRule = insertRule;
              win.CSSStyleSheet.prototype.deleteRule = deleteRule;
              if (replace) {
                win.CSSStyleSheet.prototype.replace = replace;
              }
              if (replaceSync) {
                win.CSSStyleSheet.prototype.replaceSync = replaceSync;
              }
              const entries = Object.entries(obj2);
              const item = entries.forEach((arg0) => {
                const tmp = callback(arg0, 2);
                const first = tmp[0];
                tmp[1].prototype.insertRule = outer1_9[first].insertRule;
                tmp[1].prototype.deleteRule = outer1_9[first].deleteRule;
              });
            });
          }
        }
        return () => {

        };
      })(doc, obj);
      closure_8 = initAdoptedStyleSheetObserver(doc, doc.doc);
      obj = { win: tmp };
      closure_9 = (function initStyleDeclarationObserver(doc, win) {
        let closure_0;
        let closure_1;
        let closure_2;
        let closure_3;
        ({ styleDeclarationCb: closure_0, mirror: closure_1, ignoreCSSAttributes: closure_2, stylesheetManager: closure_3 } = doc);
        win = win.win;
        const setProperty = win.CSSStyleDeclaration.prototype.setProperty;
        let obj = {
          apply: outer1_46((apply, parentRule) => {
            let id;
            let styleId;
            const tmp = callback2(arg2, 3);
            const first = tmp[0];
            if (set.has(first)) {
              const items = [first, tmp3, tmp4];
              return setProperty.apply(parentRule, items);
            } else {
              parentRule = parentRule.parentRule;
              let parentStyleSheet;
              if (null != parentRule) {
                parentStyleSheet = parentRule.parentStyleSheet;
              }
              ({ id, styleId } = outer2_151(parentStyleSheet, closure_1, closure_3.styleMirror));
              let tmp11 = id;
              if (id) {
                tmp11 = -1 !== id;
              }
              if (!tmp11) {
                let tmp12 = styleId;
                if (styleId) {
                  tmp12 = -1 !== styleId;
                }
                tmp11 = tmp12;
              }
              if (tmp11) {
                let obj = { id, styleId };
                obj = { property: first, value: tmp3, priority: tmp4 };
                obj.set = obj;
                obj.index = outer2_150(parentRule.parentRule);
                callback(obj);
              }
              return apply.apply(parentRule, arg2);
            }
          })
        };
        const proxy = new Proxy(setProperty, obj);
        win.CSSStyleDeclaration.prototype.setProperty = proxy;
        const removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
        obj = {
          apply: outer1_46((apply, parentRule) => {
            let id;
            let styleId;
            const first = callback2(arg2, 1)[0];
            if (set.has(first)) {
              const items = [first];
              return removeProperty.apply(parentRule, items);
            } else {
              parentRule = parentRule.parentRule;
              let parentStyleSheet;
              if (null != parentRule) {
                parentStyleSheet = parentRule.parentStyleSheet;
              }
              ({ id, styleId } = outer2_151(parentStyleSheet, closure_1, closure_3.styleMirror));
              let tmp8 = id;
              if (id) {
                tmp8 = -1 !== id;
              }
              if (!tmp8) {
                let tmp9 = styleId;
                if (styleId) {
                  tmp9 = -1 !== styleId;
                }
                tmp8 = tmp9;
              }
              if (tmp8) {
                let obj = { id, styleId };
                obj = { property: first };
                obj.remove = obj;
                obj.index = outer2_150(parentRule.parentRule);
                callback(obj);
              }
              return apply.apply(parentRule, arg2);
            }
          })
        };
        const proxy1 = new Proxy(removeProperty, obj);
        win.CSSStyleDeclaration.prototype.removeProperty = proxy1;
        return outer1_46(() => {
          win.CSSStyleDeclaration.prototype.setProperty = setProperty;
          win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
        });
      })(doc, obj);
      if (doc.collectFonts) {
        closure_10 = (function initFontObserver(doc) {
          let closure_0;
          ({ fontCb: closure_0, doc } = doc);
          const defaultView = doc.defaultView;
          if (defaultView) {
            let items = [];
            const _WeakMap = WeakMap;
            const weakMap = new WeakMap();
            const FontFace = defaultView.FontFace;
            defaultView.FontFace = function FontFace2(family, arg1, descriptors) {
              const tmp = new FontFace(family, arg1, descriptors);
              const obj = { family, buffer: "string" !== tmp3, descriptors };
              let json = arg1;
              if ("string" !== typeof arg1) {
                const _JSON = JSON;
                const _Array = Array;
                const _Uint8Array = Uint8Array;
                const uint8Array = new Uint8Array(arg1);
                json = JSON.stringify(Array.from(uint8Array));
              }
              obj.fontSource = json;
              const result = weakMap.set(tmp, obj);
              return tmp;
            };
            items.push(() => {
              defaultView.FontFace = FontFace;
            });
            items.push(outer1_122(doc.fonts, "add", (arg0) => {
              let closure_0 = arg0;
              return function(arg0) {
                const callback = arg0;
                outer3_138(outer3_46(() => {
                  const value = outer2_3.get(callback);
                  if (value) {
                    callback(value);
                    outer2_3.delete(callback);
                  }
                }), 0);
                const items = [arg0];
                return callback.apply(this, items);
              };
            }));
            return outer1_46(() => {
              const item = items.forEach((arg0) => arg0());
            });
          } else {
            return () => {

            };
          }
        })(doc);
      }
    }
    let closure_11 = (function initSelectionObserver(doc) {
      let closure_0;
      let closure_1;
      let closure_2;
      let closure_3;
      let closure_4;
      let closure_5;
      ({ doc: closure_0, mirror: closure_1, blockClass: closure_2, blockSelector: closure_3, unblockSelector: closure_4, selectionCb: closure_5 } = doc);
      let c6 = true;
      const tmp = outer1_46(() => {
        let endContainer;
        let endOffset;
        let startContainer;
        let startOffset;
        selection = selection.getSelection();
        if (selection) {
          let closure_6 = selection.isCollapsed || false;
          const items = [];
          for (let num = 0; num < tmp3; num = num + 1) {
            let rangeAt = selection.getRangeAt(num);
            ({ startContainer, endContainer } = rangeAt);
            let tmp5 = outer2_127;
            let tmp6 = closure_2;
            let tmp7 = closure_3;
            let tmp8 = closure_4;
            let tmp9 = startContainer;
            let flag = true;
            ({ startOffset, endOffset } = rangeAt);
            let tmp10 = outer2_127(startContainer, closure_2, closure_3, closure_4, true);
            let tmp11 = num;
            if (!tmp10) {
              let tmp12 = outer2_127;
              let tmp13 = closure_2;
              let tmp14 = closure_3;
              let tmp15 = closure_4;
              let tmp16 = endContainer;
              let flag2 = true;
              tmp10 = outer2_127(endContainer, closure_2, closure_3, closure_4, true);
            }
            if (!tmp10) {
              let obj = {};
              let tmp17 = store;
              obj.start = store.getId(startContainer);
              obj.startOffset = startOffset;
              obj.end = store.getId(endContainer);
              obj.endOffset = endOffset;
              let arr = items.push(obj);
            }
          }
          obj = { ranges: items };
          callback(obj);
          tmp3 = selection.rangeCount || 0;
        }
      });
      tmp();
      return outer1_119("selectionchange", tmp);
    })(doc);
    let closure_12 = (function initCustomElementObserver(customElementCb) {
      customElementCb = customElementCb.customElementCb;
      const defaultView = customElementCb.doc.defaultView;
      if (defaultView) {
        if (defaultView.customElements) {
          let fn = outer1_122(defaultView.customElements, "define", (arg0) => {
            let closure_0 = arg0;
            return function(name) {
              callback({ define: { name } });
              const items = [name, arg1, arg2];
              callback.apply(this, items);
            };
          });
        }
        return fn;
      }
      fn = () => {

      };
    })(doc);
    let items = [];
    const plugins = doc.plugins;
    for (const item10053 of plugins) {
      let tmp10 = items;
      let tmp11 = defaultView;
      let arr = items.push(item10053.observer(item10053.callback, tmp, item10053.options));
      continue;
    }
    return callbackWrapper(() => {
      const item = outer1_47.forEach((reset) => reset.reset());
      if (null != closure_0) {
        closure_0.disconnect();
      }
      callback();
      callback2();
      callback3();
      callback4();
      callback5();
      callback6();
      callback7();
      callback8();
      callback9();
      callback10();
      callback11();
      callback12();
      const item1 = items.forEach((arg0) => arg0());
    });
  } else {
    return () => {

    };
  }
}
function hasNestedCSSRule(CSSConditionRule) {
  return undefined !== window[CSSConditionRule];
}
function canMonkeyPatchNestedCSSRule(arg0) {
  let prototype = undefined !== window[arg0];
  if (prototype) {
    const _window = window;
    prototype = window[arg0].prototype;
  }
  if (prototype) {
    const _window2 = window;
    prototype = "insertRule" in window[arg0].prototype;
  }
  if (prototype) {
    const _window3 = window;
    prototype = "deleteRule" in window[arg0].prototype;
  }
  return Boolean(prototype);
}
function record() {
  let __publicField$1;
  let asyncGeneratorStep;
  let blockClass;
  let dependencyMap;
  let errorHandler;
  let maskAttributeFn;
  let maskInputOptions;
  let mousemoveWait;
  let onMutation;
  let recordDOM;
  let sampling;
  let slimDOMOptions;
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const emit = first.emit;
    ({ checkoutEveryNms: dependencyMap, checkoutEveryNth: asyncGeneratorStep, blockClass } = first);
    let str = "rr-block";
    if (undefined !== blockClass) {
      str = blockClass;
    }
    let blockSelector = first.blockSelector;
    let tmp = null;
    if (undefined !== blockSelector) {
      tmp = blockSelector;
    }
    const _getPrototypeOf = tmp;
    let unblockSelector = first.unblockSelector;
    let tmp2 = null;
    if (undefined !== unblockSelector) {
      tmp2 = unblockSelector;
    }
    const _inherits = tmp2;
    const ignoreClass = first.ignoreClass;
    let str2 = "rr-ignore";
    if (undefined !== ignoreClass) {
      str2 = ignoreClass;
    }
    const ignoreSelector = first.ignoreSelector;
    let tmp3 = null;
    if (undefined !== ignoreSelector) {
      tmp3 = ignoreSelector;
    }
    const _toConsumableArray = tmp3;
    let maskAllText = first.maskAllText;
    const _classCallCheck = tmp4;
    let maskTextClass = first.maskTextClass;
    let str3 = "rr-mask";
    if (undefined !== maskTextClass) {
      str3 = maskTextClass;
    }
    let unmaskTextClass = first.unmaskTextClass;
    let tmp5 = null;
    if (undefined !== unmaskTextClass) {
      tmp5 = unmaskTextClass;
    }
    const sentryReplaySession = tmp5;
    let maskTextSelector = first.maskTextSelector;
    let tmp6 = null;
    if (undefined !== maskTextSelector) {
      tmp6 = maskTextSelector;
    }
    let c11 = tmp6;
    let unmaskTextSelector = first.unmaskTextSelector;
    let tmp7 = null;
    if (undefined !== unmaskTextSelector) {
      tmp7 = unmaskTextSelector;
    }
    let c12 = tmp7;
    let inlineStylesheet = first.inlineStylesheet;
    let c13 = tmp8;
    ({ maskInputOptions, slimDOMOptions, maskAttributeFn } = first);
    const maskInputFn = first.maskInputFn;
    const maskTextFn = first.maskTextFn;
    const maxCanvasSize = first.maxCanvasSize;
    let tmp10 = null;
    if (undefined !== maxCanvasSize) {
      tmp10 = maxCanvasSize;
    }
    ({ packFn: __publicField$1, sampling } = first);
    if (undefined === sampling) {
      sampling = {};
    }
    let dataURLOptions = first.dataURLOptions;
    if (undefined === dataURLOptions) {
      dataURLOptions = {};
    }
    ({ mousemoveWait, recordDOM } = first);
    let closure_20 = undefined === recordDOM || recordDOM;
    let recordCanvas = first.recordCanvas;
    let closure_21 = tmp11;
    const recordCrossOriginIframes = first.recordCrossOriginIframes;
    let recordAfter = first.recordAfter;
    if (undefined === recordAfter) {
      let str4 = "load";
      if ("DOMContentLoaded" === first.recordAfter) {
        str4 = first.recordAfter;
      }
      recordAfter = str4;
    }
    const userTriggeredOnInput = first.userTriggeredOnInput;
    let closure_23 = undefined !== userTriggeredOnInput && userTriggeredOnInput;
    const collectFonts = first.collectFonts;
    let closure_24 = undefined !== collectFonts && collectFonts;
    let inlineImages = first.inlineImages;
    const regExp = tmp13;
    let plugins = first.plugins;
    let fn = first.keepIframeSrcFn;
    if (undefined === fn) {
      fn = () => false;
    }
    let ignoreCSSAttributes = first.ignoreCSSAttributes;
    if (undefined === ignoreCSSAttributes) {
      let _Set = Set;
      ignoreCSSAttributes = new Set([]);
    }
    ({ errorHandler, onMutation } = first);
    const getCanvasManager = first.getCanvasManager;
    let tmp17 = !tmp12;
    if (!tmp17) {
      let _window = window;
      let _window2 = window;
      tmp17 = window.parent === window;
    }
    let closure_30 = tmp17;
    let flag2 = false;
    let c31 = false;
    if (!tmp17) {
      const _window3 = window;
      if (window.parent.document) {
        flag2 = false;
        c31 = false;
      }
    }
    while (true) {
      if (!tmp17) {
        break;
      } else if (emit) {
        break;
      } else {
        let tmp20 = globalThis;
        let _Error = Error;
        let tmp21 = new.target;
        let str6 = "emit function is required";
        let tmp22 = new.target;
        let error = new Error("emit function is required");
        let tmp24 = error;
        throw error;
      }
      if (!tmp17) {
        if (!flag2) {
          return () => {

          };
        }
      }
      let tmp25 = undefined !== mousemoveWait && undefined === sampling.mousemove;
      if (tmp25) {
        sampling.mousemove = mousemoveWait;
      }
      let tmp26 = navigation;
      let resetResult = navigation.reset();
      let flag3 = true;
      if (true === tmp9) {
        maskInputOptions = { color: true, date: true, "datetime-local": true, email: true, month: true, number: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true, textarea: true, select: true, radio: true, checkbox: true };
      } else if (undefined === maskInputOptions) {
        maskInputOptions = {};
      }
      if (true !== slimDOMOptions) {
        let str7 = "all";
        if ("all" !== slimDOMOptions) {
          let obj = slimDOMOptions;
          if (!slimDOMOptions) {
            obj = {};
          }
        }
        let tmp29 = (function polyfill$1() {
          const self = this;
          if (arguments.length > 0) {
            if (undefined !== arguments[0]) {
              let _window = arguments[0];
            }
            if (tmp) {
              const _Array = Array;
              _window.NodeList.prototype.forEach = Array.prototype.forEach;
            }
            if (tmp3) {
              const _Array2 = Array;
              _window.DOMTokenList.prototype.forEach = Array.prototype.forEach;
            }
            if (!globalThis.Node.prototype.contains) {
              globalThis.Node.prototype.contains = () => {
                const length = arguments.length;
                const array = new Array(length);
                for (let num = 0; num < length; num = num + 1) {
                  array[num] = arguments[num];
                }
                let first = array[0];
                if (0 in array) {
                  while (self !== first) {
                    let parentNode = first;
                    if (first) {
                      parentNode = first.parentNode;
                    }
                    first = parentNode;
                    if (parentNode) {
                      continue;
                    } else {
                      let flag = false;
                      return false;
                    }
                  }
                  return true;
                } else {
                  const _TypeError = TypeError;
                  const typeError = new TypeError("1 argument is required");
                  throw typeError;
                }
              };
            }
          }
          _window = window;
        })();
        let c35 = 0;
        function eventProcessor(eventProcessorResult) {
          let items = plugins;
          if (!plugins) {
            items = [];
          }
          for (const item10006 of items) {
            let obj = item10006;
            if (item10006.eventProcessor) {
              let tmp2 = item10006;
              let tmp3 = eventProcessorResult;
              eventProcessorResult = obj.eventProcessor(eventProcessorResult);
            }
            continue;
          }
          let tmp4 = callback;
          if (callback) {
            tmp4 = !c31;
          }
          if (tmp4) {
            eventProcessorResult = callback(eventProcessorResult);
          }
          return eventProcessorResult;
        }
        function wrappedEmit(result, isCheckout) {
          result.timestamp = obj();
          const first = observe[0];
          let tmp = null == first || !first.isFrozen();
          if (!tmp) {
            tmp = result.type === wrappedMutationEmit.FullSnapshot;
          }
          if (!tmp) {
            let tmp4 = result.type === wrappedMutationEmit.IncrementalSnapshot;
            if (tmp4) {
              tmp4 = result.data.source === wrappedScrollEmit.Mutation;
            }
            tmp = tmp4;
          }
          if (!tmp) {
            const item = observe.forEach((unfreeze) => unfreeze.unfreeze());
          }
          if (closure_30) {
            if (null != emit) {
              emit(eventProcessor(result), isCheckout);
            }
          } else if (c31) {
            obj = { type: "rrweb", event: eventProcessor(result) };
            const _window = window;
            obj.origin = window.location.origin;
            obj.isCheckout = isCheckout;
            const _window2 = window;
            parent.postMessage(obj, "*");
          }
          if (result.type === wrappedMutationEmit.FullSnapshot) {
            const timestamp = result;
            let closure_35 = 0;
          } else if (result.type === wrappedMutationEmit.IncrementalSnapshot) {
            closure_35 = closure_35 + 1;
            let tmp17 = closure_2;
            if (closure_2) {
              tmp17 = closure_35 >= closure_2;
            }
            let tmp20 = closure_1;
            if (closure_1) {
              tmp20 = timestamp;
            }
            if (tmp20) {
              tmp20 = result.timestamp - timestamp.timestamp > closure_1;
            }
            if (!tmp17) {
              tmp17 = tmp20;
            }
            if (tmp17) {
              takeFullSnapshot2(true);
            }
          }
        }
        function wrappedMutationEmit(arg0) {
          obj = { type: wrappedMutationEmit.IncrementalSnapshot, data: Object.assign(obj, arg0) };
          obj = { source: wrappedScrollEmit.Mutation };
          wrappedEmit(obj);
        }
        function wrappedScrollEmit(arg0) {
          obj = { type: wrappedMutationEmit.IncrementalSnapshot, data: Object.assign(obj, arg0) };
          obj = { source: wrappedScrollEmit.Scroll };
          return wrappedEmit(obj);
        }
        function wrappedCanvasMutationEmit(arg0) {
          obj = { type: wrappedMutationEmit.IncrementalSnapshot, data: Object.assign(obj, arg0) };
          obj = { source: wrappedScrollEmit.CanvasMutation };
          return wrappedEmit(obj);
        }
        let tmp30 = ctor6;
        obj = {
          mutationCb: wrappedMutationEmit,
          adoptedStyleSheetCb: function wrappedAdoptedStyleSheetEmit(arg0) {
                  obj = { type: wrappedMutationEmit.IncrementalSnapshot, data: Object.assign(obj, arg0) };
                  obj = { source: wrappedScrollEmit.AdoptedStyleSheet };
                  return wrappedEmit(obj);
                }
        };
        let prototype3 = ctor6.prototype;
        let tmp31 = new.target;
        let tmp32 = new.target;
        let tmp33 = obj;
        let tmp34 = new ctor6(obj);
        let tmp35 = tmp34;
        let closure_40 = tmp34;
        let tmp36 = globalThis;
        let str9 = "boolean";
        if ("boolean" === typeof globalThis.__RRWEB_EXCLUDE_IFRAME__) {
          if (globalThis.__RRWEB_EXCLUDE_IFRAME__) {
            let tmp44 = ctor;
            let prototype5 = ctor.prototype;
            let tmp45 = new.target;
            let tmp46 = new.target;
            let tmp43 = new ctor();
          }
          let obj6 = tmp43;
          let closure_41 = tmp43;
          if (!plugins) {
            plugins = [];
          }
          let tmp47 = plugins;
          for (const item10149 of plugins) {
            let obj8 = item10149;
            if (item10149.getMirror) {
              let tmp48 = item10149;
              let obj1 = {};
              let tmp49 = navigation;
              obj1.nodeMirror = navigation;
              let tmp50 = tmp43;
              ({ crossOriginIframeMirror: obj9.crossOriginIframeMirror, crossOriginIframeStyleMirror: obj9.crossOriginIframeStyleMirror } = obj6);
              let mirror = obj8.getMirror(obj1);
            }
            continue;
          }
          let tmp52 = ctor7;
          let prototype6 = ctor7.prototype;
          let tmp53 = new.target;
          let tmp54 = new.target;
          let tmp55 = new ctor7();
          let tmp56 = tmp55;
          errorHandler = tmp55;
          let obj2 = {};
          let tmp57 = navigation;
          obj2.mirror = navigation;
          let _window4 = window;
          obj2.win = window;
          obj2.mutationCb = function mutationCb(arg0) {
            obj = { type: wrappedMutationEmit.IncrementalSnapshot, data: Object.assign(obj, arg0) };
            obj = { source: wrappedScrollEmit.CanvasMutation };
            return wrappedEmit(obj);
          };
          obj2.recordCanvas = tmp11;
          obj2.blockClass = str;
          obj2.blockSelector = tmp;
          obj2.unblockSelector = tmp2;
          obj2.maxCanvasSize = tmp10;
          obj2.sampling = sampling.canvas;
          obj2.dataURLOptions = dataURLOptions;
          obj2.errorHandler = errorHandler;
          let tmp58 = getCanvasManager;
          let tmp59 = obj2;
          let tmp60 = getCanvasManager;
          if (getCanvasManager) {
            let canvasManager = getCanvasManager(obj2);
          } else {
            let tmp61 = ctor5;
            let prototype7 = ctor5.prototype;
            let tmp62 = new.target;
            let tmp63 = new.target;
            canvasManager = new ctor5();
          }
          while (true) {
            if ("boolean" !== typeof globalThis.__RRWEB_EXCLUDE_SHADOW_DOM__) {
              break;
            } else {
              if (!globalThis.__RRWEB_EXCLUDE_SHADOW_DOM__) {
                break;
              } else {
                let tmp72 = ctor3;
                let prototype9 = ctor3.prototype;
                let tmp73 = new.target;
                let tmp74 = new.target;
                let tmp71 = new ctor3();
                let moveKey = tmp71;
                function takeFullSnapshot2(arg0) {
                  if (closure_20) {
                    let obj = { type: wrappedMutationEmit.Meta };
                    obj = {};
                    const _window = window;
                    obj.href = window.location.href;
                    obj.width = outer1_125();
                    obj.height = outer1_124();
                    obj.data = obj;
                    wrappedEmit(obj, tmp);
                    tmp34.reset();
                    tmp71.init();
                    const item = observe.forEach((lock) => lock.lock());
                    let _document = document;
                    obj = { mirror: outer1_60, blockClass: str, blockSelector: closure_4, unblockSelector: closure_5, maskAllText: closure_8, maskTextClass: str3, unmaskTextClass: closure_10, maskTextSelector: closure_11, unmaskTextSelector: closure_12, inlineStylesheet: closure_13, maskAllInputs: maskInputOptions, maskAttributeFn, maskInputFn, maskTextFn };
                    obj.slimDOM = obj;
                    obj.dataURLOptions = dataURLOptions;
                    obj.recordCanvas = closure_21;
                    obj.inlineImages = closure_25;
                    obj.onSerialize = function onSerialize(shadowRoot) {
                      if (outer2_131(shadowRoot, outer2_60)) {
                        outer1_41.addIframe(shadowRoot);
                      }
                      if (outer2_132(shadowRoot, outer2_60)) {
                        outer1_40.trackLinkElement(shadowRoot);
                      }
                      if (outer2_133(shadowRoot)) {
                        const _document = document;
                        outer1_44.addShadowRoot(shadowRoot.shadowRoot, document);
                      }
                    };
                    obj.onIframeLoad = function onIframeLoad(contentWindow) {
                      outer1_41.attachIframe(contentWindow, arg1);
                      if (contentWindow.contentWindow) {
                        outer1_43.addWindow(contentWindow.contentWindow);
                      }
                      outer1_44.observeAttachShadow(contentWindow);
                    };
                    obj.onStylesheetLoad = function onStylesheetLoad(shadowRoot, attributes) {
                      outer1_40.attachLinkElement(shadowRoot, attributes);
                    };
                    obj.onBlockedImageLoad = function onBlockedImageLoad(arg0, id, width) {
                      let obj = { adds: [], removes: [], texts: [] };
                      obj = { id: id.id };
                      obj = { style: { width: "" + width.width + "px", height: "" + width.height + "px" } };
                      obj.attributes = obj;
                      const items = [obj];
                      obj.attributes = items;
                      outer1_37(obj);
                    };
                    obj.keepIframeSrcFn = fn;
                    obj.ignoreCSSAttributes = ignoreCSSAttributes;
                    tmp34 = (function snapshot(document, arg1) {
                      let dataURLOptions;
                      let iframeLoadTimeout;
                      let keepIframeSrcFn;
                      let maskAttributeFn;
                      let maskInputFn;
                      let maskTextFn;
                      let onBlockedImageLoad;
                      let onIframeLoad;
                      let onSerialize;
                      let onStylesheetLoad;
                      let preserveWhiteSpace;
                      let stylesheetLoadTimeout;
                      let obj = arg1;
                      if (!arg1) {
                        obj = {};
                      }
                      let mirror = obj.mirror;
                      if (undefined === mirror) {
                        const prototype = dataURLOptions.prototype;
                        mirror = new dataURLOptions();
                      }
                      const blockClass = obj.blockClass;
                      let str = "rr-block";
                      if (undefined !== blockClass) {
                        str = blockClass;
                      }
                      const blockSelector = obj.blockSelector;
                      let tmp4 = null;
                      if (undefined !== blockSelector) {
                        tmp4 = blockSelector;
                      }
                      const unblockSelector = obj.unblockSelector;
                      let tmp5 = null;
                      if (undefined !== unblockSelector) {
                        tmp5 = unblockSelector;
                      }
                      const maskAllText = obj.maskAllText;
                      const maskTextClass = obj.maskTextClass;
                      let str2 = "rr-mask";
                      if (undefined !== maskTextClass) {
                        str2 = maskTextClass;
                      }
                      const unmaskTextClass = obj.unmaskTextClass;
                      let tmp7 = null;
                      if (undefined !== unmaskTextClass) {
                        tmp7 = unmaskTextClass;
                      }
                      const maskTextSelector = obj.maskTextSelector;
                      let tmp8 = null;
                      if (undefined !== maskTextSelector) {
                        tmp8 = maskTextSelector;
                      }
                      const unmaskTextSelector = obj.unmaskTextSelector;
                      let tmp9 = null;
                      if (undefined !== unmaskTextSelector) {
                        tmp9 = unmaskTextSelector;
                      }
                      const inlineStylesheet = obj.inlineStylesheet;
                      const inlineImages = obj.inlineImages;
                      const recordCanvas = obj.recordCanvas;
                      const maskAllInputs = obj.maskAllInputs;
                      obj = undefined !== maskAllInputs && maskAllInputs;
                      const slimDOM = obj.slimDOM;
                      let tmp13 = undefined !== slimDOM;
                      ({ maskAttributeFn, maskTextFn, maskInputFn } = obj);
                      if (tmp13) {
                        tmp13 = slimDOM;
                      }
                      ({ keepIframeSrcFn, dataURLOptions, preserveWhiteSpace, onSerialize, onIframeLoad, iframeLoadTimeout, onBlockedImageLoad, onStylesheetLoad, stylesheetLoadTimeout } = obj);
                      if (undefined === keepIframeSrcFn) {
                        keepIframeSrcFn = () => false;
                      }
                      let ignoreCSSAttributes = obj.ignoreCSSAttributes;
                      obj = { doc: document, mirror, blockClass: str, blockSelector: tmp4, unblockSelector: tmp5, maskAllText: undefined !== maskAllText && maskAllText, maskTextClass: str2, unmaskTextClass: tmp7, maskTextSelector: tmp8, unmaskTextSelector: tmp9, skipChild: false, inlineStylesheet: undefined === inlineStylesheet || inlineStylesheet };
                      if (true === obj) {
                        obj = { color: true, date: true, "datetime-local": true, email: true, month: true, number: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true, textarea: true, select: true };
                      } else if (false === obj) {
                        obj = {};
                      }
                      obj.maskInputOptions = obj;
                      obj.maskAttributeFn = maskAttributeFn;
                      obj.maskTextFn = maskTextFn;
                      obj.maskInputFn = maskInputFn;
                      if (true !== tmp13) {
                        if ("all" !== tmp13) {
                          let obj1 = tmp13;
                          if (false === tmp13) {
                            obj1 = {};
                          }
                        }
                        obj.slimDOMOptions = obj1;
                        obj.dataURLOptions = dataURLOptions;
                        obj.inlineImages = tmp11;
                        obj.recordCanvas = tmp12;
                        obj.preserveWhiteSpace = preserveWhiteSpace;
                        obj.onSerialize = onSerialize;
                        obj.onIframeLoad = onIframeLoad;
                        obj.iframeLoadTimeout = iframeLoadTimeout;
                        obj.onBlockedImageLoad = onBlockedImageLoad;
                        obj.onStylesheetLoad = onStylesheetLoad;
                        obj.stylesheetLoadTimeout = stylesheetLoadTimeout;
                        obj.keepIframeSrcFn = keepIframeSrcFn;
                        obj.newlyAddedElement = false;
                        if (undefined === ignoreCSSAttributes) {
                          const _Set = Set;
                          ignoreCSSAttributes = new Set([]);
                        }
                        obj.ignoreCSSAttributes = ignoreCSSAttributes;
                        return outer2_118(document, obj);
                      }
                      const obj2 = { script: true, comment: true, headFavicon: true, headWhitespace: true, headMetaDescKeywords: "all" === tmp13, headMetaSocial: true, headMetaRobots: true, headMetaHttpEquiv: true, headMetaAuthorship: true, headMetaVerification: true };
                      obj1 = obj2;
                    })(document, obj);
                    if (tmp34) {
                      let obj1 = { type: wrappedMutationEmit.FullSnapshot };
                      let obj2 = { node: tmp34 };
                      const _window2 = window;
                      obj2.initialOffset = outer1_123(window);
                      obj1.data = obj2;
                      wrappedEmit(obj1);
                      const item1 = observe.forEach((unlock) => unlock.unlock());
                      const _document2 = document;
                      if (adoptedStyleSheets) {
                        const _document3 = document;
                        adoptedStyleSheets = document.adoptedStyleSheets.length > 0;
                      }
                      if (adoptedStyleSheets) {
                        const _document4 = document;
                        const _document5 = document;
                        tmp34.adoptStyleSheets(document.adoptedStyleSheets, outer1_60.getId(document));
                      }
                    } else {
                      const _console = console;
                      return console.warn("Failed to snapshot the document");
                    }
                  }
                }
                let items = [];
                let arr3 = items;
                function observe(doc) {
                  obj = {
                    onMutation,
                    mutationCb: wrappedMutationEmit,
                    mousemoveCb(positions, source) {
                      obj = { type: wrappedMutationEmit.IncrementalSnapshot, data: obj };
                      obj = { source, positions };
                      return wrappedEmit(obj);
                    },
                    mouseInteractionCb(arg0) {
                      obj = { type: wrappedMutationEmit.IncrementalSnapshot, data: Object.assign(obj, arg0) };
                      obj = { source: wrappedScrollEmit.MouseInteraction };
                      return wrappedEmit(obj);
                    },
                    scrollCb: wrappedScrollEmit,
                    viewportResizeCb(arg0) {
                      obj = { type: wrappedMutationEmit.IncrementalSnapshot, data: Object.assign(obj, arg0) };
                      obj = { source: wrappedScrollEmit.ViewportResize };
                      return wrappedEmit(obj);
                    },
                    inputCb(arg0) {
                      obj = { type: wrappedMutationEmit.IncrementalSnapshot, data: Object.assign(obj, arg0) };
                      obj = { source: wrappedScrollEmit.Input };
                      return wrappedEmit(obj);
                    },
                    mediaInteractionCb(arg0) {
                      obj = { type: wrappedMutationEmit.IncrementalSnapshot, data: Object.assign(obj, arg0) };
                      obj = { source: wrappedScrollEmit.MediaInteraction };
                      return wrappedEmit(obj);
                    },
                    styleSheetRuleCb(arg0) {
                      obj = { type: wrappedMutationEmit.IncrementalSnapshot, data: Object.assign(obj, arg0) };
                      obj = { source: wrappedScrollEmit.StyleSheetRule };
                      return wrappedEmit(obj);
                    },
                    styleDeclarationCb(arg0) {
                      obj = { type: wrappedMutationEmit.IncrementalSnapshot, data: Object.assign(obj, arg0) };
                      obj = { source: wrappedScrollEmit.StyleDeclaration };
                      return wrappedEmit(obj);
                    },
                    canvasMutationCb: wrappedCanvasMutationEmit,
                    fontCb(arg0) {
                      obj = { type: wrappedMutationEmit.IncrementalSnapshot, data: Object.assign(obj, arg0) };
                      obj = { source: wrappedScrollEmit.Font };
                      return wrappedEmit(obj);
                    },
                    selectionCb(arg0) {
                      obj = { type: wrappedMutationEmit.IncrementalSnapshot, data: Object.assign(obj, arg0) };
                      obj = { source: wrappedScrollEmit.Selection };
                      wrappedEmit(obj);
                    },
                    customElementCb(arg0) {
                      obj = { type: wrappedMutationEmit.IncrementalSnapshot, data: Object.assign(obj, arg0) };
                      obj = { source: wrappedScrollEmit.CustomElement };
                      wrappedEmit(obj);
                    },
                    blockClass: str,
                    ignoreClass: str2,
                    ignoreSelector: closure_7,
                    maskAllText: closure_8,
                    maskTextClass: str3,
                    unmaskTextClass: closure_10,
                    maskTextSelector: closure_11,
                    unmaskTextSelector: closure_12,
                    maskInputOptions,
                    inlineStylesheet: closure_13,
                    sampling,
                    recordDOM: closure_20,
                    recordCanvas: closure_21,
                    inlineImages: closure_25,
                    userTriggeredOnInput: closure_23,
                    collectFonts: closure_24,
                    doc,
                    maskAttributeFn,
                    maskInputFn,
                    maskTextFn,
                    keepIframeSrcFn: fn,
                    blockSelector: closure_4,
                    unblockSelector: closure_5,
                    slimDOMOptions: obj,
                    dataURLOptions,
                    mirror: outer1_60,
                    iframeManager: closure_41,
                    stylesheetManager: closure_40,
                    shadowDomManager: closure_44,
                    processedNodeManager: errorHandler,
                    canvasManager,
                    ignoreCSSAttributes
                  };
                  let mapped;
                  if (null != plugins) {
                    const found = plugins.filter((observer) => observer.observer);
                    if (null != found) {
                      mapped = found.map((observer) => {
                        let closure_0 = observer;
                        return {
                          observer: observer.observer,
                          options: observer.options,
                          callback(payload) {
                            obj = { type: wrappedMutationEmit.Plugin, data: obj };
                            obj = { plugin: observer.name, payload };
                            return wrappedEmit(obj);
                          }
                        };
                      });
                    }
                  }
                  if (!mapped) {
                    mapped = [];
                  }
                  obj.plugins = mapped;
                  return items(outer1_153)(obj, {});
                }
                let tmp75 = tmp43;
                let addLoadListenerResult = obj6.addLoadListener((contentDocument) => {
                  items.push(observe(contentDocument.contentDocument));
                });
                function init() {
                  takeFullSnapshot2();
                  items.push(observe(document));
                }
                let tmp77 = init;
                let _document = document;
                let str10 = "interactive";
                if ("interactive" !== document.readyState) {
                  let _document2 = document;
                  let str11 = "complete";
                  if ("complete" !== document.readyState) {
                    let tmp78 = items;
                    let tmp79 = on;
                    let str12 = "DOMContentLoaded";
                    let arr = arr3.push(on("DOMContentLoaded", () => {
                      wrappedEmit({ type: wrappedMutationEmit.DomContentLoaded, data: {} });
                      if ("DOMContentLoaded" === recordAfter) {
                        init();
                      }
                    }));
                    let _window5 = window;
                    let str13 = "load";
                    arr = arr3.push(on("load", () => {
                      wrappedEmit({ type: wrappedMutationEmit.Load, data: {} });
                      if ("load" === recordAfter) {
                        init();
                      }
                    }, window));
                  }
                  return () => {
                    const item = items.forEach((arg0) => arg0());
                    errorHandler.destroy();
                    let takeFullSnapshot2;
                  };
                }
                let initResult = init();
              }
            }
            let tmp65 = ctor4;
            let obj3 = { mutationCb: wrappedMutationEmit, scrollCb: wrappedScrollEmit };
            let obj4 = { onMutation, blockClass: str, blockSelector: tmp, unblockSelector: tmp2, maskAllText: tmp4, maskTextClass: str3, unmaskTextClass: tmp5, maskTextSelector: tmp6, unmaskTextSelector: tmp7, inlineStylesheet: tmp8, maskInputOptions, dataURLOptions, maskAttributeFn, maskTextFn, maskInputFn, recordCanvas: tmp11, inlineImages: tmp13, sampling, slimDOMOptions: obj };
            let tmp66 = tmp43;
            obj4.iframeManager = obj6;
            obj4.stylesheetManager = tmp34;
            obj4.canvasManager = canvasManager;
            obj4.keepIframeSrcFn = fn;
            obj4.processedNodeManager = tmp55;
            obj4.ignoreCSSAttributes = ignoreCSSAttributes;
            obj3.bypassOptions = obj4;
            let tmp67 = navigation;
            obj3.mirror = navigation;
            let prototype8 = ctor4.prototype;
            let tmp68 = new.target;
            let tmp69 = new.target;
            let tmp70 = obj3;
            tmp71 = new ctor4(obj3);
          }
        }
        let tmp37 = ctor2;
        let obj5 = {};
        let tmp38 = navigation;
        obj5.mirror = navigation;
        obj5.mutationCb = wrappedMutationEmit;
        obj5.stylesheetManager = tmp34;
        obj5.recordCrossOriginIframes = tmp12;
        let tmp39 = wrappedEmit;
        obj5.wrappedEmit = wrappedEmit;
        let prototype4 = ctor2.prototype;
        let tmp40 = new.target;
        let tmp41 = new.target;
        let tmp42 = obj5;
        tmp43 = new ctor2(obj5);
      }
      obj6 = { script: true, comment: true, headFavicon: true, headWhitespace: true, headMetaSocial: true, headMetaRobots: true, headMetaHttpEquiv: true, headMetaVerification: true };
      let str8 = "all";
      let tmp28 = "all" === slimDOMOptions;
      obj6.headMetaAuthorship = tmp28;
      obj6.headMetaDescKeywords = tmp28;
      obj = obj6;
    }
  }
  first = {};
}
function timestampToMs(timestamp) {
  let result = timestamp;
  if (timestamp <= 9999999999) {
    result = 1000 * timestamp;
  }
  return result;
}
function timestampToS(arg0) {
  let result = arg0;
  if (arg0 > 9999999999) {
    result = arg0 / 1000;
  }
  return result;
}
function addBreadcrumbEvent(triggerUserActivity, category) {
  let closure_0 = triggerUserActivity;
  let closure_1 = category;
  if ("sentry.transaction" !== category.category) {
    const items = ["ui.click", "ui.input"];
    if (items.includes(category.category)) {
      triggerUserActivity.triggerUserActivity();
    } else {
      const result = triggerUserActivity.checkAndHandleExpiredSession();
    }
    triggerUserActivity.addUpdate(() => {
      let obj = { type: outer1_37.Custom };
      let num = category.timestamp;
      if (!num) {
        num = 0;
      }
      obj.timestamp = 1000 * num;
      obj = { tag: "breadcrumb", payload: triggerUserActivity(category[9]).normalize(category, 10, 1000) };
      obj.data = obj;
      triggerUserActivity.throttledAddEvent(obj);
      return "console" === category.category;
    });
  }
}
function getClosestInteractive(closest) {
  return closest.closest("button,a") || closest;
}
function getClickTargetNode(target) {
  const tmp = getTargetNode(target);
  let tmp2 = tmp;
  if (tmp) {
    tmp2 = tmp;
    if (tmp instanceof globalThis.Element) {
      tmp2 = getClosestInteractive(tmp);
    }
  }
  return tmp2;
}
function getTargetNode(target) {
  let tmp = "object" === typeof target && target;
  if (tmp) {
    tmp = "target" in target;
  }
  if (tmp) {
    target = target.target;
  }
  return target;
}
function onWindowOpen(arg0) {
  let closure_0 = arg0;
  if (!arr2) {
    arr2 = [];
    (function monkeyPatchWindowOpen() {
      callback(outer1_1[9]).fill(callback(outer1_1[9]).GLOBAL_OBJ, "open", (arg0) => {
        let closure_0 = arg0;
        return () => {
          if (closure_61) {
            const item = closure_61.forEach((arg0) => arg0());
          }
          while (true) {
            let length = arguments.length;
            let tmp3 = globalThis;
            let _Array = Array;
            let tmp4 = new.target;
            let tmp5 = new.target;
            let tmp6 = length;
            let array = new Array(length);
            let tmp8 = array;
            let num = 0;
            if (0 >= length) {
              break;
            } else {
              do {
                array[num] = arguments[num];
                num = num + 1;
              } while (num < length);
            }
            let tmp9 = callback;
            let tmp10 = callback;
            let tmp11 = outer3_1;
            let num2 = 9;
            return callback.apply(callback(outer3_1[9]).GLOBAL_OBJ, array);
          }
        };
      });
    })();
  }
  arr2.push(arg0);
  return () => {
    let num = -1;
    if (arr) {
      num = arr.indexOf(closure_0);
    }
    if (num > -1) {
      arr.splice(num, 1);
    }
  };
}
function nowInSeconds() {
  return Date.now() / 1000;
}
function updateClickDetectorForRecordingEvent(registerMutation, type) {
  if (3 === type.type) {
    const source = type.data.source;
    if (set.has(source)) {
      registerMutation.registerMutation(type.timestamp);
    }
    if (tmp2 === obj.Scroll) {
      registerMutation.registerScroll(type.timestamp);
    }
    if (type.data.source === obj.MouseInteraction) {
      const data = type.data;
      const mirror = record.mirror;
      const node = mirror.getNode(data.id);
      let tmp19 = tmp18;
      if (node instanceof globalThis.HTMLElement) {
        tmp19 = data.type === Click.Click;
      }
      if (tmp19) {
        registerMutation.registerClick(node);
      }
    }
    tmp2 = source;
  }
}
function createBreadcrumb(arg0) {
  return Object.assign({ timestamp: Date.now() / 1000, type: "default" }, arg0);
}
function getAttributesToRecord(attributes) {
  const obj = {};
  if (tmp) {
    attributes["data-sentry-component"] = attributes["data-sentry-element"];
  }
  for (const key10011 in arg0) {
    let tmp3 = key10011;
    let tmp4 = set2;
    if (!set2.has(key10011)) {
      continue;
    } else {
      let tmp2 = "data-testid" !== key10011;
      if (tmp2) {
        tmp2 = "data-test-id" !== key10011;
      }
      let str = key10011;
      if (!tmp2) {
        str = "testId";
      }
      obj[str] = arg0[key10011];
      continue;
    }
    continue;
  }
  return obj;
}
function getBaseDomBreadcrumb(arg0, message) {
  const mirror = record.mirror;
  const id = mirror.getId(arg0);
  let node = id;
  if (id) {
    const mirror2 = record.mirror;
    node = mirror2.getNode(id);
  }
  let meta = node;
  if (node) {
    const mirror3 = record.mirror;
    meta = mirror3.getMeta(node);
  }
  let tmp6 = null;
  if (meta) {
    tmp6 = null;
    if (meta.type === Element.Element) {
      tmp6 = meta;
    }
  }
  let obj = { message };
  if (tmp6) {
    obj = { nodeId: id };
    obj = { id, tagName: tmp6.tagName };
    const _Array = Array;
    const mapped = Array.from(tmp6.childNodes).map((type) => type.type === outer1_65.Text && type.textContent);
    const _Boolean = Boolean;
    const found = mapped.filter(Boolean);
    const mapped1 = found.map((str) => str.trim());
    obj.textContent = mapped1.join("");
    obj.attributes = getAttributesToRecord(tmp6.attributes);
    obj.node = obj;
    let obj1 = obj;
    const arr = Array.from(tmp6.childNodes);
  } else {
    obj1 = {};
  }
  obj.data = obj1;
  return obj;
}
function handleKeyboardEvent(isEnabled) {
  if (isEnabled.isEnabled()) {
    isEnabled.updateUserActivity();
    const tmp3 = (function getKeyboardBreadcrumb(arg0) {
      let altKey;
      let ctrlKey;
      let key;
      let metaKey;
      let target;
      ({ metaKey, ctrlKey, altKey, key, target } = arg0);
      if (target) {
        let isContentEditable = "INPUT" === target.tagName;
        if (!isContentEditable) {
          isContentEditable = "TEXTAREA" === target.tagName;
        }
        if (!isContentEditable) {
          isContentEditable = target.isContentEditable;
        }
        if (!isContentEditable) {
          if (key) {
            let tmp2 = metaKey;
            if (!metaKey) {
              tmp2 = ctrlKey;
            }
            if (!tmp2) {
              tmp2 = altKey;
            }
            if (!tmp2) {
              if (1 === tmp3) {
                return null;
              }
            }
            let obj = outer1_0(outer1_1[9]);
            obj = { maxStringLength: 200 };
            const tmp7 = obj.htmlTreeAsString(target, obj) || "<unknown>";
            obj = { category: "ui.keyDown", message: tmp7 };
            const _Object = Object;
            const obj1 = { metaKey, shiftKey: tmp, ctrlKey, altKey, key };
            obj.data = Object.assign({}, outer1_168(target, tmp7).data, obj1);
            return outer1_166(obj);
          }
        }
      }
      return null;
    })(arg1);
    if (tmp3) {
      addBreadcrumbEvent(isEnabled, tmp3);
    }
  }
}
function webVitalHandler(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (metric) => {
    const prop = obj.replayPerformanceEntries;
    prop.push(callback(metric.metric));
  };
}
function createPerformanceEntry(arg0) {
  let tmpResult = null;
  if (table3[arg0.entryType]) {
    tmpResult = tmp(arg0);
  }
  return tmpResult;
}
function getAbsoluteTime(arg0) {
  let timeOrigin = require(794) /* registerSpanErrorInstrumentation */.browserPerformanceTimeOrigin();
  if (!timeOrigin) {
    timeOrigin = require(794) /* registerSpanErrorInstrumentation */.GLOBAL_OBJ.performance.timeOrigin;
  }
  return (timeOrigin + arg0) / 1000;
}
function getLargestContentfulPaint(arg0) {
  let tmp3;
  if (null != arg0.entries[arg0.entries.length - 1]) {
    if (tmp.element) {
      const items = [tmp.element];
      tmp3 = items;
    }
  }
  return getWebVital(arg0, "largest-contentful-paint", tmp3);
}
function isLayoutShift(item10011) {
  return undefined !== item10011.sources;
}
function getCumulativeLayoutShift(rating) {
  const items = [];
  const items1 = [];
  for (const item10011 of tmp) {
    let iter = item10011;
    let tmp19 = isLayoutShift;
    if (isLayoutShift(item10011)) {
      let items2 = [];
      let tmp2 = item10011;
      let sources = iter.sources;
      let tmp3 = sources;
      for (const item10018 of sources) {
        let tmp4 = item10018;
        if (item10018.node) {
          let tmp5 = items1;
          let tmp6 = item10018;
          let arr = items1.push(tmp4.node);
          let tmp8 = record;
          let mirror = record.mirror;
          let id = mirror.getId(tmp4.node);
          if (id) {
            let tmp11 = items2;
            let tmp12 = id;
            arr = items2.push(tmp10);
          }
        }
        continue;
      }
      let tmp14 = items;
      let obj = {};
      let tmp15 = item10011;
      obj.value = iter.value;
      let tmp16 = items2;
      let tmp17;
      if (items2.length) {
        tmp17 = items2;
      }
      obj.nodeIds = tmp17;
      let arr1 = items.push(obj);
    }
    continue;
  }
  return getWebVital(rating, "cumulative-layout-shift", items1, items);
}
function getInteractionToNextPaint(arg0) {
  let tmp3;
  if (null != arg0.entries[arg0.entries.length - 1]) {
    if (tmp.target) {
      const items = [tmp.target];
      tmp3 = items;
    }
  }
  return getWebVital(arg0, "interaction-to-next-paint", tmp3);
}
function getWebVital(rating, name, items1, items) {
  const value = rating.value;
  let mapped;
  const tmp2 = getAbsoluteTime(value);
  let obj = { type: "web-vital", name, start: tmp2, end: tmp2 };
  obj = { value, size: value, rating: rating.rating };
  if (items1) {
    mapped = items1.map((arg0) => {
      const mirror = outer1_156.mirror;
      return mirror.getId(arg0);
    });
  }
  obj.nodeIds = mapped;
  obj.attributions = items;
  obj.data = obj;
  return obj;
}
function _addBreadcrumb(arg0) {
  let str = "info";
  if (arguments.length > 1) {
    str = "info";
    if (undefined !== arguments[1]) {
      str = arguments[1];
    }
  }
  let obj = require(794) /* registerSpanErrorInstrumentation */;
  obj = { category: "console", data: { logger: "replay" }, level: str, message: "" + closure_71 + arg0 };
  obj = { level: str };
  obj.addBreadcrumb(obj, obj);
}
function createEventBuffer(useCompression) {
  if (useCompression.useCompression) {
    const _window = window;
    if (window.Worker) {
      const tmp3 = (function _loadWorker(arg0) {
        let tmp = arg0;
        if (!arg0) {
          tmp = (function _getWorkerUrl() {
            if ("undefined" !== typeof globalThis.__SENTRY_EXCLUDE_REPLAY_WORKER__) {
              if (globalThis.__SENTRY_EXCLUDE_REPLAY_WORKER__) {
                return "";
              }
            }
            const blob = new Blob(["var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new n(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new r(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,s=0,a=new n(r);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new n(r);for(s=1;s<r;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new n(1<<r);var f=15-r;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=r-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new n(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=[\"unexpected EOF\",\"invalid block type\",\"invalid length/literal\",\"invalid distance\",\"stream finished\",\"no stream handler\",,\"no callback\",\"invalid UTF-8 data\",\"extra field too long\",\"date not in range 1980-2099\",\"filename too long\",\"stream finishing\",\"invalid zip data\"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s:s,f:r[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort(function(t,n){return t.f-n.f}),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new n(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort(function(t,n){return p[n.s]-p[t.s]||t.f-n.f});s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=r;++h)if(t[h]==s&&h!=r)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=r[s];return 8*(i+4+e)},U=function(t,r,a,o,h,f,l,u,c,v,m){z(r,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,s=0|r.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=r[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if(\"function\"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(n.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(s),32768),this.s.z=n.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,s=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),a=s.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(s,n),O(s,a-8,r.d()),O(s,a-4,e),s}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t.prototype.flush=function(){j.prototype.flush.call(this)},t}(),G=\"undefined\"!=typeof TextEncoder&&new TextEncoder,H=\"undefined\"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(G)return G.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=n.charCodeAt(o);f<128||r?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&n.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error(\"Adding invalid event\");const n=this._hasEvents?\",\":\"\";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push(\"]\",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J((t,n)=>{this.deflate.push(t,n)}),this.stream.push(\"[\")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener(\"message\",function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&\"function\"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}}),postMessage({id:void 0,method:\"init\",success:!0,response:void 0});"]);
            return URL.createObjectURL(blob);
          })();
        }
        if (tmp) {
          if (outer1_69) {
            let str = "";
            if (arg0) {
              const _HermesInternal = HermesInternal;
              str = " from " + arg0;
            }
            outer1_72.log(`Using compression worker${str}`);
          }
          const prototype = globalThis.Worker.prototype;
          const worker = new globalThis.Worker(tmp2);
          const prototype2 = outer1_77.prototype;
          const tmp18 = new outer1_77(worker);
          return tmp18;
        }
      })(tmp);
      if (tmp3) {
        return tmp3;
      }
    }
  }
  if (closure_69) {
    closure_72.log("Using simple buffer");
  }
  return new closure_74();
}
function hasSessionStorage() {
  const tmp = "sessionStorage" in require(794) /* registerSpanErrorInstrumentation */.GLOBAL_OBJ;
  let sessionStorage = tmp;
  if (tmp) {
    sessionStorage = require(794) /* registerSpanErrorInstrumentation */.GLOBAL_OBJ.sessionStorage;
  }
  return sessionStorage;
}
function clearSession(arg0) {
  if (hasSessionStorage()) {
    const sessionStorage = require(794) /* registerSpanErrorInstrumentation */.GLOBAL_OBJ.sessionStorage;
    sessionStorage.removeItem(sentryReplaySession);
  }
  arg0.session = undefined;
}
function isSampled(sessionSampleRate) {
  let tmp = undefined !== sessionSampleRate;
  if (tmp) {
    const _Math = Math;
    tmp = Math.random() < sessionSampleRate;
  }
  return tmp;
}
function saveSession(arg0) {
  if (hasSessionStorage()) {
    const sessionStorage = require(794) /* registerSpanErrorInstrumentation */.GLOBAL_OBJ.sessionStorage;
    const _JSON = JSON;
    const result = sessionStorage.setItem(sentryReplaySession, JSON.stringify(arg0));
  }
}
function makeSession(id) {
  const timestamp = Date.now();
  const obj = {};
  id = id.id;
  if (!id) {
    id = require(794) /* registerSpanErrorInstrumentation */.uuid4();
    const obj2 = require(794) /* registerSpanErrorInstrumentation */;
  }
  obj.id = id;
  obj.started = id.started || timestamp;
  obj.lastActivity = id.lastActivity || timestamp;
  obj.segmentId = id.segmentId || 0;
  ({ sampled: obj.sampled, previousSessionId: obj.previousSessionId } = id);
  obj.dirty = id.dirty || false;
  return obj;
}
function createSession(stickySession, arg1) {
  let allowBuffering;
  let sessionSampleRate;
  stickySession = stickySession.stickySession;
  let tmp = undefined !== stickySession;
  ({ sessionSampleRate, allowBuffering } = stickySession);
  if (tmp) {
    tmp = stickySession;
  }
  if (arguments.length > 1) {
    let str = "session";
    if (!isSampled(sessionSampleRate)) {
      let str2 = !tmp4;
      if (!!allowBuffering) {
        str2 = "buffer";
      }
      str = str2;
    }
    const obj = { sampled: str, previousSessionId: {}.previousSessionId };
    const tmp6 = makeSession(obj);
    if (tmp) {
      saveSession(tmp6);
    }
    return tmp6;
  }
}
function isExpired(lastActivity, maxReplayDuration, targetTime) {
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let tmp2 = arguments[2];
    }
    let tmp4 = null === lastActivity || undefined === maxReplayDuration;
    if (!tmp4) {
      tmp4 = maxReplayDuration < 0;
    }
    if (!tmp4) {
      tmp4 = 0 !== maxReplayDuration && lastActivity + maxReplayDuration <= tmp2;
      const tmp5 = 0 !== maxReplayDuration && lastActivity + maxReplayDuration <= tmp2;
    }
    return tmp4;
  }
  tmp2 = +new Date();
}
function isSessionExpired(started, targetTime) {
  let maxReplayDuration;
  let sessionIdleExpire;
  targetTime = targetTime.targetTime;
  ({ maxReplayDuration, sessionIdleExpire } = targetTime);
  if (undefined === targetTime) {
    const _Date = Date;
    targetTime = Date.now();
  }
  let tmp2 = isExpired(started.started, maxReplayDuration, targetTime);
  if (!tmp2) {
    tmp2 = isExpired(started.lastActivity, sessionIdleExpire, targetTime);
  }
  return tmp2;
}
function shouldRefreshSession(stickySession, sessionIdleExpire) {
  const tmp = isSessionExpired(stickySession, { sessionIdleExpire: sessionIdleExpire.sessionIdleExpire, maxReplayDuration: sessionIdleExpire.maxReplayDuration });
  let tmp2 = tmp;
  if (tmp) {
    let tmp3 = "buffer" !== stickySession.sampled;
    if (!tmp3) {
      tmp3 = 0 !== stickySession.segmentId;
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
function loadOrCreateSession(arg0, stickySession) {
  stickySession = stickySession.stickySession;
  if (!stickySession) {
    if (stickySession) {
      let obj = { sessionIdleExpire: tmp, maxReplayDuration: tmp2 };
      let tmp22 = stickySession;
      if (shouldRefreshSession(stickySession, obj)) {
        if (closure_69) {
          closure_72.infoTick("Session in sessionStorage is expired, creating new one...");
        }
        obj = { previousSessionId: stickySession.id };
        tmp22 = createSession(stickySession, obj);
      }
      let tmp20 = tmp22;
    } else {
      if (closure_69) {
        closure_72.infoTick("Creating new session");
      }
      obj = { previousSessionId: tmp3 };
      tmp20 = createSession(stickySession, obj);
    }
    return tmp20;
  } else {
    let infoTickResult2;
    let tmp6 = null;
    if (hasSessionStorage()) {
      const sessionStorage = require(794) /* registerSpanErrorInstrumentation */.GLOBAL_OBJ.sessionStorage;
      const value = sessionStorage.getItem(sentryReplaySession);
      infoTickResult2 = value;
      if (!value) {
        tmp6 = null;
      }
    }
    const _JSON = JSON;
    const parsed = JSON.parse(infoTickResult2);
    infoTickResult2 = closure_69;
    if (closure_69) {
      infoTickResult2 = closure_72.infoTick("Loading existing session");
    }
    tmp6 = makeSession(parsed);
  }
}
function addEventSync(eventBuffer, timestamp) {
  const tmp = shouldAddEvent(eventBuffer, timestamp);
  let flag = tmp;
  if (tmp) {
    _addEvent(eventBuffer, timestamp, arg2);
    flag = true;
  }
  return flag;
}
function _addEvent(eventBuffer, timestamp, arg2) {
  return _addEvent3(...arguments);
}
async function _addEvent3(arg0, arg1, arg2, arg3) {
  const eventBuffer = arg0.eventBuffer;
  if (eventBuffer) {
    let tmp5 = arg2;
    if (arg2) {
      tmp5 = "buffer" === obj.recordingMode;
    }
    if (tmp5) {
      obj2.clear();
    }
    if (arg2) {
      obj2.hasCheckout = true;
      obj2.waitForCheckout = false;
    }
    const tmp11 = (function maybeApplyCallback(type, beforeAddRecordingEvent) {
      if ("function" === typeof beforeAddRecordingEvent) {
        if (type.type === outer3_37.Custom) {
          return beforeAddRecordingEvent(type);
        }
      }
      return type;
    })(arg1, obj.getOptions().beforeAddRecordingEvent);
    if (tmp11) {
      return yield obj2.addEvent(tmp11);
    }
  }
  return null;
}
function shouldAddEvent(eventBuffer, timestamp) {
  if (eventBuffer.eventBuffer) {
    if (!eventBuffer.isPaused()) {
      if (eventBuffer.isEnabled()) {
        const tmp3 = timestampToMs(timestamp.timestamp);
        const _Date = Date;
        const sum = tmp3 + eventBuffer.timeouts.sessionIdlePause;
        const tmp6 = sum < Date.now();
        let tmp7 = !tmp6;
        if (!tmp6) {
          const tmp8 = tmp3 > eventBuffer.getContext().initialTimestamp + eventBuffer.getOptions().maxReplayDuration;
          let flag = !tmp8;
          if (tmp8) {
            flag = false;
            if (closure_69) {
              const _HermesInternal = HermesInternal;
              closure_72.infoTick("Skipping event with timestamp " + tmp3 + " because it is after maxReplayDuration");
              flag = false;
            }
          }
          tmp7 = flag;
        }
        return tmp7;
      }
    }
  }
  return false;
}
function isErrorEvent(type) {
  return !type.type;
}
function isTransactionEvent(type) {
  return "transaction" === type.type;
}
function isFeedbackEvent(type) {
  return "feedback" === type.type;
}
function handleAfterSendEvent(arg0) {
  let closure_0 = arg0;
  return (contexts, statusCode) => {
    if (enabled.isEnabled()) {
      if (outer1_194(contexts)) {
        statusCode = statusCode.statusCode;
        let tmp4 = !statusCode;
        if (!tmp4) {
          tmp4 = statusCode < 200;
        }
        if (!tmp4) {
          tmp4 = statusCode >= 300;
        }
        if (!tmp4) {
          if (outer1_195(contexts)) {
            let context = obj.getContext();
            contexts = contexts.contexts;
            let trace_id = null != contexts;
            let tmp9 = contexts;
            if (trace_id) {
              const trace = contexts.trace;
              trace_id = null != trace;
              tmp9 = trace;
            }
            if (trace_id) {
              trace_id = tmp9.trace_id;
            }
            if (trace_id) {
              trace_id = context.traceIds.size < 100;
            }
            if (trace_id) {
              const traceIds = context.traceIds;
              traceIds.add(contexts.contexts.trace.trace_id);
            }
          } else {
            (function handleErrorEvent(getContext, event_id) {
              const callback = getContext;
              const context = getContext.getContext();
              event_id = event_id.event_id;
              if (event_id) {
                event_id = context.errorIds.size < 100;
              }
              if (event_id) {
                const errorIds = context.errorIds;
                errorIds.add(event_id.event_id);
              }
              if ("buffer" === getContext.recordingMode) {
                if (event_id.tags) {
                  if (event_id.tags.replayId) {
                    const beforeErrorSampling = getContext.getOptions().beforeErrorSampling;
                    const timerId = callback(outer2_1[10]).setTimeout(outer2_2(async () => {
                      yield outer1_0.sendBufferedReplayOrFlush();
                    }));
                  }
                }
              }
            })(obj, contexts);
          }
        }
      }
    }
  };
}
function handleBeforeSendEvent(arg0) {
  let closure_0 = arg0;
  return (exception) => {
    let isEnabledResult = enabled.isEnabled();
    if (isEnabledResult) {
      isEnabledResult = outer1_194(exception);
    }
    if (isEnabledResult) {
      exception = exception.exception;
      let value;
      if (null != exception) {
        const values = exception.values;
        if (null != values) {
          if (null != values[0]) {
            value = iter.value;
          }
        }
      }
      if ("string" === typeof value) {
        if (value.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/)) {
          let obj = { category: "replay.hydrate-error" };
          obj = { url: enabled(outer1_1[9]).getLocationHref() };
          obj.data = obj;
          outer1_159(tmp3, outer1_166(obj));
          const obj3 = enabled(outer1_1[9]);
        }
      }
      tmp3 = enabled;
    }
  };
}
function handleBreadcrumbs(arg0) {
  const _require = arg0;
  const client = _require(794).getClient();
  if (client) {
    client.on("beforeAddBreadcrumb", (category) => {
      (function beforeAddBreadcrumb(closure_0, category) {
        if (closure_0.isEnabled()) {
          if (outer2_200(category)) {
            const tmp2 = (function normalizeBreadcrumb(category) {
              if (outer3_200(category)) {
                const items = ["fetch", "xhr", "sentry.event", "sentry.transaction"];
                if (!items.includes(category.category)) {
                  category = category.category;
                  if (!category.startsWith("ui.")) {
                    if ("console" === category.category) {
                      return (function normalizeConsoleBreadcrumb(data) {
                        data = data.data;
                        let _arguments;
                        if (null != data) {
                          _arguments = data.arguments;
                        }
                        if (Array.isArray(_arguments)) {
                          if (0 !== _arguments.length) {
                            let c0 = false;
                            let obj = {};
                            const _Object = Object;
                            const data2 = data.data;
                            obj = { arguments: _arguments.map(() => { ... }) };
                            if (c0) {
                              const obj1 = {};
                              const obj2 = { warnings: ["CONSOLE_ARG_TRUNCATED"] };
                              obj1._meta = obj2;
                              obj = obj1;
                            } else {
                              obj = {};
                            }
                            obj.data = Object.assign({}, data2, obj, obj);
                            return outer4_166(Object.assign({}, data, obj));
                          }
                        }
                        return outer4_166(data);
                      })(category);
                    } else {
                      return outer3_166(category);
                    }
                  }
                }
              }
              return null;
            })(category);
            if (tmp2) {
              outer2_159(closure_0, tmp2);
            }
          }
        }
      })(closure_0, category);
    });
  }
}
function isBreadcrumbWithCategory(category) {
  return category.category;
}
function resetReplayIdOnDynamicSamplingContext() {
  const currentScope = require(794) /* registerSpanErrorInstrumentation */.getCurrentScope();
  if (currentScope.getPropagationContext().dsc) {
    delete tmp2.replay_id;
  }
  const obj = require(794) /* registerSpanErrorInstrumentation */;
  const activeSpan = require(794) /* registerSpanErrorInstrumentation */.getActiveSpan();
  if (activeSpan) {
    const dynamicSamplingContextFromSpan = require(794) /* registerSpanErrorInstrumentation */.getDynamicSamplingContextFromSpan(activeSpan);
    delete tmp.replay_id;
    const obj4 = require(794) /* registerSpanErrorInstrumentation */;
  }
}
function handleGlobalEventListener(arg0) {
  let closure_0 = arg0;
  return Object.assign((type, originalException) => {
    if (store.isEnabled()) {
      if (!store.isPaused()) {
        if ("replay_event" === type.type) {
          delete tmp.breadcrumbs;
          return type;
        } else {
          if (!outer1_194(type)) {
            if (!outer1_195(type)) {
              if (!outer1_196(type)) {
                return type;
              }
            }
          }
          if (store.checkAndHandleExpiredSession()) {
            if (outer1_196(type)) {
              store.flush();
              type.contexts.feedback.replay_id = store.getSessionId();
              (function addFeedbackBreadcrumb(closure_0, type) {
                let closure_1 = type;
                closure_0.triggerUserActivity();
                closure_0.addUpdate(() => {
                  let flag = !type.timestamp;
                  if (!flag) {
                    let obj = { type: outer3_37.Custom, timestamp: 1000 * type.timestamp };
                    obj = { tag: "breadcrumb" };
                    obj = { timestamp: type.timestamp, type: "default", category: "sentry.feedback" };
                    const obj1 = { feedbackId: type.event_id };
                    obj.data = obj1;
                    obj.payload = obj;
                    obj.data = obj;
                    closure_0.throttledAddEvent(obj);
                    flag = false;
                  }
                  return flag;
                });
              })(store, type);
              return type;
            } else {
              type = type.type;
              let tmp9;
              if (!type) {
                const exception = type.exception;
                type = null == exception;
                tmp9 = exception;
              }
              let arr = tmp9;
              if (!type) {
                const values = tmp9.values;
                type = null == values;
                arr = values;
              }
              if (!type) {
                type = !arr.length;
              }
              if (!type) {
                originalException = originalException.originalException;
                type = null == originalException;
                const tmp12 = originalException;
              }
              if (!type) {
                type = !tmp12.__rrweb__;
              }
              if (!type) {
                if (!store.getOptions()._experiments.captureExceptions) {
                  if (outer1_69) {
                    outer1_72.log("Ignoring error from rrweb internals", type);
                  }
                  return null;
                }
              }
              let obj = store;
              let tmp20 = "buffer" === store.recordingMode;
              if (tmp20) {
                tmp20 = type.message !== outer1_11;
              }
              if (tmp20) {
                tmp20 = !(!type.exception || type.type);
                const tmp22 = !type.exception || type.type;
              }
              if (tmp20) {
                tmp20 = outer1_182(obj.getOptions().errorSampleRate);
              }
              let tmp24 = tmp20;
              if (!tmp20) {
                tmp24 = "session" === store.recordingMode;
              }
              if (tmp24) {
                const _Object = Object;
                obj = { replayId: store.getSessionId() };
                type.tags = Object.assign({}, type.tags, obj);
              }
              if (tmp20) {
                if ("buffer" === store.recordingMode) {
                  const session = store.session;
                  let sampled;
                  if (null != session) {
                    sampled = session.sampled;
                  }
                  if ("buffer" === sampled) {
                    const session2 = store.session;
                    session2.dirty = true;
                    if (store.getOptions().stickySession) {
                      outer1_183(session2);
                    }
                  }
                }
              }
              return type;
            }
          } else {
            outer1_201();
            return type;
          }
        }
      }
    }
    return type;
  }, { id: "Replay" });
}
function createPerformanceSpans(arg0, arr) {
  let closure_0 = arg0;
  return arr.map((op) => {
    const start = op.start;
    obj = { type: outer1_37.Custom, timestamp: start, data: { tag: "performanceSpan", payload: obj } };
    obj = { op: op.type, description: op.name, startTimestamp: start, endTimestamp: op.end, data: op.data };
    let throttledAddEventResult = closure_0.throttledAddEvent(obj);
    if ("string" === typeof throttledAddEventResult) {
      throttledAddEventResult = Promise.resolve(null);
    }
    return throttledAddEventResult;
  });
}
function handleHistorySpanListener(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let from;
    let to;
    if (obj.isEnabled()) {
      const _Date = Date;
      ({ from, to } = arg0);
      const result = Date.now() / 1000;
      obj = { type: "navigation.push", start: result, end: result, name: to };
      obj = { previous: from };
      obj.data = obj;
      if (null !== obj) {
        const urls = obj.getContext().urls;
        urls.push(obj.name);
        obj.triggerUserActivity();
        obj.addUpdate(() => {
          const items = [obj];
          outer2_203(obj, items);
          return false;
        });
      }
    }
  };
}
function addNetworkBreadcrumb(isEnabled, name) {
  const _require = isEnabled;
  const dependencyMap = name;
  let isEnabledResult = isEnabled.isEnabled();
  if (isEnabledResult) {
    isEnabledResult = null !== name;
  }
  if (isEnabledResult) {
    let isSentryRequestUrlResult = !closure_69;
    if (!isSentryRequestUrlResult) {
      isSentryRequestUrlResult = !isEnabled.getOptions()._experiments.traceInternals;
    }
    if (isSentryRequestUrlResult) {
      const obj = _require(794);
      isSentryRequestUrlResult = obj.isSentryRequestUrl(name.name, _require(794).getClient());
      const obj2 = _require(794);
    }
    if (!isSentryRequestUrlResult) {
      isEnabled.addUpdate(() => {
        const items = [closure_1];
        outer1_203(closure_0, items);
        return true;
      });
    }
  }
}
function getBodySize(fetchRequestArgBody) {
  if (fetchRequestArgBody) {
    const _TextEncoder = TextEncoder;
    const textEncoder = new TextEncoder();
    if ("string" === typeof str) {
      return obj.encode(fetchRequestArgBody).length;
    } else {
      const _URLSearchParams = URLSearchParams;
      if (str instanceof URLSearchParams) {
        return obj.encode(str.toString()).length;
      } else {
        const _FormData = FormData;
        if (str instanceof FormData) {
          return obj.encode(require(1009) /* addClsInstrumentationHandler */.serializeFormData(str)).length;
        } else {
          const _Blob = Blob;
          if (str instanceof Blob) {
            return str.size;
          } else {
            const _ArrayBuffer = ArrayBuffer;
            if (str instanceof ArrayBuffer) {
              return str.byteLength;
            }
          }
        }
      }
    }
  }
}
function parseContentLengthHeader(replaced) {
  if (replaced) {
    const _parseInt = parseInt;
    const parsed = parseInt(replaced, 10);
    const _isNaN = isNaN;
    let tmp3;
    if (!isNaN(parsed)) {
      tmp3 = parsed;
    }
    return tmp3;
  }
}
function mergeWarning(_meta) {
  if (_meta) {
    const _Object = Object;
    const merged = Object.assign({}, _meta._meta);
    const items = [];
    const items1 = [arg1];
    merged.warnings = items.concat(_toConsumableArray(merged.warnings || []), items1);
    _meta._meta = merged;
    return _meta;
  } else {
    let obj = { headers: {}, size: undefined };
    obj = {};
    const items2 = [arg1];
    obj.warnings = items2;
    obj._meta = obj;
    return obj;
  }
}
function makeNetworkReplayBreadcrumb(type, startTimestamp) {
  let tmp = null;
  if (startTimestamp) {
    let obj = { type, start: startTimestamp.startTimestamp / 1000, end: startTimestamp.endTimestamp / 1000, name: startTimestamp.url };
    obj = {};
    ({ method: obj2.method, statusCode: obj2.statusCode, request: obj2.request, response: obj2.response } = startTimestamp);
    obj.data = obj;
    tmp = obj;
  }
  return tmp;
}
function buildSkippedNetworkRequestOrResponse(size) {
  return { headers: {}, size, _meta: { warnings: ["URL_SKIPPED"] } };
}
function buildNetworkRequestOrResponse(headers, size, body) {
  let warnings;
  if (!size) {
    const _Object = Object;
  }
  if (size) {
    let obj = { headers, size };
    if (body) {
      ({ warnings, body: obj2.body } = (function normalizeNetworkBody(body) {
        if (body) {
          if ("string" === typeof arr) {
            const first = arr[0];
            let tmp2 = "[" === first;
            if (tmp2) {
              tmp2 = "]" === tmp16;
            }
            if (!tmp2) {
              let tmp3 = "{" === first;
              if (tmp3) {
                tmp3 = "}" === tmp16;
              }
              tmp2 = tmp3;
            }
            if (tmp14) {
              const substr = arr.slice(0, outer1_12);
              let obj = {};
              if (tmp2) {
                obj.body = substr;
                obj.warnings = ["MAYBE_JSON_TRUNCATED"];
                let tmp11 = obj;
              } else {
                const _HermesInternal = HermesInternal;
                obj.body = "" + substr + "\u2026";
                obj.warnings = ["TEXT_TRUNCATED"];
                tmp11 = obj;
              }
              return tmp11;
            } else if (!tmp2) {
              {}.body = arr;
            } else {
              obj = {};
              const _JSON = JSON;
              obj.body = JSON.parse(arr);
              return obj;
            }
            tmp14 = arr.length > outer1_12;
          }
        }
        obj = { body };
        return obj;
      })(body));
      if (tmp4) {
        obj = { warnings };
        obj._meta = obj;
      }
      return obj;
    } else {
      return obj;
    }
  } else {
    obj = { headers };
    return obj;
  }
}
function getAllowedHeaders(headers, arr) {
  let closure_0 = headers;
  let closure_1 = arr;
  const entries = Object.entries(headers);
  return entries.reduce((arg0, arg1) => {
    const tmp = outer1_6(arg1, 2);
    const formatted = str.toLowerCase();
    let hasItem = arr.includes(formatted);
    if (hasItem) {
      hasItem = headers[str];
    }
    if (hasItem) {
      arg0[formatted] = tmp[1];
    }
    return arg0;
  }, {});
}
function urlMatches(arg0, arg1) {
  const tmp = (function getFullUrl(str) {
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let baseURI = arguments[1];
      }
      if (!str.startsWith("http://")) {
        if (!str.startsWith("https://")) {
          if (!str.startsWith(outer1_0(outer1_1[9]).GLOBAL_OBJ.location.origin)) {
            const _URL = URL;
            const uRL = new URL(str, baseURI);
            const _URL2 = URL;
            const uRL1 = new URL(baseURI);
            if (uRL.origin !== uRL1.origin) {
              return str;
            } else {
              const href = uRL.href;
              if (!str.endsWith("/")) {
                if (href.endsWith("/")) {
                  return href.slice(0, -1);
                }
              }
              return href;
            }
          }
        }
      }
      return str;
    }
    baseURI = outer1_0(outer1_1[9]).GLOBAL_OBJ.document.baseURI;
  })(arg0);
  return require(794) /* registerSpanErrorInstrumentation */.stringMatchesSomePattern(tmp, arg1);
}
async function _captureFetchBreadcrumbToReplay(arg0, arg1, arg2, arg3) {
  outer2_205(arg2.replay, outer2_209("resource.fetch", yield (function _prepareFetchData(arg0, arg1, replay) {
    return outer3_215(...arguments);
  })(arg0, arg1, arg2)));
}
async function _prepareFetchData2(arg0, arg1, arg2, arg3) {
  let request_body_size;
  let response_body_size;
  let status_code;
  let url;
  const timestamp = Date.now();
  let startTimestamp = arg1.startTimestamp;
  if (undefined === startTimestamp) {
    startTimestamp = timestamp;
  }
  let endTimestamp = arg1.endTimestamp;
  if (undefined === endTimestamp) {
    endTimestamp = timestamp;
  }
  const data = arg0.data;
  ({ url, status_code } = data);
  let num = 0;
  if (undefined !== status_code) {
    num = status_code;
  }
  ({ request_body_size, response_body_size } = data);
  let tmp2 = outer2_213(url, arg2.networkDetailAllowUrls);
  if (tmp2) {
    tmp2 = !outer2_213(url, arg2.networkDetailDenyUrls);
  }
  if (tmp2) {
    let tmp5 = (function _getRequestInfo(networkRequestHeaders, input, request_body_size) {
      networkRequestHeaders = networkRequestHeaders.networkRequestHeaders;
      if (input) {
        if (1 === input.length) {
          if ("string" !== typeof input[0]) {
            let obj = outer3_219(input[0], networkRequestHeaders);
          }
          obj = outer3_219(input[num], networkRequestHeaders);
        }
        if (2 !== input.length) {
          obj = {};
        }
      } else {
        obj = {};
        if (tmp) {
          const fetchRequestArgBody = outer3_0(outer3_1[10]).getFetchRequestArgBody(input);
          const obj3 = outer3_0(outer3_1[10]);
          const tmp11 = outer3_6(outer3_0(outer3_1[10]).getBodyString(fetchRequestArgBody, outer3_72), 2);
          const tmp14 = outer3_211(obj, request_body_size, tmp11[0]);
          if (tmp11[1]) {
            return outer3_208(tmp14, tmp12);
          } else {
            return tmp14;
          }
          const obj4 = outer3_0(outer3_1[10]);
        } else {
          return outer3_211(obj, request_body_size, undefined);
        }
      }
    })(arg2, arg1.input, request_body_size);
  } else {
    tmp5 = outer2_210(request_body_size);
  }
  let obj = {
    startTimestamp,
    endTimestamp,
    url,
    method: data.method,
    statusCode: num,
    request: tmp5,
    response: yield (function _getResponseInfo(arg0, networkDetailAllowUrls, response, response_body_size) {
      return outer3_216(...arguments);
    })(tmp2, arg2, arg1.response, response_body_size)
  };
  return obj;
}
async function _getResponseInfo2(arg0, arg1, arg2, arg3, arg4) {
  let headers;
  let networkCaptureBodies;
  let networkCaptureBodies2;
  let networkResponseHeaders;
  let responseBodySize;
  ({ networkCaptureBodies, networkResponseHeaders } = arg1);
  if (!arg0) {
    if (undefined !== arg3) {
      return outer2_210(arg3);
    }
  }
  if (arg2) {
    let obj = outer2_218(arg2.headers, networkResponseHeaders);
  } else {
    obj = {};
  }
  if (arg2) {
    const tmp4 = outer2_6(yield (function _parseFetchResponseBody(headers) {
      return outer3_217(...arguments);
    })(arg2), 2);
    const first = tmp4[0];
    obj = { networkCaptureBodies, responseBodySize: arg3, captureDetails: arg0 };
    obj.headers = obj;
    ({ networkCaptureBodies: networkCaptureBodies2, responseBodySize, headers } = obj);
    if (null != first) {
      if (arr.length) {
        if (undefined === responseBodySize) {
          let tmp12 = outer2_206(arr);
        }
        if (tmp7) {
          let tmp22;
          if (networkCaptureBodies2) {
            tmp22 = first;
          }
          let tmp19Result = outer2_211(headers, tmp12, tmp22);
          const tmp19 = outer2_211;
        } else {
          tmp19Result = outer2_210(tmp15);
        }
        while (true) {
          let tmp23 = tmp19Result;
          if (!tmp6) {
            break;
          } else {
            let tmp24 = outer2_208;
            tmp23 = outer2_208(tmp19Result, tmp6);
            break;
          }
          return tmp23;
        }
      }
    }
    tmp12 = responseBodySize;
  }
  return outer2_211(obj, arg3, undefined);
}
async function _parseFetchResponseBody2(arg0, arg1) {
  const cloneResult = arg0.clone();
  while (true) {
    if (cloneResult) {
      let tmp3 = cloneResult;
      let items = [
        yield (function _tryGetResponseText(arg0) {
              let closure_0 = arg0;
              return new Promise((closure_0) => {
                let closure_1 = arg1;
                const timeout = outer4_0(outer4_1[10]).setTimeout(() => {
                  const error = new Error("Timeout while trying to read response body");
                  return callback2(error);
                }, 500);
                const obj = outer4_0(outer4_1[10]);
                const promise = (function _getResponseText(closure_0) {
                  return outer5_220(...arguments);
                })(closure_0);
                (function _getResponseText(closure_0) {
                  return outer5_220(...arguments);
                })(closure_0).then((arg0) => callback(arg0), (arg0) => callback2(arg0)).finally(() => clearTimeout(closure_2));
              });
            })(tmp2)
      ];
      return items;
    } else {
      let items1 = [undefined, ];
      let str = "BODY_PARSE_ERROR";
      items1[1] = "BODY_PARSE_ERROR";
      return items1;
    }
  }
}
function getAllHeaders(headers, arr) {
  let closure_0 = headers;
  const obj = {};
  const item = arr.forEach((arg0) => {
    if (headers.get(arg0)) {
      obj[arg0] = headers.get(arg0);
    }
  });
  return obj;
}
function getHeadersFromOptions(headers, arr) {
  if (headers) {
    headers = headers.headers;
    if (headers) {
      const _Headers = Headers;
      if (headers instanceof Headers) {
        let obj = getAllHeaders(headers, arr);
      } else {
        const _Array = Array;
        if (Array.isArray(headers)) {
          obj = {};
        } else {
          obj = getAllowedHeaders(headers, arr);
        }
      }
    } else {
      return {};
    }
  } else {
    return {};
  }
}
async function _getResponseText2(arg0, arg1) {
  return yield arg0.text();
}
async function _captureXhrBreadcrumbToReplay(arg0, arg1, arg2, arg3) {
  if (obj) {
    return obj.resume();
  } else {
    outer2_205(arg2.replay, outer2_209("resource.xhr", (function _prepareXhrData(data, startTimestamp, networkDetailAllowUrls) {
      let method;
      let request_body_size;
      let response_body_size;
      let status_code;
      let tmp18;
      let tmp19;
      let url;
      const timestamp = Date.now();
      startTimestamp = startTimestamp.startTimestamp;
      if (undefined === startTimestamp) {
        startTimestamp = timestamp;
      }
      let endTimestamp = startTimestamp.endTimestamp;
      if (undefined === endTimestamp) {
        endTimestamp = timestamp;
      }
      const xhr = startTimestamp.xhr;
      data = data.data;
      ({ url, method, status_code } = data);
      let num = 0;
      if (undefined !== status_code) {
        num = status_code;
      }
      ({ request_body_size, response_body_size } = data);
      if (url) {
        if (xhr) {
          if (outer3_213(url, networkDetailAllowUrls.networkDetailAllowUrls)) {
            if (!outer3_213(url, networkDetailAllowUrls.networkDetailDenyUrls)) {
              const tmp7 = xhr[outer3_0(undefined, outer3_1[10]).SENTRY_XHR_DATA_KEY];
              if (tmp7) {
                let obj = outer3_212(tmp7.request_headers, networkDetailAllowUrls.networkRequestHeaders);
              } else {
                obj = {};
              }
              const obj2 = outer3_0(outer3_1[10]);
              if (networkDetailAllowUrls.networkCaptureBodies) {
                let bodyString = outer3_0(outer3_1[10]).getBodyString(startTimestamp.input, outer3_72);
                const obj3 = outer3_0(outer3_1[10]);
              } else {
                bodyString = [undefined];
              }
              const tmp12 = outer3_212(outer3_0(outer3_1[10]).parseXhrResponseHeaders(xhr), networkDetailAllowUrls.networkResponseHeaders);
              [tmp18, tmp19] = outer3_6(bodyString, 2);
              if (networkDetailAllowUrls.networkCaptureBodies) {
                let items = (function _getXhrResponseBody(xhr) {
                  const items = [xhr.responseText];
                  return items;
                })(xhr);
              } else {
                items = [undefined];
              }
              const tmp21 = outer3_6(items, 2);
              const tmp24 = outer3_211(obj, request_body_size, tmp18);
              const tmp25 = outer3_211(tmp12, response_body_size, tmp21[0]);
              obj = { startTimestamp, endTimestamp, url, method, statusCode: num };
              let tmp26 = tmp24;
              if (tmp19) {
                tmp26 = outer3_208(tmp24, tmp19);
              }
              obj.request = tmp26;
              let tmp28 = tmp25;
              if (tmp21[1]) {
                tmp28 = outer3_208(tmp25, tmp22);
              }
              obj.response = tmp28;
              return obj;
            }
          }
        }
        obj = { startTimestamp, endTimestamp, url, method, statusCode: num, request: outer3_210(request_body_size), response: outer3_210(response_body_size) };
        return obj;
      } else {
        return null;
      }
    })(arg0, arg1, arg2)));
  }
}
function enrichXhrBreadcrumb(data, xhr) {
  let response;
  let responseType;
  xhr = xhr.xhr;
  if (xhr) {
    const tmp3 = getBodySize(tmp);
    if (xhr.getResponseHeader("content-length")) {
      let tmp6Result = parseContentLengthHeader(xhr.getResponseHeader("content-length"));
    } else {
      ({ response, responseType } = xhr);
      if ("json" === responseType) {
        if (tmp4) {
          if ("object" === typeof tmp4) {
            const _JSON = JSON;
            let json = JSON.stringify(response);
          }
          tmp6Result = tmp6(json);
        }
      }
      json = response;
    }
    if (undefined !== tmp3) {
      data.data.request_body_size = tmp3;
    }
    if (undefined !== tmp6Result) {
      data.data.response_body_size = tmp6Result;
    }
  }
}
function handleNetworkBreadcrumbs(getOptions) {
  const client = _require(794).getClient();
  const options = getOptions.getOptions();
  _require = { replay: getOptions, networkDetailAllowUrls: options.networkDetailAllowUrls, networkDetailDenyUrls: options.networkDetailDenyUrls, networkCaptureBodies: options.networkCaptureBodies, networkRequestHeaders: options.networkRequestHeaders, networkResponseHeaders: options.networkResponseHeaders };
  if (client) {
    client.on("beforeAddBreadcrumb", (data, xhr) => {
      (function beforeAddNetworkBreadcrumb(closure_0, data, xhr) {
        let input;
        let response;
        if (data.data) {
          let tmp4 = tmp3;
          if ("xhr" === tmp.category) {
            xhr = undefined;
            if (null != xhr) {
              xhr = xhr.xhr;
            }
            tmp4 = xhr;
          }
          if (tmp4) {
            outer2_222(tmp, xhr);
            (function captureXhrBreadcrumbToReplay(data, xhr, closure_0) {
              return outer3_221(...arguments);
            })(tmp, xhr, closure_0);
          }
          let tmp16 = tmp15;
          if ("fetch" === tmp.category) {
            response = undefined;
            if (null != xhr) {
              response = xhr.response;
            }
            tmp16 = response;
          }
          if (tmp16) {
            ({ input, response } = xhr);
            let fetchRequestArgBody;
            if (input) {
              fetchRequestArgBody = callback(outer2_1[10]).getFetchRequestArgBody(input);
              const obj = callback(outer2_1[10]);
            }
            const tmp22Result = outer2_206(fetchRequestArgBody);
            let tmp27;
            if (response) {
              const headers = response.headers;
              tmp27 = outer2_207(headers.get("content-length"));
            }
            if (undefined !== tmp22Result) {
              tmp.data.request_body_size = tmp22Result;
            }
            if (undefined !== tmp27) {
              tmp.data.response_body_size = tmp27;
            }
            (function captureFetchBreadcrumbToReplay(data, xhr, closure_0) {
              return outer3_214(...arguments);
            })(tmp, xhr, closure_0);
            const tmp22 = outer2_206;
          }
        }
      })(closure_0, data, xhr);
    });
  }
}
async function _addMemoryEntry(arg0, arg1) {
  let jsHeapSizeLimit;
  let totalJSHeapSize;
  let usedJSHeapSize;
  if (obj) {
    return obj.resume();
  } else {
    const _Date = Date;
    ({ jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = outer2_0(outer2_1[9]).GLOBAL_OBJ.performance.memory);
    const result = Date.now() / 1000;
    obj = { type: "memory", name: "memory", start: result, end: result };
    obj = {};
    const obj1 = { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize };
    obj.memory = obj1;
    obj.data = obj;
    const items = [obj];
    return Promise.all(outer2_203(arg0, items));
  }
}
function getHandleRecordingEmit(arg0) {
  let closure_0 = arg0;
  let c1 = false;
  return (arg0, arg1) => {
    let tmp = arg1;
    let closure_0 = arg0;
    if (closure_0.checkAndHandleExpiredSession()) {
      if (!tmp) {
        tmp = !c1;
      }
      c1 = tmp;
      c1 = true;
      if (closure_0.clickDetector) {
        outer1_165(closure_0.clickDetector, arg0);
      }
      closure_0.addUpdate(() => {
        if (tmp) {
          store.setInitialState();
        }
        if (outer2_190(store, store, c1)) {
          if (c1) {
            const session = store.session;
            (function addSettingsEvent(closure_0, c1) {
              if (c1) {
                if (closure_0.session) {
                  if (0 === closure_0.session.segmentId) {
                    const options = closure_0.getOptions();
                    let obj = { type: outer3_37.Custom };
                    const _Date = Date;
                    obj.timestamp = Date.now();
                    obj = { tag: "options" };
                    obj = { shouldRecordCanvas: closure_0.isRecordingCanvas() };
                    ({ sessionSampleRate: obj3.sessionSampleRate, errorSampleRate: obj3.errorSampleRate, useCompression: obj3.useCompressionOption, blockAllMedia: obj3.blockAllMedia, maskAllText: obj3.maskAllText, maskAllInputs: obj3.maskAllInputs } = options);
                    let tmp = !tmp7;
                    if (!!closure_0.eventBuffer) {
                      tmp = "worker" === closure_0.eventBuffer.type;
                    }
                    obj.useCompression = tmp;
                    obj.networkDetailHasUrls = options.networkDetailAllowUrls.length > 0;
                    obj.networkCaptureBodies = options.networkCaptureBodies;
                    obj.networkRequestHasHeaders = options.networkRequestHeaders.length > 0;
                    obj.networkResponseHasHeaders = options.networkResponseHeaders.length > 0;
                    obj.payload = obj;
                    obj.data = obj;
                    outer3_190(closure_0, obj, false);
                  }
                }
              }
            })(store, c1);
            if ("buffer" === store.recordingMode) {
              if (session) {
                if (store.eventBuffer) {
                  if (!session.dirty) {
                    const eventBuffer = store.eventBuffer;
                    const earliestTimestamp = eventBuffer.getEarliestTimestamp();
                    if (earliestTimestamp) {
                      if (outer2_69) {
                        let _Date = Date;
                        const date = new Date(earliestTimestamp);
                        const _HermesInternal = HermesInternal;
                        outer2_72.log("Updating session start time to earliest event in buffer to " + date);
                      }
                      session.started = earliestTimestamp;
                      if (store.getOptions().stickySession) {
                        outer2_183(session);
                      }
                    }
                  }
                }
              }
            }
            if (!tmp24) {
              if ("session" === store.recordingMode) {
                store.flush();
              }
            }
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
        tmp = "buffer" === store.recordingMode && c1;
      });
    } else if (outer1_69) {
      outer1_72.warn("Received replay event after session expired.");
    }
  };
}
async function _prepareReplayEvent(arg0, arg1) {
  let client;
  let event;
  let name;
  let scope;
  let version;
  ({ client, scope, event } = arg0);
  let obj = { event_id: arg0.replayId };
  let keys;
  if ("object" === typeof client._integrations) {
    if (null !== client._integrations) {
      const _Array = Array;
      if (!Array.isArray(client._integrations)) {
        const _Object = Object;
        keys = Object.keys(client._integrations);
      }
    }
  }
  obj.integrations = keys;
  client.emit("preprocessEvent", event, obj);
  const options = client.getOptions();
  const obj2 = outer2_0(outer2_1[9]);
  const tmp6 = yield obj2.prepareEvent(options, event, obj, scope, client, outer2_0(outer2_1[9]).getIsolationScope());
  if (tmp6) {
    client.emit("postprocessEvent", tmp6, obj);
    tmp6.platform = tmp6.platform || "javascript";
    const sdkMetadata = client.getSdkMetadata();
    let sdk;
    if (null != sdkMetadata) {
      sdk = sdkMetadata.sdk;
    }
    if (!sdk) {
      sdk = {};
    }
    ({ name, version } = sdk);
    obj = {};
    if (!name) {
      name = "sentry.javascript.unknown";
    }
    obj.name = name;
    if (!version) {
      version = "0.0.0";
    }
    obj.version = version;
    obj.settings = sdk.settings;
    tmp6.sdk = Object.assign({}, tmp6.sdk, obj);
    return tmp6;
  } else {
    return null;
  }
  const obj3 = outer2_0(outer2_1[9]);
}
async function _sendReplayRequest(arg0, arg1) {
  let errorIds;
  let eventContext;
  let initialTimestamp;
  let replayId;
  let segmentId;
  let session;
  let traceIds;
  let urls;
  ({ replayId, segmentId, eventContext, session } = arg0);
  let obj = { recordingData: arg0.recordingData, headers: { segment_id: segmentId } };
  const recordingData = obj.recordingData;
  const combined = "" + JSON.stringify(obj.headers) + "\n";
  if ("string" === typeof recordingData) {
    const _HermesInternal = HermesInternal;
    let combined1 = "" + combined + recordingData;
  } else {
    const _TextEncoder = TextEncoder;
    const textEncoder = new TextEncoder();
    const encodeResult = textEncoder.encode(combined);
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(encodeResult.length + recordingData.length);
    const result = uint8Array.set(encodeResult);
    const result1 = uint8Array.set(recordingData, encodeResult.length);
    combined1 = uint8Array;
  }
  ({ urls, errorIds, traceIds, initialTimestamp } = eventContext);
  const client = outer2_0(outer2_1[9]).getClient();
  const obj4 = outer2_0(outer2_1[9]);
  let transport;
  const currentScope = outer2_0(outer2_1[9]).getCurrentScope();
  if (null != client) {
    transport = client.getTransport();
  }
  if (null != client) {
    const dsn = client.getDsn();
  }
  if (client) {
    if (obj7) {
      if (dsn) {
        if (session.sampled) {
          obj = { type: "replay_event", replay_start_timestamp: initialTimestamp / 1000, timestamp: arg0.timestamp / 1000, error_ids: errorIds, trace_ids: traceIds, urls, replay_id: replayId, segment_id: segmentId, replay_type: session.sampled };
          obj = { scope: currentScope, client, replayId };
          obj.event = obj;
          const tmp15 = yield (function prepareReplayEvent(arg0) {
            return outer3_226(...arguments);
          })(obj);
          if (tmp15) {
            delete tmp.sdkProcessingMetadata;
            const obj11 = outer2_0(outer2_1[9]);
            const obj10 = outer2_0(outer2_1[9]);
            const obj1 = { type: "replay_event" };
            const items = [obj1, tmp15];
            const items1 = [items, ];
            const obj2 = { type: "replay_recording" };
            const eventEnvelopeHeaders = obj11.createEventEnvelopeHeaders(tmp15, outer2_0(outer2_1[9]).getSdkMetadataForEnvelopeHeader(tmp15), client.getOptions().tunnel, dsn);
            if ("string" === typeof combined1) {
              const _TextEncoder2 = TextEncoder;
              const textEncoder1 = new TextEncoder();
              let length = textEncoder1.encode(combined1).length;
            } else {
              length = combined1.length;
            }
            obj2.length = length;
            const items2 = [obj2, combined1];
            items1[1] = items2;
            const tmp30 = yield obj7.send(obj10.createEnvelope(eventEnvelopeHeaders, items1));
            if ("number" === typeof tmp30.statusCode) {
              const prototype5 = outer2_79.prototype;
              const tmp50 = new outer2_79(tmp30.statusCode);
              throw tmp50;
            }
            const obj12 = outer2_0(outer2_1[9]);
            const updateRateLimitsResult = outer2_0(outer2_1[9]).updateRateLimits({}, tmp30);
            const obj16 = outer2_0(outer2_1[9]);
            const tmp39 = updateRateLimitsResult;
            if (obj17.isRateLimited(updateRateLimitsResult, "replay")) {
              const prototype4 = outer2_80.prototype;
              const tmp45 = new outer2_80(tmp39);
              throw tmp45;
            } else {
              return tmp31;
            }
            obj17 = outer2_0(outer2_1[9]);
          } else {
            client.recordDroppedEvent("event_processor", "replay");
            if (outer2_69) {
              outer2_72.log("An event processor returned `null`, will not send event.");
            }
            return Promise.resolve({});
          }
        }
      }
    }
  }
  return Promise.resolve({});
}
function sendReplay(arg0) {
  return _sendReplay(...arguments);
}
async function _sendReplay(arg0, arg1) {
  let closure_0 = arg0;
  let obj;
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      obj = arguments[1];
    }
    const onError = tmp.onError;
    if (tmp.recordingData.length) {
      yield (function sendReplayRequest(arg0) {
        return outer3_227(...arguments);
      })(tmp);
      return true;
    }
  }
  obj = { count: 0, interval: 5000 };
}
function throttle(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let c1 = 300;
  let c2 = 5;
  const map = new Map();
  let c4 = false;
  return () => {
    const rounded = Math.floor(Date.now() / 1000);
    (function _cleanup(rounded) {
      let closure_0 = rounded - outer1_2;
      const item = outer1_3.forEach((arg0, arg1) => {
        if (arg1 < closure_0) {
          outer2_3.delete(arg1);
        }
      });
    })(rounded);
    if ((function _getTotalCount() {
      return outer2_7(outer1_3.values()).reduce((arg0, arg1) => arg0 + arg1, 0);
    })() >= c1) {
      let c4 = true;
      let str = "__SKIPPED";
      if (!c4) {
        str = outer1_81;
      }
      return str;
    } else {
      c4 = false;
      const result = map.set(rounded, (map.get(rounded) || 0) + 1);
      return callback(...arguments);
    }
  };
}
function getOption(arg0) {
  const items = [];
  const combined = items.concat(_toConsumableArray(arg0), _toConsumableArray(arg1));
  return combined.join(",");
}
function _getMergedNetworkHeaders(arr) {
  const items = [];
  return items.concat(closure_84, _toConsumableArray(arr.map((str) => str.toLowerCase())));
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let sentryReplaySession = "sentryReplaySession";
let c11 = "Unable to send Replay";
let c12 = 150000;
let c13 = 5000;
let c14 = 20000000;
let c15 = 3600000;
function __publicField$1(arg0, arg1, value) {
  let text = arg1;
  if ("symbol" !== typeof arg1) {
    text = `${arg1}`;
  }
  if (text in arg0) {
    const obj = { enumerable: true, configurable: true, writable: true, value };
    let tmp2 = defineProperty(arg0, text, obj);
  } else {
    arg0[text] = value;
    tmp2 = value;
  }
  return tmp2;
}
let closure_18 = { Document: 0, [0]: "Document", DocumentType: 1, [1]: "DocumentType", Element: 2, [2]: "Element", Text: 3, [3]: "Text", CDATA: 4, [4]: "CDATA", Comment: 5, [5]: "Comment" };
let closure_19 = (() => {
  class Mirror {
    constructor() {
      tmp = outer1_8(this, Mirror);
      map = new Map();
      tmp3 = outer1_17(this, "idNodeMap", map);
      weakMap = new WeakMap();
      tmp5 = outer1_17(this, "nodeMetaMap", weakMap);
      return;
    }
  }
  let obj = {
    key: "getId",
    value: function getId(arg0) {
      const self = this;
      if (arg0) {
        const meta = self.getMeta(arg0);
        let id;
        if (null != meta) {
          id = meta.id;
        }
        let num2 = -1;
        if (null != id) {
          num2 = id;
        }
        return num2;
      } else {
        return -1;
      }
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "getNode",
    value: function getNode(arg0) {
      const idNodeMap = this.idNodeMap;
      return idNodeMap.get(arg0) || null;
    }
  };
  items[1] = obj;
  obj = {
    key: "getIds",
    value: function getIds() {
      const idNodeMap = this.idNodeMap;
      return Array.from(idNodeMap.keys());
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMeta",
    value: function getMeta(arg0) {
      const nodeMetaMap = this.nodeMetaMap;
      return nodeMetaMap.get(arg0) || null;
    }
  };
  items[4] = {
    key: "removeNodeFromMap",
    value: function removeNodeFromMap(childNodes) {
      const self = this;
      const idNodeMap = this.idNodeMap;
      idNodeMap.delete(this.getId(childNodes));
      if (childNodes.childNodes) {
        childNodes = childNodes.childNodes;
        const item = childNodes.forEach((arg0) => self.removeNodeFromMap(arg0));
      }
    }
  };
  items[5] = {
    key: "has",
    value: function has(arg0) {
      const idNodeMap = this.idNodeMap;
      return idNodeMap.has(arg0);
    }
  };
  items[6] = {
    key: "hasNode",
    value: function hasNode(arg0) {
      const nodeMetaMap = this.nodeMetaMap;
      return nodeMetaMap.has(arg0);
    }
  };
  items[7] = {
    key: "add",
    value: function add(arg0, id) {
      const idNodeMap = this.idNodeMap;
      const result = idNodeMap.set(id.id, arg0);
      const nodeMetaMap = this.nodeMetaMap;
      const result1 = nodeMetaMap.set(arg0, id);
    }
  };
  items[8] = {
    key: "replace",
    value: function replace(arg0, arg1) {
      const self = this;
      const node = this.getNode(arg0);
      if (node) {
        const nodeMetaMap = self.nodeMetaMap;
        const value = nodeMetaMap.get(node);
        if (value) {
          const nodeMetaMap2 = self.nodeMetaMap;
          const result = nodeMetaMap2.set(arg1, value);
        }
      }
      const idNodeMap = self.idNodeMap;
      const result1 = idNodeMap.set(arg0, arg1);
    }
  };
  items[9] = {
    key: "reset",
    value: function reset() {
      this.idNodeMap = new Map();
      const weakMap = new WeakMap();
      this.nodeMetaMap = weakMap;
    }
  };
  return _defineProperties(Mirror, items);
})();
const __rrweb_original__ = "__rrweb_original__";
let closure_21 = {};
let c24 = 1;
let regExp = new RegExp("[^a-z0-9-_:]");
const re26 = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
const re27 = /^(?:[a-z+]+:)?\/\//i;
const re28 = /^www\..*/i;
const re29 = /^(data:)([^,]*),(.*)/i;
const re30 = /^[^ \t\n\r\u000c]+/;
const re31 = /^[, \t\n\r\u000c]+/;
let weakMap = new WeakMap();
let c33 = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
let obj = {
  map: {},
  getId() {
    console.error(c33);
    return -1;
  },
  getNode() {
    console.error(c33);
    return null;
  },
  removeNodeFromMap() {
    console.error(c33);
  },
  has() {
    console.error(c33);
    return false;
  },
  reset() {
    console.error(c33);
  }
};
let _Reflect = "undefined" !== typeof window;
if (_Reflect) {
  let _window = window;
  _Reflect = window.Proxy;
}
if (_Reflect) {
  let _window2 = window;
  _Reflect = window.Reflect;
}
if (_Reflect) {
  let _Proxy = Proxy;
  obj = {
    get(arg0, arg1, arg2) {
        if ("map" === arg1) {
          const _console = console;
          console.error(c33);
        }
        return Reflect.get(arg0, arg1, arg2);
      }
  };
  let proxy = new Proxy(obj, obj);
}
let nowTimestamp = Date.now;
let obj3 = /[1-9][0-9]{12}/;
let tmp3 = (() => {
  class Mirror {
    constructor() {
      tmp = outer1_8(this, Mirror);
      map = new Map();
      tmp3 = outer1_17(this, "idNodeMap", map);
      weakMap = new WeakMap();
      tmp5 = outer1_17(this, "nodeMetaMap", weakMap);
      return;
    }
  }
  let obj = {
    key: "getId",
    value: function getId(arg0) {
      const self = this;
      if (arg0) {
        const meta = self.getMeta(arg0);
        let id;
        if (null != meta) {
          id = meta.id;
        }
        let num2 = -1;
        if (null != id) {
          num2 = id;
        }
        return num2;
      } else {
        return -1;
      }
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "getNode",
    value: function getNode(arg0) {
      const idNodeMap = this.idNodeMap;
      return idNodeMap.get(arg0) || null;
    }
  };
  items[1] = obj;
  obj = {
    key: "getIds",
    value: function getIds() {
      const idNodeMap = this.idNodeMap;
      return Array.from(idNodeMap.keys());
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMeta",
    value: function getMeta(arg0) {
      const nodeMetaMap = this.nodeMetaMap;
      return nodeMetaMap.get(arg0) || null;
    }
  };
  items[4] = {
    key: "removeNodeFromMap",
    value: function removeNodeFromMap(childNodes) {
      const self = this;
      const idNodeMap = this.idNodeMap;
      idNodeMap.delete(this.getId(childNodes));
      if (childNodes.childNodes) {
        childNodes = childNodes.childNodes;
        const item = childNodes.forEach((arg0) => self.removeNodeFromMap(arg0));
      }
    }
  };
  items[5] = {
    key: "has",
    value: function has(arg0) {
      const idNodeMap = this.idNodeMap;
      return idNodeMap.has(arg0);
    }
  };
  items[6] = {
    key: "hasNode",
    value: function hasNode(arg0) {
      const nodeMetaMap = this.nodeMetaMap;
      return nodeMetaMap.has(arg0);
    }
  };
  items[7] = {
    key: "add",
    value: function add(arg0, id) {
      const idNodeMap = this.idNodeMap;
      const result = idNodeMap.set(id.id, arg0);
      const nodeMetaMap = this.nodeMetaMap;
      const result1 = nodeMetaMap.set(arg0, id);
    }
  };
  items[8] = {
    key: "replace",
    value: function replace(arg0, arg1) {
      const self = this;
      const node = this.getNode(arg0);
      if (node) {
        const nodeMetaMap = self.nodeMetaMap;
        const value = nodeMetaMap.get(node);
        if (value) {
          const nodeMetaMap2 = self.nodeMetaMap;
          const result = nodeMetaMap2.set(arg1, value);
        }
      }
      const idNodeMap = self.idNodeMap;
      const result1 = idNodeMap.set(arg0, arg1);
    }
  };
  items[9] = {
    key: "reset",
    value: function reset() {
      this.idNodeMap = new Map();
      const weakMap = new WeakMap();
      this.nodeMetaMap = weakMap;
    }
  };
  return _defineProperties(Mirror, items);
})();
if (!obj3.test(str.toString())) {
  nowTimestamp = function nowTimestamp() {
    return new Date().getTime();
  };
}
let closure_35 = (() => {
  class StyleSheetMirror {
    constructor() {
      tmp = outer1_8(this, StyleSheetMirror);
      this.id = 1;
      weakMap = new WeakMap();
      this.styleIDMap = weakMap;
      map = new Map();
      this.idStyleMap = map;
      return;
    }
  }
  let obj = {
    key: "getId",
    value: function getId(arg0) {
      const styleIDMap = this.styleIDMap;
      const value = styleIDMap.get(arg0);
      let num = -1;
      if (null != value) {
        num = value;
      }
      return num;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "has",
    value: function has(arg0) {
      const styleIDMap = this.styleIDMap;
      return styleIDMap.has(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "add",
    value: function add(arg0, arg1) {
      let id = arg1;
      const self = this;
      if (this.has(arg0)) {
        id = self.getId(arg0);
      } else {
        if (undefined === id) {
          self.id = +self.id + 1;
          id = tmp2;
        }
        const styleIDMap = self.styleIDMap;
        const result = styleIDMap.set(arg0, id);
        const idStyleMap = self.idStyleMap;
        const result1 = idStyleMap.set(id, arg0);
      }
      return id;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getStyle",
    value: function getStyle(arg0) {
      const idStyleMap = this.idStyleMap;
      return idStyleMap.get(arg0) || null;
    }
  };
  items[4] = {
    key: "reset",
    value: function reset() {
      const weakMap = new WeakMap();
      this.styleIDMap = weakMap;
      this.idStyleMap = new Map();
      this.id = 1;
    }
  };
  items[5] = {
    key: "generateId",
    value: function generateId() {
      this.id = +this.id + 1;
      return +this.id;
    }
  };
  return _defineProperties(StyleSheetMirror, items);
})();
let closure_36 = {};
let closure_37 = { DomContentLoaded: 0, [0]: "DomContentLoaded", Load: 1, [1]: "Load", FullSnapshot: 2, [2]: "FullSnapshot", IncrementalSnapshot: 3, [3]: "IncrementalSnapshot", Meta: 4, [4]: "Meta", Custom: 5, [5]: "Custom", Plugin: 6, [6]: "Plugin" };
obj = undefined;
if (!undefined) {
  obj = {};
}
obj.Mutation = 0;
obj[0] = "Mutation";
obj.MouseMove = 1;
obj[1] = "MouseMove";
obj.MouseInteraction = 2;
obj[2] = "MouseInteraction";
obj.Scroll = 3;
obj[3] = "Scroll";
obj.ViewportResize = 4;
obj[4] = "ViewportResize";
obj.Input = 5;
obj[5] = "Input";
obj.TouchMove = 6;
obj[6] = "TouchMove";
obj.MediaInteraction = 7;
obj[7] = "MediaInteraction";
obj.StyleSheetRule = 8;
obj[8] = "StyleSheetRule";
obj.CanvasMutation = 9;
obj[9] = "CanvasMutation";
obj.Font = 10;
obj[10] = "Font";
obj.Log = 11;
obj[11] = "Log";
obj.Drag = 12;
obj[12] = "Drag";
obj.StyleDeclaration = 13;
obj[13] = "StyleDeclaration";
obj.Selection = 14;
obj[14] = "Selection";
obj.AdoptedStyleSheet = 15;
obj[15] = "AdoptedStyleSheet";
obj.CustomElement = 16;
obj[16] = "CustomElement";
let closure_39 = { MouseUp: 0, [0]: "MouseUp", MouseDown: 1, [1]: "MouseDown", Click: 2, [2]: "Click", ContextMenu: 3, [3]: "ContextMenu", DblClick: 4, [4]: "DblClick", Focus: 5, [5]: "Focus", Blur: 6, [6]: "Blur", TouchStart: 7, [7]: "TouchStart", TouchMove_Departed: 8, [8]: "TouchMove_Departed", TouchEnd: 9, [9]: "TouchEnd", TouchCancel: 10, [10]: "TouchCancel" };
let closure_40 = { Mouse: 0, [0]: "Mouse", Pen: 1, [1]: "Pen", Touch: 2, [2]: "Touch" };
let closure_41 = { Play: 0, [0]: "Play", Pause: 1, [1]: "Pause", Seeked: 2, [2]: "Seeked", VolumeChange: 3, [3]: "VolumeChange", RateChange: 4, [4]: "RateChange" };
let closure_43 = (() => {
  class DoubleLinkedList {
    constructor() {
      tmp = outer1_8(this, DoubleLinkedList);
      this.length = 0;
      this.head = null;
      this.tail = null;
      return;
    }
  }
  let obj = {
    key: "get",
    value: function get(arg0) {
      if (arg0 >= this.length) {
        const _Error = Error;
        const error = new Error("Position outside of list range");
        throw error;
      } else {
        let iter = tmp.head;
        let num = 0;
        let tmp3 = iter;
        if (0 < arg0) {
          do {
            let next;
            if (null != iter) {
              next = iter.next;
            }
            if (!next) {
              next = null;
            }
            num = num + 1;
            iter = next;
            tmp3 = next;
          } while (num < arg0);
        }
        return tmp3;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "addNode",
    value: function addNode(value) {
      const self = this;
      const obj = { value, previous: null, next: null };
      value.__ln = obj;
      if (value.previousSibling) {
        if (outer1_140(value.previousSibling)) {
          const next = value.previousSibling.__ln.next;
          obj.next = next;
          obj.previous = value.previousSibling.__ln;
          value.previousSibling.__ln.next = obj;
          if (next) {
            next.previous = obj;
          }
        }
        if (null === obj.next) {
          self.tail = obj;
        }
        self.length = self.length + 1;
      }
      if (value.nextSibling) {
        if (outer1_140(value.nextSibling)) {
          if (value.nextSibling.__ln.previous) {
            const previous = value.nextSibling.__ln.previous;
            obj.previous = previous;
            obj.next = value.nextSibling.__ln;
            value.nextSibling.__ln.previous = obj;
            if (previous) {
              previous.next = obj;
            }
          }
        }
      }
      if (self.head) {
        self.head.previous = obj;
      }
      obj.next = self.head;
      self.head = obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "removeNode",
    value: function removeNode(__ln) {
      const self = this;
      if (this.head) {
        if (iter.previous) {
          iter.previous.next = iter.next;
          if (iter.next) {
            iter.next.previous = iter.previous;
          } else {
            self.tail = iter.previous;
          }
        } else {
          self.head = iter.next;
          if (self.head) {
            self.head.previous = null;
          } else {
            self.tail = null;
          }
        }
        if (__ln.__ln) {
          delete tmp.__ln;
        }
        self.length = self.length - 1;
      }
    }
  };
  items[2] = obj;
  return _defineProperties(DoubleLinkedList, items);
})();
function moveKey(arg0, arg1) {
  return "" + arg0 + "@" + arg1;
}
let closure_45 = (() => {
  class MutationBuffer {
    constructor() {
      self = this;
      tmp = outer1_8(this, self);
      this.frozen = false;
      this.locked = false;
      this.texts = [];
      this.attributes = [];
      weakMap = new WeakMap();
      this.attributeMap = weakMap;
      this.removes = [];
      this.mapRemoves = [];
      this.movedMap = {};
      set = new Set();
      this.addedSet = set;
      set1 = new Set();
      this.movedSet = set1;
      set2 = new Set();
      this.droppedSet = set2;
      this.processMutations = (arr) => {
        const item = arr.forEach(self.processMutation);
        self.emit();
      };
      this.emit = () => {
        let head;
        let length;
        if (!items.frozen) {
          if (!items.locked) {
            items = [];
            const _Set = Set;
            const set = new Set();
            const prototype2 = outer2_43.prototype;
            const arr2 = new outer2_43();
            function getNextId(value) {
              let id;
              let tmp = value;
              do {
                let nextSibling = tmp;
                if (tmp) {
                  nextSibling = tmp.nextSibling;
                }
                id = nextSibling;
                if (nextSibling) {
                  let tmp3 = items;
                  let mirror = items.mirror;
                  id = mirror.getId(nextSibling);
                }
                tmp = nextSibling;
              } while (-2 === id);
              return id;
            }
            function pushAdd(value) {
              let items = value;
              if (value.parentNode) {
                if (outer3_136(value)) {
                  const mirror = items.mirror;
                  const getId = mirror.getId;
                  if (outer3_91(value.parentNode)) {
                    let id = getId(outer3_134(value));
                  } else {
                    id = getId(value.parentNode);
                  }
                  const tmp7 = getNextId(value);
                  if (-1 !== id) {
                    if (-1 !== tmp7) {
                      let obj = {};
                      ({ doc: obj2.doc, mirror: obj2.mirror, blockClass: obj2.blockClass, blockSelector: obj2.blockSelector, maskAllText: obj2.maskAllText, unblockSelector: obj2.unblockSelector, maskTextClass: obj2.maskTextClass, unmaskTextClass: obj2.unmaskTextClass, maskTextSelector: obj2.maskTextSelector, unmaskTextSelector: obj2.unmaskTextSelector } = items);
                      obj.skipChild = true;
                      obj.newlyAddedElement = true;
                      ({ inlineStylesheet: obj2.inlineStylesheet, maskInputOptions: obj2.maskInputOptions, maskAttributeFn: obj2.maskAttributeFn, maskTextFn: obj2.maskTextFn, maskInputFn: obj2.maskInputFn, slimDOMOptions: obj2.slimDOMOptions, dataURLOptions: obj2.dataURLOptions, recordCanvas: obj2.recordCanvas, inlineImages: obj2.inlineImages } = items);
                      obj.onSerialize = function onSerialize(shadowRoot) {
                        let tmp = outer4_131(shadowRoot, items.mirror);
                        if (tmp) {
                          tmp = !outer4_127(shadowRoot, items.blockClass, items.blockSelector, items.unblockSelector, false);
                        }
                        if (tmp) {
                          const iframeManager = items.iframeManager;
                          iframeManager.addIframe(shadowRoot);
                        }
                        if (outer4_132(shadowRoot, items.mirror)) {
                          const stylesheetManager = items.stylesheetManager;
                          stylesheetManager.trackLinkElement(shadowRoot);
                        }
                        if (outer4_133(value)) {
                          const shadowDomManager = items.shadowDomManager;
                          shadowDomManager.addShadowRoot(value.shadowRoot, items.doc);
                        }
                      };
                      obj.onIframeLoad = function onIframeLoad(contentWindow) {
                        if (!outer4_127(contentWindow, items.blockClass, items.blockSelector, items.unblockSelector, false)) {
                          const iframeManager = items.iframeManager;
                          iframeManager.attachIframe(contentWindow, arg1);
                          if (contentWindow.contentWindow) {
                            const canvasManager = items.canvasManager;
                            canvasManager.addWindow(contentWindow.contentWindow);
                          }
                          const shadowDomManager = items.shadowDomManager;
                          shadowDomManager.observeAttachShadow(contentWindow);
                        }
                      };
                      obj.onStylesheetLoad = function onStylesheetLoad(shadowRoot, attributes) {
                        const stylesheetManager = items.stylesheetManager;
                        stylesheetManager.attachLinkElement(shadowRoot, attributes);
                      };
                      obj.onBlockedImageLoad = function onBlockedImageLoad(arg0, id, width) {
                        let obj = { adds: [], removes: [], texts: [] };
                        obj = { id: id.id };
                        obj = { style: { width: "" + width.width + "px", height: "" + width.height + "px" } };
                        obj.attributes = obj;
                        const items = [obj];
                        obj.attributes = items;
                        items.mutationCb(obj);
                      };
                      obj.ignoreCSSAttributes = items.ignoreCSSAttributes;
                      const tmp15 = outer3_118(value, obj);
                      if (tmp15) {
                        obj = { parentId: id, nextId: tmp7, node: tmp15 };
                        items.push(obj);
                        set.add(tmp15.id);
                      }
                    }
                  }
                  return arr2.addNode(value);
                }
              }
            }
            if (items.mapRemoves.length) {
              do {
                let tmp12 = items;
                let mirror = items.mirror;
                let mapRemoves = items.mapRemoves;
                let removeNodeFromMapResult = mirror.removeNodeFromMap(mapRemoves.shift());
                length = items.mapRemoves.length;
              } while (length);
            }
            const movedSet = items.movedSet;
            for (const item10040 of movedSet) {
              let tmp16 = item10040;
              let tmp17 = outer2_142;
              let tmp18 = items;
              let tmp19 = outer2_142(items.removes, item10040, items.mirror);
              let tmp20 = tmp19;
              if (tmp19) {
                let tmp21 = items;
                let movedSet2 = items.movedSet;
                let tmp22 = item10040;
                tmp20 = !movedSet2.has(tmp16.parentNode);
              }
              if (!tmp20) {
                let tmp23 = pushAdd;
                let tmp24 = item10040;
                let pushAddResult = pushAdd(tmp16);
              }
              continue;
            }
            const addedSet = items.addedSet;
            for (const item10063 of addedSet) {
              let tmp91 = item10063;
              let tmp92 = outer2_143;
              let tmp93 = items;
              if (!outer2_143(items.droppedSet, item10063)) {
                let tmp28 = outer2_142;
                let tmp29 = items;
                let tmp30 = item10063;
                if (!outer2_142(items.removes, tmp91, items.mirror)) {
                  let tmp31 = pushAdd;
                  let tmp32 = item10063;
                  let pushAddResult1 = pushAdd(tmp91);
                }
                continue;
              }
              let tmp34 = outer2_143;
              let tmp35 = items;
              let tmp36 = item10063;
              if (outer2_143(items.movedSet, tmp91)) {
                let tmp40 = pushAdd;
                let tmp41 = item10063;
                let pushAddResult2 = pushAdd(tmp91);
              } else {
                let tmp37 = items;
                let droppedSet = items.droppedSet;
                let tmp38 = item10063;
                let addResult = droppedSet.add(tmp91);
              }
            }
            let previous = null;
            if (arr2.length) {
              while (true) {
                let tmp47 = null;
                if (previous) {
                  let tmp48 = items;
                  let mirror2 = items.mirror;
                  let id = mirror2.getId(previous.value.parentNode);
                  let nextId = getNextId(previous.value);
                  let tmp51 = -1 !== id && -1 !== nextId;
                  tmp47 = null;
                  let tmp52 = nextId;
                  if (tmp51) {
                    tmp47 = previous;
                    let tmp53 = nextId;
                  }
                }
                let tmp54 = tmp44;
                let tmp55 = tmp45;
                let tmp56 = tmp46;
                let iter = tmp47;
                if (!tmp47) {
                  let iter2 = arr2.tail;
                  let tmp57 = tmp45;
                  let tmp58 = tmp46;
                  iter = tmp47;
                  tmp54 = tmp44;
                  tmp55 = tmp45;
                  tmp56 = tmp46;
                  let tmp59 = iter2;
                  if (iter2) {
                    while (true) {
                      previous = iter2.previous;
                      let tmp61 = tmp58;
                      let tmp60 = iter2;
                      if (iter2) {
                        let tmp62 = items;
                        let mirror3 = items.mirror;
                        let id1 = mirror3.getId(iter2.value.parentNode);
                        tmp57 = id1;
                        tmp61 = tmp58;
                        if (-1 !== getNextId(iter2.value)) {
                          iter = iter2;
                          let tmp94 = previous;
                          tmp54 = iter2;
                          tmp55 = id1;
                          tmp56 = tmp58;
                          if (-1 !== id1) {
                            break;
                          } else {
                            let value = iter2.value;
                            tmp57 = id1;
                            tmp61 = value;
                            if (value.parentNode) {
                              tmp57 = id1;
                              tmp61 = value;
                              if (value.parentNode.nodeType === globalThis.Node.DOCUMENT_FRAGMENT_NODE) {
                                let tmp64 = items;
                                let mirror4 = items.mirror;
                                tmp57 = id1;
                                tmp61 = value;
                                iter = iter2;
                                let tmp65 = previous;
                                tmp54 = iter2;
                                tmp55 = id1;
                                tmp56 = value;
                                if (-1 !== mirror4.getId(value.parentNode.host)) {
                                  break;
                                }
                              }
                              break;
                            }
                          }
                        }
                        break;
                      }
                      tmp58 = tmp61;
                      iter2 = previous;
                      iter = tmp47;
                      let tmp66 = previous;
                      tmp54 = tmp60;
                      tmp55 = tmp57;
                      tmp56 = tmp61;
                      if (!previous) {
                        break;
                      }
                    }
                  }
                }
                if (!iter) {
                  break;
                } else {
                  previous = iter.previous;
                  let removeNodeResult = arr2.removeNode(iter.value);
                  let tmp69 = pushAdd;
                  let pushAddResult3 = pushAdd(iter.value);
                  tmp44 = tmp54;
                  tmp45 = tmp55;
                  tmp46 = tmp56;
                }
              }
              if (arr2.head) {
                do {
                  let removeNodeResult1 = arr2.removeNode(arr2.head.value);
                  head = arr2.head;
                } while (head);
              }
            }
            let obj = {};
            const texts = items.texts;
            const mapped = texts.map((node) => {
              const mirror = items.mirror;
              return { id: mirror.getId(node.node), value: node.value };
            });
            const found = mapped.filter((id) => !set.has(id.id));
            obj.texts = found.filter((id) => {
              const mirror = items.mirror;
              return mirror.has(id.id);
            });
            let attributes = items.attributes;
            const mapped1 = attributes.map((attributes) => {
              attributes = attributes.attributes;
              if ("string" === typeof attributes.style) {
                const _JSON = JSON;
                const json = JSON.stringify(attributes.styleDiff);
                const _JSON2 = JSON;
                let tmp = json.length < attributes.style.length;
                if (tmp) {
                  tmp = json + JSON.stringify(attributes._unchangedStyles).split("var(").length === attributes.style.split("var(").length;
                  const str = json + JSON.stringify(attributes._unchangedStyles);
                  const str3 = attributes.style;
                }
                if (tmp) {
                  attributes.style = attributes.styleDiff;
                }
              }
              const mirror = items.mirror;
              return { id: mirror.getId(attributes.node), attributes };
            });
            const found1 = mapped1.filter((id) => !set.has(id.id));
            obj.attributes = found1.filter((id) => {
              const mirror = items.mirror;
              return mirror.has(id.id);
            });
            obj.removes = items.removes;
            obj.adds = items;
            if (tmp72) {
              items.texts = [];
              items.attributes = [];
              const _WeakMap = WeakMap;
              const weakMap = new WeakMap();
              items.attributeMap = weakMap;
              items.removes = [];
              const _Set2 = Set;
              const set1 = new Set();
              items.addedSet = set1;
              const _Set3 = Set;
              const set2 = new Set();
              items.movedSet = set2;
              const _Set4 = Set;
              const set3 = new Set();
              items.droppedSet = set3;
              items.movedMap = {};
              items.mutationCb(obj);
            }
            tmp72 = obj.texts.length || obj.attributes.length || obj.removes.length || obj.adds.length;
          }
        }
      };
      this.processMutation = (target) => {
        let attributeName;
        let target2;
        const _self = target;
        if (!outer2_128(target.target, _self.mirror)) {
          const type = target.type;
          if ("characterData" === type) {
            if (!tmp58) {
              const texts = _self.texts;
              let obj = {};
              let tmp61 = str15;
              if (outer2_115(target.target, _self.maskTextClass, _self.maskTextSelector, _self.unmaskTextClass, _self.unmaskTextSelector, _self.maskAllText)) {
                tmp61 = str15;
                if (str15) {
                  if (_self.maskTextFn) {
                    let maskTextFnResult = _self.maskTextFn(str15, outer2_126(target.target));
                  } else {
                    maskTextFnResult = str15.replace(/[\S]/g, "*");
                  }
                }
              }
              obj.value = tmp61;
              obj.node = target.target;
              texts.push(obj);
            }
            tmp58 = outer2_127(target.target, _self.blockClass, _self.blockSelector, _self.unblockSelector, false) || target.target.textContent === target.oldValue;
          } else if ("attributes" === type) {
            ({ target, attributeName, target: target2 } = target);
            let attr = target2.getAttribute(attributeName);
            if ("value" === attributeName) {
              const tmp72 = outer2_99(target);
              const tagName = target.tagName;
              obj = { maskInputOptions: _self.maskInputOptions, tagName, type: tmp72 };
              const obj1 = { isMasked: outer2_115(target.target, _self.maskTextClass, _self.maskTextSelector, _self.unmaskTextClass, _self.unmaskTextSelector, outer2_95(obj)), element: target, value: outer2_100(target, tagName, tmp72), maskInputFn: _self.maskInputFn };
              attr = outer2_96(obj1);
              const tmp74 = outer2_100(target, tagName, tmp72);
            }
            if (!outer2_127(target.target, _self.blockClass, _self.blockSelector, _self.unblockSelector, false)) {
              if (attr !== target.oldValue) {
                const attributeMap2 = _self.attributeMap;
                let value = attributeMap2.get(target.target);
                let str5 = attributeName;
                if ("IFRAME" === target.tagName) {
                  str5 = attributeName;
                  if ("src" === attributeName) {
                    str5 = attributeName;
                    if (!_self.keepIframeSrcFn(attr)) {
                      str5 = "rr_src";
                    }
                  }
                }
                if (!value) {
                  obj = { node: target.target, attributes: {}, styleDiff: {}, _unchangedStyles: {} };
                  value = obj;
                  const attributes = _self.attributes;
                  attributes.push(obj);
                  const attributeMap = _self.attributeMap;
                  const result = attributeMap.set(target.target, obj);
                }
                let tmp14 = "type" === str5;
                if (tmp14) {
                  tmp14 = "INPUT" === target.tagName;
                }
                if (tmp14) {
                  tmp14 = "password" === target.oldValue || "".toLowerCase();
                  const str8 = target.oldValue || "";
                }
                if (tmp14) {
                  const attr1 = target.setAttribute("data-rr-is-password", "true");
                }
                if (!outer2_112(target.tagName, str5)) {
                  const doc = _self.doc;
                  value.attributes[str5] = outer2_111(doc, outer2_97(target.tagName), outer2_97(str5), attr, target, _self.maskAttributeFn);
                  if ("style" === str5) {
                    if (!_self.unattachedDoc) {
                      const _document = document;
                      _self.unattachedDoc = implementation.createHTMLDocument();
                    }
                    while (true) {
                      let tmp31 = _self;
                      let unattachedDoc = _self.unattachedDoc;
                      let str13 = "span";
                      let element = <span />;
                      if (!target.oldValue) {
                        break;
                      } else {
                        let tmp32 = element;
                        let attr2 = element.setAttribute("style", target.oldValue);
                        break;
                      }
                      let tmp34 = globalThis;
                      let _Array = Array;
                      let tmp35 = target;
                      let arr1 = Array.from(target.style);
                      let tmp37 = arr1;
                      let iter = arr1[Symbol.iterator]();
                      let str14 = "";
                      let nextResult = iter.next();
                      let tmp39 = iter;
                      while (iter !== undefined) {
                        let tmp82 = nextResult;
                        let tmp83 = target;
                        let style2 = target.style;
                        let propertyValue = style2.getPropertyValue(nextResult);
                        let tmp85 = propertyValue;
                        let style3 = target.style;
                        let propertyPriority = style3.getPropertyPriority(nextResult);
                        let tmp87 = element;
                        let style4 = element.style;
                        if (propertyValue === style4.getPropertyValue(nextResult)) {
                          let tmp40 = propertyPriority;
                          let tmp41 = element;
                          let style = element.style;
                          let tmp42 = nextResult;
                          if (propertyPriority === style.getPropertyPriority(tmp82)) {
                            let tmp43 = value;
                            let tmp44 = nextResult;
                            let tmp45 = propertyValue;
                            let items = [tmp85, ];
                            let tmp46 = propertyPriority;
                            items[1] = propertyPriority;
                            value._unchangedStyles[tmp82] = items;
                            continue;
                          }
                        }
                        let tmp47 = value;
                        let tmp48 = nextResult;
                        let tmp49 = propertyPriority;
                        if ("" === propertyPriority) {
                          let items1 = propertyValue;
                        } else {
                          let tmp50 = propertyValue;
                          items1 = [tmp85, ];
                          let tmp51 = propertyPriority;
                          items1[1] = propertyPriority;
                        }
                        value.styleDiff[tmp82] = items1;
                      }
                      let _Array2 = Array;
                      let arr2 = Array.from(element.style);
                      let tmp53 = arr2;
                      for (const item10156 of arr2) {
                        let tmp89 = target;
                        let style5 = target.style;
                        let tmp88 = item10156;
                        if ("" === style5.getPropertyValue(item10156)) {
                          let tmp54 = value;
                          let tmp55 = item10156;
                          value.styleDiff[tmp88] = false;
                        }
                        continue;
                      }
                    }
                  }
                  const tmp25 = outer2_97(target.tagName);
                }
              }
            }
          } else if ("childList" === type) {
            if (!outer2_127(target.target, _self.blockClass, _self.blockSelector, _self.unblockSelector, true)) {
              const addedNodes = target.addedNodes;
              const item = addedNodes.forEach((arg0) => target.genAdds(arg0, target.target));
              const removedNodes = target.removedNodes;
              const item1 = removedNodes.forEach((arg0) => {
                const mirror = target.mirror;
                const id = mirror.getId(arg0);
                const mirror2 = target.mirror;
                const getId = mirror2.getId;
                target = target.target;
                if (outer3_91(target.target)) {
                  let id1 = getId(target.host);
                } else {
                  id1 = getId(target);
                }
                let tmp3 = outer3_127(target.target, target.blockClass, target.blockSelector, target.unblockSelector, false);
                if (!tmp3) {
                  tmp3 = outer3_128(arg0, target.mirror);
                }
                if (!tmp3) {
                  const mirror3 = target.mirror;
                  tmp3 = -1 === mirror3.getId(arg0);
                }
                if (!tmp3) {
                  const addedSet = target.addedSet;
                  if (addedSet.has(arg0)) {
                    outer3_141(target.addedSet, arg0);
                    const droppedSet = target.droppedSet;
                    droppedSet.add(arg0);
                  } else {
                    const addedSet2 = target.addedSet;
                    let hasItem = addedSet2.has(target.target);
                    if (hasItem) {
                      hasItem = -1 === id;
                    }
                    if (!hasItem) {
                      hasItem = outer3_129(target.target, target.mirror);
                    }
                    if (!hasItem) {
                      const movedSet = target.movedSet;
                      if (!movedSet.has(arg0)) {
                        const removes = target.removes;
                        const obj = { parentId: id1, id };
                        let tmp20 = !outer3_91(target.target);
                        if (!tmp20) {
                          tmp20 = !outer3_92(target.target);
                        }
                        obj.isShadow = !tmp20;
                        removes.push(obj);
                        const tmp23 = !tmp20;
                      }
                    }
                    outer3_141(target.movedSet, arg0);
                  }
                  const mapRemoves = target.mapRemoves;
                  mapRemoves.push(arg0);
                }
              });
            }
          }
        }
      };
      this.genAdds = (childNodes) => {
        let mirror4;
        let movedMap;
        const _self = childNodes;
        let processedNodeManager = _self.processedNodeManager;
        if (!processedNodeManager.inOtherBuffer(childNodes, _self)) {
          const addedSet = _self.addedSet;
          if (!addedSet.has(childNodes)) {
            const movedSet = _self.movedSet;
            if (!movedSet.has(childNodes)) {
              const mirror = _self.mirror;
              if (mirror.hasNode(childNodes)) {
                if (!outer2_128(childNodes, _self.mirror)) {
                  const movedSet2 = _self.movedSet;
                  movedSet2.add(childNodes);
                  let hasNodeResult = arg1;
                  if (arg1) {
                    const mirror2 = _self.mirror;
                    hasNodeResult = mirror2.hasNode(arg1);
                  }
                  let id = null;
                  if (hasNodeResult) {
                    const mirror3 = _self.mirror;
                    id = mirror3.getId(arg1);
                  }
                  let tmp15 = id;
                  if (id) {
                    tmp15 = -1 !== id;
                  }
                  if (tmp15) {
                    ({ mirror: mirror4, movedMap } = _self);
                    movedMap[outer2_44(mirror4.getId(childNodes), id)] = true;
                  }
                }
              } else {
                const addedSet2 = _self.addedSet;
                addedSet2.add(childNodes);
                const droppedSet = _self.droppedSet;
                droppedSet.delete(childNodes);
              }
              if (!outer2_127(childNodes, _self.blockClass, _self.blockSelector, _self.unblockSelector, false)) {
                if (childNodes.childNodes) {
                  childNodes = childNodes.childNodes;
                  const item = childNodes.forEach((arg0) => childNodes.genAdds(arg0));
                }
                if (outer2_133(childNodes)) {
                  const childNodes1 = childNodes.shadowRoot.childNodes;
                  const item1 = childNodes1.forEach((arg0) => {
                    const processedNodeManager = childNodes.processedNodeManager;
                    processedNodeManager.add(arg0, childNodes);
                    childNodes.genAdds(arg0, childNodes);
                  });
                }
              }
            }
          }
        }
      };
      return;
    }
  }
  let obj = {
    key: "init",
    value: function init(arg0) {
      let closure_0 = arg0;
      const self = this;
      const items = ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager", "ignoreCSSAttributes"];
      const item = items.forEach((arg0) => {
        self[arg0] = table[arg0];
      });
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "freeze",
    value: function freeze() {
      this.frozen = true;
      const canvasManager = this.canvasManager;
      canvasManager.freeze();
    }
  };
  items[1] = obj;
  obj = {
    key: "unfreeze",
    value: function unfreeze() {
      this.frozen = false;
      const canvasManager = this.canvasManager;
      canvasManager.unfreeze();
      this.emit();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isFrozen",
    value: function isFrozen(_isValid) {
      return this.frozen;
    }
  };
  items[4] = {
    key: "lock",
    value: function lock() {
      this.locked = true;
      const canvasManager = this.canvasManager;
      canvasManager.lock();
    }
  };
  items[5] = {
    key: "unlock",
    value: function unlock() {
      this.locked = false;
      const canvasManager = this.canvasManager;
      canvasManager.unlock();
      this.emit();
    }
  };
  items[6] = {
    key: "reset",
    value: function reset() {
      const shadowDomManager = this.shadowDomManager;
      shadowDomManager.reset();
      const canvasManager = this.canvasManager;
      canvasManager.reset();
    }
  };
  return _defineProperties(MutationBuffer, items);
})();
function callbackWrapper(arg0) {
  let closure_0 = arg0;
  return closure_42 ? (function rrwebWrapped() {
    return callback(...arguments);
  }) : arg0;
}
let closure_47 = [];
let closure_48 = ["INPUT", "TEXTAREA", "SELECT"];
let weakMap1 = new WeakMap();
let closure_50 = (() => {
  class CrossOriginIframeMirror {
    constructor(arg0) {
      tmp = outer1_8(this, CrossOriginIframeMirror);
      this.generateIdFn = arg0;
      weakMap = new WeakMap();
      this.iframeIdToRemoteIdMap = weakMap;
      weakMap1 = new WeakMap();
      this.iframeRemoteIdToIdMap = weakMap1;
      return;
    }
  }
  let obj = {
    key: "getId",
    value: function getId(closure_0) {
      let idToRemoteIdMap = arg2;
      let remoteIdToIdMap = arg3;
      const self = this;
      if (!arg2) {
        idToRemoteIdMap = self.getIdToRemoteIdMap(closure_0);
      }
      if (!remoteIdToIdMap) {
        remoteIdToIdMap = self.getRemoteIdToIdMap(closure_0);
      }
      let value = idToRemoteIdMap.get(arg1);
      if (!value) {
        const idFn = self.generateIdFn();
        const result = idToRemoteIdMap.set(arg1, idFn);
        const result1 = remoteIdToIdMap.set(idFn, arg1);
        value = idFn;
      }
      return value;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getIds",
    value: function getIds(closure_0, arr) {
      const self = this;
      const idToRemoteIdMap = this.getIdToRemoteIdMap(closure_0);
      const remoteIdToIdMap = this.getRemoteIdToIdMap(closure_0);
      return arr.map((arg0) => self.getId(closure_0, arg0, closure_2, closure_3));
    }
  };
  items[1] = obj;
  obj = {
    key: "getRemoteId",
    value: function getRemoteId(closure_0, arg1, closure_2) {
      let remoteIdToIdMap = closure_2;
      const self = this;
      if (!closure_2) {
        remoteIdToIdMap = self.getRemoteIdToIdMap(closure_0);
      }
      if ("number" !== typeof arg1) {
        return arg1;
      } else {
        return remoteIdToIdMap.get(arg1) || -1;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getRemoteIds",
    value: function getRemoteIds(closure_0, arr) {
      const self = this;
      const remoteIdToIdMap = this.getRemoteIdToIdMap(closure_0);
      return arr.map((arg0) => self.getRemoteId(closure_0, arg0, closure_2));
    }
  };
  items[4] = {
    key: "reset",
    value: function reset(arg0) {
      const self = this;
      if (arg0) {
        const iframeIdToRemoteIdMap = self.iframeIdToRemoteIdMap;
        iframeIdToRemoteIdMap.delete(arg0);
        const iframeRemoteIdToIdMap = self.iframeRemoteIdToIdMap;
        iframeRemoteIdToIdMap.delete(arg0);
      } else {
        const _WeakMap = WeakMap;
        const weakMap = new WeakMap();
        self.iframeIdToRemoteIdMap = weakMap;
        const _WeakMap2 = WeakMap;
        const weakMap1 = new WeakMap();
        self.iframeRemoteIdToIdMap = weakMap1;
      }
    }
  };
  items[5] = {
    key: "getIdToRemoteIdMap",
    value: function getIdToRemoteIdMap(closure_0) {
      const iframeIdToRemoteIdMap = this.iframeIdToRemoteIdMap;
      let value = iframeIdToRemoteIdMap.get(closure_0);
      if (!value) {
        const _Map = Map;
        const map = new Map();
        const iframeIdToRemoteIdMap2 = this.iframeIdToRemoteIdMap;
        const result = iframeIdToRemoteIdMap2.set(closure_0, map);
        value = map;
      }
      return value;
    }
  };
  items[6] = {
    key: "getRemoteIdToIdMap",
    value: function getRemoteIdToIdMap(closure_0) {
      const iframeRemoteIdToIdMap = this.iframeRemoteIdToIdMap;
      let value = iframeRemoteIdToIdMap.get(closure_0);
      if (!value) {
        const _Map = Map;
        const map = new Map();
        const iframeRemoteIdToIdMap2 = this.iframeRemoteIdToIdMap;
        const result = iframeRemoteIdToIdMap2.set(closure_0, map);
        value = map;
      }
      return value;
    }
  };
  return _defineProperties(CrossOriginIframeMirror, items);
})();
let closure_51 = (() => {
  class IframeManagerNoop {
    constructor() {
      tmp = outer1_8(this, IframeManagerNoop);
      tmp2 = new outer1_50(outer1_106);
      this.crossOriginIframeMirror = tmp2;
      weakMap = new WeakMap();
      this.crossOriginIframeRootIdMap = weakMap;
      return;
    }
  }
  let obj = {
    key: "addIframe",
    value: function addIframe() {

    }
  };
  const items = [obj, , ];
  obj = {
    key: "addLoadListener",
    value: function addLoadListener() {

    }
  };
  items[1] = obj;
  obj = {
    key: "attachIframe",
    value: function attachIframe() {

    }
  };
  items[2] = obj;
  return _defineProperties(IframeManagerNoop, items);
})();
let closure_52 = (() => {
  class IframeManager {
    constructor(arg0) {
      self = this;
      tmp = outer1_8(this, IframeManager);
      weakMap = new WeakMap();
      this.iframes = weakMap;
      weakMap1 = new WeakMap();
      this.crossOriginIframeMap = weakMap1;
      tmp4 = new outer1_50(outer1_106);
      this.crossOriginIframeMirror = tmp4;
      weakMap2 = new WeakMap();
      this.crossOriginIframeRootIdMap = weakMap2;
      ({ mutationCb: this.mutationCb, wrappedEmit: this.wrappedEmit, stylesheetManager: this.stylesheetManager, recordCrossOriginIframes: this.recordCrossOriginIframes } = arg0);
      generateId = this.stylesheetManager.styleMirror.generateId;
      tmp6 = new outer1_50(generateId.bind(this.stylesheetManager.styleMirror));
      this.crossOriginIframeStyleMirror = tmp6;
      this.mirror = arg0.mirror;
      if (this.recordCrossOriginIframes) {
        _window = window;
        handleMessage = self.handleMessage;
        str = "message";
        listener = window.addEventListener("message", handleMessage.bind(self));
      }
      return;
    }
  }
  let obj = {
    key: "addIframe",
    value: function addIframe(contentWindow) {
      const iframes = this.iframes;
      const result = iframes.set(contentWindow, true);
      if (contentWindow.contentWindow) {
        const crossOriginIframeMap = this.crossOriginIframeMap;
        const result1 = crossOriginIframeMap.set(contentWindow.contentWindow, contentWindow);
      }
    }
  };
  let items = [obj, , , , , , , , , ];
  obj = {
    key: "addLoadListener",
    value: function addLoadListener(loadListener) {
      this.loadListener = loadListener;
    }
  };
  items[1] = obj;
  obj = {
    key: "attachIframe",
    value: function attachIframe(contentWindow, node) {
      let mirror;
      let mirror2;
      let mutationCb;
      let stylesheetManager;
      const self = this;
      let obj = {};
      obj = { parentId: mirror.getId(contentWindow), nextId: null, node };
      ({ mirror, mutationCb } = this);
      const items = [obj];
      obj.adds = items;
      obj.removes = [];
      obj.texts = [];
      obj.attributes = [];
      obj.isAttachIframe = true;
      mutationCb(obj);
      if (this.recordCrossOriginIframes) {
        contentWindow = contentWindow.contentWindow;
        if (null != contentWindow) {
          const handleMessage = self.handleMessage;
          const listener = contentWindow.addEventListener("message", handleMessage.bind(self));
        }
      }
      const loadListener = self.loadListener;
      if (null != loadListener) {
        loadListener.call(self, contentWindow);
      }
      const tmp4 = outer1_139(contentWindow);
      let adoptedStyleSheets = tmp4;
      if (tmp4) {
        adoptedStyleSheets = tmp4.adoptedStyleSheets;
      }
      if (adoptedStyleSheets) {
        adoptedStyleSheets = tmp4.adoptedStyleSheets.length > 0;
      }
      if (adoptedStyleSheets) {
        ({ stylesheetManager, mirror: mirror2 } = self);
        stylesheetManager.adoptStyleSheets(tmp4.adoptedStyleSheets, mirror2.getId(tmp4));
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleMessage",
    value: function handleMessage(data) {
      const self = this;
      if ("rrweb" === data.data.type) {
        if (data.origin === data.data.origin) {
          if (data.source) {
            const crossOriginIframeMap = self.crossOriginIframeMap;
            const value = crossOriginIframeMap.get(data.source);
            if (value) {
              const result = self.transformCrossOriginEvent(value, data.data.event);
              if (result) {
                self.wrappedEmit(result, data.data.isCheckout);
              }
            }
          }
        }
      }
    }
  };
  items[4] = {
    key: "transformCrossOriginEvent",
    value: function transformCrossOriginEvent(value, event) {
      let self = this;
      let closure_0 = value;
      self = this;
      const type = event.type;
      if (outer1_37.FullSnapshot === type) {
        const crossOriginIframeMirror = self.crossOriginIframeMirror;
        crossOriginIframeMirror.reset(value);
        const crossOriginIframeStyleMirror = self.crossOriginIframeStyleMirror;
        crossOriginIframeStyleMirror.reset(value);
        self.replaceIdOnNode(event.data.node, value);
        const id = event.data.node.id;
        let crossOriginIframeRootIdMap = self.crossOriginIframeRootIdMap;
        const result = crossOriginIframeRootIdMap.set(value, id);
        self.patchRootIdOnNode(event.data.node, id);
        let obj = { timestamp: event.timestamp, type: outer1_37.IncrementalSnapshot };
        obj = { source: outer1_38.Mutation };
        obj = {};
        const mirror = self.mirror;
        obj.parentId = mirror.getId(value);
        obj.nextId = null;
        obj.node = event.data.node;
        const items = [obj];
        obj.adds = items;
        obj.removes = [];
        obj.texts = [];
        obj.attributes = [];
        obj.isAttachIframe = true;
        obj.data = obj;
        return obj;
      } else {
        if (outer1_37.Meta !== type) {
          if (outer1_37.Load !== type) {
            if (outer1_37.DomContentLoaded !== type) {
              if (outer1_37.Plugin === type) {
                return event;
              } else if (outer1_37.Custom === type) {
                self.replaceIds(event.data.payload, value, ["id", "parentId", "previousId", "nextId"]);
                return event;
              } else {
                if (outer1_37.IncrementalSnapshot === type) {
                  const source = event.data.source;
                  if (outer1_38.Mutation === source) {
                    const adds = event.data.adds;
                    const item = adds.forEach((node) => {
                      self.replaceIds(node, closure_0, ["parentId", "nextId", "previousId"]);
                      self.replaceIdOnNode(node.node, closure_0);
                      const crossOriginIframeRootIdMap = self.crossOriginIframeRootIdMap;
                      const value = crossOriginIframeRootIdMap.get(closure_0);
                      if (value) {
                        self.patchRootIdOnNode(node.node, value);
                      }
                    });
                    const removes = event.data.removes;
                    const item1 = removes.forEach((data) => {
                      self.replaceIds(data, closure_0, ["parentId", "id"]);
                    });
                    const attributes = event.data.attributes;
                    const item2 = attributes.forEach((data) => {
                      self.replaceIds(data, closure_0, ["id"]);
                    });
                    const texts = event.data.texts;
                    const item3 = texts.forEach((data) => {
                      self.replaceIds(data, closure_0, ["id"]);
                    });
                    return event;
                  } else {
                    if (outer1_38.Drag !== source) {
                      if (outer1_38.TouchMove !== source) {
                        if (outer1_38.MouseMove !== source) {
                          if (outer1_38.ViewportResize === source) {
                            return false;
                          } else {
                            if (outer1_38.MediaInteraction !== source) {
                              if (outer1_38.MouseInteraction !== source) {
                                if (outer1_38.Scroll !== source) {
                                  if (outer1_38.CanvasMutation !== source) {
                                    if (outer1_38.Input !== source) {
                                      if (outer1_38.StyleSheetRule !== source) {
                                        if (outer1_38.StyleDeclaration !== source) {
                                          if (outer1_38.Font === source) {
                                            return event;
                                          } else if (outer1_38.Selection === source) {
                                            const ranges = event.data.ranges;
                                            const item4 = ranges.forEach((data) => {
                                              self.replaceIds(data, closure_0, ["start", "end"]);
                                            });
                                            return event;
                                          } else if (outer1_38.AdoptedStyleSheet === source) {
                                            self.replaceIds(event.data, value, ["id"]);
                                            self.replaceStyleIds(event.data, value, ["styleIds"]);
                                            const styles = event.data.styles;
                                            if (null != styles) {
                                              const item5 = styles.forEach((data) => {
                                                self.replaceStyleIds(data, closure_0, ["styleId"]);
                                              });
                                            }
                                            return event;
                                          }
                                        }
                                      }
                                      self.replaceIds(event.data, value, ["id"]);
                                      self.replaceStyleIds(event.data, value, ["styleId"]);
                                      return event;
                                    }
                                  }
                                }
                              }
                            }
                            self.replaceIds(event.data, value, ["id"]);
                            return event;
                          }
                        }
                      }
                    }
                    const positions = event.data.positions;
                    const item6 = positions.forEach((data) => {
                      self.replaceIds(data, closure_0, ["id"]);
                    });
                    return event;
                  }
                }
                return false;
              }
            }
          }
        }
        return false;
      }
    }
  };
  items[5] = {
    key: "replace",
    value: function replace(getIds) {
      const iter = arg3[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp12 = nextResult;
        let _Array2 = Array;
        let tmp13 = arg1;
        let isArray = Array.isArray(arg1[nextResult]);
        let tmp4 = isArray;
        if (!isArray) {
          let tmp2 = arg1;
          let tmp3 = nextResult;
          tmp4 = "number" === typeof arg1[tmp12];
        }
        if (tmp4) {
          let _Array = Array;
          let tmp5 = arg1;
          let tmp6 = nextResult;
          let tmp7 = arg1;
          let tmp8 = nextResult;
          let tmp9 = getIds;
          if (Array.isArray(arg1[tmp12])) {
            let tmp11 = arg2;
            arg1[tmp12] = getIds.getIds(arg2, arg1[tmp12]);
          } else {
            let tmp10 = arg2;
            arg1[tmp12] = getIds.getId(arg2, arg1[tmp12]);
          }
        }
        continue;
      }
      return arg1;
    }
  };
  items[6] = {
    key: "replaceIds",
    value: function replaceIds(data, closure_0, arg2) {
      return this.replace(this.crossOriginIframeMirror, data, closure_0, arg2);
    }
  };
  items[7] = {
    key: "replaceStyleIds",
    value: function replaceStyleIds(data, closure_0, arg2) {
      return this.replace(this.crossOriginIframeStyleMirror, data, closure_0, arg2);
    }
  };
  items[8] = {
    key: "replaceIdOnNode",
    value: function replaceIdOnNode(node, closure_0) {
      const self = this;
      this.replaceIds(node, closure_0, ["id", "rootId"]);
      if ("childNodes" in node) {
        const childNodes = node.childNodes;
        const item = childNodes.forEach((node) => {
          self.replaceIdOnNode(node, closure_0);
        });
      }
    }
  };
  items[9] = {
    key: "patchRootIdOnNode",
    value: function patchRootIdOnNode(node, closure_0) {
      const self = this;
      if (!tmp) {
        node.rootId = closure_0;
      }
      if ("childNodes" in node) {
        const childNodes = node.childNodes;
        const item = childNodes.forEach((node) => {
          self.patchRootIdOnNode(node, closure_0);
        });
      }
    }
  };
  return _defineProperties(IframeManager, items);
})();
let closure_53 = (() => {
  class ShadowDomManagerNoop {
    constructor() {
      tmp = outer1_8(this, ShadowDomManagerNoop);
      return;
    }
  }
  let obj = {
    key: "init",
    value: function init() {

    }
  };
  const items = [obj, , , ];
  obj = {
    key: "addShadowRoot",
    value: function addShadowRoot() {

    }
  };
  items[1] = obj;
  obj = {
    key: "observeAttachShadow",
    value: function observeAttachShadow() {

    }
  };
  items[2] = obj;
  items[3] = {
    key: "reset",
    value: function reset() {

    }
  };
  return _defineProperties(ShadowDomManagerNoop, items);
})();
let closure_54 = (() => {
  class ShadowDomManager {
    constructor(arg0) {
      tmp = outer1_8(this, ShadowDomManager);
      weakSet = new WeakSet();
      this.shadowDoms = weakSet;
      this.restoreHandlers = [];
      ({ mutationCb: this.mutationCb, scrollCb: this.scrollCb, bypassOptions: this.bypassOptions, mirror: this.mirror } = arg0);
      initResult = this.init();
      return;
    }
  }
  let obj = {
    key: "init",
    value: function init() {
      this.reset();
      this.patchAttachShadow(globalThis.Element, document);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "addShadowRoot",
    value: function addShadowRoot(doc, doc2) {
      let self = this;
      let closure_0 = doc;
      self = this;
      if (outer1_92(doc)) {
        const shadowDoms = self.shadowDoms;
        if (!shadowDoms.has(doc)) {
          const shadowDoms2 = self.shadowDoms;
          shadowDoms2.add(doc);
          const canvasManager = self.bypassOptions.canvasManager;
          canvasManager.addShadowRoot(doc);
          const _Object = Object;
          let obj = { doc: doc2 };
          ({ mutationCb: obj.mutationCb, mirror: obj.mirror } = self);
          obj.shadowDomManager = self;
          let closure_2 = outer1_146(Object.assign({}, self.bypassOptions, obj), doc);
          self.restoreHandlers.push(() => closure_2.disconnect());
          const _Object2 = Object;
          obj = { scrollCb: self.scrollCb, doc, mirror: self.mirror };
          self.restoreHandlers.push(outer1_148(Object.assign({}, self.bypassOptions, obj)));
          outer1_138(() => {
            let adoptedStyleSheets = doc.adoptedStyleSheets;
            if (adoptedStyleSheets) {
              adoptedStyleSheets = doc.adoptedStyleSheets.length > 0;
            }
            if (adoptedStyleSheets) {
              const stylesheetManager = self.bypassOptions.stylesheetManager;
              const mirror = self.mirror;
              stylesheetManager.adoptStyleSheets(doc.adoptedStyleSheets, mirror.getId(doc.host));
            }
            self.restoreHandlers.push(outer2_152({ mirror: self.mirror, stylesheetManager: self.bypassOptions.stylesheetManager }, doc));
          }, 0);
          const restoreHandlers = self.restoreHandlers;
          const restoreHandlers1 = self.restoreHandlers;
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "observeAttachShadow",
    value: function observeAttachShadow(contentWindow) {
      const self = this;
      const tmp = outer1_139(contentWindow);
      contentWindow = contentWindow.contentWindow;
      while (true) {
        let tmp2 = tmp;
        if (!tmp) {
          break;
        } else {
          tmp2 = contentWindow;
          break;
        }
        if (tmp2) {
          let patchAttachShadowResult = self.patchAttachShadow(contentWindow.Element, tmp);
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "patchAttachShadow",
    value: function patchAttachShadow(Element, document) {
      let closure_0 = document;
      let self = this;
      this.restoreHandlers.push(outer1_122(Element.prototype, "attachShadow", (arg0) => {
        let closure_0 = arg0;
        return function(arg0) {
          const self = this;
          let shadowRoot = this.shadowRoot;
          if (shadowRoot) {
            shadowRoot = outer3_136(self);
          }
          if (shadowRoot) {
            outer1_1.addShadowRoot(self.shadowRoot, callback);
          }
          return callback.call(this, arg0);
        };
      }));
    }
  };
  items[4] = {
    key: "reset",
    value: function reset() {
      const item = this.restoreHandlers.forEach((arg0) => {
        arg0();
      });
      this.restoreHandlers = [];
      const weakSet = new WeakSet();
      this.shadowDoms = weakSet;
      const canvasManager = this.bypassOptions.canvasManager;
      canvasManager.resetShadowRoots();
    }
  };
  return _defineProperties(ShadowDomManager, items);
})();
if ("undefined" === typeof Uint8Array) {
  let items = [];
} else {
  let _Uint8Array = Uint8Array;
  let uint8Array = new Uint8Array(256);
}
