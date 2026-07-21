// Module ID: 9158
// Function ID: 71793
// Name: MemberVerificationAlertIncomplete
// Dependencies: []
// Exports: default

// Module 9158 (MemberVerificationAlertIncomplete)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertIncomplete.tsx");

export default function MemberVerificationAlertIncomplete(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const onClose = guildId.onClose;
  const importDefault = onClose;
  let obj = Object.create(null);
  obj.guildId = 0;
  obj.onClose = 0;
  const merged = Object.assign(guildId, obj);
  obj = arg1(dependencyMap[3]);
  const items = [closure_4];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => joinRequestGuild.getJoinRequestGuild(guildId), items1);
  const items2 = [guildId, onClose];
  const items3 = [guildId, onClose];
  const callback = React.useCallback(() => {
    if (null != onClose) {
      onClose();
    }
    const result = guildId(closure_2[4]).openMemberVerificationModal(guildId);
  }, items2);
  let name;
  const callback1 = React.useCallback(() => {
    if (null != onClose) {
      onClose();
    }
    let obj = guildId(closure_2[5]);
    obj = { guildId };
    const intl = guildId(closure_2[6]).intl;
    obj.subtitleText = intl.string(guildId(closure_2[6]).t.fJwWVt);
    const intl2 = guildId(closure_2[6]).intl;
    obj.confirmText = intl2.string(guildId(closure_2[6]).t.OQFlFD);
    const result = obj.openMemberVerificationCancelPendingAlert(obj);
  }, items3);
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  if (null != name) {
    const intl2 = arg1(dependencyMap[6]).intl;
    obj = { guildName: stateFromStores.name };
    let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[6]).t.f5Jaw7, obj);
  } else {
    const intl = arg1(dependencyMap[6]).intl;
    formatToPlainStringResult = intl.string(arg1(dependencyMap[6]).t.0sTyEb);
  }
  const obj1 = {};
  const merged1 = Object.assign(merged);
  obj1["icon"] = arg1(dependencyMap[8]).ListViewIcon;
  obj1["header"] = formatToPlainStringResult;
  const obj2 = {};
  const obj3 = { variant: "secondary" };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[6]).t.h3aGmv);
  obj3.onPress = callback;
  const items4 = [callback(arg1(dependencyMap[9]).Button, obj3), ];
  const obj4 = {};
  const intl4 = arg1(dependencyMap[6]).intl;
  obj4.text = intl4.string(arg1(dependencyMap[6]).t.OQFlFD);
  obj4.variant = "destructive";
  obj4.onPress = callback1;
  items4[1] = callback(arg1(dependencyMap[9]).Button, obj4);
  obj2.children = items4;
  obj1["buttons"] = callback2(closure_6, obj2);
  return callback(importDefault(dependencyMap[7]), obj1);
};
