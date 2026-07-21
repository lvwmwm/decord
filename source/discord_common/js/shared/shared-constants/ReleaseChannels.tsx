// Module ID: 6833
// Function ID: 53976
// Name: set
// Dependencies: [284214097]

// Module 6833 (set)
const obj = { WEB_AND_IOS: new Set(["<string:1463156739>", null, null]) };
const set = new Set(["<string:1463156739>", null, null]);
obj.ANDROID = new Set([]);
const set1 = new Set([]);
obj.QUEST_VR = new Set([]);
const set2 = new Set([]);
obj.OTHER = new Set([false, false, false, false]);
const set3 = new Set([false, false, false, false]);
obj.ALL = new Set([true, true, true, true, true, true, true, true, true, true, true, true, true]);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/ReleaseChannels.tsx");

export const ReleaseChannels = { CANARY_RELEASE: "canaryRelease", BETA_RELEASE: "betaRelease", GOOGLE_RELEASE: "googleRelease", CANARY: "canary", PTB: "ptb", STABLE: "stable", ADHOC: "adhoc", QUEST_CANARY_RELEASE: "questCanaryRelease", QUEST_BETA_RELEASE: "questBetaRelease", QUEST_PRODUCTION_RELEASE: "questProductionRelease", STAGING: "staging", DEVELOPMENT: "development", N_A: "N/A" };
export const ReleaseChannelsSets = obj;
