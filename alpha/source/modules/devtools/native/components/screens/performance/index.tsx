// Module ID: 15606
// Function ID: 15607
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 15607, 15608, 15609, 15610, 15611, 15612, 15613, 15614]

// Module 15606 (FRAME_BUDGET_MS)
import types from "types" /* 15607 */;
import startFrameMonitor from "startFrameMonitor" /* 15608 */;
import useMountTimerDefault from "useMountTimer" /* 15609 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15610 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 15611 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 15612 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 15613 */;
import MountMeasureDefault from "MountMeasure" /* 15614 */;
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
