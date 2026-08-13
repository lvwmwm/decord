// Module ID: 16280
// Function ID: 16281
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 16280 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { defaultSpeakerForGuildCall: true, defaultSpeakerForDMCall: false } };
obj[2] = { defaultSpeakerForGuildCall: true, defaultSpeakerForDMCall: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-default-audio-route", kind: "user", defaultConfig: { defaultSpeakerForGuildCall: false, defaultSpeakerForDMCall: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/voice_calls/DefaultAudioRouteExperiment.tsx");

export default apexExperiment;
