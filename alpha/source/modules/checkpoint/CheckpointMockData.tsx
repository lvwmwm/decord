// Module ID: 18321
// Function ID: 18322
// Name: CheckpointMockData
// Dependencies: [14254, 2]

// Module 18321 (CheckpointMockData)
import CheckpointAvailability from "CheckpointAvailability" /* 14254 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let obj4;
const obj = { FAKE_DATA: obj2, GLOBAL_STATS: { stats: null, character: null, didPlayerShareDataWithDiscord: false }, ZERO_STATS: obj3, UNAVAILABLE: { availability: CheckpointAvailability.CheckpointAvailability.UNAVAILABLE }, NO_CHARACTER: { availability: CheckpointAvailability.CheckpointAvailability.NO_CHARACTER }, COMPACT_ASSETS: { compactAssets: true } };
obj3 = { stats: obj4, character: null };
obj2 = { stats: { voice: { totalVoiceMinutes: 54423, totalVoiceMinutesPercentile: 92 } }, character: null };
obj4 = { voice: { totalVoiceMinutes: 0, totalVoiceMinutesPercentile: 0 }, messages: { numMessagesSent: 0, numMessagesSentPercentile: 0 }, guilds: { guilds: [] }, emojis: { numEmojisSent: 0, numEmojisSentPercentile: 0, emojis: [] }, games: { totalGamesPlayed: 0, totalGamesPlayedPercentile: 0, games: [], totalDaysPlayed: 0, totalDaysPlayedPercentile: 0 }, sidekick: null, users: [], power: { powerLevel: 0, powerLevelPercentile: 0 } };
({ availability: CheckpointAvailability.CheckpointAvailability.UNAVAILABLE });
({ availability: CheckpointAvailability.CheckpointAvailability.NO_CHARACTER });
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointMockData.tsx");

export const CheckpointMocks = obj;
