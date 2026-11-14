// Module ID: 13316
// Function ID: 13317
// Name: conjureChangeRows
// Dependencies: [1113, 4131, 7018, 2]
// Exports: conjureAddToAnotherServerRows, conjureMakePersonalRows, conjureShareRows

// Module 13316 (conjureChangeRows)
import intl8 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 7018 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/server_share/conjureChangeRows.tsx");

export function conjureShareRows(stateFromStores) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  const obj = { key: "bots", text: intl.string(_modDef4131.eSpjGV) };
  intl = intl8.intl;
  const items = [obj];
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
    const obj2 = { key: "test_app", text: intl2.string(_modDef4131["+5f47F"]) };
    intl2 = tmp2(1113).intl;
    push(obj2);
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
    const obj3 = { key: "profile_widget", text: intl3.string(_modDef4131.u6ckHo) };
    intl3 = tmp2(1113).intl;
    push2(obj3);
  }
  if (items1.includes(ConjureProjectTypes.ConjureSupportedSurface.OVERLAY)) {
    const push3 = items.push;
    const obj4 = { key: "overlay", text: intl4.string(_modDef4131.UZHlmt) };
    intl4 = tmp2(1113).intl;
    push3(obj4);
  }
  const push4 = items.push;
  const obj5 = { key: "collaboration", text: intl5.string(_modDef4131["s3/5nF"]) };
  intl5 = tmp2(1113).intl;
  push4(obj5);
  return items;
}
export function conjureAddToAnotherServerRows(stateFromStores) {
  let intl;
  let intl2;
  const obj = { key: "bots", text: intl.string(_modDef4131.eSpjGV) };
  intl = intl8.intl;
  const items = [obj];
  let hasItem;
  if (stateFromStores != null) {
    const supported_surfaces = stateFromStores.supported_surfaces;
    if (supported_surfaces != null) {
      hasItem = supported_surfaces.includes(tmp(7018).ConjureSupportedSurface.APP_CHANNEL);
    }
  }
  if (true === hasItem) {
    const push = items.push;
    const obj2 = { key: "channels", text: intl2.string(_modDef4131["D8IMa/"]) };
    intl2 = tmp(1113).intl;
    push(obj2);
  }
  return items;
}
export function conjureMakePersonalRows(preview_app_chosen, target) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl7;
  let obj2;
  let obj5;
  const items = [];
  if (null != target) {
    let PDLHwR;
    let tmp;
    const push6 = items.push;
    const intl6 = intl8.intl;
    const formatToPlainString = intl6.formatToPlainString;
    const canRemoveBot = target.canRemoveBot;
    const tmp20 = _modDef4131;
    if (canRemoveBot) {
      PDLHwR = tmp20["cU/7df"];
      tmp = tmp19;
    } else {
      PDLHwR = tmp20.PDLHwR;
      tmp = tmp19;
    }
    const obj = { key: "bots", text: formatToPlainString(PDLHwR, obj2) };
    obj2 = { server: target.guildName };
    push6(obj);
    if (target.channelNames.length > 0) {
      const _Intl = Intl;
      const self = this;
      const self2 = this;
      const listFormat = new Intl.ListFormat(tmp17(1113).intl.currentLocale, { type: "conjunction" });
      const channelNames = target.channelNames;
      const push7 = items.push;
      const obj4 = { key: "channels", text: intl7.formatToPlainString(tmp(4131).DbZ8af, obj5) };
      const formatResult = listFormat.format(channelNames.map((item) => "#" + item));
      intl7 = tmp17(1113).intl;
      obj5 = { channels: formatResult };
      push7(obj4);
    }
  }
  const obj3 = ConjureProjectTypes;
  const usesPreviewAppResult = obj3.usesPreviewApp(preview_app_chosen) && true !== preview_app_chosen.preview_app_chosen;
  if (usesPreviewAppResult) {
    const push = items.push;
    const obj6 = { key: "test_app", text: intl.string(_modDef4131.jKXaUH) };
    intl = tmp3(1113).intl;
    push(obj6);
  }
  const supported_surfaces = preview_app_chosen.supported_surfaces;
  let hasItem;
  if (supported_surfaces != null) {
    hasItem = supported_surfaces.includes(tmp3(7018).ConjureSupportedSurface.PROFILE_WIDGET);
  }
  if (true === hasItem) {
    const push2 = items.push;
    const obj7 = { key: "profile_widget", text: intl2.string(_modDef4131.HHZxrL) };
    intl2 = tmp3(1113).intl;
    push2(obj7);
  }
  const supported_surfaces2 = preview_app_chosen.supported_surfaces;
  let hasItem1;
  if (supported_surfaces2 != null) {
    hasItem1 = supported_surfaces2.includes(tmp3(7018).ConjureSupportedSurface.OVERLAY);
  }
  if (true === hasItem1) {
    const push3 = items.push;
    const obj8 = { key: "overlay", text: intl3.string(_modDef4131.rVTFDs) };
    intl3 = tmp3(1113).intl;
    push3(obj8);
  }
  const tmp3Result = ConjureProjectTypes;
  if (tmp3Result.isProjectGuildCollaborationEnabled(preview_app_chosen)) {
    const push4 = items.push;
    const obj9 = { key: "collaboration", text: intl4.string(_modDef4131["+a1lOS"]) };
    intl4 = tmp3(1113).intl;
    push4(obj9);
  }
  const push5 = items.push;
  const obj10 = { key: "only_you", text: intl5.string(_modDef4131.TrTx1Z) };
  intl5 = tmp3(1113).intl;
  push5(obj10);
  return items;
}
