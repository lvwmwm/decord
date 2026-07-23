// Module ID: 15803
// Function ID: 122006
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 15803 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-default-audio-route", kind: "user", defaultConfig: { defaultSpeakerForGuildCall: false, defaultSpeakerForDMCall: false }, variations: { [1]: { defaultSpeakerForGuildCall: true, defaultSpeakerForDMCall: false }, [2]: { defaultSpeakerForGuildCall: true, defaultSpeakerForDMCall: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/voice_calls/DefaultAudioRouteExperiment.tsx");

export default apexExperiment;
