// Module ID: 8765
// Function ID: 69281
// Name: UnsupportedFeatureModal
// Dependencies: []
// Exports: default

// Module 8765 (UnsupportedFeatureModal)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/billing/native/UnsupportedFeatureModal.tsx");

export default function UnsupportedFeatureModal(onDismiss) {
  const arg1 = onDismiss.onDismiss;
  let obj = { initialRouteName: "Unsupported" };
  obj = {};
  obj = {
    title: onDismiss.title,
    headerLeft: arg1(dependencyMap[4]).getHeaderCloseButton(() => {
      let arr = callback(closure_2[5]);
      arr = arr.pop();
      if (null != onDismiss) {
        onDismiss();
      }
    }),
    render() {
      let obj = { style: { -9223372036854775808: "quests_completed", 9223372036854775807: "scalar", 0: 13, -9223372036854775808: "RED_NEW_33" } };
      obj = { INTEGRATION_CREATE: "gr", ConstraintReasonCode: null };
      const intl = onDismiss(closure_2[7]).intl;
      obj.children = intl.string(onDismiss(closure_2[7]).t.I22zuX);
      obj.children = callback2(onDismiss(closure_2[6]).Text, obj);
      return callback2(closure_3, obj);
    }
  };
  obj.Unsupported = obj;
  obj.screens = obj;
  return jsx(arg1(dependencyMap[3]).Navigator, obj);
};
