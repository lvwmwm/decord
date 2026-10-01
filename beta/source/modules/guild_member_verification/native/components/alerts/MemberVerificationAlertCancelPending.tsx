// Module ID: 5852
// Function ID: 5853
// Name: MemberVerificationAlertCancelPending
// Dependencies: [19, 21, 5853, 5849, 1115, 5281, 2]
// Exports: default

// Module 5852 (MemberVerificationAlertCancelPending)
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 5853 */;
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
  let obj = { header: intl.string(guildId(1115).t.KYiN1Q), subtitle: subtitleText, buttons: tmp8(tmp9, obj2) };
  const tmp5 = onClose(5849);
  const merged1 = Object.assign(merged);
  intl = guildId(1115).intl;
  if (subtitleText == null) {
    const intl2 = tmp7(1115).intl;
    subtitleText = intl2.string(tmp7(1115).t.nQHxqm);
  }
  const Button = tmp7(5281).Button;
  tmp8 = closure_6;
  tmp9 = closure_5;
  if (confirmText == null) {
    const intl3 = tmp7(1115).intl;
    confirmText = intl3.string(tmp7(1115).t.OzHPde);
  }
  obj2 = { children: items1 };
  items1 = [closure_4(Button, { variant: "destructive", text: confirmText, onPress: callback }), ];
  const obj3 = { text: intl4.string(guildId(1115).t.bANR0R), variant: "secondary", onPress: onClose };
  const Button2 = tmp7(5281).Button;
  intl4 = tmp7(1115).intl;
  items1[1] = closure_4(Button2, obj3);
  return closure_4(tmp5, obj);
};
