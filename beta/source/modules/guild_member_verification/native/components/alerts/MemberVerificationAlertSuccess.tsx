// Module ID: 5840
// Function ID: 5841
// Name: MemberVerificationAlertSuccess
// Dependencies: [19, 17, 4825, 2067, 21, 4836, 504, 5300, 1115, 5841, 5847, 4832, 2]
// Exports: default

// Module 5840 (MemberVerificationAlertSuccess)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ alert: { marginTop: 120 }, header: { marginTop: 40, textAlign: "center" }, text: { marginVertical: 8, lineHeight: 18, textAlign: "center" }, illustrationContainer: { position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", left: 0, right: 0, top: -220 }, illustration: { height: 246, width: 240 } });
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertSuccess.tsx");

export default function MemberVerificationAlertSuccess(guildId) {
  let intl;
  let intl2;
  let intl3;
  let items2;
  let obj4;
  let obj6;
  let tmp16;
  let useReducedMotion;
  guildId = guildId.guildId;
  const handleConfirmAndAck = guildId.handleConfirmAndAck;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, handleConfirmAndAck: 0 }));
  const tmp2 = closure_8();
  const items = [GuildStore];
  const items1 = [guildId];
  const obj = guildId(merged[6]);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  guildId(merged[6]);
  [][0] = AccessibilityStore;
  if (null == stateFromStores) {
    return null;
  } else {
    function onConfirm() {
      handleConfirmAndAck();
      const onClose = merged.onClose;
      if (onClose != null) {
        onClose();
      }
    }
    const obj2 = { confirmText: intl.string(guildId(merged[8]).t.NuzmOA), style: tmp2.alert, onCancel: onConfirm, onConfirm, children: items2 };
    const tmp10 = handleConfirmAndAck(merged[7]);
    const merged1 = Object.assign(merged);
    intl = tmp3(tmp4[8]).intl;
    const obj3 = { style: tmp2.illustrationContainer, children: closure_6(tmp16, obj4) };
    obj4 = { source: guildId(merged[10]), autoPlay: !tmp7, style: tmp2.illustration };
    tmp16 = handleConfirmAndAck(merged[9]);
    items2 = [closure_6(View, obj3), , ];
    const obj5 = { style: tmp2.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl2.format(guildId(merged[8]).t["7hhNEn"], obj6) };
    const Heading = tmp3(tmp4[11]).Heading;
    intl2 = tmp3(tmp4[8]).intl;
    obj6 = { guildName: stateFromStores.name };
    items2[1] = closure_6(Heading, obj5);
    const obj7 = { style: tmp2.text, variant: "text-sm/medium", color: "text-default", children: intl3.string(guildId(merged[8]).t.nwpqyc) };
    const Text = tmp3(tmp4[11]).Text;
    intl3 = tmp3(tmp4[8]).intl;
    items2[2] = closure_6(Text, obj7);
    return closure_7(tmp10, obj2);
  }
};
