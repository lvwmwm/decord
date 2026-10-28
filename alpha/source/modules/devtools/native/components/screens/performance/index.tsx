// Module ID: 17377
// Function ID: 17378
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17378, 17379, 17380, 17381, 17382, 17383, 17384, 17385]

// Module 17377 (FRAME_BUDGET_MS)
import types from "types" /* 17378 */;
import startFrameMonitor from "startFrameMonitor" /* 17379 */;
import useMountTimerDefault from "useMountTimer" /* 17380 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17381 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17382 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17383 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17384 */;
import MountMeasureDefault from "MountMeasure" /* 17385 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/index.tsx");
for (const key10018 in types) {
  exports[key10018] = types[key10018];
  continue;
}
const startFrameMonitor_export = startFrameMonitor.startFrameMonitor;

export const FRAME_BUDGET_MS = startFrameMonitor.FRAME_BUDGET_MS;
export { startFrameMonitor_export as startFrameMonitor };
export const useMountTimer = useMountTimerDefault;
export const useFrameMonitor = useFrameMonitorDefault;
export const useBenchmarkResults = useBenchmarkResultsDefault;
export const BenchmarkResultsList = BenchmarkResultsListDefault;
export const ScrollBenchmark = ScrollBenchmarkDefault;
export const MountMeasure = MountMeasureDefault;
