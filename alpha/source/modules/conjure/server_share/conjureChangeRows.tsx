// Module ID: 18336
// Function ID: 18337
// Name: conjureChangeRows
// Dependencies: [1113, 4089, 6501, 2]
// Exports: conjureMakePersonalRows, conjureMoveRows, conjureShareRows

// Module 18336 (conjureChangeRows)
import intl8 from "intl" /* 1113 */;
import _modDef4089 from "module_4089" /* 4089 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6501 */;
import size from "module_2" /* 2 */;

function conjureLeaveServerRows(canRemoveBot) {
  let intl2;
  let obj2;
  let obj4;
  if (null == canRemoveBot) {
    return [];
  } else {
    let PDLHwR;
    let tmp;
    const intl = intl8.intl;
    const formatToPlainString = intl.formatToPlainString;
    canRemoveBot = canRemoveBot.canRemoveBot;
    const tmp5 = _modDef4089;
    if (canRemoveBot) {
      PDLHwR = tmp5["cU/7df"];
      tmp = tmp4;
    } else {
      PDLHwR = tmp5.PDLHwR;
      tmp = tmp4;
    }
    const obj = { key: "bots", text: formatToPlainString(PDLHwR, obj2) };
    const items = [obj];
    obj2 = { server: canRemoveBot.guildName };
    if (canRemoveBot.channelNames.length > 0) {
      const _Intl = Intl;
      const self = this;
      const self2 = this;
      const listFormat = new Intl.ListFormat(tmp2(1113).intl.currentLocale, { type: "conjunction" });
      const channelNames = canRemoveBot.channelNames;
      const push = items.push;
      const obj3 = { key: "channels", text: intl2.formatToPlainString(tmp(4089).DbZ8af, obj4) };
      const formatResult = listFormat.format(channelNames.map((item) => "#" + item));
      intl2 = tmp2(1113).intl;
      obj4 = { channels: formatResult };
      push(obj3);
    }
    return items;
  }
}
const result = size.fileFinishedImporting("modules/conjure/server_share/conjureChangeRows.tsx");

