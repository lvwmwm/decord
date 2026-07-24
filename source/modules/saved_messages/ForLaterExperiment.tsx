// Module ID: 9571
// Function ID: 74485
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 9571 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-message-bookmarks", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true }, [2]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/saved_messages/ForLaterExperiment.tsx");

export default apexExperiment;
