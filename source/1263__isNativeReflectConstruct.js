// Module ID: 1263
// Function ID: 14259
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 1264]
// Exports: formatToMarkdownString

// Module 1263 (_isNativeReflectConstruct)
import _classCallCheck from "_isNativeReflectConstruct";
import _defineProperties from "_defineProperties";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function formatToMarkdownString(_1Ww0Hi, arg1) {
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
  tmp = closure_7;
}
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
    return "[" + join.join("") + "](" + _slicedToArray(arg2, 1)[0] + ")";
  },
  $p(join) {
    return join.join("") + "\n\n";
  }
};
const tmp2 = ((StringBuilder) => {
  class MarkdownBuilder {
    constructor() {
      self = this;
      tmp = MarkdownBuilder(this, MarkdownBuilder);
      obj = outer1_3(MarkdownBuilder);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
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
  _inherits(MarkdownBuilder, StringBuilder);
  const items = [
    {
      key: "pushRichTextTag",
      value: function pushRichTextTag(arg0, arg1, arg2) {
        this.result = this.result + outer1_6[arg0](arg1, "", arg2);
      }
    }
  ];
  return _defineProperties(MarkdownBuilder, items);
})(require("_isNativeReflectConstruct").StringBuilder);
let closure_7 = tmp2;

export { formatToMarkdownString };
export const markdownFormatter = { format: formatToMarkdownString, builder: tmp2 };
