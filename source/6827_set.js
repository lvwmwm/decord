// Module ID: 6827
// Function ID: 53930
// Name: set
// Dependencies: []

// Module 6827 (set)
const obj = { WEB_AND_IOS: new Set([]) };
const set = new Set([]);
obj.ANDROID = new Set([]);
const set1 = new Set([]);
obj.QUEST_VR = new Set([]);
const set2 = new Set([]);
obj.OTHER = new Set([true, true, true, true]);
const set3 = new Set([true, true, true, true]);
obj.ALL = new Set(["484425151631589378", "1124351896166076496", "1124351975702679583", "1124353289857810612", "1124353460880556183", "1124353599590379552", "1124354036020297778", "1124354174310699169", "1124354219374297238", "1124354724301393940", "1124355292591829002", "1124355334593593364", "1124355447323906128"]);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/ReleaseChannels.tsx");

export const ReleaseChannels = { CANARY_RELEASE: "canaryRelease", BETA_RELEASE: "betaRelease", GOOGLE_RELEASE: "googleRelease", CANARY: "canary", PTB: "ptb", STABLE: "stable", ADHOC: "adhoc", QUEST_CANARY_RELEASE: "questCanaryRelease", QUEST_BETA_RELEASE: "questBetaRelease", QUEST_PRODUCTION_RELEASE: "questProductionRelease", STAGING: "staging", DEVELOPMENT: "development", N_A: "N/A" };
export const ReleaseChannelsSets = obj;
