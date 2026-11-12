// Module ID: 18260
// Function ID: 18261
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 18261, 18262, 18263, 18264, 18265, 18266, 18267, 18268]

// Module 18260 (FRAME_BUDGET_MS)
import types from "types" /* 18261 */;
import startFrameMonitor from "startFrameMonitor" /* 18262 */;
import useMountTimerDefault from "useMountTimer" /* 18263 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18264 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18265 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18266 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18267 */;
import MountMeasureDefault from "MountMeasure" /* 18268 */;
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
