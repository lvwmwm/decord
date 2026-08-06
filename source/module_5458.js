// Module ID: 5458
// Function ID: 5459
// Dependencies: [5459, 5460, 5461, 5462, 5463, 5464, 5465, 5466, 5467, 5445, 5468]

// Module 5458
const require = arg1;
const dependencyMap = arg6;
arg5.GestureObjects = {
  Tap() {
    const tapGesture = new require(5459) /* _isNativeReflectConstruct */.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new require(5460) /* _isNativeReflectConstruct */.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new require(5461) /* _isNativeReflectConstruct */.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new require(5462) /* _isNativeReflectConstruct */.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new require(5463) /* _isNativeReflectConstruct */.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new require(5464) /* _isNativeReflectConstruct */.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new require(5465) /* _isNativeReflectConstruct */.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new require(5466) /* _isNativeReflectConstruct */.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new require(5467) /* _isNativeReflectConstruct */.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new require(5445) /* _isNativeReflectConstruct */.HoverGesture();
    return hoverGesture;
  },
  Race(onStartResult, onEndResult) {
    const items = [...arguments];
    return require(5468) /* _isNativeReflectConstruct */.ComposedGesture(...items);
  },
  Simultaneous(ExclusiveResult, onEndResult, onEndResult1) {
    const items = [...arguments];
    return require(5468) /* _isNativeReflectConstruct */.SimultaneousGesture(...items);
  },
  Exclusive(onStartResult, onStartResult2, enabledResult2) {
    const items = [...arguments];
    return require(5468) /* _isNativeReflectConstruct */.ExclusiveGesture(...items);
  }
};
