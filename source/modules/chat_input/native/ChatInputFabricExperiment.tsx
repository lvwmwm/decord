// Module ID: 11298
// Function ID: 11299
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 11298 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-ios-chat-input-fabric", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/chat_input/native/ChatInputFabricExperiment.tsx");

export default apexExperiment;
