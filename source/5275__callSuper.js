// Module ID: 5275
// Function ID: 45523
// Name: _callSuper
// Dependencies: []

// Module 5275 (_callSuper)
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
  return closure_4(arg0, constructResult);
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const tmp2 = (Gesture) => {
  class ComposedGesture {
    constructor() {
      tmp = closure_2(this, ComposedGesture);
      tmp2 = closure_8(this, ComposedGesture);
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
  const arg1 = ComposedGesture;
  callback3(ComposedGesture, Gesture);
  let obj = {
    key: "prepareSingleGesture",
    value: function prepareSingleGesture(item10005, simultaneousGestures, requireGesturesToFail) {
      if (item10005 instanceof ComposedGesture(closure_1[6]).BaseGesture) {
        const _Object = Object;
        const merged = Object.assign({}, item10005.config);
        merged.simultaneousWith = callback3(merged.simultaneousWith, simultaneousGestures);
        merged.requireToFail = callback3(merged.requireToFail, requireGesturesToFail);
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
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "initialize",
    value: function initialize() {
      for (const item10005 of tmp) {
        let initializeResult = item10005.initialize();
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
}(arg1(dependencyMap[6]).Gesture);

export const ComposedGesture = tmp2;
export const SimultaneousGesture = (arg0) => {
  class SimultaneousGesture {
    constructor() {
      tmp = closure_2(this, SimultaneousGesture);
      return closure_8(this, SimultaneousGesture, arguments);
    }
  }
  const arg1 = SimultaneousGesture;
  callback3(SimultaneousGesture, arg0);
  const items = [
    {
      key: "prepare",
      value: function prepare() {
        let length;
        const self = this;
        const SimultaneousGesture = this;
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
}(tmp2);
export const ExclusiveGesture = (arg0) => {
  class ExclusiveGesture {
    constructor() {
      tmp = closure_2(this, ExclusiveGesture);
      return closure_8(this, ExclusiveGesture, arguments);
    }
  }
  const arg1 = ExclusiveGesture;
  callback3(ExclusiveGesture, arg0);
  const items = [
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
}(tmp2);
