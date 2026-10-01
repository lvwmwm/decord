// Module ID: 15331
// Function ID: 15332
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 15332, 15333, 15334, 15335, 15336, 15337, 15338, 15339]

// Module 15331 (FRAME_BUDGET_MS)
import types from "types" /* 15332 */;
import startFrameMonitor from "startFrameMonitor" /* 15333 */;
import useMountTimerDefault from "useMountTimer" /* 15334 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15335 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 15336 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 15337 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 15338 */;
import MountMeasureDefault from "MountMeasure" /* 15339 */;
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
