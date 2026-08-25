// Module ID: 9066
// Function ID: 9067
// Name: set
// Dependencies: [2]

// Module 9066 (set)
import set from "set" /* 2 */;

let set = new Set(["end", "loading", "bottomLoading", "icymiHeader", "recommendedGuilds"]);
const result = set.fileFinishedImporting("modules/icymi/ICYMIItemTypes.tsx");

export const NON_ELIGIBLE_SCROLL_ITEMS = set;
