// Module ID: 4562
// Function ID: 39979
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4563, 4121, 4564, 4120, 3829, 4565, 2]
// Exports: getNotifCenterV2MessagePreviewParser, getParser, getParserWithoutLinks, getWidgetMessageRules

// Module 4562 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
  const tmp = importDefault(4121)(arg0, obj);
  const items = [importDefault(4120).defaultRules, tmp, ];
  obj = {};
  obj = {};
  const merged = Object.assign(importDefault(3829).defaultRules.link);
  obj["react"] = tmp[require(undefined, 4563) /* AST_KEY */.AST_KEY.LINK].react;
  obj[require(4563) /* AST_KEY */.AST_KEY.LINK] = obj;
  const obj1 = {};
  const merged1 = Object.assign(importDefault(3829).defaultRules.url);
  obj1["react"] = tmp[require(undefined, 4563) /* AST_KEY */.AST_KEY.URL].react;
  obj[require(4563) /* AST_KEY */.AST_KEY.URL] = obj1;
  const obj2 = {};
  const merged2 = Object.assign(importDefault(3829).defaultRules.autolink);
  obj2["react"] = tmp[require(undefined, 4563) /* AST_KEY */.AST_KEY.AUTOLINK].react;
  obj[require(4563) /* AST_KEY */.AST_KEY.AUTOLINK] = obj2;
  const obj3 = {};
  const merged3 = Object.assign(importDefault(3829).defaultRules.blockQuote);
  obj3["react"] = tmp[require(undefined, 4563) /* AST_KEY */.AST_KEY.BLOCK_QUOTE].react;
  obj[require(4563) /* AST_KEY */.AST_KEY.BLOCK_QUOTE] = obj3;
  items[2] = obj;
  return importDefault(4564)(items);
}
function createRulesWithoutLinks(arg0, arg1) {
  let done;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  obj = {};
  const merged = Object.assign(createRules(arg0, obj));
  const tmp4 = _createForOfIteratorHelperLoose(items);
  let iter = tmp4();
  if (!iter.done) {
    do {
      let value = iter.value;
      delete tmp[tmp2];
      let iter2 = tmp4();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return obj;
}
function createNotifCenterV2MessagePreviewRules(closure_28, closure_28, roleStyle) {
  const tmp = importDefault(4121)(closure_28, closure_28, roleStyle);
  const items = [importDefault(4120).notifCenterV2MessagePreviewRules, ];
  let obj = {};
  obj = {};
  const merged = Object.assign(importDefault(4565).RULES[require(undefined, 4563) /* AST_KEY */.AST_KEY.MENTION]);
  obj["react"] = tmp[require(undefined, 4563) /* AST_KEY */.AST_KEY.MENTION].react;
  obj[require(4563) /* AST_KEY */.AST_KEY.MENTION] = obj;
  obj = {};
  const merged1 = Object.assign(importDefault(4565).RULES[require(undefined, 4563) /* AST_KEY */.AST_KEY.CHANNEL_MENTION]);
  obj["react"] = tmp[require(undefined, 4563) /* AST_KEY */.AST_KEY.CHANNEL_MENTION].react;
  obj[require(4563) /* AST_KEY */.AST_KEY.CHANNEL_MENTION] = obj;
  const obj1 = {};
  const merged2 = Object.assign(importDefault(4565).RULES[require(undefined, 4563) /* AST_KEY */.AST_KEY.ITALICS]);
  obj1["react"] = tmp[require(undefined, 4563) /* AST_KEY */.AST_KEY.ITALICS].react;
  obj[require(4563) /* AST_KEY */.AST_KEY.ITALICS] = obj1;
  items[1] = obj;
  return importDefault(4564)(items);
}
function createWidgetMessageRules() {
  const items = [importDefault(4120).lockscreenWidgetMessageRules, ];
  let obj = {};
  obj = {};
  const merged = Object.assign(importDefault(4565).RULES[require(undefined, 4563) /* AST_KEY */.AST_KEY.MENTION]);
  obj["react"] = require(4121) /* MarkupText */.plainMentionRenderer;
  obj[require(4563) /* AST_KEY */.AST_KEY.MENTION] = obj;
  obj = {};
  const merged1 = Object.assign(importDefault(4565).RULES.spoiler);
  obj["react"] = require(4121) /* MarkupText */.plainSpoilerRenderer;
  obj[require(4563) /* AST_KEY */.AST_KEY.SPOILER] = obj;
  items[1] = obj;
  return importDefault(4564)(items);
}
let items = [require("AST_KEY").AST_KEY.URL, require("AST_KEY").AST_KEY.AUTOLINK, require("AST_KEY").AST_KEY.LINK, "mailto", "tel"];
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/markup/CustomMarkup.native.tsx");

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
  return importDefault(4120).reactParserFor(createRules(obj, obj));
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
  return importDefault(4120).reactParserFor(createRulesWithoutLinks(obj, obj));
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
  return importDefault(4120).reactParserFor(createNotifCenterV2MessagePreviewRules(obj, obj, roleStyle));
};
export { createWidgetMessageRules };
export const getWidgetMessageRules = function getWidgetMessageRules() {
  return importDefault(4120).reactParserFor(createWidgetMessageRules());
};
