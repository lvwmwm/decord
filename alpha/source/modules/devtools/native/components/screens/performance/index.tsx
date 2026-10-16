// Module ID: 16742
// Function ID: 16743
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16743, 16744, 16745, 16746, 16747, 16748, 16749, 16750]

// Module 16742 (FRAME_BUDGET_MS)
import types from "types" /* 16743 */;
import startFrameMonitor from "startFrameMonitor" /* 16744 */;
import useMountTimerDefault from "useMountTimer" /* 16745 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16746 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16747 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16748 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16749 */;
import MountMeasureDefault from "MountMeasure" /* 16750 */;
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
