// Module ID: 5278
// Function ID: 45547
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 65, 5256]

// Module 5278 (_callSuper)
import _callSuper from "_callSuper";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _toConsumableArray from "_toConsumableArray";

const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
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
function extendRelation(arg0, arg1) {
  if (undefined === arg0) {
    let combined = callback4(arg1);
  } else {
    const items = [];
    combined = items.concat(callback4(arg0), callback4(arg1));
    const tmp2 = callback4(arg0);
  }
  return combined;
}
let tmp2 = ((Gesture) => {
  class ComposedGesture {
    constructor() {
      tmp = outer1_2(this, ComposedGesture);
      tmp2 = outer1_8(this, ComposedGesture);
      tmp2.gestures = [];
      tmp2.simultaneousGestures = [];
      tmp2.requireGesturesToFail = [];
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      tmp2.gestures = array;
      return tmp2;
    }
  }
  callback3(ComposedGesture, Gesture);
  let obj = {
    key: "prepareSingleGesture",
    value: function prepareSingleGesture(item10005, simultaneousGestures, requireGesturesToFail) {
      if (item10005 instanceof ComposedGesture(outer1_1[6]).BaseGesture) {
        const _Object = Object;
        const merged = Object.assign({}, item10005.config);
        merged.simultaneousWith = outer1_10(merged.simultaneousWith, simultaneousGestures);
        merged.requireToFail = outer1_10(merged.requireToFail, requireGesturesToFail);
        item10005.config = merged;
      } else if (item10005 instanceof ComposedGesture) {
        item10005.simultaneousGestures = simultaneousGestures;
        item10005.requireGesturesToFail = requireGesturesToFail;
        item10005.prepare();
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "prepare",
    value: function prepare() {
      const self = this;
      for (const item10005 of tmp) {
        let prepareSingleGestureResult = self.prepareSingleGesture(item10005, self.simultaneousGestures, self.requireGesturesToFail);
        continue;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "initialize",
    value: function initialize() {
      for (const item10005 of tmp) {
        let initializeResult = item10005.initialize();
        continue;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "toGestureArray",
    value: function toGestureArray() {
      const gestures = this.gestures;
      return gestures.flatMap((toGestureArray) => toGestureArray.toGestureArray());
    }
  };
  return callback(ComposedGesture, items);
})(require("_callSuper").Gesture);

export const ComposedGesture = tmp2;
export const SimultaneousGesture = ((arg0) => {
  class SimultaneousGesture {
    constructor() {
      tmp = outer1_2(this, SimultaneousGesture);
      return outer1_8(this, SimultaneousGesture, arguments);
    }
  }
  callback3(SimultaneousGesture, arg0);
  const items = [
    {
      key: "prepare",
      value: function prepare() {
        let length;
        let self = this;
        self = this;
        let num = 0;
        if (0 < this.gestures.length) {
          do {
            let prepareSingleGestureResult = self.prepareSingleGesture(self.gestures[num], tmp[num], self.requireGesturesToFail);
            num = num + 1;
            length = self.gestures.length;
          } while (num < length);
        }
      }
    }
  ];
  return callback(SimultaneousGesture, items);
})(tmp2);
export const ExclusiveGesture = ((arg0) => {
  class ExclusiveGesture {
    constructor() {
      tmp = outer1_2(this, ExclusiveGesture);
      return outer1_8(this, ExclusiveGesture, arguments);
    }
  }
  callback3(ExclusiveGesture, arg0);
  let items = [
    {
      key: "prepare",
      value: function prepare() {
        let length;
        const self = this;
        let items = [];
        let num = 0;
        if (0 < this.gestures.length) {
          do {
            let requireGesturesToFail = self.requireGesturesToFail;
            let prepareSingleGestureResult = self.prepareSingleGesture(self.gestures[num], self.simultaneousGestures, requireGesturesToFail.concat(items));
            items = items.concat(tmp[num]);
            num = num + 1;
            length = self.gestures.length;
          } while (num < length);
        }
      }
    }
  ];
  return callback(ExclusiveGesture, items);
})(tmp2);
