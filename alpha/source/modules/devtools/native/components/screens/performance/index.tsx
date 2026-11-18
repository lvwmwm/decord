// Module ID: 17229
// Function ID: 17230
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17230, 17231, 17232, 17233, 17234, 17235, 17236, 17237]

// Module 17229 (FRAME_BUDGET_MS)
import types from "types" /* 17230 */;
import startFrameMonitor from "startFrameMonitor" /* 17231 */;
import useMountTimerDefault from "useMountTimer" /* 17232 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17233 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17234 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17235 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17236 */;
import MountMeasureDefault from "MountMeasure" /* 17237 */;
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
