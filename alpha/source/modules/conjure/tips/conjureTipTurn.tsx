// Module ID: 12135
// Function ID: 12136
// Name: conjureTipTurn
// Dependencies: [10964, 2]
// Exports: entryActivityAt, hasOpenAsk, newestSettledTurn

// Module 12135 (conjureTipTurn)
import conjureChatTurns from "conjureChatTurns" /* 10964 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/tips/conjureTipTurn.tsx");

export const newestSettledTurn = function newestSettledTurn(arr) {
  let diff = arr.length - 1;
  if (0 <= diff) {
    while (true) {
      let tmp2 = arr[diff];
      if ("publish_notice" !== tmp2.kind) {
        if ("project_event" !== tmp2.kind) {
          if ("context_boundary" !== tmp2.kind) {
            if ("user" === tmp2.role) {
              break;
            } else {
              let tmp4 = require;
              let obj = conjureChatTurns;
              if (obj.turnSettled(tmp2)) {
                return tmp2;
              } else {
                let tmp4Result = tmp4(10964);
                if (!tmp4Result.isStrandedSegment(arr, diff)) {
                  return null;
                }
              }
            }
          }
        }
      }
      diff = diff - 1;
    }
    return null;
  }
  return null;
};
export const hasOpenAsk = function hasOpenAsk(newestSettledTurnResult) {
  let tmp = null != newestSettledTurnResult.awaitingUser || null != newestSettledTurnResult.secretRequest || null != newestSettledTurnResult.settingsRequest;
  if (!tmp) {
    const intake = newestSettledTurnResult.intake;
    let num;
    if (intake != null) {
      num = intake.questions.length;
    }
    if (num == null) {
      num = 0;
    }
    tmp = num > 0;
  }
  return tmp;
};
export const entryActivityAt = function entryActivityAt(atResult) {
  let num = atResult.finished_at;
  const _Math = Math;
  const created_at = atResult.created_at;
  if (num == null) {
    num = 0;
  }
  let num2 = atResult.settled_at;
  if (num2 == null) {
    num2 = 0;
  }
  return max(created_at, num, num2);
};
