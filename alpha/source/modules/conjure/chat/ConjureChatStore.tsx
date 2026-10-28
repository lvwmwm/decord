// Module ID: 10734
// Function ID: 10735
// Name: ConjureChatStore
// Dependencies: [109, 6808, 10735, 10737, 10736, 504, 10738, 1125, 3863, 584, 2]
// Exports: getOlderHistoryCursor

// Module 10734 (ConjureChatStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _modDef3863 from "module_3863" /* 3863 */;
import conjureChatTurns from "conjureChatTurns" /* 10735 */;
import conjureStepTimeline from "conjureStepTimeline" /* 10736 */;
import conjureChatHistory from "conjureChatHistory" /* 10737 */;
import conjureAgentReaction from "conjureAgentReaction" /* 10738 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import size from "module_2" /* 2 */;

let set3, set4;

const f108785 = (kind) => "preview_ready" === kind.kind;
function patchTurn(projectId, turnId, fn) {
  const value = map.get(projectId);
  if (null != value) {
    const obj6 = conjureChatTurns;
    const turnIndex = obj6.resolveTurnIndex(value, turnId);
    if (-1 !== turnIndex) {
      let tmp10 = tmp9;
      if (null != turnId) {
        tmp10 = tmp9;
        if (null == value[turnIndex].turn_id) {
          tmp10 = tmp9;
          const tmp18Result = conjureChatTurns;
          if (!tmp18Result.isSegmentOfTurn(value[turnIndex], turnId)) {
            const obj2 = { turn_id: turnId };
            const merged = Object.assign(tmp9);
            tmp10 = obj2;
          }
        }
      }
      const tmp14 = fn(tmp10);
      if (tmp14 !== value[turnIndex]) {
        set2 = map.set;
        const tmp18Result3 = conjureChatTurns;
        set2(projectId, tmp18Result3.replaceAt(value, turnIndex, tmp14));
      }
    } else {
      let obj;
      const items = [];
      set = map.set;
      const arraySpreadResult = HermesBuiltin.arraySpread(items, value, 0);
      const newMessage = conjureChatHistory.newMessage;
      conjureChatHistory;
      if (null != turnId) {
        obj = { turnId };
        const obj3 = { turnId };
      } else {
        obj = {};
      }
      items[arraySpreadResult] = fn(newMessage("assistant", "", obj));
      const result = set(projectId, items);
    }
  }
}
function recordThinkingTransition(projectId) {
  let flag = map2.get(projectId);
  const obj = map2;
  if (flag == null) {
    flag = false;
  }
  const obj2 = conjureChatTurns;
  const hasOpenTurnResult = obj2.hasOpenTurn(map.get(projectId));
  const obj3 = map;
  if (flag !== hasOpenTurnResult) {
    const result = obj.set(projectId, hasOpenTurnResult);
    const index = closure_10.indexOf(projectId);
    if (-1 !== index) {
      closure_10.splice(index, 1);
    }
    closure_10.unshift(projectId);
    if (hasOpenTurnResult) {
      map1.delete(projectId);
    } else {
      const value = obj3.get(projectId);
      let tmp5 = null;
      if (null != value) {
        let diff = value.length - 1;
        tmp5 = null;
        if (0 <= diff) {
          while (true) {
            if ("assistant" === value[diff].role) {
              let obj4 = conjureChatTurns;
              if (!obj4.isOutsideTurn(value[diff])) {
                break;
              }
            }
            diff = diff - 1;
            tmp5 = null;
          }
          tmp5 = value[diff];
        }
      }
      let tmp10 = null != tmp5;
      if (tmp10) {
        const str2 = tmp5.content;
        let someResult = "" !== str2.trim() || null != tmp5.proposal || null != tmp5.clarification || null != tmp5.intake;
        if (!someResult) {
          const steps = tmp5.steps;
          someResult = steps.some((kind) => {
            const TERMINAL_STEP_KINDS = conjureStepTimeline.TERMINAL_STEP_KINDS;
            const hasItem = TERMINAL_STEP_KINDS.has(kind.kind) && "terminal_error" !== kind.kind;
            return hasItem;
          });
        }
        tmp10 = someResult;
      }
      if (tmp10) {
        const _Date = Date;
        const result1 = obj5.set(projectId, Date.now());
      } else {
        map1.delete(projectId);
      }
      const value2 = map.get(projectId);
      if (null != value2) {
        let diff1 = value2.length - 1;
        if (0 <= diff1) {
          while ("assistant" !== value2[diff1].role) {
            diff1 = diff1 - 1;
          }
          if (null == value2[diff1].finished_at) {
            const obj7 = conjureChatTurns;
            if (obj7.turnSettled(value2[diff1])) {
              const items = [];
              set = map.set;
              const arraySpreadResult = HermesBuiltin.arraySpread(items, value2.slice(0, diff1), 0);
              const obj6 = { finished_at: Date.now() };
              const merged = Object.assign(tmp16);
              const _Date2 = Date;
              items[arraySpreadResult] = obj6;
              HermesBuiltin.arraySpread(items, value2.slice(diff1 + 1), arraySpreadResult + 1);
              const result2 = set(projectId, items);
            }
          }
        }
      }
    }
  }
}
function purgeProject(projectId) {
  let deleteResult = map.delete(projectId);
  const deleteResult1 = map5.delete(projectId);
  const deleteResult2 = set2.delete(projectId);
  const deleteResult3 = map1.delete(projectId);
  const deleteResult4 = map2.delete(projectId);
  const deleteResult5 = map3.delete(projectId);
  const deleteResult6 = map4.delete(projectId);
  const deleteResult7 = set.delete(projectId);
  const deleteResult8 = set1.delete(projectId);
  const index = closure_10.indexOf(projectId);
  const arr = closure_10;
  if (-1 !== index) {
    arr.splice(index, 1);
  }
  if (!deleteResult) {
    deleteResult = deleteResult1;
  }
  if (!deleteResult) {
    deleteResult = deleteResult2;
  }
  if (!deleteResult) {
    deleteResult = deleteResult3;
  }
  if (!deleteResult) {
    deleteResult = deleteResult4;
  }
  if (!deleteResult) {
    deleteResult = deleteResult5;
  }
  if (!deleteResult) {
    deleteResult = deleteResult6;
  }
  if (!deleteResult) {
    deleteResult = deleteResult7;
  }
  if (!deleteResult) {
    deleteResult = deleteResult8;
  }
  if (!deleteResult) {
    deleteResult = tmp11;
  }
  return deleteResult;
}
function applyAgentReactions(arr) {
  map = new Map();
  const iter = arr[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if ("assistant" === nextResult.role) {
      let steps = tmp2.steps;
      let tmp3 = steps;
      for (const item10022 of steps) {
        let tmp4 = item10022;
        if ("reaction" === item10022.kind) {
          if (null != tmp4.message_id) {
            let obj2 = map(10738);
            let result = obj2.agentReactionFromStep(tmp4);
            if (null != result) {
              let result1 = map.set(tmp4.message_id, tmp10);
            }
          }
        }
        continue;
      }
    }
    continue;
  }
  let mapped = arr;
  if (0 !== map.size) {
    mapped = arr.map((role) => {
      let value;
      if ("user" === role.role) {
        value = map.get(role.id);
      }
      let tmp3 = role;
      if (null != value) {
        tmp3 = role;
        const obj = conjureAgentReaction;
        if (!obj.sameAgentReaction(role.agentReaction, value)) {
          const obj2 = { agentReaction: value };
          const merged = Object.assign(role);
          tmp3 = obj2;
        }
      }
      return tmp3;
    });
  }
  return mapped;
}
let closure_3 = ["disposition"];
let closure_4 = ["disposition"];
let map = new Map();
const map1 = new Map();
const map2 = new Map();
const authStore = [];
const map3 = new Map();
const map4 = new Map();
let set = new Set();
let set1 = new Set();
let closure_15 = [];
const Store = get_initializedDefault.Store;
class ConjureChatStore extends Store {
  initialize() {
    this.waitFor(ConjureProjectStore);
  }
  getMessages(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = closure_15;
    }
    return value;
  }
  hasPendingSettingsRequest(arg0) {
    const messages = this.getMessages(arg0);
    return null != tmp && "assistant" === tmp.role && null != tmp.settingsRequest;
  }
  isThinking(id) {
    const obj = conjureChatTurns;
    return obj.hasOpenTurn(map.get(id));
  }
  hasLoadedHistory(projectId) {
    return map5.has(projectId);
  }
  getHistoryLoads(projectId) {
    let num = map6.get(projectId);
    if (num == null) {
      num = 0;
    }
    return num;
  }
  isHistoryUnavailable(projectId) {
    return set2.has(projectId);
  }
  getFinishedAt(id) {
    let tmp = null;
    const obj = conjureChatTurns;
    if (!obj.hasOpenTurn(map.get(id))) {
      let value = map1.get(id);
      if (value == null) {
        value = null;
      }
      tmp = value;
    }
    return tmp;
  }
  getProjectUsage(projectId) {
    let value = map3.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getThinkingActivity(projectId) {
    let value = map4.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  isCompacting(projectId) {
    return set.has(projectId);
  }
  isSaving(arg0) {
    return set1.has(arg0);
  }
  getActivityOrderedProjectIds() {
    return closure_10.slice();
  }
}
const prototype = ConjureChatStore.prototype;
const map5 = new Map();
let set2 = new Set();
const map6 = new Map();
let obj = {
  LOGOUT: function handleLogout() {
    const obj = map;
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === map4.size) {
              if (0 === set.size) {
                if (0 === set1.size) {
                  if (0 === map5.size) {
                    if (0 === set2.size) {
                      if (0 === closure_10.length) {
                        return false;
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
    obj.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    set.clear();
    set1.clear();
    map5.clear();
    set2.clear();
    closure_10.length = 0;
  },
  CONJURE_CHAT_HISTORY_SET: function handleChatHistorySet(arg0) {
    let cursor;
    let degraded;
    let entries;
    let items;
    let projectId;
    ({ projectId, entries, cursor, degraded } = arg0);
    set1 = undefined;
    let c1;
    let num2;
    let tmp = map6;
    let num = map6.get(projectId);
    if (num == null) {
      num = 0;
    }
    const result = set(projectId, num + 1);
    let value = map5.get(projectId);
    if (map5.has(projectId)) {
      let value2 = map.get(projectId);
      if (value2 == null) {
        value2 = [];
      }
      items = value2;
    } else {
      items = [];
    }
    let tmp6 = cursor;
    if (cursor == null) {
      tmp6 = null;
    }
    map5.set(projectId, tmp6);
    if (true === degraded) {
      set2.add(projectId);
    } else {
      map5.set.delete(projectId);
    }
    map4.delete(projectId);
    map6.set.delete(projectId);
    set1.delete(projectId);
    const self = this;
    set1 = new Set();
    const found = entries.filter((id) => {
      let tmp = null == id.id;
      if (!tmp) {
        const hasItem = set1.has(id.id);
        let flag = !hasItem;
        const obj = set1;
        if (flag) {
          obj.add(id.id);
          flag = true;
        }
        tmp = flag;
      }
      return tmp;
    });
    let obj = conjureChatHistory;
    const messagesFromHistoryResult = obj.messagesFromHistory(found);
    c1 = messagesFromHistoryResult;
    num2 = -1;
    if (null != cursor) {
      num2 = -1;
      if (true !== degraded) {
        num2 = messagesFromHistoryResult.findIndex((id) => null != id.id);
      }
    }
    let num3 = -1;
    if (-1 !== num2) {
      num3 = items.findIndex((id) => id.id === _undefined[num2].id);
    }
    if (-1 !== num3) {
      set3 = map5.set;
      if (value == null) {
        value = null;
      }
      set3(projectId, value);
    }
    let tmp23 = messagesFromHistoryResult;
    set4 = map.set;
    const foldDividers = tmp17(10737).foldDividers;
    conjureChatHistory;
    const tmp21 = applyAgentReactions;
    if (-1 !== num3) {
      const items1 = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items1, items.slice(0, num3), 0);
      HermesBuiltin.arraySpread(items1, messagesFromHistoryResult.slice(num2), arraySpreadResult);
      tmp23 = items1;
    }
    set4(projectId, tmp21(foldDividers(tmp23)));
    recordThinkingTransition(projectId);
  },
  CONJURE_CHAT_HISTORY_PREPEND: function handleChatHistoryPrepend(cursor) {
    let entries;
    let projectId;
    ({ projectId, entries } = cursor);
    set1 = undefined;
    const result = map5.set(projectId, cursor.cursor);
    if (0 !== entries.length) {
      let items1 = map.get(projectId);
      const tmp15 = map;
      if (items1 == null) {
        items1 = [];
      }
      const _Set = Set;
      const self = this;
      const self2 = this;
      const obj = conjureChatHistory;
      const messagesFromHistoryResult = obj.messagesFromHistory(entries);
      set1 = new Set(items1.flatMap((id) => {
        let items;
        if (null == id.id) {
          items = [];
        } else {
          items = [id.id];
        }
        return items;
      }));
      const found = messagesFromHistoryResult.filter((id) => {
        const tmp = null == id.id || !set1.has(id.id);
        return tmp;
      });
      let items = [];
      set = tmp15.set;
      const foldDividers = conjureChatHistory.foldDividers;
      conjureChatHistory;
      HermesBuiltin.arraySpread(items, items1, HermesBuiltin.arraySpread(items, found, 0));
      const result1 = set(projectId, applyAgentReactions(foldDividers(items)));
    }
  },
  CONJURE_CHAT_MESSAGE_APPEND: function handleChatMessageAppend(optimisticId) {
    let attachments;
    let content;
    let id;
    let projectId;
    let timestamp;
    let userId;
    ({ projectId, id } = optimisticId);
    optimisticId = optimisticId.optimisticId;
    const held = optimisticId.held;
    let c2;
    let obj = map;
    ({ content, userId, timestamp, attachments } = optimisticId);
    let items2 = map.get(projectId);
    if (items2 == null) {
      items2 = [];
    }
    const findIndexResult = items2.findIndex((id) => id.id === id);
    c2 = findIndexResult;
    if (-1 !== findIndexResult) {
      if (true === items2[findIndexResult].held) {
        if (true !== held) {
          const mapped = items2.map((item, index) => {
            let tmp = item;
            if (index === c2) {
              const obj = { held: undefined };
              const merged = Object.assign(item);
              tmp = obj;
            }
            return tmp;
          });
          const obj4 = conjureChatTurns;
          const tmp17 = require;
          if (!obj4.hasOpenTurn(mapped)) {
            const push2 = mapped.push;
            const tmp17Result = tmp17(10737);
            push2(tmp17Result.newMessage("assistant", ""));
          }
          const result = obj.set(projectId, mapped);
          recordThinkingTransition(projectId);
        }
      }
      return false;
    } else {
      const obj2 = { ts: timestamp, id, userId, attachments };
      const obj6 = conjureChatHistory;
      const newMessageResult = obj6.newMessage("user", content, obj2);
      let hasOpenTurnResult = true === held;
      if (hasOpenTurnResult) {
        newMessageResult.held = true;
      }
      let num = -1;
      if (null != optimisticId) {
        num = items2.findIndex((id) => id.id === optimisticId);
      }
      if (-1 !== num) {
        newMessageResult.render_id = items2[num].render_id;
        const items = [];
        set = obj.set;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, items2.slice(0, num), 0);
        items[arraySpreadResult] = newMessageResult;
        HermesBuiltin.arraySpread(items, items2.slice(num + 1), arraySpreadResult + 1);
        const result1 = set(projectId, items);
        recordThinkingTransition(projectId);
      } else {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, items2, 0)] = newMessageResult;
        if (!hasOpenTurnResult) {
          const tmp23Result = conjureChatTurns;
          hasOpenTurnResult = tmp23Result.hasOpenTurn(items1);
        }
        if (!hasOpenTurnResult) {
          const push = items1.push;
          const tmp23Result2 = conjureChatHistory;
          push(tmp23Result2.newMessage("assistant", ""));
        }
        const result2 = obj.set(projectId, items1);
        recordThinkingTransition(projectId);
      }
    }
  },
  CONJURE_CHAT_MESSAGE_DISPOSITION: function handleChatMessageDisposition(arg0) {
    let activeTurnId;
    let closure_129_0;
    let disposition;
    let finished_at;
    let projectId;
    ({ projectId, id: closure_129_0, activeTurnId, disposition } = arg0);
    let c1;
    const value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const findIndexResult = value.findIndex((id) => id.id === closure_1_0);
      c1 = findIndexResult;
      if (-1 === findIndexResult) {
        return false;
      } else {
        let found = value;
        if ("steered" === disposition) {
          found = value.filter((in_reply_to, index) => index <= c1 || in_reply_to.in_reply_to !== closure_1_0 || "queued" !== in_reply_to.acknowledges);
        }
        let arr3 = found;
        if (found[findIndexResult].disposition !== disposition) {
          const items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(items, found.slice(0, findIndexResult), 0);
          const obj2 = { disposition };
          const merged = Object.assign(found[findIndexResult]);
          items[arraySpreadResult] = obj2;
          HermesBuiltin.arraySpread(items, found.slice(findIndexResult + 1), arraySpreadResult + 1);
          arr3 = items;
        }
        let num4 = -1;
        if ("steered" === disposition) {
          const obj3 = conjureChatTurns;
          num4 = obj3.findTurnSegment(arr3, activeTurnId);
        }
        let tmp10 = num4;
        let arr5 = arr3;
        if ("steered" === disposition) {
          tmp10 = num4;
          arr5 = arr3;
          if (-1 === num4) {
            tmp10 = num4;
            arr5 = arr3;
            if (null != activeTurnId) {
              const obj10 = conjureChatTurns;
              const turnIndex = obj10.resolveTurnIndex(arr3, activeTurnId);
              tmp10 = num4;
              arr5 = arr3;
              if (-1 !== turnIndex) {
                tmp10 = num4;
                arr5 = arr3;
                if (turnIndex < findIndexResult) {
                  const obj4 = { turn_id: activeTurnId };
                  const merged1 = Object.assign(arr3[turnIndex]);
                  if (0 === obj4.steps.length) {
                    const items1 = [];
                    set2 = map.set;
                    const arraySpreadResult11 = HermesBuiltin.arraySpread(items1, arr3.slice(0, turnIndex), 0);
                    const arraySpreadResult12 = HermesBuiltin.arraySpread(items1, arr3.slice(turnIndex + 1, findIndexResult + 1), arraySpreadResult11);
                    items1[arraySpreadResult12] = obj4;
                    HermesBuiltin.arraySpread(items1, arr3.slice(findIndexResult + 1), arraySpreadResult12 + 1);
                    set2(projectId, items1);
                    recordThinkingTransition(projectId);
                  } else {
                    const items2 = [];
                    const arraySpreadResult14 = HermesBuiltin.arraySpread(items2, arr3.slice(0, turnIndex), 0);
                    items2[arraySpreadResult14] = obj4;
                    HermesBuiltin.arraySpread(items2, arr3.slice(turnIndex + 1), arraySpreadResult14 + 1);
                    tmp10 = turnIndex;
                    arr5 = items2;
                  }
                }
              }
            }
          }
        }
        if (-1 !== tmp10) {
          if (tmp10 <= findIndexResult) {
            let sum;
            let everyResult = null != tmp53;
            if (everyResult) {
              everyResult = "assistant" === tmp53.role;
            }
            if (everyResult) {
              everyResult = null == tmp53.turn_id;
            }
            if (everyResult) {
              const steps = tmp53.steps;
              everyResult = steps.every(f108785);
            }
            if (everyResult) {
              const obj5 = conjureChatTurns;
              everyResult = !obj5.isOutsideTurn(tmp53);
            }
            if (everyResult) {
              const obj6 = conjureChatTurns;
              everyResult = !obj6.turnSettled(tmp53);
            }
            if (everyResult) {
              sum = findIndexResult + 2;
            } else {
              sum = findIndexResult + 1;
            }
            const items3 = [, ];
            set = map.set;
            const arraySpreadResult16 = HermesBuiltin.arraySpread(items3, arr5.slice(0, tmp10), 0);
            const obj7 = { continued: true, finished_at };
            const merged2 = Object.assign(arr5[tmp10]);
            finished_at = arr5[tmp10].finished_at;
            if (finished_at == null) {
              const _Date = Date;
              finished_at = Date.now();
            }
            items3[arraySpreadResult16] = obj7;
            const arraySpreadResult17 = HermesBuiltin.arraySpread(items3, arr5.slice(tmp10 + 1, findIndexResult + 1), arraySpreadResult16 + 1);
            const obj9 = { turnId: activeTurnId };
            const obj8 = conjureChatHistory;
            items3[arraySpreadResult17] = obj8.newMessage("assistant", "", obj9);
            HermesBuiltin.arraySpread(items3, arr5.slice(sum), arraySpreadResult17 + 1);
            const result = set(projectId, items3);
            recordThinkingTransition(projectId);
          }
        }
        if (arr5 !== value) {
          const result1 = obj.set(projectId, arr5);
        }
        return arr5 !== value;
      }
    }
  },
  CONJURE_CHAT_MESSAGE_REACTION: function handleChatMessageReaction(arg0) {
    let closure_129_0;
    let projectId;
    let reaction;
    ({ projectId, id: closure_129_0, reaction } = arg0);
    const tmp = map;
    const value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const findIndexResult = value.findIndex((role) => "user" === role.role && role.id === closure_1_0);
      if (-1 !== findIndexResult) {
        const obj2 = conjureAgentReaction;
        if (!obj2.sameAgentReaction(value[findIndexResult].agentReaction, reaction)) {
          const obj = { agentReaction: reaction };
          set = tmp.set;
          const replaceAt = tmp2(10735).replaceAt;
          conjureChatTurns;
          const merged = Object.assign(value[findIndexResult]);
          const result = set(projectId, replaceAt(value, findIndexResult, obj));
        }
      }
      return false;
    }
  },
  CONJURE_CHAT_MESSAGE_CANCELLED: function handleChatMessageCancelled(withdrawn) {
    let closure_129_0;
    let projectId;
    ({ projectId, id: closure_129_0 } = withdrawn);
    let id;
    withdrawn = withdrawn.withdrawn;
    const value = map.get(projectId);
    const obj = map;
    if (null == value) {
      return false;
    } else {
      let tmp;
      if (true === withdrawn) {
        tmp = value[value.findIndex(value, (id) => id.id === closure_1_0) + 1];
      }
      id = null;
      if (null != tmp) {
        id = null;
        if ("assistant" === tmp.role) {
          id = null;
          if ("" === tmp.content) {
            id = null;
            if (null == tmp.turn_id) {
              id = null;
              if (0 === tmp.steps.length) {
                id = tmp.id;
              }
            }
          }
        }
      }
      const found = value.filter((id) => id.id !== closure_1_0 && id.in_reply_to !== tmp && id.id !== id);
      if (found.length === value.length) {
        return false;
      } else {
        const result = obj.set(projectId, found);
        if (null != id) {
          recordThinkingTransition(projectId);
        }
      }
    }
  },
  CONJURE_CHAT_SIDE_REPLY: function handleChatSideReply(inReplyTo) {
    let content;
    let id;
    let projectId;
    let timestamp;
    ({ projectId, id } = inReplyTo);
    inReplyTo = inReplyTo.inReplyTo;
    ({ content, timestamp } = inReplyTo);
    const value = map.get(projectId);
    if (null == value) {
      return false;
    } else if (value.some((id) => id.id === id)) {
      return false;
    } else {
      const obj3 = { ts: timestamp, id };
      const obj2 = conjureChatHistory;
      const newMessageResult = obj2.newMessage("assistant", content, obj3);
      newMessageResult.kind = "side_reply";
      newMessageResult.in_reply_to = inReplyTo;
      const findIndexResult = value.findIndex((id) => id.id === inReplyTo);
      if (-1 !== findIndexResult) {
        let sum;
        const disposition = value[findIndexResult].disposition;
        if (null != disposition) {
          newMessageResult.acknowledges = disposition;
        }
        let tmp9 = "answered" === disposition;
        if (tmp9) {
          let everyResult = null != tmp10 && "assistant" === tmp10.role && null == tmp10.turn_id;
          if (everyResult) {
            const steps = tmp10.steps;
            everyResult = steps.every(f108785);
          }
          if (everyResult) {
            const tmp2Result = conjureChatTurns;
            everyResult = !tmp2Result.isOutsideTurn(tmp10);
          }
          if (everyResult) {
            const tmp2Result2 = conjureChatTurns;
            everyResult = !tmp2Result2.turnSettled(tmp10);
          }
          tmp9 = everyResult;
        }
        const items = [];
        set = map.set;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, value.slice(0, findIndexResult + 1), 0);
        items[arraySpreadResult] = newMessageResult;
        const slice = value.slice;
        if (tmp9) {
          sum = findIndexResult + 2;
        } else {
          sum = findIndexResult + 1;
        }
        const sum1 = arraySpreadResult + 1;
        HermesBuiltin.arraySpread(items, slice(sum), sum1);
        const result = set(projectId, items);
        if (tmp9) {
          recordThinkingTransition(projectId);
        }
      } else {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, value, 0)] = newMessageResult;
        const result1 = obj.set(projectId, items1);
      }
    }
  },
  CONJURE_CHAT_PUBLISH_NOTICE: function handleChatPublishNotice(arg0) {
    let content;
    let finished_at;
    let id;
    let projectId;
    let publishNotice;
    let timestamp;
    ({ projectId, id } = arg0);
    let obj = map;
    ({ content, timestamp, publishNotice } = arg0);
    const value = map.get(projectId);
    if (null == value) {
      return false;
    } else if (value.some((id) => id.id === id)) {
      return false;
    } else {
      const obj3 = { ts: timestamp, id };
      const obj2 = id(10737);
      const newMessageResult = obj2.newMessage("assistant", content, obj3);
      newMessageResult.kind = "publish_notice";
      newMessageResult.publishNotice = publishNotice;
      newMessageResult.finished = true;
      const findLastIndexResult = value.findLastIndex((role) => {
        let tmp = "assistant" === role.role;
        if (tmp) {
          const obj = id(dependencyMap[2]);
          tmp = !obj.isOutsideTurn(role);
        }
        return tmp;
      });
      let tmp6 = null;
      if (-1 !== findLastIndexResult) {
        tmp6 = null;
        const tmp2Result = id(10735);
        if (!tmp2Result.turnSettled(value[findLastIndexResult])) {
          tmp6 = value[findLastIndexResult];
        }
      }
      if (null != tmp6) {
        if (0 !== tmp6.steps.length) {
          let obj6;
          const items = [, , ];
          set2 = obj.set;
          const arraySpreadResult = HermesBuiltin.arraySpread(items, value.slice(0, findLastIndexResult), 0);
          const obj4 = { continued: true, finished_at };
          const merged = Object.assign(tmp6);
          finished_at = tmp6.finished_at;
          if (finished_at == null) {
            const _Date = Date;
            finished_at = Date.now();
          }
          items[arraySpreadResult] = obj4;
          const arraySpreadResult4 = HermesBuiltin.arraySpread(items, value.slice(findLastIndexResult + 1), arraySpreadResult + 1);
          items[arraySpreadResult4] = newMessageResult;
          const newMessage = tmp2(10737).newMessage;
          id(10737);
          if (null != tmp6.turn_id) {
            obj6 = { turnId: tmp6.turn_id };
            const obj5 = { turnId: tmp6.turn_id };
          } else {
            obj6 = {};
          }
          const sum = arraySpreadResult4 + 1;
          items[sum] = newMessage("assistant", "", obj6);
          set2(projectId, items);
        } else {
          const items1 = [, ];
          set = obj.set;
          const arraySpreadResult5 = HermesBuiltin.arraySpread(items1, value.slice(0, findLastIndexResult), 0);
          const arraySpreadResult6 = HermesBuiltin.arraySpread(items1, value.slice(findLastIndexResult + 1), arraySpreadResult5);
          items1[arraySpreadResult6] = newMessageResult;
          items1[arraySpreadResult6 + 1] = tmp6;
          const result = set(projectId, items1);
        }
      } else {
        const items2 = [];
        items2[HermesBuiltin.arraySpread(items2, value, 0)] = newMessageResult;
        const result1 = obj.set(projectId, items2);
      }
    }
  },
  CONJURE_CHAT_PROJECT_EVENT: function handleChatProjectEvent(arg0) {
    let event;
    let projectId;
    ({ projectId, event } = arg0);
    const value = map.get(projectId);
    const obj = map;
    if (null == value) {
      return false;
    } else if (value.some((id) => id.id === event.id)) {
      return false;
    } else {
      const obj2 = { ts: null, id: null };
      ({ ts: obj4.ts, id: obj4.id } = event);
      const obj3 = conjureChatHistory;
      const newMessageResult = obj3.newMessage("assistant", "", obj2);
      newMessageResult.kind = "project_event";
      newMessageResult.projectEvent = event;
      newMessageResult.finished = true;
      const items = [];
      items[HermesBuiltin.arraySpread(items, value, 0)] = newMessageResult;
      const result = obj.set(projectId, items);
    }
  },
  CONJURE_CHAT_CONTEXT_SWITCH: function handleChatContextSwitch(arg0) {
    let contextSwitch;
    let projectId;
    ({ projectId, contextSwitch } = arg0);
    const value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const findIndexResult = value.findIndex((contextSwitch) => {
        contextSwitch = contextSwitch.contextSwitch;
        let id;
        if (contextSwitch != null) {
          id = contextSwitch.id;
        }
        return id === contextSwitch.id;
      });
      if ("undone" === contextSwitch.status) {
        if (-1 !== findIndexResult) {
          const items = [];
          set3 = map.set;
          const arraySpreadResult = HermesBuiltin.arraySpread(items, value.slice(0, findIndexResult), 0);
          HermesBuiltin.arraySpread(items, value.slice(findIndexResult + 1), arraySpreadResult);
          set3(projectId, items);
        }
        return -1 !== findIndexResult;
      } else if (-1 === findIndexResult) {
        if ("active" !== contextSwitch.status) {
          if ("reverted" !== contextSwitch.status) {
            return false;
          }
        }
        const obj2 = { ts: null, id: null };
        ({ ts: obj4.ts, id: obj4.id } = contextSwitch);
        const obj3 = conjureChatHistory;
        const newMessageResult = obj3.newMessage("assistant", "", obj2);
        newMessageResult.kind = "context_boundary";
        newMessageResult.contextSwitch = contextSwitch;
        newMessageResult.finished = true;
        let num = -1;
        if ("reverted" !== contextSwitch.status) {
          num = value.findIndex((role) => "user" === role.role && role.id === contextSwitch.message_id);
        }
        if (-1 !== num) {
          const items1 = [];
          set2 = map.set;
          const arraySpreadResult5 = HermesBuiltin.arraySpread(items1, value.slice(0, num), 0);
          items1[arraySpreadResult5] = newMessageResult;
          HermesBuiltin.arraySpread(items1, value.slice(num), arraySpreadResult5 + 1);
          set2(projectId, items1);
        } else {
          const items2 = [];
          items2[HermesBuiltin.arraySpread(items2, value, 0)] = newMessageResult;
          const result = obj.set(projectId, items2);
        }
      } else {
        const obj6 = { contextSwitch };
        set = map.set;
        const replaceAt = conjureChatTurns.replaceAt;
        conjureChatTurns;
        const merged = Object.assign(value[findIndexResult]);
        const result1 = set(projectId, replaceAt(value, findIndexResult, obj6));
      }
    }
  },
  CONJURE_CHAT_STEP_APPEND: function handleChatStepAppend(turnId) {
    let projectId;
    let step;
    ({ projectId, step } = turnId);
    turnId = turnId.turnId;
    let obj = map;
    const value = map.get(projectId);
    let tmp2 = "preview_ready" !== step.kind;
    if (!tmp2) {
      tmp2 = null != turnId;
    }
    if (!tmp2) {
      let tmp5 = null != value;
      if (tmp5) {
        let obj2 = step(10735);
        tmp5 = -1 !== obj2.resolveTurnIndex(value, undefined);
      }
      tmp2 = tmp5;
    }
    if (tmp2) {
      patchTurn(projectId, turnId, (steps) => {
        const obj = conjureStepTimeline;
        const recordStepResult = obj.recordStep(steps.steps, step);
        let tmp2 = steps;
        if (recordStepResult !== steps.steps) {
          const obj2 = { steps: recordStepResult };
          const merged = Object.assign(steps);
          tmp2 = obj2;
        }
        return tmp2;
      });
      const tmp10 = obj.get(projectId) !== value;
      if (tmp10) {
        recordThinkingTransition(projectId);
      }
      tmp2 = tmp10;
    }
    return tmp2;
  },
  CONJURE_CHAT_TURN_FINISHED: function handleChatTurnFinished(turnId) {
    let projectId;
    ({ projectId, summary: require } = turnId);
    let obj = map;
    turnId = turnId.turnId;
    const value = map.get(projectId);
    const someResult = null != value && value.some((disposition) => null != disposition.disposition);
    if (someResult) {
      const result = obj.set(projectId, value.map((disposition) => {
        if (null == disposition.disposition) {
          return disposition;
        } else {
          disposition = disposition.disposition;
          return _objectWithoutProperties(disposition, closure_1_3);
        }
      }));
    }
    patchTurn(projectId, turnId, (content) => {
      let str;
      const obj = { finished: true, finished_at: Date.now(), provisionalTodo: undefined, content: str };
      const merged = Object.assign(content);
      if ("" !== content.content) {
        str = content.content;
      } else {
        str = require;
        if (require == null) {
          str = "";
        }
      }
      return obj;
    });
    const obj2 = conjureChatTurns;
    if (!obj2.hasOpenTurn(obj.get(projectId))) {
      map4.delete(projectId);
      set.delete(projectId);
    }
    set1.delete(projectId);
    recordThinkingTransition(projectId);
  },
  CONJURE_CHAT_INTERRUPTED: function handleChatInterrupted(projectId) {
    projectId = projectId.projectId;
    const value = map.get(projectId);
    const obj = map;
    if (null == value) {
      return false;
    } else {
      const obj2 = conjureChatHistory;
      const newMessageResult = obj2.newMessage("assistant", "");
      newMessageResult.finished = true;
      const _Date = Date;
      newMessageResult.finished_at = Date.now();
      newMessageResult.interrupted = true;
      const items = [];
      items[HermesBuiltin.arraySpread(items, value, 0)] = newMessageResult;
      const result = obj.set(projectId, items);
    }
  },
  CONJURE_CHAT_STOP_REQUESTED: function handleChatStopRequested(projectId) {
    projectId = projectId.projectId;
    let obj = map;
    const value = map.get(projectId);
    let tmp = null != value;
    if (tmp) {
      const someResult = value.some(conjureChatTurns.stoppable);
      if (someResult) {
        const result = obj.set(projectId, value.map((item) => {
          let tmp = item;
          const obj = conjureChatTurns;
          if (obj.stoppable(item)) {
            const obj2 = { stopRequested: true };
            const merged = Object.assign(item);
            tmp = obj2;
          }
          return tmp;
        }));
      }
      tmp = someResult;
    }
    return tmp;
  },
  CONJURE_CHAT_PROVISIONAL_TODO: function handleChatProvisionalTodo(projectId) {
    let text;
    let turnId;
    projectId = projectId.projectId;
    ({ turnId, text } = projectId);
    const value = map.get(projectId);
    let flag = false;
    const tmp = map;
    if (null != value) {
      const obj = conjureChatTurns;
      const findTurnSegmentResult = obj.findTurnSegment(value, turnId);
      let flag2 = -1 !== findTurnSegmentResult;
      if (flag2) {
        const obj2 = { provisionalTodo: text };
        set = tmp.set;
        const replaceAt = tmp3(10735).replaceAt;
        conjureChatTurns;
        const merged = Object.assign(value[findTurnSegmentResult]);
        const result = set(projectId, replaceAt(value, findTurnSegmentResult, obj2));
        flag2 = true;
      }
      flag = flag2;
    }
    return flag ? undefined : false;
  },
  CONJURE_CHAT_SOURCE_CHECKPOINT: function handleChatSourceCheckpoint(arg0) {
    let _undefined;
    let projectId;
    ({ projectId, turnId: require, sourceSha: importDefault } = arg0);
    let obj = map;
    const value = map.get(projectId);
    let c2 = value;
    if (null == value) {
      return false;
    } else {
      const mapped = value.map((role) => {
        let tmp = role;
        if ("assistant" === role.role) {
          tmp = role;
          if (role.sourceSha !== importDefault) {
            let tmp6 = role;
            const obj = conjureChatTurns;
            if (obj.isSegmentOfTurn(role, require)) {
              const obj2 = { sourceSha: tmp2 };
              const merged = Object.assign(role);
              tmp6 = obj2;
            }
            tmp = tmp6;
          }
        }
        return tmp;
      });
      if (mapped.every((item, index) => item === c2[index])) {
        return false;
      } else {
        const result = obj.set(projectId, mapped);
      }
    }
  },
  CONJURE_CHAT_THINKING_SET: function handleChatThinkingSet(arg0) {
    let activity;
    let projectId;
    ({ projectId, activity } = arg0);
    if (null == activity) {
      const tmp4 = map4.delete(projectId) && undefined;
      return tmp4;
    } else {
      const value = map4.get(projectId);
      const obj = map4;
      if (null != value) {
        if (activity.session === value.session) {
          if (activity.seq <= value.seq) {
            return false;
          }
        }
      }
      const result = obj.set(projectId, activity);
    }
  },
  CONJURE_CHAT_COMPACTING_SET: function handleChatCompactingSet(arg0) {
    let compacting;
    let projectId;
    ({ projectId, compacting } = arg0);
    if (compacting === set.has(projectId)) {
      return false;
    } else if (compacting) {
      set.add(projectId);
    } else {
      set.delete(projectId);
    }
  },
  CONJURE_CHAT_SAVING_SET: function handleChatSavingSet(arg0) {
    let projectId;
    let saving;
    ({ projectId, saving } = arg0);
    if (saving === set1.has(projectId)) {
      return false;
    } else if (saving) {
      set1.add(projectId);
    } else {
      set1.delete(projectId);
    }
  },
  CONJURE_CHAT_USAGE_SET: function handleChatUsageSet(projectId) {
    const result = map3.set(projectId.projectId, projectId.project);
  },
  CONJURE_CHAT_TURN_PATCH: function handleChatTurnPatch(turnId) {
    let closure_129_0;
    let projectId;
    ({ projectId, patch: closure_129_0 } = turnId);
    patchTurn(projectId, turnId.turnId, (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(closure_1_0);
      if ("todos" in closure_1_0) {
        obj.provisionalTodo = undefined;
      }
      return obj;
    });
    recordThinkingTransition(projectId);
  },
  CONJURE_CHAT_CONN_STATE: function handleChatConnState(arg0) {
    let connState;
    let projectId;
    ({ projectId, connState } = arg0);
    if ("closed" !== connState) {
      if ("failed" !== connState) {
        return false;
      }
    }
    const deleteResult = set.delete(projectId);
    const deleteResult1 = set1.delete(projectId);
    let deleteResult2 = map4.delete(projectId);
    let obj = map;
    const value = map.get(projectId);
    if (null != value) {
      if (value.some((role) => {
        let tmp = "assistant" === role.role;
        if (tmp) {
          const obj = conjureChatTurns;
          tmp = !obj.turnSettled(role);
        }
        return tmp;
      })) {
        const result = obj.set(projectId, value.map((disposition) => {
          let intl;
          let items;
          if (null != disposition.disposition) {
            disposition = disposition.disposition;
            return _objectWithoutProperties(disposition, closure_1_4);
          } else {
            let tmp8 = disposition;
            if ("assistant" === disposition.role) {
              tmp8 = disposition;
              const obj3 = conjureChatTurns;
              const tmp11 = require;
              if (!obj3.turnSettled(disposition)) {
                const obj = { provisionalTodo: undefined, steps: items };
                const merged = Object.assign(disposition);
                items = [];
                const obj2 = { type: "step", kind: "terminal_error", message: intl.string(_modDef3863.lmiuFX) };
                const arraySpreadResult = HermesBuiltin.arraySpread(items, disposition.steps, 0);
                intl = tmp11(tmp12[7]).intl;
                items[arraySpreadResult] = obj2;
                tmp8 = obj;
              }
            }
            return tmp8;
          }
        }));
        recordThinkingTransition(projectId);
      }
    }
    if (!deleteResult2) {
      deleteResult2 = deleteResult;
    }
    if (!deleteResult2) {
      deleteResult2 = deleteResult1;
    }
    return deleteResult2 && undefined;
  },
  CONJURE_PROJECT_CREATE_SUCCESS: function handleProjectCreateSuccess(project) {
    project = project.project;
    const obj = map5;
    if (map5.has(project.id)) {
      return false;
    } else {
      const result = obj.set(project.id, null);
    }
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    if (!purgeProject(projectId.projectId)) {
      return false;
    }
  },
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess() {
    const items = [...map.keys(), ...map5.keys(), ...map1.keys(), ...map2.keys(), ...map3.keys()];
    let flag = false;
    set = new Set(items);
    const iter = set[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = null == ConjureProjectStore.getProject(nextResult);
      if (tmp5) {
        tmp5 = purgeProject(tmp3);
      }
      if (tmp5) {
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  }
};
const conjureChatStore = new ConjureChatStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatStore.tsx");

export default conjureChatStore;
export const getOlderHistoryCursor = function getOlderHistoryCursor(arg0) {
  let value = map5.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
