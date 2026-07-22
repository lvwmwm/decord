// Module ID: 13026
// Function ID: 99250
// Name: monadic
// Dependencies: []

// Module 13026 (monadic)
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
function assemble(closure_101, iter, bind, queue, bindResult1) {
  return bind.bind(iter, closure_101, queue, bindResult1);
}
function strategyDefault(arg0, cache) {
  cache = cache.cache;
  return assemble(arg0, this, 1 === arg0.length ? monadic : variadic, cache.create(), cache.serializer);
}
arg5.strategies = undefined;
arg5.memoize = function memoize(arg0, cache) {
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
  cache = closure_2;
};
function serializerDefault() {
  return JSON.stringify(arguments);
}
let closure_1 = () => {
  class ObjectWithoutPrototypeCache {
    constructor() {
      this.cache = Object.create(null);
      return;
    }
    get(arg0) {
      return this.cache[arg0];
    }
    set(arg0, arg1) {
      this.cache[arg0] = arg1;
      return;
    }
  }
  return ObjectWithoutPrototypeCache;
}();
let closure_2 = {
  create() {
    return new closure_1();
  }
};
arg5.strategies = {
  variadic: function strategyVariadic(arg0, cache) {
    cache = cache.cache;
    return assemble(arg0, this, variadic, cache.create(), cache.serializer);
  },
  monadic: function strategyMonadic(arg0, cache) {
    cache = cache.cache;
    return assemble(arg0, this, monadic, cache.create(), cache.serializer);
  }
};
