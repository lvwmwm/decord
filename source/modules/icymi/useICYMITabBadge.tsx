// Module ID: 15979
// Function ID: 15980
// Name: useICYMITabBadge
// Dependencies: [8606, 589, 2]
// Exports: default, icymiTabBadgeShown

// Module 15979 (useICYMITabBadge)
import initialize from "initialize" /* 589 */;
import closure_2 from "filterStaffGuild" /* 8606 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/icymi/useICYMITabBadge.tsx");

export default function useICYMITabBadge() {
  const obj = { value: 0, showDot: initialize.useStateFromStores(items, () => closure_2.hasNewContent(), []) };
  items = [closure_2];
  return obj;
};
export const icymiTabBadgeShown = function icymiTabBadgeShown() {
  return closure_2.hasNewContent();
};
