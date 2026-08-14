// Module ID: 5598
// Function ID: 5599
// Name: useSimultaneousGestures
// Dependencies: [5596, 5547]

// Module 5598 (useSimultaneousGestures)
const require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [require(5547) /* ComposedGestureName */.ComposedGestureName.Simultaneous, ...items];
  return require(5596) /* useComposedGesture */.useComposedGesture.apply(items1);
};
