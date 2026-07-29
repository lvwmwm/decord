// Module ID: 5324
// Function ID: 5325
// Dependencies: [5325, 5326, 5327, 5328, 5329, 5330, 5331, 5332, 5333, 5311, 5334]

// Module 5324
const require = arg1;
const dependencyMap = arg6;
arg5.GestureObjects = {
  Tap() {
    const tapGesture = new require(5325) /* _isNativeReflectConstruct */.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new require(5326) /* _isNativeReflectConstruct */.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new require(5327) /* _isNativeReflectConstruct */.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new require(5328) /* _isNativeReflectConstruct */.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new require(5329) /* _isNativeReflectConstruct */.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new require(5330) /* _isNativeReflectConstruct */.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new require(5331) /* _isNativeReflectConstruct */.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new require(5332) /* _isNativeReflectConstruct */.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new require(5333) /* _isNativeReflectConstruct */.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new require(5311) /* _isNativeReflectConstruct */.HoverGesture();
    return hoverGesture;
  },
  Race(onStartResult, onEndResult) {
    const items = [...arguments];
    return require(5334) /* _isNativeReflectConstruct */.ComposedGesture(...items);
  },
  Simultaneous(ExclusiveResult, onEndResult, onEndResult1) {
    const items = [...arguments];
    return require(5334) /* _isNativeReflectConstruct */.SimultaneousGesture(...items);
  },
  Exclusive(onStartResult, onStartResult2, enabledResult2) {
    const items = [...arguments];
    return require(5334) /* _isNativeReflectConstruct */.ExclusiveGesture(...items);
  }
};
