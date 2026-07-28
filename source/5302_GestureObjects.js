// Module ID: 5302
// Function ID: 45546
// Name: GestureObjects
// Dependencies: [164, 5303, 5304, 5305, 5306, 5307, 5308, 5309, 5310, 5311, 5289, 5312]

// Module 5302 (GestureObjects)
import _construct from "_construct";

const require = arg1;

export const GestureObjects = {
  Tap() {
    const tapGesture = new require(5303) /* _isNativeReflectConstruct */.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new require(5304) /* _isNativeReflectConstruct */.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new require(5305) /* _isNativeReflectConstruct */.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new require(5306) /* _isNativeReflectConstruct */.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new require(5307) /* _isNativeReflectConstruct */.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new require(5308) /* _isNativeReflectConstruct */.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new require(5309) /* _isNativeReflectConstruct */.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new require(5310) /* _isNativeReflectConstruct */.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new require(5311) /* _isNativeReflectConstruct */.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new require(5289) /* _isNativeReflectConstruct */.HoverGesture();
    return hoverGesture;
  },
  Race(onStartResult, onEndResult) {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    return callback(require(5312) /* _callSuper */.ComposedGesture, array);
  },
  Simultaneous(ExclusiveResult, onEndResult, onEndResult1) {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    return callback(require(5312) /* _callSuper */.SimultaneousGesture, array);
  },
  Exclusive(onStartResult, onStartResult2, enabledResult2) {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    return callback(require(5312) /* _callSuper */.ExclusiveGesture, array);
  }
};
