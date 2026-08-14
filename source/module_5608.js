// Module ID: 5608
// Function ID: 5609
// Dependencies: [5609, 5610, 5611, 5612, 5613, 5614, 5615, 5616, 5617, 5529, 5508]

// Module 5608
const require = arg1;
const dependencyMap = arg6;
arg5.GestureObjects = {
  Tap() {
    const tapGesture = new require(5609) /* _isNativeReflectConstruct */.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new require(5610) /* _isNativeReflectConstruct */.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new require(5611) /* _isNativeReflectConstruct */.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new require(5612) /* _isNativeReflectConstruct */.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new require(5613) /* _isNativeReflectConstruct */.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new require(5614) /* _isNativeReflectConstruct */.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new require(5615) /* _isNativeReflectConstruct */.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new require(5616) /* _isNativeReflectConstruct */.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new require(5617) /* _isNativeReflectConstruct */.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new require(5529) /* _isNativeReflectConstruct */.HoverGesture();
    return hoverGesture;
  },
  Race(onStartResult, onEndResult) {
    const items = [...arguments];
    return require(5508) /* _isNativeReflectConstruct */.ComposedGesture(...items);
  },
  Simultaneous(ExclusiveResult, onEndResult, onEndResult1) {
    const items = [...arguments];
    return require(5508) /* _isNativeReflectConstruct */.SimultaneousGesture(...items);
  },
  Exclusive(onStartResult, onStartResult2, enabledResult2) {
    const items = [...arguments];
    return require(5508) /* _isNativeReflectConstruct */.ExclusiveGesture(...items);
  }
};
