// Module ID: 17744
// Function ID: 17745
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17745, 17746, 17747, 17748, 17749, 17750, 17751, 17752]

// Module 17744 (FRAME_BUDGET_MS)
import types from "types" /* 17745 */;
import startFrameMonitor from "startFrameMonitor" /* 17746 */;
import useMountTimerDefault from "useMountTimer" /* 17747 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17748 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17749 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17750 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17751 */;
import MountMeasureDefault from "MountMeasure" /* 17752 */;
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
