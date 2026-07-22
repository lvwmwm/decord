// Module ID: 5265
// Function ID: 45400
// Name: GestureObjects
// Dependencies: []

// Module 5265 (GestureObjects)
let closure_2 = importDefault(dependencyMap[0]);

export const GestureObjects = {
  Tap() {
    const tapGesture = new arg1(dependencyMap[1]).TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new arg1(dependencyMap[2]).PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new arg1(dependencyMap[3]).PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new arg1(dependencyMap[4]).RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new arg1(dependencyMap[5]).FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new arg1(dependencyMap[6]).LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new arg1(dependencyMap[7]).ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new arg1(dependencyMap[8]).NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new arg1(dependencyMap[9]).ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new arg1(dependencyMap[10]).HoverGesture();
    return hoverGesture;
  },
  Race(onStartResult, onEndResult) {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    return callback(onEndResult(dependencyMap[11]).ComposedGesture, array);
  },
  Simultaneous(ExclusiveResult, onEndResult, onEndResult1) {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    return callback(onEndResult(dependencyMap[11]).SimultaneousGesture, array);
  },
  Exclusive(onStartResult, onStartResult2, enabledResult2) {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    return callback(onStartResult2(dependencyMap[11]).ExclusiveGesture, array);
  }
};
