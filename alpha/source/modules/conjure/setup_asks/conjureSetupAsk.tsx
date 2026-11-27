// Module ID: 18655
// Function ID: 18656
// Name: conjureSetupAsk
// Dependencies: [32, 19, 7710, 18656, 18529, 7660, 18654, 504, 2]
// Exports: useConjureSetupAskBar

// Module 18655 (conjureSetupAsk)
import conjureChatTurns from "conjureChatTurns" /* 7660 */;
import conjureSettingsRequest from "conjureSettingsRequest" /* 18529 */;
import conjureSettingsAsks from "conjureSettingsAsks" /* 18656 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 7710 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_4, dependencyMap;

function conjureSetupAskState(ask, settings) {
  let askId;
  let num2;
  let request;
  let request2;
  let saved;
  let status;
  let superseded;
  let tmp5Result;
  let tmp5Result2;
  if ("keys" === ask.kind) {
    ({ request, status } = ask);
    let secrets;
    const _Set = Set;
    if (settings != null) {
      secrets = settings.secrets;
    }
    if (secrets == null) {
      secrets = [];
    }
    const found = secrets.filter((set) => set.set);
    const self = this;
    const self2 = this;
    const _Set1 = new _Set(found.map((name) => name.name));
    const fields = request.fields;
    let length = fields.filter((name) => !_Set1.has(name.name)).length;
    let str3 = "saved";
    if ("received" !== status) {
      str3 = status;
    }
    const obj2 = { status: str3, presentation: "button", needed: num2, form: obj3 };
    num2 = 0;
    if ("open" === status) {
      if (length <= 0) {
        length = request.fields.length;
      }
      num2 = length;
    }
    return obj2;
  } else {
    ({ request: request2, saved } = ask);
    ({ askId, superseded } = ask);
    let str2 = "saved";
    const obj7 = conjureSettingsAsks;
    if (!obj7.conjureSettingsRequestDone(request2, settings, saved)) {
      let str = "open";
      if (superseded) {
        str = "superseded";
      }
      str2 = str;
    }
    const obj = { status: str2, presentation: tmp5Result.conjureSettingsRequestPresentation(request2, settings), needed: tmp5Result2.conjureSettingsRequestNeeded(request2, settings, saved), form: obj4 };
    tmp5Result = conjureSettingsRequest;
    tmp5Result2 = conjureSettingsRequest;
    return obj;
  }
}
function newestOpenSetupAsk(message, stateFromStores, savedSettingsRequests) {
  let result2;
  let str;
  let tmp14Result5;
  let tmp3;
  let tmp7;
  let tmp = savedSettingsRequests;
  if (savedSettingsRequests === undefined) {
    tmp = set;
  }
  let diff = message.length - 1;
  if (0 <= diff) {
    while (true) {
      tmp3 = message[diff];
      if (null != tmp3) {
        if ("assistant" === tmp3.role) {
          let tmp14 = require;
          let obj9 = conjureChatTurns;
          let secretRequest;
          if (obj9.turnSettled(tmp3)) {
            secretRequest = tmp3.secretRequest;
          }
          if (null != secretRequest) {
            if (secretRequest.fields.length > 0) {
              let obj = { kind: "keys", request: secretRequest, status: str };
              let tmp14Result = tmp14(18654);
              let secrets;
              let secretRequestStatuses = tmp14Result.secretRequestStatuses;
              if (stateFromStores != null) {
                secrets = stateFromStores.secrets;
              }
              let result = secretRequestStatuses(message, secrets);
              str = result.get(tmp3.render_id);
              if (str == null) {
                str = "open";
              }
              tmp7 = obj;
              if (null != tmp7) {
                break;
              }
            }
          }
          let tmp14Result4 = tmp14(18656);
          let result1 = tmp14Result4.messageSettingsRequest(tmp3);
          tmp7 = null;
          if (null != result1) {
            let obj2 = { kind: "settings", request: result1, askId: tmp3.id, saved: tmp14Result5.conjureSettingsRequestSaved(tmp3.id, message, tmp), superseded: result2.has(tmp3.id) };
            tmp14Result5 = tmp14(18656);
            let tmp14Result6 = tmp14(18656);
            result2 = tmp14Result6.supersededSettingsRequests(message);
            tmp7 = obj2;
          }
        }
      }
      diff = diff - 1;
    }
    const needed = conjureSetupAskState(tmp7, stateFromStores).needed;
    let tmp13 = null;
    conjureSetupAskState(tmp7, stateFromStores);
    if (needed > 0) {
      tmp13 = { id: tmp3.id, needed, form: tmp12 };
      const obj3 = { id: tmp3.id, needed, form: tmp12 };
    }
    return tmp13;
  }
  return null;
}
const set = new Set();
let result = size.fileFinishedImporting("modules/conjure/setup_asks/conjureSetupAsk.tsx");

export { conjureSetupAskState };
export { newestOpenSetupAsk };
export function useConjureSetupAskBar(projectId, memo) {
  _require = projectId;
  dependencyMap = memo;
  const items = [closure_4];
  const items1 = [projectId];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ConjureSettingsStore.getSettings(projectId), items1);
  const obj2 = require("conjureSettingsAsks");
  const savedSettingsRequests = obj2.useSavedSettingsRequests();
  const items2 = [memo, stateFromStores, savedSettingsRequests];
  memo = savedSettingsRequests.useMemo(() => newestOpenSetupAsk(memo, stateFromStores, savedSettingsRequests), items2);
  const tmp4 = stateFromStores(savedSettingsRequests.useState(null), 2);
  closure_4 = tmp4[1];
  let id;
  const first = tmp4[0];
  const obj3 = savedSettingsRequests;
  if (memo != null) {
    id = memo.id;
  }
  const items3 = [id];
  let ask = null;
  const dismiss = obj3.useCallback(() => {
    if (null != id) {
      closure_4(tmp);
    }
  }, items3);
  if (null != memo) {
    ask = null;
    if (memo.id !== first) {
      ask = memo;
    }
  }
  return { ask, dismiss };
}
