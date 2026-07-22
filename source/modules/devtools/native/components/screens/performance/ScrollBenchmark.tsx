// Module ID: 14590
// Function ID: 109953
// Name: ScrollBenchmark
// Dependencies: []
// Exports: default

// Module 14590 (ScrollBenchmark)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/devtools/native/components/screens/performance/ScrollBenchmark.tsx");

export default function ScrollBenchmark(subLabel) {
  let monitoring;
  let start;
  let str = subLabel.subLabel;
  if (str === undefined) {
    str = "Records frame times while you scroll the content below.";
  }
  const tmp = importDefault(dependencyMap[2])(subLabel.onResult);
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
  return jsx(arg1(dependencyMap[3]).TableRow, obj);
};
