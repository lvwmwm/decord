// Module ID: 10206
// Function ID: 10207
// Name: apexExperiment
// Dependencies: [1467, 2]

// Module 10206 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null, 2: { enabled: true }, 3: { enabled: false } };
obj[3] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-message-request-push-notification", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/message_request/MessageRequestPushNotificationExperiment.tsx");

export default apexExperiment;
