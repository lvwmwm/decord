// Module ID: 7244
// Function ID: 58370
// Name: _htmlElementAsString
// Dependencies: [7237, 7243]

// Module 7244 (_htmlElementAsString)
const require = arg1;
const dependencyMap = arg6;
function _htmlElementAsString(dataset, arr) {
  const _require = dataset;
  let items = [];
  let arr1 = items;
  if (dataset) {
    if (obj.tagName) {
      if (_require(items[0]).GLOBAL_OBJ.HTMLElement) {
        if (obj instanceof globalThis.HTMLElement) {
          if (obj.dataset) {
            dataset = obj.dataset;
            if (obj.dataset.sentryComponent) {
              return dataset.sentryComponent;
            } else if (dataset.sentryElement) {
              return dataset.dataset.sentryElement;
            }
          }
        }
      }
      arr1.push(obj.tagName.toLowerCase());
      let mapped = null;
      if (arr) {
        mapped = null;
        if (arr.length) {
          const found = arr.filter((arg0) => dataset.getAttribute(arg0));
          mapped = found.map((arg0) => {
            const items = [arg0, dataset.getAttribute(arg0)];
            return items;
          });
        }
      }
      if (mapped) {
        if (mapped.length) {
          const item = mapped.forEach((arg0) => {
            items.push("[" + arg0[0] + "=\"" + arg0[1] + "\"]");
          });
        }
        const iter = ["aria-label", "type", "name", "title", "alt"][Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp34 = dataset;
          let tmp33 = nextResult;
          let attr = obj.getAttribute(nextResult);
          if (attr) {
            let tmp37 = items;
            let tmp38 = nextResult;
            let tmp39 = attr;
            let _HermesInternal3 = HermesInternal;
            let str8 = "[";
            let str9 = "=\"";
            let str10 = "\"]";
            arr = arr1.push("[" + tmp33 + "=\"" + tmp36 + "\"]");
          }
          continue;
        }
        return arr1.join("");
      }
      if (obj.id) {
        const _HermesInternal = HermesInternal;
        arr1 = arr1.push("#" + obj.id);
      }
      if (obj.className) {
        if (obj2.isString(str3)) {
          const parts = str3.split(/\s+/);
          const tmp23 = parts[Symbol.iterator]();
          while (tmp23 !== undefined) {
            let tmp27 = items;
            let _HermesInternal2 = HermesInternal;
            let arr2 = arr1.push("." + tmp25);
            continue;
          }
        }
        obj2 = _require(items[1]);
      }
      const str = obj.tagName;
    }
  }
  return "";
}
arg5.getComponentName = function getComponentName(arg0) {
  let parentNode = arg0;
  let num = 0;
  if (require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.HTMLElement) {
    while (parentNode) {
      if (parentNode instanceof globalThis.HTMLElement) {
        let dataset = parentNode.dataset;
        if (parentNode.dataset.sentryComponent) {
          return dataset.sentryComponent;
        } else if (dataset.sentryElement) {
          return parentNode.dataset.sentryElement;
        }
      }
      parentNode = parentNode.parentNode;
      num = num + 1;
      if (num < 5) {
        continue;
      } else {
        let tmp4 = null;
        return null;
      }
    }
    return null;
  } else {
    return null;
  }
};
arg5.getDomElement = function getDomElement(arg0) {
  let element = null;
  if (require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.document) {
    element = null;
    if (require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.document.querySelector) {
      const _document = require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.document;
      element = _document.querySelector(arg0);
    }
  }
  return element;
};
arg5.getLocationHref = function getLocationHref() {
  return require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.document.location.href;
};
arg5.htmlTreeAsString = function htmlTreeAsString(arg0) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    if (arg0) {
      let tmp3 = arg0;
      const items = [];
      let num2 = 0;
      const _Array = Array;
      const tmp7 = Array.isArray(tmp) ? tmp : tmp.keyAttrs;
      const _Array2 = Array;
      const tmp10 = !Array.isArray(tmp);
      let maxStringLength = tmp10;
      if (tmp10) {
        maxStringLength = obj.maxStringLength;
      }
      let num3 = maxStringLength;
      if (!maxStringLength) {
        num3 = 80;
      }
      if (tmp3) {
        let sum = tmp13 + 1;
        if (+0 < 5) {
          const tmp39 = _htmlElementAsString(tmp3, tmp8);
          let arr2 = tmp39;
          if ("html" !== tmp39) {
            if (sum <= 1) {
              items.push(arr2);
              num2 = num2 + arr2.length;
              const parentNode = tmp3.parentNode;
              tmp3 = parentNode;
              while (parentNode) {
                let tmp24 = sum;
                let tmp25 = +sum;
                sum = tmp25 + 1;
                if (tmp25 >= 5) {
                  break;
                } else {
                  let tmp26 = _htmlElementAsString;
                  let tmp27 = tmp3;
                  let tmp28 = tmp7;
                  let tmp29 = _htmlElementAsString(tmp3, tmp8);
                  arr2 = tmp29;
                  if ("html" === tmp29) {
                    break;
                  } else {
                    let tmp30 = sum;
                    if (sum <= 1) {
                      continue;
                    } else {
                      let tmp31 = num2;
                      let tmp32 = items;
                      let tmp33 = arr2;
                      let tmp34 = num3;
                      if (num2 + 3 * items.length + arr2.length >= tmp11) {
                        break;
                      }
                    }
                    continue;
                  }
                }
              }
            }
          }
        }
      }
      const reversed = items.reverse();
      return reversed.join(" > ");
    } else {
      return "<unknown>";
    }
  }
  obj = {};
};
