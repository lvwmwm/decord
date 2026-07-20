// Module ID: 1263
// Function ID: 14254
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: formatToMarkdownString

// Module 1263 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function formatToMarkdownString(1Ww0Hi, arg1) {
  const self = this;
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let tmp = arguments[2];
    }
    let first = _1Ww0Hi;
    if ("string" !== typeof _1Ww0Hi) {
      first = self.bindFormatValues(tmp, _1Ww0Hi, arg1)[0];
    }
    return first;
  }
  tmp = tmp2;
}
let closure_0 = require(dependencyMap[0]);
let closure_1 = require(dependencyMap[1]);
let closure_2 = require(dependencyMap[2]);
let closure_3 = require(dependencyMap[3]);
let closure_4 = require(dependencyMap[4]);
let closure_5 = require(dependencyMap[5]);
let closure_6 = {
  $b(join) {
    return "**" + join.join("") + "**";
  },
  $i(join) {
    return "*" + join.join("") + "*";
  },
  $del(join) {
    return "~~" + join.join("") + "~~";
  },
  $code(join) {
    return "`" + join.join("") + "`";
  },
  $link(join) {
    return "[" + join.join("") + "](" + callback3(arg2, 1)[0] + ")";
  },
  $p(join) {
    return join.join("") + "\n\n";
  }
};
const tmp2 = (StringBuilder) => {
  class MarkdownBuilder {
    constructor() {
      self = this;
      tmp = MarkdownBuilder(this, MarkdownBuilder);
      obj = closure_3(MarkdownBuilder);
      tmp2 = closure_2;
      if (closure_8()) {
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
  let closure_0 = MarkdownBuilder;
  callback2(MarkdownBuilder, StringBuilder);
  const items = [
    {
      key: "pushRichTextTag",
      value: function pushRichTextTag(arg0, arg1, arg2) {
        this.result = this.result + closure_6[arg0](arg1, "", arg2);
      }
    }
  ];
  return callback(MarkdownBuilder, items);
}(require(dependencyMap[6]).StringBuilder);

export { formatToMarkdownString };
export const markdownFormatter = { format: formatToMarkdownString, builder: tmp2 };
