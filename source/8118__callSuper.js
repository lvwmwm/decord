// Module ID: 8118
// Function ID: 64269
// Name: _callSuper
// Dependencies: []
// Exports: SvgUri

// Module 8118 (_callSuper)
let Component;
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
  return closure_5(arg0, constructResult);
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
      tmp2 = arg1;
      tmp3 = dependencyMap;
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
      return jsx(arg1(dependencyMap[9]).tags.svg, Object.assign({}, props, override, obj));
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
    arg1 = xml;
    ({ override, fallback } = tmp);
    items = [];
    items[0] = xml;
    obj = {
      ast: useMemo(() => {
            let tmp = null;
            if (null !== xml) {
              tmp = callback(xml);
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
      delete r6.class;
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
  arg1 = arg0;
  function error(arg0) {
    const parts = arg0.split("\n");
    let diff = closure_6;
    let num = 0;
    let tmp3 = closure_6;
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
    const match = obj.exec(arg0.slice(0, closure_6).replace(/^\t+/, closure_17));
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
    obj.snippet = "" + str2 + first + "\n" + callback3(" ", str2.length) + "^";
    const error = new Error("" + arg0 + " (" + obj.line + ":" + obj.column + "). If this is valid SVG, it's probably a bug. Please raise an issue\n\n" + obj.snippet);
    throw error;
  }
  let closure_7 = error;
  function neutral() {
    let str = "";
    if (closure_6 < length) {
      str = "";
      if ("<" !== arg0[closure_6]) {
        const text = `${tmp3}`;
        const sum = closure_6 + 1;
        closure_6 = sum;
        str = text;
        while (sum < length) {
          let tmp8 = arg0;
          let tmp9 = closure_6;
          let str3 = text;
          str = text;
          if ("<" === arg0[closure_6]) {
            break;
          }
        }
      }
    }
    if (obj.test(str)) {
      const arr = arr.push(str);
    }
    return "<" === arg0[closure_6] ? openingTag : neutral;
  }
  let closure_8 = neutral;
  function openingTag() {
    if ("?" === arg0[closure_6]) {
      return neutral;
    } else {
      if ("!" === tmp) {
        const sum = closure_6 + 1;
        if ("--" === arg0.slice(sum, closure_6 + 3)) {
          return comment;
        } else {
          const sum1 = closure_6 + 8;
          if ("[CDATA[" === arg0.slice(sum, sum1)) {
            return cdata;
          } else {
            let obj = /doctype/i;
            if (obj.test(arg0.slice(sum, sum1))) {
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
        obj.parent = closure_3;
        obj.Tag = arg0(obj[9]).tags[tmp54] || closure_24;
        if (closure_3) {
          let arr = arr.push(obj);
        }
        if (closure_6 < length) {
          while (regex3.test(arg0[closure_6])) {
            let tmp12 = allowSpaces;
            let tmp13 = allowSpaces();
            let tmp14 = getName;
            let tmp15 = getName();
            if (!tmp15) {
              break;
            } else {
              let tmp16 = allowSpaces;
              let tmp17 = allowSpaces();
              let tmp18 = arg0;
              let tmp19 = closure_6;
              let flag = true;
              if ("=" === arg0[closure_6]) {
                let tmp20 = closure_6;
                closure_6 = closure_6 + 1;
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
              let tmp26 = callback;
              obj[callback(tmp15)] = flag;
              let tmp27 = closure_6;
              let tmp28 = length;
              if (closure_6 >= length) {
                break;
              }
            }
          }
        }
        const style = obj.style;
        if ("string" === typeof style) {
          obj.styles = style;
          obj.style = callback2(style);
        }
        let flag2 = false;
        if ("/" === arg0[closure_6]) {
          closure_6 = closure_6 + 1;
          flag2 = true;
        }
        if (">" !== arg0[closure_6]) {
          error("Expected >");
        }
        if (!flag2) {
          closure_3 = obj;
          arr = obj.children;
          arr = arr2.push(obj);
        }
        return neutral;
      }
    }
  }
  function comment(arg0) {
    const index = arg0.indexOf("-->", closure_6);
    if (!~index) {
      error("expected -->");
    }
    closure_6 = index + 2;
    return neutral;
  }
  function cdata(self) {
    const index = self.indexOf("]]>", closure_6);
    if (!~index) {
      error("expected ]]>");
    }
    closure_6 = index + 2;
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
    if (">" !== arg0[closure_6]) {
      error("Expected >");
    }
    arr2.pop();
    const _null = tmp15;
    if (arr2[closure_5.length - 1]) {
      const children = _null.children;
    }
    return neutral;
  }
  function getName() {
    let str = "";
    if (closure_6 < length) {
      let tmp5 = tmp4;
      str = "";
      if (regex.test(arg0[closure_6])) {
        const text = `${tmp5}`;
        const sum = closure_6 + 1;
        closure_6 = sum;
        str = text;
        while (sum < length) {
          let tmp10 = regex;
          let tmp11 = arg0;
          let tmp12 = closure_6;
          let tmp13 = arg0[closure_6];
          tmp5 = tmp13;
          let str2 = text;
          str = text;
          if (!regex.test(tmp13)) {
            break;
          }
        }
      }
    }
    return str;
  }
  function getAttributeValue() {
    let str = "";
    if (regex4.test(arg0[closure_6])) {
      closure_6 = +closure_6 + 1;
      let str3 = "";
      let str4 = "";
      if (closure_6 >= length) {
        let tmp19 = str4;
      } else {
        closure_6 = tmp17 + 1;
        tmp19 = str3;
        while (arg0[+closure_6] !== tmp11) {
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
          let tmp22 = closure_6;
          let tmp23 = length;
          str4 = str3;
          break;
        }
      }
      let tmp4 = tmp19;
      const tmp10 = +closure_6;
    } else {
      tmp4 = str;
      while (" " !== arg0[closure_6]) {
        tmp4 = str;
        if (">" === tmp3) {
          break;
        } else {
          tmp4 = str;
          if ("/" === tmp3) {
            break;
          } else {
            str = str + tmp3;
            let tmp5 = closure_6;
            let sum = closure_6 + 1;
            closure_6 = sum;
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
    if (closure_6 < length) {
      if (regex3.test(arg0[closure_6])) {
        const sum = closure_6 + 1;
        closure_6 = sum;
        while (sum < length) {
          let tmp7 = regex3;
          let tmp8 = arg0;
          let tmp9 = closure_6;
          if (!regex3.test(arg0[closure_6])) {
            break;
          }
        }
      }
    }
  }
  let closure_2 = length;
  let closure_3 = null;
  function metadata(arg0, arg1) {
    if (closure_6 + 1 < length) {
      if ("<" !== arg0[closure_6]) {
        const sum = closure_6 + 1;
        closure_6 = sum;
        while (sum + 1 < length) {
          let tmp10 = arg0;
          let tmp11 = closure_6;
          if ("<" !== arg0[closure_6]) {
            continue;
          } else {
            let tmp12 = regex;
            let tmp13 = arg0;
            let tmp14 = closure_6;
            if (regex.test(arg0[closure_6 + 1])) {
              break;
            } else {
              let tmp15 = regex2;
              let tmp16 = arg0;
              let tmp17 = closure_6;
              let num2 = 4;
              if (regex2.test(arg0.slice(closure_6, closure_6 + 4))) {
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
  let closure_4 = null;
  let closure_5 = [];
  let closure_6 = 0;
  let tmp = metadata;
  if (0 < arg0.length) {
    do {
      if (!metadata) {
        let errorResult = error("Unexpected character");
      }
      metadata = metadata();
      let tmp3 = closure_6;
      sum = closure_6 + 1;
      closure_6 = sum;
      tmp = metadata;
    } while (sum < length);
  }
  if (tmp !== neutral) {
    error("Unexpected end of input");
  }
  if (dependencyMap) {
    const tmp7 = arg1 ? arg1(dependencyMap) : dependencyMap || dependencyMap;
    const children = tmp7.children;
    tmp7.children = children.map(astToReact);
    return tmp7;
  } else {
    return null;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
importAll(dependencyMap[7]);
({ Component, useEffect: closure_9, useMemo: closure_10, useState: closure_11 } = arg1(dependencyMap[7]));
const jsx = arg1(dependencyMap[8]).jsx;
let closure_13 = error.bind(console);
const tmp4 = (Component) => {
  class SvgFromXml {
    constructor() {
      tmp = closure_3(this, SvgFromXml);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, SvgFromXml, items.concat(array));
      tmp3.state = { ast: null };
      return tmp3;
    }
  }
  const arg1 = SvgFromXml;
  callback4(SvgFromXml, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const parsed = this.parse(this.props.xml);
    }
  };
  const items = [obj, , , ];
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
        onError = closure_13;
      }
      const obj = {};
      let tmp = null;
      if (arg0) {
        tmp = callback3(arg0);
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
      return closure_12(closure_25, obj);
    }
  };
  return callback2(SvgFromXml, items);
}(Component);
function upperCase(arg0, str) {
  return str.toUpperCase();
}
function camelCase(str) {
  return str.replace(/[:-]([a-z])/g, upperCase);
}
function toSpaces(arg0) {
  return repeat("  ", arg0.length);
}
let closure_18 = /[a-zA-Z0-9:_-]/;
let closure_19 = /<!--/;
let closure_20 = /[\s\t\r\n]/;
let closure_21 = /['"]/;

export { SvgAst };
export { SvgXml };
export const SvgUri = function SvgUri(onError) {
  onError = onError.onError;
  if (undefined === onError) {
    onError = closure_13;
  }
  const arg1 = onError;
  const uri = onError.uri;
  const dependencyMap = uri;
  const onLoad = onError.onLoad;
  let closure_2 = onLoad;
  const fallback = onError.fallback;
  const tmp = callback5(callback8(null), 2);
  let closure_3 = tmp[1];
  const tmp2 = callback5(callback8(false), 2);
  const first = tmp2[0];
  let closure_4 = first;
  let closure_5 = tmp2[1];
  const items = [onError, uri, onLoad];
  callback6(() => {
    if (uri) {
      const text = onError(uri[10]).fetchText(uri);
      const obj = onError(uri[10]);
      text.then((arg0) => {
        callback3(arg0);
        if (closure_4) {
          callback4(false);
        }
        if (null != callback2) {
          callback2();
        }
      }).catch((arg0) => {
        callback(arg0);
        callback4(true);
      });
      const nextPromise = text.then((arg0) => {
        callback3(arg0);
        if (closure_4) {
          callback4(false);
        }
        if (null != callback2) {
          callback2();
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
    const obj = { xml: tmp[0], override: onError, fallback };
    tmp7 = <SvgXml {...obj} />;
  }
  return tmp7;
};
export const SvgFromXml = tmp4;
export const SvgFromUri = (Component) => {
  class SvgFromUri {
    constructor() {
      tmp = closure_3(this, SvgFromUri);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_22(this, SvgFromUri, items.concat(array));
      tmp3.state = { xml: null };
      return tmp3;
    }
  }
  const dependencyMap = SvgFromUri;
  callback4(SvgFromUri, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const response = this.fetch(this.props.uri);
    }
  };
  const items = [obj, , , ];
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
      tmp = yield callback(closure_1[10]).fetchText(arg0);
      const obj2 = callback(closure_1[10]);
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
      return callback3(closure_14, { xml: this.state.xml, override: props, onError: props.onError });
    }
  };
  return callback2(SvgFromUri, items);
}(Component);
export { camelCase };
export { getStyle };
export { astToReact };
export const parse = _parse;
export const tags = arg1(dependencyMap[9]).tags;
