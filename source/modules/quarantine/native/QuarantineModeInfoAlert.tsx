// Module ID: 5320
// Function ID: 45241
// Name: QuarantineModeInfoAlert
// Dependencies: []
// Exports: default

// Module 5320 (QuarantineModeInfoAlert)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = {};
const tmp3 = arg1(dependencyMap[2]);
const merged = Object.assign(importDefault(dependencyMap[4])(arg1(dependencyMap[1]).Fonts.PRIMARY_BOLD, importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj["textAlign"] = "center";
obj["marginVertical"] = 12;
obj.header = obj;
obj.text = { p: -0.0014069081515246523, parent: -0.0001058445630777106 };
let closure_5 = obj.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/quarantine/native/QuarantineModeInfoAlert.tsx");

export default function QuarantineModeInfoAlert(onClose) {
  const tmp = callback3();
  let obj = { onClose: onClose.onClose };
  obj = { style: tmp.header };
  const intl = arg1(dependencyMap[8]).intl;
  obj.children = intl.string(arg1(dependencyMap[8]).t.EouHwv);
  const items = [callback(arg1(dependencyMap[7]).LegacyText, obj), ];
  obj = { style: tmp.text, variant: "text-md/medium" };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.children = intl2.string(arg1(dependencyMap[8]).t.zNPBMA);
  items[1] = callback(arg1(dependencyMap[9]).Text, obj);
  obj.children = items;
  return callback2(importDefault(dependencyMap[6]), obj);
};
