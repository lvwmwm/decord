// Module ID: 1265
// Function ID: 14279
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: makeReactFormatter

// Module 1265 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function createReactBuilder(DEFAULT_REACT_RICH_TEXT_ELEMENTS) {
  const require = DEFAULT_REACT_RICH_TEXT_ELEMENTS;
  return (FormatBuilder) => {
    function _class() {
      const self = this;
      callback(this, _class);
      const obj = callback2(_class);
      if (callback3()) {
        const _Reflect = Reflect;
        let constructResult = Reflect.construct(obj, arguments, callback2(self).constructor);
      } else {
        constructResult = obj(...arguments);
      }
      const tmp2Result = closure_4(self, constructResult);
      tmp2Result._nodeKey = 0;
      tmp2Result.result = [];
      return tmp2Result;
    }
    FormatBuilder = _class;
    callback2(_class, FormatBuilder);
    let obj = {
      key: "pushRichTextTag",
      value: function pushRichTextTag(arg0, arg1, arg2) {
        const result = this.result;
        const tmp = +this._nodeKey;
        this._nodeKey = tmp + 1;
        result.push(_class[arg0](arg1, "" + this.context.keyPrefix + ".tag-" + tmp, arg2));
      }
    };
    const items = [obj, , , ];
    obj = {
      key: "pushLiteralText",
      value: function pushLiteralText(arg0) {
        const self = this;
        if ("string" === typeof this.result[this.result.length - 1]) {
          let result = self.result;
          const diff = self.result.length - 1;
          result[diff] = result[diff] + arg0;
        } else {
          result = self.result;
          result.push(arg0);
        }
      }
    };
    items[1] = obj;
    obj = {
      key: "pushObject",
      value: function pushObject(arg0) {
        const result = this.result;
        result.push(arg0);
      }
    };
    items[2] = obj;
    items[3] = {
      key: "finish",
      value: function finish() {
        return this.result;
      }
    };
    return callback(_class, items);
  }(require(dependencyMap[7]).FormatBuilder);
}
function formatReact(arg0, arg1, arg2) {
  const self = this;
  let bindFormatValuesResult = arg0;
  if ("string" !== typeof arg0) {
    bindFormatValuesResult = self.bindFormatValues(arg2, arg0, arg1);
  }
  return bindFormatValuesResult;
}
function makeReactFormatter(DEFAULT_REACT_RICH_TEXT_ELEMENTS) {
  return { format: formatReact, builder: createReactBuilder(DEFAULT_REACT_RICH_TEXT_ELEMENTS) };
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
let closure_5 = require(dependencyMap[3]);
let closure_6 = require(dependencyMap[4]);
let closure_7 = require(dependencyMap[5]);
const createElement = require(dependencyMap[6]).createElement;

export { formatReact };
export { makeReactFormatter };
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
  $link(arg0, key) {
    return <a href={callback(arg2, 1)[0]} key={arg1}>{arg0}</a>;
  },
  $p(arg0, key) {
    return <p key={arg1}>{arg0}</p>;
  }
};
export const reactFormatter = makeReactFormatter(exports.DEFAULT_REACT_RICH_TEXT_ELEMENTS);
