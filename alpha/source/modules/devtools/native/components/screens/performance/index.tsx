// Module ID: 16695
// Function ID: 16696
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16696, 16697, 16698, 16699, 16700, 16701, 16702, 16703]

// Module 16695 (FRAME_BUDGET_MS)
import types from "types" /* 16696 */;
import startFrameMonitor from "startFrameMonitor" /* 16697 */;
import useMountTimerDefault from "useMountTimer" /* 16698 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16699 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16700 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16701 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16702 */;
import MountMeasureDefault from "MountMeasure" /* 16703 */;
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
