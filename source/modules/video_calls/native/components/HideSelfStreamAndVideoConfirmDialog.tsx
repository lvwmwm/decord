// Module ID: 15770
// Function ID: 120577
// Name: HideSelfStreamAndVideoConfirmDialog
// Dependencies: []
// Exports: default

// Module 15770 (HideSelfStreamAndVideoConfirmDialog)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).SelfStreamAndVideoAlertType;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles({ wrapper: { padding: 16 }, body: { paddingTop: 16 }, description: { lineHeight: 18 }, ctaLink: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/video_calls/native/components/HideSelfStreamAndVideoConfirmDialog.tsx");

export default function HideSelfStreamAndVideoConfirmDialog(arg0) {
  let onConfirm;
  let type;
  ({ type, onConfirm } = arg0);
  const arg1 = onConfirm;
  let obj = Object.create(null);
  obj.type = 0;
  obj.onConfirm = 0;
  const merged = Object.assign(arg0, obj);
  const tmp3 = callback3();
  if (type === constants.STREAM) {
    const intl2 = arg1(dependencyMap[5]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[5]).t./lFMWr);
  } else {
    const intl = arg1(dependencyMap[5]).intl;
    stringResult = intl.string(arg1(dependencyMap[5]).t.xzxhZS);
  }
  if (type === constants.STREAM) {
    const intl4 = arg1(dependencyMap[5]).intl;
    let stringResult1 = intl4.string(arg1(dependencyMap[5]).t.xaOX7d);
  } else {
    const intl3 = arg1(dependencyMap[5]).intl;
    stringResult1 = intl3.string(arg1(dependencyMap[5]).t.oU1p9O);
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj["title"] = stringResult;
  obj["style"] = tmp3.wrapper;
  const intl5 = arg1(dependencyMap[5]).intl;
  obj["cancelText"] = intl5.string(arg1(dependencyMap[5]).t.ETE/oC);
  let onClose;
  if (null != merged) {
    onClose = merged.onClose;
  }
  obj["onCancel"] = onClose;
  const intl6 = arg1(dependencyMap[5]).intl;
  obj["confirmText"] = intl6.string(arg1(dependencyMap[5]).t.cY+Oob);
  obj["onConfirm"] = onConfirm;
  obj = { style: tmp3.body };
  const obj1 = { style: tmp3.description, variant: "text-sm/medium", children: stringResult1 };
  const items = [callback(arg1(dependencyMap[7]).Text, obj1), ];
  const obj2 = {
    accessibilityRole: "link",
    style: items1,
    onPress() {
      const result = callback(closure_2[8]).updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: true });
      onConfirm();
    },
    variant: "text-sm/medium"
  };
  const items1 = [, ];
  ({ ctaLink: arr2[0], description: arr2[1] } = tmp3);
  const intl7 = arg1(dependencyMap[5]).intl;
  obj2.children = intl7.string(arg1(dependencyMap[5]).t.JdIQ/Y);
  items[1] = callback(arg1(dependencyMap[7]).Text, obj2);
  obj.children = items;
  obj["children"] = callback2(View, obj);
  return callback(importDefault(dependencyMap[6]), obj);
};
