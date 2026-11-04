// Module ID: 9987
// Function ID: 9988
// Name: NitroHeaders
// Dependencies: [41, 42]

// Module 9987 (NitroHeaders)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let c3, c6, c7;

function normalizeName(key) {
  return key.toLowerCase();
}
class NitroHeaders {
  constructor(headers) {
    const self = this;
    _classCallCheck(this, NitroHeaders);
    this._map = new Map();
    new Map();
    const tmp = NitroHeaders;
    if (headers) {
      if (headers instanceof tmp) {
        const _map1 = headers._map;
        const item = _map1.forEach((item, index) => {
          const _map = self._map;
          const items = [...item];
          const result = _map.set(index, items);
        });
      } else {
        if (typeof headers === "object") {
          const _Array3 = Array;
          if (!Array.isArray(headers)) {
            if (typeof headers.forEach === "function") {
              if (typeof headers.get === "function") {
                const item1 = headers.forEach((item, index) => {
                  const _map = self._map;
                  const items = [item];
                  const result = _map.set(index.toLowerCase(), items);
                });
              }
            }
          }
        }
        const _Array = Array;
        if (Array.isArray(headers)) {
          const iter = headers[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let arr2 = nextResult;
            let _Array2 = Array;
            if (Array.isArray(nextResult)) {
              if (arr2.length >= 2) {
                let _String2 = String;
                let tmp31 = normalizeName(String(arr2[0]));
                let _String3 = String;
                let tmp32 = tmp31;
                let StringResult = String(arr2[1]);
                let _map4 = self._map;
                let value3 = _map4.get(tmp31);
                let arr5 = value3;
                if (arr5) {
                  let arr = arr5.push(StringResult);
                } else {
                  let _map5 = self._map;
                  let items = [StringResult];
                  let result = _map5.set(tmp32, items);
                }
                continue;
              }
            }
            if (arr2) {
              if (typeof arr2 === "object") {
                if ("key" in arr2) {
                  if ("value" in arr2) {
                    let tmp20 = normalizeName(arr2.key);
                    let value = arr2.value;
                    let _map2 = self._map;
                    let tmp21 = tmp20;
                    let value4 = _map2.get(tmp20);
                    let arr3 = value4;
                    if (arr3) {
                      let arr4 = arr3.push(value);
                    } else {
                      let _map3 = self._map;
                      let items1 = [value];
                      let result1 = _map3.set(tmp21, items1);
                    }
                  }
                }
              }
            }
          }
        } else if (typeof headers === "object") {
          if (null !== headers) {
            let num;
            const _Object = Object;
            const keys = Object.keys(headers);
            for (let num = 0; num < keys.length; num = num + 1) {
              let tmp4 = keys[num];
              let tmp5 = headers[tmp4];
              if (undefined !== tmp5) {
                let _map = self._map;
                set = _map.set;
                let _String = String;
                let tmp8 = normalizeName(tmp4);
                let items2 = [String(tmp5)];
                let result2 = set(tmp8, items2);
              }
            }
          }
        }
      }
    }
  }
}
const entry = {
  key: "append",
  value: function append(str, arg1) {
    const formatted = str.toLowerCase();
    const _map = this._map;
    const value = _map.get(formatted);
    if (value) {
      value.push(arg1);
    } else {
      const _map2 = this._map;
      const items = [arg1];
      const result = _map2.set(formatted, items);
    }
  }
};
let items = [
  entry,
  {
    key: "delete",
    value: function _delete(str) {
      const _map = this._map;
      _map.delete(str.toLowerCase());
    }
  },
  {
    key: "get",
    value: function get(str) {
      const _map = this._map;
      const value = _map.get(str.toLowerCase());
      let joined = null;
      if (value) {
        joined = null;
        if (0 !== value.length) {
          joined = value.join(", ");
        }
      }
      return joined;
    }
  },
  {
    key: "getSetCookie",
    value: function getSetCookie() {
      const _map = this._map;
      let items = _map.get("set-cookie");
      if (items == null) {
        items = [];
      }
      return items;
    }
  },
  {
    key: "has",
    value: function has(str) {
      const _map = this._map;
      return _map.has(str.toLowerCase());
    }
  },
  {
    key: "set",
    value: function set(str, arg1) {
      const _map = this._map;
      const items = [arg1];
      const result = _map.set(str.toLowerCase(), items);
    }
  },
  {
    key: "forEach",
    value: function forEach(call, arg1) {
      const self = this;
      const _map = this._map;
      const arr = Array.from(_map.keys());
      const sorted = arr.sort();
      const iter = sorted[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let _map2 = self._map;
        call = call.call;
        let value = _map2.get(nextResult);
        let joined = value.join(", ");
        let callResult = call(arg1, joined, nextResult, self);
        continue;
      }
    }
  },
  {
    key: "entries",
    value: function entries() {
      function* gen(arg0, value) {
        let closure_0;
        if (c7 === 2) {
          c7 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            let c0;
            c7 = 2;
            let tmp4 = c6;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_3 = tmp;
                let closure_2 = tmp4;
                c0 = undefined;
                _map = closure_1[Symbol.iterator]();
              }
            } else if (1 === tmp4) {
              let c5 = 0;
              _map.return();
              throw closure_1_4;
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              _map.return();
              c7 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              c5 = 0;
            }
            if (_map === undefined) {
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c5 = 1;
              c0 = tmp11;
              let items = [c0, ];
              value = closure_131_0.get(c0);
              items[1] = value.join(", ");
              c6 = 2;
              c7 = 1;
              let obj4 = { value: items, done: false };
              return obj4;
            }
          }
        }
      }
      let _map = this._map;
      const arr = Array.from(_map.keys());
      let closure_1 = arr.sort();
      return gen();
    }
  },
  {
    key: "keys",
    value: function keys() {
      function* gen(arg0, value) {
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            c6 = 2;
            let tmp3 = c3;
            if (0 === c3) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_2 = tmp3;
                value = undefined;
                let closure_1 = value;
                value = value[Symbol.iterator]();
              }
            } else if (1 === tmp3) {
              let c5 = 0;
              value.return();
              throw closure_1_4;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              value.return();
              c6 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              c5 = 0;
            }
            if (value === undefined) {
              c6 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c5 = 1;
              value = tmp12;
              c3 = 2;
              c6 = 1;
              let obj4 = { value, done: false };
              return obj4;
            }
          }
        }
      }
      const _map = this._map;
      const arr = Array.from(_map.keys());
      let closure_0 = arr.sort();
      return gen();
    }
  },
  {
    key: "values",
    value: function values() {
      function* gen(arg0, value) {
        let closure_0;
        if (c7 === 2) {
          c7 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            let c0;
            c7 = 2;
            let tmp4 = c6;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_3 = tmp;
                let closure_2 = tmp4;
                c0 = undefined;
                _map = closure_1[Symbol.iterator]();
              }
            } else if (1 === tmp4) {
              let c5 = 0;
              _map.return();
              throw closure_1_4;
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              _map.return();
              c7 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              c5 = 0;
            }
            if (_map === undefined) {
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c5 = 1;
              c0 = tmp11;
              value = closure_131_0.get(c0);
              c6 = 2;
              c7 = 1;
              let obj4 = { value: value.join(", "), done: false };
              return obj4;
            }
          }
        }
      }
      let _map = this._map;
      const arr = Array.from(_map.keys());
      let closure_1 = arr.sort();
      return gen();
    }
  },

];
const entry1 = {
  key: Symbol.iterator,
  value() {
    return this.entries();
  }
};
items[10] = entry1;
const NitroHeaders_export = _createClassDefault(NitroHeaders, items);

export { NitroHeaders_export as NitroHeaders };
