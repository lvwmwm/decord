// Module ID: 8892
// Function ID: 70221
// Name: items
// Dependencies: [4080, 4077, 2]

// Module 8892 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2024-12_guild_voice_channel_ringing", label: "Guild Voice Ringing", defaultConfig: { enabled: false }, commonTriggerPoint: require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL };
obj = { id: 1, label: "Allow users to ring each other in Guild Voice Channels", config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/voice_calls/GuildVoiceRingingExperiment.tsx");

export default experiment;
