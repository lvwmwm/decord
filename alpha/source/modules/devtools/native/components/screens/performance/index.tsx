// Module ID: 18424
// Function ID: 18425
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 18425, 18426, 18427, 18428, 18429, 18430, 18431, 18432]

// Module 18424 (FRAME_BUDGET_MS)
import types from "types" /* 18425 */;
import startFrameMonitor from "startFrameMonitor" /* 18426 */;
import useMountTimerDefault from "useMountTimer" /* 18427 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18428 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18429 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18430 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18431 */;
import MountMeasureDefault from "MountMeasure" /* 18432 */;
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
