// Module ID: 5573
// Function ID: 5574
// Name: useCompetingGestures
// Dependencies: [5574, 5525]

// Module 5573 (useCompetingGestures)
const require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [require(5525) /* ComposedGestureName */.ComposedGestureName.Race, ...items];
  return require(5574) /* useComposedGesture */.useComposedGesture.apply(items1);
};
