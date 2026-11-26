// Module ID: 17368
// Function ID: 17369
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17369, 17370, 17371, 17372, 17373, 17374, 17375, 17376]

// Module 17368 (FRAME_BUDGET_MS)
import types from "types" /* 17369 */;
import startFrameMonitor from "startFrameMonitor" /* 17370 */;
import useMountTimerDefault from "useMountTimer" /* 17371 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17372 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17373 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17374 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17375 */;
import MountMeasureDefault from "MountMeasure" /* 17376 */;
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
