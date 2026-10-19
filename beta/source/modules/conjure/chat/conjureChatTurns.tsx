// Module ID: 10980
// Function ID: 10981
// Name: conjureChatTurns
// Dependencies: [10981, 10982, 2]
// Exports: findTurnSegment, hasOpenTurn, isOutsideTurn, isSegmentOfTurn, isStrandedSegment, openTurnRequesterId, replaceAt, resolveTurnIndex, stoppable, turnSettled

// Module 10980 (conjureChatTurns)
import conjureStepTimeline from "conjureStepTimeline" /* 10981 */;
import conjureChatHistory from "conjureChatHistory" /* 10982 */;
import size from "module_2" /* 2 */;

function findOpenTurn(arr) {
  let tmp;
  if (null == arr) {
    return null;
  } else {
    let diff = arr.length - 1;
    let flag2 = false;
    if (0 <= diff) {
      while (true) {
        tmp = arr[diff];
        let tmp4 = flag2;
        if ("assistant" === tmp.role) {
          let tmp5 = "side_reply" === tmp.kind || "publish_notice" === tmp.kind || "project_event" === tmp.kind || "context_boundary" === tmp.kind;
          tmp4 = flag2;
          if (!tmp5) {
            let flag = flag2;
            if (!flag) {
              let hasTerminalStepResult = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
              if (!hasTerminalStepResult) {
                let obj = conjureStepTimeline;
                hasTerminalStepResult = obj.hasTerminalStep(tmp.steps);
              }
              flag = true;
              if (!hasTerminalStepResult) {
                break;
              }
            }
            tmp4 = flag;
            if (null != tmp.turn_id) {
              let hasTerminalStepResult1 = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
              if (!hasTerminalStepResult1) {
                let obj2 = conjureStepTimeline;
                hasTerminalStepResult1 = obj2.hasTerminalStep(tmp.steps);
              }
              tmp4 = flag;
              if (!hasTerminalStepResult1) {
                return tmp;
              }
            }
          }
        }
        diff = diff - 1;
        flag2 = tmp4;
      }
      return tmp;
    }
    return null;
  }
}
const result = size.fileFinishedImporting("modules/conjure/chat/conjureChatTurns.tsx");

