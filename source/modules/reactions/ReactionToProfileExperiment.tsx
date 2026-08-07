// Module ID: 8722
// Function ID: 8723
// Name: getUnitId
// Dependencies: [1349, 2]

// Module 8722 (getUnitId)
const obj = { 1: null };
obj[1] = { reactionToProfileEnabled: true };
const tmp2 = require("getUnitId")({ kind: "user", name: "2026-07-mobile-reaction-to-profile", defaultConfig: { reactionToProfileEnabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/reactions/ReactionToProfileExperiment.tsx");

export default tmp2;
