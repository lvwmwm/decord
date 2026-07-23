// Module ID: 4983
// Function ID: 42970
// Name: set
// Dependencies: [2]

// Module 4983 (set)
import set from "set";

const obj = {};
let set = new Set(["PLAY_ACTIVITY", "PLAY_ON_DESKTOP", "PLAY_ON_PLAYSTATION", "PLAY_ON_XBOX", "STREAM_ON_DESKTOP", "WATCH_VIDEO", "WATCH_VIDEO_ON_MOBILE"]);
obj.ALL = set;
obj.DESKTOP = new Set(["PLAY_ACTIVITY", "PLAY_ON_DESKTOP", "STREAM_ON_DESKTOP"]);
const set1 = new Set(["PLAY_ACTIVITY", "PLAY_ON_DESKTOP", "STREAM_ON_DESKTOP"]);
obj.CONSOLE = new Set(["PLAY_ON_PLAYSTATION", "PLAY_ON_XBOX"]);
const set2 = new Set(["PLAY_ON_PLAYSTATION", "PLAY_ON_XBOX"]);
obj.IN_GAME = new Set(["ACHIEVEMENT_IN_ACTIVITY", "ACHIEVEMENT_IN_GAME"]);
const set3 = new Set(["ACHIEVEMENT_IN_ACTIVITY", "ACHIEVEMENT_IN_GAME"]);
obj.VIDEO = new Set(["WATCH_VIDEO", "WATCH_VIDEO_ON_MOBILE"]);
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx");

export const FirstPartyQuestTaskTypes = { STREAM_ON_DESKTOP: "STREAM_ON_DESKTOP", PLAY_ON_DESKTOP: "PLAY_ON_DESKTOP", PLAY_ON_XBOX: "PLAY_ON_XBOX", PLAY_ON_PLAYSTATION: "PLAY_ON_PLAYSTATION", WATCH_VIDEO: "WATCH_VIDEO", WATCH_VIDEO_ON_MOBILE: "WATCH_VIDEO_ON_MOBILE", PLAY_ACTIVITY: "PLAY_ACTIVITY", ACHIEVEMENT_IN_GAME: "ACHIEVEMENT_IN_GAME", ACHIEVEMENT_IN_ACTIVITY: "ACHIEVEMENT_IN_ACTIVITY" };
export const FirstPartyQuestTaskTypesSets = obj;
