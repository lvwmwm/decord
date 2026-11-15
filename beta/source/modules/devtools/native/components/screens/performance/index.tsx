// Module ID: 18103
// Function ID: 18104
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 18104, 18105, 18106, 18107, 18108, 18109, 18110, 18111]

// Module 18103 (FRAME_BUDGET_MS)
import types from "types" /* 18104 */;
import startFrameMonitor from "startFrameMonitor" /* 18105 */;
import useMountTimerDefault from "useMountTimer" /* 18106 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18107 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18108 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18109 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18110 */;
import MountMeasureDefault from "MountMeasure" /* 18111 */;
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
