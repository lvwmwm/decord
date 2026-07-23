// Module ID: 9159
// Function ID: 71781
// Name: MemberVerificationAlertCancelPending
// Dependencies: [31, 33, 9160, 9156, 1212, 4543, 2]
// Exports: default

// Module 9159 (MemberVerificationAlertCancelPending)
import result from "result";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
let result = require("_fetchGuildJoinRequests").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx");

export default function MemberVerificationAlertCancelPending(guildId) {
  let confirmText;
  let onClose;
  let subtitleText;
  guildId = guildId.guildId;
  ({ confirmText, subtitleText, onClose } = guildId);
  let obj = { guildId: 0, confirmText: 0, subtitleText: 0, onClose: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(guildId, obj);
  const items = [guildId, onClose];
  const callback = React.useCallback(() => {
    if (null != onClose) {
      onClose();
    }
    const result = onClose(outer1_2[2]).removeGuildJoinRequest(guildId);
  }, items);
  obj = {};
  const merged1 = Object.assign(merged);
  const intl = guildId(1212).intl;
  obj["header"] = intl.string(guildId(1212).t.KYiN1Q);
  if (null == subtitleText) {
    const intl2 = guildId(1212).intl;
    subtitleText = intl2.string(guildId(1212).t.nQHxqm);
  }
  obj["subtitle"] = subtitleText;
  obj = {};
  const obj1 = { variant: "destructive" };
  if (null == confirmText) {
    const intl3 = guildId(1212).intl;
    confirmText = intl3.string(guildId(1212).t.OzHPde);
  }
  obj1.text = confirmText;
  obj1.onPress = callback;
  const items1 = [callback(guildId(4543).Button, obj1), ];
  const obj2 = {};
  const intl4 = guildId(1212).intl;
  obj2.text = intl4.string(guildId(1212).t.bANR0R);
  obj2.variant = "secondary";
  obj2.onPress = onClose;
  items1[1] = callback(guildId(4543).Button, obj2);
  obj.children = items1;
  obj["buttons"] = closure_6(closure_5, obj);
  return callback(onClose(9156), obj);
};
