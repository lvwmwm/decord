// Module ID: 8647
// Function ID: 8648
// Name: set
// Dependencies: [2]

// Module 8647 (set)
import set from "set" /* 2 */;

let set = new Set(["end", "loading", "bottomLoading", "icymiHeader", "recommendedGuilds"]);
const result = set.fileFinishedImporting("modules/icymi/ICYMIItemTypes.tsx");

export const NON_ELIGIBLE_SCROLL_ITEMS = set;
