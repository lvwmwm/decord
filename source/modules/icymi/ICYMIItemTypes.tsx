// Module ID: 8129
// Function ID: 64852
// Name: set
// Dependencies: [2]

// Module 8129 (set)
import set from "set";

let set = new Set(["end", "loading", "bottomLoading", "icymiHeader", "recommendedGuilds"]);
const result = set.fileFinishedImporting("modules/icymi/ICYMIItemTypes.tsx");

export const NON_ELIGIBLE_SCROLL_ITEMS = set;
