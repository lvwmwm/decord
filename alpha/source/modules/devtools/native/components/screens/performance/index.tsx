// Module ID: 17003
// Function ID: 17004
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17004, 17005, 17006, 17007, 17008, 17009, 17010, 17011]

// Module 17003 (FRAME_BUDGET_MS)
import types from "types" /* 17004 */;
import startFrameMonitor from "startFrameMonitor" /* 17005 */;
import useMountTimerDefault from "useMountTimer" /* 17006 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17007 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17008 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17009 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17010 */;
import MountMeasureDefault from "MountMeasure" /* 17011 */;
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
