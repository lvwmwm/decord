// Module ID: 16429
// Function ID: 126927
// Name: UpdateAppScreen
// Dependencies: []
// Exports: default

// Module 16429 (UpdateAppScreen)
const _module = require(dependencyMap[0]);
({ NativeModules: closure_3, View: closure_4 } = _module);
const _module1 = require(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = _module1);
const _module2 = require(dependencyMap[2]);
let obj = {};
obj = { gap: importDefault(dependencyMap[3]).space.PX_8 };
obj.container = obj;
obj.buttonContainer = { marginTop: importDefault(dependencyMap[3]).space.PX_8 };
let closure_7 = _module2.createStyles(obj);
const _module3 = require(dependencyMap[8]);
const result = _module3.fileFinishedImporting("modules/safety_flows/native/UpdateAppScreen.tsx");

export default function UpdateAppScreen() {
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { variant: "heading-lg/semibold" };
  const intl = require(dependencyMap[5]).intl;
  obj.children = intl.string(importDefault(dependencyMap[6]).yxqMCD);
  const items = [callback(require(dependencyMap[4]).Text, obj), , ];
  obj = {};
  const intl2 = require(dependencyMap[5]).intl;
  obj.children = intl2.string(importDefault(dependencyMap[6]).VBZJJg);
  items[1] = callback(require(dependencyMap[4]).Text, obj);
  const obj1 = { style: tmp.buttonContainer };
  const obj2 = {
    onPress() {
      const BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    }
  };
  const intl3 = require(dependencyMap[5]).intl;
  obj2.text = intl3.string(importDefault(dependencyMap[6]).o4D6fm);
  obj2.variant = "primary";
  obj2.size = "md";
  obj1.children = callback(require(dependencyMap[7]).Button, obj2);
  items[2] = callback(closure_4, obj1);
  obj.children = items;
  return callback2(closure_4, obj);
};
