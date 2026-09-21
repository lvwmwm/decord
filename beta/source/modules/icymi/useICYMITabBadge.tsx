// Module ID: 16730
// Function ID: 16731
// Name: useICYMITabBadge
// Dependencies: [8606, 504, 2]
// Exports: default, icymiTabBadgeShown

// Module 16730 (useICYMITabBadge)
import initialize from "initialize" /* 504 */;
import ICYMIStore from "ICYMIStore" /* 8606 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/useICYMITabBadge.tsx");

export default function useICYMITabBadge() {
  const obj = { value: 0, showDot: null };
  const items = [ICYMIStore];
  obj.showDot = initialize.useStateFromStores(items, () => ICYMIStore.hasNewContent(), []);
  return obj;
};
export const icymiTabBadgeShown = function icymiTabBadgeShown() {
  return ICYMIStore.hasNewContent();
};
