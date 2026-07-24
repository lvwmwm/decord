// Module ID: 14752
// Function ID: 112438
// Name: ScrollBenchmark
// Dependencies: [31, 33, 14749, 5165, 2]
// Exports: default

// Module 14752 (ScrollBenchmark)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useFrameMonitor").fileFinishedImporting("modules/devtools/native/components/screens/performance/ScrollBenchmark.tsx");

export default function ScrollBenchmark(subLabel) {
  let monitoring;
  let start;
  let str = subLabel.subLabel;
  if (str === undefined) {
    str = "Records frame times while you scroll the content below.";
  }
  const tmp = importDefault(14749)(subLabel.onResult);
  ({ monitoring, start } = tmp);
  const obj = {};
  let str2 = "Start scroll monitor";
  if (monitoring) {
    str2 = "Stop scroll monitor";
  }
  obj.label = str2;
  obj.subLabel = str;
  let str3;
  if (monitoring) {
    str3 = "danger";
  }
  obj.variant = str3;
  obj.arrow = true;
  if (monitoring) {
    start = tmp.stop;
  }
  obj.onPress = start;
  return jsx(require(5165) /* TableRowInner */.TableRow, {});
};
