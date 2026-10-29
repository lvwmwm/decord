// Module ID: 17616
// Function ID: 17617
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17617, 17618, 17619, 17620, 17621, 17622, 17623, 17624]

// Module 17616 (FRAME_BUDGET_MS)
import types from "types" /* 17617 */;
import startFrameMonitor from "startFrameMonitor" /* 17618 */;
import useMountTimerDefault from "useMountTimer" /* 17619 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17620 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17621 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17622 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17623 */;
import MountMeasureDefault from "MountMeasure" /* 17624 */;
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
