// Module ID: 5517
// Function ID: 46996
// Name: useNavigatorShouldCrossfade
// Dependencies: []
// Exports: useNavigatorShouldCrossfade

// Module 5517 (useNavigatorShouldCrossfade)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = function useNavigatorShouldCrossfade() {
  const context = React.useContext(arg1(dependencyMap[2]).AccessibilityPreferencesContext);
  let enabled = context.prefersCrossfades;
  if (obj.isAndroid()) {
    enabled = context.reducedMotion.enabled;
  }
  return enabled;
};
