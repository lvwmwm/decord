// Module ID: 18265
// Function ID: 18266
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 18266, 18267, 18268, 18269, 18270, 18271, 18272, 18273]

// Module 18265 (FRAME_BUDGET_MS)
import types from "types" /* 18266 */;
import startFrameMonitor from "startFrameMonitor" /* 18267 */;
import useMountTimerDefault from "useMountTimer" /* 18268 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18269 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18270 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18271 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18272 */;
import MountMeasureDefault from "MountMeasure" /* 18273 */;
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
