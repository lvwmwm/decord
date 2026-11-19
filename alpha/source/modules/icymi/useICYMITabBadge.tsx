// Module ID: 18020
// Function ID: 18021
// Name: useICYMITabBadge
// Dependencies: [9910, 504, 2]
// Exports: default, icymiTabBadgeShown

// Module 18020 (useICYMITabBadge)
import get_initialized from "get initialized" /* 504 */;
import ICYMIStore from "ICYMIStore" /* 9910 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/useICYMITabBadge.tsx");

export default function useICYMITabBadge() {
  let items;
  let obj2;
  const obj = { value: 0, showDot: obj2.useStateFromStores(items, () => ICYMIStore.hasNewContent(), []) };
  items = [ICYMIStore];
  obj2 = get_initialized;
  return obj;
};
export function icymiTabBadgeShown() {
  return ICYMIStore.hasNewContent();
}
