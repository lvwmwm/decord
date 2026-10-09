// Module ID: 16021
// Function ID: 16022
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16022, 16023, 16024, 16025, 16026, 16027, 16028, 16029]

// Module 16021 (FRAME_BUDGET_MS)
import types from "types" /* 16022 */;
import startFrameMonitor from "startFrameMonitor" /* 16023 */;
import useMountTimerDefault from "useMountTimer" /* 16024 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16025 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16026 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16027 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16028 */;
import MountMeasureDefault from "MountMeasure" /* 16029 */;
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
