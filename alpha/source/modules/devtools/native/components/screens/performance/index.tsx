// Module ID: 17731
// Function ID: 17732
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17732, 17733, 17734, 17735, 17736, 17737, 17738, 17739]

// Module 17731 (FRAME_BUDGET_MS)
import types from "types" /* 17732 */;
import startFrameMonitor from "startFrameMonitor" /* 17733 */;
import useMountTimerDefault from "useMountTimer" /* 17734 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17735 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17736 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17737 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17738 */;
import MountMeasureDefault from "MountMeasure" /* 17739 */;
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
