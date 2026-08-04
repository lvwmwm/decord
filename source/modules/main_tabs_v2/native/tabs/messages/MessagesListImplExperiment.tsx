// Module ID: 15078
// Function ID: 15079
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 15078 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { list: "flash", recycleItems: false }, 3: { list: "legend", recycleItems: false } };
obj[3] = { list: "legend", recycleItems: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-messages-list-impl", defaultConfig: { list: "fastest", recycleItems: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesListImplExperiment.tsx");

export default apexExperiment;
