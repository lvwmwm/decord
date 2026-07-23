// Module ID: 8125
// Function ID: 64329
// Name: _callSuper
// Dependencies: [5, 6, 7, 15, 17, 18, 57, 31, 33, 8126, 8127]
// Exports: SvgUri

// Module 8125 (_callSuper)
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import closure_4 from "result";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import closure_7 from "_inherits";
import closure_8 from "_slicedToArray";
import "result";
import result from "result";
import { jsx } from "jsxProd";

let Component;
let closure_10;
let closure_11;
let closure_9;
const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback3(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback3(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function missingTag() {
  return null;
}
class SvgAst {
  constructor(arg0) {
    ({ ast, override } = global);
    if (ast) {
      tmp2 = closure_0;
      tmp3 = closure_1;
      num = 9;
      ({ props, children } = ast);
      tmp4 = jsx;
      tmp5 = globalThis;
      _Object = Object;
      obj = {};
      obj.children = children;
      _Object2 = Object;
      tmp6 = override;
      tmp7 = obj;
      return jsx(require("Circle").tags.svg, Object.assign({}, props, override, obj));
    } else {
      tmp = null;
      return null;
    }
  }
}
class SvgXml {
  constructor(arg0) {
    tmp = global;
    onError = global.onError;
    if (undefined === onError) {
      onError = console;
    }
    xml = tmp.xml;
    ({ override, fallback } = tmp);
    items = [];
    items[0] = xml;
    obj = {
      ast: useMemo(() => {
            let tmp = null;
            if (null !== xml) {
              tmp = outer1_30(xml);
            }
            return tmp;
          }, items)
    };
    tmp4 = override;
    tmp2 = jsx;
    tmp3 = SvgAst;
    if (!override) {
      tmp4 = global;
    }
    obj.override = tmp4;
    return tmp2(tmp3, obj);
  }
}
function getStyle(str) {
  let str2;
  const obj = {};
  const parts = str.split(";");
  const found = parts.filter((str) => str.trim());
  for (let num = 0; num < length; num = num + 1) {
    let arr3 = found[num];
    if (0 !== arr3.length) {
      let parts1 = arr3.split(":");
      [str, str2] = parts1;
      let tmp2 = camelCase;
      let tmp3 = camelCase(str.trim());
      obj[tmp3] = str2.trim();
    }
  }
  return obj;
}
function astToReact(Tag) {
  let children;
  let props;
  if ("object" === typeof Tag) {
    ({ props, children } = Tag);
    let _class = null != props;
    if (_class) {
      _class = props.class;
    }
    if (_class) {
      props.className = props.class;
      delete tmp.class;
    }
    const _Object = Object;
    const obj = { children: children.map(astToReact) };
    return jsx(Tag.Tag, Object.assign({}, props, obj), arg1);
  } else {
    return Tag;
  }
}
function repeat(arg0, arg1) {
  let tmp3;
  let diff = tmp - 1;
  let str = "";
  let str2 = "";
  if (+arg1) {
    do {
      str = `${arg0}`;
      tmp3 = +diff;
      diff = tmp3 - 1;
      str2 = str;
    } while (tmp3);
  }
  return str2;
}
function _parse(arg0, arg1) {
  let sum;
  let closure_0 = arg0;
  function error(arg0) {
    const parts = arr.split("\n");
    let diff = c6;
    let num = 0;
    let tmp3 = c6;
    let num2 = 0;
    if (0 < parts.length) {
      num2 = num;
      tmp3 = diff;
      while (diff >= parts[num].length) {
        diff = diff - length2;
        num = num + 1;
        tmp3 = diff;
        num2 = num;
        if (num >= length) {
          break;
        }
      }
    }
    let obj = /(^|\n).*$/;
    const match = obj.exec(arr.slice(0, c6).replace(/^\t+/, outer1_17));
    let str2 = match;
    if (match) {
      str2 = match[0];
    }
    if (!str2) {
      str2 = "";
    }
    const match1 = /.*(\n|$)/.exec(arr.slice(tmp));
    obj = { line: num2, column: tmp3 };
    let first = match1;
    if (match1) {
      first = match1[0];
    }
    obj.snippet = "" + str2 + first + "\n" + outer1_29(" ", str2.length) + "^";
    const error = new Error("" + arg0 + " (" + obj.line + ":" + obj.column + "). If this is valid SVG, it's probably a bug. Please raise an issue\n\n" + obj.snippet);
    throw error;
  }
  function neutral() {
    let str = "";
    if (c6 < length) {
      str = "";
      if ("<" !== arr[c6]) {
        const text = `${tmp3}`;
        const sum = c6 + 1;
        c6 = sum;
        str = text;
        while (sum < length) {
          let tmp8 = arr;
          let tmp9 = c6;
          let str3 = text;
          str = text;
          if ("<" === arr[c6]) {
            break;
          }
        }
      }
    }
    if (obj.test(str)) {
      arr = _null2.push(str);
    }
    return "<" === arr[c6] ? openingTag : neutral;
  }
  function openingTag() {
    if ("?" === arr[_getPrototypeOf]) {
      return neutral;
    } else {
      if ("!" === tmp) {
        const sum = _getPrototypeOf + 1;
        if ("--" === arr.slice(sum, _getPrototypeOf + 3)) {
          return comment;
        } else {
          const sum1 = _getPrototypeOf + 8;
          if ("[CDATA[" === arr.slice(sum, sum1)) {
            return cdata;
          } else {
            let obj = /doctype/i;
            if (obj.test(arr.slice(sum, sum1))) {
              return neutral;
            }
          }
        }
      }
      if ("/" === tmp) {
        return closingTag;
      } else {
        const tmp54 = getName();
        obj = {};
        obj = { tag: tmp54 };
        obj.props = obj;
        obj.children = [];
        obj.parent = obj;
        obj.Tag = arr(outer1_1[9]).tags[tmp54] || outer1_24;
        if (obj) {
          arr = children.push(obj);
        }
        if (_getPrototypeOf < length) {
          while (outer1_20.test(arr[_getPrototypeOf])) {
            let tmp12 = allowSpaces;
            let tmp13 = allowSpaces();
            let tmp14 = getName;
            let tmp15 = getName();
            if (!tmp15) {
              break;
            } else {
              let tmp16 = allowSpaces;
              let tmp17 = allowSpaces();
              let tmp18 = arr;
              let tmp19 = _getPrototypeOf;
              let flag = true;
              if ("=" === arr[_getPrototypeOf]) {
                let tmp20 = _getPrototypeOf;
                _getPrototypeOf = _getPrototypeOf + 1;
                let tmp21 = allowSpaces;
                let tmp22 = allowSpaces();
                let tmp23 = getAttributeValue;
                let str5 = getAttributeValue();
                let isNaNResult = "id" === tmp15;
                if (!isNaNResult) {
                  let _isNaN = isNaN;
                  isNaNResult = isNaN(+str5);
                }
                if (!isNaNResult) {
                  isNaNResult = "" === str5.trim();
                }
                let tmp25 = str5;
                if (!isNaNResult) {
                  tmp25 = +str5;
                }
                flag = tmp25;
              }
              let tmp26 = outer1_16;
              obj[outer1_16(tmp15)] = flag;
              let tmp27 = _getPrototypeOf;
              let tmp28 = length;
              if (_getPrototypeOf >= length) {
                break;
              }
            }
          }
        }
        const style = obj.style;
        if ("string" === typeof style) {
          obj.styles = style;
          obj.style = outer1_27(style);
        }
        let flag2 = false;
        if ("/" === arr[_getPrototypeOf]) {
          _getPrototypeOf = _getPrototypeOf + 1;
          flag2 = true;
        }
        if (">" !== arr[_getPrototypeOf]) {
          error("Expected >");
        }
        if (!flag2) {
          children = obj.children;
          arr = arr2.push(obj);
        }
        return neutral;
      }
    }
  }
  function comment() {
    const index = arr.indexOf("-->", _getPrototypeOf);
    if (!~index) {
      error("expected -->");
    }
    _getPrototypeOf = index + 2;
    return neutral;
  }
  function cdata() {
    const index = arr.indexOf("]]>", _getPrototypeOf);
    if (!~index) {
      error("expected ]]>");
    }
    arr = _null2.push(arr.slice(_getPrototypeOf + 7, index));
    _getPrototypeOf = index + 2;
    return neutral;
  }
  function closingTag() {
    const tmp = getName();
    if (!tmp) {
      error("Expected tag name");
    }
    let tmp4 = _null;
    if (_null) {
      tmp4 = tmp !== _null.tag;
    }
    if (tmp4) {
      const _HermesInternal = HermesInternal;
      error("Expected closing tag </" + tmp + "> to match opening tag <" + _null.tag + ">");
    }
    allowSpaces();
    if (">" !== arr[c6]) {
      error("Expected >");
    }
    _null = tmp15;
    if (arr2[arr2.length - 1]) {
      const children = _null.children;
    }
    return neutral;
  }
  function getName() {
    let str = "";
    if (c6 < length) {
      let tmp5 = tmp4;
      str = "";
      if (outer1_18.test(arr[c6])) {
        const text = `${tmp5}`;
        const sum = c6 + 1;
        c6 = sum;
        str = text;
        while (sum < length) {
          let tmp10 = outer1_18;
          let tmp11 = arr;
          let tmp12 = c6;
          let tmp13 = arr[c6];
          tmp5 = tmp13;
          let str2 = text;
          str = text;
          if (!outer1_18.test(tmp13)) {
            break;
          }
        }
      }
    }
    return str;
  }
  function getAttributeValue() {
    let str = "";
    if (outer1_21.test(arr[c6])) {
      c6 = +c6 + 1;
      let str3 = "";
      let str4 = "";
      if (c6 >= length) {
        let tmp19 = str4;
      } else {
        c6 = tmp17 + 1;
        tmp19 = str3;
        while (arr[+c6] !== tmp11) {
          let tmp20 = "\\" !== tmp18 || false;
          let flag = false;
          if (!tmp20) {
            flag = true;
          }
          let combined = tmp18;
          if (flag) {
            let _HermesInternal = HermesInternal;
            combined = "\\" + tmp18;
          }
          str3 = str3 + combined;
          let tmp22 = c6;
          let tmp23 = length;
          str4 = str3;
          break;
        }
      }
      let tmp4 = tmp19;
      const tmp10 = +c6;
    } else {
      tmp4 = str;
      while (" " !== arr[c6]) {
        tmp4 = str;
        if (">" === tmp3) {
          break;
        } else {
          tmp4 = str;
          if ("/" === tmp3) {
            break;
          } else {
            str = str + tmp3;
            let tmp5 = c6;
            let sum = c6 + 1;
            c6 = sum;
            let tmp7 = length;
            tmp4 = str;
            if (sum >= length) {
              break;
            }
          }
        }
      }
    }
    return tmp4;
  }
  function allowSpaces() {
    if (c6 < length) {
      if (outer1_20.test(arr[c6])) {
        const sum = c6 + 1;
        c6 = sum;
        while (sum < length) {
          let tmp7 = outer1_20;
          let tmp8 = arr;
          let tmp9 = c6;
          if (!outer1_20.test(arr[c6])) {
            break;
          }
        }
      }
    }
  }
  const length = arg0.length;
  let c3 = null;
  function metadata(arg0, arg1) {
    if (c6 + 1 < length) {
      if ("<" !== arr[c6]) {
        const sum = c6 + 1;
        c6 = sum;
        while (sum + 1 < length) {
          let tmp10 = arr;
          let tmp11 = c6;
          if ("<" !== arr[c6]) {
            continue;
          } else {
            let tmp12 = outer1_18;
            let tmp13 = arr;
            let tmp14 = c6;
            if (outer1_18.test(arr[c6 + 1])) {
              break;
            } else {
              let tmp15 = outer1_19;
              let tmp16 = arr;
              let tmp17 = c6;
              let num2 = 4;
              if (outer1_19.test(arr.slice(c6, c6 + 4))) {
                break;
              }
            }
          }
          break;
        }
      }
    }
    return neutral();
  }
  let c4 = null;
  let _possibleConstructorReturn = [];
  let c6 = 0;
  let tmp = metadata;
  if (0 < length) {
    do {
      if (!metadata) {
        let errorResult = error("Unexpected character");
      }
      metadata = metadata();
      let tmp3 = c6;
      sum = c6 + 1;
      c6 = sum;
      tmp = metadata;
    } while (sum < length);
  }
  if (tmp !== neutral) {
    error("Unexpected end of input");
  }
  if (dependencyMap) {
    let tmp7 = (arg1 ? arg1(dependencyMap) : dependencyMap) || dependencyMap;
    let children = tmp7.children;
    tmp7.children = children.map(astToReact);
    return tmp7;
  } else {
    return null;
  }
}
({ Component, useEffect: closure_9, useMemo: closure_10, useState: closure_11 } = result);
let closure_13 = error.bind(console);
let tmp4 = ((Component) => {
  class SvgFromXml {
    constructor() {
      tmp = outer1_3(this, SvgFromXml);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_22(this, SvgFromXml, items.concat(array));
      tmp3.state = { ast: null };
      return tmp3;
    }
  }
  callback4(SvgFromXml, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const parsed = this.parse(this.props.xml);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(xml) {
      const self = this;
      xml = this.props.xml;
      if (xml !== xml.xml) {
        const parsed = self.parse(xml);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "parse",
    value: function parse(arg0) {
      const self = this;
      let onError = this.props.onError;
      if (undefined === onError) {
        onError = outer1_13;
      }
      const obj = {};
      let tmp = null;
      if (arg0) {
        tmp = outer1_30(arg0);
      }
      obj.ast = tmp;
      self.setState(obj);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      const props = this.props;
      const obj = { ast: this.state.ast };
      let override = props.override;
      if (!override) {
        override = props;
      }
      obj.override = override;
      return outer1_12(outer1_25, obj);
    }
  };
  return callback2(SvgFromXml, items);
})(Component);
let closure_14 = tmp4;
function upperCase(arg0, str) {
  return str.toUpperCase();
}
function camelCase(str) {
  return str.replace(/[:-]([a-z])/g, upperCase);
}
function toSpaces(arg0) {
  return repeat("  ", arg0.length);
}
const re18 = /[a-zA-Z0-9:_-]/;
const re19 = /<!--/;
const re20 = /[\s\t\r\n]/;
const re21 = /['"]/;

export { SvgAst };
export { SvgXml };
export const SvgUri = function SvgUri(onError) {
  onError = onError.onError;
  if (undefined === onError) {
    onError = closure_13;
  }
  const uri = onError.uri;
  const onLoad = onError.onLoad;
  const fallback = onError.fallback;
  const tmp = callback5(callback8(null), 2);
  let _slicedToArray = tmp[1];
  const tmp2 = callback5(callback8(false), 2);
  const first = tmp2[0];
  let _possibleConstructorReturn = tmp2[1];
  const items = [onError, uri, onLoad];
  callback6(() => {
    if (uri) {
      const text = onError(uri[10]).fetchText(uri);
      const obj = onError(uri[10]);
      text.then((arg0) => {
        outer1_3(arg0);
        if (outer1_4) {
          outer1_5(false);
        }
        if (null != outer1_2) {
          outer1_2();
        }
      }).catch((arg0) => {
        outer1_0(arg0);
        outer1_5(true);
      });
      const nextPromise = text.then((arg0) => {
        outer1_3(arg0);
        if (outer1_4) {
          outer1_5(false);
        }
        if (null != outer1_2) {
          outer1_2();
        }
      });
    } else {
      callback(null);
    }
  }, items);
  if (first) {
    let tmp8 = null;
    if (null != fallback) {
      tmp8 = fallback;
    }
    let tmp7 = tmp8;
  } else {
    let obj = { xml: tmp[0], override: onError, fallback };
    tmp7 = <SvgXml xml={tmp[0]} override={arg0} fallback={fallback} />;
  }
  return tmp7;
};
export const SvgFromXml = tmp4;
export const SvgFromUri = ((Component) => {
  class SvgFromUri {
    constructor() {
      tmp = outer1_3(this, SvgFromUri);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_22(this, SvgFromUri, items.concat(array));
      tmp3.state = { xml: null };
      return tmp3;
    }
  }
  callback4(SvgFromUri, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const response = this.fetch(this.props.uri);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(uri) {
      const self = this;
      uri = this.props.uri;
      if (uri !== uri.uri) {
        const response = self.fetch(uri);
      }
    }
  };
  items[1] = obj;
  obj = { key: "fetch" };
  let closure_0 = callback(async function(arg0) {
    const self = this;
    const obj = {};
    let tmp = null;
    if (arg0) {
      tmp = yield callback(SvgFromUri[10]).fetchText(arg0);
      const obj2 = callback(SvgFromUri[10]);
    }
    obj.xml = tmp;
    self.setState(obj);
  });
  obj.value = function fetch(arg0) {
    return callback(...arguments);
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      const props = this.props;
      return outer1_12(outer1_14, { xml: this.state.xml, override: props, onError: props.onError });
    }
  };
  return callback2(SvgFromUri, items);
})(Component);
export { camelCase };
export { getStyle };
export { astToReact };
export const parse = _parse;
export const tags = require("Circle").tags;
