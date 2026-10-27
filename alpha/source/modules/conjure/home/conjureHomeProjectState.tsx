// Module ID: 17839
// Function ID: 17840
// Name: conjureHomeProjectState
// Dependencies: [1246, 6771, 10699, 6773, 10714, 10722, 10723, 558, 576, 504, 2]
// Exports: conjureHomeProjectShowsDraft, conjureHomeProjectState, conjureProjectLastActivityTime, hasConjureUnpublishedChanges

// Module 17839 (conjureHomeProjectState)
import conjureUnread from "conjureUnread" /* 10722 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import ReadStateStore from "ReadStateStore" /* 6771 */;
import ConjureChatStore from "ConjureChatStore" /* 10699 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10714 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp3;
const conjureProjectMute = tmp3(10723);
function readConjureHomeProjectState(id) {
  const isProjectDeletingResult = ConjureProjectStore.isProjectDeleting(id);
  const isThinkingResult = ConjureChatStore.isThinking(id);
  const obj = conjureUnread;
  let result = obj.isConjureProjectUnread(id);
  if (result) {
    const tmp3Result = conjureProjectMute;
    result = !tmp3Result.isConjureProjectMuted(UserSettingsProtoStore.settings, id);
  }
  const publishStatus = ConjurePublishStatusStore.getPublishStatus(id);
  let publishState;
  if (publishStatus != null) {
    publishState = publishStatus.publishState;
  }
  if (publishState == null) {
    publishState = null;
  }
  let flag = isProjectDeletingResult;
  if (isProjectDeletingResult === undefined) {
    flag = false;
  }
  let str = "deleting";
  if (!flag) {
    let str2 = "in_progress";
    if (!isThinkingResult) {
      let str3 = "unread";
      if (!result) {
        let str7 = "default";
        const tmp9 = "nothing_built" === publishState || "not_live" === publishState || "live_outdated" === publishState;
        if (tmp9) {
          str7 = "draft";
        }
        str3 = str7;
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
}
let items = [ConjureProjectStore, ConjureChatStore, ReadStateStore, UserSettingsProtoStore, ConjurePublishStatusStore];
function hasConjureUnpublishedChanges(arg0) {
  return "nothing_built" === arg0 || "not_live" === arg0 || "live_outdated" === arg0;
}
function conjureHomeProjectState(deleting) {
  let flag = deleting.deleting;
  if (flag === undefined) {
    flag = false;
  }
  const publishState = deleting.publishState;
  let str = "deleting";
  if (!flag) {
    let str2 = "in_progress";
    if (!tmp) {
      let str3 = "unread";
      if (!tmp2) {
        let str7 = "default";
        const tmp3 = "nothing_built" === publishState || "not_live" === publishState || "live_outdated" === publishState;
        if (tmp3) {
          str7 = "draft";
        }
        str3 = str7;
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
}
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureHomeProjectState(arg0) {
  let closure_0;
  let tmp4;
  let tmp5;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] !== arg0) {
    const fn = function n() {
      return readConjureHomeProjectState(closure_0);
    };
    items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(items, tmp4, tmp5);
}) : (function useConjureHomeProjectState(arg0) {
  let closure_0;
  _require = arg0;
  items = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => readConjureHomeProjectState(closure_0), items);
});
let result = size.fileFinishedImporting("modules/conjure/home/conjureHomeProjectState.tsx");

export { hasConjureUnpublishedChanges };
export { conjureHomeProjectState };
export function conjureHomeProjectShowsDraft(conjureHomeProjectState, stateFromStores) {
  let tmp = "in_progress" !== conjureHomeProjectState && "deleting" !== conjureHomeProjectState;
  if (tmp) {
    tmp = "nothing_built" === stateFromStores || "not_live" === stateFromStores || "live_outdated" === stateFromStores;
    const tmp3 = "nothing_built" === stateFromStores || "not_live" === stateFromStores || "live_outdated" === stateFromStores;
  }
  return tmp;
}
export const conjureProjectLastActivityTime = function conjureProjectLastActivityTime(project) {
  if (null == project.updated_at) {
    return null;
  } else {
    const _Date = Date;
    const parsed = Date.parse(project.updated_at);
    const _Number = Number;
    let tmp3 = null;
    if (!Number.isNaN(parsed)) {
      tmp3 = parsed;
    }
    return tmp3;
  }
};
export const CONJURE_HOME_PROJECT_STATE_STORES = items;
export { readConjureHomeProjectState };
export const useConjureHomeProjectState = tmp7;
