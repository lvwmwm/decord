// Module ID: 14037
// Function ID: 107519
// Name: U
// Dependencies: []

// Module 14037 (U)
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
      iterable = "undefined" !== typeof Symbol;
      if (iterable) {
        const _Symbol2 = Symbol;
        iterable = tmp2[Symbol.iterator];
      }
      if (!iterable) {
        iterable = tmp2[Symbol.iterator];
      }
      tmp6 = iterable;
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
          break;
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
    obj = tmp6;
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
function V(iterable) {
  let tmp;
  if (Array.isArray(iterable)) {
    tmp = ke(iterable);
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
    arr = Array.from(iterable);
  }
  if (!tmp) {
    tmp = Pe(iterable);
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
    const obj = { value, enumerable: true, configurable: true, writable: true };
    Object.defineProperty(arg0, arg1, obj);
  } else {
    arg0[arg1] = value;
  }
  return arg0;
}
function X(arg0) {
  if (Object.setPrototypeOf) {
    let _Object = Object;
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
          tmp3 = outer1_129;
          tmp4 = outer1_129(arg0);
          tmp5 = null;
          tmp2 = tmp4;
          if (null !== tmp4) {
            _Object = Object;
            hasOwnProperty2 = Object.prototype.hasOwnProperty;
            tmp6 = tmp4;
            tmp2 = tmp4;
            while (!hasOwnProperty2.call(tmp4, arg1)) {
              tmp7 = outer1_129;
              tmp4 = outer1_129(tmp4);
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
        tmp3 = outer1_129;
        tmp4 = outer1_129(arg0);
        tmp5 = null;
        tmp2 = tmp4;
        if (null !== tmp4) {
          _Object = Object;
          hasOwnProperty2 = Object.prototype.hasOwnProperty;
          tmp6 = tmp4;
          tmp2 = tmp4;
          while (!hasOwnProperty2.call(tmp4, arg1)) {
            tmp7 = outer1_129;
            tmp4 = outer1_129(tmp4);
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
  const tmp = Object.setPrototypeOf || ((arg0, arg1) => {
    arg0.__proto__ = arg1;
    return arg0;
  });
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
      for (let num2 = 0; num2 < keys.length; num2 = num2 + 1) {
        let tmp2 = keys[num2];
        if (arr.indexOf(tmp2) < 0) {
          obj[tmp2] = arg0[tmp2];
        }
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
  let closure_0 = arg0;
  let closure_1 = (function Rt() {
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
  })();
  return function() {
    const self = this;
    const obj = outer1_129(closure_0);
    if (closure_1) {
      const _Reflect = Reflect;
      let constructResult = Reflect.construct(obj, arguments, outer1_129(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    if (!constructResult) {
      outer1_124(self);
      let tmp8 = self;
    } else {
      tmp8 = constructResult;
      if ("object" !== outer1_118(constructResult)) {
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
let closure_134 = P;
function ue(arg0) {
  let closure_0 = arg0;
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
      combined = keys.concat(ownPropertySymbols.filter((arg0) => Object.getOwnPropertyDescriptor(closure_1, arg0).enumerable));
    }
    let item = combined.forEach((arg0) => {

    });
  }
  return arg0;
}
function fe(arg0, item10017) {
  let obj = item10017;
  let closure_0 = arg0;
  obj = item10017;
  if (null == item10017) {
    obj = {};
  }
  let _Object = Object;
  if (Object.getOwnPropertyDescriptors) {
    const _Object2 = Object;
    _Object.defineProperties(arg0, Object.getOwnPropertyDescriptors(obj));
  } else {
    const item = (function da(arg0) {
      let closure_0 = arg0;
      const keys = Object.keys(arg0);
      if (Object.getOwnPropertySymbols) {
        const _Object = Object;
        const push = keys.push;
        push.apply(keys, Object.getOwnPropertySymbols(arg0));
      }
      return keys;
    })(_Object(obj)).forEach((arg0) => {
      Object.defineProperty(closure_0, arg0, Object.getOwnPropertyDescriptor(obj, arg0));
    });
    const arr = (function da(arg0) {
      let closure_0 = arg0;
      const keys = Object.keys(arg0);
      if (Object.getOwnPropertySymbols) {
        const _Object = Object;
        const push = keys.push;
        push.apply(keys, Object.getOwnPropertySymbols(arg0));
      }
      return keys;
    })(_Object(obj));
  }
  return arg0;
}
function pe(arg0) {
  let str = arg0;
  const obj = {};
  if (!arg0) {
    str = "";
  }
  let parts = str.trim().split(/[\r\n]+/);
  const item = parts.forEach((str) => {
    if (str) {
      const parts = str.split(": ");
      const str2 = parts.shift();
      let tmp = str2;
      if (str2) {
        let tmp3 = outer1_42.indexOf(str2.toLowerCase()) >= 0;
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
  let closure_0 = arg0;
  if (arg0) {
    const found = items.find((arg0) => undefined !== table[arg0]);
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
      continue;
    }
    continue;
  }
  return obj;
}
function me(arg0) {
  let closure_0 = arg0;
  let obj = {};
  obj = {};
  const keys = Object.keys(arg0);
  let item = keys.forEach((str) => {
    let closure_0 = str;
    let c1 = false;
    if (closure_0.hasOwnProperty(str)) {
      if (undefined !== closure_0[str]) {
        const parts = str.split("_");
        const first = parts[0];
        let closure_2 = tmp14;
        if (!outer1_74[first]) {
          outer1_35.info(`Data key word \`${arr2[0]}\` not expected in ${str}`);
          closure_2 = `${tmp12}_`;
        }
        const item = parts.splice(1).forEach((arg0) => {
          if ("url" === arg0) {
            let c1 = true;
          }
          if (outer2_75[arg0]) {
            closure_2 = closure_2 + outer2_75[arg0];
          } else {
            const _Number = Number;
            const _Number2 = Number;
            if (Number.isInteger(Number(arg0))) {
              closure_2 = closure_2 + arg0;
            } else {
              outer2_35.info(`Data key word \`${arg0}\` not expected in ${closure_0}`);
              closure_2 = `${closure_2}_${arg0}_`;
            }
          }
        });
        if (c1) {
          closure_2[closure_2] = closure_0[str];
        } else {
          c1[closure_2] = closure_0[str];
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
  let closure_0 = arg0;
  return () => {
    if (callback) {
      callback = 0;
      let closure_1 = callback(0);
    }
    return closure_1;
  };
}
class B {
  constructor(arg0, arg1) {
    closure_0 = global;
    return () => {
      if (!obj) {
        obj = { exports: {} };
        callback(obj.exports, obj);
      }
      return obj.exports;
    };
  }
}
function pt(arg0, arr) {
  let closure_0 = arr;
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
      let fn = (arg0) => arr[arg0];
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
  callback();
});
const ftResult1 = ft(() => {

});
let closure_10 = B((arg0, arg1) => {
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
      if (outer1_117(this, ve)) {
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
  callback();
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
      if (outer1_117(this, ae)) {
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
  callback();
  arg1.exports = ae;
  ae.prototype.type = "DOMTextNode";
  ae.prototype.nodeType = 3;
  ae.prototype.nodeName = "#text";
});
let closure_13 = B((arg0, arg1) => {
  arg1.exports = function Ma(target) {
    let self = this;
    let closure_0 = target;
    self = this;
    if (!target.target) {
      target.target = self;
    }
    if (!self.listeners) {
      self.listeners = {};
    }
    if (self.listeners[target.type]) {
      return arr.forEach((handleEvent) => {
        closure_0.currentTarget = self;
        if ("function" === typeof handleEvent) {
          handleEvent(closure_0);
        } else {
          handleEvent.handleEvent(closure_0);
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
      return (function Fa(tagName) {
        const items = [];
        let formatted = str;
        if ("http://www.w3.org/1999/xhtml" === tagName.namespaceURI) {
          formatted = str.toLowerCase();
        }
        const items1 = [];
        const text = `<${tmp2}`;
        for (const key10014 in arg0) {
          let tmp24 = key10014;
          let tmp25 = outer1_2;
          arr = outer1_2(arg0, key10014);
          if (!arr) {
            continue;
          } else {
            let obj = { name: key10014, value: arg0[key10014] };
            arr = items1.push(obj);
            continue;
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
              tmp5 = tmp27;
              tmp6 = iter;
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
                continue;
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
          str4 = outer1_3(items1);
        }
        const dataset = tagName.dataset;
        const items2 = [];
        for (const key10050 in dataset) {
          let tmp29 = key10050;
          let obj1 = { name: "data-" + key10050, value: dataset[key10050] };
          let arr2 = items2.push(obj1);
          continue;
        }
        let str5 = "";
        if (items2.length) {
          str5 = outer1_3(items2);
        }
        items.push(text + str4 + str5);
        if (outer1_0.indexOf(formatted) > -1) {
          items.push(" />");
        } else {
          items.push(">");
          if (tagName.childNodes.length) {
            const push = items.push;
            const childNodes = tagName.childNodes;
            push.apply(items, childNodes.map(outer1_1));
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
            items.push(outer1_4(innerText));
            const tmp18 = outer1_4;
          }
          items.push(`</${tmp2}>`);
        }
        return items.join("");
      })(nodeType);
    }
  }
  function Va(style) {
    const tmp = outer1_118(style[arg1]);
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
    let item = arr.forEach((arg0) => {
      let name;
      let value;
      ({ name, value } = arg0);
      let tmp = value;
      if ("style" === name) {
        tmp = (function ja(value) {
          let closure_0 = value;
          if ("string" === typeof value) {
            return value;
          } else {
            let c1 = "";
            const _Object = Object;
            const keys = Object.keys(value);
            const item = keys.forEach((arg0) => {
              closure_1 = `${closure_1}${arg0.replace(/[A-Z]/g, () => { ... })}:${tmp};`;
            });
            return c1;
          }
        })(value);
      }
      items.push(`${`${name}="`}${outer1_4(tmp).replace(/"/g, "&quot;")}"`);
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
  let closure_0 = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"];
});
let closure_17 = B((arg0, arg1) => {
  class I {
    constructor(arg0, arg1, arg2) {
      tmp = arg1;
      tmp2 = arg2;
      self = this;
      if (outer1_117(this, I)) {
        if (undefined === tmp2) {
          tmp2 = c2;
        } else if (!tmp2) {
          tmp2 = null;
        }
        tmp9 = c2;
        formatted = arg0;
        if (tmp2 === c2) {
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
        tmp3 = arg1;
        delete tmp2[tmp];
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
      c0 = arg0.split(" ");
      items = [];
      c1 = items;
      tmp = c0(this, (nodeType) => {
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
      closure_0 = arg0;
      tmp = closure_0(this, (arg0) => closure_0 === arg0) || false;
      return tmp;
    }
  }
  let closure_3 = I;
  callback();
  let closure_0 = callback2();
  let tmp2 = callback5();
  let tmp3 = callback6();
  let closure_1 = callback8();
  let c2 = "http://www.w3.org/1999/xhtml";
  arg1.exports = I;
  I.prototype.type = "DOMElement";
  I.prototype.nodeType = 1;
  I.prototype.removeEventListener = callback7();
  I.prototype.addEventListener = tmp3;
  I.prototype.dispatchEvent = tmp2;
});
let closure_18 = B((arg0, arg1) => {
  class K {
    constructor(arg0) {
      tmp = arg0;
      self = this;
      if (outer1_117(this, K)) {
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
  let closure_0 = K;
  callback();
  const tmp2 = callback9();
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
      if (outer1_117(this, Ue)) {
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
  callback();
  let closure_0 = callback2();
  let closure_1 = callback3();
  let closure_2 = callback4();
  const tmp2 = callback9();
  const getOwnPropertyDescriptor = tmp2;
  let closure_4 = callback10();
  let closure_5 = callback11();
  const tmp3 = callback5();
  arg1.exports = Ue;
  let prototype = Ue.prototype;
  prototype.createTextNode = function(arg0) {
    return new closure_2(arg0, this);
  };
  prototype.createElementNS = function(arg0, arg1) {
    let StringResult = null;
    if (null !== arg0) {
      const _String = String;
      StringResult = String(arg0);
    }
    return new closure_3(arg1, this, StringResult);
  };
  prototype.createElement = function(arg0) {
    return new closure_3(arg0, this);
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
  prototype.removeEventListener = callback7();
  prototype.addEventListener = callback6();
  prototype.dispatchEvent = tmp3;
});
let closure_21 = B((arg0, arg1) => {
  let tmp = callback12();
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
  const tmp3 = callback13();
  if ("undefined" !== typeof document) {
    __GLOBAL_DOCUMENT_CACHE_4 = document;
  } else {
    __GLOBAL_DOCUMENT_CACHE_4 = tmp2["__GLOBAL_DOCUMENT_CACHE@4"];
    if (!__GLOBAL_DOCUMENT_CACHE_4) {
      tmp2["__GLOBAL_DOCUMENT_CACHE@4"] = tmp3;
      __GLOBAL_DOCUMENT_CACHE_4 = tmp3;
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
  continue;
}
const GResult = G(BResult());
let closure_23 = G(BResult());
let closure_24 = G(BResult());
let obj1 = {
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
    let items = uint8Array;
    const _crypto2 = mod.default.crypto;
    const randomValues = _crypto2.getRandomValues(uint8Array);
    let num7 = 0;
    do {
      uint8Array[num7] = uint8Array[num7] % 16;
      num7 = num7 + 1;
    } while (num7 < 32);
  } else {
    items = [];
    let num3 = 0;
    do {
      let _Math = Math;
      items[num3] = 16 * Math.random() | 0;
      num3 = num3 + 1;
    } while (num3 < 32);
  }
  let c1 = 0;
  let str = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (arg0) => {
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
      break;
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
let c30 = 0;
let c31 = 1;
let c32 = 2;
let c33 = 3;
let c34 = 4;
let tmp6 = (function Et(arg0) {
  let num = 3;
  if (arguments.length > 1) {
    num = 3;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
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
  const obj = {
    trace() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (num <= outer1_30) {
        return callback.apply(undefined, outer1_122(array));
      }
    },
    debug() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (num <= outer1_31) {
        return callback3.apply(undefined, outer1_122(array));
      }
    },
    info() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (num <= outer1_32) {
        return callback2.apply(undefined, outer1_122(array));
      }
    },
    warn() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (num <= outer1_33) {
        return callback4.apply(undefined, outer1_122(array));
      }
    },
    error() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (num <= outer1_34) {
        return callback5.apply(undefined, outer1_122(array));
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
        num = tmp;
      }
    }
  });
  return obj;
})("[mux]");
let closure_35 = tmp6;
let closure_36 = G(BResult());
ftResult();
ftResult1();
class F {
  constructor(arg0) {
    return re(global)[0];
  }
}
let closure_37 = F;
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
  return ["localhost"];
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
let items = ["x-request-id", "cf-ray", "x-amz-cf-id", "x-akamai-request-id"];
let items1 = ["x-cdn", "content-type"];
let closure_42 = items1.concat(items);
function _a(obj) {
  let str;
  obj = {};
  for (const key10007 in arg0) {
    let tmp = key10007;
    let tmp2 = arg0[key10007];
    DATA_ID = tmp2["DATA-ID"];
    if (-1 === DATA_ID.search("io.litix.data.")) {
      continue;
    } else {
      ({ DATA-ID: str, VALUE: obj[str.replace(str, "io.litix.data.", "")] } = tmp2);
      continue;
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
    obj.requestStart = Math.round(navigationStartResult + (loading ? loading.start : loading.trequest));
    const _Math2 = Math;
    obj.responseStart = Math.round(navigationStartResult + (loading ? loading.first : loading.tfirst));
    const _Math3 = Math;
    obj.responseEnd = Math.round(navigationStartResult + (loading ? loading.end : loading.tload));
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
  let closure_0 = log;
  let closure_1 = arg1;
  let closure_2 = on;
  log = log.log;
  if (on) {
    if (on.on) {
      on = undefined;
      const tmp3 = (function ma(getVersion) {
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
      })(on);
      function o(arg0, arg1) {
        return log.emit(closure_1, arg0, arg1);
      }
      const fn = function s(arg0) {
        let data;
        let type;
        ({ data, type } = arg0);
        if (!data) {
          data = {};
        }
        const url = data.url;
        const obj = { request_event_type: type, request_start: 0, request_response_start: 0, request_response_end: 0, request_bytes_loaded: -1, request_type: "manifest", request_hostname: outer1_37(url), request_url: url };
        o("requestcompleted", obj);
      };
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
        const tmp5 = outer1_46(request, closure_2);
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
      const fn3 = function c(arg0) {
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
        ({ requestStart, requestResponseStart, requestResponseEnd, requestBytesLoaded, requestResponseHeaders, requestMediaDuration, requestHostname, requestUrl, requestId } = outer1_46(request, store));
        const qualityFor = store.getQualityFor(type2);
        const bitrateList = store.getCurrentTrackFor(type2).bitrateList;
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
      let obj = { video: on, audio: on, totalBitrate: on };
      const fn4 = function x(newQuality) {
        let closure_0 = newQuality;
        if ("number" === typeof newQuality.newQuality) {
          const mediaType = newQuality.mediaType;
          if ("audio" === mediaType) {
            const bitrateInfoListFor = store.getBitrateInfoListFor(mediaType);
            const found = bitrateInfoListFor.find((qualityIndex) => qualityIndex.qualityIndex === newQuality.newQuality);
            if (found) {
              if ("number" === typeof found.bitrate) {
                let obj = {};
                outer1_135(obj, found);
                obj = { codec: store.getCurrentTrackFor(mediaType).codec };
                outer1_136(obj, obj);
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
                          obj.video_source_codec = outer1_47(obj.video.codec);
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
        obj.request_hostname = outer1_37(request.url);
        o("requestcanceled", obj);
      };
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
          obj = { request_error: `${obj.type}_${obj.action}`, request_url: request.url, request_hostname: outer1_37(request.url), request_type: request.mediaType };
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
      on = on.on;
      on("error", fn6);
      on._stopMuxMonitor = () => {
        store.off("manifestLoaded", fn);
        store.off("initFragmentLoaded", fn2);
        store.off("mediaFragmentLoaded", fn3);
        store.off("qualityChangeRendered", fn4);
        store.off("error", fn6);
        store.off("fragmentLoadingAbandoned", fn5);
        delete tmp._stopMuxMonitor;
      };
    }
  }
  log.warn("Invalid dash.js player reference. Monitoring blocked.");
}
let c49 = 0;
let closure_50 = G(BResult());
let closure_51 = (() => {
  const fn = function r(pm) {
    let closure_0 = pm;
    const self = this;
    outer1_125(this, closure_0);
    outer1_128(this, "_playbackHeartbeatInterval", undefined);
    outer1_128(this, "_playheadShouldBeProgressing", undefined);
    outer1_128(this, "pm", undefined);
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
      if (pm.data.player_is_paused) {
        const result = obj._stopPlaybackHeartbeatInterval();
      } else {
        const result1 = obj._startPlaybackHeartbeatInterval();
      }
    });
    pm.on("timeupdate", () => {
      if (null !== self._playbackHeartbeatInterval) {
        pm.emit("playbackheartbeat");
      }
    });
    pm.on("devicesleep", (arg0, viewer_time) => {
      if (null !== self._playbackHeartbeatInterval) {
        outer2_50.default.clearInterval(self._playbackHeartbeatInterval);
        const obj = { viewer_time: viewer_time.viewer_time };
        pm.emit("playbackheartbeatend", obj);
        self._playbackHeartbeatInterval = null;
        const _default = outer2_50.default;
      }
    });
  };
  let obj = {
    key: "_startPlaybackHeartbeatInterval",
    value() {
      let self = this;
      self = this;
      if (null === this._playbackHeartbeatInterval) {
        let pm = self.pm;
        pm.emit("playbackheartbeat");
        self._playbackHeartbeatInterval = outer1_50.default.setInterval(() => {
          const pm = self.pm;
          pm.emit("playbackheartbeat");
        }, self.pm.playbackHeartbeatTime);
        const _default = outer1_50.default;
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
        outer1_50.default.clearInterval(self._playbackHeartbeatInterval);
        const pm = self.pm;
        pm.emit("playbackheartbeatend");
        self._playbackHeartbeatInterval = null;
        const _default = outer1_50.default;
      }
    }
  };
  items[1] = obj;
  N(fn, items);
  return fn;
})();
let fn = function r(on) {
  let closure_0 = on;
  const self = this;
  D(this, fn);
  l(this, "viewErrored", undefined);
  on.on("viewinit", () => {
    self.viewErrored = false;
  });
  on.on("error", (arg0, player_error_code) => {
    const errorTranslatorResult = on.errorTranslator({ player_error_code: player_error_code.player_error_code, player_error_message: player_error_code.player_error_message, player_error_context: player_error_code.player_error_context, player_error_severity: player_error_code.player_error_severity, player_error_business_exception: player_error_code.player_error_business_exception });
    if (errorTranslatorResult) {
      player_error_code = tmp2.player_error_code;
      let player_error_code2 = player_error_code;
      if (!player_error_code) {
        player_error_code2 = player_error_code.player_error_code;
      }
      on.data.player_error_code = player_error_code2;
      const player_error_message = tmp2.player_error_message;
      let player_error_message2 = player_error_message;
      if (!player_error_message) {
        player_error_message2 = player_error_code.player_error_message;
      }
      on.data.player_error_message = player_error_message2;
      const player_error_context = tmp2.player_error_context;
      let player_error_context2 = player_error_context;
      if (!player_error_context) {
        player_error_context2 = player_error_code.player_error_context;
      }
      on.data.player_error_context = player_error_context2;
      const player_error_severity = tmp2.player_error_severity;
      let player_error_severity2 = player_error_severity;
      if (!player_error_severity) {
        player_error_severity2 = player_error_code.player_error_severity;
      }
      on.data.player_error_severity = player_error_severity2;
      const player_error_business_exception = errorTranslatorResult.player_error_business_exception;
      let player_error_business_exception2 = player_error_business_exception;
      if (!player_error_business_exception) {
        player_error_business_exception2 = player_error_code.player_error_business_exception;
      }
      on.data.player_error_business_exception = player_error_business_exception2;
      self.viewErrored = true;
    }
  });
  on.on("aftererror", () => {
    const data = on.data;
    let tmp3 = null === data;
    if (!tmp3) {
      tmp3 = undefined === data;
    }
    if (!tmp3) {
      delete tmp2.player_error_code;
    }
    const data2 = on.data;
    let tmp4 = null === data2;
    if (!tmp4) {
      tmp4 = undefined === data2;
    }
    if (!tmp4) {
      delete tmp2.player_error_message;
    }
    const data3 = on.data;
    let tmp5 = null === data3;
    if (!tmp5) {
      tmp5 = undefined === data3;
    }
    if (!tmp5) {
      delete tmp2.player_error_context;
    }
    const data4 = on.data;
    let tmp6 = null === data4;
    if (!tmp6) {
      tmp6 = undefined === data4;
    }
    if (!tmp6) {
      delete tmp2.player_error_severity;
    }
    const data5 = on.data;
    let tmp7 = null === data5;
    if (!tmp7) {
      tmp7 = undefined === data5;
    }
    if (!tmp7) {
      delete tmp.player_error_business_exception;
    }
  });
};
let closure_53 = (() => {
  const fn = function r(pm) {
    outer1_125(this, fn);
    outer1_128(this, "_watchTimeTrackerLastCheckedTime", undefined);
    outer1_128(this, "pm", undefined);
    this.pm = pm;
    this._watchTimeTrackerLastCheckedTime = null;
    const _updateWatchTime = this._updateWatchTime;
    pm.on("playbackheartbeat", _updateWatchTime.bind(this));
    const _clearWatchTimeState = this._clearWatchTimeState;
    pm.on("playbackheartbeatend", _clearWatchTimeState.bind(this));
  };
  let obj = {
    key: "_updateWatchTime",
    value(arg0, viewer_time) {
      const self = this;
      viewer_time = viewer_time.viewer_time;
      if (null === this._watchTimeTrackerLastCheckedTime) {
        self._watchTimeTrackerLastCheckedTime = viewer_time;
      }
      outer1_134(self.pm.data, "view_watch_time", viewer_time - self._watchTimeTrackerLastCheckedTime);
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
})();
let closure_54 = (() => {
  const fn = function r(pm) {
    const self = this;
    outer1_125(this, self);
    outer1_128(this, "_playbackTimeTrackerLastPlayheadPosition", undefined);
    outer1_128(this, "_lastTime", undefined);
    outer1_128(this, "_isAdPlaying", undefined);
    outer1_128(this, "_callbackUpdatePlaybackTime", undefined);
    outer1_128(this, "pm", undefined);
    this.pm = pm;
    this._playbackTimeTrackerLastPlayheadPosition = -1;
    this._lastTime = outer1_25.now();
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
      self._lastTime = outer2_25.now();
      self._isAdPlaying = false;
      self._callbackUpdatePlaybackTime = null;
    });
  };
  let obj = {
    key: "_startPlaybackTimeTracking",
    value() {
      const self = this;
      if (null === this._callbackUpdatePlaybackTime) {
        const _updatePlaybackTime = self._updatePlaybackTime;
        self._callbackUpdatePlaybackTime = _updatePlaybackTime.bind(self);
        self._playbackTimeTrackerLastPlayheadPosition = self.pm.data.player_playhead_time;
        self._lastTime = outer1_25.now();
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
      const nowResult = outer1_25.now();
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
          outer1_134(self.pm.data, "view_content_playback_time", num);
        }
        let tmp8 = null !== self._callbackUpdatePlaybackTime && diff > 0;
        if (tmp8) {
          tmp8 = diff <= 1000;
        }
        if (tmp8) {
          if (self._isAdPlaying) {
            outer1_134(self.pm.data, "ad_playing_time_ms_cumulative", diff);
          }
          outer1_134(self.pm.data, "view_playing_time_ms_cumulative", diff);
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
})();
let closure_55 = (() => {
  let fn = function r(pm) {
    let closure_0 = pm;
    outer1_125(this, closure_0);
    outer1_128(this, "pm", undefined);
    this.pm = pm;
    const _updatePlayheadTime = this._updatePlayheadTime;
    const bindResult = _updatePlayheadTime.bind(this);
    let closure_1 = bindResult;
    pm.on("playbackheartbeat", bindResult);
    pm.on("playbackheartbeatend", bindResult);
    pm.on("timeupdate", bindResult);
    pm.on("destroy", () => {
      pm.off("timeupdate", closure_1);
    });
  };
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
      let self = this;
      self = this;
      const fn = function n() {
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
})();
let c56 = 300000;
let fn2 = function r(disableRebufferTracking) {
  let closure_0 = disableRebufferTracking;
  D(this, fn2);
  if (!disableRebufferTracking.disableRebufferTracking) {
    function i(arg0, arg1) {
      a(arg1);
      let c1;
    }
    function a(viewer_time) {
      if (viewer_time) {
        outer1_134(disableRebufferTracking.data, "view_rebuffer_duration", viewer_time.viewer_time - viewer_time);
        viewer_time = viewer_time.viewer_time;
        if (disableRebufferTracking.data.view_rebuffer_duration > outer1_56) {
          disableRebufferTracking.emit("viewend");
          disableRebufferTracking.send("viewend");
          const log = disableRebufferTracking.mux.log;
          const concat = "Ending view after rebuffering for longer than ".concat;
          log.warn("Ending view after rebuffering for longer than ".concat(outer1_56, "ms, future events will be ignored unless a programchange or videochange occurs."));
        }
      }
      let tmp11 = disableRebufferTracking.data.view_watch_time >= 0;
      if (tmp11) {
        tmp11 = disableRebufferTracking.data.view_rebuffer_count > 0;
      }
      if (tmp11) {
        disableRebufferTracking.data.view_rebuffer_frequency = disableRebufferTracking.data.view_rebuffer_count / disableRebufferTracking.data.view_watch_time;
        disableRebufferTracking.data.view_rebuffer_percentage = disableRebufferTracking.data.view_rebuffer_duration / disableRebufferTracking.data.view_watch_time;
      }
    }
    disableRebufferTracking.on("playbackheartbeat", (arg0, arg1) => a(arg1));
    disableRebufferTracking.on("rebufferstart", (arg0, viewer_time) => {
      if (!viewer_time) {
        outer1_134(disableRebufferTracking.data, "view_rebuffer_count", 1);
        viewer_time = viewer_time.viewer_time;
        disableRebufferTracking.one("rebufferend", i);
      }
    });
    disableRebufferTracking.on("viewinit", () => {
      let c1;
      disableRebufferTracking.off("rebufferend", i);
    });
  }
};
let closure_58 = (() => {
  const fn = function r(pm) {
    let self = this;
    self = this;
    outer1_125(this, self);
    outer1_128(this, "_lastCheckedTime", undefined);
    outer1_128(this, "_lastPlayheadTime", undefined);
    outer1_128(this, "_lastPlayheadTimeUpdatedTime", undefined);
    outer1_128(this, "_rebuffering", undefined);
    outer1_128(this, "pm", undefined);
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
        const result = self._cleanupRebufferTracker(null, { viewer_time: outer2_25.now() });
      });
    }
  };
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
                tmp5 = "number" === typeof self.pm.sustainedRebufferThreshold && tmp4 >= self.pm.sustainedRebufferThreshold;
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
})();
let closure_59 = (() => {
  let fn = function r(pm) {
    let closure_0 = pm;
    const self = this;
    outer1_125(this, closure_0);
    outer1_128(this, "pm", undefined);
    this.pm = pm;
    pm.on("viewinit", () => {
      const data = view_id.data;
      view_id = data.view_id;
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
              viewer_time = outer3_25.now();
            }
            const result = fn.calculateTimeToFirstFrame(viewer_time, view_id);
          }
        };
        view_id.one("playing", fn);
        view_id.one("adplaying", fn);
        view_id.one("viewend", () => {
          view_id.off("playing", fn);
          view_id.off("adplaying", fn);
        });
      }
    });
  };
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
        tmp = (self.pm.data.player_autoplay_on || self.pm.data.video_is_autoplay) && self.pm.pageLoadInitTime;
      }
    }
  };
  items[1] = obj;
  N(fn, items);
  return fn;
})();
let fn3 = function r(on) {
  let closure_0 = on;
  const self = this;
  D(this, fn3);
  l(this, "_lastPlayerHeight", undefined);
  l(this, "_lastPlayerWidth", undefined);
  l(this, "_lastPlayheadPosition", undefined);
  l(this, "_lastSourceHeight", undefined);
  l(this, "_lastSourceWidth", undefined);
  on.on("viewinit", () => {
    self._lastPlayheadPosition = -1;
  });
  const items = ["pause", "rebufferstart", "seeking", "error", "adbreakstart", "hb", "renditionchange", "orientationchange", "viewend", "playbackmodechange"];
  const item = items.forEach((arg0) => {
    on.on(arg0, () => {
      if (outer1_1._lastPlayheadPosition >= 0) {
        if (outer1_0.data.player_playhead_time >= 0) {
          if (outer1_1._lastPlayerWidth >= 0) {
            if (outer1_1._lastSourceWidth > 0) {
              if (outer1_1._lastPlayerHeight >= 0) {
                if (outer1_1._lastSourceHeight > 0) {
                  const diff = outer1_0.data.player_playhead_time - outer1_1._lastPlayheadPosition;
                  if (diff < 0) {
                    outer1_1._lastPlayheadPosition = -1;
                  } else {
                    const _Math = Math;
                    const bound = Math.min(outer1_1._lastPlayerWidth / outer1_1._lastSourceWidth, outer1_1._lastPlayerHeight / outer1_1._lastSourceHeight);
                    const _Math2 = Math;
                    const bound1 = Math.max(0, bound - 1);
                    const _Math3 = Math;
                    const bound2 = Math.max(0, 1 - bound);
                    let num = outer1_0.data.view_max_upscale_percentage;
                    if (!num) {
                      num = 0;
                    }
                    outer1_0.data.view_max_upscale_percentage = Math.max(num, bound1);
                    let num2 = outer1_0.data.view_max_downscale_percentage;
                    if (!num2) {
                      num2 = 0;
                    }
                    outer1_0.data.view_max_downscale_percentage = Math.max(num2, bound2);
                    outer2_134(outer1_0.data, "view_total_content_playback_time", diff);
                    outer2_134(outer1_0.data, "view_total_upscaling", bound1 * diff);
                    outer2_134(outer1_0.data, "view_total_downscaling", bound2 * diff);
                  }
                }
              }
            }
          }
        }
      }
      outer1_1._lastPlayheadPosition = -1;
    });
  });
  const items1 = ["playing", "hb", "renditionchange", "orientationchange", "playbackmodechange"];
  const item1 = items1.forEach((arg0) => {
    on.on(arg0, () => {
      outer1_1._lastPlayheadPosition = outer1_0.data.player_playhead_time;
      outer1_1._lastPlayerWidth = outer1_0.data.player_width;
      outer1_1._lastPlayerHeight = outer1_0.data.player_height;
      outer1_1._lastSourceWidth = outer1_0.data.video_source_width;
      outer1_1._lastSourceHeight = outer1_0.data.video_source_height;
    });
  });
};
let fn4 = function r(on) {
  let closure_0 = on;
  const self = this;
  D(this, fn4);
  l(this, "isSeeking", undefined);
  this.isSeeking = false;
  let c2 = -1;
  function a() {
    const nowResult = outer1_25.now();
    let tmp3 = c2;
    if (!c2) {
      tmp3 = nowResult;
    }
    const diff = (on.data.viewer_time || nowResult) - tmp3;
    outer1_134(on.data, "view_seek_duration", diff);
    let num = on.data.view_max_seek_time;
    if (!num) {
      num = 0;
    }
    on.data.view_max_seek_time = Math.max(num, diff);
    self.isSeeking = false;
    c2 = -1;
  }
  on.on("seeking", (arg0, viewer_time) => {
    const merged = Object.assign(on.data, viewer_time);
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
    outer1_134(on.data, "view_seek_count", 1);
    on.send("seeking");
  });
  on.on("seeked", () => {
    a();
  });
  on.on("viewend", () => {
    if (self.isSeeking) {
      a();
      on.send("seeked");
    }
    self.isSeeking = false;
    let c2 = -1;
  });
};
function Xt(arr) {
  arr.push(arg1);
  const sorted = arr.sort((viewer_time, viewer_time2) => viewer_time.viewer_time - viewer_time2.viewer_time);
}
let closure_63 = ["adbreakstart", "adrequest", "adresponse", "adplay", "adplaying", "adpause", "adended", "adbreakend", "aderror", "adclicked", "adskipped"];
let closure_64 = (() => {
  let fn = function r(pm) {
    let closure_0 = pm;
    const self = this;
    outer1_125(this, closure_0);
    outer1_128(this, "_adHasPlayed", undefined);
    outer1_128(this, "_adRequests", undefined);
    outer1_128(this, "_adResponses", undefined);
    outer1_128(this, "_currentAdRequestNumber", undefined);
    outer1_128(this, "_currentAdResponseNumber", undefined);
    outer1_128(this, "_prerollPlayTime", undefined);
    outer1_128(this, "_wouldBeNewAdPlay", undefined);
    outer1_128(this, "isAdBreak", undefined);
    outer1_128(this, "pm", undefined);
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
    const item = outer1_63.forEach((arg0) => {
      const _updateAdData = self._updateAdData;
      return pm.on(arg0, _updateAdData.bind(self));
    });
    const fn = function i() {
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
      outer2_62(self._adRequests, Object.assign({ ad_request_id: `generatedAdRequestId${+self._currentAdRequestNumber}` }, arg1));
      outer2_134(pm.data, "view_ad_request_count");
      if (self.inPrerollPosition()) {
        pm.data.view_preroll_requested = true;
        if (!self._adHasPlayed) {
          outer2_134(pm.data, "view_preroll_request_count");
        }
      }
    });
    pm.on("adresponse", (arg0, arg1) => {
      self._currentAdResponseNumber = +self._currentAdResponseNumber + 1;
      const merged = Object.assign({ ad_request_id: `generatedAdRequestId${tmp}` }, arg1);
      outer2_62(self._adResponses, merged);
      const findAdRequestResult = self.findAdRequest(merged.ad_request_id);
      if (findAdRequestResult) {
        const _Math = Math;
        outer2_134(pm.data, "view_ad_request_time", Math.max(0, merged.viewer_time - findAdRequestResult.viewer_time));
      }
    });
    pm.on("adplay", (arg0, viewer_time) => {
      self._adHasPlayed = true;
      if (self._wouldBeNewAdPlay) {
        self._wouldBeNewAdPlay = false;
        outer2_134(pm.data, "view_ad_played_count");
      }
      let inPrerollPositionResult = self.inPrerollPosition();
      if (inPrerollPositionResult) {
        inPrerollPositionResult = !pm.data.view_preroll_played;
      }
      if (inPrerollPositionResult) {
        pm.data.view_preroll_played = true;
        if (self._adRequests.length > 0) {
          const _Math = Math;
          pm.data.view_preroll_request_time = Math.max(0, viewer_time.viewer_time - self._adRequests[0].viewer_time);
        }
        if (pm.data.view_start) {
          const _Math2 = Math;
          pm.data.view_startup_preroll_request_time = Math.max(0, viewer_time.viewer_time - pm.data.view_start);
        }
        self._prerollPlayTime = viewer_time.viewer_time;
      }
    });
    pm.on("adplaying", (arg0, viewer_time) => {
      let inPrerollPositionResult = self.inPrerollPosition();
      if (inPrerollPositionResult) {
        inPrerollPositionResult = undefined === pm.data.view_preroll_load_time;
      }
      if (inPrerollPositionResult) {
        inPrerollPositionResult = undefined !== self._prerollPlayTime;
      }
      if (inPrerollPositionResult) {
        pm.data.view_preroll_load_time = viewer_time.viewer_time - self._prerollPlayTime;
        pm.data.view_startup_preroll_load_time = viewer_time.viewer_time - self._prerollPlayTime;
      }
    });
    pm.on("adclicked", (arg0, arg1) => {
      if (!self._wouldBeNewAdPlay) {
        outer2_134(pm.data, "view_ad_clicked_count");
      }
    });
    pm.on("adskipped", (arg0, arg1) => {
      if (!self._wouldBeNewAdPlay) {
        outer2_134(pm.data, "view_ad_skipped_count");
      }
    });
    pm.on("adended", () => {
      self._wouldBeNewAdPlay = true;
    });
    pm.on("aderror", () => {
      self._wouldBeNewAdPlay = true;
    });
  };
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
            [self.pm.data.view_preroll_ad_tag_hostname, self.pm.data.view_preroll_ad_tag_domain] = outer1_121(outer1_38(ad_tag_url.ad_tag_url), 2);
            const tmp3 = outer1_121(outer1_38(ad_tag_url.ad_tag_url), 2);
          }
        }
        if (!self.pm.data.view_preroll_ad_asset_hostname) {
          if (ad_tag_url.ad_asset_url) {
            [self.pm.data.view_preroll_ad_asset_hostname, self.pm.data.view_preroll_ad_asset_domain] = outer1_121(outer1_38(ad_tag_url.ad_asset_url), 2);
            const tmp6 = outer1_121(outer1_38(ad_tag_url.ad_asset_url), 2);
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
})();
let fn5 = function r(one) {
  let closure_0 = one;
  const self = this;
  D(this, fn5);
  l(this, "lastWallClockTime", undefined);
  const fn = function i() {
    self.lastWallClockTime = outer1_25.now();
    one.on("before*", a);
  };
  function a(arg0) {
    const nowResult = outer1_25.now();
    const lastWallClockTime = self.lastWallClockTime;
    self.lastWallClockTime = nowResult;
    if (nowResult - lastWallClockTime > 30000) {
      let obj = { viewer_time: lastWallClockTime };
      one.emit("devicesleep", obj);
      const _Object = Object;
      obj = { viewer_time: lastWallClockTime };
      const merged = Object.assign(one.data, obj);
      one.send("devicesleep");
      obj = { viewer_time: nowResult };
      one.emit("devicewake", obj);
      const _Object2 = Object;
      const obj1 = { viewer_time: nowResult };
      const merged1 = Object.assign(one.data, obj1);
      one.send("devicewake");
    }
  }
  one.one("playbackheartbeat", fn);
  one.on("playbackheartbeatend", () => {
    one.off("before*", a);
    one.one("playbackheartbeat", fn);
  });
};
let closure_66 = G(BResult());
let closure_67 = (() => {
  let fn = function e(arg0) {
    let closure_0 = arg0;
    const fn = function i(arg0, arg1, arg2) {
      let tmp2 = arg1;
      if ("undefined" !== typeof document) {
        if (arguments.length > 1) {
          let obj = { path: "/" };
          const tmp35 = lib(obj, fn.defaults, arg2);
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
            let tmp45 = lib;
            if (lib.write) {
              let tmp48 = lib;
              let tmp49 = tmp2;
              let tmp50 = arg0;
              let writeResult = lib.write(tmp2, arg0);
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
            let tmp52 = arg0;
            let str11 = encodeURIComponent(String(arg0));
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
          obj6 = /^[\{\[]/;
        } else {
          if (!arg0) {
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
              let tmp11 = lib;
              let obj3 = lib;
              if (lib.read) {
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
                let tmp22 = arg0;
                let tmp23 = replaced1;
                if (arg0 === replaced1) {
                  obj = parsed;
                } else {
                  let tmp24 = arg0;
                  if (!arg0) {
                    let tmp25 = obj;
                    let tmp26 = replaced1;
                    let tmp27 = parsed;
                    obj[replaced1] = parsed;
                  }
                  do {
                    let tmp28 = num3;
                    sum = num3 + 1;
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
    fn.remove = (prototype) => {
      fn(prototype, "", lib(arg1, { expires: -1 }));
    };
    fn.withConverter = fn;
    return fn;
  };
  function r() {
    const obj = {};
    for (let num = 0; num < arguments.length; num = num + 1) {
      let tmp = arguments[num];
      let tmp2 = tmp;
      for (const key10008 in tmp) {
        let tmp3 = key10008;
        obj[key10008] = tmp[key10008];
        continue;
      }
    }
    return obj;
  }
  return fn(() => {

  });
})();
const muxData = "muxData";
function tr() {
  const value = store.get(muxData);
  let str = value;
  if (!value) {
    str = "";
  }
  (function Oa(str) {
    const parts = str.split("&");
    return parts.reduce((arg0, str) => {
      const tmp = outer2_121(str.split("="), 2);
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
  })(str);
}
function rr(arg0) {
  const result = store.set(muxData, (function Pa(arg0) {
    const entries = Object.entries(arg0);
    const mapped = entries.map((arg0) => {
      const tmp = outer2_121(arg0, 2);
      const combined = "".concat(tmp[0], "=");
      return combined.concat(tmp[1]);
    });
    return mapped.join("&");
  })(arg0), { expires: 365 });
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
let closure_74 = lr({ a: "env", b: "beacon", c: "custom", d: "ad", e: "event", f: "experiment", i: "internal", m: "mux", n: "response", p: "player", q: "request", r: "retry", s: "session", t: "timestamp", u: "viewer", v: "video", w: "page", x: "view", y: "sub" });
let closure_75 = lr({ ad: "ad", af: "affiliate", ag: "aggregate", ap: "api", al: "application", ao: "audio", ar: "architecture", as: "asset", au: "autoplay", av: "average", bi: "bitrate", bn: "brand", br: "break", bw: "browser", by: "bytes", bz: "business", ca: "cached", cb: "cancel", cc: "codec", cd: "code", cg: "category", ch: "changed", ci: "client", ck: "clicked", cl: "canceled", cm: "cmcd", cn: "config", co: "count", ce: "counter", cp: "complete", cq: "creator", cr: "creative", cs: "captions", ct: "content", cu: "current", cv: "cumulative", cx: "connection", cz: "context", da: "data", dg: "downscaling", dm: "domain", dn: "cdn", do: "downscale", dr: "drm", dp: "dropped", du: "duration", dv: "device", dy: "dynamic", eb: "enabled", ec: "encoding", ed: "edge", en: "end", eg: "engine", em: "embed", er: "error", ep: "experiments", es: "errorcode", et: "errortext", ee: "event", ev: "events", ex: "expires", ez: "exception", fa: "failed", fi: "first", fm: "family", ft: "format", fp: "fps", fq: "frequency", fr: "frame", fs: "fullscreen", ha: "has", hb: "holdback", he: "headers", ho: "host", hn: "hostname", ht: "height", id: "id", ii: "init", in: "instance", ip: "ip", is: "is", ke: "key", la: "language", lb: "labeled", le: "level", li: "live", ld: "loaded", lo: "load", ls: "lists", lt: "latency", ma: "max", md: "media", me: "message", mf: "manifest", mi: "mime", ml: "midroll", mm: "min", mn: "manufacturer", mo: "model", mp: "mode", ms: "ms", mx: "mux", ne: "newest", nm: "name", no: "number", on: "on", or: "origin", os: "os", pa: "paused", pb: "playback", pd: "producer", pe: "percentage", pf: "played", pg: "program", ph: "playhead", pi: "plugin", pl: "preroll", pn: "playing", po: "poster", pp: "pip", pr: "preload", ps: "position", pt: "part", pv: "previous", py: "property", px: "pop", pz: "plan", ra: "rate", rd: "requested", re: "rebuffer", rf: "rendition", rg: "range", rm: "remote", ro: "ratio", rp: "response", rq: "request", rs: "requests", sa: "sample", sd: "skipped", se: "session", sh: "shift", sk: "seek", sm: "stream", so: "source", sq: "sequence", sr: "series", ss: "status", st: "start", su: "startup", sv: "server", sw: "software", sy: "severity", ta: "tag", tc: "tech", te: "text", tg: "target", th: "throughput", ti: "time", tl: "total", to: "to", tt: "title", ty: "type", ug: "upscaling", un: "universal", up: "upscale", ur: "url", us: "user", va: "variant", vd: "viewed", vi: "video", ve: "version", vw: "view", vr: "viewer", wd: "width", wa: "watch", wt: "waiting" });
let closure_76 = G(BResult());
let closure_77 = { maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 10000, maxPayloadKBSize: 500 };
let closure_78 = ["hb", "requestcompleted", "requestfailed", "requestcanceled"];
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
    self = this;
    if (this._postInFlight) {
      flag3 = true;
      self._resendAfterPost = true;
    } else {
      _eventQueue = self._eventQueue;
      num = 0;
      substr = require("module_0");
      maxBeaconSize = substr;
      _eventQueue1 = self._eventQueue;
      self._eventQueue = _eventQueue1.slice(self._options.maxBeaconSize);
      flag = true;
      self._postInFlight = true;
      tmp3 = closure_25;
      _createPayloadResult = self._createPayload(substr);
      now = closure_25.now();
      tmp4 = Mr;
      flag2 = false;
      tmp5 = Mr(self._beaconUrl, _createPayloadResult, false, (arg0, arg1) => {
        if (arg1) {
          tmp._eventQueue = substr.concat(tmp._eventQueue);
          tmp._failureCount = tmp._failureCount + 1;
          outer1_35.info(`Error sending beacon: ${arg1}`);
        } else {
          tmp._failureCount = 0;
        }
        self._roundTripTime = outer1_25.now() - closure_2;
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
    self = this;
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
    closure_0 = global;
    self = this;
    obj = { transmission_timestamp: Math.round(closure_25.now()) };
    defineProperty = obj;
    if (this._roundTripTime) {
      _Math = Math;
      obj.rtt_ms = Math.round(this._roundTripTime);
    }
    fn = function o() {
      obj = { metadata: obj };
      let tmp = found;
      if (!found) {
        tmp = closure_0;
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
      tmp2 = c35;
      tmp3 = getPrototypeOf;
      str = "Payload size is too big (";
      str2 = " kb). Removing unnecessary events.";
      infoResult = c35.info(`Payload size is too big (${getPrototypeOf} kb). Removing unnecessary events.`);
      found = global.filter((arg0) => -1 === outer1_78.indexOf(arg0.e));
      f107809 = found;
      fnResult1 = fn();
      arr = found;
    }
    if (!fn2()) {
      tmp7 = c35;
      tmp8 = getPrototypeOf;
      str3 = "Payload size still too big (";
      str4 = " kb). Cropping fields..";
      infoResult1 = c35.info(`Payload size still too big (${getPrototypeOf} kb). Cropping fields..`);
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
            continue;
          }
          continue;
        }
      });
      fnResult2 = fn();
    }
    return getOwnPropertyDescriptor;
  }
}
let closure_79 = "function" === typeof G(BResult1()).default.exitPictureInPicture ? ((arg0) => arg0.length <= 57344) : ((arg0) => false);
function Mr(_beaconUrl, _createPayloadResult, arg2, arg3) {
  let closure_0 = arg3;
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
    obj = { "Content-Type": "text/plain" };
    obj.headers = obj;
    obj.keepalive = callback14(_createPayloadResult);
    const response = _default.fetch(_beaconUrl, obj);
    response.then((ok) => {
      let tmp2 = "Error";
      if (ok.ok) {
        tmp2 = null;
      }
      return closure_0(null, tmp2);
    }).catch((arg0) => callback(null, arg0));
    const nextPromise = response.then((ok) => {
      let tmp2 = "Error";
      if (ok.ok) {
        tmp2 = null;
      }
      return closure_0(null, tmp2);
    });
  } else if (_default.XMLHttpRequest) {
    let _XMLHttpRequest = mod6.default.XMLHttpRequest;
    const prototype = _XMLHttpRequest.prototype;
    _XMLHttpRequest = new _XMLHttpRequest();
    _XMLHttpRequest.onreadystatechange = () => {
      if (4 === _XMLHttpRequest.readyState) {
        let str;
        if (200 !== _XMLHttpRequest.status) {
          str = "error";
        }
        return closure_0(null, str);
      }
    };
    _XMLHttpRequest.open("POST", _beaconUrl);
    _XMLHttpRequest.setRequestHeader("Content-Type", "text/plain");
    _XMLHttpRequest.send(_createPayloadResult);
  } else {
    arg3();
  }
}
let closure_81 = $;
let closure_82 = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id", "player_instance_id", "player_error_code", "player_error_message", "player_error_context", "player_error_severity", "player_error_business_exception", "view_playing_time_ms_cumulative", "ad_playing_time_ms_cumulative"];
let closure_83 = ["adplay", "adplaying", "adpause", "adfirstquartile", "admidpoint", "adthirdquartile", "adended", "adresponse", "adrequest"];
let closure_84 = ["ad_id", "ad_creative_id", "ad_universal_id"];
let closure_85 = ["viewstart", "error", "ended", "viewend"];
let closure_86 = (() => {
  const fn = function r(mux, envKey) {
    let beaconCollectionDomain;
    let beaconDomain;
    let options;
    const self = this;
    if (arguments.length > 2) {
      outer1_125(self, fn);
      outer1_128(self, "mux", undefined);
      outer1_128(self, "envKey", undefined);
      outer1_128(self, "options", undefined);
      outer1_128(self, "eventQueue", undefined);
      outer1_128(self, "sampleRate", undefined);
      outer1_128(self, "disableCookies", undefined);
      outer1_128(self, "respectDoNotTrack", undefined);
      outer1_128(self, "previousBeaconData", undefined);
      outer1_128(self, "lastEventTime", undefined);
      outer1_128(self, "rateLimited", undefined);
      outer1_128(self, "pageLevelData", undefined);
      outer1_128(self, "viewerData", undefined);
      self.mux = mux;
      self.envKey = envKey;
      self.options = {};
      self.previousBeaconData = null;
      self.lastEventTime = 0;
      self.rateLimited = false;
      let tmp21 = outer1_81;
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
      obj.viewer_connection_type = outer1_73();
      let href;
      if (null !== outer1_66.default) {
        if (undefined !== outer1_66.default) {
          const _location = outer1_66.default.location;
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
        const tmp41 = outer1_69();
        let mux_viewer_id = tmp41.mux_viewer_id;
        if (!mux_viewer_id) {
          mux_viewer_id = outer1_26();
        }
        tmp41.mux_viewer_id = mux_viewer_id;
        let msn = tmp41.msn;
        if (!msn) {
          const _Math = Math;
          msn = Math.random();
        }
        tmp41.msn = msn;
        outer1_70(tmp41);
        obj = {};
        ({ mux_viewer_id: obj2.mux_viewer_id, msn: obj2.mux_sample_number } = tmp41);
      }
      self.viewerData = obj;
    }
  };
  let obj = {
    key: "send",
    value(event, view_id) {
      const self = this;
      if (event) {
        if (null != view_id) {
          if (view_id.view_id) {
            if (self.respectDoNotTrack) {
              if (outer1_123()) {
                return outer1_35.info("Not sending `" + event + "` because Do Not Track is enabled");
              }
            }
            if (view_id) {
              if ("object" === typeof view_id) {
                if (self.disableCookies) {
                  let obj = {};
                } else {
                  const tmp6 = outer1_69();
                  const nowResult = outer1_25.now();
                  if (tmp6.session_start) {
                    tmp6.sst = tmp6.session_start;
                    delete tmp.session_start;
                  }
                  if (tmp6.session_id) {
                    tmp6.sid = tmp6.session_id;
                    delete tmp.session_id;
                  }
                  if (tmp6.session_expires) {
                    tmp6.sex = tmp6.session_expires;
                    delete tmp.session_expires;
                  }
                  if (tmp9) {
                    tmp6.sid = outer1_26();
                    tmp6.sst = nowResult;
                  }
                  tmp6.sex = nowResult + 1500000;
                  outer1_70(tmp6);
                  obj = {};
                  ({ sid: obj.session_id, sst: obj.session_start, sex: obj.session_expires } = tmp6);
                  tmp9 = !tmp6.sex || tmp6.sex < nowResult;
                }
                obj = {};
                outer1_135(obj, self.pageLevelData, view_id, obj, self.viewerData);
                obj = { event, env_key: self.envKey };
                outer1_136(obj, obj);
                if (obj.user_id) {
                  obj.viewer_user_id = obj.user_id;
                  delete tmp2.user_id;
                }
                const mux_sample_number = obj.mux_sample_number;
                let num3 = 0;
                if (null !== mux_sample_number) {
                  num3 = 0;
                  if (undefined !== mux_sample_number) {
                    num3 = mux_sample_number;
                  }
                }
                const tmp22 = outer1_139(self._deduplicateBeaconData(event, obj));
                const utils = self.mux.utils;
                self.lastEventTime = utils.now();
                if (tmp20) {
                  return outer1_35.info("Not sending event due to sample rate restriction", event, obj, tmp22);
                } else {
                  if (!self.envKey) {
                    outer1_35.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL", event, obj, tmp22);
                  }
                  if (!self.rateLimited) {
                    outer1_35.info("Sending event", event, obj, tmp22);
                    const eventQueue = self.eventQueue;
                    self.rateLimited = !eventQueue.queueEvent(event, tmp22);
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
                        eventQueue4.queueEvent(obj.event, outer1_139(obj));
                        return outer1_35.error("Beaconing disabled due to rate limit.");
                      }
                    }
                    if (outer1_85.indexOf(event) >= 0) {
                      const eventQueue2 = self.eventQueue;
                      eventQueue2.flushEvents();
                    }
                  }
                }
                tmp20 = num3 >= self.sampleRate;
              }
            }
            return outer1_35.error("A data object was expected in send() but was not provided");
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
      let closure_0 = arr;
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
                  const tmp = outer2_121(arg0, 2);
                  const first = tmp[0];
                  let previousBeaconData = self.previousBeaconData;
                  if (previousBeaconData) {
                    let eventRequiresKeyResult = tmp3 !== self.previousBeaconData[first];
                    if (!eventRequiresKeyResult) {
                      eventRequiresKeyResult = outer2_82.indexOf(first) > -1;
                    }
                    if (!eventRequiresKeyResult) {
                      eventRequiresKeyResult = self.objectHasChanged(closure_3, first, tmp3, self.previousBeaconData[first]);
                    }
                    if (!eventRequiresKeyResult) {
                      eventRequiresKeyResult = self.eventRequiresKey(closure_0, first);
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
      outer1_135(obj, view_id);
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
        let hasItem = outer1_84.includes(arr);
        if (hasItem) {
          hasItem = outer1_83.includes(arg0);
        }
        tmp = hasItem;
      }
      return tmp;
    }
  };
  N(fn, items);
  return fn;
})();
let fn6 = function r(on) {
  let closure_0 = on;
  D(this, fn6);
  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  let c4 = 0;
  let c5 = 0;
  let c6 = 0;
  let c7 = 0;
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
          let num5 = on.data.view_min_request_throughput;
          const result = request_bytes_loaded / diff1 * 8000;
          if (!num5) {
            num5 = Infinity;
          }
          on.data.view_min_request_throughput = Math.min(num5, result);
          on.data.view_average_request_throughput = closure_2 / closure_3 * 8000;
          on.data.view_request_count = closure_4;
          if (tmp2 > 0) {
            closure_1 = closure_1 + tmp2;
            let num6 = on.data.view_max_request_latency;
            if (!num6) {
              num6 = 0;
            }
            on.data.view_max_request_latency = Math.max(num6, tmp2);
            on.data.view_average_request_latency = closure_1 / closure_5;
          }
        }
      }
    }
  });
  on.on("requestfailed", function g(arg0, arg1) {
    closure_4 = closure_4 + 1;
    closure_6 = closure_6 + 1;
    on.data.view_request_count = closure_4;
    on.data.view_request_failed_count = closure_6;
  });
  on.on("requestcanceled", function k(arg0, arg1) {
    closure_4 = closure_4 + 1;
    closure_7 = closure_7 + 1;
    on.data.view_request_count = closure_4;
    on.data.view_request_canceled_count = closure_7;
  });
};
let fn7 = function r(on) {
  let closure_0 = on;
  const self = this;
  D(this, fn7);
  l(this, "_lastEventTime", undefined);
  on.on("before*", (type, viewer_time) => {
    viewer_time = viewer_time.viewer_time;
    const nowResult = outer1_25.now();
    const _lastEventTime = self._lastEventTime;
    self._lastEventTime = nowResult;
    if (_lastEventTime) {
      if (nowResult - _lastEventTime > 3600000) {
        let _Object = Object;
        const keys = Object.keys(on.data);
        const log = on.mux.log;
        const reduced = keys.reduce((arg0, arr) => {
          let merged = arg0;
          if (0 === arr.indexOf("video_")) {
            const _Object = Object;
            const obj = {};
            outer2_128(obj, arr, outer1_0.data[arr]);
            merged = Object.assign(arg0, obj);
          }
          return merged;
        }, {});
        log.info("Received event after at least an hour inactivity, creating a new view");
        const _Object2 = Object;
        let obj = { viewer_time };
        on._resetView(Object.assign(obj, reduced));
        on.playbackHeartbeat._playheadShouldBeProgressing = on.playbackHeartbeat._playheadShouldBeProgressing;
        let _playheadShouldBeProgressing = on.playbackHeartbeat._playheadShouldBeProgressing;
        if (_playheadShouldBeProgressing) {
          _playheadShouldBeProgressing = "play" !== type.type;
        }
        if (_playheadShouldBeProgressing) {
          _playheadShouldBeProgressing = "adbreakstart" !== type.type;
        }
        if (_playheadShouldBeProgressing) {
          obj = { viewer_time };
          on.emit("play", obj);
          if ("playing" !== type.type) {
            obj = { viewer_time };
            on.emit("playing", obj);
          }
        }
      }
    }
  });
};
let fn8 = function r(on) {
  let closure_0 = on;
  D(this, fn8);
  function t(request_type) {
    if (null != request_type) {
      if (request_type.request_type) {
        if ("media" === request_type.request_type) {
          const request_response_headers = request_type.request_response_headers;
          if (null !== request_response_headers) {
            if (undefined !== request_response_headers) {
              if (request_response_headers["x-cdn"]) {
                let prop = request_type.request_response_headers["x-cdn"];
              }
              if (null != request_type) {
                if (request_type.request_start) {
                  let viewer_time = request_type.request_start;
                }
                if (null != prop) {
                  if (!outer1_140(prop, prop)) {
                    if (viewer_time <= viewer_time) {
                      const obj = { video_cdn: prop };
                      on.emit("cdnchange", obj);
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
  let c2 = null;
  let c3 = null;
  let c4 = null;
  let c5 = 0;
  on.on("viewinit", () => {
    let c2 = null;
    let c3 = null;
    let c4 = null;
    let c5 = 0;
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
      if (outer1_140(video_cdn, video_cdn)) {
        let tmp10;
        if (null != closure_2) {
          tmp10 = closure_2;
        }
        video_cdn.video_previous_cdn = tmp10;
      } else {
        let tmp7;
        if (null != video_cdn) {
          tmp7 = video_cdn;
        }
        video_cdn.video_previous_cdn = tmp7;
        closure_2 = video_cdn;
      }
    }
  });
  on.on("requestcompleted", (arg0, arg1) => {
    t(arg1);
  });
};
const fn9 = function r(on) {
  let closure_0 = on;
  const self = this;
  D(this, fn9);
  l(this, "_emittingAutomaticEvent", false);
  l(this, "_hasInitialized", false);
  on.on("viewstart", () => {
    if (!self._hasInitialized) {
      self._hasInitialized = true;
      self._emittingAutomaticEvent = true;
      on.emit("playbackmodechange", { player_playback_mode: "standard", player_playback_mode_data: "{}" });
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
      on.data.player_playback_mode = player_playback_mode;
    }
  });
};
let closure_91 = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "adfirstquartile", "admidpoint", "adthirdquartile", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled", "renditionchange", "cdnchange", "playbackmodechange"];
const set = new Set(["requestcompleted", "requestfailed", "requestcanceled"]);
let closure_93 = ((arg0) => {
  class t {
    constructor(arg0, arg1, arg2) {
      tmp2 = outer1_125(this, bind);
      callResult = call.call(this);
      call = callResult;
      tmp3 = outer1_124(callResult);
      tmp4 = outer1_128(callResult, "pageLoadEndTime", undefined);
      tmp5 = outer1_124(callResult);
      tmp6 = outer1_128(callResult, "pageLoadInitTime", undefined);
      tmp7 = outer1_124(callResult);
      tmp8 = outer1_128(callResult, "_destroyed", undefined);
      tmp9 = outer1_124(callResult);
      tmp10 = outer1_128(callResult, "_heartBeatTimeout", undefined);
      tmp11 = outer1_124(callResult);
      tmp12 = outer1_128(callResult, "adTracker", undefined);
      tmp13 = outer1_124(callResult);
      tmp14 = outer1_128(callResult, "dashjs", undefined);
      tmp15 = outer1_124(callResult);
      tmp16 = outer1_128(callResult, "data", undefined);
      tmp17 = outer1_124(callResult);
      tmp18 = outer1_128(callResult, "disablePlayheadRebufferTracking", undefined);
      tmp19 = outer1_124(callResult);
      tmp20 = outer1_128(callResult, "disableRebufferTracking", undefined);
      tmp21 = outer1_124(callResult);
      tmp22 = outer1_128(callResult, "errorTracker", undefined);
      tmp23 = outer1_124(callResult);
      tmp24 = outer1_128(callResult, "errorTranslator", undefined);
      tmp25 = outer1_124(callResult);
      tmp26 = outer1_128(callResult, "emitTranslator", undefined);
      tmp27 = outer1_124(callResult);
      tmp28 = outer1_128(callResult, "getAdData", undefined);
      tmp29 = outer1_124(callResult);
      tmp30 = outer1_128(callResult, "getPlayheadTime", undefined);
      tmp31 = outer1_124(callResult);
      tmp32 = outer1_128(callResult, "getStateData", undefined);
      tmp33 = outer1_124(callResult);
      tmp34 = outer1_128(callResult, "stateDataTranslator", undefined);
      tmp35 = outer1_124(callResult);
      tmp36 = outer1_128(callResult, "hlsjs", undefined);
      tmp37 = outer1_124(callResult);
      tmp38 = outer1_128(callResult, "id", undefined);
      tmp39 = outer1_124(callResult);
      tmp40 = outer1_128(callResult, "longResumeTracker", undefined);
      tmp41 = outer1_124(callResult);
      tmp42 = outer1_128(callResult, "minimumRebufferDuration", undefined);
      tmp43 = outer1_124(callResult);
      tmp44 = outer1_128(callResult, "mux", undefined);
      tmp45 = outer1_124(callResult);
      tmp46 = outer1_128(callResult, "playbackEventDispatcher", undefined);
      tmp47 = outer1_124(callResult);
      tmp48 = outer1_128(callResult, "playbackHeartbeat", undefined);
      tmp49 = outer1_124(callResult);
      tmp50 = outer1_128(callResult, "playbackHeartbeatTime", undefined);
      tmp51 = outer1_124(callResult);
      tmp52 = outer1_128(callResult, "playheadTime", undefined);
      tmp53 = outer1_124(callResult);
      tmp54 = outer1_128(callResult, "seekingTracker", undefined);
      tmp55 = outer1_124(callResult);
      tmp56 = outer1_128(callResult, "sustainedRebufferThreshold", undefined);
      tmp57 = outer1_124(callResult);
      tmp58 = outer1_128(callResult, "watchTimeTracker", undefined);
      tmp59 = outer1_124(callResult);
      tmp60 = outer1_128(callResult, "currentFragmentPDT", undefined);
      tmp61 = outer1_124(callResult);
      tmp62 = outer1_128(callResult, "currentFragmentStart", undefined);
      callResult.pageLoadInitTime = outer1_40.navigationStart();
      callResult.pageLoadEndTime = outer1_40.domContentLoadedEventEnd();
      obj = { debug: false, minimumRebufferDuration: 250, sustainedRebufferThreshold: 1000, playbackHeartbeatTime: 25, beaconDomain: "litix.io", sampleRate: 1, disableCookies: false, respectDoNotTrack: false, disableRebufferTracking: false, disablePlayheadRebufferTracking: false };
      obj.errorTranslator = function errorTranslator(arg0) {
        return arg0;
      };
      obj.emitTranslator = function emitTranslator(arg0, merged) {
        const length = arguments.length;
        const array = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        return array;
      };
      obj.stateDataTranslator = function stateDataTranslator(stateData) {
        return stateData;
      };
      callResult.mux = arg0;
      callResult.id = arg1;
      tmp63 = null != arg2 && arg2.beaconDomain;
      if (tmp63) {
        log = callResult.mux.log;
        str = "The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.";
        warnResult = log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.");
      }
      merged = Object.assign(obj, arg2);
      merged.data = merged.data || {};
      if (merged.data.property_key) {
        merged.data.env_key = merged.data.property_key;
        data = merged.data;
        delete tmp.property_key;
      }
      outer1_35.level = merged.debug ? outer1_31 : outer1_33;
      callResult.getPlayheadTime = merged.getPlayheadTime;
      callResult.getStateData = merged.getStateData || (() => ({}));
      callResult.getAdData = merged.getAdData || (() => {

      });
      ({ minimumRebufferDuration: obj.minimumRebufferDuration, sustainedRebufferThreshold: obj.sustainedRebufferThreshold, playbackHeartbeatTime: obj.playbackHeartbeatTime, disableRebufferTracking: obj.disableRebufferTracking } = merged);
      if (callResult.disableRebufferTracking) {
        log2 = callResult.mux.log;
        str2 = "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.";
        warnResult1 = log2.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.");
      }
      ({ disablePlayheadRebufferTracking: obj.disablePlayheadRebufferTracking, errorTranslator: obj.errorTranslator, emitTranslator: obj.emitTranslator, stateDataTranslator: obj.stateDataTranslator } = merged);
      tmp67 = new outer1_86(arg0, merged.data.env_key, merged);
      callResult.playbackEventDispatcher = tmp67;
      obj1 = { player_instance_id: outer1_26(), mux_sample_rate: merged.sampleRate, beacon_domain: tmp68 };
      tmp68 = merged.beaconCollectionDomain || merged.beaconDomain;
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
      tmp69 = outer1_124(callResult);
      bind = fn.bind(callResult);
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
      item = outer1_91.forEach((arg0) => {
        arg0.on(arg0, function(arg0, arg1) {
          const self = this;
          if (0 !== closure_0.indexOf("ad")) {
            self._updateStateData();
          }
          const merged = Object.assign(self.data, arg1);
          self._sanitizeData();
        });
        arg0.on(`after${arg0}`, function() {
          const self = this;
          if (tmp) {
            self.send(closure_0);
          }
        });
      });
      onResult7 = callResult.on("viewend", (arg0, arg1) => {
        const merged = Object.assign(callResult.data, arg1);
      });
      oneResult = callResult.one("playerready", function k(arg0) {
        const self = this;
        if (this.data.player_init_time) {
          self.data.player_startup_time = tmp3 - self.data.player_init_time;
        }
        self.pageLoadInitTime = self.data.page_load_init_time || self.pageLoadInitTime;
        self.pageLoadEndTime = self.data.page_load_end_time || self.pageLoadEndTime;
        if (tmp4) {
          self.mux.PLAYER_TRACKED = true;
          if (tmp5) {
            let num = self.data.player_init_time;
            if (!num) {
              num = Infinity;
            }
            self.data.page_load_time = Math.min(num, self.pageLoadEndTime || Infinity) - self.pageLoadInitTime;
            const tmp7 = self.pageLoadEndTime || Infinity;
          }
          tmp5 = self.data.player_init_time || self.pageLoadEndTime;
        }
        self.send("playerready");
        delete tmp2.player_startup_time;
        delete tmp.page_load_time;
      });
      tmp82 = outer1_124(callResult);
      tmp83 = new outer1_88(callResult);
      callResult.longResumeTracker = tmp83;
      tmp84 = outer1_124(callResult);
      tmp85 = new outer1_52(callResult);
      callResult.errorTracker = tmp85;
      tmp86 = outer1_124(callResult);
      tmp87 = new outer1_65(callResult);
      tmp88 = outer1_124(callResult);
      tmp89 = new outer1_61(callResult);
      callResult.seekingTracker = tmp89;
      tmp90 = outer1_124(callResult);
      tmp91 = new outer1_55(callResult);
      callResult.playheadTime = tmp91;
      tmp92 = outer1_124(callResult);
      tmp93 = new outer1_51(callResult);
      callResult.playbackHeartbeat = tmp93;
      tmp94 = outer1_124(callResult);
      tmp95 = new outer1_60(callResult);
      tmp96 = outer1_124(callResult);
      tmp97 = new outer1_53(callResult);
      callResult.watchTimeTracker = tmp97;
      tmp98 = outer1_124(callResult);
      tmp99 = new outer1_54(callResult);
      addHLSJSResult = outer1_124(callResult);
      addHLSJSResult = new outer1_64(callResult);
      callResult.adTracker = addHLSJSResult;
      addHLSJSResult = outer1_124(callResult);
      addHLSJSResult = new outer1_58(callResult);
      addHLSJSResult = outer1_124(callResult);
      addHLSJSResult = new outer1_57(callResult);
      addHLSJSResult = outer1_124(callResult);
      addHLSJSResult = new outer1_59(callResult);
      addHLSJSResult = outer1_124(callResult);
      addHLSJSResult = new outer1_87(callResult);
      addHLSJSResult = outer1_124(callResult);
      addHLSJSResult = new outer1_89(callResult);
      addHLSJSResult = outer1_124(callResult);
      addHLSJSResult = new outer1_90(callResult);
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
  let closure_1 = t;
  if ("function" !== typeof arg0) {
    class t {
      constructor(arg0, arg1, arg2) {
        tmp2 = outer1_125(this, bind);
        callResult = call.call(this);
        call = callResult;
        tmp3 = outer1_124(callResult);
        tmp4 = outer1_128(callResult, "pageLoadEndTime", undefined);
        tmp5 = outer1_124(callResult);
        tmp6 = outer1_128(callResult, "pageLoadInitTime", undefined);
        tmp7 = outer1_124(callResult);
        tmp8 = outer1_128(callResult, "_destroyed", undefined);
        tmp9 = outer1_124(callResult);
        tmp10 = outer1_128(callResult, "_heartBeatTimeout", undefined);
        tmp11 = outer1_124(callResult);
        tmp12 = outer1_128(callResult, "adTracker", undefined);
        tmp13 = outer1_124(callResult);
        tmp14 = outer1_128(callResult, "dashjs", undefined);
        tmp15 = outer1_124(callResult);
        tmp16 = outer1_128(callResult, "data", undefined);
        tmp17 = outer1_124(callResult);
        tmp18 = outer1_128(callResult, "disablePlayheadRebufferTracking", undefined);
        tmp19 = outer1_124(callResult);
        tmp20 = outer1_128(callResult, "disableRebufferTracking", undefined);
        tmp21 = outer1_124(callResult);
        tmp22 = outer1_128(callResult, "errorTracker", undefined);
        tmp23 = outer1_124(callResult);
        tmp24 = outer1_128(callResult, "errorTranslator", undefined);
        tmp25 = outer1_124(callResult);
        tmp26 = outer1_128(callResult, "emitTranslator", undefined);
        tmp27 = outer1_124(callResult);
        tmp28 = outer1_128(callResult, "getAdData", undefined);
        tmp29 = outer1_124(callResult);
        tmp30 = outer1_128(callResult, "getPlayheadTime", undefined);
        tmp31 = outer1_124(callResult);
        tmp32 = outer1_128(callResult, "getStateData", undefined);
        tmp33 = outer1_124(callResult);
        tmp34 = outer1_128(callResult, "stateDataTranslator", undefined);
        tmp35 = outer1_124(callResult);
        tmp36 = outer1_128(callResult, "hlsjs", undefined);
        tmp37 = outer1_124(callResult);
        tmp38 = outer1_128(callResult, "id", undefined);
        tmp39 = outer1_124(callResult);
        tmp40 = outer1_128(callResult, "longResumeTracker", undefined);
        tmp41 = outer1_124(callResult);
        tmp42 = outer1_128(callResult, "minimumRebufferDuration", undefined);
        tmp43 = outer1_124(callResult);
        tmp44 = outer1_128(callResult, "mux", undefined);
        tmp45 = outer1_124(callResult);
        tmp46 = outer1_128(callResult, "playbackEventDispatcher", undefined);
        tmp47 = outer1_124(callResult);
        tmp48 = outer1_128(callResult, "playbackHeartbeat", undefined);
        tmp49 = outer1_124(callResult);
        tmp50 = outer1_128(callResult, "playbackHeartbeatTime", undefined);
        tmp51 = outer1_124(callResult);
        tmp52 = outer1_128(callResult, "playheadTime", undefined);
        tmp53 = outer1_124(callResult);
        tmp54 = outer1_128(callResult, "seekingTracker", undefined);
        tmp55 = outer1_124(callResult);
        tmp56 = outer1_128(callResult, "sustainedRebufferThreshold", undefined);
        tmp57 = outer1_124(callResult);
        tmp58 = outer1_128(callResult, "watchTimeTracker", undefined);
        tmp59 = outer1_124(callResult);
        tmp60 = outer1_128(callResult, "currentFragmentPDT", undefined);
        tmp61 = outer1_124(callResult);
        tmp62 = outer1_128(callResult, "currentFragmentStart", undefined);
        callResult.pageLoadInitTime = outer1_40.navigationStart();
        callResult.pageLoadEndTime = outer1_40.domContentLoadedEventEnd();
        obj = { debug: false, minimumRebufferDuration: 250, sustainedRebufferThreshold: 1000, playbackHeartbeatTime: 25, beaconDomain: "litix.io", sampleRate: 1, disableCookies: false, respectDoNotTrack: false, disableRebufferTracking: false, disablePlayheadRebufferTracking: false };
        obj.errorTranslator = function errorTranslator(arg0) {
          return arg0;
        };
        obj.emitTranslator = function emitTranslator(arg0, merged) {
          const length = arguments.length;
          const array = new Array(length);
          for (let num = 0; num < length; num = num + 1) {
            array[num] = arguments[num];
          }
          return array;
        };
        obj.stateDataTranslator = function stateDataTranslator(stateData) {
          return stateData;
        };
        callResult.mux = arg0;
        callResult.id = arg1;
        tmp63 = null != arg2 && arg2.beaconDomain;
        if (tmp63) {
          log = callResult.mux.log;
          str = "The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.";
          warnResult = log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.");
        }
        merged = Object.assign(obj, arg2);
        merged.data = merged.data || {};
        if (merged.data.property_key) {
          merged.data.env_key = merged.data.property_key;
          data = merged.data;
          delete tmp.property_key;
        }
        outer1_35.level = merged.debug ? outer1_31 : outer1_33;
        callResult.getPlayheadTime = merged.getPlayheadTime;
        callResult.getStateData = merged.getStateData || (() => ({}));
        callResult.getAdData = merged.getAdData || (() => {

        });
        ({ minimumRebufferDuration: obj.minimumRebufferDuration, sustainedRebufferThreshold: obj.sustainedRebufferThreshold, playbackHeartbeatTime: obj.playbackHeartbeatTime, disableRebufferTracking: obj.disableRebufferTracking } = merged);
        if (callResult.disableRebufferTracking) {
          log2 = callResult.mux.log;
          str2 = "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.";
          warnResult1 = log2.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.");
        }
        ({ disablePlayheadRebufferTracking: obj.disablePlayheadRebufferTracking, errorTranslator: obj.errorTranslator, emitTranslator: obj.emitTranslator, stateDataTranslator: obj.stateDataTranslator } = merged);
        tmp67 = new outer1_86(arg0, merged.data.env_key, merged);
        callResult.playbackEventDispatcher = tmp67;
        obj1 = { player_instance_id: outer1_26(), mux_sample_rate: merged.sampleRate, beacon_domain: tmp68 };
        tmp68 = merged.beaconCollectionDomain || merged.beaconDomain;
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
        tmp69 = outer1_124(callResult);
        bind = fn.bind(callResult);
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
        item = outer1_91.forEach((arg0) => {
          arg0.on(arg0, function(arg0, arg1) {
            const self = this;
            if (0 !== closure_0.indexOf("ad")) {
              self._updateStateData();
            }
            const merged = Object.assign(self.data, arg1);
            self._sanitizeData();
          });
          arg0.on(`after${arg0}`, function() {
            const self = this;
            if (tmp) {
              self.send(closure_0);
            }
          });
        });
        onResult7 = callResult.on("viewend", (arg0, arg1) => {
          const merged = Object.assign(callResult.data, arg1);
        });
        oneResult = callResult.one("playerready", function k(arg0) {
          const self = this;
          if (this.data.player_init_time) {
            self.data.player_startup_time = tmp3 - self.data.player_init_time;
          }
          self.pageLoadInitTime = self.data.page_load_init_time || self.pageLoadInitTime;
          self.pageLoadEndTime = self.data.page_load_end_time || self.pageLoadEndTime;
          if (tmp4) {
            self.mux.PLAYER_TRACKED = true;
            if (tmp5) {
              let num = self.data.player_init_time;
              if (!num) {
                num = Infinity;
              }
              self.data.page_load_time = Math.min(num, self.pageLoadEndTime || Infinity) - self.pageLoadInitTime;
              const tmp7 = self.pageLoadEndTime || Infinity;
            }
            tmp5 = self.data.player_init_time || self.pageLoadEndTime;
          }
          self.send("playerready");
          delete tmp2.player_startup_time;
          delete tmp.page_load_time;
        });
        tmp82 = outer1_124(callResult);
        tmp83 = new outer1_88(callResult);
        callResult.longResumeTracker = tmp83;
        tmp84 = outer1_124(callResult);
        tmp85 = new outer1_52(callResult);
        callResult.errorTracker = tmp85;
        tmp86 = outer1_124(callResult);
        tmp87 = new outer1_65(callResult);
        tmp88 = outer1_124(callResult);
        tmp89 = new outer1_61(callResult);
        callResult.seekingTracker = tmp89;
        tmp90 = outer1_124(callResult);
        tmp91 = new outer1_55(callResult);
        callResult.playheadTime = tmp91;
        tmp92 = outer1_124(callResult);
        tmp93 = new outer1_51(callResult);
        callResult.playbackHeartbeat = tmp93;
        tmp94 = outer1_124(callResult);
        tmp95 = new outer1_60(callResult);
        tmp96 = outer1_124(callResult);
        tmp97 = new outer1_53(callResult);
        callResult.watchTimeTracker = tmp97;
        tmp98 = outer1_124(callResult);
        tmp99 = new outer1_54(callResult);
        addHLSJSResult = outer1_124(callResult);
        addHLSJSResult = new outer1_64(callResult);
        callResult.adTracker = addHLSJSResult;
        addHLSJSResult = outer1_124(callResult);
        addHLSJSResult = new outer1_58(callResult);
        addHLSJSResult = outer1_124(callResult);
        addHLSJSResult = new outer1_57(callResult);
        addHLSJSResult = outer1_124(callResult);
        addHLSJSResult = new outer1_59(callResult);
        addHLSJSResult = outer1_124(callResult);
        addHLSJSResult = new outer1_87(callResult);
        addHLSJSResult = outer1_124(callResult);
        addHLSJSResult = new outer1_89(callResult);
        addHLSJSResult = outer1_124(callResult);
        addHLSJSResult = new outer1_90(callResult);
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
  let obj = { value: t, writable: true, configurable: true };
  t.prototype = Object.create(prototype, { constructor: obj });
  if (arg0) {
    class t {
      constructor(arg0, arg1, arg2) {
        tmp2 = outer1_125(this, bind);
        callResult = call.call(this);
        call = callResult;
        tmp3 = outer1_124(callResult);
        tmp4 = outer1_128(callResult, "pageLoadEndTime", undefined);
        tmp5 = outer1_124(callResult);
        tmp6 = outer1_128(callResult, "pageLoadInitTime", undefined);
        tmp7 = outer1_124(callResult);
        tmp8 = outer1_128(callResult, "_destroyed", undefined);
        tmp9 = outer1_124(callResult);
        tmp10 = outer1_128(callResult, "_heartBeatTimeout", undefined);
        tmp11 = outer1_124(callResult);
        tmp12 = outer1_128(callResult, "adTracker", undefined);
        tmp13 = outer1_124(callResult);
        tmp14 = outer1_128(callResult, "dashjs", undefined);
        tmp15 = outer1_124(callResult);
        tmp16 = outer1_128(callResult, "data", undefined);
        tmp17 = outer1_124(callResult);
        tmp18 = outer1_128(callResult, "disablePlayheadRebufferTracking", undefined);
        tmp19 = outer1_124(callResult);
        tmp20 = outer1_128(callResult, "disableRebufferTracking", undefined);
        tmp21 = outer1_124(callResult);
        tmp22 = outer1_128(callResult, "errorTracker", undefined);
        tmp23 = outer1_124(callResult);
        tmp24 = outer1_128(callResult, "errorTranslator", undefined);
        tmp25 = outer1_124(callResult);
        tmp26 = outer1_128(callResult, "emitTranslator", undefined);
        tmp27 = outer1_124(callResult);
        tmp28 = outer1_128(callResult, "getAdData", undefined);
        tmp29 = outer1_124(callResult);
        tmp30 = outer1_128(callResult, "getPlayheadTime", undefined);
        tmp31 = outer1_124(callResult);
        tmp32 = outer1_128(callResult, "getStateData", undefined);
        tmp33 = outer1_124(callResult);
        tmp34 = outer1_128(callResult, "stateDataTranslator", undefined);
        tmp35 = outer1_124(callResult);
        tmp36 = outer1_128(callResult, "hlsjs", undefined);
        tmp37 = outer1_124(callResult);
        tmp38 = outer1_128(callResult, "id", undefined);
        tmp39 = outer1_124(callResult);
        tmp40 = outer1_128(callResult, "longResumeTracker", undefined);
        tmp41 = outer1_124(callResult);
        tmp42 = outer1_128(callResult, "minimumRebufferDuration", undefined);
        tmp43 = outer1_124(callResult);
        tmp44 = outer1_128(callResult, "mux", undefined);
        tmp45 = outer1_124(callResult);
        tmp46 = outer1_128(callResult, "playbackEventDispatcher", undefined);
        tmp47 = outer1_124(callResult);
        tmp48 = outer1_128(callResult, "playbackHeartbeat", undefined);
        tmp49 = outer1_124(callResult);
        tmp50 = outer1_128(callResult, "playbackHeartbeatTime", undefined);
        tmp51 = outer1_124(callResult);
        tmp52 = outer1_128(callResult, "playheadTime", undefined);
        tmp53 = outer1_124(callResult);
        tmp54 = outer1_128(callResult, "seekingTracker", undefined);
        tmp55 = outer1_124(callResult);
        tmp56 = outer1_128(callResult, "sustainedRebufferThreshold", undefined);
        tmp57 = outer1_124(callResult);
        tmp58 = outer1_128(callResult, "watchTimeTracker", undefined);
        tmp59 = outer1_124(callResult);
        tmp60 = outer1_128(callResult, "currentFragmentPDT", undefined);
        tmp61 = outer1_124(callResult);
        tmp62 = outer1_128(callResult, "currentFragmentStart", undefined);
        callResult.pageLoadInitTime = outer1_40.navigationStart();
        callResult.pageLoadEndTime = outer1_40.domContentLoadedEventEnd();
        obj = { debug: false, minimumRebufferDuration: 250, sustainedRebufferThreshold: 1000, playbackHeartbeatTime: 25, beaconDomain: "litix.io", sampleRate: 1, disableCookies: false, respectDoNotTrack: false, disableRebufferTracking: false, disablePlayheadRebufferTracking: false };
        obj.errorTranslator = function errorTranslator(arg0) {
          return arg0;
        };
        obj.emitTranslator = function emitTranslator(arg0, merged) {
          const length = arguments.length;
          const array = new Array(length);
          for (let num = 0; num < length; num = num + 1) {
            array[num] = arguments[num];
          }
          return array;
        };
        obj.stateDataTranslator = function stateDataTranslator(stateData) {
          return stateData;
        };
        callResult.mux = arg0;
        callResult.id = arg1;
        tmp63 = null != arg2 && arg2.beaconDomain;
        if (tmp63) {
          log = callResult.mux.log;
          str = "The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.";
          warnResult = log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.");
        }
        merged = Object.assign(obj, arg2);
        merged.data = merged.data || {};
        if (merged.data.property_key) {
          merged.data.env_key = merged.data.property_key;
          data = merged.data;
          delete tmp.property_key;
        }
        outer1_35.level = merged.debug ? outer1_31 : outer1_33;
        callResult.getPlayheadTime = merged.getPlayheadTime;
        callResult.getStateData = merged.getStateData || (() => ({}));
        callResult.getAdData = merged.getAdData || (() => {

        });
        ({ minimumRebufferDuration: obj.minimumRebufferDuration, sustainedRebufferThreshold: obj.sustainedRebufferThreshold, playbackHeartbeatTime: obj.playbackHeartbeatTime, disableRebufferTracking: obj.disableRebufferTracking } = merged);
        if (callResult.disableRebufferTracking) {
          log2 = callResult.mux.log;
          str2 = "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.";
          warnResult1 = log2.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.");
        }
        ({ disablePlayheadRebufferTracking: obj.disablePlayheadRebufferTracking, errorTranslator: obj.errorTranslator, emitTranslator: obj.emitTranslator, stateDataTranslator: obj.stateDataTranslator } = merged);
        tmp67 = new outer1_86(arg0, merged.data.env_key, merged);
        callResult.playbackEventDispatcher = tmp67;
        obj1 = { player_instance_id: outer1_26(), mux_sample_rate: merged.sampleRate, beacon_domain: tmp68 };
        tmp68 = merged.beaconCollectionDomain || merged.beaconDomain;
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
        tmp69 = outer1_124(callResult);
        bind = fn.bind(callResult);
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
        item = outer1_91.forEach((arg0) => {
          arg0.on(arg0, function(arg0, arg1) {
            const self = this;
            if (0 !== closure_0.indexOf("ad")) {
              self._updateStateData();
            }
            const merged = Object.assign(self.data, arg1);
            self._sanitizeData();
          });
          arg0.on(`after${arg0}`, function() {
            const self = this;
            if (tmp) {
              self.send(closure_0);
            }
          });
        });
        onResult7 = callResult.on("viewend", (arg0, arg1) => {
          const merged = Object.assign(callResult.data, arg1);
        });
        oneResult = callResult.one("playerready", function k(arg0) {
          const self = this;
          if (this.data.player_init_time) {
            self.data.player_startup_time = tmp3 - self.data.player_init_time;
          }
          self.pageLoadInitTime = self.data.page_load_init_time || self.pageLoadInitTime;
          self.pageLoadEndTime = self.data.page_load_end_time || self.pageLoadEndTime;
          if (tmp4) {
            self.mux.PLAYER_TRACKED = true;
            if (tmp5) {
              let num = self.data.player_init_time;
              if (!num) {
                num = Infinity;
              }
              self.data.page_load_time = Math.min(num, self.pageLoadEndTime || Infinity) - self.pageLoadInitTime;
              const tmp7 = self.pageLoadEndTime || Infinity;
            }
            tmp5 = self.data.player_init_time || self.pageLoadEndTime;
          }
          self.send("playerready");
          delete tmp2.player_startup_time;
          delete tmp.page_load_time;
        });
        tmp82 = outer1_124(callResult);
        tmp83 = new outer1_88(callResult);
        callResult.longResumeTracker = tmp83;
        tmp84 = outer1_124(callResult);
        tmp85 = new outer1_52(callResult);
        callResult.errorTracker = tmp85;
        tmp86 = outer1_124(callResult);
        tmp87 = new outer1_65(callResult);
        tmp88 = outer1_124(callResult);
        tmp89 = new outer1_61(callResult);
        callResult.seekingTracker = tmp89;
        tmp90 = outer1_124(callResult);
        tmp91 = new outer1_55(callResult);
        callResult.playheadTime = tmp91;
        tmp92 = outer1_124(callResult);
        tmp93 = new outer1_51(callResult);
        callResult.playbackHeartbeat = tmp93;
        tmp94 = outer1_124(callResult);
        tmp95 = new outer1_60(callResult);
        tmp96 = outer1_124(callResult);
        tmp97 = new outer1_53(callResult);
        callResult.watchTimeTracker = tmp97;
        tmp98 = outer1_124(callResult);
        tmp99 = new outer1_54(callResult);
        addHLSJSResult = outer1_124(callResult);
        addHLSJSResult = new outer1_64(callResult);
        callResult.adTracker = addHLSJSResult;
        addHLSJSResult = outer1_124(callResult);
        addHLSJSResult = new outer1_58(callResult);
        addHLSJSResult = outer1_124(callResult);
        addHLSJSResult = new outer1_57(callResult);
        addHLSJSResult = outer1_124(callResult);
        addHLSJSResult = new outer1_59(callResult);
        addHLSJSResult = outer1_124(callResult);
        addHLSJSResult = new outer1_87(callResult);
        addHLSJSResult = outer1_124(callResult);
        addHLSJSResult = new outer1_89(callResult);
        addHLSJSResult = outer1_124(callResult);
        addHLSJSResult = new outer1_90(callResult);
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
          break;
        }
        if (length) {
          let tmp5 = outer1_130;
          let tmp6 = outer1_129;
          let tmp7 = ctor;
          let str = "emit";
          let tmp8 = outer1_130(outer1_129(ctor.prototype), "emit", self);
          let call = tmp8.call;
          let items1 = [self];
          let tmp9 = outer1_122;
          let applyResult = call.apply(tmp8, items1.concat(outer1_122(emitTranslatorResult)));
        }
      }
    }
  };
  let items = [obj, , , , , , , , , , , , , , ];
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
        if (undefined === merged.video_source_is_live) {
          if (merged.player_source_duration !== Infinity) {
            if (merged.video_source_duration !== Infinity) {
              if (tmp5) {
                merged.video_source_is_live = false;
              }
              tmp5 = merged.player_source_duration > 0 || merged.video_source_duration > 0;
            }
          }
          merged.video_source_is_live = true;
        }
        if (!merged.video_source_is_live) {
          const items = ["player_program_time", "player_manifest_newest_program_time", "player_live_edge_program_time", "player_program_time", "video_holdback", "video_part_holdback", "video_target_duration", "video_part_target_duration"];
          const item = items.forEach((arg0) => {
            merged[arg0] = undefined;
          });
        }
        merged.video_source_url = merged.video_source_url || merged.player_source_url;
        if (merged.video_source_url) {
          [tmp4.video_source_hostname, tmp4.video_source_domain] = outer1_121(outer1_38(merged.video_source_url), 2);
          const tmp9 = outer1_121(outer1_38(merged.video_source_url), 2);
        }
        delete tmp2.ad_request_id;
        const playbackEventDispatcher = self.playbackEventDispatcher;
        playbackEventDispatcher.send(arg0, merged);
        const data = self.data;
        data.view_sequence_number = data.view_sequence_number + 1;
        const data2 = self.data;
        data2.player_sequence_number = data2.player_sequence_number + 1;
        if (!outer1_92.has(arg0)) {
          self._restartHeartBeat();
        }
        if ("viewend" === arg0) {
          const data3 = self.data;
          delete tmp.view_id;
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
              let tmp7 = outer1_132;
              stateData = outer1_132(stateData, ["video_cdn"]);
              break;
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
      const self = this;
      const items = ["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time", "video_source_bitrate"];
      const item = items.forEach((arg0) => {
        const parsed = parseInt(self.data[arg0], 10);
        let tmp2;
        if (!isNaN(parsed)) {
          tmp2 = parsed;
        }
        self.data[arg0] = tmp2;
      });
      const items1 = ["player_source_url", "video_source_url"];
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
      const self = this;
      const keys = Object.keys(this.data);
      const item = keys.forEach((arr) => {
        if (0 === arr.indexOf("video_")) {
          const data = self.data;
          delete tmp[tmp2];
        }
      });
    }
  };
  items[7] = {
    key: "_resetViewData",
    value() {
      const self = this;
      const keys = Object.keys(this.data);
      const item = keys.forEach((arr) => {
        if (0 === arr.indexOf("view_")) {
          const data = self.data;
          delete tmp[tmp2];
        }
      });
      this.data.view_sequence_number = 1;
    }
  };
  items[8] = {
    key: "_resetErrorData",
    value() {
      delete tmp2.player_error_code;
      delete tmp2.player_error_message;
      delete tmp2.player_error_context;
      delete tmp2.player_error_severity;
      delete tmp.player_error_business_exception;
    }
  };
  items[9] = {
    key: "_initializeViewData",
    value() {
      let self = this;
      self = this;
      const tmp = outer1_26();
      this.data.view_id = tmp;
      let closure_1 = tmp;
      const fn = function o() {
        if (closure_1 === self.data.view_id) {
          outer2_134(self.data, "player_view_count", 1);
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
      const self = this;
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
          (function It(mux, id, hlsjs, arg3, Hls) {
            let closure_0 = mux;
            let closure_1 = id;
            let closure_2 = hlsjs;
            let tmp;
            if (arguments.length > 4) {
              tmp = arguments[4];
            }
            let closure_3 = tmp;
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
            if (outer2_40.exists()) {
              function u(arg0, arg1) {
                return mux.emit(closure_1, arg0, arg1);
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
                obj = {};
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
                ({ bytesLoaded, requestStart, responseStart, responseEnd } = outer3_44(stats));
                outer3_135(obj, outer3_43(sessionData));
                const tmp3 = outer3_44(stats);
                outer3_136(obj, { request_event_type, request_bytes_loaded: bytesLoaded, request_start: requestStart, request_response_start: responseStart, request_response_end: responseEnd, request_type: "manifest", request_hostname: outer3_37(url), request_response_headers: outer3_45(networkDetails), request_rendition_lists: { media: obj, audio: obj, video: {} } });
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
                ({ bytesLoaded, requestStart, responseStart, responseEnd } = outer3_44(details.stats));
                const tmp = outer3_44(details.stats);
                const sum = s(details.fragments[details.fragments.length - 1]) + secondsToMs(tmp2.duration);
                const obj = { request_event_type, request_bytes_loaded: bytesLoaded, request_start: requestStart, request_response_start: responseStart, request_response_end: responseEnd, request_current_level: level, request_type: "manifest", request_hostname: outer3_37(details.url), request_response_headers: outer3_45(networkDetails) };
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
                const tmp = outer3_44(stats.stats);
                u("requestcompleted", { request_event_type, request_bytes_loaded: tmp.bytesLoaded, request_start: tmp.requestStart, request_response_start: tmp.responseStart, request_response_end: tmp.responseEnd, request_type: "manifest", request_hostname: outer3_37(details.url), request_response_headers: outer3_45(networkDetails) });
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
                ({ bytesLoaded, requestStart, responseStart, responseEnd } = outer3_44(stats));
                if (networkDetails) {
                  tmp2 = outer3_45(networkDetails);
                }
                const obj = { request_event_type, request_bytes_loaded: bytesLoaded, request_start: requestStart, request_response_start: responseStart, request_response_end: responseEnd };
                let tmp4;
                if (networkDetails) {
                  tmp4 = outer3_37(networkDetails.responseURL);
                }
                obj.request_hostname = tmp4;
                let tmp6;
                if (tmp2) {
                  tmp6 = outer3_138(tmp2);
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
                  obj.request_video_width = hlsjs.levels[frag.level] || {}.width;
                  obj.request_video_height = hlsjs.levels[frag.level] || {}.height;
                  obj.request_labeled_bitrate = hlsjs.levels[frag.level] || {}.bitrate;
                  const tmp10 = hlsjs.levels[frag.level] || {};
                  const tmp12 = hlsjs.levels[frag.level] || {};
                  const tmp14 = hlsjs.levels[frag.level] || {};
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
                  const tmp = outer3_45(networkDetails);
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
                  let obj = { request_error: details, request_url: str, request_hostname: outer3_37(str) };
                  let tmp17;
                  if (tmp) {
                    tmp17 = outer3_138(tmp);
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
                const obj = { request_event_type, request_url: str, request_type: "media", request_hostname: outer3_37(str) };
                u("requestcanceled", obj);
              };
              hlsjs.on(tmp.Events.FRAG_LOAD_EMERGENCY_ABORTED, fn7);
              const fn8 = function x(arg0, arg1) {
                if (hlsjs.levels[arg1.level]) {
                  if (tmp.attrs) {
                    if (tmp.attrs.BANDWIDTH) {
                      const BANDWIDTH = tmp.attrs.BANDWIDTH;
                      const _parseFloat = parseFloat;
                      const parsed = parseFloat(tmp.attrs["FRAME-RATE"]);
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
              hlsjs._stopMuxMonitor = () => {
                hlsjs.off(tmp.Events.MANIFEST_LOADED, fn);
                hlsjs.off(tmp.Events.LEVEL_LOADED, fn2);
                hlsjs.off(tmp.Events.AUDIO_TRACK_LOADED, fn3);
                hlsjs.off(tmp.Events.FRAG_LOADED, fn4);
                hlsjs.off(tmp.Events.FRAG_CHANGED, fn5);
                hlsjs.off(tmp.Events.ERROR, fn6);
                hlsjs.off(tmp.Events.FRAG_LOAD_EMERGENCY_ABORTED, fn7);
                hlsjs.off(tmp.Events.LEVEL_SWITCHED, fn8);
                hlsjs.off(tmp.Events.DESTROYING, hlsjs._stopMuxMonitor);
                delete tmp._stopMuxMonitor;
              };
              hlsjs.on(tmp.Events.DESTROYING, hlsjs._stopMuxMonitor);
            } else {
              log.warn("performance timing not supported. Not tracking HLS.js.");
            }
          })(mux, id, hlsjs, {}, Hls);
        }
      } else {
        let log = self.mux.log;
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
          outer1_48(self.mux, self.id, dashjs.dashjs);
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
})((() => {
  let fn = function r() {
    outer1_125(this, fn);
    outer1_128(this, "_listeners", undefined);
  };
  let obj = {
    key: "on",
    value(arg0, _eventEmitterGuid, iter) {
      const self = this;
      _eventEmitterGuid = _eventEmitterGuid._eventEmitterGuid;
      if (!_eventEmitterGuid) {
        const sum = outer1_49 + 1;
        outer1_49 = sum;
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
  let items = [obj, , , ];
  obj = {
    key: "off",
    value(arg0, arg1) {
      let closure_0 = arg1;
      let _listeners = this._listeners;
      if (_listeners) {
        _listeners = this._listeners[arg0];
      }
      if (_listeners) {
        const item = _listeners.forEach((_eventEmitterGuid) => {
          if (_eventEmitterGuid._eventEmitterGuid === _eventEmitterGuid._eventEmitterGuid) {
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
      let closure_0 = arg0;
      let closure_1 = _eventEmitterGuid;
      let closure_2 = arg2;
      self = this;
      _eventEmitterGuid = _eventEmitterGuid._eventEmitterGuid;
      if (!_eventEmitterGuid) {
        const sum = outer1_49 + 1;
        outer1_49 = sum;
        _eventEmitterGuid = sum;
      }
      _eventEmitterGuid._eventEmitterGuid = _eventEmitterGuid;
      const fn = function o() {
        self.off(closure_0, fn);
        self = closure_2;
        if (!closure_2) {
          self = this;
        }
        _eventEmitterGuid(...arguments);
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
      let closure_0 = arg0;
      self = this;
      if (this._listeners) {
        if (!obj) {
          obj = {};
        }
        const fn = function f(arr, arg1) {
          let closure_0 = arg1;
          const substr = arr.slice();
          const item = substr.forEach((call) => {
            call.call(outer1_1, { type: closure_0 }, closure_0);
          });
        };
        fn(self._listeners["before" + arg0] || [], obj);
        fn(self._listeners["before*"] || [], obj);
        fn(self._listeners[arg0] || [], obj);
        fn(self._listeners["after" + arg0] || [], obj);
        const tmp = self._listeners["before" + arg0] || [];
        const tmp2 = self._listeners["before*"] || [];
        const tmp3 = self._listeners[arg0] || [];
        const tmp4 = self._listeners["after" + arg0] || [];
      }
    }
  };
  N(fn, items);
  return fn;
})());
let closure_94 = G(BResult1());
let closure_95 = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"];
let closure_96 = { 1: "MEDIA_ERR_ABORTED", 2: "MEDIA_ERR_NETWORK", 3: "MEDIA_ERR_DECODE", 4: "MEDIA_ERR_SRC_NOT_SUPPORTED" };
const GResult1 = G(BResult());
if (tmp12) {
  const _WeakMap = WeakMap;
  const weakMap = new WeakMap();
}
let c99 = "#EXT-X-TARGETDURATION";
let c100 = "#EXT-X-PART-INF";
let c101 = "#EXT-X-SERVER-CONTROL";
let c102 = "#EXTINF";
let c103 = "#EXT-X-PROGRAM-DATE-TIME";
let c104 = "#EXT-X-VERSION";
let c105 = "#EXT-X-SESSION-DATA";
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
      tmp23 = c99;
      if (c99 === first) {
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
        tmp24 = c100;
        if (c100 === first) {
          tmp17 = ct;
          tmp18 = ct(self.manifest, arr);
          if (self.manifest.partInf.partTarget) {
            self.manifest.partTargetDuration = self.manifest.partInf.partTarget;
          }
          setHoldBackResult1 = self.setHoldBack();
        } else {
          tmp25 = c101;
          if (c101 === first) {
            tmp14 = ct;
            tmp15 = ct(self.manifest, arr);
            setHoldBackResult2 = self.setHoldBack();
          } else {
            tmp26 = c102;
            if (c102 === first) {
              if (0 === tmp2) {
                num2 = 0.01;
                self.currentUri.duration = 0.01;
              } else if (tmp2 > 0) {
                self.currentUri.duration = tmp2;
              }
            } else {
              tmp27 = c103;
              if (c103 === first) {
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
                tmp4 = c104;
                if (c104 === first) {
                  tmp6 = ct;
                  tmp7 = ct(self.manifest, arr);
                } else {
                  tmp5 = c105;
                  if (c105 === first) {
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
      let tmp2 = Ai;
      let _Object = Object;
      merged = Object.assign(Ai(parts[num]), merged);
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
  if (str) {
    const searchResult = str.search(",");
    const items = [str.slice(0, searchResult), str.slice(searchResult + 1)];
    const item = items.forEach((str) => {
      const parts = str.replace(/['"]+/g, "").split("=");
      for (let num = 0; num < parts.length; num = num + 1) {
        if ("DATA-ID" === parts[num]) {
          let tmp = obj;
          obj["DATA-ID"] = parts[1 - num];
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
  let closure_0 = arg0;
  let closure_1 = arguments;
  if ("string" === typeof arg0) {
    if (ne.hasOwnProperty(arg0)) {
      const timerId = GResult.default.setTimeout(() => {
        closure_1 = splice.call(closure_1, 1);
        outer1_115[closure_0].apply(null, closure_1);
      }, 0);
      const _default2 = GResult.default;
    } else {
      tmp6.warn(`\`${arg0}\` is an unknown task`);
    }
  } else if ("function" === tmp) {
    const timerId1 = GResult.default.setTimeout(() => {
      callback(outer1_115);
    }, 0);
    const _default = GResult.default;
  } else {
    tmp6.warn(`\`${arg0}\` is invalid.`);
  }
}
let obj3 = {
  loaded: obj1.now(),
  NAME: "mux-embed",
  VERSION: "5.13.0",
  API_VERSION: "2.1",
  PLAYER_TRACKED: false,
  monitor(videoElement, arg1) {
    return (function st(ne, videoElement, arg2) {
      let closure_0 = ne;
      let merged = arg2;
      const tmp2 = outer1_121(outer1_29(videoElement), 3);
      let first = tmp2[0];
      let closure_3 = tmp4;
      let log = ne.log;
      const getComputedStyle = ne.utils.getComputedStyle;
      const secondsToMs = ne.utils.secondsToMs;
      if (first) {
        if ("video" !== tmp5) {
          if ("audio" !== tmp5) {
            return log.error("The element of `" + tmp4 + "` was not a media element.");
          }
        }
        if (first.mux) {
          let mux = first.mux;
          mux.destroy();
          delete tmp.mux;
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
              let _default = outer2_94.default;
              if (_default) {
                let msFullscreenElement = outer2_94.default.fullscreenElement;
                if (!msFullscreenElement) {
                  msFullscreenElement = outer2_94.default.webkitFullscreenElement;
                }
                if (!msFullscreenElement) {
                  msFullscreenElement = outer2_94.default.mozFullScreenElement;
                }
                if (!msFullscreenElement) {
                  msFullscreenElement = outer2_94.default.msFullscreenElement;
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
        let _Object = Object;
        obj = { automaticErrorTracking: true };
        merged = Object.assign(obj, arg2, obj);
        let _Object2 = Object;
        obj = { player_software: "HTML5 Video Element", player_mux_plugin_name: "VideoElementMonitor", player_mux_plugin_version: ne.VERSION };
        merged.data = Object.assign(obj, merged.data);
        mux = first.mux;
        if (!mux) {
          mux = {};
        }
        first.mux = mux;
        first.mux.deleted = false;
        first.mux.emit = (arg0, arg1) => {
          store.emit(closure_3, arg0, arg1);
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
            const removed = outer1_2.removeEventListener(arg0, outer1_2.mux.listeners[arg0], false);
          });
          delete tmp.listeners;
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
          store.emit(closure_3, "destroy");
        };
        first.mux.swapElement = (arg0) => {
          const tmp4 = outer2_121(outer2_29(arg0), 3);
          const first = tmp4[0];
          let text = tmp4[1];
          if (first) {
            if ("video" === tmp7) {
              first.muxId = first.muxId;
              delete tmp2.muxId;
              first.mux = first.mux || {};
              const _Object = Object;
              first.mux.listeners = Object.assign({}, first.mux.listeners);
              const mux = first.mux;
              delete tmp3.listeners;
              const _Object2 = Object;
              const keys = Object.keys(first.mux.listeners);
              const item = keys.forEach((arg0) => {
                const removed = first.removeEventListener(arg0, first.mux.listeners[arg0], false);
                const listener = first.addEventListener(arg0, first.mux.listeners[arg0], false);
              });
              first.mux.swapElement = first.mux.swapElement;
              first.mux.destroy = first.mux.destroy;
              delete tmp.mux;
              let errorResult;
            }
            const log2 = first.log;
            text = `The element of \`${tmp6}`;
            errorResult = log2.error(`${`The element of \`${tmp6}`}\` was not a media element.`);
          } else {
            const log = first.log;
            return log.error("No element was found with the `" + `The element of \`${tmp6}` + "` query selector.");
          }
        };
        first.mux.addHLSJS = (closure_3) => {
          store.addHLSJS(closure_3, closure_3);
        };
        first.mux.addDashJS = (closure_3) => {
          store.addDashJS(closure_3, closure_3);
        };
        first.mux.removeHLSJS = () => {
          store.removeHLSJS(closure_3);
        };
        first.mux.removeDashJS = () => {
          store.removeDashJS(closure_3);
        };
        first.mux.setEmitTranslator = (emitTranslator) => {
          store.setEmitTranslator(closure_3, emitTranslator);
        };
        first.mux.setStateDataTranslator = (stateDataTranslator) => {
          const result = store.setStateDataTranslator(closure_3, stateDataTranslator);
        };
        first.mux.setGetPlayheadTime = (getPlayheadTime) => {
          if (!getPlayheadTime) {
            getPlayheadTime = merged.getPlayheadTime;
          }
          store.setGetPlayheadTime(closure_3, getPlayheadTime);
        };
        ne.init(tmp4, merged);
        ne.emit(tmp4, "playerready");
        if (!first.paused) {
          ne.emit(tmp4, "play");
          if (first.readyState > 2) {
            ne.emit(tmp4, "playing");
          }
        }
        first.mux.listeners = {};
        let item = outer1_95.forEach((arg0) => {
          let closure_0 = arg0;
          let tmp = "error" === arg0;
          if (tmp) {
            tmp = !merged.automaticErrorTracking;
          }
          if (!tmp) {
            first.mux.listeners[arg0] = () => {
              const obj = {};
              if ("error" === closure_0) {
                if (outer1_2.error) {
                  if (1 !== outer1_2.error.code) {
                    obj.player_error_code = outer1_2.error.code;
                    let message = outer3_96[outer1_2.error.code];
                    if (!message) {
                      message = outer1_2.error.message;
                    }
                    obj.player_error_message = message;
                  }
                }
              }
              closure_0.emit(outer1_3, closure_0, obj);
            };
            const listener = first.addEventListener(arg0, first.mux.listeners[arg0], false);
          }
        });
      } else {
        return log.error("No element was found with the `" + tmp4 + "` query selector.");
      }
    })(ne, videoElement, arg1);
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
    tmp6.error(`A video element monitor for \`${videoElement}\` has not been initialized via \`mux.monitor\`.`);
  },
  addHLSJS(closure_3, closure_3) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].addHLSJS(closure_3);
      const obj = dependencyMap[tmp];
    } else {
      tmp6.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  addDashJS(closure_3, closure_3) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].addDashJS(closure_3);
      const obj = dependencyMap[tmp];
    } else {
      tmp6.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  removeHLSJS(closure_3) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].removeHLSJS();
      const obj = dependencyMap[tmp];
    } else {
      tmp6.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  removeDashJS(closure_3) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].removeDashJS();
      const obj = dependencyMap[tmp];
    } else {
      tmp6.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  init(arg0, respectDoNotTrack) {
    if (tmp) {
      tmp6.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
    }
    const tmp4 = J(arg0);
    tmp = ce() && respectDoNotTrack && respectDoNotTrack.respectDoNotTrack;
    closure_114[tmp4] = new closure_93(ne, tmp4, respectDoNotTrack);
  },
  emit(arg0, arg1, arg2) {
    const tmp3 = J(arg0);
    if (dependencyMap[tmp3]) {
      dependencyMap[tmp3].emit(arg1, arg2);
      if ("destroy" === arg1) {
        delete tmp[tmp2];
      }
      const obj = dependencyMap[tmp3];
    } else {
      tmp6.error(`A monitor for \`${tmp3}\` has not been initialized.`);
    }
  },
  updateData(arg0, arg1) {
    const tmp = J(arg0);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].emit("hb", arg1);
      const obj = dependencyMap[tmp];
    } else {
      tmp6.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  setEmitTranslator(closure_3, emitTranslator) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].emitTranslator = emitTranslator;
    } else {
      tmp6.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  setStateDataTranslator(closure_3, stateDataTranslator) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].stateDataTranslator = stateDataTranslator;
    } else {
      tmp6.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  setGetPlayheadTime(closure_3, getPlayheadTime) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].getPlayheadTime = getPlayheadTime;
    } else {
      tmp6.error(`A monitor for \`${tmp}\` has not been initialized.`);
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
  events: { PLAYER_READY: "playerready", VIEW_INIT: "viewinit", VIDEO_CHANGE: "videochange", PLAY: "play", PAUSE: "pause", PLAYING: "playing", TIME_UPDATE: "timeupdate", SEEKING: "seeking", SEEKED: "seeked", REBUFFER_START: "rebufferstart", REBUFFER_END: "rebufferend", ERROR: "error", ENDED: "ended", RENDITION_CHANGE: "renditionchange", ORIENTATION_CHANGE: "orientationchange", PLAYBACK_MODE_CHANGE: "playbackmodechange", AD_REQUEST: "adrequest", AD_RESPONSE: "adresponse", AD_BREAK_START: "adbreakstart", AD_PLAY: "adplay", AD_PLAYING: "adplaying", AD_PAUSE: "adpause", AD_FIRST_QUARTILE: "adfirstquartile", AD_MID_POINT: "admidpoint", AD_THIRD_QUARTILE: "adthirdquartile", AD_ENDED: "adended", AD_BREAK_END: "adbreakend", AD_ERROR: "aderror", REQUEST_COMPLETED: "requestcompleted", REQUEST_FAILED: "requestfailed", REQUEST_CANCELLED: "requestcanceled", HEARTBEAT: "hb", DESTROY: "destroy" },
  WINDOW_HIDDEN: false,
  WINDOW_UNLOADING: false
};
let merged = Object.assign(ne, obj3);
if (tmp18) {
  let listener = GResult.default.addEventListener("pagehide", (persisted) => {
    if (!persisted.persisted) {
      ne.WINDOW_UNLOADING = true;
    }
  }, false);
  let _default = GResult.default;
}

export default pt(defineProperty({}, "__esModule", { value: true }), obj);
