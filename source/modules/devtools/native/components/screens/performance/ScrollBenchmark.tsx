// Module ID: 15659
// Function ID: 15660
// Name: ScrollBenchmark
// Dependencies: [19, 21, 15656, 5560, 2]
// Exports: default

// Module 15659 (ScrollBenchmark)
import noopAll from "noop" /* 19 */;
import TableRowInner from "TableRowInner" /* 5560 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15656 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/performance/ScrollBenchmark.tsx");

export default function ScrollBenchmark(subLabel) {
  let str = subLabel.subLabel;
  if (str === undefined) {
    str = "Records frame times while you scroll the content below.";
  }
  const tmp = useFrameMonitorDefault(subLabel.onResult);
  ({ monitoring, start } = tmp);
  let str2 = "Start scroll monitor";
  if (monitoring) {
    str2 = "Stop scroll monitor";
  }
  const obj = { label: str2, subLabel: str, variant: null, arrow: true, onPress: null };
  let str3;
  if (monitoring) {
    str3 = "danger";
  }
  obj[2] = str3;
  if (monitoring) {
    start = tmp.stop;
  }
  obj[4] = start;
  return jsx(TableRowInner.TableRow, { label: str2, subLabel: str, variant: null, arrow: true, onPress: null });
};
