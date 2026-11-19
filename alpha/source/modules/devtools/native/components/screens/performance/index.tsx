// Module ID: 17222
// Function ID: 17223
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17223, 17224, 17225, 17226, 17227, 17228, 17229, 17230]

// Module 17222 (FRAME_BUDGET_MS)
import types from "types" /* 17223 */;
import startFrameMonitor from "startFrameMonitor" /* 17224 */;
import useMountTimerDefault from "useMountTimer" /* 17225 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17226 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17227 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17228 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17229 */;
import MountMeasureDefault from "MountMeasure" /* 17230 */;
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
