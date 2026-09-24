// Module ID: 10005
// Function ID: 10006
// Name: GuildVoiceRingingExperiment
// Dependencies: [4707, 4704, 2]

// Module 10005 (GuildVoiceRingingExperiment)
import ExperimentConstants from "ExperimentConstants" /* 4707 */;
import createExperiment from "module_4704" /* 4704 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2024-12_guild_voice_channel_ringing", label: "Guild Voice Ringing", defaultConfig: { enabled: false }, commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL, treatments: null };
const items = [{ id: 1, label: "Allow users to ring each other in Guild Voice Channels", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/GuildVoiceRingingExperiment.tsx");

export default experiment;
