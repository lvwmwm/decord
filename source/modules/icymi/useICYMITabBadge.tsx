// Module ID: 15588
// Function ID: 15589
// Name: useICYMITabBadge
// Dependencies: [8947, 589, 2]
// Exports: default, icymiTabBadgeShown

// Module 15588 (useICYMITabBadge)
import filterStaffGuild from "filterStaffGuild";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/icymi/useICYMITabBadge.tsx");

export default function useICYMITabBadge() {
  const obj = { value: 0, showDot: null };
  const items = [filterStaffGuild];
  obj[1] = require(589) /* initialize */.useStateFromStores(items, () => filterStaffGuild.hasNewContent(), []);
  return obj;
};
export const icymiTabBadgeShown = function icymiTabBadgeShown() {
  return filterStaffGuild.hasNewContent();
};
