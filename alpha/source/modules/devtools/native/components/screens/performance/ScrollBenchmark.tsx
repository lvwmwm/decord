// Module ID: 15631
// Function ID: 15632
// Name: ScrollBenchmark
// Dependencies: [19, 21, 558, 576, 15628, 6000, 2]

// Module 15631 (ScrollBenchmark)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15628 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let subLabel;

let tmp;
const TableRow2 = tmp(6000);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((subLabel) => {
  let monitoring;
  let start;
  const obj = react2;
  const cResult = obj.c(5);
  subLabel = subLabel.subLabel;
  let str = "Records frame times while you scroll the content below.";
  const onResult = subLabel.onResult;
  if (undefined !== subLabel) {
    str = subLabel;
  }
  const tmp4 = useFrameMonitorDefault(onResult);
  ({ monitoring, start } = tmp4);
  let str2 = "Start scroll monitor";
  const stop = tmp4.stop;
  if (monitoring) {
    str2 = "Stop scroll monitor";
  }
  let str3;
  if (monitoring) {
    str3 = "danger";
  }
  if (monitoring) {
    start = stop;
  }
  if (cResult[0] === str) {
    if (cResult[1] === str2) {
      if (cResult[2] === str3) {
        let tmp5;
        if (cResult[3] === start) {
          tmp5 = cResult[4];
        }
        return tmp5;
      }
    }
  }
  const tmp6 = jsx(TableRow2.TableRow, { label: str2, subLabel: str, variant: str3, arrow: true, onPress: start });
  cResult[0] = str;
  cResult[1] = str2;
  cResult[2] = str3;
  cResult[3] = start;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : ((subLabel) => {
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
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/ScrollBenchmark.tsx");

export default tmp3;
