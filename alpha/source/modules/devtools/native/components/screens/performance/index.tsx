// Module ID: 18011
// Function ID: 18012
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 18012, 18013, 18014, 18015, 18016, 18017, 18018, 18019]

// Module 18011 (FRAME_BUDGET_MS)
import types from "types" /* 18012 */;
import startFrameMonitor from "startFrameMonitor" /* 18013 */;
import useMountTimerDefault from "useMountTimer" /* 18014 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18015 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18016 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18017 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18018 */;
import MountMeasureDefault from "MountMeasure" /* 18019 */;
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
