// Module ID: 9189
// Function ID: 71976
// Name: MemberVerificationAlertSuccess
// Dependencies: [31, 27, 4122, 1838, 33, 4130, 566, 4561, 1212, 5453, 9190, 4126, 2]
// Exports: default

// Module 9189 (MemberVerificationAlertSuccess)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ alert: { marginTop: 120 }, header: { marginTop: 40, textAlign: "center" }, text: { marginVertical: 8, lineHeight: 18, textAlign: "center" }, illustrationContainer: { position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", left: 0, right: 0, top: -220 }, illustration: { height: 246, width: 240 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertSuccess.tsx");

export default function MemberVerificationAlertSuccess(guildId) {
  guildId = guildId.guildId;
  const handleConfirmAndAck = guildId.handleConfirmAndAck;
  let obj = Object.create(null);
  obj.guildId = 0;
  obj.handleConfirmAndAck = 0;
  const merged = Object.assign(guildId, obj);
  function onConfirm() {
    handleConfirmAndAck();
    if (null != merged.onClose) {
      merged.onClose();
    }
  }
  const tmp3 = callback3();
  obj = guildId(merged[6]);
  const items = [closure_5];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getGuild(guildId), items1);
  guildId(merged[6]);
  [][0] = _isNativeReflectConstruct;
  if (null == stateFromStores) {
    return null;
  } else {
    obj = {};
    const merged1 = Object.assign(merged);
    const intl = guildId(merged[8]).intl;
    obj["confirmText"] = intl.string(guildId(merged[8]).t.NuzmOA);
    obj["style"] = tmp3.alert;
    obj["onCancel"] = onConfirm;
    obj["onConfirm"] = onConfirm;
    const obj1 = { style: tmp3.illustrationContainer };
    const obj2 = {};
    const tmp10 = handleConfirmAndAck(merged[7]);
    obj2.source = guildId(merged[10]);
    obj2.autoPlay = !tmp6;
    obj2.style = tmp3.illustration;
    obj1.children = callback(handleConfirmAndAck(merged[9]), obj2);
    const items2 = [callback(View, obj1), , ];
    const obj3 = { style: tmp3.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
    const intl2 = guildId(merged[8]).intl;
    const obj4 = { guildName: stateFromStores.name };
    obj3.children = intl2.format(guildId(merged[8]).t["7hhNEn"], obj4);
    items2[1] = callback(guildId(merged[11]).Heading, obj3);
    const obj5 = { style: tmp3.text, variant: "text-sm/medium", color: "text-default" };
    const intl3 = guildId(merged[8]).intl;
    obj5.children = intl3.string(guildId(merged[8]).t.nwpqyc);
    items2[2] = callback(guildId(merged[11]).Text, obj5);
    obj["children"] = items2;
    return callback2(tmp10, obj);
  }
};
