// Module ID: 8628
// Function ID: 8629
// Name: set
// Dependencies: [2]

// Module 8628 (set)
import set from "set" /* 2 */;

let set = new Set(["end", "loading", "bottomLoading", "icymiHeader", "recommendedGuilds"]);
const result = set.fileFinishedImporting("modules/icymi/ICYMIItemTypes.tsx");

export const NON_ELIGIBLE_SCROLL_ITEMS = set;
