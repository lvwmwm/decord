// Module ID: 17887
// Function ID: 17888
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17888, 17889, 17890, 17891, 17892, 17893, 17894, 17895]

// Module 17887 (FRAME_BUDGET_MS)
import types from "types" /* 17888 */;
import startFrameMonitor from "startFrameMonitor" /* 17889 */;
import useMountTimerDefault from "useMountTimer" /* 17890 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17891 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17892 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17893 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17894 */;
import MountMeasureDefault from "MountMeasure" /* 17895 */;
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
