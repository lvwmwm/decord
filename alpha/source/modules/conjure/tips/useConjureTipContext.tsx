// Module ID: 12277
// Function ID: 12278
// Name: useConjureTipContext
// Dependencies: [1392, 558, 576, 11816, 504, 12278, 12279, 12274, 12280, 2]

// Module 12277 (useConjureTipContext)
import conjureTipImpressions from "conjureTipImpressions" /* 12274 */;
import conjureTipDismissals from "conjureTipDismissals" /* 12280 */;
import UserStore from "UserStore" /* 1392 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, importDefault;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTipContext(arg0, arr, arg2, onAskForIdeas, arg4) {
  let closure_0;
  let stateFromStores;
  let tmp10;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp9;
  _require = arg0;
  importDefault = arr;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(42);
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
    cResult[3] = atResult;
    cResult[4] = entryActivityAtResult;
    tmp10 = entryActivityAtResult;
    tmp9 = atResult;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult6 = tmp(stateFromStores[6]);
  const conjureTipClock = tmpResult6.useConjureTipClock(tmp10, arg4);
  if (cResult[5] !== arr) {
    const tmpResult7 = tmp(stateFromStores[5]);
    const newestSettledTurnResult = tmpResult7.newestSettledTurn(arr);
    let tmp17 = null;
    if (null != newestSettledTurnResult) {
      tmp17 = null;
      const tmpResult8 = tmp(stateFromStores[5]);
      if (!tmpResult8.hasOpenAsk(newestSettledTurnResult)) {
        tmp17 = newestSettledTurnResult;
      }
    }
    cResult[5] = arr;
    cResult[6] = tmp17;
    tmp14 = tmp17;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === arg2) {
    if (cResult[8] === tmp10) {
      if (cResult[9] === arr) {
        let type;
        const tmp18 = cResult[10];
        if (tmp9 != null) {
          const projectEvent = tmp9.projectEvent;
          if (projectEvent != null) {
            type = projectEvent.type;
          }
        }
        if (tmp18 === type) {
          if (cResult[11] === conjureTipClock) {
            if (cResult[12] === arg0) {
              if (cResult[13] === tmp4) {
                if (cResult[14] === tmp14) {
                  let tmp21;
                  let tmp22;
                  let tmp24;
                  let tmp25;
                  let tmp26;
                  let tmp27;
                  let tmp28;
                  if (cResult[15] === stateFromStores) {
                    tmp21 = cResult[16];
                    tmp22 = cResult[17];
                    class P {
                      constructor(id) {
                        const obj = conjureTipImpressions;
                        const conjureTipShownAtResult = obj.conjureTipShownAt(closure_0, id);
                        let result = null;
                        if (null != conjureTipShownAtResult) {
                          const tmpResult = conjureTipImpressions;
                          result = tmpResult.countOwnMessagesSince(arr, conjureTipShownAtResult, stateFromStores);
                        }
                        return result;
                      }
                    }
                    tmp24 = cResult[19];
                    tmp25 = cResult[20];
                    tmp26 = cResult[21];
                    tmp27 = cResult[22];
                    tmp28 = cResult[23];
                  }
                  if (cResult[24] === arr) {
                    if (cResult[25] === arg0) {
                      let tmp36;
                      if (cResult[26] === stateFromStores) {
                        tmp36 = cResult[27];
                      }
                      if (cResult[28] !== arg0) {
                        class E {
                          constructor(dismissal) {
                            const obj = conjureTipDismissals;
                            return obj.isConjureTipDismissed(dismissal, closure_0);
                          }
                        }
                        class P {
                          constructor(id) {
                            const obj = conjureTipImpressions;
                            const conjureTipShownAtResult = obj.conjureTipShownAt(closure_0, id);
                            let result = null;
                            if (null != conjureTipShownAtResult) {
                              const tmpResult = conjureTipImpressions;
                              result = tmpResult.countOwnMessagesSince(arr, conjureTipShownAtResult, stateFromStores);
                            }
                            return result;
                          }
                        }
                        cResult[29] = E;
                      } else {
                        class E {
                          constructor(dismissal) {
                            const obj = conjureTipDismissals;
                            return obj.isConjureTipDismissed(dismissal, closure_0);
                          }
                        }
                      }
                      class P {
                        constructor(id) {
                          const obj = conjureTipImpressions;
                          const conjureTipShownAtResult = obj.conjureTipShownAt(closure_0, id);
                          let result = null;
                          if (null != conjureTipShownAtResult) {
                            const tmpResult = conjureTipImpressions;
                            result = tmpResult.countOwnMessagesSince(arr, conjureTipShownAtResult, stateFromStores);
                          }
                          return result;
                        }
                      }
                      if (cResult[30] === onAskForIdeas) {
                        class E {
                          constructor(dismissal) {
                            const obj = conjureTipDismissals;
                            return obj.isConjureTipDismissed(dismissal, closure_0);
                          }
                        }
                      }
                      const obj2 = { projectId: tmp23, turn: tmp24, publish: tmp25, draftHasText: tmp26, idleMs: tmp27, hasPublished: tmp28, justRemixed: tmp21, publishedSinceLastMessage: tmp22, messagesSinceShown: tmp36, isDismissed: tmp37, onAskForIdeas };
                      cResult[30] = onAskForIdeas;
                      cResult[31] = tmp21;
                      cResult[32] = tmp22;
                      cResult[33] = tmp36;
                      cResult[34] = tmp37;
                      cResult[35] = tmp23;
                      cResult[36] = tmp24;
                      cResult[37] = tmp25;
                      cResult[38] = tmp26;
                      cResult[39] = tmp27;
                      cResult[40] = tmp28;
                      cResult[41] = obj2;
                    }
                  }
                  class P {
                    constructor(id) {
                      const obj = conjureTipImpressions;
                      const conjureTipShownAtResult = obj.conjureTipShownAt(closure_0, id);
                      let result = null;
                      if (null != conjureTipShownAtResult) {
                        const tmpResult = conjureTipImpressions;
                        result = tmpResult.countOwnMessagesSince(arr, conjureTipShownAtResult, stateFromStores);
                      }
                      return result;
                    }
                  }
                  cResult[24] = arr;
                  cResult[25] = arg0;
                  cResult[26] = stateFromStores;
                  cResult[27] = P;
                  tmp36 = P;
                }
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
    class E {
      constructor(dismissal) {
        const obj = conjureTipDismissals;
        return obj.isConjureTipDismissed(dismissal, closure_0);
      }
    }
    class P {
      constructor(id) {
        const obj = conjureTipImpressions;
        const conjureTipShownAtResult = obj.conjureTipShownAt(closure_0, id);
        let result = null;
        if (null != conjureTipShownAtResult) {
          const tmpResult = conjureTipImpressions;
          result = tmpResult.countOwnMessagesSince(arr, conjureTipShownAtResult, stateFromStores);
        }
        return result;
      }
    }
    created_at = arr[diff].created_at;
  }
  let num9 = 0;
  if (null != tmp10) {
    class E {
      constructor(dismissal) {
        const obj = conjureTipDismissals;
        return obj.isConjureTipDismissed(dismissal, closure_0);
      }
    }
    num9 = Math.max(0, conjureTipClock - tmp10);
  }
  if (tmp9 != null) {
    class E {
      constructor(dismissal) {
        const obj = conjureTipDismissals;
        return obj.isConjureTipDismissed(dismissal, closure_0);
      }
    }
    class P {
      constructor(id) {
        const obj = conjureTipImpressions;
        const conjureTipShownAtResult = obj.conjureTipShownAt(closure_0, id);
        let result = null;
        if (null != conjureTipShownAtResult) {
          const tmpResult = conjureTipImpressions;
          result = tmpResult.countOwnMessagesSince(arr, conjureTipShownAtResult, stateFromStores);
        }
        return result;
      }
    }
  }
  let tmp33 = null != created_at;
  if (tmp33) {
    class E {
      constructor(dismissal) {
        const obj = conjureTipDismissals;
        return obj.isConjureTipDismissed(dismissal, closure_0);
      }
    }
    tmp33 = 0 === obj7.countOwnMessagesSince(arr, created_at, stateFromStores);
  }
  cResult[7] = arg2;
  cResult[8] = tmp10;
  cResult[9] = arr;
  if (tmp9 != null) {
    class E {
      constructor(dismissal) {
        const obj = conjureTipDismissals;
        return obj.isConjureTipDismissed(dismissal, closure_0);
      }
    }
    class P {
      constructor(id) {
        const obj = conjureTipImpressions;
        const conjureTipShownAtResult = obj.conjureTipShownAt(closure_0, id);
        let result = null;
        if (null != conjureTipShownAtResult) {
          const tmpResult = conjureTipImpressions;
          result = tmpResult.countOwnMessagesSince(arr, conjureTipShownAtResult, stateFromStores);
        }
        return result;
      }
    }
  }
  cResult[10] = undefined;
  cResult[11] = conjureTipClock;
  cResult[12] = arg0;
  cResult[13] = tmp4;
  cResult[14] = tmp14;
  cResult[15] = stateFromStores;
  cResult[16] = "remixed" === undefined;
  cResult[17] = tmp33;
  cResult[18] = arg0;
  cResult[19] = tmp14;
  cResult[20] = tmp4;
  cResult[21] = arg2;
  cResult[22] = num9;
  cResult[23] = null != created_at;
  tmp28 = tmp31;
  tmp27 = num9;
  tmp26 = arg2;
  tmp25 = tmp4;
  tmp24 = tmp14;
  tmp22 = tmp33;
  tmp21 = tmp35;
}) : (function useConjureTipContext(projectId, arr, draftHasText, onAskForIdeas, arg4) {
  let num;
  let stateFromStores;
  let tmp15;
  let type;
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
    justRemixed: "remixed" === type,
    publishedSinceLastMessage: tmp15,
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
  type = undefined;
  if (atResult != null) {
    const projectEvent = atResult.projectEvent;
    if (projectEvent != null) {
      type = projectEvent.type;
    }
  }
  tmp15 = null != created_at;
  if (tmp15) {
    const tmp3Result8 = require("conjureTipImpressions");
    tmp15 = 0 === tmp3Result8.countOwnMessagesSince(arr, created_at, stateFromStores);
  }
  return obj2;
});
let result = size.fileFinishedImporting("modules/conjure/tips/useConjureTipContext.tsx");

export default tmp2;
