// Module ID: 10895
// Function ID: 10896
// Name: getUnitId
// Dependencies: [1469, 2]

// Module 10895 (getUnitId)
import getUnitIdDefault from "getUnitId" /* 1469 */;

const obj = { 1: null };
obj[1] = { reactionToProfileEnabled: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-07-mobile-reaction-to-profile", defaultConfig: { reactionToProfileEnabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/reactions/ReactionToProfileExperiment.tsx");

export default tmp2;
