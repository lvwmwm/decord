// Module ID: 10238
// Function ID: 79096
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 10238 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-07-message-request-push-notification", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true }, [2]: { enabled: false } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/message_request/MessageRequestPushNotificationExperiment.tsx");

export default apexExperiment;
