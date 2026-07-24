// Module ID: 8960
// Function ID: 70590
// Name: items
// Dependencies: [4045, 4042, 2]

// Module 8960 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2024-12_guild_voice_channel_ringing", label: "Guild Voice Ringing", defaultConfig: { enabled: false }, commonTriggerPoint: require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL };
obj = { id: 1, label: "Allow users to ring each other in Guild Voice Channels", config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/voice_calls/GuildVoiceRingingExperiment.tsx");

export default experiment;
