// Module ID: 10097
// Function ID: 10098
// Name: apexExperiment
// Dependencies: [1433, 2]

// Module 10097 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null, 2: { enabled: true }, 3: { enabled: false } };
obj[3] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-message-request-push-notification", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/message_request/MessageRequestPushNotificationExperiment.tsx");

export default apexExperiment;
