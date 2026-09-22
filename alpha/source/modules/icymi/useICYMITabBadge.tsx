// Module ID: 16742
// Function ID: 16743
// Name: useICYMITabBadge
// Dependencies: [8610, 504, 2]
// Exports: default, icymiTabBadgeShown

// Module 16742 (useICYMITabBadge)
import initialize from "initialize" /* 504 */;
import ICYMIStore from "ICYMIStore" /* 8610 */;

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
