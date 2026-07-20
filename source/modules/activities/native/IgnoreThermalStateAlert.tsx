// Module ID: 10540
// Function ID: 82353
// Name: IgnoreThermalStateAlert
// Dependencies: []
// Exports: IgnoreThermalStateAlert

// Module 10540 (IgnoreThermalStateAlert)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).createStyles({ text: { "Bool(false)": 2013266936, "Bool(false)": 1140851704, "Bool(false)": 192532 }, header: { textAlign: "center" } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/activities/native/IgnoreThermalStateAlert.tsx");

export const IgnoreThermalStateAlert = function IgnoreThermalStateAlert(onConfirm) {
  const arg1 = onConfirm.onConfirm;
  let obj = Object.create(null);
  obj.onConfirm = 0;
  const merged = Object.assign(onConfirm, obj);
  const tmp3 = callback3();
  obj = {};
  const merged1 = Object.assign(merged);
  const intl = arg1(dependencyMap[4]).intl;
  obj["cancelText"] = intl.string(arg1(dependencyMap[4]).t.1fRDnT);
  obj["onCancel"] = function onCancel() {
    if (null != onConfirm) {
      onConfirm();
    }
    const result = onConfirm(closure_2[5]).disregardSeriousThermalState();
  };
  const intl2 = arg1(dependencyMap[4]).intl;
  obj["confirmText"] = intl2.string(arg1(dependencyMap[4]).t.oEAioF);
  obj = { Promise: false, marginTop: 0, flags: 4, style: tmp3.header };
  const intl3 = arg1(dependencyMap[4]).intl;
  obj.children = intl3.string(arg1(dependencyMap[4]).t.v5X4fZ);
  const items = [callback(arg1(dependencyMap[6]).Text, obj), ];
  const obj1 = { style: tmp3.text, variant: "text-md/medium" };
  const intl4 = arg1(dependencyMap[4]).intl;
  obj1.children = intl4.string(arg1(dependencyMap[4]).t.VOgTjy);
  items[1] = callback(arg1(dependencyMap[6]).Text, obj1);
  obj["children"] = items;
  return callback2(importDefault(dependencyMap[3]), obj);
};
