// Module ID: 1264
// Function ID: 14272
// Name: _isNativeReflectConstruct
// Dependencies: [2080374834, 1744830514, 2097152029, 2969567282, 2986344498, 3170893874]
// Exports: formatToPlainString

// Module 1264 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function formatToPlainString(FNtLb3, maxSettingsForPreset) {
  const self = this;
  let first = FNtLb3;
  if ("string" !== typeof FNtLb3) {
    first = self.bindFormatValues(tmp2, FNtLb3, maxSettingsForPreset)[0];
  }
  return first;
}
let closure_0 = require(dependencyMap[0]);
let closure_1 = require(dependencyMap[1]);
let closure_2 = require(dependencyMap[2]);
let closure_3 = require(dependencyMap[3]);
let closure_4 = require(dependencyMap[4]);
const tmp2 = (FormatBuilder) => {
  class StringBuilder {
    constructor() {
      self = this;
      tmp = StringBuilder(this, StringBuilder);
      obj = closure_3(StringBuilder);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.result = "";
      return tmp2Result;
    }
  }
  let closure_0 = StringBuilder;
  callback2(StringBuilder, FormatBuilder);
  let obj = {
    key: "pushRichTextTag",
    value: function pushRichTextTag(arg0, items) {
      const self = this;
      for (const item10004 of arg1) {
        self.result = self.result + item10004;
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "pushLiteralText",
    value: function pushLiteralText(arg0) {
      this.result = this.result + arg0;
    }
  };
  items[1] = obj;
  obj = {
    key: "pushObject",
    value: function pushObject(arg0) {
      const self = this;
      let tmp = null != arg0;
      if (tmp) {
        tmp = "toString" in arg0;
      }
      if (tmp) {
        self.result = self.result + arg0.toString();
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "finish",
    value: function finish() {
      const items = [this.result];
      return items;
    }
  };
  return callback(StringBuilder, items);
}(require(dependencyMap[5]).FormatBuilder);

export { formatToPlainString };
export const StringBuilder = tmp2;
export const stringFormatter = { format: formatToPlainString, builder: tmp2 };
