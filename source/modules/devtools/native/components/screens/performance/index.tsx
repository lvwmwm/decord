// Module ID: 14583
// Function ID: 109925
// Name: FRAME_BUDGET_MS
// Dependencies: []

// Module 14583 (FRAME_BUDGET_MS)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/devtools/native/components/screens/performance/index.tsx");
for (const key10022 in arg1(arg6[1])) {
  let tmp3 = key10022;
  arg5[key10022] = arg1(arg6[1])[key10022];
}

export const FRAME_BUDGET_MS = require(dependencyMap[2]).FRAME_BUDGET_MS;
export const startFrameMonitor = require(dependencyMap[2]).startFrameMonitor;
export const useMountTimer = importDefault(dependencyMap[3]);
export const useFrameMonitor = importDefault(dependencyMap[4]);
export const useBenchmarkResults = importDefault(dependencyMap[5]);
export const BenchmarkResultsList = importDefault(dependencyMap[6]);
export const ScrollBenchmark = importDefault(dependencyMap[7]);
export const MountMeasure = importDefault(dependencyMap[8]);
