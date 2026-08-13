// Module ID: 11443
// Function ID: 11444
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 11443 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-scheduled-messages-ui-backup", kind: "user", defaultConfig: false, variations: { 0: false, 1: true } });
const result = require("set").fileFinishedImporting("modules/scheduled_messages/ScheduledMessagesUIBackupExperiment.tsx");

export default apexExperiment;
