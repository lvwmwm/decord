// Module ID: 4980
// Function ID: 42952
// Name: set
// Dependencies: []

// Module 4980 (set)
const obj = { ALL: new Set([true, true, true, true, true, true, null]) };
const set = new Set([true, true, true, true, true, true, null]);
obj.DESKTOP = new Set([]);
const set1 = new Set([]);
obj.CONSOLE = new Set([null, null]);
const set2 = new Set([null, null]);
obj.IN_GAME = new Set([]);
const set3 = new Set([]);
obj.VIDEO = new Set([]);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx");

export const FirstPartyQuestTaskTypes = { STREAM_ON_DESKTOP: "STREAM_ON_DESKTOP", PLAY_ON_DESKTOP: "PLAY_ON_DESKTOP", PLAY_ON_XBOX: "PLAY_ON_XBOX", PLAY_ON_PLAYSTATION: "PLAY_ON_PLAYSTATION", WATCH_VIDEO: "WATCH_VIDEO", WATCH_VIDEO_ON_MOBILE: "WATCH_VIDEO_ON_MOBILE", PLAY_ACTIVITY: "PLAY_ACTIVITY", ACHIEVEMENT_IN_GAME: "ACHIEVEMENT_IN_GAME", ACHIEVEMENT_IN_ACTIVITY: "ACHIEVEMENT_IN_ACTIVITY" };
export const FirstPartyQuestTaskTypesSets = obj;
