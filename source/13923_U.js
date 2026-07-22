// Module ID: 13923
// Function ID: 105363
// Name: U
// Dependencies: []

// Module 13923 (U)
function U(arg0, arg1) {
  if (null != arg1) {
    const _Symbol = Symbol;
    if ("undefined" !== typeof Symbol) {
      const _Symbol2 = Symbol;
      if (arg1[Symbol.hasInstance]) {
        const _Symbol3 = Symbol;
        let tmp2 = arg1[Symbol.hasInstance](arg0);
      }
      return tmp2;
    }
  }
  tmp2 = U(arg0, arg1);
}
function Ne(arg0) {
  if (arg0) {
    const _Symbol = Symbol;
    if ("undefined" !== typeof Symbol) {
      const _Symbol2 = Symbol;
      let str2 = "symbol";
    }
    return str2;
  }
  str2 = typeof arg0;
}
function ke(arg0, arg1) {
  let length = arg1;
  if (tmp) {
    length = arg0.length;
  }
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arg0[num];
  }
  return array;
}
function Pe(arg0, arg1) {
  if (arg0) {
    if ("string" === typeof arg0) {
      return ke(arg0, arg1);
    } else {
      const _Object = Object;
      let name = toString.call(arg0).slice(8, -1);
      if (tmp) {
        name = arg0.constructor.name;
      }
      if ("Map" !== name) {
        if ("Set" !== name) {
          if ("Arguments" !== name) {
            const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
          }
          return ke(arg0, arg1);
        }
      }
      const _Array = Array;
      return Array.from(name);
    }
  }
}
function H(arg0, arg1) {
  let tmp;
  if (Array.isArray(arg0)) {
    tmp = arg0;
  }
  if (!tmp) {
    let tmp6 = null;
    if (null != arg0) {
      const _Symbol = Symbol;
      @@iterator = "undefined" !== typeof Symbol;
      if (Symbol_iterator) {
        const _Symbol2 = Symbol;
        @@iterator = tmp2[Symbol.iterator];
      }
      if (!Symbol_iterator) {
        @@iterator = tmp2[Symbol.iterator];
      }
      tmp6 = Symbol_iterator;
    }
    let tmp9;
    if (null != tmp6) {
      const items = [];
      const iter = obj.call(arg0);
      const iter3 = iter.next();
      const done = iter3.done;
      let tmp11 = done;
      if (!done) {
        items.push(iter4.value);
        if (!tmp3) {
          const iter5 = iter2.next();
          const done2 = iter5.done;
          tmp11 = done2;
          while (!done2) {
            let tmp19 = items;
            let tmp20 = iter5;
            let arr = items.push(iter6.value);
            let tmp22 = arg1;
            if (!tmp3) {
              continue;
            } else {
              let tmp23 = items;
              let tmp24 = arg1;
              if (items.length === tmp3) {
                break;
              }
            }
            continue;
          }
        }
      }
      while (true) {
        let tmp25 = tmp11;
        let tmp26 = !tmp11;
        let tmp27 = tmp26;
        if (!tmp26) {
          break;
        } else {
          let tmp28 = iter;
          tmp27 = null != iter2.return;
          // break
        }
        if (tmp27) {
          let tmp29 = iter;
          let returnResult = iter2.return();
        }
        let tmp31 = flag2;
        if (flag2) {
          let tmp32 = tmp4;
          throw tmp4;
        } else {
          tmp9 = items;
        }
      }
    }
    tmp = tmp9;
    const obj = tmp6;
  }
  if (!tmp) {
    tmp = Pe(arg0, arg1);
  }
  if (tmp) {
    return tmp;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    throw typeError;
  }
}
function V(@@iterator) {
  let tmp;
  if (Array.isArray(Symbol_iterator)) {
    tmp = ke(Symbol_iterator);
  }
  if (!tmp) {
    const _Symbol = Symbol;
    if ("undefined" === typeof Symbol) {
      let arr;
      tmp = arr;
    } else {
      const _Symbol2 = Symbol;
    }
    const _Array = Array;
    arr = Array.from(Symbol_iterator);
  }
  if (!tmp) {
    tmp = Pe(Symbol_iterator);
  }
  if (tmp) {
    return tmp;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    throw typeError;
  }
}
function ce() {
  let doNotTrack = mod3.default.doNotTrack;
  if (!doNotTrack) {
    let doNotTrack2 = mod3.default.navigator;
    if (doNotTrack2) {
      doNotTrack2 = mod3.default.navigator.doNotTrack;
    }
    doNotTrack = doNotTrack2;
  }
  return "1" === doNotTrack;
}
function b(arg0) {
  if (undefined === arg0) {
    const _ReferenceError = ReferenceError;
    const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
    throw referenceError;
  } else {
    return arg0;
  }
}
function D(arg0, arg1) {
  if (!U(arg0, arg1)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Cannot call a class as a function");
    throw typeError;
  }
}
function kt(arg0, arg1) {
  for (let num = 0; num < arg1.length; num = num + 1) {
    let tmp = arg1[num];
    tmp.enumerable = tmp.enumerable || false;
    tmp.configurable = true;
    if ("value" in tmp) {
      tmp.writable = true;
    }
    let _Object = Object;
    let definePropertyResult = Object.defineProperty(arg0, tmp.key, tmp);
  }
}
function N(arg0, arg1, arg2) {
  if (arg1) {
    kt(arg0.prototype, arg1);
  }
  return arg0;
}
function l(arg0, arg1, value) {
  if (arg1 in arg0) {
    const _Object = Object;
    const obj = { value };
    Object.defineProperty(arg0, arg1, obj);
  } else {
    arg0[arg1] = value;
  }
  return arg0;
}
function X(arg0) {
  if (Object.setPrototypeOf) {
    const _Object = Object;
    let fn = Object.getPrototypeOf;
  } else {
    fn = (arg0) => {
      let __proto__ = arg0.__proto__;
      if (!__proto__) {
        const _Object = Object;
        __proto__ = Object.getPrototypeOf(arg0);
      }
      return __proto__;
    };
  }
  const X = fn;
  return fn(arg0);
}
function De(arg0, arg1, arg2) {
  let tmp = arg2;
  if ("undefined" !== typeof Reflect) {
    const _Reflect = Reflect;
    if (Reflect.get) {
      const _Reflect2 = Reflect;
      const De = Reflect.get;
    }
    if (!tmp) {
      tmp = arg0;
    }
    class De {
      constructor(arg0, arg1, arg2) {
        tmp = arg2;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        tmp2 = arg0;
        if (!hasOwnProperty.call(arg0, arg1)) {
          tmp3 = closure_129;
          tmp4 = closure_129(arg0);
          tmp5 = null;
          tmp2 = tmp4;
          if (null !== tmp4) {
            _Object = Object;
            hasOwnProperty2 = Object.prototype.hasOwnProperty;
            tmp6 = tmp4;
            tmp2 = tmp4;
            while (!hasOwnProperty2.call(tmp4, arg1)) {
              tmp7 = closure_129;
              tmp4 = closure_129(tmp4);
              tmp2 = tmp4;
              if (null === tmp4) {
                break;
              }
            }
          }
        }
        if (tmp2) {
          _Object2 = Object;
          iter = Object.getOwnPropertyDescriptor(tmp2, arg1);
          if (iter.get) {
            get = iter.get;
            if (!tmp) {
              tmp = arg0;
            }
            callResult = get.call(tmp);
          } else {
            callResult = iter.value;
          }
          return callResult;
        } else {
          return;
        }
      }
    }
  }
  class De {
    constructor(arg0, arg1, arg2) {
      tmp = arg2;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      tmp2 = arg0;
      if (!hasOwnProperty.call(arg0, arg1)) {
        tmp3 = closure_129;
        tmp4 = closure_129(arg0);
        tmp5 = null;
        tmp2 = tmp4;
        if (null !== tmp4) {
          _Object = Object;
          hasOwnProperty2 = Object.prototype.hasOwnProperty;
          tmp6 = tmp4;
          tmp2 = tmp4;
          while (!hasOwnProperty2.call(tmp4, arg1)) {
            tmp7 = closure_129;
            tmp4 = closure_129(tmp4);
            tmp2 = tmp4;
            if (null === tmp4) {
              break;
            }
          }
        }
      }
      if (tmp2) {
        _Object2 = Object;
        iter = Object.getOwnPropertyDescriptor(tmp2, arg1);
        if (iter.get) {
          get = iter.get;
          if (!tmp) {
            tmp = arg0;
          }
          callResult = get.call(tmp);
        } else {
          callResult = iter.value;
        }
        return callResult;
      } else {
        return;
      }
    }
  }
}
function Le(arg0, arg1) {
  const tmp = Object.setPrototypeOf || (arg0, arg1) => {
    arg0.__proto__ = arg1;
    return arg0;
  };
  const Le = tmp;
  return tmp(arg0, arg1);
}
function qt(arg0, arr) {
  if (null == arg0) {
    return {};
  } else {
    if (null == arg0) {
      let obj = {};
    } else {
      obj = {};
      const _Object = Object;
      const keys = Object.keys(arg0);
      let num2 = 0;
      if (0 < keys.length) {
        do {
          let tmp2 = keys[num2];
          if (arr.indexOf(tmp2) < 0) {
            obj[tmp2] = arg0[tmp2];
          }
          num2 = num2 + 1;
        } while (num2 < keys.length);
      }
    }
    const _Object2 = Object;
    if (Object.getOwnPropertySymbols) {
      const _Object3 = Object;
      const ownPropertySymbols = Object.getOwnPropertySymbols(arg0);
      for (let num4 = 0; num4 < ownPropertySymbols.length; num4 = num4 + 1) {
        let tmp4 = ownPropertySymbols[num4];
        let tmp5 = arr.indexOf(tmp4) >= 0;
        let callResult = !tmp5;
        if (!tmp5) {
          let _Object4 = Object;
          callResult = propertyIsEnumerable.call(arg0, tmp4);
        }
        if (callResult) {
          obj[tmp4] = arg0[tmp4];
        }
      }
    }
    return obj;
  }
}
function Pt(arg0) {
  const global = arg0;
  let closure_1 = function Rt() {
    if ("undefined" !== typeof Reflect) {
      const _Reflect3 = Reflect;
      if (Reflect.construct) {
        const _Reflect = Reflect;
        if (!Reflect.construct.sham) {
          const _Proxy = Proxy;
          if ("function" === typeof Proxy) {
            return true;
          } else {
            const _Boolean = Boolean;
            const _Reflect2 = Reflect;
            const _Boolean2 = Boolean;
            valueOf.call(Reflect.construct(Boolean, [], () => {

            }));
            return true;
          }
        }
      }
    }
    return false;
  }();
  return function() {
    const self = this;
    const obj = callback3(arg0);
    if (closure_1) {
      const _Reflect = Reflect;
      let constructResult = Reflect.construct(obj, arguments, callback3(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    if (!constructResult) {
      callback2(self);
      let tmp8 = self;
    } else {
      tmp8 = constructResult;
      if ("object" !== callback(constructResult)) {
        tmp8 = constructResult;
      }
    }
    return tmp8;
  };
}
class P {
  constructor(arg0, arg1, arg2) {
    num = 1;
    if (undefined !== importDefault) {
      num = importDefault;
    }
    global[require] = global[require] + num;
    return;
  }
}
function ue(arg0) {
  const global = arg0;
  for (let num = 1; num < arguments.length; num = num + 1) {
    let tmp = null != arguments[num] ? arguments[num] : {};
    let create = tmp;
    let _Object = Object;
    let keys = Object.keys(tmp);
    let _Object2 = Object;
    let tmp2 = tmp;
    let combined = keys;
    if ("function" === typeof Object.getOwnPropertySymbols) {
      let _Object3 = Object;
      let ownPropertySymbols = Object.getOwnPropertySymbols(tmp);
      combined = keys.concat(ownPropertySymbols.filter((arg0) => Object.getOwnPropertyDescriptor(tmp, arg0).enumerable));
    }
    let item = combined.forEach((arg0) => {

    });
  }
  return arg0;
}
function fe(arg0, arg1) {
  let obj = arg1;
  const global = arg0;
  let create = arg1;
  if (null == arg1) {
    obj = {};
  }
  create = obj;
  const _Object = Object;
  if (Object.getOwnPropertyDescriptors) {
    const _Object2 = Object;
    _Object.defineProperties(arg0, Object.getOwnPropertyDescriptors(obj));
  } else {
    const item = function da(arg0) {
      const keys = Object.keys(arg0);
      if (Object.getOwnPropertySymbols) {
        const _Object = Object;
        const push = keys.push;
        push.apply(keys, Object.getOwnPropertySymbols(arg0));
      }
      return keys;
    }(_Object(obj)).forEach((arg0) => {
      Object.defineProperty(arg0, arg0, Object.getOwnPropertyDescriptor(obj, arg0));
    });
    const arr = function da(arg0) {
      const keys = Object.keys(arg0);
      if (Object.getOwnPropertySymbols) {
        const _Object = Object;
        const push = keys.push;
        push.apply(keys, Object.getOwnPropertySymbols(arg0));
      }
      return keys;
    }(_Object(obj));
  }
  return arg0;
}
function pe(arg0) {
  let str = arg0;
  const obj = {};
  const global = obj;
  if (!arg0) {
    str = "";
  }
  const parts = str.trim().split(/[\r\n]+/);
  const item = parts.forEach((str) => {
    if (str) {
      const parts = str.split(": ");
      const str2 = parts.shift();
      let tmp = str2;
      if (str2) {
        let tmp3 = closure_42.indexOf(str2.toLowerCase()) >= 0;
        if (!tmp3) {
          const formatted = str2.toLowerCase();
          tmp3 = 0 === formatted.indexOf("x-litix-");
        }
        tmp = tmp3;
      }
      if (tmp) {
        obj[str2] = parts.join(": ");
      }
    }
  });
  return obj;
}
function de(arg0) {
  const global = arg0;
  if (arg0) {
    const found = items.find((arg0) => undefined !== arg0[arg0]);
    let tmp3;
    if (found) {
      tmp3 = arg0[found];
    }
    return tmp3;
  }
}
function lr(obj) {
  obj = {};
  for (const key10004 in arg0) {
    let tmp = key10004;
    if (!arg0.hasOwnProperty(key10004)) {
      continue;
    } else {
      obj[arg0[key10004]] = key10004;
      // continue
    }
    continue;
  }
  return obj;
}
function me(arg0) {
  const global = arg0;
  let obj = {};
  const create = obj;
  obj = {};
  const defineProperty = obj;
  const keys = Object.keys(arg0);
  const item = keys.forEach((str) => {
    let closure_1 = false;
    if (str.hasOwnProperty(str)) {
      if (undefined !== str[str]) {
        const parts = str.split("_");
        const first = parts[0];
        let closure_2 = tmp14;
        if (!closure_74[first]) {
          closure_35.info(`Data key word `${arr2[0]}` not expected in ${str}`);
          closure_2 = `${tmp12}_`;
        }
        const item = parts.splice(1).forEach((arg0) => {
          if ("url" === arg0) {
            let closure_1 = true;
          }
          if (closure_75[arg0]) {
            closure_2 = closure_2 + closure_75[arg0];
          } else {
            const _Number = Number;
            const _Number2 = Number;
            if (Number.isInteger(Number(arg0))) {
              closure_2 = closure_2 + arg0;
            } else {
              closure_35.info(`Data key word `${arg0}` not expected in ${closure_0}`);
              closure_2 = `${closure_2}_${arg0}_`;
            }
          }
        });
        if (closure_1) {
          closure_2[closure_2] = str[str];
        } else {
          closure_1[closure_2] = str[str];
        }
        const spliceResult = parts.splice(1);
      }
    }
  });
  return Object.assign(obj, obj);
}
function Vr(str, str2) {
  let formatted;
  if (null != str) {
    formatted = str.toLowerCase();
  }
  let formatted1;
  if (null != str2) {
    formatted1 = str2.toLowerCase();
  }
  return formatted === formatted1;
}
function ft(arg0) {
  const global = arg0;
  return () => {
    if (callback) {
      const callback = 0;
      let closure_1 = callback(0);
    }
    return closure_1;
  };
}
class B {
  constructor(arg0, arg1) {
    return () => {
      if (!obj) {
        const obj = { exports: {} };
        arg0(obj.exports, obj);
      }
      return obj.exports;
    };
  }
}
function pt(arg0, arr) {
  const global = arr;
  if (!arr) {
    return arg0;
  }
  arr = getOwnPropertyNames(arr);
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arr[num];
    let tmp2 = hasOwnProperty;
    let tmp3 = !hasOwnProperty.call(arg0, tmp) && tmp !== arg2;
    if (tmp3) {
      let obj = {};
      let fn = (arg0) => arg1[arg0];
      let tmp4 = defineProperty;
      obj.get = fn.bind(null, tmp);
      let tmp5 = getOwnPropertyDescriptor;
      let tmp6 = getOwnPropertyDescriptor(arr, tmp);
      obj.enumerable = !tmp6 || tmp6.enumerable;
      let tmp4Result = tmp4(arg0, tmp, obj);
      let tmp8 = tmp6;
    }
  }
}
class G {
  constructor(arg0, arg1, arg2) {
    if (null != global) {
      tmp = create;
      tmp2 = getPrototypeOf;
      obj = create(getPrototypeOf(global));
    } else {
      obj = {};
    }
    tmp3 = pt;
    if (!global) {
      tmp5 = defineProperty;
      obj = {};
      obj.value = global;
      flag = true;
      obj.enumerable = true;
      str = "default";
      tmp4 = defineProperty(obj, "default", obj);
    } else {
      tmp4 = obj;
    }
    return tmp3(tmp4, global);
  }
}
const BResult = B((arg0, arg1) => {
  if ("undefined" !== typeof window) {
    let _window = window;
  } else if (undefined !== global) {
    _window = global;
  } else {
    const _self = self;
    _window = "undefined" !== typeof self ? self : {};
  }
  arg1.exports = _window;
});
const ftResult = ft(() => {
  ftResult();
});
const ftResult1 = ft(() => {

});
let closure_10 = B((arg0, arg1) => {
  const global = Array.prototype.slice;
  arg1.exports = function Ca(arg0, arg1) {
    let tmp = arg0;
    if (!("length" in arg0)) {
      const items = [arg0];
      tmp = items;
    }
    const callResult = slice.call(tmp);
    let combined = callResult;
    if (callResult.length) {
      const arr = combined.shift();
      const tmp3 = arg1(arr);
      while (!tmp3) {
        let tmp5 = arr.childNodes && arr.childNodes.length;
        if (tmp5) {
          let tmp6 = slice;
          let callResult1 = slice.call(arr.childNodes);
          combined = callResult1.concat(tmp4);
        }
      }
      return tmp3;
    }
  };
});
let closure_11 = B((arg0, arg1) => {
  class ve {
    constructor(arg0, arg1) {
      tmp = arg1;
      self = this;
      if (closure_117(this, ve)) {
        self.data = arg0;
        self.nodeValue = arg0;
        self.length = arg0.length;
        if (!tmp) {
          tmp = null;
        }
        self.ownerDocument = tmp;
        return;
      } else {
        tmp2 = ve;
        prototype = ve.prototype;
        tmp3 = new.target;
        tmp4 = new.target;
        tmp5 = arg0;
        tmp6 = tmp;
        tmp7 = new ve(arg0, tmp);
        tmp8 = tmp7;
        return tmp7;
      }
    }
    toString() {
      return "[object Comment]";
    }
  }
  const global = ve;
  ftResult();
  arg1.exports = ve;
  ve.prototype.nodeType = 8;
  ve.prototype.nodeName = "#comment";
});
let closure_12 = B((arg0, arg1) => {
  class ae {
    constructor(arg0, arg1) {
      str = arg0;
      tmp = arg1;
      self = this;
      if (closure_117(this, ae)) {
        if (!str) {
          str = "";
        }
        self.data = str;
        self.length = self.data.length;
        if (!tmp) {
          tmp = null;
        }
        self.ownerDocument = tmp;
        return;
      } else {
        tmp2 = ae;
        prototype = ae.prototype;
        tmp3 = new.target;
        tmp4 = new.target;
        tmp5 = str;
        tmp6 = new ae(str);
        tmp7 = tmp6;
        return tmp6;
      }
    }
    toString() {
      return this.data;
    }
    replaceData(arg0, arg1, arg2) {
      str = this.data;
      substr = str.substring(0, arg0);
      this.data = substr + arg2 + str.substring(arg0 + arg1, str.length);
      this.length = this.data.length;
      return;
    }
  }
  const global = ae;
  ftResult();
  arg1.exports = ae;
  ae.prototype.type = "DOMTextNode";
  ae.prototype.nodeType = 3;
  ae.prototype.nodeName = "#text";
});
let closure_13 = B((arg0, arg1) => {
  arg1.exports = function Ma(target) {
    let self = this;
    self = this;
    if (!target.target) {
      target.target = self;
    }
    if (!self.listeners) {
      self.listeners = {};
    }
    if (self.listeners[target.type]) {
      return arr.forEach((handleEvent) => {
        handleEvent.currentTarget = self;
        if ("function" === typeof handleEvent) {
          handleEvent(handleEvent);
        } else {
          handleEvent.handleEvent(handleEvent);
        }
      });
    } else if (self.parentNode) {
      const parentNode = self.parentNode;
      parentNode.dispatchEvent(target);
    }
  };
});
let closure_14 = B((arg0, arg1) => {
  arg1.exports = function Ha(arg0, arg1) {
    const self = this;
    if (!this.listeners) {
      self.listeners = {};
    }
    if (!self.listeners[arg0]) {
      self.listeners[arg0] = [];
    }
    let arr = self.listeners[arg0];
    if (-1 === arr.indexOf(arg1)) {
      arr = self.listeners[arg0].push(arg1);
      const arr2 = self.listeners[arg0];
    }
  };
});
let closure_15 = B((arg0, arg1) => {
  arg1.exports = function Ba(arg0, arg1) {
    const self = this;
    if (this.listeners) {
      if (self.listeners[arg0]) {
        const index = arr.indexOf(arg1);
        if (-1 !== index) {
          arr.splice(index, 1);
        }
      }
    }
  };
});
let closure_16 = B((arg0, arg1) => {
  function br(nodeType) {
    nodeType = nodeType.nodeType;
    if (3 === nodeType) {
      return et(nodeType.data);
    } else if (8 === nodeType) {
      return "<!--" + nodeType.data + "-->";
    } else {
      return function Fa(tagName) {
        const items = [];
        let formatted = str;
        if ("http://www.w3.org/1999/xhtml" === tagName.namespaceURI) {
          formatted = str.toLowerCase();
        }
        const items1 = [];
        const text = `<${tmp2}`;
        for (const key10014 in arg0) {
          let tmp24 = key10014;
          let tmp25 = closure_2;
          let arr = closure_2(arg0, key10014);
          if (!arr) {
            continue;
          } else {
            let obj = { name: key10014, value: arg0[key10014] };
            arr = items1.push(obj);
            // continue
          }
          continue;
        }
        const keys = Object.keys();
        if (keys !== undefined) {
          while (keys[tmp] !== undefined) {
            let tmp26 = tmp10;
            let tmp27 = tmp5;
            let iter = tmp6;
            let keys1 = Object.keys();
            if (keys1 === undefined) {
              continue;
            } else {
              let tmp5 = tmp27;
              let tmp6 = iter;
              let tmp11 = keys1[arr];
              while (tmp11 !== undefined) {
                tmp27 = tmp11;
                iter = tagName._attributes[tmp10][tmp11];
                let str2 = "";
                if (iter.prefix) {
                  str2 = `${iter.prefix}:`;
                }
                obj = { name: str2 + tmp27, value: iter.value };
                arr = items1.push(obj);
                // continue
              }
            }
            continue;
          }
        }
        if (tagName.className) {
          obj = { name: "class", value: tagName.className };
          items1.push(obj);
        }
        let str4 = "";
        if (items1.length) {
          str4 = callback(items1);
        }
        const dataset = tagName.dataset;
        const items2 = [];
        for (const key10050 in dataset) {
          let tmp29 = key10050;
          let obj1 = { name: "data-" + key10050, value: dataset[key10050] };
          let arr2 = items2.push(obj1);
        }
        let str5 = "";
        if (items2.length) {
          str5 = callback(items2);
        }
        items.push(text + str4 + str5);
        if (closure_0.indexOf(formatted) > -1) {
          items.push(" />");
        } else {
          items.push(">");
          if (tagName.childNodes.length) {
            const push = items.push;
            const childNodes = tagName.childNodes;
            push.apply(items, childNodes.map(closure_1));
          } else {
            if (!tagName.textContent) {
              if (!tagName.innerText) {
                if (tagName.innerHTML) {
                  items.push(tagName.innerHTML);
                }
              }
            }
            let innerText = tagName.textContent;
            if (!innerText) {
              innerText = tagName.innerText;
            }
            items.push(closure_4(innerText));
            const tmp18 = closure_4;
          }
          items.push(`</${tmp2}>`);
        }
        return items.join("");
      }(nodeType);
    }
  }
  const create = br;
  function Va(style) {
    const tmp = callback(style[arg1]);
    let tmp2 = "style" === arg1;
    if (tmp2) {
      const _Object = Object;
      tmp2 = Object.keys(style.style).length > 0;
    }
    if (!tmp2) {
      let hasOwnPropertyResult = style.hasOwnProperty(arg1);
      if (hasOwnPropertyResult) {
        let tmp5 = "string" === tmp;
        if (!tmp5) {
          tmp5 = "boolean" === tmp;
        }
        if (!tmp5) {
          tmp5 = "number" === tmp;
        }
        hasOwnPropertyResult = tmp5;
      }
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = "nodeName" !== arg1;
      }
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = "className" !== arg1;
      }
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = "tagName" !== arg1;
      }
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = "textContent" !== arg1;
      }
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = "innerText" !== arg1;
      }
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = "namespaceURI" !== arg1;
      }
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = "innerHTML" !== arg1;
      }
      tmp2 = hasOwnPropertyResult;
    }
    return tmp2;
  }
  function wr(arr) {
    const items = [];
    let closure_0 = items;
    const item = arr.forEach((arg0) => {
      let name;
      let value;
      ({ name, value } = arg0);
      let tmp = value;
      if ("style" === name) {
        tmp = function ja(value) {
          if ("string" === typeof value) {
            return value;
          } else {
            let closure_1 = "";
            const _Object = Object;
            const keys = Object.keys(value);
            const item = keys.forEach((arg0) => {
              let closure_1 = `${closure_1}${arg0.replace(/[A-Z]/g, () => { ... })}:${tmp};`;
            });
            return closure_1;
          }
        }(value);
      }
      items.push(`${`${name}="`}${callback(tmp).replace(/"/g, "&quot;")}"`);
    });
    let str = "";
    if (items.length) {
      str = ` ${arr.join(" ")}`;
    }
    return str;
  }
  function et(data) {
    let str = data;
    if ("string" !== typeof data) {
      str = "";
      if (data) {
        str = data.toString();
      }
    }
    const str2 = str.replace(/&/g, "&amp;");
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  ftResult1();
  arg1.exports = br;
  let closure_0 = [-834535423, 956302547, 1358954821, 356646906, 1358955041, 306315260, 1358954858, 37879806, 1358954887, 1799487483, 1358954890, -364773387, null, null, null, null];
});
let closure_17 = B((arg0, arg1) => {
  class I {
    constructor(arg0, arg1, arg2) {
      tmp = arg1;
      tmp2 = arg2;
      self = this;
      if (closure_117(this, I)) {
        if (undefined === tmp2) {
          tmp2 = closure_2;
        } else if (!tmp2) {
          tmp2 = null;
        }
        tmp9 = closure_2;
        formatted = arg0;
        if (tmp2 === closure_2) {
          tmp11 = globalThis;
          _String = String;
          str = String(arg0);
          formatted = str.toUpperCase();
        }
        self.tagName = formatted;
        self.nodeName = self.tagName;
        str2 = "";
        self.className = "";
        self.dataset = {};
        self.childNodes = [];
        tmp12 = null;
        self.parentNode = null;
        self.style = {};
        if (!tmp) {
          tmp = null;
        }
        self.ownerDocument = tmp;
        self.namespaceURI = tmp2;
        self._attributes = {};
        str3 = "INPUT";
        if ("INPUT" === self.tagName) {
          str4 = "text";
          self.type = "text";
        }
        return;
      } else {
        tmp3 = I;
        prototype = I.prototype;
        tmp4 = new.target;
        tmp5 = new.target;
        tmp6 = arg0;
        tmp7 = new I(arg0);
        tmp8 = tmp7;
        return tmp7;
      }
    }
    appendChild(arg0) {
      self = this;
      if (arg0.parentNode) {
        parentNode = arg0.parentNode;
        removeChildResult = parentNode.removeChild(arg0);
      }
      childNodes = self.childNodes;
      arr = childNodes.push(arg0);
      arg0.parentNode = self;
      return arg0;
    }
    replaceChild(arg0, arg1) {
      self = this;
      if (arg0.parentNode) {
        parentNode = arg0.parentNode;
        removeChildResult = parentNode.removeChild(arg0);
      }
      childNodes = self.childNodes;
      arg1.parentNode = null;
      self.childNodes[childNodes.indexOf(arg1)] = arg0;
      arg0.parentNode = self;
      return arg1;
    }
    removeChild(arg0) {
      ({ childNodes, childNodes: childNodes2 } = this);
      spliceResult = childNodes2.splice(childNodes.indexOf(arg0), 1);
      arg0.parentNode = null;
      return arg0;
    }
    insertBefore(arg0, arg1) {
      self = this;
      if (arg0.parentNode) {
        parentNode = arg0.parentNode;
        removeChildResult = parentNode.removeChild(arg0);
      }
      num = -1;
      if (null != arg1) {
        childNodes = self.childNodes;
        num = childNodes.indexOf(arg1);
      }
      if (num > -1) {
        childNodes1 = self.childNodes;
        num2 = 0;
        spliceResult = childNodes1.splice(num, 0, arg0);
      } else {
        childNodes2 = self.childNodes;
        arr = childNodes2.push(arg0);
      }
      arg0.parentNode = self;
      return arg0;
    }
    setAttributeNS(arg0, arg1, arg2) {
      self = this;
      index = arg1.indexOf(":");
      substr = null;
      substr1 = arg1;
      if (index > -1) {
        num = 0;
        substr = arg1.substr(0, index);
        num2 = 1;
        substr1 = arg1.substr(index + 1);
      }
      if ("INPUT" === self.tagName) {
        str = "type";
        if ("type" === arg1) {
          self.type = arg2;
        }
        return;
      }
      tmp4 = self._attributes[arg0];
      if (!tmp4) {
        obj = {};
        self._attributes[arg0] = obj;
        tmp4 = obj;
      }
      obj = { value: arg2 };
      obj.prefix = substr;
      tmp4[substr1] = obj;
      return;
    }
    getAttributeNS(arg0, arg1) {
      self = this;
      tmp = this._attributes[arg0];
      value = tmp;
      if (tmp) {
        value = tmp[arg1];
      }
      if (value) {
        value = tmp[arg1].value;
      }
      if ("INPUT" === self.tagName) {
        str = "type";
        if ("type" === arg1) {
          type = self.type;
        }
        return type;
      }
      type = null;
      if ("string" === typeof value) {
        type = value;
      }
      return;
    }
    removeAttributeNS(arg0, arg1) {
      if (this._attributes[arg0]) {
        tmp = arg1;
        delete r1[r0];
      }
      return;
    }
    hasAttributeNS(arg0, arg1) {
      tmp = this._attributes[arg0];
      tmp2 = !tmp;
      tmp3 = !tmp2;
      if (!tmp2) {
        tmp4 = arg1;
        tmp3 = arg1 in tmp;
      }
      return tmp3;
    }
    setAttribute(arg0, arg1) {
      return this.setAttributeNS(null, arg0, arg1);
    }
    getAttribute(arg0) {
      return this.getAttributeNS(null, arg0);
    }
    removeAttribute(arg0) {
      return this.removeAttributeNS(null, arg0);
    }
    hasAttribute(arg0) {
      return this.hasAttributeNS(null, arg0);
    }
    focus() {
      return;
    }
    toString() {
      return closure_1(this);
    }
    getElementsByClassName(arg0) {
      closure_0 = arg0.split(" ");
      items = [];
      closure_1 = items;
      tmp = closure_0(this, (nodeType) => {
        if (1 === nodeType.nodeType) {
          let closure_0 = nodeType.className || "".split(" ");
          if (closure_0.every((arg0) => -1 !== closure_0.indexOf(arg0))) {
            items.push(nodeType);
          }
          const str = nodeType.className || "";
        }
      });
      return items;
    }
    getElementsByTagName(arg0) {
      toLowerCase = arg0.toLowerCase();
      items = [];
      toLowerCase = items;
      tmp = toLowerCase(this.childNodes, (nodeType) => {
        let tmp = 1 === nodeType.nodeType;
        if (tmp) {
          let tmp3 = "*" === closure_0;
          if (!tmp3) {
            tmp3 = nodeType.tagName.toLowerCase() === closure_0;
            const str2 = nodeType.tagName;
          }
          tmp = tmp3;
        }
        if (tmp) {
          items.push(nodeType);
        }
      });
      return items;
    }
    contains(arg0) {
      arg0 = arg0;
      tmp = arg0(this, (arg0) => arg0 === arg0) || false;
      return tmp;
    }
  }
  const getOwnPropertyDescriptor = I;
  ftResult();
  let closure_0 = callback();
  const tmp2 = callback4();
  const tmp3 = callback5();
  let closure_1 = callback7();
  let closure_2 = "http://www.w3.org/1999/xhtml";
  arg1.exports = I;
  I.prototype.type = "DOMElement";
  I.prototype.nodeType = 1;
  I.prototype.removeEventListener = callback6();
  I.prototype.addEventListener = tmp3;
  I.prototype.dispatchEvent = tmp2;
});
let closure_18 = B((arg0, arg1) => {
  class K {
    constructor(arg0) {
      tmp = arg0;
      self = this;
      if (closure_117(this, K)) {
        self.childNodes = [];
        tmp7 = null;
        self.parentNode = null;
        if (!tmp) {
          tmp = null;
        }
        self.ownerDocument = tmp;
        return;
      } else {
        tmp2 = K;
        prototype = K.prototype;
        tmp3 = new.target;
        tmp4 = new.target;
        tmp5 = new K();
        tmp6 = tmp5;
        return tmp5;
      }
    }
    toString() {
      childNodes = this.childNodes;
      mapped = childNodes.map((arg0) => String(arg0));
      return mapped.join("");
    }
  }
  const global = K;
  ftResult();
  const tmp2 = callback8();
  arg1.exports = K;
  K.prototype.type = "DocumentFragment";
  K.prototype.nodeType = 11;
  K.prototype.nodeName = "#document-fragment";
  K.prototype.appendChild = tmp2.prototype.appendChild;
  K.prototype.replaceChild = tmp2.prototype.replaceChild;
  K.prototype.removeChild = tmp2.prototype.removeChild;
});
let closure_19 = B((arg0, arg1) => {
  class it {
    constructor(arg0) {
      return;
    }
    initEvent(arg0, arg1, arg2) {
      this.type = arg0;
      this.bubbles = arg1;
      this.cancelable = arg2;
      return;
    }
    preventDefault() {
      return;
    }
  }
  arg1.exports = it;
});
let closure_20 = B((arg0, arg1) => {
  class Ue {
    constructor() {
      self = this;
      if (closure_117(this, Ue)) {
        str = "head";
        self.head = self.createElement("head");
        str2 = "body";
        self.body = self.createElement("body");
        str3 = "html";
        self.documentElement = self.createElement("html");
        documentElement = self.documentElement;
        appendChildResult = documentElement.appendChild(self.head);
        documentElement2 = self.documentElement;
        appendChildResult1 = documentElement2.appendChild(self.body);
        items = [];
        items[0] = self.documentElement;
        self.childNodes = items;
        num = 9;
        self.nodeType = 9;
        return;
      } else {
        tmp = Ue;
        prototype = Ue.prototype;
        tmp2 = new.target;
        tmp3 = new.target;
        tmp4 = new Ue();
        tmp5 = tmp4;
        return tmp4;
      }
    }
  }
  const hasOwnProperty = Ue;
  ftResult();
  let closure_0 = callback();
  let closure_1 = callback2();
  let closure_2 = callback3();
  const tmp2 = callback8();
  const getOwnPropertyDescriptor = tmp2;
  let closure_4 = callback9();
  let closure_5 = callback10();
  const tmp3 = callback4();
  arg1.exports = Ue;
  const prototype = Ue.prototype;
  prototype.createTextNode = function(arg0) {
    return new closure_2(arg0, this);
  };
  prototype.createElementNS = function(arg0, arg1) {
    let StringResult = null;
    if (null !== arg0) {
      const _String = String;
      StringResult = String(arg0);
      const tmp2 = globalThis;
    }
    return new tmp2(arg1, this, StringResult);
  };
  prototype.createElement = function(arg0) {
    return new tmp2(arg0, this);
  };
  prototype.createDocumentFragment = function() {
    return new closure_4(this);
  };
  prototype.createEvent = (arg0) => new closure_5(arg0);
  prototype.createComment = function(arg0) {
    return new closure_1(arg0, this);
  };
  prototype.getElementById = function(arg0) {
    const callback = String(arg0);
    return callback(this.childNodes, (id) => {
      if (String(id.id) === closure_0) {
        return id;
      }
    }) || null;
  };
  prototype.getElementsByClassName = tmp2.prototype.getElementsByClassName;
  prototype.getElementsByTagName = tmp2.prototype.getElementsByTagName;
  prototype.contains = tmp2.prototype.contains;
  prototype.removeEventListener = callback6();
  prototype.addEventListener = callback5();
  prototype.dispatchEvent = tmp3;
});
let closure_21 = B((arg0, arg1) => {
  let tmp = callback11();
  tmp = new tmp();
  arg1.exports = tmp;
});
const BResult1 = B((arg0, arg1) => {
  if (undefined !== global) {
    let tmp2 = global;
  } else {
    const _window = window;
    tmp2 = "undefined" !== typeof window ? window : {};
  }
  const tmp3 = callback12();
  if ("undefined" !== typeof document) {
    __GLOBAL_DOCUMENT_CACHE@4 = document;
  } else {
    __GLOBAL_DOCUMENT_CACHE@4 = tmp2.__GLOBAL_DOCUMENT_CACHE@4;
    if (!__GLOBAL_DOCUMENT_CACHE_4) {
      tmp2.__GLOBAL_DOCUMENT_CACHE@4 = tmp3;
      __GLOBAL_DOCUMENT_CACHE@4 = tmp3;
    }
  }
  arg1.exports = __GLOBAL_DOCUMENT_CACHE_4;
});
let obj = {};
obj = {
  default: function _default() {
    return ne;
  }
};
for (const key10083 in obj) {
  let tmp20 = key10083;
  obj = {};
  obj.get = obj[key10083];
  obj.enumerable = true;
  let definePropertyResult = defineProperty(obj, key10083, obj);
}
const GResult = G(BResult());
let closure_23 = G(BResult());
let closure_24 = G(BResult());
const obj1 = {
  now() {
    const _performance = mod2.default.performance;
    let timing = _performance;
    if (_performance) {
      timing = _performance.timing;
    }
    let navigationStart = timing;
    if (timing) {
      navigationStart = timing.navigationStart;
    }
    if ("number" === typeof navigationStart) {
      if ("function" === typeof _performance.now) {
        let sum = navigationStart + _performance.now();
      }
      const _Math = Math;
      return Math.round(sum);
    }
    sum = Date.now();
  }
};
function ee() {
  const _crypto = mod.default.crypto;
  let getRandomValues;
  if (null !== _crypto) {
    if (undefined !== _crypto) {
      getRandomValues = _crypto.getRandomValues;
    }
  }
  if ("function" === typeof getRandomValues) {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(32);
    let global = uint8Array;
    const _crypto2 = mod.default.crypto;
    const randomValues = _crypto2.getRandomValues(uint8Array);
    let num7 = 0;
    do {
      uint8Array[num7] = uint8Array[num7] % 16;
      num7 = num7 + 1;
    } while (num7 < 32);
  } else {
    const items = [];
    global = items;
    let num3 = 0;
    do {
      let _Math = Math;
      items[num3] = 16 * Math.random() | 0;
      num3 = num3 + 1;
    } while (num3 < 32);
  }
  let closure_1 = 0;
  const str = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (arg0) => {
    if ("x" === arg0) {
      let str = items[closure_1];
    } else {
      str = 3 & items[closure_1] | 8;
    }
    closure_1 = closure_1 + 1;
    return str.toString(16);
  });
  const str2 = obj1.now();
  let substr;
  if (null != str2) {
    substr = str2.toString(16).substring(3);
    const str3 = str2.toString(16);
  }
  let sum = str;
  if (substr) {
    sum = str.substring(0, 28) + substr;
  }
  return sum;
}
class Oe {
  constructor() {
    random = Math.random();
    str = random * require("module_36") | 0;
    text = `000000${require("module_36")}`;
    return require("module_4294967290");
  }
}
function J(muxId) {
  if (muxId) {
    if (undefined !== tmp.nodeName) {
      if (!tmp.muxId) {
        tmp.muxId = Oe();
      }
      return muxId.muxId;
    }
  }
  const element = document.querySelector(tmp);
  while (true) {
    let tmp4 = element;
    let tmp5 = element;
    if (!element) {
      break;
    } else {
      let tmp6 = element;
      tmp5 = !element.muxId;
      // break
    }
    if (tmp5) {
      let tmp7 = element;
      let tmp8 = muxId;
      element.muxId = tmp;
    }
    let tmp9 = element;
    let tmp10 = null;
    muxId = undefined;
    if (null != element) {
      muxId = element.muxId;
    }
    let tmp12 = muxId;
    if (!muxId) {
      tmp12 = muxId;
    }
    return tmp12;
  }
}
function se(nodeName) {
  if (nodeName) {
    if (undefined !== nodeName.nodeName) {
      let tmp2 = J(nodeName);
      let element = nodeName;
    }
    let str2 = "";
    if (element) {
      str2 = "";
      if (element.nodeName) {
        str2 = element.nodeName.toLowerCase();
        const str3 = element.nodeName;
      }
    }
    const items = [element, tmp2, str2];
    return items;
  }
  element = document.querySelector(nodeName);
  tmp2 = nodeName;
}
let closure_30 = 0;
let closure_31 = 1;
let closure_32 = 2;
let closure_33 = 3;
let closure_34 = 4;
const tmp6 = function Et(arg0) {
  let num = 3;
  if (arguments.length > 1) {
    num = 3;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  const global = num;
  const _console = console;
  if (arg0) {
    const items = [_console, arg0];
    let items1 = items;
  } else {
    items1 = [_console];
  }
  const bind = trace.bind;
  let closure_1 = bind.apply(trace, V(items1));
  const bind2 = info.bind;
  let closure_2 = bind2.apply(info, V(items1));
  const bind3 = debug.bind;
  let closure_3 = bind3.apply(debug, V(items1));
  const bind4 = warn.bind;
  let closure_4 = bind4.apply(warn, V(items1));
  const bind5 = error.bind;
  let closure_5 = bind5.apply(error, V(items1));
  const hasOwnProperty = num;
  const obj = {
    trace() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (num <= closure_30) {
        return callback.apply(undefined, callback6(array));
      }
    },
    debug() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (num <= closure_31) {
        return callback3.apply(undefined, callback6(array));
      }
    },
    info() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (num <= closure_32) {
        return callback2.apply(undefined, callback6(array));
      }
    },
    warn() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (num <= closure_33) {
        return callback4.apply(undefined, callback6(array));
      }
    },
    error() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (num <= closure_34) {
        return callback5.apply(undefined, callback6(array));
      }
    }
  };
  Object.defineProperty(obj, "level", {
    get: () => num,
    set: function(arg0) {
      let tmp = arg0;
      if (arg0 !== this.level) {
        if (null == tmp) {
          tmp = num;
        }
        const num = tmp;
      }
    }
  });
  return obj;
}("[mux]");
let closure_36 = G(BResult());
ftResult();
ftResult1();
class F {
  constructor(arg0) {
    return re(global)[0];
  }
}
function re(str) {
  if ("string" === typeof str) {
    if ("" !== str) {
      const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
      let first;
      if (str2) {
        first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
        const tmp3 = str2.match(/[^\.]+\.[^\.]+$/) || [];
      }
      const items = [str2, first];
      return items;
    }
  }
  return [];
}
let closure_39 = G(BResult());
let closure_40 = {
  exists() {
    const _performance = mod4.default.performance;
    let timing = _performance;
    if (_performance) {
      timing = _performance.timing;
    }
    return undefined !== timing;
  },
  domContentLoadedEventEnd() {
    const _performance = mod4.default.performance;
    let timing = _performance;
    if (_performance) {
      timing = _performance.timing;
    }
    let domContentLoadedEventEnd = timing;
    if (timing) {
      domContentLoadedEventEnd = timing.domContentLoadedEventEnd;
    }
    return domContentLoadedEventEnd;
  },
  navigationStart() {
    const _performance = mod4.default.performance;
    let timing = _performance;
    if (_performance) {
      timing = _performance.timing;
    }
    let navigationStart = timing;
    if (timing) {
      navigationStart = timing.navigationStart;
    }
    return navigationStart;
  }
};
const items = [0, 498536548, 997073096, 651767980];
const items1 = [null, null];
let closure_42 = items1.concat(items);
function _a(obj) {
  let str;
  obj = {};
  for (const key10007 in arg0) {
    let tmp = key10007;
    let tmp2 = arg0[key10007];
    DATA-ID = tmp2.DATA-ID;
    if (-1 === DATA_ID.search("io.litix.data.")) {
      continue;
    } else {
      ({ DATA-ID: str, VALUE: obj[str.replace(str, "io.litix.data.", "")] } = tmp2);
      // continue
    }
    continue;
  }
  return obj;
}
function He(loading) {
  if (loading) {
    const navigationStartResult = closure_40.navigationStart();
    loading = loading.loading;
    const obj = { bytesLoaded: loading.total };
    const _Math = Math;
    obj.requestStart = Math.round(navigationStartResult + loading ? loading.start : loading.trequest);
    const _Math2 = Math;
    obj.responseStart = Math.round(navigationStartResult + loading ? loading.first : loading.tfirst);
    const _Math3 = Math;
    obj.responseEnd = Math.round(navigationStartResult + loading ? loading.end : loading.tload);
    return obj;
  } else {
    return {};
  }
}
function Se(getAllResponseHeaders) {
  if (getAllResponseHeaders) {
    if ("function" === typeof getAllResponseHeaders.getAllResponseHeaders) {
      return pe(getAllResponseHeaders.getAllResponseHeaders());
    }
  }
}
function Nt(requestEndDate, getMetricsFor) {
  let bytesLoaded;
  let url;
  if (requestEndDate) {
    if (requestEndDate.requestEndDate) {
      const _Date = Date;
      ({ url, bytesLoaded } = requestEndDate);
      const date = new Date(requestEndDate.requestStartDate);
      const _Date2 = Date;
      const time = date.getTime();
      const date1 = new Date(requestEndDate.firstByteDate);
      const _Date3 = Date;
      const time1 = date1.getTime();
      const date2 = new Date(requestEndDate.requestEndDate);
      const _isNaN = isNaN;
      const time2 = date2.getTime();
      let num2 = 0;
      if (!isNaN(requestEndDate.duration)) {
        num2 = requestEndDate.duration;
      }
      if ("function" === typeof getMetricsFor.getMetricsFor) {
        let HttpList = getMetricsFor.getMetricsFor(requestEndDate.mediaType).HttpList;
      } else {
        const dashMetrics = getMetricsFor.getDashMetrics();
        HttpList = dashMetrics.getHttpRequests(requestEndDate.mediaType);
      }
      let tmp17Result;
      if (HttpList.length > 0) {
        let str2 = HttpList[HttpList.length - 1]._responseHeaders;
        if (!str2) {
          str2 = "";
        }
        tmp17Result = pe(str2);
        const tmp17 = pe;
      }
      const obj = { requestStart: time, requestResponseStart: time1, requestResponseEnd: time2, requestBytesLoaded: bytesLoaded, requestResponseHeaders: tmp17Result, requestMediaDuration: num2, requestHostname: F(requestEndDate.url), requestUrl: url };
      let tmp18;
      if (tmp17Result) {
        tmp18 = de(tmp17Result);
      }
      obj.requestId = tmp18;
      return obj;
    }
  }
  return {};
}
function pa(str) {
  const match = str.match(/.*codecs\*?="(.*)"/);
  let tmp2;
  if (null !== match) {
    if (undefined !== match) {
      tmp2 = match[1];
    }
  }
  return tmp2;
}
function Ct(log, arg1, on) {
  const global = log;
  const create = arg1;
  const defineProperty = on;
  log = log.log;
  const getOwnPropertyDescriptor = log;
  if (on) {
    if (on.on) {
      on = undefined;
      const tmp3 = function ma(getVersion) {
        getVersion = getVersion.getVersion;
        let first;
        if (null !== getVersion) {
          if (undefined !== obj) {
            const callResult = obj.call(getVersion);
            if (null !== callResult) {
              if (undefined !== str) {
                const parts = str.split(".");
                first = parts.map((replaced) => parseInt(replaced))[0];
              }
            }
          }
        }
        return first;
      }(on);
      function o(arg0, arg1) {
        return arg0.emit(arg1, arg0, arg1);
      }
      const fn = function s(arg0) {
        let data;
        let type;
        ({ data, type } = arg0);
        if (!data) {
          data = {};
        }
        const url = data.url;
        const obj = { "Null": true, "Null": "/assets/design/components/Icon/native/redesign/generated/images", "Null": 24, "Null": 24, "Null": null, "Null": "94a3ac930e81037e0d0d694987ad1d50", request_event_type: type, request_hostname: callback(url), request_url: url };
        o("requestcompleted", obj);
      };
      const getPrototypeOf = fn;
      on.on("manifestLoaded", fn);
      let closure_6 = {};
      function f(getRequests) {
        if ("function" !== typeof getRequests.getRequests) {
          return null;
        } else {
          const obj = { state: "executed" };
          const requests = getRequests.getRequests(obj);
          let tmp = null;
          if (0 !== requests.length) {
            tmp = requests[requests.length - 1];
          }
          return tmp;
        }
      }
      const fn2 = function k(arg0) {
        let bitrateList;
        let chunk;
        let request;
        let type;
        let type2;
        ({ chunk, type, request } = arg0);
        if (!chunk) {
          chunk = {};
        }
        ({ type: type2, bitrateList } = chunk.mediaInfo || {});
        let obj = {};
        arg0 = obj;
        if (!bitrateList) {
          bitrateList = [];
        }
        const item = bitrateList.forEach((width) => {
          obj[arg1] = {};
          obj[arg1].width = width.width;
          obj[arg1].height = width.height;
          obj[arg1].bitrate = width.bandwidth;
          obj[arg1].attrs = {};
        });
        if ("video" === type2) {
          closure_6.video = obj;
        } else if ("audio" === type2) {
          closure_6.audio = obj;
        } else {
          closure_6.media = obj;
        }
        const tmp5 = callback2(request, arg2);
        obj = { request_event_type: type, request_start: tmp5.requestStart, request_response_start: tmp5.requestResponseStart, request_response_end: tmp5.requestResponseEnd, request_bytes_loaded: -1, request_type: `${type2}_init`, request_response_headers: tmp5.requestResponseHeaders, request_hostname: tmp5.requestHostname, request_id: tmp5.requestId, request_url: tmp5.requestUrl, request_media_duration: tmp5.requestMediaDuration, request_rendition_lists: closure_6 };
        o("requestcompleted", obj);
      };
      if (tmp3 >= 4) {
        on.on("initFragmentLoaded", fn2);
      } else {
        on.on("initFragmentLoaded", function g(fragmentModel) {
          let chunk;
          let type;
          ({ type, chunk } = fragmentModel);
          fn2({ type, request: f(fragmentModel.fragmentModel), chunk });
        });
      }
      const fn3 = function c(arg0, arg1, self) {
        let chunk;
        let mediaInfo;
        let request;
        let requestBytesLoaded;
        let requestHostname;
        let requestId;
        let requestMediaDuration;
        let requestResponseEnd;
        let requestResponseHeaders;
        let requestResponseStart;
        let requestStart;
        let requestUrl;
        let start;
        let type;
        ({ chunk, type, request } = arg0);
        if (!chunk) {
          chunk = {};
        }
        ({ mediaInfo, start } = chunk);
        if (!mediaInfo) {
          mediaInfo = {};
        }
        const type2 = mediaInfo.type;
        ({ requestStart, requestResponseStart, requestResponseEnd, requestBytesLoaded, requestResponseHeaders, requestMediaDuration, requestHostname, requestUrl, requestId } = callback2(request, self));
        const qualityFor = self.getQualityFor(type2);
        const bitrateList = self.getCurrentTrackFor(type2).bitrateList;
        if (bitrateList) {
          let obj = { currentLevel: qualityFor, renditionWidth: bitrateList[qualityFor].width || null, renditionHeight: bitrateList[qualityFor].height || null, renditionBitrate: bitrateList[qualityFor].bandwidth };
        } else {
          obj = {};
        }
        obj = { request_event_type: type, request_start: requestStart, request_response_start: requestResponseStart, request_response_end: requestResponseEnd, request_bytes_loaded: requestBytesLoaded, request_type: type2, request_response_headers: requestResponseHeaders, request_hostname: requestHostname, request_id: requestId, request_url: requestUrl, request_media_start_time: start, request_media_duration: requestMediaDuration };
        ({ currentLevel: obj3.request_current_level, renditionBitrate: obj3.request_labeled_bitrate, renditionWidth: obj3.request_video_width, renditionHeight: obj3.request_video_height } = obj);
        o("requestcompleted", obj);
      };
      if (tmp3 >= 4) {
        on.on("mediaFragmentLoaded", fn3);
      } else {
        on.on("mediaFragmentLoaded", function h(fragmentModel) {
          let chunk;
          let type;
          ({ type, chunk } = fragmentModel);
          fn3({ type, request: f(fragmentModel.fragmentModel), chunk });
        });
      }
      const obj = { video: on, audio: on, totalBitrate: on };
      let closure_10 = obj;
      const fn4 = function x(newQuality, arg1, self) {
        if ("number" === typeof newQuality.newQuality) {
          const mediaType = newQuality.mediaType;
          if ("audio" === mediaType) {
            const bitrateInfoListFor = self.getBitrateInfoListFor(mediaType);
            const found = bitrateInfoListFor.find((qualityIndex) => qualityIndex.qualityIndex === qualityIndex.newQuality);
            if (found) {
              if ("number" === typeof found.bitrate) {
                let obj = {};
                callback4(obj, found);
                obj = { codec: self.getCurrentTrackFor(mediaType).codec };
                callback5(obj, obj);
                obj[mediaType] = obj;
                let tmp6;
                if (obj.video) {
                  if ("number" === typeof obj.video.bitrate) {
                    if (obj.video.width) {
                      if (obj.video.height) {
                        const bitrate = obj.video.bitrate;
                        let audio = obj.audio;
                        if (audio) {
                          audio = "number" === typeof obj.audio.bitrate;
                        }
                        let sum = bitrate;
                        if (audio) {
                          sum = bitrate + obj.audio.bitrate;
                        }
                        if (sum !== obj.totalBitrate) {
                          obj.totalBitrate = sum;
                          obj = { video_source_bitrate: sum };
                          obj.video_source_height = obj.video.height;
                          obj.video_source_width = obj.video.width;
                          obj.video_source_codec = callback3(obj.video.codec);
                          tmp6 = obj;
                        }
                      }
                    }
                    log.warn("have bitrate info for video but missing width/height");
                  }
                }
                if (tmp6) {
                  o("renditionchange", tmp6);
                }
              }
            }
            const concat = "missing bitrate info for ".concat;
            log.warn("missing bitrate info for ".concat(mediaType));
          }
        } else {
          log.warn("missing evt.newQuality in qualityChangeRendered event", newQuality);
        }
      };
      let closure_11 = fn4;
      on.on("qualityChangeRendered", fn4);
      const fn5 = function v(request) {
        request = request.request;
        const obj = {};
        if (!request) {
          request = {};
        }
        obj.request_event_type = `${obj.type}_${obj.action}`;
        obj.request_url = request.url;
        obj.request_type = request.mediaType;
        obj.request_hostname = callback(request.url);
        o("requestcanceled", obj);
      };
      let closure_12 = fn5;
      on.on("fragmentLoadingAbandoned", fn5);
      const fn6 = function p(error) {
        error = error.error;
        let request;
        if (null != error) {
          const data = error.data;
          if (null !== data) {
            if (undefined !== data) {
              request = data.request;
            }
          }
        }
        if (!request) {
          request = {};
        }
        let response;
        if (null != error) {
          const data2 = error.data;
          if (null !== data2) {
            if (undefined !== data2) {
              response = data2.response;
            }
          }
        }
        if (!response) {
          response = {};
        }
        let code;
        if (null != error) {
          code = error.code;
        }
        if (27 === code) {
          let obj = { request_error: `${obj.type}_${obj.action}`, request_url: request.url, request_hostname: callback(request.url), request_type: request.mediaType };
          ({ status: obj3.request_error_code, statusText: obj3.request_error_text } = response);
          o("requestfailed", obj);
        }
        if (null != request) {
          if (request.url) {
            const concat = "url: ".concat;
            "url: ".concat(request.url, "\n");
          }
        }
        if (null == response) {
          let str6 = "";
          if (null != response) {
            str6 = "";
          }
          obj = {};
          let code1;
          const sum = tmp5 + tmp6(str6);
          if (null != error) {
            code1 = error.code;
          }
          obj.player_error_code = code1;
          let message;
          if (null != error) {
            message = error.message;
          }
          obj.player_error_message = message;
          obj.player_error_context = sum;
          o("error", obj);
        }
        let status;
        if (null != response) {
          status = response.status;
        }
        const combined = "response: ".concat(status, ", ");
        let statusText;
        if (null != response) {
          statusText = response.statusText;
        }
        str6 = combined.concat(statusText, "\n");
      };
      let closure_13 = fn6;
      on = on.on;
      on("error", fn6);
      on._stopMuxMonitor = () => {
        arg2.off("manifestLoaded", fn);
        arg2.off("initFragmentLoaded", fn2);
        arg2.off("mediaFragmentLoaded", fn3);
        arg2.off("qualityChangeRendered", fn4);
        arg2.off("error", fn6);
        arg2.off("fragmentLoadingAbandoned", fn5);
        delete r0._stopMuxMonitor;
      };
    }
  }
  log.warn("Invalid dash.js player reference. Monitoring blocked.");
}
let closure_49 = 0;
let closure_50 = G(BResult());
let closure_51 = () => {
  const fn = function r(pm) {
    const self = this;
    callback(this, pm);
    callback2(this, "_playbackHeartbeatInterval", undefined);
    callback2(this, "_playheadShouldBeProgressing", undefined);
    callback2(this, "pm", undefined);
    this.pm = pm;
    this._playbackHeartbeatInterval = null;
    this._playheadShouldBeProgressing = false;
    pm.on("playing", () => {
      self._playheadShouldBeProgressing = true;
    });
    const _startPlaybackHeartbeatInterval = this._startPlaybackHeartbeatInterval;
    pm.on("play", _startPlaybackHeartbeatInterval.bind(this));
    const _startPlaybackHeartbeatInterval2 = this._startPlaybackHeartbeatInterval;
    pm.on("playing", _startPlaybackHeartbeatInterval2.bind(this));
    const _startPlaybackHeartbeatInterval3 = this._startPlaybackHeartbeatInterval;
    pm.on("adbreakstart", _startPlaybackHeartbeatInterval3.bind(this));
    const _startPlaybackHeartbeatInterval4 = this._startPlaybackHeartbeatInterval;
    pm.on("adplay", _startPlaybackHeartbeatInterval4.bind(this));
    const _startPlaybackHeartbeatInterval5 = this._startPlaybackHeartbeatInterval;
    pm.on("adplaying", _startPlaybackHeartbeatInterval5.bind(this));
    const _startPlaybackHeartbeatInterval6 = this._startPlaybackHeartbeatInterval;
    pm.on("devicewake", _startPlaybackHeartbeatInterval6.bind(this));
    const _startPlaybackHeartbeatInterval7 = this._startPlaybackHeartbeatInterval;
    pm.on("viewstart", _startPlaybackHeartbeatInterval7.bind(this));
    const _startPlaybackHeartbeatInterval8 = this._startPlaybackHeartbeatInterval;
    pm.on("rebufferstart", _startPlaybackHeartbeatInterval8.bind(this));
    const _stopPlaybackHeartbeatInterval = this._stopPlaybackHeartbeatInterval;
    pm.on("pause", _stopPlaybackHeartbeatInterval.bind(this));
    const _stopPlaybackHeartbeatInterval2 = this._stopPlaybackHeartbeatInterval;
    pm.on("ended", _stopPlaybackHeartbeatInterval2.bind(this));
    const _stopPlaybackHeartbeatInterval3 = this._stopPlaybackHeartbeatInterval;
    pm.on("viewend", _stopPlaybackHeartbeatInterval3.bind(this));
    const _stopPlaybackHeartbeatInterval4 = this._stopPlaybackHeartbeatInterval;
    pm.on("error", _stopPlaybackHeartbeatInterval4.bind(this));
    const _stopPlaybackHeartbeatInterval5 = this._stopPlaybackHeartbeatInterval;
    pm.on("aderror", _stopPlaybackHeartbeatInterval5.bind(this));
    const _stopPlaybackHeartbeatInterval6 = this._stopPlaybackHeartbeatInterval;
    pm.on("adpause", _stopPlaybackHeartbeatInterval6.bind(this));
    const _stopPlaybackHeartbeatInterval7 = this._stopPlaybackHeartbeatInterval;
    pm.on("adended", _stopPlaybackHeartbeatInterval7.bind(this));
    const _stopPlaybackHeartbeatInterval8 = this._stopPlaybackHeartbeatInterval;
    pm.on("adbreakend", _stopPlaybackHeartbeatInterval8.bind(this));
    pm.on("seeked", () => {
      if (arg0.data.player_is_paused) {
        const result = obj._stopPlaybackHeartbeatInterval();
      } else {
        const result1 = obj._startPlaybackHeartbeatInterval();
      }
    });
    pm.on("timeupdate", () => {
      if (null !== self._playbackHeartbeatInterval) {
        arg0.emit("playbackheartbeat");
      }
    });
    pm.on("devicesleep", (arg0, viewer_time) => {
      if (null !== self._playbackHeartbeatInterval) {
        mod.default.clearInterval(self._playbackHeartbeatInterval);
        const obj = { viewer_time: viewer_time.viewer_time };
        arg0.emit("playbackheartbeatend", obj);
        self._playbackHeartbeatInterval = null;
        const _default = mod.default;
      }
    });
  };
  const global = fn;
  let obj = {
    key: "_startPlaybackHeartbeatInterval",
    value() {
      const self = this;
      if (null === this._playbackHeartbeatInterval) {
        const pm = self.pm;
        pm.emit("playbackheartbeat");
        self._playbackHeartbeatInterval = mod.default.setInterval(() => {
          const pm = self.pm;
          pm.emit("playbackheartbeat");
        }, self.pm.playbackHeartbeatTime);
        const _default = mod.default;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "_stopPlaybackHeartbeatInterval",
    value() {
      const self = this;
      this._playheadShouldBeProgressing = false;
      if (null !== this._playbackHeartbeatInterval) {
        mod.default.clearInterval(self._playbackHeartbeatInterval);
        const pm = self.pm;
        pm.emit("playbackheartbeatend");
        self._playbackHeartbeatInterval = null;
        const _default = mod.default;
      }
    }
  };
  items[1] = obj;
  N(fn, items);
  return fn;
}();
const fn = function r(on) {
  const global = on;
  const create = this;
  D(this, fn);
  l(this, "viewErrored", undefined);
  on.on("viewinit", () => {
    self.viewErrored = false;
  });
  on.on("error", (self, player_error_code) => {
    const errorTranslatorResult = self.errorTranslator({ player_error_code: player_error_code.player_error_code, player_error_message: player_error_code.player_error_message, player_error_context: player_error_code.player_error_context, player_error_severity: player_error_code.player_error_severity, player_error_business_exception: player_error_code.player_error_business_exception });
    if (errorTranslatorResult) {
      player_error_code = tmp2.player_error_code;
      let player_error_code2 = player_error_code;
      if (!player_error_code) {
        player_error_code2 = player_error_code.player_error_code;
      }
      self.data.player_error_code = player_error_code2;
      const player_error_message = tmp2.player_error_message;
      let player_error_message2 = player_error_message;
      if (!player_error_message) {
        player_error_message2 = player_error_code.player_error_message;
      }
      self.data.player_error_message = player_error_message2;
      const player_error_context = tmp2.player_error_context;
      let player_error_context2 = player_error_context;
      if (!player_error_context) {
        player_error_context2 = player_error_code.player_error_context;
      }
      self.data.player_error_context = player_error_context2;
      const player_error_severity = tmp2.player_error_severity;
      let player_error_severity2 = player_error_severity;
      if (!player_error_severity) {
        player_error_severity2 = player_error_code.player_error_severity;
      }
      self.data.player_error_severity = player_error_severity2;
      const player_error_business_exception = errorTranslatorResult.player_error_business_exception;
      let player_error_business_exception2 = player_error_business_exception;
      if (!player_error_business_exception) {
        player_error_business_exception2 = player_error_code.player_error_business_exception;
      }
      self.data.player_error_business_exception = player_error_business_exception2;
      self.viewErrored = true;
    }
  });
  on.on("aftererror", () => {
    const data = arg0.data;
    let tmp = null === data;
    if (!tmp) {
      tmp = undefined === data;
    }
    if (!tmp) {
      delete r2.player_error_code;
    }
    const data2 = arg0.data;
    let tmp2 = null === data2;
    if (!tmp2) {
      tmp2 = undefined === data2;
    }
    if (!tmp2) {
      delete r2.player_error_message;
    }
    const data3 = arg0.data;
    let tmp3 = null === data3;
    if (!tmp3) {
      tmp3 = undefined === data3;
    }
    if (!tmp3) {
      delete r2.player_error_context;
    }
    const data4 = arg0.data;
    let tmp4 = null === data4;
    if (!tmp4) {
      tmp4 = undefined === data4;
    }
    if (!tmp4) {
      delete r2.player_error_severity;
    }
    const data5 = arg0.data;
    let tmp5 = null === data5;
    if (!tmp5) {
      tmp5 = undefined === data5;
    }
    if (!tmp5) {
      delete r0.player_error_business_exception;
    }
  });
};
let closure_53 = () => {
  const fn = function r(pm) {
    callback(this, fn);
    callback2(this, "_watchTimeTrackerLastCheckedTime", undefined);
    callback2(this, "pm", undefined);
    this.pm = pm;
    this._watchTimeTrackerLastCheckedTime = null;
    const _updateWatchTime = this._updateWatchTime;
    pm.on("playbackheartbeat", _updateWatchTime.bind(this));
    const _clearWatchTimeState = this._clearWatchTimeState;
    pm.on("playbackheartbeatend", _clearWatchTimeState.bind(this));
  };
  const global = fn;
  let obj = {
    key: "_updateWatchTime",
    value(arg0, viewer_time) {
      const self = this;
      viewer_time = viewer_time.viewer_time;
      if (null === this._watchTimeTrackerLastCheckedTime) {
        self._watchTimeTrackerLastCheckedTime = viewer_time;
      }
      callback3(self.pm.data, "view_watch_time", viewer_time - self._watchTimeTrackerLastCheckedTime);
      self._watchTimeTrackerLastCheckedTime = viewer_time;
    }
  };
  const items = [obj, ];
  obj = {
    key: "_clearWatchTimeState",
    value(arg0, arg1) {
      this._updateWatchTime(arg0, arg1);
      this._watchTimeTrackerLastCheckedTime = null;
    }
  };
  items[1] = obj;
  N(fn, items);
  return fn;
}();
let closure_54 = () => {
  const fn = function r(pm) {
    callback(this, this);
    callback2(this, "_playbackTimeTrackerLastPlayheadPosition", undefined);
    callback2(this, "_lastTime", undefined);
    callback2(this, "_isAdPlaying", undefined);
    callback2(this, "_callbackUpdatePlaybackTime", undefined);
    callback2(this, "pm", undefined);
    this.pm = pm;
    this._playbackTimeTrackerLastPlayheadPosition = -1;
    this._lastTime = closure_25.now();
    this._isAdPlaying = false;
    this._callbackUpdatePlaybackTime = null;
    pm.on("viewinit", () => {
      self.pm.data.view_playing_time_ms_cumulative = 0;
    });
    const _startPlaybackTimeTracking = this._startPlaybackTimeTracking;
    const bindResult = _startPlaybackTimeTracking.bind(this);
    pm.on("playing", bindResult);
    pm.on("adplaying", bindResult);
    pm.on("seeked", bindResult);
    pm.on("rebufferend", bindResult);
    const _stopPlaybackTimeTracking = this._stopPlaybackTimeTracking;
    const bindResult1 = _stopPlaybackTimeTracking.bind(this);
    pm.on("playbackheartbeatend", bindResult1);
    pm.on("seeking", bindResult1);
    pm.on("rebufferstart", bindResult1);
    pm.on("adplaying", () => {
      self._isAdPlaying = true;
    });
    pm.on("adended", () => {
      self._isAdPlaying = false;
    });
    pm.on("adpause", () => {
      self._isAdPlaying = false;
    });
    pm.on("adbreakstart", () => {
      self._isAdPlaying = false;
    });
    pm.on("adbreakend", () => {
      self._isAdPlaying = false;
    });
    pm.on("adplay", () => {
      self._isAdPlaying = false;
    });
    pm.on("viewinit", () => {
      self._playbackTimeTrackerLastPlayheadPosition = -1;
      self._lastTime = closure_25.now();
      self._isAdPlaying = false;
      self._callbackUpdatePlaybackTime = null;
    });
  };
  const global = fn;
  let obj = {
    key: "_startPlaybackTimeTracking",
    value() {
      const self = this;
      if (null === this._callbackUpdatePlaybackTime) {
        const _updatePlaybackTime = self._updatePlaybackTime;
        self._callbackUpdatePlaybackTime = _updatePlaybackTime.bind(self);
        self._playbackTimeTrackerLastPlayheadPosition = self.pm.data.player_playhead_time;
        self._lastTime = closure_25.now();
        const pm = self.pm;
        pm.on("playbackheartbeat", self._callbackUpdatePlaybackTime);
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "_stopPlaybackTimeTracking",
    value() {
      const self = this;
      if (this._callbackUpdatePlaybackTime) {
        self._updatePlaybackTime();
        const pm = self.pm;
        pm.off("playbackheartbeat", self._callbackUpdatePlaybackTime);
        self._callbackUpdatePlaybackTime = null;
        self._playbackTimeTrackerLastPlayheadPosition = -1;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "_updatePlaybackTime",
    value() {
      const self = this;
      const tmp = this.pm.data.player_playhead_time || 0;
      const nowResult = closure_25.now();
      const diff = nowResult - self._lastTime;
      if (self._playbackTimeTrackerLastPlayheadPosition >= 0) {
        if (tmp > self._playbackTimeTrackerLastPlayheadPosition) {
          let num = tmp - self._playbackTimeTrackerLastPlayheadPosition;
        }
        let tmp4 = num > 0;
        if (tmp4) {
          tmp4 = num <= 1000;
        }
        if (tmp4) {
          callback3(self.pm.data, "view_content_playback_time", num);
        }
        let tmp8 = null !== self._callbackUpdatePlaybackTime && diff > 0;
        if (tmp8) {
          tmp8 = diff <= 1000;
        }
        if (tmp8) {
          if (self._isAdPlaying) {
            callback3(self.pm.data, "ad_playing_time_ms_cumulative", diff);
          }
          callback3(self.pm.data, "view_playing_time_ms_cumulative", diff);
        }
        self._playbackTimeTrackerLastPlayheadPosition = tmp;
        self._lastTime = nowResult;
      }
      num = -1;
      if (self._isAdPlaying) {
        num = diff;
      }
    }
  };
  items[2] = obj;
  N(fn, items);
  return fn;
}();
let closure_55 = () => {
  const fn = function r(pm) {
    callback(this, pm);
    callback2(this, "pm", undefined);
    this.pm = pm;
    const _updatePlayheadTime = this._updatePlayheadTime;
    const bindResult = _updatePlayheadTime.bind(this);
    pm.on("playbackheartbeat", bindResult);
    pm.on("playbackheartbeatend", bindResult);
    pm.on("timeupdate", bindResult);
    pm.on("destroy", () => {
      arg0.off("timeupdate", bindResult);
    });
  };
  const global = fn;
  let obj = {
    key: "_updateMaxPlayheadPosition",
    value() {
      const self = this;
      if (undefined === this.pm.data.view_max_playhead_position) {
        let player_playhead_time = self.pm.data.player_playhead_time;
      } else {
        const _Math = Math;
        player_playhead_time = Math.max(self.pm.data.view_max_playhead_position, self.pm.data.player_playhead_time);
      }
      this.pm.data.view_max_playhead_position = player_playhead_time;
    }
  };
  const items = [obj, ];
  obj = {
    key: "_updatePlayheadTime",
    value(arg0, player_playhead_time) {
      const self = this;
      let fn = this;
      fn = function n() {
        let currentFragmentStart = self.pm.currentFragmentPDT;
        if (currentFragmentStart) {
          currentFragmentStart = self.pm.currentFragmentStart;
        }
        if (currentFragmentStart) {
          self.pm.data.player_program_time = self.pm.currentFragmentPDT + self.pm.data.player_playhead_time - self.pm.currentFragmentStart;
        }
      };
      if (player_playhead_time) {
        if (player_playhead_time.player_playhead_time) {
          self.pm.data.player_playhead_time = player_playhead_time.player_playhead_time;
          fn();
          const result = self._updateMaxPlayheadPosition();
        }
      }
      if (self.pm.getPlayheadTime) {
        const pm = self.pm;
        const playheadTime = pm.getPlayheadTime();
        if (undefined !== playheadTime) {
          self.pm.data.player_playhead_time = playheadTime;
          fn();
          const result1 = self._updateMaxPlayheadPosition();
        }
      }
    }
  };
  items[1] = obj;
  N(fn, items);
  return fn;
}();
let closure_56 = 300000;
const fn2 = function r(disableRebufferTracking) {
  const global = disableRebufferTracking;
  D(this, fn2);
  if (!disableRebufferTracking.disableRebufferTracking) {
    function i(arg0, arg1) {
      a(arg1);
      let closure_1;
    }
    function a(viewer_time) {
      if (viewer_time) {
        callback(viewer_time.data, "view_rebuffer_duration", viewer_time.viewer_time - viewer_time);
        viewer_time = viewer_time.viewer_time;
        if (viewer_time.data.view_rebuffer_duration > closure_56) {
          viewer_time.emit("viewend");
          viewer_time.send("viewend");
          const log = viewer_time.mux.log;
          const concat = "Ending view after rebuffering for longer than ".concat;
          log.warn("Ending view after rebuffering for longer than ".concat(closure_56, "ms, future events will be ignored unless a programchange or videochange occurs."));
        }
      }
      let tmp11 = viewer_time.data.view_watch_time >= 0;
      if (tmp11) {
        tmp11 = viewer_time.data.view_rebuffer_count > 0;
      }
      if (tmp11) {
        viewer_time.data.view_rebuffer_frequency = viewer_time.data.view_rebuffer_count / viewer_time.data.view_watch_time;
        viewer_time.data.view_rebuffer_percentage = viewer_time.data.view_rebuffer_duration / viewer_time.data.view_watch_time;
      }
    }
    disableRebufferTracking.on("playbackheartbeat", (arg0, arg1) => a(arg1));
    disableRebufferTracking.on("rebufferstart", (self, viewer_time) => {
      if (!viewer_time) {
        callback(self.data, "view_rebuffer_count", 1);
        viewer_time = viewer_time.viewer_time;
        self.one("rebufferend", i);
      }
    });
    disableRebufferTracking.on("viewinit", () => {
      let closure_1;
      arg0.off("rebufferend", i);
    });
  }
};
let closure_58 = () => {
  const fn = function r(pm) {
    const self = this;
    callback(this, this);
    callback2(this, "_lastCheckedTime", undefined);
    callback2(this, "_lastPlayheadTime", undefined);
    callback2(this, "_lastPlayheadTimeUpdatedTime", undefined);
    callback2(this, "_rebuffering", undefined);
    callback2(this, "pm", undefined);
    this.pm = pm;
    if (tmp7) {
      self._lastCheckedTime = null;
      self._lastPlayheadTime = null;
      self._lastPlayheadTimeUpdatedTime = null;
      const _checkIfRebuffering = self._checkIfRebuffering;
      pm.on("playbackheartbeat", _checkIfRebuffering.bind(self));
      const _cleanupRebufferTracker = self._cleanupRebufferTracker;
      pm.on("playbackheartbeatend", _cleanupRebufferTracker.bind(self));
      pm.on("seeking", () => {
        const result = self._cleanupRebufferTracker(null, { viewer_time: closure_25.now() });
      });
    }
  };
  const global = fn;
  let obj = {
    key: "_checkIfRebuffering",
    value(arg0, viewer_time) {
      const self = this;
      if (!this.pm.seekingTracker.isSeeking) {
        if (!self.pm.adTracker.isAdBreak) {
          if (self.pm.playbackHeartbeat._playheadShouldBeProgressing) {
            if (null !== self._lastCheckedTime) {
              if (self._lastPlayheadTime === self.pm.data.player_playhead_time) {
                if (tmp5) {
                  if (!self._rebuffering) {
                    self._rebuffering = true;
                    const pm = self.pm;
                    const obj = { viewer_time: self._lastPlayheadTimeUpdatedTime };
                    pm.emit("rebufferstart", obj);
                  }
                }
                self._lastCheckedTime = viewer_time.viewer_time;
                const tmp5 = "number" === typeof self.pm.sustainedRebufferThreshold && tmp4 >= self.pm.sustainedRebufferThreshold;
              } else {
                const result = self._cleanupRebufferTracker(arg0, viewer_time, true);
              }
            } else {
              const result1 = self._prepareRebufferTrackerState(viewer_time.viewer_time);
            }
          }
        }
      }
      const result2 = self._cleanupRebufferTracker(arg0, viewer_time);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "_clearRebufferTrackerState",
    value() {
      this._lastCheckedTime = null;
      this._lastPlayheadTime = null;
      this._lastPlayheadTimeUpdatedTime = null;
    }
  };
  items[1] = obj;
  obj = {
    key: "_prepareRebufferTrackerState",
    value(_lastCheckedTime) {
      this._lastCheckedTime = _lastCheckedTime;
      this._lastPlayheadTime = this.pm.data.player_playhead_time;
      this._lastPlayheadTimeUpdatedTime = _lastCheckedTime;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_cleanupRebufferTracker",
    value(arg0, viewer_time) {
      const self = this;
      if (self._rebuffering) {
        self._rebuffering = false;
        const pm3 = self.pm;
        let obj = { viewer_time: viewer_time.viewer_time };
        pm3.emit("rebufferend", obj);
      } else if (null !== self._lastCheckedTime) {
        const diff = self.pm.data.player_playhead_time - self._lastPlayheadTime;
        const diff1 = viewer_time.viewer_time - self._lastPlayheadTimeUpdatedTime;
        let tmp3 = "number" === typeof self.pm.minimumRebufferDuration;
        if (tmp3) {
          tmp3 = diff > 0;
        }
        if (tmp3) {
          tmp3 = diff1 - diff > self.pm.minimumRebufferDuration;
        }
        if (tmp3) {
          self._lastCheckedTime = null;
          const pm = self.pm;
          obj = { viewer_time: self._lastPlayheadTimeUpdatedTime };
          pm.emit("rebufferstart", obj);
          const pm2 = self.pm;
          obj = { viewer_time: self._lastPlayheadTimeUpdatedTime + diff1 - diff };
          pm2.emit("rebufferend", obj);
        }
      }
      if (tmp) {
        const result = self._prepareRebufferTrackerState(viewer_time.viewer_time);
      } else {
        const result1 = self._clearRebufferTrackerState();
      }
    }
  };
  N(fn, items);
  return fn;
}();
let closure_59 = () => {
  const fn = function r(pm) {
    const self = this;
    callback(this, pm);
    callback2(this, "pm", undefined);
    this.pm = pm;
    pm.on("viewinit", (self) => {
      const data = self.data;
      self = data.view_id;
      if (!data.view_program_changed) {
        const fn = function n(type, viewer_time) {
          viewer_time = viewer_time.viewer_time;
          let tmp = "playing" === type.type;
          if (tmp) {
            tmp = undefined === view_id.data.view_time_to_first_frame;
          }
          if (!tmp) {
            let tmp3 = "adplaying" === type.type;
            if (tmp3) {
              let _inPrerollPositionResult = undefined === view_id.data.view_time_to_first_frame;
              if (!_inPrerollPositionResult) {
                _inPrerollPositionResult = fn._inPrerollPosition();
              }
              tmp3 = _inPrerollPositionResult;
            }
            tmp = tmp3;
          }
          if (tmp) {
            if (!viewer_time) {
              viewer_time = closure_25.now();
            }
            const result = fn.calculateTimeToFirstFrame(viewer_time, view_id);
          }
        };
        self = fn;
        self.one("playing", fn);
        self.one("adplaying", fn);
        self.one("viewend", () => {
          view_id.off("playing", fn);
          view_id.off("adplaying", fn);
        });
      }
    });
  };
  const global = fn;
  let obj = {
    key: "_inPrerollPosition",
    value() {
      let tmp = undefined === this.pm.data.view_content_playback_time;
      if (!tmp) {
        tmp = this.pm.data.view_content_playback_time <= 1000;
      }
      return tmp;
    }
  };
  const items = [obj, ];
  obj = {
    key: "calculateTimeToFirstFrame",
    value(viewer_time) {
      const self = this;
      if (arg1 === this.pm.data.view_id) {
        const watchTimeTracker = self.pm.watchTimeTracker;
        const obj = { viewer_time };
        watchTimeTracker._updateWatchTime(null, obj);
        self.pm.data.view_time_to_first_frame = self.pm.data.view_watch_time;
        if (tmp) {
          self.pm.data.view_aggregate_startup_time = self.pm.data.view_start + self.pm.data.view_watch_time - self.pm.pageLoadInitTime;
        }
        const tmp = (self.pm.data.player_autoplay_on || self.pm.data.video_is_autoplay) && self.pm.pageLoadInitTime;
      }
    }
  };
  items[1] = obj;
  N(fn, items);
  return fn;
}();
const fn3 = function r(on) {
  const global = on;
  const create = this;
  D(this, fn3);
  l(this, "_lastPlayerHeight", undefined);
  l(this, "_lastPlayerWidth", undefined);
  l(this, "_lastPlayheadPosition", undefined);
  l(this, "_lastSourceHeight", undefined);
  l(this, "_lastSourceWidth", undefined);
  on.on("viewinit", () => {
    self._lastPlayheadPosition = -1;
  });
  const items = ["ChangePhoneReason", "AVErrorNoAudioInputDetectedDefinition", "Array", "keyModifierControl", "Array", "getWindowSize", "r", "transformSlayerApplicationStorefrontSummaryServer", "a", "useFullscreenPlaceholderCount"];
  const item = items.forEach((arg0) => {
    arg0.on(arg0, () => {
      if (closure_1._lastPlayheadPosition >= 0) {
        if (closure_0.data.player_playhead_time >= 0) {
          if (closure_1._lastPlayerWidth >= 0) {
            if (closure_1._lastSourceWidth > 0) {
              if (closure_1._lastPlayerHeight >= 0) {
                if (closure_1._lastSourceHeight > 0) {
                  const diff = closure_0.data.player_playhead_time - closure_1._lastPlayheadPosition;
                  if (diff < 0) {
                    closure_1._lastPlayheadPosition = -1;
                  } else {
                    const _Math = Math;
                    const bound = Math.min(closure_1._lastPlayerWidth / closure_1._lastSourceWidth, closure_1._lastPlayerHeight / closure_1._lastSourceHeight);
                    const _Math2 = Math;
                    const bound1 = Math.max(0, bound - 1);
                    const _Math3 = Math;
                    const bound2 = Math.max(0, 1 - bound);
                    let num = closure_0.data.view_max_upscale_percentage;
                    if (!num) {
                      num = 0;
                    }
                    closure_0.data.view_max_upscale_percentage = Math.max(num, bound1);
                    let num2 = closure_0.data.view_max_downscale_percentage;
                    if (!num2) {
                      num2 = 0;
                    }
                    closure_0.data.view_max_downscale_percentage = Math.max(num2, bound2);
                    callback(closure_0.data, "view_total_content_playback_time", diff);
                    callback(closure_0.data, "view_total_upscaling", bound1 * diff);
                    callback(closure_0.data, "view_total_downscaling", bound2 * diff);
                  }
                }
              }
            }
          }
        }
      }
      closure_1._lastPlayheadPosition = -1;
    });
  });
  const items1 = [];
  const item1 = items1.forEach((arg0) => {
    arg0.on(arg0, () => {
      closure_1._lastPlayheadPosition = closure_0.data.player_playhead_time;
      closure_1._lastPlayerWidth = closure_0.data.player_width;
      closure_1._lastPlayerHeight = closure_0.data.player_height;
      closure_1._lastSourceWidth = closure_0.data.video_source_width;
      closure_1._lastSourceHeight = closure_0.data.video_source_height;
    });
  });
};
const fn4 = function r(on) {
  const global = on;
  const create = this;
  D(this, fn4);
  l(this, "isSeeking", undefined);
  this.isSeeking = false;
  let closure_2 = -1;
  function a() {
    const nowResult = closure_25.now();
    let tmp3 = closure_2;
    if (!closure_2) {
      tmp3 = nowResult;
    }
    const diff = (arg0.data.viewer_time || nowResult) - tmp3;
    callback(arg0.data, "view_seek_duration", diff);
    let num = arg0.data.view_max_seek_time;
    if (!num) {
      num = 0;
    }
    arg0.data.view_max_seek_time = Math.max(num, diff);
    self.isSeeking = false;
    closure_2 = -1;
  }
  on.on("seeking", (self, viewer_time) => {
    const merged = Object.assign(self.data, viewer_time);
    if (self.isSeeking) {
      if (viewer_time.viewer_time - viewer_time <= 2000) {
        viewer_time = viewer_time.viewer_time;
      }
    }
    if (self.isSeeking) {
      a();
    }
    self.isSeeking = true;
    viewer_time = viewer_time.viewer_time;
    callback(self.data, "view_seek_count", 1);
    self.send("seeking");
  });
  on.on("seeked", () => {
    a();
  });
  on.on("viewend", () => {
    if (self.isSeeking) {
      a();
      arg0.send("seeked");
    }
    self.isSeeking = false;
    let closure_2 = -1;
  });
};
function Xt(arr) {
  arr.push(arg1);
  const sorted = arr.sort((viewer_time, viewer_time2) => viewer_time.viewer_time - viewer_time2.viewer_time);
}
let closure_63 = [true, true, true, true, true, true, true, true, true, true, true];
let closure_64 = () => {
  const fn = function r(pm) {
    let fn = pm;
    const self = this;
    callback3(this, fn);
    callback4(this, "_adHasPlayed", undefined);
    callback4(this, "_adRequests", undefined);
    callback4(this, "_adResponses", undefined);
    callback4(this, "_currentAdRequestNumber", undefined);
    callback4(this, "_currentAdResponseNumber", undefined);
    callback4(this, "_prerollPlayTime", undefined);
    callback4(this, "_wouldBeNewAdPlay", undefined);
    callback4(this, "isAdBreak", undefined);
    callback4(this, "pm", undefined);
    this.pm = pm;
    pm.on("viewinit", () => {
      self.isAdBreak = false;
      self._currentAdRequestNumber = 0;
      self._currentAdResponseNumber = 0;
      self._adRequests = [];
      self._adResponses = [];
      self._adHasPlayed = false;
      self._wouldBeNewAdPlay = true;
      self._prerollPlayTime = undefined;
    });
    const item = closure_63.forEach((arg0) => {
      const _updateAdData = self._updateAdData;
      return arg0.on(arg0, _updateAdData.bind(self));
    });
    fn = function i() {
      self.isAdBreak = false;
    };
    pm.on("adbreakstart", () => {
      self.isAdBreak = true;
    });
    pm.on("play", fn);
    pm.on("playing", fn);
    pm.on("viewend", fn);
    pm.on("adrequest", (arg0, arg1) => {
      self._currentAdRequestNumber = +self._currentAdRequestNumber + 1;
      callback(self._adRequests, Object.assign({ ad_request_id: `generatedAdRequestId${+self._currentAdRequestNumber}` }, arg1));
      callback2(arg0.data, "view_ad_request_count");
      if (self.inPrerollPosition()) {
        arg0.data.view_preroll_requested = true;
        if (!self._adHasPlayed) {
          callback2(arg0.data, "view_preroll_request_count");
        }
      }
    });
    pm.on("adresponse", (arg0, arg1) => {
      self._currentAdResponseNumber = +self._currentAdResponseNumber + 1;
      const merged = Object.assign({ ad_request_id: `generatedAdRequestId${tmp}` }, arg1);
      callback(self._adResponses, merged);
      const findAdRequestResult = self.findAdRequest(merged.ad_request_id);
      if (findAdRequestResult) {
        const _Math = Math;
        callback2(arg0.data, "view_ad_request_time", Math.max(0, merged.viewer_time - findAdRequestResult.viewer_time));
      }
    });
    pm.on("adplay", (arg0, viewer_time) => {
      self._adHasPlayed = true;
      if (self._wouldBeNewAdPlay) {
        self._wouldBeNewAdPlay = false;
        callback2(arg0.data, "view_ad_played_count");
      }
      let inPrerollPositionResult = self.inPrerollPosition();
      if (inPrerollPositionResult) {
        inPrerollPositionResult = !arg0.data.view_preroll_played;
      }
      if (inPrerollPositionResult) {
        arg0.data.view_preroll_played = true;
        if (self._adRequests.length > 0) {
          const _Math = Math;
          arg0.data.view_preroll_request_time = Math.max(0, viewer_time.viewer_time - self._adRequests[0].viewer_time);
        }
        if (arg0.data.view_start) {
          const _Math2 = Math;
          arg0.data.view_startup_preroll_request_time = Math.max(0, viewer_time.viewer_time - arg0.data.view_start);
        }
        self._prerollPlayTime = viewer_time.viewer_time;
      }
    });
    pm.on("adplaying", (arg0, viewer_time) => {
      let inPrerollPositionResult = self.inPrerollPosition();
      if (inPrerollPositionResult) {
        inPrerollPositionResult = undefined === arg0.data.view_preroll_load_time;
      }
      if (inPrerollPositionResult) {
        inPrerollPositionResult = undefined !== self._prerollPlayTime;
      }
      if (inPrerollPositionResult) {
        arg0.data.view_preroll_load_time = viewer_time.viewer_time - self._prerollPlayTime;
        arg0.data.view_startup_preroll_load_time = viewer_time.viewer_time - self._prerollPlayTime;
      }
    });
    pm.on("adclicked", (arg0, arg1) => {
      if (!self._wouldBeNewAdPlay) {
        callback2(arg0.data, "view_ad_clicked_count");
      }
    });
    pm.on("adskipped", (arg0, arg1) => {
      if (!self._wouldBeNewAdPlay) {
        callback2(arg0.data, "view_ad_skipped_count");
      }
    });
    pm.on("adended", () => {
      self._wouldBeNewAdPlay = true;
    });
    pm.on("aderror", () => {
      self._wouldBeNewAdPlay = true;
    });
  };
  const global = fn;
  let obj = {
    key: "inPrerollPosition",
    value() {
      let tmp = undefined === this.pm.data.view_content_playback_time;
      if (!tmp) {
        tmp = this.pm.data.view_content_playback_time <= 1000;
      }
      return tmp;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "findAdRequest",
    value(arg0) {
      const self = this;
      let num = 0;
      if (0 < this._adRequests.length) {
        while (self._adRequests[num].ad_request_id !== arg0) {
          num = num + 1;
        }
        return self._adRequests[num];
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "_updateAdData",
    value(arg0, ad_tag_url) {
      const self = this;
      if (this.inPrerollPosition()) {
        if (!self.pm.data.view_preroll_ad_tag_hostname) {
          if (ad_tag_url.ad_tag_url) {
            [self.pm.data.view_preroll_ad_tag_hostname, self.pm.data.view_preroll_ad_tag_domain] = callback2(callback(ad_tag_url.ad_tag_url), 2);
            const tmp3 = callback2(callback(ad_tag_url.ad_tag_url), 2);
          }
        }
        if (!self.pm.data.view_preroll_ad_asset_hostname) {
          if (ad_tag_url.ad_asset_url) {
            [self.pm.data.view_preroll_ad_asset_hostname, self.pm.data.view_preroll_ad_asset_domain] = callback2(callback(ad_tag_url.ad_asset_url), 2);
            const tmp6 = callback2(callback(ad_tag_url.ad_asset_url), 2);
          }
        }
        self.pm.data.ad_type = "preroll";
      }
      let ad_asset_url;
      if (null != ad_tag_url) {
        ad_asset_url = ad_tag_url.ad_asset_url;
      }
      self.pm.data.ad_asset_url = ad_asset_url;
      ad_tag_url = undefined;
      if (null != ad_tag_url) {
        ad_tag_url = ad_tag_url.ad_tag_url;
      }
      self.pm.data.ad_tag_url = ad_tag_url;
      let ad_creative_id;
      if (null != ad_tag_url) {
        ad_creative_id = ad_tag_url.ad_creative_id;
      }
      self.pm.data.ad_creative_id = ad_creative_id;
      let ad_id;
      if (null != ad_tag_url) {
        ad_id = ad_tag_url.ad_id;
      }
      self.pm.data.ad_id = ad_id;
      let ad_universal_id;
      if (null != ad_tag_url) {
        ad_universal_id = ad_tag_url.ad_universal_id;
      }
      self.pm.data.ad_universal_id = ad_universal_id;
      if (tmp12) {
        let ad_type;
        if (null != ad_tag_url) {
          ad_type = ad_tag_url.ad_type;
        }
        self.pm.data.ad_type = ad_type;
      }
    }
  };
  items[2] = obj;
  N(fn, items);
  return fn;
}();
const fn5 = function r(one) {
  const global = one;
  const create = this;
  D(this, fn5);
  l(this, "lastWallClockTime", undefined);
  const fn = function i() {
    self.lastWallClockTime = closure_25.now();
    arg0.on("before*", a);
  };
  const defineProperty = fn;
  function a(self) {
    const nowResult = closure_25.now();
    const lastWallClockTime = self.lastWallClockTime;
    self.lastWallClockTime = nowResult;
    if (nowResult - lastWallClockTime > 30000) {
      let obj = { viewer_time: lastWallClockTime };
      self.emit("devicesleep", obj);
      const _Object = Object;
      obj = { viewer_time: lastWallClockTime };
      const merged = Object.assign(self.data, obj);
      self.send("devicesleep");
      obj = { viewer_time: nowResult };
      self.emit("devicewake", obj);
      const _Object2 = Object;
      const obj1 = { viewer_time: nowResult };
      const merged1 = Object.assign(self.data, obj1);
      self.send("devicewake");
    }
  }
  one.one("playbackheartbeat", fn);
  one.on("playbackheartbeatend", (self) => {
    self.off("before*", a);
    self.one("playbackheartbeat", fn);
  });
};
let closure_66 = G(BResult());
let closure_67 = () => {
  const fn = function e(arg0) {
    const r = arg0;
    const fn = function i(self) {
      let tmp2 = arg1;
      if ("undefined" !== typeof document) {
        if (arguments.length > 1) {
          let obj = { path: "/" };
          const tmp35 = self(obj, fn.defaults, arg2);
          if ("number" === typeof tmp35.expires) {
            const _Date = Date;
            const date = new Date();
            date.setMilliseconds(date.getMilliseconds() + 86400000 * tmp36.expires);
            tmp36.expires = date;
          }
          const _JSON2 = JSON;
          const json = JSON.stringify(tmp2);
          if (obj6.test(json)) {
            tmp2 = json;
          }
          while (true) {
            let tmp45 = self;
            if (self.write) {
              let tmp48 = self;
              let tmp49 = tmp2;
              let tmp50 = self;
              let writeResult = self.write(tmp2, self);
            } else {
              let _encodeURIComponent = encodeURIComponent;
              let _String = String;
              let tmp46 = tmp2;
              let str10 = encodeURIComponent(String(tmp2));
              let _decodeURIComponent3 = decodeURIComponent;
              writeResult = str10.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
            }
            let tmp51 = writeResult;
            let _encodeURIComponent2 = encodeURIComponent;
            let _String2 = String;
            let tmp52 = self;
            let str11 = encodeURIComponent(String(self));
            let tmp53 = str11;
            let _decodeURIComponent4 = decodeURIComponent;
            let str12 = str11.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
            let tmp54 = str12;
            let _escape = escape;
            let replaced = str12.replace(/[\(\)]/g, escape);
            let tmp56 = replaced;
            let items = [replaced, , , , , , ];
            let str13 = "=";
            items[1] = "=";
            items[2] = writeResult;
            let tmp57 = tmp35;
            let str14 = "";
            let str15 = "";
            if (tmp36.expires) {
              let tmp58 = tmp35;
              let expires = tmp36.expires;
              let str16 = "; expires=";
              str15 = `; expires=${expires.toUTCString()}`;
            }
            items[3] = str15;
            let tmp59 = tmp35;
            let str17 = "";
            if (tmp36.path) {
              let tmp60 = tmp35;
              let str18 = "; path=";
              str17 = `; path=${tmp36.path}`;
            }
            items[4] = str17;
            let tmp61 = tmp35;
            let str19 = "";
            if (tmp36.domain) {
              let tmp62 = tmp35;
              let str20 = "; domain=";
              str19 = `; domain=${tmp36.domain}`;
            }
            items[5] = str19;
            let str21 = "";
            if (tmp35.secure) {
              str21 = "; secure";
            }
            items[6] = str21;
            let joined = items.join("");
            document.cookie = joined;
            return joined;
          }
          const obj6 = /^[\{\[]/;
        } else {
          if (!self) {
            obj = {};
          }
          const _document = document;
          if (document.cookie) {
            const _document2 = document;
            let parts = document.cookie.split("; ");
            const str = document.cookie;
          } else {
            parts = [];
          }
          const tmp3 = /(%[0-9A-Z]{2})+/g;
          let num3 = 0;
          if (0 < parts.length) {
            while (true) {
              let tmp4 = parts;
              let tmp5 = num3;
              let str5 = arr2[num3];
              let parts1 = str5.split("=");
              let tmp6 = parts1;
              let substr = parts1.slice(1);
              let str6 = substr.join("=");
              let substr1 = str6;
              if ("\"" === str6.charAt(0)) {
                let tmp7 = substr1;
                substr1 = substr1.slice(1, -1);
              }
              let tmp8 = parts1;
              let str7 = tmp6[0];
              let tmp9 = tmp3;
              let _decodeURIComponent = decodeURIComponent;
              let replaced1 = str7.replace(tmp3, decodeURIComponent);
              let tmp11 = self;
              let obj3 = self;
              if (self.read) {
                let tmp18 = substr1;
                let tmp19 = replaced1;
                let readResult = obj3.read(substr1, replaced1);
              } else {
                let tmp12 = substr1;
                let tmp13 = replaced1;
                let obj3Result = obj3(substr1, replaced1);
                readResult = obj3Result;
                if (!obj3Result) {
                  let tmp16 = substr1;
                  let tmp17 = tmp3;
                  let _decodeURIComponent2 = decodeURIComponent;
                  readResult = substr1.replace(tmp3, decodeURIComponent);
                }
              }
              let parsed = readResult;
              if (tmp.json) {
                let _JSON = JSON;
                let tmp21 = parsed;
                parsed = JSON.parse(parsed);
              }
              while (true) {
                let tmp22 = self;
                let tmp23 = replaced1;
                if (self === replaced1) {
                  obj = parsed;
                } else {
                  let tmp24 = self;
                  if (!self) {
                    let tmp25 = obj;
                    let tmp26 = replaced1;
                    let tmp27 = parsed;
                    obj[replaced1] = parsed;
                  }
                  do {
                    let tmp28 = num3;
                    let sum = num3 + 1;
                    num3 = sum;
                    let tmp30 = parts;
                  } while (sum >= arr2.length);
                }
              }
            }
          }
          return obj;
        }
      }
    };
    fn.set = fn;
    fn.get = (arg0) => fn.call(fn, arg0);
    fn.getJSON = () => {
      const slice = [].slice;
      return fn.apply({ json: true }, slice.call(arguments));
    };
    fn.defaults = {};
    fn.remove = (arg0, arg1) => {
      fn(arg0, "", arg0(arg1, { expires: -1 }));
    };
    fn.withConverter = fn;
    return fn;
  };
  const create = fn;
  function r() {
    const obj = {};
    for (let num = 0; num < arguments.length; num = num + 1) {
      let tmp = arguments[num];
      let tmp2 = tmp;
      for (const key10008 in tmp) {
        let tmp3 = key10008;
        obj[key10008] = tmp[key10008];
      }
    }
    return obj;
  }
  return fn(() => {

  });
}();
let closure_68 = "muxData";
function tr() {
  const value = store.get(closure_68);
  let str = value;
  if (!value) {
    str = "";
  }
  function Oa(str) {
    const parts = str.split("&");
    return parts.reduce((arg0, str) => {
      const tmp = callback(str.split("="), 2);
      let tmp4 = tmp2;
      if (tmp[1]) {
        tmp4 = tmp2;
        if (tmp3 == tmp2) {
          tmp4 = tmp3;
        }
      }
      arg0[tmp[0]] = tmp4;
      return arg0;
    }, {});
  }(str);
}
function rr(arg0) {
  const result = store.set(closure_68, function Pa(arg0) {
    const entries = Object.entries(arg0);
    const mapped = entries.map((arg0) => {
      const tmp = callback(arg0, 2);
      const combined = "".concat(tmp[0], "=");
      return combined.concat(tmp[1]);
    });
    return mapped.join("&");
  }(arg0), { expires: 365 });
}
let closure_71 = G(BResult());
function or() {
  const tmp = sr();
  let str = "cellular";
  if ("cellular" !== tmp) {
    str = "wired";
    if ("ethernet" !== tmp) {
      str = "wifi";
      if ("wifi" !== tmp) {
        if (undefined !== tmp) {
          str = "other";
        }
      }
    }
  }
  return str;
}
function sr() {
  const _navigator = mod5.default.navigator;
  let tmp = _navigator;
  if (_navigator) {
    tmp = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;
    const tmp2 = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;
  }
  let type = tmp;
  if (tmp) {
    type = tmp.type;
  }
  return type;
}
or.getConnectionFromAPI = sr;
let closure_74 = lr({});
let closure_75 = lr({ mm: "<string:1388208566>", mn: "<string:3913810688>", mo: "<string:18674753>", mp: "<string:1438605568>", ms: "<string:33918099>", mx: "<string:43486481>", ne: "<string:1094858115>", nm: "<string:1493172612>", no: "<string:1358955066>", on: "<string:2806356399>", or: "<string:3925868986>", os: "<string:822083910>", pa: "<string:1291846032>", pb: "<string:1392510044>", pd: "<string:1409286544>", pe: "<string:136417078>", pf: "<string:2533138604>", pg: "<string:3226979425>", ph: "<string:151337058>", pi: "<string:3255883903>", pl: "<string:1527271585>", pn: "<string:1418150421>", po: "<string:564461569>", pp: "<string:3764125698>", pr: "<string:596517507>", ps: "<string:1446081028>", pt: "<string:1809202953>", pv: "<string:4277532057>", py: "<string:3347417753>", px: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002367333301862609, pz: 12175452032712515000000000000000000000000, ra: -319733169444719200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, rd: -3172921596680736600000000000000000000000000000, re: 2717175345674935500000000000000000000000000000000000000000000000000000000000000000000, rf: 995182278034303600000000000000000000000000000000000000000000000000000000000000000000000, rg: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010528048366968693, rm: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005882112705786943, ro: -541063372064923000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, rp: 21965853057580250000000000000000000000000000, rq: 1758208658372147000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, rs: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010682077721342284, sa: 13336030107774182000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, sd: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000063659873735, se: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000197736055823309, sh: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001199332610355427, sk: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022398326923171675, sm: 14811969431846743000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, so: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000339519326594, sq: 2404472888204114000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, sr: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000764855147084, ss: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043458473809144, st: 1032132224413571200000000, su: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000034888635956, sv: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006957633425813801, sw: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008691694761874, sy: 994646504097968000000000000000000000000000000000000000000000000000000000000000000000000, ta: NaN, tc: 2694376495506215000000000000000, te: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010616996133794876, tg: 16125684703804697000000000000000000000000000000000000000000000000000000000000000000, th: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041137867344763664, ti: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009456576158317161, tl: 3347104805552944400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, to: -131146139725377440000000000000000000, tt: -8364234348871412000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, ty: 0.0000000000000000000000000000000000000000000000000000000000000000000000011323590430574694, ug: 300.5, un: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001204258118828447, up: 15192992562832754000000000000000000000000000000000000000000000000000000000000000000, ur: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002008622949539355, us: 81936561351228240000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, va: 9126805525.930298, vd: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003771996058890577, vi: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010356250885956754, ve: -680564733843772500000000000000000000000, vw: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007291126784842955, vr: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013675522521256755, wd: 898836876206102700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, wa: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000002635552435635872, wt: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010237578756864795, maxBeaconSize: -504174744959502550000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, maxQueueLength: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013483244410309919, baseTimeBetweenBeacons: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007291126772826971, maxPayloadKBSize: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016382753823430276, player_playback_mode: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002008622949539355, player_playback_mode_data: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000095065411473245, debug: 139304739001332900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, minimumRebufferDuration: 293757.5791015821, sustainedRebufferThreshold: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001632111843130697, playbackHeartbeatTime: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001811934000325529, beaconDomain: -511251434339996200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, sampleRate: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009456576158317161, disableCookies: 3348098417132017000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, respectDoNotTrack: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012473333512235564, disableRebufferTracking: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002590353098302933, disablePlayheadRebufferTracking: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005184956123740188, player_software: 9126805525.875, player_mux_plugin_name: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000279740583200864, padding: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010356250885956754, flexDirection: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022072732726199538, alignItems: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003172304298755633, -1019556043: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025902788946574368, -80386874: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005184956123740188, 1644054422: 9126805525.875, -1404087321: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002644622134812593, -1684427700: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010356250885956754, -175897005: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022072732726199538, 1393069314: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000233428572098763, -2073623811: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025902788946461467, -413072124: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005184956123740188, 67304786: 9126805525.875, -1963503099: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000301113324807386, -681452886: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010356250885956754, 1409599825: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022072732726199538, -1404014731: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002235909913228017, -1404068967: -2237403.9262481118, flexDirection: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006375436887226, alignItems: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002110859107415004, justifyContent: -8364227040681354000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, paddingHorizontal: 2366988846539921000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, gap: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015677377104559064, height: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000241915809216, scrollable: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003978765286071926, handleDisabled: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000054323092267, startExpanded: 0.000000000001023182445492286, header: 873990456591193300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, footer: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000488059031917, startExpanded: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008545716564232549, renderCodedLinks: 322751840773743270000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, renderEmbeds: 0.00000000000000000000002977860812750811, renderComponents: 15192670911858474000000000000000000000000000000000000000000000000000000000000000000, shouldDisableInteractiveComponents: 0.00000000000000000000000165484062609587, id: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000595243700107711, type: 92557022937773460000000000000000000000000, channel_id: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000061927007205207, author: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023534373715051596, content: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000179229789117, timestamp: 278979117886823000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, edited_timestamp: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000093367814803, tts: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015481070261066795, mention_everyone: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008545422888107362, alignSelf: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004258857765103143, borderBottomWidth: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020251150570003655, borderColor: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002004522197255764, marginTop: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000614593729332177, paddingTop: -870752830804212800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, paddingBottom: 278592.0021215417, paddingHorizontal: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010208455429871832, flexDirection: -2679340496259686000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, alignItems: 15192739903923188000000000000000000000000000000000000000000000000000000000000000000, borderRadius: 12401087162485472000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, overflow: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009822617546750948, zIndex: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009779382603438452, flexDirection: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000019657045794176465, alignItems: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007291122834402781, justifyContent: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000304209316628764, gap: 1032132224414121000000000, zIndex: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000438361896665387, overflow: 131072.015625, isPersisted: 1032280951295479000000000, isSynced: 14811969412287656000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, nestedScrollEnabled: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000679038653267, showsVerticalScrollIndicator: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010867862820866197, keyboardShouldPersistTaps: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014077171733744748, position: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007291122888725873, bottom: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000019247031647705696, left: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013379531944082324, right: 231584254778021550000000000000000000000000000000000000000000000000000000000000, zIndex: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011907058487398303, elevation: -504174745003967100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, pointerEvents: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009778156606342, position: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000726509229457581, bottom: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008442543913213908, left: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018701772324931, right: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003344435652903486, zIndex: 0 });
let closure_76 = G(BResult());
let closure_77 = { <string:3973624268>: "<string:1912685803>", <string:1137090652>: "y", MUST_READ_ARTICLES: "forEach", CREATOR_TO_ADMIN_101: "<string:3955833170>" };
let closure_78 = ["Ready: ", "TTI (first contentful paint): ", "Cached Messages Render: ", "Latest Messages Render: "];
class $ {
  constructor(arg0) {
    str = global;
    self = this;
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        tmp = arguments[1];
      }
      if (!str) {
        str = "https://img.litix.io";
      }
      self._beaconUrl = str;
      self._eventQueue = [];
      flag = false;
      self._postInFlight = false;
      self._resendAfterPost = false;
      num = 0;
      self._failureCount = 0;
      self._sendTimeout = false;
      tmp2 = globalThis;
      _Object = Object;
      tmp3 = lr;
      self._options = Object.assign({}, lr, {});
      return;
    }
    return;
  }
  queueEvent(arg0, arg1) {
    self = this;
    tmp2 = this._eventQueue.length <= this._options.maxQueueLength;
    merged = Object.assign({}, require);
    if (!tmp2) {
      str = "eventrateexceeded";
      tmp3 = global;
      tmp2 = "eventrateexceeded" === global;
    }
    if (tmp2) {
      _eventQueue = self._eventQueue;
      arr = _eventQueue.push(merged);
      if (!self._sendTimeout) {
        _startBeaconSendingResult = self._startBeaconSending();
      }
      tmp2 = self._eventQueue.length <= self._options.maxQueueLength;
    }
    return tmp2;
  }
  flushEvents() {
    self = this;
    if (arguments.length > 0) {
      if (undefined !== arguments[0]) {
        if (arguments[0]) {
          num = 1;
          if (1 === self._eventQueue.length) {
            _eventQueue = self._eventQueue;
            arr = _eventQueue.pop();
          }
          return;
        }
      }
    }
    if (self._eventQueue.length) {
      _sendBeaconQueueResult = self._sendBeaconQueue();
    }
    _startBeaconSendingResult = self._startBeaconSending();
    return;
  }
  destroy() {
    self = this;
    tmp = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
    self.destroyed = true;
    if (tmp) {
      _clearBeaconQueueResult = self._clearBeaconQueue();
    } else {
      flushEventsResult = self.flushEvents();
    }
    _default = or.default;
    clearTimeoutResult = _default.clearTimeout(self._sendTimeout);
    return;
  }
  _clearBeaconQueue() {
    self = this;
    num = 0;
    if (this._eventQueue.length > this._options.maxBeaconSize) {
      num = self._eventQueue.length - self._options.maxBeaconSize;
    }
    _eventQueue = self._eventQueue;
    substr = _eventQueue.slice(num);
    if (num > 0) {
      tmp = globalThis;
      _Object = Object;
      num2 = 1;
      tmp2 = me;
      obj = {};
      str = "event queue truncated";
      obj.mux_view_message = "event queue truncated";
      merged = Object.assign(substr[substr.length - 1], me(obj));
    }
    tmp4 = Mr(self._beaconUrl, self._createPayload(substr), true, () => {

    });
    return;
  }
  _sendBeaconQueue() {
    self = this;
    global = this;
    if (this._postInFlight) {
      flag3 = true;
      self._resendAfterPost = true;
    } else {
      _eventQueue = self._eventQueue;
      num = 0;
      substr = require("module_0");
      create = substr;
      _eventQueue1 = self._eventQueue;
      self._eventQueue = _eventQueue1.slice(self._options.maxBeaconSize);
      flag = true;
      self._postInFlight = true;
      tmp3 = closure_25;
      _createPayloadResult = self._createPayload(substr);
      defineProperty = closure_25.now();
      tmp4 = Mr;
      flag2 = false;
      tmp5 = Mr(self._beaconUrl, _createPayloadResult, false, (arg0, arg1) => {
        if (arg1) {
          tmp._eventQueue = substr.concat(tmp._eventQueue);
          tmp._failureCount = tmp._failureCount + 1;
          closure_35.info(`Error sending beacon: ${arg1}`);
        } else {
          tmp._failureCount = 0;
        }
        self._roundTripTime = closure_25.now() - closure_2;
        self._postInFlight = false;
        if (self._resendAfterPost) {
          self._resendAfterPost = false;
          if (self._eventQueue.length > 0) {
            self._sendBeaconQueue();
          }
        }
      });
    }
    return;
  }
  _getNextBeaconTime() {
    self = this;
    if (this._failureCount) {
      tmp = globalThis;
      _Math = Math;
      num = 1;
      num2 = 2;
      _Math2 = Math;
      powResult = require("module_2");
      return (1 + powResult * Math.random()) * self._options.baseTimeBetweenBeacons;
    } else {
      return self._options.baseTimeBetweenBeacons;
    }
  }
  _startBeaconSending() {
    self = this;
    global = this;
    _default = or.default;
    clearTimeoutResult = _default.clearTimeout(this._sendTimeout);
    if (!this.destroyed) {
      tmp2 = or;
      _default2 = or.default;
      self._sendTimeout = _default2.setTimeout(() => {
        if (self._eventQueue.length) {
          self._sendBeaconQueue();
        }
        self._startBeaconSending();
      }, self._getNextBeaconTime());
    }
    return;
  }
  _createPayload(arg0) {
    create = this;
    obj = { transmission_timestamp: Math.round(closure_25.now()) };
    defineProperty = obj;
    if (this._roundTripTime) {
      _Math = Math;
      obj.rtt_ms = Math.round(this._roundTripTime);
    }
    fn = function o() {
      const obj = { metadata: obj };
      let tmp = found;
      if (!found) {
        tmp = arg0;
      }
      obj.events = tmp;
      const json = JSON.stringify(obj);
      let closure_5 = json.length / 1024;
    };
    fn2 = function s() {
      return closure_5 <= self._options.maxPayloadKBSize;
    };
    fnResult = fn();
    if (!fn2()) {
      tmp2 = closure_35;
      tmp3 = getPrototypeOf;
      str = "Payload size is too big (";
      str2 = " kb). Removing unnecessary events.";
      infoResult = closure_35.info(`Payload size is too big (${closure_5} kb). Removing unnecessary events.`);
      found = global.filter((arg0) => -1 === closure_78.indexOf(arg0.e));
      f105653 = found;
      fnResult1 = fn();
      arr = found;
    }
    if (!fn2()) {
      tmp7 = closure_35;
      tmp8 = getPrototypeOf;
      str3 = "Payload size still too big (";
      str4 = " kb). Cropping fields..";
      infoResult1 = closure_35.info(`Payload size still too big (${closure_5} kb). Cropping fields..`);
      item = arr.forEach((obj) => {
        for (const key10006 in arg0) {
          let tmp2 = key10006;
          let arr = arg0[key10006];
          let tmp = "string" === typeof arr;
          if (tmp) {
            tmp = arr.length > 51200;
          }
          if (!tmp) {
            continue;
          } else {
            arg0[key10006] = arr.substring(0, 51200);
            // continue
          }
          continue;
        }
      });
      fnResult2 = fn();
    }
    return getOwnPropertyDescriptor;
  }
}
let closure_79 = "function" === typeof G(BResult1()).default.exitPictureInPicture ? (arg0) => arg0.length <= 57344 : (arg0) => false;
function Mr(_beaconUrl, _createPayloadResult, arg2, arg3) {
  const global = arg3;
  if (arg2) {
    const _navigator = navigator;
    if (navigator) {
      const _navigator2 = navigator;
      if (navigator.sendBeacon) {
        const _navigator3 = navigator;
        if (navigator.sendBeacon(_beaconUrl, _createPayloadResult)) {
          arg3();
        }
      }
    }
  }
  if (mod6.default.fetch) {
    let obj = { method: "POST", body: _createPayloadResult };
    obj = { Content-Type: "text/plain" };
    obj.headers = obj;
    obj.keepalive = callback13(_createPayloadResult);
    const response = _default.fetch(_beaconUrl, obj);
    response.then((ok) => {
      let tmp2 = "Error";
      if (ok.ok) {
        tmp2 = null;
      }
      return arg3(null, tmp2);
    }).catch((arg0) => arg3(null, arg0));
    const nextPromise = response.then((ok) => {
      let tmp2 = "Error";
      if (ok.ok) {
        tmp2 = null;
      }
      return arg3(null, tmp2);
    });
  } else if (_default.XMLHttpRequest) {
    let _XMLHttpRequest = mod6.default.XMLHttpRequest;
    const prototype = _XMLHttpRequest.prototype;
    _XMLHttpRequest = new _XMLHttpRequest();
    const create = _XMLHttpRequest;
    _XMLHttpRequest.onreadystatechange = () => {
      if (4 === _XMLHttpRequest.readyState) {
        let str;
        if (200 !== _XMLHttpRequest.status) {
          str = "error";
        }
        return arg3(null, str);
      }
    };
    _XMLHttpRequest.open("POST", _beaconUrl);
    _XMLHttpRequest.setRequestHeader("Content-Type", "text/plain");
    _XMLHttpRequest.send(_createPayloadResult);
  } else {
    arg3();
  }
}
let closure_82 = [];
let closure_83 = [];
let closure_84 = ["ml", "content", "container"];
let closure_85 = [];
let closure_86 = () => {
  const fn = function r(mux, envKey) {
    let beaconCollectionDomain;
    let beaconDomain;
    let options;
    const self = this;
    if (arguments.length > 2) {
      callback6(self, fn);
      callback7(self, "mux", undefined);
      callback7(self, "envKey", undefined);
      callback7(self, "options", undefined);
      callback7(self, "eventQueue", undefined);
      callback7(self, "sampleRate", undefined);
      callback7(self, "disableCookies", undefined);
      callback7(self, "respectDoNotTrack", undefined);
      callback7(self, "previousBeaconData", undefined);
      callback7(self, "lastEventTime", undefined);
      callback7(self, "rateLimited", undefined);
      callback7(self, "pageLevelData", undefined);
      callback7(self, "viewerData", undefined);
      self.mux = mux;
      self.envKey = envKey;
      self.options = {};
      self.previousBeaconData = null;
      self.lastEventTime = 0;
      self.rateLimited = false;
      let tmp21 = closure_81;
      ({ envKey, options } = self);
      ({ beaconCollectionDomain, beaconDomain } = options);
      if (beaconCollectionDomain) {
        let str13 = `https://${beaconCollectionDomain}`;
      } else {
        if (!beaconDomain) {
          beaconDomain = "litix.io";
        }
        if (!envKey) {
          envKey = "inferred";
        }
        str13 = "https://img.litix.io/a.gif";
        if (envKey.match(/^[a-z0-9]+$/)) {
          str13 = `https://${envKey}.${beaconDomain}`;
        }
      }
      const prototype = tmp21.prototype;
      tmp21 = new tmp21(str13);
      self.eventQueue = tmp21;
      const sampleRate = self.options.sampleRate;
      let num3 = 1;
      if (null !== sampleRate) {
        num3 = 1;
        if (undefined !== sampleRate) {
          num3 = sampleRate;
        }
      }
      self.sampleRate = num3;
      const disableCookies = self.options.disableCookies;
      self.disableCookies = null !== disableCookies && undefined !== disableCookies && disableCookies;
      const respectDoNotTrack = self.options.respectDoNotTrack;
      self.respectDoNotTrack = null !== respectDoNotTrack && undefined !== respectDoNotTrack && respectDoNotTrack;
      self.previousBeaconData = null;
      self.lastEventTime = 0;
      self.rateLimited = false;
      let obj = { mux_api_version: self.mux.API_VERSION, mux_embed: self.mux.NAME, mux_embed_version: self.mux.VERSION };
      const platform = self.options.platform;
      let name;
      if (null !== platform) {
        if (undefined !== platform) {
          name = platform.name;
        }
      }
      obj.viewer_application_name = name;
      const platform2 = self.options.platform;
      let version;
      if (null !== platform2) {
        if (undefined !== platform2) {
          version = platform2.version;
        }
      }
      obj.viewer_application_version = version;
      const platform3 = self.options.platform;
      let layout;
      if (null !== platform3) {
        if (undefined !== platform3) {
          layout = platform3.layout;
        }
      }
      obj.viewer_application_engine = layout;
      const platform4 = self.options.platform;
      let product;
      if (null !== platform4) {
        if (undefined !== platform4) {
          product = platform4.product;
        }
      }
      obj.viewer_device_name = product;
      obj.viewer_device_category = "";
      const platform5 = self.options.platform;
      let manufacturer;
      if (null !== platform5) {
        if (undefined !== platform5) {
          manufacturer = platform5.manufacturer;
        }
      }
      obj.viewer_device_manufacturer = manufacturer;
      const platform6 = self.options.platform;
      let family;
      if (null !== platform6) {
        if (undefined !== platform6) {
          const os = platform6.os;
          if (null !== os) {
            if (undefined !== os) {
              family = os.family;
            }
          }
        }
      }
      obj.viewer_os_family = family;
      const platform7 = self.options.platform;
      let architecture;
      if (null !== platform7) {
        if (undefined !== platform7) {
          const os2 = platform7.os;
          if (null !== os2) {
            if (undefined !== os2) {
              architecture = os2.architecture;
            }
          }
        }
      }
      obj.viewer_os_architecture = architecture;
      const platform8 = self.options.platform;
      let version1;
      if (null !== platform8) {
        if (undefined !== platform8) {
          const os3 = platform8.os;
          if (null !== os3) {
            if (undefined !== os3) {
              version1 = os3.version;
            }
          }
        }
      }
      obj.viewer_os_version = version1;
      obj.viewer_connection_type = callback4();
      let href;
      if (null !== mod.default) {
        if (undefined !== mod.default) {
          const _location = mod.default.location;
          if (null !== _location) {
            if (undefined !== _location) {
              href = _location.href;
            }
          }
        }
      }
      obj.page_url = href;
      self.pageLevelData = obj;
      if (self.disableCookies) {
        obj = {};
      } else {
        const tmp41 = callback2();
        let mux_viewer_id = tmp41.mux_viewer_id;
        if (!mux_viewer_id) {
          mux_viewer_id = callback();
        }
        tmp41.mux_viewer_id = mux_viewer_id;
        let msn = tmp41.msn;
        if (!msn) {
          const _Math = Math;
          msn = Math.random();
        }
        tmp41.msn = msn;
        callback3(tmp41);
        obj = {};
        ({ mux_viewer_id: obj2.mux_viewer_id, msn: obj2.mux_sample_number } = tmp41);
      }
      self.viewerData = obj;
    }
  };
  const global = fn;
  let obj = {
    key: "send",
    value(event, view_id) {
      const self = this;
      if (event) {
        if (null != view_id) {
          if (view_id.view_id) {
            if (self.respectDoNotTrack) {
              if (callback5()) {
                return closure_35.info("Not sending `" + event + "` because Do Not Track is enabled");
              }
            }
            if (view_id) {
              if ("object" === typeof view_id) {
                if (self.disableCookies) {
                  let obj = {};
                } else {
                  const tmp4 = callback2();
                  const nowResult = closure_25.now();
                  if (tmp4.session_start) {
                    tmp4.sst = tmp4.session_start;
                    delete r1.session_start;
                  }
                  if (tmp4.session_id) {
                    tmp4.sid = tmp4.session_id;
                    delete r1.session_id;
                  }
                  if (tmp4.session_expires) {
                    tmp4.sex = tmp4.session_expires;
                    delete r1.session_expires;
                  }
                  if (tmp7) {
                    tmp4.sid = callback();
                    tmp4.sst = nowResult;
                  }
                  tmp4.sex = nowResult + 1500000;
                  callback3(tmp4);
                  obj = {};
                  ({ sid: obj.session_id, sst: obj.session_start, sex: obj.session_expires } = tmp4);
                  const tmp7 = !tmp4.sex || tmp4.sex < nowResult;
                }
                obj = {};
                callback8(obj, self.pageLevelData, view_id, obj, self.viewerData);
                obj = { event, env_key: self.envKey };
                callback9(obj, obj);
                if (obj.user_id) {
                  obj.viewer_user_id = obj.user_id;
                  delete r6.user_id;
                }
                const mux_sample_number = obj.mux_sample_number;
                let num3 = 0;
                if (null !== mux_sample_number) {
                  num3 = 0;
                  if (undefined !== mux_sample_number) {
                    num3 = mux_sample_number;
                  }
                }
                const tmp20 = callback10(self._deduplicateBeaconData(event, obj));
                const utils = self.mux.utils;
                self.lastEventTime = utils.now();
                if (tmp18) {
                  return closure_35.info("Not sending event due to sample rate restriction", event, obj, tmp20);
                } else {
                  if (!self.envKey) {
                    closure_35.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL", event, obj, tmp20);
                  }
                  if (!self.rateLimited) {
                    closure_35.info("Sending event", event, obj, tmp20);
                    const eventQueue = self.eventQueue;
                    self.rateLimited = !eventQueue.queueEvent(event, tmp20);
                    if (self.mux.WINDOW_UNLOADING) {
                      if ("viewend" === event) {
                        const eventQueue5 = self.eventQueue;
                        eventQueue5.destroy(true);
                      }
                    }
                    if (self.mux.WINDOW_HIDDEN) {
                      if ("hb" === event) {
                        const eventQueue3 = self.eventQueue;
                        eventQueue3.flushEvents(true);
                      }
                      if (self.rateLimited) {
                        obj.event = "eventrateexceeded";
                        const eventQueue4 = self.eventQueue;
                        eventQueue4.queueEvent(obj.event, callback10(obj));
                        return closure_35.error("Beaconing disabled due to rate limit.");
                      }
                    }
                    if (closure_85.indexOf(event) >= 0) {
                      const eventQueue2 = self.eventQueue;
                      eventQueue2.flushEvents();
                    }
                  }
                }
                const tmp18 = num3 >= self.sampleRate;
              }
            }
            return closure_35.error("A data object was expected in send() but was not provided");
          }
        }
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "destroy",
    value() {
      const eventQueue = this.eventQueue;
      eventQueue.destroy(false);
    }
  };
  items[1] = obj;
  obj = {
    key: "_deduplicateBeaconData",
    value(arr, view_id) {
      let self = this;
      self = this;
      let obj = {};
      view_id = view_id.view_id;
      if ("-1" !== view_id) {
        if ("viewstart" !== arr) {
          if ("viewend" !== arr) {
            if (self.previousBeaconData) {
              const utils = self.mux.utils;
              if (utils.now() - self.lastEventTime < 600000) {
                let closure_3 = 0 === arr.indexOf("request");
                const _Object = Object;
                const entries = Object.entries(view_id);
                const item = entries.forEach((arg0) => {
                  const tmp = callback(arg0, 2);
                  const first = tmp[0];
                  let previousBeaconData = self.previousBeaconData;
                  if (previousBeaconData) {
                    let eventRequiresKeyResult = tmp3 !== self.previousBeaconData[first];
                    if (!eventRequiresKeyResult) {
                      eventRequiresKeyResult = closure_82.indexOf(first) > -1;
                    }
                    if (!eventRequiresKeyResult) {
                      eventRequiresKeyResult = self.objectHasChanged(closure_3, first, tmp3, self.previousBeaconData[first]);
                    }
                    if (!eventRequiresKeyResult) {
                      eventRequiresKeyResult = self.eventRequiresKey(arg0, first);
                    }
                    previousBeaconData = eventRequiresKeyResult;
                  }
                  if (previousBeaconData) {
                    obj[first] = tmp3;
                    self.previousBeaconData[first] = tmp3;
                  }
                });
              }
              return obj;
            }
          }
        }
      }
      obj = {};
      callback8(obj, view_id);
      if (view_id) {
        self.previousBeaconData = obj;
      }
      if (view_id) {
        view_id = "viewend" === arr;
      }
      if (view_id) {
        self.previousBeaconData = null;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "objectHasChanged",
    value(arg0, arr) {
      let obj = arg2;
      obj = arg3;
      let tmp = !arg0;
      if (!tmp) {
        tmp = 0 !== arr.indexOf("request_");
      }
      let tmp2 = !tmp;
      if (!tmp) {
        let tmp3 = "request_response_headers" === arr;
        if (!tmp3) {
          tmp3 = "object" !== typeof obj;
        }
        if (!tmp3) {
          tmp3 = "object" !== typeof obj;
        }
        if (!tmp3) {
          if (!obj) {
            obj = {};
          }
          if (!obj) {
            obj = {};
          }
          tmp3 = Object.keys(obj).length !== Object.keys(obj).length;
        }
        tmp2 = tmp3;
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "eventRequiresKey",
    value(arg0, arr) {
      let tmp = "renditionchange" === arg0;
      if (tmp) {
        tmp = 0 === arr.indexOf("video_source_");
      }
      if (!tmp) {
        let hasItem = closure_84.includes(arr);
        if (hasItem) {
          hasItem = closure_83.includes(arg0);
        }
        tmp = hasItem;
      }
      return tmp;
    }
  };
  N(fn, items);
  return fn;
}();
const fn6 = function r(on) {
  const global = on;
  D(this, fn6);
  let closure_1 = 0;
  let closure_2 = 0;
  let closure_3 = 0;
  let closure_4 = 0;
  let closure_5 = 0;
  let closure_6 = 0;
  let closure_7 = 0;
  on.on("requestcompleted", function f(arg0, arg1) {
    let request_bytes_loaded;
    let request_response_end;
    let request_response_start;
    let request_start;
    ({ request_start, request_response_start, request_response_end, request_bytes_loaded } = arg1);
    closure_4 = closure_4 + 1;
    if (request_response_start) {
      let num3 = 0;
      if (null != request_start) {
        num3 = request_start;
      }
      let num4 = 0;
      const diff = request_response_start - num3;
      if (null != request_response_end) {
        num4 = request_response_end;
      }
      let diff1 = num4 - request_response_start;
    } else {
      let num = 0;
      if (null != request_response_end) {
        num = request_response_end;
      }
      let num2 = 0;
      if (null != request_start) {
        num2 = request_start;
      }
      diff1 = num - num2;
    }
    if (diff1 > 0) {
      if (request_bytes_loaded) {
        if (request_bytes_loaded > 0) {
          closure_5 = closure_5 + 1;
          closure_2 = closure_2 + request_bytes_loaded;
          closure_3 = closure_3 + diff1;
          let num5 = arg0.data.view_min_request_throughput;
          const result = request_bytes_loaded / diff1 * 8000;
          if (!num5) {
            num5 = Infinity;
          }
          arg0.data.view_min_request_throughput = Math.min(num5, result);
          arg0.data.view_average_request_throughput = closure_2 / closure_3 * 8000;
          arg0.data.view_request_count = closure_4;
          if (tmp2 > 0) {
            closure_1 = closure_1 + tmp2;
            let num6 = arg0.data.view_max_request_latency;
            if (!num6) {
              num6 = 0;
            }
            arg0.data.view_max_request_latency = Math.max(num6, tmp2);
            arg0.data.view_average_request_latency = closure_1 / closure_5;
          }
        }
      }
    }
  });
  on.on("requestfailed", function g(arg0, arg1) {
    closure_4 = closure_4 + 1;
    closure_6 = closure_6 + 1;
    arg0.data.view_request_count = closure_4;
    arg0.data.view_request_failed_count = closure_6;
  });
  on.on("requestcanceled", function k(arg0, arg1) {
    closure_4 = closure_4 + 1;
    closure_7 = closure_7 + 1;
    arg0.data.view_request_count = closure_4;
    arg0.data.view_request_canceled_count = closure_7;
  });
};
const fn7 = function r(on) {
  const global = on;
  const create = this;
  D(this, fn7);
  l(this, "_lastEventTime", undefined);
  on.on("before*", (type, viewer_time) => {
    viewer_time = viewer_time.viewer_time;
    const nowResult = closure_25.now();
    const _lastEventTime = self._lastEventTime;
    self._lastEventTime = nowResult;
    if (_lastEventTime) {
      if (nowResult - _lastEventTime > 3600000) {
        const _Object = Object;
        const keys = Object.keys(type.data);
        const log = type.mux.log;
        const reduced = keys.reduce((arg0, arr) => {
          let merged = arg0;
          if (0 === arr.indexOf("video_")) {
            const _Object = Object;
            const obj = {};
            callback(obj, arr, data.data[arr]);
            merged = Object.assign(arg0, obj);
          }
          return merged;
        }, {});
        log.info("Received event after at least an hour inactivity, creating a new view");
        const _Object2 = Object;
        let obj = { viewer_time };
        type._resetView(Object.assign(obj, reduced));
        type.playbackHeartbeat._playheadShouldBeProgressing = type.playbackHeartbeat._playheadShouldBeProgressing;
        let _playheadShouldBeProgressing = type.playbackHeartbeat._playheadShouldBeProgressing;
        if (_playheadShouldBeProgressing) {
          _playheadShouldBeProgressing = "play" !== type.type;
        }
        if (_playheadShouldBeProgressing) {
          _playheadShouldBeProgressing = "adbreakstart" !== type.type;
        }
        if (_playheadShouldBeProgressing) {
          obj = { viewer_time };
          type.emit("play", obj);
          if ("playing" !== type.type) {
            obj = { viewer_time };
            type.emit("playing", obj);
          }
        }
      }
    }
  });
};
const fn8 = function r(on) {
  const global = on;
  D(this, fn8);
  function t(request_type) {
    if (null != request_type) {
      if (request_type.request_type) {
        if ("media" === request_type.request_type) {
          const request_response_headers = request_type.request_response_headers;
          if (null !== request_response_headers) {
            if (undefined !== request_response_headers) {
              if (request_response_headers.x-cdn) {
                let prop = request_type.request_response_headers.x-cdn;
              }
              if (null != request_type) {
                if (request_type.request_start) {
                  let viewer_time = request_type.request_start;
                }
                if (null != prop) {
                  if (!callback(prop, closure_4)) {
                    if (closure_5 <= viewer_time) {
                      closure_4 = prop;
                      closure_5 = viewer_time;
                      const obj = { video_cdn: prop };
                      request_type.emit("cdnchange", obj);
                    }
                  }
                }
              }
              if (null != request_type) {
                if (request_type.viewer_time) {
                  viewer_time = request_type.viewer_time;
                }
              }
              const _Date = Date;
              viewer_time = Date.now();
            }
          }
        }
      }
    }
    prop = null;
    if (null != request_type) {
      prop = null;
      if (request_type.video_cdn) {
        prop = request_type.video_cdn;
      }
    }
  }
  let closure_2 = null;
  let closure_3 = null;
  let closure_4 = null;
  let closure_5 = 0;
  on.on("viewinit", () => {
    let closure_2 = null;
    let closure_3 = null;
    let closure_4 = null;
    let closure_5 = 0;
  });
  on.on("beforecdnchange", (arg0, video_cdn) => {
    video_cdn = undefined;
    if (null != video_cdn) {
      video_cdn = video_cdn.video_cdn;
    }
    let tmp2 = video_cdn;
    if (video_cdn) {
      tmp2 = undefined === video_cdn.video_previous_cdn || null === video_cdn.video_previous_cdn;
      const tmp3 = undefined === video_cdn.video_previous_cdn || null === video_cdn.video_previous_cdn;
    }
    if (tmp2) {
      if (callback(video_cdn, closure_3)) {
        let tmp10;
        if (null != closure_2) {
          tmp10 = closure_2;
        }
        video_cdn.video_previous_cdn = tmp10;
      } else {
        let tmp7;
        if (null != closure_3) {
          tmp7 = closure_3;
        }
        video_cdn.video_previous_cdn = tmp7;
        closure_2 = closure_3;
        closure_3 = video_cdn;
      }
    }
  });
  on.on("requestcompleted", (arg0, arg1) => {
    t(arg1);
  });
};
const fn9 = function r(on) {
  const global = on;
  const create = this;
  D(this, fn9);
  l(this, "_emittingAutomaticEvent", false);
  l(this, "_hasInitialized", false);
  on.on("viewstart", () => {
    if (!self._hasInitialized) {
      self._hasInitialized = true;
      self._emittingAutomaticEvent = true;
      arg0.emit("playbackmodechange", { MUST_READ_ARTICLES: "CLOSED_SUBPATH_LENGTH", CREATOR_TO_ADMIN_101: "isArray" });
      self._emittingAutomaticEvent = false;
    }
  });
  on.on("viewend", () => {
    self._hasInitialized = false;
  });
  on.on("playbackmodechange", (arg0, arg1) => {
    let player_playback_mode;
    player_playback_mode = arg1;
    if (!self._emittingAutomaticEvent) {
      if (player_playback_mode.player_playback_mode_data) {
        const player_playback_mode_data = player_playback_mode.player_playback_mode_data;
        const _JSON = JSON;
        const parsed = JSON.parse(player_playback_mode_data);
        while (true) {
          break;
          break;
        }
      } else {
        player_playback_mode.player_playback_mode_data = "{}";
      }
      ({ player_playback_mode_data: closure_0.data.player_playback_mode_data, player_playback_mode } = player_playback_mode);
      arg0.data.player_playback_mode = player_playback_mode;
    }
  });
};
let closure_91 = [770574082, 524391532, 1358954842, 1564542707, 1375732227, 480548402, 1106108258, 287581, 38492225, 1472549120, 77539394, 77539072, 1472549120, 76658500, 75140096, 74208512, 75006208, 986666496, -28457277, 1966986224, 1265806263, 0, 1107296256, 121843, 108378, 8983280, 5242880, 5111808, 4653056, 851968, 655360];
const set = new Set([]);
let closure_93 = (arg0) => {
  class t {
    constructor(arg0, arg1, arg2) {
      addHLSJSResult = closure_125(this, t);
      callResult = TypeError.call(this);
      TypeError = callResult;
      tmp2 = closure_124(callResult);
      tmp3 = closure_128(callResult, "pageLoadEndTime", undefined);
      tmp4 = closure_124(callResult);
      tmp5 = closure_128(callResult, "pageLoadInitTime", undefined);
      tmp6 = closure_124(callResult);
      tmp7 = closure_128(callResult, "_destroyed", undefined);
      tmp8 = closure_124(callResult);
      tmp9 = closure_128(callResult, "_heartBeatTimeout", undefined);
      tmp10 = closure_124(callResult);
      tmp11 = closure_128(callResult, "adTracker", undefined);
      tmp12 = closure_124(callResult);
      tmp13 = closure_128(callResult, "dashjs", undefined);
      tmp14 = closure_124(callResult);
      tmp15 = closure_128(callResult, "data", undefined);
      tmp16 = closure_124(callResult);
      tmp17 = closure_128(callResult, "disablePlayheadRebufferTracking", undefined);
      tmp18 = closure_124(callResult);
      tmp19 = closure_128(callResult, "disableRebufferTracking", undefined);
      tmp20 = closure_124(callResult);
      tmp21 = closure_128(callResult, "errorTracker", undefined);
      tmp22 = closure_124(callResult);
      tmp23 = closure_128(callResult, "errorTranslator", undefined);
      tmp24 = closure_124(callResult);
      tmp25 = closure_128(callResult, "emitTranslator", undefined);
      tmp26 = closure_124(callResult);
      tmp27 = closure_128(callResult, "getAdData", undefined);
      tmp28 = closure_124(callResult);
      tmp29 = closure_128(callResult, "getPlayheadTime", undefined);
      tmp30 = closure_124(callResult);
      tmp31 = closure_128(callResult, "getStateData", undefined);
      tmp32 = closure_124(callResult);
      tmp33 = closure_128(callResult, "stateDataTranslator", undefined);
      tmp34 = closure_124(callResult);
      tmp35 = closure_128(callResult, "hlsjs", undefined);
      tmp36 = closure_124(callResult);
      tmp37 = closure_128(callResult, "id", undefined);
      tmp38 = closure_124(callResult);
      tmp39 = closure_128(callResult, "longResumeTracker", undefined);
      tmp40 = closure_124(callResult);
      tmp41 = closure_128(callResult, "minimumRebufferDuration", undefined);
      tmp42 = closure_124(callResult);
      tmp43 = closure_128(callResult, "mux", undefined);
      tmp44 = closure_124(callResult);
      tmp45 = closure_128(callResult, "playbackEventDispatcher", undefined);
      tmp46 = closure_124(callResult);
      tmp47 = closure_128(callResult, "playbackHeartbeat", undefined);
      tmp48 = closure_124(callResult);
      tmp49 = closure_128(callResult, "playbackHeartbeatTime", undefined);
      tmp50 = closure_124(callResult);
      tmp51 = closure_128(callResult, "playheadTime", undefined);
      tmp52 = closure_124(callResult);
      tmp53 = closure_128(callResult, "seekingTracker", undefined);
      tmp54 = closure_124(callResult);
      tmp55 = closure_128(callResult, "sustainedRebufferThreshold", undefined);
      tmp56 = closure_124(callResult);
      tmp57 = closure_128(callResult, "watchTimeTracker", undefined);
      tmp58 = closure_124(callResult);
      tmp59 = closure_128(callResult, "currentFragmentPDT", undefined);
      tmp60 = closure_124(callResult);
      tmp61 = closure_128(callResult, "currentFragmentStart", undefined);
      callResult.pageLoadInitTime = closure_40.navigationStart();
      callResult.pageLoadEndTime = closure_40.domContentLoadedEventEnd();
      obj = {
        errorTranslator(arg0) {
              return arg0;
            },
        emitTranslator(arg0, merged) {
              const length = arguments.length;
              const array = new Array(length);
              for (let num = 0; num < length; num = num + 1) {
                array[num] = arguments[num];
              }
              return array;
            },
        stateDataTranslator(stateData) {
              return stateData;
            }
      };
      callResult.mux = arg0;
      callResult.id = arg1;
      tmp62 = null != arg2 && arg2.beaconDomain;
      if (tmp62) {
        log = callResult.mux.log;
        str = "The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.";
        warnResult = log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.");
      }
      merged = Object.assign(obj, arg2);
      merged.data = merged.data || {};
      if (merged.data.property_key) {
        merged.data.env_key = merged.data.property_key;
        data = merged.data;
        delete r3.property_key;
      }
      closure_35.level = merged.debug ? closure_31 : closure_33;
      callResult.getPlayheadTime = merged.getPlayheadTime;
      callResult.getStateData = merged.getStateData || () => ({});
      callResult.getAdData = merged.getAdData || () => {

      };
      ({ minimumRebufferDuration: obj.minimumRebufferDuration, sustainedRebufferThreshold: obj.sustainedRebufferThreshold, playbackHeartbeatTime: obj.playbackHeartbeatTime, disableRebufferTracking: obj.disableRebufferTracking } = merged);
      if (callResult.disableRebufferTracking) {
        log2 = callResult.mux.log;
        str2 = "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.";
        warnResult1 = log2.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.");
      }
      ({ disablePlayheadRebufferTracking: obj.disablePlayheadRebufferTracking, errorTranslator: obj.errorTranslator, emitTranslator: obj.emitTranslator, stateDataTranslator: obj.stateDataTranslator } = merged);
      tmp66 = new closure_86(arg0, merged.data.env_key, merged);
      callResult.playbackEventDispatcher = tmp66;
      obj1 = { player_instance_id: closure_26(), mux_sample_rate: merged.sampleRate, beacon_domain: tmp67 };
      tmp67 = merged.beaconCollectionDomain || merged.beaconDomain;
      callResult.data = obj1;
      callResult.data.view_sequence_number = 1;
      callResult.data.player_sequence_number = 1;
      fn = function() {
        const self = this;
        if (undefined === this.data.view_start) {
          const utils = self.mux.utils;
          self.data.view_start = utils.now();
          self.emit("viewstart");
        }
      };
      tmp68 = closure_124(callResult);
      t = fn.bind(callResult);
      onResult = callResult.on("viewinit", function(arg0, arg1) {
        this._resetVideoData();
        this._resetViewData();
        this._resetErrorData();
        this._updateStateData();
        const merged = Object.assign(this.data, arg1);
        this._initializeViewData();
        this.one("play", closure_1);
        this.one("adbreakstart", closure_1);
      });
      onResult1 = callResult.on("videochange", function(arg0, arg1) {
        this._resetView(arg1);
      });
      onResult2 = callResult.on("programchange", function(arg0, arg1) {
        const self = this;
        if (this.data.player_is_paused) {
          const log = self.mux.log;
          log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information.");
        }
        self._resetView(Object.assign(arg1, { view_program_changed: true }));
        callback();
        self.emit("play");
        self.emit("playing");
      });
      onResult3 = callResult.on("fragmentchange", (arg0, arg1) => {
        ({ currentFragmentPDT: this.currentFragmentPDT, currentFragmentStart: this.currentFragmentStart } = arg1);
      });
      onResult4 = callResult.on("destroy", callResult.destroy);
      if ("undefined" !== typeof window) {
        _window4 = window;
        str5 = "function";
        if ("function" === typeof window.addEventListener) {
          _window = window;
          if ("function" === typeof window.removeEventListener) {
            fn2 = function f() {
              let WINDOW_HIDDEN = undefined !== callResult.data.view_start;
              callResult.mux.WINDOW_HIDDEN = "hidden" === document.visibilityState;
              if (WINDOW_HIDDEN) {
                WINDOW_HIDDEN = callResult.mux.WINDOW_HIDDEN;
              }
              if (WINDOW_HIDDEN) {
                if (!callResult.data.player_is_paused) {
                  callResult.emit("hb");
                }
              }
            };
            f = fn2;
            _window2 = window;
            str3 = "visibilitychange";
            listener = window.addEventListener("visibilitychange", fn2, false);
            fn3 = function g(persisted) {
              if (!persisted.persisted) {
                callResult.destroy();
              }
            };
            g = fn3;
            _window3 = window;
            str4 = "pagehide";
            listener1 = window.addEventListener("pagehide", fn3, false);
            onResult5 = callResult.on("destroy", () => {
              const removed = window.removeEventListener("visibilitychange", fn2);
              const removed1 = window.removeEventListener("pagehide", fn3);
            });
          }
        }
      }
      onResult6 = callResult.on("playerready", function(arg0, arg1) {
        const merged = Object.assign(this.data, arg1);
      });
      item = closure_91.forEach((arg0) => {
        arg0.on(arg0, function(arg0, arg1) {
          const self = this;
          if (0 !== arg0.indexOf("ad")) {
            self._updateStateData();
          }
          const merged = Object.assign(self.data, arg1);
          self._sanitizeData();
        });
        arg0.on(`after${arg0}`, function() {
          const self = this;
          if (tmp) {
            self.send(arg0);
          }
        });
      });
      onResult7 = callResult.on("viewend", (arg0, arg1) => {
        const merged = Object.assign(callResult.data, arg1);
      });
      oneResult = callResult.one("playerready", function k(arg0) {
        const self = this;
        if (this.data.player_init_time) {
          self.data.player_startup_time = tmp - self.data.player_init_time;
        }
        self.pageLoadInitTime = self.data.page_load_init_time || self.pageLoadInitTime;
        self.pageLoadEndTime = self.data.page_load_end_time || self.pageLoadEndTime;
        if (tmp2) {
          self.mux.PLAYER_TRACKED = true;
          if (tmp3) {
            let num = self.data.player_init_time;
            if (!num) {
              num = Infinity;
            }
            self.data.page_load_time = Math.min(num, self.pageLoadEndTime || Infinity) - self.pageLoadInitTime;
            const tmp5 = self.pageLoadEndTime || Infinity;
          }
          const tmp3 = self.data.player_init_time || self.pageLoadEndTime;
        }
        self.send("playerready");
        delete r1.player_startup_time;
        delete r0.page_load_time;
      });
      tmp81 = closure_124(callResult);
      tmp82 = new closure_88(callResult);
      callResult.longResumeTracker = tmp82;
      tmp83 = closure_124(callResult);
      tmp84 = new closure_52(callResult);
      callResult.errorTracker = tmp84;
      tmp85 = closure_124(callResult);
      tmp86 = new closure_65(callResult);
      tmp87 = closure_124(callResult);
      tmp88 = new closure_61(callResult);
      callResult.seekingTracker = tmp88;
      tmp89 = closure_124(callResult);
      tmp90 = new closure_55(callResult);
      callResult.playheadTime = tmp90;
      tmp91 = closure_124(callResult);
      tmp92 = new closure_51(callResult);
      callResult.playbackHeartbeat = tmp92;
      tmp93 = closure_124(callResult);
      tmp94 = new closure_60(callResult);
      tmp95 = closure_124(callResult);
      tmp96 = new closure_53(callResult);
      callResult.watchTimeTracker = tmp96;
      tmp97 = closure_124(callResult);
      tmp98 = new closure_54(callResult);
      tmp99 = closure_124(callResult);
      addHLSJSResult = new closure_64(callResult);
      callResult.adTracker = addHLSJSResult;
      addHLSJSResult = closure_124(callResult);
      addHLSJSResult = new closure_58(callResult);
      addHLSJSResult = closure_124(callResult);
      addHLSJSResult = new closure_57(callResult);
      addHLSJSResult = closure_124(callResult);
      addHLSJSResult = new closure_59(callResult);
      addHLSJSResult = closure_124(callResult);
      addHLSJSResult = new closure_87(callResult);
      addHLSJSResult = closure_124(callResult);
      addHLSJSResult = new closure_89(callResult);
      addHLSJSResult = closure_124(callResult);
      addHLSJSResult = new closure_90(callResult);
      if (merged.hlsjs) {
        addHLSJSResult = callResult.addHLSJS(merged);
      }
      if (merged.dashjs) {
        addHLSJSResult = callResult.addDashJS(merged);
      }
      addHLSJSResult = callResult.emit("viewinit", merged.data);
      return callResult;
    }
  }
  const create = t;
  if ("function" !== typeof arg0) {
    class t {
      constructor(arg0, arg1, arg2) {
        addHLSJSResult = closure_125(this, t);
        callResult = TypeError.call(this);
        TypeError = callResult;
        tmp2 = closure_124(callResult);
        tmp3 = closure_128(callResult, "pageLoadEndTime", undefined);
        tmp4 = closure_124(callResult);
        tmp5 = closure_128(callResult, "pageLoadInitTime", undefined);
        tmp6 = closure_124(callResult);
        tmp7 = closure_128(callResult, "_destroyed", undefined);
        tmp8 = closure_124(callResult);
        tmp9 = closure_128(callResult, "_heartBeatTimeout", undefined);
        tmp10 = closure_124(callResult);
        tmp11 = closure_128(callResult, "adTracker", undefined);
        tmp12 = closure_124(callResult);
        tmp13 = closure_128(callResult, "dashjs", undefined);
        tmp14 = closure_124(callResult);
        tmp15 = closure_128(callResult, "data", undefined);
        tmp16 = closure_124(callResult);
        tmp17 = closure_128(callResult, "disablePlayheadRebufferTracking", undefined);
        tmp18 = closure_124(callResult);
        tmp19 = closure_128(callResult, "disableRebufferTracking", undefined);
        tmp20 = closure_124(callResult);
        tmp21 = closure_128(callResult, "errorTracker", undefined);
        tmp22 = closure_124(callResult);
        tmp23 = closure_128(callResult, "errorTranslator", undefined);
        tmp24 = closure_124(callResult);
        tmp25 = closure_128(callResult, "emitTranslator", undefined);
        tmp26 = closure_124(callResult);
        tmp27 = closure_128(callResult, "getAdData", undefined);
        tmp28 = closure_124(callResult);
        tmp29 = closure_128(callResult, "getPlayheadTime", undefined);
        tmp30 = closure_124(callResult);
        tmp31 = closure_128(callResult, "getStateData", undefined);
        tmp32 = closure_124(callResult);
        tmp33 = closure_128(callResult, "stateDataTranslator", undefined);
        tmp34 = closure_124(callResult);
        tmp35 = closure_128(callResult, "hlsjs", undefined);
        tmp36 = closure_124(callResult);
        tmp37 = closure_128(callResult, "id", undefined);
        tmp38 = closure_124(callResult);
        tmp39 = closure_128(callResult, "longResumeTracker", undefined);
        tmp40 = closure_124(callResult);
        tmp41 = closure_128(callResult, "minimumRebufferDuration", undefined);
        tmp42 = closure_124(callResult);
        tmp43 = closure_128(callResult, "mux", undefined);
        tmp44 = closure_124(callResult);
        tmp45 = closure_128(callResult, "playbackEventDispatcher", undefined);
        tmp46 = closure_124(callResult);
        tmp47 = closure_128(callResult, "playbackHeartbeat", undefined);
        tmp48 = closure_124(callResult);
        tmp49 = closure_128(callResult, "playbackHeartbeatTime", undefined);
        tmp50 = closure_124(callResult);
        tmp51 = closure_128(callResult, "playheadTime", undefined);
        tmp52 = closure_124(callResult);
        tmp53 = closure_128(callResult, "seekingTracker", undefined);
        tmp54 = closure_124(callResult);
        tmp55 = closure_128(callResult, "sustainedRebufferThreshold", undefined);
        tmp56 = closure_124(callResult);
        tmp57 = closure_128(callResult, "watchTimeTracker", undefined);
        tmp58 = closure_124(callResult);
        tmp59 = closure_128(callResult, "currentFragmentPDT", undefined);
        tmp60 = closure_124(callResult);
        tmp61 = closure_128(callResult, "currentFragmentStart", undefined);
        callResult.pageLoadInitTime = closure_40.navigationStart();
        callResult.pageLoadEndTime = closure_40.domContentLoadedEventEnd();
        obj = {
          errorTranslator(arg0) {
                  return arg0;
                },
          emitTranslator(arg0, merged) {
                  const length = arguments.length;
                  const array = new Array(length);
                  for (let num = 0; num < length; num = num + 1) {
                    array[num] = arguments[num];
                  }
                  return array;
                },
          stateDataTranslator(stateData) {
                  return stateData;
                }
        };
        callResult.mux = arg0;
        callResult.id = arg1;
        tmp62 = null != arg2 && arg2.beaconDomain;
        if (tmp62) {
          log = callResult.mux.log;
          str = "The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.";
          warnResult = log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.");
        }
        merged = Object.assign(obj, arg2);
        merged.data = merged.data || {};
        if (merged.data.property_key) {
          merged.data.env_key = merged.data.property_key;
          data = merged.data;
          delete r3.property_key;
        }
        closure_35.level = merged.debug ? closure_31 : closure_33;
        callResult.getPlayheadTime = merged.getPlayheadTime;
        callResult.getStateData = merged.getStateData || () => ({});
        callResult.getAdData = merged.getAdData || () => {

        };
        ({ minimumRebufferDuration: obj.minimumRebufferDuration, sustainedRebufferThreshold: obj.sustainedRebufferThreshold, playbackHeartbeatTime: obj.playbackHeartbeatTime, disableRebufferTracking: obj.disableRebufferTracking } = merged);
        if (callResult.disableRebufferTracking) {
          log2 = callResult.mux.log;
          str2 = "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.";
          warnResult1 = log2.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.");
        }
        ({ disablePlayheadRebufferTracking: obj.disablePlayheadRebufferTracking, errorTranslator: obj.errorTranslator, emitTranslator: obj.emitTranslator, stateDataTranslator: obj.stateDataTranslator } = merged);
        tmp66 = new closure_86(arg0, merged.data.env_key, merged);
        callResult.playbackEventDispatcher = tmp66;
        obj1 = { player_instance_id: closure_26(), mux_sample_rate: merged.sampleRate, beacon_domain: tmp67 };
        tmp67 = merged.beaconCollectionDomain || merged.beaconDomain;
        callResult.data = obj1;
        callResult.data.view_sequence_number = 1;
        callResult.data.player_sequence_number = 1;
        fn = function() {
          const self = this;
          if (undefined === this.data.view_start) {
            const utils = self.mux.utils;
            self.data.view_start = utils.now();
            self.emit("viewstart");
          }
        };
        tmp68 = closure_124(callResult);
        t = fn.bind(callResult);
        onResult = callResult.on("viewinit", function(arg0, arg1) {
          this._resetVideoData();
          this._resetViewData();
          this._resetErrorData();
          this._updateStateData();
          const merged = Object.assign(this.data, arg1);
          this._initializeViewData();
          this.one("play", closure_1);
          this.one("adbreakstart", closure_1);
        });
        onResult1 = callResult.on("videochange", function(arg0, arg1) {
          this._resetView(arg1);
        });
        onResult2 = callResult.on("programchange", function(arg0, arg1) {
          const self = this;
          if (this.data.player_is_paused) {
            const log = self.mux.log;
            log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information.");
          }
          self._resetView(Object.assign(arg1, { view_program_changed: true }));
          callback();
          self.emit("play");
          self.emit("playing");
        });
        onResult3 = callResult.on("fragmentchange", (arg0, arg1) => {
          ({ currentFragmentPDT: this.currentFragmentPDT, currentFragmentStart: this.currentFragmentStart } = arg1);
        });
        onResult4 = callResult.on("destroy", callResult.destroy);
        if ("undefined" !== typeof window) {
          _window4 = window;
          str5 = "function";
          if ("function" === typeof window.addEventListener) {
            _window = window;
            if ("function" === typeof window.removeEventListener) {
              fn2 = function f() {
                let WINDOW_HIDDEN = undefined !== callResult.data.view_start;
                callResult.mux.WINDOW_HIDDEN = "hidden" === document.visibilityState;
                if (WINDOW_HIDDEN) {
                  WINDOW_HIDDEN = callResult.mux.WINDOW_HIDDEN;
                }
                if (WINDOW_HIDDEN) {
                  if (!callResult.data.player_is_paused) {
                    callResult.emit("hb");
                  }
                }
              };
              f = fn2;
              _window2 = window;
              str3 = "visibilitychange";
              listener = window.addEventListener("visibilitychange", fn2, false);
              fn3 = function g(persisted) {
                if (!persisted.persisted) {
                  callResult.destroy();
                }
              };
              g = fn3;
              _window3 = window;
              str4 = "pagehide";
              listener1 = window.addEventListener("pagehide", fn3, false);
              onResult5 = callResult.on("destroy", () => {
                const removed = window.removeEventListener("visibilitychange", fn2);
                const removed1 = window.removeEventListener("pagehide", fn3);
              });
            }
          }
        }
        onResult6 = callResult.on("playerready", function(arg0, arg1) {
          const merged = Object.assign(this.data, arg1);
        });
        item = closure_91.forEach((arg0) => {
          arg0.on(arg0, function(arg0, arg1) {
            const self = this;
            if (0 !== arg0.indexOf("ad")) {
              self._updateStateData();
            }
            const merged = Object.assign(self.data, arg1);
            self._sanitizeData();
          });
          arg0.on(`after${arg0}`, function() {
            const self = this;
            if (tmp) {
              self.send(arg0);
            }
          });
        });
        onResult7 = callResult.on("viewend", (arg0, arg1) => {
          const merged = Object.assign(callResult.data, arg1);
        });
        oneResult = callResult.one("playerready", function k(arg0) {
          const self = this;
          if (this.data.player_init_time) {
            self.data.player_startup_time = tmp - self.data.player_init_time;
          }
          self.pageLoadInitTime = self.data.page_load_init_time || self.pageLoadInitTime;
          self.pageLoadEndTime = self.data.page_load_end_time || self.pageLoadEndTime;
          if (tmp2) {
            self.mux.PLAYER_TRACKED = true;
            if (tmp3) {
              let num = self.data.player_init_time;
              if (!num) {
                num = Infinity;
              }
              self.data.page_load_time = Math.min(num, self.pageLoadEndTime || Infinity) - self.pageLoadInitTime;
              const tmp5 = self.pageLoadEndTime || Infinity;
            }
            const tmp3 = self.data.player_init_time || self.pageLoadEndTime;
          }
          self.send("playerready");
          delete r1.player_startup_time;
          delete r0.page_load_time;
        });
        tmp81 = closure_124(callResult);
        tmp82 = new closure_88(callResult);
        callResult.longResumeTracker = tmp82;
        tmp83 = closure_124(callResult);
        tmp84 = new closure_52(callResult);
        callResult.errorTracker = tmp84;
        tmp85 = closure_124(callResult);
        tmp86 = new closure_65(callResult);
        tmp87 = closure_124(callResult);
        tmp88 = new closure_61(callResult);
        callResult.seekingTracker = tmp88;
        tmp89 = closure_124(callResult);
        tmp90 = new closure_55(callResult);
        callResult.playheadTime = tmp90;
        tmp91 = closure_124(callResult);
        tmp92 = new closure_51(callResult);
        callResult.playbackHeartbeat = tmp92;
        tmp93 = closure_124(callResult);
        tmp94 = new closure_60(callResult);
        tmp95 = closure_124(callResult);
        tmp96 = new closure_53(callResult);
        callResult.watchTimeTracker = tmp96;
        tmp97 = closure_124(callResult);
        tmp98 = new closure_54(callResult);
        tmp99 = closure_124(callResult);
        addHLSJSResult = new closure_64(callResult);
        callResult.adTracker = addHLSJSResult;
        addHLSJSResult = closure_124(callResult);
        addHLSJSResult = new closure_58(callResult);
        addHLSJSResult = closure_124(callResult);
        addHLSJSResult = new closure_57(callResult);
        addHLSJSResult = closure_124(callResult);
        addHLSJSResult = new closure_59(callResult);
        addHLSJSResult = closure_124(callResult);
        addHLSJSResult = new closure_87(callResult);
        addHLSJSResult = closure_124(callResult);
        addHLSJSResult = new closure_89(callResult);
        addHLSJSResult = closure_124(callResult);
        addHLSJSResult = new closure_90(callResult);
        if (merged.hlsjs) {
          addHLSJSResult = callResult.addHLSJS(merged);
        }
        if (merged.dashjs) {
          addHLSJSResult = callResult.addDashJS(merged);
        }
        addHLSJSResult = callResult.emit("viewinit", merged.data);
        return callResult;
      }
    }
  }
  let prototype = arg0;
  if (arg0) {
    prototype = arg0.prototype;
  }
  let obj = { "": null, children: null, "": null, value: t };
  t.prototype = Object.create(prototype, { constructor: obj });
  if (arg0) {
    class t {
      constructor(arg0, arg1, arg2) {
        addHLSJSResult = closure_125(this, t);
        callResult = TypeError.call(this);
        TypeError = callResult;
        tmp2 = closure_124(callResult);
        tmp3 = closure_128(callResult, "pageLoadEndTime", undefined);
        tmp4 = closure_124(callResult);
        tmp5 = closure_128(callResult, "pageLoadInitTime", undefined);
        tmp6 = closure_124(callResult);
        tmp7 = closure_128(callResult, "_destroyed", undefined);
        tmp8 = closure_124(callResult);
        tmp9 = closure_128(callResult, "_heartBeatTimeout", undefined);
        tmp10 = closure_124(callResult);
        tmp11 = closure_128(callResult, "adTracker", undefined);
        tmp12 = closure_124(callResult);
        tmp13 = closure_128(callResult, "dashjs", undefined);
        tmp14 = closure_124(callResult);
        tmp15 = closure_128(callResult, "data", undefined);
        tmp16 = closure_124(callResult);
        tmp17 = closure_128(callResult, "disablePlayheadRebufferTracking", undefined);
        tmp18 = closure_124(callResult);
        tmp19 = closure_128(callResult, "disableRebufferTracking", undefined);
        tmp20 = closure_124(callResult);
        tmp21 = closure_128(callResult, "errorTracker", undefined);
        tmp22 = closure_124(callResult);
        tmp23 = closure_128(callResult, "errorTranslator", undefined);
        tmp24 = closure_124(callResult);
        tmp25 = closure_128(callResult, "emitTranslator", undefined);
        tmp26 = closure_124(callResult);
        tmp27 = closure_128(callResult, "getAdData", undefined);
        tmp28 = closure_124(callResult);
        tmp29 = closure_128(callResult, "getPlayheadTime", undefined);
        tmp30 = closure_124(callResult);
        tmp31 = closure_128(callResult, "getStateData", undefined);
        tmp32 = closure_124(callResult);
        tmp33 = closure_128(callResult, "stateDataTranslator", undefined);
        tmp34 = closure_124(callResult);
        tmp35 = closure_128(callResult, "hlsjs", undefined);
        tmp36 = closure_124(callResult);
        tmp37 = closure_128(callResult, "id", undefined);
        tmp38 = closure_124(callResult);
        tmp39 = closure_128(callResult, "longResumeTracker", undefined);
        tmp40 = closure_124(callResult);
        tmp41 = closure_128(callResult, "minimumRebufferDuration", undefined);
        tmp42 = closure_124(callResult);
        tmp43 = closure_128(callResult, "mux", undefined);
        tmp44 = closure_124(callResult);
        tmp45 = closure_128(callResult, "playbackEventDispatcher", undefined);
        tmp46 = closure_124(callResult);
        tmp47 = closure_128(callResult, "playbackHeartbeat", undefined);
        tmp48 = closure_124(callResult);
        tmp49 = closure_128(callResult, "playbackHeartbeatTime", undefined);
        tmp50 = closure_124(callResult);
        tmp51 = closure_128(callResult, "playheadTime", undefined);
        tmp52 = closure_124(callResult);
        tmp53 = closure_128(callResult, "seekingTracker", undefined);
        tmp54 = closure_124(callResult);
        tmp55 = closure_128(callResult, "sustainedRebufferThreshold", undefined);
        tmp56 = closure_124(callResult);
        tmp57 = closure_128(callResult, "watchTimeTracker", undefined);
        tmp58 = closure_124(callResult);
        tmp59 = closure_128(callResult, "currentFragmentPDT", undefined);
        tmp60 = closure_124(callResult);
        tmp61 = closure_128(callResult, "currentFragmentStart", undefined);
        callResult.pageLoadInitTime = closure_40.navigationStart();
        callResult.pageLoadEndTime = closure_40.domContentLoadedEventEnd();
        obj = {
          errorTranslator(arg0) {
                  return arg0;
                },
          emitTranslator(arg0, merged) {
                  const length = arguments.length;
                  const array = new Array(length);
                  for (let num = 0; num < length; num = num + 1) {
                    array[num] = arguments[num];
                  }
                  return array;
                },
          stateDataTranslator(stateData) {
                  return stateData;
                }
        };
        callResult.mux = arg0;
        callResult.id = arg1;
        tmp62 = null != arg2 && arg2.beaconDomain;
        if (tmp62) {
          log = callResult.mux.log;
          str = "The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.";
          warnResult = log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.");
        }
        merged = Object.assign(obj, arg2);
        merged.data = merged.data || {};
        if (merged.data.property_key) {
          merged.data.env_key = merged.data.property_key;
          data = merged.data;
          delete r3.property_key;
        }
        closure_35.level = merged.debug ? closure_31 : closure_33;
        callResult.getPlayheadTime = merged.getPlayheadTime;
        callResult.getStateData = merged.getStateData || () => ({});
        callResult.getAdData = merged.getAdData || () => {

        };
        ({ minimumRebufferDuration: obj.minimumRebufferDuration, sustainedRebufferThreshold: obj.sustainedRebufferThreshold, playbackHeartbeatTime: obj.playbackHeartbeatTime, disableRebufferTracking: obj.disableRebufferTracking } = merged);
        if (callResult.disableRebufferTracking) {
          log2 = callResult.mux.log;
          str2 = "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.";
          warnResult1 = log2.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.");
        }
        ({ disablePlayheadRebufferTracking: obj.disablePlayheadRebufferTracking, errorTranslator: obj.errorTranslator, emitTranslator: obj.emitTranslator, stateDataTranslator: obj.stateDataTranslator } = merged);
        tmp66 = new closure_86(arg0, merged.data.env_key, merged);
        callResult.playbackEventDispatcher = tmp66;
        obj1 = { player_instance_id: closure_26(), mux_sample_rate: merged.sampleRate, beacon_domain: tmp67 };
        tmp67 = merged.beaconCollectionDomain || merged.beaconDomain;
        callResult.data = obj1;
        callResult.data.view_sequence_number = 1;
        callResult.data.player_sequence_number = 1;
        fn = function() {
          const self = this;
          if (undefined === this.data.view_start) {
            const utils = self.mux.utils;
            self.data.view_start = utils.now();
            self.emit("viewstart");
          }
        };
        tmp68 = closure_124(callResult);
        t = fn.bind(callResult);
        onResult = callResult.on("viewinit", function(arg0, arg1) {
          this._resetVideoData();
          this._resetViewData();
          this._resetErrorData();
          this._updateStateData();
          const merged = Object.assign(this.data, arg1);
          this._initializeViewData();
          this.one("play", closure_1);
          this.one("adbreakstart", closure_1);
        });
        onResult1 = callResult.on("videochange", function(arg0, arg1) {
          this._resetView(arg1);
        });
        onResult2 = callResult.on("programchange", function(arg0, arg1) {
          const self = this;
          if (this.data.player_is_paused) {
            const log = self.mux.log;
            log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information.");
          }
          self._resetView(Object.assign(arg1, { view_program_changed: true }));
          callback();
          self.emit("play");
          self.emit("playing");
        });
        onResult3 = callResult.on("fragmentchange", (arg0, arg1) => {
          ({ currentFragmentPDT: this.currentFragmentPDT, currentFragmentStart: this.currentFragmentStart } = arg1);
        });
        onResult4 = callResult.on("destroy", callResult.destroy);
        if ("undefined" !== typeof window) {
          _window4 = window;
          str5 = "function";
          if ("function" === typeof window.addEventListener) {
            _window = window;
            if ("function" === typeof window.removeEventListener) {
              fn2 = function f() {
                let WINDOW_HIDDEN = undefined !== callResult.data.view_start;
                callResult.mux.WINDOW_HIDDEN = "hidden" === document.visibilityState;
                if (WINDOW_HIDDEN) {
                  WINDOW_HIDDEN = callResult.mux.WINDOW_HIDDEN;
                }
                if (WINDOW_HIDDEN) {
                  if (!callResult.data.player_is_paused) {
                    callResult.emit("hb");
                  }
                }
              };
              f = fn2;
              _window2 = window;
              str3 = "visibilitychange";
              listener = window.addEventListener("visibilitychange", fn2, false);
              fn3 = function g(persisted) {
                if (!persisted.persisted) {
                  callResult.destroy();
                }
              };
              g = fn3;
              _window3 = window;
              str4 = "pagehide";
              listener1 = window.addEventListener("pagehide", fn3, false);
              onResult5 = callResult.on("destroy", () => {
                const removed = window.removeEventListener("visibilitychange", fn2);
                const removed1 = window.removeEventListener("pagehide", fn3);
              });
            }
          }
        }
        onResult6 = callResult.on("playerready", function(arg0, arg1) {
          const merged = Object.assign(this.data, arg1);
        });
        item = closure_91.forEach((arg0) => {
          arg0.on(arg0, function(arg0, arg1) {
            const self = this;
            if (0 !== arg0.indexOf("ad")) {
              self._updateStateData();
            }
            const merged = Object.assign(self.data, arg1);
            self._sanitizeData();
          });
          arg0.on(`after${arg0}`, function() {
            const self = this;
            if (tmp) {
              self.send(arg0);
            }
          });
        });
        onResult7 = callResult.on("viewend", (arg0, arg1) => {
          const merged = Object.assign(callResult.data, arg1);
        });
        oneResult = callResult.one("playerready", function k(arg0) {
          const self = this;
          if (this.data.player_init_time) {
            self.data.player_startup_time = tmp - self.data.player_init_time;
          }
          self.pageLoadInitTime = self.data.page_load_init_time || self.pageLoadInitTime;
          self.pageLoadEndTime = self.data.page_load_end_time || self.pageLoadEndTime;
          if (tmp2) {
            self.mux.PLAYER_TRACKED = true;
            if (tmp3) {
              let num = self.data.player_init_time;
              if (!num) {
                num = Infinity;
              }
              self.data.page_load_time = Math.min(num, self.pageLoadEndTime || Infinity) - self.pageLoadInitTime;
              const tmp5 = self.pageLoadEndTime || Infinity;
            }
            const tmp3 = self.data.player_init_time || self.pageLoadEndTime;
          }
          self.send("playerready");
          delete r1.player_startup_time;
          delete r0.page_load_time;
        });
        tmp81 = closure_124(callResult);
        tmp82 = new closure_88(callResult);
        callResult.longResumeTracker = tmp82;
        tmp83 = closure_124(callResult);
        tmp84 = new closure_52(callResult);
        callResult.errorTracker = tmp84;
        tmp85 = closure_124(callResult);
        tmp86 = new closure_65(callResult);
        tmp87 = closure_124(callResult);
        tmp88 = new closure_61(callResult);
        callResult.seekingTracker = tmp88;
        tmp89 = closure_124(callResult);
        tmp90 = new closure_55(callResult);
        callResult.playheadTime = tmp90;
        tmp91 = closure_124(callResult);
        tmp92 = new closure_51(callResult);
        callResult.playbackHeartbeat = tmp92;
        tmp93 = closure_124(callResult);
        tmp94 = new closure_60(callResult);
        tmp95 = closure_124(callResult);
        tmp96 = new closure_53(callResult);
        callResult.watchTimeTracker = tmp96;
        tmp97 = closure_124(callResult);
        tmp98 = new closure_54(callResult);
        tmp99 = closure_124(callResult);
        addHLSJSResult = new closure_64(callResult);
        callResult.adTracker = addHLSJSResult;
        addHLSJSResult = closure_124(callResult);
        addHLSJSResult = new closure_58(callResult);
        addHLSJSResult = closure_124(callResult);
        addHLSJSResult = new closure_57(callResult);
        addHLSJSResult = closure_124(callResult);
        addHLSJSResult = new closure_59(callResult);
        addHLSJSResult = closure_124(callResult);
        addHLSJSResult = new closure_87(callResult);
        addHLSJSResult = closure_124(callResult);
        addHLSJSResult = new closure_89(callResult);
        addHLSJSResult = closure_124(callResult);
        addHLSJSResult = new closure_90(callResult);
        if (merged.hlsjs) {
          addHLSJSResult = callResult.addHLSJS(merged);
        }
        if (merged.dashjs) {
          addHLSJSResult = callResult.addDashJS(merged);
        }
        addHLSJSResult = callResult.emit("viewinit", merged.data);
        return callResult;
      }
    }
    Le(t, arg0);
  }
  let closure_0 = Pt(t);
  obj = {
    key: "emit",
    value(arg0, arg1) {
      const self = this;
      const utils = this.mux.utils;
      const merged = Object.assign({ viewer_time: utils.now() }, arg1);
      const items = [arg0, merged];
      let emitTranslatorResult = items;
      if (this.emitTranslator) {
        emitTranslatorResult = self.emitTranslator(arg0, merged);
      }
      while (true) {
        let tmp2 = emitTranslatorResult;
        let tmp3 = null;
        let length = null != emitTranslatorResult;
        if (!length) {
          break;
        } else {
          let tmp4 = emitTranslatorResult;
          length = emitTranslatorResult.length;
          // break
        }
        if (length) {
          let tmp5 = callback11;
          let tmp6 = callback10;
          let tmp7 = t;
          let str = "emit";
          let tmp8 = callback11(callback10(t.prototype), "emit", self);
          let call = tmp8.call;
          let items1 = [self];
          let tmp9 = callback6;
          let applyResult = call.apply(tmp8, items1.concat(callback6(emitTranslatorResult)));
        }
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , ];
  obj = {
    key: "destroy",
    value() {
      const self = this;
      if (!this._destroyed) {
        self._destroyed = true;
        if (undefined !== self.data.view_start) {
          self.emit("viewend");
          self.send("viewend");
        }
        const playbackEventDispatcher = self.playbackEventDispatcher;
        playbackEventDispatcher.destroy();
        self.removeHLSJS();
        self.removeDashJS();
        const _window = window;
        window.clearTimeout(self._heartBeatTimeout);
      }
    }
  };
  items[1] = obj;
  items[2] = {
    key: "send",
    value(arg0) {
      const self = this;
      if (this.data.view_id) {
        const _Object = Object;
        const merged = Object.assign({}, self.data);
        let closure_0 = merged;
        if (undefined === merged.video_source_is_live) {
          if (merged.player_source_duration !== Infinity) {
            if (merged.video_source_duration !== Infinity) {
              if (tmp3) {
                merged.video_source_is_live = false;
              }
              const tmp3 = merged.player_source_duration > 0 || merged.video_source_duration > 0;
            }
          }
          merged.video_source_is_live = true;
        }
        if (!merged.video_source_is_live) {
          const items = ["r", "isArray", "padding", "LengthDelimited", "error", "right", "jsxs", "toString"];
          const item = items.forEach((arg0) => {
            merged[arg0] = undefined;
          });
        }
        merged.video_source_url = merged.video_source_url || merged.player_source_url;
        if (merged.video_source_url) {
          [tmp2.video_source_hostname, tmp2.video_source_domain] = callback5(callback3(merged.video_source_url), 2);
          const tmp7 = callback5(callback3(merged.video_source_url), 2);
        }
        delete r4.ad_request_id;
        const playbackEventDispatcher = self.playbackEventDispatcher;
        playbackEventDispatcher.send(arg0, merged);
        const data = self.data;
        data.view_sequence_number = data.view_sequence_number + 1;
        const data2 = self.data;
        data2.player_sequence_number = data2.player_sequence_number + 1;
        if (!set.has(arg0)) {
          self._restartHeartBeat();
        }
        if ("viewend" === arg0) {
          const data3 = self.data;
          delete r0.view_id;
        }
      }
    }
  };
  items[3] = {
    key: "_resetView",
    value(arg0) {
      this.emit("viewend");
      this.send("viewend");
      this.emit("viewinit", arg0);
    }
  };
  items[4] = {
    key: "_updateStateData",
    value() {
      const self = this;
      let stateData = this.getStateData();
      if ("function" === typeof this.stateDataTranslator) {
        stateData = self.stateDataTranslator(stateData);
      }
      while (true) {
        let data = self.data;
        let tmp3 = null;
        if (null === data) {
          break;
        } else if (undefined === data) {
          break;
        } else if (!data.video_cdn) {
          break;
        } else {
          let tmp4 = stateData;
          if (null == stateData) {
            break;
          } else {
            let tmp5 = stateData;
            if (!stateData.video_cdn) {
              break;
            } else {
              let tmp6 = stateData;
              let video_cdn = stateData.video_cdn;
              let tmp7 = callback12;
              stateData = callback12(stateData, ["to"]);
              // break
            }
          }
        }
        let tmp8 = globalThis;
        let _Object = Object;
        let merged = Object.assign(self.data, stateData);
        let playheadTime = self.playheadTime;
        let _updatePlayheadTimeResult = playheadTime._updatePlayheadTime();
        let _sanitizeDataResult = self._sanitizeData();
      }
    }
  };
  items[5] = {
    key: "_sanitizeData",
    value() {
      let closure_0 = this;
      const items = [];
      const item = items.forEach((arg0) => {
        const parsed = parseInt(self.data[arg0], 10);
        let tmp2;
        if (!isNaN(parsed)) {
          tmp2 = parsed;
        }
        self.data[arg0] = tmp2;
      });
      const items1 = ["<string:1291845649>", "<string:1912602641>"];
      const item1 = items1.forEach((arg0) => {
        if (self.data[arg0]) {
          const formatted = self.data[arg0].toLowerCase();
          let tmp2 = 0 === formatted.indexOf("data:");
          if (!tmp2) {
            tmp2 = 0 === formatted.indexOf("blob:");
          }
          if (tmp2) {
            self.data[arg0] = "MSE style URL";
          }
          const str = self.data[arg0];
        }
      });
    }
  };
  items[6] = {
    key: "_resetVideoData",
    value() {
      let closure_0 = this;
      const keys = Object.keys(this.data);
      const item = keys.forEach((arr) => {
        if (0 === arr.indexOf("video_")) {
          const data = self.data;
          delete r0[r1];
        }
      });
    }
  };
  items[7] = {
    key: "_resetViewData",
    value() {
      let closure_0 = this;
      const keys = Object.keys(this.data);
      const item = keys.forEach((arr) => {
        if (0 === arr.indexOf("view_")) {
          const data = self.data;
          delete r0[r1];
        }
      });
      this.data.view_sequence_number = 1;
    }
  };
  items[8] = {
    key: "_resetErrorData",
    value() {
      delete r1.player_error_code;
      delete r1.player_error_message;
      delete r1.player_error_context;
      delete r1.player_error_severity;
      delete r0.player_error_business_exception;
    }
  };
  items[9] = {
    key: "_initializeViewData",
    value() {
      const self = this;
      let closure_0 = this;
      const tmp = callback2();
      this.data.view_id = tmp;
      const t = tmp;
      const fn = function o() {
        if (tmp === self.data.view_id) {
          callback(self.data, "player_view_count", 1);
          const tmp = callback;
        }
      };
      if (this.data.player_is_paused) {
        self.one("play", fn);
      } else {
        fn();
      }
    }
  };
  items[10] = {
    key: "_restartHeartBeat",
    value() {
      let closure_0 = this;
      window.clearTimeout(this._heartBeatTimeout);
      this._heartBeatTimeout = window.setTimeout(() => {
        if (!self.data.player_is_paused) {
          self.emit("hb");
        }
      }, 10000);
    }
  };
  items[11] = {
    key: "addHLSJS",
    value(hlsjs) {
      let Hls;
      let id;
      let mux;
      const self = this;
      if (hlsjs.hlsjs) {
        if (self.hlsjs) {
          const log2 = self.mux.log;
          log2.warn("An instance of HLS.js is already being monitored for this player.");
        } else {
          self.hlsjs = hlsjs.hlsjs;
          ({ mux, id } = self);
          ({ hlsjs, Hls } = hlsjs);
          if (!Hls) {
            const _window = window;
            Hls = window.Hls;
          }
          function It(mux, id, hlsjs, arg3, Hls) {
            let tmp;
            if (arguments.length > 4) {
              tmp = arguments[4];
            }
            const log = mux.log;
            const secondsToMs = mux.utils.secondsToMs;
            function s(programDateTime) {
              const parsed = parseInt(tmp.version);
              let tmp2 = 1 === parsed;
              if (tmp2) {
                tmp2 = null !== programDateTime.programDateTime;
              }
              programDateTime = undefined;
              if (tmp2) {
                programDateTime = programDateTime.programDateTime;
              }
              let tmp5 = 0 === parsed;
              if (tmp5) {
                tmp5 = null !== programDateTime.pdt;
              }
              if (tmp5) {
                programDateTime = programDateTime.pdt;
              }
              return programDateTime;
            }
            if (closure_40.exists()) {
              function u(arg0, arg1) {
                return arg0.emit(arg1, arg0, arg1);
              }
              const fn = function f(request_event_type) {
                let audioTracks;
                let bytesLoaded;
                let levels;
                let networkDetails;
                let requestStart;
                let responseEnd;
                let responseStart;
                let sessionData;
                let stats;
                let url;
                ({ levels, audioTracks } = arg1);
                let obj = {};
                request_event_type = obj;
                obj = {};
                const arg1 = obj;
                ({ url, stats, networkDetails, sessionData } = arg1);
                const item = levels.forEach((width) => {
                  const obj = { width: width.width, height: width.height, bitrate: width.bitrate, attrs: width.attrs };
                  obj[arg1] = obj;
                });
                const item1 = audioTracks.forEach((name) => {
                  const obj = { name: name.name, language: name.lang, bitrate: name.bitrate };
                  obj[arg1] = obj;
                });
                obj = {};
                ({ bytesLoaded, requestStart, responseStart, responseEnd } = callback3(stats));
                callback5(obj, callback2(sessionData));
                const tmp3 = callback3(stats);
                callback6(obj, { request_event_type, request_bytes_loaded: bytesLoaded, request_start: requestStart, request_response_start: responseStart, request_response_end: responseEnd, request_type: "manifest", request_hostname: callback(url), request_response_headers: callback4(networkDetails), request_rendition_lists: { media: obj, audio: obj, video: {} } });
                u("requestcompleted", obj);
              };
              hlsjs.on(tmp.Events.MANIFEST_LOADED, fn);
              const fn2 = function g(request_event_type, details) {
                let bytesLoaded;
                let level;
                let networkDetails;
                let requestStart;
                let responseEnd;
                let responseStart;
                details = details.details;
                ({ level, networkDetails } = details);
                ({ bytesLoaded, requestStart, responseStart, responseEnd } = callback3(details.stats));
                const tmp = callback3(details.stats);
                const sum = s(details.fragments[details.fragments.length - 1]) + secondsToMs(tmp2.duration);
                const obj = { request_event_type, request_bytes_loaded: bytesLoaded, request_start: requestStart, request_response_start: responseStart, request_response_end: responseEnd, request_current_level: level, request_type: "manifest", request_hostname: callback(details.url), request_response_headers: callback4(networkDetails) };
                let holdBack = details.holdBack;
                if (holdBack) {
                  holdBack = secondsToMs(details.holdBack);
                }
                obj.video_holdback = holdBack;
                let partHoldBack = details.partHoldBack;
                if (partHoldBack) {
                  partHoldBack = secondsToMs(details.partHoldBack);
                }
                obj.video_part_holdback = partHoldBack;
                let partTarget = details.partTarget;
                if (partTarget) {
                  partTarget = secondsToMs(details.partTarget);
                }
                obj.video_part_target_duration = partTarget;
                let targetduration = details.targetduration;
                if (targetduration) {
                  targetduration = secondsToMs(details.targetduration);
                }
                obj.video_target_duration = targetduration;
                obj.video_source_is_live = details.live;
                let tmp10;
                if (!isNaN(sum)) {
                  tmp10 = sum;
                }
                obj.player_manifest_newest_program_time = tmp10;
                u("requestcompleted", obj);
              };
              hlsjs.on(tmp.Events.LEVEL_LOADED, fn2);
              const fn3 = function k(request_event_type, stats) {
                let details;
                let networkDetails;
                ({ details, networkDetails } = stats);
                const tmp = callback3(stats.stats);
                u("requestcompleted", { request_event_type, request_bytes_loaded: tmp.bytesLoaded, request_start: tmp.requestStart, request_response_start: tmp.responseStart, request_response_end: tmp.responseEnd, request_type: "manifest", request_hostname: callback(details.url), request_response_headers: callback4(networkDetails) });
              };
              hlsjs.on(tmp.Events.AUDIO_TRACK_LOADED, fn3);
              const fn4 = function h(request_event_type) {
                let bytesLoaded;
                let frag;
                let networkDetails;
                let requestStart;
                let responseEnd;
                let responseStart;
                let stats;
                ({ stats, networkDetails, frag } = arg1);
                if (!stats) {
                  stats = frag.stats;
                }
                let tmp2;
                ({ bytesLoaded, requestStart, responseStart, responseEnd } = callback3(stats));
                if (networkDetails) {
                  tmp2 = callback4(networkDetails);
                }
                const obj = { request_event_type, request_bytes_loaded: bytesLoaded, request_start: requestStart, request_response_start: responseStart, request_response_end: responseEnd };
                let tmp4;
                if (networkDetails) {
                  tmp4 = callback(networkDetails.responseURL);
                }
                obj.request_hostname = tmp4;
                let tmp6;
                if (tmp2) {
                  tmp6 = callback7(tmp2);
                }
                obj.request_id = tmp6;
                obj.request_response_headers = tmp2;
                obj.request_media_duration = frag.duration;
                let responseURL;
                if (null != networkDetails) {
                  responseURL = networkDetails.responseURL;
                }
                obj.request_url = responseURL;
                if ("main" === frag.type) {
                  obj.request_type = "media";
                  obj.request_current_level = frag.level;
                  obj.request_video_width = arg2.levels[frag.level] || {}.width;
                  obj.request_video_height = arg2.levels[frag.level] || {}.height;
                  obj.request_labeled_bitrate = arg2.levels[frag.level] || {}.bitrate;
                  const tmp10 = arg2.levels[frag.level] || {};
                  const tmp12 = arg2.levels[frag.level] || {};
                  const tmp14 = arg2.levels[frag.level] || {};
                } else {
                  obj.request_type = frag.type;
                }
                u("requestcompleted", obj);
              };
              hlsjs.on(tmp.Events.FRAG_LOADED, fn4);
              const fn5 = function c(arg0, frag) {
                frag = frag.frag;
                u("fragmentchange", { currentFragmentPDT: s(frag), currentFragmentStart: secondsToMs(frag.start) });
              };
              hlsjs.on(tmp.Events.FRAG_CHANGED, fn5);
              const fn6 = function m(arg0, url) {
                let details;
                let fatal;
                let frag;
                let networkDetails;
                let response;
                let type;
                ({ details, response, frag, networkDetails } = url);
                let str;
                ({ type, fatal } = url);
                if (null != frag) {
                  str = frag.url;
                }
                if (!str) {
                  str = url.url;
                }
                if (!str) {
                  str = "";
                }
                if (networkDetails) {
                  const tmp = callback4(networkDetails);
                }
                let tmp3 = details === tmp.ErrorDetails.MANIFEST_LOAD_ERROR;
                if (!tmp3) {
                  tmp3 = details === tmp.ErrorDetails.MANIFEST_LOAD_TIMEOUT;
                }
                if (!tmp3) {
                  tmp3 = details === tmp.ErrorDetails.FRAG_LOAD_ERROR;
                }
                if (!tmp3) {
                  tmp3 = details === tmp.ErrorDetails.FRAG_LOAD_TIMEOUT;
                }
                if (!tmp3) {
                  tmp3 = details === tmp.ErrorDetails.LEVEL_LOAD_ERROR;
                }
                if (!tmp3) {
                  tmp3 = details === tmp.ErrorDetails.LEVEL_LOAD_TIMEOUT;
                }
                if (!tmp3) {
                  tmp3 = details === tmp.ErrorDetails.AUDIO_TRACK_LOAD_ERROR;
                }
                if (!tmp3) {
                  tmp3 = details === tmp.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT;
                }
                if (!tmp3) {
                  tmp3 = details === tmp.ErrorDetails.SUBTITLE_LOAD_ERROR;
                }
                if (!tmp3) {
                  tmp3 = details === tmp.ErrorDetails.SUBTITLE_LOAD_TIMEOUT;
                }
                if (!tmp3) {
                  tmp3 = details === tmp.ErrorDetails.KEY_LOAD_ERROR;
                }
                if (!tmp3) {
                  tmp3 = details === tmp.ErrorDetails.KEY_LOAD_TIMEOUT;
                }
                if (tmp3) {
                  let obj = { request_error: details, request_url: str, request_hostname: callback(str) };
                  let tmp17;
                  if (tmp) {
                    tmp17 = callback7(tmp);
                  }
                  obj.request_id = tmp17;
                  let str3 = "media";
                  if (details !== tmp.ErrorDetails.FRAG_LOAD_ERROR) {
                    str3 = "media";
                    if (details !== tmp.ErrorDetails.FRAG_LOAD_TIMEOUT) {
                      let str7 = "audio";
                      if (details !== tmp.ErrorDetails.AUDIO_TRACK_LOAD_ERROR) {
                        str7 = "audio";
                        if (details !== tmp.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT) {
                          let str5 = "subtitle";
                          if (details !== tmp.ErrorDetails.SUBTITLE_LOAD_ERROR) {
                            str5 = "subtitle";
                            if (details !== tmp.ErrorDetails.SUBTITLE_LOAD_TIMEOUT) {
                              if (details === tmp.ErrorDetails.KEY_LOAD_ERROR) {
                                let str6 = "encryption";
                              } else {
                                str6 = "manifest";
                              }
                              str5 = str6;
                            }
                          }
                          str7 = str5;
                        }
                      }
                      str3 = str7;
                    }
                  }
                  obj.request_type = str3;
                  let code;
                  if (null != response) {
                    code = response.code;
                  }
                  obj.request_error_code = code;
                  let text;
                  if (null != response) {
                    text = response.text;
                  }
                  obj.request_error_text = text;
                  u("requestfailed", obj);
                  const tmp15 = u;
                }
                if (fatal) {
                  let str10 = "";
                  if (str) {
                    const concat = "url: ".concat;
                    str10 = "url: ".concat(str, "\n");
                  }
                  let str13 = "";
                  const combined = "".concat(str10);
                  if (response) {
                    if (response.code) {
                      const concat2 = "response: ".concat;
                      const combined1 = "response: ".concat(response.code, ", ");
                      str13 = combined1.concat(response.text, "\n");
                    } else {
                      str13 = "";
                    }
                  }
                  let str17 = "";
                  const sum = combined + "".concat(str13);
                  if (url.reason) {
                    const concat3 = "failure reason: ".concat;
                    str17 = "failure reason: ".concat(url.reason, "\n");
                  }
                  let str20 = "";
                  const sum1 = sum + "".concat(str17);
                  if (url.level) {
                    const concat4 = "level: ".concat;
                    str20 = "level: ".concat(url.level, "\n");
                  }
                  let str23 = "";
                  const sum2 = sum1 + "".concat(str20);
                  if (url.parent) {
                    const concat5 = "parent stream controller: ".concat;
                    str23 = "parent stream controller: ".concat(url.parent, "\n");
                  }
                  let str26 = "";
                  const sum3 = sum2 + "".concat(str23);
                  if (url.buffer) {
                    const concat6 = "buffer length: ".concat;
                    str26 = "buffer length: ".concat(url.buffer, "\n");
                  }
                  let str29 = "";
                  const sum4 = sum3 + "".concat(str26);
                  if (url.error) {
                    const concat7 = "error: ".concat;
                    str29 = "error: ".concat(url.error, "\n");
                  }
                  let str32 = "";
                  const sum5 = sum4 + "".concat(str29);
                  if (url.event) {
                    const concat8 = "event: ".concat;
                    str32 = "event: ".concat(url.event, "\n");
                  }
                  let str35 = "";
                  const sum6 = sum5 + "".concat(str32);
                  if (url.err) {
                    let message;
                    if (null !== url.err) {
                      if (undefined !== err) {
                        message = err.message;
                      }
                    }
                    str35 = "error message: ".concat(message, "\n");
                  }
                  obj = { player_error_code: type, player_error_message: details, player_error_context: sum6 + "".concat(str35) };
                  u("error", obj);
                }
              };
              hlsjs.on(tmp.Events.ERROR, fn6);
              const fn7 = function w(request_event_type, frag) {
                frag = frag.frag;
                let str = frag;
                if (frag) {
                  str = frag._url;
                }
                if (!str) {
                  str = "";
                }
                const obj = { request_event_type, request_url: str, request_type: "media", request_hostname: callback(str) };
                u("requestcanceled", obj);
              };
              hlsjs.on(tmp.Events.FRAG_LOAD_EMERGENCY_ABORTED, fn7);
              const fn8 = function x(arg0, arg1) {
                if (arg2.levels[arg1.level]) {
                  if (tmp.attrs) {
                    if (tmp.attrs.BANDWIDTH) {
                      const BANDWIDTH = tmp.attrs.BANDWIDTH;
                      const _parseFloat = parseFloat;
                      const parsed = parseFloat(tmp.attrs.FRAME-RATE);
                      const _isNaN = isNaN;
                      if (!isNaN(parsed)) {
                        const tmp4 = parsed;
                      }
                      if (BANDWIDTH) {
                        const obj = { video_source_fps: tmp4, video_source_bitrate: BANDWIDTH };
                        ({ width: obj.video_source_width, height: obj.video_source_height, name: obj.video_source_rendition_name } = tmp);
                        let videoCodec;
                        if (null != tmp) {
                          videoCodec = tmp.videoCodec;
                        }
                        obj.video_source_codec = videoCodec;
                        u("renditionchange", obj);
                        const tmp7 = u;
                      } else {
                        log.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
                      }
                    }
                  }
                }
              };
              hlsjs.on(tmp.Events.LEVEL_SWITCHED, fn8);
              hlsjs._stopMuxMonitor = (arg0, arg1, self) => {
                self.off(tmp.Events.MANIFEST_LOADED, fn);
                self.off(tmp.Events.LEVEL_LOADED, fn2);
                self.off(tmp.Events.AUDIO_TRACK_LOADED, fn3);
                self.off(tmp.Events.FRAG_LOADED, fn4);
                self.off(tmp.Events.FRAG_CHANGED, fn5);
                self.off(tmp.Events.ERROR, fn6);
                self.off(tmp.Events.FRAG_LOAD_EMERGENCY_ABORTED, fn7);
                self.off(tmp.Events.LEVEL_SWITCHED, fn8);
                self.off(tmp.Events.DESTROYING, self._stopMuxMonitor);
                delete r0._stopMuxMonitor;
              };
              hlsjs.on(tmp.Events.DESTROYING, hlsjs._stopMuxMonitor);
            } else {
              log.warn("performance timing not supported. Not tracking HLS.js.");
            }
          }(mux, id, hlsjs, {}, Hls);
        }
      } else {
        const log = self.mux.log;
        log.warn("You must pass a valid hlsjs instance in order to track it.");
      }
    }
  };
  items[12] = {
    key: "removeHLSJS",
    value() {
      const self = this;
      if (this.hlsjs) {
        const hlsjs = self.hlsjs;
        let tmp = hlsjs;
        if (hlsjs) {
          tmp = "function" === typeof hlsjs._stopMuxMonitor;
        }
        if (tmp) {
          hlsjs._stopMuxMonitor();
        }
        self.hlsjs = undefined;
      }
    }
  };
  items[13] = {
    key: "addDashJS",
    value(dashjs) {
      const self = this;
      if (dashjs.dashjs) {
        if (self.dashjs) {
          const log2 = self.mux.log;
          log2.warn("An instance of Dash.js is already being monitored for this player.");
        } else {
          self.dashjs = dashjs.dashjs;
          callback4(self.mux, self.id, dashjs.dashjs);
        }
      } else {
        const log = self.mux.log;
        log.warn("You must pass a valid dashjs instance in order to track it.");
      }
    }
  };
  items[14] = {
    key: "removeDashJS",
    value() {
      const self = this;
      if (this.dashjs) {
        const dashjs = self.dashjs;
        let tmp = dashjs;
        if (dashjs) {
          tmp = "function" === typeof dashjs._stopMuxMonitor;
        }
        if (tmp) {
          dashjs._stopMuxMonitor();
        }
        self.dashjs = undefined;
      }
    }
  };
  N(t, items);
  return t;
}(() => {
  const fn = function r() {
    callback(this, fn);
    callback2(this, "_listeners", undefined);
  };
  const global = fn;
  let obj = {
    key: "on",
    value(arg0, _eventEmitterGuid, iter) {
      const self = this;
      _eventEmitterGuid = _eventEmitterGuid._eventEmitterGuid;
      if (!_eventEmitterGuid) {
        const sum = sum + 1;
        _eventEmitterGuid = sum;
      }
      _eventEmitterGuid._eventEmitterGuid = _eventEmitterGuid;
      self._listeners = self._listeners || {};
      let items = self._listeners[arg0];
      if (!items) {
        items = [];
      }
      self._listeners[arg0] = items;
      let bindResult = _eventEmitterGuid;
      if (iter) {
        bindResult = _eventEmitterGuid.bind(iter);
      }
      self._listeners[arg0].push(bindResult);
      return bindResult;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "off",
    value(arg0, arg1) {
      let _listeners = this._listeners;
      if (_listeners) {
        _listeners = this._listeners[arg0];
      }
      if (_listeners) {
        const item = _listeners.forEach((_eventEmitterGuid) => {
          if (_eventEmitterGuid._eventEmitterGuid === arg1._eventEmitterGuid) {
            _listeners.splice(arg1, 1);
          }
        });
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "one",
    value(arg0, _eventEmitterGuid) {
      let self = this;
      let fn = arg0;
      self = this;
      _eventEmitterGuid = _eventEmitterGuid._eventEmitterGuid;
      if (!_eventEmitterGuid) {
        const sum = sum + 1;
        _eventEmitterGuid = sum;
      }
      _eventEmitterGuid._eventEmitterGuid = _eventEmitterGuid;
      fn = function o() {
        self.off(arg0, fn);
        let self = arg2;
        if (!arg2) {
          self = this;
        }
        arg1(...arguments);
      };
      fn._eventEmitterGuid = _eventEmitterGuid._eventEmitterGuid;
      self.on(arg0, fn);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "emit",
    value(arg0, arg1) {
      let obj = arg1;
      let self = this;
      let fn = arg0;
      self = this;
      if (this._listeners) {
        if (!obj) {
          obj = {};
        }
        fn = function f(arr, arg1) {
          arr = arg1;
          const substr = arr.slice();
          const item = substr.forEach((call) => {
            call.call(closure_1, { type: arg1 }, arg1);
          });
        };
        fn(self._listeners["before" + arg0] || [], obj);
        fn(self._listeners.before* || [], obj);
        fn(self._listeners[arg0] || [], obj);
        fn(self._listeners["after" + arg0] || [], obj);
        const tmp = self._listeners["before" + arg0] || [];
        const tmp2 = self._listeners.before* || [];
        const tmp3 = self._listeners[arg0] || [];
        const tmp4 = self._listeners["after" + arg0] || [];
      }
    }
  };
  N(fn, items);
  return fn;
}());
let closure_94 = G(BResult1());
let closure_95 = [];
let closure_96 = { flexGrow: "<string:3321889276>", flexShrink: "<string:3422552414>", gap: "<string:2113929751>", alignSelf: "<string:1224737034>" };
const GResult1 = G(BResult());
if (tmp12) {
  const _WeakMap = WeakMap;
  const weakMap = new WeakMap();
}
let closure_99 = "#EXT-X-TARGETDURATION";
let closure_100 = "#EXT-X-PART-INF";
let closure_101 = "#EXT-X-SERVER-CONTROL";
let closure_102 = "#EXTINF";
let closure_103 = "#EXT-X-PROGRAM-DATE-TIME";
let closure_104 = "#EXT-X-VERSION";
let closure_105 = "#EXT-X-SESSION-DATA";
class Ve {
  constructor(arg0) {
    this.buffer = "";
    this.manifest = { segments: [], serverControl: {}, sessionData: {} };
    this.currentUri = {};
    processResult = this.process(global);
    return this.manifest;
  }
  process(arg0) {
    self = this;
    this.buffer = this.buffer + global;
    buffer = this.buffer;
    index = buffer.indexOf("\n");
    if (index > -1) {
      do {
        str = self.buffer;
        processLineResult = self.processLine(require("module_0"));
        str2 = self.buffer;
        self.buffer = str2.substring(index + 1);
        buffer1 = self.buffer;
        index = buffer1.indexOf("\n");
      } while (index > -1);
    }
    return;
  }
  processLine(arg0) {
    self = this;
    arr = Ii(global, global.indexOf(":"));
    first = arr[0];
    if (2 === arr.length) {
      tmp3 = _t;
      num = 1;
      tmp2 = _t(arr[1]);
    }
    if ("#" !== first[0]) {
      self.currentUri.uri = first;
      segments = self.manifest.segments;
      arr = segments.push(self.currentUri);
      targetDuration = self.manifest.targetDuration;
      if (targetDuration) {
        str = "duration";
        targetDuration = !("duration" in self.currentUri);
      }
      if (targetDuration) {
        self.currentUri.duration = self.manifest.targetDuration;
      }
      self.currentUri = {};
    } else {
      tmp23 = closure_99;
      if (closure_99 === first) {
        tmp20 = globalThis;
        _isFinite = isFinite;
        if (isFinite(tmp2)) {
          if (tmp2 >= 0) {
            self.manifest.targetDuration = tmp2;
            setHoldBackResult = self.setHoldBack();
          }
        }
        return;
      } else {
        tmp24 = closure_100;
        if (closure_100 === first) {
          tmp17 = ct;
          tmp18 = ct(self.manifest, arr);
          if (self.manifest.partInf.partTarget) {
            self.manifest.partTargetDuration = self.manifest.partInf.partTarget;
          }
          setHoldBackResult1 = self.setHoldBack();
        } else {
          tmp25 = closure_101;
          if (closure_101 === first) {
            tmp14 = ct;
            tmp15 = ct(self.manifest, arr);
            setHoldBackResult2 = self.setHoldBack();
          } else {
            tmp26 = closure_102;
            if (closure_102 === first) {
              if (0 === tmp2) {
                num2 = 0.01;
                self.currentUri.duration = 0.01;
              } else if (tmp2 > 0) {
                self.currentUri.duration = tmp2;
              }
            } else {
              tmp27 = closure_103;
              if (closure_103 === first) {
                tmp8 = globalThis;
                _Date = Date;
                prototype = Date.prototype;
                tmp9 = new.target;
                tmp10 = new.target;
                tmp11 = tmp2;
                date = new Date(tmp2);
                tmp13 = date;
                if (!self.manifest.dateTimeString) {
                  self.manifest.dateTimeString = tmp2;
                  self.manifest.dateTimeObject = date;
                }
                self.currentUri.dateTimeString = tmp2;
                self.currentUri.dateTimeObject = date;
              } else {
                tmp4 = closure_104;
                if (closure_104 === first) {
                  tmp6 = ct;
                  tmp7 = ct(self.manifest, arr);
                } else {
                  tmp5 = closure_105;
                  if (closure_105 === first) {
                    tmp28 = Li;
                    num3 = 1;
                    tmp29 = _a;
                    tmp30 = globalThis;
                    _Object = Object;
                    merged = Object.assign(self.manifest.sessionData, _a(Li(arr[1])));
                  }
                }
              }
            }
          }
        }
      }
    }
    return;
  }
  setHoldBack() {
    ({ serverControl, targetDuration, partTargetDuration } = this.manifest);
    if (serverControl) {
      result = targetDuration;
      if (targetDuration) {
        num = 3;
        result = 3 * targetDuration;
      }
      result1 = partTargetDuration;
      if (partTargetDuration) {
        num2 = 2;
        result1 = 2 * partTargetDuration;
      }
      if (targetDuration) {
        str = "holdBack";
        targetDuration = !serverControl.hasOwnProperty("holdBack");
      }
      if (targetDuration) {
        serverControl.holdBack = result;
      }
      tmp3 = result;
      if (result) {
        tmp3 = serverControl.holdBack < result;
      }
      if (tmp3) {
        serverControl.holdBack = result;
      }
      tmp4 = partTargetDuration;
      if (partTargetDuration) {
        str2 = "partHoldBack";
        tmp4 = !serverControl.hasOwnProperty("partHoldBack");
      }
      if (tmp4) {
        num3 = 3;
        serverControl.partHoldBack = 3 * partTargetDuration;
      }
      if (partTargetDuration) {
        partTargetDuration = serverControl.partHoldBack < result1;
      }
      if (partTargetDuration) {
        serverControl.partHoldBack = result1;
      }
    }
    return;
  }
}
function ct(arg0, arg1) {
  if (Oi(arg1[1])) {
    const _Object = Object;
    let merged = Object.assign(Pi(arg1[1]), {});
  } else {
    merged = _t(arg1[1]);
  }
  arg0[Jr(arg1[0].replace("#EXT-X-", ""))] = merged;
}
function Jr(str) {
  return str.toLowerCase().replace(/-(\w)/g, (arg0) => arg0[1].toUpperCase());
}
function _t(str) {
  if ("yes" !== str.toLowerCase()) {
    if ("no" !== str.toLowerCase()) {
      let parsed = str;
      if (-1 === str.indexOf(":")) {
        const _parseFloat = parseFloat;
        parsed = parseFloat(str);
      }
      const _isNaN = isNaN;
      if (isNaN(parsed)) {
        parsed = str;
      }
      return parsed;
    }
  }
  return "yes" === str.toLowerCase();
}
function Ai(str) {
  const obj = {};
  const parts = str.split("=");
  if (parts.length > 1) {
    obj[Jr(parts[0])] = _t(parts[1]);
    const tmp2 = Jr(parts[0]);
  }
  return obj;
}
function Pi(str) {
  let length;
  const parts = str.split(",");
  let merged = {};
  let num = 0;
  let tmp = merged;
  if (parts.length > 0) {
    do {
      let tmp2 = closure_109;
      let _Object = Object;
      merged = Object.assign(closure_109(parts[num]), merged);
      num = num + 1;
      tmp = merged;
      length = parts.length;
    } while (length > num);
  }
  return tmp;
}
function Oi(arr) {
  return arr.indexOf("=") > -1;
}
function Ii(arr, length2) {
  if (-1 === length2) {
    const items = [arr];
    let items1 = items;
  } else {
    items1 = [arr.substring(0, length2), arr.substring(length2 + 1)];
  }
  return items1;
}
function Li(str) {
  let obj = {};
  const global = obj;
  if (str) {
    const searchResult = str.search(",");
    const items = [str.slice(0, searchResult), str.slice(searchResult + 1)];
    const item = items.forEach((str) => {
      const parts = str.replace(/['"]+/g, "").split("=");
      for (let num = 0; num < parts.length; num = num + 1) {
        if ("DATA-ID" === parts[num]) {
          let tmp = obj;
          obj.DATA-ID = parts[1 - num];
        }
        if ("VALUE" === parts[num]) {
          let tmp2 = obj;
          obj.VALUE = parts[1 - num];
        }
      }
    });
    obj = {};
    obj.data = obj;
    return obj;
  }
}
let closure_114 = {};
function ne(arg0) {
  const global = arg0;
  let closure_1 = arguments;
  if ("string" === typeof arg0) {
    if (ne.hasOwnProperty(arg0)) {
      const timerId = GResult.default.setTimeout(() => {
        closure_1 = splice.call(closure_1, 1);
        closure_115[closure_0].apply(null, closure_1);
      }, 0);
      const _default2 = GResult.default;
    } else {
      tmp6.warn(``${arg0}` is an unknown task`);
    }
  } else if ("function" === tmp) {
    const timerId1 = GResult.default.setTimeout(() => {
      arg0(closure_115);
    }, 0);
    const _default = GResult.default;
  } else {
    tmp6.warn(``${arg0}` is invalid.`);
  }
}
const obj2 = {
  safeCall: function ut(arg0, arg1, arg2, arg3) {
    if (arg0) {
      if ("function" === typeof tmp[arg1]) {
        tmp[arg1].apply(tmp, arg2);
        const obj = tmp[arg1];
      }
    }
  },
  safeIncrement: P,
  getComputedStyle: function dt(arg0, arg1) {
    let str = "";
    if (arg0) {
      str = "";
      if (arg1) {
        str = "";
        if (GResult1.default) {
          str = "";
          if ("function" === typeof GResult1.default.getComputedStyle) {
            let hasItem = weakMap;
            if (weakMap) {
              hasItem = weakMap.has(arg0);
            }
            let value;
            if (hasItem) {
              value = weakMap.get(arg0);
            }
            if (!value) {
              const computedStyle = GResult1.default.getComputedStyle(arg0, null);
              value = computedStyle;
              if (weakMap) {
                const result = weakMap.set(arg0, computedStyle);
                value = computedStyle;
              }
              const _default = GResult1.default;
            }
            str = value.getPropertyValue(arg1);
          }
        }
      }
    }
    return str;
  },
  secondsToMs: function lt(arg0) {
    return Math.floor(1000 * arg0);
  },
  assign: Object.assign,
  headersStringToObject: pe,
  cdnHeadersToRequestId: de,
  extractHostnameAndDomain: re,
  extractHostname: F,
  manifestParser: Ve,
  generateShortID: Oe,
  generateUUID: ee,
  now: obj1.now,
  findMediaElement: se
};
const tmp12 = GResult1.default && GResult1.default.WeakMap;
const tmp9 = () => {
  const fn = function r() {
    callback(this, fn);
    callback2(this, "_listeners", undefined);
  };
  const global = fn;
  let obj = {
    key: "on",
    value(arg0, _eventEmitterGuid, iter) {
      const self = this;
      _eventEmitterGuid = _eventEmitterGuid._eventEmitterGuid;
      if (!_eventEmitterGuid) {
        const sum = sum + 1;
        _eventEmitterGuid = sum;
      }
      _eventEmitterGuid._eventEmitterGuid = _eventEmitterGuid;
      self._listeners = self._listeners || {};
      let items = self._listeners[arg0];
      if (!items) {
        items = [];
      }
      self._listeners[arg0] = items;
      let bindResult = _eventEmitterGuid;
      if (iter) {
        bindResult = _eventEmitterGuid.bind(iter);
      }
      self._listeners[arg0].push(bindResult);
      return bindResult;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "off",
    value(arg0, arg1) {
      let _listeners = this._listeners;
      if (_listeners) {
        _listeners = this._listeners[arg0];
      }
      if (_listeners) {
        const item = _listeners.forEach((_eventEmitterGuid) => {
          if (_eventEmitterGuid._eventEmitterGuid === arg1._eventEmitterGuid) {
            _listeners.splice(arg1, 1);
          }
        });
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "one",
    value(arg0, _eventEmitterGuid) {
      let self = this;
      let fn = arg0;
      self = this;
      _eventEmitterGuid = _eventEmitterGuid._eventEmitterGuid;
      if (!_eventEmitterGuid) {
        const sum = sum + 1;
        _eventEmitterGuid = sum;
      }
      _eventEmitterGuid._eventEmitterGuid = _eventEmitterGuid;
      fn = function o() {
        self.off(arg0, fn);
        let self = arg2;
        if (!arg2) {
          self = this;
        }
        arg1(...arguments);
      };
      fn._eventEmitterGuid = _eventEmitterGuid._eventEmitterGuid;
      self.on(arg0, fn);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "emit",
    value(arg0, arg1) {
      let obj = arg1;
      let self = this;
      let fn = arg0;
      self = this;
      if (this._listeners) {
        if (!obj) {
          obj = {};
        }
        fn = function f(arr, arg1) {
          arr = arg1;
          const substr = arr.slice();
          const item = substr.forEach((call) => {
            call.call(closure_1, { type: arg1 }, arg1);
          });
        };
        fn(self._listeners["before" + arg0] || [], obj);
        fn(self._listeners.before* || [], obj);
        fn(self._listeners[arg0] || [], obj);
        fn(self._listeners["after" + arg0] || [], obj);
        const tmp = self._listeners["before" + arg0] || [];
        const tmp2 = self._listeners.before* || [];
        const tmp3 = self._listeners[arg0] || [];
        const tmp4 = self._listeners["after" + arg0] || [];
      }
    }
  };
  N(fn, items);
  return fn;
}();
const merged = Object.assign(ne, {
  loaded: obj1.now(),
  monitor(videoElement, arg1) {
    return function st(ne, videoElement, arg2) {
      let merged = arg2;
      const tmp = callback2(callback(videoElement), 3);
      const first = tmp[0];
      const tmp3 = tmp[1];
      const log = ne.log;
      const getComputedStyle = ne.utils.getComputedStyle;
      const secondsToMs = ne.utils.secondsToMs;
      if (first) {
        if ("video" !== tmp4) {
          if ("audio" !== tmp4) {
            return log.error("The element of `" + tmp3 + "` was not a media element.");
          }
        }
        if (first.mux) {
          let mux = first.mux;
          mux.destroy();
          delete r5.mux;
          log.warn("Already monitoring this video element, replacing existing event listeners");
        }
        let obj = {
          getPlayheadTime() {
              return secondsToMs(first.currentTime);
            },
          getStateData() {
              const self = this;
              const getPlayheadTime = this.getPlayheadTime;
              let callResult;
              if (null !== getPlayheadTime) {
                if (undefined !== getPlayheadTime) {
                  callResult = getPlayheadTime.call(self);
                }
              }
              if (!callResult) {
                callResult = secondsToMs(first.currentTime);
              }
              let currentSrc = self.hlsjs && self.hlsjs.url;
              let dashjs = self.dashjs;
              if (dashjs) {
                dashjs = "function" === typeof self.dashjs.getSource;
              }
              if (dashjs) {
                const dashjs2 = self.dashjs;
                dashjs = dashjs2.getSource();
              }
              const obj = { player_is_paused: first.paused, player_width: parseInt(getComputedStyle(first, "width")), player_height: parseInt(getComputedStyle(first, "height")), player_autoplay_on: first.autoplay, player_preload_on: first.preload, player_language_code: first.lang };
              let _default = mod.default;
              if (_default) {
                let msFullscreenElement = mod.default.fullscreenElement;
                if (!msFullscreenElement) {
                  msFullscreenElement = mod.default.webkitFullscreenElement;
                }
                if (!msFullscreenElement) {
                  msFullscreenElement = mod.default.mozFullScreenElement;
                }
                if (!msFullscreenElement) {
                  msFullscreenElement = mod.default.msFullscreenElement;
                }
                _default = msFullscreenElement;
              }
              obj.player_is_fullscreen = _default;
              obj.video_poster_url = first.poster;
              if (!currentSrc) {
                currentSrc = dashjs;
              }
              if (!currentSrc) {
                currentSrc = first.currentSrc;
              }
              obj.video_source_url = currentSrc;
              obj.video_source_duration = secondsToMs(first.duration);
              obj.video_source_height = first.videoHeight;
              obj.video_source_width = first.videoWidth;
              let droppedVideoFrames;
              if (null != first) {
                const getVideoPlaybackQuality = first.getVideoPlaybackQuality;
                if (null !== getVideoPlaybackQuality) {
                  if (undefined !== getVideoPlaybackQuality) {
                    droppedVideoFrames = getVideoPlaybackQuality.call(first).droppedVideoFrames;
                  }
                }
              }
              obj.view_dropped_frame_count = droppedVideoFrames;
              if (first.getStartDate) {
                if (callResult > 0) {
                  const startDate = first.getStartDate();
                  if (startDate) {
                    if ("function" === typeof startDate.getTime) {
                      if (startDate.getTime()) {
                        const time = startDate.getTime();
                        obj.player_program_time = time + callResult;
                        if (first.seekable.length > 0) {
                          const seekable = first.seekable;
                          obj.player_live_edge_program_time = time + seekable.end(first.seekable.length - 1);
                        }
                      }
                    }
                  }
                }
              }
              return obj;
            }
        };
        const _Object = Object;
        obj = { automaticErrorTracking: true };
        merged = Object.assign(obj, arg2, obj);
        const _Object2 = Object;
        obj = { player_mux_plugin_version: ne.VERSION };
        merged.data = Object.assign(obj, merged.data);
        mux = first.mux;
        if (!mux) {
          mux = {};
        }
        first.mux = mux;
        first.mux.deleted = false;
        first.mux.emit = (arg0, arg1) => {
          arg0.emit(tmp3, arg0, arg1);
        };
        first.mux.updateData = (arg0) => {
          const mux = first.mux;
          mux.emit("hb", arg0);
        };
        function h() {
          log.error("The monitor for this video element has already been destroyed.");
        }
        first.mux.destroy = () => {
          const keys = Object.keys(first.mux.listeners);
          const item = keys.forEach((arg0) => {
            const removed = closure_2.removeEventListener(arg0, closure_2.mux.listeners[arg0], false);
          });
          delete r1.listeners;
          first.mux.destroy = h;
          first.mux.swapElement = h;
          first.mux.emit = h;
          first.mux.addHLSJS = h;
          first.mux.addDashJS = h;
          first.mux.removeHLSJS = h;
          first.mux.removeDashJS = h;
          first.mux.updateData = h;
          first.mux.setEmitTranslator = h;
          first.mux.setStateDataTranslator = h;
          first.mux.setGetPlayheadTime = h;
          first.mux.deleted = true;
          arg0.emit(tmp3, "destroy");
        };
        first.mux.swapElement = (arg0) => {
          const tmp = callback2(callback(arg0), 3);
          const first = tmp[0];
          arg0 = first;
          let text = tmp[1];
          if (first) {
            if ("video" === tmp4) {
              first.muxId = first.muxId;
              delete r4.muxId;
              first.mux = first.mux || {};
              const _Object = Object;
              first.mux.listeners = Object.assign({}, first.mux.listeners);
              const mux = first.mux;
              delete r6.listeners;
              const _Object2 = Object;
              const keys = Object.keys(first.mux.listeners);
              const item = keys.forEach((arg0) => {
                const removed = first.removeEventListener(arg0, first.mux.listeners[arg0], false);
                const listener = first.addEventListener(arg0, first.mux.listeners[arg0], false);
              });
              first.mux.swapElement = first.mux.swapElement;
              first.mux.destroy = first.mux.destroy;
              delete r3.mux;
              let errorResult;
            }
            const log2 = arg0.log;
            text = `The element of `${tmp3}`;
            errorResult = log2.error(`${`The element of `${tmp3}`}` was not a media element.`);
          } else {
            const log = arg0.log;
            return log.error("No element was found with the `" + `The element of `${tmp3}` + "` query selector.");
          }
        };
        first.mux.addHLSJS = (merged) => {
          merged.addHLSJS(tmp3, merged);
        };
        first.mux.addDashJS = (merged) => {
          merged.addDashJS(tmp3, merged);
        };
        first.mux.removeHLSJS = () => {
          arg0.removeHLSJS(tmp3);
        };
        first.mux.removeDashJS = () => {
          arg0.removeDashJS(tmp3);
        };
        first.mux.setEmitTranslator = (emitTranslator) => {
          emitTranslator.setEmitTranslator(tmp3, emitTranslator);
        };
        first.mux.setStateDataTranslator = (stateDataTranslator) => {
          const result = stateDataTranslator.setStateDataTranslator(tmp3, stateDataTranslator);
        };
        first.mux.setGetPlayheadTime = (getPlayheadTime) => {
          if (!getPlayheadTime) {
            getPlayheadTime = merged.getPlayheadTime;
          }
          getPlayheadTime.setGetPlayheadTime(tmp3, getPlayheadTime);
        };
        ne.init(tmp3, merged);
        ne.emit(tmp3, "playerready");
        if (!first.paused) {
          ne.emit(tmp3, "play");
          if (first.readyState > 2) {
            ne.emit(tmp3, "playing");
          }
        }
        first.mux.listeners = {};
        const item = closure_95.forEach((arg0) => {
          let tmp = "error" === arg0;
          if (tmp) {
            tmp = !merged.automaticErrorTracking;
          }
          if (!tmp) {
            first.mux.listeners[arg0] = () => {
              const obj = {};
              if ("error" === arg0) {
                if (closure_2.error) {
                  if (1 !== closure_2.error.code) {
                    obj.player_error_code = closure_2.error.code;
                    let message = closure_96[closure_2.error.code];
                    if (!message) {
                      message = closure_2.error.message;
                    }
                    obj.player_error_message = message;
                  }
                }
              }
              arg0.emit(closure_3, arg0, obj);
            };
            const listener = first.addEventListener(arg0, first.mux.listeners[arg0], false);
          }
        });
      } else {
        return log.error("No element was found with the `" + tmp3 + "` query selector.");
      }
    }(ne, videoElement, arg1);
  },
  destroyMonitor(videoElement) {
    const first = H(se(videoElement), 1)[0];
    if (first) {
      if (first.mux) {
        if ("function" === typeof first.mux.destroy) {
          const mux = first.mux;
          mux.destroy();
        }
      }
    }
    tmp6.error(`A video element monitor for `${videoElement}` has not been initialized via `mux.monitor`.`);
  },
  addHLSJS(merged, merged) {
    const tmp = J(merged);
    if (closure_114[tmp]) {
      closure_114[tmp].addHLSJS(merged);
      const obj = closure_114[tmp];
    } else {
      tmp6.error(`A monitor for `${tmp}` has not been initialized.`);
    }
  },
  addDashJS(merged, merged) {
    const tmp = J(merged);
    if (closure_114[tmp]) {
      closure_114[tmp].addDashJS(merged);
      const obj = closure_114[tmp];
    } else {
      tmp6.error(`A monitor for `${tmp}` has not been initialized.`);
    }
  },
  removeHLSJS(arg0) {
    const tmp = J(arg0);
    if (closure_114[tmp]) {
      closure_114[tmp].removeHLSJS();
      const obj = closure_114[tmp];
    } else {
      tmp6.error(`A monitor for `${tmp}` has not been initialized.`);
    }
  },
  removeDashJS(arg0) {
    const tmp = J(arg0);
    if (closure_114[tmp]) {
      closure_114[tmp].removeDashJS();
      const obj = closure_114[tmp];
    } else {
      tmp6.error(`A monitor for `${tmp}` has not been initialized.`);
    }
  },
  init(arg0, respectDoNotTrack) {
    if (tmp) {
      tmp6.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
    }
    const tmp4 = J(arg0);
    const tmp = ce() && respectDoNotTrack && respectDoNotTrack.respectDoNotTrack;
    closure_114[tmp4] = new closure_93(ne, tmp4, respectDoNotTrack);
  },
  emit(arg0, arg1, arg2) {
    const tmp = J(arg0);
    if (closure_114[tmp]) {
      closure_114[tmp].emit(arg1, arg2);
      if ("destroy" === arg1) {
        delete r1[r2];
      }
      const obj = closure_114[tmp];
    } else {
      tmp6.error(`A monitor for `${tmp}` has not been initialized.`);
    }
  },
  updateData(arg0, arg1) {
    const tmp = J(arg0);
    if (closure_114[tmp]) {
      closure_114[tmp].emit("hb", arg1);
      const obj = closure_114[tmp];
    } else {
      tmp6.error(`A monitor for `${tmp}` has not been initialized.`);
    }
  },
  setEmitTranslator(arg0, emitTranslator) {
    const tmp = J(arg0);
    if (closure_114[tmp]) {
      closure_114[tmp].emitTranslator = emitTranslator;
    } else {
      tmp6.error(`A monitor for `${tmp}` has not been initialized.`);
    }
  },
  setStateDataTranslator(arg0, stateDataTranslator) {
    const tmp = J(arg0);
    if (closure_114[tmp]) {
      closure_114[tmp].stateDataTranslator = stateDataTranslator;
    } else {
      tmp6.error(`A monitor for `${tmp}` has not been initialized.`);
    }
  },
  setGetPlayheadTime(arg0, getPlayheadTime) {
    const tmp = J(arg0);
    if (closure_114[tmp]) {
      closure_114[tmp].getPlayheadTime = getPlayheadTime;
    } else {
      tmp6.error(`A monitor for `${tmp}` has not been initialized.`);
    }
  },
  checkDoNotTrack: ce,
  log: tmp6,
  utils: {
    safeCall: function ut(arg0, arg1, arg2, arg3) {
      if (arg0) {
        if ("function" === typeof tmp[arg1]) {
          tmp[arg1].apply(tmp, arg2);
          const obj = tmp[arg1];
        }
      }
    },
    safeIncrement: P,
    getComputedStyle: function dt(arg0, arg1) {
      let str = "";
      if (arg0) {
        str = "";
        if (arg1) {
          str = "";
          if (GResult1.default) {
            str = "";
            if ("function" === typeof GResult1.default.getComputedStyle) {
              let hasItem = weakMap;
              if (weakMap) {
                hasItem = weakMap.has(arg0);
              }
              let value;
              if (hasItem) {
                value = weakMap.get(arg0);
              }
              if (!value) {
                const computedStyle = GResult1.default.getComputedStyle(arg0, null);
                value = computedStyle;
                if (weakMap) {
                  const result = weakMap.set(arg0, computedStyle);
                  value = computedStyle;
                }
                const _default = GResult1.default;
              }
              str = value.getPropertyValue(arg1);
            }
          }
        }
      }
      return str;
    },
    secondsToMs: function lt(arg0) {
      return Math.floor(1000 * arg0);
    },
    assign: Object.assign,
    headersStringToObject: pe,
    cdnHeadersToRequestId: de,
    extractHostnameAndDomain: re,
    extractHostname: F,
    manifestParser: Ve,
    generateShortID: Oe,
    generateUUID: ee,
    now: obj1.now,
    findMediaElement: se
  },
  events: { 148736: "no-hide-descendants", 0: "none", 0: false, 0: null, 191616: "dark", 209987712: "default", 0: 0.2, 0: 0, he: 24, ho: 24, hn: true, ht: "/assets/design/components/Icon/native/redesign/generated/images", id: 24, ii: 24, in: null, ip: "313d0291c31affa2231c3200ee7f2822", is: "CircleQuestionIcon", ke: "png", la: "row", lb: "space-between", le: "flex-start", li: "heading-md/normal", ld: "text-muted", lo: 1.9, ls: 18, lt: 80, ma: false, md: "text-feedback-positive", me: "text-sm/semibold", mf: "es-GQ", mi: "es", ml: "cover", mm: null },
  WINDOW_HIDDEN: false,
  WINDOW_UNLOADING: false
});
if (tmp18) {
  const listener = GResult.default.addEventListener("pagehide", (persisted) => {
    if (!persisted.persisted) {
      ne.WINDOW_UNLOADING = true;
    }
  }, false);
  const _default = GResult.default;
}

export default pt(defineProperty({}, "__esModule", { value: true }), obj);
