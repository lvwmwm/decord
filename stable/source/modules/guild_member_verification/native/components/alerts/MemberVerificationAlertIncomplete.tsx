// Module ID: 7260
// Function ID: 7261
// Name: MemberVerificationAlertIncomplete
// Dependencies: [19, 5046, 21, 563, 6944, 6908, 1113, 6912, 7261, 5634, 2]
// Exports: default

// Module 7260 (MemberVerificationAlertIncomplete)
import intl5 from "intl" /* 1113 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6908 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6944 */;
import react from "react" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5046 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertIncomplete.tsx");

export default function MemberVerificationAlertIncomplete(guildId) {
  let formatToPlainStringResult;
  let intl3;
  let intl4;
  let items4;
  let obj4;
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, onClose: 0 }));
  let obj = guildId(563);
  const items = [UserGuildJoinRequestStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildJoinRequestStore.getJoinRequestGuild(guildId), items1);
  const items2 = [guildId, onClose];
  const items3 = [guildId, onClose];
  const callback = react.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const obj = MemberVerificationModalActionCreators;
    const result = obj.openMemberVerificationModal(guildId);
  }, items2);
  let name;
  const callback1 = react.useCallback(() => {
    let intl;
    let intl2;
    if (onClose != null) {
      tmp();
    }
    const obj = { guildId, subtitleText: intl.string(intl5.t.fJwWVt), confirmText: intl2.string(intl5.t.OQFlFD) };
    const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
    MemberVerificationAlertActionCreators;
    intl = intl5.intl;
    intl2 = intl5.intl;
    const result = openMemberVerificationCancelPendingAlert(obj);
  }, items3);
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (null != name) {
    let intl2 = tmp2(1113).intl;
    const obj2 = { guildName: stateFromStores.name };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1113).t.f5Jaw7, obj2);
  } else {
    let intl = tmp2(1113).intl;
    formatToPlainStringResult = intl.string(tmp2(1113).t["0sTyEb"]);
  }
  const obj3 = { icon: guildId(7261).ListViewIcon, header: formatToPlainStringResult, buttons: closure_7(closure_6, obj4) };
  const tmp9 = onClose(6912);
  const merged1 = Object.assign(merged);
  obj4 = { children: items4 };
  const obj5 = { variant: "secondary", text: intl3.string(guildId(1113).t.h3aGmv), onPress: callback };
  const Button = tmp2(5634).Button;
  intl3 = tmp2(1113).intl;
  items4 = [closure_5(Button, obj5), ];
  const obj6 = { text: intl4.string(guildId(1113).t.OQFlFD), variant: "destructive", onPress: callback1 };
  const Button2 = tmp2(5634).Button;
  intl4 = tmp2(1113).intl;
  items4[1] = closure_5(Button2, obj6);
  return closure_5(tmp9, obj3);
};
