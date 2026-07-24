// Module ID: 12095
// Function ID: 94174
// Name: registry
// Dependencies: [6, 7]
// Exports: registry

// Module 12095 (registry)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

function registry() {
  return new closure_2();
}
let tmp2 = (() => {
  export function $ZodRegistry(arg0, $ZodRegistry) {
    $ZodRegistry(this, $ZodRegistry);
    const weakMap = new WeakMap();
    this._map = weakMap;
    this._idmap = new Map();
  }
  let obj = {
    key: "add",
    value: function add(arg0) {
      const self = this;
      let tmp;
      if (arguments.length > 1) {
        tmp = arguments[1];
      }
      const _map = self._map;
      const result = _map.set(arg0, tmp);
      let tmp3 = tmp;
      if (tmp) {
        tmp3 = "object" === typeof tmp;
      }
      if (tmp3) {
        tmp3 = "id" in tmp;
      }
      if (tmp3) {
        const _idmap = self._idmap;
        const result1 = _idmap.set(tmp.id, arg0);
      }
      return self;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "clear",
    value: function clear() {
      const weakMap = new WeakMap();
      this._map = weakMap;
      this._idmap = new Map();
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "remove",
    value: function remove(arg0) {
      const self = this;
      const _map = this._map;
      const value = _map.get(arg0);
      let tmp2 = value;
      if (value) {
        tmp2 = "object" === typeof value;
      }
      if (tmp2) {
        tmp2 = "id" in value;
      }
      if (tmp2) {
        const _idmap = self._idmap;
        _idmap.delete(value.id);
      }
      const _map2 = self._map;
      _map2.delete(arg0);
      return self;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "get",
    value: function get(_zod) {
      const self = this;
      const parent = _zod._zod.parent;
      if (parent) {
        let obj = self.get(parent);
        if (null == obj) {
          obj = {};
        }
        const merged = Object.assign({}, obj);
        delete tmp.id;
        const _Object = Object;
        const _map2 = self._map;
        const merged1 = Object.assign({}, merged, _map2.get(_zod));
        const _Object2 = Object;
        let tmp6;
        if (Object.keys(merged1).length) {
          tmp6 = merged1;
        }
        return tmp6;
      } else {
        const _map = self._map;
        return _map.get(_zod);
      }
    }
  };
  items[4] = {
    key: "has",
    value: function has(arg0) {
      const _map = this._map;
      return _map.has(arg0);
    }
  };
  return _defineProperties($ZodRegistry, items);
})();
let closure_2 = tmp2;
if (null == globalThis.__zod_globalRegistry) {
  tmp3.__zod_globalRegistry = registry();
}

export { registry };
export const $output = Symbol("ZodOutput");
export const $input = Symbol("ZodInput");
export const globalRegistry = globalThis.__zod_globalRegistry;
