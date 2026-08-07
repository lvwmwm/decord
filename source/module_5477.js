// Module ID: 5477
// Function ID: 5478
// Dependencies: [5478, 5479, 5480, 5481, 5482, 5483, 5484, 5485, 5486, 5464, 5487]

// Module 5477
const require = arg1;
const dependencyMap = arg6;
arg5.GestureObjects = {
  Tap() {
    const tapGesture = new require(5478) /* _isNativeReflectConstruct */.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new require(5479) /* _isNativeReflectConstruct */.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new require(5480) /* _isNativeReflectConstruct */.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new require(5481) /* _isNativeReflectConstruct */.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new require(5482) /* _isNativeReflectConstruct */.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new require(5483) /* _isNativeReflectConstruct */.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new require(5484) /* _isNativeReflectConstruct */.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new require(5485) /* _isNativeReflectConstruct */.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new require(5486) /* _isNativeReflectConstruct */.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new require(5464) /* _isNativeReflectConstruct */.HoverGesture();
    return hoverGesture;
  },
  Race(onStartResult, onEndResult) {
    const items = [...arguments];
    return require(5487) /* _isNativeReflectConstruct */.ComposedGesture(...items);
  },
  Simultaneous(ExclusiveResult, onEndResult, onEndResult1) {
    const items = [...arguments];
    return require(5487) /* _isNativeReflectConstruct */.SimultaneousGesture(...items);
  },
  Exclusive(onStartResult, onStartResult2, enabledResult2) {
    const items = [...arguments];
    return require(5487) /* _isNativeReflectConstruct */.ExclusiveGesture(...items);
  }
};
