// Module ID: 11119
// Function ID: 11120
// Name: getUnitId
// Dependencies: [1468, 2]

// Module 11119 (getUnitId)
import getUnitIdDefault from "getUnitId" /* 1468 */;

const obj = { 1: null };
obj[1] = { reactionToProfileEnabled: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-07-mobile-reaction-to-profile", defaultConfig: { reactionToProfileEnabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/reactions/ReactionToProfileExperiment.tsx");

export default tmp2;
