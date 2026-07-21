// Module ID: 9054
// Function ID: 71089
// Name: AcceptRequestConfirmationModal
// Dependencies: []
// Exports: default

// Module 9054 (AcceptRequestConfirmationModal)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { IS_SPAM: null, IS_GUILD_RESOURCE_CHANNEL: null, gap: importDefault(dependencyMap[4]).space.PX_8 };
obj.bodyText = obj;
obj.text = { textAlign: "center" };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/people/strangers/native/AcceptRequestConfirmationModal.tsx");

export default function AcceptRequestConfirmationModal(onConfirm) {
  const arg1 = onConfirm.onConfirm;
  const tmp = callback3();
  let obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.confirmText = intl.string(arg1(dependencyMap[6]).t.MMlhsr);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.cancelText = intl2.string(arg1(dependencyMap[6]).t.ETE/oC);
  obj.onConfirm = function onConfirm() {
    onConfirm();
    callback(closure_2[7]).close();
  };
  obj.onCancel = onConfirm.onCancel;
  obj = { style: tmp.bodyText };
  obj = { style: tmp.text };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj.children = intl3.string(arg1(dependencyMap[6]).t.eJzSDT);
  const items = [callback(arg1(dependencyMap[8]).Text, obj), ];
  const obj1 = { style: tmp.text };
  const intl4 = arg1(dependencyMap[6]).intl;
  obj1.children = intl4.string(arg1(dependencyMap[6]).t.GB4jUw);
  items[1] = callback(arg1(dependencyMap[8]).Text, obj1);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(importDefault(dependencyMap[5]), obj);
};
