// Module ID: 14661
// Function ID: 14662
// Name: conjureHomeProjectState
// Dependencies: [1232, 6836, 10831, 6838, 10847, 10857, 10858, 504, 10941, 2]
// Exports: conjureHomeProjectShowsDraft, conjureHomeProjectState, conjureProjectLastActivityTime, conjureProjectStatus, hasConjureUnpublishedChanges, useConjureHomeProjectState, useConjureProjectItemState

// Module 14661 (conjureHomeProjectState)
import conjureUnread from "conjureUnread" /* 10857 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 10941 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10847 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp3;
const conjureProjectMute = tmp3(10858);
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
let result = size.fileFinishedImporting("modules/conjure/home/conjureHomeProjectState.tsx");

export function hasConjureUnpublishedChanges(arg0) {
  return "nothing_built" === arg0 || "not_live" === arg0 || "live_outdated" === arg0;
}
export function conjureHomeProjectState(deleting) {
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
export function conjureHomeProjectShowsDraft(conjureHomeProjectState, stateFromStores) {
  let tmp = "in_progress" !== conjureHomeProjectState && "deleting" !== conjureHomeProjectState;
  if (tmp) {
    tmp = "nothing_built" === stateFromStores || "not_live" === stateFromStores || "live_outdated" === stateFromStores;
    const tmp3 = "nothing_built" === stateFromStores || "not_live" === stateFromStores || "live_outdated" === stateFromStores;
  }
  return tmp;
}
export function conjureProjectLastActivityTime(project) {
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
}
export const CONJURE_HOME_PROJECT_STATE_STORES = items;
export { readConjureHomeProjectState };
export function useConjureHomeProjectState(id) {
  _require = id;
  items = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => readConjureHomeProjectState(id), items);
}
export function conjureProjectStatus(publishState) {
  publishState = publishState.publishState;
  let str = "in_progress";
  if (!publishState.thinking) {
    let str5;
    if (null == publishState) {
      if (null == publishState) {
        let str6 = "draft";
        str5 = str6;
      } else {
        ConjurePublishTypes;
      }
      str6 = "published";
    } else {
      str5 = "draft";
    }
    str = str5;
  }
  return str;
}
export function useConjureProjectItemState(id) {
  let closure_1;
  id = id.id;
  const supported_surfaces = id.supported_surfaces;
  let num;
  if (supported_surfaces != null) {
    num = supported_surfaces.length;
  }
  if (num == null) {
    num = 0;
  }
  const tmp = num > 0;
  dependencyMap = tmp;
  const obj = id(504);
  items = [id, tmp];
  return obj.useStateFromStoresObject(items, () => {
    let result;
    const isThinkingResult = ConjureChatStore.isThinking(id);
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(id);
    let publishState;
    if (publishStatus != null) {
      publishState = publishStatus.publishState;
    }
    if (publishState == null) {
      publishState = null;
    }
    let str = "in_progress";
    if (!isThinkingResult) {
      let str5;
      if (null == publishState) {
        if (null == publishState) {
          let str6 = "draft";
          str5 = str6;
        } else {
          ConjurePublishTypes;
        }
        str6 = "published";
      } else {
        str5 = "draft";
      }
      str = str5;
    }
    const obj2 = { status: str, unread: result, deleting: ConjureProjectStore.isProjectDeleting(id) };
    const obj3 = conjureUnread;
    result = obj3.isConjureProjectUnread(tmp);
    if (result) {
      const tmp9Result = conjureProjectMute;
      result = !tmp9Result.isConjureProjectMuted(UserSettingsProtoStore.settings, tmp);
    }
    return obj2;
  }, items);
}
