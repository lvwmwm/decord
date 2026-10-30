// Module ID: 17694
// Function ID: 17695
// Name: ScrollBenchmark
// Dependencies: [19, 21, 17691, 6969, 2]
// Exports: default

// Module 17694 (ScrollBenchmark)
import Fragment from "Fragment" /* 21 */;
import TableRow2 from "TableRow" /* 6969 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17691 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/ScrollBenchmark.tsx");

export default function ScrollBenchmark(subLabel) {
  let monitoring;
  let start;
  let str3;
  let str = subLabel.subLabel;
  const onResult = subLabel.onResult;
  if (str === undefined) {
    str = "Records frame times while you scroll the content below.";
  }
  const tmp = useFrameMonitorDefault(onResult);
  ({ monitoring, start } = tmp);
  const stop = tmp.stop;
  let str2 = "Start scroll monitor";
  const TableRow = TableRow2.TableRow;
  const tmp2 = jsx;
  if (monitoring) {
    str2 = "Stop scroll monitor";
  }
  const obj = { label: str2, subLabel: str, variant: str3, arrow: true, onPress: start };
  str3 = undefined;
  if (monitoring) {
    str3 = "danger";
  }
  if (monitoring) {
    start = stop;
  }
  return tmp2(TableRow, obj);
};
