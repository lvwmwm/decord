// Module ID: 17739
// Function ID: 17740
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17740, 17741, 17742, 17743, 17744, 17745, 17746, 17747]

// Module 17739 (FRAME_BUDGET_MS)
import types from "types" /* 17740 */;
import startFrameMonitor from "startFrameMonitor" /* 17741 */;
import useMountTimerDefault from "useMountTimer" /* 17742 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17743 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17744 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17745 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17746 */;
import MountMeasureDefault from "MountMeasure" /* 17747 */;
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
