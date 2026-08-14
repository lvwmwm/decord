// Module ID: 5595
// Function ID: 5596
// Name: useCompetingGestures
// Dependencies: [5596, 5547]

// Module 5595 (useCompetingGestures)
const require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [require(5547) /* ComposedGestureName */.ComposedGestureName.Race, ...items];
  return require(5596) /* useComposedGesture */.useComposedGesture.apply(items1);
};
