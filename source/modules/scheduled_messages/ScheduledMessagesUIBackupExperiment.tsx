// Module ID: 11444
// Function ID: 11445
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 11444 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-scheduled-messages-ui-backup", kind: "user", defaultConfig: false, variations: { 0: false, 1: true } });
const result = require("set").fileFinishedImporting("modules/scheduled_messages/ScheduledMessagesUIBackupExperiment.tsx");

export default apexExperiment;
