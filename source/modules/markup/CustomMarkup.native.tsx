// Module ID: 4558
// Function ID: 39930
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getNotifCenterV2MessagePreviewParser, getParser, getParserWithoutLinks, getWidgetMessageRules

// Module 4558 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
function createRules(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const tmp = importDefault(dependencyMap[1])(arg0, obj);
  const items = [importDefault(dependencyMap[3]).defaultRules, tmp, ];
  obj = {};
  obj = {};
  const merged = Object.assign(importDefault(dependencyMap[4]).defaultRules.link);
  obj["react"] = tmp[closure_0(undefined, closure_2[0]).AST_KEY.LINK].react;
  obj[require(dependencyMap[0]).AST_KEY.LINK] = obj;
  const obj1 = {};
  const merged1 = Object.assign(importDefault(dependencyMap[4]).defaultRules.url);
  obj1["react"] = tmp[closure_0(undefined, closure_2[0]).AST_KEY.URL].react;
  obj[require(dependencyMap[0]).AST_KEY.URL] = obj1;
  const obj2 = {};
  const merged2 = Object.assign(importDefault(dependencyMap[4]).defaultRules.autolink);
  obj2["react"] = tmp[closure_0(undefined, closure_2[0]).AST_KEY.AUTOLINK].react;
  obj[require(dependencyMap[0]).AST_KEY.AUTOLINK] = obj2;
  const obj3 = {};
  const merged3 = Object.assign(importDefault(dependencyMap[4]).defaultRules.blockQuote);
  obj3["react"] = tmp[closure_0(undefined, closure_2[0]).AST_KEY.BLOCK_QUOTE].react;
  obj[require(dependencyMap[0]).AST_KEY.BLOCK_QUOTE] = obj3;
  items[2] = obj;
  return importDefault(dependencyMap[2])(items);
}
function createRulesWithoutLinks(arg0, arg1) {
  let done;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  obj = {};
  const merged = Object.assign(createRules(arg0, obj));
  const tmp2 = _createForOfIteratorHelperLoose(items);
  let iter = tmp2();
  if (!iter.done) {
    do {
      let value = iter.value;
      delete r0[r1];
      let iter2 = tmp2();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return obj;
}
function createNotifCenterV2MessagePreviewRules(closure_28, closure_28, roleStyle) {
  const tmp = importDefault(dependencyMap[1])(closure_28, closure_28, roleStyle);
  const items = [importDefault(dependencyMap[3]).notifCenterV2MessagePreviewRules, ];
  let obj = {};
  obj = {};
  const merged = Object.assign(require(dependencyMap[5]).DEFAULT_RULES[closure_0(undefined, closure_2[0]).AST_KEY.MENTION]);
  obj["react"] = tmp[closure_0(undefined, closure_2[0]).AST_KEY.MENTION].react;
  obj[require(dependencyMap[0]).AST_KEY.MENTION] = obj;
  obj = {};
  const merged1 = Object.assign(require(dependencyMap[5]).DEFAULT_RULES[closure_0(undefined, closure_2[0]).AST_KEY.CHANNEL_MENTION]);
  obj["react"] = tmp[closure_0(undefined, closure_2[0]).AST_KEY.CHANNEL_MENTION].react;
  obj[require(dependencyMap[0]).AST_KEY.CHANNEL_MENTION] = obj;
  const obj1 = {};
  const merged2 = Object.assign(require(dependencyMap[5]).DEFAULT_RULES[closure_0(undefined, closure_2[0]).AST_KEY.ITALICS]);
  obj1["react"] = tmp[closure_0(undefined, closure_2[0]).AST_KEY.ITALICS].react;
  obj[require(dependencyMap[0]).AST_KEY.ITALICS] = obj1;
  items[1] = obj;
  return importDefault(dependencyMap[2])(items);
}
function createWidgetMessageRules() {
  const items = [importDefault(dependencyMap[3]).lockscreenWidgetMessageRules, ];
  let obj = {};
  obj = {};
  const merged = Object.assign(require(dependencyMap[5]).DEFAULT_RULES[closure_0(undefined, closure_2[0]).AST_KEY.MENTION]);
  obj["react"] = require(dependencyMap[1]).plainMentionRenderer;
  obj[require(dependencyMap[0]).AST_KEY.MENTION] = obj;
  obj = {};
  const merged1 = Object.assign(importDefault(dependencyMap[6]).RULES.spoiler);
  obj["react"] = require(dependencyMap[1]).plainSpoilerRenderer;
  obj[require(dependencyMap[0]).AST_KEY.SPOILER] = obj;
  items[1] = obj;
  return importDefault(dependencyMap[2])(items);
}
const items = [require(dependencyMap[0]).AST_KEY.URL, require(dependencyMap[0]).AST_KEY.AUTOLINK, require(dependencyMap[0]).AST_KEY.LINK, "mailto", "tel"];
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/markup/CustomMarkup.native.tsx");

export { createRules };
export const getParser = function getParser(arg0) {
  let obj = arg0;
  obj = arg1;
  if (arg0 === undefined) {
    obj = {};
  }
  if (obj === undefined) {
    obj = {};
  }
  return importDefault(dependencyMap[3]).reactParserFor(createRules(obj, obj));
};
export { createRulesWithoutLinks };
export const getParserWithoutLinks = function getParserWithoutLinks(arg0) {
  let obj = arg0;
  obj = arg1;
  if (arg0 === undefined) {
    obj = {};
  }
  if (obj === undefined) {
    obj = {};
  }
  return importDefault(dependencyMap[3]).reactParserFor(createRulesWithoutLinks(obj, obj));
};
export { createNotifCenterV2MessagePreviewRules };
export const getNotifCenterV2MessagePreviewParser = function getNotifCenterV2MessagePreviewParser(arg0, closure_28, roleStyle) {
  let obj = arg0;
  obj = closure_28;
  if (arg0 === undefined) {
    obj = {};
  }
  if (obj === undefined) {
    obj = {};
  }
  return importDefault(dependencyMap[3]).reactParserFor(createNotifCenterV2MessagePreviewRules(obj, obj, roleStyle));
};
export { createWidgetMessageRules };
export const getWidgetMessageRules = function getWidgetMessageRules() {
  return importDefault(dependencyMap[3]).reactParserFor(createWidgetMessageRules());
};
