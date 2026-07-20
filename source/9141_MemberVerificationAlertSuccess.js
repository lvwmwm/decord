// Module ID: 9141
// Function ID: 71690
// Name: MemberVerificationAlertSuccess
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 9141 (MemberVerificationAlertSuccess)
import "result";
import { View } from "result";
import closure_4 from "result";
import closure_5 from "result";
import result from "result";
import result from "result";
import result from "result";

({ jsx: closure_6, jsxs: closure_7 } = result);
let closure_8 = result.createStyles({ alert: { marginTop: 120 }, header: {}, text: {}, illustrationContainer: { applicationId: null, r: null, apply: null, tag: null, ao: null, split: null, p: null }, illustration: {} });
result = result.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertSuccess.tsx");

export default function MemberVerificationAlertSuccess(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const importDefault = guildId.handleConfirmAndAck;
  let obj = Object.create(null);
  obj.guildId = 0;
  obj.handleConfirmAndAck = 0;
  const merged = Object.assign(guildId, obj);
  const dependencyMap = merged;
  function onConfirm() {
    handleConfirmAndAck();
    if (null != merged.onClose) {
      merged.onClose();
    }
  }
  const tmp3 = callback3();
  obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId), items1);
  arg1(dependencyMap[6]);
  [][0] = closure_4;
  if (null == stateFromStores) {
    return null;
  } else {
    obj = {};
    const merged1 = Object.assign(merged);
    const intl = arg1(dependencyMap[8]).intl;
    obj["confirmText"] = intl.string(arg1(dependencyMap[8]).t.NuzmOA);
    obj["style"] = tmp3.alert;
    obj["onCancel"] = onConfirm;
    obj["onConfirm"] = onConfirm;
    const obj1 = { style: tmp3.illustrationContainer };
    const obj2 = {};
    const tmp10 = importDefault(dependencyMap[7]);
    obj2.source = arg1(dependencyMap[10]);
    obj2.autoPlay = !tmp6;
    obj2.style = tmp3.illustration;
    obj1.children = callback(importDefault(dependencyMap[9]), obj2);
    const items2 = [callback(View, obj1), , ];
    const obj3 = { Promise: false, marginTop: 0, flags: 4, style: tmp3.header };
    const intl2 = arg1(dependencyMap[8]).intl;
    const obj4 = { guildName: stateFromStores.name };
    obj3.children = intl2.format(arg1(dependencyMap[8]).t.7hhNEn, obj4);
    items2[1] = callback(arg1(dependencyMap[11]).Heading, obj3);
    const obj5 = { style: tmp3.text };
    const intl3 = arg1(dependencyMap[8]).intl;
    obj5.children = intl3.string(arg1(dependencyMap[8]).t.nwpqyc);
    items2[2] = callback(arg1(dependencyMap[11]).Text, obj5);
    obj["children"] = items2;
    return callback2(tmp10, obj);
  }
};
