// Module ID: 16045
// Function ID: 16046
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16046, 16047, 16048, 16049, 16050, 16051, 16052, 16053]

// Module 16045 (FRAME_BUDGET_MS)
import startFrameMonitor from "startFrameMonitor" /* 16047 */;
import useMountTimerDefault from "useMountTimer" /* 16048 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16049 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16050 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16051 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16052 */;
import MountMeasureDefault from "MountMeasure" /* 16053 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/index.tsx");
for (const key10018 in require("types")) {
  arg5[key10018] = require("types")[key10018];
  continue;
}

export const FRAME_BUDGET_MS = startFrameMonitor.FRAME_BUDGET_MS;
export const startFrameMonitor = startFrameMonitor.startFrameMonitor;
export const useMountTimer = useMountTimerDefault;
export const useFrameMonitor = useFrameMonitorDefault;
export const useBenchmarkResults = useBenchmarkResultsDefault;
export const BenchmarkResultsList = BenchmarkResultsListDefault;
export const ScrollBenchmark = ScrollBenchmarkDefault;
export const MountMeasure = MountMeasureDefault;
