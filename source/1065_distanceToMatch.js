// Module ID: 1065
// Function ID: 12126
// Name: distanceToMatch
// Dependencies: [5, 57, 29, 65, 6, 7, 794]

// Module 1065 (distanceToMatch)
import asyncGeneratorStep from "_defineProperties";
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import _toConsumableArray from "_toConsumableArray";
import _classCallCheck from "registerSpanErrorInstrumentation";
import _defineProperties from "_defineProperties";

function distanceToMatch(nodeType) {
  let num = Infinity;
  if (arguments.length > 2) {
    num = Infinity;
    if (undefined !== arguments[2]) {
      num = arguments[2];
    }
  }
  let num2 = 0;
  if (arguments.length > 3) {
    num2 = 0;
    if (undefined !== arguments[3]) {
      num2 = arguments[3];
    }
  }
  let num3 = -1;
  if (nodeType) {
    let num4 = -1;
    if (nodeType.nodeType === nodeType.ELEMENT_NODE) {
      num4 = -1;
      if (num2 <= num) {
        let tmp = num2;
        if (!arg1(nodeType)) {
          tmp = distanceToMatch(nodeType.parentNode, arg1, num, num2 + 1);
        }
        num4 = tmp;
      }
    }
    num3 = num4;
  }
  return num3;
}
function createMatchPredicate(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0) => {
    if (null === arg0) {
      return false;
    } else {
      if (closure_0) {
        if ("string" === typeof closure_0) {
          const _HermesInternal = HermesInternal;
          if (obj.matches("." + closure_0)) {
            return true;
          }
        } else {
          let diff = tmp3 - 1;
          let flag2 = false;
          if (+obj.classList.length) {
            flag2 = true;
            while (!obj2.test(obj.classList[diff])) {
              let tmp5 = +diff;
              diff = tmp5 - 1;
              flag2 = false;
              if (!tmp5) {
                break;
              }
            }
          }
          if (flag2) {
            return true;
          }
          obj2 = closure_0;
        }
      }
      let tmp11 = tmp10;
      if (!!closure_1) {
        tmp11 = !obj.matches(closure_1);
      }
      return !tmp11;
    }
  };
}
function hookSetter(arg0, arg1, arg2, arg3) {
  let tmp = arg2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  if (arguments.length > 4) {
    if (undefined !== arguments[4]) {
      let _window = arguments[4];
    }
    const _Object = _window.Object;
    const ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(arg0, arg1);
    const _Object2 = _window.Object;
    if (!arg3) {
      let obj = {
        set(arg0) {
              let closure_0 = arg0;
              const self = this;
              outer1_28(() => {
                outer1_2.set.call(self, closure_0);
              }, 0);
              let set = closure_3;
              if (closure_3) {
                set = closure_3.set;
              }
              if (set) {
                closure_3.set.call(this, arg0);
                const set2 = closure_3.set;
              }
            }
      };
      tmp = obj;
    }
    _Object2.defineProperty(arg0, arg1, tmp);
    return () => {
      let obj = closure_3;
      if (!closure_3) {
        obj = {};
      }
      return outer1_23(closure_0, closure_1, obj, true);
    };
  }
  _window = window;
}
function patch(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  if (arg1 in arg0) {
    const _objectWithoutProperties = tmp5;
    const tmp7 = arg2(tmp[tmp2]);
    if ("function" === typeof tmp7) {
      const prototype = tmp8.prototype;
      let obj = prototype;
      if (!prototype) {
        obj = {};
      }
      tmp8.prototype = obj;
      const _Object = Object;
      obj = {};
      obj = { enumerable: false, value: tmp5 };
      obj.__rrweb_original__ = obj;
      Object.defineProperties(tmp8, obj);
    }
    arg0[arg1] = tmp7;
    return () => {
      closure_0[closure_1] = closure_2;
    };
  } else {
    return () => {

    };
  }
}
function isBlocked(arg0, arg1, arg2, arg3, arg4) {
  if (arg0) {
    let tmp3 = null;
    if (arg0) {
      if (tmp.nodeType === tmp.ELEMENT_NODE) {
        let parentElement = arg0;
      } else {
        parentElement = tmp.parentElement;
      }
      tmp3 = parentElement;
    }
    while (true) {
      if (tmp3) {
        let tmp6 = createMatchPredicate;
        let tmp7 = arg1;
        let tmp8 = arg2;
        let tmp9 = distanceToMatch;
        let tmp10 = distanceToMatch(tmp3, createMatchPredicate(arg1, arg2));
        let num = 0;
        let tmp11 = tmp10 < 0;
        let tmp12 = !tmp11;
        if (!tmp11) {
          let num2 = -1;
          let num3 = -1;
          if (arg3) {
            let tmp13 = distanceToMatch;
            let tmp14 = createMatchPredicate;
            num3 = distanceToMatch(tmp3, createMatchPredicate(null, arg3));
          }
          let tmp15 = tmp10 > -1 && num3 < 0 || tmp10 < num3;
          tmp12 = tmp15;
        }
        return tmp12;
      } else {
        let flag2 = false;
        return false;
      }
    }
  } else {
    return false;
  }
}
function getImplementation(arg0) {
  if (table[arg0]) {
    return tmp2;
  } else {
    const _window = window;
    const _document = window.document;
    const _window2 = window;
    let obj2 = window[tmp];
    if (_document) {
      if ("function" === typeof obj.createElement) {
        const element = <iframe />;
        element.hidden = true;
        const head = obj.head;
        head.appendChild(element);
        const contentWindow = element.contentWindow;
        let tmp11 = contentWindow;
        if (contentWindow) {
          tmp11 = tmp10[tmp];
        }
        if (tmp11) {
          obj2 = tmp10[tmp];
        }
        const head2 = _document.head;
        head2.removeChild(element);
      }
    }
    const _window3 = window;
    table[arg0] = obj2.bind(window);
  }
}
function onRequestAnimationFrame() {
  return getImplementation("requestAnimationFrame")(...arguments);
}
function setTimeout$1() {
  return getImplementation("setTimeout")(...arguments);
}
function serializeArg(buffer, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  if (buffer instanceof Array) {
    return buffer.map((arg0) => outer1_29(arg0, closure_0, closure_1));
  } else if (null === buffer) {
    return buffer;
  } else {
    const _Float32Array = Float32Array;
    if (!(buffer instanceof Float32Array)) {
      const _Float64Array = Float64Array;
      if (!(buffer instanceof Float64Array)) {
        const _Int32Array = Int32Array;
        if (!(buffer instanceof Int32Array)) {
          const _Uint32Array = Uint32Array;
          if (!(buffer instanceof Uint32Array)) {
            const _Uint8Array = Uint8Array;
            if (!(buffer instanceof Uint8Array)) {
              const _Uint16Array = Uint16Array;
              if (!(buffer instanceof Uint16Array)) {
                const _Int16Array = Int16Array;
                if (!(buffer instanceof Int16Array)) {
                  const _Int8Array = Int8Array;
                  if (!(buffer instanceof Int8Array)) {
                    const _Uint8ClampedArray = Uint8ClampedArray;
                    if (!(buffer instanceof Uint8ClampedArray)) {
                      const _ArrayBuffer = ArrayBuffer;
                      if (buffer instanceof ArrayBuffer) {
                        let obj = { rr_type: buffer.constructor.name };
                        const _Uint8Array2 = Uint8Array;
                        const uint8Array = new Uint8Array(buffer);
                        let str3 = "";
                        let num9 = 0;
                        let str4 = "";
                        if (0 < uint8Array.length) {
                          do {
                            let tmp11 = dependencyMap;
                            let tmp12 = dependencyMap;
                            let sum = num9 + 1;
                            let tmp14 = dependencyMap;
                            let sum1 = num9 + 2;
                            let tmp16 = dependencyMap;
                            str3 = `` + dependencyMap[uint8Array[num9] >> 2] + dependencyMap[(3 & uint8Array[num9]) << 4 | uint8Array[sum] >> 4] + dependencyMap[(15 & uint8Array[sum]) << 2 | uint8Array[sum1] >> 6] + dependencyMap[63 & uint8Array[sum1]];
                            num9 = num9 + 3;
                            str4 = str3;
                          } while (num9 < length);
                        }
                        if (uint8Array.length % 3 === 2) {
                          let text = `${str4.substring(0, str4.length - 1)}=`;
                        } else {
                          text = str4;
                          if (length % 3 === 1) {
                            text = `${str4.substring(0, str4.length - 2)}==`;
                          }
                        }
                        obj.base64 = text;
                        return obj;
                      } else {
                        const _DataView = DataView;
                        if (buffer instanceof DataView) {
                          obj = { rr_type: buffer.constructor.name };
                          const items = [serializeArg(buffer.buffer, arg1, arg2), , ];
                          ({ byteOffset: arr2[1], byteLength: arr2[2] } = buffer);
                          obj.args = items;
                          return obj;
                        } else {
                          if (buffer instanceof globalThis.HTMLImageElement) {
                            const obj1 = { rr_type: buffer.constructor.name, src: buffer.src };
                            return obj1;
                          } else {
                            if (buffer instanceof globalThis.HTMLCanvasElement) {
                              const obj2 = { rr_type: "HTMLImageElement", src: buffer.toDataURL() };
                              return obj2;
                            } else {
                              if (buffer instanceof globalThis.ImageData) {
                                const obj3 = { rr_type: buffer.constructor.name };
                                const items1 = [serializeArg(buffer.data, arg1, arg2), , ];
                                ({ width: arr[1], height: arr[2] } = buffer);
                                obj3.args = items1;
                                let tmp3 = obj3;
                              } else if (callback2(buffer, arg1)) {
                                obj = { rr_type: buffer.constructor.name, index: callback(buffer, arg1, arg2) };
                                tmp3 = obj;
                              } else {
                                tmp3 = buffer;
                              }
                              return tmp3;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj4 = { rr_type: buffer.constructor.name };
    const _Object = Object;
    const items2 = [Object.values(buffer)];
    obj4.args = items2;
    return obj4;
  }
}
function initCanvasContextObserver(HTMLCanvasElement) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  let closure_3 = arg4;
  let items = [];
  items.push(patch(HTMLCanvasElement.HTMLCanvasElement.prototype, "getContext", (arg0) => {
    let closure_0 = arg0;
    return function(arg0) {
      const self = this;
      const length = arguments.length;
      let num = 0;
      if (length > 1) {
        num = length - 1;
      }
      const arr = new Array(num);
      for (let num2 = 1; num2 < length; num2 = num2 + 1) {
        arr[num2 - 1] = arguments[num2];
      }
      if (!outer2_25(self, callback, outer1_1, outer1_2, true)) {
        let str = "webgl";
        if ("experimental-webgl" !== arg0) {
          str = arg0;
        }
        if (!("__context" in self)) {
          self.__context = str;
        }
        if (outer1_3) {
          const items = ["webgl", "webgl2"];
          if (items.includes(str)) {
            if (arr[0]) {
              if ("object" === typeof arr[0]) {
                const first = arr[0];
                if (!first.preserveDrawingBuffer) {
                  first.preserveDrawingBuffer = true;
                }
              }
            }
            const obj = { preserveDrawingBuffer: true };
            arr.splice(0, 1, obj);
          }
        }
      }
      const items1 = [arg0];
      return callback.apply(self, items1.concat(arr));
    };
  }));
}
function patchGLPrototype(arr) {
  let closure_0 = arr;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  let closure_4 = arg4;
  let closure_5 = arg5;
  let closure_6 = arg7;
  let items = [];
  const ownPropertyNames = Object.getOwnPropertyNames(arr);
  function _loop2(item10017) {
    let arr = item10017;
    const items = ["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"];
    if (items.includes(item10017)) {
      return 0;
    } else if ("function" !== typeof arr[tmp]) {
      return 0;
    } else {
      arr = items.push(outer1_24(arr, tmp, (arg0) => {
        let closure_0 = arg0;
        return function() {
          const self = this;
          const length = arguments.length;
          const array = new Array(length);
          for (let num = 0; num < length; num = num + 1) {
            array[num] = arguments[num];
          }
          const applyResult = callback.apply(self, array);
          outer3_15(applyResult, outer2_6, self);
          if ("tagName" in self.canvas) {
            if (!outer3_25(self.canvas, outer2_3, outer2_4, outer2_5, true)) {
              const obj = { type: outer2_1, property: callback, args: outer3_16(array, outer2_6, self) };
              outer2_2(self.canvas, obj);
            }
          }
          return applyResult;
        };
      }));
    }
  }
  for (const item10017 of ownPropertyNames) {
    let tmp2 = _loop2;
    let _loop2Result = _loop2(item10017);
    continue;
  }
  return items;
}
let closure_6 = ["type"];
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function __publicField$1(arg0, arg1, value) {
  let text = arg1;
  if ("symbol" !== typeof arg1) {
    text = `${arg1}`;
  }
  if (text in arg0) {
    const obj = { enumerable: true, configurable: true, writable: true, value };
    let tmp2 = defineProperty(arg0, text, obj);
  } else {
    arg0[text] = value;
    tmp2 = value;
  }
  return tmp2;
}
(() => {
  class Mirror {
    constructor() {
      tmp = outer1_4(this, Mirror);
      map = new Map();
      tmp3 = outer1_8(this, "idNodeMap", map);
      weakMap = new WeakMap();
      tmp5 = outer1_8(this, "nodeMetaMap", weakMap);
      return;
    }
  }
  let obj = {
    key: "getId",
    value: function getId(arg0) {
      const self = this;
      if (arg0) {
        const meta = self.getMeta(arg0);
        let id;
        if (null != meta) {
          id = meta.id;
        }
        let num2 = -1;
        if (null != id) {
          num2 = id;
        }
        return num2;
      } else {
        return -1;
      }
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "getNode",
    value: function getNode(arg0) {
      const idNodeMap = this.idNodeMap;
      return idNodeMap.get(arg0) || null;
    }
  };
  items[1] = obj;
  obj = {
    key: "getIds",
    value: function getIds() {
      const idNodeMap = this.idNodeMap;
      return Array.from(idNodeMap.keys());
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMeta",
    value: function getMeta(arg0) {
      const nodeMetaMap = this.nodeMetaMap;
      return nodeMetaMap.get(arg0) || null;
    }
  };
  items[4] = {
    key: "removeNodeFromMap",
    value: function removeNodeFromMap(childNodes) {
      const self = this;
      const idNodeMap = this.idNodeMap;
      idNodeMap.delete(this.getId(childNodes));
      if (childNodes.childNodes) {
        childNodes = childNodes.childNodes;
        const item = childNodes.forEach((arg0) => self.removeNodeFromMap(arg0));
      }
    }
  };
  items[5] = {
    key: "has",
    value: function has(arg0) {
      const idNodeMap = this.idNodeMap;
      return idNodeMap.has(arg0);
    }
  };
  items[6] = {
    key: "hasNode",
    value: function hasNode(arg0) {
      const nodeMetaMap = this.nodeMetaMap;
      return nodeMetaMap.has(arg0);
    }
  };
  items[7] = {
    key: "add",
    value: function add(arg0, id) {
      const idNodeMap = this.idNodeMap;
      const result = idNodeMap.set(id.id, arg0);
      const nodeMetaMap = this.nodeMetaMap;
      const result1 = nodeMetaMap.set(arg0, id);
    }
  };
  items[8] = {
    key: "replace",
    value: function replace(arg0, arg1) {
      const self = this;
      const node = this.getNode(arg0);
      if (node) {
        const nodeMetaMap = self.nodeMetaMap;
        const value = nodeMetaMap.get(node);
        if (value) {
          const nodeMetaMap2 = self.nodeMetaMap;
          const result = nodeMetaMap2.set(arg1, value);
        }
      }
      const idNodeMap = self.idNodeMap;
      const result1 = idNodeMap.set(arg0, arg1);
    }
  };
  items[9] = {
    key: "reset",
    value: function reset() {
      this.idNodeMap = new Map();
      const weakMap = new WeakMap();
      this.nodeMetaMap = weakMap;
    }
  };
  return _defineProperties(Mirror, items);
})();
let obj = {
  map: {},
  getId() {
    console.error("Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.");
    return -1;
  },
  getNode() {
    console.error("Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.");
    return null;
  },
  removeNodeFromMap() {
    console.error("Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.");
  },
  has() {
    console.error("Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.");
    return false;
  },
  reset() {
    console.error("Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.");
  }
};
let _Reflect = "undefined" !== typeof window;
if (_Reflect) {
  let _window = window;
  _Reflect = window.Proxy;
}
if (_Reflect) {
  let _window2 = window;
  _Reflect = window.Reflect;
}
if (_Reflect) {
  const _Proxy = Proxy;
  obj = {
    get(arg0, arg1, arg2) {
        if ("map" === arg1) {
          const _console = console;
          console.error("Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.");
        }
        return Reflect.get(arg0, arg1, arg2);
      }
  };
  const proxy = new Proxy(obj, obj);
}
let str = Date.now();
str = str.toString();
let closure_9 = {};
let closure_11 = { "2D": 0, [0]: "2D", WebGL: 1, [1]: "WebGL", WebGL2: 2, [2]: "WebGL2" };
function callbackWrapper(arg0) {
  let closure_0 = arg0;
  return closure_10 ? (function rrwebWrapped() {
    return callback(...arguments);
  }) : arg0;
}
let c13 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
if ("undefined" === typeof Uint8Array) {
  let items = [];
} else {
  let _Uint8Array = Uint8Array;
  let uint8Array = new Uint8Array(256);
}
