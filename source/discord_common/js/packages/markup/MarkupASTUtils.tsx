// Module ID: 7669
// Function ID: 61269
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: astToString

// Module 7669 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function collectAst(content, items) {
  if (items === undefined) {
    items = [];
  }
  let closure_0 = items;
  if (Array.isArray(content)) {
    const item = content.forEach((arg0) => callback(arg0, items));
  } else if ("string" === typeof content.content) {
    items.push(content.content);
  } else if (null != content.content) {
    collectAst(content.content, items);
  }
  return items;
}
function collapseArrays(items, arg1) {
  if (Array.isArray(arg1)) {
    for (let num = 0; num < length; num = num + 1) {
      let arr = items.push(arg1[num]);
    }
    const length = arg1.length;
  } else {
    items.push(arg1);
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = {};
const tmp2 = (arg0) => {
  class MarkupParserNodeTypeError {
    constructor(arg0) {
      self = this;
      obj = MarkupParserNodeTypeError;
      tmp = MarkupParserNodeTypeError(this, MarkupParserNodeTypeError);
      set = new Set();
      items = [];
      items[0] = arg0;
      if (items.length > 0) {
        do {
          arr = items.pop();
          if (undefined !== arr) {
            _Array3 = Array;
            if (Array.isArray(arr)) {
              push3 = items.push;
              items1 = [];
              tmp18 = items1;
              tmp19 = arr;
              num3 = 0;
              arraySpreadResult = HermesBuiltin.arraySpread(arr, 0);
              tmp21 = push3;
              tmp22 = items1;
              tmp23 = items;
              applyResult = HermesBuiltin.apply(items1, items);
            } else {
              addResult = set.add(arr.type);
              isArray = "content" in arr;
              if (isArray) {
                _Array = Array;
                isArray = Array.isArray(arr.content);
              }
              if (isArray) {
                push = items.push;
                items2 = [];
                tmp5 = items2;
                num = 0;
                arraySpreadResult1 = HermesBuiltin.arraySpread(arr.content, 0);
                tmp7 = push;
                tmp8 = items2;
                tmp9 = items;
                applyResult1 = HermesBuiltin.apply(items2, items);
              }
              isArray1 = "items" in arr;
              if (isArray1) {
                _Array2 = Array;
                isArray1 = Array.isArray(arr.items);
              }
              if (isArray1) {
                push2 = items.push;
                items3 = [];
                tmp12 = items3;
                num2 = 0;
                arraySpreadResult2 = HermesBuiltin.arraySpread(arr.items, 0);
                tmp14 = push2;
                tmp15 = items3;
                tmp16 = items;
                applyResult2 = HermesBuiltin.apply(items3, items);
              }
            }
          }
        } while (items.length > 0);
      }
      arr1 = Array.from(set);
      items4 = [];
      items4[0] = obj.getMessage(arr1);
      obj3 = closure_3(obj);
      tmp26 = closure_2;
      if (closure_6()) {
        _Reflect = Reflect;
        tmp28 = closure_3;
        constructResult = Reflect.construct(obj3, items4, closure_3(self).constructor);
      } else {
        constructResult = obj3.apply(self, items4);
      }
      tmp26Result = tmp26(self, constructResult);
      tmp26Result.nodeTypes = arr1;
      return tmp26Result;
    }
  }
  let closure_0 = MarkupParserNodeTypeError;
  callback2(MarkupParserNodeTypeError, arg0);
  const items = [
    {
      key: "getMessage",
      value(join) {
        return "MarkupParserNodeTypeError: Unknown AST node type in \"" + join.join(", ") + "\" caused rendering failure";
      }
    }
  ];
  return callback(MarkupParserNodeTypeError, null, items);
}(importDefault(dependencyMap[5])(Error));
const result = arg1(dependencyMap[6]).fileFinishedImporting("../discord_common/js/packages/markup/MarkupASTUtils.tsx");
function walkAst(content, arg1) {
  let done;
  if (Array.isArray(content)) {
    const tmp8 = _createForOfIteratorHelperLoose(content);
    let iter = tmp8();
    if (!iter.done) {
      do {
        let tmp9 = closure_11;
        let tmp10 = closure_11(iter.value, arg1);
        let iter2 = tmp8();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  } else {
    arg1(content, null);
    const _Array = Array;
    if (Array.isArray(content.content)) {
      walkAst(content.content, arg1);
    }
    if ("list" === content.type) {
      walkAst(content.items, arg1);
    }
  }
}
function flattenAst(isSlate, content, content) {
  let tmp = content;
  let closure_0 = isSlate;
  if (content === undefined) {
    tmp = null;
  }
  if (Array.isArray(content)) {
    const items = [];
    for (let num2 = 0; num2 < length; num2 = num2 + 1) {
      let tmp4 = collapseArrays;
      let tmp5 = flattenAst;
      let tmp6 = collapseArrays(items, flattenAst(isSlate, content[num2], tmp));
    }
    if (!isSlate.isSlate) {
      let tmp8 = null;
      let num4 = 0;
      if (0 < items.length) {
        do {
          let tmp9 = items[num4];
          let tmp10 = tmp9;
          let diff = num4;
          if (null != tmp8) {
            tmp10 = tmp9;
            diff = num4;
            if ("text" === tmp8.type) {
              tmp10 = tmp9;
              diff = num4;
              if (tmp8.type === tmp9.type) {
                tmp10 = tmp9;
                diff = num4;
                if ("string" === typeof tmp8.content) {
                  tmp10 = tmp9;
                  diff = num4;
                  if ("string" === typeof tmp9.content) {
                    tmp8.content = tmp8.content + tmp9.content;
                    let spliceResult = items.splice(num4, 1);
                    diff = num4 - 1;
                    tmp10 = tmp8;
                  }
                }
              }
            }
          }
          num4 = diff + 1;
          tmp8 = tmp10;
        } while (num4 < items.length);
      }
    }
    return items;
  } else {
    if (null != content.content) {
      content.content = flattenAst(isSlate, content.content, content);
    }
    if ("inlineCode" === content.type) {
      delete r8.validationChildContent;
    }
    if ("list" === content.type) {
      const items1 = content.items;
      content.items = items1.map((arg0) => {
        let tmp = arg0;
        if (Array.isArray(arg0)) {
          tmp = callback(arg0, arg0, null);
        }
        return tmp;
      });
    }
    if (null != tmp) {
      if (content.type === tmp.type) {
        content = content.content;
      }
    }
    return content;
  }
}
function constrainAst(content, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033995391321045464, "Bool(false)": 9126805507 };
  }
  let closure_0 = obj;
  if (Array.isArray(content)) {
    let num = 0;
    if (0 < content.length) {
      const ast = constrainAst(content[num], obj).ast;
      while (ast !== closure_5) {
        content[num] = ast;
        num = num + 1;
      }
      obj.hasBailedAst = true;
      content.length = num;
    }
  } else if ("text" !== content.type) {
    obj.limit = obj.limit - 1;
    if (obj.limit <= 0) {
      obj.hasBailedAst = true;
      obj = { ast: closure_5, hasBailedAst: true };
      return obj;
    } else {
      const _Array = Array;
      if (Array.isArray(content.content)) {
        content.content = constrainAst(content.content, obj).ast;
      }
      if ("list" === content.type) {
        const items = content.items;
        content.items = items.map((arg0) => callback(arg0, obj).ast);
      }
    }
  }
  obj = { ast: content };
  obj.hasBailedAst = obj.hasBailedAst;
  return obj;
}
function getIndexedAST(arr) {
  let closure_0 = arr;
  let closure_1 = arg1;
  let closure_2 = 0;
  return arr.map((type) => {
    let num = 0;
    if (0 !== closure_2) {
      num = type[closure_2 - 1].endIndex;
    }
    closure_2 = closure_2 + 1;
    type = type.type;
    if ("spoiler" !== type) {
      if ("u" !== type) {
        if ("s" !== type) {
          if ("strong" !== type) {
            if ("em" !== type) {
              if ("customEmoji" !== type) {
                if ("emoji" !== type) {
                  if ("inlineCode" !== type) {
                    if ("text" === type) {
                      type.startIndex = arg1 + num;
                      type.endIndex = type.startIndex + type.content.length;
                      return type;
                    } else {
                      type.startIndex = arg1 + num;
                      const arr = callback(type.content, type.startIndex);
                      type.endIndex = arr[arr.length - 1].endIndex;
                      return type;
                    }
                  }
                }
              }
            }
            type.startIndex = arg1 + num;
            const arr2 = callback(type.content, type.startIndex + 1);
            type.endIndex = arr2[arr2.length - 1].endIndex + 1;
            return type;
          }
        }
      }
    }
    type.startIndex = arg1 + num;
    const arr3 = callback(type.content, type.startIndex + 2);
    type.endIndex = arr3[arr3.length - 1].endIndex + 2;
    return type;
  });
}

export const NUM_MAX_AST_NODES = 200;
export { walkAst };
export const astToString = function astToString(intl) {
  return collectAst(intl).join("");
};
export { flattenAst };
export { constrainAst };
export { getIndexedAST };
export const MarkupParserNodeTypeError = tmp2;
