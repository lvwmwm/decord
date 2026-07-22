// Module ID: 13993
// Function ID: 106379
// Name: ResubscribedAlert
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 13993 (ResubscribedAlert)
import "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ View: closure_3, Image: closure_4 } = __exportStarResult1);
({ jsx: closure_5, jsxs: closure_6 } = __exportStarResult1);
__exportStarResult1 = {};
__exportStarResult1 = { backgroundColor: require("__exportStarResult1").colors.BACKGROUND_MOD_NORMAL };
__exportStarResult1.container = __exportStarResult1;
__exportStarResult1.body = { -262995365: null, 1183819946: null };
__exportStarResult1.centerText = { textAlign: "center" };
__exportStarResult1.headerImage = { "Null": null, "Null": null };
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx");

export default function ResubscribedAlert(onClose) {
  const tmp = __exportStarResult1();
  let obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.confirmText = intl.string(arg1(dependencyMap[6]).t.NX+WJN);
  obj.onConfirm = onClose.onClose;
  obj.style = tmp.container;
  obj = { style: tmp.body };
  obj = { source: importDefault(dependencyMap[7]), style: tmp.headerImage };
  const items = [callback(closure_4, obj), callback(arg1(dependencyMap[8]).Spacer, { size: 27 }), , , ];
  const obj1 = { cachedAt: true, edpbxy: "/assets/design/components/Icon/native/redesign/generated/images", style: tmp.centerText };
  const intl2 = arg1(dependencyMap[6]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[6]).t.oPV2cy);
  items[2] = callback(arg1(dependencyMap[9]).Text, obj1);
  items[3] = callback(arg1(dependencyMap[8]).Spacer, { size: 12 });
  const obj2 = { style: tmp.centerText };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj2.children = intl3.string(arg1(dependencyMap[6]).t.DdRizV);
  items[4] = callback(arg1(dependencyMap[9]).Text, obj2);
  obj.children = items;
  obj.children = callback2(closure_3, obj);
  return callback(importDefault(dependencyMap[5]), obj);
};
