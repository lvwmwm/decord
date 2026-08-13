// Module ID: 5574
// Function ID: 5575
// Name: useCompetingGestures
// Dependencies: [5575, 5526]

// Module 5574 (useCompetingGestures)
const require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [require(5526) /* ComposedGestureName */.ComposedGestureName.Race, ...items];
  return require(5575) /* useComposedGesture */.useComposedGesture.apply(items1);
};
