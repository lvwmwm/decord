// Module ID: 12576
// Function ID: 12577
// Name: useConjureTipContext
// Dependencies: [1384, 10849, 12400, 504, 12577, 12578, 12575, 12579, 10870, 12555, 12581, 2]
// Exports: default

// Module 12576 (useConjureTipContext)
import conjureTipImpressions from "conjureTipImpressions" /* 12575 */;
import conjureTipDismissals from "conjureTipDismissals" /* 12581 */;
import UserStore from "UserStore" /* 1384 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10849 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let result = size.fileFinishedImporting("modules/conjure/tips/useConjureTipContext.tsx");

export default function useConjureTipContext(projectId, arr, draftHasText, onAskForIdeas, arg4) {
  let id1;
  let num4;
  let stateFromStores;
  let tmp4Result22;
  _require = projectId;
  importDefault = arr;
  let tmp = importDefault;
  const tmp3 = require("useConjurePublishAction")(projectId);
  let obj = require("get initialized");
  const items = [id1];
  stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = id1.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const atResult = arr.at(-1);
  let entryActivityAtResult = null;
  if (null != atResult) {
    const tmp4Result = require("conjureTipTurn");
    entryActivityAtResult = tmp4Result.entryActivityAt(atResult);
  }
  const tmp4Result12 = require("conjureTipClock");
  const conjureTipClock = tmp4Result12.useConjureTipClock(entryActivityAtResult, arg4);
  const tmp4Result13 = require("conjureTipTurn");
  const newestSettledTurnResult = tmp4Result13.newestSettledTurn(arr);
  let tmp10 = null;
  if (null != newestSettledTurnResult) {
    tmp10 = null;
    const tmp4Result14 = require("conjureTipTurn");
    if (!tmp4Result14.hasOpenAsk(newestSettledTurnResult)) {
      tmp10 = newestSettledTurnResult;
    }
  }
  const tmp4Result15 = require("conjureTipTurn");
  const newestPublishResult = tmp4Result15.newestPublish(arr);
  let update;
  if (newestPublishResult != null) {
    const publishNotice = newestPublishResult.publishNotice;
    if (publishNotice != null) {
      update = publishNotice.update;
    }
  }
  let id = null;
  if (false === update) {
    id = null;
    const tmp4Result16 = require("conjureTipImpressions");
    if (0 === tmp4Result16.countOwnMessagesSince(arr, newestPublishResult.created_at, stateFromStores)) {
      id = newestPublishResult.id;
    }
  }
  let type;
  if (atResult != null) {
    const projectEvent = atResult.projectEvent;
    if (projectEvent != null) {
      type = projectEvent.type;
    }
  }
  let projectEvent1 = null;
  if ("remixed" === type) {
    projectEvent1 = atResult.projectEvent;
  }
  id1 = undefined;
  if (projectEvent1 != null) {
    id1 = projectEvent1.id;
  }
  if (id1 == null) {
    id1 = id;
  }
  let num2;
  const tmp17 = tmp(stateFromStores[7])(projectId, projectEvent1);
  if (projectEvent1 != null) {
    const settings_keys = projectEvent1.settings_keys;
    if (settings_keys != null) {
      num2 = settings_keys.length;
    }
  }
  if (num2 == null) {
    num2 = 0;
  }
  const items1 = [num2];
  const items2 = [num2, projectId];
  const tmp4Result17 = require("get initialized");
  const stateFromStores1 = tmp4Result17.useStateFromStores(items1, () => {
    const tmp = num2 > 0 && null == ConjureSettingsStore.getSettings(projectId);
    return tmp;
  }, items2);
  const tmp4Result18 = require("ConjureHostApproval");
  const conjureHostApprovals = tmp4Result18.useConjureHostApprovals(projectId);
  const tmp4Result19 = require("conjureTipTurn");
  let hasRunningTurnResult = tmp4Result19.hasRunningTurn(arr);
  if (!hasRunningTurnResult) {
    let hasOpenAskResult = null != newestSettledTurnResult;
    if (hasOpenAskResult) {
      const tmp4Result20 = require("conjureTipTurn");
      hasOpenAskResult = tmp4Result20.hasOpenAsk(newestSettledTurnResult);
    }
    hasRunningTurnResult = hasOpenAskResult;
  }
  if (!hasRunningTurnResult) {
    const tmp4Result21 = require("conjurePendingPlan");
    hasRunningTurnResult = null != tmp4Result21.pendingPlanRenderId(arr);
  }
  if (!hasRunningTurnResult) {
    hasRunningTurnResult = null != tmp17;
  }
  if (!hasRunningTurnResult) {
    hasRunningTurnResult = stateFromStores1;
  }
  if (!hasRunningTurnResult) {
    hasRunningTurnResult = 0 !== conjureHostApprovals.length;
  }
  const obj2 = {
    projectId,
    turn: tmp10,
    publish: tmp3,
    draftHasText,
    agentIdle: !hasRunningTurnResult,
    idleMs: num4,
    justRemixed: null != projectEvent1,
    noTurnsYet: tmp4Result22.hasNoTurns(arr),
    ideasIntroAnchorId: id1,
    messagesSinceShown(id) {
      const obj = conjureTipImpressions;
      const conjureTipShownAtResult = obj.conjureTipShownAt(projectId, id);
      let result = null;
      if (null != conjureTipShownAtResult) {
        const tmpResult = conjureTipImpressions;
        result = tmpResult.countOwnMessagesSince(arr, conjureTipShownAtResult, stateFromStores);
      }
      return result;
    },
    isDismissed(dismissal) {
      const obj = conjureTipDismissals;
      return obj.isConjureTipDismissed(dismissal, projectId, id1);
    },
    onAskForIdeas
  };
  num4 = 0;
  if (null != entryActivityAtResult) {
    const _Math = Math;
    num4 = Math.max(0, conjureTipClock - entryActivityAtResult);
  }
  tmp4Result22 = require("conjureTipTurn");
  return obj2;
};
