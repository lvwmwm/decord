// Module ID: 16562
// Function ID: 129172
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 16562 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-notification-load-messages", kind: "user", defaultConfig: { enabled: false, limit: 1, cooldownMs: 0, debounceMs: 0 }, variations: { [1]: { enabled: true, limit: 1, cooldownMs: 60000, debounceMs: 3000 }, [2]: { enabled: true, limit: 25, cooldownMs: 60000, debounceMs: 3000 }, [3]: { enabled: true, limit: 10, cooldownMs: 60000, debounceMs: 3000 }, [4]: { enabled: true, limit: 25, cooldownMs: 0, debounceMs: 3000 }, [5]: { enabled: true, limit: 10, cooldownMs: 0, debounceMs: 3000 }, [6]: { enabled: true, limit: 25, cooldownMs: 0, debounceMs: 0 }, [7]: { enabled: true, limit: 10, cooldownMs: 0, debounceMs: 0 } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/cache/NotificationLoadMessagesExperiment.tsx");

export default apexExperiment;
