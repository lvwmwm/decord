// Module ID: 5033
// Function ID: 42931
// Name: _callSuper
// Dependencies: [0, 0, 0, 4294967295, 0, 0, 0]

// Module 5033 (_callSuper)
import __exportStarResult1 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_6 from "__exportStarResult1";

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return __exportStarResult1(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const importDefaultResult = importDefault(dependencyMap[3]);
const obj = {};
class Gesture {
  constructor() {
    tmp = closure_6(this, Gesture);
    return;
  }
}
const importDefaultResultResult = importDefaultResult(Gesture);
let closure_8 = 0;
const tmp4 = (importDefaultResultResult) => {
  class BaseGesture {
    constructor() {
      tmp = closure_6(this, BaseGesture);
      tmp2 = closure_9(this, BaseGesture);
      tmp2.gestureId = -1;
      tmp2.handlerTag = -1;
      tmp2.handlerName = "";
      tmp2.config = {};
      obj = { <string:4217458322>: false, <string:1634775121>: false };
      obj.isWorklet = [];
      tmp2.handlers = obj;
      tmp3 = +closure_8;
      closure_8 = tmp3 + 1;
      tmp2.gestureId = tmp3;
      tmp2.handlers.gestureId = tmp2.gestureId;
      return tmp2;
    }
  }
  const arg1 = BaseGesture;
  callback2(BaseGesture, importDefaultResultResult);
  let obj = {
    key: "addDependency",
    value: function addDependency(arg0, arg1) {
      const tmp = this.config[arg0];
      if (tmp) {
        const _Array = Array;
        let combined = Array().concat(tmp, arg1);
        const ArrayResult = Array();
      } else {
        combined = [arg1];
      }
      this.config[arg0] = combined;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "withRef",
    value: function withRef(ref) {
      this.config.ref = ref;
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "isWorklet",
    value: function isWorklet(__workletHash) {
      return undefined !== __workletHash.__workletHash;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "onBegin",
    value: function onBegin(fn) {
      this.handlers.onBegin = fn;
      this.handlers.isWorklet[constants.BEGAN] = this.isWorklet(fn);
      return this;
    }
  };
  items[4] = {
    key: "onStart",
    value: function onStart(onStart) {
      this.handlers.onStart = onStart;
      this.handlers.isWorklet[constants.START] = this.isWorklet(onStart);
      return this;
    }
  };
  items[5] = {
    key: "onEnd",
    value: function onEnd(onEnd) {
      this.handlers.onEnd = onEnd;
      this.handlers.isWorklet[constants.END] = this.isWorklet(onEnd);
      return this;
    }
  };
  items[6] = {
    key: "onFinalize",
    value: function onFinalize(onFinalize) {
      this.handlers.onFinalize = onFinalize;
      this.handlers.isWorklet[constants.FINALIZE] = this.isWorklet(onFinalize);
      return this;
    }
  };
  items[7] = {
    key: "onTouchesDown",
    value: function onTouchesDown(fn, value) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesDown = fn;
      this.handlers.isWorklet[constants.TOUCHES_DOWN] = this.isWorklet(fn);
      return this;
    }
  };
  items[8] = {
    key: "onTouchesMove",
    value: function onTouchesMove(fn2, value) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesMove = fn2;
      this.handlers.isWorklet[constants.TOUCHES_MOVE] = this.isWorklet(fn2);
      return this;
    }
  };
  items[9] = {
    key: "onTouchesUp",
    value: function onTouchesUp(fn, value) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesUp = fn;
      this.handlers.isWorklet[constants.TOUCHES_UP] = this.isWorklet(fn);
      return this;
    }
  };
  items[10] = {
    key: "onTouchesCancelled",
    value: function onTouchesCancelled(fn5, value) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesCancelled = fn5;
      this.handlers.isWorklet[constants.TOUCHES_CANCELLED] = this.isWorklet(fn5);
      return this;
    }
  };
  items[11] = {
    key: "enabled",
    value: function enabled(enabled) {
      this.config.enabled = enabled;
      return this;
    }
  };
  items[12] = {
    key: "shouldCancelWhenOutside",
    value: function shouldCancelWhenOutside(shouldCancelWhenOutside) {
      this.config.shouldCancelWhenOutside = shouldCancelWhenOutside;
      return this;
    }
  };
  items[13] = {
    key: "hitSlop",
    value: function hitSlop(addInsetsResult, items1) {
      this.config.hitSlop = addInsetsResult;
      return this;
    }
  };
  items[14] = {
    key: "activeCursor",
    value: function activeCursor(activeCursor) {
      this.config.activeCursor = activeCursor;
      return this;
    }
  };
  items[15] = {
    key: "mouseButton",
    value: function mouseButton(mouseButton) {
      this.config.mouseButton = mouseButton;
      return this;
    }
  };
  items[16] = {
    key: "runOnJS",
    value: function runOnJS(runOnJS) {
      this.config.runOnJS = runOnJS;
      return this;
    }
  };
  items[17] = {
    key: "simultaneousWithExternalGesture",
    value: function simultaneousWithExternalGesture(gesture, gesture2) {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const iter = array[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let tmp4 = nextResult;
          let addDependencyResult = self.addDependency("simultaneousWith", tmp3);
        }
        // continue
      }
      return self;
    }
  };
  items[18] = {
    key: "requireExternalGestureToFail",
    value: function requireExternalGestureToFail(waitFor, flingDownRef) {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const iter = array[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let tmp4 = nextResult;
          let addDependencyResult = self.addDependency("requireToFail", tmp3);
        }
        // continue
      }
      return self;
    }
  };
  items[19] = {
    key: "blocksExternalGesture",
    value: function blocksExternalGesture(NativeResult) {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const iter = array[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let tmp4 = nextResult;
          let addDependencyResult = self.addDependency("blocksHandlers", tmp3);
        }
        // continue
      }
      return self;
    }
  };
  items[20] = {
    key: "withTestId",
    value: function withTestId(testId) {
      this.config.testId = testId;
      return this;
    }
  };
  items[21] = {
    key: "cancelsTouchesInView",
    value: function cancelsTouchesInView(cancelsTouchesInView) {
      this.config.cancelsTouchesInView = cancelsTouchesInView;
      return this;
    }
  };
  items[22] = {
    key: "initialize",
    value: function initialize() {
      const self = this;
      let obj = BaseGesture(closure_1[5]);
      this.handlerTag = obj.getNextHandlerTag();
      obj = { handlerTag: this.handlerTag };
      this.handlers = Object.assign({}, this.handlers, obj);
      if (this.config.ref) {
        self.config.ref.current = self;
      }
    }
  };
  items[23] = {
    key: "toGestureArray",
    value: function toGestureArray() {
      const items = [this];
      return items;
    }
  };
  items[24] = {
    key: "prepare",
    value: function prepare() {

    }
  };
  items[25] = {
    key: "shouldUseReanimated",
    get() {
      let tmp = true !== this.config.runOnJS;
      if (tmp) {
        const isWorklet = this.handlers.isWorklet;
        tmp = !isWorklet.includes(false);
      }
      if (tmp) {
        tmp = !BaseGesture(closure_1[6]).isRemoteDebuggingEnabled();
        const obj = BaseGesture(closure_1[6]);
      }
      return tmp;
    }
  };
  return importDefaultResult(BaseGesture, items);
}(importDefaultResultResult);

export const CALLBACK_TYPE = obj;
export const Gesture = importDefaultResultResult;
export const BaseGesture = tmp4;
export const ContinousBaseGesture = (arg0) => {
  class ContinousBaseGesture {
    constructor() {
      tmp = closure_6(this, ContinousBaseGesture);
      return closure_9(this, ContinousBaseGesture, arguments);
    }
  }
  const arg1 = ContinousBaseGesture;
  callback2(ContinousBaseGesture, arg0);
  let obj = {
    key: "onUpdate",
    value: function onUpdate(onUpdate) {
      this.handlers.onUpdate = onUpdate;
      this.handlers.isWorklet[constants.UPDATE] = this.isWorklet(onUpdate);
      return this;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "onChange",
    value: function onChange(onChange) {
      this.handlers.onChange = onChange;
      this.handlers.isWorklet[constants.CHANGE] = this.isWorklet(onChange);
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "manualActivation",
    value: function manualActivation(manualActivation) {
      this.config.manualActivation = manualActivation;
      return this;
    }
  };
  items[2] = obj;
  return importDefaultResult(ContinousBaseGesture, items);
}(tmp4);
