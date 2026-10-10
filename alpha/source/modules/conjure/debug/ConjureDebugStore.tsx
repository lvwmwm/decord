// Module ID: 13214
// Function ID: 13215
// Name: ConjureDebugStore
// Dependencies: [504, 13215, 6946, 584, 2]

// Module 13214 (ConjureDebugStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureTypes from "ConjureTypes" /* 6946 */;
import ConjurePerfTraceBatches from "ConjurePerfTraceBatches" /* 13215 */;
import size from "module_2" /* 2 */;

let set, set2;

let closure_2 = [];
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
const map5 = new Map();
const map6 = new Map();
const map7 = new Map();
const Store = get_initializedDefault.Store;
class ConjureDebugStore extends Store {
  getStatus(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getFetchState(arg0) {
    let str = map1.get(arg0);
    if (str == null) {
      str = "idle";
    }
    return str;
  }
  getLastCompaction(projectId) {
    let value = map4.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getLastTurnUsage(projectId) {
    let value = map6.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getLastCompactionDecline(projectId) {
    let value = map5.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getForceCompactionState(projectId) {
    let str = map2.get(projectId);
    if (str == null) {
      str = "idle";
    }
    return str;
  }
  getSandboxRestartState(projectId) {
    let str = map3.get(projectId);
    if (str == null) {
      str = "idle";
    }
    return str;
  }
  getTimingTraces(projectId) {
    let value = map7.get(projectId);
    if (value == null) {
      value = closure_2;
    }
    return value;
  }
  getTimingTrace(projectId, traceId) {
    let closure_0 = traceId;
    const value = map7.get(projectId);
    let found;
    if (value != null) {
      found = value.find((id) => id.id === closure_0);
    }
    if (found == null) {
      found = null;
    }
    return found;
  }
}
const prototype = ConjureDebugStore.prototype;
let obj = {
  LOGOUT: function handleLogout() {
    const obj = map;
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === map4.size) {
              if (0 === map5.size) {
                if (0 === map6.size) {
                  if (0 === map7.size) {
                    return false;
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
    map5.clear();
    map6.clear();
    map7.clear();
  },
  CONJURE_DEBUG_STATUS_REQUESTED: function handleStatusRequested(projectId) {
    const result = map1.set(projectId.projectId, "loading");
  },
  CONJURE_CHAT_CONN_STATE: function handleConnState(projectId) {
    let date;
    let date1;
    projectId = projectId.projectId;
    if ("open" === projectId.connState) {
      return false;
    } else {
      let tmp11 = "pending" === map2.get(projectId);
      const tmp13 = map2;
      if (tmp11) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const obj = { outcome: "failed", reason: "Connection lost before the worker answered", observedAt: date.toISOString() };
        set = tmp13.set;
        date = new Date();
        const result = set(projectId, obj);
      }
      const tmp5 = "pending" === map3.get(projectId);
      const tmp4 = map3;
      if (tmp5) {
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const obj2 = { outcome: "failed", reason: "Connection lost before the worker answered", observedAt: date1.toISOString() };
        set2 = tmp4.set;
        date1 = new Date();
        set2(projectId, obj2);
      }
      const tmp9 = "loading" === map1.get(projectId);
      const obj5 = map1;
      if (tmp9) {
        const result1 = obj5.set(projectId, "failed");
      }
      if (!tmp11) {
        tmp11 = tmp5;
      }
      if (!tmp11) {
        tmp11 = tmp9;
      }
      return tmp11 && undefined;
    }
  },
  CONJURE_DEBUG_STATUS_SET: function handleStatusSet(failed) {
    let projectId;
    let status;
    ({ projectId, status } = failed);
    if (!failed.failed) {
      if (null != status) {
        const result = map.set(projectId, status);
        const result1 = map1.set(projectId, "loaded");
      }
    }
    const result2 = map1.set(projectId, "failed");
  },
  CONJURE_DEBUG_COMPACTION_REPORT: function handleCompactionReport(tokensBefore) {
    const obj = { tokensBefore: tokensBefore.tokensBefore, tokensAfter: tokensBefore.tokensAfter, retainedMessages: tokensBefore.retainedMessages, promptCeiling: tokensBefore.promptCeiling, observedAt: tokensBefore.observedAt };
    const result = map4.set(tokensBefore.projectId, obj);
  },
  CONJURE_DEBUG_COMPACTION_DECLINED: function handleCompactionDeclined(promptCeiling) {
    const obj = { promptCeiling: promptCeiling.promptCeiling, threshold: promptCeiling.threshold, projected: promptCeiling.projected, headroom: promptCeiling.headroom, retainedMessages: promptCeiling.retainedMessages, observedAt: promptCeiling.observedAt };
    const result = map5.set(promptCeiling.projectId, obj);
  },
  CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED: function handleForceCompactionRequested(projectId) {
    const result = map2.set(projectId.projectId, "pending");
  },
  CONJURE_DEBUG_FORCE_COMPACTION_RESULT: function handleForceCompactionResult(outcome) {
    const projectId = outcome.projectId;
    const obj = { outcome: outcome.outcome, reason: outcome.reason, observedAt: outcome.observedAt };
    set = map2.set;
    const tmp2 = true === outcome.pendingTurn ? { pendingTurn: true } : {};
    const merged = Object.assign(tmp2);
    const result = set(projectId, obj);
  },
  CONJURE_SANDBOX_RESTART_REQUESTED: function handleSandboxRestartRequested(projectId) {
    const result = map3.set(projectId.projectId, "pending");
  },
  CONJURE_SANDBOX_RESTART_RESULT: function handleSandboxRestartResult(outcome) {
    const obj = { outcome: outcome.outcome, reason: outcome.reason, observedAt: outcome.observedAt };
    const result = map3.set(outcome.projectId, obj);
  },
  CONJURE_DEBUG_TIMING_TRACE: function handleTimingTrace(live) {
    let batch;
    let projectId;
    ({ projectId, batch } = live);
    let found;
    live = live.live;
    let items = map7.get(projectId);
    const obj = map7;
    if (items == null) {
      items = [];
    }
    found = items.find((id) => id.id === batch.trace_id);
    if (found == null) {
      found = null;
    }
    const found1 = items.filter((item) => item !== found);
    const concat = found1.concat;
    const obj2 = ConjurePerfTraceBatches;
    const combined = concat(obj2.applyTimingTraceBatch(found, batch, live));
    const sorted = combined.sort((started_at, started_at2) => started_at2.started_at + started_at2.as_of - (started_at.started_at + started_at.as_of));
    const substr = sorted.slice(0, 100);
    const result = obj.set(projectId, substr.sort((started_at, started_at2) => started_at.started_at - started_at2.started_at));
  },
  CONJURE_CHAT_USAGE_SET: function handleChatUsageSet(turn) {
    turn = turn.turn;
    const projectId = turn.projectId;
    const obj = ConjureTypes;
    if (0 === obj.runeCount(turn.total)) {
      return false;
    } else {
      const result = map6.set(projectId, turn);
    }
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    map.delete(projectId);
    map1.delete(projectId);
    map2.delete(projectId);
    map3.delete(projectId);
    map4.delete(projectId);
    map5.delete(projectId);
    map6.delete(projectId);
    map7.delete(projectId);
  }
};
const conjureDebugStore = new ConjureDebugStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugStore.tsx");

export default conjureDebugStore;
