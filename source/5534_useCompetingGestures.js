// Module ID: 5534
// Function ID: 5535
// Name: useCompetingGestures
// Dependencies: [5535, 5486]

// Module 5534 (useCompetingGestures)
const require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [require(5486) /* ComposedGestureName */.ComposedGestureName.Race, ...items];
  return require(5535) /* useComposedGesture */.useComposedGesture.apply(items1);
};
