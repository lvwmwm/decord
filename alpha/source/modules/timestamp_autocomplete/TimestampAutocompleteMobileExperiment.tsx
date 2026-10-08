// Module ID: 7034
// Function ID: 7035
// Name: TimestampAutocompleteMobileExperiment
// Dependencies: [1452, 2]

// Module 7034 (TimestampAutocompleteMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-08-timestamp-autocomplete-mobile", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/timestamp_autocomplete/TimestampAutocompleteMobileExperiment.tsx");

export const TimestampAutocompleteMobileExperiment = apexExperiment;
