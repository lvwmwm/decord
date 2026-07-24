// Module ID: 1262
// Function ID: 14243
// Name: _isNativeReflectConstruct
// Dependencies: [65, 6, 7, 15, 17, 18, 57, 1254]
// Exports: formatToAst

// Module 1262 (_isNativeReflectConstruct)
import _toConsumableArray from "_toConsumableArray";
import _classCallCheck from "_slicedToArray";
import _defineProperties from "_isNativeReflectConstruct";
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
function formatToAst(content) {
  const self = this;
  if ("string" === typeof content) {
    const obj = {};
    obj.type = obj.Text;
    obj.content = content;
    const items = [obj];
    let bindFormatValuesResult = items;
  } else {
    bindFormatValuesResult = self.bindFormatValues(closure_9, content, arg1);
  }
  return bindFormatValuesResult;
}
let obj = {};
obj.Text = "text";
obj.Strong = "strong";
obj.Emphasis = "em";
obj.Strikethrough = "s";
obj.Code = "inlineCode";
obj.Link = "link";
obj.Paragraph = "paragraph";
let closure_8 = {
  $b(content) {
    obj = { type: obj.Strong, content };
    return obj;
  },
  $i(content) {
    obj = { type: obj.Emphasis, content };
    return obj;
  },
  $del(content) {
    obj = { type: obj.Strikethrough, content };
    return obj;
  },
  $code(content) {
    obj = { type: obj.Code, content };
    return obj;
  },
  $link(content) {
    obj = { type: obj.Link, target: _slicedToArray(arg2, 1)[0], content };
    return obj;
  },
  $p(content) {
    obj = { type: obj.Paragraph, content };
    return obj;
  }
};
const tmp2 = ((FormatBuilder) => {
  class AstBuilder {
    constructor() {
      self = this;
      tmp = outer1_2(this, AstBuilder);
      obj = outer1_5(AstBuilder);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.result = [];
      return tmp2Result;
    }
  }
  _inherits(AstBuilder, FormatBuilder);
  let obj = {
    key: "pushRichTextTag",
    value: function pushRichTextTag(formatting) {
      if (formatting in outer1_8) {
        const tmp5 = outer1_8[formatting](arg1, "", arg2);
        const _Array = Array;
        const self = this;
        const result = this.result;
        const push = result.push;
        if (Array.isArray(tmp5)) {
          push.apply(result, outer1_1(tmp5));
        } else {
          push(tmp5);
        }
      } else {
        const _HermesInternal = HermesInternal;
        throw "" + formatting + " is not a known rich text formatting tag";
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "pushLiteralText",
    value: function pushLiteralText(content) {
      if (null != this.result[this.result.length - 1]) {
        if (tmp.type === AstBuilder.Text) {
          tmp.content = tmp.content + content;
        }
      }
      const result = this.result;
      result.push({ type: AstBuilder.Text, content });
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
  return _defineProperties(AstBuilder, items);
})(require("_isNativeReflectConstruct").FormatBuilder);
let closure_9 = tmp2;

export { formatToAst };
export const RichTextNodeType = obj;
export const astFormatter = { format: formatToAst, builder: tmp2 };
