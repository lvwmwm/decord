// Module ID: 18382
// Function ID: 18383
// Name: ReactCompilerExperiment
// Dependencies: [1439, 2]

// Module 18382 (ReactCompilerExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/react_compiler/ReactCompilerExperiment.tsx");

export const ReactCompilerExperiment = apex_ApexExperimentDefault({ kind: "user", name: "2026-09-react-compiler-mobile", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
