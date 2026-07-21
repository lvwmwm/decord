// Module ID: 9156
// Function ID: 71789
// Name: MemberVerificationAlertUpdate
// Dependencies: []
// Exports: default

// Module 9156 (MemberVerificationAlertUpdate)
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const DownloadLinks = arg1(dependencyMap[2]).DownloadLinks;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles({ headerImage: {}, header: {}, text: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertUpdate.tsx");

export default function MemberVerificationAlertUpdate(onClose) {
  const tmp = callback3();
  let obj = {};
  const merged = Object.assign(onClose);
  const intl = arg1(dependencyMap[6]).intl;
  obj["confirmText"] = intl.string(arg1(dependencyMap[6]).t.b8siyY);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj["cancelText"] = intl2.string(arg1(dependencyMap[6]).t.ETE/oC);
  obj["onConfirm"] = function onConfirm() {
    return callback(closure_2[7]).openURL(constants.IOS);
  };
  obj["onCancel"] = onClose.onClose;
  obj = { source: importDefault(dependencyMap[8]), style: tmp.headerImage };
  const items = [callback(Image, obj), , ];
  obj = { delete: false, dispatch: 0, raw: 4, style: tmp.header };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj.children = intl3.string(arg1(dependencyMap[6]).t.kkjNHU);
  items[1] = callback(arg1(dependencyMap[9]).Text, obj);
  const obj1 = { style: tmp.text };
  const intl4 = arg1(dependencyMap[6]).intl;
  obj1.children = intl4.string(arg1(dependencyMap[6]).t.gnkqzQ);
  items[2] = callback(arg1(dependencyMap[9]).Text, obj1);
  obj["children"] = items;
  return callback2(importDefault(dependencyMap[5]), obj);
};
