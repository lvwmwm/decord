// Module ID: 11142
// Function ID: 86458
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 11142 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-ios-chat-input-fabric", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/chat_input/native/ChatInputFabricExperiment.tsx");

export default apexExperiment;
