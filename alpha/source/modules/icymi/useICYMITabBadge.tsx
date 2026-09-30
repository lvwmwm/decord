// Module ID: 16233
// Function ID: 16234
// Name: useICYMITabBadge
// Dependencies: [7978, 504, 2]
// Exports: default, icymiTabBadgeShown

// Module 16233 (useICYMITabBadge)
import initialize from "initialize" /* 504 */;
import ICYMIStore from "ICYMIStore" /* 7978 */;

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
