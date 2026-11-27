// Module ID: 18722
// Function ID: 18723
// Name: conjureSetupAskCard
// Dependencies: [19, 7710, 1112, 4245, 18658, 504, 18656, 18655, 18654, 18547, 2]
// Exports: useConjureSetupAskCard

// Module 18722 (conjureSetupAskCard)
import conjureSettingsAsks from "conjureSettingsAsks" /* 18656 */;
import react from "react" /* 19 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 7710 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/conjure/setup_asks/conjureSetupAskCard.tsx");

export function useConjureSetupAskCard(projectId, merged) {
  let awaiting;
  let cardId;
  let fields;
  let fields1;
  let fields2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj10;
  let obj4;
  let obj5;
  let obj6;
  let obj9;
  let tmp10;
  let tmp2Result;
  _require = projectId;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.overlayGamesPickerPrompts;
  if (flag === undefined) {
    flag = false;
  }
  let askId1;
  let tmp = null;
  if ("settings" === merged.kind) {
    tmp = merged;
  }
  const items = [ConjureSettingsStore];
  const items1 = [projectId];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => ConjureSettingsStore.getSettings(projectId), items1);
  let request1;
  const useConjureSettingsAskSource = require("conjureSettingsAsks").useConjureSettingsAskSource;
  require("conjureSettingsAsks");
  if (tmp != null) {
    request1 = tmp.request;
  }
  if (request1 == null) {
    request1 = null;
  }
  let askId;
  if (tmp != null) {
    askId = tmp.askId;
  }
  const conjureSettingsAskSource = useConjureSettingsAskSource(projectId, request1, askId);
  if ("keys" === merged.kind) {
    const request = merged.request;
    const obj3 = { ask: obj4, body: intl.string(askId1(4245).MPGSHL), keys: fields.map((name) => name.name), tags: fields1.map((id) => ({ id: id.name, label: id.label })), summary: tmp2Result.conjureSavedKeysSummary(fields2.map((label) => label.label)), awaiting: null != awaiting, transitionId: cardId };
    obj4 = { kind: "keys", request, status: merged.status };
    ({ cardId, awaiting } = merged);
    intl = tmp2(1112).intl;
    fields = request.fields;
    fields1 = request.fields;
    fields2 = request.fields;
    tmp10 = askId1;
    obj5 = obj3;
    tmp2Result = require("conjureSettingsSummary");
  } else {
    const request2 = merged.request;
    const summary = conjureSettingsAskSource.summary;
    obj5 = { ask: obj6, body: intl6.string(askId1(4245).XuOf5s), keys: request2.keys, tags: [], summary: summary.join(" \u00B7 "), awaiting: false, transitionId: null };
    obj6 = { kind: "settings", request: request2, askId: merged.askId, saved: null, superseded: null };
    ({ saved: obj11.saved, superseded: obj11.superseded } = conjureSettingsAskSource);
    intl6 = tmp2(1112).intl;
    tmp10 = askId1;
  }
  const tmp2Result3 = require("conjureSetupAsk");
  const conjureSetupAskStateResult = tmp2Result3.conjureSetupAskState(obj5.ask, stateFromStores);
  let str = obj5.transitionId;
  const useSecretRequestStatusChanged = tmp2(18654).useSecretRequestStatusChanged;
  require("ConjureSecretRequestState");
  if (str == null) {
    str = "";
  }
  let str2 = "open";
  if (null != obj5.transitionId) {
    str2 = conjureSetupAskStateResult.status;
  }
  let secretRequestStatusChanged = useSecretRequestStatusChanged(str, str2);
  askId1 = undefined;
  if (tmp != null) {
    askId1 = tmp.askId;
  }
  const items2 = [askId1];
  const keys = obj5.keys;
  let note = null;
  const callback = react.useCallback(() => {
    if (null != askId1) {
      const obj = conjureSettingsAsks;
      const result = obj.markSettingsRequestSaved(tmp);
    }
  }, items2);
  if (null != merged.request.note) {
    note = null;
    if ("" !== merged.request.note) {
      note = merged.request.note;
    }
  }
  if (flag) {
    let length;
    if (keys != null) {
      length = keys.length;
    }
    flag = 1 === length;
  }
  if (flag) {
    flag = keys[0] === tmp2(18547).CONJURE_OVERLAY_GAMES_SETTING_KEY;
  }
  const obj7 = { state: conjureSetupAskStateResult, copy: obj9, awaiting: obj5.awaiting, note, tags: null, summary: null, editForm: obj10, entering: secretRequestStatusChanged, transitionId: obj5.transitionId, markSaved: callback };
  obj9 = { title: intl2.string(tmp10(4245)["jZjP+I"]), open: intl3.string(tmp10(4245).d49riY), saved: intl4.string(tmp10(4245).AxBLLy), superseded: intl5.string(tmp10(4245)["+uXDk+"]) };
  intl2 = tmp2(1112).intl;
  intl3 = tmp2(1112).intl;
  intl4 = tmp2(1112).intl;
  intl5 = tmp2(1112).intl;
  if (note == null) {
    let body = null;
    if (!flag) {
      body = obj5.body;
    }
    note = body;
  }
  ({ tags: obj8.tags, summary: obj8.summary } = obj5);
  obj10 = { kind: "settings", request: { keys } };
  if (secretRequestStatusChanged) {
    secretRequestStatusChanged = "open" !== conjureSetupAskStateResult.status;
  }
  if (secretRequestStatusChanged) {
    secretRequestStatusChanged = "pending" !== conjureSetupAskStateResult.status;
  }
  return obj7;
}
