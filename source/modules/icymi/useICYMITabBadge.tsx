// Module ID: 14991
// Function ID: 112901
// Name: useICYMITabBadge
// Dependencies: []
// Exports: default, icymiTabBadgeShown

// Module 14991 (useICYMITabBadge)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/icymi/useICYMITabBadge.tsx");

export default function useICYMITabBadge() {
  const obj = { value: 0 };
  const items = [closure_2];
  obj.showDot = arg1(dependencyMap[1]).useStateFromStores(items, () => closure_2.hasNewContent(), []);
  return obj;
};
export const icymiTabBadgeShown = function icymiTabBadgeShown() {
  return closure_2.hasNewContent();
};
