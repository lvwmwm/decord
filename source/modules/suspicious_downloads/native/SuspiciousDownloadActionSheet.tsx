// Module ID: 12104
// Function ID: 93310
// Name: SuspiciousDownloadActionSheet
// Dependencies: [789905408, 131072, 485490688, 57, 31, 27, 33, 4126, 689, 5118, 8468, 1212, 12115, 10731]
// Exports: default

// Module 12104 (SuspiciousDownloadActionSheet)
import module_10731 from "module_10731";

importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { padding: require("_slicedToArray").space.PX_12 };
obj.container = obj;
obj.title = { textAlign: "center" };
obj.body = { textAlign: "center" };
let closure_5 = obj.createStyles(obj);
const result = module_10731.fileFinishedImporting("modules/suspicious_downloads/native/SuspiciousDownloadActionSheet.tsx");

export default function SuspiciousDownloadActionSheet(href) {
  const arg1 = href.href;
  const tmp = callback3();
  let obj = { startExpanded: true };
  obj = { style: items };
  const items = [tmp.container, { paddingBottom: importDefault(dependencyMap[4])().bottom }];
  obj = {};
  const items1 = [callback(arg1(dependencyMap[7]).TrafficConeSpotIllustration, {}), , ];
  const obj1 = { style: tmp.title };
  const intl = arg1(dependencyMap[9]).intl;
  obj1.children = intl.string(arg1(dependencyMap[9]).t.XtDo9Z);
  items1[1] = callback(arg1(dependencyMap[8]).Text, obj1);
  const obj2 = { style: tmp.body, variant: "text-md/medium" };
  const intl2 = arg1(dependencyMap[9]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[9]).t.L9yFko);
  items1[2] = callback(arg1(dependencyMap[8]).Text, obj2);
  obj.children = items1;
  const items2 = [callback2(arg1(dependencyMap[6]).Stack, obj), ];
  const obj3 = { spacing: 8 };
  const obj4 = {};
  const intl3 = arg1(dependencyMap[9]).intl;
  obj4.text = intl3.string(arg1(dependencyMap[9]).t.j7Vi2i);
  obj4.onPress = function onPress() {
    return callback(closure_2[11]).hideActionSheet();
  };
  const items3 = [callback(arg1(dependencyMap[10]).Button, obj4), ];
  const obj5 = {};
  const intl4 = arg1(dependencyMap[9]).intl;
  obj5.text = intl4.string(arg1(dependencyMap[9]).t./bHu89);
  obj5.onPress = function onPress() {
    callback(closure_2[11]).hideActionSheet();
    callback(closure_2[12])(href, true);
  };
  obj5.variant = "secondary";
  items3[1] = callback(arg1(dependencyMap[10]).Button, obj5);
  obj3.children = items3;
  items2[1] = callback2(arg1(dependencyMap[6]).Stack, obj3);
  obj.children = items2;
  obj.children = callback2(arg1(dependencyMap[6]).Stack, obj);
  return callback(arg1(dependencyMap[5]).BottomSheet, obj);
};
