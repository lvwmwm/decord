// Module ID: 5576
// Function ID: 5577
// Name: useSimultaneousGestures
// Dependencies: [5574, 5525]

// Module 5576 (useSimultaneousGestures)
const require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [require(5525) /* ComposedGestureName */.ComposedGestureName.Simultaneous, ...items];
  return require(5574) /* useComposedGesture */.useComposedGesture.apply(items1);
};
