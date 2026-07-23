// Module ID: 9155
// Function ID: 71773
// Name: MemberVerificationAlertPending
// Dependencies: [31, 33, 9152, 9156, 9157, 1212, 4543, 2]
// Exports: default

// Module 9155 (MemberVerificationAlertPending)
import result from "result";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
let result = require("openMemberVerificationCancelPendingAlert").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertPending.tsx");

export default function MemberVerificationAlertPending(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let obj = Object.create(null);
  obj.guildId = 0;
  obj.onClose = 0;
  const merged = Object.assign(guildId, obj);
  const items = [guildId, onClose];
  const callback = React.useCallback(() => {
    if (null != onClose) {
      onClose();
    }
    let obj = guildId(outer1_2[2]);
    obj = { guildId };
    const result = obj.openMemberVerificationCancelPendingAlert(obj);
  }, items);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["icon"] = guildId(9157).ClipboardListIcon;
  const intl = guildId(1212).intl;
  obj["header"] = intl.string(guildId(1212).t.zhfXbs);
  const intl2 = guildId(1212).intl;
  obj["subtitle"] = intl2.string(guildId(1212).t["SRM/e/"]);
  obj = {};
  const obj1 = { variant: "secondary" };
  const intl3 = guildId(1212).intl;
  obj1.text = intl3.string(guildId(1212).t.f293OM);
  obj1.onPress = onClose;
  const items1 = [callback(guildId(4543).Button, obj1), ];
  const obj2 = {};
  const intl4 = guildId(1212).intl;
  obj2.text = intl4.string(guildId(1212).t.mqtdmQ);
  obj2.variant = "destructive";
  obj2.onPress = callback;
  items1[1] = callback(guildId(4543).Button, obj2);
  obj.children = items1;
  obj["buttons"] = callback2(closure_5, obj);
  return callback(onClose(9156), obj);
};
