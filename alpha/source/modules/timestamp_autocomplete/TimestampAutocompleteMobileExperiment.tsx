// Module ID: 6948
// Function ID: 6949
// Name: TimestampAutocompleteMobileExperiment
// Dependencies: [1435, 2]

// Module 6948 (TimestampAutocompleteMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-timestamp-autocomplete-mobile", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/timestamp_autocomplete/TimestampAutocompleteMobileExperiment.tsx");

export const TimestampAutocompleteMobileExperiment = apexExperiment;
