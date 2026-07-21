// Module ID: 9151
// Function ID: 71716
// Name: MemberVerificationAlertCancelPending
// Dependencies: [0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 9151 (MemberVerificationAlertCancelPending)
import closure_3 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = __exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx");

export default function MemberVerificationAlertCancelPending(guildId) {
  let confirmText;
  let onClose;
  let subtitleText;
  guildId = guildId.guildId;
  const arg1 = guildId;
  ({ confirmText, subtitleText, onClose } = guildId);
  const importDefault = onClose;
  let obj = { overflow: null, height: 4, paddingVertical: 4, alignItems: "rgba(0, 0, 0, 0.75)" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(guildId, obj);
  const items = [guildId, onClose];
  const callback = React.useCallback(() => {
    if (null != onClose) {
      onClose();
    }
    const result = onClose(closure_2[2]).removeGuildJoinRequest(guildId);
  }, items);
  obj = {};
  const merged1 = Object.assign(merged);
  const intl = arg1(dependencyMap[4]).intl;
  obj["header"] = intl.string(arg1(dependencyMap[4]).t.KYiN1Q);
  if (null == subtitleText) {
    const intl2 = arg1(dependencyMap[4]).intl;
    subtitleText = intl2.string(arg1(dependencyMap[4]).t.nQHxqm);
  }
  obj["subtitle"] = subtitleText;
  obj = {};
  const obj1 = { variant: "destructive" };
  if (null == confirmText) {
    const intl3 = arg1(dependencyMap[4]).intl;
    confirmText = intl3.string(arg1(dependencyMap[4]).t.OzHPde);
  }
  obj1.text = confirmText;
  obj1.onPress = callback;
  const items1 = [callback(arg1(dependencyMap[5]).Button, obj1), ];
  const obj2 = {};
  const intl4 = arg1(dependencyMap[4]).intl;
  obj2.text = intl4.string(arg1(dependencyMap[4]).t.bANR0R);
  obj2.variant = "secondary";
  obj2.onPress = onClose;
  items1[1] = callback(arg1(dependencyMap[5]).Button, obj2);
  obj.children = items1;
  obj["buttons"] = closure_6(closure_5, obj);
  return callback(importDefault(dependencyMap[3]), obj);
};
