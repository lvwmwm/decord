// Module ID: 12822
// Function ID: 12823
// Dependencies: [5, 41, 42, 93, 95, 98, 32, 19, 21, 12823, 8031, 12945]
// Exports: SvgCssUri

// Module 12822
import Fragment from "Fragment" /* 21 */;
import inlineStyles2 from "inlineStyles" /* 8031 */;
import _modDef12823 from "module_12823" /* 12823 */;
import compileDefault from "compile" /* 12945 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import "react";
import react from "react" /* 19 */;

let closure_5, closure_7, hasOwnProperty, includes, pseudos;

let Component;
let c9;
let findAll;
let findOne;
let metroImportAll;
let metroImportDefault;
let obj2;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function flattenToSelectors(parsed, items) {
  let closure_0 = items;
  obj = _modDef12823;
  const obj2 = {
    visit: "Rule",
    enter(type) {
      let tmp;
      const rule = type;
      if ("Rule" === type.type) {
        const self = this;
        const atrule = this.atrule;
        let children = tmp.children;
        children.each((children, item) => {
          children = children.children;
          const items = [];
          obj = { item, atrule, rule, pseudos: items };
          rule.push(obj);
          children.each((type, item, list) => {
            type = type.type;
            const tmp = "PseudoClassSelector" !== type && "PseudoElementSelector" !== type;
            if (!tmp) {
              obj = { item, list };
              items.push(obj);
            }
          });
        });
      }
    }
  };
  obj.walk(parsed, obj2);
}
function selectorWithSpecificity(selector) {
  let items;
  let closure_0 = 0;
  let closure_1 = 0;
  let closure_2 = 0;
  let children = selector.item.data.children;
  function walk(type) {
    type = type.type;
    if ("SelectorList" !== type) {
      if ("Selector" !== type) {
        if ("IdSelector" === type) {
          closure_0 = closure_0 + 1;
        } else {
          if ("ClassSelector" !== type) {
            if ("AttributeSelector" !== type) {
              if ("PseudoClassSelector" === type) {
                const str3 = type.name;
                const formatted = str3.toLowerCase();
                if ("not" === formatted) {
                  const children = type.children;
                  if (children) {
                    children.each(walk);
                  }
                } else {
                  if ("before" !== formatted) {
                    if ("after" !== formatted) {
                      if ("first-line" !== formatted) {
                        if ("first-letter" !== formatted) {
                          closure_1 = closure_1 + 1;
                        }
                      }
                    }
                  }
                  closure_2 = closure_2 + 1;
                }
              } else if ("PseudoElementSelector" === type) {
                closure_2 = closure_2 + 1;
              } else if ("TypeSelector" === type) {
                if ("*" !== type.name.charAt(type.name.length - 1)) {
                  closure_2 = closure_2 + 1;
                }
              }
            }
          }
          closure_1 = closure_1 + 1;
        }
      }
    }
    const children2 = type.children;
    children2.each(walk);
  }
  obj = { selector, specificity: items };
  children.each(walk);
  items = [closure_0, closure_1, closure_2];
  return obj;
}
function sortSelectors(arr) {
  let mapped1 = arr;
  if (arr.length > 1) {
    let mapped = arr.map(selectorWithSpecificity);
    const _Array = Array;
    const self = this;
    const self2 = this;
    let array = new Array(length);
    let num3 = 1;
    arr = mapped;
    if (1 < arr.length) {
      do {
        let tmp4 = array;
        let num = 0;
        let num2 = 0;
        if (0 < length) {
          do {
            let sum = num2 + num3;
            let sum2 = num;
            let tmp9 = sum;
            if (sum > length) {
              tmp9 = length;
            }
            let sum1 = sum + num3;
            if (sum1 > length) {
              sum1 = length;
            }
            let sum4 = tmp9;
            let sum3 = num2;
            while (true) {
              let tmp13 = sum2;
              let tmp15 = sum3;
              if (sum3 < tmp9) {
                if (sum4 < sum1) {
                  let specificity = mapped[sum3].specificity;
                  let specificity2 = mapped[sum4].specificity;
                  let num4 = 0;
                  let num5 = -1;
                  while (specificity[num4] >= specificity2[num4]) {
                    num5 = 1;
                    if (specificity[num4] > specificity2[num4]) {
                      break;
                    } else {
                      num4 = num4 + 1;
                      num5 = 0;
                      if (num4 >= 4) {
                        break;
                      }
                    }
                  }
                  if (num5 <= 0) {
                    sum2 = sum2 + 1;
                    sum3 = sum3 + 1;
                    array[tmp13] = mapped[tmp15];
                    continue;
                  } else {
                    sum2 = sum2 + 1;
                    let tmp20 = +sum4;
                    sum4 = tmp20 + 1;
                    array[tmp13] = mapped[tmp20];
                    continue;
                  }
                  continue;
                }
              }
              if (sum3 < tmp9) {
                sum2 = sum2 + 1;
                sum3 = sum3 + 1;
                array[tmp13] = mapped[tmp15];
                continue;
              } else if (sum4 >= sum1) {
                break;
              } else {
                sum2 = sum2 + 1;
                let tmp18 = +sum4;
                sum4 = tmp18 + 1;
                array[tmp13] = mapped[tmp18];
                continue;
              }
              continue;
            }
            num2 = num2 + tmp2;
            num = sum2;
          } while (num2 < length);
        }
        num3 = num3 * 2;
        array = mapped;
        mapped = tmp4;
        arr = tmp4;
      } while (num3 < arr.length);
    }
    mapped1 = arr.map((selector) => selector.selector);
  }
  return mapped1;
}
function initStyle(style) {
  function CSSStyleDeclaration(style) {
    let props;
    let styles;
    ({ props, styles } = style);
    if (!props.style) {
      props.style = {};
    }
    style = props.style;
    map = new Map();
    style.style = style;
    style.priority = map;
    if (styles) {
      if (0 !== styles.length) {
        try {
          obj = map(closure_2[9]);
          const children = obj.parse(styles, closure_19).children;
          children.each((arg0) => {
            let important;
            let property;
            let value;
            try {
              ({ property, value, important } = arg0);
              const trimmed = property.trim();
              const result = map.set(trimmed, important);
              obj = inlineStyles2;
              const camelCaseResult = obj.camelCase(trimmed);
              const obj2 = _modDef12823;
              const str = obj2.generate(value);
              style[camelCaseResult] = str.trim();
            } catch (tmp10) {
              const _Error = Error;
              const tmp12 = tmp10 instanceof Error && "Unknown node type: undefined" !== tmp10.message;
              if (tmp12) {
                const _console = console;
                console.warn("Warning: Parse error when parsing inline styles, style properties of this element cannot be used. The raw styles can still be get/set using .attr('style').value. Error details: " + tmp10);
              }
            }
          });
        } catch (tmp6) {
          let _console = console;
          let str = "Warning: Parse error when parsing inline styles, style properties of this element cannot be used. The raw styles can still be get/set using .attr('style').value. Error details: ";
          console.warn("Warning: Parse error when parsing inline styles, style properties of this element cannot be used. The raw styles can still be get/set using .attr('style').value. Error details: " + tmp6);
        }
      }
    }
  }
  if (!style.style) {
    CSSStyleDeclaration(style);
  }
  return style;
}
function closestElem(parent, foreignObject) {
  parent = parent.parent;
  let tmp = parent;
  if (tmp) {
    let tmp2 = parent;
    tmp = parent;
    if (parent.tag !== "foreignObject") {
      const parent2 = tmp2.parent;
      tmp = parent2;
      while (parent2) {
        tmp2 = parent2;
        tmp = parent2;
        if (parent2.tag === "foreignObject") {
          break;
        }
      }
    }
  }
  return tmp;
}
function extractVariables(parsed) {
  map = new Map();
  obj = _modDef12823;
  const obj2 = {
    visit: "Declaration",
    enter(property) {
      const value = property.value;
      if (property.property.startsWith("--")) {
        const trimmed = str.trim();
        obj = _modDef12823;
        const str2 = obj.generate(value);
        const result = map.set(trimmed, str2.trim());
      }
    }
  };
  obj.walk(parsed, obj2);
  return map;
}
class SvgCss {
  constructor(xml) {
    let fallback;
    let onError;
    let override;
    const f103137 = () => {
      let parsed = null;
      if (null !== xml) {
        obj = inlineStyles2;
        parsed = obj.parse(tmp, inlineStyles);
      }
      return parsed;
    };
    xml = xml.xml;
    ({ override, fallback, onError } = xml);
    if (undefined === onError) {
      onError = closure_12;
    }
    try {
      const tmp = closure_8;
      const items = [xml];
      obj = { ast: closure_8(f103137, items), override };
      closure_8(f103137, items);
      const SvgAst = xml(8031).SvgAst;
      const tmp3 = jsx;
      if (!override) {
        override = xml;
      }
      return tmp3(SvgAst, obj);
    } catch (tmp6) {
      onError(tmp6);
      if (fallback == null) {
        fallback = null;
      }
      return fallback;
    }
  }
}
({ Component, useEffect: metroImportDefault, useMemo: metroImportAll, useState: c9 } = react);
const jsx = Fragment.jsx;
let closure_12 = error.bind(console);
let obj = { xmlMode: true, adapter: obj2 };
obj2 = {
  removeSubsets(arr) {
    let diff = arr.length - 1;
    if (diff > -1) {
      do {
        let tmp3 = arr[diff];
        delete tmp[tmp2];
        let flag = true;
        let tmp5 = tmp3;
        if (tmp5) {
          while (!arr.includes(tmp5)) {
            let parent = typeof tmp5 === "object";
            if (typeof tmp5 === "object") {
              parent = tmp5.parent;
            }
            if (!parent) {
              parent = null;
            }
            tmp5 = parent;
            flag = true;
          }
          let spliceResult = arr.splice(diff, 1);
          flag = false;
        }
        if (flag) {
          arr[diff] = tmp3;
        }
        diff = diff - 1;
      } while (diff > -1);
    }
    return arr;
  },
  existsOne(arg0, arr) {
    const f103138 = (children) => {
      let tmp = typeof children === "object";
      if (typeof children === "object") {
        let someResult = closure_0(children);
        const tmp3 = closure_0;
        if (!someResult) {
          children = children.children;
          closure_0 = tmp3;
          someResult = children.some(f103138);
        }
        tmp = someResult;
      }
      return tmp;
    };
    let closure_0 = arg0;
    return arr.some(f103138);
  },
  getSiblings(parent) {
    parent = typeof parent === "object";
    if (typeof parent === "object") {
      parent = parent.parent;
    }
    return parent && parent.children || [];
  },
  hasAttrib(props, arg1) {
    hasOwnProperty = Object.prototype.hasOwnProperty;
    return hasOwnProperty.call(props.props, arg1);
  },
  findOne,
  findAll,
  isTag(obj) {
    return typeof obj === "object";
  },
  getParent(parent) {
    parent = typeof parent === "object";
    if (typeof parent === "object") {
      parent = parent.parent;
    }
    if (!parent) {
      parent = null;
    }
    return parent;
  },
  getChildren(children) {
    children = typeof children === "object";
    if (typeof children === "object") {
      children = children.children;
    }
    if (!children) {
      children = [];
    }
    return children;
  },
  getName(tag) {
    return tag.tag;
  },
  getText(arg0) {
    return "";
  },
  getAttributeValue(arg0, arg1) {
    return arg0.props[arg1] || null;
  }
};
findOne = function findOne(fn, arg1) {
  let tmp = null;
  let num = 0;
  let tmp2 = null;
  if (0 < arg1.length) {
    while (true) {
      let tmp3 = arg1[num];
      let tmp6 = tmp;
      if (typeof tmp3 !== "string") {
        tmp6 = tmp3;
        if (!fn(tmp3)) {
          let children = tmp3.children;
          tmp6 = tmp;
          if (0 !== children.length) {
            tmp6 = findOne(fn, children);
          }
        }
      }
      let sum = num + 1;
      tmp2 = tmp6;
      if (sum >= length) {
        break;
      } else {
        num = sum;
        tmp = tmp6;
        tmp2 = tmp6;
        if (tmp2) {
          break;
        }
      }
    }
  }
  return tmp2;
};
findAll = function findAll(fn, arg1) {
  let num;
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  const length = arg1.length;
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    if (typeof tmp === "object") {
      if (fn(tmp)) {
        let arr = items.push(tmp);
      }
      let children = tmp.children;
      if (0 !== children.length) {
        let tmp5 = findAll(fn, children, items);
      }
    }
  }
  return items;
};
let closure_15 = ["", "screen"];
let closure_16 = [""];
let closure_19 = { context: "declarationList", parseValue: false };
let closure_22 = { parseValue: false, parseCustomProperty: false };
let closure_24 = ["color", "fill", "floodColor", "lightingColor", "stopColor", "stroke"];
function resolveElementVariables(item10064, map) {
  let closure_1 = map;
  return closure_24.forEach((item) => {
    const f103136 = (arg0, arg1, str) => {
      let str2;
      const value = closure_0.get(arg1);
      if (undefined !== value) {
        closure_0 = tmp;
        let str4 = "";
        if (undefined !== value) {
          let str5 = value;
          if (typeof value !== "string") {
            const obj2 = map(closure_2_2[9]);
            str5 = obj2.generate(value);
          }
          str4 = str5.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, f103136);
        }
        str2 = str4;
      } else {
        str = "";
        str2 = "";
        if (str) {
          closure_0 = tmp;
          if (undefined !== str) {
            let str3 = str;
            if (typeof str !== "string") {
              obj = map(closure_2_2[9]);
              str3 = obj.generate(str);
            }
            str = str3.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, f103136);
          }
          str2 = str;
        }
      }
      return str2;
    };
    obj = item10064.props[item];
    let startsWithResult = obj;
    const tmp = item10064;
    if (obj) {
      let str = "var(";
      startsWithResult = obj.startsWith("var(");
    }
    if (startsWithResult) {
      item10064 = map;
      let str2 = "";
      const props = tmp.props;
      if (undefined !== obj) {
        let str3 = obj;
        if (typeof obj !== "string") {
          let obj2 = _modDef12823;
          str3 = obj2.generate(obj);
        }
        str2 = str3.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, f103136);
      }
      props[item] = str2;
    }
  });
}
function inlineStyles(arg0) {
  let data;
  function filterByMqs(items) {
    return items.filter((atrule) => {
      let name;
      let prelude;
      atrule = atrule.atrule;
      if (null === atrule) {
        return true;
      } else {
        ({ name, prelude } = atrule);
        let firstResult = prelude;
        if (firstResult) {
          const children = prelude.children;
          firstResult = children.first();
        }
        let generateResult = name;
        if (firstResult) {
          generateResult = name;
          if ("MediaQueryList" === firstResult.type) {
            obj = closure_1_1(data[9]);
            generateResult = obj.generate(prelude);
          }
        }
        return closure_1_15.includes(generateResult);
      }
    });
  }
  function filterByPseudos(arr) {
    return arr.filter((pseudos) => {
      let list;
      pseudos = pseudos.pseudos;
      includes = includes.includes;
      const element = { type: "Selector", children: list.fromArray(pseudos.map((item) => item.item.data)) };
      const generate = closure_1_1(data[9]).generate;
      closure_1_1(data[9]);
      list = new closure_1_0(data[9]).List();
      return includes(generate(element));
    });
  }
  function cleanPseudos(arr) {
    const item = arr.forEach((pseudos) => {
      pseudos = pseudos.pseudos;
      return pseudos.forEach((list) => {
        list = list.list;
        return list.remove(list.item);
      });
    });
  }
  let closure_0 = arg0;
  let arr = compileDefault("style", arg0, obj);
  if (0 === arr.length) {
    return arg0;
  } else {
    const items = [];
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
    let iter = arr[Symbol.iterator]();
    const tmp = arr;
    let nextResult = iter.next();
    if (iter === undefined) {
      const tmp19 = filterByPseudos(filterByMqs(items));
      cleanPseudos(tmp19);
      let obj3 = sortSelectors(tmp19);
      const reversed = obj3.reverse();
      let str = "*[color], *[fill], *[floodColor], *[lightingColor], *[stopColor], *[stroke]";
      const tmp26 = compileDefault("*[color], *[fill], *[floodColor], *[lightingColor], *[stopColor], *[stroke]", arg0, obj);
      for (const item10064 of tmp26) {
        let tmp31 = resolveElementVariables(item10064, map);
        continue;
      }
      for (const item10074 of reversed) {
        ({ rule: importDefault, item: dependencyMap } = item10074);
        let tmp32Result = tmp32();
        continue;
      }
      return arg0;
    } else {
      let children = nextResult.children;
      obj = children;
      if (children.length) {
        const tmp6 = nextResult;
        if (!closestElem(tmp4, "foreignObject")) {
          try {
            let tmp7 = children;
            let tmp9 = importDefault;
            let tmp10 = dependencyMap;
            const joined = obj.join("");
            let obj2 = _modDef12823;
            const parsed = obj2.parse(joined, closure_22);
            let tmp13 = extractVariables;
            map = extractVariables(parsed);
            flattenToSelectors(parsed, items);
          } catch (tmp17) {
            let _console = console;
            let warnResult = console.warn("Warning: Parse error of styles of <style/> element, skipped. Error details: " + tmp17);
          }
        }
      }
    }
  }
}
class SvgWithCss {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, SvgWithCss);
    const items1 = [...items];
    obj = _getPrototypeOf(SvgWithCss);
    const tmp2 = _getPrototypeOf;
    const tmp3 = _possibleConstructorReturn;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.state = { ast: null };
    return tmp3Result;
  }
}
_inherits(SvgWithCss, Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const parsed = this.parse(this.props.xml);
  }
};
let items = [
  entry,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(xml) {
      const self = this;
      xml = this.props.xml;
      if (xml !== xml.xml) {
        const parsed = self.parse(xml);
      }
    }
  },
  {
    key: "parse",
    value: function parse(arg0) {
      const self = this;
      try {
        let parsed = null;
        const setState = self.setState;
        if (arg0) {
          obj = inlineStyles2;
          parsed = obj.parse(arg0, inlineStyles);
        }
        const obj2 = { ast: parsed };
        setState(obj2);
      } catch (tmp7) {
        if (self.props.onError) {
          const props = self.props;
          props.onError(tmp7);
        } else {
          const _console = console;
          console.error(tmp7);
        }
      }
    }
  },
  {
    key: "render",
    value: function render() {
      let override;
      const props = this.props;
      obj = { ast: this.state.ast, override };
      override = props.override;
      const SvgAst = inlineStyles2.SvgAst;
      const tmp = jsx;
      if (!override) {
        override = props;
      }
      return tmp(SvgAst, obj);
    }
  }
];
let closure_1;
const importDefaultResult1Result = _createClass(SvgWithCss, items);
class SvgWithCssUri {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, SvgWithCssUri);
    const items1 = [...items];
    obj = _getPrototypeOf(SvgWithCssUri);
    const tmp2 = _getPrototypeOf;
    const tmp3 = _possibleConstructorReturn;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.state = { xml: null };
    return tmp3Result;
  }
}
_inherits(SvgWithCssUri, Component);
const entry1 = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const response = this.fetch(this.props.uri);
  }
};
let items1 = [
  entry1,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(uri) {
      const self = this;
      uri = this.props.uri;
      if (uri !== uri.uri) {
        const response = self.fetch(uri);
      }
    }
  },