export function conjureShareRows(stateFromStores, name) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let obj3;
  const obj = { key: "bots", text: intl.string(_modDef4089.eSpjGV) };
  intl = intl8.intl;
  const items = [obj, ];
  const obj2 = { key: "location", text: intl2.formatToPlainString(_modDef4089.c3xGbr, obj3) };
  intl2 = intl8.intl;
  obj3 = { server: name };
  items[1] = obj2;
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.preview_application_id;
  }
  let usesPreviewAppResult = null != prop;
  if (usesPreviewAppResult) {
    const tmp2Result = ConjureProjectTypes;
    usesPreviewAppResult = tmp2Result.usesPreviewApp(stateFromStores);
  }
  if (!usesPreviewAppResult) {
    let preview_app_chosen;
    if (stateFromStores != null) {
      preview_app_chosen = stateFromStores.preview_app_chosen;
    }
    usesPreviewAppResult = true === preview_app_chosen;
  }
  if (!usesPreviewAppResult) {
    const push = items.push;
    const obj4 = { key: "test_app", text: intl3.string(_modDef4089["+5f47F"]) };
    intl3 = tmp2(1113).intl;
    push(obj4);
  }
  let supported_surfaces;
  if (stateFromStores != null) {
    supported_surfaces = stateFromStores.supported_surfaces;
  }
  if (supported_surfaces == null) {
    supported_surfaces = [];
  }
  const items1 = [...supported_surfaces];
  let prop1;
  if (stateFromStores != null) {
    prop1 = stateFromStores.preview_supported_surfaces;
  }
  if (prop1 == null) {
    prop1 = [];
  }
  HermesBuiltin.arraySpread(items1, prop1, tmp9);
  if (items1.includes(ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET)) {
    const push2 = items.push;
    const obj5 = { key: "profile_widget", text: intl4.string(_modDef4089.u6ckHo) };
    intl4 = tmp2(1113).intl;
    push2(obj5);
  }
  if (items1.includes(ConjureProjectTypes.ConjureSupportedSurface.OVERLAY)) {
    const push3 = items.push;
    const obj6 = { key: "overlay", text: intl5.string(_modDef4089.UZHlmt) };
    intl5 = tmp2(1113).intl;
    push3(obj6);
  }
  if (items1.includes(ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD)) {
    const push4 = items.push;
    const obj7 = { key: "automod", text: intl6.string(_modDef4089.IPtiUf) };
    intl6 = tmp2(1113).intl;
    push4(obj7);
  }
  const push5 = items.push;
  const obj8 = { key: "collaboration", text: intl7.string(_modDef4089["s3/5nF"]) };
  intl7 = tmp2(1113).intl;
  push5(obj8);
  return items;
}
export function conjureMoveRows(stateFromStores, target, name) {
  let intl;
  let intl2;
  let intl3;
  let obj2;
  const obj = { key: "server", text: intl.formatToPlainString(_modDef4089.YFZDXO, obj2) };
  intl = intl8.intl;
  obj2 = { server: name };
  const items = [obj, ...conjureLeaveServerRows(target)];
  const obj3 = { key: "settings", text: intl2.string(_modDef4089.F058cu) };
  intl2 = intl8.intl;
  items[tmp4] = obj3;
  const prop = stateFromStores.collaborator_role_ids;
  let num;
  if (prop != null) {
    num = prop.length;
  }
  if (num == null) {
    num = 0;
  }
  if (num > 0) {
    const push = items.push;
    const obj4 = { key: "collaboration", text: intl3.string(_modDef4089.SDpkkt) };
    intl3 = intl8.intl;
    push(obj4);
  }
  return items;
}
export function conjureMakePersonalRows(preview_app_chosen, target) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  const arr = conjureLeaveServerRows(target);
  const obj = ConjureProjectTypes;
  const usesPreviewAppResult = obj.usesPreviewApp(preview_app_chosen) && true !== preview_app_chosen.preview_app_chosen;
  if (usesPreviewAppResult) {
    const push = arr.push;
    const obj2 = { key: "test_app", text: intl.string(_modDef4089.jKXaUH) };
    intl = tmp(1113).intl;
    push(obj2);
  }
  const supported_surfaces = preview_app_chosen.supported_surfaces;
  let hasItem;
  if (supported_surfaces != null) {
    hasItem = supported_surfaces.includes(tmp(6501).ConjureSupportedSurface.PROFILE_WIDGET);
  }
  if (true === hasItem) {
    const push2 = arr.push;
    const obj3 = { key: "profile_widget", text: intl2.string(_modDef4089.HHZxrL) };
    intl2 = tmp(1113).intl;
    push2(obj3);
  }
  const supported_surfaces2 = preview_app_chosen.supported_surfaces;
  let hasItem1;
  if (supported_surfaces2 != null) {
    hasItem1 = supported_surfaces2.includes(tmp(6501).ConjureSupportedSurface.OVERLAY);
  }
  if (true === hasItem1) {
    const push3 = arr.push;
    const obj4 = { key: "overlay", text: intl3.string(_modDef4089.rVTFDs) };
    intl3 = tmp(1113).intl;
    push3(obj4);
  }
  const tmpResult = ConjureProjectTypes;
  if (tmpResult.isProjectGuildCollaborationEnabled(preview_app_chosen)) {
    const push4 = arr.push;
    const obj5 = { key: "collaboration", text: intl4.string(_modDef4089["+a1lOS"]) };
    intl4 = tmp(1113).intl;
    push4(obj5);
  }
  const push5 = arr.push;
  const obj6 = { key: "only_you", text: intl5.string(_modDef4089.TrTx1Z) };
  intl5 = tmp(1113).intl;
  push5(obj6);
  const push6 = arr.push;
  const obj7 = { key: "location", text: intl6.string(_modDef4089["GC/COK"]) };
  intl6 = tmp(1113).intl;
  push6(obj7);
  return arr;
}
