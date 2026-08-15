// Module ID: 6484
// Function ID: 6485
// Name: useCompetingGestures
// Dependencies: [6485, 6436]

// Module 6484 (useCompetingGestures)
const require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [require(6436) /* ComposedGestureName */.ComposedGestureName.Race, ...items];
  return require(6485) /* useComposedGesture */.useComposedGesture.apply(items1);
};