,

];
const entry2 = {
  key: "fetch",
  value: function fetch(arg0) {
    return closure_1(...arguments);
  }
};
closure_1 = _asyncToGenerator(async function(arg0) {
  const self = this;
  closure_1 = arg0;
  let c8 = 0;
  let c9 = 0;
  let c6 = 0;
  return (async (arg0, value) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let tmp4;
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            return { value, done: true };
          } else {
            closure_5 = self;
            c6 = 1;
            setState = self.setState;
            closure_2 = {};
            tmp4 = null;
            if (closure_1) {
              const obj2 = self(closure_2[10]);
              onError = obj2.fetchText(tmp30);
              c8 = 2;
              c9 = 1;
              return { value: onError, done: false };
            } else {
              closure_2.xml = tmp4;
              setState(closure_2);
              onError = closure_5.props;
              const onLoad = onError.onLoad;
              if (onLoad != null) {
                onLoad();
              }
              c6 = 0;
            }
          }
        } else if (1 === tmp3) {
          c6 = 0;
          let closure_0 = closure_7;
          onError = closure_5.props.onError;
          if (onError) {
            const props = closure_5.props;
            props.onError(closure_0);
          } else {
            const _console = console;
            onError = console.error(closure_0);
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else {
          tmp4 = value;
          if (arg0 === 2) {
            c6 = 0;
            c9 = 3;
            return { value, done: true };
          }
        }
        c9 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp21) {
        closure_7 = tmp21;
        if (0 === c6) {
          c9 = 3;
          throw tmp21;
        } else {
          c8 = 1;
        }
      }
    }
  })();
});
items1[2] = entry2;
items1[3] = {
  key: "render",
  value: function render() {
    return <importDefaultResult1Result xml={this.state.xml} override={this.props} />;
  }
};
const SvgWithCss_export = importDefaultResult1Result;
const SvgWithCssUri_export = _createClass(SvgWithCssUri, items1);

export { inlineStyles };
export { SvgCss };
export function SvgCssUri(uri) {
  let closure_3;
  let closure_4;
  let first;
  let first1;
  let tmp9;
  uri = uri.uri;
  let onError = uri.onError;
  if (undefined === onError) {
    onError = closure_12;
  }
  const onLoad = uri.onLoad;
  let fallback = uri.fallback;
  [first, closure_3] = closure_9(null);
  [first1, closure_4] = closure_9(false);
  const items = [onError, uri, onLoad];
  closure_7(() => {
    if (uri) {
      obj = inlineStyles2;
      const text = obj.fetchText(tmp);
      const nextPromise = text.then((result) => {
        closure_1_3(result);
        if (onLoad != null) {
          onLoad();
        }
      });
      nextPromise.catch((error) => {
        onError(error);
        closure_1_4(true);
      });
    } else {
      closure_3(null);
    }
  }, items);
  if (first1) {
    if (fallback == null) {
      fallback = null;
    }
    tmp9 = fallback;
  } else {
    tmp9 = <SvgCss xml={first} override={arg0} fallback={fallback} />;
  }
  return tmp9;
}
export { SvgWithCss_export as SvgWithCss };
export { SvgWithCssUri_export as SvgWithCssUri };
