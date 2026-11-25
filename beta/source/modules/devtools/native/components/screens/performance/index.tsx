// Module ID: 17177
// Function ID: 17178
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17178, 17179, 17180, 17181, 17182, 17183, 17184, 17185]

// Module 17177 (FRAME_BUDGET_MS)
import types from "types" /* 17178 */;
import startFrameMonitor from "startFrameMonitor" /* 17179 */;
import useMountTimerDefault from "useMountTimer" /* 17180 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17181 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17182 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17183 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17184 */;
import MountMeasureDefault from "MountMeasure" /* 17185 */;
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
