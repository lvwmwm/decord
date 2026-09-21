// Module ID: 16031
// Function ID: 16032
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16032, 16033, 16034, 16035, 16036, 16037, 16038, 16039]

// Module 16031 (FRAME_BUDGET_MS)
import startFrameMonitor from "startFrameMonitor" /* 16033 */;
import useMountTimerDefault from "useMountTimer" /* 16034 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16035 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16036 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16037 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16038 */;
import MountMeasureDefault from "MountMeasure" /* 16039 */;
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
