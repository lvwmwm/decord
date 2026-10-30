// Module ID: 12919
// Function ID: 12920
// Name: compileGeneralSelector
// Dependencies: [12914, 12920, 12921]
// Exports: compileGeneralSelector

// Module 12919 (compileGeneralSelector)
import _mod12914 from "module_12914" /* 12914 */;

let tmp;
const attributeRules2 = tmp(12920);
const filters = tmp(12921);

export function compileGeneralSelector(arg0, type, adapter, arg3, arg4) {
  let closure_0 = arg0;
  adapter = adapter.adapter;
  const equals = adapter.equals;
  type = type.type;
  let tmp = require;
  let tmp2 = dependencyMap;
  if (_mod12914.SelectorType.PseudoElement === type) {
    const _Error5 = Error;
    const self9 = this;
    const self10 = this;
    const error = new Error("Pseudo-elements are not supported by css-select");
    throw error;
  } else if (_mod12914.SelectorType.ColumnCombinator === type) {
    const _Error4 = Error;
    const self7 = this;
    const self8 = this;
    const error1 = new Error("Column combinators are not yet supported by css-select");
    throw error1;
  } else if (_mod12914.SelectorType.Attribute === type) {
    if (null != type.namespace) {
      const _Error3 = Error;
      const self5 = this;
      const self6 = this;
      const error2 = new Error("Namespaced attributes are not yet supported by css-select");
      throw error2;
    } else {
      const tmp19 = adapter.xmlMode && !adapter.lowerCaseAttributeNames;
      if (!tmp19) {
        const str5 = type.name;
        type.name = str5.toLowerCase();
      }
      const attributeRules = attributeRules2.attributeRules;
      return attributeRules[type.action](arg0, type, adapter);
    }
  } else if (_mod12914.SelectorType.Pseudo === type) {
    return filters.compilePseudoSelector(arg0, type, adapter, arg3, arg4);
  } else if (_mod12914.SelectorType.Tag === type) {
    let tmp8 = null;
    if (null != type.namespace) {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error3 = new Error("Namespaced tag names are not yet supported by css-select");
      throw error3;
    } else {
      let closure_3 = str3;
      const tmp9 = adapter.xmlMode && !adapter.lowerCaseTags;
      if (!tmp9) {
        closure_3 = str3.toLowerCase();
      }
      return function tag(arg0) {
        const tmp = adapter.getName(arg0) === closure_3 && closure_0(arg0);
        return tmp;
      };
    }
  } else if (_mod12914.SelectorType.Descendant === type) {
    let flag = false;
    if (false !== adapter.cacheResults) {
      let tmp7 = globalThis;
      const _WeakSet = WeakSet;
      if (typeof WeakSet !== "undefined") {
        const _WeakSet2 = WeakSet;
        const self11 = this;
        const self12 = this;
        const weakSet = new WeakSet();
        return function cachedDescendant(arg0) {
          const parent = adapter.getParent(arg0);
          let tmp2 = null;
          const obj = adapter;
          if (parent) {
            tmp2 = null;
            if (obj.isTag(parent)) {
              tmp2 = parent;
            }
          }
          if (tmp2) {
            while (true) {
              let obj2 = weakSet;
              if (!weakSet.has(tmp2)) {
                if (adapter.isTag(tmp2)) {
                  if (closure_0(tmp2)) {
                    break;
                  }
                }
                let addResult = obj2.add(tmp2);
              }
              let obj3 = adapter;
              let parent1 = adapter.getParent(tmp2);
              let tmp8 = null;
              if (parent1) {
                tmp8 = null;
                if (obj3.isTag(parent1)) {
                  tmp8 = parent1;
                }
              }
              tmp2 = tmp8;
            }
            return true;
          }
          return false;
        };
      }
    }
    return function descendant(arg0) {
      const parent = adapter.getParent(arg0);
      let tmp2 = null;
      const obj = adapter;
      if (parent) {
        tmp2 = null;
        if (obj.isTag(parent)) {
          tmp2 = parent;
        }
      }
      if (tmp2) {
        while (!closure_0(tmp2)) {
          let obj2 = adapter;
          let parent1 = adapter.getParent(tmp2);
          let tmp6 = null;
          if (parent1) {
            tmp6 = null;
            if (obj2.isTag(parent1)) {
              tmp6 = parent1;
            }
          }
          tmp2 = tmp6;
        }
        return true;
      }
      return false;
    };
  } else if ("_flexibleDescendant" === type) {
    return function flexibleDescendant(arg0) {
      let tmp = arg0;
      while (!closure_0(tmp)) {
        let obj = adapter;
        let parent = adapter.getParent(tmp);
        let tmp3 = null;
        if (parent) {
          tmp3 = null;
          if (obj.isTag(parent)) {
            tmp3 = parent;
          }
        }
        tmp = tmp3;
        if (tmp) {
          continue;
        } else {
          let flag = false;
          return false;
        }
      }
      return true;
    };
  } else if (_mod12914.SelectorType.Parent === type) {
    return function parent(arg0) {
      let tag;
      const children = adapter.getChildren(arg0);
      return children.some((item) => {
        const isTagResult = tag.isTag(item) && closure_1_0(item);
        return isTagResult;
      });
    };
  } else if (_mod12914.SelectorType.Child === type) {
    return function child(dependencyMap) {
      const parent = adapter.getParent(dependencyMap);
      let tmp2 = null != parent && adapter.isTag(parent);
      if (tmp2) {
        tmp2 = closure_0(parent);
      }
      return tmp2;
    };
  } else if (_mod12914.SelectorType.Sibling === type) {
    return function sibling(arg0) {
      const siblings = adapter.getSiblings(arg0);
      let num = 0;
      if (0 < siblings.length) {
        while (!equals(arg0, siblings[num])) {
          if (adapter.isTag(tmp)) {
            if (closure_0(tmp)) {
              let flag = true;
              return true;
            }
          }
          num = num + 1;
          if (num < siblings.length) {
            continue;
          } else {
            break;
          }
          break;
        }
      }
      return false;
    };
  } else if (_mod12914.SelectorType.Adjacent === type) {
    return adapter.prevElementSibling ? (function adjacent(prev) {
      const prevElementSiblingResult = adapter.prevElementSibling(prev);
      const tmp2 = null != prevElementSiblingResult && closure_0(prevElementSiblingResult);
      return tmp2;
    }) : (function adjacent(arg0) {
      let tmp;
      const siblings = adapter.getSiblings(arg0);
      let num = 0;
      let tmp2;
      if (0 < siblings.length) {
        let tmp6 = tmp;
        tmp2 = tmp;
        while (!equals(arg0, siblings[num])) {
          if (adapter.isTag(tmp3)) {
            tmp6 = tmp3;
          }
          num = num + 1;
          tmp = tmp6;
          tmp2 = tmp6;
          if (num >= siblings.length) {
            break;
          }
        }
      }
      const tmp8 = tmp2 && closure_0(tmp2);
      return tmp8;
    });
  } else if (_mod12914.SelectorType.Universal === type) {
    let tmp3 = null;
    if (null != type.namespace) {
      if ("*" !== type.namespace) {
        let tmp4 = globalThis;
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error4 = new Error("Namespaced universal selectors are not yet supported by css-select");
        let tmp6 = error4;
        throw error4;
      }
    }
    return arg0;
  }
}
