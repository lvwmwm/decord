// Module ID: 16934
// Function ID: 16935
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16935, 16936, 16937, 16938, 16939, 16940, 16941, 16942]

// Module 16934 (FRAME_BUDGET_MS)
import types from "types" /* 16935 */;
import startFrameMonitor from "startFrameMonitor" /* 16936 */;
import useMountTimerDefault from "useMountTimer" /* 16937 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16938 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16939 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16940 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16941 */;
import MountMeasureDefault from "MountMeasure" /* 16942 */;
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
