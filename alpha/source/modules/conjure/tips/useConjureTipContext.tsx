// Module ID: 12370
// Function ID: 12371
// Name: useConjureTipContext
// Dependencies: [1389, 558, 576, 11803, 504, 12371, 12372, 12369, 12373, 2]

// Module 12370 (useConjureTipContext)
import conjureTipImpressions from "conjureTipImpressions" /* 12369 */;
import conjureTipDismissals from "conjureTipDismissals" /* 12373 */;
import UserStore from "UserStore" /* 1389 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTipContext(projectId, arr, draftHasText, onAskForIdeas, arg4) {
  let id;
  let stateFromStores;
  let tmp10;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp9;
  _require = projectId;
  importDefault = arr;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(31);
  const tmp4 = require("useConjurePublishAction")(projectId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [id];
    const fn = function p() {
      const currentUser = id.getCurrentUser();
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      return id;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let tmpResult = tmp(tmp2[4]);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== arr) {
    const atResult = arr.at(-1);
    let entryActivityAtResult = null;
    if (null != atResult) {
      const tmpResult8 = tmp(stateFromStores[5]);
      entryActivityAtResult = tmpResult8.entryActivityAt(atResult);
    }
    cResult[2] = arr;
    cResult[3] = atResult;
    cResult[4] = entryActivityAtResult;
    tmp10 = entryActivityAtResult;
    tmp9 = atResult;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult9 = tmp(stateFromStores[6]);
  const conjureTipClock = tmpResult9.useConjureTipClock(tmp10, arg4);
  if (cResult[5] !== arr) {
    const tmpResult10 = tmp(stateFromStores[5]);
    const newestSettledTurnResult = tmpResult10.newestSettledTurn(arr);
    let tmp17 = null;
    if (null != newestSettledTurnResult) {
      tmp17 = null;
      const tmpResult11 = tmp(stateFromStores[5]);
      if (!tmpResult11.hasOpenAsk(newestSettledTurnResult)) {
        tmp17 = newestSettledTurnResult;
      }
    }
    cResult[5] = arr;
    cResult[6] = tmp17;
    tmp14 = tmp17;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === arr) {
    let tmp18;
    let tmp27;
    if (cResult[8] === stateFromStores) {
      tmp18 = cResult[9];
    }
    let type;
    if (tmp9 != null) {
      const projectEvent = tmp9.projectEvent;
      if (projectEvent != null) {
        type = projectEvent.type;
      }
    }
    let projectEvent1 = null;
    if ("remixed" === type) {
      projectEvent1 = tmp9.projectEvent;
    }
    id = undefined;
    if (projectEvent1 != null) {
      id = projectEvent1.id;
    }
    if (id == null) {
      id = tmp18;
    }
    let num11 = 0;
    if (null != tmp10) {
      const _Math = Math;
      num11 = Math.max(0, conjureTipClock - tmp10);
    }
    if (cResult[10] !== arr) {
      const tmpResult12 = tmp(stateFromStores[5]);
      const hasNoTurnsResult = tmpResult12.hasNoTurns(arr);
      cResult[10] = arr;
      cResult[11] = hasNoTurnsResult;
      tmp27 = hasNoTurnsResult;
    } else {
      tmp27 = cResult[11];
    }
    if (cResult[12] === arr) {
      if (cResult[13] === projectId) {
        let tmp29;
        if (cResult[14] === stateFromStores) {
          tmp29 = cResult[15];
        }
        if (cResult[16] === id) {
          let tmp30;
          if (cResult[17] === projectId) {
            tmp30 = cResult[18];
          }
          if (cResult[19] === draftHasText) {
            if (cResult[20] === id) {
              if (cResult[21] === onAskForIdeas) {
                if (cResult[22] === projectId) {
                  if (cResult[23] === tmp4) {
                    if (cResult[24] === num11) {
                      if (cResult[25] === null != projectEvent1) {
                        if (cResult[26] === tmp27) {
                          if (cResult[27] === tmp29) {
                            if (cResult[28] === tmp30) {
                              let tmp33;
                              if (cResult[29] === tmp14) {
                                tmp33 = cResult[30];
                              }
                              return tmp33;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj2 = { projectId, turn: tmp14, publish: tmp4, draftHasText, idleMs: num11, justRemixed: null != projectEvent1, noTurnsYet: tmp27, ideasIntroAnchorId: id, messagesSinceShown: tmp29, isDismissed: tmp30, onAskForIdeas };
          cResult[19] = draftHasText;
          cResult[20] = id;
          cResult[21] = onAskForIdeas;
          cResult[22] = projectId;
          cResult[23] = tmp4;
          cResult[24] = num11;
          cResult[25] = null != projectEvent1;
          cResult[26] = tmp27;
          cResult[27] = tmp29;
          cResult[28] = tmp30;
          cResult[29] = tmp14;
          cResult[30] = obj2;
          tmp33 = obj2;
        }
        const fn3 = function _(dismissal) {
          const obj = conjureTipDismissals;
          return obj.isConjureTipDismissed(dismissal, projectId, id);
        };
        cResult[16] = id;
        cResult[17] = projectId;
        cResult[18] = fn3;
        tmp30 = fn3;
      }
    }
    const fn2 = function y(id) {
      const obj = conjureTipImpressions;
      const conjureTipShownAtResult = obj.conjureTipShownAt(projectId, id);
      let result = null;
      if (null != conjureTipShownAtResult) {
        const tmpResult = conjureTipImpressions;
        result = tmpResult.countOwnMessagesSince(arr, conjureTipShownAtResult, stateFromStores);
      }
      return result;
    };
    cResult[12] = arr;
    cResult[13] = projectId;
    cResult[14] = stateFromStores;
    cResult[15] = fn2;
    tmp29 = fn2;
  }
  const tmpResult13 = tmp(stateFromStores[5]);
  const newestPublishResult = tmpResult13.newestPublish(arr);
  let update;
  if (newestPublishResult != null) {
    const publishNotice = newestPublishResult.publishNotice;
    if (publishNotice != null) {
      update = publishNotice.update;
    }
  }
  let id1 = null;
  if (false === update) {
    id1 = null;
    const tmpResult14 = tmp(stateFromStores[7]);
    if (0 === tmpResult14.countOwnMessagesSince(arr, newestPublishResult.created_at, stateFromStores)) {
      id1 = newestPublishResult.id;
    }
  }
  cResult[7] = arr;
  cResult[8] = stateFromStores;
  cResult[9] = id1;
  tmp18 = id1;
}) : (function useConjureTipContext(projectId, arr, draftHasText, onAskForIdeas, arg4) {
  let id1;
  let num2;
  let stateFromStores;
  let tmp3Result12;
  _require = projectId;
  importDefault = arr;
  let tmp = stateFromStores;
  const tmp2 = require("useConjurePublishAction")(projectId);
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
    const tmp3Result = require("conjureTipTurn");
    entryActivityAtResult = tmp3Result.entryActivityAt(atResult);
  }
  const tmp3Result7 = require("conjureTipClock");
  const conjureTipClock = tmp3Result7.useConjureTipClock(entryActivityAtResult, arg4);
  const tmp3Result8 = require("conjureTipTurn");
  const newestSettledTurnResult = tmp3Result8.newestSettledTurn(arr);
  let tmp9 = null;
  if (null != newestSettledTurnResult) {
    tmp9 = null;
    const tmp3Result9 = require("conjureTipTurn");
    if (!tmp3Result9.hasOpenAsk(newestSettledTurnResult)) {
      tmp9 = newestSettledTurnResult;
    }
  }
  const tmp3Result10 = require("conjureTipTurn");
  const newestPublishResult = tmp3Result10.newestPublish(arr);
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
    const tmp3Result11 = require("conjureTipImpressions");
    if (0 === tmp3Result11.countOwnMessagesSince(arr, newestPublishResult.created_at, stateFromStores)) {
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
  const obj2 = {
    projectId,
    turn: tmp9,
    publish: tmp2,
    draftHasText,
    idleMs: num2,
    justRemixed: null != projectEvent1,
    noTurnsYet: tmp3Result12.hasNoTurns(arr),
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
  num2 = 0;
  if (null != entryActivityAtResult) {
    const _Math = Math;
    num2 = Math.max(0, conjureTipClock - entryActivityAtResult);
  }
  tmp3Result12 = require("conjureTipTurn");
  return obj2;
});
let result = size.fileFinishedImporting("modules/conjure/tips/useConjureTipContext.tsx");

export default tmp2;
