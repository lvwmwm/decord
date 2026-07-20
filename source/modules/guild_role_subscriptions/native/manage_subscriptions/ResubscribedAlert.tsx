// Module ID: 13976
// Function ID: 106284
// Name: ResubscribedAlert
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 13976 (ResubscribedAlert)
import "result";
import result from "result";
import result from "result";
import result from "result";
import result from "result";

({ View: closure_3, Image: closure_4 } = result);
({ jsx: closure_5, jsxs: closure_6 } = result);
result = {};
result = { backgroundColor: require("result").colors.BACKGROUND_MOD_NORMAL };
result.container = result;
result.body = {};
result.centerText = { textAlign: "center" };
result.headerImage = { aze: null, azj: null };
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx");

export default function ResubscribedAlert(onClose) {
  const tmp = result();
  let obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.confirmText = intl.string(arg1(dependencyMap[6]).t.NX+WJN);
  obj.onConfirm = onClose.onClose;
  obj.style = tmp.container;
  obj = { style: tmp.body };
  obj = { source: importDefault(dependencyMap[7]), style: tmp.headerImage };
  const items = [callback(closure_4, obj), callback(arg1(dependencyMap[8]).Spacer, { size: 27 }), , , ];
  const obj1 = { style: tmp.centerText };
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
