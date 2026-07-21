// Module ID: 1364
// Function ID: 16345
// Name: PseudoMap
// Dependencies: []

// Module 1364 (PseudoMap)
class PseudoMap {
  constructor(arg0) {
    self = this;
    if (this instanceof PseudoMap) {
      clearResult = self.clear();
      if (global) {
        tmp7 = PseudoMap;
        if (!(global instanceof PseudoMap)) {
          tmp8 = globalThis;
          _Map = Map;
          str2 = "function";
          if ("function" === typeof Map) {
            _Map2 = Map;
          }
          _Array = Array;
          if (Array.isArray(global)) {
            item = global.forEach(function(arg0) {
              const result = this.set(arg0[0], arg0[1]);
            }, self);
          } else {
            _TypeError2 = TypeError;
            prototype2 = TypeError.prototype;
            tmp9 = new.target;
            str3 = "invalid argument";
            tmp10 = new.target;
            typeError = new TypeError("invalid argument");
            tmp12 = typeError;
            throw typeError;
          }
        }
        item1 = global.forEach(function(arg0, arg1) {
          const result = this.set(arg1, arg0);
        }, self);
      }
      return;
    } else {
      tmp = globalThis;
      _TypeError = TypeError;
      prototype = TypeError.prototype;
      tmp2 = new.target;
      str = "Constructor PseudoMap requires 'new'";
      tmp3 = new.target;
      typeError1 = new TypeError("Constructor PseudoMap requires 'new'");
      tmp5 = typeError1;
      throw typeError1;
    }
  }
  forEach(arg0, arg1) {
    tmp = require;
    self = this;
    hasOwnProperty = global;
    PseudoMap = require;
    if (!require) {
      tmp = self;
    }
    PseudoMap = tmp;
    keys = Object.keys(self._data);
    item = keys.forEach(function(arg0) {
      const self = this;
      if ("size" !== arg0) {
        arg0.call(arg0, self._data[arg0].value, self._data[arg0].key);
      }
    }, self);
    return;
  }
  has(arg0) {
    return find(this._data, global);
  }
  get(arg0) {
    iter = find(this._data, global);
    value = iter;
    if (iter) {
      value = iter.value;
    }
    return value;
  }
  set(arg0, arg1) {
    _data = this._data;
    text = `_${global}`;
    num = 0;
    tmp2 = text;
    tmp3 = text;
    if (!hasOwnProperty.call(_data, `_${global}`)) {
      _data.size = _data.size + 1;
      tmp9 = Entry;
      prototype = Entry.prototype;
      tmp10 = new.target;
      tmp11 = new.target;
      tmp12 = global;
      tmp13 = require;
      tmp14 = tmp3;
      tmp15 = new Entry(global, require, tmp3);
      tmp16 = tmp15;
      _data[tmp3] = tmp15;
    } else {
      tmp4 = same;
      tmp5 = tmp2;
      while (!same(_data[tmp2].key, global)) {
        tmp6 = +num;
        num = tmp6 + 1;
        text1 = `_${global}${tmp6}`;
        tmp8 = hasOwnProperty;
        tmp2 = text1;
        tmp3 = text1;
      }
      _data[tmp2].value = require;
    }
    return;
  }
  delete(arg0) {
    self = this;
    tmp = find(this._data, global);
    if (tmp) {
      _data = self._data;
      _index = tmp._index;
      delete r3[r2];
      _data2 = self._data;
      _data2.size = _data2.size - 1;
    }
    return;
  }
  clear() {
    obj = Object.create(null);
    obj.size = 0;
    definePropertyResult = Object.defineProperty(this, "_data", { value: obj });
    return;
  }
}
function same(key, arg1) {
  let tmp = key === arg1;
  if (!tmp) {
    tmp = key != key && arg1 != arg1;
    const tmp2 = key != key && arg1 != arg1;
  }
  return tmp;
}
function Entry(key, value, _index) {
  this.key = key;
  this.value = value;
  this._index = _index;
}
function find(arg0, arg1) {
  const text = `_${arg1}`;
  let num = 0;
  let tmp2 = text;
  if (hasOwnProperty.call(arg0, `_${arg1}`)) {
    while (!same(arg0[tmp2].key, arg1)) {
      let tmp5 = +num;
      num = tmp5 + 1;
      let text1 = `_${arg1}${tmp5}`;
      let tmp7 = hasOwnProperty;
      tmp2 = text1;
    }
    return arg0[tmp2];
  }
}
Object.defineProperty(PseudoMap.prototype, "size", {
  get() {
    return this._data.size;
  },
  set(arg0) {

  },
  enumerable: true,
  configurable: true
});
const fn = () => {
  const error = new Error("iterators are not implemented in this version");
  throw error;
};
PseudoMap.prototype.entries = fn;
PseudoMap.prototype.keys = fn;
PseudoMap.prototype.values = fn;

export default PseudoMap;
