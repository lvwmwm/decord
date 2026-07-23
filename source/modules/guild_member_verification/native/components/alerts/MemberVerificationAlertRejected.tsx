// Module ID: 9161
// Function ID: 71825
// Name: MemberVerificationAlertRejected
// Dependencies: [5, 31, 1917, 1849, 3948, 33, 9162, 566, 9163, 9160, 9145, 1212, 9156, 5119, 4543, 2]
// Exports: default

// Module 9161 (MemberVerificationAlertRejected)
import closure_3 from "jsxProd";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertRejected.tsx");

export default function MemberVerificationAlertRejected(guildId) {
  let canReapply;
  let isLoading;
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let obj = { guildId: 0, secondaryButton: 0, onClose: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(guildId, obj);
  let stateFromStores;
  let stateFromStores2;
  let obj1 = guildId(stateFromStores[6]);
  const currentUserGuildJoinRequest = obj1.useCurrentUserGuildJoinRequest(guildId);
  let rejectionReason;
  if (null != currentUserGuildJoinRequest) {
    rejectionReason = currentUserGuildJoinRequest.rejectionReason;
  }
  let obj2 = guildId(stateFromStores[7]);
  const items = [closure_6];
  stateFromStores = obj2.useStateFromStores(items, () => {
    const currentUser = outer1_6.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    return id;
  });
  let obj3 = guildId(stateFromStores[8]);
  const canReapplyToRejectedMemberVerificationApplication = obj3.useCanReapplyToRejectedMemberVerificationApplication(guildId);
  ({ isLoading, canReapply } = canReapplyToRejectedMemberVerificationApplication);
  const items1 = [closure_7];
  const items2 = [guildId];
  const stateFromStores1 = guildId(stateFromStores[7]).useStateFromStores(items1, () => outer1_7.getJoinRequestGuild(guildId), items2);
  const obj5 = guildId(stateFromStores[7]);
  const items3 = [_isNativeReflectConstruct];
  const items4 = [stateFromStores, guildId];
  stateFromStores2 = guildId(stateFromStores[7]).useStateFromStores(items3, () => {
    let member = null;
    if (null != stateFromStores) {
      member = outer1_5.getMember(guildId, stateFromStores);
    }
    return member;
  }, items4);
  // CreateGeneratorClosureLongIndex (0x67)
  const items5 = [guildId, , ];
  let isPending;
  const obj6 = guildId(stateFromStores[7]);
  if (null != stateFromStores2) {
    isPending = stateFromStores2.isPending;
  }
  items5[1] = isPending;
  items5[2] = onClose;
  let name;
  const callback = React.useCallback(stateFromStores2(tmp), items5);
  if (null != stateFromStores1) {
    name = stateFromStores1.name;
  }
  if (null != name) {
    const intl2 = guildId(stateFromStores[11]).intl;
    obj = { guildName: stateFromStores1.name };
    let formatToPlainStringResult = intl2.formatToPlainString(guildId(stateFromStores[11]).t["P+/gzA"], obj);
  } else {
    const intl = guildId(stateFromStores[11]).intl;
    formatToPlainStringResult = intl.string(guildId(stateFromStores[11]).t.gBPcuP);
  }
  let formatToPlainStringResult1;
  if (null != rejectionReason) {
    if ("" !== rejectionReason) {
      const intl3 = guildId(stateFromStores[11]).intl;
      obj = { rejectionReason };
      formatToPlainStringResult1 = intl3.formatToPlainString(guildId(stateFromStores[11]).t.fU5PPM, obj);
    }
  }
  obj1 = {};
  const tmp11 = stateFromStores2(tmp);
  const tmp23 = callback;
  const merged1 = Object.assign(merged);
  obj1["icon"] = guildId(stateFromStores[13]).XSmallIcon;
  obj1["header"] = formatToPlainStringResult;
  obj1["subtitle"] = formatToPlainStringResult1;
  obj2 = {};
  if (canReapply) {
    obj3 = { loading: isLoading, disabled: isLoading, variant: "secondary" };
    const intl4 = guildId(stateFromStores[11]).intl;
    obj3.text = intl4.string(guildId(stateFromStores[11]).t.rpFCLs);
    obj3.onPress = callback;
    let tmp28 = callback(guildId(stateFromStores[14]).Button, obj3);
  } else {
    tmp28 = null;
  }
  const items6 = [tmp28, guildId.secondaryButton];
  obj2.children = items6;
  obj1["buttons"] = closure_10(closure_9, obj2);
  return tmp23(onClose(stateFromStores[12]), obj1);
};
