// Module ID: 8842
// Function ID: 8843
// Name: set
// Dependencies: [2]

// Module 8842 (set)
import set from "set";

let set = new Set(["end", "loading", "bottomLoading", "icymiHeader", "recommendedGuilds"]);
const result = set.fileFinishedImporting("modules/icymi/ICYMIItemTypes.tsx");

export const NON_ELIGIBLE_SCROLL_ITEMS = set;
