// Module ID: 18094
// Function ID: 18095
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 18095, 18096, 18097, 18098, 18099, 18100, 18101, 18102]

// Module 18094 (FRAME_BUDGET_MS)
import types from "types" /* 18095 */;
import startFrameMonitor from "startFrameMonitor" /* 18096 */;
import useMountTimerDefault from "useMountTimer" /* 18097 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18098 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18099 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18100 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18101 */;
import MountMeasureDefault from "MountMeasure" /* 18102 */;
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
