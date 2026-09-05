// Module ID: 8357
// Function ID: 8358
// Name: set
// Dependencies: [2]

// Module 8357 (set)
import set from "set" /* 2 */;

let set = new Set(["end", "loading", "bottomLoading", "icymiHeader", "recommendedGuilds"]);
const result = set.fileFinishedImporting("modules/icymi/ICYMIItemTypes.tsx");

export const NON_ELIGIBLE_SCROLL_ITEMS = set;
