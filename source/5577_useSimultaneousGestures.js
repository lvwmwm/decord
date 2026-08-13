// Module ID: 5577
// Function ID: 5578
// Name: useSimultaneousGestures
// Dependencies: [5575, 5526]

// Module 5577 (useSimultaneousGestures)
const require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [require(5526) /* ComposedGestureName */.ComposedGestureName.Simultaneous, ...items];
  return require(5575) /* useComposedGesture */.useComposedGesture.apply(items1);
};
