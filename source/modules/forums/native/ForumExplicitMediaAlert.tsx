// Module ID: 8135
// Function ID: 64365
// Name: ForumExplicitMediaAlert
// Dependencies: []
// Exports: default

// Module 8135 (ForumExplicitMediaAlert)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { padding: importDefault(dependencyMap[4]).space.PX_16, alignItems: "stretch" };
obj.container = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.title = { marginBottom: importDefault(dependencyMap[4]).space.PX_16 };
const obj1 = { marginBottom: importDefault(dependencyMap[4]).space.PX_16 };
obj.body = { marginTop: importDefault(dependencyMap[4]).space.PX_16 };
const obj2 = { marginTop: importDefault(dependencyMap[4]).space.PX_16 };
obj.buttonContainer = { marginVertical: importDefault(dependencyMap[4]).space.PX_16 };
obj.text = { textAlign: "center" };
let closure_6 = obj.createStyles(obj);
const obj3 = { marginVertical: importDefault(dependencyMap[4]).space.PX_16 };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/forums/native/ForumExplicitMediaAlert.tsx");

export default function ForumExplicitMediaAlert(arg0) {
  let onClose;
  ({ channelId: closure_0, messageId: closure_1, onClose } = arg0);
  const dependencyMap = onClose;
  const tmp = callback3();
  let obj = { noDefaultButtons: true, style: tmp.container, onClose };
  obj = { style: items };
  const items = [, ];
  ({ title: arr[0], text: arr[1] } = tmp);
  const intl = arg1(dependencyMap[7]).intl;
  obj.children = intl.string(arg1(dependencyMap[7]).t.B3vFdU);
  const items1 = [callback(arg1(dependencyMap[6]).Text, obj), , , ];
  obj = { reportingObserverIntegration: "primary", rewriteFramesIntegration: false, browserProfilingIntegration: 700 };
  const items2 = [, ];
  ({ body: arr3[0], text: arr3[1] } = tmp);
  obj.style = items2;
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.children = intl2.string(arg1(dependencyMap[7]).t.i4AbAS);
  items1[1] = callback(arg1(dependencyMap[6]).Text, obj);
  const obj1 = { style: tmp.buttonContainer };
  const obj2 = { "Bool(true)": "rgb(0, 122, 255)", "Bool(true)": "rgb(242, 242, 242)" };
  const intl3 = arg1(dependencyMap[7]).intl;
  obj2.text = intl3.string(arg1(dependencyMap[7]).t.WAI6xu);
  obj2.onPress = onClose;
  obj1.children = callback(arg1(dependencyMap[8]).Button, obj2);
  items1[2] = callback(View, obj1);
  const obj3 = { style: tmp.text };
  const intl4 = arg1(dependencyMap[7]).intl;
  obj3.children = intl4.format(arg1(dependencyMap[7]).t.APQGZ+, {
    handleFalsePositiveHook() {
      onClose();
      const result = callback(onClose[10]).handleSenderFalsePositiveFlow(callback, closure_1);
    }
  });
  items1[3] = callback(arg1(dependencyMap[9]).TextWithIOSLinkWorkaround, obj3);
  obj.children = items1;
  return callback2(importDefault(dependencyMap[5]), obj);
};
