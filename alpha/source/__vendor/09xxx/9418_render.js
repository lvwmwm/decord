// Module ID: 9418
// Function ID: 9419
// Name: render
// Dependencies: [9415, 9419, 9423]

// Module 9418 (render)
import ElementType2 from "ElementType" /* 9415 */;
import elementNames2 from "elementNames" /* 9423 */;

let dependencyMap, hasOwnProperty;

const self = this;
function replaceQuotes(str) {
  return str.replace(/"/g, "&quot;");
}
function render(arg0, arg1) {
  let attribs;
  let encodeXML;
  let xmlMode;
  obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  let arr = arg0;
  if (!("length" in arg0)) {
    const items = [arg0];
    arr = items;
  }
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < arr.length) {
    do {
      let combined;
      let element = arr[num];
      let type = element.type;
      let tmp = ElementType;
      let tmp3 = str;
      if (ElementType.Root === type) {
        combined = render(element.children, obj);
      } else {
        if (tmp.Doctype !== type) {
          if (tmp.Directive !== type) {
            if (tmp.Comment === type) {
              let concat5 = "<!--".concat;
              combined = "<!--".concat(element.data, "-->");
            } else if (tmp.CDATA === type) {
              let concat4 = "<![CDATA[".concat;
              combined = "<![CDATA[".concat(element.children[0].data, "]]>");
            } else {
              let text1;
              if (tmp.Script !== type) {
                if (tmp.Style !== type) {
                  if (tmp.Tag !== type) {
                    if (tmp.Text === type) {
                      let tmp4 = element.data || "";
                      let decodeEntities = obj.encodeEntities ?? obj.decodeEntities;
                      let tmp5 = false === decodeEntities;
                      if (!tmp5) {
                        let hasItem = !obj.xmlMode && element.parent;
                        if (hasItem) {
                          let tmp7 = set;
                          hasItem = set.has(element.parent.name);
                        }
                        tmp5 = hasItem;
                      }
                      let tmp8 = tmp4;
                      if (!tmp5) {
                        if (!obj.xmlMode) {
                          let escapeTextResult;
                          if ("utf8" === obj.encodeEntities) {
                            escapeTextResult = attribs(9419).escapeText(tmp4);
                          }
                          tmp8 = escapeTextResult;
                        }
                        escapeTextResult = attribs(9419).encodeXML(tmp4);
                      }
                      combined = tmp8;
                    }
                  }
                }
              }
              let tmp15 = obj;
              if ("foreign" === obj.xmlMode) {
                let elementNames = attribs(9423).elementNames;
                let name = elementNames.get(element.name) ?? element.name;
                element.name = name;
                let parent = element.parent;
                if (parent) {
                  parent = set2.has(element.parent.name);
                }
                let tmp17 = obj;
                if (parent) {
                  tmp17 = encodeXML(encodeXML({}, obj), { xmlMode: false });
                }
                tmp15 = tmp17;
              }
              let hasItem1 = !tmp15.xmlMode;
              if (hasItem1) {
                hasItem1 = set3.has(element.name);
              }
              let tmp21 = tmp15;
              if (hasItem1) {
                tmp21 = encodeXML(encodeXML({}, tmp15), { xmlMode: "foreign" });
              }
              let concat = "<".concat;
              let combined1 = "<".concat(element.name);
              attribs = element.attribs;
              dependencyMap = tmp21;
              encodeXML = undefined;
              let joined;
              if (attribs) {
                let decodeEntities2 = tmp21.encodeEntities ?? tmp21.decodeEntities;
                if (false === decodeEntities2) {
                  encodeXML = replaceQuotes;
                } else {
                  if (!tmp21.xmlMode) {
                    if ("utf8" === tmp21.encodeEntities) {
                      encodeXML = attribs(9419).escapeAttribute;
                    }
                  }
                  encodeXML = attribs(9419).encodeXML;
                }
                let _Object = Object;
                let keys = Object.keys(attribs);
                let mapped = keys.map((item) => {
                  let str = "";
                  if (null !== attribs[item]) {
                    str = "";
                    if (undefined !== attribs[item]) {
                      str = tmp;
                    }
                  }
                  let tmp3 = item;
                  if ("foreign" === xmlMode.xmlMode) {
                    const attributeNames = elementNames2.attributeNames;
                    const value = attributeNames.get(item);
                    let tmp7 = item;
                    if (null !== value) {
                      tmp7 = item;
                      if (undefined !== value) {
                        tmp7 = value;
                      }
                    }
                    tmp3 = tmp7;
                  }
                  if (!xmlMode.emptyAttrs) {
                    let combined1;
                    if (!xmlMode.xmlMode) {
                      combined1 = tmp3;
                    }
                    return combined1;
                  }
                  const combined = "".concat(tmp3, "=\"");
                  combined1 = combined.concat(encodeXML(str), "\"");
                });
                joined = mapped.join(" ");
              }
              let sum = combined1;
              if (joined) {
                let concat2 = " ".concat;
                sum = combined1 + " ".concat(joined);
              }
              if (0 === element.children.length) {
                let hasItem2;
                let selfClosingTags = tmp21.selfClosingTags;
                if (tmp21.xmlMode) {
                  hasItem2 = false !== selfClosingTags;
                } else {
                  hasItem2 = selfClosingTags;
                  if (hasItem2) {
                    hasItem2 = set1.has(element.name);
                  }
                }
                if (hasItem2) {
                  let text = sum;
                  if (!tmp21.xmlMode) {
                    text = `${tmp29} `;
                  }
                  text1 = `${tmp38}/>`;
                  combined = text1;
                }
              }
              let text2 = `${tmp29}>`;
              let text3 = text2;
              if (element.children.length > 0) {
                text3 = `${tmp29}>${render(element.children, tmp21)}`;
              }
              let hasItem3 = !tmp21.xmlMode;
              if (hasItem3) {
                hasItem3 = set1.has(element.name);
              }
              text1 = text3;
              if (!hasItem3) {
                let concat3 = "</".concat;
                text1 = text3 + "</".concat(element.name, ">");
              }
            }
          }
        }
        let concat6 = "<".concat;
        combined = "<".concat(element.data, ">");
      }
      str = str + combined;
      num = num + 1;
      str2 = str;
    } while (num < arr.length);
  }
  return str2;
}
let obj = this && self.__assign || (function() {
  obj = Object.assign || (function(arg0) {
    let num;
    const length = arguments.length;
    for (let num = 1; num < length; num = num + 1) {
      let tmp = arguments[num];
      for (const key10012 in tmp) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        if (!hasOwnProperty.call(tmp, key10012)) {
          continue;
        } else {
          arg0[key10012] = tmp[key10012];
          continue;
        }
        continue;
      }
    }
    return arg0;
  });
  return obj(...arguments);
});
let tmp = self && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_3 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_4 = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_3(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_4(obj, __esModule);
  return obj;
});
const ElementType = tmp5(ElementType2);
const set = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
const set1 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
const set2 = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]);
const set3 = new Set(["svg", "math"]);

export { render };
export default render;