export const turnSettled = function turnSettled(message) {
  let hasTerminalStepResult = true === message.finished || true === message.continued || "" !== message.content || null != message.proposal || null != message.clarification || null != message.intake;
  if (!hasTerminalStepResult) {
    const obj = conjureStepTimeline;
    hasTerminalStepResult = obj.hasTerminalStep(message.steps);
  }
  return hasTerminalStepResult;
};
export { findOpenTurn };
export const openTurnRequesterId = function openTurnRequesterId(arr) {
  const tmp = findOpenTurn(arr);
  if (null != arr) {
    if (null != tmp) {
      let diff = arr.indexOf(tmp) - 1;
      if (0 <= diff) {
        while ("user" !== arr[diff].role) {
          diff = diff - 1;
        }
        let user_id = arr[diff].user_id;
        if (user_id == null) {
          user_id = null;
        }
        return user_id;
      }
      return null;
    }
  }
  return null;
};
export const hasOpenTurn = function hasOpenTurn(map) {
  return null != findOpenTurn(map);
};
export const isStrandedSegment = function isStrandedSegment(arr, diff) {
  let turn_id;
  if (arr[diff] != null) {
    turn_id = tmp.turn_id;
  }
  if (null != arr[diff]) {
    if ("assistant" === arr[diff].role) {
      if (null != turn_id) {
        if ("" === arr[diff].content) {
          let hasTerminalStepResult = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
          if (!hasTerminalStepResult) {
            const obj = conjureStepTimeline;
            hasTerminalStepResult = obj.hasTerminalStep(tmp.steps);
          }
          if (!hasTerminalStepResult) {
            diff = diff - 1;
            if (0 <= diff) {
              while ("user" !== arr[diff].role) {
                let tmp11 = tmp7.turn_id === turn_id;
                if (!tmp11) {
                  let _HermesInternal = HermesInternal;
                  tmp11 = tmp7.id === "" + conjureChatHistory.TURN_ENTRY_PREFIX + turn_id;
                }
                if (tmp11) {
                  let hasTerminalStepResult1 = true === tmp7.finished || true === tmp7.continued || "" !== tmp7.content || null != tmp7.proposal || null != tmp7.clarification || null != tmp7.intake;
                  if (!hasTerminalStepResult1) {
                    let obj2 = conjureStepTimeline;
                    hasTerminalStepResult1 = obj2.hasTerminalStep(tmp7.steps);
                  }
                  if (hasTerminalStepResult1) {
                    hasTerminalStepResult1 = true !== tmp7.continued;
                  }
                  return hasTerminalStepResult1;
                } else {
                  diff = diff - 1;
                }
              }
              return false;
            }
            return false;
          }
        }
      }
    }
  }
  return false;
};
export const isSegmentOfTurn = function isSegmentOfTurn(value, turnId) {
  let tmp = value.turn_id === turnId;
  if (!tmp) {
    const _HermesInternal = HermesInternal;
    tmp = value.id === "" + conjureChatHistory.TURN_ENTRY_PREFIX + turnId;
  }
  return tmp;
};
export const findTurnSegment = function findTurnSegment(arr3, activeTurnId) {
  if (null == activeTurnId) {
    return -1;
  } else {
    let diff = arr3.length - 1;
    if (0 <= diff) {
      while (true) {
        let tmp4 = arr3[diff];
        let tmp5 = tmp4.turn_id === activeTurnId;
        if (!tmp5) {
          let _HermesInternal = HermesInternal;
          tmp5 = tmp4.id === "" + conjureChatHistory.TURN_ENTRY_PREFIX + activeTurnId;
        }
        if (tmp5) {
          break;
        } else {
          diff = diff - 1;
        }
      }
      return diff;
    }
    return -1;
  }
};
export const resolveTurnIndex = function resolveTurnIndex(arr3, activeTurnId) {
  let num = -1;
  if (null != activeTurnId) {
    let diff = arr3.length - 1;
    num = -1;
    if (0 <= diff) {
      while (true) {
        let tmp3 = arr3[diff];
        let tmp4 = tmp3.turn_id === activeTurnId;
        if (!tmp4) {
          let _HermesInternal = HermesInternal;
          tmp4 = tmp3.id === "" + conjureChatHistory.TURN_ENTRY_PREFIX + activeTurnId;
        }
        num = diff;
        if (tmp4) {
          break;
        } else {
          diff = diff - 1;
          num = -1;
          if (0 > diff) {
            break;
          }
        }
      }
    }
  }
  if (-1 !== num) {
    return num;
  } else {
    let diff1 = arr3.length - 1;
    if (0 <= diff1) {
      while (true) {
        let tmp8 = arr3[diff1];
        if ("assistant" === tmp8.role) {
          let hasTerminalStepResult = true === tmp8.finished || true === tmp8.continued || "" !== tmp8.content || null != tmp8.proposal || null != tmp8.clarification || null != tmp8.intake;
          if (!hasTerminalStepResult) {
            let obj = conjureStepTimeline;
            hasTerminalStepResult = obj.hasTerminalStep(tmp8.steps);
          }
          if (!hasTerminalStepResult) {
            if (null == tmp8.turn_id) {
              break;
            }
          }
        }
        diff1 = diff1 - 1;
      }
      return diff1;
    }
    return -1;
  }
};
export const replaceAt = function replaceAt(value, findIndexResult, arg2) {
  const substr = value.slice();
  substr[findIndexResult] = arg2;
  return substr;
};
export const isOutsideTurn = function isOutsideTurn(value) {
  return "side_reply" === value.kind || "publish_notice" === value.kind || "project_event" === value.kind || "context_boundary" === value.kind;
};
export const stoppable = function stoppable(role) {
  let tmp = "assistant" === role.role;
  if (tmp) {
    tmp = !("side_reply" === role.kind || "publish_notice" === role.kind || "project_event" === role.kind || "context_boundary" === role.kind);
    const tmp2 = "side_reply" === role.kind || "publish_notice" === role.kind || "project_event" === role.kind || "context_boundary" === role.kind;
  }
  if (tmp) {
    let hasTerminalStepResult = true === role.finished || true === role.continued || "" !== role.content || null != role.proposal || null != role.clarification || null != role.intake;
    if (!hasTerminalStepResult) {
      const obj = conjureStepTimeline;
      hasTerminalStepResult = obj.hasTerminalStep(role.steps);
    }
    tmp = !hasTerminalStepResult;
  }
  if (tmp) {
    tmp = true !== role.stopRequested;
  }
  return tmp;
};
