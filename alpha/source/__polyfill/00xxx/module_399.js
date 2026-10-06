// Module ID: 399
// Function ID: 400
// Dependencies: [356, 373, 374, 363, 367, 354, 387, 384]

// Module 399
const require = globalThis.__r;

function decay(arg0, arg1) {
  return obj;
}
function timing(arg0, arg1) {
  let closure_0 = arg1;
  let closure_1 = arg0;
  obj = {
    start: (arg0) => {
      let fn = arg0;
      let closure_0 = arg0;
      const tmp = f81412;
      if (null != arg0) {
        fn = () => {
          const items = [...arguments];
          const tmp2 = c0;
          if (tmp2) {
            const _console = console;
            console.warn("Ignoring recursive animation callback when running mock animations");
          } else {
            c0 = true;
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              HermesBuiltin.apply(closure_0, items1, undefined);
              c0 = false;
            } catch (tmp10) {
              c0 = false;
              throw tmp10;
            }
          }
        };
      }
      tmp(fn);
    }
  };
  const merged = Object.assign(obj);
  const f81413 = (fn) => {
    value.setValue(toValue.toValue);
    if (fn != null) {
      fn({ finished: true });
    }
  };
  return obj;
}
function spring(animation, arg1) {
  let closure_0 = arg1;
  let closure_1 = animation;
  obj = {
    start: (arg0) => {
      let fn = arg0;
      let closure_0 = arg0;
      const tmp = f81412;
      if (null != arg0) {
        fn = () => {
          const items = [...arguments];
          const tmp2 = c0;
          if (tmp2) {
            const _console = console;
            console.warn("Ignoring recursive animation callback when running mock animations");
          } else {
            c0 = true;
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              HermesBuiltin.apply(closure_0, items1, undefined);
              c0 = false;
            } catch (tmp10) {
              c0 = false;
              throw tmp10;
            }
          }
        };
      }
      tmp(fn);
    }
  };
  const merged = Object.assign(obj);
  const f81414 = (fn) => {
    value.setValue(toValue.toValue);
    if (fn != null) {
      fn({ finished: true });
    }
  };
  return obj;
}
function delay(arg0) {
  return obj;
}
function sequence(arg0) {
  if (typeof mockCompositeAnimation === "function") {
    let closure_0 = arg0;
    obj = {
      start: (arg0) => {
          let fn = arg0;
          let closure_0 = arg0;
          const tmp = f81412;
          if (null != arg0) {
            fn = () => {
              const items = [...arguments];
              const tmp2 = c0;
              if (tmp2) {
                const _console = console;
                console.warn("Ignoring recursive animation callback when running mock animations");
              } else {
                c0 = true;
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items1, items, 0);
                  HermesBuiltin.apply(closure_0, items1, undefined);
                  c0 = false;
                } catch (tmp10) {
                  c0 = false;
                  throw tmp10;
                }
              }
            };
          }
          tmp(fn);
        }
    };
    const merged = Object.assign(obj);
    const f81412 = (fn) => {
      const item = closure_0.forEach((start) => start.start());
      if (fn != null) {
        fn({ finished: true });
      }
    };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function parallel(items, arg1) {
  if (typeof mockCompositeAnimation === "function") {
    let closure_0 = items;
    obj = {
      start: (arg0) => {
          let fn = arg0;
          let closure_0 = arg0;
          const tmp = f81412;
          if (null != arg0) {
            fn = () => {
              const items = [...arguments];
              const tmp2 = c0;
              if (tmp2) {
                const _console = console;
                console.warn("Ignoring recursive animation callback when running mock animations");
              } else {
                c0 = true;
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items1, items, 0);
                  HermesBuiltin.apply(closure_0, items1, undefined);
                  c0 = false;
                } catch (tmp10) {
                  c0 = false;
                  throw tmp10;
                }
              }
            };
          }
          tmp(fn);
        }
    };
    const merged = Object.assign(obj);
    const f81412 = (fn) => {
      const item = closure_0.forEach((start) => start.start());
      if (fn != null) {
        fn({ finished: true });
      }
    };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function stagger(arg0, arg1) {
  if (typeof mockCompositeAnimation === "function") {
    let tmp = arg1;
    let closure_0 = arg1;
    obj = {
      start: (arg0) => {
          let fn = arg0;
          let closure_0 = arg0;
          const tmp = f81412;
          if (null != arg0) {
            fn = () => {
              const items = [...arguments];
              const tmp2 = c0;
              if (tmp2) {
                const _console = console;
                console.warn("Ignoring recursive animation callback when running mock animations");
              } else {
                c0 = true;
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items1, items, 0);
                  HermesBuiltin.apply(closure_0, items1, undefined);
                  c0 = false;
                } catch (tmp10) {
                  c0 = false;
                  throw tmp10;
                }
              }
            };
          }
          tmp(fn);
        }
    };
    let tmp2 = obj;
    const merged = Object.assign(obj);
    const f81412 = (fn) => {
      const item = closure_0.forEach((start) => start.start());
      if (fn != null) {
        fn({ finished: true });
      }
    };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function loop(arg0) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  return obj;
}
let c0 = false;
let obj = {
  start() {

  },
  stop() {

  },
  reset() {

  },
  _startNativeLoop() {

  },
  _isUsingNativeDriver() {
    return false;
  }
};
function mockCompositeAnimation(arg0) {

}
({ Value: require("flushValue"), ValueXY: require("module_373"), Color: require("module_374"), Interpolation: require("module_363"), Node: require("module_367"), decay, timing, spring, add: require("module_354").add, subtract: require("module_354").subtract, divide: require("module_354").divide, multiply: require("module_354").multiply, modulo: require("module_354").modulo, diffClamp: require("module_354").diffClamp, delay, sequence, parallel, stagger, loop, event: require("module_354").event, createAnimatedComponent: require("createAnimatedComponent"), attachNativeEvent: require("attachNativeEventImpl").attachNativeEventImpl, forkEvent: require("module_354").forkEvent, unforkEvent: require("module_354").unforkEvent, Event: require("attachNativeEventImpl").AnimatedEvent });

export default { Value: require("flushValue"), ValueXY: require("module_373"), Color: require("module_374"), Interpolation: require("module_363"), Node: require("module_367"), decay, timing, spring, add: require("module_354").add, subtract: require("module_354").subtract, divide: require("module_354").divide, multiply: require("module_354").multiply, modulo: require("module_354").modulo, diffClamp: require("module_354").diffClamp, delay, sequence, parallel, stagger, loop, event: require("module_354").event, createAnimatedComponent: require("createAnimatedComponent"), attachNativeEvent: require("attachNativeEventImpl").attachNativeEventImpl, forkEvent: require("module_354").forkEvent, unforkEvent: require("module_354").unforkEvent, Event: require("attachNativeEventImpl").AnimatedEvent };
