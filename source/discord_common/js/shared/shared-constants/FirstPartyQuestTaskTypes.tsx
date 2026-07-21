// Module ID: 5254
// Function ID: 44533
// Name: set
// Dependencies: [284214097]

// Module 5254 (set)
const obj = { ALL: new Set([]) };
const set = new Set([]);
obj.DESKTOP = new Set(["message", "a", "isArray"]);
const set1 = new Set(["message", "a", "isArray"]);
obj.CONSOLE = new Set([]);
const set2 = new Set([]);
obj.IN_GAME = new Set([true, true]);
const set3 = new Set([true, true]);
obj.VIDEO = new Set([]);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx");

export const FirstPartyQuestTaskTypes = { STREAM_ON_DESKTOP: "STREAM_ON_DESKTOP", PLAY_ON_DESKTOP: "PLAY_ON_DESKTOP", PLAY_ON_XBOX: "PLAY_ON_XBOX", PLAY_ON_PLAYSTATION: "PLAY_ON_PLAYSTATION", WATCH_VIDEO: "WATCH_VIDEO", WATCH_VIDEO_ON_MOBILE: "WATCH_VIDEO_ON_MOBILE", PLAY_ACTIVITY: "PLAY_ACTIVITY", ACHIEVEMENT_IN_GAME: "ACHIEVEMENT_IN_GAME", ACHIEVEMENT_IN_ACTIVITY: "ACHIEVEMENT_IN_ACTIVITY" };
export const FirstPartyQuestTaskTypesSets = obj;
