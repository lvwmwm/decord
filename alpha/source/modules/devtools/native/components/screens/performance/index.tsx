// Module ID: 18058
// Function ID: 18059
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 18059, 18060, 18061, 18062, 18063, 18064, 18065, 18066]

// Module 18058 (FRAME_BUDGET_MS)
import types from "types" /* 18059 */;
import startFrameMonitor from "startFrameMonitor" /* 18060 */;
import useMountTimerDefault from "useMountTimer" /* 18061 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18062 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18063 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18064 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18065 */;
import MountMeasureDefault from "MountMeasure" /* 18066 */;
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
