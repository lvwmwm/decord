// Module ID: 5045
// Function ID: 43009
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0]

// Module 5045 (_isNativeReflectConstruct)
import result from "result";
import closure_1 from "result";
import closure_2 from "result";
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";

function _isNativeReflectConstruct() {
  let result = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return result;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = { code: "function changeEventCalculator_Pnpm_panGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={changeX:current.translationX,changeY:current.translationY};}else{changePayload={changeX:current.translationX-previous.translationX,changeY:current.translationY-previous.translationY};}return{...current,...changePayload};}" };
let closure_7 = () => {
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
}();

export const PanGesture = (ContinousBaseGesture) => {
  class PanGesture {
    constructor() {
      self = this;
      tmp = PanGesture(this, PanGesture);
      obj = closure_3(PanGesture);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.config = {};
      tmp2Result.handlerName = "PanGestureHandler";
      return tmp2Result;
    }
  }
  let result = PanGesture;
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
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "activeOffsetX",
    value: function activeOffsetX(items) {
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
      this.handlers.changeEventCalculator = closure_7;
      const items = [arg0];
      return function _superPropGet(PanGesture, onChange, arg2, arg3) {
        let prototype = PanGesture;
        if (1) {
          prototype = PanGesture.prototype;
        }
        const tmpResult = closure_4(closure_3(prototype), "onChange", arg2);
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(arg2, arg0);
          }
        }
        return fn;
      }(PanGesture, "onChange", this, 3)(items);
    }
  };
  return callback(PanGesture, items);
}(require("result").ContinousBaseGesture);
