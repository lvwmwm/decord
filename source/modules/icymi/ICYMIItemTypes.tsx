// Module ID: 8188
// Function ID: 8189
// Name: set
// Dependencies: [2]

// Module 8188 (set)
import set from "set";

let set = new Set(["end", "loading", "bottomLoading", "icymiHeader", "recommendedGuilds"]);
const result = set.fileFinishedImporting("modules/icymi/ICYMIItemTypes.tsx");

export const NON_ELIGIBLE_SCROLL_ITEMS = set;
