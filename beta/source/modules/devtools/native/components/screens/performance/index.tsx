// Module ID: 17181
// Function ID: 17182
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17182, 17183, 17184, 17185, 17186, 17187, 17188, 17189]

// Module 17181 (FRAME_BUDGET_MS)
import types from "types" /* 17182 */;
import startFrameMonitor from "startFrameMonitor" /* 17183 */;
import useMountTimerDefault from "useMountTimer" /* 17184 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17185 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17186 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17187 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17188 */;
import MountMeasureDefault from "MountMeasure" /* 17189 */;
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
