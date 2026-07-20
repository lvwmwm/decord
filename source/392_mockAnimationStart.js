// Module ID: 392
// Function ID: 5740
// Name: mockAnimationStart
// Dependencies: []

// Module 392 (mockAnimationStart)
function mockAnimationStart(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let fn = arg0;
    if (null != arg0) {
      fn = () => {
        if (callback) {
          const _console = console;
          console.warn("Ignoring recursive animation callback when running mock animations");
        } else {
          let callback = true;
          callback(...arguments);
          callback = false;
        }
      };
    }
    arg0(fn);
  };
}
let closure_0 = false;
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
      const item = arg0.forEach((start) => start.start());
      if (null != arg0) {
        const obj = { finished: true };
        arg0(obj);
      }
    })
  });
}
arg5.default = {
  Value: arg2(arg6[0]),
  ValueXY: arg2(arg6[1]),
  Color: arg2(arg6[2]),
  Interpolation: arg2(arg6[3]),
  Node: arg2(arg6[4]),
  decay(arg0, arg1) {
    return closure_1;
  },
  timing(arg0, arg1) {
    let closure_0 = arg1;
    let closure_1 = arg0;
    return Object.assign({}, closure_1, {
      start: mockAnimationStart((arg0) => {
        arg0.setValue(arg1.toValue);
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
        arg0.setValue(arg1.toValue);
        if (null != arg0) {
          const obj = { finished: true };
          arg0(obj);
        }
      })
    });
  },
  add: arg2(arg6[5]).add,
  subtract: arg2(arg6[5]).subtract,
  divide: arg2(arg6[5]).divide,
  multiply: arg2(arg6[5]).multiply,
  modulo: arg2(arg6[5]).modulo,
  diffClamp: arg2(arg6[5]).diffClamp,
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
  event: arg2(arg6[5]).event,
  createAnimatedComponent: arg2(arg6[6]),
  attachNativeEvent: arg1(arg6[7]).attachNativeEventImpl,
  forkEvent: arg2(arg6[5]).forkEvent,
  unforkEvent: arg2(arg6[5]).unforkEvent,
  Event: arg1(arg6[7]).AnimatedEvent
};
