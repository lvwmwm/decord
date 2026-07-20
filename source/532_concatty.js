// Module ID: 532
// Function ID: 6642
// Name: concatty
// Dependencies: []

// Module 532 (concatty)
function concatty(arg0, arg1) {
  let length;
  let length2;
  const items = [];
  let num = 0;
  if (0 < arg0.length) {
    do {
      items[num] = arg0[num];
      num = num + 1;
      length = arg0.length;
    } while (num < length);
  }
  let num2 = 0;
  if (0 < arg1.length) {
    do {
      items[num2 + arg0.length] = arg1[num2];
      num2 = num2 + 1;
      length2 = arg1.length;
    } while (num2 < length2);
  }
  return items;
}

export default function bind(iter, closure_101, queue, bindResult1, bindResult, arg5) {
  let length;
  const self = this;
  const toString = iter;
  const max = this;
  if ("function" === typeof this) {
    if ("[object Function]" === toString.apply(self)) {
      const items = [];
      let num = 1;
      let num2 = 0;
      if (1 < arguments.length) {
        do {
          items[num2] = arguments[num];
          num = num + 1;
          num2 = num2 + 1;
          length = arguments.length;
        } while (num < length);
      }
      const items1 = [];
      for (let num3 = 0; num3 < tmp2; num3 = num3 + 1) {
        items1[num3] = "$" + num3;
      }
      let num4 = 0;
      let str4 = "";
      if (0 < items1.length) {
        do {
          let text = `${arr[num4]}`;
          num4 = num4 + 1;
          let text1 = text;
          if (num4 < items1.length) {
            text1 = `${arr[num4]},`;
          }
          let str2 = text1;
          str4 = text1;
        } while (num4 < items1.length);
      }
      const tmp6 = Function("binder", `return function (${str4}){ return binder.apply(this,arguments); }`)(function binder() {
        let self = this;
        const apply = self.apply;
        if (this instanceof tmp6) {
          const applyResult = apply(self, tmp6(items, arguments));
          const _Object = Object;
          if (Object(applyResult) === applyResult) {
            self = applyResult;
          }
          return self;
        } else {
          const tmp6 = arguments;
          return apply(arg0, tmp6(items, arguments));
        }
      });
      const concatty = tmp6;
      if (self.prototype) {
        class Empty {
          constructor() {
            return;
          }
        }
        Empty.prototype = self.prototype;
        const prototype = Empty.prototype;
        const empty = new Empty();
        tmp6.prototype = empty;
        Empty.prototype = null;
      }
      return tmp6;
    }
  }
  const typeError = new TypeError("Function.prototype.bind called on incompatible " + self);
  throw typeError;
};
