// Module ID: 1262
// Function ID: 14241
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: formatToAst

// Module 1262 (_isNativeReflectConstruct)
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
    bindFormatValuesResult = self.bindFormatValues(tmp2, content, arg1);
  }
  return bindFormatValuesResult;
}
let closure_1 = require(dependencyMap[0]);
let closure_2 = require(dependencyMap[1]);
let closure_3 = require(dependencyMap[2]);
let closure_4 = require(dependencyMap[3]);
let closure_5 = require(dependencyMap[4]);
let closure_6 = require(dependencyMap[5]);
let closure_7 = require(dependencyMap[6]);
const obj = {};
obj.Text = "text";
obj.Strong = "strong";
obj.Emphasis = "em";
obj.Strikethrough = "s";
obj.Code = "inlineCode";
obj.Link = "link";
obj.Paragraph = "paragraph";
let closure_8 = {
  $b(content) {
    const obj = { type: obj.Strong, content };
    return obj;
  },
  $i(content) {
    const obj = { type: obj.Emphasis, content };
    return obj;
  },
  $del(content) {
    const obj = { type: obj.Strikethrough, content };
    return obj;
  },
  $code(content) {
    const obj = { type: obj.Code, content };
    return obj;
  },
  $link(content) {
    const obj = { type: obj.Link, target: callback3(arg2, 1)[0], content };
    return obj;
  },
  $p(content) {
    const obj = { type: obj.Paragraph, content };
    return obj;
  }
};
const tmp2 = (FormatBuilder) => {
  class AstBuilder {
    constructor() {
      self = this;
      tmp = closure_2(this, AstBuilder);
      obj = closure_5(AstBuilder);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
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
  let obj = AstBuilder;
  callback2(AstBuilder, FormatBuilder);
  obj = {
    key: "pushRichTextTag",
    value: function pushRichTextTag(arg0, arg1, arg2) {
      if (arg0 in closure_8) {
        const tmp5 = closure_8[arg0](arg1, "", arg2);
        const _Array = Array;
        const self = this;
        const result = this.result;
        const push = result.push;
        if (Array.isArray(tmp5)) {
          push.apply(result, callback(tmp5));
        } else {
          push(tmp5);
        }
      } else {
        const _HermesInternal = HermesInternal;
        throw "" + arg0 + " is not a known rich text formatting tag";
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "pushLiteralText",
    value: function pushLiteralText(content) {
      const tmp = this.result[this.result.length - 1];
      if (null != tmp) {
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
  return callback(AstBuilder, items);
}(require(dependencyMap[7]).FormatBuilder);

export { formatToAst };
export const RichTextNodeType = obj;
export const astFormatter = { format: formatToAst, builder: tmp2 };
