// Module ID: 5256
// Function ID: 45327
// Name: _callSuper
// Dependencies: [15, 17, 18, 7, 6, 5238, 5221]

// Module 5256 (_callSuper)
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importDefaultResult from "_defineProperties";
import hasProperty from "hasProperty";

const require = arg1;
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
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { UNDEFINED: 0, BEGAN: 1, START: 2, UPDATE: 3, CHANGE: 4, END: 5, FINALIZE: 6, TOUCHES_DOWN: 7, TOUCHES_MOVE: 8, TOUCHES_UP: 9, TOUCHES_CANCELLED: 10 };
class Gesture {
  constructor() {
    tmp = c6(this, Gesture);
    return;
  }
}
const importDefaultResultResult = importDefaultResult(Gesture);
let c8 = 0;
let tmp4 = ((importDefaultResultResult) => {
  class BaseGesture {
    constructor() {
      tmp = outer1_6(this, BaseGesture);
      tmp2 = outer1_9(this, BaseGesture);
      tmp2.gestureId = -1;
      tmp2.handlerTag = -1;
      tmp2.handlerName = "";
      tmp2.config = {};
      obj = { gestureId: -1, handlerTag: -1 };
      obj.isWorklet = [];
      tmp2.handlers = obj;
      tmp3 = +outer1_8;
      outer1_8 = tmp3 + 1;
      tmp2.gestureId = tmp3;
      tmp2.handlers.gestureId = tmp2.gestureId;
      return tmp2;
    }
  }
  callback2(BaseGesture, importDefaultResultResult);
  let obj = {
    key: "addDependency",
    value: function addDependency(arg0, arg1) {
      if (this.config[arg0]) {
        const _Array = Array;
        let combined = Array().concat(tmp, arg1);
        const ArrayResult = Array();
      } else {
        combined = [arg1];
      }
      this.config[arg0] = combined;
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , ];
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
      this.handlers.isWorklet[outer1_7.BEGAN] = this.isWorklet(fn);
      return this;
    }
  };
  items[4] = {
    key: "onStart",
    value: function onStart(onStart) {
      this.handlers.onStart = onStart;
      this.handlers.isWorklet[outer1_7.START] = this.isWorklet(onStart);
      return this;
    }
  };
  items[5] = {
    key: "onEnd",
    value: function onEnd(onEnd) {
      this.handlers.onEnd = onEnd;
      this.handlers.isWorklet[outer1_7.END] = this.isWorklet(onEnd);
      return this;
    }
  };
  items[6] = {
    key: "onFinalize",
    value: function onFinalize(onFinalize) {
      this.handlers.onFinalize = onFinalize;
      this.handlers.isWorklet[outer1_7.FINALIZE] = this.isWorklet(onFinalize);
      return this;
    }
  };
  items[7] = {
    key: "onTouchesDown",
    value: function onTouchesDown(fn, value) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesDown = fn;
      this.handlers.isWorklet[outer1_7.TOUCHES_DOWN] = this.isWorklet(fn);
      return this;
    }
  };
  items[8] = {
    key: "onTouchesMove",
    value: function onTouchesMove(fn2, value) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesMove = fn2;
      this.handlers.isWorklet[outer1_7.TOUCHES_MOVE] = this.isWorklet(fn2);
      return this;
    }
  };
  items[9] = {
    key: "onTouchesUp",
    value: function onTouchesUp(fn, value) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesUp = fn;
      this.handlers.isWorklet[outer1_7.TOUCHES_UP] = this.isWorklet(fn);
      return this;
    }
  };
  items[10] = {
    key: "onTouchesCancelled",
    value: function onTouchesCancelled(fn5, value) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesCancelled = fn5;
      this.handlers.isWorklet[outer1_7.TOUCHES_CANCELLED] = this.isWorklet(fn5);
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
    value: function hitSlop(closure_22, items1) {
      this.config.hitSlop = closure_22;
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
        continue;
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
        continue;
      }
      return self;
    }
  };
  items[19] = {
    key: "blocksExternalGesture",
    value: function blocksExternalGesture(closure_0) {
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
        continue;
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
      let obj = BaseGesture(outer1_1[5]);
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
        tmp = !BaseGesture(outer1_1[6]).isRemoteDebuggingEnabled();
        const obj = BaseGesture(outer1_1[6]);
      }
      return tmp;
    }
  };
  return importDefaultResult(BaseGesture, items);
})(importDefaultResultResult);

export const CALLBACK_TYPE = obj;
export const Gesture = importDefaultResultResult;
export const BaseGesture = tmp4;
export const ContinousBaseGesture = ((arg0) => {
  class ContinousBaseGesture {
    constructor() {
      tmp = outer1_6(this, ContinousBaseGesture);
      return outer1_9(this, ContinousBaseGesture, arguments);
    }
  }
  callback2(ContinousBaseGesture, arg0);
  let obj = {
    key: "onUpdate",
    value: function onUpdate(onUpdate) {
      this.handlers.onUpdate = onUpdate;
      this.handlers.isWorklet[outer1_7.UPDATE] = this.isWorklet(onUpdate);
      return this;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "onChange",
    value: function onChange(onChange) {
      this.handlers.onChange = onChange;
      this.handlers.isWorklet[outer1_7.CHANGE] = this.isWorklet(onChange);
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
})(tmp4);
