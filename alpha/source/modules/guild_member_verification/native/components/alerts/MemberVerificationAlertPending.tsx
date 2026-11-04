// Module ID: 7046
// Function ID: 7047
// Name: MemberVerificationAlertPending
// Dependencies: [19, 21, 7043, 7047, 7048, 1113, 5768, 2]
// Exports: default

// Module 7046 (MemberVerificationAlertPending)
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 7043 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertPending.tsx");

export default function MemberVerificationAlertPending(guildId) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let obj2;
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, onClose: 0 }));
  const items = [guildId, onClose];
  const callback = react.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const obj = MemberVerificationAlertActionCreators;
    const obj2 = { guildId };
    const result = obj.openMemberVerificationCancelPendingAlert(obj2);
  }, items);
  let obj = { icon: guildId(7048).ClipboardListIcon, header: intl.string(guildId(1113).t.zhfXbs), subtitle: intl2.string(guildId(1113).t["SRM/e/"]), buttons: closure_6(closure_5, obj2) };
  const tmp3 = onClose(7047);
  const merged1 = Object.assign(merged);
  intl = guildId(1113).intl;
  intl2 = guildId(1113).intl;
  obj2 = { children: items1 };
  const obj3 = { variant: "secondary", text: intl3.string(guildId(1113).t.f293OM), onPress: onClose };
  const Button = guildId(5768).Button;
  intl3 = guildId(1113).intl;
  items1 = [closure_4(Button, obj3), ];
  const obj4 = { text: intl4.string(guildId(1113).t.mqtdmQ), variant: "destructive", onPress: callback };
  const Button2 = guildId(5768).Button;
  intl4 = guildId(1113).intl;
  items1[1] = closure_4(Button2, obj4);
  return closure_4(tmp3, obj);
};
