// Module ID: 12153
// Function ID: 12154
// Name: useConjureTipContext
// Dependencies: [1392, 558, 576, 11692, 504, 12154, 12155, 12150, 12156, 2]

// Module 12153 (useConjureTipContext)
import conjureTipImpressions from "conjureTipImpressions" /* 12150 */;
import conjureTipDismissals from "conjureTipDismissals" /* 12156 */;
import UserStore from "UserStore" /* 1392 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, importDefault;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTipContext(arg0, arr, arg2, onAskForIdeas, arg4) {
  let closure_0;
  let stateFromStores;
  let tmp13;
  let tmp5;
  let tmp6;
  let tmp9;
  _require = arg0;
  importDefault = arr;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(38);
  const tmp4 = require("useConjurePublishAction")(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      currentUser = currentUser.getCurrentUser();
      let id;
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
      const tmpResult5 = tmp(stateFromStores[5]);
      entryActivityAtResult = tmpResult5.entryActivityAt(atResult);
    }
    cResult[2] = arr;
    cResult[3] = entryActivityAtResult;
    tmp9 = entryActivityAtResult;
  } else {
    tmp9 = cResult[3];
  }
  const tmpResult6 = tmp(stateFromStores[6]);
  const conjureTipClock = tmpResult6.useConjureTipClock(tmp9, arg4);
  if (cResult[4] !== arr) {
    const tmpResult7 = tmp(stateFromStores[5]);
    const newestSettledTurnResult = tmpResult7.newestSettledTurn(arr);
    let tmp16 = null;
    if (null != newestSettledTurnResult) {
      tmp16 = null;
      const tmpResult8 = tmp(stateFromStores[5]);
      if (!tmpResult8.hasOpenAsk(newestSettledTurnResult)) {
        tmp16 = newestSettledTurnResult;
      }
    }
    cResult[4] = arr;
    cResult[5] = tmp16;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === arg2) {
    if (cResult[7] === tmp9) {
      if (cResult[8] === arr) {
        if (cResult[9] === conjureTipClock) {
          if (cResult[10] === arg0) {
            if (cResult[11] === tmp4) {
              if (cResult[12] === tmp13) {
                let tmp17;
                let tmp18;
                let tmp19;
                let tmp20;
                let tmp21;
                let tmp22;
                let tmp23;
                if (cResult[13] === stateFromStores) {
                  tmp17 = cResult[14];
                  tmp18 = cResult[15];
                  tmp19 = cResult[16];
                  tmp20 = cResult[17];
                  tmp21 = cResult[18];
                  tmp22 = cResult[19];
                  tmp23 = cResult[20];
                }
                if (cResult[21] === arr) {
                  if (cResult[22] === arg0) {
                    let tmp28;
                    if (cResult[23] === stateFromStores) {
                      tmp28 = cResult[24];
                    }
                    if (cResult[25] !== arg0) {
                      class P {
                        constructor(dismissal) {
                          const obj = conjureTipDismissals;
                          return obj.isConjureTipDismissed(dismissal, closure_0);
                        }
                      }
                      cResult[25] = arg0;
                      cResult[26] = P;
                    } else {
                      class P {
                        constructor(dismissal) {
                          const obj = conjureTipDismissals;
                          return obj.isConjureTipDismissed(dismissal, closure_0);
                        }
                      }
                    }
                    if (cResult[27] === onAskForIdeas) {
                      class P {
                        constructor(dismissal) {
                          const obj = conjureTipDismissals;
                          return obj.isConjureTipDismissed(dismissal, closure_0);
                        }
                      }
                    }
                    const obj2 = { projectId: tmp18, turn: tmp19, publish: tmp20, draftHasText: tmp21, idleMs: tmp22, hasPublished: tmp23, publishedSinceLastMessage: tmp17, messagesSinceShown: tmp28, isDismissed: tmp29, onAskForIdeas };
                    cResult[27] = onAskForIdeas;
                    cResult[28] = tmp17;
                    cResult[29] = tmp28;
                    cResult[30] = tmp29;
                    cResult[31] = tmp18;
                    cResult[32] = tmp19;
                    cResult[33] = tmp20;
                    cResult[34] = tmp21;
                    cResult[35] = tmp22;
                    cResult[36] = tmp23;
                    cResult[37] = obj2;
                  }
                }
                const fn2 = function y(id) {
                  const obj = conjureTipImpressions;
                  const conjureTipShownAtResult = obj.conjureTipShownAt(closure_0, id);
                  let result = null;
                  if (null != conjureTipShownAtResult) {
                    const tmpResult = conjureTipImpressions;
                    result = tmpResult.countOwnMessagesSince(arr, conjureTipShownAtResult, stateFromStores);
                  }
                  return result;
                };
                cResult[21] = arr;
                cResult[22] = arg0;
                cResult[23] = stateFromStores;
                cResult[24] = fn2;
                tmp28 = fn2;
              }
            }
          }
        }
      }
    }
  }
  const diff = arr.length - 1;
  let created_at = null;
  if (0 <= diff) {
    class P {
      constructor(dismissal) {
        const obj = conjureTipDismissals;
        return obj.isConjureTipDismissed(dismissal, closure_0);
      }
    }
    while ("publish_notice" !== arr[diff].kind) {
      class P {
        constructor(dismissal) {
          const obj = conjureTipDismissals;
          return obj.isConjureTipDismissed(dismissal, closure_0);
        }
      }
      created_at = null;
      if (0 <= diff) {
        class P {
          constructor(dismissal) {
            const obj = conjureTipDismissals;
            return obj.isConjureTipDismissed(dismissal, closure_0);
          }
        }
      }
    }
    created_at = arr[diff].created_at;
  }
  let num8 = 0;
  if (null != tmp9) {
    class P {
      constructor(dismissal) {
        const obj = conjureTipDismissals;
        return obj.isConjureTipDismissed(dismissal, closure_0);
      }
    }
    num8 = Math.max(0, conjureTipClock - tmp9);
  }
  let tmp27 = null != created_at;
  if (tmp27) {
    class P {
      constructor(dismissal) {
        const obj = conjureTipDismissals;
        return obj.isConjureTipDismissed(dismissal, closure_0);
      }
    }
    tmp27 = 0 === obj7.countOwnMessagesSince(arr, created_at, stateFromStores);
  }
  cResult[6] = arg2;
  cResult[7] = tmp9;
  cResult[8] = arr;
  cResult[9] = conjureTipClock;
  cResult[10] = arg0;
  cResult[11] = tmp4;
  cResult[12] = tmp13;
  cResult[13] = stateFromStores;
  cResult[14] = tmp27;
  cResult[15] = arg0;
  cResult[16] = tmp13;
  cResult[17] = tmp4;
  cResult[18] = arg2;
  cResult[19] = num8;
  cResult[20] = null != created_at;
  tmp17 = tmp27;
  tmp23 = tmp26;
  tmp22 = num8;
  tmp21 = arg2;
  tmp20 = tmp4;
  tmp19 = tmp13;
  tmp18 = arg0;
}) : (function useConjureTipContext(projectId, arr, draftHasText, onAskForIdeas, arg4) {
  let num;
  let stateFromStores;
  let tmp14;
  _require = projectId;
  importDefault = arr;
  let tmp = stateFromStores;
  const tmp2 = require("useConjurePublishAction")(projectId);
  let obj = require("get initialized");
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
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
  const tmp3Result5 = require("conjureTipClock");
  const conjureTipClock = tmp3Result5.useConjureTipClock(entryActivityAtResult, arg4);
  const tmp3Result6 = require("conjureTipTurn");
  const newestSettledTurnResult = tmp3Result6.newestSettledTurn(arr);
  let tmp9 = null;
  if (null != newestSettledTurnResult) {
    tmp9 = null;
    const tmp3Result7 = require("conjureTipTurn");
    if (!tmp3Result7.hasOpenAsk(newestSettledTurnResult)) {
      tmp9 = newestSettledTurnResult;
    }
  }
  let diff = arr.length - 1;
  let created_at = null;
  if (0 <= diff) {
    while ("publish_notice" !== arr[diff].kind) {
      diff = diff - 1;
      created_at = null;
    }
    created_at = arr[diff].created_at;
  }
  const obj2 = {
    projectId,
    turn: tmp9,
    publish: tmp2,
    draftHasText,
    idleMs: num,
    hasPublished: null != created_at,
    publishedSinceLastMessage: tmp14,
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
      return obj.isConjureTipDismissed(dismissal, projectId);
    },
    onAskForIdeas
  };
  num = 0;
  if (null != entryActivityAtResult) {
    const _Math = Math;
    num = Math.max(0, conjureTipClock - entryActivityAtResult);
  }
  tmp14 = null != created_at;
  if (tmp14) {
    const tmp3Result8 = require("conjureTipImpressions");
    tmp14 = 0 === tmp3Result8.countOwnMessagesSince(arr, created_at, stateFromStores);
  }
  return obj2;
});
let result = size.fileFinishedImporting("modules/conjure/tips/useConjureTipContext.tsx");

export default tmp2;
