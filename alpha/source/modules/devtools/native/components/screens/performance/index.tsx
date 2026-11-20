// Module ID: 17046
// Function ID: 17047
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17047, 17048, 17049, 17050, 17051, 17052, 17053, 17054]

// Module 17046 (FRAME_BUDGET_MS)
import types from "types" /* 17047 */;
import startFrameMonitor from "startFrameMonitor" /* 17048 */;
import useMountTimerDefault from "useMountTimer" /* 17049 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17050 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17051 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17052 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17053 */;
import MountMeasureDefault from "MountMeasure" /* 17054 */;
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
