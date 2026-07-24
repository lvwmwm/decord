// Module ID: 5270
// Function ID: 45451
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 5256]

// Module 5270 (_isNativeReflectConstruct)
import _callSuper from "_callSuper";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _callSuper = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _callSuper;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = { code: "function changeEventCalculator_Pnpm_panGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={changeX:current.translationX,changeY:current.translationY};}else{changePayload={changeX:current.translationX-previous.translationX,changeY:current.translationY-previous.translationY};}return{...current,...changePayload};}" };
let closure_7 = (() => {
  function changeEventCalculator(translationX, translationX2) {
    if (undefined === translationX2) {
      let obj = {};
      ({ translationX: obj2.changeX, translationY: obj2.changeY } = translationX);
    } else {
      obj = { changeX: translationX.translationX - translationX2.translationX, changeY: translationX.translationY - translationX2.translationY };
    }
    return Object.assign({}, translationX, obj);
  }
  changeEventCalculator.__closure = {};
  changeEventCalculator.__workletHash = 1947784830943;
  changeEventCalculator.__initData = closure_6;
  return changeEventCalculator;
})();

export const PanGesture = ((ContinousBaseGesture) => {
  class PanGesture {
    constructor() {
      self = this;
      tmp = PanGesture(this, PanGesture);
      obj = outer1_3(PanGesture);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, [], outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.config = {};
      tmp2Result.handlerName = "PanGestureHandler";
      return tmp2Result;
    }
  }
  callback2(PanGesture, ContinousBaseGesture);
  let obj = {
    key: "activeOffsetY",
    value: function activeOffsetY(items, items2) {
      const self = this;
      if (Array.isArray(items)) {
        self.config.activeOffsetYStart = items[0];
        self.config.activeOffsetYEnd = items[1];
      } else if (items < 0) {
        self.config.activeOffsetYStart = items;
      } else {
        self.config.activeOffsetYEnd = items;
      }
      return self;
    }
  };
  let items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "activeOffsetX",
    value: function activeOffsetX(items, simultaneousHandlers) {
      const self = this;
      if (Array.isArray(items)) {
        self.config.activeOffsetXStart = items[0];
        self.config.activeOffsetXEnd = items[1];
      } else if (items < 0) {
        self.config.activeOffsetXStart = items;
      } else {
        self.config.activeOffsetXEnd = items;
      }
      return self;
    }
  };
  items[1] = obj;
  obj = {
    key: "failOffsetY",
    value: function failOffsetY(failOffsetY) {
      const self = this;
      if (Array.isArray(failOffsetY)) {
        self.config.failOffsetYStart = failOffsetY[0];
        self.config.failOffsetYEnd = failOffsetY[1];
      } else if (failOffsetY < 0) {
        self.config.failOffsetYStart = failOffsetY;
      } else {
        self.config.failOffsetYEnd = failOffsetY;
      }
      return self;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "failOffsetX",
    value: function failOffsetX(failOffsetX, items) {
      const self = this;
      if (Array.isArray(failOffsetX)) {
        self.config.failOffsetXStart = failOffsetX[0];
        self.config.failOffsetXEnd = failOffsetX[1];
      } else if (failOffsetX < 0) {
        self.config.failOffsetXStart = failOffsetX;
      } else {
        self.config.failOffsetXEnd = failOffsetX;
      }
      return self;
    }
  };
  items[4] = {
    key: "minPointers",
    value: function minPointers(minPointers) {
      this.config.minPointers = minPointers;
      return this;
    }
  };
  items[5] = {
    key: "maxPointers",
    value: function maxPointers(maxPointers) {
      this.config.maxPointers = maxPointers;
      return this;
    }
  };
  items[6] = {
    key: "minDistance",
    value: function minDistance(minDist) {
      this.config.minDist = minDist;
      return this;
    }
  };
  items[7] = {
    key: "minVelocity",
    value: function minVelocity(minVelocity) {
      this.config.minVelocity = minVelocity;
      return this;
    }
  };
  items[8] = {
    key: "minVelocityX",
    value: function minVelocityX(minVelocityX) {
      this.config.minVelocityX = minVelocityX;
      return this;
    }
  };
  items[9] = {
    key: "minVelocityY",
    value: function minVelocityY(minVelocityY) {
      this.config.minVelocityY = minVelocityY;
      return this;
    }
  };
  items[10] = {
    key: "averageTouches",
    value: function averageTouches(avgTouches) {
      this.config.avgTouches = avgTouches;
      return this;
    }
  };
  items[11] = {
    key: "enableTrackpadTwoFingerGesture",
    value: function enableTrackpadTwoFingerGesture(enableTrackpadTwoFingerGesture) {
      this.config.enableTrackpadTwoFingerGesture = enableTrackpadTwoFingerGesture;
      return this;
    }
  };
  items[12] = {
    key: "activateAfterLongPress",
    value: function activateAfterLongPress(activateAfterLongPress) {
      this.config.activateAfterLongPress = activateAfterLongPress;
      return this;
    }
  };
  items[13] = {
    key: "onChange",
    value: function onChange(arg0) {
      this.handlers.changeEventCalculator = outer1_7;
      const items = [arg0];
      return (function _superPropGet(PanGesture, onChange, arg2, arg3) {
        let _callSuper = arg2;
        let prototype = PanGesture;
        if (1) {
          prototype = PanGesture.prototype;
        }
        const tmpResult = outer2_4(outer2_3(prototype), "onChange", arg2);
        let _defineProperties = tmpResult;
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(_callSuper, arg0);
          }
        }
        return fn;
      })(PanGesture, "onChange", this, 3)(items);
    }
  };
  return callback(PanGesture, items);
})(require("_callSuper").ContinousBaseGesture);
