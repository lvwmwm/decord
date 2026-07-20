// Module ID: 12762
// Function ID: 97842
// Name: ActivateDeviceSuccess
// Dependencies: []
// Exports: ActivateDeviceSuccess

// Module 12762 (ActivateDeviceSuccess)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5, Fragment: closure_6 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ image: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/activate_device/native/ActivateDeviceSuccess.tsx");

export const ActivateDeviceSuccess = function ActivateDeviceSuccess(onComplete) {
  let data;
  let successImage;
  ({ data, successImage } = onComplete);
  if (null != data.twoWayLinkCode) {
    const intl2 = arg1(dependencyMap[4]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[4]).t.QhATl2);
  } else {
    const scopes = data.scopes;
    stringResult = null;
    if (scopes.some((arg0) => callback(closure_2[5]).isSocialLayerUmbrellaScope(arg0))) {
      const intl = arg1(dependencyMap[4]).intl;
      stringResult = intl.string(arg1(dependencyMap[4]).t.vBPvK3);
    }
  }
  let obj = {};
  let tmp9 = null;
  if (null != successImage) {
    obj = {};
    let obj2 = arg1(dependencyMap[7]);
    obj.source = obj2.makeSource(successImage);
    obj.style = tmp.image;
    obj.resizeMode = "contain";
    tmp9 = callback(importDefault(dependencyMap[6]), obj);
    const tmp13 = importDefault(dependencyMap[6]);
  }
  const items = [tmp9, , ];
  obj = { style: importDefault(dependencyMap[8]).innerContent };
  const obj1 = { INTEGRATION_CREATE: 182714370, ConstraintReasonCode: 1091633154, style: importDefault(dependencyMap[8]).centerText };
  const intl3 = arg1(dependencyMap[4]).intl;
  obj1.children = intl3.string(arg1(dependencyMap[4]).t.qDtJmD);
  const items1 = [callback(arg1(dependencyMap[9]).Text, obj1), ];
  let tmp17 = null;
  if (null != stringResult) {
    obj2 = { style: importDefault(dependencyMap[8]).centerText, children: stringResult };
    tmp17 = callback(arg1(dependencyMap[9]).Text, obj2);
  }
  items1[1] = tmp17;
  obj.children = items1;
  items[1] = closure_5(View, obj);
  const obj3 = { size: "lg" };
  const intl4 = arg1(dependencyMap[4]).intl;
  obj3.text = intl4.string(arg1(dependencyMap[4]).t.cpT0Cq);
  obj3.onPress = onComplete.onComplete;
  obj3.grow = true;
  items[2] = callback(arg1(dependencyMap[10]).Button, obj3);
  obj.children = items;
  return closure_5(closure_6, obj);
};
