// Module ID: 9166
// Function ID: 71847
// Name: MemberVerificationAlertIncomplete
// Dependencies: [31, 3948, 33, 624, 9145, 9152, 1212, 9156, 9167, 4543, 2]
// Exports: default

// Module 9166 (MemberVerificationAlertIncomplete)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
let result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertIncomplete.tsx");

export default function MemberVerificationAlertIncomplete(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let obj = Object.create(null);
  obj.guildId = 0;
  obj.onClose = 0;
  const merged = Object.assign(guildId, obj);
  obj = guildId(624);
  const items = [_isNativeReflectConstruct];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getJoinRequestGuild(guildId), items1);
  const items2 = [guildId, onClose];
  const items3 = [guildId, onClose];
  const callback = React.useCallback(() => {
    if (null != onClose) {
      onClose();
    }
    const result = guildId(outer1_2[4]).openMemberVerificationModal(guildId);
  }, items2);
  let name;
  const callback1 = React.useCallback(() => {
    if (null != onClose) {
      onClose();
    }
    let obj = guildId(outer1_2[5]);
    obj = { guildId };
    const intl = guildId(outer1_2[6]).intl;
    obj.subtitleText = intl.string(guildId(outer1_2[6]).t.fJwWVt);
    const intl2 = guildId(outer1_2[6]).intl;
    obj.confirmText = intl2.string(guildId(outer1_2[6]).t.OQFlFD);
    const result = obj.openMemberVerificationCancelPendingAlert(obj);
  }, items3);
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  if (null != name) {
    let intl2 = guildId(1212).intl;
    obj = { guildName: stateFromStores.name };
    let formatToPlainStringResult = intl2.formatToPlainString(guildId(1212).t.f5Jaw7, obj);
  } else {
    let intl = guildId(1212).intl;
    formatToPlainStringResult = intl.string(guildId(1212).t["0sTyEb"]);
  }
  const obj1 = {};
  const merged1 = Object.assign(merged);
  obj1["icon"] = guildId(9167).ListViewIcon;
  obj1["header"] = formatToPlainStringResult;
  const obj2 = {};
  const obj3 = { variant: "secondary" };
  const intl3 = guildId(1212).intl;
  obj3.text = intl3.string(guildId(1212).t.h3aGmv);
  obj3.onPress = callback;
  const items4 = [callback(guildId(4543).Button, obj3), ];
  const obj4 = {};
  const intl4 = guildId(1212).intl;
  obj4.text = intl4.string(guildId(1212).t.OQFlFD);
  obj4.variant = "destructive";
  obj4.onPress = callback1;
  items4[1] = callback(guildId(4543).Button, obj4);
  obj2.children = items4;
  obj1["buttons"] = callback2(closure_6, obj2);
  return callback(onClose(9156), obj1);
};
