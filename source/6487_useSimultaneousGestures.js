// Module ID: 6487
// Function ID: 6488
// Name: useSimultaneousGestures
// Dependencies: [6485, 6436]

// Module 6487 (useSimultaneousGestures)
const require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [require(6436) /* ComposedGestureName */.ComposedGestureName.Simultaneous, ...items];
  return require(6485) /* useComposedGesture */.useComposedGesture.apply(items1);
};
