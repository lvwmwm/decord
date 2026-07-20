// Module ID: 9149
// Function ID: 71748
// Name: MemberVerificationAlertRejected
// Dependencies: []
// Exports: default

// Module 9149 (MemberVerificationAlertRejected)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertRejected.tsx");

export default function MemberVerificationAlertRejected(guildId) {
  let canReapply;
  let isLoading;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const onClose = guildId.onClose;
  const importDefault = onClose;
  let obj = {};
  Object.setPrototypeOf(null);
  const merged = Object.assign(guildId, obj);
  let dependencyMap;
  let callback;
  let obj1 = arg1(dependencyMap[6]);
  const currentUserGuildJoinRequest = obj1.useCurrentUserGuildJoinRequest(guildId);
  let rejectionReason;
  if (null != currentUserGuildJoinRequest) {
    rejectionReason = currentUserGuildJoinRequest.rejectionReason;
  }
  let obj2 = arg1(dependencyMap[7]);
  const items = [closure_6];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    return id;
  });
  dependencyMap = stateFromStores;
  let obj3 = arg1(dependencyMap[8]);
  const canReapplyToRejectedMemberVerificationApplication = obj3.useCanReapplyToRejectedMemberVerificationApplication(guildId);
  ({ isLoading, canReapply } = canReapplyToRejectedMemberVerificationApplication);
  const items1 = [closure_7];
  const items2 = [guildId];
  const stateFromStores1 = arg1(dependencyMap[7]).useStateFromStores(items1, () => joinRequestGuild.getJoinRequestGuild(guildId), items2);
  const obj5 = arg1(dependencyMap[7]);
  const items3 = [closure_5];
  const items4 = [stateFromStores, guildId];
  const stateFromStores2 = arg1(dependencyMap[7]).useStateFromStores(items3, () => {
    let member = null;
    if (null != stateFromStores) {
      member = member.getMember(guildId, stateFromStores);
    }
    return member;
  }, items4);
  callback = stateFromStores2;
  // CreateGeneratorClosureLongIndex (0x67)
  const items5 = [guildId, , ];
  let isPending;
  const obj6 = arg1(dependencyMap[7]);
  if (null != stateFromStores2) {
    isPending = stateFromStores2.isPending;
  }
  items5[1] = isPending;
  items5[2] = onClose;
  let name;
  callback = React.useCallback(callback(tmp), items5);
  if (null != stateFromStores1) {
    name = stateFromStores1.name;
  }
  if (null != name) {
    const intl2 = arg1(dependencyMap[11]).intl;
    obj = { guildName: stateFromStores1.name };
    let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[11]).t.P+/gzA, obj);
  } else {
    const intl = arg1(dependencyMap[11]).intl;
    formatToPlainStringResult = intl.string(arg1(dependencyMap[11]).t.gBPcuP);
  }
  let formatToPlainStringResult1;
  if (null != rejectionReason) {
    if ("" !== rejectionReason) {
      const intl3 = arg1(dependencyMap[11]).intl;
      obj = { rejectionReason };
      formatToPlainStringResult1 = intl3.formatToPlainString(arg1(dependencyMap[11]).t.fU5PPM, obj);
    }
  }
  obj1 = {};
  const tmp11 = callback(tmp);
  const tmp23 = callback2;
  const merged1 = Object.assign(merged);
  obj1["icon"] = arg1(dependencyMap[13]).XSmallIcon;
  obj1["header"] = formatToPlainStringResult;
  obj1["subtitle"] = formatToPlainStringResult1;
  obj2 = {};
  if (canReapply) {
    obj3 = { loading: isLoading, disabled: isLoading, variant: "secondary" };
    const intl4 = arg1(dependencyMap[11]).intl;
    obj3.text = intl4.string(arg1(dependencyMap[11]).t.rpFCLs);
    obj3.onPress = callback;
    let tmp28 = callback2(arg1(dependencyMap[14]).Button, obj3);
  } else {
    tmp28 = null;
  }
  const items6 = [tmp28, guildId.secondaryButton];
  obj2.children = items6;
  obj1["buttons"] = closure_10(closure_9, obj2);
  return tmp23(importDefault(dependencyMap[12]), obj1);
};
