// Module ID: 12763
// Function ID: 97845
// Name: ActivateDeviceError
// Dependencies: []
// Exports: ActivateDeviceError

// Module 12763 (ActivateDeviceError)
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[3]).createStyles({ image: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/activate_device/native/ActivateDeviceError.tsx");

export const ActivateDeviceError = function ActivateDeviceError(onRetry) {
  let obj = {};
  obj = { source: importDefault(dependencyMap[4]), style: callback3().image };
  const items = [callback(closure_3, obj), , ];
  obj = { style: importDefault(dependencyMap[5]).innerContent };
  const obj1 = { INTEGRATION_CREATE: 182714370, ConstraintReasonCode: 1091633154, style: importDefault(dependencyMap[5]).centerText };
  const intl = arg1(dependencyMap[7]).intl;
  obj1.children = intl.string(arg1(dependencyMap[7]).t.3dgwPD);
  const items1 = [callback(arg1(dependencyMap[6]).Text, obj1), ];
  const obj2 = { style: importDefault(dependencyMap[5]).centerText };
  const intl2 = arg1(dependencyMap[7]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[7]).t./GAO1P);
  items1[1] = callback(arg1(dependencyMap[6]).Text, obj2);
  obj.children = items1;
  items[1] = callback2(closure_4, obj);
  const obj3 = { size: "lg" };
  const intl3 = arg1(dependencyMap[7]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[7]).t.5911Lb);
  obj3.onPress = onRetry.onRetry;
  obj3.grow = true;
  items[2] = callback(arg1(dependencyMap[8]).Button, obj3);
  obj.children = items;
  return callback2(closure_7, obj);
};
