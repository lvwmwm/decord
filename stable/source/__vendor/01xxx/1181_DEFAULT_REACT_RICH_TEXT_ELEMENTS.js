// Module ID: 1181
// Function ID: 1182
// Name: DEFAULT_REACT_RICH_TEXT_ELEMENTS
// Dependencies: [41, 42, 93, 95, 98, 19, 1170]
// Exports: makeReactFormatter

// Module 1181 (DEFAULT_REACT_RICH_TEXT_ELEMENTS)
import react from "react" /* 19 */;
import FormatBuilder from "FormatBuilder" /* 1170 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const require = globalThis.__r;

let _class;
let items;
function pushRichTextTag(arg0, arg1, arg2) {
  const result = this.result;
  this._nodeKey = +this._nodeKey + 1;
  result.push(closure_0[arg0](arg1, "" + this.context.keyPrefix + ".tag-" + +this._nodeKey, arg2));
}
function pushLiteralText(arg0) {
  const self = this;
  if (typeof this.result[this.result.length - 1] === "string") {
    const result = self.result;
    const diff = self.result.length - 1;
    result[diff] = result[diff] + arg0;
  } else {
    const result1 = self.result;
    result1.push(arg0);
  }
}
function pushObject(arg0) {
  const result = this.result;
  result.push(arg0);
}
function finish() {
  return this.result;
}
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
function formatReact(str, arg1, arg2) {
  let bindFormatValuesResult = str;
  if (typeof str !== "string") {
    const self = this;
    bindFormatValuesResult = this.bindFormatValues(arg2, str, arg1);
  }
  return bindFormatValuesResult;
}
const createElement = react.createElement;
let obj = { format: formatReact, builder: _createClass(_class, items) };
let _require = exports.DEFAULT_REACT_RICH_TEXT_ELEMENTS;
_class = function _class() {
  let constructResult;
  const self = this;
  _classCallCheck(this, _class);
  const obj = _getPrototypeOf(_class);
  const tmp2 = _getPrototypeOf;
  const tmp3 = _possibleConstructorReturn;
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
  } else {
    constructResult = obj(...arguments);
  }
  const tmp3Result = tmp3(self, constructResult);
  tmp3Result._nodeKey = 0;
  tmp3Result.result = [];
  return tmp3Result;
};
_inherits(_class, FormatBuilder.FormatBuilder);
let entry = { key: "pushRichTextTag", value: pushRichTextTag };
items = [entry, { key: "pushLiteralText", value: pushLiteralText }, { key: "pushObject", value: pushObject }, { key: "finish", value: finish }];

export { formatReact };
export const makeReactFormatter = function makeReactFormatter(arg0) {
  let _class;
  let closure_0;
  let items;
  let obj = { format: formatReact, builder: _createClass(_class, items) };
  _require = arg0;
  _class = function _class() {
    let constructResult;
    const self = this;
    _classCallCheck(this, _class);
    const obj = _getPrototypeOf(_class);
    const tmp2 = _getPrototypeOf;
    const tmp3 = _possibleConstructorReturn;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result._nodeKey = 0;
    tmp3Result.result = [];
    return tmp3Result;
  };
  _inherits(_class, require("FormatBuilder").FormatBuilder);
  const entry = { key: "pushRichTextTag", value: pushRichTextTag };
  items = [entry, { key: "pushLiteralText", value: pushLiteralText }, { key: "pushObject", value: pushObject }, { key: "finish", value: finish }];
  return obj;
};
export const DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
  $b(arg0, key) {
    return <strong key={arg1}>{arg0}</strong>;
  },
  $i(arg0, key) {
    return <em key={arg1}>{arg0}</em>;
  },
  $del(arg0, key) {
    return <del key={arg1}>{arg0}</del>;
  },
  $code(arg0, key) {
    return <code key={arg1}>{arg0}</code>;
  },
  $link(arg0, key, arg2) {
    let tmp;
    [tmp] = arg2;
    return <a href={tmp} key={arg1}>{arg0}</a>;
  },
  $p(arg0, key) {
    return <p key={arg1}>{arg0}</p>;
  }
};
export const reactFormatter = obj;
