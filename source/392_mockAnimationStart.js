// Module ID: 392
// Function ID: 5740
// Name: mockAnimationStart
// Dependencies: [347, 367, 368, 354, 358, 345, 380, 377]

// Module 392 (mockAnimationStart)
function mockAnimationStart(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let fn = arg0;
    let callback = arg0;
    if (null != arg0) {
      fn = () => {
        if (callback) {
          const _console = console;
          console.warn("Ignoring recursive animation callback when running mock animations");
        } else {
          callback = true;
          callback(...arguments);
          callback = false;
        }
      };
    }
    callback(fn);
  };
}
let c0 = false;
let closure_1 = {
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
function mockCompositeAnimation(items) {
  let closure_0 = items;
  return Object.assign({}, closure_1, {
    start: mockAnimationStart((arg0) => {
      const item = items.forEach((start) => start.start());
      if (null != arg0) {
        const obj = { finished: true };
        arg0(obj);
      }
    })
  });
}
arg5.default = {
  Value: require("_isNativeReflectConstruct"),
  ValueXY: require("_isNativeReflectConstruct"),
  Color: require("_isNativeReflectConstruct"),
  Interpolation: require("_isNativeReflectConstruct"),
  Node: require("_assertNativeAnimatedModule"),
  decay(arg0, arg1) {
    return closure_1;
  },
  timing(arg0, arg1) {
    let closure_0 = arg1;
    let closure_1 = arg0;
    return Object.assign({}, closure_1, {
      start: mockAnimationStart((arg0) => {
        value.setValue(toValue.toValue);
        if (null != arg0) {
          const obj = { finished: true };
          arg0(obj);
        }
      })
    });
  },
  spring(animation, arg1) {
    let closure_0 = arg1;
    let closure_1 = animation;
    return Object.assign({}, closure_1, {
      start: mockAnimationStart((arg0) => {
        animation.setValue(toValue.toValue);
        if (null != arg0) {
          const obj = { finished: true };
          arg0(obj);
        }
      })
    });
  },
  add: require("_combineCallbacks").add,
  subtract: require("_combineCallbacks").subtract,
  divide: require("_combineCallbacks").divide,
  multiply: require("_combineCallbacks").multiply,
  modulo: require("_combineCallbacks").modulo,
  diffClamp: require("_combineCallbacks").diffClamp,
  delay(arg0) {
    return closure_1;
  },
  sequence(items) {
    return mockCompositeAnimation(items);
  },
  parallel(items, arg1) {
    return mockCompositeAnimation(items);
  },
  stagger(arg0, items) {
    return mockCompositeAnimation(items);
  },
  loop(arg0) {
    if (arguments.length > 1) {
      const iterations = {}.iterations;
      return closure_1;
    }
  },
  event: require("_combineCallbacks").event,
  createAnimatedComponent: require("unstable_createAnimatedComponentWithAllowlist"),
  attachNativeEvent: require("attachNativeEventImpl").attachNativeEventImpl,
  forkEvent: require("_combineCallbacks").forkEvent,
  unforkEvent: require("_combineCallbacks").unforkEvent,
  Event: require("attachNativeEventImpl").AnimatedEvent
};
