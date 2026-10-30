// Module ID: 6909
// Function ID: 6910
// Name: MemberVerificationAlertCancelPending
// Dependencies: [19, 21, 6910, 6906, 1114, 5629, 2]
// Exports: default

// Module 6909 (MemberVerificationAlertCancelPending)
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6910 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx");

export default function MemberVerificationAlertCancelPending(guildId) {
  let confirmText;
  let intl;
  let intl4;
  let items1;
  let obj2;
  let onClose;
  let subtitleText;
  let tmp8;
  let tmp9;
  guildId = guildId.guildId;
  ({ confirmText, subtitleText, onClose } = guildId);
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, confirmText: 0, subtitleText: 0, onClose: 0 }));
  const items = [guildId, onClose];
  const callback = react.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const obj = GuildJoinRequestActionCreatorsDefault;
    const result = obj.removeGuildJoinRequest(guildId);
  }, items);
  let obj = { header: intl.string(guildId(1114).t.KYiN1Q), subtitle: subtitleText, buttons: tmp8(tmp9, obj2) };
  const tmp5 = onClose(6906);
  const merged1 = Object.assign(merged);
  intl = guildId(1114).intl;
  if (subtitleText == null) {
    const intl2 = tmp7(1114).intl;
    subtitleText = intl2.string(tmp7(1114).t.nQHxqm);
  }
  const Button = tmp7(5629).Button;
  tmp8 = closure_6;
  tmp9 = closure_5;
  if (confirmText == null) {
    const intl3 = tmp7(1114).intl;
    confirmText = intl3.string(tmp7(1114).t.OzHPde);
  }
  obj2 = { children: items1 };
  items1 = [closure_4(Button, { variant: "destructive", text: confirmText, onPress: callback }), ];
  const obj3 = { text: intl4.string(guildId(1114).t.bANR0R), variant: "secondary", onPress: onClose };
  const Button2 = tmp7(5629).Button;
  intl4 = tmp7(1114).intl;
  items1[1] = closure_4(Button2, obj3);
  return closure_4(tmp5, obj);
};
