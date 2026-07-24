// Module ID: 9018
// Function ID: 71007
// Name: set
// Dependencies: [2]

// Module 9018 (set)
import set from "set";

const obj = {};
let set = new Set(["984193235868065795", "1008890872156405890"]);
obj.PLAYSTATION_APPLICATION_IDS = set;
obj.IMPLICIT_IDENTIFY_PREMIUM_APPLICATION_IDS = new Set(["622174530214821906"]);
const set1 = new Set(["622174530214821906"]);
obj.ALL = new Set(["622174530214821906", "984193235868065795", "1008890872156405890"]);
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleOAuthApplications.tsx");

export const ConsoleOAuthApplications = { XBOX_APPLICATION_ID: "622174530214821906", PLAYSTATION_APPLICATION_ID: "1008890872156405890", PLAYSTATION_STAGING_APPLICATION_ID: "984193235868065795" };
export const ConsoleOAuthApplicationsSets = obj;
