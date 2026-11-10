// Module ID: 5442
// Function ID: 5443
// Name: Gesture
// Dependencies: [93, 95, 98, 42, 41, 5443, 5444, 5426]

// Module 5442 (Gesture)
import CallbackType from "CallbackType" /* 5443 */;
import _mod5444 from "module_5444" /* 5444 */;
import c2 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const require = globalThis.__r;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class Gesture {
  constructor() {
    _classCallCheck(this, Gesture);
  }
}
const importDefaultResult1Result = _createClass(Gesture);
let closure_6 = 0;
class BaseGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, BaseGesture);
    const obj = _getPrototypeOf(BaseGesture);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.gestureId = -1;
    tmp3Result.handlerTag = -1;
    tmp3Result.handlerName = "";
    tmp3Result.config = {};
    tmp3Result.handlers = { gestureId: -1, handlerTag: -1, isWorklet: [] };
    closure_6 = tmp7 + 1;
    tmp3Result.gestureId = +closure_6;
    tmp3Result.handlers.gestureId = tmp3Result.gestureId;
    return tmp3Result;
  }
}
_inherits(BaseGesture, importDefaultResult1Result);
const entry = {
  key: "addDependency",
  value: function addDependency(blocksHandlers, arg1) {
    let combined;
    const config = this.config;
    if (this.config[blocksHandlers]) {
      const _Array = Array;
      const ArrayResult = Array();
      combined = ArrayResult.concat(tmp, arg1);
    } else {
      combined = [arg1];
    }
    config[blocksHandlers] = combined;
  }
};
let items = [
  entry,
  {
    key: "withRef",
    value: function withRef(ref) {
      this.config.ref = ref;
      return this;
    }
  },
  {
    key: "isWorklet",
    value: function isWorklet(__workletHash) {
      return undefined !== __workletHash.__workletHash;
    }
  },
  {
    key: "onBegin",
    value: function onBegin(onBegin) {
      this.handlers.onBegin = onBegin;
      const isWorklet = this.handlers.isWorklet;
      isWorklet[CallbackType.CallbackType.BEGAN] = this.isWorklet(onBegin);
      return this;
    }
  },
  {
    key: "onStart",
    value: function onStart(onStart) {
      this.handlers.onStart = onStart;
      const isWorklet = this.handlers.isWorklet;
      isWorklet[CallbackType.CallbackType.START] = this.isWorklet(onStart);
      return this;
    }
  },
  {
    key: "onEnd",
    value: function onEnd(onEnd) {
      this.handlers.onEnd = onEnd;
      const isWorklet = this.handlers.isWorklet;
      isWorklet[CallbackType.CallbackType.END] = this.isWorklet(onEnd);
      return this;
    }
  },
  {
    key: "onFinalize",
    value: function onFinalize(onFinalize) {
      this.handlers.onFinalize = onFinalize;
      const isWorklet = this.handlers.isWorklet;
      isWorklet[CallbackType.CallbackType.FINALIZE] = this.isWorklet(onFinalize);
      return this;
    }
  },
  {
    key: "onTouchesDown",
    value: function onTouchesDown(MediaViewerPagerTsx2) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesDown = MediaViewerPagerTsx2;
      const isWorklet = this.handlers.isWorklet;
      isWorklet[CallbackType.CallbackType.TOUCHES_DOWN] = this.isWorklet(MediaViewerPagerTsx2);
      return this;
    }
  },
  {
    key: "onTouchesMove",
    value: function onTouchesMove(QuestDockGestureDetectorTsx2) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesMove = QuestDockGestureDetectorTsx2;
      const isWorklet = this.handlers.isWorklet;
      isWorklet[CallbackType.CallbackType.TOUCHES_MOVE] = this.isWorklet(QuestDockGestureDetectorTsx2);
      return this;
    }
  },
  {
    key: "onTouchesUp",
    value: function onTouchesUp(CameraPreviewTsx1) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesUp = CameraPreviewTsx1;
      const isWorklet = this.handlers.isWorklet;
      isWorklet[CallbackType.CallbackType.TOUCHES_UP] = this.isWorklet(CameraPreviewTsx1);
      return this;
    }
  },
  {
    key: "onTouchesCancelled",
    value: function onTouchesCancelled(VoicePanelControlsTsx5) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesCancelled = VoicePanelControlsTsx5;
      const isWorklet = this.handlers.isWorklet;
      isWorklet[CallbackType.CallbackType.TOUCHES_CANCEL] = this.isWorklet(VoicePanelControlsTsx5);
      return this;
    }
  },
  {
    key: "enabled",
    value: function enabled(enabled) {
      this.config.enabled = enabled;
      return this;
    }
  },
  {
    key: "shouldCancelWhenOutside",
    value: function shouldCancelWhenOutside(shouldCancelWhenOutside) {
      this.config.shouldCancelWhenOutside = shouldCancelWhenOutside;
      return this;
    }
  },
  {
    key: "hitSlop",
    value: function hitSlop(pressRetentionOffset) {
      this.config.hitSlop = pressRetentionOffset;
      return this;
    }
  },
  {
    key: "activeCursor",
    value: function activeCursor(activeCursor) {
      this.config.activeCursor = activeCursor;
      return this;
    }
  },
  {
    key: "mouseButton",
    value: function mouseButton(mouseButton) {
      this.config.mouseButton = mouseButton;
      return this;
    }
  },
  {
    key: "runOnJS",
    value: function runOnJS(runOnJS) {
      this.config.runOnJS = runOnJS;
      return this;
    }
  },
  {
    key: "simultaneousWithExternalGesture",
    value: function simultaneousWithExternalGesture() {
      const self = this;
      const items = [...arguments];
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let addDependencyResult = self.addDependency("simultaneousWith", tmp2);
        }
        continue;
      }
      return self;
    }
  },
  {
    key: "requireExternalGestureToFail",
    value: function requireExternalGestureToFail() {
      const self = this;
      const items = [...arguments];
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let addDependencyResult = self.addDependency("requireToFail", tmp2);
        }
        continue;
      }
      return self;
    }
  },
  {
    key: "blocksExternalGesture",
    value: function blocksExternalGesture() {
      const self = this;
      const items = [...arguments];
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let addDependencyResult = self.addDependency("blocksHandlers", tmp2);
        }
        continue;
      }
      return self;
    }
  },
  {
    key: "withTestId",
    value: function withTestId(testId) {
      this.config.testId = testId;
      return this;
    }
  },
  {
    key: "cancelsTouchesInView",
    value: function cancelsTouchesInView(cancelsTouchesInView) {
      this.config.cancelsTouchesInView = cancelsTouchesInView;
      return this;
    }
  },
  {
    key: "initialize",
    value: function initialize() {
      const self = this;
      const obj = _mod5444;
      this.handlerTag = obj.getNextHandlerTag();
      const obj2 = { handlerTag: this.handlerTag };
      const merged = Object.assign(this.handlers);
      this.handlers = obj2;
      if (this.config.ref) {
        self.config.ref.current = self;
      }
    }
  },
  {
    key: "toGestureArray",
    value: function toGestureArray() {
      const items = [this];
      return items;
    }
  },
  {
    key: "prepare",
    value: function prepare() {

    }
  },
  {
    key: "shouldUseReanimated",
    get() {
      let tmp = true !== this.config.runOnJS;
      if (tmp) {
        const isWorklet = this.handlers.isWorklet;
        tmp = !isWorklet.includes(false);
      }
      if (tmp) {
        const obj = require("tagMessage");
        tmp = !obj.isRemoteDebuggingEnabled();
      }
      return tmp;
    }
  }
];
const importDefaultResult1Result1 = _createClass(BaseGesture, items);
class ContinousBaseGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ContinousBaseGesture);
    const obj = _getPrototypeOf(ContinousBaseGesture);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ContinousBaseGesture, importDefaultResult1Result1);
const entry1 = {
  key: "onUpdate",
  value: function onUpdate(onUpdate) {
    this.handlers.onUpdate = onUpdate;
    const isWorklet = this.handlers.isWorklet;
    isWorklet[CallbackType.CallbackType.UPDATE] = this.isWorklet(onUpdate);
    return this;
  }
};
const items1 = [
  entry1,
  {
    key: "onChange",
    value: function onChange(onChange) {
      this.handlers.onChange = onChange;
      const isWorklet = this.handlers.isWorklet;
      isWorklet[CallbackType.CallbackType.CHANGE] = this.isWorklet(onChange);
      return this;
    }
  },
  {
    key: "manualActivation",
    value: function manualActivation(tmp4Result) {
      this.config.manualActivation = tmp4Result;
      return this;
    }
  }
];
const Gesture_export = importDefaultResult1Result;
const BaseGesture_export = importDefaultResult1Result1;
const ContinousBaseGesture_export = _createClass(ContinousBaseGesture, items1);

export { Gesture_export as Gesture };
export { BaseGesture_export as BaseGesture };
export { ContinousBaseGesture_export as ContinousBaseGesture };
