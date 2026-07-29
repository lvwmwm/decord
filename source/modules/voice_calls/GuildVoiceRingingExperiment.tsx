// Module ID: 8916
// Function ID: 8917
// Name: experiment
// Dependencies: [4104, 4101, 2]

// Module 8916 (experiment)
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "Allow users to ring each other in Guild Voice Channels", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2024-12_guild_voice_channel_ringing", label: "Guild Voice Ringing", defaultConfig: { enabled: false }, commonTriggerPoint: require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, treatments: items });
const obj = { kind: "guild", id: "2024-12_guild_voice_channel_ringing", label: "Guild Voice Ringing", defaultConfig: { enabled: false }, commonTriggerPoint: require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, treatments: items };
const result = require("set").fileFinishedImporting("modules/voice_calls/GuildVoiceRingingExperiment.tsx");

export default experiment;
