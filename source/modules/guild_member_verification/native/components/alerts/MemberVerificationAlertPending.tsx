// Module ID: 9147
// Function ID: 71719
// Name: MemberVerificationAlertPending
// Dependencies: []
// Exports: default

// Module 9147 (MemberVerificationAlertPending)
let closure_3 = importAll(dependencyMap[0]);
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertPending.tsx");

export default function MemberVerificationAlertPending(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const onClose = guildId.onClose;
  const importDefault = onClose;
  let obj = Object.create(null);
  obj.guildId = 0;
  obj.onClose = 0;
  const merged = Object.assign(guildId, obj);
  const items = [guildId, onClose];
  const callback = React.useCallback(() => {
    if (null != onClose) {
      onClose();
    }
    let obj = guildId(closure_2[2]);
    obj = { guildId };
    const result = obj.openMemberVerificationCancelPendingAlert(obj);
  }, items);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["icon"] = arg1(dependencyMap[4]).ClipboardListIcon;
  const intl = arg1(dependencyMap[5]).intl;
  obj["header"] = intl.string(arg1(dependencyMap[5]).t.zhfXbs);
  const intl2 = arg1(dependencyMap[5]).intl;
  obj["subtitle"] = intl2.string(arg1(dependencyMap[5]).t.SRM/e/);
  obj = {};
  const obj1 = { variant: "secondary" };
  const intl3 = arg1(dependencyMap[5]).intl;
  obj1.text = intl3.string(arg1(dependencyMap[5]).t.f293OM);
  obj1.onPress = onClose;
  const items1 = [callback(arg1(dependencyMap[6]).Button, obj1), ];
  const obj2 = {};
  const intl4 = arg1(dependencyMap[5]).intl;
  obj2.text = intl4.string(arg1(dependencyMap[5]).t.mqtdmQ);
  obj2.variant = "destructive";
  obj2.onPress = callback;
  items1[1] = callback(arg1(dependencyMap[6]).Button, obj2);
  obj.children = items1;
  obj["buttons"] = callback2(closure_5, obj);
  return callback(importDefault(dependencyMap[3]), obj);
};
