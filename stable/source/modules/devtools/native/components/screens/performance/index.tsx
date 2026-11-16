// Module ID: 18102
// Function ID: 18103
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 18103, 18104, 18105, 18106, 18107, 18108, 18109, 18110]

// Module 18102 (FRAME_BUDGET_MS)
import types from "types" /* 18103 */;
import startFrameMonitor from "startFrameMonitor" /* 18104 */;
import useMountTimerDefault from "useMountTimer" /* 18105 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18106 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18107 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18108 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18109 */;
import MountMeasureDefault from "MountMeasure" /* 18110 */;
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
