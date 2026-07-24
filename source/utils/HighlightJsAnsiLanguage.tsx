// Module ID: 4125
// Function ID: 34314
// Name: _createForOfIteratorHelperLoose
// Dependencies: [2]
// Exports: default

// Module 4125 (_createForOfIteratorHelperLoose)
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
function makeAnsiRuleCategory(background, closure_0, arg2, arg3) {
  closure_0 = background;
  const items = ["0"];
  HermesBuiltin.arraySpread(arg2, 1);
  if (arg3) {
    const push = items.push;
    const _Object = Object;
    const items1 = [];
    HermesBuiltin.arraySpread(Object.keys(closure_0), 0);
    HermesBuiltin.apply(items1, items);
  }
  const entries = Object.entries(closure_0);
  return entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return (function makeAnsiRule(closure_0, arg1, arg2, items) {
      closure_0 = arg2;
      let closure_1 = items;
      return {
        className: "ansi-" + closure_0 + "-" + arg1,
        endsParent: true,
        begin: outer2_4,
        (arg0, data) => {
          let iter2;
          const parts = arg0[1].split(";");
          if (undefined === data.data.isOn) {
            data.data.isOn = false;
          }
          const tmp2 = outer3_5(parts);
          let iter = tmp2();
          if (!iter.done) {
            do {
              let value = iter.value;
              let tmp3 = closure_0;
              if (value === closure_0) {
                data.data.isOn = true;
              } else {
                let tmp4 = items;
                if (items.includes(value)) {
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
    })(closure_0, tmp2, tmp, items);
  });
}
let closure_0 = { 1: "bold", 4: "underline" };
let closure_1 = { 30: "black", 31: "red", 32: "green", 33: "yellow", 34: "blue", 35: "magenta", 36: "cyan", 37: "white" };
let closure_2 = { 40: "black", 41: "red", 42: "green", 43: "yellow", 44: "blue", 45: "magenta", 46: "cyan", 47: "white" };
let tmp2 = /\x1B\[(\d+(?:[:;]\d+)*)m/;
let closure_3 = tmp2;
const regExp = new RegExp("(?=" + tmp2.source + ")");
const result = require("set").fileFinishedImporting("utils/HighlightJsAnsiLanguage.tsx");

export default function highlightJsAnsiLanguage() {
  let length;
  const items = [...makeAnsiRuleCategory("foreground", closure_1, ["38", "39"], true), ...makeAnsiRuleCategory("background", closure_2, ["48", "49"], true), ...makeAnsiRuleCategory("style", closure_0, [], false), obj];
  let num = 0;
  obj = { className: "ansi-control-sequence", begin: closure_3, starts: obj };
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
