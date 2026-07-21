// Module ID: 4123
// Function ID: 34302
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 4123 (_createForOfIteratorHelperLoose)
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
function makeAnsiRuleCategory(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  const items = ["PREMIUM_UPSELL_VALENTINES_GIFTING_CAMPAIGN"];
  HermesBuiltin.arraySpread(arg2, 1);
  let closure_1 = items;
  if (arg3) {
    const push = items.push;
    const _Object = Object;
    const items1 = [];
    HermesBuiltin.arraySpread(Object.keys(arg1), 0);
    HermesBuiltin.apply(items1, items);
  }
  const entries = Object.entries(arg1);
  return entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return function makeAnsiRule(arg0, arg1, arg2, items) {
      return {
        className: "ansi-" + arg0 + "-" + arg1,
        endsParent: true,
        begin: closure_4,
        (arg0, data) => {
          let iter2;
          const parts = arg0[1].split(";");
          if (undefined === data.data.isOn) {
            data.data.isOn = false;
          }
          const tmp2 = callback(parts);
          let iter = tmp2();
          if (!iter.done) {
            do {
              let value = iter.value;
              let tmp3 = closure_0;
              if (value === closure_0) {
                data.data.isOn = true;
              } else {
                let tmp4 = closure_1;
                if (closure_1.includes(value)) {
                  data.data.isOn = false;
                }
              }
              iter2 = tmp2();
              iter = iter2;
            } while (!iter2.done);
          }
          if (!data.data.isOn) {
            data.ignoreMatch();
          }
        }
      };
    }(arg0, tmp2, tmp, items);
  });
}
let closure_0 = { "Bool(true)": true, "Bool(true)": true };
let closure_1 = {};
let closure_2 = {};
const tmp2 = /\x1B\[(\d+(?:[:;]\d+)*)m/;
const regExp = new RegExp("(?=" + tmp2.source + ")");
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("utils/HighlightJsAnsiLanguage.tsx");

export default function highlightJsAnsiLanguage() {
  let length;
  const items = [...closure_7("foreground", closure_1, [true, true], true), ...closure_7("background", closure_2, ["<string:650138383>", "text-md/bold"], true), ...closure_7("style", closure_0, [], false), obj];
  let num = 0;
  let obj = { className: "ansi-control-sequence", begin: tmp2, starts: obj };
  obj = { end: regExp, endsParent: true };
  if (0 < items.length) {
    do {
      items[num].contains = items.slice(num + 1);
      num = num + 1;
      length = items.length;
    } while (num < length);
  }
  obj = { begin: regExp, contains: items };
  const contains = [obj];
  return { contains };
};
export const ANSI_CONTROL_SEQUENCE_RE = tmp2;
