// Module ID: 17204
// Function ID: 17205
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17205, 17206, 17207, 17208, 17209, 17210, 17211, 17212]

// Module 17204 (FRAME_BUDGET_MS)
import types from "types" /* 17205 */;
import startFrameMonitor from "startFrameMonitor" /* 17206 */;
import useMountTimerDefault from "useMountTimer" /* 17207 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17208 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17209 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17210 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17211 */;
import MountMeasureDefault from "MountMeasure" /* 17212 */;
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
