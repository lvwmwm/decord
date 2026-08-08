// Module ID: 5537
// Function ID: 5538
// Name: useSimultaneousGestures
// Dependencies: [5535, 5486]

// Module 5537 (useSimultaneousGestures)
const require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [require(5486) /* ComposedGestureName */.ComposedGestureName.Simultaneous, ...items];
  return require(5535) /* useComposedGesture */.useComposedGesture.apply(items1);
};
