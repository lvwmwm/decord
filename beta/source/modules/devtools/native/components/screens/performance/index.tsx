// Module ID: 17140
// Function ID: 17141
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17141, 17142, 17143, 17144, 17145, 17146, 17147, 17148]

// Module 17140 (FRAME_BUDGET_MS)
import types from "types" /* 17141 */;
import startFrameMonitor from "startFrameMonitor" /* 17142 */;
import useMountTimerDefault from "useMountTimer" /* 17143 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17144 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17145 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17146 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17147 */;
import MountMeasureDefault from "MountMeasure" /* 17148 */;
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
