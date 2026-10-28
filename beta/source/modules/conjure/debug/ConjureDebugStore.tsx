// Module ID: 10736
// Function ID: 10737
// Name: ConjureDebugStore
// Dependencies: [504, 10737, 10738, 584, 2]

// Module 10736 (ConjureDebugStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjurePerfTraceBatches from "ConjurePerfTraceBatches" /* 10737 */;
import ConjureUsageTypes from "ConjureUsageTypes" /* 10738 */;
import size from "module_2" /* 2 */;

let set, set2, set3, set4;

let closure_2 = { pending: false, info: null, error: null, observedAt: null };
let closure_3 = { phase: "idle" };
let closure_4 = [];
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
const map5 = new Map();
const map6 = new Map();
const map7 = new Map();
const map8 = new Map();
const map9 = new Map();
const map10 = new Map();
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
    let value = map7.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getLastTurnUsage(projectId) {
    let value = map9.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getLastCompactionDecline(projectId) {
    let value = map8.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getForceCompactionState(arg0) {
    let str = map2.get(arg0);
    if (str == null) {
      str = "idle";
    }
    return str;
  }
  getSandboxRestartState(arg0) {
    let str = map3.get(arg0);
    if (str == null) {
      str = "idle";
    }
    return str;
  }
  getGitInfoState(arg0) {
    let value = map4.get(arg0);
    if (value == null) {
      value = closure_2;
    }
    return value;
  }
  getRestartAgentState(arg0) {
    let value = map5.get(arg0);
    if (value == null) {
      value = closure_3;
    }
    return value;
  }
  getInstancePollRequestedAt(arg0) {
    let value = map6.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getTimingTraces(projectId) {
    let value = map10.get(projectId);
    if (value == null) {
      value = closure_4;
    }
    return value;
  }
  getTimingTrace(projectId, traceId) {
    let closure_0 = traceId;
    const value = map10.get(projectId);
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
                    if (0 === map8.size) {
                      if (0 === map9.size) {
                        if (0 === map10.size) {
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
    }
    obj.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    map5.clear();
    map6.clear();
    map7.clear();
    map8.clear();
    map9.clear();
    map10.clear();
  },
  CONJURE_DEBUG_STATUS_REQUESTED: function handleStatusRequested(projectId) {
    const result = map1.set(projectId.projectId, "loading");
  },
  CONJURE_CHAT_CONN_STATE: function handleConnState(projectId) {
    let date;
    let date1;
    let date2;
    projectId = projectId.projectId;
    if ("open" === projectId.connState) {
      return false;
    } else {
      let tmp29 = "pending" === map2.get(projectId);
      const tmp31 = map2;
      if (tmp29) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const obj = { outcome: "failed", reason: "Connection lost before the worker answered", observedAt: date.toISOString() };
        set = tmp31.set;
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
      const value = map4.get(projectId);
      let pending;
      const tmp11 = map4;
      if (value != null) {
        pending = value.pending;
      }
      if (true === pending) {
        const obj3 = { pending: false, error: "Connection lost before the worker answered" };
        set3 = tmp11.set;
        const merged = Object.assign(value);
        set3(projectId, obj3);
      }
      map6.delete(projectId);
      const value2 = map5.get(projectId);
      let phase;
      const tmp22 = map5;
      if (value2 != null) {
        phase = value2.phase;
      }
      if ("pending" === phase) {
        const _Date3 = Date;
        const self5 = this;
        const self6 = this;
        const obj4 = { phase: "failed", reason: "Connection lost before the worker answered", observedAt: date2.toISOString() };
        set4 = tmp22.set;
        date2 = new Date();
        set4(projectId, obj4);
      }
      if (!tmp29) {
        tmp29 = tmp5;
      }
      if (!tmp29) {
        tmp29 = tmp9;
      }
      if (!tmp29) {
        tmp29 = tmp15;
      }
      if (!tmp29) {
        tmp29 = tmp25;
      }
      return tmp29 && undefined;
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
    const result = map7.set(tokensBefore.projectId, obj);
  },
  CONJURE_DEBUG_COMPACTION_DECLINED: function handleCompactionDeclined(promptCeiling) {
    const obj = { promptCeiling: promptCeiling.promptCeiling, threshold: promptCeiling.threshold, projected: promptCeiling.projected, headroom: promptCeiling.headroom, retainedMessages: promptCeiling.retainedMessages, observedAt: promptCeiling.observedAt };
    const result = map8.set(promptCeiling.projectId, obj);
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
  CONJURE_DEBUG_GIT_INFO_REQUESTED: function handleGitInfoRequested(projectId) {
    projectId = projectId.projectId;
    set = map4.set;
    let value = map4.get(projectId);
    if (value == null) {
      value = closure_2;
    }
    const obj = { pending: true };
    const merged = Object.assign(value);
    const result = set(projectId, obj);
  },
  CONJURE_DEBUG_GIT_INFO_RESULT: function handleGitInfoResult(arg0) {
    let error;
    let info;
    let instanceSince;
    let obj;
    let observedAt;
    let projectId;
    ({ projectId, info, error, instanceSince, observedAt } = arg0);
    let value = map4.get(projectId);
    const tmp = map4;
    if (value == null) {
      value = closure_2;
    }
    set = tmp.set;
    if (null != info) {
      obj = { pending: false, info, error: null, observedAt };
      const obj2 = { pending: false, info, error: null, observedAt };
    } else {
      obj = { pending: false, error, observedAt };
      const merged = Object.assign(value);
      if (error == null) {
        error = "No answer";
      }
    }
    const result = set(projectId, obj);
    const value2 = map5.get(projectId);
    let phase;
    const obj3 = map5;
    if (value2 != null) {
      phase = value2.phase;
    }
    const tmp9 = "restarting" === phase && null != instanceSince && instanceSince !== value2.instanceSince;
    if (tmp9) {
      const obj4 = { phase: "restarted", instanceSince, observedAt };
      const result1 = obj3.set(projectId, obj4);
    }
  },
  CONJURE_DEBUG_INSTANCE_POLL_REQUESTED: function handleInstancePollRequested(projectId) {
    const result = map6.set(projectId.projectId, projectId.requestedAt);
    return false;
  },
  CONJURE_DEBUG_INSTANCE_SEEN: function handleInstanceSeen(observedAt) {
    let instanceSince;
    let projectId;
    ({ projectId, instanceSince } = observedAt);
    observedAt = observedAt.observedAt;
    map6.delete(projectId);
    const value = map5.get(projectId);
    let phase;
    const obj = map5;
    if (value != null) {
      phase = value.phase;
    }
    const tmp4 = "restarting" === phase && null != instanceSince && instanceSince !== value.instanceSince;
    if (tmp4) {
      const obj2 = { phase: "restarted", instanceSince, observedAt };
      const result = obj.set(projectId, obj2);
    }
  },
  CONJURE_RESTART_AGENT_REQUESTED: function handleRestartAgentRequested(projectId) {
    const result = map5.set(projectId.projectId, { phase: "pending" });
  },
  CONJURE_RESTART_AGENT_RESULT: function handleRestartAgentResult(arg0) {
    let instanceSince;
    let observedAt;
    let outcome;
    let phase;
    let projectId;
    let reason;
    ({ projectId, outcome, reason, instanceSince, observedAt } = arg0);
    const value = map5.get(projectId);
    if (value != null) {
      phase = value.phase;
    }
    if ("restarting" === outcome) {
      if ("pending" !== phase) {
        return false;
      } else {
        set3 = map5.set;
        if (instanceSince == null) {
          instanceSince = null;
        }
        const _Date = Date;
        const obj2 = { phase: "restarting", instanceSince, startedAt: Date.parse(observedAt) };
        set3(projectId, obj2);
      }
    } else if ("timed_out" === outcome) {
      if ("restarting" !== phase) {
        return false;
      } else {
        set2 = map5.set;
        if (reason == null) {
          reason = "No new agent instance answered in time";
        }
        const obj3 = { phase: "failed", reason, observedAt };
        set2(projectId, obj3);
      }
    } else {
      let str2 = reason;
      set = map5.set;
      if (reason == null) {
        str2 = "no reason given";
      }
      const obj = { phase: "failed", reason: str2, observedAt };
      const result = set(projectId, obj);
    }
  },
  CONJURE_DEBUG_TIMING_TRACE: function handleTimingTrace(live) {
    let batch;
    let projectId;
    ({ projectId, batch } = live);
    let found;
    live = live.live;
    let items = map10.get(projectId);
    const obj = map10;
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
    const obj = ConjureUsageTypes;
    if (0 === obj.runeCount(turn.total)) {
      return false;
    } else {
      const result = map9.set(projectId, turn);
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
    map8.delete(projectId);
    map9.delete(projectId);
    map10.delete(projectId);
  }
};
const conjureDebugStore = new ConjureDebugStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugStore.tsx");

export default conjureDebugStore;
