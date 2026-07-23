// Module ID: 13320
// Function ID: 102221
// Name: monadic
// Dependencies: [6, 7]
// Exports: memoize

// Module 13320 (monadic)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

function monadic(call, get) {
  let tmp = null == arg3;
  if (!tmp) {
    tmp = "number" === typeof arg3;
  }
  if (!tmp) {
    tmp = "boolean" === typeof arg3;
  }
  let tmp2 = arg3;
  if (!tmp) {
    tmp2 = arg2(arg3);
  }
  let value = get.get(tmp2);
  if (undefined === value) {
    const self = this;
    const callResult = call.call(this, arg3);
    const result = get.set(tmp2, callResult);
    value = callResult;
  }
  return value;
}
function variadic(apply, get) {
  const callResult = slice.call(arguments, 3);
  const tmp2 = arg2(callResult);
  let value = get.get(tmp2);
  if (undefined === value) {
    const self = this;
    const applyResult = apply.apply(this, callResult);
    const result = get.set(tmp2, applyResult);
    value = applyResult;
  }
  return value;
}
function assemble(c101, iter, bind, queue, bindResult1) {
  return bind.bind(iter, c101, queue, bindResult1);
}
function strategyDefault(arg0, cache) {
  cache = cache.cache;
  return assemble(arg0, this, 1 === arg0.length ? monadic : variadic, cache.create(), cache.serializer);
}
function serializerDefault() {
  return JSON.stringify(arguments);
}
let closure_3 = (() => {
  class ObjectWithoutPrototypeCache {
    constructor() {
      tmp = ObjectWithoutPrototypeCache(this, ObjectWithoutPrototypeCache);
      this.cache = Object.create(null);
      return;
    }
  }
  let obj = {
    key: "get",
    value: function get(arg0) {
      return this.cache[arg0];
    }
  };
  const items = [obj, ];
  obj = {
    key: "set",
    value: function set(arg0, arg1) {
      this.cache[arg0] = arg1;
    }
  };
  items[1] = obj;
  return callback(ObjectWithoutPrototypeCache, items);
})();
let closure_4 = {
  create() {
    return new closure_3();
  }
};

export const memoize = function memoize(arg0, cache) {
  if (cache) {
    if (cache.cache) {
      cache = cache.cache;
    }
    if (cache) {
      if (cache.serializer) {
        let serializer = cache.serializer;
      }
      if (cache) {
        if (cache.strategy) {
          let strategy = cache.strategy;
        }
        const obj = { cache, serializer };
        return strategy(arg0, obj);
      }
      strategy = strategyDefault;
    }
    serializer = serializerDefault;
  }
  cache = closure_4;
};
export const strategies = {
  variadic: function strategyVariadic(arg0, cache) {
    cache = cache.cache;
    return assemble(arg0, this, variadic, cache.create(), cache.serializer);
  },
  monadic: function strategyMonadic(arg0, cache) {
    cache = cache.cache;
    return assemble(arg0, this, monadic, cache.create(), cache.serializer);
  }
};
